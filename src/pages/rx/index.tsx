import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { itemStyle, linkStyle, listStyle } from "../../Navigation";
import Increment from "./increment";
import Interval from "./Interval";
import Keydown from "./keydown";
import Map from "./map";
import Merge from "./merge";
import Multiple from "./multiple";
import Stack from "./stack";
import ThreeTimes from "./threeTimes";

const Reactive = () => {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <ul className={listStyle}>
        <li className={itemStyle}>
          <Link to={`${url}/increment`} style={linkStyle}>
            Increment
          </Link>
        </li>
        <li className={itemStyle}>
          <Link to={`${url}/map`} style={linkStyle}>
            Map
          </Link>
        </li>
        <li className={itemStyle}>
          <Link to={`${url}/stack`} style={linkStyle}>
            Stack
          </Link>
        </li>
        <li className={itemStyle}>
          <Link to={`${url}/threeTimes`} style={linkStyle}>
            ThreeTimes
          </Link>
        </li>
        <li className={itemStyle}>
          <Link to={`${url}/keydown`} style={linkStyle}>
            Keydown
          </Link>
        </li>
        <li className={itemStyle}>
          <Link to={`${url}/intervals`} style={linkStyle}>
            Intervals
          </Link>
        </li>
        <li className={itemStyle}>
          <Link to={`${url}/merge`} style={linkStyle}>
            Merge
          </Link>
        </li>
        <li className={itemStyle}>
          <Link to={`${url}/multiple`} style={linkStyle}>
            Multiple
          </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>please select.</h3>
        </Route>
        <Route path={`${path}/increment`}>
          <Increment />
        </Route>
        <Route path={`${path}/map`}>
          <Map />
        </Route>
        <Route path={`${path}/stack`}>
          <Stack />
        </Route>
        <Route path={`${path}/threeTimes`}>
          <ThreeTimes />
        </Route>
        <Route path={`${path}/keydown`}>
          <Keydown />
        </Route>
        <Route path={`${path}/merge`}>
          <Merge />
        </Route>
        <Route path={`${path}/intervals`}>
          <Interval />
        </Route>
        <Route path={`${path}/multiple`}>
          <Multiple />
        </Route>
      </Switch>
    </div>
  );
};
export default Reactive;
