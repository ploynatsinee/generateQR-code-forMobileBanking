const qrcode = require('qrcode-terminal');
const generatePayload = require('promptpay-qr');
const prompt = require('prompt-sync')();

const mobileNumber = prompt('What is your mobile phone number (xxx-xxx-xxxx)? ');
const amount = +prompt('How much is the meal? ');
const numberOfPeople = +prompt('How many people? ');
const amountPerPerson = amount / numberOfPeople;
const payload = generatePayload(mobileNumber, { amount: amountPerPerson });

qrcode.generate(payload);