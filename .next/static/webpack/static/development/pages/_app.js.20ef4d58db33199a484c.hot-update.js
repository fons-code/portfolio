webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./assets/styles/main.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./assets/styles/main.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./global.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./assets/styles/global.css\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\n// Module\nexports.push([module.i, \"header {\\n  width: 100%;\\n  height: 100vh;\\n  display: grid;\\n  grid-template-rows: 80px 1fr;\\n  background-image: url(\\\"/banner.jpg\\\");\\n  background-size: cover;\\n}\\n\\n.header__content {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  margin-left: 30px;\\n  color: #ebebeb;\\n}\\n\\n.header__content--text {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.header__content h1 {\\n  font-size: 7vw;\\n  min-width: 4em;\\n  font-weight: bold;\\n  letter-spacing: 2px;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.header__content p {\\n  font-size: 36px;\\n}\\n\\n.header__content button {\\n  max-width: 300px;\\n  margin: 15px;\\n  background-color: #2e47b2;\\n  border: 1px solid #ebebeb;\\n}\\n\\n@media screen and (max-width: 850px) {\\n  .header__content h1 {\\n    font-size: 64px;\\n    text-align: center;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n\\n  .header__content p {\\n    text-align: center;\\n  }\\n}\\n.content h1, .projects h1 {\\n  margin-top: 10px;\\n  font-size: 3.8em;\\n  color: #ebebeb;\\n  font-weight: 600;\\n}\\n\\n.project-card img {\\n  width: 540px;\\n  height: 400px;\\n  border: 10px solid #0C0E22;\\n  transition: 0.8s;\\n}\\n\\n.project-card img:hover {\\n  opacity: 0.4;\\n  cursor: pointer;\\n}\\n\\n.navbar-container {\\n  display: flex;\\n  width: 100%;\\n  justify-content: space-between;\\n  align-items: center;\\n  background: none;\\n}\\n\\n.navbar__logo {\\n  color: #ebebeb;\\n  font-size: 24px;\\n  font-weight: bold;\\n  margin-left: 30px;\\n}\\n\\n.navbar__menu ul {\\n  display: flex;\\n  justify-content: center;\\n  margin-right: 30px;\\n}\\n\\n.navbar__menu ul li {\\n  margin: 0 30px;\\n  list-style: none;\\n}\\n\\n.navbar__menu ul li a {\\n  color: #ebebeb;\\n  font-size: 24px;\\n  text-decoration: none;\\n}\\n\\n.skillcard {\\n  margin-top: 7%;\\n  min-width: 540px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: none;\\n}\\n\\n.skillcard-image {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.skillcard-image img {\\n  width: 150px;\\n  height: 150px;\\n}\\n\\n.skillcard-content {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  margin-left: 30px;\\n  height: 100%;\\n}\\n\\n.skillcard-content h3 {\\n  font-size: 36px;\\n  margin: 0;\\n  color: #ebebeb;\\n}\\n\\n.skillcard-badge-container {\\n  width: 100%;\\n  display: flex;\\n}\\n\\n.skillcard-badge {\\n  border-radius: 40px;\\n  margin-top: 20px;\\n  margin-right: 15px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: #333872;\\n}\\n\\n.skillcard-badge span {\\n  margin: 10px 20px;\\n  font-size: 24px;\\n  color: #ebebeb;\\n}\\n\\nfooter {\\n  margin-top: 60px;\\n  height: 80px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  background-color: #0C0E22;\\n}\\n\\nfooter p {\\n  font-size: 24px;\\n  color: #6B6D8C;\\n}\", \"\",{\"version\":3,\"sources\":[\"/home/fonscode/dev/portfolio/assets/styles/containers/Header.scss\",\"/home/fonscode/dev/portfolio/assets/styles/main.scss\",\"/home/fonscode/dev/portfolio/assets/styles/variables.scss\",\"/home/fonscode/dev/portfolio/assets/styles/containers/Skills.scss\",\"/home/fonscode/dev/portfolio/assets/styles/containers/Projects.scss\",\"/home/fonscode/dev/portfolio/assets/styles/components/Navbar.scss\",\"/home/fonscode/dev/portfolio/assets/styles/components/Card.scss\",\"/home/fonscode/dev/portfolio/assets/styles/components/Footer.scss\"],\"names\":[],\"mappings\":\"AACA;EACI,WAAA;EACA,aAAA;EACA,aAAA;EACA,4BAAA;EACA,oCAAA;EACA,sBAAA;ACCJ;;ADEA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,iBAAA;EACA,cEXU;ADYd;;ADCA;EACI,aAAA;EACA,sBAAA;ACEJ;;ADAA;EACI,cAAA;EACA,cAAA;EACA,iBAAA;EACA,mBAAA;EACA,SAAA;EACA,UAAA;ACGJ;;ADDA;EACI,eAAA;ACIJ;;ADFA;EACI,gBAAA;EACA,YAAA;EACA,yBElCU;EFmCV,yBAAA;ACKJ;;ADFA;EACI;IACE,eAAA;IACA,kBAAA;IACA,iBAAA;IACA,kBAAA;ECKJ;;EDHE;IACE,kBAAA;ECMJ;AACF;AEtDA;EACI,gBAAA;EACA,gBDOY;ECNZ,cDCU;ECAV,gBAAA;AFwDJ;;AG5DA;EACI,YAAA;EACA,aAAA;EACA,0BAAA;EACA,gBAAA;AH+DJ;;AG7DA;EACI,YAAA;EACA,eAAA;AHgEJ;;AIxEA;EACI,aAAA;EACA,WAAA;EACA,8BAAA;EACA,mBAAA;EACA,gBAAA;AJ2EJ;;AIxEA;EACI,cHLU;EGMV,eAAA;EACA,iBAAA;EACA,iBAAA;AJ2EJ;;AIzEA;EACI,aAAA;EACA,uBAAA;EACA,kBAAA;AJ4EJ;;AIzEA;EACI,cAAA;EACA,gBAAA;AJ4EJ;;AI1EA;EACI,cHrBU;EGsBV,eAAA;EACA,qBAAA;AJ6EJ;;AKxGA;EACI,cAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AL2GJ;;AKzGA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;AL4GJ;;AK1GA;EACI,YAAA;EACA,aAAA;AL6GJ;;AK1GA;EACI,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,iBAAA;EACA,YAAA;AL6GJ;;AK3GA;EACI,eAAA;EACA,SAAA;EACA,cAAA;AL8GJ;;AK5GA;EACI,WAAA;EACA,aAAA;AL+GJ;;AK3GA;EACI,mBAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBJzCS;ADuJb;;AK3GA;EACI,iBAAA;EACA,eAAA;EACA,cJ7CU;AD2Jd;;AM/JA;EACI,gBAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,yBLFU;ADoKd;;AMhKA;EACI,eAAA;EACA,cLLS;ADwKb\",\"file\":\"main.scss\",\"sourcesContent\":[\"\\nheader{\\n    width: 100%;\\n    height: 100vh;\\n    display: grid;\\n    grid-template-rows: 80px 1fr;\\n    background-image: url('/banner.jpg');\\n    background-size: cover;\\n}\\n\\n.header__content{\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    margin-left: 30px;\\n    color: $color-white;\\n}\\n.header__content--text{\\n    display: flex;\\n    flex-direction: column;\\n}\\n.header__content h1{\\n    font-size: 7vw;\\n    min-width: 4em;\\n    font-weight: bold;\\n    letter-spacing: 2px;\\n    margin: 0;\\n    padding: 0;\\n}\\n.header__content p{\\n    font-size: 36px;\\n}\\n.header__content button{\\n    max-width: 300px;\\n    margin: 15px;\\n    background-color: $color-brand;\\n    border: 1px solid $color-white;\\n}\\n\\n@media screen and (max-width: 850px) {\\n    .header__content h1 {\\n      font-size: 64px;\\n      text-align: center;\\n      margin-left: auto;\\n      margin-right: auto;\\n    }\\n    .header__content p{\\n      text-align: center;\\n    }\\n  }\",\"@import './variables.scss';\\n@import './global.css';\\n//containers\\n@import './containers/Header.scss';\\n@import './containers/Skills.scss';\\n@import './containers/Projects.scss';\\n//components\\n@import './components/Navbar.scss';\\n@import './components/Card.scss';\\n@import './components/Footer.scss'\",\"//colors\\n$color-brand: #2e47b2;\\n$color-item: #333872;\\n$color-dark: #1e2253;\\n$color-white: #ebebeb;\\n$color-black: #0C0E22;\\n$color-gray: #6B6D8C;\\n//titles\\n$title-hero:5em;\\n$title-section: 3.8em;\",\".content h1, .projects h1{ \\n    margin-top: 10px;\\n    font-size: $title-section;\\n    color: $color-white;\\n    font-weight: 600;\\n}\\n\",\".project-card img{\\n    width: 540px;\\n    height: 400px;\\n    border: 10px solid $color-black;\\n    transition: 0.8s;\\n}\\n.project-card img:hover{\\n    opacity: 0.40;\\n    cursor: pointer;\\n}\\n\",\".navbar-container{\\n    display: flex;\\n    width: 100%;\\n    justify-content: space-between;\\n    align-items: center;\\n    background: none;\\n}\\n\\n.navbar__logo{\\n    color: $color-white;\\n    font-size: 24px;\\n    font-weight: bold;\\n    margin-left: 30px;\\n}\\n.navbar__menu ul{\\n    display: flex;\\n    justify-content: center;\\n    margin-right: 30px;\\n}\\n\\n.navbar__menu ul li{\\n    margin: 0 30px;\\n    list-style: none;\\n}\\n.navbar__menu ul li a{\\n    color: $color-white;\\n    font-size: 24px;\\n    text-decoration: none;\\n}\",\".skillcard{\\n    margin-top: 7%;\\n    min-width: 540px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    background-color: none;\\n}\\n.skillcard-image{\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n.skillcard-image img{\\n    width: 150px;\\n    height: 150px;\\n}\\n\\n.skillcard-content{\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    margin-left: 30px;\\n    height: 100%;\\n}\\n.skillcard-content h3{\\n    font-size: 36px;\\n    margin: 0;\\n    color: #ebebeb;\\n}\\n.skillcard-badge-container{\\n    width: 100%;\\n    display: flex;\\n\\n}\\n\\n.skillcard-badge{\\n    border-radius: 40px;\\n    margin-top: 20px;\\n    margin-right: 15px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    background-color: $color-item;\\n}\\n\\n.skillcard-badge span{\\n    margin: 10px 20px;\\n    font-size: 24px;\\n    color: $color-white;\\n}\",\"footer {\\n    margin-top: 60px;\\n    height: 80px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    width: 100%;\\n    background-color: $color-black;\\n}\\nfooter p{\\n    font-size: 24px;\\n    color: $color-gray;\\n}\"]}]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL21haW4uc2Nzcz81Yjk4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGLHdDQUF3QyxtQkFBTyxDQUFDLGdlQUEwUjtBQUMxVTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVMsV0FBVyxnQkFBZ0Isa0JBQWtCLGtCQUFrQixpQ0FBaUMsMkNBQTJDLDJCQUEyQixHQUFHLHNCQUFzQixrQkFBa0IsMkJBQTJCLDRCQUE0QixzQkFBc0IsbUJBQW1CLEdBQUcsNEJBQTRCLGtCQUFrQiwyQkFBMkIsR0FBRyx5QkFBeUIsbUJBQW1CLG1CQUFtQixzQkFBc0Isd0JBQXdCLGNBQWMsZUFBZSxHQUFHLHdCQUF3QixvQkFBb0IsR0FBRyw2QkFBNkIscUJBQXFCLGlCQUFpQiw4QkFBOEIsOEJBQThCLEdBQUcsMENBQTBDLHlCQUF5QixzQkFBc0IseUJBQXlCLHdCQUF3Qix5QkFBeUIsS0FBSywwQkFBMEIseUJBQXlCLEtBQUssR0FBRyw2QkFBNkIscUJBQXFCLHFCQUFxQixtQkFBbUIscUJBQXFCLEdBQUcsdUJBQXVCLGlCQUFpQixrQkFBa0IsK0JBQStCLHFCQUFxQixHQUFHLDZCQUE2QixpQkFBaUIsb0JBQW9CLEdBQUcsdUJBQXVCLGtCQUFrQixnQkFBZ0IsbUNBQW1DLHdCQUF3QixxQkFBcUIsR0FBRyxtQkFBbUIsbUJBQW1CLG9CQUFvQixzQkFBc0Isc0JBQXNCLEdBQUcsc0JBQXNCLGtCQUFrQiw0QkFBNEIsdUJBQXVCLEdBQUcseUJBQXlCLG1CQUFtQixxQkFBcUIsR0FBRywyQkFBMkIsbUJBQW1CLG9CQUFvQiwwQkFBMEIsR0FBRyxnQkFBZ0IsbUJBQW1CLHFCQUFxQixrQkFBa0IsNEJBQTRCLHdCQUF3QiwyQkFBMkIsR0FBRyxzQkFBc0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRywwQkFBMEIsaUJBQWlCLGtCQUFrQixHQUFHLHdCQUF3Qixr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LDBCQUEwQixHQUFHLHVCQUF1QixtQkFBbUIsb0JBQW9CLEdBQUcsdUJBQXVCLG9CQUFvQiw2QkFBNkIscUNBQXFDLHdCQUF3QixtQkFBbUIsR0FBRyx3QkFBd0Isc0JBQXNCLGdCQUFnQixxQkFBcUIsR0FBRyw2QkFBNkIsa0JBQWtCLG9CQUFvQixLQUFLLHFCQUFxQiwwQkFBMEIsdUJBQXVCLHlCQUF5QixvQkFBb0IsOEJBQThCLDBCQUEwQixvQ0FBb0MsR0FBRywwQkFBMEIsd0JBQXdCLHNCQUFzQiwwQkFBMEIsR0FBRyxXQUFXLHVCQUF1QixtQkFBbUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsa0JBQWtCLHFDQUFxQyxHQUFHLFdBQVcsc0JBQXNCLHlCQUF5QixHQUFHLEdBQUc7QUFDMXRRO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL2Fzc2V0cy9zdHlsZXMvbWFpbi5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTYtMyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi02LTQhLi9nbG9iYWwuY3NzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJoZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxZnI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9iYW5uZXIuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uaGVhZGVyX19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG4gIGNvbG9yOiAjZWJlYmViO1xcbn1cXG5cXG4uaGVhZGVyX19jb250ZW50LS10ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyX19jb250ZW50IGgxIHtcXG4gIGZvbnQtc2l6ZTogN3Z3O1xcbiAgbWluLXdpZHRoOiA0ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uaGVhZGVyX19jb250ZW50IHAge1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG5cXG4uaGVhZGVyX19jb250ZW50IGJ1dHRvbiB7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgbWFyZ2luOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlNDdiMjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XFxuICAuaGVhZGVyX19jb250ZW50IGgxIHtcXG4gICAgZm9udC1zaXplOiA2NHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICB9XFxuXFxuICAuaGVhZGVyX19jb250ZW50IHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcbi5jb250ZW50IGgxLCAucHJvamVjdHMgaDEge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMy44ZW07XFxuICBjb2xvcjogI2ViZWJlYjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQgaW1nIHtcXG4gIHdpZHRoOiA1NDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBib3JkZXI6IDEwcHggc29saWQgIzBDMEUyMjtcXG4gIHRyYW5zaXRpb246IDAuOHM7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQgaW1nOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdmJhci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5uYXZiYXJfX2xvZ28ge1xcbiAgY29sb3I6ICNlYmViZWI7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG5cXG4ubmF2YmFyX19tZW51IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXG59XFxuXFxuLm5hdmJhcl9fbWVudSB1bCBsaSB7XFxuICBtYXJnaW46IDAgMzBweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5uYXZiYXJfX21lbnUgdWwgbGkgYSB7XFxuICBjb2xvcjogI2ViZWJlYjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnNraWxsY2FyZCB7XFxuICBtYXJnaW4tdG9wOiA3JTtcXG4gIG1pbi13aWR0aDogNTQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG59XFxuXFxuLnNraWxsY2FyZC1pbWFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2tpbGxjYXJkLWltYWdlIGltZyB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4uc2tpbGxjYXJkLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNraWxsY2FyZC1jb250ZW50IGgzIHtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiAjZWJlYmViO1xcbn1cXG5cXG4uc2tpbGxjYXJkLWJhZGdlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5za2lsbGNhcmQtYmFkZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzg3MjtcXG59XFxuXFxuLnNraWxsY2FyZC1iYWRnZSBzcGFuIHtcXG4gIG1hcmdpbjogMTBweCAyMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6ICNlYmViZWI7XFxufVxcblxcbmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBDMEUyMjtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6ICM2QjZEOEM7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL2ZvbnNjb2RlL2Rldi9wb3J0Zm9saW8vYXNzZXRzL3N0eWxlcy9jb250YWluZXJzL0hlYWRlci5zY3NzXCIsXCIvaG9tZS9mb25zY29kZS9kZXYvcG9ydGZvbGlvL2Fzc2V0cy9zdHlsZXMvbWFpbi5zY3NzXCIsXCIvaG9tZS9mb25zY29kZS9kZXYvcG9ydGZvbGlvL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIixcIi9ob21lL2ZvbnNjb2RlL2Rldi9wb3J0Zm9saW8vYXNzZXRzL3N0eWxlcy9jb250YWluZXJzL1NraWxscy5zY3NzXCIsXCIvaG9tZS9mb25zY29kZS9kZXYvcG9ydGZvbGlvL2Fzc2V0cy9zdHlsZXMvY29udGFpbmVycy9Qcm9qZWN0cy5zY3NzXCIsXCIvaG9tZS9mb25zY29kZS9kZXYvcG9ydGZvbGlvL2Fzc2V0cy9zdHlsZXMvY29tcG9uZW50cy9OYXZiYXIuc2Nzc1wiLFwiL2hvbWUvZm9uc2NvZGUvZGV2L3BvcnRmb2xpby9hc3NldHMvc3R5bGVzL2NvbXBvbmVudHMvQ2FyZC5zY3NzXCIsXCIvaG9tZS9mb25zY29kZS9kZXYvcG9ydGZvbGlvL2Fzc2V0cy9zdHlsZXMvY29tcG9uZW50cy9Gb290ZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNFWFU7QURZZDs7QURDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QURGQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRWxDVTtFRm1DVix5QkFBQTtBQ0tKOztBREZBO0VBQ0k7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDS0o7O0VESEU7SUFDRSxrQkFBQTtFQ01KO0FBQ0Y7QUV0REE7RUFDSSxnQkFBQTtFQUNBLGdCRE9ZO0VDTlosY0RDVTtFQ0FWLGdCQUFBO0FGd0RKOztBRzVEQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBSCtESjs7QUc3REE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBSGdFSjs7QUl4RUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBSjJFSjs7QUl4RUE7RUFDSSxjSExVO0VHTVYsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUoyRUo7O0FJekVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUo0RUo7O0FJekVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FKNEVKOztBSTFFQTtFQUNJLGNIckJVO0VHc0JWLGVBQUE7RUFDQSxxQkFBQTtBSjZFSjs7QUt4R0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FMMkdKOztBS3pHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FMNEdKOztBSzFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FMNkdKOztBSzFHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FMNkdKOztBSzNHQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBTDhHSjs7QUs1R0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBTCtHSjs7QUszR0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCSnpDUztBRHVKYjs7QUszR0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjSjdDVTtBRDJKZDs7QU0vSkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkxGVTtBRG9LZDs7QU1oS0E7RUFDSSxlQUFBO0VBQ0EsY0xMUztBRHdLYlwiLFwiZmlsZVwiOlwibWFpbi5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbmhlYWRlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxZnI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Jhbm5lci5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmhlYWRlcl9fY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xcbn1cXG4uaGVhZGVyX19jb250ZW50LS10ZXh0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uaGVhZGVyX19jb250ZW50IGgxe1xcbiAgICBmb250LXNpemU6IDd2dztcXG4gICAgbWluLXdpZHRoOiA0ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbi5oZWFkZXJfX2NvbnRlbnQgcHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG4uaGVhZGVyX19jb250ZW50IGJ1dHRvbntcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYnJhbmQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci13aGl0ZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcXG4gICAgLmhlYWRlcl9fY29udGVudCBoMSB7XFxuICAgICAgZm9udC1zaXplOiA2NHB4O1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIH1cXG4gICAgLmhlYWRlcl9fY29udGVudCBwe1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgfVwiLFwiQGltcG9ydCAnLi92YXJpYWJsZXMuc2Nzcyc7XFxuQGltcG9ydCAnLi9nbG9iYWwuY3NzJztcXG4vL2NvbnRhaW5lcnNcXG5AaW1wb3J0ICcuL2NvbnRhaW5lcnMvSGVhZGVyLnNjc3MnO1xcbkBpbXBvcnQgJy4vY29udGFpbmVycy9Ta2lsbHMuc2Nzcyc7XFxuQGltcG9ydCAnLi9jb250YWluZXJzL1Byb2plY3RzLnNjc3MnO1xcbi8vY29tcG9uZW50c1xcbkBpbXBvcnQgJy4vY29tcG9uZW50cy9OYXZiYXIuc2Nzcyc7XFxuQGltcG9ydCAnLi9jb21wb25lbnRzL0NhcmQuc2Nzcyc7XFxuQGltcG9ydCAnLi9jb21wb25lbnRzL0Zvb3Rlci5zY3NzJ1wiLFwiLy9jb2xvcnNcXG4kY29sb3ItYnJhbmQ6ICMyZTQ3YjI7XFxuJGNvbG9yLWl0ZW06ICMzMzM4NzI7XFxuJGNvbG9yLWRhcms6ICMxZTIyNTM7XFxuJGNvbG9yLXdoaXRlOiAjZWJlYmViO1xcbiRjb2xvci1ibGFjazogIzBDMEUyMjtcXG4kY29sb3ItZ3JheTogIzZCNkQ4QztcXG4vL3RpdGxlc1xcbiR0aXRsZS1oZXJvOjVlbTtcXG4kdGl0bGUtc2VjdGlvbjogMy44ZW07XCIsXCIuY29udGVudCBoMSwgLnByb2plY3RzIGgxeyBcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAkdGl0bGUtc2VjdGlvbjtcXG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXCIsXCIucHJvamVjdC1jYXJkIGltZ3tcXG4gICAgd2lkdGg6IDU0MHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBib3JkZXI6IDEwcHggc29saWQgJGNvbG9yLWJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiAwLjhzO1xcbn1cXG4ucHJvamVjdC1jYXJkIGltZzpob3ZlcntcXG4gICAgb3BhY2l0eTogMC40MDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIixcIi5uYXZiYXItY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4ubmF2YmFyX19sb2dve1xcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuLm5hdmJhcl9fbWVudSB1bHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG59XFxuXFxuLm5hdmJhcl9fbWVudSB1bCBsaXtcXG4gICAgbWFyZ2luOiAwIDMwcHg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5uYXZiYXJfX21lbnUgdWwgbGkgYXtcXG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVwiLFwiLnNraWxsY2FyZHtcXG4gICAgbWFyZ2luLXRvcDogNyU7XFxuICAgIG1pbi13aWR0aDogNTQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbn1cXG4uc2tpbGxjYXJkLWltYWdle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNraWxsY2FyZC1pbWFnZSBpbWd7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLnNraWxsY2FyZC1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5za2lsbGNhcmQtY29udGVudCBoM3tcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOiAjZWJlYmViO1xcbn1cXG4uc2tpbGxjYXJkLWJhZGdlLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxufVxcblxcbi5za2lsbGNhcmQtYmFkZ2V7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1pdGVtO1xcbn1cXG5cXG4uc2tpbGxjYXJkLWJhZGdlIHNwYW57XFxuICAgIG1hcmdpbjogMTBweCAyMHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XFxufVwiLFwiZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogNjBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjaztcXG59XFxuZm9vdGVyIHB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgY29sb3I6ICRjb2xvci1ncmF5O1xcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./assets/styles/main.scss\n");

/***/ })

})