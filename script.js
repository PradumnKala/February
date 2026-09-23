const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const statusMessage = document.getElementById('status');
const buttonsWrap = document.getElementById('buttons');

let yesScale = 1;

function randomNoButtonPosition() {
  const wrapRect = buttonsWrap.getBoundingClientRect();
  const noRect = noButton.getBoundingClientRect();

  const maxX = Math.max(0, wrapRect.width - noRect.width);
  const maxY = Math.max(0, wrapRect.height - noRect.height);

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
}

function handleNoClick() {
  yesScale += 0.18;
  yesButton.style.transform = `scale(${yesScale})`;
  yesButton.style.boxShadow = `0 12px 24px rgba(242, 91, 143, ${Math.min(0.32 + yesScale / 5, 0.85)})`;
  statusMessage.textContent = "Pleaseeee? You're my favorite person 💞";
  randomNoButtonPosition();
}

function launchLoveCelebration() {
  buttonsWrap.style.display = 'none';
  statusMessage.classList.add('celebrate');
  statusMessage.innerHTML =
    'I love you 💖💞💓💕💘💝🥰😍😘🎉🎊🫶🌹✨💫';

  document.body.style.background =
    'linear-gradient(160deg, #ffd8e9 0%, #ffc1dc 40%, #ffafd0 100%)';
}

noButton.addEventListener('click', handleNoClick);
yesButton.addEventListener('click', launchLoveCelebration);

window.addEventListener('resize', () => {
  if (buttonsWrap.style.display !== 'none') {
    randomNoButtonPosition();
  }
});
