const progessbar = document.getElementsByClassName
("progess-bar") [0]

 setInterval (() => {
    const computerStyle = getComputedStyle(progessbar)
    const width = parseFloat(computerStyle.getPropertyValue("--width")) || 0
    progessbar.style.setProperty("--width", width + .1)
}, 5)




