import { Mic, Paperclip, Send } from "lucide-react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import sendMessage from "../features/sendMessage.js"
import { addMessage, setMessages } from "../redux/messageSlice.js"


const ChatInput = () => {

    const [value, setValue] = useState("")
    const { selectedConversation } = useSelector(state => state.conversation)
    const { messages } = useSelector(state => state.message)
    const dispatch = useDispatch()

    const handleSendMessage = async () => {
        const payload = {
            prompt: value,
            conversationId: selectedConversation?._id
        }

        dispatch(addMessage(...messages, { role: "user", content: value.trim() }))
        setValue("")

        const data = await sendMessage(payload)

        dispatch(addMessage(...messages, { role: "assistant", content: data }))

        console.log(data)
    }

    return (
        <div className='w-full overflow-hidden px-3 md:px-5 py-4 border-t border-white/[0.06] bg-[#101002'>
            <div className="flex flex-col gap-2 bg-black/[0.02] border border-white/[0.05] rounded-2xl px-4 pt-3.5 pb-3">
                <textarea
                    className="w-full bg-transparent outline-none resize-none text-[14px] text-slate-200 placeholder:text-slate-400 leading-relaxed [scrollbar-width:none] [&::-webkit-scrollbar]:hidden disabled:opacity-50"
                    placeholder="Ask Anything..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    rows={3}
                />
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <button className="flex items-center justify-center w-8 h-8 rounded-2xl text-slate-400 hover:text-slate-200 hover:bg-white/[0.05] border border-transparent hover:border-white/[0.06] transition-all duration-150 bg-transparent cursor-pointer">
                            <Paperclip size={16} />
                        </button>
                        <button className="flex items-center justify-center w-8 h-8 rounded-2xl text-slate-400 hover:text-slate-200 hover:bg-white/[0.05] border border-transparent hover:border-white/[0.06] transition-all duration-150 bg-transparent cursor-pointer">
                            <Mic size={16} />
                        </button>
                    </div>

                    <button
                        onClick={handleSendMessage}
                        disabled={!value}
                        className={`flex items-center justify-center w-8 h-8 rounded-xl border-none cursor-pointer transition-all duration-150 ${value.trim() ? "bg-linear-to-br from-blue-500 to-purple-700 hover:opacity-90 text-white" : "bg-white/[0.05] text-slate-400 cursor-not-allowed"}`}>
                        <Send size={16} />
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ChatInput