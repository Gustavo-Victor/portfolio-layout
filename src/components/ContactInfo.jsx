//import icons and style
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';
import '../styles/components/contactinfo.sass'; 

//component contact info
export default function ContactInfo () {
    return (
        <section id="information"> 
            <div className="info-card">
                <AiFillPhone id="phone-icon" />
                <div>
                    <h3>Phone</h3>
                    <p>(99)99999-9999</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id="email-icon" />
                <div>
                    <h3>Email</h3>
                    <p>gustavovbs270@gmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id="environment-icon" />
                <div>
                    <h3>Location</h3>
                    <p>Campo Limpo Paulista / SP</p>
                </div>
            </div>
        </section>
    );
};