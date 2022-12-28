import React from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SurroundSoundOutlinedIcon from "@mui/icons-material/SurroundSoundOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import { Link } from "react-router-dom";



const Sidebar = () => {
  return (
    <div className="sidebar">
     
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">lamadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/products" style={{textDecoration:"none"}}>
          <li>
            <Inventory2OutlinedIcon className="icon" />
            <span>Products</span>
          </li>
          </Link>
          

          <li>
            <ListAltOutlinedIcon className="icon" />
            <span>Order</span>
          </li>

          <li>
            <AirportShuttleOutlinedIcon className="icon" />
            <span>Delivery</span>
          </li>

          <p className="title">USEFUL</p>

          <li>
            <AssessmentIcon className="icon" />
            <span>Stats</span>
          </li>

          <li>
            <NotificationsActiveOutlinedIcon className="icon" />
            <span>Notifications</span>
          </li>

          <p className="title">SERVICE</p>
          <li>
            <SurroundSoundOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsOutlinedIcon className="icon" />
            <span>Settiings</span>
          </li>

          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>

          <li>
            <ExitToAppOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
