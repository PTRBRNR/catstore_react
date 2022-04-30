class Store {
  constructor(key) {
    this.key = key;
  }

  static isEmpty(key) {
    const s = new Store(key);
    const d = s.load(null);
    return d === null;
  }

  save(data) {
    const json = JSON.stringify(data);
    localStorage.setItem(this.key, json);
  }

  load(def = null) {
    const json = localStorage.getItem(this.key) ?? JSON.stringify(def);
    return JSON.parse(json);
  }
}

export default Store;
