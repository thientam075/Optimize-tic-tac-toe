(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,n,r){"use strict";r.r(n);var t=r(1),a=r(4),c=r.n(a),i=(r(9),r(2)),s=r(0);var l=function(e){var n=e.onClick,r=e.winningSquare,t=e.value;return Object(s.jsx)("button",{className:"square",onClick:n,style:r?{backgroundColor:"cyan"}:null,children:t})};function o(e,n,r,t){var a=!(!n||!n.includes(e));return Object(s.jsx)(l,{value:r[e],onClick:function(){return t(e)},winningSquare:a},e)}function u(e,n,r,t,a){for(var c=[],i=0;i<n;i++)c=c.concat([o(e*n+i,r,t,a)]);return Object(s.jsx)("div",{className:"board-row",children:c},e)}var j=function(e){for(var n=e.n,r=e.winner,t=e.squares,a=e.onClick,c=[],i=0;i<n;i++)c=c.concat([u(i,n,r,t,a)]);return Object(s.jsx)("div",{children:c})};function d(e,n){if(e)for(var r=0;r<n;r++)for(var t=0;t<=n-5;t++)if(e[t+r*n]&&e[t+r*n]===e[t+r*n+1]&&e[t+r*n+1]===e[t+r*n+2]&&e[t+r*n+2]===e[t+r*n+3]&&e[t+r*n+3]===e[t+r*n+4]){var a=[t+r*n,t+r*n+1,t+r*n+2,t+r*n+3,t+r*n+4];return{namewinner:e[t+r*n],winnerSquares:a}}for(var c=0;c<n;c++)for(var i=0;i<=n-5;i++)if(e[c+i*n]&&e[c+i*n]===e[c+(i+1)*n]&&e[c+(i+1)*n]===e[c+(i+2)*n]&&e[c+(i+2)*n]===e[c+(i+3)*n]&&e[c+(i+3)*n]===e[c+(i+4)*n]){var s=[c+i*n,c+(i+1)*n,c+(i+2)*n,c+(i+3)*n,c+(i+4)*n];return{namewinner:e[c+i*n],winnerSquares:s}}for(var l=0;l<n;l++)for(var o=0;o<=n;o++)if(e[l+o*n]&&l+4+(o+4)*n<n*n&&e[l+o*n]===e[l+1+(o+1)*n]&&e[l+1+(o+1)*n]===e[l+2+(o+2)*n]&&e[l+2+(o+2)*n]===e[l+3+(o+3)*n]&&e[l+3+(o+3)*n]===e[l+4+(o+4)*n]){var u=[l+o*n,l+1+(o+1)*n,l+2+(o+2)*n,l+3+(o+3)*n,l+4+(o+4)*n];return{namewinner:e[l+o*n],winnerSquares:u}}for(var j=0;j<n;j++)for(var d=0;d<=n;d++)if(e[j+(n-d-1)*n]&&j+4+(n-(d+4)-1)*n<n*n&&e[j+(n-d-1)*n]===e[j+1+(n-(d+1)-1)*n]&&e[j+1+(n-(d+1)-1)*n]===e[j+2+(n-(d+2)-1)*n]&&e[j+2+(n-(d+2)-1)*n]===e[j+3+(n-(d+3)-1)*n]&&e[j+3+(n-(d+3)-1)*n]===e[j+4+(n-(d+4)-1)*n]){var b=[j+(n-d-1)*n,j+1+(n-(d+1)-1)*n,j+2+(n-(d+2)-1)*n,j+3+(n-(d+3)-1)*n,j+4+(n-(d+4)-1)*n];return{namewinner:e[j+(n-d-1)*n],winnerSquares:b}}return null}var b=function(){var e=Object(t.useState)(5),n=Object(i.a)(e,2),r=n[0],a=n[1],c=Object(t.useState)([{squares:Array(r*r).fill(null),allLocations:null}]),l=Object(i.a)(c,2),o=l[0],u=l[1],b=Object(t.useState)(0),v=Object(i.a)(b,2),f=v[0],O=v[1],m=Object(t.useState)(!0),h=Object(i.a)(m,2),x=h[0],g=h[1],w=Object(t.useState)(!0),q=Object(i.a)(w,2),p=q[0],N=q[1],S=o,y=S[f],C=d(y.squares,r);console.log(C?C.winnerSquares:"");var k,L=S.map((function(e,n){var r=n?"Go to move #"+n:"Go to game start";return Object(s.jsx)("li",{children:Object(s.jsx)("button",{onClick:function(){return function(e){O(e),g(e%2===0)}(n)},style:f===n?{fontWeight:"bold"}:{fontWeight:"normal"},children:r})},n)})),W=S.map((function(e,n){var t;return n?(t=function(e,n){return"(Row: ".concat(parseInt(e/n)," - Col: ").concat(parseInt(e%n),")")}(e.allLocations,r),Object(s.jsx)("li",{children:Object(s.jsx)("div",{style:f===n?{fontWeight:"bold"}:{fontWeight:"normal"},children:t})},n)):Object(s.jsx)("div",{},"NULL")}));function A(e){var n=e.target.value;a(n=(n=n<5?5:n)>20?20:n),u([{squares:Array(r*r).fill(null),allLocations:null}]),O(0),g(!0),N(!0)}C?k="Winner: "+C.namewinner:y.squares.includes(null)?k="Next player: "+(x?"X":"O"):alert("The match is draw !!!");var I=p?"Ascending Order":"Descending Order";return Object(s.jsxs)("div",{className:"game",children:[Object(s.jsxs)("div",{className:"game-info",children:[Object(s.jsxs)("div",{className:"title",children:[Object(s.jsx)("div",{className:"title-item",children:"Location: "}),Object(s.jsx)("button",{className:"title-item",onClick:function(){return u(o.reverse()),void N(!p)},children:I})]},"title"),Object(s.jsx)("ol",{children:W})]}),Object(s.jsxs)("div",{className:"game-board",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Enter size of board:"}),Object(s.jsx)("input",{type:"number",value:r,className:"status",onChange:function(e){return A(e)}}),Object(s.jsx)("p",{children:"Change size to restart game"})]}),Object(s.jsx)(j,{n:r,squares:y.squares,onClick:function(e){return function(e){var n=o.slice(0,f+1),t=n[n.length-1].squares.slice();t[e]||d(t,r)||(t[e]=x?"X":"O",u(n.concat([{squares:t,allLocations:e}])),O(n.length),g(!x))}(e)},winner:C&&C.winnerSquares})]}),Object(s.jsxs)("div",{className:"game-info",children:[Object(s.jsx)("div",{children:k}),Object(s.jsx)("ol",{children:L})]})]})};var v=function(){return Object(s.jsx)("div",{className:"bg-game",children:Object(s.jsx)(b,{})})};c.a.render(Object(s.jsx)(v,{}),document.getElementById("root"))},9:function(e,n,r){}},[[11,1,2]]]);
//# sourceMappingURL=main.44c0d862.chunk.js.map