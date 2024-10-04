import i from './restauranfood.jpg'

const Footer = () => {
    return (
        <footer>
            
            <nav className="aas">
            <img  className="ax" src={i}/>
                <ul className="a">
                    <h1>Doormat Navigation</h1>
                    <li>home</li>
                    <li>about</li>
                    <li>menu</li>
                    <li>reservations</li>
                    <li>order online</li>
                    <li>login</li>
                </ul>
                <ul className="b">
                    <h1>Contact </h1>
                    <li>address</li>
                    <li>phone number</li>
                    <li>email</li>
                   
                </ul>
                <ul className="c">
                    <h1>social media links </h1>
                    <li>address</li>
                    <li>phone number</li>
                    <li>email</li>
                </ul>
           </nav>
        </footer>
    )
}

export default Footer;