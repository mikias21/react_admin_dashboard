import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

// scss
import "./navbar.scss";

// Icons
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = () => {

    const{dispatch} = useContext(DarkModeContext);
    const{darkMode} = useContext(DarkModeContext);

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="search"/>
                    <SearchOutlinedIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon"/>
                        English 
                    </div>
                    <div className="item">
                        {
                            darkMode ? <DarkModeOutlinedIcon className="icon" onClick={() => dispatch({type: "TOGGLE"})}/> :
                            <DarkModeIcon className="icon" onClick={() => dispatch({type: "TOGGLE"})}/>
                        }
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon"/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon"/>
                        <div className="counter">3</div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <img src="https://media.licdn.cn/dms/image/C5603AQFi72nnJLHYYA/profile-displayphoto-shrink_800_800/0/1590515574867?e=1661990400&v=beta&t=_mAHvNEj4O9Ga466-Q-N63qptKhKew8f4ipXb88UNcU" alt="IMG" className="avatar"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;