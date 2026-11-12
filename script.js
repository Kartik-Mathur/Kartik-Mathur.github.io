(() => {
  const $ = selector => document.querySelector(selector);
  const menu = $('#menu-toggle');
  const nav = $('#main-nav');
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!open));
    menu.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
    nav?.classList.toggle('open', !open);
    document.body.classList.toggle('nav-open', !open);
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
    menu?.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('nav-open');
  }));

  const filterButtons = Array.from(document.querySelectorAll('.filter-btn'));
  const cards = Array.from(document.querySelectorAll('.repo-card'));
  filterButtons.forEach(btn => btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filterButtons.forEach(b => { b.classList.toggle('active', b === btn); b.setAttribute('aria-pressed', String(b === btn)); });
    cards.forEach(card => { card.hidden = filter !== 'all' && card.dataset.category !== filter; });
  }));

  const photo = $('#kartik-photo');
  if (photo) {
    const fail = () => photo.classList.add('photo-error');
    photo.addEventListener('error', fail);
    if (photo.complete && photo.naturalWidth === 0) fail();
  }

  $('#year').textContent = String(new Date().getFullYear());

  // Best-effort live number; the static portfolio remains complete without it.
  fetch('https://api.github.com/users/Kartik-Mathur', { headers: { Accept: 'application/vnd.github+json' } })
    .then(r => r.ok ? r.json() : Promise.reject(new Error('GitHub API not available')))
    .then(data => { if (Number.isInteger(data.public_repos) && data.public_repos > 0) $('#repo-count').textContent = data.public_repos + '+'; })
    .catch(() => {});

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); obs.unobserve(entry.target); } });
    }, { threshold: 0.10, rootMargin: '0px 0px -25px 0px' });
    document.querySelectorAll('.section-head, .repo-card, .approach-card, .article, .event-card').forEach(el => { el.classList.add('reveal'); observer.observe(el); });
  }
})();
