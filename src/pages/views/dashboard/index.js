import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import { Card, Col, Dropdown, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as SettingSelector from "../../../store/setting/selectors.ts";
import DarkArrow from "./darkArrow.svg";
import "./dashboard.scss";
import Down from "./down.svg";
import Four from "./four.svg";
import Jacket from "./jacket.svg";
import Left from "./leftArrow.svg";
import LightArrow from "./lightArrow.svg";
import One from "./one.svg";
import Search from "./Search.svg";
import Star from "./star.svg";
import Three from "./three.svg";
import Two from "./two.svg";

function Index() {
  const table1 = [
    {
      rank: "#179",
      name: "Username",
      email: "Shop name/ brand name",
      revenue: "$25,166 ",
      sales: "4669",
    },
    {
      rank: "#179",
      name: "Username",
      email: "Shop name/ brand name",
      revenue: "$25,166 ",
      sales: "4669",
    },
    {
      rank: "#179",
      name: "Username",
      email: "Shop name/ brand name",
      revenue: "$25,166 ",
      sales: "4669",
    },
    {
      rank: "#179",
      name: "Username",
      email: "Shop name/ brand name",
      revenue: "$25,166 ",
      sales: "4669",
    },
    {
      rank: "#179",
      name: "Username",
      email: "Shop name/ brand name",
      revenue: "$25,166 ",
      sales: "4669",
    },
    {
      rank: "#179",
      name: "Username",
      email: "Shop name/ brand name",
      revenue: "$25,166 ",
      sales: "4669",
    },
    {
      rank: "#179",
      name: "Username",
      email: "Shop name/ brand name",
      revenue: "$25,166 ",
      sales: "4669",
    },
  ];

  const productData = [
    {
      name: "Biker’s Jacket",
      img: Jacket,
      rate: 3.7,
    },
    {
      name: "Biker’s Jacket",
      img: Jacket,
      rate: 3.7,
    },
    {
      name: "Biker’s Jacket",
      img: Jacket,
      rate: 3.7,
    },
    {
      name: "Biker’s Jacket",
      img: Jacket,
      rate: 3.7,
    },
  ];

  useSelector(SettingSelector.theme_color);

  const getVariableColor = () => {
    let prefix =
      getComputedStyle(document.body).getPropertyValue("--prefix") || "bs-";
    if (prefix) {
      prefix = prefix.trim();
    }
    const color1 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}primary`
    );
    const color2 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}info`
    );
    const color3 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}primary-tint-20`
    );
    const color4 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}warning`
    );
    return {
      primary: color1.trim(),
      info: color2.trim(),
      warning: color4.trim(),
      primary_light: color3.trim(),
    };
  };
  const variableColors = getVariableColor();
  const colors = [variableColors.primary, variableColors.info];
  useEffect(() => {
    return () => colors;
  });

  const chart1 = {
    options: {
      chart: {
        fontFamily:
          '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: false,
        },
      },
      colors: colors,
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
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
        show: false,
      },
      xaxis: {
        labels: {
          minHeight: 22,
          maxHeight: 22,
          show: true,
          style: {
            colors: "#8A92A6",
          },
        },
        lines: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      grid: {
        show: true,
        strokeDashArray: 3,
      },
      responsive: [
        {
          breakpoint: 1399,
          options: {
            chart: {
              height: 320,
            },
          },
        },
      ],
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.4,
          opacityTo: 0.1,
          stops: [0, 50, 80],
          colors: ["#3a57e8"],
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    series: [
      {
        name: "total",
        data: [30, 60, 20, 60, 25, 80, 40],
      },
    ],
  };

  const chart4 = {
    options: {
      colors: colors,
      plotOptions: {
        radialBar: {
          inverseOrder: false,
          endAngle: 360,
          hollow: {
            margin: 5,
            size: "50%",
            background: "transparent",
            imageWidth: 150,
            imageHeight: 150,
            imageClipped: true,
            position: "front",
            dropShadow: {
              enabled: false,
              blur: 3,
              opacity: 0.5,
            },
          },
          track: {
            show: true,
            background: "#f2f2f2",
            strokeWidth: "70%",
            opacity: 1,
            margin: 6,
            dropShadow: {
              enabled: false,
              blur: 3,
              opacity: 0.5,
            },
          },
          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: "16px",
              fontWeight: 600,
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: "14px",
              fontWeight: 400,
              offsetY: 16,
              formatter: function (val) {
                return val + "%";
              },
            },
          },
        },
      },
      labels: ["Male", "Female"],
    },
    series: [44, 55],
  };
  return (
    <div className="p-5">
      <div>
        <p className="summary-heading">Summary</p>
        <div className="d-flex justify-content-between">
          <p className="welcome-text">Welcome Back to Dashboard.</p>
          <div className="d-flex">
            <p className="timestamp-text">Time stamp</p>
            <Dropdown className="header-dropdown">
              <Dropdown.Toggle>
                Monthly <img src={LightArrow} className="monthly-arrow-img" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>week</Dropdown.Item>
                <Dropdown.Item>day</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Row>
          <Col lg="6">
            <Row>
              <Col md="6">
                <Card className="small-card">
                  <Card.Body>
                    <div className="smallcard-inside-container">
                      <img className="smallcard-inside-img" src={One} />
                      <p className="smallcard-inside-numtext">12/24</p>
                      <p className="smallcard-inside-text">
                        Active/ Total vendors
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="6">
                <Card className="small-card">
                  <Card.Body>
                    <div className="smallcard-inside-container">
                      <img src={Two} className="smallcard-inside-img" />
                      <p className="smallcard-inside-numtext">12/24</p>
                      <p className="smallcard-inside-text">
                        Active/ Total products
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="small-card">
                  <Card.Body>
                    <div className="smallcard-inside-container">
                      <img src={Three} className="smallcard-inside-img" />
                      <p className="smallcard-inside-numtext">$4,434</p>
                      <p className="smallcard-inside-text">
                        Total sales/ revenue
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="6">
                <Card className="small-card">
                  <Card.Body>
                    <div className="smallcard-inside-container">
                      <img src={Four} className="smallcard-inside-img" />
                      <p className="smallcard-inside-numtext">$440</p>
                      <p className="smallcard-inside-text">Avg order value</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col lg="6">
            <Card className="rightside-card-container">
              <div className="card-header">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Revenue</h4>
                </div>
              </div>
              <Card.Body>
                <Chart
                  options={chart1.options}
                  series={chart1.series}
                  type="area"
                  height="350"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col lg="7">
            <Card>
              <Card.Header className="flex-wrap align-items-center p-0">
                <div className="d-flex justify-content-between">
                  <p className="topseller-text">Top Sellers (500)</p>
                  <div className="d-flex align-items-center">
                    <Dropdown className="ms-2">
                      <Dropdown.Toggle
                        variant="text-secondary dropdown-toggle"
                        id="dropdownMenuButton2"
                      >
                        This week{" "}
                        <img src={DarkArrow} className="darkarrow-img" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu aria-labelledby="dropdownMenuButton2">
                        <Dropdown.Item>Year</Dropdown.Item>
                        <Dropdown.Item>Month</Dropdown.Item>
                        <Dropdown.Item>Week</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex w-100">
                    <p className="mb-0">Show</p>
                    <Dropdown className="count-dropdown">
                      <Dropdown.Toggle
                        className="count-dropdown-inside"
                        variant="text-secondary dropdown-toggle"
                        id="dropdownMenuButton2"
                      >
                        01
                        <img src={Down} className="count-dropdown-arrowimg" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>week</Dropdown.Item>
                        <Dropdown.Item>day</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <p className="mb-0">entries</p>
                  </div>
                  <div className="d-flex searchbox-container">
                    <input className="search-input-box" placeholder="Search" />
                    <img src={Search} className="search-img" />
                  </div>
                </div>
              </Card.Header>
              <Card.Body className="p-0">
                <div className="mt-4 table-responsive  ">
                  <Table className="data-table list-table mb-0" role="grid">
                    <thead>
                      <tr className="added-line">
                        <th>S.no</th>
                        <th>Profiles</th>
                        <th>Revenue</th>
                        <th>Sales</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table1.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <p className="rank-text">{item.rank}</p>
                            </td>
                            <td>
                              <h6>{item.name}</h6>
                              <p className="mb-0">{item.email}</p>
                            </td>
                            <td>
                              <strong>{item.revenue}</strong>
                            </td>
                            <td>{item.sales}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
                <div className="d-flex justify-content-between mt-2 topseller-btm-container">
                  <p className="topseller-btm-inside1">Rank</p>
                  <p className="topseller-btm-inside2">Profile</p>
                  <p className="topseller-btm-inside3">Revenue</p>
                  <p className="topseller-btm-inside1">Sales</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="showing-entries-text">
                    Showing 1 to 4 of 4 entries
                  </p>
                  <div className="bd-example">
                    <nav aria-label="Standard pagination example">
                      <ul className="pagination">
                        <li className="page-item">
                          <Link
                            className="page-link"
                            to="#"
                            aria-label="Previous"
                          >
                            <span aria-hidden="true">«</span>
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            1
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            3
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <Dropdown>
                  <Dropdown.Toggle>
                    See all sellers{" "}
                    <img src={LightArrow} className="seller-light-arrow" />
                  </Dropdown.Toggle>
                </Dropdown>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="5">
            <Card className="rightside-1st-container">
              <Card.Header className="rightside-1st-cardheader">
                <div className="d-flex justify-content-between">
                  <p className="user-text">User engagement</p>
                  <div className="d-flex align-items-center">
                    <Dropdown className="ms-2 user-week-dropdown">
                      <Dropdown.Toggle
                        variant="text-secondary dropdown-toggle"
                        id="dropdownMenuButton2"
                      >
                        This week{" "}
                        <img src={DarkArrow} className="user-darkarrow" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu aria-labelledby="dropdownMenuButton2">
                        <Dropdown.Item>Year</Dropdown.Item>
                        <Dropdown.Item>Month</Dropdown.Item>
                        <Dropdown.Item>Week</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </Card.Header>
              <Card.Body className="rightside-1st-cardbody">
                <div className="d-flex align-items-center justify-content-between  flex-wrap">
                  <Chart
                    options={chart4.options}
                    series={chart4.series}
                    type="radialBar"
                    className="col-md-7 col-lg-7"
                    height="250"
                  />
                  <div className="d-grid gap col-md-5 col-lg-5">
                    <div className="d-flex align-items-start">
                      <svg
                        className="mt-2 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                      <div className="ms-2">
                        <span className="mb-3">New registeration</span>
                        <h6 className="mb-0">504</h6>
                      </div>
                    </div>
                    <div className="d-flex align-items-start">
                      <svg
                        className="mt-2 text-info"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                      <div className="ms-2">
                        <span className="mb-3">Repeat Users</span>
                        <h6 className="mb-0">654</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card className="rightside-2nd-container">
              <p className="popular-text">Popular products/ services (20)</p>
              {productData.map((data) => (
                <div className="d-flex justify-content-between mt-3">
                  <div className="product-img-container">
                    <img className="product-img" src={data.img} />
                  </div>
                  <div className="product-center-container">
                    <p>{data.name}</p>
                    <div className="d-flex">
                      <img src={Star} />
                      <p className="product-rate-text">{data.rate}</p>
                    </div>
                  </div>
                  <div className="product-arrow">
                    <img src={Left} />
                  </div>
                </div>
              ))}
              <Dropdown className="mt-5">
                <Dropdown.Toggle>
                  See all top selling products{" "}
                  <img
                    src={LightArrow}
                    className="product-lightarrow-img"
                    style={{ marginLeft: "5%" }}
                  />
                </Dropdown.Toggle>
              </Dropdown>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Index;
