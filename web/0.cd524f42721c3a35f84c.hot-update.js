webpackHotUpdate(0,{119:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(1),u=(n=a)&&n.__esModule?n:{default:n};var l=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={redirectToReferrer:!1},e.handleLogin=e.handleLogin.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"handleLogin",value:function(e){e.preventDefault();var t=new FormData(e.target);$.ajax({type:"POST",url:setData,data:{_username:t.get("username"),_password:t.get("password")},success:function(e){void 0==e.errors?console.log("logged in"):console.log(e.errors)},error:function(){alert("failure")}})}},{key:"render",value:function(){var e=(this.props.location.state||{from:{pathname:"/"}}).from;return this.state.redirectToReferrer?u.default.createElement(Redirect,{to:e}):u.default.createElement("div",null,u.default.createElement("p",null,"You must log in to view the page at ",e.pathname),u.default.createElement("form",{onSubmit:this.handleLogin},u.default.createElement("label",{htmlFor:"username"},"Enter username"),u.default.createElement("input",{id:"username",name:"username",type:"text"}),u.default.createElement("label",{htmlFor:"password"},"Enter your password"),u.default.createElement("input",{id:"password",name:"password",type:"password"}),u.default.createElement("button",{type:"submit"},"Log in")))}}]),t}();t.default=l}});