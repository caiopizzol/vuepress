(window.webpackJsonp=window.webpackJsonp||[]).push([[3,5],{424:function(t,e,a){"use strict";a(9),a(67),a(48);var i=function(t,e){for(var a=e.split("."),i=a.length,n=0;null!=t&&n<i;)t=t[a[n++]];return n&&n===i?t:void 0};e.a={get:function(t,e,a){return a?i(t,"themeConfig.locales.".concat(a,".").concat(e))||i(t,"themeConfig.".concat(e))||i(t,"locales.".concat(a,".").concat(e))||t[e]:i(t,"themeConfig.".concat(e))||t[e]}}},425:function(t,e,a){},429:function(t,e,a){a(10),a(13),a(9),a(67),e.defaultLocales={"/":{lastUpdated:"Last Updated",editLinkText:"Edit this page",container:{tip:"TIP",warning:"WARNING",danger:"DANGER"}},"/zh/":{lastUpdated:"上次更新",editLinkText:"编辑此页面",container:{tip:"提示",warning:"注意",danger:"警告"}}},e.getDefaultLocales=function(t,a){var i=e.defaultLocales[t]||e.defaultLocales["/"];return a.split(".").forEach((function(t){i=i[t]})),i}},430:function(t,e,a){"use strict";a(425)},445:function(t,e,a){},446:function(t,e,a){},447:function(t,e,a){},448:function(t,e,a){"use strict";a.r(e);a(9),a(23),a(10),a(13),a(154),a(24);var i=a(53),n=a(424),s=a(429),o={data:function(){return{blocks:[]}},computed:{isEnchanceMode:function(){return!!this.$page.frontmatter.enhance},isBlockLayout:function(){return this.isEnchanceMode||!!this.blocks.length},pageClasses:function(){return{page__container:!0,"page--block-layout":this.isBlockLayout}},lastUpdated:function(){return!1!==this.$site.themeConfig.lastUpdated&&this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof(this.$site.themeConfig.lastUpdated||n.a.get(this.$site,"lastUpdated",this.$localePath))?this.$site.themeConfig.lastUpdated:Object(s.getDefaultLocales)(this.$localePath,"lastUpdated")},editLink:function(){if(!1===this.$page.frontmatter.editLink)return"";var t=this.$site.themeConfig,e=t.repo,a=t.editLinks,n=t.docsDir,s=void 0===n?"":n,o=t.docsBranch,r=void 0===o?"master":o,c=t.docsRepo,l=void 0===c?e:c,d=this.$page.path;return"/"===d.substr(-1)?d+="README.md":d+=".md",l&&a?(Object(i.b)(l)?l:"https://github.com/".concat(l)).replace(/\/$/,"")+"/edit/".concat(r)+(s?"/"+s.replace(/\/$/,""):"")+d:""},editLinkText:function(){return this.$site.themeConfig.editLinkText||Object(s.getDefaultLocales)(this.$localePath,"editLinkText")}},watch:{$route:function(t,e){t.path!==e.path&&(this.blocks.length=0,this.isEnchanceMode&&this.$nextTick(this.resolveLayout))}},mounted:function(){this.isEnchanceMode&&this.$nextTick(this.resolveLayout)},created:function(){this.$on("addBlock",this.addBlock)},methods:{resolveLayout:function(){var t=this.$el.children[0],e="";Array.from(t.children).forEach((function(t){!function(t){var e=t.tagName.toLowerCase();return"h1"===e||"h2"===e}(t)?e+=t.outerHTML:(e&&(e+='\n                </div>\n                <div class="content-block__examples">\n                </div>\n              </div>\n            </div>\n            '),e+='\n            <div class="content-block">\n              <div class="content-block__heading">\n                '.concat(t.outerHTML,'\n              </div>\n              <div class="content-block__body">\n                <div class="content-block__cont">\n          '))})),e+='\n                </div>\n                <div class="content-block__examples">\n                </div>\n              </div>\n            </div>\n      ',t.innerHTML=e},addBlock:function(t){this.blocks.push(t)}}},r=(a(430),a(5)),c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.pageClasses},[a("Content",{attrs:{custom:""}}),t._v(" "),t.lastUpdated||t.editLink?a("div",{staticClass:"content__footer-container"},[a("div",{staticClass:"content__footer"},[t.lastUpdated?a("div",{staticClass:"last-updated"},[a("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e(),t._v(" "),t.editLink?a("div",{staticClass:"edit-link"},[a("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),a("svg",{attrs:{viewBox:"0 0 33 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16"}},[a("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{id:"github",fill:"#000"}},[a("path",{attrs:{d:"M16.3,0 C7.3,0 -3.55271368e-15,7.3 -3.55271368e-15,16.3 C-3.55271368e-15,23.5 4.7,29.6 11.1,31.8 C11.9,31.9 12.2,31.4 12.2,31 L12.2,28.2 C7.7,29.2 6.7,26 6.7,26 C6,24.2 5,23.7 5,23.7 C3.5,22.7 5.1,22.7 5.1,22.7 C6.7,22.8 7.6,24.4 7.6,24.4 C9.1,26.9 11.4,26.2 12.3,25.8 C12.4,24.7 12.9,24 13.3,23.6 C9.7,23.2 5.9,21.8 5.9,15.5 C5.9,13.7 6.5,12.3 7.6,11.1 C7.4,10.7 6.9,9 7.8,6.8 C7.8,6.8 9.2,6.4 12.3,8.5 C13.6,8.1 15,8 16.4,8 C17.8,8 19.2,8.2 20.5,8.5 C23.6,6.4 25,6.8 25,6.8 C25.9,9 25.3,10.7 25.2,11.1 C26.2,12.2 26.9,13.7 26.9,15.5 C26.9,21.8 23.1,23.1 19.5,23.5 C20.1,24 20.6,25 20.6,26.5 L20.6,31 C20.6,31.4 20.9,31.9 21.7,31.8 C28.2,29.6 32.8,23.5 32.8,16.3 C32.6,7.3 25.3,0 16.3,0 L16.3,0 Z"}})])])])]):t._e()])]):t._e()],1)}),[],!1,null,null,null);e.default=c.exports},509:function(t,e,a){"use strict";a(445)},510:function(t,e,a){"use strict";a(446)},511:function(t,e,a){"use strict";a(447)},513:function(t,e,a){"use strict";a.r(e);a(49),a(35),a(30),a(34);var i=a(4),n=a(107),s=a.n(n),o=(a(10),a(13),a(48),a(29),a(240),a(242),a(46),a(9),a(23),a(84),a(40),a(108),a(153),a(151),a(424));var r={name:"Sidebar",components:{NavLink:a(235).a},props:{items:{type:Object,required:!0}},data:function(){return{containerWidth:"100%",searchKeyword:""}},computed:{searchedOptions:function(){var t=this,e=[];return this.sidebars.forEach((function(t){t.to&&e.push({to:t.to,text:t.title}),t.headers&&t.headers.forEach((function(a){e.push({to:"".concat(t.to,"#").concat(a.slug),text:a.title})})),t.children&&t.children.forEach((function(t){e.push({to:t.to,text:t.title}),t.headers&&t.headers.forEach((function(a){e.push({to:"".concat(t.to,"#").concat(a.slug),text:a.title})}))}))})),e.filter((function(e){return(e.text||"").toLowerCase().includes(t.searchKeyword.toLowerCase())}))},shouldShowLangSelect:function(){return Object.keys(this.$site.locales||{}).length>1},languageSelectText:function(){return o.a.get(this.$site,"selectText",this.$localePath)||"languages"},currentPagePath:function(){return this.$page.path},currentRouteFullPath:function(){return decodeURIComponent(this.$route.fullPath)},localePathList:function(){var t=this;return Object.keys(this.$site.locales||{}).map((function(e){var a=t.$site.locales[e],i=o.a.get(t.$site,"label",e)||a.text||a.lang,n="";a.path===t.$localePath?n=t.$page.path:(n=t.$page.path.replace(t.$localePath,a.path),!t.$site.pages.some((function(t){return t.path===n}))&&(n=a.path));return{prop:i,value:n}}))},sidebarGroupOrder:function(){var t=this,e=o.a.get(this.$site,"sidebarGroupOrder",this.$localePath),a=e?e.filter((function(e){return!!t.items[e]})):Object.keys(this.items),i=a.indexOf("home");return-1!==i&&a.splice(i,1),a.sort(),a.unshift("home"),a},sidebars:function(){var t=this;return this.sidebarGroupOrder.map((function(e){return t.items[e]})).filter((function(t){return t}))}},mounted:function(){this.refreshContainerWidth(),this.checkActiveSidebarItem(),window.addEventListener("resize",this.refreshContainerWidth)},beforeDestroy:function(){window.removeEventListener("resize",this.refreshContainerWidth)},methods:{title:function(t){var e=["http","https","cli","api"];return t.toLowerCase().replace(/(?:(?:(\s?(?:^|[.\(\)!?;:"-])\s*)(\w))|(\w))(\w*[’']*\w*)/g,(function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0;return e.includes(t)?t.toUpperCase():a+(n||i).toUpperCase()+s}))},toggleLocale:function(t){this.$router.push(t)},refreshContainerWidth:function(){var t=this.$refs.container.parentNode.getBoundingClientRect().width;this.containerWidth=t?"".concat(t,"px"):"100%"},savePosition:function(){if(this.$refs.container){var t=this.$refs.container.scrollTop;window.localStorage.setItem("vuepress_theme_api_sidebar_position",t)}},restorePosition:function(){var t=parseInt(window.localStorage.getItem("vuepress_theme_api_sidebar_position"),10);t&&(this.$refs.container.scrollTop=t)},checkActiveSidebarItem:function(){var t=this.$refs.container.querySelector(".category--active");if(t){var e=document.documentElement.clientHeight,a=t.getBoundingClientRect().top;a<e?this.restorePosition():(this.$refs.container.scrollTop=a-100,this.savePosition())}else this.restorePosition()}}},c=(a(509),a(5)),l=Object(c.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"container",staticClass:"sidebar",style:{width:t.containerWidth},on:{click:t.savePosition}},[a("div",{staticClass:"group"},[a("div",{staticClass:"group__title"},[t._v("Search")]),t._v(" "),a("div",{staticClass:"group__body"},[a("Search",{attrs:{options:t.searchedOptions},model:{value:t.searchKeyword,callback:function(e){t.searchKeyword=e},expression:"searchKeyword"}})],1)]),t._v(" "),t.shouldShowLangSelect?a("div",{staticClass:"group"},[a("div",{staticClass:"group__title"},[t._v(t._s(t.languageSelectText))]),t._v(" "),a("div",{staticClass:"group__body"},[a("div",{staticClass:"sidebar__lang"},[a("Select",{attrs:{options:t.localePathList,value:t.currentPagePath},on:{change:t.toggleLocale}})],1)])]):t._e(),t._v(" "),t._l(t.sidebars,(function(e,i){return a("div",{key:e.to||i,staticClass:"group"},[a("div",{staticClass:"group__title"},[t._v("\n      "+t._s(t.sidebarGroupOrder[i].replace(/^\d+[_-]*/g,""))+"\n    ")]),t._v(" "),a("div",{staticClass:"group__body"},[e.to?a("div",{class:["group__category","category",{"category--selected":t.currentRouteFullPath===e.to,"category--active":t.currentRouteFullPath===e.to}]},[a("div",{staticClass:"category__label"},[a("NavLink",{staticClass:"category__link sidebar-link",attrs:{to:e.to}},[t._v(t._s(t.title(e.title||t.sidebarGroupOrder[i])))])],1)]):t._e(),t._v(" "),e.headers&&e.headers.length?a("div",t._l(e.headers,(function(i){return a("div",{key:e.to+"#"+i.slug,class:["group__category","category",{"category--selected":t.currentRouteFullPath===e.to+"#"+i.slug,"category--active":t.currentRouteFullPath===e.to+"#"+i.slug}]},[a("div",{staticClass:"category__label"},[a("NavLink",{staticClass:"category__link sidebar-link",attrs:{to:e.to+"#"+i.slug}},[t._v(t._s(t.title(i.title)))])],1)])})),0):t._e(),t._v(" "),e.children&&e.children.length?a("div",t._l(e.children,(function(e){return a("div",{key:""+e.to,class:["group__category","category",{"category--selected":!e.isLangNav&&t.$route.path===e.to,"category--active":!e.isLangNav&&t.currentRouteFullPath===e.to}]},[a("div",{staticClass:"category__label"},[a("NavLink",{staticClass:"category__link sidebar-link",attrs:{to:e.to}},[t._v(t._s(t.title(e.title)))])],1),t._v(" "),e.headers&&e.headers.length?a("div",t._l(e.headers,(function(i){return a("div",{key:e.to+"#"+i.slug,class:["category__headers",{"category--active":t.currentRouteFullPath===e.to+"#"+i.slug}]},[a("div",{staticClass:"category__header-item"},[a("NavLink",{staticClass:"category__link sidebar-link",attrs:{to:e.to+"#"+i.slug}},[t._v(t._s(t.title(i.title)))])],1)])})),0):t._e()])})),0):t._e()])])}))],2)}),[],!1,null,null,null).exports,d=a(512),u=a(448),h=a(443);var p={components:{Home:d.default,Sidebar:l,Page:u.default},data:function(){return{isSidebarOpen:!0,isMenuOpened:!1}},computed:{sidebarItems:function(){return t=this.$site,e=this.$localePath,a={},(i=o.a.get(t,"sidebar",e))?Object.assign(a,i):(t.pages.filter((function(a){return!t.locales||Object(h.e)(a.path,t.locales)===e})).forEach((function(t){if(Object(h.a)(t.path,e))a.home={title:t.title,to:t.path,children:[]};else{var i=Object(h.d)(t.path,e);a[i]||(a[i]={children:[]}),void 0===t.headers&&(t.headers=[]);var n=function(t){if(!t.length)return-1;for(var e=t[0].level,a=1,i=t.length;a<i;a++)t[a].level<e&&(e=t[a].level);return e}(t.headers);t.path==="".concat(e).concat(i,"/")?(a[i].title=t.title,a[i].to=t.path,a[i].headers=t.headers.filter((function(t){return t.level===n}))):a[i].children.push({title:t.title||Object(h.c)(t.path),to:t.path,headers:t.headers.filter((function(t){return t.level===n}))})}})),a);var t,e,a,i},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&Object.keys(this.sidebarItems).length},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-sidebar":!this.shouldShowSidebar},t]}},watch:{$route:function(){this.isMenuOpened=!1}},mounted:function(){s.a.configure({showSpinner:!1}),this.$router.beforeEach((function(t,e,a){t.path===e.path||i.a.component(t.name)||s.a.start(),a()})),this.$router.afterEach((function(){s.a.done()}))},created:function(){this.$ssrContext&&(this.$ssrContext.title=this.$title,this.$ssrContext.lang=this.$lang,this.$ssrContext.description=this.$page.description||this.$description)}},f=(a(510),a(511),Object(c.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme__container",class:t.pageClasses},[t.shouldShowSidebar?a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3 col-lg-2 sidebar__container"},[a("Menubar",{attrs:{open:t.isMenuOpened},on:{"update:open":function(e){t.isMenuOpened=e}}}),t._v(" "),a("Sidebar",{directives:[{name:"show",rawName:"v-show",value:t.isMenuOpened,expression:"isMenuOpened"}],attrs:{items:t.sidebarItems}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2)],1),t._v(" "),a("div",{staticClass:"col-md-9 col-lg-10 content__container"},[t.$page.frontmatter.layout?a("div",{staticClass:"custom__layout"},[a(t.$page.frontmatter.layout,{tag:"component"})],1):t.$page.frontmatter.home?a("Home"):a("Page")],1)]):t._e(),t._v(" "),t.shouldShowSidebar?t._e():a("div",[t.$page.frontmatter.layout?a("div",{staticClass:"custom__layout"},[a(t.$page.frontmatter.layout,{tag:"component"})],1):t.$page.frontmatter.home?a("Home"):a("Page")],1)])}),[],!1,null,null,null));e.default=f.exports}}]);