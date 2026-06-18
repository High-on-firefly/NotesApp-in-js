window.addEventListener("load", () => {
    const svgPath = document.querySelector(".svg-path");

    const pathLength = svgPath.getTotalLength();

    svgPath.style.strokeDasharray = pathLength;
    svgPath.style.strokeDashoffset = 0;

    requestAnimationFrame(() => {
        svgPath.style.strokeDashoffset = -pathLength;
        svgPath.style.strokeWidth = 10;
    });
});