//import svg icons and style
import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
} from 'react-icons/di';
import { SiTypescript } from 'react-icons/si'
import '../styles/components/technologies.sass';

//array with objects containing information about development languages and techs
const technologiesArr = [
    { id: 'html', name: 'HTML5', icon: <DiHtml5 /> },
    { id: 'css', name: 'CSS3', icon: <DiCss3 /> },
    { id: 'js', name: 'JavaScript', icon: <DiJsBadge /> },
    { id: 'nodejs', name: 'Node.js', icon: <DiNodejsSmall /> },
    { id: 'mysql', name: 'MySQL', icon: <DiMysql /> },
    { id: 'react', name: 'ReactJS', icon: <DiReact /> },
]

//rendered result
const result = technologiesArr.map((tech) => (
    <div key={tech.id} id={tech.id} className='tech-card'>
        {tech.icon}
        <div className='tech-info'>
            <h3>{tech.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
))

//technologies section component
const Technologies = () => {
    return (
        <section id="technologies">
            <h2>Tecnologies</h2>
            <div className='tech-grid'>
                {result}
            </div>
        </section>
    )
}


export default Technologies; 