"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[470],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(r),h=i,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||s;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9199:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(7462),i=r(3366),s=(r(7294),r(3905)),o=["components"],a={sidebar_position:2,title:"Structure"},c="Folder structure",l={unversionedId:"Client/structure",id:"Client/structure",isDocsHomePage:!1,title:"Structure",description:"The general folder structure for the client project",source:"@site/docs/Client/structure.md",sourceDirName:"Client",slug:"/Client/structure",permalink:"/docs/Client/structure",editUrl:"https://github.com/hampfh/datalinks/docs/Client/structure.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Structure"},sidebar:"tutorialSidebar",previous:{title:"Get started",permalink:"/docs/Client/intro-client"},next:{title:"Screens",permalink:"/docs/Client/screens"}},u=[{value:"The general folder structure for the client project",id:"the-general-folder-structure-for-the-client-project",children:[{value:"@types",id:"types",children:[],level:3},{value:"assets",id:"assets",children:[],level:3},{value:"components",id:"components",children:[{value:"screens",id:"screens",children:[],level:4},{value:"templates",id:"templates",children:[],level:4},{value:"utilities",id:"utilities",children:[],level:4}],level:3},{value:"functions",id:"functions",children:[{value:"hooks",id:"hooks",children:[],level:4}],level:3},{value:"state",id:"state",children:[{value:"actions",id:"actions",children:[],level:4},{value:"reducers",id:"reducers",children:[],level:4}],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"folder-structure"},"Folder structure"),(0,s.kt)("h2",{id:"the-general-folder-structure-for-the-client-project"},"The general folder structure for the client project"),(0,s.kt)("p",null,"The core structure comes from ",(0,s.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"create-react-app"),", if you are familiar with this you will feel relatively at home."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"<root>\n  \u2514\u2500client\n      \u251c\u2500public\n      \u2514\u2500src\n         \u251c\u2500@types\n         \u251c\u2500assets\n         \u251c\u2500components\n         |   \u251c\u2500screens\n         |   |   \u2514\u2500components\n         |   \u251c\u2500templates\n         |   \u2514\u2500utilities\n         \u251c\u2500functions\n         |   \u2514\u2500hooks\n         \u2514\u2500state\n             \u251c\u2500actions\n             \u2514\u2500reducers\n")),(0,s.kt)("h3",{id:"types"},"@types"),(0,s.kt)("p",null,"This is a typescript folder for type declarations. Generally, interfaces and types are defined in the same component as they're used in but if the interface is used in multiple places it's moved to this folder."),(0,s.kt)("h3",{id:"assets"},"assets"),(0,s.kt)("p",null,"The assets folder is quite self-explanatory. It hosts all images, svgs, and other bits and bobs that are not code."),(0,s.kt)("h3",{id:"components"},"components"),(0,s.kt)("p",null,"All react-specific components are restricted to this folder. Neither class nor function components should exist outside of this folder. "),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"React components are all files ending with ",(0,s.kt)("inlineCode",{parentName:"p"},".tsx")," instead of ",(0,s.kt)("inlineCode",{parentName:"p"},".ts")))),(0,s.kt)("h4",{id:"screens"},"screens"),(0,s.kt)("p",null,'"Screens" represent each landing page that a user can visit in the application, eg Home, Subjects, Subject, archived, etc... Each screen also contains a folder also named "components" which has all react components that are specific for that single screen. Aka components that aren\'t reusable outside the context.'),(0,s.kt)("p",null,"Read more about which screens exists ",(0,s.kt)("a",{parentName:"p",href:"screens"},"here")),(0,s.kt)("h4",{id:"templates"},"templates"),(0,s.kt)("p",null,"This directory holds very general components such as text, inputs, content objects, etc... Everything that isn't primarily for one specific screen."),(0,s.kt)("h4",{id:"utilities"},"utilities"),(0,s.kt)("p",null,'The utilities folder is deprecated and should be merged with the "functions" folder.'),(0,s.kt)("h3",{id:"functions"},"functions"),(0,s.kt)("p",null,"Utility functions that are not necessarily linked to react. An example of this is network requests."),(0,s.kt)("h4",{id:"hooks"},"hooks"),(0,s.kt)("p",null,"React hooks"),(0,s.kt)("h3",{id:"state"},"state"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://redux.js.org"},"Redux")," state folder"),(0,s.kt)("h4",{id:"actions"},"actions"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#designing-actions"},"Redux actions")),(0,s.kt)("h4",{id:"reducers"},"reducers"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://redux.js.org/usage/structuring-reducers/basic-reducer-structure"},"Redux reducers")))}d.isMDXComponent=!0}}]);