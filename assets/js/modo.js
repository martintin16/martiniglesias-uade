window.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("modo-toggle");
  const body = document.body;
  const modoGuardado = localStorage.getItem("modo") || "modo-claro";

  body.classList.add(modoGuardado);
  toggle.checked = modoGuardado === "modo-oscuro";

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      body.classList.remove("modo-claro");
      body.classList.add("modo-oscuro");
      localStorage.setItem("modo", "modo-oscuro");
    } else {
      body.classList.remove("modo-oscuro");
      body.classList.add("modo-claro");
      localStorage.setItem("modo", "modo-claro");
    }
  });
});
