import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const messagesent = () =>
    toast.success('Message Sent!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  const messagenotsent = () =>
    toast.error('An error has occurred!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_njpxn0i',
        'template_qmbncnn',
        form.current,
        'hOz1trmFG1wJrYz8j',
      )
      .then(
        (result) => {
          console.log(result.text)
          {
            messagesent()
          }
        },
        (error) => {
          messagenotsent()
        },
      )
    e.target.reset()
  }
  return (
    <section id="contact">
      <div>
        <ToastContainer
          toastStyle={{ backgroundColor: '#006666', color: '#b2d8d8' }}
        />
      </div>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>miguel.acpereira26@gmail.com</h5>
            <a href="mailto:miguel.acpereira26@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <AiFillLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Miguel Pereira</h5>
            <a
              href="https://www.linkedin.com/in/miguel-pereira-5b4317196/"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className="contact__option-icon" />
            <h4>Whatsapp Number</h4>
            <h5>919748568</h5>
            <a
              href="https://api.whatsapp.com/send?phone=351919748568"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
