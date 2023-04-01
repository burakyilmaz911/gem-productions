import logo from "./pics/Micro3.jpeg"

const Navbar = () => {

  const eventListener = () => {
      const navbarLinks = document.getElementsByClassName('navbar-links')[0]
      navbarLinks.classList.toggle('active')
  }

  return ( 
      <nav className="navbar">
          <img src={logo} alt="" className="navbar-logo" />
          <a href="#" className="toggle-button" onClick={eventListener}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
          </a>
          <div className="navbar-links">
              <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#" className="book-now">Book Now</a></li>
              </ul>
          </div>
      </nav>
   );
}

export default Navbar;