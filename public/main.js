const main = () => {
  // document.querySelector('h1').textContent += '?'

  const team1Name = "Team 1";
  const team2Name = "Team 2";

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
