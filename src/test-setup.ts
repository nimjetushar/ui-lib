import 'jest-preset-angular/setup-jest';
import { noop } from 'tutility';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).PR = { prettyPrint: noop };
