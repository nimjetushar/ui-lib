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
}
export {};
