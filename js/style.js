<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"  crossorigin="anonymous"></script>


const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));


//message scroll front-end and back-end
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});


//animate on scroll
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                const el = entry.target;
                const animationClass = el.dataset.animate;
                el.classList.add("animate__animated", animationClass);
                obs.unobserve(el); // animazione una volta sola
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});

