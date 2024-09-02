// This program tells me if I should get out of bed or not (and why) based on random number choices.

// factory function to assign random number for type of day and event.
const randomChoice = num => Math.floor(Math.random() * num);

// Object of event arrays
const events = {
    goodEvents: ["kick ass at work", "get a promotion", "meet someone special", "celebrate a birthday", "win the lottery"],
    badEvents: ["get in a car accident", "get sick at work", "get fired", "get a speeding ticket"]
};

const goodDayOrBad = () => {

    //first find out if a good day or bad
    let dayType = randomChoice(2);
    let eventNum;
    //Tell them whether to get up or stay in bed and why
    switch (dayType) {
        // a good day...
        case 0:
            eventNum = randomChoice(events.goodEvents.length);
            console.log(`Get up! You're going to ${events.goodEvents[eventNum]}!`);
            break;
        // a bad day...
        case 1:
            eventNum = randomChoice(events.badEvents.length);
            console.log(`Uh oh! You're going to ${events.badEvents[eventNum]}, stay in bed today!`);
            break;
        default:
            console.log(`Seek a psychic!`);
    };

}

// fire the dayDecider program
goodDayOrBad();
