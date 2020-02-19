/**
 * @fileoverview added by tsickle
 * Generated from: ng-library.module.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZm91cmpzL25nLWxpYnJhcnkvIiwic291cmNlcyI6WyJuZy1saWJyYXJ5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRS9GO0lBQUE7SUE2QnlCLENBQUM7O2dCQTdCekIsUUFBUSxTQUFDO29CQUNSLFlBQVksbUJBQ1AsVUFBVSxFQUNWLFVBQVUsQ0FDZDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxjQUFjO3dCQUNkLFdBQVc7cUJBQ1o7b0JBQ0QsU0FBUyxtQkFDSixRQUFRLENBQ1o7b0JBQ0QsT0FBTzt3QkFDTCxnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsZ0JBQWdCO3VCQUViLGtCQUFrQixFQUVsQixrQkFBa0IsQ0FDdEI7b0JBQ0QsZUFBZSxtQkFDVixvQkFBb0IsQ0FDeEI7aUJBQ0Y7O0lBQ3dCLGdCQUFDO0NBQUEsQUE3QjFCLElBNkIwQjtTQUFiLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvZHJvcGRvd24nO1xuaW1wb3J0IHsgVG9hc3RNb2R1bGUgfSBmcm9tICdwcmltZW5nL3RvYXN0JztcblxuaW1wb3J0IHsgRVhQT1JURURDT01QT05FTlRTLCBDT01QT05FTlRTIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgU0VSVklDRVMgfSBmcm9tICcuL3NlcnZpY2VzL3NlcnZpY2VzJztcbmltcG9ydCB7IERJUkVDVElWRVMsIEVOVFJZUE9JTlRESVJFQ1RJVkVTLCBFWFBPUlRFRERJUkVDVElWRVMgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGlyZWN0aXZlcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLkNPTVBPTkVOVFMsXG4gICAgLi4uRElSRUNUSVZFU1xuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIERyb3Bkb3duTW9kdWxlLFxuICAgIFRvYXN0TW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLlNFUlZJQ0VTXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAvLyBtb2R1bGUgZXhwb3J0XG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICAvLyBjb21wb25lbnQgZXhwb3J0XG4gICAgLi4uRVhQT1JURURDT01QT05FTlRTLFxuICAgIC8vIGRpcmVjdGl2ZSBleHBvcnRcbiAgICAuLi5FWFBPUlRFRERJUkVDVElWRVNcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgLi4uRU5UUllQT0lOVERJUkVDVElWRVNcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0xpYnJhcnkgeyB9XG4iXX0=