//#1

function intergerSum(int) {
  let sum = 0;

  for (let i = 1; i <= int; i++) {
    sum += i;
  }

  return sum;
}

console.log("Q1:", intergerSum(600));

//#2

const cubed = (n1, n2, n3) => {
  const sumOfcubes = n1 ** 3 + n2 ** 3 + n3 ** 3;

  return sumOfcubes;
};

console.log("Q2:", cubed(1, 5, 9));

//#3

function isStrOfWord(str1, str2) {
  const firstLetterStr1 = str1.split("").splice(0, 1).join("");
  const firstLetterStr2 = str2.split("").splice(0, 1).join("");

  if (firstLetterStr1 === firstLetterStr2) {
    return true;
  } else {
    return false;
  }
}

console.log(isStrOfWord("Q3:", "pbeau", "pastery"));

//#4

const isLessOrEqualzero = (num) => {
  if (num <= 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isLessOrEqualzero(-9));

//#5

function countOccurence(str, letter) {
  let letterCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      letterCount += 1;
    }
  }

  return letterCount;
}

console.log(countOccurence("we are the best", "b"));

//#6

const powerTo = (num1, num2) => {
  return num1 ** num2;
};

console.log(powerTo(5, 5));

//#7

const dogAge = (ageInHumanYears) => {
  console.log(`Q7: Your dog is ${ageInHumanYears * 7} years old in dog years`);
};

dogAge(4);

//#8

const snackCalc = (age, amountPerDay) => {
  const daysRemianing = (100 - age) * 365.25;

  if (age <= 100) {
    return `You will have ${Math.ceil(
      daysRemianing * amountPerDay
    )} snacks in your life time`;
  } else {
    return "You're too old for snacks mate!";
  }
};

console.log(snackCalc(25, 2));

//#9

function isWaldoHere(someStr) {
  const arrOfWords = someStr.split(" ");
  console.log(arrOfWords);

  if (arrOfWords.includes("Waldo")) {
    return true;
  } else {
    return false;
  }
}

console.log(isWaldoHere("i found you Waldo!"));

//#10
function sliceShare(numOfSlice, numOfRecipients, sliceForEachPerson) {
  if (numOfRecipients * sliceForEachPerson <= numOfSlice) {
    return true;
  } else {
    return false;
  }
}

console.log("Q10:", sliceShare(24, 12, 2));

//#11
function isEqualNumberXandO(someStr) {
  let numOfX = 0;
  let numOfO = 0;
  for (let i = 0; i < someStr.length; i++) {
    if (someStr[i] === "x") {
      numOfX += 1;
    } else if (someStr[i] === "o") {
      numOfO += 1;
    } else if (someStr[i] !== "x" && someStr[i] !== "o") {
      return true;
    }
  }

  if (numOfX === numOfO) {
    return true;
  } else {
    return false;
  }
}

console.log("Q11: ", isEqualNumberXandO("ertz"));

//#12

const ifPrime = (num) => {
  if (num === 2) {
    return true;
  } else if (num > 1) {
    if (num % 2 !== 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

console.log("Q12:", ifPrime(1));

//#13

function ifEmailValid(email) {
  let atIndex;
  let atCounter = 0;
  let dorIndex;

  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      atCounter++;
      atIndex = i;
      if (atIndex === dorIndex + 1) {
      }
    }
    if (email[i] === ".") {
      dorIndex = i;
      if (dorIndex === atIndex + 1) {
        return `${email} is invalid: "." found directly after "@"`;
      }
      if (email[dorIndex + 1] === ".") {
        return `${email} is invalid: consecutive "." found`;
      }
    }
  }

  if (atCounter !== 1 || atIndex === 0 || atIndex === email.length - 1) {
    return `${email} is invalid: "@" syntax error`;
  } else if (
    email[0] === "." ||
    dorIndex < atIndex ||
    dorIndex === email.length - 1
  ) {
    return `${email} is invalid: "." syntax error`;
  } else {
    return `${email} is valid`;
  }
}

console.log(ifEmailValid("@example.com"));
