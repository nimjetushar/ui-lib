import { ChangeDetectionStrategy, Component, ElementRef, OnInit } from '@angular/core';

type ColorPallet = {
  pallets: Array<{ name: string; variableName: string; colorHash: string }>;
};

@Component({
  selector: 'ui-library-documentation-color-pallet',
  templateUrl: './color-pallet.component.html',
  styleUrls: ['./color-pallet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPalletComponent implements OnInit {
  colorPallet?: Array<ColorPallet>;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.colorPallet = this.loadColors();
  }

  loadColors(): Array<ColorPallet> {
    const appElement = this.elementRef.nativeElement.getElementsByClassName('application-color-code');
    if (appElement?.length > 0) {
      const colorPallet = getColorPallet();
      const appStyles = window.getComputedStyle(appElement[0]);
      return colorPallet.map(({ pallets }) => ({
        pallets: pallets.map(color => ({
          name: color.name,
          variableName: color.variableName,
          colorHash: appStyles.getPropertyValue(`--${color.variableName.replace('$', '')}`),
        })),
      }));
    }
    return [];
  }
}

const getColorPallet = () => [
  {
    pallets: [
      {
        name: 'Primary',
        variableName: '$color-primary',
      },
      {
        name: 'Primary hover',
        variableName: '$color-primary-hover',
      },
      {
        name: 'Secondary',
        variableName: '$color-secondary',
      },
      {
        name: 'Secondary hover',
        variableName: '$color-secondary-hover',
      },
      {
        name: 'Informational',
        variableName: '$color-informational',
      },
      {
        name: 'Informational hover',
        variableName: '$color-informational-hover',
      },
      {
        name: 'Attention',
        variableName: '$color-attention',
      },
      {
        name: 'Attention hover',
        variableName: '$color-attention-hover',
      },
      {
        name: 'Error',
        variableName: '$color-error',
      },
      {
        name: 'Error hover',
        variableName: '$color-error-hover',
      },
    ],
  },
  {
    pallets: [
      {
        name: 'Disabled',
        variableName: '$color-disabled',
      },
      {
        name: 'Light',
        variableName: '$color-light',
      },
      {
        name: 'Medium',
        variableName: '$color-medium',
      },
      {
        name: 'Dark',
        variableName: '$color-dark',
      },
      {
        name: 'Textstyle',
        variableName: '$color-textstyle',
      },
      {
        name: 'Background',
        variableName: '$color-background',
      },
      {
        name: 'White',
        variableName: '$color-white',
      },
      {
        name: 'Black',
        variableName: '$color-black',
      },
    ],
  },
];
