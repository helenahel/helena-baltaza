(() => {
  try {
    const t = localStorage.getItem("theme");
    if (t) {
      document.documentElement.dataset.theme = t;
    } else if (window.matchMedia("(prefers-color-scheme:light)").matches) {
      document.documentElement.dataset.theme = "light";
    } else {
      document.documentElement.dataset.theme = "dark";
    }
  } catch (_e) {
    document.documentElement.dataset.theme = "dark";
  }
})();
