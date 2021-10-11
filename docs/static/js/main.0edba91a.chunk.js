(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(16),n=a.n(s),r=a(7),i=a(9),l=(a(23),a(24),{callToApi:function(e){return fetch("https://rickandmortyapi.com/api/character?page="+e).then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{name:e.name,species:e.species,image:e.image,id:e.id,status:e.status,episode:e.episode,origin:e.origin.name}}))}))}}),j=a(2),o={get:function(e,t){var a=localStorage.getItem(e);return null===a?t:JSON.parse(a)},set:function(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)},remove:function(e){localStorage.removeItem(e)},clear:function(){localStorage.clear()}},h=a.p+"static/media/RickandMorty.de13d484.png",u=(a(25),a(0)),d=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("img",{className:"header__imageLogo",src:h,alt:"Imagen Rick and Morty"}),Object(u.jsx)("h1",{className:"header__title",children:"Welcome to Rick & Morty Search browser"})]})})},m=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("label",{htmlFor:e.id,className:"form__labelText",children:e.labelText}),Object(u.jsx)("input",{className:"form__searchName",type:e.type,name:e.name,id:e.id,value:e.searchName,onChange:function(t){e.handleSearchName(t.currentTarget.value)}})]})};m.defaultProps={type:"text"};var p=m,b=function(e){return Object(u.jsxs)("div",{className:"selectOption__item",children:[Object(u.jsx)("label",{htmlFor:"species",className:"form__labelText",children:"Select species"}),Object(u.jsxs)("select",{className:"form__searchSpecies",name:"species",id:"species",value:e.selectSepecies,onChange:function(t){e.handleSelect(t.currentTarget.value)},children:[Object(u.jsx)("option",{value:"All",children:"All"}),Object(u.jsx)("option",{value:"Human",children:"Human"}),Object(u.jsx)("option",{value:"Alien",children:"Alien"}),Object(u.jsx)("option",{value:"Humanoid",children:"Humanoid"}),Object(u.jsx)("option",{value:"Unknow",children:"Unknow"})]})]})},O=(a(27),function(e){return Object(u.jsxs)("div",{className:"selectOption__item",children:[Object(u.jsx)("label",{htmlFor:"status",className:"form__labelText",children:"Status:"}),Object(u.jsxs)("select",{className:"form__searchSpecies",name:"status",id:"status",value:e.selectStatus,onChange:function(t){e.handleStatus(t.currentTarget.value)},children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"Alive",children:"Alive"}),Object(u.jsx)("option",{value:"Dead",children:"Dead"}),Object(u.jsx)("option",{value:"unknown",children:"Unknown"})]})]})}),x=function(e){return Object(u.jsxs)("form",{className:"form",children:[Object(u.jsx)(p,{searchName:e.searchName,handleSearchName:e.handleSearchName,labelText:"Type name here",type:"text",name:"name",id:"name"}),Object(u.jsxs)("div",{className:"selectOption",children:[Object(u.jsx)(b,{selectSpecies:e.selectSepecies,handleSelect:e.handleSelect}),Object(u.jsx)(O,{selectStatus:e.selectStatus,handleStatus:e.handleStatus})]})]})},f=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"wrapper__listChar--wrap",children:[Object(u.jsx)("img",{className:"wrapper__listChar--imageChar",src:e.char.image,alt:e.char.name}),Object(u.jsxs)("div",{className:"wrapper__listChar--styleContent",children:[Object(u.jsxs)("p",{className:"wrapper__listChar--textName",children:["Name: ",Object(u.jsx)("strong",{children:e.char.name})]}),Object(u.jsxs)("p",{className:"wrapper__listChar--textSpecie",children:["Specie: ",Object(u.jsx)("strong",{children:e.char.species})]}),Object(u.jsxs)("p",{className:"wrapper__listChar--textSpecie",children:["Status: ",Object(u.jsx)("strong",{children:e.char.status})]})]})]})})},N=(a(28),a(14),function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("section",{className:"wrapperNotFound",children:[Object(u.jsx)("p",{className:"wrapperNotFound__errorText",children:" NOT FOUND"}),Object(u.jsx)("p",{children:"Try Again! "})]})})}),g=function(e){if(0===e.data.length)return Object(u.jsx)(N,{});var t=e.data.map((function(e){return Object(u.jsx)("li",{className:"wrapper__listChar",children:Object(u.jsx)(r.b,{to:"/character/".concat(e.id),className:"mainWrapper__link",children:Object(u.jsx)(f,{char:e})})},e.id)}));return Object(u.jsx)("section",{className:"mainWrapper",children:Object(u.jsxs)("ul",{className:"wrapper",children:[" ",t]})})},_=(a(34),a.p+"static/media/notFound2.a7989f37.PNG"),v=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("section",{className:"wrapperNotFound",children:[Object(u.jsx)("img",{className:"wrapperNotFound__img",src:_,alt:"notFound"}),Object(u.jsxs)(r.b,{to:"/",className:"wrapperNotFound__returnText",children:[Object(u.jsx)("i",{class:"fas fa-hand-point-left"})," Return to homepage"]})]})})},S=function(e){return void 0===e.char?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(v,{})}):Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("section",{className:"wrapperCharCard",children:[Object(u.jsx)("div",{className:"wrapperCharCard__link",children:Object(u.jsx)(r.b,{to:"/",className:"wrapperCharCard__link--text",children:"Back"})}),Object(u.jsxs)("div",{className:"wrapperCharCard__description",children:[Object(u.jsx)("img",{className:"wrapperCharCard__description--img",src:e.char.image,alt:e.char.name}),Object(u.jsxs)("ul",{className:"wrapperCharCard__description--listChar",children:[Object(u.jsxs)("li",{children:[" Name: ",e.char.name]}),Object(u.jsxs)("li",{children:[" Specie: ",e.char.species]}),Object(u.jsxs)("li",{children:[" Origin: ",e.char.origin]}),Object(u.jsxs)("li",{children:[" episodes: ",function(){for(var t=0,a=e.char.episode,c=0;c<a.length;c++)t=c+1;return t}()]}),Object(u.jsxs)("li",{children:[" ",function(){var t=e.char.status;return"Alive"===t?Object(u.jsxs)("p",{children:["Status: ",Object(u.jsx)("i",{class:"fab fa-reddit-alien"})]}):"Dead"===t?Object(u.jsxs)("p",{children:["Status: ",Object(u.jsx)("i",{class:"fas fa-skull-crossbones"})]}):Object(u.jsxs)("p",{children:["Status: ",Object(u.jsx)("i",{class:"far fa-question-circle"})]})}()," "]})]})]})]})})},w=(a(35),function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("footer",{className:"footer",children:[Object(u.jsx)("h1",{className:"footer__title",children:"  Rick & Morty Search browser "}),Object(u.jsx)("p",{className:"footer__description",children:"by SaraRid"})]})})}),C=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.info.pages}))},k=function(e,t){return(e-=1)<1?C().then((function(e){return console.log(e),t(e)})):t(e)},F=function(e,t){return t((e+=1)>34?1:e)},y=(a(36),function(e){var t=e.page,a=e.handleLess,c=e.handleMore;return Object(u.jsx)("nav",{className:"pageNav",children:Object(u.jsxs)("ul",{className:"pageNav__list animation_page",children:[Object(u.jsxs)("li",{className:"pageNav__list--item",onClick:a,children:[Object(u.jsx)("i",{className:"fas fa-angle-double-left "})," Previous page"]}),Object(u.jsxs)("span",{children:["| Page ",t," |"]}),Object(u.jsxs)("li",{className:"pageNav__list--item",onClick:c,children:[Object(u.jsx)("i",{className:"fas fa-angle-double-right ",children:"  "}),"Next page"]})]})})});var T=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(o.get("name","")),r=Object(i.a)(n,2),h=r[0],m=r[1],p=Object(c.useState)("All"),b=Object(i.a)(p,2),O=b[0],f=b[1],N=Object(c.useState)("all"),_=Object(i.a)(N,2),C=_[0],T=_[1],A=Object(c.useState)(o.get("page",1)),I=Object(i.a)(A,2),L=I[0],M=I[1];Object(c.useEffect)((function(){l.callToApi(L).then((function(e){return s(e)}))}),[L]),Object(c.useEffect)((function(){o.set("name",h)}),[h]);var R=a.filter((function(e){return e.name.toLocaleLowerCase().includes(h.toLocaleLowerCase())})).filter((function(e){return"All"===O||O===e.species})).filter((function(e){return"all"===C||C===e.status})).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),D=Object(j.f)("/character/:characterId");console.log(D);var H=null!=D?D.params.characterId:"",J=a.find((function(e){return e.id===parseInt(H)}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{}),Object(u.jsxs)(j.c,{children:[Object(u.jsxs)(j.a,{path:"/",exact:!0,children:[Object(u.jsxs)("main",{className:"main",children:[Object(u.jsx)(x,{searchName:h,selectSepecies:O,selectStatus:C,handleSearchName:function(e){m(e)},handleSelect:function(e){f(e)},handleStatus:function(e){T(e),console.log(e)}}),Object(u.jsx)(y,{handleLess:function(){k(L,M)},handleMore:function(){F(L,M)},page:L}),Object(u.jsx)(g,{data:R})]}),Object(u.jsx)(w,{})]}),Object(u.jsx)(j.a,{path:"/character/:characterId",children:Object(u.jsx)(S,{char:J})}),Object(u.jsx)(j.a,{children:Object(u.jsx)(v,{})})]})]})};n.a.render(Object(u.jsx)(r.a,{children:Object(u.jsx)(T,{})}),document.getElementById("root"))}],[[37,1,2]]]);
//# sourceMappingURL=main.0edba91a.chunk.js.map