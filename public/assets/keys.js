require("dotenv").config();

// console.log('this is loading');
// console.log(process.env.EMAILJS_ID);

exports.emailjs = {
    id: process.env.EMAILJS_ID
};
