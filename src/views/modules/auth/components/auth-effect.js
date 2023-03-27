import {memo,Fragment} from 'react'

//react-bootstrap
import {Image, Container} from 'react-bootstrap'

//router
import { Link } from 'react-router-dom'

// Import selectors & action from setting store
import * as SettingSelector from '../../../../store/setting/selectors'

// Redux Selector / Action
import { useSelector } from 'react-redux';

//img
import img1 from '../../../../assets/images/favicon.ico'
import img2 from '../../../../assets/images/3d-logo.png'


const Autheffect = memo(() => {
    const appName = useSelector(SettingSelector.app_name)
    return (
        <Fragment>
            <nav className="navbar iq-auth-logo"> 
                <Container fluid>
                    <Link to ="/dashboard" className="iq-link d-flex align-items-center">
                        <Image src={img1} alt="logo" loading="lazy" />
                        <h4 data-setting="app_name" className="mb-0">{appName}</h4>
                    </Link>
                </Container>
            </nav>
            <div className="iq-banner-logo d-none d-lg-block">
                <Image className="auth-image" src={img2} alt="logo-img" loading="lazy" />
            </div>
            <div className="container-inside">
                <div className="main-circle circle-small"></div>
                <div className="main-circle circle-medium"></div>
                <div className="main-circle circle-large"></div>
                <div className="main-circle circle-xlarge"></div>
                <div className="main-circle circle-xxlarge"></div>
            </div>
        </Fragment>
    )
})

Autheffect.displayName="Autheffect"
export default Autheffect