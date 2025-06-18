const uploadInput = document.getElementById("upload");
const video = document.getElementById("video");

// Handle user video upload
uploadInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const fileURL = URL.createObjectURL(file);
    video.src = fileURL;
    video.load();
    video.play();
  }
});

// Change playback speed
function setSpeed(speed) {
  video.playbackRate = speed;
}
