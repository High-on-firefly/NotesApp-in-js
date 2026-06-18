window.addEventListener("load", () => {
    const spiralPath = document.querySelector(".spiral-path");

    const pathLength = spiralPath.getTotalLength();

    spiralPath.style.strokeDasharray = pathLength;
    spiralPath.style.strokeDashoffset = 0;

    requestAnimationFrame(() => {
        spiralPath.style.strokeDashoffset = pathLength;
        spiralPath.style.strokeWidth = 6;
    });
});