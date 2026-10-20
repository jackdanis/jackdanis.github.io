// Mobile navigation toggle
(function () {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  if (!header || !toggle) return;

  toggle.addEventListener('click', function () {
    const open = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open);
  });

  // Close the menu after picking a link (useful for same-page anchors)
  header.querySelectorAll('.nav-list a').forEach(function (link) {
    link.addEventListener('click', function () {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Footer year
document.querySelectorAll('[data-year]').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});
