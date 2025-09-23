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



/*

//how to scend email with account EmailJS

emailjs.init("service_dejae9t");


*/


    // Inizializza EmailJS con la tua Public Key
    //emailjs.init("LA_TUA_PUBLIC_KEY");
    emailjs.init("CUSmzsjmmsxpQ0xR_");


    
//rules from forum
//block number in the name field from forum


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("name").addEventListener("input", function () {
    this.value = this.value.replace(/[0-9]/g, "");
});

//block letters in the phone field from forum

document.getElementById("phone").addEventListener("input", function () {
    this.value = this.value
    .replace(/[^\d+]/g, '')
    // allow only + at the beginning
    .replace(/(?!^\+)\+/g, '');
});
});


    //HOW TO SEND EMAIL WITH EMAILJS (from forum)
    document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault(); // blocca refresh

        // Invia direttamente usando send (senza creare template nuovo)
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
        this.reset(); // clear form
        })
        .catch(err => {
        alert("❌ Errore nell'invio: " + JSON.stringify(err));
        });
    });

