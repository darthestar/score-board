const main = () => {
  // document.querySelector('h1').textContent += '?'

  const team1Name = "Team 1";
  const team2Name = "Team 2";
  const score = 0;
}


let count = 0;

const clicked = ()=>{

  count++;
  console.log("Button was Clicked");
  const updateScore = document.querySelector('.team-scores>.first-team-score');
  updateScore.textContent = score +count;
}

document.addEventListener('DOMContentLoaded', main)
