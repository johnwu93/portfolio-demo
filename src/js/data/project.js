import generateSafeString from './util';

class Project {
  constructor(title, media, source, description) {
    this.title = title;
    this.media = media;
    this.source = source;
    this.description = description;
  }
}

export function renderProject(project) {
  const projectRepresentation = `
    <article class="project col-md-4 py-md-1">
      <section class="project__image--container mx-auto">
        ${project.media.getThumbNailAddress()}
      </section>
      <h3 class="project__title text-uppercase pt-2 my-0">${project.title}</h3>
      <p class="my-1">
        ${project.source.generateAnchor()}
      </p>
      <p class="project__description">
        ${project.description}
      </p>
    </article>
  `;
  return generateSafeString(projectRepresentation);
}

export function createProject(title, media, source, description) {
  return new Project(title, media, source, description);
}
