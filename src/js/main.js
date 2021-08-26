// Import your JS components here

class App {
  constructor() {
    this.components = [];
  }

  component(component) {
    this.components.push(component);
  }

  boot() {
    this.components.forEach((component) => component.init());
  }
}

const app = new App();
// Push imported JS to component variable using .component method


document.addEventListener("DOMContentLoaded", () => app.boot());