import axios from 'axios';

// export const sendMail = (data) => {
//     return fetch("http://localhost:3000/api/sendmail", {
//         method:"POST",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data),
//     }).then(res=>{
//         console.log("response", res)
//         return res.json()
//     }).catch(err => {console.log("Error is " + err)})
// }


export const sendMail = async (data) => {

    const axiosConfig = {
        headers: {
            'Accepted': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    }

    await axios.post("http://localhost:3001/api/sendmail", data, axiosConfig)
    .then(res=>console.log("Status is " + res.status))
    .catch(err=>console.log(err))
};

