//<scrip src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"  crossorigin="anonymous"></script>


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




//base 

//forum page

document.addEventListener("DOMContentLoaded", function() {
// Initialize EmailJS
    emailjs.init("CUSmzsjmmsxpQ0xR_");

    // block numbers in name
    document.getElementById("name").addEventListener("input", function () {
        this.value = this.value.replace(/[0-9]/g, "");
    });

    // block letters in phone and allow only + at the beginning
    document.getElementById("phone").addEventListener("input", function () {
        this.value = this.value
            .replace(/[^\d+]/g, '')
            .replace(/(?!^\+)\+/g, '');
    });

    // handle form submission
    document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault();

        emailjs.send("service_dejae9t", "template_abc123", {
            user_name: document.getElementById("name").value,
            user_company: document.getElementById("company").value,
            user_phone: document.getElementById("phone").value,
            user_email: document.getElementById("email").value,
            user_subject: document.getElementById("subject").value,
            message: document.getElementById("text-area").value
        })
        .then(() => {
            alert("✅ Email inviata con successo!");
            this.reset();
        })
        .catch(err => {
            alert("❌ Errore nell'invio: " + JSON.stringify(err));
        });
    });



    ///Fill all the fields
const nameInput = document.getElementById("name");
const form = document.getElementById("contactForm");

});






