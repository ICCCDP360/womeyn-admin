import { memo, Fragment, useEffect, useState } from "react";
import { Button, Modal, Nav, Tab } from "react-bootstrap";
import Card from "../../../components/bootstrap/card";
import { useSelector } from "react-redux";
import * as SettingSelector from "../../../store/setting/selectors";
import { Table, Row, Col } from "react-bootstrap";
import UserCard from "../../components/user-card";

import Loader from "../../../components/Loader";

//Router-dom
import { Link } from "react-router-dom";

const PlacementList = memo((props) => {
  useSelector(SettingSelector.theme_color);

  return (
    <Fragment>
      <div className="d-flex flex-row justify-content-between">
        <h3>Placement List</h3>
        <Link
          className="nav-link "
          aria-current="page"
          to="/womeyn/add-placement"
        >
          <Button style={{ marginBottom: 10 }}>+ Add Placement</Button>
        </Link>
      </div>
    </Fragment>
  );
});

export default PlacementList;
