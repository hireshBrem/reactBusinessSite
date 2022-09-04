import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import {sendMail} from './helper/Mail'

const Contact = () => {
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [file, setFile] = useState(null)
  const [message, setMessage] = useState("")

  async function postName(e) {
    e.preventDefault()

    try{
      await axios.post("http://localhost:3001/post_contact", {
        firstname,
        lastname,
        email,
        file,
        message
      })
      //reset function
    }catch(error){
      console.log(error)
    }
  }


  useEffect(() => {
    document.title = "Ansel Jobs | Contact Us";
  })
  
  return (
    <>
      <section className='m-2'>
        <div className="bg-blue-800 w-[90%] m-auto flex flex-wrap flex-col font-poppins text-white shadow-2xl rounded">
          <form method='POST' onSubmit={(e) => postName(e)} className='sm:max-w-xl max-w-xs m-auto text-[20px] mb-10'>
            <h1 className='ml-5 mt-8 text-[40px] mb-10'>Contact Form</h1>
            <input id="fName" required className="bg-transparent m-3 p-3 border-b-2 sm:w-[96%] w-[92%]" type="text" placeholder="Your First Name" onChange={(e)=> setFirstName(e.target.value)} />
            <input id="lName" required className="bg-transparent m-3 p-3 border-b-2 sm:w-[96%] w-[92%]" type="text" placeholder="Your Last Name" onChange={(e)=> setLastName(e.target.value)} />
            <input id="email" required className="bg-transparent m-3 p-3 border-b-2 sm:w-[96%] w-[92%]" type="text" placeholder="Your Email" onChange={(e)=> setEmail(e.target.value)} />
            <input id="file" className="sm:w-[96%] w-[92%] m-3 align-bottom text-gray-900 bg-gray-50  rounded-lg border border-gray-300 cursor-pointer focus:outline-none" type="file" onChange={(e)=> setFile(e.target.value)} />
            <label className=" ml-3 mb-4 font-poppins text-white italic" htmlFor="file_input">Upload Your CV</label>
            <textarea id="message" required className="bg-transparent border-2 rounded m-3 sm:w-[96%] w-[92%] h-40 p-3 mt-6" placeholder="Your Message" onChange={(e)=> setMessage(e.target.value)}></textarea>
            <button className="bg-white sm:w-[96%] w-[92%] m-3 rounded-md p-1 text-blue-800 font-poppins" type="submit">SUBMIT</button>
          </form>
        </div>
      </section>     
    </>
  )
}

export default Contact