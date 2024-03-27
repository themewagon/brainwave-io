/* -------------------------------------------------------------------------- */
/*                    Video Controller                                        */
/* -------------------------------------------------------------------------- */

const videoControllerInit = () => {
  const videoContainer = document.querySelectorAll('[data-video-player-container]');
  if (videoContainer) {
    videoContainer.forEach(container => {
      const videoPlayer = container.querySelector('[data-video-player');
      const playButton = container.querySelector('[data-play-button]');

      const videoPlayed = () => {
        container.classList.toggle('video-player-paused');
        container.classList.toggle('video-player-play');
      };

      const videoPaused = () => {
        container.classList.toggle('video-player-play');
        container.classList.toggle('video-player-paused');
      };
      playButton.addEventListener('click', () => {
        if (videoPlayer.paused) {
          videoPlayer.play();
          videoPaused();
        } else {
          videoPlayer.pause();
          videoPlayed();
        }
      });
      videoPlayer.addEventListener('ended', videoPaused);
    });
  }
};

export default videoControllerInit;
