function sendMail(){
    let parms = {
        name : document.getElementById('name').value,
        phone_number : document.getElementById('phone_number').value,
        email : document.getElementById('email').value,
        message : document.getElementById('message').value,
        timestampp : new Date().toLocaleString('en-US', { 
            timeZone: 'America/New_York',
            dateStyle: 'full',
            timeStyle: 'long'
        })
    }

    emailjs.send("service_4lxjiug", "template_5bj8quq", parms).then(alert("Your form has been sent!"))
}