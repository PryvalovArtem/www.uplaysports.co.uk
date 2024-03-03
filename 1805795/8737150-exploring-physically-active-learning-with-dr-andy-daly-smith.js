
  var containerId = "buzzsprout-player-8737150"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1805795/8737150-exploring-physically-active-learning-with-dr-andy-daly-smith?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1805795%2F8737150-exploring-physically-active-learning-with-dr-andy-daly-smith.js%3Fcontainer_id%3Dbuzzsprout-player-8737150%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Primary PE Huddle, Exploring Physically Active Learning with Dr Andy Daly-Smith\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

