export class CacheManager {
  constructor() {
    this.cache = new Map()
    this.maxCacheSize = 50
  }

  set(key, value, ttl = 300000) {
    if (this.cache.size >= this.maxCacheSize) {
      const firstKey = this.cache.keys().next().value
      this.cache.delete(firstKey)
    }

    this.cache.set(key, {
      value,
      expiresAt: Date.now() + ttl
    })
  }

  get(key) {
    const item = this.cache.get(key)
    if (!item) return null

    if (Date.now() > item.expiresAt) {
      this.cache.delete(key)
      return null
    }

    return item.value
  }

  delete(key) {
    this.cache.delete(key)
  }

  clear() {
    this.cache.clear()
  }

  has(key) {
    const item = this.cache.get(key)
    if (!item) return false

    if (Date.now() > item.expiresAt) {
      this.cache.delete(key)
      return false
    }

    return true
  }
}

export const cacheManager = new CacheManager()

export function debounce(func, wait = 300) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export function throttle(func, limit = 300) {
  let inThrottle
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

export class StorageOptimizer {
  constructor() {
    this.writeQueue = []
    this.isWriting = false
  }

  queueWrite(key, value) {
    const existingIndex = this.writeQueue.findIndex(item => item.key === key)
    if (existingIndex !== -1) {
      this.writeQueue[existingIndex].value = value
    } else {
      this.writeQueue.push({ key, value })
    }
    this.processQueue()
  }

  async processQueue() {
    if (this.isWriting || this.writeQueue.length === 0) return

    this.isWriting = true
    const batch = this.writeQueue.splice(0, 5)

    try {
      batch.forEach(({ key, value }) => {
        localStorage.setItem(key, JSON.stringify(value))
      })
    } catch (error) {
      console.error('Error writing to localStorage:', error)
    }

    this.isWriting = false
    if (this.writeQueue.length > 0) {
      setTimeout(() => this.processQueue(), 100)
    }
  }
}

export const storageOptimizer = new StorageOptimizer()
