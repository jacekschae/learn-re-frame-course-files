react-style-singleton
====

__0.5kb__ With all dependencies, minified and gzipped


Creates a style component with internal _tracker_.

- Adds styles to the browser on the first instance mount.
- Removes after last instance unmount.

Thus - useful for a libraries, which want to bring some styles within, and cleanup after.

# API
```js
import {styleSinglentone} from 'react-style-singleton'

const Style = styleSinglentone();

() => (
  <Style styles={'body {color:red}'} />
)
```