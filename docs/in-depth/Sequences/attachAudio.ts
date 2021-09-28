import {getProject} from "@theatre/core"

const sheet = getProject("Demo").sheet("Scene")
const sequence = sheet.sequence

declare var someAudioBuffer: AudioBuffer

// #region simple
console.log("Loading audio...")
sheet.sequence.attachAudio({source: "https://localhost/audio.ogg"}).then(() => {
  console.log("Audio loaded!")
})
// #endregion simple

// #region advanced
const audioContext = new AudioContext() // create an AudioContext using the Audio API
const audioBuffer: AudioBuffer = someAudioBuffer // create an AudioBuffer from your audio file or generate one on the fly
const destinationNode = audioContext.destination // the audio output.

sheet.sequence
  .attachAudio({
    source: audioBuffer,
    audioContext,
    destinationNode,
  })
  .then(() => {
    sequence.play()
  })
// #endregion advanced
