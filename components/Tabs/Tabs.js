
class Tabs extends Component {
  constructor(root, { tabs = [] }) {
    super(root, { className: 'tabs', listeners: ["click"] });
    this.tabs = tabs;
    this.activeIndex = 0;
    this.click = this.click.bind(this);
  }

  toHTML() {
    const activeTab = this.tabs[this.activeIndex];
    return `
      <div class="tabs__list">
        ${this.createTabElements(this.tabs)}
      </div>
      <div class="tabs__content">
        ${activeTab.content}
      </div>
    `
  }

  click(e) {
    const index = +e.target.dataset.tab
    console.log("CLICKED")
    if (e.target.dataset.tab) {
      this.activeIndex = index;
      this.render();
    }
  }

  createTabElements(tabs) {
    return tabs.map(({ name }, index) => {
      const active = this.activeIndex === index ? "tabs__list__element--active" : "";
      return `
        <div
          data-tab="${index}"
          class= "tabs__list__element ${active}"
          aria-selected= "${!!active}"
          role= "tab">
          ${name}
        </div>
      `.trim();
    }).join("").trim();
  }
}

const root = document.getElementById("app");
const content = (i) => `
<section>
    <h1>Hello from content ${i}</h1>
    <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
</section>
`;
const tabs = [
  { name: "Tab 1", content: `${content(1)}` },
  { name: "Tab 2", content: `${content(2)}` },
  { name: "Tab 3", content: `${content(3)}` },
  { name: "Tab 4", content: `${content(4)}` },
];
const component = new Tabs(root, { tabs });
console.log(component);
component.render();