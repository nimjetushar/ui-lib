"use strict";(self.webpackChunkui_library_documentation=self.webpackChunkui_library_documentation||[]).push([[934],{3658:(L,T,p)=>{p.d(T,{N:()=>b});var e=p(4946),h=p(95);function b(t){return{provide:h.JU,useExisting:(0,e.Gpc)(()=>t),multi:!0}}},5117:(L,T,p)=>{p.d(T,{p:()=>e});let e=(()=>{class h{static#t=this.zindex=1e3;static#e=this.calculatedScrollbarWidth=null;static#i=this.calculatedScrollbarHeight=null;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){const r=n.trim().split(" ");for(let c=0;c<r.length;c++)t.classList.add(r[c])}else{const r=n.split(" ");for(let c=0;c<r.length;c++)t.className+=" "+r[c]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static hasClass(t,n){return!(!t||!n)&&(t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className))}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){const n=t.parentNode.childNodes;let r=0;for(let c=0;c<n.length;c++){if(n[c]==t)return r;1==n[c].nodeType&&r++}return-1}static getParents(t,n=[]){return null===t.parentNode?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){const n=[];if(t){const r=this.getParents(t),c=/(auto|scroll)/,y=w=>{const f=window.getComputedStyle(w,null);return c.test(f.getPropertyValue("overflow"))||c.test(f.getPropertyValue("overflowX"))||c.test(f.getPropertyValue("overflowY"))};for(const w of r){const f=1===w.nodeType&&w.dataset.scrollselectors;if(f){const O=f.split(",");for(const o of O){const u=this.findSingle(w,o);u&&y(u)&&n.push(u)}}9!==w.nodeType&&y(w)&&n.push(w)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";const n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";const n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){return t.style.visibility="hidden",t.style.display="block",t.style.display="none",t.style.visibility="visible",{width:t.offsetWidth,height:t.offsetHeight}}static fadeIn(t,n){t.style.opacity="0";let r=+new Date,c=0;const y=function(){c=+t.style.opacity.replace(",",".")+((new Date).getTime()-r)/n,t.style.opacity=`${c}`,r=+new Date,+c<1&&(window.requestAnimationFrame&&window.requestAnimationFrame(y)||setTimeout(y,16))};y()}static getWindowScrollTop(){const t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){const t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static getOuterWidth(t,n){let r=t.offsetWidth;if(n){const c=getComputedStyle(t);r+=parseFloat(c.marginLeft)+parseFloat(c.marginRight)}return r}static innerWidth(t){let n=t.offsetWidth;const r=getComputedStyle(t);return n+=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static getOuterHeight(t,n){let r=t.offsetHeight;if(n){const c=getComputedStyle(t);r+=parseFloat(c.marginTop)+parseFloat(c.marginBottom)}return r}static getViewport(){const t=window,n=document,r=n.documentElement,c=n.getElementsByTagName("body")[0];return{width:t.innerWidth||r.clientWidth||c.clientWidth,height:t.innerHeight||r.clientHeight||c.clientHeight}}static replaceElementWith(t,n){const r=t.parentNode;if(!r)throw"Can't replace element";return r.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){const t=window.navigator.userAgent;return t.indexOf("MSIE ")>0||(t.indexOf("Trident/")>0?(t.indexOf("rv:"),!0):t.indexOf("Edge/")>0)}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else{if(!(n&&n.el&&n.el.nativeElement))throw"Cannot append "+n+" to "+t;n.el.nativeElement.appendChild(t)}}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else{if(!n.el||!n.el.nativeElement)throw"Cannot remove "+t+" from "+n;n.el.nativeElement.removeChild(t)}}static isElement(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName}static calculateScrollbarWidth(t){if(t){const n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}{if(null!==this.calculatedScrollbarWidth)return this.calculatedScrollbarWidth;const n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);const r=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=r,r}}static calculateScrollbarHeight(){if(null!==this.calculatedScrollbarHeight)return this.calculatedScrollbarHeight;const t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);const n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,r){t[n].apply(t,r)}static isHidden(t){return!t||null===t.offsetParent}static isVisible(t){return t&&null!=t.offsetParent}static isExist(t){return null!==t&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableElements(t){const n=h.find(t,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                [href]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]):not(.p-disabled)'),r=[];for(const c of n)(c.offsetWidth||c.offsetHeight||c.getClientRects().length)&&r.push(c);return r}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}}return h})()},7168:(L,T,p)=>{p.d(T,{J:()=>Y});var e=p(4946),h=p(95),b=p(8645),t=p(7394);class n extends t.w0{constructor(a,i){super()}schedule(a,i=0){return this}}const r={setInterval(l,a,...i){const{delegate:s}=r;return s?.setInterval?s.setInterval(l,a,...i):setInterval(l,a,...i)},clearInterval(l){const{delegate:a}=r;return(a?.clearInterval||clearInterval)(l)},delegate:void 0};var c=p(9039);const w={now:()=>(w.delegate||Date).now(),delegate:void 0};class f{constructor(a,i=f.now){this.schedulerActionCtor=a,this.now=i}schedule(a,i=0,s){return new this.schedulerActionCtor(this,a).schedule(s,i)}}f.now=w.now;const o=new class O extends f{constructor(a,i=f.now){super(a,i),this.actions=[],this._active=!1}flush(a){const{actions:i}=this;if(this._active)return void i.push(a);let s;this._active=!0;do{if(s=a.execute(a.state,a.delay))break}while(a=i.shift());if(this._active=!1,s){for(;a=i.shift();)a.unsubscribe();throw s}}}(class y extends n{constructor(a,i){super(a,i),this.scheduler=a,this.work=i,this.pending=!1}schedule(a,i=0){var s;if(this.closed)return this;this.state=a;const d=this.id,g=this.scheduler;return null!=d&&(this.id=this.recycleAsyncId(g,d,i)),this.pending=!0,this.delay=i,this.id=null!==(s=this.id)&&void 0!==s?s:this.requestAsyncId(g,this.id,i),this}requestAsyncId(a,i,s=0){return r.setInterval(a.flush.bind(a,this),s)}recycleAsyncId(a,i,s=0){if(null!=s&&this.delay===s&&!1===this.pending)return i;null!=i&&r.clearInterval(i)}execute(a,i){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const s=this._execute(a,i);if(s)return s;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(a,i){let d,s=!1;try{this.work(a)}catch(g){s=!0,d=g||new Error("Scheduled action threw falsy error")}if(s)return this.unsubscribe(),d}unsubscribe(){if(!this.closed){const{id:a,scheduler:i}=this,{actions:s}=i;this.work=this.state=this.scheduler=null,this.pending=!1,(0,c.P)(s,this),null!=a&&(this.id=this.recycleAsyncId(i,a,null)),this.delay=null,super.unsubscribe()}}});var m=p(9360),v=p(8251),E=p(9773),H=p(1678);let P=(()=>{class l{constructor(){this._tooltipPosition="top"}set tooltipPosition(i){i&&(this._tooltipPosition=["right","left","top","bottom"].includes(i)?i:"top")}get tooltipPosition(){return this._tooltipPosition}static#t=this.\u0275fac=function(s){return new(s||l)};static#e=this.\u0275dir=e.lG2({type:l,inputs:{tooltip:"tooltip",tooltipPosition:"tooltipPosition"}})}return l})();var B=p(3658),D=p(6814);let A=(()=>{class l{onDocumentClick(i){this.elementRef.nativeElement.contains(i.target)||this.tBlur.emit(i)}constructor(i){this.elementRef=i,this.tBlur=new e.vpe}static#t=this.\u0275fac=function(s){return new(s||l)(e.Y36(e.SBq))};static#e=this.\u0275dir=e.lG2({type:l,selectors:[["","tBlur",""]],hostBindings:function(s,d){1&s&&e.NdJ("click",function(_){return d.onDocumentClick(_)},!1,e.evT)},outputs:{tBlur:"tBlur"},standalone:!0})}return l})();var M=p(3016);const F=["inputField"];function W(l,a){if(1&l&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&l){const i=e.oxw();e.xp6(1),e.Oqu(i.selectedOptions.label)}}function k(l,a){if(1&l&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&l){const i=e.oxw();e.xp6(1),e.Oqu(i.placeholder||"Select option")}}function Z(l,a){if(1&l){const i=e.EpF();e.TgZ(0,"i",10),e.NdJ("click",function(d){e.CHM(i);const g=e.oxw();return e.KtG(g.clearSelection(d))}),e.qZA()}}function N(l,a){if(1&l){const i=e.EpF();e.TgZ(0,"div",14),e._UZ(1,"input",15),e.TgZ(2,"i",16),e.NdJ("click",function(){e.CHM(i);const d=e.oxw(2);return e.KtG(d.filterCriteria.setValue(null))}),e.qZA()()}if(2&l){const i=e.oxw(2);e.xp6(1),e.Q6J("formControl",i.filterCriteria)}}const z=function(l){return{selected:l}};function R(l,a){if(1&l){const i=e.EpF();e.ynx(0),e.TgZ(1,"div",18),e.NdJ("click",function(){const g=e.CHM(i).$implicit,_=e.oxw(3);return e.KtG(_.optionSelectHandler(g))}),e._uU(2),e.qZA(),e.BQk()}if(2&l){const i=a.$implicit;e.xp6(1),e.Q6J("ngClass",e.VKq(2,z,i.isSelected)),e.xp6(1),e.hij(" ",i.label," ")}}function V(l,a){if(1&l&&(e.ynx(0),e.YNc(1,R,3,4,"ng-container",17),e.BQk()),2&l){const i=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",i.dropdownOptions)("ngForTrackBy",i.optionsTrackBy)}}function U(l,a){if(1&l&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&l){const i=e.oxw(2);e.xp6(1),e.hij(" ",i.emptyMessage||"No options for filter criteria"," ")}}function J(l,a){if(1&l&&(e.TgZ(0,"div",11),e.YNc(1,N,3,1,"div",12),e.YNc(2,V,2,2,"ng-container",2),e.YNc(3,U,2,1,"ng-template",null,13,e.W1O),e.qZA()),2&l){const i=e.MAs(4),s=e.oxw();e.Udp("max-height",s.scrollHeight),e.xp6(1),e.Q6J("ngIf",s.showFilter),e.xp6(1),e.Q6J("ngIf",s.dropdownOptions.length)("ngIfElse",i)}}const Q=function(l){return{focused:l}};let Y=(()=>{class l extends P{constructor(){super(...arguments),this.placeholder="",this.disabled=!1,this.scrollHeight="200px",this.showFilter=!1,this.disableClear=!1,this.emptyMessage="",this.inputId="",this.name="",this.onFocus=new e.vpe,this.onBlur=new e.vpe,this.onChange=new e.vpe,this.dropdownOptions=[],this.isPanelOpen=!1,this.isFocused=!1,this.onTouched=H.ZT,this.filterCriteria=new h.NI(""),this._onChange=H.ZT,this._destroysubscription$=new b.x,this._options=[],this._cdr=(0,e.f3M)(e.sBO)}set options(i){i?.length&&(this.dropdownOptions=[...i],this._options=[...i])}ngOnInit(){this.filterCriteria.valueChanges.pipe(function x(l,a=o){return(0,m.e)((i,s)=>{let d=null,g=null,_=null;const I=()=>{if(d){d.unsubscribe(),d=null;const C=g;g=null,s.next(C)}};function K(){const C=_+l,S=a.now();if(S<C)return d=this.schedule(void 0,C-S),void s.add(d);I()}i.subscribe((0,v.x)(s,C=>{g=C,_=a.now(),d||(d=a.schedule(K,l),s.add(d))},()=>{I(),s.complete()},void 0,()=>{g=d=null}))})}(200),(0,E.R)(this._destroysubscription$)).subscribe(i=>{const s=i?.toLowerCase()??"";this.dropdownOptions=s?this._options.filter(d=>d.label.toLowerCase().includes(s))??[]:this._options,this._cdr.detectChanges()})}ngOnDestroy(){this._destroysubscription$.next(null),this._destroysubscription$.complete()}writeValue(i){const s=this.dropdownOptions.find(d=>d.value===i);s&&this.optionSelectHandler(s),this.updateModel(i)}registerOnChange(i){this._onChange=i}registerOnTouched(i){this.onTouched=i}setDisabledState(i){this.disabled=i}togglePanel(){this.disabled||(this.isPanelOpen=!this.isPanelOpen)}optionSelectHandler(i){this.disabled||(this.selectedOptions=i,this.dropdownOptions.forEach(s=>{delete s.isSelected}),i.isSelected=!0,this.isPanelOpen=!1,this.updateModel(i.value))}clearSelection(i){i.stopPropagation(),this.selectedOptions=null,this.dropdownOptions.forEach(s=>{delete s.isSelected}),this.updateModel(null)}focusHandler(i){this.disabled||this.isFocused||(this.isFocused=!0,this.inputField.nativeElement.focus(),this.onFocus.emit({...i,type:"focus"}))}blurHandler(i){this.isFocused&&(this.isFocused=!1,this.isPanelOpen=!1,this.inputField.nativeElement.blur(),this.onBlur.emit({...i,type:"blur"}))}optionsTrackBy(i){return i}updateModel(i){this.onChange.emit(i),this._onChange(i)}static#t=this.\u0275fac=function(){let i;return function(d){return(i||(i=e.n5z(l)))(d||l)}}();static#e=this.\u0275cmp=e.Xpm({type:l,selectors:[["t-dropdown"]],viewQuery:function(s,d){if(1&s&&e.Gf(F,5),2&s){let g;e.iGM(g=e.CRH())&&(d.inputField=g.first)}},hostAttrs:[1,"t-dropdown"],hostVars:2,hostBindings:function(s,d){2&s&&e.ekj("disabled",d.disabled)},inputs:{options:"options",placeholder:"placeholder",disabled:"disabled",scrollHeight:"scrollHeight",showFilter:"showFilter",disableClear:"disableClear",emptyMessage:"emptyMessage",inputId:"inputId",name:"name"},outputs:{onFocus:"onFocus",onBlur:"onBlur",onChange:"onChange"},features:[e._Bn([(0,B.N)(l)]),e.qOj],decls:11,vars:11,consts:[[1,"dropdown-wrapper",3,"ngClass","tBlur"],[1,"dropdown-trigger",3,"tTooltip","tooltipPosition","click"],[4,"ngIf","ngIfElse"],["placeholderTpl",""],[1,"trigger-icon-wrapper"],["class","fa-solid fa-xmark clear-selection-icon",3,"click",4,"ngIf"],[1,"fa-solid","fa-chevron-down","dropdown-trigger-icon"],["type","text",1,"hide"],["inputField",""],["class","dropdown-options",3,"maxHeight",4,"ngIf"],[1,"fa-solid","fa-xmark","clear-selection-icon",3,"click"],[1,"dropdown-options"],["class","dropdown-filter-input",4,"ngIf"],["emptyMessageTpl",""],[1,"dropdown-filter-input"],["type","text","placeholder","Search option...",2,"width","100%",3,"formControl"],[1,"fa-solid","fa-xmark","clear-icon",3,"click"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"dropdown-options-item",3,"ngClass","click"]],template:function(s,d){if(1&s&&(e.TgZ(0,"div",0),e.NdJ("tBlur",function(_){return d.blurHandler(_)}),e.TgZ(1,"div",1),e.NdJ("click",function(_){return d.togglePanel(),d.focusHandler(_)}),e.YNc(2,W,2,1,"span",2),e.YNc(3,k,2,1,"ng-template",null,3,e.W1O),e.TgZ(5,"div",4),e.YNc(6,Z,1,0,"i",5),e._UZ(7,"i",6),e.qZA(),e._UZ(8,"input",7,8),e.qZA(),e.YNc(10,J,5,5,"div",9),e.qZA()),2&s){const g=e.MAs(4);e.Q6J("ngClass",e.VKq(9,Q,d.isFocused)),e.xp6(1),e.Q6J("tTooltip",d.tooltip)("tooltipPosition",d.tooltipPosition),e.xp6(1),e.Q6J("ngIf",d.selectedOptions)("ngIfElse",g),e.xp6(4),e.Q6J("ngIf",!d.disableClear),e.xp6(2),e.uIk("name",d.name)("id",d.inputId),e.xp6(2),e.Q6J("ngIf",d.isPanelOpen)}},dependencies:[D.mk,D.sg,D.O5,A,h.Fj,h.JJ,h.oH,M.i],styles:[".t-dropdown{display:block;width:14em}.t-dropdown .dropdown-wrapper{position:relative}.t-dropdown .dropdown-wrapper .dropdown-trigger{display:flex;align-items:center;min-height:2em;border:2px solid #0069b1;border-radius:.3em;padding:.2em .5em;cursor:pointer}.t-dropdown .dropdown-wrapper .dropdown-trigger:hover{border-color:#003f81}.t-dropdown .dropdown-wrapper .dropdown-trigger .trigger-icon-wrapper{display:flex;align-items:center;margin-left:auto;gap:.6em}.t-dropdown .dropdown-wrapper .dropdown-filter-input{position:relative;padding:.5em}.t-dropdown .dropdown-wrapper .dropdown-filter-input input{padding-top:5px;padding-bottom:5px}.t-dropdown .dropdown-wrapper .dropdown-filter-input .clear-icon{position:absolute;right:14px;top:16px;z-index:11}.t-dropdown .dropdown-wrapper .dropdown-options{position:absolute;left:0;right:0;z-index:11;max-height:20em;overflow-x:auto;background-color:#f2f2f2;border-top:none;animation:fadeInFromNone .3s ease-out;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;border-bottom-left-radius:5px;border-bottom-right-radius:5px}.t-dropdown .dropdown-wrapper .dropdown-options .dropdown-options-item{padding:.4em .5em;cursor:pointer}.t-dropdown .dropdown-wrapper .dropdown-options .dropdown-options-item:hover{background-color:#bfbaba}.t-dropdown .dropdown-wrapper .dropdown-options .dropdown-options-item.selected{background-color:#d7d3d3}.t-dropdown .dropdown-wrapper.focused .dropdown-trigger{border-color:#00a8e4}.t-dropdown.disabled .dropdown-trigger{border:1px solid #dfdfdf;cursor:not-allowed;color:#cccaca}.t-dropdown.disabled .dropdown-trigger:hover{border:1px solid #dfdfdf}@keyframes fadeInFromNone{0%{max-height:0;overflow:hidden}1%{max-height:0}99%{overflow:hidden}to{max-height:20em;overflow:auto}}\n"],encapsulation:2,changeDetection:0})}return l})()},3142:(L,T,p)=>{p.d(T,{k:()=>n});var e=p(6814),h=p(95),b=p(5326),t=p(4946);let n=(()=>{class r{static#t=this.\u0275fac=function(w){return new(w||r)};static#e=this.\u0275mod=t.oAB({type:r});static#i=this.\u0275inj=t.cJS({imports:[e.ez,h.UX,b.z]})}return r})()},3016:(L,T,p)=>{p.d(T,{i:()=>w});var e=p(6814),h=p(4946),b=p(1678),t=p(5117);class n{constructor(O,o=b.ZT){this.element=O,this.listener=o}bindScrollListener(){this.scrollableParents=t.p.getScrollableParents(this.element);for(let O=0;O<this.scrollableParents.length;O++)this.scrollableParents[O].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let O=0;O<this.scrollableParents.length;O++)this.scrollableParents[O].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}const y=(()=>{let f=[];const m=v=>v&&parseInt(v.style.zIndex,10)||0;return{get:m,set:(v,x,E)=>{x&&(x.style.zIndex=String(((v,x)=>{const E=f.length>0?f[f.length-1]:{key:v,value:x},H=E.value+(E.key===v?0:x)+2;return f.push({key:v,value:H}),H})(v,E)))},clear:v=>{v&&((v=>{f=f.filter(x=>x.value!==v)})(m(v)),v.style.zIndex="")},getCurrent:()=>f.length>0?f[f.length-1].value:0}})();let w=(()=>{class f{get tooltipDisabled(){return this._disabled}set tooltipDisabled(o){this._disabled=o,this.deactivate()}constructor(o,u,m,v){this.platformId=o,this.el=u,this.zone=m,this.renderer=v,this.escape=!0,this.autoHide=!0,this.fitContent=!0,this.hideOnEscape=!0,this._tooltipOptions={tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",tooltipZIndex:"auto",escape:!0,positionTop:0,positionLeft:0,autoHide:!0,hideOnEscape:!1},this._disabled=!1,this.scrollHandler=null}ngAfterViewInit(){(0,e.NF)(this.platformId)&&this.zone.runOutsideAngular(()=>{if("hover"===this.getOption("tooltipEvent"))this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener);else if("focus"===this.getOption("tooltipEvent")){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);const o=this.getTarget(this.el.nativeElement);o&&(o.addEventListener("focus",this.focusListener),o.addEventListener("blur",this.blurListener))}})}ngOnChanges(o){o.tooltipPosition&&this.setOption({tooltipPosition:o.tooltipPosition.currentValue}),o.tooltipEvent&&this.setOption({tooltipEvent:o.tooltipEvent.currentValue}),o.appendTo&&this.setOption({appendTo:o.appendTo.currentValue}),o.positionStyle&&this.setOption({positionStyle:o.positionStyle.currentValue}),o.tooltipStyleClass&&this.setOption({tooltipStyleClass:o.tooltipStyleClass.currentValue}),o.tooltipZIndex&&this.setOption({tooltipZIndex:o.tooltipZIndex.currentValue}),o.escape&&this.setOption({escape:o.escape.currentValue}),o.showDelay&&this.setOption({showDelay:o.showDelay.currentValue}),o.hideDelay&&this.setOption({hideDelay:o.hideDelay.currentValue}),o.life&&this.setOption({life:o.life.currentValue}),o.positionTop&&this.setOption({positionTop:o.positionTop.currentValue}),o.positionLeft&&this.setOption({positionLeft:o.positionLeft.currentValue}),o.tooltipDisabled&&this.setOption({disabled:o.tooltipDisabled.currentValue}),o.tTooltip&&(this.setOption({tooltipLabel:o.tTooltip.currentValue}),this.active&&(o.tTooltip.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),o.autoHide&&this.setOption({autoHide:o.autoHide.currentValue}),o.tooltipOptions&&(this._tooltipOptions={...this._tooltipOptions,...o.tooltipOptions.currentValue},this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(o){(this.isAutoHide()||!(t.p.hasClass(o.toElement,"t-tooltip")||t.p.hasClass(o.toElement,"t-tooltip-arrow")||t.p.hasClass(o.toElement,"t-tooltip-text")||t.p.hasClass(o.relatedTarget,"t-tooltip")))&&this.deactivate()}onFocus(){this.activate()}onBlur(){this.deactivate()}onInputClick(){this.deactivate()}onPressEscape(){this.hideOnEscape&&this.deactivate()}activate(){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){const o=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},o)}}deactivate(){this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div");const o=document.createElement("div");o.className="t-tooltip-arrow",this.container.appendChild(o),this.tooltipText=document.createElement("div"),this.tooltipText.className="t-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),"body"===this.getOption("appendTo")?document.body.appendChild(this.container):"target"===this.getOption("appendTo")?t.p.appendChild(this.container,this.el.nativeElement):t.p.appendChild(this.container,this.getOption("appendTo")),this.container.style.display="inline-block",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()||this.bindContainerMouseleaveListener()}bindContainerMouseleaveListener(){this.containerMouseleaveListener||(this.containerMouseleaveListener=this.renderer.listen(this.container,"mouseleave",()=>{this.deactivate()}))}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=void 0)}show(){!this.getOption("tooltipLabel")||this.getOption("disabled")||(this.create(),this.align(),t.p.fadeIn(this.container,250),"auto"===this.getOption("tooltipZIndex")?y.set("tooltip",this.container,1100):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener())}hide(){"auto"===this.getOption("tooltipZIndex")&&y.clear(this.container),this.remove()}updateText(){this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(this.getOption("tooltipLabel")))):this.tooltipText.innerHTML=this.getOption("tooltipLabel")}align(){switch(this.getOption("tooltipPosition")){case"top":this.alignTop(),this.isOutOfBounds()&&(this.alignBottom(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"bottom":this.alignBottom(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"left":this.alignLeft(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()));break;case"right":this.alignRight(),this.isOutOfBounds()&&(this.alignLeft(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()))}}getHostOffset(){if("body"===this.getOption("appendTo")||"target"===this.getOption("appendTo")){const o=this.el.nativeElement.getBoundingClientRect();return{left:o.left+t.p.getWindowScrollLeft(),top:o.top+t.p.getWindowScrollTop()}}return{left:0,top:0}}alignRight(){this.preAlign("right");const o=this.getHostOffset(),u=o.left+t.p.getOuterWidth(this.el.nativeElement),m=o.top+(t.p.getOuterHeight(this.el.nativeElement)-t.p.getOuterHeight(this.container))/2;this.container.style.left=u+this.getOption("positionLeft")+"px",this.container.style.top=m+this.getOption("positionTop")+"px"}alignLeft(){this.preAlign("left");const o=this.getHostOffset(),u=o.left-t.p.getOuterWidth(this.container),m=o.top+(t.p.getOuterHeight(this.el.nativeElement)-t.p.getOuterHeight(this.container))/2;this.container.style.left=u+this.getOption("positionLeft")+"px",this.container.style.top=m+this.getOption("positionTop")+"px"}alignTop(){this.preAlign("top");const o=this.getHostOffset(),u=o.left+(t.p.getOuterWidth(this.el.nativeElement)-t.p.getOuterWidth(this.container))/2,m=o.top-t.p.getOuterHeight(this.container);this.container.style.left=u+this.getOption("positionLeft")+"px",this.container.style.top=m+this.getOption("positionTop")+"px"}alignBottom(){this.preAlign("bottom");const o=this.getHostOffset(),u=o.left+(t.p.getOuterWidth(this.el.nativeElement)-t.p.getOuterWidth(this.container))/2,m=o.top+t.p.getOuterHeight(this.el.nativeElement);this.container.style.left=u+this.getOption("positionLeft")+"px",this.container.style.top=m+this.getOption("positionTop")+"px"}setOption(o){this._tooltipOptions={...this._tooltipOptions,...o}}getOption(o){return this._tooltipOptions[o]}getTarget(o){return t.p.hasClass(o,"t-inputwrapper")?t.p.findSingle(o,"input"):o}preAlign(o){this.container.style.left="-999px",this.container.style.top="-999px";const u="t-tooltip t-component t-tooltip-"+o;this.container.className=this.getOption("tooltipStyleClass")?u+" "+this.getOption("tooltipStyleClass"):u}isOutOfBounds(){const o=this.container.getBoundingClientRect(),u=o.top,m=o.left,v=t.p.getOuterWidth(this.container),x=t.p.getOuterHeight(this.container),E=t.p.getViewport();return m+v>E.width||m<0||u<0||u+x>E.height}onWindowResize(){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=void 0)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new n(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){if("hover"===this.getOption("tooltipEvent"))this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener);else if("focus"===this.getOption("tooltipEvent")){const o=this.getTarget(this.el.nativeElement);o&&(o.removeEventListener("focus",this.focusListener),o.removeEventListener("blur",this.blurListener))}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&("body"===this.getOption("appendTo")?document.body.removeChild(this.container):"target"===this.getOption("appendTo")?this.el.nativeElement.removeChild(this.container):t.p.removeChild(this.container,this.getOption("appendTo"))),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),this.container&&y.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null)}static#t=this.\u0275fac=function(u){return new(u||f)(h.Y36(h.Lbi),h.Y36(h.SBq),h.Y36(h.R0b),h.Y36(h.Qsj))};static#e=this.\u0275dir=h.lG2({type:f,selectors:[["","tTooltip",""]],hostBindings:function(u,m){1&u&&h.NdJ("keydown.escape",function(x){return m.onPressEscape(x)},!1,h.evT)},inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:"escape",showDelay:"showDelay",hideDelay:"hideDelay",life:"life",positionTop:"positionTop",positionLeft:"positionLeft",autoHide:"autoHide",fitContent:"fitContent",hideOnEscape:"hideOnEscape",tTooltip:"tTooltip",tooltipDisabled:"tooltipDisabled",tooltipOptions:"tooltipOptions"},features:[h.TTD]})}return f})()},5326:(L,T,p)=>{p.d(T,{z:()=>b});var e=p(6814),h=p(4946);let b=(()=>{class t{static#t=this.\u0275fac=function(c){return new(c||t)};static#e=this.\u0275mod=h.oAB({type:t});static#i=this.\u0275inj=h.cJS({imports:[e.ez]})}return t})()},2885:(L,T,p)=>{p.d(T,{u:()=>h});var e=p(4946);let h=(()=>{class b{static#t=this.\u0275fac=function(r){return new(r||b)};static#e=this.\u0275cmp=e.Xpm({type:b,selectors:[["ui-library-documentation-common-note"]],decls:2,vars:0,template:function(r,c){1&r&&(e.TgZ(0,"span"),e._uU(1," Note: For performance the component inputs are optimised so don't provide parameter which are not required for proper functioning.\n"),e.qZA())},changeDetection:0})}return b})()}}]);