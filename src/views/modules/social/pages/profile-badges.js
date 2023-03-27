import React,{memo,Fragment} from 'react'

// React-bootstrap
import {Row} from 'react-bootstrap'

//Component
import Profilebadge from '../components/profile-badges'

//Img
import badge from '../../../../assets/modules/social/images/profile-badges/01.png'
import badge1 from '../../../../assets/modules/social/images/profile-badges/02.png'
import badge2 from '../../../../assets/modules/social/images/profile-badges/03.png'
import badge3 from '../../../../assets/modules/social/images/profile-badges/04.png'
import badge4 from '../../../../assets/modules/social/images/profile-badges/05.png'
import badge5 from '../../../../assets/modules/social/images/profile-badges/06.png'
import badge6 from '../../../../assets/modules/social/images/profile-badges/07.png'
import badge7 from '../../../../assets/modules/social/images/profile-badges/08.png'
import badge8 from '../../../../assets/modules/social/images/profile-badges/09.png'
import badge9 from '../../../../assets/modules/social/images/profile-badges/10.png'
import badge10 from '../../../../assets/modules/social/images/profile-badges/11.png'
import badge11 from '../../../../assets/modules/social/images/profile-badges/12.png'

const Profilebadges = memo(() => {
  return (
    <Fragment>
             <Row className="my-5">
                <div className="d-grid d-grid-template-1fr-22">
                    <Profilebadge profileimg={badge} profilebadgestitle="Gold User" profilebadgesdec="Richard McClintock, a Latin professor consectetur." profilebadgessub="Unlock Jan 15th, 2020"></Profilebadge>
                    <Profilebadge profileimg={badge1} profilebadgestitle="Gold User" profilebadgesdec="Richard McClintock, a Latin professor consectetur." profilebadgessub="Unlock Jan 15th, 2020"></Profilebadge>
                    <Profilebadge profileimg={badge2} profilebadgestitle="Gold User" profilebadgesdec="Richard McClintock, a Latin professor consectetur." profilebadgessub="Unlock Jan 15th, 2020"></Profilebadge>
                    <Profilebadge profileimg={badge3} profilebadgestitle="Gold User" profilebadgesdec="Richard McClintock, a Latin professor consectetur." profilebadgessub="Unlock Jan 15th, 2020"></Profilebadge>
                    <Profilebadge profileimg={badge4} profilebadgestitle="Gold User" profilebadgesdec="Richard McClintock, a Latin professor consectetur." profilebadgessub="Unlock Jan 15th, 2020"></Profilebadge>
                    <Profilebadge profileimg={badge5} profilebadgestitle="Gold User" profilebadgesdec="Richard McClintock, a Latin professor consectetur." profilebadgessub="Unlock Jan 15th, 2020"></Profilebadge>
                    <Profilebadge profileimg={badge6} profilebadgestitle="Gold User" profilebadgesdec="Richard McClintock, a Latin professor consectetur." profilebadgessub="Unlock Jan 15th, 2020"></Profilebadge>
                    <Profilebadge profileimg={badge7} profilebadgestitle="Gold User" profilebadgesdec="Richard McClintock, a Latin professor consectetur." profilebadgessub="Unlock Jan 15th, 2020"></Profilebadge>
                    <Profilebadge profileimg={badge8} profilebadgestitle="Gold User" profilebadgesdec="Richard McClintock, a Latin professor consectetur." profilebadgessub="Unlock Jan 15th, 2020"></Profilebadge>
                    <Profilebadge profileimg={badge9} profilebadgestitle="Gold User" profilebadgesdec="Richard McClintock, a Latin professor consectetur." profilebadgessub="Unlock Jan 15th, 2020"></Profilebadge>
                    <Profilebadge profileimg={badge10} profilebadgestitle="Gold User" profilebadgesdec="Richard McClintock, a Latin professor consectetur." profilebadgessub="Unlock Jan 15th, 2020"></Profilebadge>
                    <Profilebadge profileimg={badge11} profilebadgestitle="Gold User" profilebadgesdec="Richard McClintock, a Latin professor consectetur." profilebadgessub="Unlock Jan 15th, 2020"></Profilebadge>
                </div>
            </Row>
    </Fragment>
  )
}
)

Profilebadges.displayName="Profilebadges"
export default Profilebadges