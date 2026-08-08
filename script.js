const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const toast = document.getElementById("toast");

menuBtn?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    document.querySelectorAll(".design-card").forEach(card => {
      card.classList.toggle("hidden", filter !== "all" && card.dataset.category !== filter);
    });
  });
});

document.querySelectorAll(".order-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const design = encodeURIComponent(btn.dataset.design);
    const subject = encodeURIComponent(`K-Vibe Order - ${btn.dataset.design}`);
    const body = encodeURIComponent(
      `Hi K-Vibe,\n\nI want to order the "${btn.dataset.design}" design.\n\nT-shirt color:\nSize:\nQuantity:\nAdditional notes:\n`
    );
    window.location.href = `mailto:kvibecustom@gmail.com?subject=${subject}&body=${body}`;
  });
});

document.getElementById("copyEmail")?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("kvibecustom@gmail.com");
    showToast("Email copied");
  } catch {
    showToast("Email: kvibecustom@gmail.com");
  }
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

document.getElementById("year").textContent = new Date().getFullYear();
