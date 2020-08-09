import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.buttonType = 'primary';
        this.bPos = 'left';
    }
    Object.defineProperty(ButtonComponent.prototype, "badgePosition", {
        set: function (val) {
            this.bPos = ['right', 'left'].includes(val) ? val : 'left';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "type", {
        set: function (val) {
            this.buttonType = ['primary', 'secondary', 'tertiary'].includes(val) ? val : 'primary';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "badge", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "isLarge", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ButtonComponent.prototype, "badgePosition", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ButtonComponent.prototype, "type", null);
    ButtonComponent = __decorate([
        Component({
            selector: 't-button',
            template: "\n    <button class=\"btn waves-effect waves-light {{buttonType}}\"\n      [ngClass]=\"{'disabled': disabled, 'btn-large': isLarge, 'btn-small': !isLarge}\" [disabled]=\"disabled\">\n      <t-badge *ngIf=\"badge\" [class]=\"bPos\" [badge]=\"badge\"></t-badge>\n      {{label}}\n    </button>\n  ",
            styles: [".hide{display:none!important}.disable{pointer-events:none;opacity:.4}.btn,.btn-floating,.btn-large,.btn-small,.z-depth-1{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.btn-floating:hover,.btn-large:hover,.btn-small:hover,.btn:hover,.z-depth-1-half{box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}.inline-block{display:inline-block;vertical-align:top}.btn,.btn-flat,.btn-large,.btn-small{border:none;border-radius:2px;display:inline-block;height:36px;line-height:36px;padding:0 16px;text-transform:uppercase;vertical-align:middle;-webkit-tap-highlight-color:transparent}.btn-flat.disabled,.btn-flat:disabled,.btn-flat[disabled],.btn-floating.disabled,.btn-floating:disabled,.btn-floating[disabled],.btn-large.disabled,.btn-large:disabled,.btn-large[disabled],.btn-small.disabled,.btn-small:disabled,.btn-small[disabled],.btn.disabled,.btn:disabled,.btn[disabled],.disabled.btn-large,.disabled.btn-small{pointer-events:none;background-color:#dfdfdf!important;box-shadow:none;color:#9f9f9f!important;cursor:default}.btn-flat.disabled:hover,.btn-flat:disabled:hover,.btn-flat[disabled]:hover,.btn-floating.disabled:hover,.btn-floating:disabled:hover,.btn-floating[disabled]:hover,.btn-large.disabled:hover,.btn-large:disabled:hover,.btn-large[disabled]:hover,.btn-small.disabled:hover,.btn-small:disabled:hover,.btn-small[disabled]:hover,.btn.disabled:hover,.btn:disabled:hover,.btn[disabled]:hover,.disabled.btn-large:hover,.disabled.btn-small:hover{background-color:#dfdfdf!important;color:#9f9f9f!important}.btn,.btn-flat,.btn-floating,.btn-large,.btn-small{font-size:14px;outline:0}.btn i,.btn-flat i,.btn-floating i,.btn-large i,.btn-small i{font-size:1.3rem;line-height:inherit}.btn,.btn-large,.btn-small{text-decoration:none;color:#fff;background-color:#757575;text-align:center;letter-spacing:.5px;transition:background-color .2s ease-out;cursor:pointer}.btn-large:hover,.btn-small:hover,.btn:hover{background-color:#828282}.btn-floating{display:inline-block;color:#fff;position:relative;overflow:hidden;z-index:1;width:40px;height:40px;line-height:40px;padding:0;background-color:#757575;border-radius:50%;transition:background-color .3s;cursor:pointer;vertical-align:middle}.btn-floating:hover{background-color:#757575}.btn-floating:before{border-radius:0}.btn-floating.btn-large{width:56px;height:56px;padding:0}.btn-floating.btn-large.halfway-fab{bottom:-28px}.btn-floating.btn-large i{line-height:56px}.btn-floating.btn-small{width:32.4px;height:32.4px}.btn-floating.btn-small.halfway-fab{bottom:-16.2px}.btn-floating.btn-small i{line-height:32.4px}.btn-floating.halfway-fab{position:absolute;right:24px;bottom:-20px}.btn-floating.halfway-fab.left{right:auto;left:24px}.btn-floating i{width:inherit;display:inline-block;text-align:center;color:#fff;font-size:1.6rem;line-height:40px}button.btn-floating{border:none}.fixed-action-btn{position:fixed;right:23px;bottom:23px;padding-top:15px;margin-bottom:0;z-index:997}.fixed-action-btn.active ul{visibility:visible}.fixed-action-btn.direction-left,.fixed-action-btn.direction-right{padding:0 0 0 15px}.fixed-action-btn.direction-left ul,.fixed-action-btn.direction-right ul{text-align:right;right:64px;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%);height:100%;left:auto;width:500px}.fixed-action-btn.direction-left ul li,.fixed-action-btn.direction-right ul li{display:inline-block;margin:7.5px 15px 0 0}.fixed-action-btn.direction-right{padding:0 15px 0 0}.fixed-action-btn.direction-right ul{text-align:left;direction:rtl;left:64px;right:auto}.fixed-action-btn.direction-right ul li{margin:7.5px 0 0 15px}.fixed-action-btn.direction-bottom{padding:0 0 15px}.fixed-action-btn.direction-bottom ul{top:64px;bottom:auto;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.fixed-action-btn.direction-bottom ul li{margin:15px 0 0}.fixed-action-btn.toolbar{padding:0;height:56px}.fixed-action-btn.toolbar.active>a i{opacity:0}.fixed-action-btn.toolbar ul{display:-ms-flexbox;display:flex;top:0;bottom:0;z-index:1}.fixed-action-btn.toolbar ul li{-ms-flex:1;flex:1;display:inline-block;margin:0;height:100%;transition:none}.fixed-action-btn.toolbar ul li a{display:block;overflow:hidden;position:relative;width:100%;height:100%;background-color:transparent;box-shadow:none;color:#fff;line-height:56px;z-index:1}.fixed-action-btn.toolbar ul li a i{line-height:inherit}.fixed-action-btn ul{left:0;right:0;text-align:center;position:absolute;bottom:64px;margin:0;visibility:hidden}.fixed-action-btn ul li{margin-bottom:15px}.fixed-action-btn ul a.btn-floating{opacity:0}.fixed-action-btn .fab-backdrop{position:absolute;top:0;left:0;z-index:-1;width:40px;height:40px;background-color:#757575;border-radius:50%;-ms-transform:scale(0);transform:scale(0)}.btn-flat{box-shadow:none;background-color:transparent;color:#343434;cursor:pointer;transition:background-color .2s}.btn-flat:focus,.btn-flat:hover{box-shadow:none}.btn-flat:focus{background-color:rgba(0,0,0,.1)}.btn-flat.btn-flat[disabled],.btn-flat.disabled{background-color:transparent!important;color:#b3b3b3!important;cursor:default}.btn-large{height:54px;line-height:54px;font-size:15px;padding:0 28px}.btn-large i{font-size:1.6rem}.btn-small{height:32.4px;line-height:32.4px;font-size:13px}.btn-small i{font-size:1.2rem}.btn-block{display:block}t-badge.left{margin-right:.5rem}t-badge.right{margin-left:.5rem}.primary{background:#0069b1}.primary:hover{background:#003f81}.secondary{background:#757575}.secondary:hover{background:#616161}.tertiary{background:#757575}.tertiary:hover{background:#616161}"]
        })
    ], ButtonComponent);
    return ButtonComponent;
}());
export { ButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBZ0JqRDtJQUFBO1FBYUUsZUFBVSxHQUFlLFNBQVMsQ0FBQztRQUNuQyxTQUFJLEdBQWtCLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBVlUsc0JBQUksMENBQWE7YUFBakIsVUFBa0IsR0FBa0I7WUFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzdELENBQUM7OztPQUFBO0lBRVEsc0JBQUksaUNBQUk7YUFBUixVQUFTLEdBQWU7WUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN6RixDQUFDOzs7T0FBQTtJQVZRO1FBQVIsS0FBSyxFQUFFOztrREFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFOztrREFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFOztxREFBbUI7SUFDbEI7UUFBUixLQUFLLEVBQUU7O29EQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTs7O3dEQUVQO0lBRVE7UUFBUixLQUFLLEVBQUU7OzsrQ0FFUDtJQVhVLGVBQWU7UUFYM0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLHlTQU1UOztTQUVGLENBQUM7T0FDVyxlQUFlLENBZTNCO0lBQUQsc0JBQUM7Q0FBQSxBQWZELElBZUM7U0FmWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxudHlwZSBCYWRnZVBvc2l0aW9uID0gJ2xlZnQnIHwgJ3JpZ2h0JztcclxudHlwZSBCdXR0b25UeXBlID0gJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAndGVydGlhcnknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0LWJ1dHRvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IHt7YnV0dG9uVHlwZX19XCJcclxuICAgICAgW25nQ2xhc3NdPVwieydkaXNhYmxlZCc6IGRpc2FibGVkLCAnYnRuLWxhcmdlJzogaXNMYXJnZSwgJ2J0bi1zbWFsbCc6ICFpc0xhcmdlfVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxyXG4gICAgICA8dC1iYWRnZSAqbmdJZj1cImJhZGdlXCIgW2NsYXNzXT1cImJQb3NcIiBbYmFkZ2VdPVwiYmFkZ2VcIj48L3QtYmFkZ2U+XHJcbiAgICAgIHt7bGFiZWx9fVxyXG4gICAgPC9idXR0b24+XHJcbiAgYCxcclxuICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGJhZGdlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXNMYXJnZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzZXQgYmFkZ2VQb3NpdGlvbih2YWw6IEJhZGdlUG9zaXRpb24pIHtcclxuICAgIHRoaXMuYlBvcyA9IFsncmlnaHQnLCAnbGVmdCddLmluY2x1ZGVzKHZhbCkgPyB2YWwgOiAnbGVmdCc7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBzZXQgdHlwZSh2YWw6IEJ1dHRvblR5cGUpIHtcclxuICAgIHRoaXMuYnV0dG9uVHlwZSA9IFsncHJpbWFyeScsICdzZWNvbmRhcnknLCAndGVydGlhcnknXS5pbmNsdWRlcyh2YWwpID8gdmFsIDogJ3ByaW1hcnknO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uVHlwZTogQnV0dG9uVHlwZSA9ICdwcmltYXJ5JztcclxuICBiUG9zOiBCYWRnZVBvc2l0aW9uID0gJ2xlZnQnO1xyXG59XHJcbiJdfQ==