// import { useState, memo, Fragment, useEffect } from 'react'

// //React-bootstrap
// import { Image } from 'react-bootstrap'

// //Router
// import { Link } from 'react-router-dom'

// //Pulgin
// import FsLightbox from 'fslightbox-react';


// //Img
// import img1 from '../../../../assets/modules/chat/images/01.png'
// import img2 from '../../../../assets/modules/chat/images/02.png'
// import img3 from '../../../../assets/modules/chat/images/03.png'
// import img4 from '../../../../assets/modules/chat/images/04.png'
// import img5 from '../../../../assets/modules/chat/images/05.png'

// const Rightchat = memo((props) => {
//     const [imageController, setImageController] = useState({
//         toggler: false,
//         slide: 1
//     });
//     const [imageUrls, setImageUrls] = useState(null)

//     function imageOnSlide(number) {
//         setImageController({
//             toggler: !imageController.toggler,
//             slide: number
//         });
//     }

//     const imageArrays = () => {
//         let urls = props.attachments.map(item => {
//             if (item.name) {
//                 return process.env.REACT_APP_BASE_IMAGE_URL + '/' + item.name
//             }
//         })
//         setImageUrls(urls)
//     }
//     useEffect(() => {
//         imageArrays();
//     }, [props.attachments])

//     return (
//         <Fragment>

//             {
//                 imageUrls?.length > 0 ? <FsLightbox
//                     types={[...new Array(imageUrls.length).fill('image')]}
//                     toggler={imageController.toggler}
//                     sources={imageUrls}
//                     slide={imageController.slide}
//                 /> : null
//             }

//             <div className="iq-message-body iq-current-user">
//                 {/* <div className="chat-profile">
//                 <Image src={props.userImg} alt="chat-user" className="avatar-40 rounded-pill" loading="lazy" />
//             </div> */}
//                 <div className="iq-chat-text">
//                     <small className="iq-chating p-0">{props.username}, {props.messageTime}</small>
//                     <div className="d-flex align-items-center justify-content-end">
//                         <div className={`iq-chating-content d-flex align-items-center ${props.Image === 'true' ? 'iq-image' : ''}`}>
//                             <p className="mr-2 mb-0">{props.message}</p>
//                             {imageUrls?.length > 1 &&
//                                 <div className="d-grid iq-group-image gap-3">
//                                     {
//                                         imageUrls.map((item, i) => {
//                                             return (<Link onClick={() => imageOnSlide(i + 1)} to="#">
//                                                 <Image src={item} className="avatar-130 rounded" alt="chat-user" loading="lazy" />
//                                             </Link>)
//                                         })
//                                     }

//                                 </div>
//                             }
//                             {imageUrls?.length === 1 &&
//                                 <div className="">
//                                     <Link onClick={() => imageOnSlide(1)} to="#">
//                                         <Image src={imageUrls} className="rounded iq-single-image" alt="chat-user" loading="lazy" />
//                                     </Link>
//                                 </div>
//                             }
//                             <span className="badge rounded-pill bg-warning">{props.unreadMessage}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Fragment>
//     )
// })

// Rightchat.displayName = 'Rightchat'
// export default Rightchat










import { useState, memo, Fragment, useEffect } from 'react'

//React-bootstrap
import { Image } from 'react-bootstrap'

//Router
import { Link } from 'react-router-dom'

//Pulgin
import FsLightbox from 'fslightbox-react';


//Img
import img1 from '../../../../assets/modules/chat/images/01.png'
import img2 from '../../../../assets/modules/chat/images/02.png'
import img3 from '../../../../assets/modules/chat/images/03.png'
import img4 from '../../../../assets/modules/chat/images/04.png'
import img5 from '../../../../assets/modules/chat/images/05.png'

const Rightchat = memo((props) => {
    const [imageController, setImageController] = useState({
        toggler: false,
        slide: 1
    });
    const [imageUrls, setImageUrls] = useState(null)

    function imageOnSlide(number) {
        setImageController({
            toggler: !imageController.toggler,
            slide: number
        });
    }

    const imageArrays = () => {
        let urls = props.attachments.map(item => {
            if (item.name) {
                return process.env.REACT_APP_BASE_IMAGE_URL + '/' + item.name
            }
        })
        setImageUrls(urls)
    }
    useEffect(() => {
        imageArrays();
    }, [props.attachments])

    return (
        <Fragment>

            {
                imageUrls?.length > 0 ? <FsLightbox
                    types={[...new Array(imageUrls.length).fill('image')]}
                    toggler={imageController.toggler}
                    sources={imageUrls}
                    slide={imageController.slide}
                /> : null
            }

            <div className="iq-message-body iq-current-user">
                {/* <div className="chat-profile">
                <Image src={props.userImg} alt="chat-user" className="avatar-40 rounded-pill" loading="lazy" />
            </div> */}
                <div className="iq-chat-text">
                    <small className="iq-chating p-0">{props.username}, {props.messageTime}</small>
                    <div className="d-flex align-items-center justify-content-end">
                        <div className={`iq-chating-content d-flex align-items-center ${props.Image === 'true' ? 'iq-image' : ''}`}>
                            {/* <p className="mr-2 mb-0">{props.message}</p> */}
                            <div>
                            {imageUrls?.length > 1 &&
                                <div className="d-grid iq-group-image gap-3">
                                    {
                                        imageUrls.map((item, i) => {
                                            return (<Link onClick={() => imageOnSlide(i + 1)} to="#">
                                                <Image src={item} className="avatar-130 rounded" alt="chat-user" loading="lazy" />
                                            </Link>)
                                        })
                                    }
                                    
                                </div>
                            }
                            {imageUrls?.length === 1 &&
                                <div className="">
                                    <Link onClick={() => imageOnSlide(1)} to="#">
                                        <Image src={imageUrls} className="rounded iq-single-image" alt="chat-user" loading="lazy" />
                                    </Link>
                                </div>
                            }
                            <p className="mr-2 mb-0">{props.message}</p>
                            </div>
                            <span className="badge rounded-pill bg-warning">{props.unreadMessage}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
})

Rightchat.displayName = 'Rightchat'
export default Rightchat