document.body.classList.add("fade");
document.addEventListener("DOMContentLoaded", function(e) {
    document.body.classList.remove("fade");
});

let navItemSelection = document.querySelectorAll('.nav-item');

navItemSelection.addEventListener('click', pageTransition);

function pageTransition(e) {
    document.body.classList.add("fade");
    document.addEventListener("DOMContentLoaded", function(e) {
        document.body.classList.remove("fade");
    });
}
