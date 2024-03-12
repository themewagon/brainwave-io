const videoControllerInit = () => {
  const videoPlayer = document.querySelector('[data-video-player');
  const playButton = document.querySelector('[data-play-button');
  const playIcon = document.querySelector('[data-play-icon');
  const pauseIcon = document.querySelector('[data-pause-icon');
  const overlay = document.querySelector('[data-overlay]');

  pauseIcon.style.display = 'none';

  const buttonVisible = () => {
    playButton.style.display = 'inline';
    // overlay.style.display = 'inline';
  };

  const buttonHidden = () => {
    // overlay.style.display = 'none';
    setTimeout(() => {
      if (!videoPlayer.paused) {
        playButton.style.display = 'none';
      }
    }, 2000);
  };

  playButton.addEventListener('click', () => {
    if (videoPlayer.paused) {
      videoPlayer.play();
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'inline';
    } else {
      videoPlayer.pause();
      playIcon.style.display = 'inline';
      pauseIcon.style.display = 'none';
    }
  });

  playButton.addEventListener('mouseover', () => {
    overlay.style.opacity = '0.4';
  });
  playButton.addEventListener('mouseout', () => {
    overlay.style.opacity = '0';
  });

  videoPlayer.addEventListener('mouseenter', buttonVisible);
  videoPlayer.addEventListener('mouseleave', buttonHidden);
  // videoPlayer.addEventListener('touchstart', buttonVisible);
  // videoPlayer.addEventListener('touchend', buttonHidden);

  videoPlayer.addEventListener('ended', () => {
    playIcon.style.display = 'inline';
    pauseIcon.style.display = 'none';
    playButton.style.display = 'block';
  });
};

export default videoControllerInit;
