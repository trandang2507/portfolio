function showPage( id ){
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

const sections = document.querySelectorAll(".page-sections");
const navButtons = document.querySelectorAll(".nav-link button");

const observe = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navButtons.forEach(button => {
                button.classList.remove("button-active");
            });

            const activeButton = document.querySelector(
                `button[onclick="showPage('${entry.target.id}')"]`
            );

            if (activeButton) {
                activeButton.classList.add("button-active");
            }
        }
    });
},{
    threshold: 0.5
}
);

sections.forEach(section => observe.observe(section));