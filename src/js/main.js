import $ from 'jquery';
import handlebars from 'handlebars';
import createProjects from './data/projects';
import { renderProject } from './data/project';

const projects = {projects: createProjects()};

$(document).ready(() => {
  const projectHTMLTemplate = `
  <div class="row text-center">
  {{#each projects}}
      {{renderProject project}}
    {{/each}}
  </div>
  `;

  handlebars.registerHelper('renderProject', renderProject);

  const projectTemplate = handlebars.compile(projectHTMLTemplate);

  const html = projectTemplate(projects);

  $('.projects').prepend(html);
});
