console.log(
  '%c Hello from /scripts/script.js ',
  'background: lemonchiffon; border: 1px solid #fff'
);
console.log(
  '%c Welcome to tris-webpack-boilerplate! ',
  'background: lemonchiffon; border: 1px solid #fff'
);
console.log(
  '%c Coded by: https://tris.codes 💠',
  'background: lavenderblush; border: 1px solid #000; padding: 4px; padding-top: 10px; padding-bottom: 8px;'
);

// add custom js below

 // This is an example with default parameters

simplyCountdown('[CSS-SELECTOR]', {
        year: 2019, // required
        month: 6, // required
        day: 28, // required
        hours: 0, // Default is 0 [0-23] integer
        minutes: 0, // Default is 0 [0-59] integer
        seconds: 0, // Default is 0 [0-59] integer
        words: { //words displayed into the countdown
            days: { singular: 'day', plural: 'days' },
            hours: { singular: 'hour', plural: 'hours' },
            minutes: { singular: 'minute', plural: 'minutes' },
            seconds: { singular: 'second', plural: 'seconds' }
        },
        plural: true, //use plurals
        inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
        inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
        // in case of inline set to false
        enableUtc: false, //Use UTC or not - default : false
        onEnd: function() { return; }, //Callback on countdown end, put your own function here
        refresh: 1000, // default refresh every 1s
        sectionClass: 'simply-section', //section css class
        amountClass: 'simply-amount', // amount css class
        wordClass: 'simply-word', // word css class
        zeroPad: false,
        countUp: false
});

// Also, you can init with already existing Javascript Object.
let myElement = document.querySelector('.my-countdown');
simplyCountdown(myElement, { /* options */ });

let multipleElements = document.querySelectorAll('.my-countdown');
simplyCountdown(multipleElements, { /* options */ });