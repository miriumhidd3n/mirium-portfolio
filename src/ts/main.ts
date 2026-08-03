console.log("MIRIUM.HIDD3N // TYPESCRIPT ONLINE");

const bootScreen = document.getElementById("boot-screen");

console.log("Boot screen element:", bootScreen);

setTimeout(() => {
    console.log("Removing boot screen...");

    if (bootScreen) {
        bootScreen.style.opacity = "0";
        bootScreen.style.visibility = "hidden";
        bootScreen.style.pointerEvents = "none";
    }
}, 3000);

// =========================================================
// NAVIGATION SCROLL STATE
// =========================================================

const siteNav = document.getElementById("site-nav");

if (siteNav) {

    const updateNavigationState = (): void => {

        if (window.scrollY <= 10) {

            siteNav.classList.add("at-top");

        } else {

            siteNav.classList.remove("at-top");

        }

    };


    window.addEventListener(
        "scroll",
        updateNavigationState,
        { passive: true }
    );


    updateNavigationState();

}

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("page-ready");


    const projectLinks =
        document.querySelectorAll<HTMLAnchorElement>(
            'a[href*="/projects/"]'
        );


    projectLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const href = link.getAttribute("href");

            if (!href) {
                return;
            }

            event.preventDefault();

            document.body.classList.add("page-leaving");

            setTimeout(() => {

                window.location.href = href;

            }, 500);

        });

    });

});