let numbers = process.argv.slice(2);
numbers.sort(function(a, b){ return a - b});

//delay variable
let delay = Number(numbers[0]) * 1000;

//index
let i = 0;

for (let num of numbers ){
  if (num === "" || num < 0 || isNaN(num)) {
    process.exit();
  } else {
    setTimeout(() => {
      console.log(num, "seconds", '\x07');
    }, delay);
    if (i <= (numbers.length - 2)) {
      delay = delay + ((Number(numbers[i+1]) - Number(num)) * 1000);
    }
    i = i + 1;
  }
}