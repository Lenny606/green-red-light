

const oneData = {
    name: "XXXX",
    state: "FFFFF",
    insideArray: [
        1, 2, 3, 4, 5
    ],
    insideObject: {
        city: "ppppp",
        post: "jjjj"
    }
}

oneData.name = "KKK";
oneData["state"] = "fffff";

oneData.insideArray[1] = 55;

console.log(oneData);


// LOOP
// Object.values(oneData.insideObject).forEach((key) => {
//     console.log(oneData.insideObject[key]);
// });

for (let key in oneData.insideArray) {
    console.log(key);
}

for (let value in oneData.insideObject) {
    console.log(value);
}

const firstLevel = (JSON.stringify(oneData)); //JSON.parse converts to object
const secondLevel = (JSON.stringify(firstLevel));
const thirdLevel = (JSON.stringify(secondLevel + "fffffff"));
console.log(oneData);
console.log(firstLevel);
console.log(secondLevel);
console.log(thirdLevel);

const field = document.querySelector(".input");
const button = document.querySelector(".btn");

const handleClick = (e) => {
    console.log(e.code)
    button.style.backgroundColor = "red";
    // document.querySelector("body").innerHTML += "<p>sdfbkbk</p>";
};

field.addEventListener("keydown", handleClick);

// ------------Crosswalk lights (stage 1)  
// 1. create elements
//2. add event on the button
//3. implement change of the images
// 4 . implement the setTimeOut to reset

let images = document.querySelector(".images");
// const lightOn = images.innerHTML = "<p>pedestrian walks</p>"
// const lightOff = images.innerHTML = "<p>pedestrian doesnt walk</p>"

const btn = document.querySelector(".btn");
let sec = 5;
let sec2 = 3;
const hitGreen = (e) => {
    //  start the coutdwn from 3
    console.log('');
    images.innerHTML = "<img src=img/stop-on.svg>" + "<img src=img/walk-off.svg>";

    const stopInterval2 = setInterval(() => {
        document.querySelector(".countdown").innerHTML = sec2;
        console.log(sec2);
        
        sec2--
        if (sec2 === 0) {
            clearInterval(stopInterval2);
        }

    }, 1000);

    //    start the coutdwn from 5
    setTimeout(() => {
        images.innerHTML = "<img src=img/stop-off.svg>" + "<img src=img/walk-on.svg>";
        setTimeout(() => { images.innerHTML = "<img src=img/stop-on.svg>" + "<img src=img/walk-off.svg>"; }, 6000);

        const stopInterval = setInterval(() => {

            document.querySelector(".countdown").innerHTML = sec;
            sec--
            if (sec === -1) {
                clearInterval(stopInterval);
            }

        }, 1000);

    }, 5000);
};

btn.addEventListener("click", hitGreen);

// Stage 2 Crosswalk lights (stage 2)------
// timeout 3secs before green hits + coundown nfrom 3-0
// put countdown from 5-0 on green
// then set first cnountdown on random between 2 - 6





