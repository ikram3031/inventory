import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav_container">
        <Link href='/'>
          <img src="/static/Logo.png" className="logo" alt="Logo" />
        </Link>
        <div className="nav_right">
          <div  className="nav_search">
            <img src="/static/search.svg" width="19px" height="19px"/>
            <input
              type="text"
              placeholder="Search..."
              className="nav_search_input"
            />
          </div>
          <div className="nav_logOut">
            <img src='/static/logout .png'/>
            Logout
          </div>
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
