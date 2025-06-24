// hold-esc.js

let escHeld = false;
let escTime = 0;
const requiredHoldTime = 2000; // milliseconds

// Create elements
const escOverlay = document.createElement("div");
escOverlay.id = "escOverlay";
escOverlay.style.cssText = `
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.75); display: none;
  flex-direction: column; align-items: center; justify-content: center;
  z-index: 9999; color: white; font-family: sans-serif;
`;

const escText = document.createElement("div");
escText.className = "escText";
escText.textContent = "Hold ESC to exit";
escText.style.cssText = "font-size: 2rem; margin-bottom: 20px;";

const escProgress = document.createElement("div");
escProgress.className = "escProgress";
escProgress.style.cssText = `
  width: 300px; height: 10px; background: #333;
  border-radius: 5px; overflow: hidden;
`;

const escBar = document.createElement("div");
escBar.id = "escBar";
escBar.style.cssText = `
  height: 100%; width: 0%;
  background: limegreen; transition: width 0.1s linear;
`;

escProgress.appendChild(escBar);
escOverlay.appendChild(escText);
escOverlay.appendChild(escProgress);
document.body.appendChild(escOverlay);

// Key event logic
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !escHeld) {
    escHeld = true;
    escOverlay.style.display = "flex";

    const interval = setInterval(() => {
      if (!escHeld) {
        clearInterval(interval);
        escTime = 0;
        escBar.style.width = "0%";
        escOverlay.style.display = "none";
        return;
      }

      escTime += 100;
      escBar.style.width = `${(escTime / requiredHoldTime) * 100}%`;

      if (escTime >= requiredHoldTime) {
        clearInterval(interval);
        escHeld = false;
        escTime = 0;
        escOverlay.style.display = "none";

        // Do nothing when fully held — placeholder for custom action
        // You could add code here if you want something later
      }
    }, 100);
  }
});

document.addEventListener("keyup", e => {
  if (e.key === "Escape") {
    escHeld = false;
    escTime = 0;
    escBar.style.width = "0%";
    escOverlay.style.display = "none";
  }
});
