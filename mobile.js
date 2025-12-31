const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
let selectedCard = null;

/* -----------------------------
   TAP TO SELECT (CARDS)
------------------------------ */
document.addEventListener("click", e => {
  if (!isMobile) return;

  const card = e.target.closest(".person-card");
  if (!card) return;

  // Deselect previous
  document.querySelectorAll(".selected-card")
    .forEach(c => c.classList.remove("selected-card"));

  selectedCard = card;
  card.classList.add("selected-card");
});

/* -----------------------------
   TAP TO DROP (ZONES)
------------------------------ */
document.addEventListener("click", e => {
  if (!isMobile || !selectedCard) return;

  const zone = e.target.closest(".drop-zone");
  if (!zone) return;

  const decision = zone.dataset.decision;

  zone.appendChild(selectedCard);

  // 🔥 CALL EXISTING DROP LOGIC
  handleDrop(selectedCard, decision);

  selectedCard.classList.remove("selected-card");
  selectedCard = null;
});

if (isMobile) {
  document.querySelectorAll(".person-card")
    .forEach(card => card.draggable = false);
}
