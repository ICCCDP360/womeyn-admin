import {memo,Fragment,useEffect} from 'react'

// React-boostrap
import {Row,Col,Image,Dropdown,Button} from 'react-bootstrap'

// Router
import {Link} from 'react-router-dom'

//Components
import Card from "../../../../components/bootstrap/card"
import Folder from "../components/folder"
import CustomToggle from "../../../../components/dropdowns"
import Progress from '../../../../components/progress.js'

//Apexcharts
import Chart from "react-apexcharts";

// Redux Selector / Action
import { useSelector } from 'react-redux';

// Import selectors & action from setting store
import * as SettingSelector from '../../../../store/setting/selectors'

//Img
import img1 from '../../../../assets/modules/file-manager/images/svg/13.svg'
import img2 from '../../../../assets/modules/file-manager/images/svg/12.svg'
import img3 from '../../../../assets/modules/file-manager/images/svg/11.svg'
import img4 from '../../../../assets/modules/file-manager/images/18.png'
import img5 from '../../../../assets/modules/file-manager/images/10.png'
import img6 from '../../../../assets/modules/file-manager/images/9.png'
import img7 from '../../../../assets/modules/file-manager/images/17.png'
import img9 from '../../../../assets/modules/file-manager/images/svg/14.svg'
import img10 from '../../../../assets/modules/file-manager/images/svg/15.svg'



