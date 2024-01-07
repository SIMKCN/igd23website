document.addEventListener("DOMContentLoaded", function () {
    var dropdownButton = document.querySelector(".dropbtn");
    var dropdownContent = document.querySelector(".dropdown-content");

    dropdownButton.addEventListener("click", function () {
        dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
    });

    document.addEventListener("click", function (event) {
        if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = "none";
        }
    });
});