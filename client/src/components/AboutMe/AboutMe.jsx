import { Col, Container, Row } from 'react-bootstrap'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <>
            <div className="mt-5">
                <h2 className="mt-5 presentation aboutme" style={{ color: 'white', fontWeight: 'bold' }}>About Me</h2>
                <p className="text mt-5 ms-5 me-5" style={{ fontWeight: 'bold' }}>I am a full-stack web developer with a degree from the Ironhack Spain web developer bootcamp. I am characterized by my passion, the dedication I put into everything I set out to do, consistency, organization, and the desire to learn and improve every day. My goal is to be part of a team with the same passion that promotes good development practices, where I can contribute and learn from them every day. During my time in the industry, I have had the opportunity to work on both individual and group projects, which has allowed me to gain experience in both front-end and back-end development. I have developed teamwork skills as well as some leadership skills. My communication and teaching abilities also stand out due to my previous role as a primary school teacher.</p>
                <h2 className='text-center mt-5 aboutme' style={{ color: 'white', fontWeight: 'bold' }}>MY SKILLS</h2>
                <img style={{ width: '75%' }} src="src\assets\images\Arrow.png" alt="" />
                <div className="mt-5 d-flex">
                    <Row className='justify-content-center'>

                        <Col md={3}>
                            <img className='mt-5' src="src\assets\images\HTML ICON.png" alt="" />
                            <img className='mt-5' src="src\assets\images\REACT ICON.png" alt="" />
                            <img className='mt-5' src="src\assets\images\EXPRESS JS ICON.png" alt="" />
                        </Col>
                        <Col md={3}>
                            <img className='mt-5' src="src\assets\images\CSS ICON.png" alt="" />
                            <img className='mt-5' src="src\assets\images\NODE JS ICON.png" alt="" />
                            <img className='mt-5' src="src\assets\images\BOOSTRAP ICON.png" alt="" />
                        </Col>
                        <Col md={3}>
                            <img className='mt-5' src="src\assets\images\JAVASCRIPT ICON.png" alt="" />
                            <img className='mt-5' src="src\assets\images\MONGO DB ICON.png" alt="" />
                            <img className='mt-5' src="src\assets\images\POSTMAN ICON.png" alt="" />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default AboutMe