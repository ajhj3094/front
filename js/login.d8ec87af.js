(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{a55b:function(t,s,o){"use strict";o.r(s);var a=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("b-container",{attrs:{id:"register"}},[o("b-row",[o("b-col",{attrs:{cols:"12"}},[o("h1",{staticClass:"text-center"},[t._v("登入")])]),o("b-col",{attrs:{cols:"12"}},[o("b-form",{on:{submit:function(s){return s.preventDefault(),t.login.apply(null,arguments)}}},[o("b-form-group",{attrs:{label:"帳號","label-for":"input-account",description:"帳號長度為 4 到 20 個字",state:t.state.account,"invalid-feedback":"帳號格式不正確"}},[o("b-form-input",{attrs:{id:"input-account",required:"",placeholder:"請輸入帳號",type:"text",state:t.state.account},model:{value:t.form.account,callback:function(s){t.$set(t.form,"account",s)},expression:"form.account"}})],1),o("b-form-group",{attrs:{label:"密碼","label-for":"input-password",description:"密碼長度為 4 到 20 個字",state:t.state.password,"invalid-feedback":"密碼格式不正確"}},[o("b-form-input",{attrs:{id:"input-password",required:"",placeholder:"請輸入密碼",type:"password",state:t.state.password},model:{value:t.form.password,callback:function(s){t.$set(t.form,"password",s)},expression:"form.password"}})],1),o("div",{staticClass:"text-center"},[o("b-btn",{staticClass:"mx-1",attrs:{variant:"success",type:"submit"}},[t._v("登入")])],1)],1)],1)],1)],1)},e=[],r={data:function(){return{form:{account:"",password:""}}},computed:{state:function(){return{account:0===this.form.account.length?null:this.form.account.length>=4&&this.form.account.length<=20,password:0===this.form.password.length?null:this.form.password.length>=4&&this.form.password.length<=20}}},methods:{login:function(){this.$store.dispatch("user/login",this.form)}}},n=r,c=o("2877"),l=Object(c["a"])(n,a,e,!1,null,null,null);s["default"]=l.exports}}]);
//# sourceMappingURL=login.d8ec87af.js.map