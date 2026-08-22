import{b as se,e as ce,m as pe,o as de,p as me}from"./chunk-BIJ5ML5K.js";import{$ as oe,ma as re,s as h,t as $,wa as ae,xa as x,za as le}from"./chunk-77THPLZL.js";import{A as ne,c as Z,e as J,f as X,g as Y,k as ee,q as te,x as ie}from"./chunk-RHGBMX6I.js";import{Ab as T,Bb as O,Fb as A,Gb as l,J as D,Kb as F,Lb as K,Mb as y,Na as P,Nb as v,Pa as c,Qb as Q,R as _,S as L,Ua as M,W as V,X as E,Yb as N,Zb as z,_b as b,ab as R,bb as B,ca as p,da as d,eb as U,ga as S,gb as k,jc as G,ma as I,mb as m,nb as s,nc as W,q as C,rb as H,tb as j,ub as q,vb as u,wb as g,xb as w}from"./chunk-57IQOT7G.js";var he=["item"],_e=["list"],fe=t=>({"p-disabled":t}),ye=()=>({exact:!1}),ke=t=>({$implicit:t}),ve=(t,o)=>o.label;function xe(t,o){if(t&1&&w(0,"span",13),t&2){let e=l(3).$implicit;s("ngClass",e.icon)("ngStyle",e.iconStyle)}}function Ce(t,o){t&1&&T(0)}function Ie(t,o){if(t&1&&(u(0,"a",10),k(1,xe,1,2,"span",11)(2,Ce,1,0,"ng-container",12),g()),t&2){let e=l(2).$implicit,i=l();s("routerLink",e.routerLink)("queryParams",e.queryParams)("ngClass",b(17,fe,e.disabled))("routerLinkActiveOptions",e.routerLinkActiveOptions||z(19,ye))("target",e.target)("tooltipOptions",e.tooltipOptions)("fragment",e.fragment)("queryParamsHandling",e.queryParamsHandling)("preserveFragment",e.preserveFragment)("skipLocationChange",e.skipLocationChange)("replaceUrl",e.replaceUrl)("state",e.state),m("tabindex",e.disabled||i.readonly?null:e.tabindex?e.tabindex:"-1")("aria-hidden",!0),c(),s("ngIf",e.icon&&!i.itemTemplate&&!i._itemTemplate),c(),s("ngTemplateOutlet",i.itemTemplate||i.itemTemplate)("ngTemplateOutletContext",b(20,ke,e))}}function we(t,o){if(t&1&&w(0,"span",13),t&2){let e=l(3).$implicit;s("ngClass",e.icon)("ngStyle",e.iconStyle)}}function Te(t,o){t&1&&T(0)}function Oe(t,o){if(t&1&&(u(0,"a",14),k(1,we,1,2,"span",11)(2,Te,1,0,"ng-container",12),g()),t&2){let e=l(2),i=e.$implicit,n=e.$index,r=l();s("tooltipPosition",i.tooltipPosition)("tooltipOptions",i.tooltipOptions)("ngClass",b(10,fe,i.disabled))("target",i.target),m("href",i.url||null,P)("tabindex",i.disabled||n!==r.activeIndex&&r.readonly?null:i.tabindex?i.tabindex:"-1")("aria-hidden",!0),c(),s("ngIf",i.icon&&!r.itemTemplate&&!r._itemTemplate),c(),s("ngTemplateOutlet",r.itemTemplate||r._itemTemplate)("ngTemplateOutletContext",b(12,ke,i))}}function Ae(t,o){if(t&1){let e=O();u(0,"li",7),A("click",function(n){p(e);let r=l().$implicit,a=l();return d(a.onItemClick(n,r))})("mouseenter",function(){p(e);let n=l().$index,r=l();return d(r.onItemMouseEnter(n))}),u(1,"div",8),k(2,Ie,3,22,"a",9)(3,Oe,3,14,"ng-template",null,1,G),g()()}if(t&2){let e=Q(4),i=l(),n=i.$implicit,r=i.$index,a=l();s("ngClass",a.itemClass(n,r)),m("id",a.getItemId(n,r))("aria-label",n.label)("aria-disabled",a.disabled(n))("data-pc-section","menuitem")("data-p-focused",a.isItemActive(a.getItemId(n,r)))("data-p-disabled",a.disabled(n)||!1),c(),m("data-pc-section","content"),c(),s("ngIf",a.isClickableRouterLink(n))("ngIfElse",e)}}function Fe(t,o){if(t&1&&k(0,Ae,5,10,"li",6),t&2){let e=o.$implicit;s("ngIf",e.visible!==!1)}}var $e=({dt:t})=>`
.p-dock {
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
}

.p-dock-list-container {
    display: flex;
    pointer-events: auto;
    background: ${t("dock.background")};
    border: 1px solid ${t("dock.border.color")};
    padding: ${t("dock.padding")};
    border-radius: ${t("dock.border.radius")};
}

.p-dock-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 0 none;
}

.p-dock-item {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
    padding: ${t("dock.item.padding")};
    border-radius: ${t("dock.item.border.radius")};
}

.p-dock-item.p-focus {
    box-shadow: ${t("dock.item.focus.ring.shadow")};
    outline: ${t("dock.item.focus.ring.width")} ${t("dock.item.focus.ring.style")} ${t("dock.item.focus.ring.color")};
    outline-offset: ${t("dock.item.focus.ring.offset")};
}

.p-dock-item-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    cursor: default;
    width: ${t("dock.item.size")};
    height: ${t("dock.item.size")};
}

.p-dock-top {
    left: 0;
    top: 0;
    width: 100%;
}

.p-dock-top .p-dock-item {
    transform-origin: center top;
}

.p-dock-bottom {
    left: 0;
    bottom: 0;
    width: 100%;
}

.p-dock-bottom .p-dock-item {
    transform-origin: center bottom;
}

.p-dock-right {
    right: 0;
    top: 0;
    height: 100%;
}

.p-dock-right:dir(rtl) {
    right: auto;
    left: 0;
}

.p-dock-right .p-dock-item {
    transform-origin: center right;
}

.p-dock-right .p-dock-list {
    flex-direction: column;
}

.p-dock-left {
    left: 0;
    top: 0;
    height: 100%;
}

.p-dock-left:dir(rtl) {
    left: auto;
    right: 0;
}

.p-dock-left .p-dock-item {
    transform-origin: center left;
}

.p-dock-left .p-dock-list {
    flex-direction: column;
}

.p-dock-mobile.p-dock-top .p-dock-list-container,
.p-dock-mobile.p-dock-bottom .p-dock-list-container {
    overflow-x: auto;
    width: 100%;
}
.p-dock-mobile.p-dock-top .p-dock-list-container .p-dock-list,
.p-dock-mobile.p-dock-bottom .p-dock-list-container .p-dock-list {
    margin: 0 auto;
}
.p-dock-mobile.p-dock-left .p-dock-list-container,
.p-dock-mobile.p-dock-right .p-dock-list-container {
    overflow-y: auto;
    height: 100%;
}
.p-dock-mobile.p-dock-left .p-dock-list-container .p-dock-list,
.p-dock-mobile.p-dock-right .p-dock-list-container .p-dock-list {
    margin: auto 0;
}
.p-dock-mobile .p-dock-list .p-dock-item {
    transform: none;
    margin: 0;
}
`,De={root:({instance:t,props:o})=>["p-dock p-component",`p-dock-${o.position}`,{"p-dock-mobile":t.queryMatches}],listContainer:"p-dock-list-container",list:"p-dock-list",item:({instance:t,processedItem:o,id:e})=>["p-dock-item",{"p-focus":t.isItemActive(e),"p-disabled":t.disabled(o)}],itemContent:"p-dock-item-content",itemLink:"p-dock-item-link",itemIcon:"p-dock-item-icon"},ue=(()=>{class t extends se{name="dock";theme=$e;classes=De;static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})();var Le=(()=>{class t extends ce{cd;id;style;styleClass;model=null;position="bottom";ariaLabel;ariaLabelledBy;onFocus=new I;onBlur=new I;listViewChild;currentIndex;tabindex=0;focused=!1;focusedOptionIndex=-1;_componentStyle=E(ue);get focusedOptionId(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}constructor(e){super(),this.cd=e,this.currentIndex=-3}ngOnInit(){super.ngOnInit(),this.id=this.id||re("pn_id_")}itemTemplate;_itemTemplate;getItemId(e,i){return e&&e?.id?e.id:`${i}`}getItemProp(e,i){return e&&e.item?oe(e.item[i]):void 0}disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled}isItemActive(e){return e===this.focusedOptionIndex}onListMouseLeave(){this.currentIndex=-3,this.cd.markForCheck()}onItemMouseEnter(e){this.currentIndex=e,this.cd.markForCheck()}onItemClick(e,i){i.command&&i.command({originalEvent:e,item:i})}onListFocus(e){this.focused=!0,this.changeFocusedOptionIndex(0),this.onFocus.emit(e)}onListBlur(e){this.focused=!1,this.focusedOptionIndex=-1,this.onBlur.emit(e)}onListKeyDown(e){switch(e.code){case"ArrowDown":{(this.position==="left"||this.position==="right")&&this.onArrowDownKey(),e.preventDefault();break}case"ArrowUp":{(this.position==="left"||this.position==="right")&&this.onArrowUpKey(),e.preventDefault();break}case"ArrowRight":{(this.position==="top"||this.position==="bottom")&&this.onArrowDownKey(),e.preventDefault();break}case"ArrowLeft":{(this.position==="top"||this.position==="bottom")&&this.onArrowUpKey(),e.preventDefault();break}case"Home":{this.onHomeKey(),e.preventDefault();break}case"End":{this.onEndKey(),e.preventDefault();break}case"Enter":case"Space":{this.onSpaceKey(),e.preventDefault();break}default:break}}onArrowDownKey(){let e=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e)}onArrowUpKey(){let e=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e)}onHomeKey(){this.changeFocusedOptionIndex(0)}onEndKey(){this.changeFocusedOptionIndex(h(this.listViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1)}onSpaceKey(){let e=$(this.listViewChild.nativeElement,`li[id="${`${this.focusedOptionIndex}`}"]`),i=e&&$(e,'[data-pc-section="action"]');i?i.click():e&&e.click()}findNextOptionIndex(e){let n=[...h(this.listViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(r=>r.id===e);return n>-1?n+1:0}changeFocusedOptionIndex(e){let i=h(this.listViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),n=e>=i.length?i.length-1:e<0?0:e;this.focusedOptionIndex=i[n].getAttribute("id")}findPrevOptionIndex(e){let n=[...h(this.listViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(r=>r.id===e);return n>-1?n-1:0}get containerClass(){return{[`p-dock p-component  p-dock-${this.position}`]:!0}}isClickableRouterLink(e){return e.routerLink&&!e.disabled}itemClass(e,i){return{"p-dock-item":!0,"p-focus":this.isItemActive(this.getItemId(e,i)),"p-disabled":this.disabled(e)}}templates;ngAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="item"?this._itemTemplate=e.template:this._itemTemplate=e.template})}static \u0275fac=function(i){return new(i||t)(M(W))};static \u0275cmp=R({type:t,selectors:[["p-dock"]],contentQueries:function(i,n,r){if(i&1&&(F(r,he,5),F(r,ae,4)),i&2){let a;y(a=v())&&(n.itemTemplate=a.first),y(a=v())&&(n.templates=a)}},viewQuery:function(i,n){if(i&1&&K(_e,5),i&2){let r;y(r=v())&&(n.listViewChild=r.first)}},inputs:{id:"id",style:"style",styleClass:"styleClass",model:"model",position:"position",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},features:[N([ue]),U],decls:6,vars:12,consts:[["list",""],["elseBlock",""],[3,"ngClass","ngStyle"],[1,"p-dock-list-container"],["role","menu",1,"p-dock-list",3,"focus","blur","keydown","mouseleave","tabindex"],["role","menuitem",3,"ngClass"],["role","menuitem",3,"ngClass","click","mouseenter",4,"ngIf"],["role","menuitem",3,"click","mouseenter","ngClass"],[1,"p-dock-item-content"],["pRipple","","class","p-dock-item-link","pTooltip","",3,"routerLink","queryParams","ngClass","routerLinkActiveOptions","target","tooltipOptions","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf","ngIfElse"],["pRipple","","pTooltip","",1,"p-dock-item-link",3,"routerLink","queryParams","ngClass","routerLinkActiveOptions","target","tooltipOptions","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["class","p-dock-item-icon",3,"ngClass","ngStyle",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-dock-item-icon",3,"ngClass","ngStyle"],["pRipple","","pTooltip","",1,"p-dock-item-link",3,"tooltipPosition","tooltipOptions","ngClass","target"]],template:function(i,n){if(i&1){let r=O();u(0,"div",2)(1,"div",3)(2,"ul",4,0),A("focus",function(f){return p(r),d(n.onListFocus(f))})("blur",function(f){return p(r),d(n.onListBlur(f))})("keydown",function(f){return p(r),d(n.onListKeyDown(f))})("mouseleave",function(){return p(r),d(n.onListMouseLeave())}),j(4,Fe,1,1,"li",5,ve),g()()()}i&2&&(H(n.styleClass),s("ngClass",n.containerClass)("ngStyle",n.style),m("data-pc-name","dock"),c(2),s("tabindex",n.tabindex),m("id",n.id)("aria-orientation",n.position==="bottom"||n.position==="top"?"horizontal":"vertical")("aria-activedescendant",n.focused?n.focusedOptionId:void 0)("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledBy)("data-pc-section","menu"),c(2),q(n.model))},dependencies:[ee,Z,J,Y,X,ne,ie,pe,me,de,x],encapsulation:2,changeDetection:0})}return t})(),tt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=B({type:t});static \u0275inj=L({imports:[Le,x,x]})}return t})();var ge=class t{constructor(o){this.http=o}http;baseUrl=le.baseUrl;url="/AiVision";getAiVisionData(o,e="1d"){return this.http.get(`${this.baseUrl}${this.url}/device/${o}/history`,{params:{messageType:1,timeSpan:e}}).pipe(C(i=>this.unwrapArray(i)),D(1))}getVisionPacketDetails(o){return this.http.get(`${this.baseUrl}${this.url}/packet/${o}/vision-packet-details`).pipe(C(e=>this.unwrapImage(e)))}unwrapImage(o){if(typeof o=="string")return o.trim()||null;if(!o||typeof o!="object")return null;let e=o.data;return typeof e=="string"&&e.trim()?e.trim():null}unwrapArray(o){if(Array.isArray(o))return o;if(o&&typeof o=="object"){let e=o;if(Array.isArray(e.data))return e.data;if(Array.isArray(e.items))return e.items}return[]}static \u0275fac=function(e){return new(e||t)(V(te))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};export{tt as a,ge as b};
