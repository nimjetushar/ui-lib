import { ButtonSize, ButtonType } from './type';

export function buttonTypeInput(type: ButtonType): ButtonType {
  if (type) {
    if (['primary', 'secondary'].includes(type)) {
      return type;
    } else {
      console.warn('invalid button type');
    }
  }
  return 'primary';
}

export function buttonSizeInput(size: ButtonSize): ButtonSize {
  if (size) {
    if (['normal', 'large', 'small'].includes(size)) {
      return size;
    } else {
      console.warn('invalid button size');
    }
  }
  return 'normal';
}
