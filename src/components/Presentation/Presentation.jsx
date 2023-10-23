import { Col, Container, Row } from 'react-bootstrap'
import './Presentation.css'
import { LanguageContext } from '../../contexts/language.context'
import { useContext } from 'react'
import PROFILEPHOTO from './../../assets/images/PROFILE PHOTO.png'
import arrowDown from './../../assets/images/ARROW DOWN DIRECTION.png'
import my_cv from './../../assets/archivos/my_cv.pdf'
import mi_cv from './../../assets/archivos/mi_cv.pdf'


const Presentation = () => {

    const { language, setLanguage } = useContext(LanguageContext)


    return (
        <>
            {language === "english" && (
                <div className='presentationPage'>
                    <Row className='mt-5'>
                        <Col md={6} className='mt-5'>
                            <div className='ms-5 mt-5 d-flex flex-column align-items-center'>
                                <h2 className='presentation mt-5' style={{ fontWeight: 'bold' }}>Hi, I´m Nacho</h2>
                                <h3 style={{ color: 'white' }}>Full-Stack Web Developer</h3>
                                <h5 className='mt-5 text-center' style={{ color: 'white' }}>I'm a Full-Stack Web Developer from Madrid</h5>
                                <a href={my_cv} download="my_cv.pdf">
                                    <button className='mt-3 ' style={{ boxShadow: '1px 0px 21px 0px #3D73EB', fontWeight: 'bold', fontSize: '1.5rem', background: 'linear-gradient(60deg, #0538FF 13.4%, #70E3F5 86.6%', borderRadius: "1.5625rem" }}>
                                        Download CV
                                    </button>
                                </a>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={PROFILEPHOTO} alt="" />
                            </div>
                        </Col>
                    </Row>
                    <div className='d-flex flex-column align-items-center'>
                        <img className='mt-5' src={arrowDown} alt="" />
                    </div>
                </div>
            )}
            {language === "spanish" && (
                <div className='presentationPage'>
                    <Row className='mt-5'>
                        <Col md={6} className='mt-5'>
                            <div className='ms-5 mt-5 d-flex flex-column align-items-center'>
                                <h2 className='presentation mt-5' style={{ fontWeight: 'bold' }}>Hola, soy Nacho</h2>
                                <h3 style={{ color: 'white' }}>Desarrollador web Full-Stack</h3>
                                <h5 className='mt-5 text-center' style={{ color: 'white' }}>Soy un desarrollador web Full-Stack de Madrid</h5>
                                <a href={mi_cv} download="mi_cv.pdf">
                                    <button className='mt-3 ' style={{ boxShadow: '1px 0px 21px 0px #3D73EB', fontWeight: 'bold', fontSize: '1.5rem', background: 'linear-gradient(60deg, #0538FF 13.4%, #70E3F5 86.6%', borderRadius: "1.5625rem" }}>
                                        Descargar CV
                                    </button>
                                </a>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={PROFILEPHOTO} alt="" />
                            </div>
                        </Col>
                    </Row>
                    <div className='d-flex flex-column align-items-center'>
                        <img className='mt-5' src={arrowDown} alt="" />
                    </div>
                </div>
            )}
        </>
    )
}
export default Presentation