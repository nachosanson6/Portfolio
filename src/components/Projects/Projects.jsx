import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import './Projects.css'
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/language.context'
import floorIsLavaCard from './../../assets/images/CARD FLOOR IS LAVA.png'
import boardMasterCard from './../../assets/images/CARD BOARMASTER.png'
import jamLinkCard from './../../assets/images/CARD JAMLINK.png'

const Projects = () => {

    const { language, setLanguage } = useContext(LanguageContext)


    return (
        <>
            {language === "english" && (
                <div>
                    <div className=' projects mt-5 d-flex flex-column align-items-center'>
                        <h1 className="mt-5 project-title" style={{ color: 'white', fontWeight: 'bold' }}>PROJECTS</h1>
                    </div>
                    <div className="ms-5 mt-5">
                        <Row>
                            <Col md={6}>
                                <img className="mt-5" src={floorIsLavaCard} alt="" />
                            </Col>
                            <Col md={3} className="mt-5" style={{ color: 'white', fontFamily: 'Epilogue' }}>
                                <h2 className="mt-5" style={{ fontSize: '4 rem', fontWeight: 'bold' }}>Floor is lava</h2>
                                <p style={{ fontSize: '2.5 rem' }}>Jul 2023</p>
                                <Link to={'/floor-is-lava'} style={{ color: 'white' }}>See more</Link>
                            </Col >
                        </Row >
                    </div>
                    <div className="ms-5 mt-5">
                        <Row>
                            <Col md={3}>
                            </Col>
                            <Col md={3} className="mt-5" style={{ color: 'white', fontFamily: 'Epilogue' }}>
                                <h2 className="mt-5" style={{ fontSize: '4 rem', fontWeight: 'bold' }}>BoardMaster</h2>
                                <p style={{ fontSize: '2.5 rem' }}>Aug 2023</p>
                                <Link to={'/boardmaster'} style={{ color: 'white' }}>See more</Link>
                            </Col >
                            <Col className="mt-5" md={6}>
                                <img className="mt-5" src={boardMasterCard} alt="" />
                            </Col>
                        </Row >
                    </div>
                    <div className="ms-5 mt-5">
                        <Row>
                            <Col className="mt-5" md={6}>
                                <img className="mt-5" src={jamLinkCard} alt="" />
                            </Col>
                            <Col md={3} className="mt-5" style={{ color: 'white', fontFamily: 'Epilogue' }}>
                                <h2 className="mt-5" style={{ fontSize: '4 rem', fontWeight: 'bold' }}>JamLink</h2>
                                <p style={{ fontSize: '2.5 rem' }}>Sep 2023</p>
                                <Link to={'/jamlink'} style={{ color: 'white' }}>See more</Link>
                            </Col >
                        </Row >
                    </div>
                </div>
            )}
            {language === "spanish" && (
                <div>
                    <div className=' projects mt-5 d-flex flex-column align-items-center'>
                        <h1 className="mt-5 project-title" style={{ color: 'white', fontWeight: 'bold' }}>PROYECTOS</h1>
                    </div>
                    <div className="ms-5 mt-5">
                        <Row>
                            <Col md={6}>
                                <img className="mt-5" src={floorIsLavaCard} alt="" />
                            </Col>
                            <Col md={3} className="mt-5" style={{ color: 'white', fontFamily: 'Epilogue' }}>
                                <h2 className="mt-5" style={{ fontSize: '4 rem', fontWeight: 'bold' }}>Floor is lava</h2>
                                <p style={{ fontSize: '2.5 rem' }}>Jul 2023</p>
                                <Link to={'/floor-is-lava'} style={{ color: 'white' }}>Ver más</Link>
                            </Col >
                        </Row >
                    </div>
                    <div className="ms-5 mt-5">
                        <Row>
                            <Col md={3}>
                            </Col>
                            <Col md={3} className="mt-5" style={{ color: 'white', fontFamily: 'Epilogue' }}>
                                <h2 className="mt-5" style={{ fontSize: '4 rem', fontWeight: 'bold' }}>BoardMaster</h2>
                                <p style={{ fontSize: '2.5 rem' }}>Ago 2023</p>
                                <Link to={'/boardmaster'} style={{ color: 'white' }}>Ver más</Link>
                            </Col >
                            <Col className="mt-5" md={6}>
                                <img className="mt-5" src={boardMasterCard} alt="" />
                            </Col>
                        </Row >
                    </div>
                    <div className="ms-5 mt-5">
                        <Row>
                            <Col className="mt-5" md={6}>
                                <img className="mt-5" src={jamLinkCard} alt="" />
                            </Col>
                            <Col md={3} className="mt-5" style={{ color: 'white', fontFamily: 'Epilogue' }}>
                                <h2 className="mt-5" style={{ fontSize: '4 rem', fontWeight: 'bold' }}>JamLink</h2>
                                <p style={{ fontSize: '2.5 rem' }}>Sept 2023</p>
                                <Link to={'/jamlink'} style={{ color: 'white' }}>Ver más</Link>
                            </Col >
                        </Row >
                    </div>
                </div>
            )}
        </>
    )
}
export default Projects