/**
 * Interface representing a storage object with methods to get, remove, and set items.
 */
interface StorageType {
  getItem(key: string): string | null;
  removeItem(key: string): void;
  setItem(key: string, value: string): void;
}

/**
 * Utility class for managing storage operations with a configurable key prefix.
 */
class StorageUtils {
  private keyPrefix: string = '';
  private storage: StorageType;

  /**
   * Constructor for the StorageUtils class.
   * @param storage The storage object to be used (e.g., localStorage or sessionStorage).
   * @param keyPrefix The prefix to be added to the storage keys (default: 'storage').
   */
  constructor(storage: StorageType, keyPrefix = '') {
    this.storage = storage;
    this.keyPrefix = keyPrefix;
  }

  /**
   * Sets a value in the storage with the specified key.
   * @param key The key to identify the value in the storage.
   * @param value The value to be stored. Can be of any type except functions.
   * @throws Error if the value is a function.
   */
  setValue = (key: string, value: unknown) => {
    if (value === null || value === undefined) {
      this.clearValue(key);

      return;
    }

    if (typeof value === 'function') {
      throw new Error('Cannot store functions');
    }

    const storedValue = (typeof value === 'object')
      ? JSON.stringify(value)
      : String(value);

    this.storage.setItem(`${this.getKey(key)}`, storedValue);
  };

  /**
   * Retrieves a value from the storage with the specified key.
   * @param key The key to identify the value in the storage.
   * @param fallback Optional fallback value to be returned if the key is not found.
   * @returns The parsed value from the storage or the fallback value if the key is not found.
   */
  getValue = <T>(key: string, fallback?: T) => {
    const storedValue = this.storage.getItem(`${this.getKey(key)}`)
      ?? JSON.stringify(fallback);

    try {
      return JSON.parse(storedValue) as T;
    } catch (e) {
      return fallback as T;
    }
  };

  /**
   * Removes a value from the storage with the specified key.
   * @param key The key to identify the value to be removed from the storage.
   */
  clearValue = (key: string) => {
    this.storage.removeItem(`${this.getKey(key)}`);
  };

  /**
   * Sets the storage key prefix.
   * @param keyPrefix The prefix to be added to the storage keys.
   * @throws Error if the key prefix is already set, as changing it would result in data loss.
   */
  setStorageKeyPrefix = (keyPrefix: string) => {
    if (!this.keyPrefix) {
      this.keyPrefix = keyPrefix;
    } else {
      throw new Error('Key prefix is already set. Changing it results in data loss.');
    }
  };

  /**
   * Generates the full storage key by prepending the key prefix.
   * @param key The base key.
   * @returns The full storage key with the prefix.
   */
  private getKey = (key: string) => {
    return this.keyPrefix
      ? `${this.keyPrefix}.${key}`
      : key;
  };
}

// Create a new instance of StorageUtils for local storage
const localStorageUtils = new StorageUtils(localStorage);

// Create a new instance of StorageUtils for session storage
const sessionStorageUtils = new StorageUtils(sessionStorage);

export { localStorageUtils, sessionStorageUtils };
