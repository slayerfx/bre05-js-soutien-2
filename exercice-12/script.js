let zoneInteraction = document.querySelector("#zone-interactive");

zoneInteraction.addEventListener("pointerdown", () => {
  zoneInteraction.style.backgroundColor = "orange";
});

zoneInteraction.addEventListener("pointerup", () => {
  zoneInteraction.style.backgroundColor = "lightgrey";
});
