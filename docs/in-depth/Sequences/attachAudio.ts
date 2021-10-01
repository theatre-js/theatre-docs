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

// #region provide-graph
const audioContext = new AudioContext() // create an AudioContext using the Audio API
const audioBuffer: AudioBuffer = someAudioBuffer // create an AudioBuffer from your audio file or generate one on the fly
const destinationNode = audioContext.destination // the audio output.

sheet.sequence
  .attachAudio({
    source: audioBuffer,
    audioContext,
    destinationNode,
  })
  // this promise resolves immediately as everything is already provided
  .then(() => {
    sequence.play()
  })
// #endregion provide-graph

// #region reuse-graph

sheet.sequence
  .attachAudio({
    source: "/music.mp3",
  })
  .then((graph) => {
    // this is the audioContext that the sequence created.
    const audioContext = graph.audioContext
    // this is the main gainNode that the sequence will feed its audio into
    const sequenceGain = graph.gainNode
    // let's disconnect it from graph.destinationNode so we can feed it into our own graph.
    // at this point, audio will be inaudible
    sequenceGain.disconnect()
    // create our own GainNode
    const loweredGain = audioContext.createGain()
    // lower its volume to 10%
    loweredGain.gain.setValueAtTime(0.1, audioContext.currentTime)
    // connect the sequence's gain to our lowered gain
    sequenceGain.connect(loweredGain)
    // and connect the lower gain to the audioContext's destination
    loweredGain.connect(audioContext.destination)
    // now sequence's audio will be audible at 10% volume
  })
// #endregion reuse-graph
