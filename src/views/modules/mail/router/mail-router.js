import {memo,Suspense,lazy} from 'react'

//Router
import {Switch,Route} from 'react-router-dom'

//Mail
const Emailcompose = lazy(() => import('../pages/email-compose'))
const Email = lazy(() => import('../pages/email'))


const Mailrouter = memo(() => {
    return (
        <Suspense fallback={<div className="react-load"></div>}>
            <Switch>
                    {/* mail */}
                    <Route path="/mail/email-compose" exact component={Emailcompose}></Route>
                    <Route path="/mail/email"         exact component={Email}></Route>
            </Switch>
        </Suspense>
    )
}
)

Mailrouter.displayName="Mailrouter"
export default Mailrouter
