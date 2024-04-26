const cb = () => {
  const l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = '/scss/critical-min.css';
  const h = document.getElementsByTagName('head')[0];
  h.parentNode.insertBefore(l, h);
};
const raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
if (raf) raf(cb);
else window.addEventListener('load', cb);
