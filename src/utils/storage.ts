// utils/storageUtils.ts

import MMKVStorage from 'react-native-mmkv-storage';

// Create a non-encrypted instance of MMKV
const MMKV = new MMKVStorage.Loader().initialize();

// Save data to local storage
export const saveToStorage = async (key: string, value: string): Promise<void> => {
  try {
    await MMKV.setStringAsync(key, value);
  } catch (error) {
    console.error('Error saving to MMKV', error);
  }
};

// Retrieve data from local storage
export const getFromStorage = async (key: string): Promise<string | null | undefined> => {
  try {
    const value = await MMKV.getStringAsync(key);
    return value;
  } catch (error) {
    console.error('Error retrieving from MMKV', error);
    return null;
  }
};

// Remove item from storage
export const removeFromStorage = async (key: string): Promise<void> => {
  try {
    await MMKV.removeItem(key);
  } catch (error) {
    console.error('Error removing from MMKV', error);
  }
};