
import {createProject} from './project';
import createSource from './source';
import createImage from './image';
import createVideo from './video';

export default function () {
  const amex = createProject(
    'Merchant-Backed Loyalty Services',
    createImage('img/amexPoster.jpg', 'American Express: Merchant-Backed Loyalty Services'),
    createSource('https://nyu-amex-cardholder.herokuapp.com', 'https://nyu-amex-cardholder.herokuapp.com'),
    'Created an app that allows merchants to create customizable promotional campaigns leveraging the American Express rewards program'
  );

  const structuredLearning = createProject(
    'Learning the Structure of Job Skillsets',
    createImage('img/structured_learning_jobs.jpg',
      'Graph showing the relationship between different skills ' +
      'sets of software engineers and data scientists'),
    createSource('pdf/structured-learning-skills.pdf', 'Paper'),
    'Modeled the graphical relationship of job skillsets of software engineers and data scientists using Integer Programming Techniques'
  );

  const contagionModeling = createProject(
    'Contagion Modeling',
    createVideo('https://www.youtube.com/embed/nZ5MowFc9So',
      'img/contagion_model_thumbnail.png',
      'Thumbnail image of pedestrian modeling experiment'),
    createSource('pdf/contagion-modeling.pdf', 'Paper'),
    'Modeled the behavior of pedestrian crowds with theories combining partial differential equations, numerical analysis and optimization techniques'
  );

  const projects = [amex, structuredLearning, contagionModeling];

  // eslint-disable-next-line arrow-body-style
  return projects.map((project) => {
    return {project};
  });
}
