document.getElementById("logout").addEventListener("click", function () {
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

asgar({ title: "Say hello to Asgar", right: "Hello" }).then(() => {
  console.log("Aleyke salam");
});
