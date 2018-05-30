# EmailBox

Render your React component in an email-safe way. Powered by [Juice](https://github.com/Automattic/juice).

## Examples

```js
import { renderToString } from 'react-dom/server';

import TodoList from 'components/TodoList';

const css = fs.readFileSync('public/style.css');

return renderToString(
  <EmailBox css={css}>
    <TodoList />
  </EmailBox>,
);
```

# Todo

* [ ] Add demo
* [ ] Publish on npm
