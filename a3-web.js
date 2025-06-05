  const cursor = document.querySelector('.cursor');

    window.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

document.addEventListener("DOMContentLoaded", () => {
    const highlightedWords = document.querySelectorAll('.highlight');
    let triggered = false;

    window.addEventListener('scroll', () => {
        if (!triggered) {
            highlightedWords.forEach(span => {
                span.classList.add('active');
            });
            triggered = true; // prevent retrigger
        }
    });
});