const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');

//TRANSPORT-connecting to sendgrid website 
const transporter = nodemailer.createTransport(
    sendGridTransport({
        auth:{
            api_key: process.env.API_SENDGRID,
        },
    })
)


const sendEmailController = (req,res)=>{
    try {
        //validation
        const {name,email,msg} = req.body;
        if(!name || !email || !msg){
            return res.status(500).send({
                success:false,
                message:'Enter all fields'
            })
        }

        //email matter
        transporter.sendMail({
            to: "sivarammariappan04@gmail.com",
            from: "sivarammariappan04@gmail.com",
            subject: "Regarding Mern Portfolio App",
            html: `
              <h5>Detail Information</h5>
              <ul>
                <li><p>Name : ${name}</p></li>
                <li><p>Email : ${email}</p></li>
                <li><p>Message : ${msg}</p></li>
              </ul>
            `,
          });

        
        return res.status(200).send({
            success:true,
            message:'Email sent successfully'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:'Send Email API error',
            error
        })
    }
}

module.exports = {sendEmailController};