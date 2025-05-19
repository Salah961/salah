// Gestion du son vidéo
document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("bg-video");
  const button = document.getElementById("sound-toggle");

  button.addEventListener("click", () => {
    video.muted = !video.muted;
    button.textContent = video.muted ? "Activer le son" : "Désactiver le son";
  });
});
