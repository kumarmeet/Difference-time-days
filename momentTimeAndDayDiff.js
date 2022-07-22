var moment = require('moment');
const today = moment();
const someday = moment('2022-07-21 06:00:58').format('YYYY-MM-DD HH:mm:ss');

let dayDiff = today.diff(someday, 'days');
console.log(dayDiff, 'days ago');

const startTime = moment(someday);
const endTime = moment(today);

const miliseconds = endTime.diff(startTime);

const totalTimeOfStudy = moment.utc(miliseconds).format('HH:mm:ss');
console.log(totalTimeOfStudy, 'time ago');

var newww = totalTimeOfStudy.split(':').map((e) => +e);
const [hour, min, sec] = newww;
console.log(hour, min, sec);
console.log(newww);
