// 3. "Client order"

// Your client SpaceY is creating a new AI system that tries to detect patterns in data using their new algorithm. You need to create a function or functions that can be used to generate data that looks like this: 

//     [
//         { id: "00000005", time: "21.11.2001 14:11:21 UTC" }
//         { id: "00328105", time: "01.04.2021 03:10:31 UTC" }
//         { id: "01128503", time: "11.01.2003 13:04:05 UTC" }
//         { id: "11160001", time: "10.12.1997 14:51:55 UTC" }
//     ]

// Your function will need to generate data based on three different inputs:

//     - idLength:number - how long should the "id" field be; how many numbers. IDs do not need to be unique.
//     - startDate:string - the first date when your data should be created (from 00:00:00)
//     - endDate:string - the last date when your data should be created (to 23:59:59)

// Also, add a comment where you report how long does it take to generate 10 million lines of data.

// time estimation: 2 hours at least (start: 4:05), end 4:15, start: 4:15, end 5:10, start 2:15, end 2:20, start 1:35

// callback function to random integer between a min and a max
const getRandomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const dataArray = [];

function createDate(idLength, startDate, endDate) {
    // const iterationAmount = getRandomBetween(4, 500);

    // for (let i = 0; i < iterationAmount; i++) {
    // for (let i = 0; i < 10000000; i++) {// to generate 10 million lines of data
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

// console.time("generate 10 million lines of data"); // proved to be unsuccessful; if I only call the function as well. with a very short idLength as well
console.log(createDate(1, "01/01/2011", "01/06/2021"));
// console.timeEnd("gegenerate 10 million lines of data");

// node crashed even with an idLength of 1. I get the following report:

// ---

// <--- Last few GCs --->

// [13781:0x102d57000]    30004 ms: Mark-sweep 2047.4 (2052.9) -> 2046.7 (2051.2) MB, 1944.1 / 0.0 ms  (+ 137.2 ms in 26 steps since start of marking, biggest step 12.7 ms, walltime since start of marking 2087 ms) (average mu = 0.150, current mu = 0.009) all[13781:0x102d57000]    32493 ms: Mark-sweep 2047.7 (2051.2) -> 2047.0 (2050.7) MB, 2413.3 / 0.0 ms  (+ 69.8 ms in 16 steps since start of marking, biggest step 7.4 ms, walltime since start of marking 2489 ms) (average mu = 0.074, current mu = 0.002) alloc

// <--- JS stacktrace --->

// ==== JS stack trace =========================================

//     0: ExitFrame [pc: 0x1009dcb79]
//     1: StubFrame [pc: 0x1009ddc13]
// Security context: 0x3603c32c08d1 <JSObject>
//     2: createDate [0x3603537b0471] [/Users/maxiehaufe/Documents/DCI/projects/pb-review-propblem-solving-Mxx1029/question3.js:~27] [pc=0x14b7fa3041f3](this=0x3603879bf5b9 <JSGlobal Object>,1,0x3603819a8931 <String[#10]: 01/01/2011>,0x3603819a8951 <String[#10]: 01/06/2021>)
//     3: /* anonymous */ [0x3603537b04b1] [/Users/maxieha...

// FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
//  1: 0x1011d1c65 node::Abort() (.cold.1) [/usr/local/bin/node]
//  2: 0x10009f919 node::Abort() [/usr/local/bin/node]
//  3: 0x10009fa7f node::OnFatalError(char const*, char const*) [/usr/local/bin/node]
//  4: 0x1001e3867 v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [/usr/local/bin/node]
//  5: 0x1001e3807 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [/usr/local/bin/node]
//  6: 0x10036b995 v8::internal::Heap::FatalProcessOutOfMemory(char const*) [/usr/local/bin/node]
//  7: 0x10036d20a v8::internal::Heap::RecomputeLimits(v8::internal::GarbageCollector) [/usr/local/bin/node]
//  8: 0x100369c3c v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [/usr/local/bin/node]
//  9: 0x100367a3e v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [/usr/local/bin/node]
// 10: 0x10037390a v8::internal::Heap::AllocateRawWithLightRetry(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [/usr/local/bin/node]
// 11: 0x100373991 v8::internal::Heap::AllocateRawWithRetryOrFail(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [/usr/local/bin/node]
// 12: 0x10034135a v8::internal::Factory::NewFillerObject(int, bool, v8::internal::AllocationType, v8::internal::AllocationOrigin) [/usr/local/bin/node]
// 13: 0x100693768 v8::internal::Runtime_AllocateInYoungGeneration(int, unsigned long*, v8::internal::Isolate*) [/usr/local/bin/node]
// 14: 0x1009dcb79 Builtins_CEntry_Return1_DontSaveFPRegs_ArgvOnStack_NoBuiltinExit [/usr/local/bin/node]
// 15: 0x1009ddc13 Builtins_StringAdd_CheckNone [/usr/local/bin/node]
// 16: 0x14b7fa3041f3 
// Abort trap: 6

// ----
