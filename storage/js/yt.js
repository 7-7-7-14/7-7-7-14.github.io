// /storage/js/yt.js
function checkYouTubeRedirect() {
  const inputElement = document.getElementById("uv-address");
  if (!inputElement) return; // In case input doesn't exist

  const inputRaw = inputElement.value.trim().toLowerCase();

  if (
    inputRaw.includes("yt") ||
    inputRaw.includes("youtube.com") ||
    inputRaw.includes("youtube")
  ) {
    window.location.href = "/pages/yt.html";
  }
}

// Run this check when the form is submitted or when needed
document.getElementById("uv-form").addEventListener("submit", function (event) {
  event.preventDefault();

  checkYouTubeRedirect();

  // If no redirect, call your normal search function (which you keep in app.js or inline)
  search();
});
