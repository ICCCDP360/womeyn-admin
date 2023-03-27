import {Suspense,memo,lazy} from 'react'

// Router
import {Switch,Route} from 'react-router-dom'

//Appointment page
const Appointment = lazy(() => import('../pages/appointment'))
const Bookappointment = lazy(() => import('../pages/book-appointment'))
const Doctorvisit = lazy(() => import('../pages/doctor-visit'))

const Appointmentrouter = memo(() => {
    return (
        <Suspense fallback={<div className="react-load"></div>}>
            <Switch>
                {/*  appointment pro */}
                <Route path="/appointment/appointment"       component={Appointment}></Route>
                <Route path="/appointment/book-appointment"  component={Bookappointment}></Route>
                <Route path="/appointment/doctor-visit"     component={Doctorvisit}></Route>
            </Switch>
        </Suspense>
    )
}
)

Appointmentrouter.displayName="Appointmentrouter"
export default Appointmentrouter
