

class Accordion extends Component {
  constructor(root, {title="ACCORDION", description="This is accordion description"}) {
    super(root, {listeners:["click"], className: "accordion"})
    this.title = title;
    this.description = description;
    this.element = null;
    this.isOpen = true;
    this.click = this.click.bind(this);
  }

  toHTML() {
    return `
      <div class="accordion">
        <div class="accordion__header ${this.isOpen ?? 'open'}">${this.title}</div>
        <div class="accordion__content">${this.description}</div>
      </div>
    `
  }

  click() {
    if(this.isOpen) this.isOpen = !this.isOpen;
  }
}

const root = document.getElementById("app");
const component = new Accordion(root, {title: "ADSADSAD", description:"DDDDDD"});

component.render();