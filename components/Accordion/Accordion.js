

class Accordion extends Component {
  constructor(root, {title="ACCORDION", description="This is accordion description"}) {
    super(root, {listeners:["click"], className: "accordion"})
    this.title = title;
    this.description = description;
    this.element = null;
    this.click = this.click.bind(this);
  }

  toHTML() {
    return `
      <div class="accordion">
        <div class="title">${this.title}</div>
        <div class="description">${this.description}</div>
      </div>
    `
  }

  click(e) {
    console.log("CLICKED");
  }
}

const root = document.getElementById("app");
const component = new Accordion(root, {title: "ADSADSAD", description:"DDDDDD"});

component.render();