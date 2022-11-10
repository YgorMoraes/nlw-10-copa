function createGame(player1, hour, player2){
  return`
<li>
              <img src="assets/icon_${player1}.svg" alt="bandeira ${player1}" />
              <strong>${hour}</strong>
              <img src="assets/icon_${player2}.svg" alt="bandeira ${player2}" />
            </li>

`
}

let delay = 0;
function createCard(date, day, games){
  delay = delay + 0.3;
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
          ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML = 

    createCard(
      "24/11",
      "Quinta",
      createGame("brasil", "16:00", "servia") +
      createGame("brasil", "16:00", "servia"))+

      createCard(
      "28/11", 
      "Segunda", 
      createGame("brasil", "13:00", "suiça"))+

      createCard(
        "02/12",
        "Sexta",
        createGame("brasil", "16:00", "camaroes")
      )
