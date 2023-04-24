// export default function log(data){
//     console.log(data);
// }

export function log(data){
    console.log(data);
}

export default function update(data){
    console.log(data);
}

export const getTime =()=>{
    return Date.now();
}
export const getCurrentHour =()=>{
    return (new Date).getHours();
}

/* Class */
export class MyLogger {
    constructor(props){
        this.lectures = ['java','ios'];
    }
    getLectuers(){
        return this.lectures;
    }
    getTime(){
        return Date.now();
    }
}

/* utility */
export const _ = {
    utlog(data){
        if(window.console){
            console.log(data);
        }
    }
}