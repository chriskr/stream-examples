const index = (moduleNames) => {
  return `<!DOCTYPE html>
  <title>Stream Examples</title>
  <ul>
  ${moduleNames
    .map((name) => `<li><a href="./${name}/">${name}</a></li>`)
    .join('\n')}
  </ul>
  `;
};

export default index;
