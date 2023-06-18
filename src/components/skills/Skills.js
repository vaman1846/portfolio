import './Skills.scss';
import reactimg from '../../pics/React.png';
import nodeimg from '../../pics/node.png';
import jsimg from '../../pics/js.png';
import htmlimg from '../../pics/html.png';
import cssimg from '../../pics/css.png';
import tailwindimg from '../../pics/tailwind.png';
import databaseimg from '../../pics/database.png';
import clogo from '../../pics/clogo.png';


const Skills = () => {
    return(
        <>
            <div className="skills" id='skills'>
                <h1>Skills</h1>
                <p>Hover over for current proficency</p>

                <div className="skill">
<div className='boxes'><img src={reactimg} alt='react' /></div>
<div className='boxes'><img src={nodeimg} alt='react' /></div>
<div className='boxes'><img src={htmlimg} alt='react' /></div>
<div className='boxes'><img src={clogo} alt='react' /></div>
<div className='boxes'><img src={cssimg} alt='react' /></div>
<div className='boxes'><img src={jsimg} alt='react' /></div>
<div className='boxes'><img src={tailwindimg} alt='react' /></div>
<div className='boxes'><img src={databaseimg} alt='react' /></div>
                </div>
            </div>
        </>
    )
}

export default Skills;