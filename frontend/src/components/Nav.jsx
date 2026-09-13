import { MessageSquare } from "lucide-react"
import { useSelector } from "react-redux"


const Nav = () => {

    const { selectedConversation } = useSelector(state => state.conversation)
    const { messages } = useSelector(state => state.message)

    return (
        <>
            {selectedConversation && <div className="h-15 flex items-center px-5 gap-2.5 border-b border-white/[0.06] bg-[#101002]">
                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <MessageSquare size={13} className="text-blue-400" />
                </div>
                <div className="text-[14px] font-semibold text-slate-100 tracking-tight">
                    {selectedConversation?.title || "New Chat"}
                </div>
                <div className="text-[10px] font-medium text-slate-600 bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded-full">
                    {messages?.length || 0} Messages
                </div>
            </div>}
        </>
    )
}

export default Nav