import { memo, Fragment } from "react";

// Redux Selector / Action
import { useSelector } from "react-redux";

// Import selectors & action from setting store
import * as SettingSelector from "../../../../store/setting/selectors";

//React-router
import { Link } from "react-router-dom";
const Footer = memo(() => {
  const footer = useSelector(SettingSelector.footer);
  return (
    <Fragment>
      <footer className={`footer ${footer}`}>
        <div className="footer-body">
          <div className="right-panel">
            <script>document.write(new Date().getFullYear())</script>
            Powered by <Link>Womeyn</Link>.
          </div>
        </div>
      </footer>
    </Fragment>
  );
});

Footer.displayName = "Footer";
export default Footer;
