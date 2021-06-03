// 3. "Client order"

// Your client SpaceY is creating a new AI system that tries to detect patterns in data using their new algorithm. You need to create a function or functions that can be used to generate data that looks like this: 

//     [
//         { id: "00000005", time: "21.11.2001 14:11:21 UTC" }
//         { id: "00328105", time: "01.04.2021 03:10:31 UTC" }
//         { id: "01128503", time: "11.01.2003 13:04:05 UTC" }
//         { id: "11160001", time: "10.12.1997 14:51:55 UTC" }
//     ]

// callback function to random integer between a min and a max
const getRandomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const dataArray = [];

function createDate(idLength, startDate, endDate) {
    const iterationAmount = getRandomBetween(4, 500);

    for (let i = 0; i < iterationAmount; i++) {

        const obj = {};

        let number = "";
        for (j = 0; j < idLength; j++) {
        number += Math.floor(Math.random() * 10);
        };
        obj.id = number;

        const initialDate = Date.parse(startDate);
        const finalDate = Date.parse(endDate);

        const randomDate = getRandomBetween(initialDate, finalDate);
        const currentDate = new Date(randomDate);

        let day = currentDate.getDate();
        if (day < 10) {
            day = "0" + day;
        };
        let month = currentDate.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;

        };
        
        const year = currentDate.getFullYear();

        let hours = currentDate.getHours();
        if (hours < 10) {
            hours = "0" + hours;
        };
        let minutes = currentDate.getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes;
        };
        let seconds = currentDate.getSeconds();
        if (seconds < 10) {
            seconds = "0" + seconds;
        };

        obj.time = `${day}.${month}.${year} ${hours}:${minutes}:${seconds} UTC`;

        dataArray.push(obj);
    };
    return dataArray;
    
};


console.log(createDate(7, "01/01/2011", "01/06/2021"));

// Your function will need to generate data based on three different inputs:

//     - idLength:number - how long should the "id" field be; how many numbers. IDs do not need to be unique.
//     - startDate:string - the first date when your data should be created (from 00:00:00)
//     - endDate:string - the last date when your data should be created (to 23:59:59)

// Also, add a comment where you report how long does it take to generate 10 million lines of data.

// time estimation: 2 hours at least (start: 4:05), end 4:15, start: 4:15


