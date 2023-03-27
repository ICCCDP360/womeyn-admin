import React,{memo,Suspense} from 'react'

// Router
import {Switch,Route} from 'react-router-dom'

//Social
const Dashboard = React.lazy(() => import('../pages/dashboard'))
const Newsfeed = React.lazy(() => import('../pages/newsfeed'))
const Socialprofile = React.lazy(() => import('../pages/social-profile'))
const Friendprofile = React.lazy(() => import('../pages/friend-profile'))
const Friendlist = React.lazy(() => import('../pages/friend-list'))
const Friendrequset = React.lazy(() => import('../pages/friend-requset'))
const Eventlist = React.lazy(() => import('../pages/event-list'))
const Eventdetail = React.lazy(() => import('../pages/event-detail'))
const Group = React.lazy(() => import('../pages/group'))
const Profilebadges = React.lazy(() => import('../pages/profile-badges'))
const Groupdetail = React.lazy(() => import('../pages/group-detail'))
const Profileimages = React.lazy(() => import('../pages/profile-images'))
const Birthday = React.lazy(() => import('../pages/birthday'))
const Accountsetting = React.lazy(() => import('../pages/account-setting'))
const Profilevideo = React.lazy(() => import('../pages/profile-video'))
const Notification = React.lazy(() => import('../pages/notification'))

const Socialrouter = memo(() => {
    return (
        <Suspense fallback={<div className="react-load"></div>}>
          <Switch>
                {/* social */}
                <Route path="/social/dashboard"        component={Dashboard}></Route>
                <Route path="/social/newsfeed"         component={Newsfeed}></Route>
                <Route path="/social/social-profile"   component={Socialprofile}></Route>
                <Route path="/social/friend-profile"   component={Friendprofile}></Route>
                <Route path="/social/friend-list"      component={Friendlist}></Route>
                <Route path="/social/friend-requset"   component={Friendrequset}></Route>
                <Route path="/social/event-list"       component={Eventlist}></Route>
                <Route path="/social/event-detail"     component={Eventdetail}></Route>
                <Route path="/social/group"            component={Group}></Route>
                <Route path="/social/profile-badges"   component={Profilebadges}></Route>
                <Route path="/social/group-detail"     component={Groupdetail}></Route>
                <Route path="/social/profile-images"   component={Profileimages}></Route>
                <Route path="/social/birthday"         component={Birthday}></Route>
                <Route path="/social/account-setting"  component={Accountsetting}></Route>
                <Route path="/social/profile-video" component={Profilevideo}></Route>
                <Route path="/social/notification" component={Notification}></Route>
          </Switch>  
        </Suspense>
    )
})

Socialrouter.displayName="Socialrouter"
export default Socialrouter
