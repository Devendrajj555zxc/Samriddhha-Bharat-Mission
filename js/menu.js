/* Toggle mobile navigation */
const navToggle = document.getElementById('navToggle');
const siteNav   = document.getElementById('siteNav');

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
  navToggle.setAttribute('aria-expanded', !expanded);
  siteNav.style.display = expanded ? 'none' : 'block';
});

// If you add a hamburger menu for mobile, place the logic here.
// For the current design, navigation is always visible on desktop and wraps //on mobile.
