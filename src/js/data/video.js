import Image from './image';

// By design the classes, Video and Image, were suppose to be siblings for the parent Media.
// TODO: Create modal to see video full screen. The method render will help do this
class Video {
  constructor(videoLink, thumbnailPath, alt) {
    this.videoLink = videoLink;
    this.thumbnail = new Image(thumbnailPath, alt);
  }

  getThumbNailAddress() {
    return this.thumbnail.getThumbNailAddress();
  }

  render() {
    return `
<iframe class="project__image--content" 
width="560" height="315" src="${this.videoLink}" 
frameborder="0" allowfullscreen></iframe>
`;
  }
}

export default function createVideo(videoLink, thumbnailPath, alt) {
  return new Video(videoLink, thumbnailPath, alt);
}
