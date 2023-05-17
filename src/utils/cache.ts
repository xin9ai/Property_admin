class LocalCache {
  // 设置缓存
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  // 获取缓存
  getCache(key: string) {
    const data = window.localStorage.getItem(key)
    if (data) {
      return JSON.parse(data)
    }
  }
  // 删除缓存
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  // 清空缓存
  clearCache() {
    window.localStorage.clear()
  }
}
export default new LocalCache()
