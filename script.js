$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        function bgChanger() {
            if (this.hoverY > this.innerHeight / 2) {
                document.body.classList.add("bg-active");

            } else {
                document.body.classList.remove("bg-active");
            }

        }

        window.addEventListener("scroll", bgChanger);

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Photographer", "Developer", "Blogger", "Designer", "Freelancer", "Dreamer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Photographer", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //contact reset
    window.onbeforeunload = () => {
        for (const form of document.getElementsByTagName('form')) {
            form.reset();
        }
    }


    //thnank you submission
    var form = document.getElementById("my-form");

    async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById("status");
        var data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "Thanks for your submission!";
                form.reset()
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                    } else {
                        status.innerHTML = "Oops! There was a problem submitting your form"
                    }
                })
            }
        }).catch(error => {
            status.innerHTML = "Oops! There was a problem submitting your form"
        });
    }
    form.addEventListener("submit", handleSubmit)





    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000, // Fix the typo here
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1, nav: false },
            600: { items: 2, nav: false },
            1000: { items: 3, nav: false }
        }
    });
});