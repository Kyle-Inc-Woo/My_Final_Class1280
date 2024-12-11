function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString("en-GB"); 
    const time = now.toLocaleTimeString("en-GB", { hour: '2-digit', minute: '2-digit' });
    document.getElementById("date").textContent = `Date: ${date} at ${time}`;
}


function rollDice() {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1; 
    document.querySelectorAll(".dice img")[0].src = `dice-${dice1}.svg`;
    document.querySelectorAll(".dice img")[1].src = `dice-${dice2}.svg`;

    const total = dice1 + dice2;
    document.getElementById("total").textContent = total;

    const message = document.querySelector(".message h3");

    if (total > 8) {
         message.textContent = "You Win!";
         //message.style.color = "green";
    } else {
         message.textContent = "You didn't win: Try Again!";
         //message.style.color = "red";
    }
}

document.getElementById("btn").addEventListener("click", rollDice);
updateDateTime();

    