const year = document.querySelector('#current-year');

if (year) {
  year.textContent = new Date().getFullYear();
}

const flowPath = document.querySelector('#flow-path');
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

if (flowPath && !motionQuery.matches) {
  document.addEventListener('pointermove', (event) => {
    const horizontal = (event.clientX / window.innerWidth - 0.5) * 10;
    const vertical = (event.clientY / window.innerHeight - 0.5) * 10;
    flowPath.style.transform = `translate(${horizontal}px, ${vertical}px)`;
  }, { passive: true });
}
