import { memo, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

//TransitionGroup
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Dashboard
const Index = lazy(() => import("../pages/views/dashboard/index"));

// User
const userProfile = lazy(() => import("../pages/views/app/user-profile"));

// // User
// const UserProfile = lazy(() => import('../views/dashboard/app/user-profile'))
// const UserAdd = lazy(() => import('../views/dashboard/app/user-add'))
// const UserList = lazy(() => import('../views/dashboard/app/user-list'))
// const userProfileEdit = lazy(() => import('../views/dashboard/app/user-privacy-setting'))

// // widget
// const Widgetbasic = lazy(() => import('../views/dashboard/widget/widgetbasic'))
// const Widgetcard = lazy(() => import('../views/dashboard/widget/widgetcard'))
// const Widgetchart = lazy(() => import('../views/dashboard/widget/widgetchart'))

// // icon
// const Solid = lazy(() => import('../views/dashboard/icons/solid'))
// const Outline = lazy(() => import('../views/dashboard/icons/outline'))
// const DualTone = lazy(() => import('../views/dashboard/icons/dual-tone'))

// // Form
// const FormElement = lazy(() => import('../views/dashboard/from/form-element'))
// const FormValidation = lazy(() => import('../views/dashboard/from/form-validation'))
// const FormWizard = lazy(() => import('../views/dashboard/from/form-wizard'))

// // table
// const BootstrapTable = lazy(() => import('../views/dashboard/table/bootstrap-table'))
// const TableData = lazy(() => import('../views/dashboard/table/table-data'))
// const Borderedtable = lazy(() => import('../views/dashboard/table/border-table'))
// const Fancytable = lazy(() => import('../views/dashboard/table/fancy-table'))
// const FixedTable = lazy(() => import('../views/dashboard/table/fixed-table'))

// // map
// const Google = lazy(() => import('../views/dashboard/maps/google'))

// //extra
// const PrivacyPolicy = lazy(() => import('../views/dashboard/extra/privacy-policy'))
// const TermsofService = lazy(() => import('../views/dashboard/extra/terms-of-service'))

// //Special Pages
// const Billing = lazy(() => import('../views/dashboard/special-pages/billing'))
// const Kanban = lazy(() => import('../views/dashboard/special-pages/kanban'))
// const Pricing = lazy(() => import('../views/dashboard/special-pages/pricing'))
// const Timeline = lazy(() => import('../views/dashboard/special-pages/timeline'))
// const Calender = lazy(() => import('../views/dashboard/special-pages/calender'))

// //admin
// const Admin = lazy(() => import('../views/dashboard/admin/admin'))

const DefaultRouter = memo(() => {
  return (
    <TransitionGroup>
      <CSSTransition classNames="fadein" timeout={300}>
        <Suspense fallback={<div className="react-load"></div>}>
          <Routes>
            <Route path="womeyn"></Route>
            <Route index element={<Index />} />

            <Route path="womeyn/dashboard" element={<Index />} />

            {/* user */}
            <Route
              path="/dashboard/app/user-profile"
              exact
              component={userProfile}
            />
          </Routes>
        </Suspense>
      </CSSTransition>
    </TransitionGroup>
  );
});

DefaultRouter.displayName = "DefaultRouter";
export default DefaultRouter;
