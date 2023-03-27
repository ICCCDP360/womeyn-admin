import {useState,memo,Fragment,useEffect} from 'react'

// React-bootstrap
import {Row, Col,Dropdown,Button, Table} from 'react-bootstrap'

//Components
import Card from '../../../../../components/bootstrap/card'
import AddCardModal from '../../components/modal/add-card-modal'
import SubHeader from '../../components/sub-header'
import CustomToggle from '../../../../../components/dropdowns'

// Redux Selector / Action
import { useSelector } from 'react-redux';

// Import selectors & action from setting store
import * as SettingSelector from '../../../../../store/setting/selectors'

//Apexcharts
import Chart from "react-apexcharts";

//Count-up
import CountUp from "react-countup"

const Vendordashboard = memo(() => {
    useSelector(SettingSelector.theme_color)

    const [show, setShow,] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
    useEffect(() => {
        return () => colors
    })
    
    //apexcharts
    const chart1 = {
        options : {
            chart: {
                fontFamily: '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: true,
                },
            },
            colors: ["#ffffff"],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 3,
            },
            yaxis: {
              show: false,
            },
            legend: {
                show: false,
            },
            xaxis: {
                labels: {
                    minHeight:22,
                    maxHeight:22,
                    show: true,
                    style: {
                      colors: "#ffffff",
                    },
                },
                lines: {
                    show: false 
                },
                categories: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
            },
            responsive: [{
              breakpoint: 1399,
              options: {
                chart: {
                  height:140
                }
              }
            }],
            grid: {
                show: false,
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: "vertical",
                    shadeIntensity: 0,
                    gradientToColors: undefined, 
                    inverseColors: true,
                    opacityFrom: .4,
                    opacityTo: .1,
                    stops: [0, 50, 80],
                    colors: ["#3a57e8"]
                }
            },
            tooltip: {
              enabled: true,
            },
        },
        series: [{
            name: 'total',
            data: [30, 50, 20,60,25, 80, 40]
        }]
    }
    const chart2 = {
        options : {
            chart: {
                fontFamily: '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: true,
                },
            },
            colors: ["#ffffff"],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 3,
            },
            yaxis: {
              show: false,
            },
            legend: {
                show: false,
            },
            xaxis: {
                labels: {
                    minHeight:22,
                    maxHeight:22,
                    show: true,
                    style: {
                      colors: "#ffffff",
                    },
                },
                lines: {
                    show: false 
                },
                categories: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
            },
            responsive: [{
              breakpoint: 1399,
              options: {
                chart: {
                  height:140
                }
              }
            }],
            grid: {
                show: false,
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: "vertical",
                    shadeIntensity: 0,
                    gradientToColors: undefined, 
                    inverseColors: true,
                    opacityFrom: .4,
                    opacityTo: .1,
                    stops: [0, 50, 80],
                    colors: ["#3a57e8"]
                }
            },
            tooltip: {
              enabled: true,
            },
        },
        series: [{
            name: 'total',
            data: [30, 50, 20,60,25, 80, 40]
        }]
    }
    const chart3 = {
        options : {
            chart: {
                fontFamily: '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: true,
                },
            },
            colors: ["#ffffff"],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 3,
            },
            yaxis: {
              show: false,
            },
            legend: {
                show: false,
            },
            xaxis: {
                labels: {
                    minHeight:22,
                    maxHeight:22,
                    show: true,
                    style: {
                      colors: "#ffffff",
                    },
                },
                lines: {
                    show: false 
                },
                categories: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
            },
            responsive: [{
              breakpoint: 1399,
              options: {
                chart: {
                  height:140
                }
              }
            }],
            grid: {
                show: false,
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: "vertical",
                    shadeIntensity: 0,
                    gradientToColors: undefined, 
                    inverseColors: true,
                    opacityFrom: .4,
                    opacityTo: .1,
                    stops: [0, 50, 80],
                    colors: ["#3a57e8"]
                }
            },
            tooltip: {
              enabled: true,
            },
        },
        series: [{
            name: 'total',
            data: [30, 50, 20,60,25, 80, 40]
        }]
    }
    const chart4 = {
        options : {
            chart: {
                fontFamily: '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: true,
                },
            },
            colors: ["#ffffff"],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 3,
            },
            yaxis: {
              show: false,
            },
            legend: {
                show: false,
            },
            xaxis: {
                labels: {
                    minHeight:22,
                    maxHeight:22,
                    show: true,
                    style: {
                      colors: "#ffffff",
                    },
                },
                lines: {
                    show: false 
                },
                categories: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
            },
            responsive: [{
              breakpoint: 1399,
              options: {
                chart: {
                  height:140
                }
              }
            }],
            grid: {
                show: false,
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: "vertical",
                    shadeIntensity: 0,
                    gradientToColors: undefined, 
                    inverseColors: true,
                    opacityFrom: .4,
                    opacityTo: .1,
                    stops: [0, 50, 80],
                    colors: ["#3a57e8"]
                }
            },
            tooltip: {
              enabled: true,
            },
        },
        series: [{
            name: 'total',
            data: [30, 50, 20,60,25, 80, 40]
        }]
    }
    const chart5 = {
        options : {
            chart: {
                fontFamily: '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                height: 400,
                type: 'area',
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: false,
                },
            },
            colors: colors,
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 3,
            },
            yaxis: {
              show: true,
              labels: {
                show: true,
                minWidth: 19,
                maxWidth: 19,
                style: {
                  colors: "#8A92A6",
                },
                offsetX: -5,
              },
            },
            legend: {
                show: true,
            },
            xaxis: {
                labels: {
                    minHeight:22,
                    maxHeight:22,
                    show: true,
                    style: {
                      colors: "#8A92A6",
                    },
                },
                lines: {
                    show: false  //or just here to disable only x axis grids
                },
                categories: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug","Sep","Oct","Nov","Dec"],

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
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: "vertical",
                    shadeIntensity: 0,
                    gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                    inverseColors: true,
                    opacityFrom: .4,
                    opacityTo: .1,
                    stops: [0, 50, 80],
                    colors: ["#3a57e8"]
                }
            },
            tooltip: {
              enabled: false,
            },
        },
        series: [{
            name: 'total',
            data: [95, 80, 90,30,55, 70, 40, 54,44,20]
        }],
    }
    const chart6 ={
        options : {
            colors: colors,
            plotOptions: {
                radialBar: {
                    inverseOrder: false,
                    endAngle: 360,
                    hollow: {
                        margin: 5,
                        size: '50%',
                        background: 'transparent',
                        imageWidth: 150,
                        imageHeight: 150,
                        imageClipped: true,
                        position: 'front',
                        dropShadow: {
                          enabled: false,
                          blur: 3,
                          opacity: 0.5
                        }
                    },
                    track: {
                        show: true,
                        background: '#f2f2f2',
                        strokeWidth: '70%',
                        opacity: 1,
                        margin: 6,
                        dropShadow: {
                            enabled: false,
                            blur: 3,
                            opacity: 0.5
                        }
                    },
                    dataLabels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '16px',
                            fontWeight: 600,
                            offsetY: -10
                          },
                          value: {
                            show: true,
                            fontSize: '14px',
                            fontWeight: 400,
                            offsetY: 16,
                            formatter: function (val) {
                              return val + '%'
                            }
                        },
                    }
                }
            },
            labels: ['Electronic', 'accessory'],

        },
        series: [44, 55],
    }

    const table1 =[
        {
            rank:'101',
            name:'Riban Sun Glasses',
            desc:'Glasses',
            seller:'GOL',
            sales:'4,863',
            revenue:'25,916'
        },
        {
            rank:'118',
            name:'Danim Jeans',
            desc:'Pants',
            seller:'EMZ',
            sales:'875',
            revenue:'13,989'
        },
        {
            rank:'148',
            name:'Winter Suit & Jacket',
            desc:'Cloths',
            seller:'FLK',
            sales:'1548',
            revenue:'14,437'
        },
        {
            rank:'179',
            name:'Lofer',
            desc:'Shoes',
            seller:'EBY',
            sales:'752',
            revenue:'8,015'
        }
    ]

    return (
        <Fragment>
            <SubHeader />
            <Row>
                <Col lg="8" md="6">
                    <Row>
                        <Col lg="6" xl="3" md="6">
                            <Card className=" bg-primary">
                                <Chart options={chart1.options} series={chart1.series} type="area" height="145"  />
                                <Card.Body>
                                    <p className="text-white">Total Orders</p>
                                    <h4 className="text-white counter mb-0">$
                                    <CountUp
                                        start={0}
                                        end={9300}
                                        duration={3}
                                        useEasing={true}
                                        separator=","
                                    />
                                    </h4>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg="6" xl="3" md="6">
                            <Card className="bg-info">
                                <Chart  options={chart2.options} series={chart2.series} type="area"   height="145"  />
                                <Card.Body>
                                    <p className="text-white">In Transit</p>
                                    <h4 className="text-white counter mb-0">$
                                    <CountUp
                                        start={0}
                                        end={1599}
                                        duration={3}
                                        useEasing={true}
                                        separator=","
                                    />
                                    </h4>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg="6" xl="3" md="6">
                            <Card className="bg-primary">
                                <Chart  options={chart3.options} series={chart3.series} type="area"   height="145"  />
                                <Card.Body>
                                    <p className="text-white">Return Orders</p>
                                    <h4 className="text-white counter mb-0">$
                                    <CountUp
                                        start={0}
                                        end={1120}
                                        duration={3}
                                        useEasing={true}
                                        separator=","
                                    />
                                    </h4>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg="6" xl="3" md="6">
                            <Card className="bg-info">
                                <Chart  options={chart4.options} series={chart4.series} type="area"   height="145"  />
                                <Card.Body>
                                    <p className="text-white">Pending Orders</p>
                                    <h4 className="text-white counter mb-0">$
                                    <CountUp
                                        start={0}
                                        end={2921}
                                        duration={3}
                                        useEasing={true}
                                        separator=","
                                    />
                                    </h4>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Card>
                        <Card.Header>
                            <h4 className="mb-0">Total Sales</h4>
                            <div className="d-flex align-items-center">
                                <Dropdown className="ms-2">
                                    <Dropdown.Toggle as={CustomToggle} href="#" variant="text-secondary dropdown-toggle" id="dropdownMenuButton1">
                                        Month 
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">Year</Dropdown.Item>
                                        <Dropdown.Item href="#">Month</Dropdown.Item>
                                        <Dropdown.Item href="#">Week</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Chart  options={chart5.options} series={chart5.series} type="area" height="400"  />
                        </Card.Body>
                    </Card>
                    <Row>
                        <Col md="12">
                            <Card className="overflow-hidden">
                                <Card.Header>
                                    <Card.Header.Title>
                                        <h4 className="card-title">Top Dealers</h4>
                                    </Card.Header.Title>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div className="table-responsive mt-3">
                                        <Table className="mb-0" role="grid">
                                            <thead>
                                                <tr>
                                                    <th>Rank</th>
                                                    <th>Product</th>
                                                    <th>Seller</th>
                                                    <th>Sales</th>
                                                    <th>Revenue</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    table1.map((item, index) =>
                                                        {
                                                            return (
                                                                <tr key={index}>
                                                                    <td>
                                                                        <strong>#{item.rank}</strong>
                                                                    </td>
                                                                    <td>
                                                                        <h6>{item.name}</h6>
                                                                        <p className="mb-0">{item.desc}</p>
                                                                    </td>
                                                                    <td>
                                                                        {item.seller}
                                                                    </td>
                                                                    <td>
                                                                        {item.sales}
                                                                    </td>
                                                                    <td>
                                                                        <strong>${item.revenue}</strong>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        }
                                                    )
                                                }
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col lg="4" md="12">
                    <Card>
                        <Card.Body>
                            <Card className="credit-card-widget">
                                <div className="pb-4 border-0 card-header">
                                    <div className="p-4 border border-white rounded primary-gradient-card">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                            <h5 className="font-weight-bold">VISA </h5>
                                            <p className="mb-0">PREMIUM ACCOUNT</p>  
                                            </div>
                                            <div className="master-card-content">
                                            <svg className="master-card-1" width="60" height="60" viewBox="0 0 24 24">
                                                <path fill="#ffffff" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                                            </svg>
                                            <svg className="master-card-2" width="60" height="60" viewBox="0 0 24 24">
                                                <path fill="#ffffff" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                                            </svg>
                                            </div>
                                        </div>
                                        <div className="my-4">
                                            <div className="card-number">
                                            <span className="fs-5 me-2">5789</span>
                                            <span className="fs-5 me-2">****</span>
                                            <span className="fs-5 me-2">****</span>
                                            <span className="fs-5">2847</span>
                                            </div>
                                        </div>
                                        <div className="mb-2 d-flex align-items-center justify-content-between">
                                            <p className="mb-0">Card holder</p>
                                            <p className="mb-0">Expire Date</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6>Mike Smith</h6>
                                            <h6 className="ms-5">06/11</h6>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            <div className="product-add-card text-center">
                                <Button to="#" className="btn-soft-primary border-primary border-1 border-dashed" onClick={handleShow}>Add Your Card</Button>                                
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Header.Title>
                            <h4 className="card-title">Categories</h4>
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between  flex-wrap">
                                <Chart  options={chart6.options} series={chart6.series} type="radialBar"  className="col-md-7 col-lg-7"  height="185"  />
                                <div className="d-grid gap col-md-5 col-lg-5">
                                    <div className="d-flex align-items-start">
                                    <svg className="mt-2 text-primary" xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 24 24" fill="currentColor">
                                        <g><circle cx="12" cy="12" r="8" fill="currentColor"></circle></g>
                                    </svg>
                                    <div className="ms-2">
                                        <span className="mb-3">Electronics</span>
                                        <h6 className="mb-0">44%</h6>
                                    </div>
                                    </div>
                                    <div className="d-flex align-items-start">
                                    <svg className="mt-2 text-info" xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 24 24" fill="currentColor">
                                        <g><circle cx="12" cy="12" r="8" fill="currentColor"></circle></g>
                                    </svg>
                                    <div className="ms-2">
                                        <span className="mb-3">Accessories</span>
                                        <h6 className="mb-0">55%</h6>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header className="align-items-center">
                            <div className="d-flex align-items-center">
                                <h4 className="mb-0 me-2">Tracking ID</h4>
                                <h5 className="text-success mb-0">#4676658956</h5>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as='svg' width="12" role="button"  id="news-dropdown" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1.5L5 5.5L1 1.5" stroke="#3A57E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="news-dropdown">
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <div className="text-center pb-3">
                                <small>Tuesday, 25 November</small>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <h6 className="mb-0 iq-tracking small">2:09 PM</h6>
                                <div className="border-start ps-3 ms-3">
                                    <h6>Out For Delivery</h6>
                                    <small>Thane</small>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <h6 className="mb-0 iq-tracking small">6:01 AM</h6>
                                <div className="border-start ps-3 ms-3">
                                    <h6>Package arrived at delivery facility</h6>
                                    <small>Maharashtra</small>
                                </div>
                            </div>
                            <div className="text-center pb-3">
                                <small>Monday, 24 November</small>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <h6 className="mb-0 iq-tracking small">12:36 PM</h6>
                                <div className="border-start ps-3 ms-3">
                                    <h6>Package arrived at delivery facility</h6>
                                    <small>Karnataka</small>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <h6 className="mb-0 iq-tracking small">11:51 AM</h6>
                                <div className="border-start ps-3 ms-3">
                                    <h6>11:51 AM</h6>
                                    <small>Karnataka</small>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <h6 className="mb-0 iq-tracking small">6:01 AM</h6>
                                <div className="border-start ps-3 ms-3">
                                    <h6>Package arrived at delivery facility</h6>
                                    <small>Maharashtra</small>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <AddCardModal show={show} handleclose={handleClose} />
        </Fragment>
    )
})

Vendordashboard.displayName="Vendordashboard"
export default Vendordashboard
