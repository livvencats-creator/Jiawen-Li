// Attach click events to all shapes
document.querySelectorAll(".shape").forEach(shape => {
    shape.addEventListener("click", () => {
        const url = shape.getAttribute("data-link");
        if (url) window.location.href = url;
    });
});
