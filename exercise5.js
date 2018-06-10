// Complete the below questions using this array:
const array = [{
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const usernames = [];

array.forEach((i) => {
  usernames.push(i.username + "!");
});

console.log(usernames);

//Create an array using map that has all the usernames with a "? to each of the usernames

const mapUsernames = array.map(i => i.username + "?");

console.log(mapUsernames);



//Filter the array to only include users who are on team: red

const redTeam = array.filter(x => x.team === "red").map(x => x.username);

console.log(redTeam);

//Find out the total score of all users using reduce

const totalScore = array.reduce((acc, score) => {
  return acc + score.score;
}, 0);

console.log(totalScore);

// (1), what is the value of i?
// (2), Make this map function pure:
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//   console.log(num, i);
//   alert(num);
//   return i * 2;
// })

const arrayNum = [1, 2, 4, 5, 8, 9];

arrayNum.map((num,i) => {
  console.log(num,i);
  alert(num);
  console.log(i * 2);
});


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.