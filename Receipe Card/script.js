let currentStep = 0;
let timer = 0;
let steps = [];
let progressStep = 0;
let timerInterval = null;

function toggleSection(id) {
  const section = document.getElementById(id);
  section.classList.toggle("hidden");
}
function startCooking() {
  steps = Array.from(document.querySelectorAll("#steps li"));
  if (steps.length === 0) return;

  currentStep = 0;
  highlightStep(currentStep);
  updateProgress();

  timer = 0;
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timer++;
    document.getElementById("timer").innerText = `⏳ Timer: ${timer}s`;
  }, 1000);
}

function highlightStep(index) {
  steps.forEach((step, i) => {
    step.style.background = i === index ? "#f9e2d0" : "transparent";
  });
}
function NextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    highlightStep(currentStep);
    updateProgress();
  } else {
    clearInterval(timerInterval);
    alert("✅ You've completed the recipe!");
  }
}

function updateProgress() {
  const progress = ((currentStep + 1) / steps.length) * 100;
  document.getElementById("progress").style.width = progress + "%";
}
