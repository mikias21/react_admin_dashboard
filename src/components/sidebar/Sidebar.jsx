import {Link} from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

// scss
import "./sidebar.scss";

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Sidebar = () => {

    const{dispatch} = useContext(DarkModeContext)

    return(
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span className="logo">Zardoz Admin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{textDecoration: "none"}}>
                        <li>
                            <DashboardIcon className="icon"/>
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{textDecoration: "none"}}>
                        <li>
                            <PersonOutlineOutlinedIcon className="icon"/>
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/product" style={{textDecoration: "none"}}>
                        <li>
                            <StorefrontOutlinedIcon className="icon"/>
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <CreditCardOutlinedIcon className="icon"/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon"/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <QueryStatsIcon className="icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon"/>
                        <span>Notification</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <PsychologyOutlinedIcon className="icon"/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppOutlinedIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({type: "LIGHT"})}></div>
                <div className="colorOption" onClick={() => dispatch({type: "DARK"})}></div>
            </div>
        </div>
    );
}

export default Sidebar;