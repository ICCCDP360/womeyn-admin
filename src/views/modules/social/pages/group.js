import React,{memo,Fragment} from 'react'

//components
import Groupcard from '../components/group'

//img
import profile from '../../../../assets/modules/social/images/profile-event/01.png'
import profile1 from '../../../../assets/modules/social/images/profile-event/02.png'
import profile2 from '../../../../assets/modules/social/images/profile-event/03.png'
import profile3 from '../../../../assets/modules/social/images/profile-event/04.png'
import profile4 from '../../../../assets/modules/social/images/profile-event/05.png'
import profile5 from '../../../../assets/modules/social/images/profile-event/06.png'
import profile6 from '../../../../assets/modules/social/images/profile-event/07.png'
import profile7 from '../../../../assets/modules/social/images/profile-event/08.png'
import groupimg from '../../../../assets/modules/social/images/group/01.jpg'
import groupimg2 from '../../../../assets/modules/social/images/group/02.jpg'
import groupimg3 from '../../../../assets/modules/social/images/group/03.jpg'
import groupimg4 from '../../../../assets/modules/social/images/group/04.jpg'
import groupimg5 from '../../../../assets/modules/social/images/group/05.jpg'
import groupimg6 from '../../../../assets/modules/social/images/group/06.jpg'
import groupimg7 from '../../../../assets/modules/social/images/group/07.jpg'
import groupimg8 from '../../../../assets/modules/social/images/group/08.jpg'
import groupimg9 from '../../../../assets/modules/social/images/group/09.jpg'
import avatar from '../../../../assets/modules/social/images/avatar/01.png'
import avatar1 from '../../../../assets/modules/social/images/avatar/02.png'
import avatar2 from '../../../../assets/modules/social/images/avatar/03.png'
import avatar3 from '../../../../assets/modules/social/images/avatar/04.png'
import avatar4 from '../../../../assets/modules/social/images/avatar/05.png'
import avatar5 from '../../../../assets/modules/social/images/avatar/06.png'

const Group = memo(() => {
  return (
    <Fragment>
      <div className="d-grid gap-3 d-grid-template-1fr-19">
          <Groupcard img={profile} groupimg={groupimg} grouptitle="Designer" groupdec="Lorem Ipsum data" grouppost="Post" grouppostnumber="600" groupmember="Member" grouprnumber="320" groupvisit="Visit" groupvisitnumber="1.2k" groupavatar={avatar} groupavatar1={avatar1} groupavatar2={avatar2} groupavatar3={avatar3} groupavatar4={avatar4} groupavatar5={avatar5}></Groupcard>
          <Groupcard img={profile1} groupimg={groupimg2} grouptitle="R & D" groupdec="Lorem Ipsum data" grouppost="Post" grouppostnumber="300" groupmember="Member" grouprnumber="210" groupvisit="Visit" groupvisitnumber="1.1k" groupavatar={avatar} groupavatar1={avatar1} groupavatar2={avatar2} groupavatar3={avatar3} groupavatar4={avatar4} groupavatar5={avatar5}></Groupcard>
          <Groupcard img={profile2} groupimg={groupimg3} grouptitle="Graphics" groupdec="Lorem Ipsum data" grouppost="Post" grouppostnumber="320" groupmember="Member" grouprnumber="100" groupvisit="Visit" groupvisitnumber="1.0k" groupavatar={avatar} groupavatar1={avatar1} groupavatar2={avatar2} groupavatar3={avatar3} groupavatar4={avatar4} groupavatar5={avatar5}></Groupcard>
          <Groupcard img={profile3} groupimg={groupimg4} grouptitle="Developer" groupdec="Lorem Ipsum data" grouppost="Post" grouppostnumber="800" groupmember="Member" grouprnumber="480" groupvisit="Visit" groupvisitnumber="2.2k" groupavatar={avatar} groupavatar1={avatar1} groupavatar2={avatar2} groupavatar3={avatar3} groupavatar4={avatar4} groupavatar5={avatar5}></Groupcard>
          <Groupcard img={profile4} groupimg={groupimg5} grouptitle="Tester" groupdec="Lorem Ipsum data" grouppost="Post" grouppostnumber="200" groupmember="Member" grouprnumber="100" groupvisit="Visit" groupvisitnumber="32k" groupavatar={avatar} groupavatar1={avatar1} groupavatar2={avatar2} groupavatar3={avatar3} groupavatar4={avatar4} groupavatar5={avatar5}></Groupcard>
          <Groupcard img={profile5} groupimg={groupimg6} grouptitle="Events" groupdec="Lorem Ipsum data" grouppost="Post" grouppostnumber="1000" groupmember="Member" grouprnumber="500" groupvisit="Visit" groupvisitnumber="3.2k" groupavatar={avatar} groupavatar1={avatar1} groupavatar2={avatar2} groupavatar3={avatar3} groupavatar4={avatar4} groupavatar5={avatar5}></Groupcard>
          <Groupcard img={profile6} groupimg={groupimg7} grouptitle="Coder" groupdec="Lorem Ipsum data" grouppost="Post" grouppostnumber="300" groupmember="Member" grouprnumber="220" groupvisit="Visit" groupvisitnumber="25k" groupavatar={avatar} groupavatar1={avatar1} groupavatar2={avatar2} groupavatar3={avatar3} groupavatar4={avatar4} groupavatar5={avatar5}></Groupcard>
          <Groupcard img={profile7} groupimg={groupimg8} grouptitle="Themes" groupdec="Lorem Ipsum data" grouppost="Post" grouppostnumber="1200" groupmember="Member" grouprnumber="800" groupvisit="Visit" groupvisitnumber="3.2k" groupavatar={avatar} groupavatar1={avatar1} groupavatar2={avatar2} groupavatar3={avatar3} groupavatar4={avatar4} groupavatar5={avatar5}></Groupcard>
          <div className="d-grid gap-3 d-grid-template-1fr-19 mb-5">
          <Groupcard img={profile} groupimg={groupimg9} grouptitle="Review" groupdec="Lorem Ipsum data" grouppost="Post" grouppostnumber="300" groupmember="Member" grouprnumber="1000" groupvisit="Visit" groupvisitnumber="4.5k" groupavatar={avatar} groupavatar1={avatar1} groupavatar2={avatar2} groupavatar3={avatar3} groupavatar4={avatar4} groupavatar5={avatar5}></Groupcard>
          </div>
      </div>
    </Fragment>
  )
}
)

Group.displayName="Group"
export default Group