import handlebars from 'handlebars';

export default function generateSafeString(markup) {
  return new handlebars.SafeString(markup);
}
