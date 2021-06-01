// 2. Explain each line of code here (answer as a series of comments)

        function getSome(...arguments) {             // function getSome is declared, it can take in an unknown number of arguments, using the spread syntax with the three dots in front of the parameter 
            const args = arguments.slice(1, 3);      // the array method is applied to the parameter arguments. I presume that the ... spread syntax actually changes the incoming arguments to an array, so that works here?
            // with slice you take a piece out of the array, starting at index 1 (second element) and ending at index 3 (but not including it), so you only take the second and thrird element out of the arguments array and save them as a new array with a variable called args
            return args;                            // the function then returns the args array
        }
        console.log(getSome(90, 100, 75, 40, 89, 95)); // invoking the function and printing the result while giving it a list of 6 numbers as 6 arguments
        // the result will be: [100, 75]

// estimation: 15 mins (start 3:04) ==> (end: 3:13) -> 9 mins (also good in a business sense hehe)

// now checked the result, and I'm right, yay!


