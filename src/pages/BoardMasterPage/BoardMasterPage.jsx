import { Col, Container, Row, Button } from "react-bootstrap"
import { LanguageContext } from '../../contexts/language.context'
import { useContext } from 'react'
import MOKCUPSBOARDMASTER1 from './../../assets/images/2MOKCUPS BOARDMASTER 1.png'
import MOCKUPHOMEBOARDMASTER from './../../assets/images/MOCKUP HOME BOARDMASTER 1.png'

const BoardMaster = () => {

    const { language, setLanguage } = useContext(LanguageContext)

    return (
        <>
            <Container>
                {language === "english" && (
                    <Row className="projectRow">
                        <Col className='ms-5' md={5}>
                            <h2 className="projectTitle">BoardMaster</h2>
                            <p className="projectSubTitle">Aug 2023 - Ironhack Madrid</p>
                            <p className="projectText mt-5">Project I developed during the second module of the bootcamp. It is an application for creating events to play board games. Additionally, when creating an event, you can view the event's location and all previously created events on a map from the Google Maps API. </p>
                            <img className='mt-5' style={{ width: '85%' }} src={MOKCUPSBOARDMASTER1} alt="" />
                        </Col>
                        <Col className="ms-5" md={5}>
                            <img className='mt-4' style={{ width: '85%' }} src={MOCKUPHOMEBOARDMASTER} alt="" />
                            <p className="projectText mt-5">You also have access to a gallery of all the board games we fetch from an external API. I developed this application with my colleague Isabella, and we used HTML, CSS, JavaScript, Node.js, Express.js, Bootstrap, external APIs, and Axios.</p>
                            <div className="d-flex justify-content-center mt-5"> {/* Agrega estas clases */}
                                <a href="https://github.com/nachosanson6/board-master" target="_blank" rel="noopener noreferrer">
                                    <button style={{ background: 'linear-gradient(60deg, #0538FF 13.4%, #70E3F5 86.6%', borderRadius: "1.5625rem", fontWeight: 'bold' }} className='linkButton'>
                                        See more in GitHub
                                    </button>
                                </a>
                                <a href="https://boardmaster.fly.dev/" target="_blank" rel="noopener noreferrer">
                                    <button style={{ background: 'linear-gradient(60deg, #0538FF 13.4%, #70E3F5 86.6%', borderRadius: "1.5625rem", fontWeight: 'bold' }} className='linkButton ms-5'>
                                        Go to the web
                                    </button>
                                </a>
                            </div>
                        </Col>
                    </Row>
                )}
                {language === "spanish" && (
                    <Row className="projectRow">
                        <Col className='ms-5' md={5}>
                            <h2 className="projectTitle">BoardMaster</h2>
                            <p className="projectSubTitle">Aug 2023 - Ironhack Madrid</p>
                            <p className="projectText mt-5">Proyecto que desarrollé durante el segundo módulo del bootcamp. Es una aplicación para crear eventos para jugar juegos de mesa. Además, al crear un evento, puedes ver la ubicación del evento y todos los eventos previamente creados en un mapa a través de la API de Google Maps. </p>
                            <img className='mt-5' style={{ width: '85%' }} src={MOKCUPSBOARDMASTER1} alt="" />
                        </Col>
                        <Col className="ms-5" md={5}>
                            <img className='mt-5' style={{ width: '85%' }} src={MOCKUPHOMEBOARDMASTER} alt="" />
                            <p className="projectText mt-5">También tienes acceso a una galería de todos los juegos de mesa que obtenemos de una API externa. Desarrollé esta aplicación junto a mi colega Isabella y utilizamos HTML, CSS, JavaScript, Node.js, Express.js, Bootstrap, APIs externas y Axios.</p>
                            <div className="d-flex justify-content-center mt-5"> {/* Agrega estas clases */}
                                <a href="https://github.com/nachosanson6/board-master" target="_blank" rel="noopener noreferrer">
                                    <button style={{ background: 'linear-gradient(60deg, #0538FF 13.4%, #70E3F5 86.6%', borderRadius: "1.5625rem", fontWeight: 'bold' }} className='linkButton'>
                                        Ver más en GitHub
                                    </button>
                                </a>
                                <a href="https://boardmaster.fly.dev/" target="_blank" rel="noopener noreferrer">
                                    <button style={{ background: 'linear-gradient(60deg, #0538FF 13.4%, #70E3F5 86.6%', borderRadius: "1.5625rem", fontWeight: 'bold' }} className='linkButton ms-5'>
                                        Ir a la web
                                    </button>
                                </a>
                            </div>
                        </Col>
                    </Row>
                )}
            </Container>
        </>
    )
}
export default BoardMaster