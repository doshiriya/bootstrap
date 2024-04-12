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
    var foot_meter = answer2[0] / 3.281;
    console.log(`foot to meter: ${foot_meter} `);
}
footToMeter();

var inchToMeter = function()
{
    var answer3 = getInput();
    console.log(answer3);
    var inch_meter = answer3[1] / 39.37;
    console.log(`Inch to meter: ${inch_meter} `);
}
inchToMeter();

var getBmi = function()
{
    var answer4 = getInput();
    console.log(answer4);
    var weight = answer4[2] ;
    var meter = 0 ;
    var foot_meter = answer4[0] / 3.281;
    var inch_meter = answer4[1] / 39.37;
    meter = foot_meter + inch_meter;
    console.log(meter);
    var bmi = weight / (meter * meter);
    console.log(bmi);
}
getBmi();