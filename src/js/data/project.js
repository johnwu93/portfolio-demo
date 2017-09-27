import generateSafeString from './util';

class Project {
  constructor(title, media, source) {
    this.title = title;
    this.media = media;
    this.source = source;
  }
}

export function renderProject(project) {
  const projectRepresentation = `
    <div class="col-md-4 py-md-1">
      <div class="project__image--container mx-auto">
        ${project.media.getThumbNailAddress()}
      </div>
      <h3 class="project__title text-uppercase pt-2 my-0">${project.title}</h3>
      <p>
        ${project.source.generateAnchor()}
      </p>
    </div>
  `;
  return generateSafeString(projectRepresentation);
}

export function createProject(title, media, source) {
  return new Project(title, media, source);
}
