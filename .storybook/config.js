import { configure, addDecorator } from '@storybook/react';
import Theme from '../src/styles/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withOptions } from '@storybook/addon-options';
import { themes } from '@storybook/components';
import '../src/styles/main.css';
//import '../src/styles/fonts/fdnyFontIcon.css';

addDecorator(
  withOptions({
    name: 'Reactomic',
    // url:
    //   'https://innersource.accenture.com/users/arturo.moreno.solis/repos/firecad-admin-styledoc/browse',
    theme: themes
  })
);

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => <ThemeProvider theme={Theme}>{story()}</ThemeProvider>);

configure(loadStories, module);
