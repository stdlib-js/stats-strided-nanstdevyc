"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=i(function(R,s){
var y=require('@stdlib/stats-strided-nanvarianceyc/dist').ndarray,d=require('@stdlib/math-base-special-sqrt/dist');function o(e,r,a,n,q){return d(y(e,r,a,n,q))}s.exports=o
});var v=i(function(b,u){
var f=require('@stdlib/strided-base-stride2offset/dist'),p=t();function x(e,r,a,n){return p(e,r,a,n,f(e,n))}u.exports=x
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=v(),m=t();l(c,"ndarray",m);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
