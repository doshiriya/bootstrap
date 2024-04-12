//function expression ( 2nd method )

var getInput = function () {
    var foot = parseInt(document.getElementById('foot').value);
    var inch = parseInt(document.getElementById('inch').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var answer = [foot, inch, weight]
    console.log(` the value of foot is ${foot} inch is ${inch} and weight is ${weight} `);
    // var meter = foot / 3.281 ;
    //  footToMeter(foot);
    //  inchToMeter(inch);
    //  getTotalMeter(foot, inch);
    //  getBmi(weight, foot, inch);
    return answer;
}

var getBmi = function () {
    var input = getInput();
    var bmi = input[2] / (getTotalMeter(input[0], input[1]) * getTotalMeter(input[0], input[1]));
    console.log("the value of bmi is " + bmi);
    
    var image = "";
    if (bmi < 18.5) {
        image = ` <img src="../images/underweight.png" height="250px" alt="" >`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        image = ` <img src="../images/normalweight.png" height="250px" alt="" >`;
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        image = `<img src="../images/overweight.png" height="250px" alt="">`;
    }
    else if(bmi >= 30 && bmi <= 34.9)
    {
        image = `<img src="../images/obesity1.png" height="250px" alt="">`;
    }
    else if(bmi >=35)
    {
        image = `<img src="../images/obesity2.png" height="250px" alt="">`;
    }
    document.getElementById("image").innerHTML = image;
    return bmi;
}

var getTotalMeter = function (foot, inch) {
    var total_meter = footToMeter(foot) + inchToMeter(inch);
    console.log("Total meter is : " + total_meter);
    return total_meter;
}

var footToMeter = function (foot) {
    var foot_meter = foot / 3.281;
    console.log("This is foot meter " + foot_meter);
    return foot_meter;
}

var inchToMeter = function (inch) {
    var inch_meter = inch / 39.37;
    console.log("This is inch meter " + inch_meter);
    return inch_meter;
}
