export class SoundEffect {
  constructor() {
    this.audioContext = null
  }

  initAudio() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
    }
    return this.audioContext
  }

  playCorrectSound() {
    const ctx = this.initAudio()
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    oscillator.frequency.setValueAtTime(523.25, ctx.currentTime)
    oscillator.frequency.setValueAtTime(659.25, ctx.currentTime)
    oscillator.frequency.setValueAtTime(783.99, ctx.currentTime)

    gainNode.gain.setValueAtTime(0.3, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3)

    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.3)
  }

  playWrongSound() {
    const ctx = this.initAudio()
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    oscillator.frequency.setValueAtTime(200, ctx.currentTime)
    oscillator.frequency.setValueAtTime(150, ctx.currentTime)

    gainNode.gain.setValueAtTime(0.3, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3)

    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.3)
  }

  playSuccessSound() {
    const ctx = this.initAudio()
    const notes = [523.25, 659.25, 783.99, 1046.50]

    notes.forEach((freq, index) => {
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)

      oscillator.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.15)
      gainNode.gain.setValueAtTime(0, ctx.currentTime + index * 0.15)
      gainNode.gain.linearRampToValueAtTime(0.3, ctx.currentTime + index * 0.15 + 0.05)
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + index * 0.15 + 0.2)

      oscillator.start(ctx.currentTime + index * 0.15)
      oscillator.stop(ctx.currentTime + index * 0.15 + 0.2)
    })
  }

  playGameOverSound() {
    const ctx = this.initAudio()
    const notes = [392, 349.23, 329.63, 293.66]

    notes.forEach((freq, index) => {
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)

      oscillator.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.2)
      gainNode.gain.setValueAtTime(0, ctx.currentTime + index * 0.2)
      gainNode.gain.linearRampToValueAtTime(0.3, ctx.currentTime + index * 0.2 + 0.05)
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + index * 0.2 + 0.25)

      oscillator.start(ctx.currentTime + index * 0.2)
      oscillator.stop(ctx.currentTime + index * 0.2 + 0.25)
    })
  }

  playShuffleSound() {
    const ctx = this.initAudio()
    const notes = [261.63, 293.66, 329.63, 349.23, 392, 440, 493.88, 523.25]

    notes.forEach((freq, index) => {
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)

      oscillator.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.05)
      gainNode.gain.setValueAtTime(0, ctx.currentTime + index * 0.05)
      gainNode.gain.linearRampToValueAtTime(0.2, ctx.currentTime + index * 0.05 + 0.02)
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + index * 0.05 + 0.08)

      oscillator.start(ctx.currentTime + index * 0.05)
      oscillator.stop(ctx.currentTime + index * 0.05 + 0.08)
    })
  }

  playExplodeSound() {
    const ctx = this.initAudio()
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    oscillator.frequency.setValueAtTime(440, ctx.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.3)

    gainNode.gain.setValueAtTime(0, ctx.currentTime)
    gainNode.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 0.05)
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3)

    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.3)
  }
}

export const soundEffect = new SoundEffect()