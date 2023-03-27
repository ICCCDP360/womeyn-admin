import React from 'react'

//router
import {  useLocation } from 'react-router-dom'

//header
import Headerpro from '../../../../components/partials/pro/headerstyle/header-pro'

// mail-sidebar
import Mailsidebar from '../components/partials/mail-sidebar'

// footer
import Footer from '../../../../components/partials/dashboard/footerstyle/footer'

// mail-router
import Mailrouter from '../router/mail-router'

//seetingoffCanvas
import SettingOffCanvas from '../../../../components/setting/SettingOffCanvas'

//subheader
import SubHeader from '../../../../components/partials/dashboard/headerstyle/sub-header'

// Import selectors & action from setting store
import * as SettingSelector from '../../../../store/setting/selectors'

// Redux Selector / Action
import { useSelector } from 'react-redux';

// Stylemail
import "../../../../assets/modules/mail/scss/mail.scss"

const Maillayout = () => {
    const pageLayout = useSelector(SettingSelector.page_layout)
    const headerBanner = useSelector(SettingSelector.header_banner)
    let location = useLocation();
    let bannerStyle='';
    if(location.pathname === '/mail/email'){
        bannerStyle= true
    }
    return (
        <React.Fragment>
             <Mailsidebar />
             <main className="main-content">
             <div className={`${bannerStyle ? `iq-banner  ${headerBanner}` :'' } position-relative `}>
                    <Headerpro />
                    {bannerStyle &&
                     <SubHeader />
                    }
                </div>
                <div className={`container-fluid content-inner pb-0 ${pageLayout}`} id="page_layout">
                    <Mailrouter />
                </div>
                <Footer />
            </main>
            <SettingOffCanvas BannerStyle={bannerStyle} />
        </React.Fragment>
    )
}

export default Maillayout
