import { memo, Fragment, useEffect, useState } from "react";

//react-bootstrap
import { Row, Col, Image, Form, Button } from "react-bootstrap";

//components
import Card from "../../../components/bootstrap/card";

//router
import { Link, useNavigate } from "react-router-dom";

// img
import avatars1 from "../../../assets/images/avatars/01.png";
import avatars2 from "../../../assets/images/avatars/avtar_1.png";
import avatars3 from "../../../assets/images/avatars/avtar_2.png";
import avatars4 from "../../../assets/images/avatars/avtar_3.png";
import avatars5 from "../../../assets/images/avatars/avtar_4.png";
import avatars6 from "../../../assets/images/avatars/avtar_5.png";
// import { GetUserData } from "./api/Get";
// import { SocialUpdateUser, UserConfirmPasswordChange, UserProfileUpdateData } from "./api/Post";
import { getBasicInfoServices } from "../../../services/basicInfo-services/basicInfo-services";
import { updateUserServices } from "../../../services/update-user/updateUser-services";
import { updateSocialProfileServices } from "../../../services/update-socialProfile/updateSocialProfile-services";
import { changePasswordServices } from "../../../services/change-password/changePassword-services";
import { toast } from "react-toastify";
import { imageUploadServices } from "../../../services/upload-image/imageUpload-services";
import "./styles.scss";

