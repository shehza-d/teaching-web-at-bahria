function calculateAge(yearOfBirth, age) {
  if (yearOfBirth === age) {
    return `You were born this very year!`;
  }

  let result = age - yearOfBirth;

  if (result < 0) {
    return `You will be born in ${Math.abs(result)} year${result === -1 ? "" : "s"}.`;
  }

  return `You are ${result} year${result === 1 ? "" : "s"} old.`;
}

// console.log(calculateAge(2012, 2016));
// console.log(calculateAge(1989, 2016));
// console.log(calculateAge(2000, 2090));
// console.log(calculateAge(2000, 1990));
// console.log(calculateAge(3400, 3400));
// console.log(calculateAge(900, 2900));
// console.log(calculateAge(2010, 1990));
// console.log(calculateAge(2010, 1500));
// console.log(calculateAge(2011, 2012));
// console.log(calculateAge(2000, 1999));
