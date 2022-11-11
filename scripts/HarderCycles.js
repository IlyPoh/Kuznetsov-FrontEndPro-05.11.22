window.addEventListener('DOMContentLoaded', () => {

    // Task 1 
    let arrayOfNumbers = [];
    
    for (let i = 20; i <= 30; i += .5) {
        arrayOfNumbers.push(i);
    }
    
    document.getElementById("task-1").innerHTML = arrayOfNumbers;

    // Task 2
    const dollarPrice = 27;
    let arrayForDollars = []

    for (let i = 10; i <= 100; i += 10) {
        finalPrice = i * dollarPrice;
        arrayForDollars.push(finalPrice);
    }

    document.getElementById("task-2").innerHTML = arrayForDollars;

    // Task 3

    const userNumber = Number(prompt('Enter your number'));

    if (!userNumber) {
        document.getElementById("task-3").innerHTML = "You didn't enter the number or entered 0";
        document.getElementById("task-4").innerHTML = "You didn't enter the number or entered 0";
        document.getElementById("task-5").innerHTML = "You didn't enter the number or entered 0";
    } else if (userNumber < 0) {
        document.getElementById("task-3").innerHTML = "Your number less than 0";
        document.getElementById("task-4").innerHTML = "Your number less than 0";
        document.getElementById("task-5").innerHTML = "Your number less than 0";
    } else {

        let arrayForSquare = []
    
        for (let i = 1; i <= 100; i++) {
            numberSquare = i ** 2
            
            if (numberSquare <= userNumber) {
                arrayForSquare.push(i)
            }
        }
    
        document.getElementById("task-3").innerHTML = arrayForSquare;
    
        // Task 4
        let arrayForSimpleNumber = []
    
        for (let i = userNumber; i >= 1; i--) {
            simpleNumber = 2
            
            if (userNumber%i === 0) {
                arrayForSimpleNumber.push(i)
                
                if (arrayForSimpleNumber.length === simpleNumber) {
                    document.getElementById("task-4").innerHTML = "Your number is simple";
                } else {
                    document.getElementById("task-4").innerHTML = "Your number is composite";
                }
            }
        }
    
        // Task 5
        const degreeOfThree = 3;
        
        for (let i = 1; degreeOfThree**i <= userNumber; i++) {
            
            if (degreeOfThree**i === userNumber) {
                document.getElementById("task-5").innerHTML = "Your number is degree of three";
            } else {
                document.getElementById("task-5").innerHTML = "Your number isn't degree of three";
            }
            
        }
    }
})