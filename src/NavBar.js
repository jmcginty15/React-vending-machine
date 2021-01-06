import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>&nbsp;
            <NavLink to="/pikachu">Pikachu</NavLink>&nbsp;
            <NavLink to="/nicememe">A Nice Meme</NavLink>&nbsp;
            <NavLink to="/wednesday">Wednesday</NavLink>
        </div>
    )
}

export default NavBar;