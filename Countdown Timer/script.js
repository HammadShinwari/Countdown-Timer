// ============================== Countdown timee ===============================

// const endDate = "2023-12-31T23:59:59"; // Example end date (in ISO date format)

// function countdown() {
//   const endDateTime = Date.parse(endDate); 
//   const currentDateTime = new Date().getTime(); 
//   const timeRemaining = endDateTime - currentDateTime; 

//   const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

//   return {
//     days,
//     hours,
//     minutes,
//     seconds,
//   };
// }

// function update() {
//   const temp = countdown(); 
//   let output = ""; 
//   for (const key in temp) {
//     if (temp.hasOwnProperty(key)) {
//       output += key + ": " + temp[key] + " ";
//     }
//   }

//   console.log(output);
// }

// setInterval(update, 1000);