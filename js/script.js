var typed = new Typed('.typing', {
    strings: ["Data Science and AI"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
})

// Navigation toggle for mobile
const navToggler = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');

if (navToggler && aside) {
    navToggler.addEventListener('click', () => {
        aside.classList.toggle('open');
        navToggler.classList.toggle('open');
    });
}

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        // Close sidebar on mobile when nav item is clicked
        if (window.innerWidth <= 1199 && aside && navToggler) {
            aside.classList.remove('open');
            navToggler.classList.remove('open');
        }
    });
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navItems.forEach(navItem => {
                    navItem.classList.remove('active');
                    if (navItem.getAttribute('href').substring(1) === entry.target.id) {
                        navItem.classList.add('active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(el => {
            if (el.isIntersecting) {
                el.target.classList.add('visible');
                revealObserver.unobserve(el.target);
            }
        });
    }, { threshold: 0.08 });

    const sections = document.querySelectorAll('section.section');
    const inViews = Array.from(sections).map(s => {
        const rect = s.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    });
    sections.forEach((s, i) => {
        if (!inViews[i]) s.classList.add('reveal');
        revealObserver.observe(s);
    });
});

// (function() {
//     emailjs.init('GWbNmnXzdkXtyMcIM'); // Replace 'YOUR_USER_ID' with your EmailJS user ID
// })();

// // Function to send email
// function sendEmail(event) {
//     event.preventDefault();
    
//     var templateParams = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         subject: document.getElementById('subject').value,
//         message: document.getElementById('message').value
//     };
    
//     emailjs.send('service_m7y71lj', 'YOUR_TEMPLATE_ID', templateParams)
//         .then(function(response) {
//             console.log('SUCCESS!', response.status, response.text);
//             alert('Email sent successfully!');
//         }, function(error) {
//             console.log('FAILED...', error);
//             alert('Failed to send email.');
//         });
// }
