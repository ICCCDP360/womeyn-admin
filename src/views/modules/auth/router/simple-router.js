import {memo,Suspense,lazy} from 'react'

// router
import {Switch,Route} from 'react-router-dom'

//Auth pro
const Accountdeactivate =  lazy(() => import("../pages/account-deactivate"))
const Authemail =  lazy(() => import("../pages/email"))
const Lockscreen =  lazy(() => import("../pages/lock-screen"))
const Resetpassword =  lazy(() => import("../pages/reset-password"))
const Signin =  lazy(() => import("../pages/sign-in"))
const Signup =  lazy(() => import("../pages/sign-up"))
const Twofactor =  lazy(() => import("../pages/two-factor"))
const SignIn =  lazy(() => import("../pages/simple/sign-in"))
const SignUp =  lazy(() => import("../pages/simple/sign-up"))


const Simplerouter = memo(() => {
    return (
        <Suspense fallback={<div className="react-load"></div>}>
           <Switch>

            {/* auth pro */}
            <Route path="/auth/account-deactivate"  exact component={Accountdeactivate}></Route>
            <Route path="/auth/email"  exact component={Authemail}></Route>
            <Route path="/auth/lock-screen"  exact component={Lockscreen}></Route>
            <Route path="/auth/reset-password"  exact component={Resetpassword}></Route>
            <Route path="/auth/sign-in"  exact component={Signin}></Route>
            <Route path="/auth/sign-up"  exact component={Signup}></Route>
            <Route path="/auth/two-factor"  exact component={Twofactor}></Route> 
            <Route path="/auth/simple/sign-in"  exact component={SignIn}></Route>
            <Route path="/auth/simple/sign-up"  exact component={SignUp}></Route>
            </Switch>
        </Suspense>
    )
}
)

Simplerouter.displayName="Simplerouter"
export default Simplerouter
