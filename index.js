const elMinutes = document.getElementById('minutes');
const elSeconds = document.getElementById('seconds');
const elStart = document.getElementById('start');
const elPause = document.getElementById('pause');

let status = 'stopped';
let remaining = 1500; // 25 minutes in seconds
let tickID = null; // Variable to store the interval ID
let endAt = null;
let totalSeconds = 25 * 60;
let remainingSeconds = totalSeconds;

function updateDisplay() {
};