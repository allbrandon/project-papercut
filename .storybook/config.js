<<<<<<< HEAD
// .storybook/config.js

import { configure } from '@storybook/react';
import '../src/App.css';

configure(require.context('../src/', true, /\.stories\.js$/), module);
=======
import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
>>>>>>> master
