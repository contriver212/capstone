import logo from './Logo.svg'
import Nav from './Nav';


const Header = () =>{
    return (
        <header className='aa'>
            <img src={logo}></img>
            <Nav/>

        </header>
    )
}

export default  Header;