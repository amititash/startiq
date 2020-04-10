const dotenv = require('dotenv');
const sgMail = require('@sendgrid/mail');
dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);



let msg = {
  to: 'singhyashpratap06@gmail.com',
  from: 'test@example.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

msg = { to: [ 'yash.pratap@viithiisys.com' ],
 from: 'engineering@startiq.org',
 subject: 'StartiQ',
 templateId: 'd-3f394acc5fa64c64bc11f11cc9213427',
 dynamic_template_data: { name: 'Yash Pratap Singh' } ,
 attachments : [
   {
     content : "some base 64 string",
    filename : "abcd.pdf",
    type : "application/pdf",
    dispostition : "attachment",
    contentId : "myPdf"
   }
 ]
}

const s = Buffer.from(`"UserID","Randomly Assigned Condition","FounderQuiz Score","Deepdive","Ideastorm","Full (Deepdive*Ideastorm)","Number of Ideas Submitted"
"62c116563af8@startiq.org","D",,1,1,1,0
"singhyashpratap06@gmail.com","D",4,1,1,1,2`).toString('base64');


msg = { to: [ 'yash.pratap@viithiisys.com' ],
 from: 'engineering@startiq.org',
 subject: 'StartiQ',
 templateId: 'd-3f394acc5fa64c64bc11f11cc9213427',
 dynamic_template_data: { name: 'Yash Pratap Singh' } ,
 attachments : [
   {
     content : s,
    filename : "abcd.csv",
    type : "text/csv",
    dispostition : "attachment",
    contentId : "myPdf"
   }
 ]
}

sgMail.send(msg);
