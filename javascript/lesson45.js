//function expression ( 2nd method )

var getInput = function()
{
    var foot = parseInt(document.getElementById('foot').value);
    var inch = parseInt(document.getElementById('inch').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var answer = [foot, inch, weight]
    console.log(`the value of foot is ${foot} inch is ${inch} and weight is ${weight}`);

    return answer;
};

var footToMeter = function()
{
    var answer2 = getInput();
    console.log(answer2);
    var meter = answer2[0] / 3.281;
    console.log(`foot to meter: ${meter} `);
}
footToMeter();

var inchToMeter = function()
{
    var answer3 = getInput();
    console.log(answer3);
    var meter = answer3[1] / 39.37;
    console.log(`Inch to meter: ${meter} `);
}
inchToMeter();

var getBmi = function()
{
    var answer4 = getInput();
    console.log(answer4);
    var weight = answer4[2] ;
    var bmi = weight / (meter * meter);
    console.log(bmi);
}
getBmi();