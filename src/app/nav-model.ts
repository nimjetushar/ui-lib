import { MenuItem } from 'ui-library';

export class NavModel {

    private _navItems: MenuItem[] = [
        {
            label: 'Getting Started',
            badge: 'fa-home',
            children: [
                {
                    label: 'Setup',
                    route: 'gettingStarted/setup'
                },
                {
                    label: 'Developers',
                    route: 'gettingStarted/developer'
                }
            ]
        },
        {
            label: 'Styles',
            badge: 'fa-css3',
            children: [
                {
                    label: 'Color Pallet',
                    route: 'styles/colorPallet'
                },
                {
                    label: 'Reference',
                    route: 'styles/reference'
                }
            ]
        },
        {
            label: 'Components',
            badge: 'fa-slack'
        },
        {
            label: 'Utility',
            badge: 'fa-wrench',
            route: 'utility'
        }
    ];

    get nav(): MenuItem[] {
        return this._navItems;
    }
}
