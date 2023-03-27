import React,{memo,Fragment} from 'react'

// Header
import Headerpro from '../../../../components/partials/pro/headerstyle/header-pro'

// Sidebar
import Socialsidebar from '../components/partials/social-sidebar'

// Footer
import Footer from '../../../../components/partials/dashboard/footerstyle/footer'

//Socialrouter
import Socialrouter from '../router/social-router'

//SeetingoffCanvas
import SettingOffCanvas from '../../../../components/setting/SettingOffCanvas'

//Subheader
import SubHeader from '../../../../components/partials/dashboard/headerstyle/sub-header'

// Router
import {  useLocation } from 'react-router-dom'

// Import selectors & action from setting store
import * as SettingSelector from '../../../../store/setting/selectors'


// Redux Selector / Action
import { useSelector } from 'react-redux';

// Scsssocial
import "../../../../assets/modules/social/scss/social.scss"

const Social = memo(() => {
    const pageLayout = useSelector(SettingSelector.page_layout)
    const headerBanner = useSelector(SettingSelector.header_banner)
    let location = useLocation();
    let bannerStyle='';
    if(location.pathname === '/social/dashboard'){
        bannerStyle= true
    }
    return (
        <Fragment>
            <Socialsidebar />
            <main className="main-content social">
                <div className={`${bannerStyle ? `iq-banner  ${headerBanner}` :'' } position-relative `}>
                    <Headerpro />
                    {bannerStyle &&
                     <SubHeader />
                    }
                </div>
                <div className={`container-fluid content-inner pb-0 ${pageLayout}`} id="page_layout">
                    <Socialrouter />
                </div>
                <Footer />
           </main>
           <SettingOffCanvas  BannerStyle={bannerStyle}  />
        </Fragment>
    )
})


Social.displayName="Social"
export default Social
