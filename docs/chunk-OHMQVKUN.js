import{a as Ze}from"./chunk-4SWBDPH7.js";import{a as Ue}from"./chunk-G4RKYSEX.js";import{F as rt,G as oe,I as ot,J as st,N as lt,P as ct,Q as he,V as ue,W as dt,c as pe,g as Je,h as Xe,l as et,q as tt,s as nt,t as at,x as be,y as it}from"./chunk-2VYJ33O4.js";import{a as Ke}from"./chunk-A4WK7ILD.js";import{d as Ge,n as qe,p as Ye}from"./chunk-LWFJ4DRN.js";import{$ as B,$b as $e,A as Ee,Db as K,Eb as me,I as De,Ib as T,J as q,K as Oe,Kb as y,L as F,Lb as J,Mb as X,Na as ce,Nb as ee,Ob as $,Pa as l,Pb as g,Qb as f,S as Re,U as R,Ua as U,Ub as O,Va as Z,Vb as He,W as m,Wb as v,Xa as de,Xb as te,Yb as o,Zb as d,_a as Le,_b as ne,aa as A,cb as M,d as P,da as le,db as Fe,eb as E,ec as W,f as Te,fc as ae,g as V,gb as j,ha as C,hb as S,hc as We,i as we,ia as N,ib as Ne,ic as Qe,k as Se,kc as Ve,o as Ie,ob as je,pa as Be,pb as k,qa as Y,qb as z,rb as H,sa as L,sb as ze,ta as Ae,tb as u,u as Pe,ub as b,v as G,vb as h,w as Me,wb as _,wc as ie,xb as a,yb as i,yc as x,zb as D,zc as re}from"./chunk-UBBQDP4Q.js";var ve=["*"];function It(n,s){n&1&&X(0)}var Pt=["tabListContainer"],Mt=["tabList"],Et=["tabListInner"],Dt=["nextPaginator"],Ot=["previousPaginator"],Rt=["content"];function Bt(n,s){}var At=["tabBodyWrapper"],Lt=["tabHeader"];function Ft(n,s){}function Nt(n,s){if(n&1&&S(0,Ft,0,0,"ng-template",12),n&2){let e=y().$implicit;_("cdkPortalOutlet",e.templateLabel)}}function jt(n,s){if(n&1&&o(0),n&2){let e=y().$implicit;d(e.textLabel)}}function zt(n,s){if(n&1){let e=me();a(0,"div",7,2),T("click",function(){let r=B(e),c=r.$implicit,p=r.$index,w=y(),I=O(1);return A(w._handleClick(c,I,p))})("cdkFocusChange",function(r){let c=B(e).$index,p=y();return A(p._tabFocusChanged(r,c))}),D(2,"span",8)(3,"div",9),a(4,"span",10)(5,"span",11),z(6,Nt,1,1,null,12)(7,jt,1,1),i()()()}if(n&2){let e=s.$implicit,t=s.$index,r=O(1),c=y();te(e.labelClass),v("mdc-tab--active",c.selectedIndex===t),_("id",c._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",c.fitInkBarToContent),k("tabIndex",c._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",c._tabs.length)("aria-controls",c._getTabContentId(t))("aria-selected",c.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),l(3),_("matRippleTrigger",r)("matRippleDisabled",e.disabled||c.disableRipple),l(3),H(e.templateLabel?6:7)}}function Ht(n,s){n&1&&X(0)}function $t(n,s){if(n&1){let e=me();a(0,"mat-tab-body",13),T("_onCentered",function(){B(e);let r=y();return A(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){B(e);let c=y();return A(c._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){B(e);let c=y();return A(c._bodyCentered(r))}),i()}if(n&2){let e=s.$implicit,t=s.$index,r=y();te(e.bodyClass),_("id",r._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),k("tabindex",r.contentTabIndex!=null&&r.selectedIndex===t?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,t))("aria-hidden",r.selectedIndex!==t)}}var Wt=new R("MatTabContent"),Qt=(()=>{class n{template=m(Z);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["","matTabContent",""]],features:[W([{provide:Wt,useExisting:n}])]})}return n})(),Vt=new R("MatTabLabel"),ht=new R("MAT_TAB"),Gt=(()=>{class n extends ct{_closestTab=m(ht,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=Y(n)))(r||n)}})();static \u0275dir=E({type:n,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[W([{provide:Vt,useExisting:n}]),j]})}return n})(),ut=new R("MAT_TAB_GROUP"),xe=(()=>{class n{_viewContainerRef=m(Le);_closestTabGroup=m(ut,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new V;position=null;origin=null;isActive=!1;constructor(){m(Xe).load(dt)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new lt(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["mat-tab"]],contentQueries:function(t,r,c){if(t&1&&ee(c,Gt,5)(c,Qt,7,Z),t&2){let p;g(p=f())&&(r.templateLabel=p.first),g(p=f())&&(r._explicitContent=p.first)}},viewQuery:function(t,r){if(t&1&&$(Z,7),t&2){let c;g(c=f())&&(r._implicitContent=c.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,r){t&2&&k("id",null)},inputs:{disabled:[2,"disabled","disabled",x],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[W([{provide:ht,useExisting:n}]),Be],ngContentSelectors:ve,decls:1,vars:0,template:function(t,r){t&1&&(J(),Ne(0,It,1,0,"ng-template"))},encapsulation:2})}return n})(),_e="mdc-tab-indicator--active",mt="mdc-tab-indicator--no-transition",ge=class{_items;_currentItem;constructor(s){this._items=s}hide(){this._items.forEach(s=>s.deactivateInkBar()),this._currentItem=void 0}alignToElement(s){let e=this._items.find(r=>r.elementRef.nativeElement===s),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let r=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},qt=(()=>{class n{_elementRef=m(L);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(_e);return}let r=t.getBoundingClientRect(),c=e.width/r.width,p=e.left-r.left;t.classList.add(mt),this._inkBarContentElement.style.setProperty("transform",`translateX(${p}px) scaleX(${c})`),t.getBoundingClientRect(),t.classList.remove(mt),t.classList.add(_e),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(_e)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",x]}})}return n})();var _t=(()=>{class n extends qt{elementRef=m(L);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Y(n)))(r||n)}})();static \u0275dir=E({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,r){t&2&&(k("aria-disabled",!!r.disabled),v("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",x]},features:[j]})}return n})(),pt={passive:!0},Yt=650,Ut=100,Zt=(()=>{class n{_elementRef=m(L);_changeDetectorRef=m(ie);_viewportRuler=m(st);_dir=m(be,{optional:!0});_ngZone=m(N);_platform=m(pe);_sharedResizeObserver=m(rt);_injector=m(le);_renderer=m(de);_animationsDisabled=oe();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new V;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new V;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new C;indexFocused=new C;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),pt),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),pt))}ngAfterContentInit(){let e=this._dir?this._dir.change:Se("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Ee(32),F(this._destroyed)),r=this._viewportRuler.change(150).pipe(F(this._destroyed)),c=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new nt(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),U(c,{injector:this._injector}),G(e,r,t,this._items.changes,this._itemsResized()).pipe(F(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),c()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(p=>{this.indexFocused.emit(p),this._setTabFocus(p)})}_itemsResized(){return typeof ResizeObserver!="function"?we:this._items.changes.pipe(q(this._items),Oe(e=>new Te(t=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(c=>t.next(c));return e.forEach(c=>r.observe(c.elementRef.nativeElement)),()=>{r.disconnect()}}))),De(1),Me(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!tt(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:c,offsetWidth:p}=t.elementRef.nativeElement,w,I;this._getLayoutDirection()=="ltr"?(w=c,I=w+p):(I=this._tabListInner.nativeElement.offsetWidth-c,w=I-p);let se=this.scrollDistance,ke=this.scrollDistance+r;w<se?this.scrollDistance-=se-w:I>ke&&(this.scrollDistance+=Math.min(I-ke,w-se))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,r=e-t>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),Pe(Yt,Ut).pipe(F(G(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:c}=this._scrollHeader(e);(c===0||c>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,inputs:{disablePagination:[2,"disablePagination","disablePagination",x],selectedIndex:[2,"selectedIndex","selectedIndex",re]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return n})(),Kt=(()=>{class n extends Zt{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new ge(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Y(n)))(r||n)}})();static \u0275cmp=M({type:n,selectors:[["mat-tab-header"]],contentQueries:function(t,r,c){if(t&1&&ee(c,_t,4),t&2){let p;g(p=f())&&(r._items=p)}},viewQuery:function(t,r){if(t&1&&$(Pt,7)(Mt,7)(Et,7)(Dt,5)(Ot,5),t&2){let c;g(c=f())&&(r._tabListContainer=c.first),g(c=f())&&(r._tabList=c.first),g(c=f())&&(r._tabListInner=c.first),g(c=f())&&(r._nextPaginator=c.first),g(c=f())&&(r._previousPaginator=c.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,r){t&2&&v("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",x]},features:[j],ngContentSelectors:ve,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,r){t&1&&(J(),a(0,"div",5,0),T("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(p){return r._handlePaginatorPress("before",p)})("touchend",function(){return r._stopInterval()}),D(2,"div",6),i(),a(3,"div",7,1),T("keydown",function(p){return r._handleKeydown(p)}),a(5,"div",8,2),T("cdkObserveContent",function(){return r._onContentChanges()}),a(7,"div",9,3),X(9),i()()(),a(10,"div",10,4),T("mousedown",function(p){return r._handlePaginatorPress("after",p)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),D(12,"div",6),i()),t&2&&(v("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),_("matRippleDisabled",r._disableScrollBefore||r.disableRipple),l(3),v("_mat-animation-noopable",r._animationsDisabled),l(2),k("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),l(5),v("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),_("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[ue,et],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return n})(),Jt=new R("MAT_TABS_CONFIG"),bt=(()=>{class n extends he{_host=m(fe);_ngZone=m(N);_centeringSub=P.EMPTY;_leavingSub=P.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(q(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["","matTabBodyHost",""]],features:[j]})}return n})(),fe=(()=>{class n{_elementRef=m(L);_dir=m(be,{optional:!0});_ngZone=m(N);_injector=m(le);_renderer=m(de);_diAnimationsDisabled=oe();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=P.EMPTY;_position;_previousPosition;_onCentering=new C;_beforeCentering=new C;_afterLeavingCenter=new C;_onCentered=new C(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=m(ie);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),U(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),U(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["mat-tab-body"]],viewQuery:function(t,r){if(t&1&&$(bt,5)(Rt,5),t&2){let c;g(c=f())&&(r._portalHost=c.first),g(c=f())&&(r._contentElement=c.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,r){t&2&&k("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,r){t&1&&(a(0,"div",1,0),S(2,Bt,0,0,"ng-template",2),i()),t&2&&v("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[bt,ot],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return n})(),gt=(()=>{class n{_elementRef=m(L);_changeDetectorRef=m(ie);_ngZone=m(N);_tabsSubscription=P.EMPTY;_tabLabelSubscription=P.EMPTY;_tabBodySubscription=P.EMPTY;_diAnimationsDisabled=oe();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Ae;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new C;focusChange=new C;animationDone=new C;selectedTabChange=new C(!0);_groupId;_isServer=!m(pe).isBrowser;constructor(){let e=m(Jt,{optional:!0});this._groupId=m(at).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,c)=>r.isActive=c===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,r)=>{t.position=r-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),r;for(let c=0;c<t.length;c++)if(t[c].isActive){this._indexToSelect=this._selectedIndex=c,this._lastFocusedTabIndex=null,r=t[c];break}!r&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(q(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new ye;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=G(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,r){t.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,r)=>t._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["mat-tab-group"]],contentQueries:function(t,r,c){if(t&1&&ee(c,xe,5),t&2){let p;g(p=f())&&(r._allTabs=p)}},viewQuery:function(t,r){if(t&1&&$(At,5)(Lt,5)(fe,5),t&2){let c;g(c=f())&&(r._tabBodyWrapper=c.first),g(c=f())&&(r._tabHeader=c.first),g(c=f())&&(r._tabBodies=c)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(t,r){t&2&&(k("mat-align-tabs",r.alignTabs),te("mat-"+(r.color||"primary")),He("--mat-tab-animation-duration",r.animationDuration),v("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",x],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",x],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",x],selectedIndex:[2,"selectedIndex","selectedIndex",re],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",re],disablePagination:[2,"disablePagination","disablePagination",x],disableRipple:[2,"disableRipple","disableRipple",x],preserveContent:[2,"preserveContent","preserveContent",x],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[W([{provide:ut,useExisting:n}])],ngContentSelectors:ve,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,r){t&1&&(J(),a(0,"mat-tab-header",3,0),T("indexFocused",function(p){return r._focusChanged(p)})("selectFocusedIndex",function(p){return r.selectedIndex=p}),b(2,zt,8,17,"div",4,u),i(),z(4,Ht,1,0),a(5,"div",5,1),b(7,$t,1,10,"mat-tab-body",6,u),i()),t&2&&(_("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),je("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),l(2),h(r._tabs),l(2),H(r._isServer?4:-1),l(),v("_mat-animation-noopable",r._animationsDisabled()),l(2),h(r._tabs))},dependencies:[Kt,_t,Je,ue,he,fe],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return n})(),ye=class{index;tab};var ft=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Fe({type:n});static \u0275inj=Re({imports:[it]})}return n})();var yt={title:"DoseSync",slogan:"Medication scheduling for treatment plans that don't fit a simple daily reminder.",tagline:"Offline-first \xB7 Privacy-first \xB7 Android (iOS later)",status:"MVP 0 running on my Android phone",techStack:["Angular 21","Signals","Ionic","Capacitor","TypeScript","Vitest"],githubUrl:"https://github.com/madalinaeleonorag/DoseSync",hero:{image:"",alt:"DoseSync Today view on an Android phone",caption:"Hero screenshot"},app:{headline:"Your medication plan, the way your doctor actually wrote it.",intro:"Most reminder apps assume one pill, every day, at the same time. DoseSync handles the rest: pills only on certain days of the month, a supplement only in winter, a 10-day course that follows your cycle, or a medicine you take only when you need it. It reminds you on time, keeps count of what is left, and keeps a clear record for your doctor.",availability:"In development \xB7 Android beta coming soon",betaUrl:"mailto:madalinaeleonora.gheorghe@gmail.com?subject=DoseSync%20beta",goodFit:["You take several medicines or supplements on different schedules.","Some of them follow the calendar: days 1 to 15 of the month, or October to March.","Some treatments follow your menstrual cycle.","You take some medicines only when needed and want a safe daily limit.","You want your health data to stay on your phone, with no account.","You are tired of subscriptions for basic features."],notYet:["You need an iPhone app (Android comes first).","You want to track symptoms, mood or sleep. DoseSync only records what you took.","You need a family member to see your doses remotely (planned for later)."],steps:[{title:"Add your medicine",text:"Name, dose, how many you have, and when to take it, in plain words."},{title:"Get a reminder",text:"Your phone reminds you at the right time, even when the app is closed."},{title:"Tap Taken",text:"DoseSync logs the time and updates how many are left. Made a mistake? Undo it."}],features:[{title:"Flexible schedules",text:"Every day, chosen weekdays, chosen days of the month, every few hours, seasonal, cycle-based, once, or only when needed.",ready:!0},{title:"Today at a glance",text:"What to take next comes first. What you already took moves down and is crossed out.",ready:!0},{title:"Calendar",text:"Look at any day to see what was planned and what you took.",ready:!0},{title:"Stock and refills",text:"See how many pills are left and get warned before you run out.",ready:!0},{title:"Reminders",text:"Phone notifications for the next 30 days, planned automatically.",ready:!0},{title:"Safe as-needed doses",text:"A daily limit and a minimum gap between doses, with a clear warning.",ready:!1},{title:"Taken, Snooze, Skip from the notification",text:"Answer a reminder without opening the app.",ready:!1},{title:"Record for your doctor",text:"A one-page PDF of what you took and skipped.",ready:!1},{title:"Romanian and English",text:"With large text and zoom support.",ready:!1}],privacy:["No account and no sign-up.","Your data stays on your phone. Nothing is sent to a server.","No ads, no tracking, no selling of data.","Back up and restore your data yourself, whenever you want."],faq:[{q:"Is it free?",a:"Yes. Core features will stay free, with no limit on the number of medicines."},{q:"Do I need an account?",a:"No. Open the app and start adding your medicines."},{q:"Will it tell me what dose to take?",a:"No. DoseSync follows the plan you enter from your prescription. It does not give medical advice or change your treatment."},{q:"What if I change phones?",a:"You will be able to export your data to a file and import it on the new phone."},{q:"How can I try it?",a:"A closed beta on Google Play is coming. Write to me and I will add you to the tester list."}]},summary:["DoseSync is a free, privacy-first app for planning and logging medication and supplements. It started as a personal need: no app I tried could represent my own regimen without paywalls, item limits or rigid scheduling.","Its core is a schedule rule engine that can express what other apps handle badly: specific days of the month, seasonal windows, fixed-length courses, schedules anchored to a menstrual cycle, and as-needed (PRN) doses with safety limits."],problems:["No way to pick specific days of the month for a medication.","No way to anchor a course to a biological event such as a menstrual cycle.","Plans that change often (one pill now, two next week) are awkward to model.","Multiple profiles, caregiver sharing, PDF reports and refill alerts sit behind subscriptions.","Free apps often monetize through data partnerships or interruptive ads."],users:[{title:"People with complex regimens",text:"Asymmetric plans mixing daily, monthly, seasonal, cycle-based and on-demand doses. My own regimen is the reference test suite."},{title:"Long-term patients and the people who support them",text:"A factual log of what was taken, when, and what was skipped gives patient and doctor a shared, objective basis for conversation. DoseSync records adherence, not symptoms."}],regimen:[{medication:"Medication 1",pattern:"Daily, morning",blocks:"Daily recurrence, named time slot"},{medication:"Medication 2",pattern:"Days 1 to 15 of every month",blocks:"Day-of-month range"},{medication:"Medication 3",pattern:"On demand, at night",blocks:"PRN"},{medication:"Medication 4",pattern:"Daily at lunch with food, October to March",blocks:"Daily recurrence, yearly window, instruction text"},{medication:"Medication 5",pattern:"10 days per month, tied to the menstrual cycle",blocks:"Cycle anchor with offset, course length"},{medication:"Medications 6 and 7",pattern:"On demand, triggered by events (long flights, immobility)",blocks:"PRN with context label and daily maximum"},{medication:"Medication 8",pattern:"3 months, 3 times a day",blocks:"Course length, multiple times per day"}],market:[{type:"Feature-rich health ecosystems",strengths:"Detailed reports, stock tracking, symptom logging, caregiver sharing.",gap:"Dense interfaces; scheduling limited to fixed intervals, no calendar days, no cycle-based treatments."},{type:"Apps with subscription tiers",strengths:"Interaction checks, caregiver alerts, polished interfaces.",gap:"Profiles, sharing, refill alerts and reports are paid; medication databases often limited to one region."},{type:"Minimalist, privacy-first utilities",strengths:"No account, local data, actionable notifications, PRN safeguards.",gap:"Limited support for irregular, event-based or cycle-based treatments."}],principles:[{title:"Predictable and calm",text:"Large buttons, one clear next action, instructions shown next to the dose."},{title:"The user's data belongs to the user",text:"Local-only in the first release. No account, no tracking, no selling of data."},{title:"Safety before convenience",text:"PRN limits, tolerance windows and clear missed-dose handling."},{title:"Small and focused",text:"A medication execution tool, not a health record or a social network."}],antiFeatures:["No social or community features (risk of medical misinformation).","No AI medical chatbot: information must be structured, sourced and unambiguous.","No lifestyle micro-tracking; Health Connect and Apple Health already cover it.","No paywall on core features and no limit on the number of medications.","No full health record; that belongs in a separate app."],screens:[{image:"",alt:"Today view",caption:"Today: next doses first, completed doses below"},{image:"",alt:"Medication editor",caption:"Medication editor with schedule rules"},{image:"",alt:"Medication drawer",caption:"Drawer: stock and low-stock alerts"},{image:"",alt:"Calendar",caption:"Calendar: review any day"}],roadmap:[{phase:"MVP 0",title:"Works for me",status:"In progress",items:["Rule engine: daily, weekdays, day-of-month, interval, seasonal, cycle and PRN","Today view, calendar and medication drawer","Native reminders for the next 30 days","Stock counter with low-stock threshold; undo restores stock","Encrypted storage and JSON backup (next)"]},{phase:"MVP 1",title:"Google Play release",status:"Planned",items:["Cycle tracking with next-start estimate","Tolerance windows and missed-dose handling","Pause without altering history; retroactive logging","Time zone handling when traveling","Romanian and English; large text and zoom"]},{phase:"Phase 2",title:"For the doctor",status:"Later",items:["One-page PDF record","Audit trail when a regimen changes","Travel pack quantity calculator","Optional cloud backup and caregiver sharing, after a privacy review"]},{phase:"Phase 3",title:"Official information",status:"Later",items:["Medication lookup from the EMA product information API","Food and medication warnings from leaflet text, with source shown"]}],architectureIntro:"A hybrid app: an Angular single-page application inside a native shell provided by Capacitor. Business logic lives in plain TypeScript and works without a network. Anything that needs the operating system goes through Capacitor plugins. The first release has no server.",layers:[{name:"Presentation",text:"Angular standalone components with Ionic UI components. Today view, forms, timeline."},{name:"State",text:"Angular Signals, so the Today view updates consistently."},{name:"Domain",text:"Rule engine, dose lifecycle, stock and history. Plain TypeScript with no Angular or Capacitor imports, unit tested alone.",highlight:!0},{name:"Integration",text:"Capacitor plugins: local notifications, encrypted SQLite, biometrics, preferences."},{name:"Native OS",text:"Android SDK and iOS SDK."}],regimenModel:`interface Regimen {
  id: string;
  medicationId: string;
  recurrence?: Recurrence;        // absent = PRN only
  activeWindow?: ActiveWindow;    // date range, or yearly window (Oct to Mar)
  course?: { length: number; unit: 'day' | 'week' | 'month' };
  anchor?: { type: 'cycleStart' | 'fixedDate' | 'firstDose'; offsetDays: number };
  times: DoseTime[];              // clock time or named slot
  prn?: { maxPerDay?: number; minGapHours?: number; contexts?: string[] };
  tolerance: { onTimeMinutes: number; lateMinutes: number };
  pauses: { from: string; to?: string }[];
  instructions?: string;          // for example: with food
}

type Recurrence =
  | { kind: 'daily' }
  | { kind: 'everyNDays'; n: number }
  | { kind: 'weekdays'; days: number[] }
  | { kind: 'dayOfMonthRange'; from: number; to: number };`,engineFunctions:[{name:"dosesForDate(regimen, date, context)",text:"Pure and deterministic: returns the doses due on one day. Powers the Today view and the unit tests; the reference regimen above is the first test suite."},{name:"projectDoses(regimens, from, days)",text:"Produces the next 14 to 30 days of doses. The notification scheduler uses it, because reminders must be planned ahead."}],replanEvents:["A regimen is added, edited, paused or resumed","A cycle start is logged or the estimate changes","Time zone or system clock changes","The device restarts or the app is updated"],lifecycle:["Scheduled","Taken","Skipped","Missed"],notifications:["Scheduled through the OS alarm mechanism, so reminders fire when the app is closed.","Android 13+ needs runtime notification permission; Android 12+ restricts exact alarms.","Some manufacturers suppress alarms to save battery, so onboarding includes an exemption guide.","Reminders do not survive a reboot or time zone change on their own, so the app re-plans on boot, launch and time zone change.","Actions are idempotent: tapping Taken twice records one dose and decrements stock once.","Users can hide medication names on the lock screen."],privacy:[{title:"No server",text:"No account, no analytics. Medication data never leaves the device."},{title:"Encrypted storage",text:"SQLite encrypted with a key in secure storage; Preferences only for non-sensitive settings."},{title:"User-owned backup",text:"JSON export and import; Android auto-backup excluded or encrypted."},{title:"GDPR-ready path",text:"Health data is a special category (Art. 9); cloud features need consent and a security review."}],currentState:[{label:"Built",text:"8 schedule types, Today view, calendar, drawer with stock, native reminders, unit tests for store and reminders."},{label:"Not yet",text:"The prototype uses unencrypted browser storage. Encrypted SQLite and the pure rule engine module are the next refactor."}],release:["Build the Android App Bundle with Android Studio and Capacitor.","Complete the Play Console data safety form and publish a privacy policy.","Closed test with at least 12 testers for 14 continuous days, run as structured user acceptance testing."],betaGoals:["Validate the interface with people of different digital skill levels, screen sizes and Android versions.","Stress-test notifications on devices with aggressive battery management.","Collect feedback on the rule builder before production."],risks:[{risk:"Notifications fail on some devices",plan:"Varied beta hardware, battery onboarding, reschedule on boot"},{risk:"Rule builder too complex for non-technical users",plan:'Plain-language summary of each rule ("Every day from October to March at lunch, with food")'},{risk:"Recruiting 12 active testers",plan:"Recruit early; plan for dropouts"},{risk:"Scope creep",plan:"Anti-feature list; MVP 0 and MVP 1 split"},{risk:"Medical-information liability",plan:"Official sources only, no advice, clear disclaimers"}]};var Ce=n=>({$implicit:n}),Q=(n,s)=>s.title,vt=(n,s)=>s.caption,en=(n,s)=>s.q,tn=(n,s)=>s.medication,nn=(n,s)=>s.type,an=(n,s)=>s.phase,xt=(n,s)=>s.name,rn=(n,s)=>s.label,on=(n,s)=>s.risk;function sn(n,s){if(n&1&&(D(0,"img",48),We(1,"assetPath")),n&2){let e=y().$implicit;_("src",Qe(1,2,e.image),ce)("alt",e.alt)}}function ln(n,s){if(n&1&&(a(0,"div",49)(1,"span"),o(2,"Screenshot placeholder"),i()()),n&2){let e=y().$implicit;k("aria-label",e.alt+" (placeholder)")}}function cn(n,s){if(n&1&&(a(0,"figure",47),z(1,sn,2,4,"img",48)(2,ln,3,1,"div",49),a(3,"figcaption"),o(4),i()()),n&2){let e=s.$implicit;l(),H(e.image?1:2),l(3),d(e.caption)}}function dn(n,s){n&1&&K(0)}function mn(n,s){if(n&1&&(a(0,"li"),o(1),i()),n&2){let e=s.$implicit;l(),d(e)}}function pn(n,s){if(n&1&&(a(0,"li"),o(1),i()),n&2){let e=s.$implicit;l(),d(e)}}function bn(n,s){if(n&1&&(a(0,"article",15)(1,"span",50),o(2),i(),a(3,"h3"),o(4),i(),a(5,"p"),o(6),i()()),n&2){let e=s.$implicit,t=s.$index;l(2),d(t+1),l(2),d(e.title),l(2),d(e.text)}}function hn(n,s){n&1&&K(0)}function un(n,s){if(n&1&&S(0,hn,1,0,"ng-container",7),n&2){let e=s.$implicit;y();let t=O(1);_("ngTemplateOutlet",t)("ngTemplateOutletContext",ae(2,Ce,e))}}function _n(n,s){if(n&1&&(a(0,"article",15)(1,"span",51),o(2),i(),a(3,"h3"),o(4),i(),a(5,"p"),o(6),i()()),n&2){let e=s.$implicit;l(),v("badge--soon",!e.ready),l(),ne(" ",e.ready?"Available":"Coming soon"," "),l(2),d(e.title),l(2),d(e.text)}}function gn(n,s){if(n&1&&(a(0,"li"),o(1),i()),n&2){let e=s.$implicit;l(),d(e)}}function fn(n,s){if(n&1&&(a(0,"details")(1,"summary"),o(2),i(),a(3,"p"),o(4),i()()),n&2){let e=s.$implicit;l(2),d(e.q),l(2),d(e.a)}}function yn(n,s){if(n&1&&(a(0,"p"),o(1),i()),n&2){let e=s.$implicit;l(),d(e)}}function vn(n,s){if(n&1&&(a(0,"li"),o(1),i()),n&2){let e=s.$implicit;l(),d(e)}}function xn(n,s){if(n&1&&(a(0,"article",15)(1,"h3"),o(2),i(),a(3,"p"),o(4),i()()),n&2){let e=s.$implicit;l(2),d(e.title),l(2),d(e.text)}}function Cn(n,s){if(n&1&&(a(0,"tr")(1,"td"),o(2),i(),a(3,"td"),o(4),i(),a(5,"td",52),o(6),i()()),n&2){let e=s.$implicit;l(2),d(e.medication),l(2),d(e.pattern),l(2),d(e.blocks)}}function kn(n,s){if(n&1&&(a(0,"article",15)(1,"h3"),o(2),i(),a(3,"p",35),o(4,"Does well"),i(),a(5,"p"),o(6),i(),a(7,"p",35),o(8,"Gap"),i(),a(9,"p"),o(10),i()()),n&2){let e=s.$implicit;l(2),d(e.type),l(4),d(e.strengths),l(4),d(e.gap)}}function Tn(n,s){if(n&1&&(a(0,"article",15)(1,"span",50),o(2),i(),a(3,"h3"),o(4),i(),a(5,"p"),o(6),i()()),n&2){let e=s.$implicit,t=s.$index;l(2),ne("0",t+1),l(2),d(e.title),l(2),d(e.text)}}function wn(n,s){if(n&1&&(a(0,"li"),o(1),i()),n&2){let e=s.$implicit;l(),d(e)}}function Sn(n,s){n&1&&K(0)}function In(n,s){if(n&1&&S(0,Sn,1,0,"ng-container",7),n&2){let e=s.$implicit;y();let t=O(1);_("ngTemplateOutlet",t)("ngTemplateOutletContext",ae(2,Ce,e))}}function Pn(n,s){if(n&1&&(a(0,"li"),o(1),i()),n&2){let e=s.$implicit;l(),d(e)}}function Mn(n,s){if(n&1&&(a(0,"article",15)(1,"span",35),o(2),i(),a(3,"h3"),o(4),i(),a(5,"ul",46),b(6,Pn,2,1,"li",null,u),i()()),n&2){let e=s.$implicit;v("card--active",e.status==="In progress"),l(2),$e("",e.phase," \xB7 ",e.status),l(2),d(e.title),l(2),h(e.items)}}function En(n,s){if(n&1&&D(0,"app-chip",31),n&2){let e=s.$implicit;_("label",e)}}function Dn(n,s){if(n&1&&(a(0,"div",53)(1,"strong"),o(2),i(),a(3,"span"),o(4),i()()),n&2){let e=s.$implicit;v("layer--highlight",e.highlight),l(2),d(e.name),l(2),d(e.text)}}function On(n,s){if(n&1&&(a(0,"article",15)(1,"code",54),o(2),i(),a(3,"p"),o(4),i()()),n&2){let e=s.$implicit;l(2),d(e.name),l(2),d(e.text)}}function Rn(n,s){if(n&1&&(a(0,"span",55),o(1),i()),n&2){let e=s.$implicit,t=s.$index;v("state--start",t===0),l(),d(e)}}function Bn(n,s){if(n&1&&(a(0,"li"),o(1),i()),n&2){let e=s.$implicit;l(),d(e)}}function An(n,s){if(n&1&&(a(0,"li"),o(1),i()),n&2){let e=s.$implicit;l(),d(e)}}function Ln(n,s){if(n&1&&(a(0,"article",15)(1,"h3"),o(2),i(),a(3,"p"),o(4),i()()),n&2){let e=s.$implicit;l(2),d(e.title),l(2),d(e.text)}}function Fn(n,s){if(n&1&&(a(0,"article",15)(1,"span",35),o(2),i(),a(3,"p"),o(4),i()()),n&2){let e=s.$implicit;l(2),d(e.label),l(2),d(e.text)}}function Nn(n,s){if(n&1&&(a(0,"li"),o(1),i()),n&2){let e=s.$implicit;l(),d(e)}}function jn(n,s){if(n&1&&(a(0,"li"),o(1),i()),n&2){let e=s.$implicit;l(),d(e)}}function zn(n,s){if(n&1&&(a(0,"tr")(1,"td"),o(2),i(),a(3,"td"),o(4),i()()),n&2){let e=s.$implicit;l(2),d(e.risk),l(2),d(e.plan)}}var Ct=["app","product","architecture"],kt=class n{router=m(Ye);route=m(qe);project=yt;selectedTab=Ke(this.route.fragment.pipe(Ie(s=>Math.max(Ct.indexOf(s??""),0))),{initialValue:0});selectTab(s){this.router.navigate([],{fragment:Ct[s],replaceUrl:!0})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=M({type:n,selectors:[["app-dosesync"]],decls:288,vars:15,consts:[["shot",""],[1,"hero"],[1,"hero__text"],[1,"eyebrow"],[1,"hero__slogan"],[1,"hero__tagline"],[1,"hero__visual"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["mat-stretch-tabs","false","animationDuration","0ms",1,"tabs",3,"selectedIndexChange","selectedIndex"],["label","The App"],[1,"tab-body"],[1,"block"],[1,"grid","grid--2"],[1,"card","card--active"],[1,"list","list--check"],[1,"card"],[1,"list","list--cross"],[1,"grid","grid--3"],[1,"screens"],[1,"faq"],[1,"cta"],[1,"cta__button",3,"href"],[1,"disclaimer"],["label","Product"],[1,"list"],[1,"table-wrap"],[1,"subheading"],[1,"grid","grid--4"],[1,"card",3,"card--active"],["label","Architecture & Development"],[1,"chips-wrapper"],[3,"label"],["aria-label","Container diagram: all data stays on the device",1,"c4"],[1,"c4__actor"],[1,"c4__device"],[1,"label"],[1,"c4__box"],[1,"c4__arrow"],[1,"c4__box","c4__box--db"],[1,"c4__external"],[1,"c4__box","c4__box--ext"],[1,"layers"],[1,"layer",3,"layer--highlight"],[1,"code"],[1,"lifecycle"],[1,"state",3,"state--start"],[1,"list","list--compact"],[1,"shot"],["loading","lazy",3,"src","alt"],["role","img",1,"shot__placeholder"],[1,"number"],[1,"badge"],[1,"accent"],[1,"layer"],[1,"fn"],[1,"state"]],template:function(e,t){if(e&1&&(S(0,cn,5,2,"ng-template",null,0,Ve),a(2,"header",1)(3,"div",2)(4,"span",3),o(5),i(),a(6,"h1"),o(7),i(),a(8,"p",4),o(9),i(),a(10,"p",5),o(11),i()(),a(12,"div",6),S(13,dn,1,0,"ng-container",7),i()(),a(14,"mat-tab-group",8),T("selectedIndexChange",function(c){return t.selectTab(c)}),a(15,"mat-tab",9)(16,"div",10)(17,"section",11)(18,"h2"),o(19),i(),a(20,"p"),o(21),i()(),a(22,"section",11)(23,"h2"),o(24,"Is DoseSync right for you?"),i(),a(25,"div",12)(26,"article",13)(27,"h3"),o(28,"A good fit if"),i(),a(29,"ul",14),b(30,mn,2,1,"li",null,u),i()(),a(32,"article",15)(33,"h3"),o(34,"Not for you yet if"),i(),a(35,"ul",16),b(36,pn,2,1,"li",null,u),i()()()(),a(38,"section",11)(39,"h2"),o(40,"How it works"),i(),a(41,"div",17),b(42,bn,7,3,"article",15,Q),i()(),a(44,"section",11)(45,"h2"),o(46,"See it"),i(),a(47,"div",18),b(48,un,1,4,"ng-container",null,vt),i()(),a(50,"section",11)(51,"h2"),o(52,"What it does"),i(),a(53,"div",17),b(54,_n,7,5,"article",15,Q),i()(),a(56,"section",11)(57,"h2"),o(58,"Your data stays yours"),i(),a(59,"ul",14),b(60,gn,2,1,"li",null,u),i()(),a(62,"section",11)(63,"h2"),o(64,"Questions"),i(),a(65,"div",19),b(66,fn,5,2,"details",null,en),i()(),a(68,"section",20)(69,"h2"),o(70,"Want to try DoseSync?"),i(),a(71,"p"),o(72,"Join the Android beta and help shape the app before it launches."),i(),a(73,"a",21),o(74,"Join the beta"),i(),a(75,"p",22),o(76," DoseSync is a reminder and logging tool. It does not diagnose, recommend doses or replace advice from your doctor or pharmacist. "),i()()()(),a(77,"mat-tab",23)(78,"div",10)(79,"section",11)(80,"span",3),o(81),i(),a(82,"h2"),o(83,"Overview"),i(),b(84,yn,2,1,"p",null,ze),i(),a(86,"section",11)(87,"h2"),o(88,"The problem"),i(),a(89,"p"),o(90," Most medication apps are built for one or two pills a day at fixed times. Once a plan becomes asymmetric, they fall short. "),i(),a(91,"ul",24),b(92,vn,2,1,"li",null,u),i()(),a(94,"section",11)(95,"h2"),o(96,"Who it's for"),i(),a(97,"div",12),b(98,xn,5,2,"article",15,Q),i()(),a(100,"section",11)(101,"h2"),o(102,"The stress test: a real regimen"),i(),a(103,"p"),o(104," Each row must be expressible without special-casing in the UI or the notification code. Names are placeholders. "),i(),a(105,"div",25)(106,"table")(107,"thead")(108,"tr")(109,"th"),o(110,"Medication"),i(),a(111,"th"),o(112,"Pattern"),i(),a(113,"th"),o(114,"Rule building blocks"),i()()(),a(115,"tbody"),b(116,Cn,7,3,"tr",null,tn),i()()()(),a(118,"section",11)(119,"h2"),o(120,"Market analysis"),i(),a(121,"p"),o(122,"I reviewed many existing apps. They fall into three groups, each with a different gap."),i(),a(123,"div",17),b(124,kn,11,3,"article",15,nn),i()(),a(126,"section",11)(127,"h2"),o(128,"Principles"),i(),a(129,"div",12),b(130,Tn,7,3,"article",15,Q),i(),a(132,"h3",26),o(133,"What DoseSync will not do"),i(),a(134,"ul",16),b(135,wn,2,1,"li",null,u),i()(),a(137,"section",11)(138,"h2"),o(139,"Key screens"),i(),a(140,"div",18),b(141,In,1,4,"ng-container",null,vt),i()(),a(143,"section",11)(144,"h2"),o(145,"Roadmap"),i(),a(146,"div",27),b(147,Mn,8,5,"article",28,an),i()()()(),a(149,"mat-tab",29)(150,"div",10)(151,"section",11)(152,"h2"),o(153,"System overview"),i(),a(154,"p"),o(155),i(),a(156,"div",30),b(157,En,1,1,"app-chip",31,u),i(),a(159,"div",32)(160,"div",33)(161,"strong"),o(162,"Patient"),i(),a(163,"span"),o(164,"Manages and follows a treatment plan"),i()(),a(165,"div",34)(166,"span",35),o(167,"DoseSync mobile app \xB7 all data on the device"),i(),a(168,"div",36)(169,"strong"),o(170,"Angular 21 + Ionic SPA"),i(),a(171,"span"),o(172,"Today view, forms, Signals state. Rule engine runs here, fully offline."),i()(),a(173,"span",37),o(174,"calls plugins \u2193"),i(),a(175,"div",36)(176,"strong"),o(177,"Capacitor native bridge"),i(),a(178,"span"),o(179,"Notifications, storage, biometrics"),i()(),a(180,"span",37),o(181,"reads and writes \u2193"),i(),a(182,"div",38)(183,"strong"),o(184,"Encrypted SQLite"),i(),a(185,"span"),o(186,"Medications, regimens, dose history, settings. Source of truth."),i()()(),a(187,"div",39)(188,"div",40)(189,"strong"),o(190,"OS notifications"),i(),a(191,"span"),o(192,"Show reminders, return Taken / Snooze / Skip"),i()(),a(193,"div",40)(194,"strong"),o(195,"EMA API (later)"),i(),a(196,"span"),o(197,"Optional lookup; search term only"),i()()()()(),a(198,"section",11)(199,"h2"),o(200,"Layers"),i(),a(201,"p"),o(202,"Everything the app decides lives in the domain layer, so it can be tested without a device."),i(),a(203,"div",41),b(204,Dn,5,4,"div",42,xt),i()(),a(206,"section",11)(207,"h2"),o(208,"Rule engine"),i(),a(209,"p"),o(210," The engine separates "),a(211,"strong"),o(212,"what"),i(),o(213," is taken (the medication) from "),a(214,"strong"),o(215,"when"),i(),o(216," it may or should be taken (the regimen). A regimen is built from composable parts, not one rule type per case. "),i(),a(217,"pre",43)(218,"code"),o(219),i()(),a(220,"div",12),b(221,On,5,2,"article",15,xt),i(),a(223,"div",12)(224,"article",15)(225,"h3"),o(226,"Dose lifecycle"),i(),a(227,"div",44),b(228,Rn,2,3,"span",45,u),i(),a(230,"p"),o(231," Missed is set automatically after the tolerance window. Taken can be undone, which also restores stock. Before a PRN dose is logged, the engine checks the daily maximum and minimum gap and warns instead of silently allowing an overdose. "),i()(),a(232,"article",15)(233,"h3"),o(234,"Events that force a re-plan"),i(),a(235,"ul",46),b(236,Bn,2,1,"li",null,u),i()()()(),a(238,"section",11)(239,"h2"),o(240,"Designing for unreliable notifications"),i(),a(241,"p"),o(242," OS alarms are far more dependable than background JavaScript, but not guaranteed on every device. The design assumes failure modes and tests for them. "),i(),a(243,"ul",24),b(244,An,2,1,"li",null,u),i()(),a(246,"section",11)(247,"h2"),o(248,"Privacy and security"),i(),a(249,"div",27),b(250,Ln,5,2,"article",15,Q),i()(),a(252,"section",11)(253,"h2"),o(254,"Where the code is today"),i(),a(255,"div",12),b(256,Fn,5,2,"article",15,rn),i()(),a(258,"section",11)(259,"h2"),o(260,"Release and validation"),i(),a(261,"div",12)(262,"article",15)(263,"h3"),o(264,"Google Play path"),i(),a(265,"ol",46),b(266,Nn,2,1,"li",null,u),i()(),a(268,"article",15)(269,"h3"),o(270,"Closed beta goals"),i(),a(271,"ol",46),b(272,jn,2,1,"li",null,u),i()()()(),a(274,"section",11)(275,"h2"),o(276,"Risks and how I plan for them"),i(),a(277,"div",25)(278,"table")(279,"thead")(280,"tr")(281,"th"),o(282,"Risk"),i(),a(283,"th"),o(284,"Plan"),i()()(),a(285,"tbody"),b(286,zn,5,2,"tr",null,on),i()()()()()()()),e&2){let r=O(1);l(5),d(t.project.app.availability),l(2),d(t.project.title),l(2),d(t.project.slogan),l(2),d(t.project.tagline),l(2),_("ngTemplateOutlet",r)("ngTemplateOutletContext",ae(13,Ce,t.project.hero)),l(),_("selectedIndex",t.selectedTab()),l(5),d(t.project.app.headline),l(2),d(t.project.app.intro),l(9),h(t.project.app.goodFit),l(6),h(t.project.app.notYet),l(6),h(t.project.app.steps),l(6),h(t.project.screens),l(6),h(t.project.app.features),l(6),h(t.project.app.privacy),l(6),h(t.project.app.faq),l(7),_("href",t.project.app.betaUrl,ce),l(8),ne("Product case study \xB7 ",t.project.status),l(3),h(t.project.summary),l(8),h(t.project.problems),l(6),h(t.project.users),l(18),h(t.project.regimen),l(8),h(t.project.market),l(6),h(t.project.principles),l(5),h(t.project.antiFeatures),l(6),h(t.project.screens),l(6),h(t.project.roadmap),l(8),d(t.project.architectureIntro),l(2),h(t.project.techStack),l(47),h(t.project.layers),l(15),d(t.project.regimenModel),l(2),h(t.project.engineFunctions),l(7),h(t.project.lifecycle),l(8),h(t.project.replanEvents),l(8),h(t.project.notifications),l(6),h(t.project.privacy),l(6),h(t.project.currentState),l(10),h(t.project.release),l(6),h(t.project.betaGoals),l(14),h(t.project.risks)}},dependencies:[ft,xe,gt,Ge,Ue,Ze],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block;padding:0 var(--page-gutter) var(--space-xl);max-width:1200px;width:100%;margin:0 auto}.eyebrow[_ngcontent-%COMP%], .label[_ngcontent-%COMP%]{font-size:.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.05rem;color:var(--md-sys-color-primary)}.chips-wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.hero[_ngcontent-%COMP%]{display:grid;gap:var(--space-lg);align-items:center;margin-bottom:var(--space-lg)}@media(min-width:768px){.hero[_ngcontent-%COMP%]{grid-template-columns:1.4fr 1fr}}.hero__text[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--space-sm)}.hero__slogan[_ngcontent-%COMP%]{font-size:clamp(1.15rem,2vw,1.4rem);color:var(--md-sys-color-on-surface);margin:0}.hero__tagline[_ngcontent-%COMP%]{margin:0;font-size:.95rem}.hero__visual[_ngcontent-%COMP%]   .shot[_ngcontent-%COMP%]{max-width:320px;margin:0 auto}.shot[_ngcontent-%COMP%]{margin:0;display:flex;flex-direction:column;gap:.5rem}.shot[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .shot__placeholder[_ngcontent-%COMP%]{width:100%;aspect-ratio:9/19;border-radius:24px;border:1px solid var(--md-sys-color-outline-variant);object-fit:cover}.shot__placeholder[_ngcontent-%COMP%]{display:grid;place-items:center;padding:1rem;text-align:center;border-style:dashed;background:var(--md-sys-color-surface-container-high);color:var(--md-sys-color-on-surface-variant);font-size:.85rem}.shot[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{font-size:.85rem;color:var(--md-sys-color-on-surface-variant);text-align:center}.tabs[_ngcontent-%COMP%]{--mat-tab-header-label-text-size: .95rem}.tab-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--space-xl);padding-top:var(--space-lg)}.block[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--space-md)}.block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.subheading[_ngcontent-%COMP%]{font-size:1.15rem;margin-top:var(--space-sm)}.grid[_ngcontent-%COMP%]{display:grid;gap:var(--space-md)}@media(min-width:768px){.grid--2[_ngcontent-%COMP%], .grid--3[_ngcontent-%COMP%], .grid--4[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media(min-width:1024px){.grid--3[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.grid--4[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}.card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;padding:clamp(1rem,2vw,1.25rem);background:#120f1138;border:1px solid rgba(122,30,46,.22);border-radius:var(--border-radius)}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.1rem;color:var(--md-sys-color-on-surface)}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.95rem;line-height:1.6}.card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{margin-top:.25rem}.card--active[_ngcontent-%COMP%]{border-color:var(--md-sys-color-primary)}.number[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;color:var(--md-sys-color-primary)}.list[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:.5rem}.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;padding-left:1.5rem;line-height:1.6}.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\25b9";position:absolute;left:0;color:var(--md-sys-color-primary)}.list--cross[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before, .list--check[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2715";font-size:.8rem;top:.2rem}.list--check[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713"}.list--compact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.9rem;color:var(--md-sys-color-on-surface-variant)}ol.list[_ngcontent-%COMP%]{counter-reset:step}ol.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{counter-increment:step}ol.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:counter(step) "."}.table-wrap[_ngcontent-%COMP%]{overflow-x:auto;border:1px solid var(--md-sys-color-outline-variant);border-radius:var(--border-radius)}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-size:.95rem}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.75rem 1rem;text-align:left;vertical-align:top;border-bottom:1px solid var(--md-sys-color-outline-variant)}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:var(--md-sys-color-surface-container-high);font-weight:600}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}table[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%]{color:var(--md-sys-color-primary)}.badge[_ngcontent-%COMP%]{align-self:flex-start;padding:.1rem .6rem;border-radius:999px;font-size:.75rem;font-weight:600;background:var(--md-sys-color-primary-container);color:var(--md-sys-color-on-primary-container)}.badge--soon[_ngcontent-%COMP%]{background:transparent;color:var(--md-sys-color-on-surface-variant);border:1px solid var(--md-sys-color-outline-variant)}.faq[_ngcontent-%COMP%]{display:flex;flex-direction:column;border:1px solid var(--md-sys-color-outline-variant);border-radius:var(--border-radius)}.faq[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]{padding:.85rem 1rem}.faq[_ngcontent-%COMP%]   details[_ngcontent-%COMP%] + details[_ngcontent-%COMP%]{border-top:1px solid var(--md-sys-color-outline-variant)}.faq[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]{cursor:pointer;font-weight:600}.faq[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:.5rem}.cta[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:var(--space-sm);padding:var(--space-lg);text-align:center;border-radius:var(--border-radius);background:var(--surface-glow);border:1px solid rgba(122,30,46,.38)}.cta__button[_ngcontent-%COMP%]{padding:.75rem 1.5rem;border-radius:var(--border-radius);font-weight:600;background:var(--md-sys-color-primary);color:var(--md-sys-color-on-primary)}.cta__button[_ngcontent-%COMP%]:hover{color:var(--md-sys-color-on-primary)}.cta[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]{font-size:.8rem}.screens[_ngcontent-%COMP%]{display:grid;gap:var(--space-md);grid-template-columns:repeat(auto-fit,minmax(160px,1fr))}.c4[_ngcontent-%COMP%]{display:grid;gap:var(--space-md);align-items:start}@media(min-width:1024px){.c4[_ngcontent-%COMP%]{grid-template-columns:180px 1fr 220px}}.c4__actor[_ngcontent-%COMP%], .c4__box[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem;padding:.85rem 1rem;border:1px solid var(--md-sys-color-outline-variant);border-radius:var(--border-radius);background:var(--md-sys-color-surface-container)}.c4__actor[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .c4__box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.85rem;color:var(--md-sys-color-on-surface-variant)}.c4__device[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;padding:1rem;border-radius:var(--border-radius);background:#ffffff08;border:1px solid var(--md-sys-color-outline-variant)}.c4__arrow[_ngcontent-%COMP%]{align-self:center;font-size:.8rem;color:var(--md-sys-color-on-surface-variant)}.c4__box--db[_ngcontent-%COMP%]{border:2px solid var(--md-sys-color-primary)}.c4__external[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--space-sm)}.c4__box--ext[_ngcontent-%COMP%]{border-style:dashed;background:transparent}.layers[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}.layer[_ngcontent-%COMP%]{display:grid;gap:.25rem 1rem;padding:.85rem 1rem;border:1px solid var(--md-sys-color-outline-variant);border-radius:var(--border-radius)}@media(min-width:768px){.layer[_ngcontent-%COMP%]{grid-template-columns:160px 1fr}}.layer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.95rem;color:var(--md-sys-color-on-surface-variant)}.layer--highlight[_ngcontent-%COMP%]{border:2px solid var(--md-sys-color-primary);background:var(--surface-glow)}.code[_ngcontent-%COMP%]{margin:0;padding:1rem;overflow-x:auto;font-size:.85rem;line-height:1.5;border-radius:var(--border-radius);background:var(--md-sys-color-surface-container-lowest);border:1px solid var(--md-sys-color-outline-variant)}.fn[_ngcontent-%COMP%]{font-size:.9rem;color:var(--md-sys-color-primary);word-break:break-word}.lifecycle[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center}.state[_ngcontent-%COMP%]{padding:.25rem .75rem;border-radius:999px;font-size:.85rem;border:1px solid var(--md-sys-color-outline)}.state--start[_ngcontent-%COMP%]:after{content:" \\2192";color:var(--md-sys-color-primary)}'],changeDetection:0})};export{kt as DoseSync};
