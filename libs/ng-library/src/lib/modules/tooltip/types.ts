export type TooltipPosition = 'right' | 'left' | 'top' | 'bottom';

export interface TooltipOptions {
  tooltipLabel?: string;
  tooltipPosition?: TooltipPosition;
  tooltipEvent?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  appendTo?: any;
  positionStyle?: string;
  tooltipStyleClass?: string;
  tooltipZIndex?: string;
  escape?: boolean;
  disabled?: boolean;
  showDelay?: number;
  hideDelay?: number;
  positionTop?: number;
  positionLeft?: number;
  life?: number;
  autoHide?: boolean;
  hideOnEscape?: boolean;
}
