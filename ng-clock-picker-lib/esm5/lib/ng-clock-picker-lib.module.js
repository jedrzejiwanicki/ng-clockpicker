/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClockPickerDirective } from './directives/clock-picker.directive';
import { DynamicComponentsService } from './services/dynamic-components.service';
import { ClockPickerDialogComponent } from './components/clock-picker-dialog/clock-picker-dialog.component';
import { CircleComponent } from './components/circle/circle.component';
import { CircleButtonComponent } from './components/circle-button/circle-button.component';
import { TimeDisplayComponent } from './components/time-display/time-display.component';
import { MovementEmitterDirective } from './directives/movement-emitter.directive';
import { ClockPickerService } from './services/clock-picker.service';
import { HoursModePanelComponent } from './components/hours-mode-panel/hours-mode-panel.component';
import { ClockPickerDialogService } from './services/clock-picker-dialog.service';
var NgClockPickerLibModule = /** @class */ (function () {
    function NgClockPickerLibModule() {
    }
    NgClockPickerLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ClockPickerDirective,
                        ClockPickerDialogComponent,
                        CircleComponent,
                        CircleButtonComponent,
                        TimeDisplayComponent,
                        MovementEmitterDirective,
                        HoursModePanelComponent,
                    ],
                    imports: [CommonModule, BrowserAnimationsModule],
                    exports: [ClockPickerDirective],
                    providers: [DynamicComponentsService, ClockPickerService, ClockPickerDialogService],
                    entryComponents: [ClockPickerDialogComponent],
                },] }
    ];
    return NgClockPickerLibModule;
}());
export { NgClockPickerLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2xvY2stcGlja2VyLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jbG9jay1waWNrZXItbGliLyIsInNvdXJjZXMiOlsibGliL25nLWNsb2NrLXBpY2tlci1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFL0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDakYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDNUcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRWxGO0lBQUE7SUFnQnNDLENBQUM7O2dCQWhCdEMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixvQkFBb0I7d0JBQ3BCLDBCQUEwQjt3QkFDMUIsZUFBZTt3QkFDZixxQkFBcUI7d0JBQ3JCLG9CQUFvQjt3QkFDcEIsd0JBQXdCO3dCQUN4Qix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSx1QkFBdUIsQ0FBQztvQkFDaEQsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQy9CLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixFQUFFLGtCQUFrQixFQUFFLHdCQUF3QixDQUFDO29CQUNuRixlQUFlLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztpQkFDOUM7O0lBRXFDLDZCQUFDO0NBQUEsQUFoQnZDLElBZ0J1QztTQUExQixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcblxuaW1wb3J0IHsgQ2xvY2tQaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY2xvY2stcGlja2VyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEeW5hbWljQ29tcG9uZW50c1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2R5bmFtaWMtY29tcG9uZW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IENsb2NrUGlja2VyRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Nsb2NrLXBpY2tlci1kaWFsb2cvY2xvY2stcGlja2VyLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2lyY2xlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NpcmNsZS9jaXJjbGUuY29tcG9uZW50JztcbmltcG9ydCB7IENpcmNsZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaXJjbGUtYnV0dG9uL2NpcmNsZS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IFRpbWVEaXNwbGF5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RpbWUtZGlzcGxheS90aW1lLWRpc3BsYXkuY29tcG9uZW50JztcbmltcG9ydCB7IE1vdmVtZW50RW1pdHRlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9tb3ZlbWVudC1lbWl0dGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDbG9ja1BpY2tlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Nsb2NrLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IEhvdXJzTW9kZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hvdXJzLW1vZGUtcGFuZWwvaG91cnMtbW9kZS1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2xvY2tQaWNrZXJEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jbG9jay1waWNrZXItZGlhbG9nLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDbG9ja1BpY2tlckRpcmVjdGl2ZSxcbiAgICBDbG9ja1BpY2tlckRpYWxvZ0NvbXBvbmVudCxcbiAgICBDaXJjbGVDb21wb25lbnQsXG4gICAgQ2lyY2xlQnV0dG9uQ29tcG9uZW50LFxuICAgIFRpbWVEaXNwbGF5Q29tcG9uZW50LFxuICAgIE1vdmVtZW50RW1pdHRlckRpcmVjdGl2ZSxcbiAgICBIb3Vyc01vZGVQYW5lbENvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGVdLFxuICBleHBvcnRzOiBbQ2xvY2tQaWNrZXJEaXJlY3RpdmVdLFxuICBwcm92aWRlcnM6IFtEeW5hbWljQ29tcG9uZW50c1NlcnZpY2UsIENsb2NrUGlja2VyU2VydmljZSwgQ2xvY2tQaWNrZXJEaWFsb2dTZXJ2aWNlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ2xvY2tQaWNrZXJEaWFsb2dDb21wb25lbnRdLFxufSlcblxuZXhwb3J0IGNsYXNzIE5nQ2xvY2tQaWNrZXJMaWJNb2R1bGUgeyB9XG4iXX0=