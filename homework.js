var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

var fortunes = [
"Conquer your fears or they will conquer you.",
"Rivers need springs.",
"Do not fear what you don't know.",
"You will have a pleasant surprise.",
"Whenever possible, keep it simple.",
];

var randomFortune =
        fortunes[Math.floor(Math.random() * fortunes.length)];

console.log('Todays date and time is ' + dateTime);
console.log('Your message today is,' + randomFortune);
