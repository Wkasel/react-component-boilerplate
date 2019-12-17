# React Component Boilerplate

> Shoutout to [Create React Component](https://github.com/facebookincubator/create-react-app). This was originally bootstrapped with their CLI. I have a fork (WIP) to push these upgrades to their templates. This repo will be merged (hopefully).

React Component Boilerplate is a mildly opinionated starter template for bootstrapping a new react shared react component.

### Technologies

- [prettier](https://prettier.io)
- [eslint](https://eslint.org)

## Install

```bash
git clone https://github.com/Wkasel/react-component-boilerplate ./myapp && cd $_ && rm -rf .git
```

## Usage

```jsx
import React from 'react';
import MySharedComponent from 'my-shared-component';

const MyAppThing = ({ title }) => {
  return <MySharedComponent title={title} />;
};

MyAppThing.propTypes = {
  title: PropTypes.string.isRequired,
};

MyAppThing.defaults = {
  title: 'Rick and Morty',
};
```

## License

MIT © [Wkasel](https://github.com/Wkasel)
