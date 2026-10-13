'use strict';

// Display the visitor's local time; never claim this is a server clock.
const clock = document.getElementById('clock');
const tick = () => {
  if (clock) clock.textContent = new Intl.DateTimeFormat(undefined, {hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(new Date());
};
tick();
setInterval(tick, 1000);

// Decorative, deterministic SVG-free visualizers. No microphone, networking or telemetry.
function generateBars(elementId, count, maxHeight) {
  const element = document.getElementById(elementId);
  if (!element) return;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const bar = document.createElement('i');
    const pattern = Math.abs(Math.sin(i * 0.43) * Math.cos(i * 0.17 + 0.4));
    const envelope = Math.pow(Math.max(0, 1 - Math.abs(i - count * .55) / (count * .62)), 1.3);
    bar.style.height = `${Math.max(3, Math.round((.12 + pattern * envelope) * maxHeight))}px`;
    fragment.appendChild(bar);
  }
  element.appendChild(fragment);
}
generateBars('wave', 42, 48);
generateBars('bars', 65, 60);
