import './Contact.scss';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () =>{

 
    return(
        <>
            <section class="section section-contact">
      <div class="container">
        <h2 class="common-heading">Contact Us</h2>
      </div>

      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div class="section-contact-main contact-container">
      <div className='icon'>
      <div className='icons'><CallIcon style={{fontSize:"xx-large", margin:"1rem"}}/>
      <p>+91 8982437176</p>
      </div>
      
      <div className='icons'><EmailIcon style={{fontSize:"xx-large", margin:"1rem"}}/>
      <p>vaman1846@gmail.com</p>
      </div>
      
      <div className='icons'><LocationOnIcon style={{fontSize:"xx-large", margin:"1rem"}}/>
      <p>Lauwa Laxmanpur Rewa (Madhya Pradesh)</p>
      </div>
      
      </div>
        <form action="https://formspree.io/f/xoqzvgjr"
      method="POST">
          <div className='nameemail'>
          <div>
         
            <input type='text' placeholder='name' />
          </div>
          <div>
          
            <input type='text' placeholder='@gamil.com' />
          </div>
          </div>
          <div className='subject'>
          
            <input type='text' placeholder='Subject' />
          </div>
          <div className='massage'>
          
            <input type='text' placeholder='Hii, I want to say that...' />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </section>
        </>
    )
}

export default Contact;