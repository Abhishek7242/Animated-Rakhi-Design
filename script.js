// JavaScript to add dynamic behavior
document.addEventListener('mousemove', (e) => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        const speed = particle.style.animationDuration;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        particle.style.transform = `translate(${x}px, ${y}px)`;
    });
});
