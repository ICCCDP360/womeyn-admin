/* eslint-disable no-sequences */
import {memo,Fragment,useEffect} from 'react'

// React-bootstrap
import {Row, Col, Dropdown, Image,Button} from 'react-bootstrap'

// Router
import {Link} from 'react-router-dom'

//Apexcharts
import Chart from "react-apexcharts";

//Components
import Card from '../../../../components/bootstrap/card'
import CustomToggle from '../../../../components/dropdowns'
import Progress from '../../../../components/progress.js'
import StatisticsCards from '../components/statistics-cards'

// Redux Selector / Action
import { useSelector } from 'react-redux';

// Import selectors & action from setting store
import * as SettingSelector from '../../../../store/setting/selectors'

// Img
import img1 from '../../../../assets/modules/social/images/media/01.png'
import img2 from '../../../../assets/modules/social/images/media/02.png'
import img3 from '../../../../assets/modules/social/images/media/03.png'
import img4 from '../../../../assets/modules/social/images/media/04.png'
import img7 from '../../../../assets/modules/social/images/avatar/07.png'
import img9 from '../../../../assets/modules/social/images/avatar/09.png'
import img10 from '../../../../assets/modules/social/images/avatar/10.png'
import img12 from '../../../../assets/modules/social/images/avatar/12.png'
import img13 from '../../../../assets/modules/social/images/avatar/13.png'
import img14 from '../../../../assets/modules/social/images/avatar/14.png'
import img15 from '../../../../assets/modules/social/images/avatar/15.png'
import img16 from '../../../../assets/modules/social/images/avatar/16.png'
import img17 from '../../../../assets/modules/social/images/avatar/17.png'
import img18 from '../../../../assets/modules/social/images/avatar/18.png'
import img19 from '../../../../assets/modules/social/images/avatar/19.png'


