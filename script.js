const menuButton = document.getElementById("mobileMenu");
const navMenu = document.getElementById("navMenu");
const demoButton = document.getElementById("demoButton");
const terminalLine = document.getElementById("terminalLine");
const toast = document.getElementById("toast");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => navMenu.classList.remove("open"));
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

demoButton.addEventListener("click", () => {
    const messages = [
        "→ Checking repository...",
        "→ Running GitHub Actions workflow...",
        "→ Deploying to NGINX server...",
        "✓ Deployment completed successfully!"
    ];

    demoButton.disabled = true;
    let index = 0;

    const nextMessage = () => {
        terminalLine.textContent = messages[index];
        index++;

        if (index < messages.length) {
            setTimeout(nextMessage, 700);
        } else {
            toast.classList.add("show");
            demoButton.disabled = false;
            setTimeout(() => toast.classList.remove("show"), 3000);
        }
    };

    nextMessage();
});

document.getElementById("year").textContent =
    `© ${new Date().getFullYear()} Demo Project`;
