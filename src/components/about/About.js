import './About.scss';
// import main from '../../pics/profile.png';
import main from '../../pics/sed.png.jpg'

const About = () => {
    return(
        <>
        <h1>About</h1>
        <div className="about" id='about'>
        
        <div className="left">
            <img src={main} alt="main" />
        </div>
        <div className="right">
            

            <p className="heading">Here is a little more about me</p>
            <p className="breif">I'm <span>Aman</span>, a dedicated MERN (MongoDB, Express.js, React.js, Node.js) Developer and passionate competitive programmer. With 9 months of experience, I possess a strong skill set in both backend and frontend development. I have expertise in building robust and scalable web applications using Node.js, Express.js, and MongoDB for the backend, and React.js for the frontend.

In addition to my proficiency in the MERN stack, I have extensive knowledge of databases, including MySQL and MongoDB. This enables me to design efficient data structures and optimize database operations to ensure smooth application performance.

With a comprehensive understanding of data structures and algorithms, I thrive in competitive programming challenges. I continuously sharpen my problem-solving skills and keep up with the latest programming techniques and algorithms.

I am a detail-oriented professional who pays attention to both functionality and user experience. I am well-versed in HTML, CSS, and JavaScript, enabling me to create visually appealing and responsive user interfaces.

Overall, I am a highly motivated and result-driven developer, committed to delivering high-quality code and innovative solutions. With my strong technical skills and a passion for continuous learning, I strive to contribute to the success of any project I work on..</p>

            </div>
            </div>
        </>
    )
}

export default About;