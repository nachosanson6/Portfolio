import { Col, Container, Row } from 'react-bootstrap'
import './AboutMe.css'
import { LanguageContext } from '../../contexts/language.context'
import { useContext } from 'react'


const AboutMe = () => {

    const { language, setLanguage } = useContext(LanguageContext)


    return (
        <>
            {language === "english" && (

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
            )}
            {language === "spanish" && (

                <div className="mt-5">
                    <h2 className="mt-5 presentation aboutme" style={{ color: 'white', fontWeight: 'bold' }}>Sobre Mi</h2>
                    <p className="text mt-5 ms-5 me-5" style={{ fontWeight: 'bold' }}>Soy un desarrollador web full-stack con un título del bootcamp de desarrollo web de Ironhack España. Me caracterizo por mi pasión, la dedicación que pongo en todo lo que me propongo, la consistencia, la organización y el deseo de aprender y mejorar cada día. Mi objetivo es ser parte de un equipo con la misma pasión que promueva buenas prácticas de desarrollo, donde pueda contribuir y aprender de ellos cada día. Durante mi tiempo en la industria, he tenido la oportunidad de trabajar en proyectos individuales y en grupo, lo que me ha permitido adquirir experiencia tanto en el desarrollo front-end como en el back-end. También he desarrollado habilidades de trabajo en equipo y algunas habilidades de liderazgo. Mis habilidades de comunicación y enseñanza también destacan debido a mi anterior puesto como maestro de educación primaria.</p>
                    <h2 className='text-center mt-5 aboutme' style={{ color: 'white', fontWeight: 'bold' }}>Habilidades</h2>
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
            )}
        </>
    )
}
export default AboutMe