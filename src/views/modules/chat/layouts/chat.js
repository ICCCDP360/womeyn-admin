import {useState,useEffect,memo,Fragment} from 'react'

// Sidebar
import Chatsidebar from '../components/partials/chat-sidebar'

// Chatrouter
import Chatrouter from '../router/chat-router'

// Scss Chat
import "../../../../assets/modules/chat/scss/chat.scss";


const Chat = memo((props) => {
    useEffect(() =>{
        
        document.getElementsByTagName('html')[0].classList.add('theme-fs-md')
            return () => {
                document.getElementsByTagName('html')[0].classList.remove('theme-fs-md')
            }
        
    })
    const[userName,setuserName] = useState('1')
    return (
        <Fragment>
            <Chatsidebar show={userName} event={setuserName} />
            <main className="main-content">
                <Chatrouter  show={userName}  />
            </main>
        </Fragment>
    )
}
)

Chat.displayName="Chat"
export default Chat
