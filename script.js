const songs = [
    { title: "First Song", artist: "Artist A", file: "song1.mp3" },
    { title: "Second Song", artist: "Artist B", file: "song2.mp3" }
  ];

  let index = 0;
  const audio = document.getElementById('audio');
  const title = document.getElementById('title');
  const artist = document.getElementById('artist');
  const progress = document.getElementById('progress');
  const volume = document.getElementById('volume');
  const playPauseBtn = document.getElementById('playPause');

  function loadSong(i) {
    index = i;
    audio.src = songs[i].file;
    title.innerText = songs[i].title;
    artist.innerText = songs[i].artist;
  }

  function togglePlay() {
    if (audio.paused) { audio.play(); playPauseBtn.innerText = "Pause"; }
    else { audio.pause(); playPauseBtn.innerText = "Play"; }
  }

  function nextSong() {
    loadSong((index + 1) % songs.length);
    audio.play(); playPauseBtn.innerText = "Pause";
  }

  function prevSong() {
    loadSong((index - 1 + songs.length) % songs.length);
    audio.play(); playPauseBtn.innerText = "Pause";
  }

  audio.ontimeupdate = () => progress.value = (audio.currentTime / audio.duration) * 100;
  progress.oninput = () => audio.currentTime = (progress.value / 100) * audio.duration;
  volume.oninput = () => audio.volume = volume.value;

  loadSong(index);