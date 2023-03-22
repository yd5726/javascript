//import log from './myLogger.js';
//import {log} from './myLogger.js';
import update, {log, getTime, getCurrentHour, MyLogger, _} from './myLogger.js';

const root = document.querySelector('#root');
root.innerHTML = `<p>Hello World !</p>`;  // html 문서에 Hello World ! 출력

//console 창에 출력
log('my first test module data');              // my first test module data
update(getTime());                             // 1679459828411
update(`current hour is ${getCurrentHour()}`); // current hour is 13

const logger = new MyLogger();
update(`lectures of Codesquad are ${logger.getLectuers()}`); //lectures of Codesquad are java,ios

_.utlog(`utility ${getCurrentHour()}`); // utility 13