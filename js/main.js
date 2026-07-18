document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector(".site-footer p");

  if (footer) {
    footer.textContent = `© ${year} Log Cabin Inn. insert licensing/copyright here.`;
  }
});
