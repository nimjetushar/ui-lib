import { MenuItem } from 'ui-library';

export class NavModel {

    private _navItems: MenuItem[] = [
        {
            label: 'Getting Started',
            badge: 'fa-home',
            children: [
                {
                    label: 'Developers',
                    route: ''
                },
                {
                    label: 'Designers',
                    route: ''
                }
            ]
        }
    ];

    get nav(): MenuItem[] {
        return this._navItems;
    }
}
