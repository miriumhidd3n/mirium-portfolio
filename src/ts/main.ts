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