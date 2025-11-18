// Simple function to calculate age from birth date in console
function calculateAge(birthDate) {
  // Get today's date
  const today = new Date();

  // Convert birth date (that what u will write in future by step myAge) string to Date object
  const birth = new Date(birthDate);

  // Calculate the difference in years (to know ur age)
  let age = today.getFullYear() - birth.getFullYear();

  // Get the month difference (for the next step)
  const monthDiff = today.getMonth() - birth.getMonth();

  // Check if birthday hasn't happened yet this year
  // If current month is before birth month, OR
  // If same month but current day is before birth day
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--; // Subtract 1 year
  }

  return age;
}

// now u need to write a date to get ur age it will show error until u write a date in calculateAge("here")

// Examples of how to use it:
// console.log(calculateAge("1990-05-15"));

const myAge = calculateAge("1960-05-15");
console.log(`I am ${myAge} years old`);









// ! DON'T START IN THE NEXT FUNCTION WITHOUT UNDERSTANDING THE FIRST




// this is a different way by using a input of text and of date u can make them show up in js when the user write in them
// like when user write his name and date it will take them and turn them to vars (let) that gonna help js to know what to do
// lets take step by step first we tell js to get the date from input has type = date and id = birth then we write .value to take the value in it
// then we tell it to get the today date then the name from input has type = text and id = user and also .value that important thing to do
// then we tell it to calc the age by today years - birth years then same thing do with months and there some text will help u understand
// then we tell it to take element that has id result and change it content to "welcome ${name} your age is ${age} years old" and there
// ofc an style to result to make it appear good that all

// extra info last code for put a word "guest" in input type = text as if the user didnt wanna put his name

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const birth = new Date(document.getElementById("birth").value);

  const today = new Date();

  let name = document.getElementById("user").value;

  let age = today.getFullYear() - birth.getFullYear();

  // Check if birthday hasn't happened yet this year
  // If current month is before birth month, OR
  // If same month but current day is before birth day

  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--; // Subtract 1 year
  }

  document.getElementById(
    "result"
  ).textContent = ` Welcome ${name} your age is ${age} years old`;

  document.getElementById("result").style =
    "  border: 5px solid var(--primary-color1);  box-shadow: var(--glow);";
});

window.addEventListener("load", function () {
  document.getElementById("user").value = "Guest";
});
