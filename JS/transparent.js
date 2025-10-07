
    document.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 50) { // Ajusta el valor según el momento en que quieres el efecto
            header.classList.add("transparent");
        } else {
            header.classList.remove("transparent");
        }
    });