const Profileuser = memo(() => {
  const userid = localStorage.getItem("user_id");
  const token = localStorage.getItem("access_token");
  console.log("userid: " + userid);
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  // social datas
  const [socialerror, setSocialError] = useState(false);
  const [sociallinks, setSocialLinks] = useState({
    facebookUrl: "",
    instagramUrl: "",
    linkedinUrl: "",
    twitterUrl: "",
    youtubeUrl: "",
  });
  const { facebookUrl, instagramUrl, linkedinUrl, twitterUrl, youtubeUrl } =
    sociallinks;
  const handleSocialChanges = (e) => {
    setSocialLinks({ ...sociallinks, [e.target.name]: e.target.value });
  };

  const handleSocialSubmit = (e) => {
    e.preventDefault();

    if (
      facebookUrl.length === 0 ||
      instagramUrl.length === 0 ||
      linkedinUrl.length === 0 ||
      twitterUrl.length === 0 ||
      youtubeUrl.length === 0
    ) {
      setSocialError(true);
    }

    if (
      facebookUrl &&
      instagramUrl &&
      linkedinUrl &&
      twitterUrl &&
      youtubeUrl
    ) {
      // const userid = localStorage.getItem("userid");
      console.log(sociallinks, "sociallinks");

      const data = {
        facebookUrl: facebookUrl,
        instagramUrl: instagramUrl,
        linkedinUrl: linkedinUrl,
        twitterUrl: twitterUrl,
        youtubeUrl: youtubeUrl,
      };

      updateSocialProfileServices(userid, data)
        .then((res) => {
          toast.success("successfully Socials updated");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          toast.error("error");
        });
    }
  };

  // social end datas

  // user profile details

  const [profileerror, setProfileError] = useState(false);
  const [Userdetails, setUsersdetails] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    alternateContactNumber: "",
    gender: "",
  });
  const { firstName, lastName, contactNumber, alternateContactNumber, gender } =
    Userdetails;
  const handleUserDetailsChanges = (e) => {
    setUsersdetails({ ...Userdetails, [e.target.name]: e.target.value });
  };

  const handleUserProfileSubmit = (e) => {
    e.preventDefault();
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      contactNumber.length === 0 ||
      alternateContactNumber.length === 0 ||
      gender.length === 0
    ) {
      setProfileError(true);
    }

    if (
      firstName &&
      lastName &&
      contactNumber &&
      alternateContactNumber &&
      gender
    ) {
      // const userid = localStorage.getItem("userid");

      const data = {
        firstName: firstName,
        lastName: lastName,
        contactNumber: contactNumber,
        alternateContactNumber: alternateContactNumber,
        gender: gender,
      };
      console.log(data, "sociallinks");
      updateUserServices(userid, data)
        .then((res) => {
          toast.success("successfully User Profile updated");
          console.log("res", res);
        })
        .catch((err) => {
          console.log(err);
          toast.error("error");
        });
    }
  };

  // user profile end

  // change Password start

  const [changepassword, setChangepassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [passworderror, setPassworderror] = useState(false);

  const { oldPassword, newPassword, confirmNewPassword } = changepassword;

  const handleChangePassword = (e) => {
    setChangepassword({ ...changepassword, [e.target.name]: e.target.value });
  };

  const handleSubmitChangePassword = (e) => {
    e.preventDefault();
    if (
      oldPassword.length === 0 ||
      newPassword.length === 0 ||
      confirmNewPassword.length === 0
    ) {
      setPassworderror(true);
    }

    if (oldPassword && newPassword && confirmNewPassword) {
      console.log("changepassword", changepassword);
      changePasswordServices(changepassword)
        .then((res) => {
          console.log(res);
          toast.success(`${res?.data?.message} 😀`);
          localStorage.removeItem("auth");
          localStorage.removeItem("access_token");
          localStorage.removeItem("user_id");
          setTimeout(() => {
            navigate("/");
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
          toast.error(`${err?.response?.data?.message} 😬`);
        });
    }
  };

  const [image, setImage] = useState("");
  const [imageuploads, setImageUpload] = useState("");

  const handleSubmitImgaes = (e) => {
    if (e.target.files[0]) {
      setImageUpload(e.target.files[0]);
    }
  };

  const uploadImages = (e) => {
    e.preventDefault();
    // console.log("image", e.target.files[0]);
    // setImage([...e.target.files]);

    const formData = new FormData();

    formData.append("upl", imageuploads);

    // console.log("formData", formData.get("upl"));

    imageUploadServices(userid, formData)
      .then((res) => {
        console.log("response", res);
        toast.success(`${res.message} 😀`);
        // window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // change Password end

  useEffect(() => {
    getBasicInfoServices(userid)
      .then((res) => {
        console.log("adminData", res?.data);
        setUsers(res?.data);
        setUsersdetails(res?.data);
        setSocialLinks(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("users", users);
  return (
    <Fragment>
      <Row>
        <Col xl="4" lg="4" className="">
          <Card style={{ padding: "0px" }}>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">
                  {users?.firstName} {users?.lastName}
                </h4>
              </div>
            </Card.Header>
            <Card.Body>
              <Form.Group className="form-group">
                <div className="profile-img-edit position-relative">
                  {/* {users?.profileImageName ? (
                    <Image
                      className="theme-color-default-img  profile-pic rounded avatar-100"
                      src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${users.profileImageName}`}
                      alt="profile-pic"
                    />
                  ) : (
                    <Image
                      className="theme-color-default-img  profile-pic rounded avatar-100"
                      src="https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png"
                      alt="profile-pic"
                    />
                  )} */}
                  {/* <div className="upload-icone bg-primary">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={uploadImages}
                    />
                    <svg
                      className="upload-button"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#ffffff"
                        d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
                      />
                    </svg>
                    <Form.Control
                      className="file-upload"
                      type="file"
                      accept="image/*"
                    />
                  </div> */}
                  {/* <div className="profile-img-edit position-relative">
                    {imageuploads ? (
                      <div>
                        <img
                          alt="profile-pic"
                          width={"100px"}
                          height={"100px"}
                          style={{ borderRadius: "50%" }}
                          src={URL.createObjectURL(imageuploads)}
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          width={"100px"}
                          height={"100px"}
                          style={{ borderRadius: "50%" }}
                          // className="theme-color-default-img  profile-pic rounded avatar-100"
                          src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${users.profileImageName}`}
                          alt="profile-pic"
                        />
                      </div>
                    )}

                    <div className="inputWrapper">
                      <input
                        type="file"
                        // onChange={handleSubmitImgaes}
                        accept="image/*"
                        className="fileInput"
                      />
                      <Button onClick={handleSubmitImgaes}>Select Image</Button>
                      <Button className="color-one" onClick={uploadImages}>
                        Upload
                      </Button>
                    </div>
                  </div> */}
                  <div className="main-choose-image-section">
                    <div>
                      <div className="main-image-upload-section">
                        <label htmlFor="upload-button">
                          <div className="box-image-upload">
                            {imageuploads === "null" && (
                              <div>
                                <img
                                  src="https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png"
                                  alt="profile-pic"
                                  width={"110px"}
                                  height={"110px"}
                                  style={{
                                    borderRadius: "50%",
                                    cursor: "pointer",
                                  }}
                                />
                              </div>
                            )}
                            {imageuploads ? (
                              <div>
                                <>
                                  <img
                                    alt="profile-pic"
                                    width={"110px"}
                                    height={"110px"}
                                    style={{
                                      borderRadius: "50%",
                                      cursor: "pointer",
                                    }}
                                    src={URL.createObjectURL(imageuploads)}
                                  />
                                  <div className="mt-2">
                                    <Button onClick={uploadImages}>
                                      Upload
                                    </Button>
                                  </div>
                                </>
                              </div>
                            ) : (
                              <>
                                {users.profileImageName && (
                                  <>
                                    <img
                                      width={"110px"}
                                      height={"110px"}
                                      style={{
                                        borderRadius: "50%",
                                        cursor: "pointer",
                                      }}
                                      src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${users.profileImageName}`}
                                      alt="profile-pic"
                                    />
                                  </>
                                )}
                              </>
                            )}

                            <div className="upload-image-icons">
                              <svg
                                className="upload-image-icons p-1"
                                width="25"
                                height="25"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="#ffffff"
                                  d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </label>
                      </div>
                      <input
                        type="file"
                        id="upload-button"
                        style={{ display: "none" }}
                        onChange={handleSubmitImgaes}
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="img-extension mt-3">
                  <div className="d-inline-block align-items-center">
                    <span>Only</span> <Link to="#">.jpg</Link>{" "}
                    <Link to="#">.png</Link> <Link to="#">.jpeg</Link>{" "}
                    <span>allowed</span>
                  </div>
                </div> */}
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>Facebook Url:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Facebook Url"
                  name="facebookUrl"
                  value={facebookUrl}
                  onChange={handleSocialChanges}
                  style={{ color: "black" }}
                />
                <div>
                  {socialerror && facebookUrl.length <= 0 ? (
                    <div className="text-danger">
                      Please provide a facebookurl{" "}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  {socialerror && facebookUrl.length > 1 ? (
                    <div className="text-success"> Looks Good! 😎</div>
                  ) : (
                    ""
                  )}
                </div>
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>Twitter Url:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Twitter Url"
                  name="twitterUrl"
                  value={twitterUrl}
                  onChange={handleSocialChanges}
                  style={{ color: "black" }}
                />
                <div>
                  {socialerror && twitterUrl.length <= 0 ? (
                    <div className="text-danger">
                      Please provide a twitterUrl{" "}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  {socialerror && twitterUrl.length > 1 ? (
                    <div className="text-success"> Looks Good! 😎</div>
                  ) : (
                    ""
                  )}
                </div>
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>Instagram Url:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Instagram Url"
                  name="instagramUrl"
                  value={instagramUrl}
                  onChange={handleSocialChanges}
                  style={{ color: "black" }}
                />
                <div>
                  {socialerror && instagramUrl.length <= 0 ? (
                    <div className="text-danger">
                      Please provide a instagramUrl{" "}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  {socialerror && instagramUrl.length > 1 ? (
                    <div className="text-success"> Looks Good! 😎</div>
                  ) : (
                    ""
                  )}
                </div>
              </Form.Group>
              <Form.Group className="mb-0 form-group">
                <Form.Label>Linkedin Url:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Linkedin Url"
                  name="linkedinUrl"
                  value={linkedinUrl}
                  onChange={handleSocialChanges}
                  style={{ color: "black" }}
                />
                <div>
                  {socialerror && linkedinUrl.length <= 0 ? (
                    <div className="text-danger">
                      Please provide a linkedinUrl{" "}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  {socialerror && linkedinUrl.length > 1 ? (
                    <div className="text-success"> Looks Good! 😎</div>
                  ) : (
                    ""
                  )}
                </div>
              </Form.Group>
              <Form.Group className="mb-0 form-group">
                <Form.Label>Youtube Url:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Youtube Url"
                  name="youtubeUrl"
                  value={youtubeUrl}
                  onChange={handleSocialChanges}
                  style={{ color: "black" }}
                />
                <div>
                  {socialerror && youtubeUrl.length <= 0 ? (
                    <div className="text-danger">
                      Please provide a youtubeUrl{" "}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  {socialerror && youtubeUrl.length > 1 ? (
                    <div className="text-success"> Looks Good! 😎</div>
                  ) : (
                    ""
                  )}
                </div>
              </Form.Group>
            </Card.Body>
            <div
              className="d-flex justify-content-end mb-3"
              style={{ paddingRight: "2%" }}
            >
              <Button onClick={handleSocialSubmit}>Update</Button>
            </div>
          </Card>
        </Col>
        <Col xl="8" lg="8">
          <Card style={{ padding: "0px" }}>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Profile Information</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="new-user-info">
                <Form>
                  <div className="row">
                    <Form.Group className="col-md-6 form-group">
                      <Form.Label htmlFor="fname">First Name:</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={firstName}
                        placeholder="First Name"
                        onChange={handleUserDetailsChanges}
                        style={{ color: "black" }}
                      />
                      <div>
                        {profileerror && firstName.length <= 0 ? (
                          <div className="text-danger">
                            Please provide a firstName{" "}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        {profileerror && firstName.length > 1 ? (
                          <div className="text-success"> Looks Good! 😎</div>
                        ) : (
                          ""
                        )}
                      </div>
                    </Form.Group>
                    <Form.Group className="col-md-6 form-group">
                      <Form.Label htmlFor="lname">Last Name:</Form.Label>
                      <Form.Control
                        type="text"
                        id="lname"
                        placeholder="Last Name"
                        name="lastName"
                        value={lastName}
                        onChange={handleUserDetailsChanges}
                        style={{ color: "black" }}
                      />
                      <div>
                        {profileerror && lastName.length <= 0 ? (
                          <div className="text-danger">
                            Please provide a lastName{" "}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        {profileerror && lastName.length > 1 ? (
                          <div className="text-success"> Looks Good! 😎</div>
                        ) : (
                          ""
                        )}
                      </div>
                    </Form.Group>

                    <Form.Group className="col-sm-12 form-group">
                      <Form.Label>Gender:</Form.Label>
                      <Form.Select
                        id="validationDefault04"
                        name="gender"
                        value={gender}
                        onChange={handleUserDetailsChanges}
                        required
                        style={{ color: "black" }}
                      >
                        <option value="">--Select Gender--</option>
                        <option label="Male" value="Male">
                          Male
                        </option>
                        <option label="Female" value="Female">
                          Female
                        </option>
                      </Form.Select>
                      <div>
                        {profileerror && gender.length <= 0 ? (
                          <div className="text-danger">
                            Please provide a gender{" "}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        {profileerror && gender.length > 1 ? (
                          <div className="text-success"> Looks Good! 😎</div>
                        ) : (
                          ""
                        )}
                      </div>
                    </Form.Group>
                    <Form.Group className="col-md-6  form-group">
                      <Form.Label htmlFor="mobno">Mobile Number:</Form.Label>
                      <Form.Control
                        type="text"
                        id="mobno"
                        name="contactNumber"
                        value={contactNumber}
                        placeholder="Mobile Number"
                        onChange={handleUserDetailsChanges}
                        style={{ color: "black" }}
                      />
                      <div>
                        {profileerror && contactNumber.length <= 0 ? (
                          <div className="text-danger">
                            Please provide a contactNumber{" "}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        {profileerror && contactNumber.length > 1 ? (
                          <div className="text-success"> Looks Good! 😎</div>
                        ) : (
                          ""
                        )}
                      </div>
                    </Form.Group>
                    <Form.Group className="col-md-6  form-group">
                      <Form.Label htmlFor="altconno">
                        Alternate Contact:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="altconno"
                        placeholder="Alternate Contact"
                        name="alternateContactNumber"
                        value={
                          alternateContactNumber ? alternateContactNumber : ""
                        }
                        onChange={handleUserDetailsChanges}
                        style={{ color: "black" }}
                      />
                      <div>
                        {profileerror && alternateContactNumber.length <= 0 ? (
                          <div className="text-danger">
                            Please provide a alternateContactNumber{" "}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        {profileerror && alternateContactNumber.length > 1 ? (
                          <div className="text-success"> Looks Good! 😎</div>
                        ) : (
                          ""
                        )}
                      </div>
                    </Form.Group>
                    <Form.Group className="col-md-6  form-group">
                      <Form.Label htmlFor="email">Email:</Form.Label>
                      <Form.Control
                        type="email"
                        id="email"
                        name="emailid"
                        value={users?.email}
                        placeholder="Email"
                        disabled
                        style={{ color: "black" }}
                      />
                    </Form.Group>
                  </div>
                  <div className="d-flex justify-content-end">
                    <Button
                      type="button"
                      variant="btn btn-primary"
                      onClick={handleUserProfileSubmit}
                    >
                      Update
                    </Button>
                  </div>
                  <hr />
                  <h5 className="mb-3">Change Password</h5>
                  <div className="row">
                    <Form.Group className="col-md-6 form-group">
                      <Form.Label htmlFor="uname">Email</Form.Label>
                      <Form.Control
                        type="email"
                        id="uname"
                        value={users?.email}
                        placeholder="User Name"
                        disabled
                        style={{ color: "black" }}
                      />
                    </Form.Group>
                    <Form.Group className="col-md-6 form-group">
                      <Form.Label htmlFor="opass">Old Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="oldPassword"
                        value={oldPassword}
                        onChange={handleChangePassword}
                        placeholder="Old Password"
                        style={{ color: "black" }}
                      />
                      <div>
                        {passworderror && oldPassword.length <= 0 ? (
                          <div className="text-danger">
                            Please provide a oldPassword{" "}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        {passworderror && oldPassword.length > 1 ? (
                          <div className="text-success"> Looks Good! 😎</div>
                        ) : (
                          ""
                        )}
                      </div>
                    </Form.Group>
                    <Form.Group className="col-md-6 form-group">
                      <Form.Label htmlFor="pass">New Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="New Password"
                        name="newPassword"
                        value={newPassword}
                        onChange={handleChangePassword}
                        style={{ color: "black" }}
                      />
                      <div>
                        {passworderror && newPassword.length <= 0 ? (
                          <div className="text-danger">
                            Please provide a newPassword{" "}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        {passworderror && newPassword.length > 1 ? (
                          <div className="text-success"> Looks Good! 😎</div>
                        ) : (
                          ""
                        )}
                      </div>
                    </Form.Group>
                    <Form.Group className="col-md-6 form-group">
                      <Form.Label htmlFor="rpass">Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        id="rpass"
                        placeholder="Confirm Password"
                        name="confirmNewPassword"
                        value={confirmNewPassword}
                        onChange={handleChangePassword}
                        style={{ color: "black" }}
                      />
                      <div>
                        {passworderror && confirmNewPassword.length <= 0 ? (
                          <div className="text-danger">
                            Please provide a confirmNewPassword{" "}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        {passworderror && confirmNewPassword.length > 1 ? (
                          <div className="text-success"> Looks Good! 😎</div>
                        ) : (
                          ""
                        )}
                      </div>
                    </Form.Group>
                  </div>
                  <div className="d-flex justify-content-end">
                    <Button
                      type="button"
                      variant="btn btn-primary"
                      onClick={handleSubmitChangePassword}
                    >
                      Update
                    </Button>
                  </div>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Profileuser.displayName = "Profileuser";
export default Profileuser;
