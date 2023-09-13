import logo from '../assets/images/logo1.png'

const Header = () =>{
    return ( 
    <nav className='nav-bar'>
      <p><img className="logo" src={logo} alt="logo" height = "80" /></p>
    <ul>
    <li>
    <a href='/'> Home</a>
    </li>

    <li>
    <a href="/contact">Contact</a>
    </li>

    <li>
    <a href="/about">About us</a>
    </li>

    </ul>
    </nav>
    )
  }

export default Header