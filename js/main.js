document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector(".site-footer p");
  const toggle = document.querySelector(".theme-toggle");
  const toggleIcon = document.querySelector(".theme-toggle-icon");
  const body = document.body;

  if (footer) {
    footer.textContent = `© ${year} Log Cabin Inn. insert licensing/copyright here.`;
  }

  const setTheme = (isDark) => {
  body.classList.toggle("dark-mode", isDark);

  if (toggle) {
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  }

  if (toggleIcon) {
    toggleIcon.textContent = isDark ? "☀" : "☾";
  }

  localStorage.setItem("theme", isDark ? "dark" : "light");
};

  const isDark = body.classList.contains("dark-mode");
  if (toggle) {
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  }
  if (toggleIcon) {
    toggleIcon.textContent = isDark ? "☀" : "☾";
  }

  toggle?.addEventListener("click", () => {
    const nextTheme = !body.classList.contains("dark-mode");
    setTheme(nextTheme);
  });
});
