/* 1 */
//1. Re-write the following if statements to use the ternary operator
const age = 43;
const email = "jofh@kea.dk";

let isEven;
if (age % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
}
/*lacj*/
let LisEven = age % 2;
console.log("LisEven", !LisEven);

let LisEven_v2 = age % 2 === 0 ? true : false;
console.log("LisEven_v2", LisEven_v2);

let role = "visitor";
if (email === "jofh@kea.dk") {
  if (age > 40) {
    role = "admin";
  }
}
//can be done in 1 line, if you merge the two if's
let role2 = email === "jofh@kea.dk" && age > 40 ? "admin" : "visitopr";

console.log("role2", role2);

console.clear();

/* 2
    Re-write the following to arrow functions
 */
/* lacj: https://courses-s2023.kea-alt-del.dk/react/0.need-to-know-js/#/5/2 */

function setTitle(title) {
  document.title = title;
}

const LsetTitle = (title) => (document.title = title);
LsetTitle("NEWNEW");

function isEven_ex2(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

const LisEven_ex2 = (number) => (number % 2 === 0 ? true : false);
console.log("LisEven_ex2", LisEven_ex2(1));

function getRandBetween1and10() {
  return Math.floor(Math.random() * 10) + 1;
}

const LgetRandBetween1and10 = () => Math.floor(Math.random() * 10) + 1;
console.log("LgetRandBetween1and10()", LgetRandBetween1and10());

/* 3. Re-write the following to arrow functions */

const movies = [
  {
    name: "Hard Boiled",
    genre: "Hong Kong Action",
  },
  {
    name: "LOTR",
    genre: "Fantasy",
  },
];
function showMovie(movie) {
  console.log(`The movie ${movie.name} is a typical ${movie.genre} movie`);
}

//   movies.forEach(showMovie);

const LshowMovies = (oneMovie) =>
  console.log(
    `The movie ${oneMovie.name} is a typical ${oneMovie.genre} movie`
  );

movies.forEach(LshowMovies);

console.clear();

/* 4. 
    Re-write the following to use map
    Can you do implicit returns? */

/* Implicit return

If we omit the { } it returns something */
const searchengines = [
  { target: "https://google.com", name: "Google" },
  { target: "https://bing.com", name: "Bing" },
];
// let links = "";
let links = [];
searchengines.forEach((link) => {
  links.push(`<a href="${link.target}">${link.name}</a>`);
});

const Llinks = searchengines.map(
  (Llink) => `<a href="${Llink.target}">${Llink.name}</a>`
);

console.log(Llinks);
console.clear;
/* 5. Follow the instructions */
const names = ["Jonas", "Dannie", "Peter", "Klaus"];
/* start by making a "bad" copy of this array 
	by writing something like const myBadCopy = names;
	then modify either array by changing one name
	then console log both, what happened
	*/
/* lacj - both arrays got altered */
const Lbadcopy = names;

names[0] = "Hey";
Lbadcopy[2] = "Hey2";

console.log("names", names);
console.log("LbadCopy", Lbadcopy);

/* Then create a copy using the ... spread operator
	modify either array and console log them, what happens now?
	*/

const LgoodCopy = [...names];

names[0] = "changed again";
LgoodCopy[0] = "This is Unique";
console.log("names again", names);
console.log("LgoodCopy", LgoodCopy);

/* 6. 
    Follow the instructions */

const me = {
  name: "Jonas",
  age: 43,
  kids: 3,
};

/* start by making a bad copy (reference) with something like
	const myCopy = me;
	change something, see what happens */
/* lacj: both changes */
const me2 = me;
me2.name = "Smth else";
console.log("me", me);
console.log("me2", me2);
/*
	Then make a new copy using the spead operator, 
	change something and see what happens
	*/
const me3 = { ...me };
me3.name = "Mads";
console.log("me again", me);
console.log("me3", me3);

/* 7. ToDo: watch this: https://www.youtube.com/watch?v=UgEaJBz3bjY */

console.clear();
/* 8. Follow the instructions */
/* this function receives an object with stuff it does not need
	make it easier for the next developer by destructuring out the 
	parts we need 
	Then clean up the function by removing "person.x". */

function personCard(person) {
  return `<div class="person">
              <h2>${person.name}</h2>
              <ul>
                  <li><a href="tel:+${person.phone}">Call</a></li>
                  <li><a href="mailto:${person.email}">E-mail</a></li>
              </ul>
          </div>`;
}
const myPerson = {
  name: "Clark Kent",
  marriage: null,
  glasses: true,
  phone: 911,
  street: "secret",
  email: "clark@dailyplanet.com",
};
personCard(myPerson);
console.log(personCard(myPerson));

const { name: Lname, phone, email: Lemail } = myPerson;

function LpersonCard(person) {
  return `<div class="person">
  <h2>${Lname}</h2>
  <ul>
      <li><a href="tel:+${phone}">Call</a></li>
      <li><a href="mailto:${Lemail}">E-mail</a></li>
  </ul>
</div>`;
}
console.log(LpersonCard(myPerson));
