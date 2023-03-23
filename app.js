gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav-item a");
const activeNav = document.querySelector(".active-nav");

links.forEach((link) => {
    link.addEventListener("click", () => {
        //Change color of navs
        gsap.to(links, { color: "#252525" });
        if (document.activeElement === link) {
            gsap.to(link, { color: "#385ae0" });
        }

        //Move the line
        const state = Flip.getState(activeNav);
        link.appendChild(activeNav);
        Flip.from(state, {
            duration: 1.25,
            absolute: true,
            ease: "elastic.out(1, 0.5)",
        });
    });

    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
            //Get state for the flip
            const state = Flip.getState(cards);

            //Add active class to clicked one and add inactive to the others
            const isCardActive = card.classList.contains("active");

            cards.forEach((otherCard, otherIndex) => {
                otherCard.classList.remove("active");
                otherCard.classList.remove("is-inactive");
                if (!isCardActive && index !== otherIndex) {
                    otherCard.classList.add("is-inactive");
                }
            });

            if (!isCardActive) card.classList.add("active");

            Flip.from(state, {
                duration: 0.7,
                ease: 'Expo.out',
                absolute: true,
            })
        });
    });
});
