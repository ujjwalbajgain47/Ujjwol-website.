// ── Custom Cursor ──
const cursor = document.getElementById('cursor');
const dot = document.getElementById('cursorDot');

if (cursor && dot) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
  });

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '56px';
      cursor.style.height = '56px';
      cursor.style.borderColor = 'rgba(201,169,110,0.4)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '36px';
      cursor.style.height = '36px';
      cursor.style.borderColor = 'var(--accent)';
    });
  });
}

// ── Hamburger Mobile Menu ──
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Close menu when a link is c
