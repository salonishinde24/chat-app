export const saveToIndexedDB = (key, value) => {
    const request = indexedDB.open('ChatAppDB', 1);
  
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('messages')) {
        db.createObjectStore('messages', { keyPath: 'key' });
      }
    };
  
    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction('messages', 'readwrite');
      const store = transaction.objectStore('messages');
      store.put({ key, value });
    };
  };
  