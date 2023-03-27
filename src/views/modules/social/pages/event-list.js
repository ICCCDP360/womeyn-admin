import React,{memo,Fragment} from 'react'

//Components 
import Eventlists from '../components/event-list'

//Img
import event1 from '../../../../assets/modules/social/images/profile-event/19.png'
import event2 from '../../../../assets/modules/social/images/profile-event/02.png'
import event3 from '../../../../assets/modules/social/images/profile-event/03.png'
import event4 from '../../../../assets/modules/social/images/profile-event/04.png'
import event5 from '../../../../assets/modules/social/images/profile-event/05.png'
import event6 from '../../../../assets/modules/social/images/profile-event/06.png'
import event7 from '../../../../assets/modules/social/images/profile-event/07.png'
import event8 from '../../../../assets/modules/social/images/profile-event/08.png'
import img1 from '../../../../assets/modules/social/images/avatar/01.png'
import img2 from '../../../../assets/modules/social/images/avatar/02.png'
import img3 from '../../../../assets/modules/social/images/avatar/03.png'
import img4 from '../../../../assets/modules/social/images/avatar/04.png'
import img5 from '../../../../assets/modules/social/images/avatar/05.png'

const Eventlist = memo(() => {
  return (
    <Fragment>
        <div className="d-grid gap-3 d-grid-template-1fr-19">
            <Eventlists img={event1} month="Jan" date="01" title="New Year Celibration" dec="Lorem Ipsum is simply dummy text" cardimg={img1} cardimg2={img2} cardimg3={img3} cardimg4={img4} cardimg5={img5} classname="mb-0"></Eventlists>
            <Eventlists img={event2} month="Jan" date="24" title="Birthday Celibration" dec="Lorem Ipsum is simply dummy text" cardimg={img1} cardimg2={img2} cardimg3={img3} cardimg4={img4} cardimg5={img5} classname="mb-0"></Eventlists>
            <Eventlists img={event3} month="Jan" date="26" title="Republic Day" dec="Lorem Ipsum is simply dummy text" cardimg={img1} cardimg2={img2} cardimg3={img3} cardimg4={img4} cardimg5={img5} classname="mb-0"></Eventlists>
            <Eventlists img={event4} month="Feb" date="04" title="Meetings & Conventions" dec="Lorem Ipsum is simply dummy text" cardimg={img1} cardimg2={img2} cardimg3={img3} cardimg4={img4} cardimg5={img5} classname="mb-0"></Eventlists>
            <Eventlists img={event5} month="March" date="01" title="Fun Events and Festivals" dec="Lorem Ipsum is simply dummy text" cardimg={img1} cardimg2={img2} cardimg3={img3} cardimg4={img4} cardimg5={img5} classname="mb-0"></Eventlists>
            <Eventlists img={event6} month="March" date="10" title="Atlanta Retail Show" dec="Lorem Ipsum is simply dummy text" cardimg={img1} cardimg2={img2} cardimg3={img3} cardimg4={img4} cardimg5={img5} classname="mb-0"></Eventlists>
            <Eventlists img={event7} month="March" date="14" title="Holi in the City" dec="Lorem Ipsum is simply dummy text" cardimg={img1} cardimg2={img2} cardimg3={img3} cardimg4={img4} cardimg5={img5} classname="mb-0"></Eventlists>
            <Eventlists img={event8} month="Mar" date="16" title="Insurance Innovators" dec="Lorem Ipsum is simply dummy text" cardimg={img1} cardimg2={img2} cardimg3={img3} cardimg4={img4} cardimg5={img5} classname="mb-0"></Eventlists>
      </div>
    </Fragment>
  )
})

Eventlist.displayName="Eventlist"
export default Eventlist