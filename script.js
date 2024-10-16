let isPreviewOpen = false;
let currentIndex = 0;
let galleryImages = []; 

window.onload = function() {
    galleryImages = Array.from(document.querySelectorAll('.gallery-image'));
};

function showImageDetails(imgElement) {
    const previewSection = document.getElementById("imagePreview");

    currentIndex = galleryImages.indexOf(imgElement); // Get index of clicked image

    if (isPreviewOpen) {
        closePreview();
        return;
    }

    updatePreviewImage(); 

    previewSection.style.display = 'block'; // Display preview
    isPreviewOpen = true;
}

function updatePreviewImage() {
    const imgSrc = galleryImages[currentIndex].src;
    const imgName = galleryImages[currentIndex].getAttribute("data-name"); // Get the data-name attribute
    const previewImg = document.getElementById("previewImg");
    const imageInfo = document.getElementById("imageInfo");
    const downloadLink = document.getElementById("downloadLink");
    const imageNameDisplay = document.getElementById("imageName");


    previewImg.src = imgSrc;
    imageNameDisplay.innerHTML = `Name: ${imgName}`;

    const fileName = imgSrc.substring(imgSrc.lastIndexOf('/') + 1);
    const image = new Image();
    image.src = imgSrc;
    image.onload = function() {
        const dimensions = `${image.width} x ${image.height}px`;
        imageInfo.innerHTML = `File: ${fileName} <br> Dimensions: ${dimensions}`;
    };
    downloadLink.href = imgSrc;
    downloadLink.download = fileName;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % galleryImages.length; // Loop to the start if at the last image
    updatePreviewImage();
}


function prevImage() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length; // Loop to the end if at the first image
    updatePreviewImage();
}

function closePreview() {
    document.getElementById("imagePreview").style.display = 'none';
    isPreviewOpen = false;
}
