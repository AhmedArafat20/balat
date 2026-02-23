(function () {
  const PHONE = "0564591230";
  const WA = "0564591230";

  // Make tel + WhatsApp links dynamic if needed
  document.querySelectorAll("[data-phone]").forEach(a => {
    a.setAttribute("href", `tel:${PHONE}`);
  });

  document.querySelectorAll("[data-wa]").forEach(a => {
    const msg = encodeURIComponent("السلام عليكم، محتاج معلم تركيب بلاط في جدة. ممكن تفاصيل؟");
    a.setAttribute("href", `https://wa.me/966${WA.replace(/^0/, "")}?text=${msg}`);
  });

  // Year
  const y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();