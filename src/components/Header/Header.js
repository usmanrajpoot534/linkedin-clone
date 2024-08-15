// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import ChatIconsd from '@mui/icons-material/Chat';
// import HomeIcon from '@mui/icons-material/Home';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import SearchIcon from '@mui/icons-material/Search';
// import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { BusinessCenter, Chat, Home, Notifications, Search, SupervisorAccount } from '@mui/icons-material';
import HeaderOption from '../HeaderOption/HeaderOption';
import "./Header.css";

function Header() {
    return (
        <div className="header">

            <div className="header-left">
                <img src="https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png" alt=""></img>

                <div className="header-search">
                    <Search></Search>
                    <input type='text'></input>
                </div>
            </div>

            <div className="header-right">
                <HeaderOption title='Home' icon={Home} />
                <HeaderOption title='My Network' icon={SupervisorAccount} />
                <HeaderOption title='Jobs' icon={BusinessCenter} />
                <HeaderOption title='messages' icon={Chat} />
                <HeaderOption title='Notifications' icon={Notifications} />
            </div>
        </div>
    );
}

export default Header;