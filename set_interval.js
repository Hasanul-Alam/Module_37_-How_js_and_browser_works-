// The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.
//Let's make an interesting clock

let seconds = 0;
const clock = setInterval(() => {
    console.log(++seconds);
    if (seconds > 59) {
        clearInterval(clock);
    }
}, 1000);