import { memo, Fragment } from 'react'

//Component
import Chatheader from '../components/chat-header'
import Rightchat from '../components/right-chat'
import Leftchat from '../components/left-chat'
import Chatfooter from '../components/chat-footer'
import Card from '../../../../components/bootstrap/card'

//Img
import img1 from '../../../../assets/modules/chat/images/avatar/01.png'
import img2 from '../../../../assets/modules/chat/images/avatar/02.png'
import img3 from '../../../../assets/modules/chat/images/avatar/03.png'
import img4 from '../../../../assets/modules/chat/images/avatar/04.png'
import img5 from '../../../../assets/modules/chat/images/avatar/06.png'
import img6 from '../../../../assets/modules/chat/images/avatar/05.png'
import img7 from '../../../../assets/modules/chat/images/avatar/09.png'
import img8 from '../../../../assets/modules/chat/images/avatar/11.png'
import img9 from '../../../../assets/modules/chat/images/avatar/12.png'
import img10 from '../../../../assets/modules/chat/images/avatar/08.png'
import img11 from '../../../../assets/modules/chat/images/avatar/07.png'


const Chat = memo((props) => {

    return (
        <Fragment>
            <div className="tab-content"  >
                <Card className={`${props.show === '1' ? 'active' : ''} mb-0  fade show tab-pane `} role="tabpanel">
                    <Chatheader userName="Ellyse Perry" userProfileImg={img3} status="Online" statusidentify="online" />
                    <Card.Body className="bg-body chat-body">
                        <div className="chat-day-title">
                            <span className="main-title">Feb 1,2021</span>
                        </div>
                        <Rightchat username="Ross Taylor" messageTime="16:34" userImg={img2} message="Hey, how are you??" />
                        <Leftchat username="Ellyse Perry" messageTime="16:40" userImg={img3} message="Hey, I am looking for the best dashboard template. Could you please help me to find it out?" />
                        <Rightchat username="Ross Taylor" messageTime="16:42" userImg={img2} message="Absolutely Yes! Hope-UI is the Responsive Bootstrap 5 Admin Dashboard Template." />
                        <Leftchat username="Ellyse Perry" messageTime="17:00" userImg={img3} message="Looks clean and fresh UI." />
                        <Leftchat username="Ellyse Perry" messageTime="17:01" userImg={img3} message="I will purchase it for sure." />
                        <Rightchat username="Ross Taylor" messageTime="17:10" userImg={img2} message="Ok Cool!!" />
                        <div className="chat-day-title">
                            <span className="main-title">Today</span>
                        </div>
                        <Rightchat username="Ross Taylor" messageTime="08:00" userImg={img2} Image="true" groupImages="true" />
                        <Leftchat username="Ellyse Perry" messageTime="12:00" userImg={img3} message="This are nice pics." />
                        <Leftchat username="Ellyse Perry" messageTime="12:05" userImg={img3} message="I want some teachnic for fast code can you help?" />
                        <Rightchat username="Ross Taylor" messageTime="13:10" userImg={img2} message="Yes" />
                        <div></div>
                        <Leftchat username="Ellyse Perry" messageTime="15:00" userImg={img3} Image="true" singleImage="true" />
                    </Card.Body>
                    <Chatfooter />
                </Card>
                <Card className={`${props.show === '2' ? 'active' : ''}  mb-0 fade show tab-pane`} role="tabpanel">
                    <Chatheader userName="Faf Du Plessis" userProfileImg={img1} tatus="Last seen 10 min ago" statusidentify="offline" />
                    <Card.Body className="chat-body bg-body">
                        <div className="chat-day-title">
                            <span className="main-title">Feb 1,2021</span>
                        </div>
                        <Rightchat username="Ross Taylor" messageTime="16:34" userImg={img2} message="Hey, how are you??" />
                        <Leftchat username="Faf Du Plessis" messageTime="16:40" userImg={img1} message="I want some teachnic for fast code can you help?" />
                        <Leftchat username="Faf Du Plessis" messageTime="16:40" userImg={img1} message="How can we help? We're here for you! " />
                        <Rightchat username="Ross Taylor" messageTime="16:42" userImg={img2} message="Lorem ipsum dolor sit" />
                        <Leftchat username="Faf Du Plessis" messageTime="17:00" userImg={img1} Image="true" groupImages="true" />
                        <Leftchat username="Faf Du Plessis" messageTime="17:01" userImg={img1} message="Howz this all images??" />
                        <Rightchat username="Ross Taylor" messageTime="17:10" userImg={img2} message="Nice!" />
                        <div className="chat-day-title">
                            <span className="main-title">Today</span>
                        </div>
                        <Rightchat username="Ross Taylor" messageTime="08:00" userImg={img2} Image="true" singleImage="true" />
                        <Leftchat username="Faf Du Plessis" messageTime="12:00" userImg={img1} message="Nice place for holiday." />
                        <Leftchat username="Faf Du Plessis" messageTime="12:05" userImg={img1} message="Where is this place came?" />
                        <Rightchat username="Ross Taylor" messageTime="13:10" userImg={img2} message="This place name is devi pada." />
                        <div></div>
                        <Leftchat username="Faf Du Plessis" messageTime="15:00" userImg={img1} message="Okay, I will visit this place." />
                    </Card.Body>
                    <Chatfooter />
                </Card>
                <Card className={`${props.show === '3' ? 'active' : ''}    mb-0 fade show tab-pane`} role="tabpanel">
                    <Chatheader userName="Brendon McCullum" userProfileImg={img4} status="last seen 2 min ago" status-identify="offline" />
                    <Card.Body className="chat-body bg-body">
                        <div className="chat-day-title">
                            <span className="main-title">Feb 1,2021</span>
                        </div>
                        <Rightchat username="Ross Taylor" messageTime="16:34" userImg={img2} message="Hey, how are you??" />
                        <Leftchat username="Brendon McCullum" messageTime="16:40" userImg={img4} message="Hey, I am looking for the best dashboard template. Could you please help me to find it out?" />
                        <Rightchat username="Ross Taylor" messageTime="16:42" userImg={img2} message="Absolutely Yes! Hope-UI is the Responsive Bootstrap 5 Admin Dashboard Template." />
                        <Leftchat username="Brendon McCullum" messageTime="17:00" userImg={img4} message="Looks clean and fresh UI." />
                        <Leftchat username="Brendon McCullum" messageTime="17:01" userImg={img4} message="I will purchase it for sure." />
                        <Rightchat username="Ross Taylor" messageTime="17:10" userImg={img2} message="Ok Cool!!" />
                        <div className="chat-day-title">
                            <span className="main-title">Today</span>
                        </div>
                        <Rightchat username="Ross Taylor" messageTime="08:00" userImg={img2} Image="true" groupImages="true" />
                        <Leftchat username="Brendon McCullum" messageTime="12:00" userImg={img4} message="This are nice pics." />
                        <Leftchat username="Brendon McCullum" messageTime="12:05" userImg={img4} message="I want some teachnic for fast code can you help?" />
                        <Rightchat username="Ross Taylor" messageTime="13:10" userImg={img2} message="Yes" />
                        <Leftchat username="Brendon McCullum" messageTime="15:00" userImg={img4} Image="true" singleImage="true" />
                    </Card.Body>
                    <Chatfooter />
                </Card>
                <Card className={`${props.show === '4' ? 'active' : ''}  mb-0 fade show tab-pane`} role="tabpanel">
                    <Chatheader userName="Wade Johnson" userProfileImg={img5} status="last seen 15 min ago" status-identify="offline" />
                    <Card.Body className="chat-body bg-body">
                        <div className="chat-day-title">
                            <span className="main-title">Feb 1,2021</span>
                        </div>
                        <Rightchat username="Ross Taylor" messageTime="16:34" userImg={img2} message="Hey, how are you??" />
                        <Leftchat username="Wade Johnson" messageTime="16:40" userImg={img5} message="Hey, I am looking for the best dashboard template. Could you please help me to find it out?" />
                        <Rightchat username="Ross Taylor" messageTime="16:42" userImg={img2} message="Absolutely Yes! Hope-UI is the Responsive Bootstrap 5 Admin Dashboard Template." />
                        <Leftchat username="Wade Johnson" messageTime="17:00" userImg={img5} message="Looks clean and fresh UI." />
                        <Leftchat username="Wade Johnson" messageTime="17:01" userImg={img5} message="I will purchase it for sure." />
                        <Rightchat username="Ross Taylor" messageTime="17:10" userImg={img2} message="Ok Cool!!" />
                        <div className="chat-day-title">
                            <span className="main-title">Today</span>
                        </div>
                        <Rightchat username="Ross Taylor" messageTime="08:00" userImg={img2} Image="true" groupImages="true" />
                        <Leftchat username="Wade Johnson" messageTime="12:00" userImg={img5} message="This are nice pics." />
                        <Leftchat username="Wade Johnson" messageTime="12:05" userImg={img5} message="I want some teachnic for fast code can you help?" />
                        <Rightchat username="Ross Taylor" messageTime="13:10" userImg={img2} message="Yes" />
                        <Leftchat username="Wade Johnson" messageTime="15:00" userImg={img5} Image="true" singleImage="true" />
                    </Card.Body>
                    <Chatfooter />
                </Card>
                <Card className={`${props.show === '5' ? 'active' : ''}  mb-0 fade show tab-pane`} role="tabpanel">
                    <Chatheader userName="Arlene Cyrus" userProfileImg={img6} status="Online" status-identify="online" />
                    <Card.Body className="chat-body bg-body">
                        <div className="chat-day-title">
                            <span className="main-title">Feb 1,2021</span>
                        </div>
                        <Rightchat username="Ross Taylor" messageTime="16:34" userImg={img2} message="Hey, how are you??" />
                        <Leftchat username="Arlene Cyrus" messageTime="16:40" userImg={img6} message="I want some teachnic for fast code can you help?" />
                        <Leftchat username="Arlene Cyrus" messageTime="16:40" userImg={img6} message="How can we help? We're here for you! " />
                        <Rightchat username="Ross Taylor" messageTime="16:42" userImg={img2} message="Lorem ipsum dolor sit" />
                        <Leftchat username="Arlene Cyrus" messageTime="17:00" userImg={img6} Image="true" groupImages="true" />
                        <Leftchat username="Arlene Cyrus" messageTime="17:01" userImg={img6} message="Howz this all images??" />
                        <Rightchat username="Ross Taylor" messageTime="17:10" userImg={img2} message="Nice!" />
                        <div className="chat-day-title">
                            <span className="main-title">Today</span>
                        </div>
                        <Rightchat username="Ross Taylor" messageTime="08:00" userImg={img2} Image="true" singleImage="true" />
                        <Leftchat username="Arlene Cyrus" messageTime="12:00" userImg={img6} message="Nice place for holiday." />
                        <Leftchat username="Arlene Cyrus" messageTime="12:05" userImg={img6} message="Where is this place came?" />
                        <Rightchat username="Ross Taylor" messageTime="13:10" userImg={img2} message="This place name is devi pada." />
                        <Leftchat username="Arlene Cyrus" messageTime="15:00" userImg={img6} message="Okay, I will visit this place." />
                    </Card.Body>
                    <Chatfooter />
                </Card>
                <Card className={`${props.show === '6' ? 'active' : ''}  mb-0 fade show tab-pane`} role="tabpanel">
                    <Chatheader userName="Darlene Warner" userProfileImg={img7} status="Online" status-identify="online" />
                    <Card.Body className="chat-body bg-body">
                        <div className="chat-day-title">
                            <span className="main-title">Feb 1,2021</span>
                        </div>
                        <Rightchat username="Ross Taylor" messageTime="16:34" userImg={img2} message="Hey, how are you??" />

                        <Leftchat username="Darlene Warner" messageTime="16:40" userImg={img7} message="Hey, I am looking for the best dashboard template. Could you please help me to find it out?" />

                        <Rightchat username="Ross Taylor" messageTime="16:42" userImg={img2} message="Absolutely Yes! Hope-UI is the Responsive Bootstrap 5 Admin Dashboard Template." />

                        <Leftchat username="Darlene Warner" messageTime="17:00" userImg={img7} message="Looks clean and fresh UI." />
                        <Leftchat username="Darlene Warner" messageTime="17:01" userImg={img7} message="I will purchase it for sure." />

                        <Rightchat username="Ross Taylor" messageTime="17:10" userImg={img2} message="Ok Cool!!" />
                        <div className="chat-day-title">
                            <span className="main-title">Today</span>
                        </div>
                        <Rightchat username="Ross Taylor" messageTime="08:00" userImg={img2} Image="true" groupImages="true" />
                        <Leftchat username="Darlene Warner" messageTime="12:00" userImg={img7} message="This are nice pics." />
                        <Leftchat username="Darlene Warner" messageTime="12:05" userImg={img7} message="I want some teachnic for fast code can you help?" />
                        <Rightchat username="Ross Taylor" messageTime="13:10" userImg={img2} message="Yes" />
                        <div></div>
                        <Leftchat username="Darlene Warner" messageTime="15:00" userImg={img7} Image="true" singleImage="true" />
                    </Card.Body>
                    <Chatfooter />
                </Card>
                <Card className={`${props.show === '7' ? 'active' : ''}  mb-0 fade show tab-pane`} role="tabpanel">
                    <Chatheader userName="Jenny Wilson" userProfileImg={img8} status="last seen 1hr ago" status-identify="offline" />
                    <Card.Body className="chat-body bg-body">
                        <div className="chat-day-title">
                            <span className="main-title">Feb 1,2021</span>
                        </div>
                        <Rightchat username="Ross Taylor" messageTime="16:34" userImg={img2} message="Hey, how are you??" />
                        <Leftchat username="Jenny Wilson" messageTime="16:40" userImg={img8} message="I want some teachnic for fast code can you help?" />
                        <Leftchat username="Jenny Wilson" messageTime="16:40" userImg={img8} message="How can we help? We're here for you! " />
                        <Rightchat username="Ross Taylor" messageTime="16:42" userImg={img2} message="Lorem ipsum dolor sit" />
                        <Leftchat username="Jenny Wilson" messageTime="17:00" userImg={img8} Image="true" groupImages="true" />
                        <Leftchat username="Jenny Wilson" messageTime="17:01" userImg={img8} message="Howz this all images??" />
                        <Rightchat username="Ross Taylor" messageTime="17:10" userImg={img2} message="Nice!" />
                        <div className="chat-day-title">
                            <span className="main-title">Today</span>
                        </div>
                        <Rightchat username="Ross Taylor" messageTime="08:00" userImg={img2} Image="true" singleImage="true" />
                        <Leftchat username="Jenny Wilson" messageTime="12:00" userImg={img8} message="Nice place for holiday." />
                        <Leftchat username="Jenny Wilson" messageTime="12:05" userImg={img8} message="Where is this place came?" />
                        <Rightchat username="Ross Taylor" messageTime="13:10" userImg={img2} message="This place name is devi pada." />
                        <div></div>
                        <Leftchat username="Jenny Wilson" messageTime="15:00" userImg={img8} message="Okay, I will visit this place." />
                    </Card.Body>
                    <Chatfooter />
                </Card>
                <Card className={`${props.show === '8' ? 'active' : ''}  mb-0 fade show tab-pane`} role="tabpanel">
                    <Chatheader userName="Devon Lane" userProfileImg={img9} status="Online" status-identify="online" />
                    <Card.Body className="chat-body bg-body">
                        <div className="chat-day-title">
                            <span className="main-title">Feb 1,2021</span>
                        </div>
                        <Rightchat username="Ross Taylor" messageTime="16:34" userImg={img2} message="Hey, how are you??" />
                        <Leftchat username="Devon Lane" messageTime="16:40" userImg={img9} message="I want some teachnic for fast code can you help?" />
                        <Leftchat username="Devon Lane" messageTime="16:40" userImg={img9} message="How can we help? We're here for you! " />
                        <Rightchat username="Ross Taylor" messageTime="16:42" userImg={img2} message="Lorem ipsum dolor sit" />
                        <Leftchat username="Devon Lane" messageTime="17:00" userImg={img9} Image="true" groupImages="true" />
                        <Leftchat username="Devon Lane" messageTime="17:01" userImg={img9} message="Howz this all images??" />
                        <Rightchat username="Ross Taylor" messageTime="17:10" userImg={img2} message="Nice!" />
                        <div className="chat-day-title">
                            <span className="main-title">Today</span>
                        </div>
                        <Rightchat username="Ross Taylor" messageTime="08:00" userImg={img2} Image="true" singleImage="true" />
                        <Leftchat username="Devon Lane" messageTime="12:00" userImg={img9} message="Nice place for holiday." />
                        <Leftchat username="Devon Lane" messageTime="12:05" userImg={img9} message="Where is this place came?" />
                        <Rightchat username="Ross Taylor" messageTime="13:10" userImg={img2} message="This place name is devi pada." />
                        <div></div>
                        <Leftchat username="Devon Lane" messageTime="15:00" userImg={img9} message="Okay, I will visit this place." />
                    </Card.Body>
                    <Chatfooter />
                </Card>
                <Card className={`${props.show === '9' ? 'active' : ''}  mb-0 fade show tab-pane`} role="tabpanel">
                    <Chatheader userName="Christopher" userProfileImg={img10} status="Last seen 29 Jan,2021" status-identify="Offline" />
                    <Card.Body className="chat-body bg-body">
                        <div className="chat-day-title">
                            <span className="main-title">Feb 1,2021</span>
                        </div>
                        <Rightchat username="Ross Taylor" messageTime="16:34" userImg={img2} message="Hey, how are you??" />
                        <Leftchat username="Christopher" messageTime="16:40" userImg={img10} message="Hey, I am looking for the best dashboard template. Could you please help me to find it out?" />
                        <Rightchat username="Ross Taylor" messageTime="16:42" userImg={img2} message="Absolutely Yes! Hope-UI is the Responsive Bootstrap 5 Admin Dashboard Template." />
                        <Leftchat username="Christopher" messageTime="17:00" userImg={img10} message="Looks clean and fresh UI." />
                        <Leftchat username="Christopher" messageTime="17:01" userImg={img10} message="I will purchase it for sure." />
                        <Rightchat username="Ross Taylor" messageTime="17:10" userImg={img2} message="Ok Cool!!" />
                        <div className="chat-day-title">
                            <span className="main-title">Today</span>
                        </div>
                        <Rightchat username="Ross Taylor" messageTime="08:00" userImg={img2} Image="true" groupImages="true" />
                        <Leftchat username="Christopher" messageTime="12:00" userImg={img10} message="This are nice pics." />
                        <Leftchat username="Christopher" messageTime="12:05" userImg={img10} message="I want some teachnic for fast code can you help?" />
                        <Rightchat username="Ross Taylor" messageTime="13:10" userImg={img2} message="Yes" />
                        <div></div>
                        <Leftchat username="Christopher" messageTime="15:00" userImg={img10} Image="true" singleImage="true" />
                    </Card.Body>
                    <Chatfooter />
                </Card>
                <Card className={`${props.show === '10' ? 'active' : ''}  mb-0 fade show tab-pane`} role="tabpanel">
                    <Chatheader userName="Rachel Green" userProfileImg={img11} status="Online" status-identify="online" />
                    <Card.Body className="chat-body bg-body">
                        <div className="chat-day-title">
                            <span className="main-title">Feb 1,2021</span>
                        </div>
                        <Rightchat username="Ross Taylor" messageTime="16:34" userImg={img2} message="Hey, how are you??" />
                        <Leftchat username="Rachel Green" messageTime="16:40" userImg={img11} message="I want some teachnic for fast code can you help?" />
                        <Leftchat username="Rachel Green" messageTime="16:40" userImg={img11} message="How can we help? We're here for you! " />
                        <Rightchat username="Ross Taylor" messageTime="16:42" userImg={img2} message="Lorem ipsum dolor sit" />
                        <Leftchat username="Rachel Green" messageTime="17:00" userImg={img11} Image="true" groupImages="true" />
                        <Leftchat username="Rachel Green" messageTime="17:01" userImg={img11} message="Howz this all images??" />
                        <Rightchat username="Ross Taylor" messageTime="17:10" userImg={img2} message="Nice!" />
                        <div className="chat-day-title">
                            <span className="main-title">Today</span>
                        </div>
                        <Rightchat username="Ross Taylor" messageTime="08:00" userImg={img2} Image="true" singleImage="true" />
                        <Leftchat username="Rachel Green" messageTime="12:00" userImg={img11} message="Nice place for holiday." />
                        <Leftchat username="Rachel Green" messageTime="12:05" userImg={img11} message="Where is this place came?" />
                        <Rightchat username="Ross Taylor" messageTime="13:10" userImg={img2} message="This place name is devi pada." />
                        <div></div>
                        <Leftchat username="Rachel Green" messageTime="15:00" userImg={img11} message="Okay, I will visit this place." />
                    </Card.Body>
                    <Chatfooter />
                </Card>
            </div>
        </Fragment>
    )
})

Chat.displayName = "Chat"
export default Chat
