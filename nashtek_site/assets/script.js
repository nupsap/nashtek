function toggleNav(){
  const el = document.getElementById('navLinks');
  if(!el) return;
  const isShown = getComputedStyle(el).display !== 'none';
  el.style.display = isShown ? 'none' : 'flex';
}