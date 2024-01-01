// Get all the elements with class name 'myImg'
var imgs = document.querySelectorAll(".myImg");

// Loop through each image
imgs.forEach(function(img) {
    // Get the modal related to this image
    var modal = img.nextElementSibling;

    // Get the modal elements
    var modalImg = modal.querySelector(".modal-content");
    var captionText = modal.querySelector(".caption");

    // Click event for each image
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };

    // Get the <span> element (close button) for this modal
    var span = modal.querySelector(".close");

    // Click event to close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };
});

