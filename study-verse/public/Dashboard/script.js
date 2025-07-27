window.onload = function () {
  document.getElementById("teams-link").addEventListener("click", function () {
    alert("Navigating to Teams");
  });

  document.getElementById("ebooks-link").addEventListener("click", function () {
    alert("Navigating to Ebooks");
  });

  // Only add if #exploreBtn exists
  const exploreBtn = document.getElementById("exploreBtn");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", function () {
      alert("Exploring resources...");
    });
  }

  const toggleButton = document.getElementById("themeToggle");
  toggleButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
  });

  // Optional: Set default theme
  document.documentElement.setAttribute("data-theme", "light");
  document.querySelector(".first button").addEventListener("click", function () {
    window.open("notes-videos.html", "_blank");
  });

  document.querySelector(".second button").addEventListener("click", function () {
    window.open("semester-syllabus.html", "_blank");
  });

  document.querySelector(".third button").addEventListener("click", function () {
    window.open("cheat-notes.html", "_blank");
  });
};
