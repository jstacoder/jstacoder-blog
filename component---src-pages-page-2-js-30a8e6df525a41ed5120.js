(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{611:function(e,t,a){"use strict";a.r(t);a(26);var n=a(1),r=a.n(n),i=a(620),c=a(656),o=a(658),l=function(){return r.a.createElement(c.a,null,r.a.createElement(o.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))};t.default=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SecondPage",filename:"src/pages/page-2.js"}}),l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SecondPage",filename:"src/pages/page-2.js"}})},620:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(1),r=a.n(n),i=a(3),c=a.n(i),o=a(59),l=a.n(o);a.d(t,"a",function(){return l.a});a(627);var s=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&i(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||i,staticQueryData:e})})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},627:function(e,t,a){var n;e.exports=(n=a(637))&&n.default||n},637:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),i=a(1),c=a.n(i),o=a(3),l=a.n(o),s=a(90),u=function(e){var t=e.location,a=e.pageResources;return a?c.a.createElement(s.a,r()({location:t,pageResources:a},a.json)):null};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},638:function(e,t,a){"use strict";a(26);var n=a(620),r=a(3),i=a.n(r),c=a(1),o=a.n(c),l=function(e){var t=e.siteTitle;return o.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(n.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};l.propTypes={siteTitle:i.a.string},l.defaultProps={siteTitle:""},t.a=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Header",filename:"src/components/header.js"}}),l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Header",filename:"src/components/header.js"}})},656:function(e,t,a){"use strict";a(26);var n=a(657),r=a(1),i=a.n(r),c=a(3),o=a.n(c),l=a(620),s=a(638),u=(a(738),function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});u.propTypes={children:o.a.node.isRequired},t.a=u,u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Layout",filename:"src/components/layout.js"}}),u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Layout",filename:"src/components/layout.js"}})},657:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},658:function(e,t,a){"use strict";a(26);var n=a(659),r=a(1),i=a.n(r),c=a(3),o=a.n(c),l=a(654),s=a.n(l);function u(e){var t=e.description,a=e.lang,r=e.meta,c=e.title,o=n.data.site,l=t||o.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=u,u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SEO",filename:"src/components/seo.js"}}),u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SEO",filename:"src/components/seo.js"}})},659:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-30a8e6df525a41ed5120.js.map