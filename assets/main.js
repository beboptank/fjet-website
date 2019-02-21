document.body.classList.add("fade");
document.addEventListener("DOMContentLoaded", function(e) {
    document.body.classList.remove("fade");
});

document.querySelectorAll('.nav-item').addEventListener("click", pageTransition);

function pageTransition(e) {
    document.body.classList.add("fade");
    document.addEventListener("DOMContentLoaded", function(e) {
        document.body.classList.remove("fade");
    });
}
