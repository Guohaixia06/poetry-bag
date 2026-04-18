const THEME_KEY = 'poetryTheme'

export const ThemeManager = {
  themes: {
    light: {
      name: '浅色模式',
      icon: '🌞'
    },
    dark: {
      name: '深色模式',
      icon: '🌙'
    }
  },

  getCurrentTheme() {
    const saved = localStorage.getItem(THEME_KEY)
    if (saved && this.themes[saved]) {
      return saved
    }
    return 'light'
  },

  setTheme(theme) {
    if (this.themes[theme]) {
      localStorage.setItem(THEME_KEY, theme)
      this.applyTheme(theme)
      return true
    }
    return false
  },

  toggleTheme() {
    const current = this.getCurrentTheme()
    const newTheme = current === 'light' ? 'dark' : 'light'
    this.setTheme(newTheme)
    return newTheme
  },

  applyTheme(theme) {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  },

  init() {
    const theme = this.getCurrentTheme()
    this.applyTheme(theme)
    return theme
  }
}

export default ThemeManager
