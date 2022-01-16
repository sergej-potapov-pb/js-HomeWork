/*
var message;

if (login == 'Pitter') {
message = 'Hi';
} else if (login == 'Owner') {
message = 'Hello';
} else if (login == '') {
message = 'unknown';
} else {
message = '';
}
*/

let login = 'Onwer';
let message = (login == 'Pitter') ? 'Hi':
              (login == 'Owner') ? 'Hello':
              (login == '') ? 'unknown':'';
console.log(message);
