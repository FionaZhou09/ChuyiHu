(function () {
  const modal = document.getElementById("booking-modal");
  if (!modal) return;

  const openButtons = document.querySelectorAll("[data-open-modal]");
  const closeButtons = modal.querySelectorAll("[data-close-modal]");
  const backdrop = modal.querySelector(".modal-backdrop");

  function openModal() {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  openButtons.forEach((button) => {
    button.addEventListener("click", openModal);
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  if (backdrop) {
    backdrop.addEventListener("click", closeModal);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
})();
