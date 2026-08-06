import{b as ne,e as oe,m as re,o as ae,p as se}from"./chunk-ZRUSOWYG.js";import{$ as ee,ma as te,s as h,t as F,wa as ie,xa as x}from"./chunk-EZM4ELZ5.js";import{A as Z,c as z,e as G,f as J,g as W,k as X,x as Y}from"./chunk-OQJO2RQG.js";import{$b as _,Ab as v,Bb as w,Fb as O,Gb as l,Kb as T,Lb as q,Mb as b,Na as V,Nb as y,Pa as c,Qb as Q,R as L,S as D,Ua as S,X as $,Zb as j,_b as U,ab as A,bb as M,ca as d,da as p,eb as P,ga as E,gb as k,kc as N,ma as C,mb as m,nb as s,oc as H,rb as B,tb as K,ub as R,vb as u,wb as g,xb as I}from"./chunk-3RSLITOT.js";var pe=["item"],me=["list"],ce=t=>({"p-disabled":t}),ue=()=>({exact:!1}),de=t=>({$implicit:t}),fe=(t,a)=>a.label;function ke(t,a){if(t&1&&I(0,"span",13),t&2){let e=l(3).$implicit;s("ngClass",e.icon)("ngStyle",e.iconStyle)}}function ge(t,a){t&1&&v(0)}function _e(t,a){if(t&1&&(u(0,"a",10),k(1,ke,1,2,"span",11)(2,ge,1,0,"ng-container",12),g()),t&2){let e=l(2).$implicit,i=l();s("routerLink",e.routerLink)("queryParams",e.queryParams)("ngClass",_(17,ce,e.disabled))("routerLinkActiveOptions",e.routerLinkActiveOptions||U(19,ue))("target",e.target)("tooltipOptions",e.tooltipOptions)("fragment",e.fragment)("queryParamsHandling",e.queryParamsHandling)("preserveFragment",e.preserveFragment)("skipLocationChange",e.skipLocationChange)("replaceUrl",e.replaceUrl)("state",e.state),m("tabindex",e.disabled||i.readonly?null:e.tabindex?e.tabindex:"-1")("aria-hidden",!0),c(),s("ngIf",e.icon&&!i.itemTemplate&&!i._itemTemplate),c(),s("ngTemplateOutlet",i.itemTemplate||i.itemTemplate)("ngTemplateOutletContext",_(20,de,e))}}function he(t,a){if(t&1&&I(0,"span",13),t&2){let e=l(3).$implicit;s("ngClass",e.icon)("ngStyle",e.iconStyle)}}function be(t,a){t&1&&v(0)}function ye(t,a){if(t&1&&(u(0,"a",14),k(1,he,1,2,"span",11)(2,be,1,0,"ng-container",12),g()),t&2){let e=l(2),i=e.$implicit,n=e.$index,o=l();s("tooltipPosition",i.tooltipPosition)("tooltipOptions",i.tooltipOptions)("ngClass",_(10,ce,i.disabled))("target",i.target),m("href",i.url||null,V)("tabindex",i.disabled||n!==o.activeIndex&&o.readonly?null:i.tabindex?i.tabindex:"-1")("aria-hidden",!0),c(),s("ngIf",i.icon&&!o.itemTemplate&&!o._itemTemplate),c(),s("ngTemplateOutlet",o.itemTemplate||o._itemTemplate)("ngTemplateOutletContext",_(12,de,i))}}function xe(t,a){if(t&1){let e=w();u(0,"li",7),O("click",function(n){d(e);let o=l().$implicit,r=l();return p(r.onItemClick(n,o))})("mouseenter",function(){d(e);let n=l().$index,o=l();return p(o.onItemMouseEnter(n))}),u(1,"div",8),k(2,_e,3,22,"a",9)(3,ye,3,14,"ng-template",null,1,N),g()()}if(t&2){let e=Q(4),i=l(),n=i.$implicit,o=i.$index,r=l();s("ngClass",r.itemClass(n,o)),m("id",r.getItemId(n,o))("aria-label",n.label)("aria-disabled",r.disabled(n))("data-pc-section","menuitem")("data-p-focused",r.isItemActive(r.getItemId(n,o)))("data-p-disabled",r.disabled(n)||!1),c(),m("data-pc-section","content"),c(),s("ngIf",r.isClickableRouterLink(n))("ngIfElse",e)}}function Ce(t,a){if(t&1&&k(0,xe,5,10,"li",6),t&2){let e=a.$implicit;s("ngIf",e.visible!==!1)}}var Ie=({dt:t})=>`
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
`,ve={root:({instance:t,props:a})=>["p-dock p-component",`p-dock-${a.position}`,{"p-dock-mobile":t.queryMatches}],listContainer:"p-dock-list-container",list:"p-dock-list",item:({instance:t,processedItem:a,id:e})=>["p-dock-item",{"p-focus":t.isItemActive(e),"p-disabled":t.disabled(a)}],itemContent:"p-dock-item-content",itemLink:"p-dock-item-link",itemIcon:"p-dock-item-icon"},le=(()=>{class t extends ne{name="dock";theme=Ie;classes=ve;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var we=(()=>{class t extends oe{cd;id;style;styleClass;model=null;position="bottom";ariaLabel;ariaLabelledBy;onFocus=new C;onBlur=new C;listViewChild;currentIndex;tabindex=0;focused=!1;focusedOptionIndex=-1;_componentStyle=$(le);get focusedOptionId(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}constructor(e){super(),this.cd=e,this.currentIndex=-3}ngOnInit(){super.ngOnInit(),this.id=this.id||te("pn_id_")}itemTemplate;_itemTemplate;getItemId(e,i){return e&&e?.id?e.id:`${i}`}getItemProp(e,i){return e&&e.item?ee(e.item[i]):void 0}disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled}isItemActive(e){return e===this.focusedOptionIndex}onListMouseLeave(){this.currentIndex=-3,this.cd.markForCheck()}onItemMouseEnter(e){this.currentIndex=e,this.cd.markForCheck()}onItemClick(e,i){i.command&&i.command({originalEvent:e,item:i})}onListFocus(e){this.focused=!0,this.changeFocusedOptionIndex(0),this.onFocus.emit(e)}onListBlur(e){this.focused=!1,this.focusedOptionIndex=-1,this.onBlur.emit(e)}onListKeyDown(e){switch(e.code){case"ArrowDown":{(this.position==="left"||this.position==="right")&&this.onArrowDownKey(),e.preventDefault();break}case"ArrowUp":{(this.position==="left"||this.position==="right")&&this.onArrowUpKey(),e.preventDefault();break}case"ArrowRight":{(this.position==="top"||this.position==="bottom")&&this.onArrowDownKey(),e.preventDefault();break}case"ArrowLeft":{(this.position==="top"||this.position==="bottom")&&this.onArrowUpKey(),e.preventDefault();break}case"Home":{this.onHomeKey(),e.preventDefault();break}case"End":{this.onEndKey(),e.preventDefault();break}case"Enter":case"Space":{this.onSpaceKey(),e.preventDefault();break}default:break}}onArrowDownKey(){let e=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e)}onArrowUpKey(){let e=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e)}onHomeKey(){this.changeFocusedOptionIndex(0)}onEndKey(){this.changeFocusedOptionIndex(h(this.listViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1)}onSpaceKey(){let e=F(this.listViewChild.nativeElement,`li[id="${`${this.focusedOptionIndex}`}"]`),i=e&&F(e,'[data-pc-section="action"]');i?i.click():e&&e.click()}findNextOptionIndex(e){let n=[...h(this.listViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(o=>o.id===e);return n>-1?n+1:0}changeFocusedOptionIndex(e){let i=h(this.listViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),n=e>=i.length?i.length-1:e<0?0:e;this.focusedOptionIndex=i[n].getAttribute("id")}findPrevOptionIndex(e){let n=[...h(this.listViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(o=>o.id===e);return n>-1?n-1:0}get containerClass(){return{[`p-dock p-component  p-dock-${this.position}`]:!0}}isClickableRouterLink(e){return e.routerLink&&!e.disabled}itemClass(e,i){return{"p-dock-item":!0,"p-focus":this.isItemActive(this.getItemId(e,i)),"p-disabled":this.disabled(e)}}templates;ngAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="item"?this._itemTemplate=e.template:this._itemTemplate=e.template})}static \u0275fac=function(i){return new(i||t)(S(H))};static \u0275cmp=A({type:t,selectors:[["p-dock"]],contentQueries:function(i,n,o){if(i&1&&(T(o,pe,5),T(o,ie,4)),i&2){let r;b(r=y())&&(n.itemTemplate=r.first),b(r=y())&&(n.templates=r)}},viewQuery:function(i,n){if(i&1&&q(me,5),i&2){let o;b(o=y())&&(n.listViewChild=o.first)}},inputs:{id:"id",style:"style",styleClass:"styleClass",model:"model",position:"position",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},features:[j([le]),P],decls:6,vars:12,consts:[["list",""],["elseBlock",""],[3,"ngClass","ngStyle"],[1,"p-dock-list-container"],["role","menu",1,"p-dock-list",3,"focus","blur","keydown","mouseleave","tabindex"],["role","menuitem",3,"ngClass"],["role","menuitem",3,"ngClass","click","mouseenter",4,"ngIf"],["role","menuitem",3,"click","mouseenter","ngClass"],[1,"p-dock-item-content"],["pRipple","","class","p-dock-item-link","pTooltip","",3,"routerLink","queryParams","ngClass","routerLinkActiveOptions","target","tooltipOptions","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf","ngIfElse"],["pRipple","","pTooltip","",1,"p-dock-item-link",3,"routerLink","queryParams","ngClass","routerLinkActiveOptions","target","tooltipOptions","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["class","p-dock-item-icon",3,"ngClass","ngStyle",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-dock-item-icon",3,"ngClass","ngStyle"],["pRipple","","pTooltip","",1,"p-dock-item-link",3,"tooltipPosition","tooltipOptions","ngClass","target"]],template:function(i,n){if(i&1){let o=w();u(0,"div",2)(1,"div",3)(2,"ul",4,0),O("focus",function(f){return d(o),p(n.onListFocus(f))})("blur",function(f){return d(o),p(n.onListBlur(f))})("keydown",function(f){return d(o),p(n.onListKeyDown(f))})("mouseleave",function(){return d(o),p(n.onListMouseLeave())}),K(4,Ce,1,1,"li",5,fe),g()()()}i&2&&(B(n.styleClass),s("ngClass",n.containerClass)("ngStyle",n.style),m("data-pc-name","dock"),c(2),s("tabindex",n.tabindex),m("id",n.id)("aria-orientation",n.position==="bottom"||n.position==="top"?"horizontal":"vertical")("aria-activedescendant",n.focused?n.focusedOptionId:void 0)("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledBy)("data-pc-section","menu"),c(2),R(n.model))},dependencies:[X,z,G,W,J,Z,Y,re,se,ae,x],encapsulation:2,changeDetection:0})}return t})(),Je=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=D({imports:[we,x,x]})}return t})();export{Je as a};
