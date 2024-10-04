


import {Routes, Route, Link} from 'react-router-dom'
import HomePage from './HomePage';
import About from './About';
import Menu from './Menu';


const Nav = () => {
    return (
        <>
        <nav className='nav'>
            <ul className='ul'>
                
                <Link to='/' >Home</Link>
                <Link to='/About' >About</Link>
                <Link to='/Menu' >Menu</Link>
                
                
            </ul>
        </nav>
        
        </>
        
    )
}

export default Nav;