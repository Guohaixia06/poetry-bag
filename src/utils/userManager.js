export class UserManager {
  constructor() {
    this.currentUser = null
    this.storageKey = 'poetryBag_users'
    this.currentUserKey = 'poetryBag_currentUser'
    this.init()
  }

  init() {
    try {
      const savedUser = localStorage.getItem(this.currentUserKey)
      if (savedUser) {
        this.currentUser = JSON.parse(savedUser)
      }
    } catch (error) {
      console.error('Error initializing user manager:', error)
    }
  }

  getAllUsers() {
    try {
      const users = localStorage.getItem(this.storageKey)
      return users ? JSON.parse(users) : {}
    } catch (error) {
      console.error('Error getting all users:', error)
      return {}
    }
  }

  saveUsers(users) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(users))
    } catch (error) {
      console.error('Error saving users:', error)
    }
  }

  register(username, password) {
    if (!username || !password) {
      return { success: false, message: '用户名和密码不能为空' }
    }

    if (username.length < 2) {
      return { success: false, message: '用户名至少需要2个字符' }
    }

    if (password.length < 4) {
      return { success: false, message: '密码至少需要4个字符' }
    }

    const users = this.getAllUsers()
    if (users[username]) {
      return { success: false, message: '用户名已存在' }
    }

    users[username] = {
      username,
      password: this.hashPassword(password),
      createdAt: Date.now(),
      lastLoginAt: Date.now()
    }

    this.saveUsers(users)
    return { success: true, message: '注册成功' }
  }

  login(username, password) {
    if (!username || !password) {
      return { success: false, message: '用户名和密码不能为空' }
    }

    const users = this.getAllUsers()
    const user = users[username]

    if (!user) {
      return { success: false, message: '用户名不存在' }
    }

    if (user.password !== this.hashPassword(password)) {
      return { success: false, message: '密码错误' }
    }

    user.lastLoginAt = Date.now()
    users[username] = user
    this.saveUsers(users)

    this.currentUser = { username, lastLoginAt: user.lastLoginAt, createdAt: user.createdAt }
    localStorage.setItem(this.currentUserKey, JSON.stringify(this.currentUser))

    return { success: true, message: '登录成功', user: this.currentUser }
  }

  logout() {
    this.currentUser = null
    localStorage.removeItem(this.currentUserKey)
  }

  isLoggedIn() {
    return this.currentUser !== null
  }

  getCurrentUser() {
    return this.currentUser
  }

  hashPassword(password) {
    let hash = 0
    for (let i = 0; i < password.length; i++) {
      const char = password.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash
    }
    return Math.abs(hash).toString(36)
  }

  syncUserData(dataType, data) {
    if (!this.currentUser) return false

    try {
      const key = `poetryBag_${this.currentUser.username}_${dataType}`
      localStorage.setItem(key, JSON.stringify({
        data,
        syncedAt: Date.now()
      }))
      return true
    } catch (error) {
      console.error('Error syncing user data:', error)
      return false
    }
  }

  getSyncData(dataType) {
    if (!this.currentUser) return null

    try {
      const key = `poetryBag_${this.currentUser.username}_${dataType}`
      const data = localStorage.getItem(key)
      if (data) {
        return JSON.parse(data)
      }
      return null
    } catch (error) {
      console.error('Error getting sync data:', error)
      return null
    }
  }
}

export const userManager = new UserManager()
