import {memo,Fragment,useEffect} from 'react'

// React-bootstrap
import {Dropdown,Row,Col, Table, Image,Tab,Nav} from 'react-bootstrap'

// Router
import {Link} from 'react-router-dom'

//Components
import Card from '../../../../components/bootstrap/card'
import Blogcard from "../components/blogcard"
import CustomToggle from "../../../../components/dropdowns"

// Redux Selector / Action
import { useSelector } from 'react-redux';

// Import selectors & action from setting store
import * as SettingSelector from '../../../../store/setting/selectors'

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper'

//Apexcharts
import Chart from "react-apexcharts";

//Img
import img1 from '../../../../assets/modules/blog/images/blog-avatar/02.png'
import img2 from '../../../../assets/modules/blog/images/blog-avatar/04.png'
import img3 from '../../../../assets/modules/blog/images/blog-avatar/06.png'
import img4 from '../../../../assets/modules/blog/images/blog-avatar/03.png'
import img5 from '../../../../assets/modules/blog/images/app/02.png'
import img6 from '../../../../assets/modules/blog/images/app/01.png'
import img7 from '../../../../assets/modules/blog/images/blog-avatar/03.png'
import img8 from '../../../../assets/modules/blog/images/blog-avatar/05.png'

const Index = memo(() => {

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
      const ChartColor = [variableColors.primary, variableColors.warning, variableColors.info]
      const iqcolor = {colors,ChartColor}
      useEffect(() => {
          return () => iqcolor
      })

    
    //chart
    const chart1 ={
        series: [72.5],
        options:{
              colors: colors,
            plotOptions: {
            radialBar: {
                hollow: {
                margin: 15,
                size: "60%"
                },
                dataLabels: {
                showOn: "always",
                name: {
                    show: false,
                },
                value: {
                    fontSize: "24px",
                    show: true,
                    formatter: function (val) {
                    return '+'+val + '%'
                    }
                }
                }
            }
            },
            stroke: {
            lineCap: "smooth",
            },
        }
    }
    const chart2={
        series: [65, 70, 78],
        options:{
              colors: ChartColor,
              plotOptions: {
                radialBar: {
                  dataLabels: {
                    name: {
                      fontSize: '13px',
                      show: true
                    },
                    value: {
                      fontSize: '16px',
                      show: true
                    },
                  },
                  hollow: {
                    size: '25%',
                  },
                  track: {
                    margin: 8,
                    strokeWidth: '70%',
                  }
                }
              },
              labels: ['Info Blogs', 'Food Blogs','Lifestyle Blogs'],
            },
        }

    const chart3={
        series: [{
            data: [20, 70, 35, 24, 60, 50, 20]
            }, 
            {
            data: [60, 20, 70, 80, 20, 43, 30]
            }],
        options:{
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: true
                }
            },
            yaxis: {
            show: true,
            tickAmount: 6,
            min: 0,
            max: 120
            },
            xaxis:{
            categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            },
            legend: {
            show: false,
            },
            grid: {
            show: true,
            strokeDashArray: 7,
            },
            colors: colors,
            plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 4,
                columnWidth: '18%'
            },
            },
            dataLabels: {
            enabled: false,
            } 
        }
    }
    const chart4={
        options : {
            chart: {
                zoom: {
                    enabled: false
                },
                animations: {
                    enabled: true,
                    easing: 'easeinout',
                    speed: 800,
                    dynamicAnimation: {
                    enabled: true,
                    speed: 400
                    }
                },
                toolbar: {
                    show: false
                },
                },
            colors: colors,
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 3,
            },
            grid: {
                show:true,
                strokeDashArray: 3,
            },
            markers: {
                size: 6,
                colors:  '#FFFFFF',
                strokeColors: ["#3a57e8", "#4bc7d2"],
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
                axisBorder: {
                show: false,      
                },
                axisTicks: {
                show: false,     
                },
            },
            legend: {
                show: false,
            }
        },
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            },
            {
                name: "Mobile",
                data: [10, 82, 75, 68, 47, 60, 49, 91, 108]
            }]
    }
    const chart5={
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                },
                animations: {
                    enabled: true,
                    easing: 'easeinout',
                    speed: 800,
                    dynamicAnimation: {
                    enabled: true,
                    speed: 400
                    }
                },
                toolbar: {
                    show: false
                },
                },
            colors: colors,
            dataLabels: {
                enabled: false
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
                strokeColors: ["#3a57e8", "#4bc7d2"],
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
                axisBorder: {
                show: false,      
                },
                axisTicks: {
                show: false,     
                },
            },
            legend: {
                show: false,
            }
        },
        series: [{
            name: "Desktops",
            data: [20, 51, 65, 39, 49, 42, 35, 62, 18 ]
            },
            {
                name: "Mobile",
                data: [80, 62, 55, 87, 47, 50, 49, 41, 16]
            }]
    }

    //table
    const table1 =[
        {
            name: 'Anne Hathaway',
            img:img1,
            email: 'anneh@example.com',
            country: 'Uk',
            contact: '19',
            number: '28'
        },
        {
            name: 'Jhon Doe',
            img:img2,
            email: 'jhondoe@example.com',
            country: 'India',
            contact: '43',
            number: '65'
        },
        {
            name: 'Oscar Phelps',
            img:img3,
            email: 'oscarp@example.com ',
            country: 'USA',
            contact: '13',
            number: '48'
        },
        {
            name: 'Willow Smith',
            img:img4,
            email: 'willows@example.com',
            country: 'Uk',
            contact: '31',
            number: '25'
        }
    ]

  return (
    <Fragment>
        <div className="d-flex flex-wrap justify-content-between mb-4">
            <h3 className="mb-0">Analytics Overview</h3> 
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} to="#" variant="text-secondary dropdown-toggle" id="dropdownMenuButton22">Last 30 Days</Dropdown.Toggle>
                <Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton22">
                <li><Dropdown.Item href="#">Action</Dropdown.Item></li>
                <li><Dropdown.Item href="#">Another action</Dropdown.Item></li>
                <li><Dropdown.Item href="#">Something else here</Dropdown.Item></li>
                </Dropdown.Menu>
            </Dropdown>
        </div>
        <Row> 
            <Col lg="6" xl="3" md="6">
                <Card>
                    <Card.Body>
                        <div className="text-center">
                            <h2 className="text-primary mb-3">862.2k</h2>
                            <p className="text-dark">Last 7 Days Follower Growth</p>
                            <small>
                                <span className="text-danger">10% </span>
                                <span className="text-dark">Decrease from last week</span>
                            </small>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg="6" xl="3" md="6">
                <Card>
                    <Card.Body>
                        <div className="text-center">
                            <h2 className="text-primary mb-3">4.1M</h2>
                            <p className="text-dark">Last 30 Days Follower Growth</p>
                            <small>
                                <span className="text-danger">24% </span>
                                <span className="text-dark">Decrease from last week</span>
                            </small>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg="6" xl="3" md="6">
                <Card>
                    <Card.Body>
                        <div className="text-center">
                            <h2 className="text-primary mb-3">143.7k</h2>
                            <p className="text-dark">Average Daily Growth</p>
                            <small>
                                <span className="text-success">10% </span>
                                <span className="text-dark">Change</span>
                            </small>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg="6" xl="3" md="6">
                <Card>
                    <Card.Body>
                        <div className="text-center">
                            <h2 className="text-primary mb-3">4.2M</h2>
                            <p className="text-dark">Average Monthly Growth</p>
                            <small>
                                <span className="text-danger">10% </span>
                                <span className="text-dark">Change</span>
                            </small>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg="8">
                <Card>
                    <Tab.Container defaultActiveKey="first">
                        <Card.Header className="flex-wrap d-flex justify-content-between align-items-center">
                            <div className="header-title">
                                <h4 className="card-title">Followers</h4>
                            </div>
                            <Nav as="ul" className="nav-tabs nav-tunnel nav-slider mb-0" data-toggle="slider-tab" role="tablist">
                                <Nav.Item as="li" role="presentation">
                                    <Nav.Link as="button" eventKey="first" className="d-flex align-items-center" role="tab" aria-selected="true">Growth</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" role="presentation">
                                    <Nav.Link as="button" eventKey="second" className="d-flex align-items-center" role="tab" aria-selected="false">Fall</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>
                        <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Chart options={chart4.options} series={chart4.series} type="line" height="350" ></Chart>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Chart options={chart5.options} series={chart5.series} type="line" height="350" ></Chart>
                                </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Card>
                <Card>
                    <Card.Header className="d-flex align-items-center justify-content-between">
                        <h4 className="mb-0 card-title">Users Traffic</h4>
                    </Card.Header>
                    <Card.Body className="card-thumbnail px-0">
                         <div className="table-responsive">
                            <Table className="table py-3" role="grid" data-toggle="appointment_admin">
                                <thead className="bg-soft-primary">
                                    <tr className="text-dark">
                                        <th>User</th>
                                        <th>Email</th>
                                        <th>Contact no.</th>
                                        <th className="text-center">More Details</th>
                                    </tr>
                                </thead>
                                <tbody>   
                                    {
                                        table1.map((item,index) => {
                                            return(
                                                <tr key={index}>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <Link to="#">
                                                                <div className="d-flex align-items-center">
                                                                    <Image className="img-fluid me-3 avatar-50 rounded-circle" src={item.img} alt="profile" loading="lazy" />
                                                                    <div>
                                                                        <span className="fw-bold">{item.name}</span>
                                                                        <p className="text-body mb-0">{item.email}</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">{item.country}</td>
                                                    <td className="text-end fw-bold">{item.contact}</td>
                                                    <td className="text-end fw-bold">{item.number}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th title="User">
                                        <input type="text" className="form-control form-control-sm" placeholder="User" />
                                    </th>
                                    <th title="Email">
                                        <input type="text" className="form-control form-control-sm" placeholder="Email" />
                                    </th>
                                    <th title="Contact-Number">
                                        <input type="text" className="form-control form-control-sm" placeholder="Contact-Number" />
                                    </th>
                                    <th title="More Details">
                                        <input type="text" className="form-control form-control-sm" placeholder="More Details" />
                                    </th>
                                </tr>
                                </tfoot>
                            </Table>
                        </div>             
                    </Card.Body>
                </Card>
                <div>
                    <h3 className="mb-4">Trending Blogs</h3>
                    <div className="overflow-hidden blog-analysis-slider position-relative custom-silder-01 trending-blogs">
                    <Swiper className="p-0 m-0 mb-2 list-inline "
                            slidesPerView={2}
                            spaceBetween={32}
                            modules={[Navigation]}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev'
                            }}>
                            <SwiperSlide className="card-slide">
                                <div> 
                                    <Blogcard blogImage={img5} class-name="mb-0" blogDate="02 Dec 2021" blogcontent="The Expierience: Travel Tales From India and Abroad." blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat..."/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="card-slide">
                                <div>
                                    <Blogcard blogImage={img6} class-name="mb-0" blogDate="02 Dec 2021" blogcontent="The Ultimate Travel Guide: What To Do, See & Eat." blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat..." />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="card-slide">
                                <div>
                                    <Blogcard blogImage={img5} class-name="mb-0" blogDate="02 Dec 2021" blogcontent="The Expierience: Travel Tales From India and Abroad." blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat..." />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="card-slide">
                                <div>
                                    <Blogcard blogImage={img6} class-name="mb-0" blogDate="02 Dec 2021" blogcontent="The Ultimate Travel Guide: What To Do, See & Eat." blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat..." />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Col>
            <Col lg="4">
                <Card>
                    <Card.Header>
                        <h4 className="mb-0">New Visitors</h4>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col lg="7" xl="6" md="6">
                                <Chart options={chart1.options} series={chart1.series} type="radialBar" height="185"></Chart>
                            </Col>
                            <Col lg="5" xl="6" md="6" className="p-0 d-flex align-items-center justify-content-center flex-column">
                                <div className="d-flex align-items-center gap-3">
                                    <h4 className="text-primary mb-0">1,293</h4>
                                    <p className="mb-0 ">Daily</p>
                                </div>
                                <div className="d-flex align-items-center gap-3 my-4">
                                    <h4 className="text-primary mb-0">10,237</h4>
                                    <p className="mb-0 ">Monthly</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <h4 className="text-primary mb-0">11,293</h4>
                                    <p className="mb-0 ">Yearly</p>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h4 className="card-title">Top Social Media Shared</h4>
                    </Card.Header>
                    <Card.Body className="card-thumbnail d-flex flex-column gap-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-3">
                                <Image className="img-fluid avatar-50 rounded-circle" src={img7} alt="01" loading="lazy" />
                                <div>
                                    <h6 className="mb-0">Facebook</h6>
                                </div>
                            </div>
                            <strong>89k</strong>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-3">
                                <Image className="img-fluid avatar-50 rounded-circle" src={img4} alt="01" loading="lazy" />
                                <div>
                                    <h6 className="mb-0">Whatsapp</h6>
                                </div>
                            </div>
                            <strong>48k</strong>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-3">
                                <Image className="img-fluid avatar-50 rounded-circle" src={img2} alt="01" loading="lazy" />
                                <div>
                                    <h6 className="mb-0">UC Community</h6>
                                </div>
                            </div>
                            <strong>36k</strong>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-3">
                                <Image className="img-fluid avatar-50 rounded-circle" src={img8} alt="01" loading="lazy" />
                                <div>
                                    <h6 className="mb-0">Twitter</h6>
                                </div>
                            </div>
                            <strong>30k</strong>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-3">
                                <Image className="img-fluid avatar-50 rounded-circle" src={img8} alt="01" loading="lazy" />
                                <div>
                                    <h6 className="mb-0">Instagram</h6>
                                </div>
                            </div>
                            <strong>65k</strong>
                        </div>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h4 className="mb-0">Most Viewed Blogs</h4>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col lg="12" xl="6" ms="6">
                                <Chart options={chart2.options} series={chart2.series} type="radialBar" height="185" ></Chart>
                            </Col>
                            <Col lg="12" xl="6" md="6" className="p-0 d-flex align-items-center justify-content-center">
                                <div>
                                    <p>
                                        <svg width="8" className="me-2 text-primary" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="4" cy="4" r="4" fill="currentColor"/>
                                        </svg>
                                        Informative Blogs - 75%
                                    </p>
                                    <p>
                                        <svg width="8" className="me-2 text-info" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="4" cy="4" r="4" fill="currentColor"/>
                                        </svg>
                                        Food Blogs - 80%
                                    </p>
                                    <p>
                                        <svg width="8" className="me-2 text-warning" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="4" cy="4" r="4" fill="currentColor"/>
                                        </svg>
                                        Lifestyle Blogs - 85%
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        
                            <h4 className="card-title">Devices</h4>
                            <Dropdown>
                                <Dropdown.Toggle as='svg'width="20" id="dropdownMenuLink2"  role="button" aria-expanded="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="3" cy="12" r="3" fill="currentColor"/>
                                    <circle cx="12" cy="12" r="3" fill="currentColor"/>
                                    <circle cx="21" cy="12" r="3" fill="currentColor"/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul" aria-labelledby="dropdownMenuLink2">
                                    <li><Dropdown.Item  className="dropdown-item" href="#">Action</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#">Another action</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#">Something else here</Dropdown.Item></li>
                                </Dropdown.Menu>
                            </Dropdown>            
                        
                    </Card.Header>
                    <Card.Body className="pt-0">
                        <Chart options={chart3.options} series={chart3.series} type="bar" height="350" ></Chart>
                        <div className="col-lg-12 p-0 d-flex align-items-center justify-content-center">
                            <div className="text-center d-flex justify-content-between">
                                <p className="mx-2">
                                    <svg width="8" className="me-2 text-primary" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4" cy="4" r="4" fill="currentColor"/>
                                    </svg>
                                    Mobile - 85%
                                </p>
                                <p className="mx-2">
                                    <svg width="8" className="me-2 text-info" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4" cy="4" r="4" fill="currentColor"/>
                                    </svg>
                                    Laptop - 50%
                                </p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
          </Row>
    </Fragment>
  )
})
Index.displayName="Index"
export default Index







