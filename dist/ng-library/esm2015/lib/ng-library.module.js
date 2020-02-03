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
import { ToastrModule } from 'ngx-toastr';
import { DropdownModule } from 'primeng/dropdown';
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
                    ToastrModule.forRoot(),
                    DropdownModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZm91cmpzL25nLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvbmctbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWxELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBK0IvRixNQUFNLE9BQU8sU0FBUzs7O1lBN0JyQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLEdBQUcsVUFBVTtvQkFDYixHQUFHLFVBQVU7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsWUFBWSxDQUFDLE9BQU8sRUFBRTtvQkFDdEIsY0FBYztpQkFDZjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsR0FBRyxRQUFRO2lCQUNaO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7b0JBQ2hCLFdBQVc7b0JBQ1gsZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLEdBQUcsa0JBQWtCO29CQUNyQixtQkFBbUI7b0JBQ25CLEdBQUcsa0JBQWtCO2lCQUN0QjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2YsR0FBRyxvQkFBb0I7aUJBQ3hCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUb2FzdHJNb2R1bGUgfSBmcm9tICduZ3gtdG9hc3RyJztcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9kcm9wZG93bic7XG5cbmltcG9ydCB7IEVYUE9SVEVEQ09NUE9ORU5UUywgQ09NUE9ORU5UUyB9IGZyb20gJy4vY29tcG9uZW50cy9jb21wb25lbnRzJztcbmltcG9ydCB7IFNFUlZJQ0VTIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBESVJFQ1RJVkVTLCBFTlRSWVBPSU5URElSRUNUSVZFUywgRVhQT1JURURESVJFQ1RJVkVTIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RpcmVjdGl2ZXMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5DT01QT05FTlRTLFxuICAgIC4uLkRJUkVDVElWRVNcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBUb2FzdHJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIERyb3Bkb3duTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLlNFUlZJQ0VTXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAvLyBtb2R1bGUgZXhwb3J0XG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICAvLyBjb21wb25lbnQgZXhwb3J0XG4gICAgLi4uRVhQT1JURURDT01QT05FTlRTLFxuICAgIC8vIGRpcmVjdGl2ZSBleHBvcnRcbiAgICAuLi5FWFBPUlRFRERJUkVDVElWRVNcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgLi4uRU5UUllQT0lOVERJUkVDVElWRVNcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0xpYnJhcnkgeyB9XG4iXX0=