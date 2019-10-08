(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(2),i=a.n(r),c=(a(14),a(3)),l=a(4),o=a(6),u=a(5),h=a(7),m=(a(15),function(e){var t,a=e.type,n=e.winner,r=e.handleMarkerOptionClick,i=e.handleRestartClick;switch(n){case"human":t="You won!";break;case"computer":t="Aww, you lost.";break;case"tie":t="It's a tie!"}return"chooseOption"===a?s.a.createElement("div",{className:"Modal"},s.a.createElement("p",null,"Choose your marker: "),s.a.createElement("button",{type:"button",className:"markerChoice",onClick:r},"X"),s.a.createElement("button",{type:"button",className:"markerChoice",onClick:r},"O")):"gameOver"===a?s.a.createElement("div",{className:"Modal"},s.a.createElement("p",null,"Game Over"),s.a.createElement("p",null,t),s.a.createElement("button",{type:"button",className:"restart",onClick:i},"Restart")):void 0}),p=(a(16),function(e){var t=e.position,a=e.marker,n=e.handleSquareClick;return s.a.createElement("div",{className:"Square","data-position":t,onClick:n},a)});a(17);var k=function(e){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement(p,{position:"0",marker:e.spaces[0],handleSquareClick:e.handleSquareClick}),s.a.createElement(p,{position:"1",marker:e.spaces[1],handleSquareClick:e.handleSquareClick}),s.a.createElement(p,{position:"2",marker:e.spaces[2],handleSquareClick:e.handleSquareClick})),s.a.createElement("div",{className:"row"},s.a.createElement(p,{position:"3",marker:e.spaces[3],handleSquareClick:e.handleSquareClick}),s.a.createElement(p,{position:"4",marker:e.spaces[4],handleSquareClick:e.handleSquareClick}),s.a.createElement(p,{position:"5",marker:e.spaces[5],handleSquareClick:e.handleSquareClick})),s.a.createElement("div",{className:"row"},s.a.createElement(p,{position:"6",marker:e.spaces[6],handleSquareClick:e.handleSquareClick}),s.a.createElement(p,{position:"7",marker:e.spaces[7],handleSquareClick:e.handleSquareClick}),s.a.createElement(p,{position:"8",marker:e.spaces[8],handleSquareClick:e.handleSquareClick})))},d=(a(18),function(e){var t=e.humanTurn;e.humanMarker,e.compMarker;return s.a.createElement("div",{className:"Turns"},t?"Your turn":"Computer's turn")}),S=(a(19),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleMarkerOptionClick=function(e){var t="X"===e.target.innerHTML?"O":"X";a.setState({atGameStart:!1,humanMarker:e.target.innerHTML,compMarker:t})},a.handleSquareClick=function(e){if(a.state.humanTurn&&null===a.state.winner){var t=e.target.dataset.position,n=a.state.spaces.slice();""===n[t]&&(n[t]=a.state.humanMarker,a.setState({spaces:n}),a.changeTurns())}},a.handleRestartClick=function(){setTimeout(function(){a.setState({atGameStart:!0,winner:null,spaces:Array(9).fill(""),humanTurn:!0,humanMarker:null,compMarker:null})},300)},a.getEndState=function(e){switch(e){case"human":setTimeout(function(){return a.setState({winner:"human"})},600);break;case"computer":setTimeout(function(){return a.setState({winner:"computer"})},600);break;case"tie":setTimeout(function(){return a.setState({winner:"tie"})},600)}},a.state={atGameStart:!0,winner:null,humanTurn:!0,humanMarker:null,compMarker:null,spaces:Array(9).fill("")},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"changeTurns",value:function(){this.setState({humanTurn:!this.state.humanTurn})}},{key:"getOpenSpaces",value:function(){for(var e=[],t=0;t<this.state.spaces.length;t++)""===this.state.spaces[t]&&e.push(t);return e}},{key:"isGameOverFor",value:function(e){var t=this.state.humanMarker===e?"human":"computer";return this.state.spaces[0]===e&&this.state.spaces[1]===e&&this.state.spaces[2]===e||this.state.spaces[3]===e&&this.state.spaces[4]===e&&this.state.spaces[5]===e||this.state.spaces[6]===e&&this.state.spaces[7]===e&&this.state.spaces[8]===e||this.state.spaces[0]===e&&this.state.spaces[3]===e&&this.state.spaces[6]===e||this.state.spaces[1]===e&&this.state.spaces[4]===e&&this.state.spaces[7]===e||this.state.spaces[2]===e&&this.state.spaces[5]===e&&this.state.spaces[8]===e||this.state.spaces[0]===e&&this.state.spaces[4]===e&&this.state.spaces[8]===e||this.state.spaces[2]===e&&this.state.spaces[4]===e&&this.state.spaces[6]===e?"human"===t?(this.getEndState("human"),!0):"computer"===t?(this.getEndState("computer"),!0):void 0:0===this.getOpenSpaces().length&&(this.getEndState("tie"),!0)}},{key:"componentDidUpdate",value:function(){var e=this,t=this.getOpenSpaces();if(null!==this.state.winner||!this.isGameOverFor(this.state.humanMarker)&&!this.isGameOverFor(this.state.compMarker)){if(!this.state.humanTurn&&0!==t.length&&null===this.state.winner){var a=t[Math.floor(Math.random()*Math.floor(t.length))],n=this.state.spaces.slice();n[a]=this.state.compMarker,setTimeout(function(){e.setState({spaces:n})},1200),this.changeTurns()}}else console.log("GAME OVER")}},{key:"render",value:function(){return s.a.createElement("div",{className:"Game"},s.a.createElement("h1",null,"Tic Tac Toe"),s.a.createElement("main",null,this.state.atGameStart&&s.a.createElement(m,{type:"chooseOption",handleMarkerOptionClick:this.handleMarkerOptionClick}),this.state.winner&&s.a.createElement(m,{type:"gameOver",winner:this.state.winner,handleRestartClick:this.handleRestartClick}),s.a.createElement(k,{spaces:this.state.spaces,handleSquareClick:this.handleSquareClick}),s.a.createElement(d,{humanTurn:this.state.humanTurn,humanMarker:this.state.humanMarker,compMarker:this.state.compMarker})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.0ba11234.chunk.js.map