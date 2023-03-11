//import components and style
import SocialMedia from './SocialMedia';
import ContactInfo from './ContactInfo';
import Avatar from '../images/photo.jpeg';
import '../styles/components/sidebar.sass';

//sidebar
const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} title='Gustavo Victor' alt='Gustavo Victor' className='avatar' />
            <p className="occupation">Developer</p>
            <SocialMedia />
            <ContactInfo />
            <a href='#' className="btn">Download</a>
        </aside>
    )
}

export default Sidebar; 