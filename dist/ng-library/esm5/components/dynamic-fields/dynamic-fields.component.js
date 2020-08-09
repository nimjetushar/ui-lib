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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1maWVsZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9keW5hbWljLWZpZWxkcy9keW5hbWljLWZpZWxkcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFXdkU7SUFBQTtRQWtEWSxtQkFBYyxHQUF3QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pFLHFCQUFnQixHQUF3QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXJGLGlCQUFZLEdBQW9CLEVBQUUsQ0FBQztRQW1CM0IscUJBQWdCLEdBQWdDLEVBQUUsQ0FBQztRQUNuRCxjQUFTLEdBQWdDLEVBQUUsQ0FBQztRQUM1QyxVQUFLLEdBQTBCLEVBQUUsQ0FBQztJQWE1QyxDQUFDO0lBcEZVLHNCQUFJLDBDQUFNO1FBRG5CLHdCQUF3QjthQUNmLFVBQVcsR0FBb0I7WUFDdEMsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7YUFDekI7UUFDSCxDQUFDOzs7T0FBQTtJQUVRLHNCQUFJLGlEQUFhO1FBRDFCLG1EQUFtRDthQUMxQyxVQUFrQixHQUE4QjtZQUN2RCxJQUFJLEdBQUcsRUFBRTtnQkFDQyxJQUFBLCtCQUFZLEVBQUUsbUNBQWMsRUFBRSxpREFBcUIsQ0FBUztnQkFDcEUsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO2dCQUNyQyxJQUFJLENBQUMscUJBQXFCLEdBQUcscUJBQXFCLENBQUM7YUFDcEQ7UUFDSCxDQUFDOzs7T0FBQTtJQUdELHNCQUFJLHdDQUFJO2FBS1I7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQzFCLENBQUM7YUFQRCxVQUFTLElBQTJCO1lBQ2xDLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ25CO1FBQ0gsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSxtREFBZTthQUtuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixJQUFJLEVBQUUsQ0FBQztRQUNyQyxDQUFDO2FBUEQsVUFBb0IsSUFBaUM7WUFDbkQsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQzthQUM5QjtRQUNILENBQUM7OztPQUFBO0lBTUQsc0JBQUksa0RBQWM7YUFLbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO1FBQzlCLENBQUM7YUFQRCxVQUFtQixJQUFpQztZQUNsRCxJQUFJLElBQUksRUFBRTtnQkFDUixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzthQUN2QjtRQUNILENBQUM7OztPQUFBO0lBYUQsc0JBQUksZ0RBQVk7YUFHaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLElBQUksUUFBUSxDQUFDO1FBQ3hDLENBQUM7YUFMRCxVQUFpQixLQUFhO1lBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBS0Qsc0JBQUksa0RBQWM7YUFHbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLElBQUksT0FBTyxDQUFDO1FBQ3pDLENBQUM7YUFMRCxVQUFtQixLQUFhO1lBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBV0QsNkNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsK0NBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxzQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQW5GUTtRQUFSLEtBQUssRUFBRTs7O3dEQUlQO0lBRVE7UUFBUixLQUFLLEVBQUU7OzsrREFPUDtJQUdEO1FBREMsS0FBSyxFQUFFOzs7c0RBS1A7SUFNRDtRQURDLEtBQUssRUFBRTs7O2lFQUtQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7OztnRUFLUDtJQUtRO1FBQVIsS0FBSyxFQUFFOztxRUFBNEI7SUFFMUI7UUFBVCxNQUFNLEVBQUU7a0NBQWlCLFlBQVk7a0VBQTZDO0lBQ3pFO1FBQVQsTUFBTSxFQUFFO2tDQUFtQixZQUFZO29FQUE2QztJQW5EMUUsc0JBQXNCO1FBTGxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsdThEQUE4Qzs7U0FFL0MsQ0FBQztPQUNXLHNCQUFzQixDQXVGbEM7SUFBRCw2QkFBQztDQUFBLEFBdkZELElBdUZDO1NBdkZZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgRHluYW1pY0ZpZWxkcywgRHluYW1pY0ZpZWxkQnV0dG9uT3B0aW9ucyxcclxuICBEeW5hbWljRmllbGREaXNhYmxlZE9wdGlvbnMsIER5bmFtaWNGaWVsZERyb3Bkb3duT3B0aW9ucywgRHluYW1pY0ZpZWxkRGF0YU1vZGVsXHJcbn0gZnJvbSAnLi9keW5hbWljRmllbGRzLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3QtZHluYW1pYy1maWVsZHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9keW5hbWljLWZpZWxkcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZHluYW1pYy1maWVsZHMuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0ZpZWxkc0NvbXBvbmVudCB7XHJcblxyXG4gIC8vIGZpZWxkcyB0byBiZSByZW5kZXJlZFxyXG4gIEBJbnB1dCgpIHNldCBmaWVsZHModmFsOiBEeW5hbWljRmllbGRzW10pIHtcclxuICAgIGlmICh2YWwgJiYgdmFsLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnJlbmRlckZpZWxkcyA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gb3B0aW9uIHBhcmFtZXRlciByZXF1aXJlZCBieSBjb21wb25lbnQgdG8gcmVuZGVyXHJcbiAgQElucHV0KCkgc2V0IGJ1dHRvbk9wdGlvbnModmFsOiBEeW5hbWljRmllbGRCdXR0b25PcHRpb25zKSB7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIGNvbnN0IHsgcHJpbWFyeUxhYmVsLCBzZWNvbmRhcnlMYWJlbCwgcmVtb3ZlU2Vjb25kYXJ5QnV0dG9uIH0gPSB2YWw7XHJcbiAgICAgIHRoaXMucHJpbWFyeUxhYmVsID0gcHJpbWFyeUxhYmVsO1xyXG4gICAgICB0aGlzLnNlY29uZGFyeUxhYmVsID0gc2Vjb25kYXJ5TGFiZWw7XHJcbiAgICAgIHRoaXMucmVtb3ZlU2Vjb25kYXJ5QnV0dG9uID0gcmVtb3ZlU2Vjb25kYXJ5QnV0dG9uO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZGF0YShkYXRhOiBEeW5hbWljRmllbGREYXRhTW9kZWwpIHtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXQgZGF0YSgpOiBEeW5hbWljRmllbGREYXRhTW9kZWwge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGEgfHwge307XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBkcm9wZG93bk9wdGlvbnMoZGF0YTogRHluYW1pY0ZpZWxkRHJvcGRvd25PcHRpb25zKSB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICB0aGlzLl9kcm9wZG93bk9wdGlvbnMgPSBkYXRhO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXQgZHJvcGRvd25PcHRpb25zKCk6IER5bmFtaWNGaWVsZERyb3Bkb3duT3B0aW9ucyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZHJvcGRvd25PcHRpb25zIHx8IHt9O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZGlzYWJsZWRGaWVsZHMoZGF0YTogRHluYW1pY0ZpZWxkRGlzYWJsZWRPcHRpb25zKSB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IGRhdGE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldCBkaXNhYmxlZEZpZWxkcygpOiBEeW5hbWljRmllbGREaXNhYmxlZE9wdGlvbnMge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkIHx8IHt9O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgaGlkZURlZmF1bHRBY3Rpb246IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoKSBwcmltYXJ5SGFuZGxlcjogRXZlbnRFbWl0dGVyPER5bmFtaWNGaWVsZERhdGFNb2RlbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHNlY29uZGFyeUhhbmRsZXI6IEV2ZW50RW1pdHRlcjxEeW5hbWljRmllbGREYXRhTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICByZW5kZXJGaWVsZHM6IER5bmFtaWNGaWVsZHNbXSA9IFtdO1xyXG4gIHJlbW92ZVNlY29uZGFyeUJ1dHRvbjogYm9vbGVhbjtcclxuXHJcbiAgc2V0IHByaW1hcnlMYWJlbChsYWJlbDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9wcmltYXJ5TGFiZWwgPSBsYWJlbDtcclxuICB9XHJcbiAgZ2V0IHByaW1hcnlMYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ByaW1hcnlMYWJlbCB8fCAnU2VhcmNoJztcclxuICB9XHJcblxyXG4gIHNldCBzZWNvbmRhcnlMYWJlbChsYWJlbDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9zZWNvbmRhcnlMYWJlbCA9IGxhYmVsO1xyXG4gIH1cclxuICBnZXQgc2Vjb25kYXJ5TGFiZWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWNvbmRhcnlMYWJlbCB8fCAnUmVzZXQnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcHJpbWFyeUxhYmVsOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfc2Vjb25kYXJ5TGFiZWw6IHN0cmluZztcclxuICBwcml2YXRlIF9kcm9wZG93bk9wdGlvbnM6IER5bmFtaWNGaWVsZERyb3Bkb3duT3B0aW9ucyA9IHt9O1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkOiBEeW5hbWljRmllbGREaXNhYmxlZE9wdGlvbnMgPSB7fTtcclxuICBwcml2YXRlIF9kYXRhOiBEeW5hbWljRmllbGREYXRhTW9kZWwgPSB7fTtcclxuXHJcbiAgcHJpbWFyeUNsaWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5wcmltYXJ5SGFuZGxlci5lbWl0KHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICBzZWNvbmRhcnlDbGljaygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2Vjb25kYXJ5SGFuZGxlci5lbWl0KHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICByZXNldCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0YSA9IHt9O1xyXG4gIH1cclxufVxyXG4iXX0=