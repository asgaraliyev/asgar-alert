document.getElementById("dialog").addEventListener("click", function () {
  asgar({
    title: "Are you sure?",
    message: "Want to log out?",
    details: "You will not able to recover this action",
    left: "Cancel",
    right: "Yes,Iam sure",
  })
    .then(() => {
      console.log("right button clicked");
    })
    .catch(() => {
      console.log("left button clicked");
    });
});

document.getElementById("small-dialog").addEventListener("click", function () {
  asgar({ title: "Say hello to Asgar Aliyev", right: "Hello" }).then(() => {
    console.log("Aleyke salam");
  });
});

document.getElementById("alert-success").addEventListener("click", function () {
  asgar(
    "I am a success message", //message
    "success", //type:info/warning/success/error
    "After 5 seconds it will be gone", //details
    5000 //duration
  );
});

document.getElementById("alert-warning").addEventListener("click", function () {
  asgar(
    "I am a warning message", //message
    "warning" //type:info/warning/success/error
  );
});
document.getElementById("alert-error").addEventListener("click", function () {
  asgar(
    "I am a error message", //message
    "error" //type:info/warning/success/error
  );
});
document.getElementById("alert-info").addEventListener("click", function () {
  asgar(
    "I am a info message" //message
  );
});
