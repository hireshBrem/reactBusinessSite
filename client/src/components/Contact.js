import { useEffect, useState } from 'react';
import axios from 'axios';
import {sendMail} from './helper/Mail'

const Contact = () => {

  useEffect(() => {
    document.title = "Ansel Jobs | Contact Us";
  })
  
  // const sendMail = async () => {
  //   // setStatus("Sending...")
    
  //   var firstName = document.getElementById("fName")
  //   var lastName = document.getElementById("lName")
  //   var email = document.getElementById("email")
  //   var file = document.getElementById("file")
  //   var message = document.getElementById("message")
    
  //   axios({
  //     method: "POST", 
  //     url:"http://localhost:3000/send_mail", 
  //     data: {
  //         name: firstName,   
  //         email: email,  
  //         messsage: message
  //     }
  //     }).then((response)=>{
  //     if (response.data.msg === 'success'){
  //         alert("Message Sent."); 
  //     }else if(response.data.msg === 'fail'){
  //         alert("Message failed to send.")
  //     }
  //   })


    // let details = {
    //   firstname: firstName.value,
    //   lastname: lastName.value,
    //   email: email.value,
    //   message: message.value
    // };

    // let response = await fetch("/send_mail", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(details),
    // });
    // setStatus("Submit");
    // let result = await response.json();
    // alert(result.status);
 //}

  const handleSubmit = (e) => {
    e.preventDefault()
        
    var firstName = document.getElementById("fName").value
    var lastName = document.getElementById("lName").value
    var email = document.getElementById("email").value
    var file = document.getElementById("file")
    var message = document.getElementById("message").value
    
    console.log("values email ", email)
    console.log("values message", message)
    
    sendMail({email, message}).then(data=>{
      if(data.err) {
        console.log(data.err)
      }else{
        console.log("Success!", data)
      }
    }).catch(error=>{console.log(error)})
  }

  return (
    <>
      <section className='m-2'>
        <div className="bg-blue-800 w-[90%] m-auto flex flex-wrap flex-col font-poppins text-white shadow-2xl rounded">
          <form method='POST' onSubmit={(e) => handleSubmit(e)} className='sm:max-w-xl max-w-xs m-auto text-[20px] mb-10'>
            <h1 className='ml-5 mt-8 text-[40px] mb-10'>Contact Form</h1>
            <input id="fName" required className="bg-transparent m-3 p-3 border-b-2 sm:w-[96%] w-[92%]" type="text" placeholder="Your First Name"/>
            <input id="lName" required className="bg-transparent m-3 p-3 border-b-2 sm:w-[96%] w-[92%]" type="text" placeholder="Your Last Name"/>
            <input id="email" required className="bg-transparent m-3 p-3 border-b-2 sm:w-[96%] w-[92%]" type="text" placeholder="Your Email"/>
            <input id="file" className="sm:w-[96%] w-[92%] m-3 align-bottom text-gray-900 bg-gray-50  rounded-lg border border-gray-300 cursor-pointer focus:outline-none" type="file"/>
            <label className=" ml-3 mb-4 font-poppins text-white italic" htmlFor="file_input">Upload Your CV</label>
            <textarea id="message" required className="bg-transparent border-2 rounded m-3 sm:w-[96%] w-[92%] h-40 p-3 mt-6" placeholder="Your Message"></textarea>
            <button className="bg-white sm:w-[96%] w-[92%] m-3 rounded-md p-1 text-blue-800 font-poppins" type="submit">SUBMIT</button>
          </form>
        </div>
      </section>     
    </>
  )
}

export default Contact