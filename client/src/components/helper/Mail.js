export const sendMail = (data) => {
    return fetch("http://localhost:3000/api/sendmail", {
        method:"POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res=>{
        console.log("response", res)
        return res.json()
    }).catch(err => {console.log(err)})
}