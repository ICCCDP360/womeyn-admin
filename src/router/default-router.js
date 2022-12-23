import { memo, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

//TransitionGroup
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Dashboard
const Index = lazy(() => import("../pages/views/dashboard/index"));

// User
const userProfile = lazy(() =>
  import("../pages/views/userProfile/userProfile")
);

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
