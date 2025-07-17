var typed = new Typed('#element', {
    strings: ['Web developer', 'Blockchain learner', 'Cyber security learner', 'Game Developer', 'Digital Designer', 'Chess Enthusiast', 'Flutist'],
    typeSpeed: 160,
    loop: true,
    showCursor:false
});


window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    const progressBar = document.querySelector('.scroll-progress');
    progressBar.style.width = scrollPercent + '%';
  });