import type {ISequence} from "@theatre/core"

declare var sequence: ISequence

// #region position
console.log(sequence.position) // logs the current position of the sequence
sequence.position = 0 // jumps to the beginning of the sequence
sequence.position = 3 // progresses the sequence to 3 (in time-based sequences, that would be 3 seconds)
// #endregion position

// #region play-basic
// play the sequence from the current position to sequence.length
sequence.play().then((finished: boolean) => {
  // It returns a promise resolves when the playback is finished or interrupted
  if (finished) {
    console.log("Playback finished")
  } else {
    console.log("Playback interrupted")
  }
})
// #endregion play-basic

// #region play-custom
// play at 2x speed
sequence.play({rate: 2})

// play 1/10 speed
sequence.play({rate: 0.1})

// play from 1s to 3s.
sequence.position = 0
sequence.play({range: [1, 3]})

// *actuall* play from 2s to 3s, because the previous position is inside the given range
sequence.position = 2
sequence.play({range: [1, 3]})

// play 10 times
sequence.play({iterationCount: 10})

// play 10 times, in the normal direction
sequence.play({iterationCount: 10, direction: "normal"})
// play 10 times, in the reverse direction
sequence.play({iterationCount: 10, direction: "reverse"})
// play 10 times, alternating the direction
sequence.play({iterationCount: 10, direction: "alternate"})
// play 10 times, alternating the direction, starting in the reverse direction
sequence.play({iterationCount: 10, direction: "alternateReverse"})

// #endregion play-custom

// #region pause
sequence.pause()

// #endregion pause
