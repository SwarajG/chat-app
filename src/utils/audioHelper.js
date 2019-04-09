const recordAudio = () =>
  new Promise(async resolve => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks = [];

    const listenerHelper = event => {
      audioChunks.push(event.data);
    };

    const stopListener = (resolve) => {
      const audioBlob = new Blob(audioChunks);
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      const play = () => audio.play();
      mediaRecorder.removeEventListener('dataavailable', listenerHelper);
      stream.getTracks().forEach(track => track.stop());
      resolve({ audioBlob, audioUrl, play });
    };

    mediaRecorder.addEventListener('dataavailable', listenerHelper);

    const start = () => mediaRecorder.start();

    const stop = () =>
      new Promise(resolve => {
        mediaRecorder.addEventListener('stop', () => stopListener(resolve));
        mediaRecorder.stop();
      });

    resolve({ start, stop });
  });

export { recordAudio };