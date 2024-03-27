/* -------------------------------------------------------------------------- */
/*                    Video Controller                                        */
/* -------------------------------------------------------------------------- */

const videoControllerInit = () => {
  const videoContainer = document.querySelectorAll('[data-video-player-container]');
  if (videoContainer) {
    videoContainer.forEach(parent => {
      const videoPlayer = parent.querySelector('[data-video-player');
      const playButton = parent.querySelector('[data-play-button]');

      const videoPlayedState = () => {
        parent.classList.toggle('video-player-paused');
        parent.classList.toggle('video-player-play');
      };

      const videoPuasedState = () => {
        parent.classList.toggle('video-player-play');
        parent.classList.toggle('video-player-paused');
      };
      playButton.addEventListener('click', () => {
        if (videoPlayer.paused) {
          videoPlayer.play();
          videoPuasedState();
        } else {
          videoPlayer.pause();
          videoPlayedState();
        }
      });
      videoPlayer.addEventListener('ended', videoPuasedState);
    });
  }
};

export default videoControllerInit;
