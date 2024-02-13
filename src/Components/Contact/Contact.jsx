import React from 'react'
import './Contact.css'
export const Contact = () => {
  return (
    <div className='newsletter'>
        <h1>Contact us for any query</h1>
        <div className='container'>
        <div className='contact-form'>
          <form action='https://formspree.io/f/mzblqgqz' method='POST' className='contact-inputs'>
          <input type='text' placeholder='USERNAME' name='username' required autoComplete='off' />
          <input
              type="email"
              name="Email"
              placeholder="EMAIL"
              autoComplete="off"
              required  
            />
          <textarea name='Message' cols='30' row='10' required autoComplete='off' placeholder='ENTER YOUR MESSAGE'></textarea>
          <input type='submit' value='SEND'></input>
          </form>

        </div>
            
        </div>
    </div>
  )
}

export default Contact
