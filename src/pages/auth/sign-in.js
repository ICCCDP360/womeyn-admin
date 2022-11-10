import { memo, Fragment, useState, useEffect } from 'react'

//react-bootstrap
import { Row, Col, Image, Form, Button, ListGroup, } from 'react-bootstrap'

//router
import { Link, Navigate, useNavigate } from 'react-router-dom'

//components
import Card from '../../components/bootstrap/card'

// img
import facebook from '../../assets/images/brands/fb.svg'
import google from '../../assets/images/brands/gm.svg'
import instagram from '../../assets/images/brands/im.svg'
import linkedin from '../../assets/images/brands/li.svg'
import auth1 from '../../assets/images/auth/01.png'

// Import selectors & action from setting store
import * as SettingSelector from '../../store/setting/selectors'

// Redux Selector / Action
import { useSelector } from 'react-redux';
import Logo from '../../components/partials/components/logo'
import loginServices from '../../services/login_services/login-services'

const SignIn = memo(() => {
   const [values, setValues] = useState({});
   const [auth, setAuth] = useState(false);
   const [loading, setLoading] = useState(true);



   useEffect(() => {
      loginServices.useAuth().then(result => {
         if (result) {
            setAuth(result)
            setLoading(false)
         } else {
            setLoading(false)
         }
      })
   }, [auth])
   const onFormChange = (e, updatedAt) => {
      const name = e.target.name;
      const value = e.target.value;
      setValues({ ...values, [name]: value });
   };
   const appName = useSelector(SettingSelector.app_name)
   let history = useNavigate();
   const authUser = (e) => {
      e.preventDefault();
      e.persist();
      // console.log(values);
      loginServices.login(values).then(async (result) => {

         if (result.tokens) {
            let auth_set = await loginServices.asyncAuthStorage(result);
            if (auth_set) {
               history('/womeyn/dashboard')
            }

         }
      }).catch(err => {
         if (err) {
            console.log(err)
         }
      })

   }
   if (!auth && !loading) {

      return (
         <Fragment>
            <section className="login-content">
               <Row className="m-0 align-items-center bg-white vh-100">
                  <Col md="6">
                     <Row className="justify-content-center">
                        <Col md="10">
                           <Card className="card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
                              <Card.Body>
                                 <Link to="/womeyn" className="navbar-brand d-flex align-items-center mb-3">
                                    <Logo></Logo>
                                    <h4 className="logo-title ms-3">{appName}</h4>
                                 </Link>
                                 <h2 className="mb-2 text-center">Sign In</h2>
                                 <p className="text-center">Login to stay connected.</p>
                                 <Form onSubmit={authUser}>
                                    <Row>
                                       <Col lg="12">
                                          <Form.Group className="form-group">
                                             <Form.Label htmlFor="email" className="">Email</Form.Label>
                                             <Form.Control name="email" type="email" onChange={onFormChange} className="" id="email" aria-describedby="email" placeholder=" " />
                                          </Form.Group >
                                       </Col>
                                       <Col lg="12" className="">
                                          <Form.Group className="form-group">
                                             <Form.Label htmlFor="password" className="">Password</Form.Label>
                                             <Form.Control name="password" type="password" onChange={onFormChange} className="" id="password" aria-describedby="password" placeholder=" " />
                                          </Form.Group>
                                       </Col>
                                       <Col lg="12" className="d-flex justify-content-between">
                                          <Form.Check className="form-check mb-3">
                                             <Form.Check.Input type="checkbox" id="customCheck1" onChange={onFormChange} name="remember" />
                                             <Form.Check.Label htmlFor="customCheck1">Remember Me</Form.Check.Label>
                                          </Form.Check>
                                          <Link to="/default/auth/recoverpw">Forgot Password?</Link>
                                       </Col>
                                    </Row>
                                    <div className="d-flex justify-content-center">
                                       <Button type="submit" variant="btn btn-primary">Sign In</Button>
                                    </div>
                                 </Form>
                                 <p className="text-center my-3">or sign in with other accounts?</p>
                                 <div className="d-flex justify-content-center">
                                    <ListGroup as="ul" className="list-group-horizontal list-group-flush">
                                       <ListGroup.Item as="li" className="border-0 pb-0">
                                          <Link to="#"><Image src={facebook} alt="fb" /></Link>
                                       </ListGroup.Item>
                                       <ListGroup.Item as="li" className="border-0 pb-0">
                                          <Link to="#"><Image src={google} alt="gm" /></Link>
                                       </ListGroup.Item>
                                       <ListGroup.Item as="li" className="border-0 pb-0">
                                          <Link to="#"><Image src={instagram} alt="im" /></Link>
                                       </ListGroup.Item>
                                       <ListGroup.Item as="li" className="border-0 pb-0">
                                          <Link to="#"><Image src={linkedin} alt="li" /></Link>
                                       </ListGroup.Item>
                                    </ListGroup>
                                 </div>
                                 <p className="mt-3 text-center">
                                    Don’t have an account? <Link to="/sign-up" className="text-underline">Click here to sign up.</Link>
                                 </p>

                              </Card.Body>
                           </Card>
                        </Col>
                     </Row>
                     <div className="sign-bg">
                        <svg width="280" height="230" viewBox="0 0 431 398" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <g opacity="0.05">
                              <rect x="-157.085" y="193.773" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 -157.085 193.773)" fill="#3B8AFF" />
                              <rect x="7.46875" y="358.327" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 7.46875 358.327)" fill="#3B8AFF" />
                              <rect x="61.9355" y="138.545" width="310.286" height="77.5714" rx="38.7857" transform="rotate(45 61.9355 138.545)" fill="#3B8AFF" />
                              <rect x="62.3154" y="-190.173" width="543" height="77.5714" rx="38.7857" transform="rotate(45 62.3154 -190.173)" fill="#3B8AFF" />
                           </g>
                        </svg>
                     </div>
                  </Col>
                  <Col md="6" className="d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
                     <Image src={auth1} className="Image-fluid gradient-main animated-scaleX" alt="images" />
                  </Col>
               </Row>
            </section>
         </Fragment>
      )
   } else if (!loading && auth) {

      return (
         <Navigate to='/womeyn/dashboard'></Navigate>
      )

   }

}
)

SignIn.displayName = "SignIn"
export default SignIn