const Dashboard =memo(() => {
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
      const colors = [variableColors.primary, variableColors.info];
      const ChartColor =[variableColors.info]
      const iqcolor = {colors,ChartColor}
        useEffect(() => {
            return () => iqcolor
        })
    const chart1 ={
        options : {
      
            colors: colors,
            chart: {
            toolbar: {
              show: false
            },
          },
          forecastDataPoints: {
            count: 2,
          },
          stroke: {
            width: 3,
          },
          grid: {
            show:true,
            strokeDashArray: 7,
          },
          markers: {
            size: 6,
            colors:  '#FFFFFF',
            strokeColors: colors,
            strokeWidth: 2,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 0,
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            tooltip: {
              enabled: false,
            }
          },
          yaxis: {
            tickAmount: 5,
            min: 0,
            max: 100,
          },
          responsive: [{
            breakpoint: 1399,
            options: {
              chart: {
                height:230
              },
              xaxis: {
                minHeight: 20,
                maxHeight: 20, 
              }
            }
          }],
        },
        series: [{
            name: 'Profiles',
            data: [40, 55, 25, 60, 30, 85, 60, 75, 57]
            }],
    }
    const chart2 ={
        options : {
            chart: {
                sparkline: {
                    enabled: true
                },
                group: 'sparklines',
               
            },
            colors: ChartColor,
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 3,
                curve: 'smooth'
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.5,
                    opacityTo: 0.3,
                }
            },
            
            // colors: ['#08B1BA'],
            
            xaxis: {
                type: 'datetime',
                categories: ["2018-08-19T00:00:00", "2018-09-19T01:30:00", "2018-10-19T02:30:00", "2018-11-19T01:30:00", "2018-12-19T01:30:00"],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
                enabled:false,
            }
        },
        series: [{
            name: 'series1',
            data: [10, 35, 20, 50, 70]
        }, ],
    }
    const chart3 ={
        options : {
            colors: colors,
            chart: {
                sparkline: {
                    enabled: true
                },
                group: 'sparklines',
            
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 3,
                curve: 'smooth'
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.5,
                    opacityTo: 0.5,
                }
            },
            xaxis: {
                type: 'datetime',
                categories: ["2018-08-19T00:00:00", "2018-09-19T01:30:00", "2018-10-19T02:30:00", "2018-11-19T01:30:00", "2018-12-19T01:30:00"],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
                enabled: false,
            }
        },
        series: [{
            name: 'series1',
            data: [70, 50, 20, 35, 10]
        }, ],
    }

    return (
        <Fragment>
            <Row>
                <Col lg="8">

                    <Card>          
                        <Card.Header className="align-items-center flex-wrap">
                            <h4 className="mb-0">Profile Statistics</h4>
                            <Dropdown>
                                <Dropdown.Toggle as={CustomToggle} variant="text-secondary dropdown-toggle"  >
                                    Everything
                                </Dropdown.Toggle>
                                <Dropdown.Menu aria-labelledby="dropdownMenuButton1">
                                    <li><Dropdown.Item href="#">Everything</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#">Social</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#">Live Streming</Dropdown.Item></li>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <Row className="row-cols-xl-4 row-cols-md-2 row-cols-1">
                                <Col>
                                    <StatisticsCards img={img1} header="Followers" subHeader="280k" />
                                </Col>
                                <Col>
                                    <StatisticsCards img={img2} header="Join" subHeader="10k" />
                                </Col>
                                <Col>
                                    <StatisticsCards img={img3} header="Subscribers" subHeader="2.9M" />
                                </Col>
                                <Col>
                                    <StatisticsCards img={img4} header="Like" subHeader="210k" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header className=" align-items-center flex-wrap">
                            <h4 className="mb-0">Profile Reach</h4>
                            <Dropdown>
                                <Dropdown.Toggle as={CustomToggle} variant="text-secondary dropdown-toggle"  >
                                    Month
                                </Dropdown.Toggle>
                                <Dropdown.Menu aria-labelledby="dropdownMenuButton2">
                                    <li><Dropdown.Item href="#">Everything</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#">Social</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#">Live Streming</Dropdown.Item></li>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <Chart  options={chart1.options} series={chart1.series} type="line" height="300"  />
                        </Card.Body>
                    </Card>
                    <Row>
                        <Col lg="6">
                            <Card className="card-block">
                                <Card.Header>
                                    <h4 className="mb-0">Key Metrics</h4>
                                </Card.Header>
                                <Card.Body>
                                    <div className="d-flex border-bottom pb-3 align-items-center iq-social-keyMetrics">
                                        <h6 className="iq-key-metrics mb-0">Clicks</h6>
                                        <div className="iq-drive-progress d-flex align-items-center">
                                            <span className="key-number">10k</span>
                                            <Progress softcolors="primary" color="primary" className="shadow-none w-50" value={40} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                                            <span className="ms-3">12k</span>
                                        </div>
                                    </div>
                                    <div className="d-flex border-bottom py-3 align-items-center iq-social-keyMetrics">
                                        <h6 className="iq-key-metrics mb-0">Likes</h6>
                                        <div className="iq-drive-progress d-flex align-items-center">
                                            <span className="key-number">680</span>
                                            <Progress softcolors="primary" color="primary" className="shadow-none w-50" value={60} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                                            <span className="ms-3">520</span>
                                        </div>
                                    </div>
                                    <div className="d-flex border-bottom py-3 align-items-center iq-social-keyMetrics">
                                        <h6 className="iq-key-metrics mb-0">Followers</h6>
                                        <div className="iq-drive-progress d-flex align-items-center">
                                            <span className="key-number">8k</span>
                                            <Progress softcolors="primary" color="primary" className="shadow-none w-50" value={20} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                                            <span className="ms-3">121k</span>
                                        </div>
                                    </div>
                                    <div className="d-flex pt-3 align-items-center iq-social-keyMetrics">
                                        <h6 className="iq-key-metrics mb-0">Impressions</h6>
                                        <div className="iq-drive-progress d-flex align-items-center">
                                            <span className="key-number">369</span>
                                            <Progress softcolors="primary" color="primary" className="shadow-none w-50" value={80} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                                            <span className="ms-3">10k</span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Row className="row-cols-1 row-cols-md-2">
                                <Col>
                                    <Card className="text-center">
                                        <Card.Header>
                                            <h2 className="card-title">20k</h2>
                                        </Card.Header>
                                        <Card.Body className="px-0">
                                            <span>Enagaged Users</span>
                                            <Chart  options={chart2.options} series={chart2.series} type="area" height="150"/>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg="6">
                                    <Card className="text-center">
                                        <Card.Header>
                                            <h2 className="mb-0">12.2k</h2>
                                        </Card.Header>
                                        <Card.Body className="px-0">
                                            <span>Page Impression</span>
                                            <Chart  options={chart3.options} series={chart3.series} type="area" height="150"/>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col lg="4">
                    <Card>
                        <Card.Header>
                            <div className="d-flex align-items-center">
                                <h4 className="me-3 mb-0">Requests</h4>
                                <div>
                                    <span className="btn btn-sm btn-icon btn-soft-primary text-primary rounded-pill">3</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex mb-3 pb-3 border-bottom gap-3">
                                <Image src={img12} alt="01" className="img-fluid rounded-circle avatar-60"/>
                                <div>
                                    <div className="d-flex align-items-center gap-2">
                                        <h5 className="mb-0">Wade Warren</h5>
                                        <small>wants to add you to friends</small>
                                    </div>
                                    <div className="d-flex align-items-center mt-2 gap-2">
                                        <Link to="/" onClick={(e) => e.preventDefault()} className="small">Accept</Link>
                                        <Link to="/" onClick={(e) => e.preventDefault()}  className="text-body small">Decline</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex  gap-3">
                                <Image src={img14} alt="01" className="img-fluid rounded-circle avatar-60"/>
                                <div>
                                    <div className="d-flex align-items-center gap-2">
                                        <h5 className="mb-0">Wade Warren</h5>
                                        <small>wants to add you to friends</small>
                                    </div>
                                    <div className="d-flex align-items-center mt-2 gap-2">
                                        <Link to="/" onClick={(e) => e.preventDefault()} className="small">Accept</Link>
                                        <Link to="/" onClick={(e) => e.preventDefault()}  className="text-body small">Decline</Link>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title">Suggestions for you</h4>
                        </Card.Header>
                        <Card.Body>
                            <div className="iq-social-user-details">
                                <div className="d-flex justify-content-center gap-3">
                                    <Image src={img13} alt="01" className="img-fluid avatar-48 rounded-circle"/>
                                    <div className="d-flex align-items-center justify-content-between flex-grow-1">
                                        <div className="me-3">
                                            <h5>Cameron Williamson</h5>
                                            <small className="text-ellipsis short-1">@Naoerville</small>
                                        </div>
                                        <div>
                                            <Button size="sm" variant="primary btn-icon  rounded-pill">
                                                <span className="btn-inner">
                                                    <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.4" d="M21.101 9.58786H19.8979V8.41162C19.8979 7.90945 19.4952 7.5 18.999 7.5C18.5038 7.5 18.1 7.90945 18.1 8.41162V9.58786H16.899C16.4027 9.58786 16 9.99731 16 10.4995C16 11.0016 16.4027 11.4111 16.899 11.4111H18.1V12.5884C18.1 13.0906 18.5038 13.5 18.999 13.5C19.4952 13.5 19.8979 13.0906 19.8979 12.5884V11.4111H21.101C21.5962 11.4111 22 11.0016 22 10.4995C22 9.99731 21.5962 9.58786 21.101 9.58786Z" fill="currentColor"></path>
                                                        <path d="M9.5 15.0156C5.45422 15.0156 2 15.6625 2 18.2467C2 20.83 5.4332 21.5001 9.5 21.5001C13.5448 21.5001 17 20.8533 17 18.269C17 15.6848 13.5668 15.0156 9.5 15.0156Z" fill="currentColor"></path>
                                                        <path opacity="0.4" d="M9.50023 12.5542C12.2548 12.5542 14.4629 10.3177 14.4629 7.52761C14.4629 4.73754 12.2548 2.5 9.50023 2.5C6.74566 2.5 4.5376 4.73754 4.5376 7.52761C4.5376 10.3177 6.74566 12.5542 9.50023 12.5542Z" fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center gap-3">
                                    <Image src={img7} alt="01" className="img-fluid avatar-48 rounded-circle"/>
                                    <div className="d-flex align-items-center justify-content-between flex-grow-1">
                                        <div className="me-3">
                                            <h5>Guy Hawkins</h5>
                                            <small className="text-ellipsis short-1">@hawkins</small>
                                        </div>
                                        <div>
                                            <Button size="sm" variant="primary btn-icon  rounded-pill">
                                                <span className="btn-inner">
                                                    <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.4" d="M21.101 9.58786H19.8979V8.41162C19.8979 7.90945 19.4952 7.5 18.999 7.5C18.5038 7.5 18.1 7.90945 18.1 8.41162V9.58786H16.899C16.4027 9.58786 16 9.99731 16 10.4995C16 11.0016 16.4027 11.4111 16.899 11.4111H18.1V12.5884C18.1 13.0906 18.5038 13.5 18.999 13.5C19.4952 13.5 19.8979 13.0906 19.8979 12.5884V11.4111H21.101C21.5962 11.4111 22 11.0016 22 10.4995C22 9.99731 21.5962 9.58786 21.101 9.58786Z" fill="currentColor"></path>
                                                        <path d="M9.5 15.0156C5.45422 15.0156 2 15.6625 2 18.2467C2 20.83 5.4332 21.5001 9.5 21.5001C13.5448 21.5001 17 20.8533 17 18.269C17 15.6848 13.5668 15.0156 9.5 15.0156Z" fill="currentColor"></path>
                                                        <path opacity="0.4" d="M9.50023 12.5542C12.2548 12.5542 14.4629 10.3177 14.4629 7.52761C14.4629 4.73754 12.2548 2.5 9.50023 2.5C6.74566 2.5 4.5376 4.73754 4.5376 7.52761C4.5376 10.3177 6.74566 12.5542 9.50023 12.5542Z" fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center gap-3">
                                    <Image src={img9} alt="01" className="img-fluid avatar-48 rounded-circle"/>
                                    <div className="d-flex align-items-center justify-content-between flex-grow-1">
                                        <div className="me-3">
                                            <h5>Jacob Jones</h5>
                                            <small className="text-ellipsis short-1">@Austin</small>
                                        </div>
                                        <div>
                                            <Button size="sm" variant="primary btn-icon  rounded-pill">
                                                <span className="btn-inner">
                                                    <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.4" d="M21.101 9.58786H19.8979V8.41162C19.8979 7.90945 19.4952 7.5 18.999 7.5C18.5038 7.5 18.1 7.90945 18.1 8.41162V9.58786H16.899C16.4027 9.58786 16 9.99731 16 10.4995C16 11.0016 16.4027 11.4111 16.899 11.4111H18.1V12.5884C18.1 13.0906 18.5038 13.5 18.999 13.5C19.4952 13.5 19.8979 13.0906 19.8979 12.5884V11.4111H21.101C21.5962 11.4111 22 11.0016 22 10.4995C22 9.99731 21.5962 9.58786 21.101 9.58786Z" fill="currentColor"></path>
                                                        <path d="M9.5 15.0156C5.45422 15.0156 2 15.6625 2 18.2467C2 20.83 5.4332 21.5001 9.5 21.5001C13.5448 21.5001 17 20.8533 17 18.269C17 15.6848 13.5668 15.0156 9.5 15.0156Z" fill="currentColor"></path>
                                                        <path opacity="0.4" d="M9.50023 12.5542C12.2548 12.5542 14.4629 10.3177 14.4629 7.52761C14.4629 4.73754 12.2548 2.5 9.50023 2.5C6.74566 2.5 4.5376 4.73754 4.5376 7.52761C4.5376 10.3177 6.74566 12.5542 9.50023 12.5542Z" fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center gap-3">
                                    <Image src={img10} alt="01" className="img-fluid avatar-48 rounded-circle"/>
                                    <div className="d-flex align-items-center justify-content-between flex-grow-1">
                                        <div className="me-3">
                                            <h5>Darlene Robertson</h5>
                                            <small className="text-ellipsis short-1">@Fairfiels</small>
                                        </div>
                                        <div>
                                            <Button size="sm" variant="primary btn-icon  rounded-pill">
                                                <span className="btn-inner">
                                                    <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.4" d="M21.101 9.58786H19.8979V8.41162C19.8979 7.90945 19.4952 7.5 18.999 7.5C18.5038 7.5 18.1 7.90945 18.1 8.41162V9.58786H16.899C16.4027 9.58786 16 9.99731 16 10.4995C16 11.0016 16.4027 11.4111 16.899 11.4111H18.1V12.5884C18.1 13.0906 18.5038 13.5 18.999 13.5C19.4952 13.5 19.8979 13.0906 19.8979 12.5884V11.4111H21.101C21.5962 11.4111 22 11.0016 22 10.4995C22 9.99731 21.5962 9.58786 21.101 9.58786Z" fill="currentColor"></path>
                                                        <path d="M9.5 15.0156C5.45422 15.0156 2 15.6625 2 18.2467C2 20.83 5.4332 21.5001 9.5 21.5001C13.5448 21.5001 17 20.8533 17 18.269C17 15.6848 13.5668 15.0156 9.5 15.0156Z" fill="currentColor"></path>
                                                        <path opacity="0.4" d="M9.50023 12.5542C12.2548 12.5542 14.4629 10.3177 14.4629 7.52761C14.4629 4.73754 12.2548 2.5 9.50023 2.5C6.74566 2.5 4.5376 4.73754 4.5376 7.52761C4.5376 10.3177 6.74566 12.5542 9.50023 12.5542Z" fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Button size="sm">View All</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body className="text-center">
                            <div className="iq-media-group-1">
                                <Link to="#" className="iq-media-1">
                                    <div className="icon">
                                        <Image src={img12} alt="01" className="rounded-circle avatar-50 img-fluid"/>
                                    </div>
                                </Link>
                                <Link to="#" className="iq-media-1">
                                    <div className="icon">
                                        <Image src={img13} alt="01" className="rounded-circle avatar-50 img-fluid"/>
                                    </div>
                                </Link>
                                <Link to="#" className="iq-media-1">
                                    <div className="icon">
                                        <Image src={img14} alt="01" className="rounded-circle avatar-50 img-fluid"/>
                                    </div>
                                </Link>
                                <Link to="#" className="iq-media-1">
                                    <div className="icon">
                                        <Image src={img15} alt="01" className="rounded-circle avatar-50 img-fluid"/>
                                    </div>
                                </Link>
                                <Link to="#" className="iq-media-1">
                                    <div className="icon">
                                        <Image src={img16} alt="01" className="rounded-circle avatar-50 img-fluid"/>
                                    </div>
                                </Link>
                                <Link to="#" className="iq-media-1">
                                    <div className="icon">
                                        <Image src={img17} alt="01" className="rounded-circle avatar-50 img-fluid"/>
                                    </div>
                                </Link>
                                <Link to="#" className="iq-media-1">
                                    <div className="icon">
                                        <Image src={img18} alt="01" className="rounded-circle avatar-50 img-fluid"/>
                                    </div>
                                </Link>
                                <Link to="#" className="iq-media-1">
                                    <div className="icon">
                                        <Image src={img19} alt="01" className="rounded-circle avatar-50 img-fluid"/>
                                    </div>
                                </Link>
                            </div>
                            <div className="d-flex justify-content-center align-items-center my-3">
                                <h5>184.3k</h5>
                                <h6 className="ms-2">Followers</h6>
                            </div>
                            <span>Active now on your profile</span>
                        </Card.Body>
                    </Card>    
                </Col>
            </Row>
        </Fragment>
    )
})

Dashboard.displayName="Dashboard"
export default Dashboard