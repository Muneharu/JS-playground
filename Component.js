

class Component {
  constructor(root, { listeners, className, tag = "div" }) {
    this.root = root;
    this.element = null;
    this.listeners = listeners;
    this.events = [];
    this.className = className;
    this.tag = tag;
  }

  init() {
    this.element = document.createElement(this.tag);
    this.element.classList.add(this.className);
    this.events = this.listeners.map(type => {
      console.log(type, "type");
      const handler = this[type]
      console.log("handler", handler)
      if (!handler) throw Error(`handler ${type} is not implemented`);
      this.element.addEventListener(type, handler);
      return { type, handler }
    })
  }

  afterRender() {
    console.log("After Render initiated")
  }

  render() {
    if (this.element) this.destroy();
    this.init();
    this.element.innerHTML = this.toHTML();
    this.root.appendChild(this.element);
    this.afterRender();
  }

  toHTML() { return ``; }

  destroy() {
    this.events.forEach(({type, handler}) => {
      this.element.removeEventListener(type, handler);
    });
    this.events = [];
    this.element.remove();
  }
}