/** @type { import('@storybook/react').Preview } */

import '../src/App.css';





const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: 'twitter',
      values: [
        {
          name: 'blanc',
          value: '#ffffff',
        },
        {
          name: 'facebook',
          value: '#3b5998',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
