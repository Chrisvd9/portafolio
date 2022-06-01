import React,{ useRef }  from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_v4tdutj', 'template_ico0aor', form.current, '9rjKcYxXzBcAl0S-J')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };


    return (
        <section id='contact'>
            <h5>Hablemos</h5>
            <h2>Contáctame</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact_option'>
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>christianvd99@gmail.com</h5>
                        <a href="mailto:christianvd99@gmail.com" target="_blank">Envíame un mensaje</a>
                    </article>

                    <article className='contact_option'>
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <a href='https://api.WhatsApp.com/send?phone=56936603892' target="_blank">Envíame un mensaje</a>
                    </article>
                </div>
                
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Tu nombre completo' required />
                    <input type="email" name='email' placeholder='Tu email' required />
                    <textarea name="message" rows="7" placeholder='Mensaje' required></textarea>
                    <button type='submit' className='btn btn-primary'>Enviar mensaje</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
