import './index.css';
import barba from '@barba/core';
import barbaCss from '@barba/css';

barba.use(barbaCss);

const root = document.querySelector('.root');
const nav = root.querySelector('.nav');

const handleTogglePage = (namespace) => {
  nav.querySelectorAll('.nav__link').forEach((link) => {
    const metaName = link.getAttribute('meta-name');
    if (metaName === namespace) {
      link.classList.add('active');
    } else link.classList.remove('active');
  });
};

barba.init({
  transitions: [
    {
      name: 'slide-left',
      to: { namespace: ['index'] },
      once() { },
      leave() { },
      enter() { },
    },
    {
      name: 'slide-left',
      to: { namespace: ['history'] },
      once() { },
      leave() { },
      enter() { },
    },
    {
      name: 'slide-left',
      to: { namespace: ['variety'] },
      once() { },
      leave() { },
      enter() { },
    },
    {
      name: 'slide-left',
      to: { namespace: ['brewery'] },
      once() { },
      leave() { },
      enter() { },
    },
    {
      name: 'slide-left',
      to: { namespace: ['contacts'] },
      once() { },
      leave() { },
      enter() { },
    },
  ],
});

barba.hooks.enter((data) => {
  handleTogglePage(data.next.namespace);
});
