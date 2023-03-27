import {memo,Suspense,lazy} from 'react'

// router
import {Switch,Route} from 'react-router-dom'

//Blog
const Bloganalytic = lazy(() => import('../pages/blog-analytic'))
const Blogcategory = lazy(() => import('../pages/blog-category'))
const BlogMain = lazy(() => import('../pages/blog-main'))
const Blogdetails = lazy(() => import('../pages/blog-details'))
const Blogtrending = lazy(() => import('../pages/blog-trending'))
const Bloglist = lazy(() => import('../pages/blog-list'))
const Index = lazy(() => import('../pages/index'))
const Bloggrid = lazy(() => import('../pages/blog-grid'))
const Blogcomments = lazy(() => import('../pages/blog-comments'))

const Blogrouter = memo(() => {
    return (
        <Suspense fallback={<div className="react-load"></div>}>
          <Switch>
              {/*blog pro */}
              <Route path="/blog/blog-analytic"  exact component={Bloganalytic}></Route>
              <Route path="/blog/blog-category"  exact component={Blogcategory}></Route>
              <Route path="/blog/blog-main"      exact component={BlogMain}></Route>
              <Route path="/blog/blog-details"   exact component={Blogdetails}></Route>
              <Route path="/blog/blog-trending"      exact component={Blogtrending}></Route>
              <Route path="/blog/blog-list"      exact component={Bloglist}></Route>
              <Route path="/blog/index"          exact component={Index}></Route>
              <Route path="/blog/blog-grid"      exact component={Bloggrid}></Route>
              <Route path="/blog/blog-comments"  exact component={Blogcomments}></Route>
          </Switch>  
        </Suspense>
    )
}
)

Blogrouter.displayName="Blogrouter"
export default Blogrouter
