import {useEffect,memo,Fragment} from 'react'

//React-bootstrap
import {Row, Col, Image, Nav, Tab, Button, Form, Table} from 'react-bootstrap'

// Router
import { Link } from 'react-router-dom'


// Sweetalerts
import Swal from "sweetalert2"


// Threejs
import { WebGLRenderer, Scene, PerspectiveCamera, HemisphereLight, DirectionalLight } from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

//Components
import Counter from '../components/counter'
import Card from '../../../../components/bootstrap/card'

//pro-components
import ProductCard from "../components/product-card"
import ShareOffcanvas  from '../../../../components/partials/components/shareoffcanvas'



//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper'


//Img
import img1 from '../../../../assets/modules/e-commerce/images/product-detail/10.png'
import img2 from '../../../../assets/modules/e-commerce/images/product-detail/11.png'
import img3 from '../../../../assets/modules/e-commerce/images/product-detail/12.png'
import img4 from '../../../../assets/modules/e-commerce/images/product-detail/13.png'
import img5 from '../../../../assets/modules/e-commerce/images/product-detail/14.png'
import img6 from '../../../../assets/modules/e-commerce/images/user/04.png'
import img7 from '../../../../assets/modules/e-commerce/images/user/01.png'
import img8 from '../../../../assets/modules/e-commerce/images/01.png'
import img9 from '../../../../assets/modules/e-commerce/images/02.png'
import img10 from '../../../../assets/modules/e-commerce/images/03.png'
import img11 from '../../../../assets/modules/e-commerce/images/04.png'
import img12 from '../../../../assets/modules/e-commerce/images/05.png'
import img13 from '../../../../assets/modules/e-commerce/images/06.png'


