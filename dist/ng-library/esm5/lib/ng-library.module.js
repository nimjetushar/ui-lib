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
import { ToastrModule } from 'ngx-toastr';
import { DropdownModule } from 'primeng/dropdown';
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
                        ToastrModule.forRoot(),
                        DropdownModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZm91cmpzL25nLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvbmctbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUUvRjtJQUFBO0lBNkJ5QixDQUFDOztnQkE3QnpCLFFBQVEsU0FBQztvQkFDUixZQUFZLG1CQUNQLFVBQVUsRUFDVixVQUFVLENBQ2Q7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsWUFBWSxDQUFDLE9BQU8sRUFBRTt3QkFDdEIsY0FBYztxQkFDZjtvQkFDRCxTQUFTLG1CQUNKLFFBQVEsQ0FDWjtvQkFDRCxPQUFPO3dCQUNMLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxnQkFBZ0I7dUJBRWIsa0JBQWtCLEVBRWxCLGtCQUFrQixDQUN0QjtvQkFDRCxlQUFlLG1CQUNWLG9CQUFvQixDQUN4QjtpQkFDRjs7SUFDd0IsZ0JBQUM7Q0FBQSxBQTdCMUIsSUE2QjBCO1NBQWIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRvYXN0ck1vZHVsZSB9IGZyb20gJ25neC10b2FzdHInO1xuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2Ryb3Bkb3duJztcblxuaW1wb3J0IHsgRVhQT1JURURDT01QT05FTlRTLCBDT01QT05FTlRTIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgU0VSVklDRVMgfSBmcm9tICcuL3NlcnZpY2VzL3NlcnZpY2VzJztcbmltcG9ydCB7IERJUkVDVElWRVMsIEVOVFJZUE9JTlRESVJFQ1RJVkVTLCBFWFBPUlRFRERJUkVDVElWRVMgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGlyZWN0aXZlcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLkNPTVBPTkVOVFMsXG4gICAgLi4uRElSRUNUSVZFU1xuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFRvYXN0ck1vZHVsZS5mb3JSb290KCksXG4gICAgRHJvcGRvd25Nb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLi4uU0VSVklDRVNcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC8vIG1vZHVsZSBleHBvcnRcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIC8vIGNvbXBvbmVudCBleHBvcnRcbiAgICAuLi5FWFBPUlRFRENPTVBPTkVOVFMsXG4gICAgLy8gZGlyZWN0aXZlIGV4cG9ydFxuICAgIC4uLkVYUE9SVEVERElSRUNUSVZFU1xuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAuLi5FTlRSWVBPSU5URElSRUNUSVZFU1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nTGlicmFyeSB7IH1cbiJdfQ==