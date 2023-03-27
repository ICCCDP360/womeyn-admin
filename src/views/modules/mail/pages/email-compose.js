import {memo} from 'react'

//Components
import EmailPopup from '../components/email-popup'

const Emailcompose = memo(() => {
    return (
        <EmailPopup />
    )
})

Emailcompose.displayName="Emailcompose"
export default Emailcompose
