import { MenuItem } from '@fourjs/ng-library';

export const getNavigationModel = (): Array<MenuItem> => [
  {
    label: 'Getting Started',
    badge: 'fa-solid fa-house',
    children: [
      {
        label: 'Setup',
        route: 'gettingStarted/setup',
      },
      {
        label: 'Developers',
        route: 'gettingStarted/developer',
      },
    ],
  },
  {
    label: 'Styles',
    badge: 'fa-solid fa-hashtag',
    children: [
      {
        label: 'Color Pallet',
        route: 'styles/colorPallet',
      },
      {
        label: 'Grid',
        route: 'styles/grid',
      },
    ],
  },
  {
    label: 'Components',
    badge: 'fa-brands fa-slack',
    children: [
      {
        label: 'Alert',
        route: 'component/alert',
      },
      {
        label: 'Badge',
        route: 'component/badge',
      },
      {
        label: 'Button',
        route: 'component/button',
      },
      {
        label: 'Checkbox',
        route: 'component/checkbox',
      },
      {
        label: 'Dropdown',
        route: 'component/dropdown',
      },
      {
        label: 'Dynamic Fields',
        route: 'component/dynamicFields',
      },
      {
        label: 'Navigate to top',
        route: 'component/navigateTop',
      },
      {
        label: 'Radio button',
        route: 'component/radio',
      },
    ],
  },
  {
    label: 'Directives',
    badge: 'fa-solid fa-compass',
    children: [
      {
        label: 'Tooltip',
        route: 'directive/tooltip',
      },
    ],
  },
  {
    label: 'Services',
    badge: 'fa-solid fa-cloud',
    children: [
      {
        label: 'Dialog',
        route: 'services/dialog',
      },
      {
        label: 'Toast',
        route: 'services/toast',
      },
    ],
  },
  {
    label: 'Utility',
    badge: 'fa-solid fa-gear',
    route: 'utility',
  },
  {
    label: 'Reference',
    badge: 'fa-solid fa-link',
    route: 'reference',
  },
];
