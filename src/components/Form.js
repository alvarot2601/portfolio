import React, {useState, useRef, useEffect} from "react";
import emailjs from '@emailjs/browser';
import { send } from 'emailjs-com';

const Form = (props) => {
    const form = useRef(null);
    const name_input = useRef(null);
    const mail_input = useRef(null);
    const submit_input = useRef(null);
    const [toSend, setToSend] = useState({
        from_name: '',
        user_mail: '',
        to_name: 'Álvaro',
        message: ''
      });
    const [inputValue, setInputValue] = useState('Enviar');
    useEffect(()=>{
        if(inputValue==='Enviado'){
            submit_input.current.style.background="#3f826d";
            submit_input.current.disabled=true;
        }
    }, [inputValue]);
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

      /*const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_os2jvcn', 'template_q6ps3ho', form.current, '2R2QCBGBzuH1hvWpo')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };*/

      const sendEmail = async (e) => {
        e.preventDefault();
        let response = '';
        try{
            response = await send(
                'service_os2jvcn',
                'template_q6ps3ho',
                toSend,
                '2R2QCBGBzuH1hvWpo'
              )
        } catch (error){
            alert('Error! Por favor envíame un correo a mi dirección alvarot2601@gmail.com');
        }
        finally{
              if(response.status === 200){
                setToSend({
                    from_name: '',
                    user_mail: '',
                    to_name: 'Álvaro',
                    message: ''
                  });
                setInputValue('Enviado');
              }
        }
      };
      
      
    return (
        <section id="contact_me" ref={props.reference}>
            <form method="POST" ref={form} className="form" onSubmit={sendEmail}>
                <div className="form__name">
                    <label htmlFor="name">
                        Nombre
                    </label>
                    <input type="text" id="name" name="from_name" placeholder="Tu nombre" onChange={handleChange} value={toSend.from_name} required/>
                </div>
                <div className="form__mail">
                    <label htmlFor="mail">
                        Email
                    </label>
                    <input type="email" id="mail" name="user_mail" placeholder="Tu email" onChange={handleChange} value={toSend.user_mail} required/>
                </div>
                <div className="form__message">
                    <label htmlFor="message">
                        Mensaje
                    </label>
                    <textarea id="message" name="message" placeholder="Texto de ejemplo" onChange={handleChange} value={toSend.message}>
                        
                    </textarea>
                </div>
                <input type="submit" value={inputValue} className="submit-input" ref={submit_input}/>
            </form>  
        </section>
    );
}
export default  Form;