let isPreviewOpen = false;
function showImageDetails(imgElement) {
    const previewSection = document.getElementById("imagePreview");
    if (isPreviewOpen) {
        closePreview();
        return;
    }
    const imgSrc = imgElement.src;
    const previewImg = document.getElementById("previewImg");
    const imageInfo = document.getElementById("imageInfo");
    const downloadLink = document.getElementById("downloadLink");
    const imageNameDisplay = document.getElementById("imageName");
    const imageName = imgElement.getAttribute("data-name");
    previewImg.src = imgSrc;
    imageNameDisplay.innerHTML = `Name: ${imageName}`; 

    const image = new Image();
    image.src = imgSrc;
    image.onload = function() {
        const dimensions = `${image.width} x ${image.height}px`;
        const fileName = imgSrc.substring(imgSrc.lastIndexOf('/') + 1);
        imageInfo.innerHTML = `File: ${fileName}<br>Dimensions: ${dimensions}`;
    }
    downloadLink.href = imgSrc;
    downloadLink.download = imgSrc.substring(imgSrc.lastIndexOf('/') + 1);
    previewSection.style.display = 'block';
    isPreviewOpen = true;
}
function closePreview() {
    document.getElementById("imagePreview").style.display = 'none';
    isPreviewOpen = false;
}
