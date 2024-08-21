function calculateScore() {
  let score = 0;
  const form = document.getElementById("petTestForm");

  const space = form.elements["space"];
  const exercise = form.elements["exercise"];
  const grooming = form.elements["grooming"];
  const noise = form.elements["noise"];
  const interaction = form.elements["interaction"];

  if (!space.value || !exercise.value || !grooming.value || !noise.value || !interaction.value) {
    alert("Please answer all questions!");
    return;
  }

  score += parseInt(space.value);
  score += parseInt(exercise.value);
  score += parseInt(grooming.value);
  score += parseInt(noise.value);
  score += parseInt(interaction.value);

  let idealPet = "";
  if (score <= 10) {
    idealPet = "Low-maintenance pets like fish, reptiles, or small rodents.";
  } else if (score <= 25) {
    idealPet = "Cats or small to medium-sized dogs.";
  } else {
    idealPet = "Larger dogs or more interactive pets like parrots or rabbits.";
  }

  // Reset the result and registration form
  document.getElementById("result").innerText = "";
  document.getElementById("registrationForm").style.display = "none";

  // Trigger animation based on the score
  triggerAnimation(score);
}
