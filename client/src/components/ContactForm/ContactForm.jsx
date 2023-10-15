import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Col, Row } from 'react-bootstrap';
import './ContactForm.css'

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xdorydbr");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <>
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
                            <label className='mt-1' style={{ color: 'white' }}>Full name*</label>
                            <input style={{ width: '200%', height: '15%' }}
                                placeholder='Enter your full name...'
                                id="name"
                                type="name"
                                name="name"
                            />
                            <label className='mt-5' style={{ color: 'white' }}>Email*</label>
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
                            <label className='mt-5' style={{ color: 'white' }}>Message*</label>
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
        </>
    );
}
export default ContactForm