// IndexedDB setup for local storage
const DB_NAME = 'EHRDatabase';
const DB_VERSION = 1;

const STORES = {
  residents: 'residents',
  medications: 'medications',
  careNotes: 'careNotes',
  carePlans: 'carePlans',
  users: 'users',
  settings: 'settings'
};

class Database {
  constructor() {
    this.db = null;
  }

  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        // Create residents store
        if (!db.objectStoreNames.contains(STORES.residents)) {
          const residentsStore = db.createObjectStore(STORES.residents, { keyPath: 'id', autoIncrement: true });
          residentsStore.createIndex('name', 'name', { unique: false });
          residentsStore.createIndex('status', 'status', { unique: false });
        }

        // Create medications store
        if (!db.objectStoreNames.contains(STORES.medications)) {
          const medsStore = db.createObjectStore(STORES.medications, { keyPath: 'id', autoIncrement: true });
          medsStore.createIndex('residentId', 'residentId', { unique: false });
          medsStore.createIndex('name', 'name', { unique: false });
        }

        // Create care notes store
        if (!db.objectStoreNames.contains(STORES.careNotes)) {
          const notesStore = db.createObjectStore(STORES.careNotes, { keyPath: 'id', autoIncrement: true });
          notesStore.createIndex('residentId', 'residentId', { unique: false });
          notesStore.createIndex('date', 'date', { unique: false });
          notesStore.createIndex('author', 'author', { unique: false });
        }

        // Create care plans store
        if (!db.objectStoreNames.contains(STORES.carePlans)) {
          const plansStore = db.createObjectStore(STORES.carePlans, { keyPath: 'id', autoIncrement: true });
          plansStore.createIndex('residentId', 'residentId', { unique: false });
          plansStore.createIndex('category', 'category', { unique: false });
        }

        // Create users store
        if (!db.objectStoreNames.contains(STORES.users)) {
          const usersStore = db.createObjectStore(STORES.users, { keyPath: 'id', autoIncrement: true });
          usersStore.createIndex('email', 'email', { unique: true });
          usersStore.createIndex('role', 'role', { unique: false });
        }

        // Create settings store
        if (!db.objectStoreNames.contains(STORES.settings)) {
          db.createObjectStore(STORES.settings, { keyPath: 'key' });
        }
      };
    });
  }

  // Generic CRUD operations
  async add(storeName, data) {
    const transaction = this.db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    return store.add(data);
  }

  async get(storeName, id) {
    const transaction = this.db.transaction([storeName], 'readonly');
    const store = transaction.objectStore(storeName);
    return new Promise((resolve, reject) => {
      const request = store.get(id);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async getAll(storeName) {
    const transaction = this.db.transaction([storeName], 'readonly');
    const store = transaction.objectStore(storeName);
    return new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async update(storeName, data) {
    const transaction = this.db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    return store.put(data);
  }

  async delete(storeName, id) {
    const transaction = this.db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    return store.delete(id);
  }

  // Specific queries
  async getByIndex(storeName, indexName, value) {
    const transaction = this.db.transaction([storeName], 'readonly');
    const store = transaction.objectStore(storeName);
    const index = store.index(indexName);
    return new Promise((resolve, reject) => {
      const request = index.getAll(value);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // Initialize sample data
  async initializeSampleData() {
    // Check if data already exists
    const residents = await this.getAll(STORES.residents);
    if (residents.length > 0) return;

    // Add sample residents
    const sampleResidents = [
      {
        name: 'John Smith',
        dateOfBirth: '1945-03-15',
        admissionDate: '2023-01-15',
        room: '101',
        status: 'Active',
        primaryDiagnosis: 'Dementia',
        allergies: 'Penicillin',
        emergencyContact: 'Jane Smith (Daughter) - 555-0101'
      },
      {
        name: 'Mary Johnson',
        dateOfBirth: '1938-07-22',
        admissionDate: '2022-11-30',
        room: '102',
        status: 'Active',
        primaryDiagnosis: 'Diabetes Type 2',
        allergies: 'None',
        emergencyContact: 'Robert Johnson (Son) - 555-0102'
      }
    ];

    for (const resident of sampleResidents) {
      await this.add(STORES.residents, resident);
    }

    // Add sample user
    await this.add(STORES.users, {
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'admin123', // In production, this would be hashed
      role: 'Administrator',
      status: 'Active'
    });
  }
}

// Create and export singleton instance
const database = new Database();
export default database;
