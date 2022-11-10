import { useEffect, memo, Fragment, useContext, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

//react-shepherd
import { ShepherdTour, ShepherdTourContext } from 'react-shepherd'

// header
import Headerpro from '../components/partials/pro/headerstyle/header-pro'

//subheader
import SubHeader from '../components/partials/dashboard/headerstyle/sub-header'

//sidebar
import Sidebar from '../components/partials/dashboard/sidebarstyle/sidebar'

//footer
import Footer from '../components/partials/dashboard/footerstyle/footer'

//default 
import DefaultRouter from '../router/default-router'

//seetingoffCanvas
import SettingOffCanvas from '../components/setting/SettingOffCanvas'

import Loader from '../components/Loader'

// Import selectors & action from setting store
import * as SettingSelector from '../store/setting/selectors'


// Redux Selector / Action
import { useSelector } from 'react-redux';
import loginServices from '../services/login_services/login-services'

const Tour = () => {
  const tour = useContext(ShepherdTourContext);
  const { pathname } = useLocation()
  useEffect(() => {
    if (pathname === '/dashboard' && sessionStorage.getItem('tour') !== 'true') {
      tour?.start();
    }
  });
  return (
    <Fragment>
    </Fragment>
  );
};

const Default = memo((props) => {
  let location = useLocation();
  const pageLayout = useSelector(SettingSelector.page_layout)
  const appName = useSelector(SettingSelector.app_name)
  const [authUser, setAuthUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loginServices.useAuth().then(result => {
      if (result) {
        setAuthUser(result);
        setLoading(false)
      } else {
        setLoading(false)
      }
    })
  }, [authUser])

  const closeTour = () => {
    sessionStorage.setItem('tour', 'true')
  }

  // shepherd
  const newSteps = [
    {
      title: "<h4>Menu</h4>",
      text: '<p className="mb-0">Check the content under Menu Style. Click to view all oavailable Menu Style options for you.</p>',
      attachTo: { element: ".sidebar ", on: "right" },
      buttons: [
        {
          type: "next",
          text: "Next"
        }
      ],
      when: {
        show: () => {
          document.querySelector('.shepherd-modal-overlay-container').classList.add('shepherd-modal-is-visible')
        },
        cancel: () => closeTour()
      }
    },
    {
      title: "<h4>Profile Setting</h4>",
      text: '<p className="mb-0">Configure your Profile using Profile Settings. Edit, save and update your profile from here.</p>',
      attachTo: { element: ".iq-tour ", on: "bottom" },
      buttons: [
        {
          type: "back",
          classes: "shepherd-button-secondary",
          text: "Back"
        },
        {
          type: "next",
          text: "Next"
        }
      ],
      when: {
        cancel: () => closeTour()
      }
    },
    {
      title: "<h4>Live Customizer</h4>",
      text: '<p className="mb-0">Transform the entire look, color, style and appearance of using Live Customizer settings. Change and copy the settings from here.</p>',
      attachTo: { element: ".btn-setting", on: "left" },
      buttons: [
        {
          type: "back",
          classes: "shepherd-button-secondary",
          text: "Back"
        },
        {
          action() {
            sessionStorage.setItem('tour', 'true')
            return this.next();
          },
          text: "Done"
        }
      ],
      when: {
        cancel: () => closeTour()
      }
    },
  ];
  const tourOptions = {
    defaultStepOptions: {
      cancelIcon: {
        enabled: true
      }
    },
    when: {
      cancel: function () {
      }
    }
  };
  var subHeader = '';
  var commanclass = '';
  switch (location.pathname) {
    case '/dashboard/special-pages/calender':
    case '/dashboard/special-pages/billing':
    case '/dashboard/special-pages/kanban':
    case '/dashboard/special-pages/pricing':
    case '/dashboard/special-pages/timeline':
    case '/dashboard/table/table-data':
    case '/dashboard/table/bootstrap-table':
    case '/dashboard/table/border-table':
    case '/dashboard/table/fancy-table':
    case '/dashboard/table/fixed-table':
      subHeader = <SubHeader />
      commanclass = 'iq-banner default'
      break;
    default:
      break
  }

  if (authUser && !loading) {
    return (
      <Fragment>
        <ShepherdTour steps={newSteps} tourOptions={tourOptions}>
          <Loader />
          <Sidebar app_name={appName} />
          <Tour />
          <main className="main-content">
            <div className={`${commanclass} position-relative `}>
              <Headerpro />
              {subHeader}
            </div>
            <div className={` ${pageLayout} content-inner pb-0`}>
              <Outlet />
            </div>
            <Footer />
          </main>
          <SettingOffCanvas />
        </ShepherdTour>
      </Fragment>
    )
  } else if (!loading) {
    return (
      <Navigate to='/'></Navigate>
    )
  }

}
)

Default.displayName = "Default"
export default Default