const Dashboard = memo(() => {
    useSelector(SettingSelector.theme_color)
    const getVariableColor = () => {
        let prefix = getComputedStyle(document.body).getPropertyValue('--prefix') || 'bs-';
        if (prefix) {
          prefix = prefix.trim()
        }
        const color1 = getComputedStyle(document.body).getPropertyValue(`--${prefix}primary`);
        const color2 = getComputedStyle(document.body).getPropertyValue(`--${prefix}info`);
        const color3 = getComputedStyle(document.body).getPropertyValue(`--${prefix}primary-tint-20`);
        const color4 = getComputedStyle(document.body).getPropertyValue(`--${prefix}warning`);
        return {
          primary: color1.trim(),
          info: color2.trim(),
          warning: color4.trim(),
          primary_light: color3.trim(),
        };
      }
      const variableColors = getVariableColor();
      const colors = [variableColors.primary, variableColors.info]
    useEffect(() => {
        return () => colors
    })
    
    const chart1 ={ 
        options : {
            labels: ['used of 100GB'],
          chart: {
          type: 'radialBar',
          offsetY: -20,
          sparkline: {
            enabled: true
          },
        },
        colors: colors,
        
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#3a57e81a",
              show: true,
              startAngle: undefined,
              endAngle: undefined,
              strokeWidth: '97%',
              opacity: 1,
              margin: 5, 
              dropShadow: {
                  enabled: false,
                  top: 0,
                  left: 0,
                  blur: 3,
                  opacity: 0.5
              }
          },
            dataLabels: {
             name: {
                fontSize: '16px',
                color: undefined,
                offsetY: 20,
              },
              value: {
                offsetY: -25,
                fontSize: '40px',
                color: undefined,
                formatter: function (val) {
                  return val + "GB";
                }
              },
              
            }
          }
        },
        grid: {
          padding: {
            top: -10
          }
        },
        },
        series: [75]
    }
    const chart2 ={
        options : {
            colors: colors,
      chart: {
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show:false,
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        width: 3,
        dashArray: 0, 
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
        axisBorder: {
          show: false,
          
      },
      axisTicks: {
          show: false,
          
      },
      },
      grid: {
        show: true,
        strokeDashArray: 3,
    },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value + " GB";
          }
        },
      }
        },
        series: [
            {
              name: 'Booked',
              data: [70, 40, 90, 40, 70, 30, 80]
            }],
    }

    const svg1 = <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
                    <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
                </svg>
    const table = [
        {
            file: <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M2 11.0786C2.05 13.4166 2.19 17.4156 2.21 17.8566C2.281 18.7996 2.642 19.7526 3.204 20.4246C3.986 21.3676 4.949 21.7886 6.292 21.7886C8.148 21.7986 10.194 21.7986 12.181 21.7986C14.176 21.7986 16.112 21.7986 17.747 21.7886C19.071 21.7886 20.064 21.3566 20.836 20.4246C21.398 19.7526 21.759 18.7896 21.81 17.8566C21.83 17.4856 21.93 13.1446 21.99 11.0786H2Z" fill="currentColor"></path>
                        <path d="M11.2451 15.3843V16.6783C11.2451 17.0923 11.5811 17.4283 11.9951 17.4283C12.4091 17.4283 12.7451 17.0923 12.7451 16.6783V15.3843C12.7451 14.9703 12.4091 14.6343 11.9951 14.6343C11.5811 14.6343 11.2451 14.9703 11.2451 15.3843Z" fill="currentColor"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.211 14.5565C10.111 14.9195 9.762 15.1515 9.384 15.1015C6.833 14.7455 4.395 13.8405 2.337 12.4815C2.126 12.3435 2 12.1075 2 11.8555V8.38949C2 6.28949 3.712 4.58149 5.817 4.58149H7.784C7.972 3.12949 9.202 2.00049 10.704 2.00049H13.286C14.787 2.00049 16.018 3.12949 16.206 4.58149H18.183C20.282 4.58149 21.99 6.28949 21.99 8.38949V11.8555C21.99 12.1075 21.863 12.3425 21.654 12.4815C19.592 13.8465 17.144 14.7555 14.576 15.1105C14.541 15.1155 14.507 15.1175 14.473 15.1175C14.134 15.1175 13.831 14.8885 13.746 14.5525C13.544 13.7565 12.821 13.1995 11.99 13.1995C11.148 13.1995 10.433 13.7445 10.211 14.5565ZM13.286 3.50049H10.704C10.031 3.50049 9.469 3.96049 9.301 4.58149H14.688C14.52 3.96049 13.958 3.50049 13.286 3.50049Z" fill="currentColor"></path>
                    </svg>,
            name: 'Marcus Family.jpg',
            date: '16 Oct,11:23m',
            size: '12 MB',
            remove: svg1
        },
        {
            file: <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.07996 6.6499V6.6599C7.64896 6.6599 7.29996 7.0099 7.29996 7.4399C7.29996 7.8699 7.64896 8.2199 8.07996 8.2199H11.069C11.5 8.2199 11.85 7.8699 11.85 7.4289C11.85 6.9999 11.5 6.6499 11.069 6.6499H8.07996ZM15.92 12.7399H8.07996C7.64896 12.7399 7.29996 12.3899 7.29996 11.9599C7.29996 11.5299 7.64896 11.1789 8.07996 11.1789H15.92C16.35 11.1789 16.7 11.5299 16.7 11.9599C16.7 12.3899 16.35 12.7399 15.92 12.7399ZM15.92 17.3099H8.07996C7.77996 17.3499 7.48996 17.1999 7.32996 16.9499C7.16996 16.6899 7.16996 16.3599 7.32996 16.1099C7.48996 15.8499 7.77996 15.7099 8.07996 15.7399H15.92C16.319 15.7799 16.62 16.1199 16.62 16.5299C16.62 16.9289 16.319 17.2699 15.92 17.3099Z" fill="currentColor"></path>
                </svg>,
            name: 'Work.Doc',
            date: '20 Nov,12:40pm',
            size: '4.3 MB',
            remove: svg1
        },
        {
            file: <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M21.3309 7.44251C20.9119 7.17855 20.3969 7.1552 19.9579 7.37855L18.4759 8.12677C17.9279 8.40291 17.5879 8.96129 17.5879 9.58261V15.4161C17.5879 16.0374 17.9279 16.5948 18.4759 16.873L19.9569 17.6202C20.1579 17.7237 20.3729 17.7735 20.5879 17.7735C20.8459 17.7735 21.1019 17.7004 21.3309 17.5572C21.7499 17.2943 21.9999 16.8384 21.9999 16.339V8.66179C21.9999 8.1623 21.7499 7.70646 21.3309 7.44251Z" fill="currentColor"></path>
                    <path d="M11.9051 20H6.11304C3.69102 20 2 18.3299 2 15.9391V9.06091C2 6.66904 3.69102 5 6.11304 5H11.9051C14.3271 5 16.0181 6.66904 16.0181 9.06091V15.9391C16.0181 18.3299 14.3271 20 11.9051 20Z" fill="currentColor"></path>
                </svg>,
            name: 'Marcus Family.jpg',
            date: '16 Oct,11:23m',
            size: '12 MB',
            remove: svg1
        },
        {
            file: <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M16.3328 22H7.66618C4.2769 22 2 19.6229 2 16.0843V7.91672C2 4.37811 4.2769 2 7.66618 2H16.3338C19.7231 2 22 4.37811 22 7.91672V16.0843C22 19.6229 19.7231 22 16.3328 22Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.2451 8.67496C11.2451 10.045 10.1301 11.16 8.7601 11.16C7.3891 11.16 6.2751 10.045 6.2751 8.67496C6.2751 7.30496 7.3891 6.18896 8.7601 6.18896C10.1301 6.18896 11.2451 7.30496 11.2451 8.67496ZM19.4005 14.0876C19.6335 14.3136 19.8005 14.5716 19.9105 14.8466C20.2435 15.6786 20.0705 16.6786 19.7145 17.5026C19.2925 18.4836 18.4845 19.2246 17.4665 19.5486C17.0145 19.6936 16.5405 19.7556 16.0675 19.7556H7.6865C6.8525 19.7556 6.1145 19.5616 5.5095 19.1976C5.1305 18.9696 5.0635 18.4446 5.3445 18.1026C5.8145 17.5326 6.2785 16.9606 6.7465 16.3836C7.6385 15.2796 8.2395 14.9596 8.9075 15.2406C9.1785 15.3566 9.4505 15.5316 9.7305 15.7156C10.4765 16.2096 11.5135 16.8876 12.8795 16.1516C13.8132 15.641 14.3552 14.7673 14.827 14.0069L14.8365 13.9916C14.8682 13.9407 14.8997 13.8898 14.9311 13.8391C15.0915 13.5799 15.2495 13.3246 15.4285 13.0896C15.6505 12.7986 16.4745 11.8886 17.5395 12.5366C18.2185 12.9446 18.7895 13.4966 19.4005 14.0876Z" fill="currentColor"></path>
                </svg>,
            name: 'Apha.mkv',
            date: '08 Oct,05:45pm',
            size: '10 MB',
            remove: svg1
        },
    ]
    return (
        <Fragment>
            <Row className=" mt-5">
                <Col lg="8">
                    <h3 className="mb-0">Your Folders</h3>
                    <Row className="row-cols-lg-4 row-cols-md-4 row-cols-1">
                        <Folder foldername="Image" foldersvg="1"        img={img3} id="1"/>
                        <Folder foldername="Video"     foldersvg="2"   img={img2} id="2"/>
                        <Folder foldername="Documents"     foldersvg="3"   img={img1} id="3"/>
                        <Folder foldername="Audio"     foldersvg="4"   img={img9} id="4"/>
                        <Folder foldername="Movies"     foldersvg="5"   img={img2} id="5"/>
                        <Folder foldername="Assignment"     foldersvg="6"   img={img10} id="6"/>
                        <Folder foldername="Ui-Kit"     foldersvg="7"   img={img3} id="7"/>
                        <Folder foldername="Design"     foldersvg="8"   img={img3} id="8"/>
                    </Row>
                </Col>
                <Col lg="4">
                    <Card>
                        <Card.Header>
                            <h4 className="mb-0">Storage Details</h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col sm="12">
                                    <Chart  options={chart1.options} series={chart1.series} type="radialBar"   height="250"  />
                                </Col>
                            </Row>
                            <div className="d-flex mt-3 mt-sm-0">
                                <span className="avatar-50 bg-soft-primary rounded">
                                    <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z" fill="currentColor"></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.07996 6.6499V6.6599C7.64896 6.6599 7.29996 7.0099 7.29996 7.4399C7.29996 7.8699 7.64896 8.2199 8.07996 8.2199H11.069C11.5 8.2199 11.85 7.8699 11.85 7.4289C11.85 6.9999 11.5 6.6499 11.069 6.6499H8.07996ZM15.92 12.7399H8.07996C7.64896 12.7399 7.29996 12.3899 7.29996 11.9599C7.29996 11.5299 7.64896 11.1789 8.07996 11.1789H15.92C16.35 11.1789 16.7 11.5299 16.7 11.9599C16.7 12.3899 16.35 12.7399 15.92 12.7399ZM15.92 17.3099H8.07996C7.77996 17.3499 7.48996 17.1999 7.32996 16.9499C7.16996 16.6899 7.16996 16.3599 7.32996 16.1099C7.48996 15.8499 7.77996 15.7099 8.07996 15.7399H15.92C16.319 15.7799 16.62 16.1199 16.62 16.5299C16.62 16.9289 16.319 17.2699 15.92 17.3099Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                                <div className="w-100 ms-3">
                                    <div className="d-flex justify-content-between">
                                        <h6>Documents</h6>
                                        <p>5,674s</p>
                                    </div>
                                    <Progress softcolors="primary" color="primary" className="shadow-none w-100" value={45} minvalue={0} maxvalue={100} style={{height: "8px"}} />
                                </div>
                            </div>
                            <div className="d-flex my-4">
                                <span className="avatar-50 bg-soft-primary rounded">
                                    <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M21.3309 7.44251C20.9119 7.17855 20.3969 7.1552 19.9579 7.37855L18.4759 8.12677C17.9279 8.40291 17.5879 8.96129 17.5879 9.58261V15.4161C17.5879 16.0374 17.9279 16.5948 18.4759 16.873L19.9569 17.6202C20.1579 17.7237 20.3729 17.7735 20.5879 17.7735C20.8459 17.7735 21.1019 17.7004 21.3309 17.5572C21.7499 17.2943 21.9999 16.8384 21.9999 16.339V8.66179C21.9999 8.1623 21.7499 7.70646 21.3309 7.44251Z" fill="currentColor"></path>
                                        <path d="M11.9051 20H6.11304C3.69102 20 2 18.3299 2 15.9391V9.06091C2 6.66904 3.69102 5 6.11304 5H11.9051C14.3271 5 16.0181 6.66904 16.0181 9.06091V15.9391C16.0181 18.3299 14.3271 20 11.9051 20Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                                <div className="w-100 ms-3">
                                    <div className="d-flex justify-content-between">
                                        <h6>Videos</h6>
                                        <p>1,624</p>
                                    </div>
                                    <Progress softcolors="success" color="success" className="shadow-none w-100" value={25} minvalue={0} maxvalue={100} style={{height: "8px"}} />
                                </div>
                            </div>
                            <div className="d-flex">
                                <span className="avatar-50 bg-soft-primary rounded">
                                    <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M16.3328 22H7.66618C4.2769 22 2 19.6229 2 16.0843V7.91672C2 4.37811 4.2769 2 7.66618 2H16.3338C19.7231 2 22 4.37811 22 7.91672V16.0843C22 19.6229 19.7231 22 16.3328 22Z" fill="currentColor"></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.2451 8.67496C11.2451 10.045 10.1301 11.16 8.7601 11.16C7.3891 11.16 6.2751 10.045 6.2751 8.67496C6.2751 7.30496 7.3891 6.18896 8.7601 6.18896C10.1301 6.18896 11.2451 7.30496 11.2451 8.67496ZM19.4005 14.0876C19.6335 14.3136 19.8005 14.5716 19.9105 14.8466C20.2435 15.6786 20.0705 16.6786 19.7145 17.5026C19.2925 18.4836 18.4845 19.2246 17.4665 19.5486C17.0145 19.6936 16.5405 19.7556 16.0675 19.7556H7.6865C6.8525 19.7556 6.1145 19.5616 5.5095 19.1976C5.1305 18.9696 5.0635 18.4446 5.3445 18.1026C5.8145 17.5326 6.2785 16.9606 6.7465 16.3836C7.6385 15.2796 8.2395 14.9596 8.9075 15.2406C9.1785 15.3566 9.4505 15.5316 9.7305 15.7156C10.4765 16.2096 11.5135 16.8876 12.8795 16.1516C13.8132 15.641 14.3552 14.7673 14.827 14.0069L14.8365 13.9916C14.8682 13.9407 14.8997 13.8898 14.9311 13.8391C15.0915 13.5799 15.2495 13.3246 15.4285 13.0896C15.6505 12.7986 16.4745 11.8886 17.5395 12.5366C18.2185 12.9446 18.7895 13.4966 19.4005 14.0876Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                                <div className="w-100 ms-3">
                                    <div className="d-flex justify-content-between">
                                        <h6>Images</h6>
                                        <p>5,515</p>
                                    </div>
                                    <Progress softcolors="warning" color="warning" className="shadow-none w-100" value={35} minvalue={0} maxvalue={100} style={{height: "8px"}} />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="8">
                    <Card>
                        <Card.Header className="flex-wrap">
                            <h4 className="me-2 mt-2">Activity Chart</h4>
                            <Dropdown>
                                <Dropdown.Toggle as={CustomToggle} variant="text-secondary dropdown-toggle">
                                    This Year
                                </Dropdown.Toggle>
                                <Dropdown.Menu aria-labelledby="dropdownMenuButton1">
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <Chart  options={chart2.options} series={chart2.series} type="line" height="310"  />
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card>
                        <Card.Header>
                            <h4 className="mb-0">Uploading on Drive</h4>
                        </Card.Header>
                        <Card.Body className="d-flex gap-4 flex-column">
                            <div className="d-flex">
                                <p className="drive-header mb-0">Onboarding.zip</p>
                                <div className="drive-progress d-flex align-items-center">
                                    <Progress softcolors="primary" color="primary" className="shadow-none w-50" value={20} minvalue={0} maxvalue={100} style={{height: "4px"}} />
                                    <span className="ms-3">23 mb</span>
                                </div>
                                <svg width="40" viewBox="0 0 24 24" className="text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M16.34 1.99976H7.67C4.28 1.99976 2 4.37976 2 7.91976V16.0898C2 19.6198 4.28 21.9998 7.67 21.9998H16.34C19.73 21.9998 22 19.6198 22 16.0898V7.91976C22 4.37976 19.73 1.99976 16.34 1.99976Z" fill="currentColor"></path>
                                    <path d="M15.0158 13.7703L13.2368 11.9923L15.0148 10.2143C15.3568 9.87326 15.3568 9.31826 15.0148 8.97726C14.6728 8.63326 14.1198 8.63426 13.7778 8.97626L11.9988 10.7543L10.2198 8.97426C9.87782 8.63226 9.32382 8.63426 8.98182 8.97426C8.64082 9.31626 8.64082 9.87126 8.98182 10.2123L10.7618 11.9923L8.98582 13.7673C8.64382 14.1093 8.64382 14.6643 8.98582 15.0043C9.15682 15.1763 9.37982 15.2613 9.60382 15.2613C9.82882 15.2613 10.0518 15.1763 10.2228 15.0053L11.9988 13.2293L13.7788 15.0083C13.9498 15.1793 14.1728 15.2643 14.3968 15.2643C14.6208 15.2643 14.8448 15.1783 15.0158 15.0083C15.3578 14.6663 15.3578 14.1123 15.0158 13.7703Z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <div className="d-flex">
                                <p className="drive-header mb-0">Web Design.zip</p>
                                <div className="drive-progress d-flex align-items-center">
                                    <Progress softcolors="primary" color="primary" className="shadow-none w-50" value={45} minvalue={0} maxvalue={100} style={{height: "4px"}} />
                                    <span className="ms-3">45 mb</span>
                                </div>
                                <svg width="40" viewBox="0 0 24 24" className="text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M16.34 1.99976H7.67C4.28 1.99976 2 4.37976 2 7.91976V16.0898C2 19.6198 4.28 21.9998 7.67 21.9998H16.34C19.73 21.9998 22 19.6198 22 16.0898V7.91976C22 4.37976 19.73 1.99976 16.34 1.99976Z" fill="currentColor"></path>
                                    <path d="M15.0158 13.7703L13.2368 11.9923L15.0148 10.2143C15.3568 9.87326 15.3568 9.31826 15.0148 8.97726C14.6728 8.63326 14.1198 8.63426 13.7778 8.97626L11.9988 10.7543L10.2198 8.97426C9.87782 8.63226 9.32382 8.63426 8.98182 8.97426C8.64082 9.31626 8.64082 9.87126 8.98182 10.2123L10.7618 11.9923L8.98582 13.7673C8.64382 14.1093 8.64382 14.6643 8.98582 15.0043C9.15682 15.1763 9.37982 15.2613 9.60382 15.2613C9.82882 15.2613 10.0518 15.1763 10.2228 15.0053L11.9988 13.2293L13.7788 15.0083C13.9498 15.1793 14.1728 15.2643 14.3968 15.2643C14.6208 15.2643 14.8448 15.1783 15.0158 15.0083C15.3578 14.6663 15.3578 14.1123 15.0158 13.7703Z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <div className="d-flex">
                                <p className="drive-header mb-0">Example.zar</p>
                                <div className="drive-progress d-flex align-items-center">
                                    <Progress softcolors="primary" color="primary" className="shadow-none w-50" value={90} minvalue={0} maxvalue={100} style={{height: "4px"}} />
                                    <span className="ms-3">90 mb</span>
                                </div>
                                <svg width="40" viewBox="0 0 24 24" className="text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M16.34 1.99976H7.67C4.28 1.99976 2 4.37976 2 7.91976V16.0898C2 19.6198 4.28 21.9998 7.67 21.9998H16.34C19.73 21.9998 22 19.6198 22 16.0898V7.91976C22 4.37976 19.73 1.99976 16.34 1.99976Z" fill="currentColor"></path>
                                    <path d="M15.0158 13.7703L13.2368 11.9923L15.0148 10.2143C15.3568 9.87326 15.3568 9.31826 15.0148 8.97726C14.6728 8.63326 14.1198 8.63426 13.7778 8.97626L11.9988 10.7543L10.2198 8.97426C9.87782 8.63226 9.32382 8.63426 8.98182 8.97426C8.64082 9.31626 8.64082 9.87126 8.98182 10.2123L10.7618 11.9923L8.98582 13.7673C8.64382 14.1093 8.64382 14.6643 8.98582 15.0043C9.15682 15.1763 9.37982 15.2613 9.60382 15.2613C9.82882 15.2613 10.0518 15.1763 10.2228 15.0053L11.9988 13.2293L13.7788 15.0083C13.9498 15.1793 14.1728 15.2643 14.3968 15.2643C14.6208 15.2643 14.8448 15.1783 15.0158 15.0083C15.3578 14.6663 15.3578 14.1123 15.0158 13.7703Z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <div className="d-flex ">
                                <p className="drive-header mb-0">Web Design.zip</p>
                                <div className="drive-progress d-flex align-items-center">
                                    <Progress softcolors="primary" color="primary" className="shadow-none w-50" value={45} minvalue={0} maxvalue={100} style={{height: "4px"}} />
                                    <span className="ms-3">45 mb</span>
                                </div>
                                <svg width="40" viewBox="0 0 24 24" className="text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M16.34 1.99976H7.67C4.28 1.99976 2 4.37976 2 7.91976V16.0898C2 19.6198 4.28 21.9998 7.67 21.9998H16.34C19.73 21.9998 22 19.6198 22 16.0898V7.91976C22 4.37976 19.73 1.99976 16.34 1.99976Z" fill="currentColor"></path>
                                    <path d="M15.0158 13.7703L13.2368 11.9923L15.0148 10.2143C15.3568 9.87326 15.3568 9.31826 15.0148 8.97726C14.6728 8.63326 14.1198 8.63426 13.7778 8.97626L11.9988 10.7543L10.2198 8.97426C9.87782 8.63226 9.32382 8.63426 8.98182 8.97426C8.64082 9.31626 8.64082 9.87126 8.98182 10.2123L10.7618 11.9923L8.98582 13.7673C8.64382 14.1093 8.64382 14.6643 8.98582 15.0043C9.15682 15.1763 9.37982 15.2613 9.60382 15.2613C9.82882 15.2613 10.0518 15.1763 10.2228 15.0053L11.9988 13.2293L13.7788 15.0083C13.9498 15.1793 14.1728 15.2643 14.3968 15.2643C14.6208 15.2643 14.8448 15.1783 15.0158 15.0083C15.3578 14.6663 15.3578 14.1123 15.0158 13.7703Z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <div className="d-flex">
                                <p className="drive-header mb-0">Designing.pptx</p>
                                <div className="drive-progress d-flex align-items-center">
                                    <Progress softcolors="primary" color="primary" className="shadow-none w-50" value={73} minvalue={0} maxvalue={100} style={{height: "4px"}} />
                                    <span className="ms-3">73 mb</span>
                                </div>
                                <svg width="40" viewBox="0 0 24 24" className="text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M16.34 1.99976H7.67C4.28 1.99976 2 4.37976 2 7.91976V16.0898C2 19.6198 4.28 21.9998 7.67 21.9998H16.34C19.73 21.9998 22 19.6198 22 16.0898V7.91976C22 4.37976 19.73 1.99976 16.34 1.99976Z" fill="currentColor"></path>
                                    <path d="M15.0158 13.7703L13.2368 11.9923L15.0148 10.2143C15.3568 9.87326 15.3568 9.31826 15.0148 8.97726C14.6728 8.63326 14.1198 8.63426 13.7778 8.97626L11.9988 10.7543L10.2198 8.97426C9.87782 8.63226 9.32382 8.63426 8.98182 8.97426C8.64082 9.31626 8.64082 9.87126 8.98182 10.2123L10.7618 11.9923L8.98582 13.7673C8.64382 14.1093 8.64382 14.6643 8.98582 15.0043C9.15682 15.1763 9.37982 15.2613 9.60382 15.2613C9.82882 15.2613 10.0518 15.1763 10.2228 15.0053L11.9988 13.2293L13.7788 15.0083C13.9498 15.1793 14.1728 15.2643 14.3968 15.2643C14.6208 15.2643 14.8448 15.1783 15.0158 15.0083C15.3578 14.6663 15.3578 14.1123 15.0158 13.7703Z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <div className="d-flex">
                                <p className="drive-header mb-0">Web Design.zip</p>
                                <div className="drive-progress d-flex align-items-center">
                                    <Progress softcolors="primary" color="primary" className="shadow-none w-50" value={45} minvalue={0} maxvalue={100} style={{height: "4px"}} />
                                    <span className="ms-3">45 mb</span>
                                </div>
                                <svg width="40" viewBox="0 0 24 24" className="text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M16.34 1.99976H7.67C4.28 1.99976 2 4.37976 2 7.91976V16.0898C2 19.6198 4.28 21.9998 7.67 21.9998H16.34C19.73 21.9998 22 19.6198 22 16.0898V7.91976C22 4.37976 19.73 1.99976 16.34 1.99976Z" fill="currentColor"></path>
                                    <path d="M15.0158 13.7703L13.2368 11.9923L15.0148 10.2143C15.3568 9.87326 15.3568 9.31826 15.0148 8.97726C14.6728 8.63326 14.1198 8.63426 13.7778 8.97626L11.9988 10.7543L10.2198 8.97426C9.87782 8.63226 9.32382 8.63426 8.98182 8.97426C8.64082 9.31626 8.64082 9.87126 8.98182 10.2123L10.7618 11.9923L8.98582 13.7673C8.64382 14.1093 8.64382 14.6643 8.98582 15.0043C9.15682 15.1763 9.37982 15.2613 9.60382 15.2613C9.82882 15.2613 10.0518 15.1763 10.2228 15.0053L11.9988 13.2293L13.7788 15.0083C13.9498 15.1793 14.1728 15.2643 14.3968 15.2643C14.6208 15.2643 14.8448 15.1783 15.0158 15.0083C15.3578 14.6663 15.3578 14.1123 15.0158 13.7703Z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <div className="d-flex">
                                <p className="drive-header mb-0">Example.zar</p>
                                <div className="drive-progress d-flex align-items-center">
                                    <Progress softcolors="primary" color="primary" className="shadow-none w-50" value={90} minvalue={0} maxvalue={100} style={{height: "4px"}} />
                                    <span className="ms-3">90 mb</span>
                                </div>
                                <svg width="40" viewBox="0 0 24 24" className="text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M16.34 1.99976H7.67C4.28 1.99976 2 4.37976 2 7.91976V16.0898C2 19.6198 4.28 21.9998 7.67 21.9998H16.34C19.73 21.9998 22 19.6198 22 16.0898V7.91976C22 4.37976 19.73 1.99976 16.34 1.99976Z" fill="currentColor"></path>
                                    <path d="M15.0158 13.7703L13.2368 11.9923L15.0148 10.2143C15.3568 9.87326 15.3568 9.31826 15.0148 8.97726C14.6728 8.63326 14.1198 8.63426 13.7778 8.97626L11.9988 10.7543L10.2198 8.97426C9.87782 8.63226 9.32382 8.63426 8.98182 8.97426C8.64082 9.31626 8.64082 9.87126 8.98182 10.2123L10.7618 11.9923L8.98582 13.7673C8.64382 14.1093 8.64382 14.6643 8.98582 15.0043C9.15682 15.1763 9.37982 15.2613 9.60382 15.2613C9.82882 15.2613 10.0518 15.1763 10.2228 15.0053L11.9988 13.2293L13.7788 15.0083C13.9498 15.1793 14.1728 15.2643 14.3968 15.2643C14.6208 15.2643 14.8448 15.1783 15.0158 15.0083C15.3578 14.6663 15.3578 14.1123 15.0158 13.7703Z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <div className="d-flex">
                                <p className="drive-header mb-0">Designing.pptx</p>
                                <div className="drive-progress d-flex align-items-center">
                                    <Progress softcolors="primary" color="primary" className="shadow-none w-50" value={73} minvalue={0} maxvalue={100} style={{height: "4px"}} />
                                    <span className="ms-3">73 mb</span>
                                </div>
                                <svg width="40" viewBox="0 0 24 24" className="text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M16.34 1.99976H7.67C4.28 1.99976 2 4.37976 2 7.91976V16.0898C2 19.6198 4.28 21.9998 7.67 21.9998H16.34C19.73 21.9998 22 19.6198 22 16.0898V7.91976C22 4.37976 19.73 1.99976 16.34 1.99976Z" fill="currentColor"></path>
                                    <path d="M15.0158 13.7703L13.2368 11.9923L15.0148 10.2143C15.3568 9.87326 15.3568 9.31826 15.0148 8.97726C14.6728 8.63326 14.1198 8.63426 13.7778 8.97626L11.9988 10.7543L10.2198 8.97426C9.87782 8.63226 9.32382 8.63426 8.98182 8.97426C8.64082 9.31626 8.64082 9.87126 8.98182 10.2123L10.7618 11.9923L8.98582 13.7673C8.64382 14.1093 8.64382 14.6643 8.98582 15.0043C9.15682 15.1763 9.37982 15.2613 9.60382 15.2613C9.82882 15.2613 10.0518 15.1763 10.2228 15.0053L11.9988 13.2293L13.7788 15.0083C13.9498 15.1793 14.1728 15.2643 14.3968 15.2643C14.6208 15.2643 14.8448 15.1783 15.0158 15.0083C15.3578 14.6663 15.3578 14.1123 15.0158 13.7703Z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="12">
                    <Row>
                        <Col lg="6">
                            <Card>
                                <Card.Header>
                                    <h4>Recently added files</h4>
                                    <Link  to="/file-manager/document-folder" className="text-primary">View all</Link>
                                </Card.Header>
                                <div className="table-responsive">
                                    <table className="table table-borderless iq-file-manager-table mb-0">
                                        <thead>
                                            <tr className="border-bottom bg-transparent text-dark">
                                                <th scope="col">Files</th>
                                                <th scope="col">Last Modified</th>
                                                <th scope="col">Size</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                table.map((item,index) => {
                                                    return(
                                                        <tr key={index}>
                                                            <td>   
                                                                <div className="d-flex align-items-center gap-2">
                                                                    <span className="avatar-40 bg-soft-primary rounded-pill">
                                                                        {item.file}
                                                                    </span>
                                                                    <h6 className="mb-0">{item.name}</h6>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <small className="text-muted">{item.date}</small>
                                                            </td>
                                                            <td>
                                                                <small className="text-primary">
                                                                    {item.size}
                                                                </small>
                                                            </td>
                                                            <td>
                                                                <Link to="#" className="d-flex align-items-center text-danger">
                                                                <span className="btn-inner">
                                                                    {item.remove} 
                                                                </span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                             
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </Card>
                        </Col>
                        <Col lg="3">
                            <Card>
                                <Card.Header>
                                    <h4>Cloud Storage</h4>
                                </Card.Header>
                                <Card.Body>
                                    <div className="border-bottom">
                                        <div className="d-flex align-items-center">
                                            <Image src={img5} className="img-fluid avatar-30" alt=""/>
                                            <h5 className="ms-2 mb-0">Drop Box</h5>
                                        </div>
                                        <div>
                                            <div className="d-flex justify-content-between mt-2 text-dark">
                                                <small>32gb</small>
                                                <small>48gb</small>
                                            </div>
                                            <Progress softcolors="primary" color="primary" className="shadow-none w-100 mt-2" value={55} minvalue={0} maxvalue={100} style={{height: "8px"}} />
                                            
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="border-bottom">
                                        <div className="d-flex align-items-center">
                                            <Image src={img6} className="img-fluid avatar-30" alt=""/>
                                            <h5 className="ms-2 mb-0">One Drive</h5>
                                        </div>
                                        <div>
                                            <div className="d-flex justify-content-between mt-2 text-dark">
                                                <small>10gb</small>
                                                <small>48gb</small>
                                            </div>
                                            <Progress softcolors="primary" color="primary" className="shadow-none w-100 mt-2" value={80} minvalue={0} maxvalue={100} style={{height: "8px"}} />
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="border-bottom">
                                        <div className="d-flex align-items-center">
                                            <Image src={img7} className="img-fluid avatar-30" alt=""/>
                                            <h5 className="ms-2 mb-0">Google Drive</h5>
                                        </div>
                                        <div>
                                            <div className="d-flex justify-content-between mt-2 text-dark">
                                                <small>15gb</small>
                                                <small>48gb</small>
                                            </div>
                                            <Progress softcolors="primary" color="primary" className="shadow-none w-100 mt-2" value={20} minvalue={0} maxvalue={100} style={{height: "8px"}} />
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg="3">
                            <Card>
                                <Card.Body>
                                    <div className="text-center">
                                        <Image src={img4} className="img-fluid w-75" alt=""/>
                                        <h5 className="mb-3">Upgrade to Special Offer  For Unlimited Storage</h5>
                                        <div className="d-flex justify-content-center ms-2">
                                            <Button type="submit" className="btn btn-primary">Buy storage</Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
})

Dashboard.displayName="Dashboard"
export default Dashboard
