/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-library.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { EXPORTEDCOMPONENTS, COMPONENTS } from './components/components';
import { SERVICES } from './services/services';
import { DIRECTIVES, ENTRYPOINTDIRECTIVES, EXPORTEDDIRECTIVES } from './directives/directives';
var NgLibrary = /** @class */ (function () {
    function NgLibrary() {
    }
    NgLibrary.decorators = [
        { type: NgModule, args: [{
                    declarations: tslib_1.__spread(COMPONENTS, DIRECTIVES),
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        RouterModule,
                        FormsModule,
                        DropdownModule,
                        ToastModule
                    ],
                    providers: tslib_1.__spread(SERVICES),
                    exports: tslib_1.__spread([
                        // module export
                        FormsModule,
                        HttpClientModule
                    ], EXPORTEDCOMPONENTS, EXPORTEDDIRECTIVES),
                    entryComponents: tslib_1.__spread(ENTRYPOINTDIRECTIVES)
                },] }
    ];
    return NgLibrary;
}());
export { NgLibrary };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZm91cmpzL25nLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvbmctbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUUvRjtJQUFBO0lBNkJ5QixDQUFDOztnQkE3QnpCLFFBQVEsU0FBQztvQkFDUixZQUFZLG1CQUNQLFVBQVUsRUFDVixVQUFVLENBQ2Q7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsY0FBYzt3QkFDZCxXQUFXO3FCQUNaO29CQUNELFNBQVMsbUJBQ0osUUFBUSxDQUNaO29CQUNELE9BQU87d0JBQ0wsZ0JBQWdCO3dCQUNoQixXQUFXO3dCQUNYLGdCQUFnQjt1QkFFYixrQkFBa0IsRUFFbEIsa0JBQWtCLENBQ3RCO29CQUNELGVBQWUsbUJBQ1Ysb0JBQW9CLENBQ3hCO2lCQUNGOztJQUN3QixnQkFBQztDQUFBLEFBN0IxQixJQTZCMEI7U0FBYixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2Ryb3Bkb3duJztcbmltcG9ydCB7IFRvYXN0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy90b2FzdCc7XG5cbmltcG9ydCB7IEVYUE9SVEVEQ09NUE9ORU5UUywgQ09NUE9ORU5UUyB9IGZyb20gJy4vY29tcG9uZW50cy9jb21wb25lbnRzJztcbmltcG9ydCB7IFNFUlZJQ0VTIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBESVJFQ1RJVkVTLCBFTlRSWVBPSU5URElSRUNUSVZFUywgRVhQT1JURURESVJFQ1RJVkVTIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RpcmVjdGl2ZXMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5DT01QT05FTlRTLFxuICAgIC4uLkRJUkVDVElWRVNcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBEcm9wZG93bk1vZHVsZSxcbiAgICBUb2FzdE1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICAuLi5TRVJWSUNFU1xuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLy8gbW9kdWxlIGV4cG9ydFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgLy8gY29tcG9uZW50IGV4cG9ydFxuICAgIC4uLkVYUE9SVEVEQ09NUE9ORU5UUyxcbiAgICAvLyBkaXJlY3RpdmUgZXhwb3J0XG4gICAgLi4uRVhQT1JURURESVJFQ1RJVkVTXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIC4uLkVOVFJZUE9JTlRESVJFQ1RJVkVTXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmdMaWJyYXJ5IHsgfVxuIl19