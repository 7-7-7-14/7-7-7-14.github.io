// Check if particles should be disabled
const particlesToggle = document.getElementById('particlesToggle');
const particlesContainer = document.getElementById('particles-js');

// Apply stored setting on load
const particlesDisabled = localStorage.getItem('particlesDisabled') === 'true';
if (particlesDisabled && particlesContainer) {
  particlesContainer.style.display = 'none';
  if (particlesToggle) particlesToggle.checked = true;
}

// Handle toggle changes
if (particlesToggle) {
  particlesToggle.addEventListener('change', () => {
    const isDisabled = particlesToggle.checked;
    localStorage.setItem('particlesDisabled', isDisabled);
    if (particlesContainer) {
      particlesContainer.style.display = isDisabled ? 'none' : 'block';
    }
  });
}
