import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Col, Row } from 'react-bootstrap';
import './ContactForm.css'
import { LanguageContext } from '../../contexts/language.context'
import { useContext } from 'react'

const ContactForm = () => {

    const { language, setLanguage } = useContext(LanguageContext)


    const [state, handleSubmit] = useForm("xdorydbr");
    if (state.succeeded) {

        return (
            <div className='d-flex '>
                <p className='thanks' style={{ textAlign: 'center' }}>Thanks for joining!</p>;
            </div>
        )
    }
    return (
        <>
            {language === "english" && (
                <div>
                    <div className='mt-5'
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '80vh', // Asegura que ocupe el 100% de la altura de la ventana
                        }}
                    >
                        <h2 className='mt-5 contact title' style={{ color: 'white', textAlign: 'center' }}>Contact Me</h2>
                        <form onSubmit={handleSubmit}>
                            <Row >
                                <Col md={6} >
                                    <label className='mt-1' style={{ color: 'white', fontWeight: 'bold' }}>Full name*</label>
                                    <input style={{ width: '200%', height: '15%' }}
                                        placeholder='Enter your full name...'
                                        id="name"
                                        type="name"
                                        name="name"
                                    />
                                    <label className='mt-5' style={{ color: 'white', fontWeight: 'bold' }}>Email*</label>
                                    <input style={{ width: '200%', height: '15%' }}
                                        placeholder='Enter your email...'
                                        id="email"
                                        type="email"
                                        name="email"
                                    />
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                    />
                                    <label className='mt-5' style={{ color: 'white', fontWeight: 'bold' }}>Message*</label>
                                    <textarea style={{ width: '200%', height: '30%' }}
                                        placeholder='Enter your message...'
                                        id="message"
                                        name="message"
                                    />
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                    />
                                    <br />
                                    <button style={{ background: 'linear-gradient(60deg, #0538FF 13.4%, #70E3F5 86.6%', borderRadius: "1.5625rem", fontWeight: 'bold' }} className='mt-5 formButton' type="submit" disabled={state.submitting}>
                                        Submit
                                    </button>
                                </Col>

                            </Row>
                        </form>
                    </div>
                </div>
            )}
            {language === "spanish" && (
                <div>
                    <div className='mt-5'
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '80vh', // Asegura que ocupe el 100% de la altura de la ventana
                        }}
                    >
                        <h2 className='mt-5 contact title' style={{ color: 'white', textAlign: 'center' }}>Contacta conmigo</h2>
                        <form onSubmit={handleSubmit}>
                            <Row >
                                <Col md={6} >
                                    <label className='mt-1' style={{ color: 'white', fontWeight: 'bold' }}>Nombre completo*</label>
                                    <input style={{ width: '200%', height: '15%' }}
                                        placeholder='Introduce tu nombre completo...'
                                        id="name"
                                        type="name"
                                        name="name"
                                    />
                                    <label className='mt-5' style={{ color: 'white', fontWeight: 'bold' }}>Email*</label>
                                    <input style={{ width: '200%', height: '15%' }}
                                        placeholder='Introduce tu email...'
                                        id="email"
                                        type="email"
                                        name="email"
                                    />
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                    />
                                    <label className='mt-5' style={{ color: 'white', fontWeight: 'bold' }}>Mensaje*</label>
                                    <textarea style={{ width: '200%', height: '30%' }}
                                        placeholder='Introduce tu mensaje...'
                                        id="message"
                                        name="message"
                                    />
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                    />
                                    <br />
                                    <button style={{ background: 'linear-gradient(60deg, #0538FF 13.4%, #70E3F5 86.6%', borderRadius: "1.5625rem", fontWeight: 'bold' }} className='mt-5 formButton' type="submit" disabled={state.submitting}>
                                        Enviar
                                    </button>
                                </Col>

                            </Row>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
export default ContactForm