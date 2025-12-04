// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {

    // Add hover effect for canvas boxes (optional, can enhance CSS hover)
    const boxes = document.querySelectorAll(".canvas-box");
    boxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
            box.style.transform = "translateY(-5px)";
            box.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
        });
        box.addEventListener("mouseleave", () => {
            box.style.transform = "translateY(0)";
            box.style.boxShadow = "0 6px 18px rgba(0,0,0,0.1)";
        });
    });

    // Collapse/Expand feature for box content
    boxes.forEach(box => {
        const header = box.querySelector(".box-header");
        const content = box.querySelector(".box-content");
        if (header && content) {
            // Initial state
            content.style.transition = "max-height 0.4s ease, padding 0.4s ease";
            content.style.overflow = "hidden";
            content.style.maxHeight = content.scrollHeight + "px"; // fully open

            header.style.cursor = "pointer";
            header.addEventListener("click", () => {
                if (content.style.maxHeight === "0px") {
                    content.style.maxHeight = content.scrollHeight + "px";
                    content.style.padding = "20px";
                } else {
                    content.style.maxHeight = "0px";
                    content.style.padding = "0 20px";
                }
            });
        }
    });

    // Smooth scroll to Value Proposition when clicking a box (optional)
    boxes.forEach(box => {
        box.addEventListener("dblclick", () => {
            const valueProp = document.querySelector(".value-proposition");
            if (valueProp) {
                valueProp.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Add subtle fade-in effect on scroll
    const fadeBoxes = document.querySelectorAll(".canvas-box, .value-proposition");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.1
    });

    fadeBoxes.forEach(box => {
        box.style.opacity = "0";
        box.style.transform = "translateY(20px)";
        box.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(box);
    });

});
