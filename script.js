const days = Document.getElementById('days');
const hours = Document.getElementById('hours');
const mins = Document.getElementById('mins');
const secs = Document.getElementById('secs');

const updateCountDown = (deadline) => {
    const currentTime = new Date();
    const timeDifference = deadline - currentTime;
    console.log(timeDifference);
}

const countDown = (targetDate) => {
setInterval( () => updateCountDown(targetDate), 1000);
}

const targetDate = new Date("june 01 2023 07:00");
countDown(targetDate);