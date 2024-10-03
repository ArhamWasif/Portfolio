import React from 'react'
import './Contact.scss'
const Contact = () => {
  return (
    <div className='contact'>
        <div className='row1'>
            <div className='title1'><h1>Let's Work Together</h1></div>
            <div className='mail'>
            <div className='heading'>Mail</div>
            <div className='text'>arhamwasif.92@gmail.com</div>
            </div>
            <div className='address'>
            <div className='heading'>Address</div>
            <div className='text'>Multan,Pakistan</div>
            </div>
            <div className='phone'>
            <div className='heading'>Phone</div>
            <div className='text'>+(92)3060064797</div>
            </div>

        </div>
        <div className='row2'>
          <form>
            <input placeholder='Name'className='name1' />
            <br/>
            <input placeholder='Email' className='email'/>  <br/>
            <textarea placeholder='Write a message here' className='textarea'/>  <br/>

            <button className='btn9'>Submit</button>
            </form>
        </div>





    </div>
  )
}

export default Contact