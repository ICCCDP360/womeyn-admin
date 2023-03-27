import React,{memo,Fragment} from 'react' 


//Componet
import Profileimages1 from '../components/profile-image'

//Img
import img1 from '../../../../assets/modules/social/images/profile-event/19.png'
import img2 from '../../../../assets/modules/social/images/profile-event/02.png'
import img3 from '../../../../assets/modules/social/images/profile-event/03.png'
import img4 from '../../../../assets/modules/social/images/profile-event/04.png'
import img5 from '../../../../assets/modules/social/images/profile-event/05.png'
import img6 from '../../../../assets/modules/social/images/profile-event/06.png'
import img7 from '../../../../assets/modules/social/images/profile-event/07.png'
import img8 from '../../../../assets/modules/social/images/profile-event/08.png'
import img9 from '../../../../assets/modules/social/images/profile-event/09.png'
import img10 from '../../../../assets/modules/social/images/profile-event/10.png'
import img11 from '../../../../assets/modules/social/images/profile-event/11.png'
import img12 from '../../../../assets/modules/social/images/profile-event/12.png'
import img13 from '../../../../assets/modules/social/images/profile-event/13.png'
import img14 from '../../../../assets/modules/social/images/profile-event/14.png'
import img15 from '../../../../assets/modules/social/images/profile-event/15.png'

const Profileimages = memo(() => {
    return (
        <Fragment>
             <div className="d-grid gap-3 d-grid-template-1fr-19">
                 <Profileimages1 profileimagesimg={img1} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                 <Profileimages1 profileimagesimg={img2} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                 <Profileimages1 profileimagesimg={img3} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                 <Profileimages1 profileimagesimg={img4} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                 <Profileimages1 profileimagesimg={img5} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                 <Profileimages1 profileimagesimg={img6} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                 <Profileimages1 profileimagesimg={img7} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                 <Profileimages1 profileimagesimg={img8} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                 <Profileimages1 profileimagesimg={img9} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                 <Profileimages1 profileimagesimg={img10} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                 <Profileimages1 profileimagesimg={img11} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                 <Profileimages1 profileimagesimg={img12} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                 <Profileimages1 profileimagesimg={img13} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                 <Profileimages1 profileimagesimg={img14} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                 <Profileimages1 profileimagesimg={img15} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
             </div>
        </Fragment>
    )
}
)
Profileimages.displayName="Profileimages"
export default Profileimages