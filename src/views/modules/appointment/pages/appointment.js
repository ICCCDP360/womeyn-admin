import React, { memo, Fragment, useEffect } from 'react'

// React-bootstrap
import { Row, Col, Image, Dropdown, Table, Form } from 'react-bootstrap'

//Components
import Card from '../../../../components/bootstrap/card'
import CustomToggle from "../../../../components/dropdowns"
import AppointmentsCard from '../components/appointments-card'

// React-router
import { Link } from 'react-router-dom'

//Apexcharts
import Chart from "react-apexcharts";

//Flatpicker
import Flatpickr from "react-flatpickr";

// Redux Selector / Action
import { useSelector } from 'react-redux';

// Import selectors & action from setting store
import * as SettingSelector from '../../../../store/setting/selectors'

//Img
import img1 from '../../../../assets/modules/appointment/images/avatars/04.png'
import img2 from '../../../../assets/modules/appointment/images/avatars/02.png'
import img3 from '../../../../assets/modules/appointment/images/avatars/05.png'
import img4 from '../../../../assets/modules/appointment/images/avatars/03.png'
import img5 from '../../../../assets/modules/appointment/images/avatars/01.png'


const Appointment = memo(() => {
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

    const chart1 = {
        options: {

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
                show: false,
            },
            stroke: {
                show: true,
                curve: 'smooth',
                lineCap: 'butt',
                width: 3,
                dashArray: 0,
            },
            grid: {
                show: true,
                strokeDashArray: 3,
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
        },
        series: [
            {
                name: 'Booked',
                data: [7, 4, 9, 4, 7, 3, 8]
            },
            {
                name: 'Canceled',
                data: [3, 5, 3, 7, 4, 6, 9]
            }],
    }
    const chart2 = {
        options: {
            labels: ["Dentist", "Surgeon"],
            colors: colors,
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 270,
                    donut: {
                        size: '70%',
                        labels: {
                            show: true,
                            total: {
                                show: true,
                                color: '#BCC1C8',
                                fontSize: '18px',
                                fontFamily: 'Inter',
                                fontWeight: 600,
                            },
                            value: {
                                show: true,
                                fontSize: '25px',
                                fontFamily: 'Inter',
                                fontWeight: 700,
                                color: '#8F9FBC',
                            },
                        }
                    }
                }
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                lineCap: 'round'
            },
            grid: {
                padding: {
                    bottom: 0,
                }
            },
            legend: {
                position: 'bottom',
                offsetY: 8,
                show: false,
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        height: 268
                    }
                }
            }]
        },
        series: [40, 15],
    }

    const svg1 = <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z" fill="currentColor"></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.07996 6.6499V6.6599C7.64896 6.6599 7.29996 7.0099 7.29996 7.4399C7.29996 7.8699 7.64896 8.2199 8.07996 8.2199H11.069C11.5 8.2199 11.85 7.8699 11.85 7.4289C11.85 6.9999 11.5 6.6499 11.069 6.6499H8.07996ZM15.92 12.7399H8.07996C7.64896 12.7399 7.29996 12.3899 7.29996 11.9599C7.29996 11.5299 7.64896 11.1789 8.07996 11.1789H15.92C16.35 11.1789 16.7 11.5299 16.7 11.9599C16.7 12.3899 16.35 12.7399 15.92 12.7399ZM15.92 17.3099H8.07996C7.77996 17.3499 7.48996 17.1999 7.32996 16.9499C7.16996 16.6899 7.16996 16.3599 7.32996 16.1099C7.48996 15.8499 7.77996 15.7099 8.07996 15.7399H15.92C16.319 15.7799 16.62 16.1199 16.62 16.5299C16.62 16.9289 16.319 17.2699 15.92 17.3099Z" fill="currentColor"></path>
    </svg>

    const svg2 = <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.34933 14.8577C5.38553 14.8577 2 15.47 2 17.9173C2 20.3665 5.364 20.9999 9.34933 20.9999C13.3131 20.9999 16.6987 20.3876 16.6987 17.9403C16.6987 15.4911 13.3347 14.8577 9.34933 14.8577Z" fill="currentColor"></path>
        <path opacity="0.4" d="M9.34935 12.5248C12.049 12.5248 14.2124 10.4062 14.2124 7.76241C14.2124 5.11865 12.049 3 9.34935 3C6.65072 3 4.48633 5.11865 4.48633 7.76241C4.48633 10.4062 6.65072 12.5248 9.34935 12.5248Z" fill="currentColor"></path>
        <path opacity="0.4" d="M16.1733 7.84873C16.1733 9.19505 15.7604 10.4513 15.0363 11.4948C14.961 11.6021 15.0275 11.7468 15.1586 11.7698C15.3406 11.7995 15.5275 11.8177 15.7183 11.8216C17.6165 11.8704 19.3201 10.6736 19.7907 8.87116C20.4884 6.19674 18.4414 3.79541 15.8338 3.79541C15.551 3.79541 15.2799 3.82416 15.0157 3.87686C14.9795 3.88453 14.9404 3.90177 14.9208 3.93244C14.8954 3.97172 14.914 4.02251 14.9394 4.05605C15.7232 5.13214 16.1733 6.44205 16.1733 7.84873Z" fill="currentColor"></path>
        <path d="M21.779 15.1693C21.4316 14.4439 20.593 13.9465 19.3171 13.7022C18.7153 13.5585 17.0852 13.3544 15.5695 13.3831C15.547 13.386 15.5343 13.4013 15.5324 13.4109C15.5294 13.4262 15.5363 13.4492 15.5656 13.4655C16.2662 13.8047 18.9737 15.2804 18.6332 18.3927C18.6185 18.5288 18.729 18.6438 18.867 18.6246C19.5333 18.5317 21.2476 18.1704 21.779 17.0474C22.0735 16.4533 22.0735 15.7634 21.779 15.1693Z" fill="currentColor"></path>
    </svg>

    const svg3 = <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3 16.8701V9.25708H21V16.9311C21 20.0701 19.0241 22.0001 15.8628 22.0001H8.12733C4.99561 22.0001 3 20.0301 3 16.8701ZM7.95938 14.4101C7.50494 14.4311 7.12953 14.0701 7.10977 13.6111C7.10977 13.1511 7.46542 12.7711 7.91987 12.7501C8.36443 12.7501 8.72997 13.1011 8.73985 13.5501C8.7596 14.0111 8.40395 14.3911 7.95938 14.4101ZM12.0198 14.4101C11.5653 14.4311 11.1899 14.0701 11.1701 13.6111C11.1701 13.1511 11.5258 12.7711 11.9802 12.7501C12.4248 12.7501 12.7903 13.1011 12.8002 13.5501C12.82 14.0111 12.4643 14.3911 12.0198 14.4101ZM16.0505 18.0901C15.596 18.0801 15.2305 17.7001 15.2305 17.2401C15.2206 16.7801 15.5862 16.4011 16.0406 16.3911H16.0505C16.5148 16.3911 16.8902 16.7711 16.8902 17.2401C16.8902 17.7101 16.5148 18.0901 16.0505 18.0901ZM11.1701 17.2401C11.1899 17.7001 11.5653 18.0611 12.0198 18.0401C12.4643 18.0211 12.82 17.6411 12.8002 17.1811C12.7903 16.7311 12.4248 16.3801 11.9802 16.3801C11.5258 16.4011 11.1701 16.7801 11.1701 17.2401ZM7.09989 17.2401C7.11965 17.7001 7.49506 18.0611 7.94951 18.0401C8.39407 18.0211 8.74973 17.6411 8.72997 17.1811C8.72009 16.7311 8.35456 16.3801 7.90999 16.3801C7.45554 16.4011 7.09989 16.7801 7.09989 17.2401ZM15.2404 13.6011C15.2404 13.1411 15.596 12.7711 16.0505 12.7611C16.4951 12.7611 16.8507 13.1201 16.8705 13.5611C16.8804 14.0211 16.5247 14.4011 16.0801 14.4101C15.6257 14.4201 15.2503 14.0701 15.2404 13.6111V13.6011Z" fill="currentColor"></path>
        <path opacity="0.4" d="M3.00293 9.25699C3.01577 8.66999 3.06517 7.50499 3.15803 7.12999C3.63224 5.02099 5.24256 3.68099 7.54442 3.48999H16.4555C18.7376 3.69099 20.3677 5.03999 20.8419 7.12999C20.9338 7.49499 20.9832 8.66899 20.996 9.25699H3.00293Z" fill="currentColor"></path>
        <path d="M8.30465 6.59C8.73934 6.59 9.06535 6.261 9.06535 5.82V2.771C9.06535 2.33 8.73934 2 8.30465 2C7.86996 2 7.54395 2.33 7.54395 2.771V5.82C7.54395 6.261 7.86996 6.59 8.30465 6.59Z" fill="currentColor"></path>
        <path d="M15.6953 6.59C16.1201 6.59 16.456 6.261 16.456 5.82V2.771C16.456 2.33 16.1201 2 15.6953 2C15.2606 2 14.9346 2.33 14.9346 2.771V5.82C14.9346 6.261 15.2606 6.59 15.6953 6.59Z" fill="currentColor"></path>
    </svg>

    const svg4 = <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4" d="M19.3371 5.91772L21.7407 3.50518C21.9082 3.33698 22.0001 3.11407 22.0001 2.87798C22.0001 2.64189 21.9082 2.41898 21.7407 2.25078C21.4065 1.91641 20.8261 1.91641 20.4919 2.25078L18.0884 4.66434L15.6839 2.25078C15.3498 1.91641 14.7693 1.91641 14.4352 2.25078C14.2686 2.41898 14.1768 2.64189 14.1768 2.87798C14.1768 3.11407 14.2686 3.33698 14.4352 3.50518L16.8387 5.91772L14.4352 8.33027C14.2686 8.49847 14.1768 8.72138 14.1768 8.95747C14.1768 9.19356 14.2686 9.41647 14.4352 9.58467C14.7693 9.91904 15.3498 9.91904 15.6839 9.58467L18.0884 7.17111L20.4919 9.58467C20.6595 9.75186 20.8806 9.84406 21.1168 9.84406C21.353 9.84406 21.5741 9.75186 21.7407 9.58467C21.9082 9.41647 22.0001 9.19356 22.0001 8.95747C22.0001 8.72138 21.9082 8.49847 21.7407 8.33027L19.3371 5.91772Z" fill="currentColor"></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M11.0317 12.9724C15.0208 16.9604 15.9258 12.3467 18.4656 14.8848C20.9143 17.3328 22.3216 17.8232 19.2192 20.9247C18.8306 21.237 16.3616 24.9943 7.6846 16.3197C-0.993478 7.644 2.76158 5.17244 3.07397 4.78395C6.18387 1.67385 6.66586 3.08938 9.11449 5.53733C11.6544 8.0765 7.04266 8.98441 11.0317 12.9724Z" fill="currentColor"></path>
    </svg>

    const table = [
        {
            docimg: img1,
            name: 'Elnora obrien',
            email: 'sara.cruz@example.com',
            contact: '(270) 555-0117',
            detail: 'view'
        },
        {
            docimg: img2,
            name: 'Jonathan Bradley',
            email: 'kenzi.lawson@example.com',
            contact: '(319) 555-0115',
            detail: 'view'
        },
        {
            docimg: img3,
            name: 'Katherine Romero',
            email: 'felicia.reid@example.com',
            contact: '(629) 555-0129',
            detail: 'view'
        },
        {
            docimg: img4,
            name: 'Logan Wolfe',
            email: 'georgia.young@example.com',
            contact: '(603) 555-0123',
            detail: 'view'
        },
        {
            docimg: img5,
            name: 'Oscar Phelps',
            email: 'alma.lawson@example.com',
            contact: '(307) 555-0133',
            detail: 'view'
        },
    ]

    return (
        <Fragment>
            <Row>
                <Col lg="8">
                    <h3 className="mb-4">Appointments Overview</h3>
                    <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
                        <Col>
                            <AppointmentsCard color="primary" svg={svg1} counter="1206" content="All" />
                        </Col>
                        <Col>
                            <AppointmentsCard color="primary" svg={svg2} counter="2455" content="New" />
                        </Col>
                        <Col>
                            <AppointmentsCard color="success" svg={svg3} counter="12/4" content="Today’s" />
                        </Col>
                        <Col>
                            <AppointmentsCard color="danger" svg={svg4} counter="1200" content="Cancelled" />
                        </Col>
                    </Row>
                    <Card>
                        <Card.Header className="flex-wrap align-items-center">
                            <Card.Header.Title>
                                <h4>Appointments</h4>
                            </Card.Header.Title>
                            <div className="d-flex align-items-center align-self-center mt-2 mt-sm-0">
                                <div className="d-flex align-items-center text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24" fill="currentColor">
                                        <g><circle cx="12" cy="12" r="8" fill="currentColor"></circle></g>
                                    </svg>
                                    <div className="ms-2">
                                        <span className="text-secondary">Booked</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center ms-3 text-info">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24" fill="currentColor">
                                        <g><circle cx="12" cy="12" r="8" fill="currentColor"></circle></g>
                                    </svg>
                                    <div className="ms-2">
                                        <span className="text-secondary">Canceled</span>
                                    </div>
                                </div>
                            </div>
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
                            <Chart options={chart1.options} series={chart1.series} type="line" height="385" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card>
                        <Card.Header>
                            <Card.Header.Title>
                                <h4>Date</h4>
                            </Card.Header.Title>
                        </Card.Header>
                        <div className="course-picker">
                            <Flatpickr className="d-none" options={{ inline: true, minDate: 'today' }} />
                        </div>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Header.Title>
                                <h4>Appointments Booked</h4>
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col md="7" sm="12" className="mb-lg-0 mb-3">
                                    <Chart options={chart2.options} series={chart2.series} type="donut" height="170" />
                                </Col>
                                <Col md="5" sm="12">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex align-items-center gap-2">
                                            <svg width="12" className="text-primary" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="6.5" cy="7" r="6.5" fill="currentColor" />
                                            </svg>
                                            <div>
                                                <h6 className="mb-0">Dentist</h6>
                                                <span>80%</span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mt-3 gap-2">
                                            <svg width="12" className="text-info" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="6.5" cy="7" r="6.5" fill="currentColor" />
                                            </svg>
                                            <div>
                                                <h6 className="mb-0">Surgeon</h6>
                                                <span>80%</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg="8" md="6" sm="12">
                    <Card>
                        <Card.Header className="flex-wrap">
                            <Card.Header.Title>
                                <h4>Doctors</h4>
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <Table responsive striped className="data-table list-table mb-0 " role="grid">
                                <thead className="bg-soft-primary">
                                    <tr className="text-dark">
                                        <th className="sorting_asc">User</th>
                                        <th className="sorting_asc">Email</th>
                                        <th className="sorting_asc">Contact no.</th>
                                        <th className="text-center">More Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        table.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <Image className="rounded img-fluid avatar-40 me-3" src={item.docimg} alt="profile" loading="lazy" />
                                                            <h6 className="mb-0">{item.name}</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {item.email}
                                                    </td>
                                                    <td >{item.contact}</td>
                                                    <td className="text-center">
                                                        <Link className="btn btn-link" to="#">{item.detail}</Link>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th><Form.Control className="form-control-sm" placeholder="User" /></th>
                                        <th><Form.Control className="form-control-sm" placeholder="Email" /></th>
                                        <th><Form.Control className="form-control-sm" placeholder="Contact-Number" /></th>
                                        <th><Form.Control className="form-control-sm" placeholder="More Details" /></th>
                                    </tr>
                                </tfoot>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4" md="6" sm="12">
                    <Card>
                        <Card.Header className="flex-wrap">
                            <Card.Header.Title>
                                <h4>Upcoming Appointments</h4>
                                <p className="mb-0">
                                    <svg className="me-2" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#17904b" d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" />
                                    </svg>
                                    16% this month
                                </p>
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex profile-media align-items-top">
                                <div className="mt-1 profile-dots-pills border-primary"></div>
                                <div className="ms-4">
                                    <h6 className="mb-1 ">Cameron Williamson - <span className="text-primary">Dentist</span></h6>
                                    <span className="mb-0">11 Jul 8:10 PM</span>
                                </div>
                            </div>
                            <div className="d-flex profile-media align-items-top">
                                <div className="mt-1 profile-dots-pills border-primary"></div>
                                <div className="ms-4">
                                    <h6 className="mb-1 ">Brooklyn Simmons - <span className="text-primary">Orthopedic</span></h6>
                                    <span className="mb-0">11 Jul 11 PM</span>
                                </div>
                            </div>
                            <div className="d-flex profile-media align-items-top">
                                <div className="mt-1 profile-dots-pills border-primary"></div>
                                <div className="ms-4">
                                    <h6 className="mb-1 ">Robert Fox - <span className="text-primary">Surgeon</span></h6>
                                    <span className="mb-0">11 Jul 7:64 PM</span>
                                </div>
                            </div>
                            <div className="d-flex profile-media align-items-top">
                                <div className="mt-1 profile-dots-pills border-primary"></div>
                                <div className="ms-4">
                                    <h6 className="mb-1 ">Leslie Alexander - <span className="text-primary">Neurology</span></h6>
                                    <span className="mb-0">11 Jul 1:21 AM</span>
                                </div>
                            </div>
                            <div className="d-flex profile-media align-items-top">
                                <div className="mt-1 profile-dots-pills border-primary"></div>
                                <div className="ms-4">
                                    <h6 className="mb-1 ">Robbin Doe - <span className="text-primary">ENT</span></h6>
                                    <span className="mb-0">11 Jul 4:30 AM</span>
                                </div>
                            </div>
                            <div className="mb-1 d-flex profile-media align-items-top">
                                <div className="mt-1 profile-dots-pills border-primary"></div>
                                <div className="ms-4">
                                    <h6 className="mb-1 ">Jane Cooper - <span className="text-primary">Cardiologist</span></h6>
                                    <span className="mb-0">11 Jul 4:50 AM</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
})

Appointment.displayName = "Appointment"
export default Appointment
