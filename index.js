require('dotenv').config(); 

const args = process.argv.slice(2);

if (args.includes('-h') || args.includes('--help')) {
    console.log('Welcome to my tool, \nthis tool can be used to change an email to the @duck.com email used to send mail. \n\nUsage: node index.js [email] \n\nExample: node index.js');
    process.exit(0);
}

const emailIndex = args.findIndex(arg => arg.includes('@'));
if (emailIndex !== -1) {
    const email = args[emailIndex];
    const modifiedEmail = email.replace('@', '_at_') + `_${process.env.YOUR_MAIL}`;
    args[emailIndex] = modifiedEmail;
    console.log(`The email has been changed to: ${modifiedEmail}`);
}