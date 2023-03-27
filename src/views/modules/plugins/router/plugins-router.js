import {memo,Suspense,lazy} from 'react'

// router
import {Switch,Route} from 'react-router-dom'

//Appointment page
const Apexcharts = lazy(() => import('../pages/apexcharts'))
const Buttonhover = lazy(() => import('../pages/button-hover'))
const Choisejs = lazy(() => import('../pages/choise-js'))
const Flatpickerr = lazy(() => import('../pages/flatpickr'))
const Fslightbox = lazy(() => import('../pages/fslightbox'))
const Select2 = lazy(() => import('../pages/select2'))
const Sweetalert = lazy(() => import('../pages/sweet-alert'))
const Tour = lazy(() => import('../pages/tour'))
const Uppyplugin = lazy(() => import('../pages/uppy'))
const Uicolor = lazy(() => import('../pages/ui-color'))
const Galleryhover = lazy(() => import('../pages/gallery-hover'))
const Loader = lazy(() => import('../pages/loader'))
const Todo = lazy(() => import('../pages/todo'))
const Imagecopper = lazy(() => import('../pages/image-copper'))
const Quilleditor = lazy(() => import('../pages/quill-editor'))

const Appointmentrouter = memo(() => {
    return (
        <Suspense fallback={<div className="react-load"></div>}>
            <Switch>

                {/*  pulgin pro */}
                <Route path="/plugins/apexcharts"       component={Apexcharts}></Route>
                <Route path="/plugins/button-hover"  component={Buttonhover}></Route>
                <Route path="/plugins/choise-js"     component={Choisejs}></Route>
                <Route path="/plugins/flatpickr"     component={Flatpickerr}></Route>
                <Route path="/plugins/fslightbox"     component={Fslightbox}></Route>
                <Route path="/plugins/select2"     component={Select2}></Route>
                <Route path="/plugins/sweet-alert"     component={Sweetalert}></Route>
                <Route path="/plugins/tour"     component={Tour}></Route>
                <Route path="/plugins/uppy"     component={Uppyplugin}></Route>
                <Route path="/plugins/ui-color" component={Uicolor}></Route>
                <Route path="/plugins/gallery-hover" component={Galleryhover}></Route>
                <Route path="/plugins/loader" component={Loader}></Route>
                <Route path="/plugins/todo" component={Todo}></Route>
                <Route path="/plugins/image-copper" component={Imagecopper}></Route>
                <Route path="/plugins/quill-editor"     component={Quilleditor}></Route>

            </Switch>
        </Suspense>
    )
}
)

Appointmentrouter.displayName="Appointmentrouter"
export default Appointmentrouter
