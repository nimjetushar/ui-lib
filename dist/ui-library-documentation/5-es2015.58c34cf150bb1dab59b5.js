(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{AZKt:function(e,o,t){"use strict";t.r(o),t.d(o,"ComponentsModule",(function(){return T}));var n=t("tyNb"),a=t("ofXK"),i=t("b/hF"),d=t("fXoL"),l=t("gO6h"),p=t("8v7H");let r=(()=>{class e{ngOnInit(){this.compSyntax='<t-badge badge="fa-home"></t-badge> \n\n     <t-badge badge="fa-font-awesome"></t-badge>',this.options={name:"t-badge",options:[{parameter:"badge",type:"string",desc:"Icon class to render badge"}]}}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d.Hb({type:e,selectors:[["app-badge"]],decls:12,vars:2,consts:[[1,"badge-component"],["header","Badge",3,"code","options"],["output",""],["badge","fa-home"],["badge","fa-font-awesome"],["doc",""],["href","https://fontawesome.com/v4.7.0/icons/","target","_blank"]],template:function(e,o){1&e&&(d.Tb(0,"div",0),d.Tb(1,"demo-wrapper",1),d.Tb(2,"div",2),d.Tb(3,"div"),d.Ob(4,"t-badge",3),d.Sb(),d.Tb(5,"div"),d.Ob(6,"t-badge",4),d.Sb(),d.Sb(),d.Tb(7,"div",5),d.xc(8," Badge passed to the component is class name from font-awesome library. Please refer the "),d.Tb(9,"a",6),d.xc(10,"link"),d.Sb(),d.xc(11," to get icons. "),d.Sb(),d.Sb(),d.Sb()),2&e&&(d.Bb(1),d.ic("code",o.compSyntax)("options",o.options))},directives:[l.a,p.a],styles:[""]}),e})(),c=(()=>{class e{constructor(){this.compSyntax='<t-button label="Home" type="primary" badge="fa-home"></t-button>',this.options={name:"t-button",options:[{parameter:"label",type:"string",desc:"Button label"},{parameter:"type",type:"string",desc:"Type of button, valid values are primary, secondary, tertiary"},{parameter:"badge",type:"string",desc:"Icon class to render badge"},{parameter:"badgePosition",type:"string",default:"left",desc:"Badge position in button, valid values are right, left"},{parameter:"isLarge",type:"boolean",default:!1,desc:"Increases button size when true"},{parameter:"disabled",default:"false",type:"boolean",desc:"Disabled button"}]}}clickHandler(){alert("button clicked !!!!")}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d.Hb({type:e,selectors:[["app-button"]],decls:31,vars:2,consts:[[1,"badge-component"],["header","Buttons",3,"code","options"],["output",""],[1,"row"],[1,"seperator","col-sm-12","col-md-6","col-lg-4"],[1,"header"],["label","Primary","type","primary",3,"click"],["label","Secondary","type","secondary"],["label","Tertiary","type","tertiary"],["label","Home","type","primary","isLarge","true"],[1,"seperator","col-sm-12","col-md-6","col-lg-4","badge-btn"],["label","Home","type","primary","badge","fa-home","badgePosition","right"],["label","Home","type","primary","badge","fa-home","badgePosition","left"],["label","Home","type","primary","disabled","true"],["doc",""]],template:function(e,o){1&e&&(d.Tb(0,"div",0),d.Tb(1,"demo-wrapper",1),d.Tb(2,"div",2),d.Tb(3,"div",3),d.Tb(4,"div",4),d.Tb(5,"h6",5),d.xc(6,"Primary Button"),d.Sb(),d.Tb(7,"t-button",6),d.bc("click",(function(){return o.clickHandler()})),d.Sb(),d.Sb(),d.Tb(8,"div",4),d.Tb(9,"h6",5),d.xc(10,"Secondary Button"),d.Sb(),d.Ob(11,"t-button",7),d.Sb(),d.Tb(12,"div",4),d.Tb(13,"h6",5),d.xc(14,"Tertiary Button"),d.Sb(),d.Ob(15,"t-button",8),d.Sb(),d.Tb(16,"div",4),d.Tb(17,"h6",5),d.xc(18,"Large Button"),d.Sb(),d.Ob(19,"t-button",9),d.Sb(),d.Tb(20,"div",10),d.Tb(21,"h6",5),d.xc(22,"Button with badge"),d.Sb(),d.Ob(23,"t-button",11),d.Ob(24,"t-button",12),d.Sb(),d.Tb(25,"div",4),d.Tb(26,"h6",5),d.xc(27,"Disabled"),d.Sb(),d.Ob(28,"t-button",13),d.Sb(),d.Sb(),d.Sb(),d.Tb(29,"div",14),d.xc(30," Note: For performance the component inputs are optimised so don't provide parameter which are not required for proper functioning. "),d.Sb(),d.Sb(),d.Sb()),2&e&&(d.Bb(1),d.ic("code",o.compSyntax)("options",o.options))},directives:[l.a,p.b],styles:[".badge-btn t-button{margin:0 10px}.badge-btn t-button button{margin-bottom:10px}"],encapsulation:2}),e})();function s(e,o){if(1&e&&(d.Tb(0,"div",6),d.xc(1),d.ec(2,"json"),d.Sb()),2&e){const e=d.dc();d.Bb(1),d.zc(" ",d.fc(2,1,e.output)," ")}}let b=(()=>{class e{constructor(){this.compSyntax='<t-dynamic-fields \n    [fields]="field"\n    [data]="data"\n    [dropdownOptions]="dropdownOptions"\n    [disabledFields]="disabledOptions"\n    [buttonOptions]="buttonOptions"\n    (primaryHandler)="onSearch($event)"\n    (secondaryHandler)="onReset($event)"\n    ></t-dynamic-fields>',this.options={name:"t-dynamic-fields",options:[{parameter:"fields",type:"DynamicFields[]",desc:"Array of object to display fields"},{parameter:"data",type:"DynamicFieldDataModel",desc:"Object which initialize the fields with default value."},{parameter:"dropdownOptions",type:"DynamicFieldDropdownOptions",desc:"Dropdown options used to initalize dropdown if present in fields"},{parameter:"disabledFields",type:"DynamicFieldDisabledOptions",desc:"Disables field if specified true"},{parameter:"disableDefaultAction",type:"boolean",desc:"Hides default action buttons"},{parameter:"buttonOptions",type:"DynamicFieldButtonOptions",desc:"Customize button labels and its properties."}],methods:[{method:"primaryHandler",param:["DynamicFieldDataModel"],desc:"Emits fields data to parent component"},{method:"secondaryHandler",param:["DynamicFieldDataModel"],desc:"Emits fields data to parent component"}]},this.field=[{label:"Car Name",type:"text",model:"name"},{label:"New model",type:"checkbox",model:"isNew"},{label:"Select Brand",type:"select",model:"brand"}],this.dropdownOptions={brand:[{label:"Maruti",value:"maruti"},{label:"Hyundai",value:"hyundai"},{label:"Ford",value:"ford"}]},this.disabledOptions={isNew:!0},this.buttonOptions={primaryLabel:"Submit"},this.output={isNew:!0}}onSearch(e){console.log(e),this.displayOutput=!0,this.output=Object.assign({},e)}onReset(e){console.log(e),this.output={},this.dyFieldComp.reset()}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d.Hb({type:e,selectors:[["app-dynamic-fields"]],viewQuery:function(e,o){var t;1&e&&d.tc(p.e,!0),2&e&&d.oc(t=d.cc())&&(o.dyFieldComp=t.first)},decls:7,vars:8,consts:[[1,"badge-component"],["header","Dynamic Fields",3,"code","options"],["output",""],[3,"data","fields","buttonOptions","dropdownOptions","disabledFields","primaryHandler","secondaryHandler"],["class","comp-output",4,"ngIf"],["doc",""],[1,"comp-output"]],template:function(e,o){1&e&&(d.Tb(0,"div",0),d.Tb(1,"demo-wrapper",1),d.Tb(2,"div",2),d.Tb(3,"t-dynamic-fields",3),d.bc("primaryHandler",(function(e){return o.onSearch(e)}))("secondaryHandler",(function(e){return o.onReset(e)})),d.Sb(),d.vc(4,s,3,3,"div",4),d.Sb(),d.Tb(5,"div",5),d.xc(6," Note: For performance the component inputs are optimised so don't provide parameter which are not required for proper functioning. "),d.Sb(),d.Sb(),d.Sb()),2&e&&(d.Bb(1),d.ic("code",o.compSyntax)("options",o.options),d.Bb(2),d.ic("data",o.output)("fields",o.field)("buttonOptions",o.buttonOptions)("dropdownOptions",o.dropdownOptions)("disabledFields",o.disabledOptions),d.Bb(1),d.ic("ngIf",o.displayOutput))},directives:[l.a,p.e,a.k],pipes:[a.e],styles:[""]}),e})();function u(e,o){if(1&e&&(d.Tb(0,"div",7),d.Tb(1,"span"),d.xc(2),d.Sb(),d.Sb()),2&e){const e=d.dc();d.Bb(2),d.zc("Output: ",e.modelValue,"")}}let m=(()=>{class e{constructor(){this.compSyntax='<t-checkbox name="checkbox" label="Checkbox" [(value)]="modelValue"></t-checkbox> \n\n  <t-checkbox label="Checkbox" disabled="true"></t-checkbox>',this.options={name:"t-checkbox",options:[{parameter:"label",type:"string",desc:"Checkbox label"},{parameter:"name",type:"string",desc:"Checkbox name"},{parameter:"disabled",default:"false",type:"boolean",desc:"Disable component"},{parameter:"readonly",default:"false",type:"boolean",desc:"Component cannot be edited"}]},this.modelValue=!0}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d.Hb({type:e,selectors:[["app-checkbox"]],decls:9,vars:4,consts:[[1,"checkbox-component"],["header","Checkbox",3,"code","options"],["output",""],["label","Checkbox","name","checkbox",3,"model","modelChange"],["class","output",4,"ngIf"],["label","disabled checkbox","name","checkbox","disabled","true"],["doc",""],[1,"output"]],template:function(e,o){1&e&&(d.Tb(0,"div",0),d.Tb(1,"demo-wrapper",1),d.Tb(2,"div",2),d.Tb(3,"t-checkbox",3),d.bc("modelChange",(function(e){return o.modelValue=e})),d.Sb(),d.vc(4,u,3,1,"div",4),d.Ob(5,"div"),d.Ob(6,"t-checkbox",5),d.Sb(),d.Tb(7,"div",6),d.xc(8," Note: For performance the component inputs are optimised so don't provide parameter which are not required for proper functioning. "),d.Sb(),d.Sb(),d.Sb()),2&e&&(d.Bb(1),d.ic("code",o.compSyntax)("options",o.options),d.Bb(2),d.ic("model",o.modelValue),d.Bb(1),d.ic("ngIf",void 0!==o.modelValue))},directives:[l.a,p.c,a.k],styles:[".checkbox-component[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]{padding:.6rem 0}"]}),e})();function h(e,o){if(1&e&&(d.Tb(0,"div",12),d.Tb(1,"span"),d.xc(2,"Selected Group: "),d.Sb(),d.Tb(3,"span"),d.xc(4),d.Sb(),d.Sb()),2&e){const e=d.dc();d.Bb(4),d.yc(e.groupVal)}}let g=(()=>{class e{constructor(){this.groupVal="groupA",this.compSyntax='<t-radio label="Radio" name="radio" [(model)]="model"></t-radio>',this.options={name:"t-radio",options:[{parameter:"label",type:"string",desc:"Radio button label"},{parameter:"name",type:"string",desc:"Radio button name"},{parameter:"disabled",default:"false",type:"boolean",desc:"Disable component"}]}}clearRadio(){this.individualVal=void 0}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d.Hb({type:e,selectors:[["app-radio-demo"]],decls:15,vars:7,consts:[[1,"radio-component"],["header","Radio button",3,"code","options"],["output",""],["label","Radio","name","radio",3,"model","modelChange"],["type","primary","label","clear",3,"click"],[1,"group-radio"],["label","Group A","name","group","value","groupA",3,"model","modelChange"],["label","Group B","name","group","value","groupB",3,"model","modelChange"],["label","Group C","name","group","value","groupC",3,"model","modelChange"],["class","grp-output",4,"ngIf"],["label","disabled radio button","name","radio","disabled","true"],["doc",""],[1,"grp-output"]],template:function(e,o){1&e&&(d.Tb(0,"div",0),d.Tb(1,"demo-wrapper",1),d.Tb(2,"div",2),d.Tb(3,"t-radio",3),d.bc("modelChange",(function(e){return o.individualVal=e})),d.Sb(),d.Tb(4,"t-button",4),d.bc("click",(function(){return o.clearRadio()})),d.Sb(),d.Tb(5,"div",5),d.Tb(6,"div"),d.xc(7,"Group Radio button"),d.Sb(),d.Tb(8,"t-radio",6),d.bc("modelChange",(function(e){return o.groupVal=e})),d.Sb(),d.Tb(9,"t-radio",7),d.bc("modelChange",(function(e){return o.groupVal=e})),d.Sb(),d.Tb(10,"t-radio",8),d.bc("modelChange",(function(e){return o.groupVal=e})),d.Sb(),d.vc(11,h,5,1,"div",9),d.Sb(),d.Ob(12,"t-radio",10),d.Sb(),d.Tb(13,"div",11),d.xc(14," Note: For performance the component inputs are optimised so don't provide parameter which are not required for proper functioning. "),d.Sb(),d.Sb(),d.Sb()),2&e&&(d.Bb(1),d.ic("code",o.compSyntax)("options",o.options),d.Bb(2),d.ic("model",o.individualVal),d.Bb(5),d.ic("model",o.groupVal),d.Bb(1),d.ic("model",o.groupVal),d.Bb(1),d.ic("model",o.groupVal),d.Bb(1),d.ic("ngIf",o.groupVal))},directives:[l.a,p.i,p.b,a.k],styles:[".radio-component[_ngcontent-%COMP%]   .group-radio[_ngcontent-%COMP%]{padding:14px 0}"]}),e})();var f=t("3Pt+");function v(e,o){if(1&e&&(d.Tb(0,"div",17),d.Tb(1,"span"),d.xc(2,"Output: "),d.Sb(),d.Tb(3,"span"),d.xc(4),d.Sb(),d.Sb()),2&e){const e=d.dc();d.Bb(4),d.zc(" ",e.value," ")}}function y(e,o){if(1&e&&(d.Tb(0,"span",18),d.Tb(1,"span"),d.xc(2,"Event: "),d.Sb(),d.Tb(3,"span"),d.xc(4),d.Sb(),d.Sb()),2&e){const e=d.dc();d.Bb(4),d.zc(" ",e.eventType," ")}}const S=[{path:"badge",component:r},{path:"button",component:c},{path:"dynamicFields",component:b},{path:"checkbox",component:m},{path:"radio",component:g},{path:"tooltip",component:(()=>{class e{constructor(){this.compSyntax=' <div tTooltip="Content to be shown in the tooltip"\n  [tooltipDisabled]="false"\n  [tooltipAnimation]="true"\n  >Element on which tooltip is added  </div>',this.options={name:"tooltip",componentType:"Directive",options:[{parameter:"tooltip",type:"string | TooltipContent",desc:"Content to be displayed inside tooltip"},{parameter:"tooltipDisabled",type:"boolean",desc:"Disable tooltip"},{parameter:"tooltipAnimation",type:"boolean",default:!0,desc:"Enable animation for tooltip"},{parameter:"tooltipPlacement",type:"top | bottom | left | right",default:"bottom",desc:"Tooltip placement"}]},this.tooltipOption=[{label:"top",value:"top"},{label:"right",value:"right"},{label:"bottom",value:"bottom"},{label:"left",value:"left"}],this.tooltipPosition="top"}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d.Hb({type:e,selectors:[["app-tooltip-demo"]],decls:9,vars:7,consts:[[1,"tooltip-component"],["header","Tooltip",3,"code","options"],["output",""],[1,"inline-block",2,"margin","0 40px 10px 0"],["placeholder","Select Tooltip position",3,"options","ngModel","ngModelChange"],["tTooltip","Content to be shown in the tooltip",1,"inline-block",3,"tooltipDisabled","tooltipAnimation","tooltipPlacement"],["doc",""]],template:function(e,o){1&e&&(d.Tb(0,"div",0),d.Tb(1,"demo-wrapper",1),d.Tb(2,"div",2),d.Tb(3,"div",3),d.Tb(4,"t-dropdown",4),d.bc("ngModelChange",(function(e){return o.tooltipPosition=e})),d.Sb(),d.Sb(),d.Tb(5,"div",5),d.xc(6,"Element on which tooltip is added "),d.Sb(),d.Sb(),d.Tb(7,"div",6),d.xc(8," Note: For performance the component inputs are optimised so don't provide parameter which are not required for proper functioning. "),d.Sb(),d.Sb(),d.Sb()),2&e&&(d.Bb(1),d.ic("code",o.compSyntax)("options",o.options),d.Bb(3),d.ic("options",o.tooltipOption)("ngModel",o.tooltipPosition),d.Bb(1),d.ic("tooltipDisabled",!1)("tooltipAnimation",!0)("tooltipPlacement",o.tooltipPosition))},directives:[l.a,p.d,f.e,f.f,p.l],styles:[""]}),e})()},{path:"dropdown",component:(()=>{class e{constructor(){this.compSyntax='<t-dropdown placeholder="Select option" [options]="options" [(ngModel)]="value" [filter]="true"></t-dropdown>',this.pageOptions={name:"t-dropdown",options:[{parameter:"placeholder",type:"string",desc:"Default text to display when no option is selected."},{parameter:"options",type:"Dropdown[]",desc:"An array of objects to display as the available options."},{parameter:"name",type:"string",desc:"Name of the input element."},{parameter:"scrollHeight",type:"string",default:"200px",desc:"Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value."},{parameter:"disabled",type:"boolean",default:"false",desc:"Disabled dropdown"},{parameter:"readonly",type:"boolean",default:"false",desc:"Component cannot be edited"},{parameter:"autofocus",type:"boolean",default:"false",desc:"Component should automatically get focus on load"},{parameter:"tooltip",type:"any",desc:"Advisory information to display in a tooltip on hover."},{parameter:"tooltipPosition",type:"string",default:"top",desc:"Position of the tooltip, valid values are right, left, top and bottom."}],methods:[{method:"onFocus",param:["event: Browser event"],desc:"Callback to invoke when dropdown gets focus."},{method:"onBlur",param:["event: Browser event"],desc:"Callback to invoke when dropdown gets blur."}]},this.value="Audi",this.options=[{label:"Audi",value:"Audi"},{label:"BMW",value:"BMW"},{label:"Honda",value:"Honda"},{label:"Mazda",value:"Mazda"},{label:"Toyota",value:"Toyota"},{label:"Cadillac",value:"Cadillac"},{label:"Ford",value:"Ford"},{label:"GMC",value:"GMC"},{label:"Mercedes",value:"Mercedes"}],this.tooltipPosition="left",this.tooltipOption=[{label:"top",value:"top"},{label:"right",value:"right"},{label:"bottom",value:"bottom"},{label:"left",value:"left"}],this.options=this.options.sort((e,o)=>e.value.localeCompare(o.value))}modelChangeHandler(e){this.tooltip=e?`Selected value is ${e}`:"Please select value"}focusHandler(e){this.eventType=e.type}blurHandler(e){this.eventType=e.type}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d.Hb({type:e,selectors:[["app-dropdown-demo"]],decls:29,vars:22,consts:[[1,"dropdown-component"],["header","Dropdown",3,"code","options"],["output",""],["placeholder","Select option",3,"options","ngModel","filter","tooltip","ngModelChange"],["class","output",4,"ngIf"],[1,"row"],[1,"col-md-6","col-sx-12","section"],[1,"title"],["placeholder","Select option",3,"options","ngModel","disabled","ngModelChange"],["placeholder","Select option",3,"options","ngModel","readonly","ngModelChange"],[1,"inline-block",2,"margin","0 10px 10px 0"],["placeholder","Select Tooltip position",3,"options","ngModel","ngModelChange"],[1,"inline-block"],["placeholder","Select option",3,"options","ngModel","tooltip","tooltipPosition","ngModelChange"],[3,"options","autoDisplayFirst","onFocus","onBlur"],["class","output","style","margin-left: 10px;",4,"ngIf"],["doc",""],[1,"output"],[1,"output",2,"margin-left","10px"]],template:function(e,o){1&e&&(d.Tb(0,"div",0),d.Tb(1,"demo-wrapper",1),d.Tb(2,"div",2),d.Tb(3,"t-dropdown",3),d.bc("ngModelChange",(function(e){return o.value=e})),d.Sb(),d.vc(4,v,5,1,"div",4),d.Tb(5,"div",5),d.Tb(6,"div",6),d.Tb(7,"div",7),d.xc(8,"Disabled Dropdown"),d.Sb(),d.Tb(9,"t-dropdown",8),d.bc("ngModelChange",(function(e){return o.value=e})),d.Sb(),d.Sb(),d.Tb(10,"div",6),d.Tb(11,"div",7),d.xc(12,"Read-only Dropdown"),d.Sb(),d.Tb(13,"t-dropdown",9),d.bc("ngModelChange",(function(e){return o.value=e})),d.Sb(),d.Sb(),d.Tb(14,"div",6),d.Tb(15,"div",7),d.xc(16,"Tooltip Dropdown"),d.Sb(),d.Tb(17,"div",10),d.Tb(18,"t-dropdown",11),d.bc("ngModelChange",(function(e){return o.tooltipPosition=e})),d.Sb(),d.Sb(),d.Tb(19,"div",12),d.Tb(20,"t-dropdown",13),d.bc("ngModelChange",(function(e){return o.tooltipDDValue=e}))("ngModelChange",(function(e){return o.modelChangeHandler(e)})),d.Sb(),d.Sb(),d.Sb(),d.Tb(21,"div",6),d.Tb(22,"div",7),d.xc(23,"Focus and Blur"),d.Sb(),d.Tb(24,"div",12),d.Tb(25,"t-dropdown",14),d.bc("onFocus",(function(e){return o.focusHandler(e)}))("onBlur",(function(e){return o.blurHandler(e)})),d.Sb(),d.vc(26,y,5,1,"span",15),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Tb(27,"div",16),d.xc(28," Note: For performance the component inputs are optimised so don't provide parameter which are not required for proper functioning. "),d.Sb(),d.Sb(),d.Sb()),2&e&&(d.Bb(1),d.ic("code",o.compSyntax)("options",o.pageOptions),d.Bb(2),d.ic("options",o.options)("ngModel",o.value)("filter",!0)("tooltip",o.value),d.Bb(1),d.ic("ngIf",o.value),d.Bb(5),d.ic("options",o.options)("ngModel",o.value)("disabled",!0),d.Bb(4),d.ic("options",o.options)("ngModel",o.value)("readonly",!0),d.Bb(5),d.ic("options",o.tooltipOption)("ngModel",o.tooltipPosition),d.Bb(2),d.ic("options",o.options)("ngModel",o.tooltipDDValue)("tooltip",o.tooltip)("tooltipPosition",o.tooltipPosition),d.Bb(5),d.ic("options",o.options)("autoDisplayFirst",!1),d.Bb(1),d.ic("ngIf",o.eventType))},directives:[l.a,p.d,f.e,f.f,a.k],styles:[".dropdown-component[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]{margin-top:10px;font-size:1rem}.dropdown-component[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin-top:20px}.dropdown-component[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]{margin-bottom:20px}.dropdown-component[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1rem;margin-bottom:6px}"]}),e})()},{path:"",pathMatch:"full",redirectTo:"badge"}];let T=(()=>{class e{}return e.\u0275mod=d.Lb({type:e}),e.\u0275inj=d.Kb({factory:function(o){return new(o||e)},imports:[[a.b,n.d.forChild(S),i.a]]}),e})()}}]);