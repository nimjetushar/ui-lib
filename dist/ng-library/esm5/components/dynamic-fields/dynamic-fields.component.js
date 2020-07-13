import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var DynamicFieldsComponent = /** @class */ (function () {
    function DynamicFieldsComponent() {
        this.primaryHandler = new EventEmitter();
        this.secondaryHandler = new EventEmitter();
        this.renderFields = [];
        this._dropdownOptions = {};
        this._disabled = {};
        this._data = {};
    }
    Object.defineProperty(DynamicFieldsComponent.prototype, "fields", {
        // fields to be rendered
        set: function (val) {
            if (val && val.length) {
                this.renderFields = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFieldsComponent.prototype, "buttonOptions", {
        // option parameter required by component to render
        set: function (val) {
            if (val) {
                var primaryLabel = val.primaryLabel, secondaryLabel = val.secondaryLabel, removeSecondaryButton = val.removeSecondaryButton;
                this.primaryLabel = primaryLabel;
                this.secondaryLabel = secondaryLabel;
                this.removeSecondaryButton = removeSecondaryButton;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFieldsComponent.prototype, "data", {
        get: function () {
            return this._data || {};
        },
        set: function (data) {
            if (data) {
                this._data = data;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFieldsComponent.prototype, "dropdownOptions", {
        get: function () {
            return this._dropdownOptions || {};
        },
        set: function (data) {
            if (data) {
                this._dropdownOptions = data;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFieldsComponent.prototype, "disabledFields", {
        get: function () {
            return this._disabled || {};
        },
        set: function (data) {
            if (data) {
                this._disabled = data;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFieldsComponent.prototype, "primaryLabel", {
        get: function () {
            return this._primaryLabel || 'Search';
        },
        set: function (label) {
            this._primaryLabel = label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFieldsComponent.prototype, "secondaryLabel", {
        get: function () {
            return this._secondaryLabel || 'Reset';
        },
        set: function (label) {
            this._secondaryLabel = label;
        },
        enumerable: true,
        configurable: true
    });
    DynamicFieldsComponent.prototype.primaryClick = function () {
        this.primaryHandler.emit(this.data);
    };
    DynamicFieldsComponent.prototype.secondaryClick = function () {
        this.secondaryHandler.emit(this.data);
    };
    DynamicFieldsComponent.prototype.reset = function () {
        this.data = {};
    };
    __decorate([
        Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DynamicFieldsComponent.prototype, "fields", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DynamicFieldsComponent.prototype, "buttonOptions", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DynamicFieldsComponent.prototype, "data", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DynamicFieldsComponent.prototype, "dropdownOptions", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DynamicFieldsComponent.prototype, "disabledFields", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DynamicFieldsComponent.prototype, "hideDefaultAction", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], DynamicFieldsComponent.prototype, "primaryHandler", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], DynamicFieldsComponent.prototype, "secondaryHandler", void 0);
    DynamicFieldsComponent = __decorate([
        Component({
            selector: 't-dynamic-fields',
            template: "<div class=\"dynamic-fields\">\n  <div *ngFor=\"let field of renderFields\" [ngSwitch]=\"field.type\" class='input-element'>\n\n    <!-- input type text -->\n    <div *ngSwitchCase=\"'text'\" class='input-text'>\n      <label [for]=\"field.model\">{{field.label}}</label>\n      <input [id]='field.model' type=\"text\" [name]='field.name' [(ngModel)]=\"data[field.model]\"\n        [disabled]=\"disabledFields[field.model]\" />\n    </div>\n\n    <div *ngSwitchCase=\"'number'\" class='input-number'>\n      <label [for]=\"field.model\">{{field.label}}</label>\n      <input [id]='field.model' type=\"number\" [name]='field.name' [(ngModel)]=\"data[field.model]\"\n        [disabled]=\"disabledFields[field.model]\" />\n    </div>\n\n    <!-- input type checkbox -->\n    <div *ngSwitchCase=\"'checkbox'\" class='input-checkbox'>\n      <t-checkbox [label]=\"field.label\" [(model)]=\"data[field.model]\" [name]='field.name'\n        [disabled]=\"disabledFields[field.model]\">\n      </t-checkbox>\n    </div>\n\n    <!-- input type radio -->\n    <div *ngSwitchCase=\"'radio'\" class='input-radio'>\n      <t-radio [label]=\"field.label\" [(ngModel)]=\"data[field.model]\" [name]='field.name'\n        [disabled]=\"disabledFields[field.model]\"></t-radio>\n    </div>\n\n    <!-- dropdown -->\n    <div *ngSwitchCase=\"'select'\" class='input-select'>\n      <t-dropdown [placeholder]=\"field.label\" [(ngModel)]=\"data[field.model]\" [options]=\"dropdownOptions[field.model]\"\n        [name]='field.name' [disabled]=\"disabledFields[field.model]\">\n      </t-dropdown>\n    </div>\n  </div>\n\n  <div class=\"button-container\">\n    <div class=\"default-button\" *ngIf=\"!hideDefaultAction\">\n      <t-button [label]=\"primaryLabel\" type=\"primary\" (click)=\"primaryClick()\">\n      </t-button>\n      <t-button *ngIf=\"!removeSecondaryButton\" [label]=\"secondaryLabel\" type=\"secondary\" (click)=\"secondaryClick()\">\n      </t-button>\n    </div>\n  </div>\n</div>",
            styles: [".dynamic-fields .button-container{-ms-flex-pack:end;justify-content:flex-end;display:-ms-flexbox;display:flex}.dynamic-fields .button-container t-button{margin:0 .3125rem}.dynamic-fields input,.dynamic-fields select{margin:0 .625rem;outline:0}.dynamic-fields .input-checkbox,.dynamic-fields .input-number,.dynamic-fields .input-radio,.dynamic-fields .input-select,.dynamic-fields .input-text{margin:.625rem .3125rem}"]
        })
    ], DynamicFieldsComponent);
    return DynamicFieldsComponent;
}());
export { DynamicFieldsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1maWVsZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9keW5hbWljLWZpZWxkcy9keW5hbWljLWZpZWxkcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFXdkU7SUFBQTtRQWtEWSxtQkFBYyxHQUF3QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pFLHFCQUFnQixHQUF3QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXJGLGlCQUFZLEdBQW9CLEVBQUUsQ0FBQztRQW1CM0IscUJBQWdCLEdBQWdDLEVBQUUsQ0FBQztRQUNuRCxjQUFTLEdBQWdDLEVBQUUsQ0FBQztRQUM1QyxVQUFLLEdBQTBCLEVBQUUsQ0FBQztJQWE1QyxDQUFDO0lBcEZVLHNCQUFJLDBDQUFNO1FBRG5CLHdCQUF3QjthQUNmLFVBQVcsR0FBb0I7WUFDdEMsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7YUFDekI7UUFDSCxDQUFDOzs7T0FBQTtJQUVRLHNCQUFJLGlEQUFhO1FBRDFCLG1EQUFtRDthQUMxQyxVQUFrQixHQUE4QjtZQUN2RCxJQUFJLEdBQUcsRUFBRTtnQkFDQyxJQUFBLCtCQUFZLEVBQUUsbUNBQWMsRUFBRSxpREFBcUIsQ0FBUztnQkFDcEUsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO2dCQUNyQyxJQUFJLENBQUMscUJBQXFCLEdBQUcscUJBQXFCLENBQUM7YUFDcEQ7UUFDSCxDQUFDOzs7T0FBQTtJQUdELHNCQUFJLHdDQUFJO2FBS1I7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQzFCLENBQUM7YUFQRCxVQUFTLElBQTJCO1lBQ2xDLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ25CO1FBQ0gsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSxtREFBZTthQUtuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixJQUFJLEVBQUUsQ0FBQztRQUNyQyxDQUFDO2FBUEQsVUFBb0IsSUFBaUM7WUFDbkQsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQzthQUM5QjtRQUNILENBQUM7OztPQUFBO0lBTUQsc0JBQUksa0RBQWM7YUFLbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO1FBQzlCLENBQUM7YUFQRCxVQUFtQixJQUFpQztZQUNsRCxJQUFJLElBQUksRUFBRTtnQkFDUixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzthQUN2QjtRQUNILENBQUM7OztPQUFBO0lBYUQsc0JBQUksZ0RBQVk7YUFHaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLElBQUksUUFBUSxDQUFDO1FBQ3hDLENBQUM7YUFMRCxVQUFpQixLQUFhO1lBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBS0Qsc0JBQUksa0RBQWM7YUFHbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLElBQUksT0FBTyxDQUFDO1FBQ3pDLENBQUM7YUFMRCxVQUFtQixLQUFhO1lBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBV0QsNkNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsK0NBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxzQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQW5GUTtRQUFSLEtBQUssRUFBRTs7O3dEQUlQO0lBRVE7UUFBUixLQUFLLEVBQUU7OzsrREFPUDtJQUdEO1FBREMsS0FBSyxFQUFFOzs7c0RBS1A7SUFNRDtRQURDLEtBQUssRUFBRTs7O2lFQUtQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7OztnRUFLUDtJQUtRO1FBQVIsS0FBSyxFQUFFOztxRUFBNEI7SUFFMUI7UUFBVCxNQUFNLEVBQUU7a0NBQWlCLFlBQVk7a0VBQTZDO0lBQ3pFO1FBQVQsTUFBTSxFQUFFO2tDQUFtQixZQUFZO29FQUE2QztJQW5EMUUsc0JBQXNCO1FBTGxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsdThEQUE4Qzs7U0FFL0MsQ0FBQztPQUNXLHNCQUFzQixDQXVGbEM7SUFBRCw2QkFBQztDQUFBLEFBdkZELElBdUZDO1NBdkZZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBEeW5hbWljRmllbGRzLCBEeW5hbWljRmllbGRCdXR0b25PcHRpb25zLFxuICBEeW5hbWljRmllbGREaXNhYmxlZE9wdGlvbnMsIER5bmFtaWNGaWVsZERyb3Bkb3duT3B0aW9ucywgRHluYW1pY0ZpZWxkRGF0YU1vZGVsXG59IGZyb20gJy4vZHluYW1pY0ZpZWxkcy5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0LWR5bmFtaWMtZmllbGRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2R5bmFtaWMtZmllbGRzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHluYW1pYy1maWVsZHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRmllbGRzQ29tcG9uZW50IHtcblxuICAvLyBmaWVsZHMgdG8gYmUgcmVuZGVyZWRcbiAgQElucHV0KCkgc2V0IGZpZWxkcyh2YWw6IER5bmFtaWNGaWVsZHNbXSkge1xuICAgIGlmICh2YWwgJiYgdmFsLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZW5kZXJGaWVsZHMgPSB2YWw7XG4gICAgfVxuICB9XG4gIC8vIG9wdGlvbiBwYXJhbWV0ZXIgcmVxdWlyZWQgYnkgY29tcG9uZW50IHRvIHJlbmRlclxuICBASW5wdXQoKSBzZXQgYnV0dG9uT3B0aW9ucyh2YWw6IER5bmFtaWNGaWVsZEJ1dHRvbk9wdGlvbnMpIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICBjb25zdCB7IHByaW1hcnlMYWJlbCwgc2Vjb25kYXJ5TGFiZWwsIHJlbW92ZVNlY29uZGFyeUJ1dHRvbiB9ID0gdmFsO1xuICAgICAgdGhpcy5wcmltYXJ5TGFiZWwgPSBwcmltYXJ5TGFiZWw7XG4gICAgICB0aGlzLnNlY29uZGFyeUxhYmVsID0gc2Vjb25kYXJ5TGFiZWw7XG4gICAgICB0aGlzLnJlbW92ZVNlY29uZGFyeUJ1dHRvbiA9IHJlbW92ZVNlY29uZGFyeUJ1dHRvbjtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGF0YShkYXRhOiBEeW5hbWljRmllbGREYXRhTW9kZWwpIHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgfVxuICB9XG4gIGdldCBkYXRhKCk6IER5bmFtaWNGaWVsZERhdGFNb2RlbCB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGEgfHwge307XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHJvcGRvd25PcHRpb25zKGRhdGE6IER5bmFtaWNGaWVsZERyb3Bkb3duT3B0aW9ucykge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICB0aGlzLl9kcm9wZG93bk9wdGlvbnMgPSBkYXRhO1xuICAgIH1cbiAgfVxuICBnZXQgZHJvcGRvd25PcHRpb25zKCk6IER5bmFtaWNGaWVsZERyb3Bkb3duT3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuX2Ryb3Bkb3duT3B0aW9ucyB8fCB7fTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZEZpZWxkcyhkYXRhOiBEeW5hbWljRmllbGREaXNhYmxlZE9wdGlvbnMpIHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBkYXRhO1xuICAgIH1cbiAgfVxuICBnZXQgZGlzYWJsZWRGaWVsZHMoKTogRHluYW1pY0ZpZWxkRGlzYWJsZWRPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQgfHwge307XG4gIH1cblxuICBASW5wdXQoKSBoaWRlRGVmYXVsdEFjdGlvbjogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgcHJpbWFyeUhhbmRsZXI6IEV2ZW50RW1pdHRlcjxEeW5hbWljRmllbGREYXRhTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2Vjb25kYXJ5SGFuZGxlcjogRXZlbnRFbWl0dGVyPER5bmFtaWNGaWVsZERhdGFNb2RlbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcmVuZGVyRmllbGRzOiBEeW5hbWljRmllbGRzW10gPSBbXTtcbiAgcmVtb3ZlU2Vjb25kYXJ5QnV0dG9uOiBib29sZWFuO1xuXG4gIHNldCBwcmltYXJ5TGFiZWwobGFiZWw6IHN0cmluZykge1xuICAgIHRoaXMuX3ByaW1hcnlMYWJlbCA9IGxhYmVsO1xuICB9XG4gIGdldCBwcmltYXJ5TGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpbWFyeUxhYmVsIHx8ICdTZWFyY2gnO1xuICB9XG5cbiAgc2V0IHNlY29uZGFyeUxhYmVsKGxhYmVsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWNvbmRhcnlMYWJlbCA9IGxhYmVsO1xuICB9XG4gIGdldCBzZWNvbmRhcnlMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zZWNvbmRhcnlMYWJlbCB8fCAnUmVzZXQnO1xuICB9XG5cbiAgcHJpdmF0ZSBfcHJpbWFyeUxhYmVsOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NlY29uZGFyeUxhYmVsOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Ryb3Bkb3duT3B0aW9uczogRHluYW1pY0ZpZWxkRHJvcGRvd25PcHRpb25zID0ge307XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBEeW5hbWljRmllbGREaXNhYmxlZE9wdGlvbnMgPSB7fTtcbiAgcHJpdmF0ZSBfZGF0YTogRHluYW1pY0ZpZWxkRGF0YU1vZGVsID0ge307XG5cbiAgcHJpbWFyeUNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMucHJpbWFyeUhhbmRsZXIuZW1pdCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgc2Vjb25kYXJ5Q2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5zZWNvbmRhcnlIYW5kbGVyLmVtaXQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YSA9IHt9O1xuICB9XG59XG4iXX0=