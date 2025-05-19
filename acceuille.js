  function animateButton(button) {
    button.classList.add('vibrate');
    setTimeout(() => {
      button.classList.remove('vibrate');
    }, 400);
  }
  const messages = [
    "🎂 Bienvenu sur mon PortFolio!",
    "🎉 !",
    "✨ Félicitations !",
    "⭐ Welcom!",
    "🎈 Que du bonheur !",
    "🎊"
  ];

  function lancerAnniversaire() {
    // Lancer le son
    const son = document.getElementById("son-anniv");
    son.currentTime = 0; // remet au début
    son.play();

    // Créer la bulle flottante
    const zone = document.getElementById("zone-bulles");
    const bulle = document.createElement("div");
    bulle.className = "bulle";
    bulle.textContent = messages[Math.floor(Math.random() * messages.length)];
    zone.appendChild(bulle);

    setTimeout(() => {
      zone.removeChild(bulle);
    }, 20000);
  }
