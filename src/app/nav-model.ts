import { MenuItem } from 'ui-library';

export class NavModel {

    private _navItems: MenuItem[] = [
        {
            label: 'Getting Started',
            badge: 'fa-home',
            children: [
                {
                    label: 'Setup',
                    route: 'setup'
                },
                {
                    label: 'Developers',
                    route: 'developer'
                }
            ]
        },
        {
            label: 'Styles',
            badge: 'fa-home',
            children: [
                {
                    label: 'Color Pallet',
                    route: 'colorPallet'
                }
            ]
        }
    ];

    get nav(): MenuItem[] {
        return this._navItems;
    }
}
