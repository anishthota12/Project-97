function update() {
    if (localStorage.getItem("Background Color") != null) {
        bgColor = localStorage.getItem("Background Color");
        borColor = localStorage.getItem("Border Color");
        secColor = localStorage.getItem("Section Color");
        texColor = localStorage.getItem("Text Color");
        var updatedStyles = document.querySelector("body");
        updatedStyles.style.setProperty("--backgroundColor", bgColor);
        updatedStyles.style.setProperty("--borderColor", borColor);
        updatedStyles.style.setProperty("--sectionColor", secColor);
        updatedStyles.style.setProperty("--textColor", texColor);
        console.log("Background: " + bgColor + ", Border: " + borColor + ", Section: " + secColor + ", Text: " + texColor);
        document.getElementById("backgroundColorSetting").value = bgColor;
        document.getElementById("borderColorSetting").value = borColor;
        document.getElementById("sectionColorSetting").value = secColor;
        document.getElementById("textColorSetting").value = texColor;
    }
}

function onChange() {
    newBackgroundColor = document.getElementById("backgroundColorSetting").value;
    newBorderColor = document.getElementById("borderColorSetting").value;
    newSectionColor = document.getElementById("sectionColorSetting").value;
    newTextColor = document.getElementById("textColorSetting").value;
    var variables = document.querySelector("body");
    variables.style.setProperty("--backgroundColor", newBackgroundColor);
    variables.style.setProperty("--borderColor", newBorderColor);
    variables.style.setProperty("--sectionColor", newSectionColor);
    variables.style.setProperty("--textColor", newTextColor);
    console.log(newBackgroundColor);
    console.log(newBorderColor);
    console.log(newSectionColor);
    console.log(newTextColor);
    localStorage.setItem("Background Color", newBackgroundColor);
    localStorage.setItem("Border Color", newBorderColor);
    localStorage.setItem("Section Color", newSectionColor);
    localStorage.setItem("Text Color", newTextColor);
}

function back() {
    window.location = "index.html";
}