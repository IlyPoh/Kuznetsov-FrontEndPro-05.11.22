window.addEventListener('DOMContentLoaded', () => {
    
    // Task 1 

    // 1 Variant 

    let arrayOfNumbers = []

    for (let i = 10; i <= 20; i++) {
        arrayOfNumbers.push(i);
    }

    document.getElementById("task-1").innerHTML = arrayOfNumbers

    // 2 Variant

    // let arrayOfNumbers = []
    // i = 9;

    // do {
    //     i++
    //     arrayOfNumbers.push(i);
    // } while (i<20);
    
    // document.getElementById("task-1").innerHTML = arrayOfNumbers
    
    // 3 Variant

    // let arrayOfNumbers = []
    // i = 9;

    // while(i<20) {
    //     i++
    //     arrayOfNumbers.push(i);
    // }

    // document.getElementById("task-1").innerHTML = arrayOfNumbers

    // Task 2

    let arrayOfNumbersSquare = []
    
    for (let i = 10; i <= 20; i++) {
        const squareOfNumber = i**2
        arrayOfNumbersSquare.push(squareOfNumber);
        // arrayOfNumbersSquare.push(i**2);
    }
    
    document.getElementById("task-2").innerHTML = arrayOfNumbersSquare
    
    // Task 3 
    let textForTable = "<tr>"
    
    for (let i = 1; i <= 10; i++) {
        const multiplicationForSeven = 7*i
        textForTable += `<td>${multiplicationForSeven}</td>`
    }
    textForTable += "</tr>"
    
    document.getElementById("task-3").innerHTML = textForTable
    
    // Task 4
    let summaryOfNumbers = 0
    
    for (let i = 1; i <= 15; i++) {
        summaryOfNumbers += i
    }
    
    document.getElementById("task-4").innerHTML = summaryOfNumbers
    
    // Task 5
    let multiplicationOfBigNumbers = 1
    
    for (let i = 15; i <= 35; i++) {
        multiplicationOfBigNumbers *= i
    }
    
    document.getElementById("task-5").innerHTML = multiplicationOfBigNumbers
    
    // Task 6
    let averageOfSumm = 0;
    
    for (let i = 1; i <= 500; i++) {
        averageOfSumm += i
    }
    
    averageOfSumm /= 500;
    
    document.getElementById("task-6").innerHTML = averageOfSumm
    
    // Task 7
    let summForMidNumbers = 0;
    
    for (let i = 30; i <= 80; i++) {
        
        if (i%2 === 0) {
            summForMidNumbers += i
        }
    }
    
    document.getElementById("task-7").innerHTML = summForMidNumbers
    
    // Task 8
    let summForBigNumbers = 0;
    
    for (let i = 100; i <= 200; i++) {
        numberForCubeCheck = 3

        if (i % numberForCubeCheck === 0) {
            summForBigNumbers += i
        }
    }
    
    document.getElementById("task-8").innerHTML = summForBigNumbers
    

    const userNumber = Number(prompt('Enter your number please'));

    if (!userNumber) {
        document.getElementById("task-9").innerHTML = "You didn't enter a number or entered 0";
        document.getElementById("task-10").innerHTML = "You didn't enter a number or entered 0";
        document.getElementById("task-11").innerHTML = "You didn't enter a number or entered 0";
    } else if (userNumber < 0) {
        document.getElementById("task-9").innerHTML = "Your number less than 0";
        document.getElementById("task-10").innerHTML = "Your number less than 0";
        document.getElementById("task-11").innerHTML = "Your number less than 0";
    } else {
        // Task 9
        let dividerArray = []
        
        for (let i = userNumber; i >= 1; i--) {
            
            if (userNumber%i === 0) {
                dividerArray.push(i)
            }
        }

        document.getElementById("task-9").innerHTML = dividerArray

        // Task 10 + 11
        let evenDividerArray = []
        let summOfEventDividers = 0

        for (let i = userNumber; i >= 2; i--) {
            numberForSquareCheck = 2
            
            if (i % numberForSquareCheck === 0 && userNumber % numberForSquareCheck === 0) {
                evenDividerArray.push(i)
                summOfEventDividers += i
            }
        }

        document.getElementById("task-10").innerHTML = evenDividerArray.length

        document.getElementById("task-11").innerHTML = summOfEventDividers
    }


    // Task 12
    let multiplicationTable = []
    let textForTableSecond = ""


    for (let i = 1; i <= 10; i++) {

        textForTableSecond += "<tr>"

        for (let j = 1; j <= 10; j++) {
            multiplication = i * j 
            multiplicationTable.push(multiplication)     

            textForTableSecond += `<td>${multiplication}</td>`       
        }
        textForTableSecond += "</tr>"
    }
    document.getElementById("task-12").innerHTML = textForTableSecond
})