const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~NQIwUArJ#X9JA_pZ5LC3fjoMXtQxj-7uJsvDZ8cUud-jPEdUFMPc'
};
