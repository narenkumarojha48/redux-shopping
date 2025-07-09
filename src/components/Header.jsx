import { NavLink } from "react-router-dom"
const Header = () => {
  return (
    <nav className="navcontainer">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/categories"}>Categories</NavLink>
        <NavLink to={"/about"}>About</NavLink>
    </nav>
  )
}

export default Header