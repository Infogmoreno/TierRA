// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
  } else {
    progressBar.classList.remove('hide');
    if (event.detail.totalProgress === 0) {
      event.target.querySelector('.center-pre-prompt').classList.add('hide');
    }
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);

let btn_interior = document.querySelector('#interior');
let btn_contraer = document.querySelector('#contraer');
let tierra = document.querySelector("#tierra");                                          
const modelViewer = document.querySelector('#tierra');

 btn_interior.addEventListener("click", e => {
        modelViewer.animationName = modelViewer.animationName === 'expandir';
        modelViewer.play();
              
      })
