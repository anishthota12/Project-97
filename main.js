function settings() {
    window.location = "settings.html";
}

function update() {
    if (localStorage.getItem("Background Color") != null) {
        backgroundColor = localStorage.getItem("Background Color");
        borderColor = localStorage.getItem("Border Color");
        sectionColor = localStorage.getItem("Section Color");
        textColor = localStorage.getItem("Text Color");
        var updated = document.querySelector("body");
        updated.style.setProperty("--backgroundColor", backgroundColor);
        updated.style.setProperty("--borderColor", borderColor);
        updated.style.setProperty("--sectionColor", sectionColor);
        updated.style.setProperty("--textColor", textColor);
    }
}

function scrollCauses() {
    document.getElementById('causesSectionPart1').scrollIntoView();
}

function scrollEffects() {
    document.getElementById('effectsSectionPart1').scrollIntoView();
}

function alternate() {
    window.location = "alternates.html";
}

setInterval(clearScrollButton, 1);

function clearScrollButton() {
    scrollPercentage = window.scrollY;
    newscrollPercentage = scrollPercentage / 10.6;
    document.getElementById("scrollToTheTop").style.opacity = newscrollPercentage + "%";
}

function scrollToTheTop() {
    document.getElementById('header').scrollIntoView();
}