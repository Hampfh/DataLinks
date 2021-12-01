"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[849],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=o,d=u["".concat(c,".").concat(g)]||u[g]||m[g]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6657:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:3,title:"Logging"},c=void 0,l={unversionedId:"Server/logging",id:"Server/logging",isDocsHomePage:!1,title:"Logging",description:"DataLinks have a relatively robust logging system to track changes over time. With the implementation of kth OpenID Connect it is now also possible to track, with certainty, who has performed changes. This is very important as it makes it easier to perform rollbacks and manage abusive behavior of the application.",source:"@site/docs/Server/logging.md",sourceDirName:"Server",slug:"/Server/logging",permalink:"/DataLinks/docs/Server/logging",editUrl:"https://github.com/hampfh/datalinks/docs/Server/logging.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Logging"},sidebar:"tutorialSidebar",previous:{title:"Controllers",permalink:"/DataLinks/docs/Server/controllers"}},p=[],m={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"DataLinks have a relatively robust logging system to track changes over time. With the implementation of ",(0,i.kt)("a",{parentName:"p",href:"https://intra.kth.se/en/it/natverk/identitetshantering/konfigurationsinformation-for-saml-openid-connect-1.1045571"},"kth OpenID Connect")," it is now also possible to track, with certainty, who has performed changes. This is very important as it makes it easier to perform rollbacks and manage abusive behavior of the application. "),(0,i.kt)("p",null,"The logging system uses the function log:"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This function is also directly connected to the implemented contribution system for the application "))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=controllers/Log.ts",title:"controllers/Log.ts"},"const log = async (\n    userId: mongoose.Types.ObjectId,\n    operation: OperationType, \n    type: ContentType, \n    to: string[], \n    from?: string[]\n): Promise<void> => {\n\n    const newLog = new Log({\n        user: userId,\n        operation,\n        to,\n        type,\n        from: from ?? []\n    })\n\n    await newLog.save()\n\n    await User.contribute(\n        userId.toString(), \n        operation, \n        type\n    )\n}\n")),(0,i.kt)("p",null,"Logs are called from all controller actions (except GET requests), meaning that as soon as someone performs a ",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," the request will be logged and the user will change its contribution score."))}u.isMDXComponent=!0}}]);