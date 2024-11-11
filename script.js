// Parallax effect for mouse movement on the landing section
document.addEventListener("mousemove", parallaxEffect);

function parallaxEffect(e) {
    const { clientX: mouseX, clientY: mouseY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = (mouseX - centerX) * 0.02;
    const moveY = (mouseY - centerY) * 0.02;

    document.querySelector("#landing").style.transform = `translate(${moveX}px, ${moveY}px)`;
}

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 70, // Offset for sticky navbar
            behavior: 'smooth'
        });
    });
});

// Rotate skills display on the landing page
const skills = ["Coding", "Problem-Solving", "Climate Change Enthusiast"];
let currentSkillIndex = 0;
const skillDisplay = document.querySelector(".skills");

function rotateSkills() {
    currentSkillIndex = (currentSkillIndex + 1) % skills.length;
    skillDisplay.innerHTML = `<span class="skill">${skills[currentSkillIndex]}</span>`;
}

setInterval(rotateSkills, 2000); // Changes skill every 2 seconds
