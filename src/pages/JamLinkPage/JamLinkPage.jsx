import { Button, Col, Container, Row } from "react-bootstrap"
import './JamLink.css'
import { LanguageContext } from '../../contexts/language.context'
import { useContext } from 'react'
import jamlinkmockapp from './../../assets/images/Group 22.png'
import jamlinkmockapp2 from './../../assets/images/Group 21.png'

const JamLink = () => {

    const { language, setLanguage } = useContext(LanguageContext)

    return (
        <>
            <Container>
                {language === "english" && (
                    <Row className="projectRow">
                        <Col className='ms-5' md={5}>
                            <h2 className="jamlinkTitle">JamLink</h2>
                            <p className="jamlinkSubTitle">Sept 2023 - Ironhack Madrid</p>
                            <p className="jamlinkText mt-5">Last project developed during the bootcamp. JamLink is a social network for musicians who want to meet other musicians for jamming and organizing jam sessions. In it, you can find a community of users where you can meet new people, see what instruments they play, and add them as friends. </p>
                            <img className='mt-5' style={{ width: '110%' }} src={jamlinkmockapp} alt="" />
                        </Col>
                        <Col className="ms-5 mt-5" md={6}>
                            <img className='mt-1 ms-5' style={{ width: '85%' }} src={jamlinkmockapp2} alt="" />
                            <p className="jamlinkText jamText mt-5 ms-5">You can also create events that other users can join, view all the events on a Google Map, and leave comments. I developed the application with my colleague Fernando, and we used HTML, CSS, JavaScript, React, Node.js, Express.js, Bootstrap, Google API, and axios. As next steps, we would like to implement a section where users can add videos of the jam sessions and even a chat to facilitate communication among the application's users.</p>
                            <div className="d-flex justify-content-center mt-5">
                                <button onClick={() => {
                                    window.open('https://github.com/nachosanson6/JamLink-client', '_blank');
                                    setTimeout(() => {
                                        window.open('https://github.com/nachosanson6/JamLink-server', '_blank');
                                    }, 1000);
                                }} style={{ background: 'linear-gradient(60deg, #0538FF 13.4%, #70E3F5 86.6%', borderRadius: "1.5625rem", fontWeight: 'bold' }} className='linkButton'>
                                    See more in GitHub
                                </button>
                            </div>
                        </Col>
                    </Row>
                )}
                {language === "spanish" && (
                    <Row className="projectRow">
                        <Col className='ms-5' md={5}>
                            <h2 className="jamlinkTitle">JamLink</h2>
                            <p className="jamlinkSubTitle">Sept 2023 - Ironhack Madrid</p>
                            <p className="jamlinkText mt-5">Último proyecto desarrollado durante el bootcamp. JamLink es una red social para músicos que desean conocer a otros músicos para tocar juntos y organizar jam sessions. En ella, puedes encontrar una comunidad de usuarios donde puedes conocer a nuevas personas, ver los instrumentos que tocan y agregarlos como amigos. </p>
                            <img className='mt-5' style={{ width: '110%' }} src={jamlinkmockapp} alt="" />
                        </Col>
                        <Col className="ms-5 mt-5" md={6}>
                            <img className='mt-1 ms-5' style={{ width: '85%' }} src={jamlinkmockapp2} alt="" />
                            <p className="jamlinkText jamText mt-5 ms-5">También puedes crear eventos a los que otros usuarios pueden unirse, ver todos los eventos en un mapa de Google y dejar comentarios. Desarrollé la aplicación con mi colega Fernando y utilizamos HTML, CSS, JavaScript, React, Node.js, Express.js, Bootstrap, Google API y axios. Como próximos pasos, nos gustaría implementar una sección donde los usuarios puedan agregar videos de las jam sessions y, incluso, un chat para facilitar la comunicación entre los usuarios de la aplicación.</p>
                            <div className="d-flex justify-content-center mt-5">
                                <button onClick={() => {
                                    window.open('https://github.com/nachosanson6/JamLink-client', '_blank');
                                    setTimeout(() => {
                                        window.open('https://github.com/nachosanson6/JamLink-server', '_blank');
                                    }, 1000);
                                }} style={{ background: 'linear-gradient(60deg, #0538FF 13.4%, #70E3F5 86.6%', borderRadius: "1.5625rem", fontWeight: 'bold' }} className='linkButton'>
                                    Ver más en GitHub
                                </button>
                            </div>
                        </Col>
                    </Row>
                )}
            </Container>
        </>
    )
}
export default JamLink