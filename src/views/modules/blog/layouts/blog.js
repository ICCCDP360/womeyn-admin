import {memo,Fragment} from 'react'

//Router
import {  useLocation } from 'react-router-dom'

// Header
import Headerpro from '../../../../components/partials/pro/headerstyle/header-pro'

// Sidebar
import Blogsidebar from '../components/partials/blog-sidebar'

//Subheader
import SubHeader from '../../../../components/partials/dashboard/headerstyle/sub-header'

// Footer
import Footer from '../../../../components/partials/dashboard/footerstyle/footer'

// Blogrouter
import Blogrouter from '../router/blog-router'

//SettingOffCanvas
import SettingOffCanvas from '../../../../components/setting/SettingOffCanvas'

// Import selectors & action from setting store
import * as SettingSelector from '../../../../store/setting/selectors'


// Redux Selector / Action
import { useSelector } from 'react-redux';

import "../../../../assets/modules/blog/scss/blog.scss"

const Blog = memo(() => {
    const headerBanner = useSelector(SettingSelector.header_banner)
    const pageLayout = useSelector(SettingSelector.page_layout)
    let location = useLocation();
    let bannerStyle='';
    if(location.pathname === '/blog/blog-main' || location.pathname === '/blog/blog-details'){
        bannerStyle= true
    }
    return (
        <Fragment>
            <Blogsidebar />
            <main className="main-content">
                <div className={`${ bannerStyle ? `iq-banner ${headerBanner}` :'' } position-relative `}>
                    <Headerpro />
                    {bannerStyle &&
                     <SubHeader />
                    }
                </div>
                <div className={`container-fluid content-inner pb-0 ${pageLayout}`} id="page_layout">
                    <Blogrouter />
                </div>
                <Footer />
            </main>
            <SettingOffCanvas BannerStyle={bannerStyle} />
        </Fragment>
    )
}
)

Blog.displayName="Blog"
export default Blog
