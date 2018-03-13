const main = () => {
  // document.querySelector('h1').textContent += '?'

  

}

let team1Total = 0;
let team2Total = 0;
const addTeam1 = () => {
  
  team1Total++;
  console.log("Button was Clicked");
  const firstTeamScore = document.querySelector(".first-team-score");
  firstTeamScore.textContent = team1Total;
}

const subTeam1 = () => {
  team1Total --;
  console.log("Button was Clicked");
  const firstTeamScore = document.querySelector(".first-team-score");
  firstTeamScore.textContent = team1Total;
}
const addTeam2 = () => {
  team2Total++;
  console.log("Button was Clicked");
  const secondTeamScore = document.querySelector(".second-team-score");
  secondTeamScore.textContent = team2Total;
}

const subTeam2 = () => {
  team2Total--;
  console.log("Button was Clicked");
  const secondTeamScore = document.querySelector(".second-team-score");
  secondTeamScore.textContent = team2Total;
}

const team1Name = document.querySelector(".first-team");
const team2Name = document.querySelector(".second-team");

const updateTeam1 = () => {
const newTeam1name = document.querySelector(".ut1").value;
console.log("HELLO")
team1Name.textContent = newTeam1name;
}

const updateTeam2 = () => {
  const newTeam2name = document.querySelector(".ut2").value;
  console.log("HELLO")
  team2Name.textContent = newTeam2name;
}