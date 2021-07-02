document.getElementById("logout").addEventListener("click", function () {
  asgar({ title: "salam", right: "Ok", message: "necesen?" }).then(() => {
    console.log("salam");
  });
});

asgar({
  title: "Buna eminsen?",
  message: "Cixmaq isteyirsen?",
  details: "Bu hereketi geri qaytarmaq olmayacaq",
  left: "Legv et",
  right: "beli",
})
  .then(() => {
    console.log("beliye kliklendi");
  })
  .catch((err) => {
    console.log("legv et e kliklendi");
  });
