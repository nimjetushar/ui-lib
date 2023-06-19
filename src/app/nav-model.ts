import { MenuItem } from '@fourjs/ng-library';

export class NavModel {
  private _navItems: MenuItem[] = [
    {
      label: 'Getting Started',
      badge: 'pi-home',
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
      badge: 'pi-hashtag',
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
      badge: 'pi-slack',
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
      badge: 'pi-compass',
      children: [
        {
          label: 'Tooltip',
          route: 'directive/tooltip',
        },
      ],
    },
    {
      label: 'Services',
      badge: 'pi-cloud',
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
      badge: 'pi-cog',
      route: 'utility',
    },
    {
      label: 'Reference',
      badge: 'pi-link',
      route: 'reference',
    },
  ];

  get nav(): MenuItem[] {
    return this._navItems;
  }
}
