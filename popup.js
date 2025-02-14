document.getElementById("seekButton").addEventListener("click", function() {
    let time = document.getElementById("seekTime").value;
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: seekVideo,
        args: [time]
      });
    });
  });
  
  function seekVideo(time) {
    let video = document.querySelector("video");
    if (video) {
      video.currentTime = parseFloat(time);
    }
  }
  