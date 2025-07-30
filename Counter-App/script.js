let counter = document.getElementById("counter");
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const resetButton = document.getElementById("reset");

counter = 0;

const ResetHandler = () => {
    counter = 0;
    document.getElementById("counter").innerText = counter;
}

const IncrementHandler = () => {
    counter++;
    document.getElementById("counter").innerText = counter;
}

const DecrementHandler = () => {
    if(counter <= 0) {
        return counter = 0
    }
    counter--;
    document.getElementById("counter").innerText = counter;
}