//import components and style
import About from './About';
import Technologies from './Technologies';
import Projects from './Projects';
import '../styles/components/mainsection.sass';

//main section
const MainSection = () => {
    return (
        <main id="main">
            <About />
            <Technologies />
            <Projects />
        </main>
    )
}
export default MainSection; 