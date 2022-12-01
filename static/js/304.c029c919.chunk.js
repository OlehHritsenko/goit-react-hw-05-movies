"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{6560:function(n,t,e){e.d(t,{O:function(){return w}});var r,a,i,o,c,s=e(470),p=e(168),u=e(6444),d=e(6731),h=u.ZP.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: stretch;\n  gap: 20px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),f=u.ZP.li(a||(a=(0,p.Z)(["\n  padding-bottom: 5px;\n  background-color: #020024;\n  color: #fff;\n  border: 3px solid rgba(132, 132, 132, 0.5);\n  border-radius: 4px;\n  box-shadow: 0px 7px 10px -2px rgba(132, 132, 132, 0.5);\n  :hover {\n    box-shadow: 0 4px 10px #000;\n    scale: 1.01;\n  }\n"]))),l=u.ZP.img(i||(i=(0,p.Z)(["\n  display: block;\n  width: 100%;\n  height: auto;\n  background-color: darkgray;\n  @media screen and (min-width: 320px) {\n    width: 240px;\n  }\n  @media screen and (min-width: 768px) {\n    width: 170px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 200px;\n  }\n"]))),x=(0,u.ZP)(d.rU)(o||(o=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  color: inherit;\n  :hover,\n  :focus {\n    color: #3f93b9;\n    text-decoration: underline;\n  }\n"]))),g=u.ZP.p(c||(c=(0,p.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  text-align: center;\n  @media screen and (min-width: 320px) {\n    width: 240px;\n  }\n  @media screen and (min-width: 768px) {\n    width: 170px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 200px;\n  }\n"]))),m=e(184),w=function(n){var t=n.movies,e=(0,s.TH)();return(0,m.jsx)(h,{children:t.map((function(n){var t=n.id,r=n.poster_path,a=n.title;return(0,m.jsx)(f,{children:(0,m.jsxs)(x,{to:"/movies/".concat(t),state:{from:e},children:[(0,m.jsx)(l,{src:r?"https://image.tmdb.org/t/p/w500".concat(r):"https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj",alt:a,width:"100",height:"160",loading:"lazy"}),(0,m.jsx)(g,{children:a})]})},t)}))})}},324:function(n,t,e){e.d(t,{$:function(){return i}});var r,a=e(168),i=e(6444).ZP.section(r||(r=(0,a.Z)(["\n  padding: 30px 0;\n"])))},6874:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(5671),a=e(3144),i=e(3742),o=function(){function n(){(0,r.Z)(this,n)}return(0,a.Z)(n,[{key:"onLoading",value:function(){return i.Loading.circle("Loading...",{backgroundColor:"rgba(0,0,0,0.5)",svgSize:"160px",svgColor:"#0f5271",messageFontSize:"20px"})}},{key:"onLoaded",value:function(){return i.Loading.remove()}}]),n}()},304:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a=e(5861),i=e(885),o=e(7757),c=e.n(o),s=e(2791),p=e(6560),u=e(3443),d=e(532),h=e(324),f=e(168),l=e(6444).ZP.h1(r||(r=(0,f.Z)(["\n  font-size: 30px;\n  font-weight: 500;\n  text-align: center;\n  text-transform: uppercase;\n  margin-top: 20px;\n  margin-bottom: 50px;\n  color: rgb(0, 0, 0);\n"]))),x=e(6874),g=e(184),m=new x.Z,w=function(){var n=(0,s.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1],o=(0,s.useState)(null),f=(0,i.Z)(o,2),x=f[0],w=f[1],b=(0,s.useState)(!1),v=(0,i.Z)(b,2),Z=v[0],k=v[1],y="trending/movie/day";return(0,s.useEffect)((function(){function n(){return(n=(0,a.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return k(!0),n.prev=1,n.next=4,(0,u.r)(y);case 4:t=n.sent,e=t.data,r(e.results),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),w(n.t0);case 12:return n.prev=12,k(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[1,9,12,15]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),e?(0,g.jsx)("main",{children:(0,g.jsxs)(d.W,{children:[Z?m.onLoading():m.onLoaded(),(0,g.jsxs)(h.$,{children:[x?(0,g.jsx)(l,{children:" Whoops, something went wrong"}):(0,g.jsx)(l,{children:" Trending today"}),!x&&e.length>0&&(0,g.jsx)(p.O,{movies:e})]})]})}):null}},3443:function(n,t,e){e.d(t,{a:function(){return f},r:function(){return d}});var r=e(5861),a=e(7757),i=e.n(a),o=e(2388),c=e(2007),s=e.n(c),p="https://api.themoviedb.org/3/",u="3cfb780db79e54922c50ea8f26b92bbe";function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.Z.create({baseURL:"".concat(p).concat(t),headers:{"Content-Type":"application/json"},params:{api_key:u}}),n.next=3,e.get();case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n,t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(t,e){var r,a,c;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e?"/".concat(e):"",a="movie/".concat(t).concat(r),c=o.Z.create({baseURL:"".concat(p).concat(a),headers:{"Content-Type":"application/json"},params:{api_key:u}}),n.next=5,c.get();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}d.propTypes={pathParams:s().string.isRequired,id:s().string.isRequired,path:s().string}}}]);
//# sourceMappingURL=304.c029c919.chunk.js.map