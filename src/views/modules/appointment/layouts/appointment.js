import {memo,Fragment} from 'react'

// Header
import Headerpro from '../../../../components/partials/pro/headerstyle/header-pro'

// Sidebar
import Appointmentsidebar from '../components/partials/appointment-sidebar'

// Footer
import Footer from '../../../../components/partials/dashboard/footerstyle/footer'

// Router
import Appointmentrouter from '../router/appointment-router'

//SeetingoffCanvas
import SettingOffCanvas from '../../../../components/setting/SettingOffCanvas'

// Import selectors & action from setting store
import * as SettingSelector from '../../../../store/setting/selectors'

// Redux Selector / Action
import { useSelector } from 'react-redux';

// StyleAppointment
import "../../../../assets/modules/appointment/scss/appointment.scss"

const Appointment = memo(() => {
    
    // Selector
    const pageLayout = useSelector(SettingSelector.page_layout)

    return (
        <Fragment>
            <Appointmentsidebar  />
            <main className="main-content">
                <div className="position-relative">
                    <Headerpro />
                </div>
                <div className={`container-fluid content-inner pb-0 ${pageLayout}`} id="page_layout">
                    <Appointmentrouter />
                </div>
                <Footer />
            </main>
            <SettingOffCanvas  />
        </Fragment>
    )
})

Appointment.displayName="Appointment"
export default Appointment
