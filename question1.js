// 1. Make a function that works like this:

//         examine({})         // ["object"]
//         examine("hi")       // ["string"]
//         examine(3, 1)       // ["number", "number"]
//         examine(3, "hi")    // ["number", "string"]
//         examine([], ()=>{}) // ["array", "function"]


// estimation: 30 min (start 2:22) ==> stop 2:42 -> 20 mins (time estimate was pretty good in a business sense ;))

const examine = (...input) => {
    const output = [];
    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] === "object") {
            if (Array.isArray(input[i]) === true) {
                output.push("array");
            } else {
                output.push("array")
            };
        } else {
            output.push(typeof input[i]);
        };
    };
    return output;
};

console.log(examine([], ()=>{}));