const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");

buttons.forEach(button => {
button.addEventListener("click", playGame);
});

function playGame(e) {
let playerSelection = e.target.id;
let computerSelection = ComputerSelection();
let winner = Winner(playerSelection, computerSelection);

result.innerHTML = `Senin Seçimin ${playerSelection}, Bilgisayarın seçimi ${computerSelection}. ${winner}`;
}

function ComputerSelection() {
let dizi = ["Tas", "Kağıt", "Makas"];
let değer = Math.floor(Math.random() * dizi.length);
return dizi[değer];
}

function Winner(player, computer) {
if (player === computer) {
return "Berabere!";
} else if (
(player === "Tas" && computer === "makas") ||
(player === "Kağıt" && computer === "Tas") ||
(player === "Makas" && computer === "Kağıt")
) {
return "Kazandın!";
} 
else {
return "Kaybettin!";
}
}
