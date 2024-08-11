#! /usr/bin/env node
import{DifferenceInSecondsOptions, differenceInSeconds} from"date-fns";
//function for countdown second
function* countdownTimer(second:number ) {
    //while loop
    while (second > 0){
          yield second;
        second--;
    }
}
//step 2 counter initialization
let timerIterator= countdownTimer(25);
//function to create a countdown timer
function displayCountdown() {
    //value below 10
    let result = timerIterator.next();

    //if else condition apply
     if(!result.done) {
        //current date and time calls
        const now = new Date();
        //calculate minutes in time
        const countdownTimer =new Date (now.getTime() +(result.value*1000))
        //calculate remaining seconds in time
        const remainingSeconds = differenceInSeconds(countdownTimer, now)
        console.log(`Remaing Seconds: ${remainingSeconds}`)
        setTimeout(displayCountdown, 1000) //1 second is equal to 1000 ms

     }else{
        //display result countdown complete
        console.log("countdown complete!")
     }
}
//invoke
displayCountdown();