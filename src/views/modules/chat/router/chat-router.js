import {memo,Suspense,lazy} from 'react'

// Router
import {Switch,Route} from 'react-router-dom'

//Chat
const Chat = lazy(() => import('../pages/chat'))

const Chatrouter = memo((props) => {
    return (
        <Suspense fallback={<div className="react-load"></div>}>
          <Switch>
           {/* chat pro */}
           <Route path="/chat/chat" exact >
             <Chat  show={props.show} />
           </Route>
        </Switch>
      </Suspense>
    )
}
)

Chatrouter.displayName="Chatrouter"
export default Chatrouter
