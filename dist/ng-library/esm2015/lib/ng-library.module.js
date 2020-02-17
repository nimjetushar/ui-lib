/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-library.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class NgLibrary {
}
NgLibrary.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ...COMPONENTS,
                    ...DIRECTIVES
                ],
                imports: [
                    CommonModule,
                    HttpClientModule,
                    RouterModule,
                    FormsModule,
                    DropdownModule,
                    ToastModule
                ],
                providers: [
                    ...SERVICES
                ],
                exports: [
                    // module export
                    FormsModule,
                    HttpClientModule,
                    // component export
                    ...EXPORTEDCOMPONENTS,
                    // directive export
                    ...EXPORTEDDIRECTIVES
                ],
                entryComponents: [
                    ...ENTRYPOINTDIRECTIVES
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZm91cmpzL25nLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvbmctbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBK0IvRixNQUFNLE9BQU8sU0FBUzs7O1lBN0JyQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLEdBQUcsVUFBVTtvQkFDYixHQUFHLFVBQVU7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsY0FBYztvQkFDZCxXQUFXO2lCQUNaO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxHQUFHLFFBQVE7aUJBQ1o7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtvQkFDaEIsV0FBVztvQkFDWCxnQkFBZ0I7b0JBQ2hCLG1CQUFtQjtvQkFDbkIsR0FBRyxrQkFBa0I7b0JBQ3JCLG1CQUFtQjtvQkFDbkIsR0FBRyxrQkFBa0I7aUJBQ3RCO2dCQUNELGVBQWUsRUFBRTtvQkFDZixHQUFHLG9CQUFvQjtpQkFDeEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9kcm9wZG93bic7XG5pbXBvcnQgeyBUb2FzdE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvdG9hc3QnO1xuXG5pbXBvcnQgeyBFWFBPUlRFRENPTVBPTkVOVFMsIENPTVBPTkVOVFMgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBTRVJWSUNFUyB9IGZyb20gJy4vc2VydmljZXMvc2VydmljZXMnO1xuaW1wb3J0IHsgRElSRUNUSVZFUywgRU5UUllQT0lOVERJUkVDVElWRVMsIEVYUE9SVEVERElSRUNUSVZFUyB9IGZyb20gJy4vZGlyZWN0aXZlcy9kaXJlY3RpdmVzJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uQ09NUE9ORU5UUyxcbiAgICAuLi5ESVJFQ1RJVkVTXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgRHJvcGRvd25Nb2R1bGUsXG4gICAgVG9hc3RNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLi4uU0VSVklDRVNcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC8vIG1vZHVsZSBleHBvcnRcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIC8vIGNvbXBvbmVudCBleHBvcnRcbiAgICAuLi5FWFBPUlRFRENPTVBPTkVOVFMsXG4gICAgLy8gZGlyZWN0aXZlIGV4cG9ydFxuICAgIC4uLkVYUE9SVEVERElSRUNUSVZFU1xuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAuLi5FTlRSWVBPSU5URElSRUNUSVZFU1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nTGlicmFyeSB7IH1cbiJdfQ==