function triggerAnimation(score) {
  $(document).ready(function () {
    // Hide all images and reset styles
    $("#rodentImage, #catImage, #dogImage").addClass("hidden").css({
      opacity: "",
      transform: "",
      left: "",
      display: "none", // Ensure they are hidden initially
      width: "450px", // Ensuring uniform size
      height: "300px", // Ensuring uniform size
    });

    let message = "";
    let imageSelector = "";
    let color = "";

    if (score <= 10) {
      // Low-maintenance pets
      imageSelector = "#rodentImage";
      color = "blue";
      message = "Your ideal pet is a low-maintenance pet like a fish, reptile, or rodent!";

      // Remove hidden class and start the fadeIn animation
      $(imageSelector).removeClass("hidden").css("display", "block").hide().fadeIn(10000);
    } else if (score <= 25) {
      // Cats or small to medium-sized dogs
      imageSelector = "#catImage";
      color = "green";
      message = "Your ideal pet is a cat or a small to medium-sized dog!";

      // Remove hidden class and start the slideDown animation
      $(imageSelector).removeClass("hidden").hide().slideDown(10000);
    } else {
      // Larger dogs, parrots, or rabbits
      imageSelector = "#dogImage";
      color = "red";
      message = "Your ideal pet is a large dog, parrot, or rabbit!";

      // Remove hidden class, set initial position, and start the custom animation
      $(imageSelector)
        .removeClass("hidden")
        .css({
          display: "block",
          opacity: "0",
          position: "relative",
          left: "-50px",
        })
        .animate({ opacity: 1, left: "+=50" }, 10000);
    }

    // Display the score in the chosen color
    $("#result").css("color", color).text(`Your score: ${score}`);

    // Display the message about the ideal pet
    $("#result").append(`<p>${message}</p>`);

    // Delay the display of the registration form for 10 seconds
    setTimeout(function () {
      $("#registrationForm").fadeIn(1000, function () {
        // Scroll to the form after it appears
        $("html, body").animate(
          {
            scrollTop: $("#registrationForm").offset().top,
          },
          1000
        );
      });

      // Add a prompt for the user to complete the form
      $("#result").append("<p>Please complete the registration form below to find your perfect pet!</p>");
    }, 10000);
  });
}
