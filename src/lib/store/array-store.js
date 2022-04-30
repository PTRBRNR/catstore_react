import Store from "./store";

class ArrayStore extends Store {
  push(item) {
    const data = this.load();
    data.push(item);
    this.save(data);
  }

  load() {
    return super.load([]);
  }
}

export default ArrayStore;
