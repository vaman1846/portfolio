import './Navbar.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Navbar = () => {
    return(
        <>
            <header className="navbar">
                <div className="left">
                 <a href='https://www.instagram.com/iiemaman/'><InstagramIcon style={{fontSize:"xx-large", color:"gray"}}/></a>
                 <a href='https://github.com/vaman1846'><GitHubIcon style={{fontSize:"xx-large",  color:"gray"}}/></a>
                 <a href='https://www.linkedin.com/in/aman-vishwakarma-223499240/'><LinkedInIcon style={{fontSize:"xx-large",  color:"gray"}}/></a>
                </div>
                <div className="right">
                <a href='mailto:vaman1846@gmail.com'> <EmailIcon style={{fontSize:"xx-large",  color:"gray"}}/></a>
                </div>
            </header>
        </>
    )
}

export default Navbar;