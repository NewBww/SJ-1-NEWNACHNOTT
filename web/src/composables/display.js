const useValidateDisplay = (display) => {
  if (display === 'N' || display === 'Y') return display
  return 'N'
}
class Display {
  constructor(display) {
    this.name = useValidateDisplay(display)
  }
  toBoolean() {
    if (this.name === 'N') return false
    if (this.name === 'Y') return true
  }
}

export { useValidateDisplay, Display }
