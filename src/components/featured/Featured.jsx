import {CircularProgressbar} from "react-circular-progressbar";

// scss
import "./featured.scss";
import "react-circular-progressbar/dist/styles.css"

// icons 
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Featured = () => {
    return(
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenu</h1>
                <MoreVertIcon fontsize="small"/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text="70%" strokeWidth={5}/>
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">$420</p>
                <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium atque delectus pariatur et aliquam?</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownOutlinedIcon fontsize='small'/>
                            <div className="resultAmount">$12.4</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpIcon fontsize='small'/>
                            <div className="resultAmount">$12.4</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpIcon fontsize='small'/>
                            <div className="resultAmount">$12.4</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;