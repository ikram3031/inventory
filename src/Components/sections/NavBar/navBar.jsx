import { Link } from "react-router-dom";
import Logo from '../../../assets/static/Logo.png';
import Search from '../../../assets/static/search.svg';
import LogOut from '../../../assets/static/logout .png';
import './navBar.scss';

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav_container">
        <Link href='/'>
          <img src={Logo} className="logo" alt="Logo" />
        </Link>
        <div className="nav_right">
          <div  className="nav_search">
            <img src={Search} width="19px" height="19px"/>
            <input
              type="text"
              placeholder="Search..."
              className="nav_search_input"
            />
          </div>
          <button className="nav_logOut">
            <img src={LogOut}/>
            Logout
          </button>
          <div className="nav_userInfo">
            <img src="/static/profile.png" alt="" />
            <div className="flex-col">
              <h4>Username</h4>
              <p>Admin</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
