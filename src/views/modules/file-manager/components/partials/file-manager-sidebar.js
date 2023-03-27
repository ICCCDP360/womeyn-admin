import { useEffect,memo,Fragment } from 'react'

//Siderbarlogo
import Sidebarlogo from '../../../../../components/partials/components/sidebar/sidebar-logo'

//Sidebarprofile
import Sidebarprofilecard from '../../../../../components/partials/components/sidebar/sidebar-profile-card'

//File-manager-vartical-nav
import Filemanagervarticalnav from './file-manager-vertical-nav'

//Scrollbar
import Scrollbar from 'smooth-scrollbar'

// Import selectors & action from setting store
import * as SettingSelector from '../../../../../store/setting/selectors'

// Redux Selector / Action
import { useSelector } from 'react-redux';

const Filemanagersidebar = memo(() => {
    
    // Selector
    const appName = useSelector(SettingSelector.app_name)
    const sidebarColor = useSelector(SettingSelector.sidebar_color)
    const sidebarType = useSelector(SettingSelector.sidebar_type) // array
    const sidebarMenuStyle = useSelector(SettingSelector.sidebar_menu_style)

    useEffect(
        () => {
            Scrollbar.init(document.querySelector('#my-scrollbar'))
        }
    )

    return (
        <Fragment>
            <aside className={`${sidebarColor} ${sidebarType.join(" ")} ${sidebarMenuStyle} sidebar sidebar-base `}>
                <Sidebarlogo app_name={appName}/>
                <div className="sidebar-body pt-0 data-scrollbar" id="my-scrollbar">
                    <Sidebarprofilecard />
                    <hr className="hr-horizontal" />
                    <div className="sidebar-list">
                        <Filemanagervarticalnav />
                    </div>
                </div>
                <div className="sidebar-footer"></div>
            </aside>
        </Fragment>
    )
}
)

Filemanagersidebar.displayName="Filemanagersidebar"
export default Filemanagersidebar  