import * as i0 from "@angular/core";
declare type BadgePosition = 'left' | 'right';
declare type ButtonType = 'primary' | 'secondary' | 'tertiary';
export declare class ButtonComponent {
    label: string;
    badge: string;
    disabled: boolean;
    isLarge: boolean;
    set badgePosition(val: BadgePosition);
    set type(val: ButtonType);
    buttonType: ButtonType;
    bPos: BadgePosition;
    static ɵfac: i0.ɵɵFactoryDef<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ButtonComponent, "t-button", never, { "label": "label"; "badge": "badge"; "disabled": "disabled"; "isLarge": "isLarge"; "badgePosition": "badgePosition"; "type": "type"; }, {}, never, never>;
}
export {};
