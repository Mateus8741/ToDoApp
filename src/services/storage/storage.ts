export interface Storage {
  getItem: <T>(key: string) => Promise<T | null>
  setItem: <T>(key: string, vlaue: T) => Promise<void>
  removeItem: (key: string) => void
}

export let storage: Storage

export function initializeStorage(storageImpl: Storage) {
  storage = storageImpl
}
