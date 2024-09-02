const messages = ["Is this 'One Day' or 'Day One'?", "Good intentions are only impactful if coupled with intentional actions.", 
    "If not now, when?", "You're not an imposter, you've earned an opportunity!", "There's power in numbers, collaborate!"];

const randomNum = () => Math.floor(Math.random() * 5);

const showRandomMotivation = () => console.log(messages[randomNum()]);

showRandomMotivation();