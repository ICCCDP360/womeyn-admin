import { memo, Fragment } from "react";
import img1 from "../../../assets/org_logo.png";

const Logo = memo((props) => {
  return (
    <Fragment>
      <div className="logo-main">
        <img
          className="rounded img-fluid avatar-65 me-3"
          src={img1}
          alt=""
          loading="lazy"
        />
      </div>
    </Fragment>
  );
});

Logo.displayName = "Logo";
export default Logo;
