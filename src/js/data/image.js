// By design the classes, Image and Video, were suppose to be siblings for the parent Media.
// TODO: Create modal to see image full screen. The method render will help do this
class Image {
  constructor(imagePath, alt) {
    this.imagePath = imagePath;
    this.alt = alt;
  }

  getThumbNailAddress() {
    return this.render();
  }

  render() {
    return `<img class="project__image--content" src="${this.imagePath}" alt="${this.alt}">`;
  }
}

export default function createImage(imagePath, alt) {
  return new Image(imagePath, alt);
}
