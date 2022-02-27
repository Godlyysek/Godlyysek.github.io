// this is just a small cookie clicked clone i made in about an hour

let pp = 0; // value of "money"
let ppPerSecond = 0; // current increment of "money" to be added every second (based on upgrades)

let upgrades = []; // list of acquired upgrades, each index represents a separate upgrade and the number inside represents the number of times it was bought

const pps = [1, 5, 20, 500, 10000, 500000, 100000000]; // constant values of rewarded ppPerSecond for each upgrade


let costs = [20, 100, 500, 10000, 1000000, 30000000, 800000000] // costs of upgrades

let isSpinning = false; // spinning feature to be implemented

const btnAuto = document.getElementById('auto'); // all the upgrade buttons assigned to variables
const btnHD = document.getElementById('hd');
const btnHR = document.getElementById('hr');
const btnDT = document.getElementById('dt');
const btnNC = document.getElementById('nc');
const btnSO = document.getElementById('so');
const btnSD = document.getElementById('sd');

const buttons = [btnAuto, btnHD, btnHR, btnDT, btnNC, btnSO, btnSD]; // all of the buttons packed together into an array for easier access

let costLabels = []; // text below each upgrade representing the cost, these values change exponentially as we will see later

costLabels.push(document.getElementById('cost1'));
costLabels.push(document.getElementById('cost2'));
costLabels.push(document.getElementById('cost3'));
costLabels.push(document.getElementById('cost4'));
costLabels.push(document.getElementById('cost5'));
costLabels.push(document.getElementById('cost6'));
costLabels.push(document.getElementById('cost7')); // each element with the cost under a button


setInterval(function() { // it has to be a function called every x seconds/miliseconds so that we can update the money value with the money per second
    pp += ppPerSecond / 1000; // each milisecond it adds 1/1000 of the value of ppPerSecond (full value over a second).Yes, it's an overkill, but I was just experimenting with it
    document.getElementById('counter').innerHTML = `PP: ${pp.toLocaleString('en', {useGrouping:true})}`; // element that is displaying the amount of money
    document.title = `${pp.toLocaleString('en', {useGrouping:true})} pp`; // i also tried using the money amount as the document title. Worked pretty well and looked nice!
    for (let a = 0; a < costs.length; a++) {
        costs[a] = Math.round(costs[a]); // removing decimals from costs
    }

    for (let x = 0; x < 7; x++) {
        costLabels[x].innerHTML = `COST: ${costs[x].toLocaleString('en', {useGrouping:true})}` // updating every cost label with the costs from the array
    }

    document.getElementById('ppsec').innerHTML = `PP Per Second: ${ppPerSecond.toLocaleString('en', {useGrouping:true})}`; // updating the ppPerSecond as well, in case we bought an upgrade
    // still haven't figured out how to stop it from bouncing around every time it adds and removes a decimal place..
}, 1)


setInterval(function() { // checks if we are able to buy a specific upgrade. If we are, it sets the opacity to 100%, if not, it sets it to 50%
    for (let i = 0; i < 7; i++) {
        if (pp < costs[i]) {
            buttons[i].style.opacity = '50%';
        } else {
            buttons[i].style.opacity = '100%';
        }
    }
}, 100);

function buy(btn) { // function to remove a value from our money based on the cost of an upgrade and then adds the upgrade to our list.
    if (pp < costs[btn]) {

    } else {
        pp -= costs[btn];
        ppPerSecond += pps[btn];
        costs[btn] *= 1.2;
    }
}


// no use as of now, i don't even remember what i wanted to use this for but i'm keeping it here just in case
function ppCheck() {

}

// debug function
function reduce() {
    pp -= 10;
    document.getElementById('counter').innerHTML = `PP: ${pp.toLocaleString('en', {useGrouping:true})}`;
}

// adds the click sound every time we click
function click_btn(url) {
    pp += 1;
    let audio = new Audio(url);
    audio.volume = 0.05;
    audio.play();
}