import { useState, memo, Fragment } from "react";

//React-bootstrap
import { Image } from "react-bootstrap";

//Router
import { Link } from "react-router-dom";

//Pulgin
import FsLightbox from "fslightbox-react";

//Img
import img1 from "../../../../../assets/modules/chat/images/01.png";
import img2 from "../../../../../assets/modules/chat/images/02.png";
import img3 from "../../../../../assets/modules/chat/images/03.png";
import img4 from "../../../../../assets/modules/chat/images/04.png";
import img5 from "../../../../../assets/modules/chat/images/05.png";

const Rightchat = memo((props) => {
  const [imageController, setImageController] = useState({
    toggler: false,
    slide: 1,
  });

  function imageOnSlide(number) {
    setImageController({
      toggler: !imageController.toggler,
      slide: number,
    });
  }
  return (
    <Fragment>
      <FsLightbox
        toggler={imageController.toggler}
        sources={[img1, img2, img3, img4, img5]}
        slide={imageController.slide}
      />
      <div className="iq-message-body iq-current-user">
        <div className="chat-profile">
          <Image
            src={props.userImg}
            alt="chat-user"
            className="avatar-40 rounded-pill"
            loading="lazy"
          />
        </div>
        <div className="iq-chat-text">
          <small className="iq-chating p-0">
            {props.username}, {props.messageTime}
          </small>
          <div className="d-flex align-items-center justify-content-end">
            <div
              className={`iq-chating-content d-flex align-items-center ${
                props.Image === "true" ? "iq-image" : ""
              }`}
            >
              <p className="mr-2 mb-0">{props.message}</p>
              {props.groupImages === "true" && (
                <div className="d-grid iq-group-image gap-3">
                  <Link onClick={() => imageOnSlide(1)} to="#">
                    <Image
                      src={img1}
                      className="avatar-130 rounded"
                      alt="chat-user"
                      loading="lazy"
                    />
                  </Link>
                  <Link onClick={() => imageOnSlide(2)} to="#">
                    <Image
                      src={img2}
                      className="avatar-130 rounded"
                      alt="chat-user"
                      loading="lazy"
                    />
                  </Link>
                  <Link onClick={() => imageOnSlide(3)} to="#">
                    <Image
                      src={img3}
                      className="avatar-130 rounded"
                      alt="chat-user"
                      loading="lazy"
                    />
                  </Link>
                  <Link onClick={() => imageOnSlide(4)} to="#">
                    <Image
                      src={img4}
                      className="avatar-130 rounded"
                      alt="chat-user"
                      loading="lazy"
                    />
                  </Link>
                </div>
              )}
              {props.singleImage === "true" && (
                <div className="">
                  <Link onClick={() => imageOnSlide(5)} to="#">
                    <Image
                      src={img5}
                      className="rounded iq-single-image"
                      alt="chat-user"
                      loading="lazy"
                    />
                  </Link>
                </div>
              )}
              <span className="badge rounded-pill bg-warning">
                {props.unreadMessage}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

Rightchat.displayName = "Rightchat";
export default Rightchat;
