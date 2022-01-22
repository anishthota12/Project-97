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
    }
}

function alternatesCheckBoxes() {
    firstCheckBox = document.getElementById("firstCheckBox");
    secondCheckBox = document.getElementById("secondCheckBox");
    thirdCheckBox = document.getElementById("thirdCheckBox");
    fourthCheckBox = document.getElementById("fourthCheckBox");
    fifthCheckBox = document.getElementById("fifthCheckBox");
    if (firstCheckBox.checked) {
        document.getElementById("alternateSectionItem1").style.display = "inline";
    }
    else {
        document.getElementById("alternateSectionItem1").style.display = "none";
    }
    if (secondCheckBox.checked) {
        document.getElementById("alternateSectionItem2").style.display = "inline";
    }
    else {
        document.getElementById("alternateSectionItem2").style.display = "none";
    }
    if (thirdCheckBox.checked) {
        document.getElementById("alternateSectionItem3").style.display = "inline";
    }
    else {
        document.getElementById("alternateSectionItem3").style.display = "none";
    }
    if (fourthCheckBox.checked) {
        document.getElementById("alternateSectionItem4").style.display = "inline";
    }
    else {
        document.getElementById("alternateSectionItem4").style.display = "none";
    }
    if (fifthCheckBox.checked) {
        document.getElementById("alternateSectionItem5").style.display = "inline";
    }
    else {
        document.getElementById("alternateSectionItem5").style.display = "none";
    }
    
}

function back() {
    window.location = "index.html";
}