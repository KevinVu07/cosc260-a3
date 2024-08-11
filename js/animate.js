function triggerAnimation(score) {
  $(document).ready(function () {
    // Hide all images initially
    $("#rodentImage").addClass("hidden");
    $("#catImage").addClass("hidden");
    $("#dogImage").addClass("hidden");

    // Show and animate the appropriate image
    if (score <= 10) {
      // Display a specific image or animation for low-maintenance pets
      $("#rodentImage").removeClass("hidden");
      $("#rodentImage").fadeIn(3000);
    } else if (score <= 25) {
      // Display a specific image or animation for cats or small dogs
      $("#catImage").removeClass("hidden");
      $("#catImage").slideDown(3000);
    } else {
      // Display a specific image or animation for larger dogs or interactive pets

      $("#dogImage").removeClass("hidden");
      $("#dogImage").fadeIn(3000);
    }
  });
}
