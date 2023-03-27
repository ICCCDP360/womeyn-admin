import {memo,Suspense,lazy} from 'react'

// Router
import {Switch,Route} from 'react-router-dom'

//E-commerce
const Admindashboard = lazy(() => import('../pages/admin/admin-dashboard'))
const Userlist = lazy(() => import('../pages/app/user-list'))
const Userprofile = lazy(() => import('../pages/app/user-profile'))
const Table1 = lazy(() => import('../pages/table/table-1'))
const Table2 = lazy(() => import('../pages/table/table-2'))
const Table3 = lazy(() => import('../pages/table/table-3'))
const Vendordashboard = lazy(() => import('../pages/user/vendor-dashbord'))
const Productdetailsthreed = lazy(() => import('../pages/product-details-3d'))
const Rotateproductdetails = lazy(() => import('../pages/product-details-360'))
const Orderprocess = lazy(() => import('../pages/order-process'))
const Categorieslist = lazy(() => import('../pages/categories-list'))
const Leftsidebar = lazy(() => import('../pages/left-sidebar'))
const Productdetails = lazy(() => import('../pages/product-details'))
const Productfullgrid = lazy(() => import('../pages/product-full-grid'))
const Shopleftfilter = lazy(() => import('../pages/shop-left-filter'))
const Shoprightfilter = lazy(() => import('../pages/shop-right-filter'))
const Productlist = lazy(() => import('../pages/product-list'))
const Shopmain = lazy(() => import('../pages/shop-main'))
const Wishlist = lazy(() => import('../pages/wishlist'))
const Invoice = lazy(() => import('../pages/invoice'))

const Ecommercerouter = memo(() => {
    return (
        <Suspense fallback={<div className="react-load"></div>}>
        <Switch>

              {/* e-commerce pro */}
                <Route path="/e-commerce/admin/admin-dashboard"           exact component={Admindashboard}></Route>
                <Route path="/e-commerce/app/user-list"                   exact component={Userlist }></Route>
                <Route path="/e-commerce/app/user-profile"                exact component={Userprofile }></Route>
                <Route path="/e-commerce/table/table-1"                   exact component={Table1}></Route>
                <Route path="/e-commerce/table/table-2"        exact component={Table2}></Route>
                <Route path="/e-commerce/table/table-3"        exact component={Table3}></Route>
                <Route path="/e-commerce/user/vendor-dashbord"  exact component={Vendordashboard}></Route>
                <Route path="/e-commerce/product-details-3d"    exact component={Productdetailsthreed}></Route>
                <Route path="/e-commerce/product-details-360"   exact component={Rotateproductdetails}></Route>
                <Route path="/e-commerce/order-process"                 exact component={Orderprocess}></Route>
                <Route path="/e-commerce/categories-list"      exact component={Categorieslist}></Route>
                <Route path="/e-commerce/left-sidebar"         exact component={Leftsidebar}></Route>
                <Route path="/e-commerce/product-details"           exact component={Productdetails}></Route>
                <Route path="/e-commerce/product-full-grid"         exact component={Productfullgrid}></Route>
                <Route path="/e-commerce/shop-left-filter"  exact component={Shopleftfilter}></Route>
                <Route path="/e-commerce/shop-right-filter" exact component={Shoprightfilter}></Route>
                <Route path="/e-commerce/product-list"              exact component={Productlist}></Route>
                <Route path="/e-commerce/shop-main"             exact component={Shopmain}></Route>
                <Route path="/e-commerce/wishlist"                  exact component={Wishlist}></Route>
                <Route path="/e-commerce/invoice"                  exact component={Invoice}></Route>
        </Switch>  
      </Suspense>
    )
}
)

Ecommercerouter.displayName="Ecommercerouter"
export default Ecommercerouter
