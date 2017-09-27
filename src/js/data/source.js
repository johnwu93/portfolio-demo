class Source {
  constructor(hyperlink, textDescription) {
    this.weblink = hyperlink;
    this.description = textDescription;
  }

  generateAnchor() {
    return `<a href="${this.weblink}" class="project__link my-0 ">${this.description}</a>`;
  }
}

export default function createSource(hyperlink, textDescription) {
  return new Source(hyperlink, textDescription);
}
