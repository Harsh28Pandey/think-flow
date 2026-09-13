import Nav from './Nav'
import MessageList from './MessageList'
import ChatInput from './ChatInput'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getMessages from '../features/getMessages'
import { setMessages } from '../redux/messageSlice'

const ChatArea = () => {

    const { selectedConversation } = useSelector(state => state.conversation)
    const dispatch = useDispatch()

    useEffect(() => {
        const getMesg = async () => {
            if (selectedConversation) {
                const data = await getMessages(selectedConversation?._id)
                dispatch(setMessages(data))
            }
        }
        getMesg()
    }, [selectedConversation])

    return (
        <div className='flex-1 flex flex-col'>
            <Nav />
            <MessageList />
            <ChatInput />
        </div>
    )
}

export default ChatArea