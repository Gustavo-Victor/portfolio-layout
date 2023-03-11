//import icons and style
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import '../styles/components/socialmedia.sass';

//vector of objects with information of social networks
const socialArr = [
    { name: 'linkedin', path: 'https://www.linkedin.com/in/gustavovictor/', icon: <FaLinkedinIn /> },
    { name: 'github', path: 'https://github.com/Gustavo-Victor', icon: <FaGithub /> },
    { name: 'instagram', path: 'https://www.instagram.com/gustav0_vbs/', icon: <FaInstagram /> },
]

// object that receives rendered result
const result = socialArr.map(socialMedia => (
    <a className='social-btn' id={socialMedia.name} key={socialMedia.name} href={socialMedia.path} target="_blank">
        {socialMedia.icon}
    </a>
))

//social media section component
const SocialMedia = () => {
    return (
        <section id="social-media">
            {result}
        </section>
    )
}

export default SocialMedia; 