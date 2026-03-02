document.addEventListener("DOMContentLoaded", () => {

  const videoBtn = document.getElementById("videoBtn");
  const imageBtn = document.getElementById("imageBtn");
  const indicator = document.getElementById("toggleIndicator");

  const uploadIcon = document.getElementById("uploadIcon");
  const uploadTitle = document.getElementById("uploadTitle");
  const uploadText = document.getElementById("uploadText");

  const browseBtn = document.getElementById("browseBtn");
  const fileInput = document.getElementById("fileInput");

  if (!videoBtn || !imageBtn || !indicator) return;

  function imageMode() {
    indicator.style.transform = "translateX(100%)";
    imageBtn.classList.add("active");
    videoBtn.classList.remove("active");
    uploadIcon.textContent = "🖼";
    uploadTitle.textContent = "Drag and drop your image here";
    uploadText.textContent = "Supports JPG, PNG, WebP (max 50MB)";
    fileInput.accept = "image/*";
  }

  function videoMode() {
    indicator.style.transform = "translateX(0)";
    videoBtn.classList.add("active");
    imageBtn.classList.remove("active");
    uploadIcon.textContent = "🎥";
    uploadTitle.textContent = "Drag and drop your video here";
    uploadText.textContent = "Supports MP4, AVI, MOV, WebM (max 500MB)";
    fileInput.accept = "video/*";
  }

  imageMode();
  imageBtn.onclick = imageMode;
  videoBtn.onclick = videoMode;

  browseBtn.onclick = () => fileInput.click();

  fileInput.onchange = () => {
    if (fileInput.files.length) {
      uploadTitle.textContent = "File selected";
      uploadText.textContent = fileInput.files[0].name;
    }
  };

  const reveals = document.querySelectorAll(".reveal");
  const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.85;
    reveals.forEach(el => {
      if (el.getBoundingClientRect().top < trigger) {
        el.classList.add("active");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

});
