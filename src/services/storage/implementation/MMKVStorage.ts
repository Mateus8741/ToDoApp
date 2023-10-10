import { MMKV } from 'react-native-mmkv'

import { Storage } from '../storage'

const MMKVInstance = new MMKV()

export const MMKVStorage: Storage = {
  setItem: async (key, value) => {
    MMKVInstance.set(key, JSON.stringify(value))
  },
  getItem: async (key) => {
    const value = MMKVInstance.getString(key)
    return value ? JSON.parse(value) : null
  },
  removeItem: async (key) => {
    MMKVInstance.delete(key)
  },
}