const Productdetailsthreed = memo(() => {
    useEffect(() => {
        let baseUrl = ''
            if(typeof process.env.PUBLIC_URL !== typeof  null && typeof  process.env.PUBLIC_URL !== typeof undefined && process.env.PUBLIC_URL !== '') {
                baseUrl = process.env.PUBLIC_URL
            }
            const container = document.querySelector('#three-js-webgl')
            const threeDProduct =  baseUrl+'/3d/Shoes.gltf'
            if (container !== null) {
                let camera
                let scene
                let render
                let product
                function init() {
                    scene = new Scene()
                    const fov = 2.5
                    const aspect = container.clientWidth / container.clientHeight
                    const near = 1
                    const far = 200
    
                    camera = new PerspectiveCamera(fov, aspect, far, near)
                    camera.position.set(6, -2, 1)
    
                    const hemiLight = new HemisphereLight( 0xffffff, 0xffffff, 3 );
                    hemiLight.position.set( 0, 50, 0 );
                    scene.add( hemiLight );
    
                    const light = new DirectionalLight( 0xaabbff, 0.5 );
                    light.position.x = 0;
                    light.position.y = -7;
                    light.position.z = 10;
                    light.castShadow = true;
                    light.shadow.mapSize.width = 500; // default
                    light.shadow.mapSize.height = 500; // default
                    light.shadow.camera.near = 1; // default
                    light.shadow.camera.far = 500;
                    scene.add( light );
    
    
                    const leftlight = new DirectionalLight( 0xaabbff, 0.5 );
                    leftlight.position.x = 0;
                    leftlight.position.y = 7;
                    leftlight.position.z = -10;
                    leftlight.castShadow = true;
                    leftlight.shadow.mapSize.width = 500; // default
                    leftlight.shadow.mapSize.height = 500; // default
                    leftlight.shadow.camera.near = 1; // default
                    leftlight.shadow.camera.far = 500;
                    scene.add( leftlight );
    
                    render = new WebGLRenderer({antialias: true, alpha: true})
                    render.setSize(container.clientWidth, container.clientHeight)
                    render.setPixelRatio(window.devicePixel)
                    container.appendChild(render.domElement)
                    let loader = new GLTFLoader()
                    loader.load(threeDProduct, function (gltf) {
                        scene.add(gltf.scene)
                        product = gltf.scene.children[0]
                        product.position.y = 0
                        product.rotation.x = 0
                        product.rotation.z = 0
    
                        render.render(scene, camera)
                        animate()
                    })
                    const controls = new OrbitControls( camera, render.domElement );
                    controls.target.set( 0, 0, 0 );
                    window.addEventListener( 'resize',function(){
    
                        const sizes = {}
                        // Update sizes
                        sizes.width = container.clientWidth
                        sizes.height = container.clientHeight
    
                        // Update camera
                        camera.aspect = sizes.width / sizes.height
                        camera.updateProjectionMatrix()
    
                        // Update renderer
                        render.setSize(sizes.width, sizes.height)
                        render.setPixelRatio(Math.min(window.devicePixelRatio, 1))
    
                    });
                }
                function animate() {
                    window.requestAnimationFrame(animate)
                    product.rotation.y += .010
                    render.render(scene, camera)
                }
                init()
            }

        return () => {

            return true
        }
    }, []);

    function Sweetalert() {
        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: 'Your item has been Added to the cart.'
        })
    }

    return (
        <Fragment>
            <Row>
                <Col lg="12">
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col lg="7">
                                    <div className="product-3d" id="three-js-webgl"></div>
                                </Col>
                                <Col lg="5">
                                    <div className="border-bottom">
                                        <div className="d-flex flex-column align-content-between justify-items-center mb-3">
                                            <div className="d-flex justify-content-between mb-2">
                                                <h2 className="mb-0">Hope UI Shoes</h2>
                                                <div className="d-flex justify-content-end ">
                                                    <ShareOffcanvas share='2'/>
                                                </div>
                                            </div>
                                            <div className=" d-flex align-items-center w-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 24 24" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z" fill="#FFD329"></path>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 24 24" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z" fill="#FFD329"></path>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 24 24" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z" fill="#FFD329"></path>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 24 24" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z" fill="#FFD329"></path>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 24 24" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z" fill="#FFD329"></path>
                                                </svg>
                                                <h6 className="ms-2 mb-0">4.5</h6>
                                            </div>
                                        </div>
                                        <div className="d-flex my-4 gap-2">
                                            <h4 className="mb-0"> Price:</h4>
                                            <h4 className="text-primary mb-0">$99.00</h4>
                                        </div>
                                    </div>
                                    <div className="border-bottom">
                                        <p className="py-4 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus eleifend ultrices vestibulum tempor augue bibendum dolor quam malesuada.consectetur adipiscing elit.</p>
                                    </div>
                                    <div className="d-flex flex-column py-4">
                                        <div className="d-flex align-items-center mb-3 gap-2">
                                            <span className="text-dark">Free Delivery:</span>
                                            <span className="text-primary">Monday , Feb 28</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-3 gap-2">
                                            <span className="text-dark">Fastest Delivery:</span>
                                            <span className="text-primary">Today</span>
                                        </div>
                                    </div>
                                    <Counter />
                                    <div className="d-flex py-4 flex-wrap gap-4">
                                        <Link to="/e-commerce/order-process" className="btn btn-warning d-flex align-items-center gap-2">
                                            <span className="btn-inner d-flex ">
                                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.4" d="M16.6203 22H7.3797C4.68923 22 2.5 19.8311 2.5 17.1646V11.8354C2.5 9.16894 4.68923 7 7.3797 7H16.6203C19.3108 7 21.5 9.16894 21.5 11.8354V17.1646C21.5 19.8311 19.3108 22 16.6203 22Z" fill="currentColor"></path>
                                                    <path d="M15.7551 10C15.344 10 15.0103 9.67634 15.0103 9.27754V6.35689C15.0103 4.75111 13.6635 3.44491 12.0089 3.44491C11.2472 3.44491 10.4477 3.7416 9.87861 4.28778C9.30854 4.83588 8.99272 5.56508 8.98974 6.34341V9.27754C8.98974 9.67634 8.65604 10 8.24487 10C7.8337 10 7.5 9.67634 7.5 9.27754V6.35689C7.50497 5.17303 7.97771 4.08067 8.82984 3.26285C9.68098 2.44311 10.7814 2.03179 12.0119 2C14.4849 2 16.5 3.95449 16.5 6.35689V9.27754C16.5 9.67634 16.1663 10 15.7551 10Z" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                            Buy Now
                                        </Link>
                                        <Button  className="primary d-flex align-items-center cart-btn  gap-2" onClick={Sweetalert}>
                                            <span className="btn-inner d-flex">
                                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M5.91064 20.5886C5.91064 19.7486 6.59064 19.0686 7.43064 19.0686C8.26064 19.0686 8.94064 19.7486 8.94064 20.5886C8.94064 21.4186 8.26064 22.0986 7.43064 22.0986C6.59064 22.0986 5.91064 21.4186 5.91064 20.5886ZM17.1606 20.5886C17.1606 19.7486 17.8406 19.0686 18.6806 19.0686C19.5106 19.0686 20.1906 19.7486 20.1906 20.5886C20.1906 21.4186 19.5106 22.0986 18.6806 22.0986C17.8406 22.0986 17.1606 21.4186 17.1606 20.5886Z" fill="currentColor"></path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.1907 6.34909C20.8007 6.34909 21.2007 6.55909 21.6007 7.01909C22.0007 7.47909 22.0707 8.13909 21.9807 8.73809L21.0307 15.2981C20.8507 16.5591 19.7707 17.4881 18.5007 17.4881H7.59074C6.26074 17.4881 5.16074 16.4681 5.05074 15.1491L4.13074 4.24809L2.62074 3.98809C2.22074 3.91809 1.94074 3.52809 2.01074 3.12809C2.08074 2.71809 2.47074 2.44809 2.88074 2.50809L5.26574 2.86809C5.60574 2.92909 5.85574 3.20809 5.88574 3.54809L6.07574 5.78809C6.10574 6.10909 6.36574 6.34909 6.68574 6.34909H20.1907ZM14.1307 11.5481H16.9007C17.3207 11.5481 17.6507 11.2081 17.6507 10.7981C17.6507 10.3781 17.3207 10.0481 16.9007 10.0481H14.1307C13.7107 10.0481 13.3807 10.3781 13.3807 10.7981C13.3807 11.2081 13.7107 11.5481 14.1307 11.5481Z" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                            Add to cart
                                        </Button>
                                        <Link to="/e-commerce/wishlist" className="btn btn-info d-flex align-items-center gap-2">
                                            <span className="btn-inner d-flex">
                                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.4" d="M11.7761 21.8374C9.49311 20.4273 7.37081 18.7645 5.44807 16.8796C4.09069 15.5338 3.05404 13.8905 2.41735 12.0753C1.27971 8.53523 2.60399 4.48948 6.30129 3.2884C8.2528 2.67553 10.3752 3.05175 12.0072 4.29983C13.6398 3.05315 15.7616 2.67705 17.7132 3.2884C21.4105 4.48948 22.7436 8.53523 21.606 12.0753C20.9745 13.8888 19.944 15.5319 18.5931 16.8796C16.6686 18.7625 14.5465 20.4251 12.265 21.8374L12.0161 22L11.7761 21.8374Z" fill="currentColor"></path>
                                                    <path d="M12.0109 22.0001L11.776 21.8375C9.49013 20.4275 7.36487 18.7648 5.43902 16.8797C4.0752 15.5357 3.03238 13.8923 2.39052 12.0754C1.26177 8.53532 2.58605 4.48957 6.28335 3.28849C8.23486 2.67562 10.3853 3.05213 12.0109 4.31067V22.0001Z" fill="currentColor"></path>
                                                    <path d="M18.2304 9.99922C18.0296 9.98629 17.8425 9.8859 17.7131 9.72157C17.5836 9.55723 17.5232 9.3434 17.5459 9.13016C17.5677 8.4278 17.168 7.78851 16.5517 7.53977C16.1609 7.43309 15.9243 7.00987 16.022 6.59249C16.1148 6.18182 16.4993 5.92647 16.8858 6.0189C16.9346 6.027 16.9816 6.04468 17.0244 6.07105C18.2601 6.54658 19.0601 7.82641 18.9965 9.22576C18.9944 9.43785 18.9117 9.63998 18.7673 9.78581C18.6229 9.93164 18.4291 10.0087 18.2304 9.99922Z" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                            Wishlist
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Tab.Container defaultActiveKey="first">
                                <Nav className="tab-bottom-bordered">
                                    <div className="mb-0 nav nav-tabs" id="nav-tab1" role="tablist">
                                        <Nav.Link  eventKey="first"  id="nav-description-tab" data-bs-toggle="tab" data-bs-target="#nav-description" type="button" role="tab" aria-controls="nav-description" aria-selected="true">Description</Nav.Link>
                                        <Nav.Link  id="nav-info-tab"  eventKey="second" data-bs-toggle="tab" data-bs-target="#nav-info" type="button" role="tab" aria-controls="nav-info" aria-selected="false">Info</Nav.Link>
                                        <Nav.Link  id="nav-review-tab"  eventKey="thired" data-bs-toggle="tab" data-bs-target="#nav-review" type="button" role="tab" aria-controls="nav-review" aria-selected="false">Reviews(2)</Nav.Link>
                                    </div>
                                </Nav>
                                <Tab.Content className="mt-4 iq-tab-fade-up" id="nav-tabContent">
                                    <Tab.Pane eventKey="first"  id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab">
                                        <div className="d-flex flex-column">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus eleifend ultrices vestibulum tempor augue bibendum dolor quam malesuad.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus eleifend ultrices vestibulum tempor augue bibendum dolor quam malesuad.</p>
                                            <Row className="row-cols-2 row-cols-lg-5 py-3">
                                                <Col>
                                                    <Image src={img1} alt="product-details" className="img-fluid iq-product-img rounded-2 w-100 " loading="lazy" />
                                                </Col>
                                                <Col>
                                                    <Image src={img2} alt="product-details" className="img-fluid iq-product-img rounded-2  w-100 " loading="lazy" />
                                                </Col>
                                                <Col>
                                                    <Image src={img3} alt="product-details" className="img-fluid iq-product-img rounded-2 w-100  " loading="lazy" />
                                                </Col>
                                                <Col>
                                                    <Image src={img4} alt="product-details" className="img-fluid iq-product-img rounded-2  w-100 " loading="lazy" />
                                                </Col>
                                                <Col>
                                                    <Image src={img5} alt="product-details" className="img-fluid iq-product-img rounded-2  w-100  " loading="lazy" />
                                                </Col>
                                            </Row>
                                            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus eleifend ultrices vestibulum tempor augue bibendum dolor quam malesuad.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus eleifend ultrices vestibulum tempor augue bibendum dolor quam malesuad.</p>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus eleifend ultrices vestibulum tempor augue bibendum dolor quam malesuad. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus eleifend ultrices vestibulum tempor augue bibendum dolor quam malesuad.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane  eventKey="second"   id="nav-info" role="tabpanel" aria-labelledby="nav-info-tab">
                                        <Table bordered className="mb-0">
                                            <tbody>
                                                <tr>
                                                    <th>
                                                        Type
                                                    </th>
                                                    <td>
                                                        Backpack
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        Ideal For
                                                    </th>
                                                    <td>
                                                        Men & Women
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        Trolley Support
                                                    </th>
                                                    <td>
                                                        No
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        Laptop Sleeve
                                                    </th>
                                                    <td>
                                                        No
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        With Rain Cover
                                                    </th>
                                                    <td>
                                                        No
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        Style Code
                                                    </th>
                                                    <td>
                                                        Provogue_Day_002
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        Color Code
                                                    </th>
                                                    <td>
                                                        Grey, Black
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        Material, Waterproof
                                                    </th>
                                                    <td>
                                                        Material: Polyester, Waterproof: Yes
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        Number of Compartments
                                                    </th>
                                                    <td>
                                                        2
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        Pattern
                                                    </th>
                                                    <td>
                                                        Self Design
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="thired"   id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab">
                                        <h2 className="mb-0 border-bottom pb-3">Review</h2>
                                        <div>
                                            <Card className="shadow-none bg-transparent border">
                                                <Card.Body>
                                                    <div className="d-flex flex-sm-nowrap flex-wrap">
                                                        <div>
                                                            <Image className="img-fluid object-contain avatar-120 rounded" src={img6} alt="01" loading="lazy" />
                                                        </div>
                                                        <div className="ms-0 ms-sm-3">
                                                            <div className="d-flex justify-content-between align-items-center my-2 my-lg-0">
                                                                <h6 className="mb-0">Emma Jones</h6>
                                                                <Link className="text-dark " to="#">Reply</Link>
                                                            </div>
                                                            <small className="text-primary">March 01st 2021</small>
                                                            <p className="mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut eu morbi tincidunt erat egestas quisque ultrices ut. Vel elementum blandit et tellus sit tincidunt.</p>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                            <Card className="shadow-none bg-transparent border">
                                                <Card.Body>
                                                    <div className="d-flex flex-sm-nowrap flex-wrap">
                                                        <div>
                                                            <Image className="img-fluid object-contain avatar-120 rounded" src={img7} alt="01" loading="lazy" />
                                                        </div>
                                                        <div className="ms-0 ms-sm-3">
                                                            <div className="d-flex justify-content-between align-items-center my-2 my-lg-0">
                                                                <h6 className="mb-0">Jackson Jones</h6>
                                                                <Link className="text-dark " to="#">Reply</Link>
                                                            </div>
                                                            <small className="text-primary">March 20th 2021</small>
                                                            <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut eu morbi tincidunt erat egestas quisque ultrices ut. Vel elementum blandit et tellus sit tincidunt.</p>
                                                            <div className="d-flex mb-3">
                                                                <Link className="" to="#">Reply To Jackson Jones</Link>
                                                                <Link className="text-body ms-3" to="#">Cancel Reply</Link>
                                                            </div>
                                                            <Col lg="12">
                                                                <div className="form-group ">
                                                                    <Form.Control type="text" className="form-control"  placeholder=" Hi there, I love your blog " />
                                                                </div>
                                                            </Col>
                                                            <div className="d-flex">
                                                                <Button type="submit" className="primary rounded">Get Started</Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <p className="my-4">- There are no reviews yet</p>
                                        <h4 className="mb-3">Be the first to Review</h4>
                                        <Form>
                                            <Row>
                                                <Col lg="6">
                                                    <div className="form-group">
                                                        <Form.Label htmlFor="full-name">First Name<span className="text-danger">*</span></Form.Label>
                                                        <Form.Control type="text" className="w-100" id="full-name" placeholder=" John" />
                                                    </div>
                                                </Col>
                                                <Col lg="6">
                                                    <div className="form-group">
                                                        <Form.Label htmlFor="last-name">Email ID<span className="text-danger">*</span></Form.Label>
                                                        <Form.Control type="text" className="w-100" id="last-name" placeholder="XYZ@exampleemail.com " />
                                                    </div>
                                                </Col>
                                                <Col lg="12">
                                                    <div className="form-group">
                                                        <Form.Label htmlFor="message">Enter your Review<span className="text-danger">*</span></Form.Label>
                                                        <textarea className="form-control" rows="5" id="message" aria-label="With textarea" spellCheck="false" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit"></textarea>
                                                    </div>
                                                </Col>
                                                <Col lg="12" className="d-flex justify-content-between">
                                                    <div className="form-check mb-3">
                                                        <input type="checkbox" className="form-check-input" id="customCheck1" />
                                                        <label className="form-check-label" htmlFor="customCheck1">Save my name, email, and website in this browser for the next time I comment.<span className="text-danger">*</span></label>
                                                    </div>
                                                </Col>
                                                <div className="d-flex">
                                                    <Button type="submit" className="primary">Submit</Button>
                                                </div>
                                            </Row>
                                        </Form>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="12" md="12">
                    <Row className="row-cols-1">
                        <div className="d-flex py-4">
                            <h4 className="mb-0">Similar Products</h4>
                        </div>
                        <div className="overflow-hidden slider-circle-btn" id="ecommerce-slider">
                            <Swiper className="p-0 m-0 mb-4 swiper-wrapper list-inline"
                                modules={[Navigation]}
                                slidesPerView={3}
                                spaceBetween={32}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev'
                                }}
                                breakpoints= {{
                                    320: { slidesPerView: 1 },
                                    550: { slidesPerView: 2 },
                                    991: { slidesPerView: 3 },
                                    1400: { slidesPerView: 3 },
                                    1500: { slidesPerView: 3 },
                                    1920: { slidesPerView: 4 },
                                    2040: { slidesPerView: 4 },
                                    2440: { slidesPerView: 4 }
                                }}>
                                    <SwiperSlide>
                                        <ProductCard productName="Casual Shoes" productImage={img8} productRating="3.5"  productPrice="$56.00" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductCard productName="Biker's Jacket" productImage={img9} productRating="3.5"  productPrice="$56.00"  />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductCard productName="Knitted Shrug" productImage={img10} productRating="3.5"  productPrice="$56.00" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductCard productName="Blue Handbag" productImage={img11} productRating="3.5"  productPrice="$56.00" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductCard productName="Pink Sweater" productImage={img12} productRating="3.5"  productPrice="$56.00"  />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductCard productName="Pink Handbag" productImage={img13} productRating="3.5"  productPrice="$56.00" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductCard productName="Casual Shoes" productImage={img8} productRating="3.5"  productPrice="$56.00" />
                                    </SwiperSlide>
                            </Swiper>
                            <div className="swiper-button swiper-button-next"></div>
                            <div className="swiper-button swiper-button-prev"></div>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
})

Productdetailsthreed.displayName="Productdetailsthreed"
export default Productdetailsthreed
