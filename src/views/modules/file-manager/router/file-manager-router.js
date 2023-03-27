import {memo,Suspense, lazy} from 'react'

// Router
import {Switch,Route} from 'react-router-dom'



//FileManager
const Dashboard = lazy(() => import('../pages/dashboard'))
const DocumentFolder = lazy(() => import('../pages/document-folder'))
const Imagefolder = lazy(() => import('../pages/image-folder'))
const Videofolder = lazy(() => import('../pages/video-folder'))
const Allfile = lazy(() => import('../pages/all-file'))
const Trash = lazy(() => import('../pages/trash'))

const Filemanagerrouter = memo(() => {
    return (
        <Suspense fallback={<div className="react-load"></div>}>
            <Switch>

                {/* file-manager */}
                <Route path="/file-manager/dashboard"        exact component={Dashboard}></Route>
                <Route path="/file-manager/document-folder"   component={DocumentFolder}></Route>
                <Route path="/file-manager/image-folder"        exact component={Imagefolder}></Route>
                <Route path="/file-manager/video-folder"        exact component={Videofolder}></Route>
                <Route path="/file-manager/all-file"          exact component={Allfile}></Route>
                <Route path="/file-manager/trash"             exact component={Trash}></Route>
            </Switch>  
        </Suspense>
    )
})

Filemanagerrouter.displayName="Filemanagerrouter"
export default Filemanagerrouter
