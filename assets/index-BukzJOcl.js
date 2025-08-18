(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ml="179",Td=0,zl=1,wd=2,Lu=1,Ad=2,li=3,Zt=0,xn=1,Sn=2,Si=0,Nn=1,lo=2,Hl=3,Vl=4,Rd=5,ki=100,Cd=101,Ld=102,Id=103,Pd=104,Nd=200,Dd=201,Ud=202,Fd=203,va=204,Ma=205,Od=206,Bd=207,kd=208,zd=209,Hd=210,Vd=211,Gd=212,Wd=213,Xd=214,Sa=0,ba=1,Ea=2,Ss=3,Ta=4,wa=5,Aa=6,Ra=7,go=0,Yd=1,qd=2,bi=0,jd=1,$d=2,Kd=3,Zd=4,Jd=5,Qd=6,eh=7,Gl="attached",th="detached",Iu=300,bs=301,Es=302,Ca=303,La=304,_o=306,Yn=1e3,Ln=1001,co=1002,pn=1003,Pu=1004,Ks=1005,an=1006,Jr=1007,Bn=1008,$n=1009,Nu=1010,Du=1011,er=1012,gl=1013,Hi=1014,kn=1015,ur=1016,_l=1017,yl=1018,tr=1020,Uu=35902,Fu=1021,Ou=1022,In=1023,nr=1026,ir=1027,xl=1028,vl=1029,Bu=1030,Ml=1031,Sl=1033,Qr=33776,eo=33777,to=33778,no=33779,Ia=35840,Pa=35841,Na=35842,Da=35843,Ua=36196,Fa=37492,Oa=37496,Ba=37808,ka=37809,za=37810,Ha=37811,Va=37812,Ga=37813,Wa=37814,Xa=37815,Ya=37816,qa=37817,ja=37818,$a=37819,Ka=37820,Za=37821,io=36492,Ja=36494,Qa=36495,ku=36283,el=36284,tl=36285,nl=36286,sr=2300,rr=2301,No=2302,Wl=2400,Xl=2401,Yl=2402,nh=2500,ih=0,zu=1,il=2,sh=3200,rh=3201,yo=0,oh=1,Mi="",Nt="srgb",gn="srgb-linear",uo="linear",Pt="srgb",Xi=7680,ql=519,ah=512,lh=513,ch=514,Hu=515,uh=516,dh=517,hh=518,fh=519,sl=35044,jl="300 es",qn=2e3,ho=2001;class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $l=1234567;const Js=Math.PI/180,Ts=180/Math.PI;function zn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function bl(i,e){return(i%e+e)%e}function ph(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function mh(i,e,t){return i!==e?(t-i)/(e-i):0}function Qs(i,e,t){return(1-t)*i+t*e}function gh(i,e,t,n){return Qs(i,e,1-Math.exp(-t*n))}function _h(i,e=1){return e-Math.abs(bl(i,e*2)-e)}function yh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function xh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function vh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Mh(i,e){return i+Math.random()*(e-i)}function Sh(i){return i*(.5-Math.random())}function bh(i){i!==void 0&&($l=i);let e=$l+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Eh(i){return i*Js}function Th(i){return i*Ts}function wh(i){return(i&i-1)===0&&i!==0}function Ah(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Rh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ch(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),d=o((e+n)/2),u=r((e-n)/2),h=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*d,l*u,l*h,a*c);break;case"YZY":i.set(l*h,a*d,l*u,a*c);break;case"ZXZ":i.set(l*u,l*h,a*d,a*c);break;case"XZX":i.set(a*d,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*d,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function On(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ps={DEG2RAD:Js,RAD2DEG:Ts,generateUUID:zn,clamp:ht,euclideanModulo:bl,mapLinear:ph,inverseLerp:mh,lerp:Qs,damp:gh,pingpong:_h,smoothstep:yh,smootherstep:xh,randInt:vh,randFloat:Mh,randFloatSpread:Sh,seededRandom:bh,degToRad:Eh,radToDeg:Th,isPowerOfTwo:wh,ceilPowerOfTwo:Ah,floorPowerOfTwo:Rh,setQuaternionFromProperEuler:Ch,normalize:At,denormalize:On};class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3];const h=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==h||c!==p||d!==g){let m=1-a;const f=l*h+c*p+d*g+u*_,L=f>=0?1:-1,C=1-f*f;if(C>Number.EPSILON){const N=Math.sqrt(C),I=Math.atan2(N,f*L);m=Math.sin(m*I)/N,a=Math.sin(a*I)/N}const M=a*L;if(l=l*m+h*M,c=c*m+p*M,d=d*m+g*M,u=u*m+_*M,m===1-a){const N=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=N,c*=N,d*=N,u*=N}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+d*u+l*p-c*h,e[t+1]=l*g+d*h+c*u-a*p,e[t+2]=c*g+d*p+a*h-l*u,e[t+3]=d*g-a*u-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(s/2),u=a(r/2),h=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*d*u+c*p*g,this._y=c*p*u-h*d*g,this._z=c*d*g+h*p*u,this._w=c*d*u-h*p*g;break;case"YXZ":this._x=h*d*u+c*p*g,this._y=c*p*u-h*d*g,this._z=c*d*g-h*p*u,this._w=c*d*u+h*p*g;break;case"ZXY":this._x=h*d*u-c*p*g,this._y=c*p*u+h*d*g,this._z=c*d*g+h*p*u,this._w=c*d*u-h*p*g;break;case"ZYX":this._x=h*d*u-c*p*g,this._y=c*p*u+h*d*g,this._z=c*d*g-h*p*u,this._w=c*d*u+h*p*g;break;case"YZX":this._x=h*d*u+c*p*g,this._y=c*p*u+h*d*g,this._z=c*d*g-h*p*u,this._w=c*d*u-h*p*g;break;case"XZY":this._x=h*d*u-c*p*g,this._y=c*p*u-h*d*g,this._z=c*d*g+h*p*u,this._w=c*d*u+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+a+u;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(d-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-s*a,this._w=o*d-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=o*u+this._w*h,this._x=n*u+this._x*h,this._y=s*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),d=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*d,this.y=n+l*d+a*c-r*u,this.z=s+l*u+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Do.copy(this).projectOnVector(e),this.sub(Do)}reflect(e){return this.sub(Do.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new O,Kl=new Hn;class at{constructor(e,t,n,s,r,o,a,l,c){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],L=s[1],C=s[4],M=s[7],N=s[2],I=s[5],D=s[8];return r[0]=o*_+a*L+l*N,r[3]=o*m+a*C+l*I,r[6]=o*f+a*M+l*D,r[1]=c*_+d*L+u*N,r[4]=c*m+d*C+u*I,r[7]=c*f+d*M+u*D,r[2]=h*_+p*L+g*N,r[5]=h*m+p*C+g*I,r[8]=h*f+p*M+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,h=a*l-d*r,p=c*r-o*l,g=t*u+n*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*c-d*n)*_,e[2]=(a*n-s*o)*_,e[3]=h*_,e[4]=(d*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Uo.makeScale(e,t)),this}rotate(e){return this.premultiply(Uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uo=new at;function Vu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lh(){const i=or("canvas");return i.style.display="block",i}const Zl={};function ys(i){i in Zl||(Zl[i]=!0,console.warn(i))}function Ih(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Jl=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ql=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ph(){const i={enabled:!0,workingColorSpace:gn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Pt&&(s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Pt&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?uo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gn]:{primaries:e,whitePoint:n,transfer:uo,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:Pt,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}const ut=Ph();function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yi;class Nh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yi===void 0&&(Yi=or("canvas")),Yi.width=e.width,Yi.height=e.height;const s=Yi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=or("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hi(t[n]/255)*255):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dh=0;class El{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fo(s[o].image)):r.push(Fo(s[o]))}else r=Fo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Fo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uh=0;const Oo=new O;class Kt extends Cs{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,n=Ln,s=Ln,r=an,o=Bn,a=In,l=$n,c=Kt.DEFAULT_ANISOTROPY,d=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=zn(),this.name="",this.source=new El(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Oo).x}get height(){return this.source.getSize(Oo).y}get depth(){return this.source.getSize(Oo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Iu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yn:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yn:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Iu;Kt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,s=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,M=(p+1)/2,N=(f+1)/2,I=(d+h)/4,D=(u+_)/4,F=(g+m)/4;return C>M&&C>N?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=I/n,r=D/n):M>N?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=I/s,r=F/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=D/r,s=F/r),this.set(n,s,r,t),this}let L=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(h-d)*(h-d));return Math.abs(L)<.001&&(L=1),this.x=(m-g)/L,this.y=(u-_)/L,this.z=(h-d)/L,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fh extends Cs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Kt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new El(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends Fh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gu extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Oh extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vr.copy(n.boundingBox)),vr.applyMatrix4(e.matrixWorld),this.union(vr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Mr.subVectors(this.max,Fs),qi.subVectors(e.a,Fs),ji.subVectors(e.b,Fs),$i.subVectors(e.c,Fs),pi.subVectors(ji,qi),mi.subVectors($i,ji),Li.subVectors(qi,$i);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Li.z,Li.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Li.z,0,-Li.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Li.y,Li.x,0];return!Bo(t,qi,ji,$i,Mr)||(t=[1,0,0,0,1,0,0,0,1],!Bo(t,qi,ji,$i,Mr))?!1:(Sr.crossVectors(pi,mi),t=[Sr.x,Sr.y,Sr.z],Bo(t,qi,ji,$i,Mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ni=[new O,new O,new O,new O,new O,new O,new O,new O],Dn=new O,vr=new bn,qi=new O,ji=new O,$i=new O,pi=new O,mi=new O,Li=new O,Fs=new O,Mr=new O,Sr=new O,Ii=new O;function Bo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ii.fromArray(i,r);const a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=e.dot(Ii),c=t.dot(Ii),d=n.dot(Ii);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Bh=new bn,Os=new O,ko=new O;class Kn{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const t=Os.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Os,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(ko)),this.expandByPoint(Os.copy(e.center).sub(ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ii=new O,zo=new O,br=new O,gi=new O,Ho=new O,Er=new O,Vo=new O;class xo{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){zo.copy(e).add(t).multiplyScalar(.5),br.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(zo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(br),a=gi.dot(this.direction),l=-gi.dot(br),c=gi.lengthSq(),d=Math.abs(1-o*o);let u,h,p,g;if(d>0)if(u=o*l-a,h=o*a-l,g=r*d,u>=0)if(h>=-g)if(h<=g){const _=1/d;u*=_,h*=_,p=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=r,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-o*r+a)),h=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(u=Math.max(0,-(o*r+a)),h=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+h*(h+2*l)+c);else h=o>0?-r:r,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(zo).addScaledVector(br,h),p}intersectSphere(e,t){ii.subVectors(e.center,this.origin);const n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,s,r){Ho.subVectors(t,e),Er.subVectors(n,e),Vo.crossVectors(Ho,Er);let o=this.direction.dot(Vo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,e);const l=a*this.direction.dot(Er.crossVectors(gi,Er));if(l<0)return null;const c=a*this.direction.dot(Ho.cross(gi));if(c<0||l+c>o)return null;const d=-a*gi.dot(Vo);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,n,s,r,o,a,l,c,d,u,h,p,g,_,m){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,d,u,h,p,g,_,m)}set(e,t,n,s,r,o,a,l,c,d,u,h,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=d,f[10]=u,f[14]=h,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ki.setFromMatrixColumn(e,0).length(),r=1/Ki.setFromMatrixColumn(e,1).length(),o=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=o*d,p=o*u,g=a*d,_=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*d,p=l*u,g=c*d,_=c*u;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*d,p=l*u,g=c*d,_=c*u;t[0]=h-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*d,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*d,p=o*u,g=a*d,_=a*u;t[0]=l*d,t[4]=g*c-p,t[8]=h*c+_,t[1]=l*u,t[5]=_*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*d,t[4]=_-h*u,t[8]=g*u+p,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=p*u+g,t[10]=h-_*u}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+_,t[5]=o*d,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*d,t[10]=_*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kh,e,zh)}lookAt(e,t,n){const s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),_i.crossVectors(n,vn),_i.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),_i.crossVectors(n,vn)),_i.normalize(),Tr.crossVectors(vn,_i),s[0]=_i.x,s[4]=Tr.x,s[8]=vn.x,s[1]=_i.y,s[5]=Tr.y,s[9]=vn.y,s[2]=_i.z,s[6]=Tr.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],L=n[3],C=n[7],M=n[11],N=n[15],I=s[0],D=s[4],F=s[8],T=s[12],E=s[1],U=s[5],j=s[9],K=s[13],Q=s[2],re=s[6],z=s[10],te=s[14],W=s[3],ae=s[7],pe=s[11],me=s[15];return r[0]=o*I+a*E+l*Q+c*W,r[4]=o*D+a*U+l*re+c*ae,r[8]=o*F+a*j+l*z+c*pe,r[12]=o*T+a*K+l*te+c*me,r[1]=d*I+u*E+h*Q+p*W,r[5]=d*D+u*U+h*re+p*ae,r[9]=d*F+u*j+h*z+p*pe,r[13]=d*T+u*K+h*te+p*me,r[2]=g*I+_*E+m*Q+f*W,r[6]=g*D+_*U+m*re+f*ae,r[10]=g*F+_*j+m*z+f*pe,r[14]=g*T+_*K+m*te+f*me,r[3]=L*I+C*E+M*Q+N*W,r[7]=L*D+C*U+M*re+N*ae,r[11]=L*F+C*j+M*z+N*pe,r[15]=L*T+C*K+M*te+N*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*a*h+n*c*h+s*a*p-n*l*p)+_*(+t*l*p-t*c*h+r*o*h-s*o*p+s*c*d-r*l*d)+m*(+t*c*u-t*a*p-r*o*u+n*o*p+r*a*d-n*c*d)+f*(-s*a*d-t*l*u+t*a*h+s*o*u-n*o*h+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],L=u*m*c-_*h*c+_*l*p-a*m*p-u*l*f+a*h*f,C=g*h*c-d*m*c-g*l*p+o*m*p+d*l*f-o*h*f,M=d*_*c-g*u*c+g*a*p-o*_*p-d*a*f+o*u*f,N=g*u*l-d*_*l-g*a*h+o*_*h+d*a*m-o*u*m,I=t*L+n*C+s*M+r*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/I;return e[0]=L*D,e[1]=(_*h*r-u*m*r-_*s*p+n*m*p+u*s*f-n*h*f)*D,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*f+n*l*f)*D,e[3]=(u*l*r-a*h*r-u*s*c+n*h*c+a*s*p-n*l*p)*D,e[4]=C*D,e[5]=(d*m*r-g*h*r+g*s*p-t*m*p-d*s*f+t*h*f)*D,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*D,e[7]=(o*h*r-d*l*r+d*s*c-t*h*c-o*s*p+t*l*p)*D,e[8]=M*D,e[9]=(g*u*r-d*_*r-g*n*p+t*_*p+d*n*f-t*u*f)*D,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*f+t*a*f)*D,e[11]=(d*a*r-o*u*r-d*n*c+t*u*c+o*n*p-t*a*p)*D,e[12]=N*D,e[13]=(d*_*s-g*u*s+g*n*h-t*_*h-d*n*m+t*u*m)*D,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*D,e[15]=(o*u*s-d*a*s+d*n*l-t*u*l-o*n*h+t*a*h)*D,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+n,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,u=a+a,h=r*c,p=r*d,g=r*u,_=o*d,m=o*u,f=a*u,L=l*c,C=l*d,M=l*u,N=n.x,I=n.y,D=n.z;return s[0]=(1-(_+f))*N,s[1]=(p+M)*N,s[2]=(g-C)*N,s[3]=0,s[4]=(p-M)*I,s[5]=(1-(h+f))*I,s[6]=(m+L)*I,s[7]=0,s[8]=(g+C)*D,s[9]=(m-L)*D,s[10]=(1-(h+_))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ki.set(s[0],s[1],s[2]).length();const o=Ki.set(s[4],s[5],s[6]).length(),a=Ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Un.copy(this);const c=1/r,d=1/o,u=1/a;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=d,Un.elements[5]*=d,Un.elements[6]*=d,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,t.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=qn,l=!1){const c=this.elements,d=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),p=(n+s)/(n-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===qn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ho)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=qn,l=!1){const c=this.elements,d=2/(t-e),u=2/(n-s),h=-(t+e)/(t-e),p=-(n+s)/(n-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===qn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===ho)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ki=new O,Un=new Qe,kh=new O(0,0,0),zh=new O(1,1,1),_i=new O,Tr=new O,vn=new O,ec=new Qe,tc=new Hn;class ln{constructor(e=0,t=0,n=0,s=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ec,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tc.setFromEuler(this),this.setFromQuaternion(tc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class Wu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hh=0;const nc=new O,Zi=new Hn,si=new Qe,wr=new O,Bs=new O,Vh=new O,Gh=new Hn,ic=new O(1,0,0),sc=new O(0,1,0),rc=new O(0,0,1),oc={type:"added"},Wh={type:"removed"},Ji={type:"childadded",child:null},Go={type:"childremoved",child:null};class Ut extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new O,t=new ln,n=new Hn,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new at}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(ic,e)}rotateY(e){return this.rotateOnAxis(sc,e)}rotateZ(e){return this.rotateOnAxis(rc,e)}translateOnAxis(e,t){return nc.copy(e).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ic,e)}translateY(e){return this.translateOnAxis(sc,e)}translateZ(e){return this.translateOnAxis(rc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wr.copy(e):wr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Bs,wr,this.up):si.lookAt(wr,Bs,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(si),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oc),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wh),Go.child=e,this.dispatchEvent(Go),Go.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oc),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,Vh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Gh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ut.DEFAULT_UP=new O(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new O,ri=new O,Wo=new O,oi=new O,Qi=new O,es=new O,ac=new O,Xo=new O,Yo=new O,qo=new O,jo=new bt,$o=new bt,Ko=new bt;class Cn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Fn.subVectors(e,t),s.cross(Fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Fn.subVectors(s,t),ri.subVectors(n,t),Wo.subVectors(e,t);const o=Fn.dot(Fn),a=Fn.dot(ri),l=Fn.dot(Wo),c=ri.dot(ri),d=ri.dot(Wo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const h=1/u,p=(c*l-a*d)*h,g=(o*d-a*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return jo.setScalar(0),$o.setScalar(0),Ko.setScalar(0),jo.fromBufferAttribute(e,t),$o.fromBufferAttribute(e,n),Ko.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(jo,r.x),o.addScaledVector($o,r.y),o.addScaledVector(Ko,r.z),o}static isFrontFacing(e,t,n,s){return Fn.subVectors(n,t),ri.subVectors(e,t),Fn.cross(ri).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Fn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Cn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Qi.subVectors(s,n),es.subVectors(r,n),Xo.subVectors(e,n);const l=Qi.dot(Xo),c=es.dot(Xo);if(l<=0&&c<=0)return t.copy(n);Yo.subVectors(e,s);const d=Qi.dot(Yo),u=es.dot(Yo);if(d>=0&&u<=d)return t.copy(s);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(Qi,o);qo.subVectors(e,r);const p=Qi.dot(qo),g=es.dot(qo);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(es,a);const m=d*g-p*u;if(m<=0&&u-d>=0&&p-g>=0)return ac.subVectors(r,s),a=(u-d)/(u-d+(p-g)),t.copy(s).addScaledVector(ac,a);const f=1/(m+_+h);return o=_*f,a=h*f,t.copy(n).addScaledVector(Qi,o).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Zo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=bl(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Zo(o,r,e+1/3),this.g=Zo(o,r,e),this.b=Zo(o,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=Xu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return ut.workingToColorSpace(on.copy(this),e),Math.round(ht(on.r*255,0,255))*65536+Math.round(ht(on.g*255,0,255))*256+Math.round(ht(on.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(on.copy(this),t);const n=on.r,s=on.g,r=on.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Nt){ut.workingToColorSpace(on.copy(this),e);const t=on.r,n=on.g,s=on.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(Ar);const n=Qs(yi.h,Ar.h,t),s=Qs(yi.s,Ar.s,t),r=Qs(yi.l,Ar.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new qe;qe.NAMES=Xu;let Xh=0;class mn extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=Nn,this.side=Zt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=va,this.blendDst=Ma,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Nn&&(n.blending=this.blending),this.side!==Zt&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==va&&(n.blendSrc=this.blendSrc),this.blendDst!==Ma&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jn extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new O,Rr=new nt;let Yh=0;class sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sl,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXY(t,Rr.x,Rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sl&&(e.usage=this.usage),e}}class Yu extends sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class qu extends sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qh=0;const wn=new Qe,Jo=new Ut,ts=new O,Mn=new bn,ks=new bn,en=new O;class Wt extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vu(e)?qu:Yu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return Jo.lookAt(e),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Mn.min,ks.min),Mn.expandByPoint(en),en.addVectors(Mn.max,ks.max),Mn.expandByPoint(en)):(Mn.expandByPoint(ks.min),Mn.expandByPoint(ks.max))}Mn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)en.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(en));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)en.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(e,c),en.add(ts)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new O,l[F]=new O;const c=new O,d=new O,u=new O,h=new nt,p=new nt,g=new nt,_=new O,m=new O;function f(F,T,E){c.fromBufferAttribute(n,F),d.fromBufferAttribute(n,T),u.fromBufferAttribute(n,E),h.fromBufferAttribute(r,F),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,E),d.sub(c),u.sub(c),p.sub(h),g.sub(h);const U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(U),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(U),a[F].add(_),a[T].add(_),a[E].add(_),l[F].add(m),l[T].add(m),l[E].add(m))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let F=0,T=L.length;F<T;++F){const E=L[F],U=E.start,j=E.count;for(let K=U,Q=U+j;K<Q;K+=3)f(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const C=new O,M=new O,N=new O,I=new O;function D(F){N.fromBufferAttribute(s,F),I.copy(N);const T=a[F];C.copy(T),C.sub(N.multiplyScalar(N.dot(T))).normalize(),M.crossVectors(I,T);const U=M.dot(l[F])<0?-1:1;o.setXYZW(F,C.x,C.y,C.z,U)}for(let F=0,T=L.length;F<T;++F){const E=L[F],U=E.start,j=E.count;for(let K=U,Q=U+j;K<Q;K+=3)D(e.getX(K+0)),D(e.getX(K+1)),D(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,d=new O,u=new O;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*d;for(let f=0;f<d;f++)h[g++]=c[p++]}return new sn(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){const h=c[d],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const p=c[u];d.push(p.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let h=0,p=u.length;h<p;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lc=new Qe,Pi=new xo,Cr=new Kn,cc=new O,Lr=new O,Ir=new O,Pr=new O,Qo=new O,Nr=new O,uc=new O,Dr=new O;class $t extends Ut{constructor(e=new Wt,t=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Nr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],u=r[l];d!==0&&(Qo.fromBufferAttribute(u,e),o?Nr.addScaledVector(Qo,d):Nr.addScaledVector(Qo.sub(t),d))}t.add(Nr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(r),Pi.copy(e.ray).recast(e.near),!(Cr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Cr,cc)===null||Pi.origin.distanceToSquared(cc)>(e.far-e.near)**2))&&(lc.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(lc),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=o[m.materialIndex],L=Math.max(m.start,p.start),C=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=L,N=C;M<N;M+=3){const I=a.getX(M),D=a.getX(M+1),F=a.getX(M+2);s=Ur(this,f,e,n,c,d,u,I,D,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const L=a.getX(m),C=a.getX(m+1),M=a.getX(m+2);s=Ur(this,o,e,n,c,d,u,L,C,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=o[m.materialIndex],L=Math.max(m.start,p.start),C=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=L,N=C;M<N;M+=3){const I=M,D=M+1,F=M+2;s=Ur(this,f,e,n,c,d,u,I,D,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const L=m,C=m+1,M=m+2;s=Ur(this,o,e,n,c,d,u,L,C,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function jh(i,e,t,n,s,r,o,a){let l;if(e.side===xn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Zt,a),l===null)return null;Dr.copy(a),Dr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Dr);return c<t.near||c>t.far?null:{distance:c,point:Dr.clone(),object:i}}function Ur(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Lr),i.getVertexPosition(l,Ir),i.getVertexPosition(c,Pr);const d=jh(i,e,t,n,Lr,Ir,Pr,uc);if(d){const u=new O;Cn.getBarycoord(uc,Lr,Ir,Pr,u),s&&(d.uv=Cn.getInterpolatedAttribute(s,a,l,c,u,new nt)),r&&(d.uv1=Cn.getInterpolatedAttribute(r,a,l,c,u,new nt)),o&&(d.normal=Cn.getInterpolatedAttribute(o,a,l,c,u,new O),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};Cn.getNormal(Lr,Ir,Pr,h.normal),d.face=h,d.barycoord=u}return d}class Ls extends Wt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],u=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(u,2));function g(_,m,f,L,C,M,N,I,D,F,T){const E=M/D,U=N/F,j=M/2,K=N/2,Q=I/2,re=D+1,z=F+1;let te=0,W=0;const ae=new O;for(let pe=0;pe<z;pe++){const me=pe*U-K;for(let we=0;we<re;we++){const Ce=we*E-j;ae[_]=Ce*L,ae[m]=me*C,ae[f]=Q,c.push(ae.x,ae.y,ae.z),ae[_]=0,ae[m]=0,ae[f]=I>0?1:-1,d.push(ae.x,ae.y,ae.z),u.push(we/D),u.push(1-pe/F),te+=1}}for(let pe=0;pe<F;pe++)for(let me=0;me<D;me++){const we=h+me+re*pe,Ce=h+me+re*(pe+1),Se=h+(me+1)+re*(pe+1),G=h+(me+1)+re*pe;l.push(we,Ce,G),l.push(Ce,Se,G),W+=6}a.addGroup(p,W,T),p+=W,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function fn(i){const e={};for(let t=0;t<i.length;t++){const n=ws(i[t]);for(const s in n)e[s]=n[s]}return e}function $h(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ju(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const Kh={clone:ws,merge:fn};var Zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zh,this.fragmentShader=Jh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=$h(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $u extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new O,dc=new nt,hc=new nt;class nn extends $u{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,dc,hc),t.subVectors(hc,dc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class Qh extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(ns,is,e,t);s.layers=this.layers,this.add(s);const r=new nn(ns,is,e,t);r.layers=this.layers,this.add(r);const o=new nn(ns,is,e,t);o.layers=this.layers,this.add(o);const a=new nn(ns,is,e,t);a.layers=this.layers,this.add(a);const l=new nn(ns,is,e,t);l.layers=this.layers,this.add(l);const c=new nn(ns,is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(u,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ku extends Kt{constructor(e=[],t=bs,n,s,r,o,a,l,c,d){super(e,t,n,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ef extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ku(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ls(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Si});r.uniforms.tEquirect.value=t;const o=new $t(s,r),a=t.minFilter;return t.minFilter===Bn&&(t.minFilter=an),new Qh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class Pn extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tf={type:"move"};class ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Tl extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sl,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new O;class ar{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ar(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ju extends mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ss;const zs=new O,rs=new O,os=new O,as=new nt,Hs=new nt,Qu=new Qe,Fr=new O,Vs=new O,Or=new O,fc=new nt,ta=new nt,pc=new nt;class nf extends Ut{constructor(e=new Ju){if(super(),this.isSprite=!0,this.type="Sprite",ss===void 0){ss=new Wt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Zu(t,5);ss.setIndex([0,1,2,0,2,3]),ss.setAttribute("position",new ar(n,3,0,!1)),ss.setAttribute("uv",new ar(n,2,3,!1))}this.geometry=ss,this.material=e,this.center=new nt(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),Qu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-os.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Br(Fr.set(-.5,-.5,0),os,o,rs,s,r),Br(Vs.set(.5,-.5,0),os,o,rs,s,r),Br(Or.set(.5,.5,0),os,o,rs,s,r),fc.set(0,0),ta.set(1,0),pc.set(1,1);let a=e.ray.intersectTriangle(Fr,Vs,Or,!1,zs);if(a===null&&(Br(Vs.set(-.5,.5,0),os,o,rs,s,r),ta.set(0,1),a=e.ray.intersectTriangle(Fr,Or,Vs,!1,zs),a===null))return;const l=e.ray.origin.distanceTo(zs);l<e.near||l>e.far||t.push({distance:l,point:zs.clone(),uv:Cn.getInterpolation(zs,Fr,Vs,Or,fc,ta,pc,new nt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Br(i,e,t,n,s,r){as.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Hs.x=r*as.x-s*as.y,Hs.y=s*as.x+r*as.y):Hs.copy(as),i.copy(e),i.x+=Hs.x,i.y+=Hs.y,i.applyMatrix4(Qu)}const mc=new O,gc=new bt,_c=new bt,sf=new O,yc=new Qe,kr=new O,na=new Kn,xc=new Qe,ia=new xo;class ed extends $t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gl,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,kr),this.boundingBox.expandByPoint(kr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,kr),this.boundingSphere.expandByPoint(kr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(s),e.ray.intersectsSphere(na)!==!1&&(xc.copy(s).invert(),ia.copy(e.ray).applyMatrix4(xc),!(this.boundingBox!==null&&ia.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ia)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new bt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===th?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;gc.fromBufferAttribute(s.attributes.skinIndex,e),_c.fromBufferAttribute(s.attributes.skinWeight,e),mc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=_c.getComponent(r);if(o!==0){const a=gc.getComponent(r);yc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(sf.copy(mc).applyMatrix4(yc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class wl extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Al extends Kt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=pn,d=pn,u,h){super(null,o,a,l,c,d,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vc=new Qe,rf=new Qe;class vo{constructor(e=[],t=[]){this.uuid=zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:rf;vc.multiplyMatrices(a,t[r]),vc.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new vo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Al(t,e,e,In,kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new wl),this.bones.push(o),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class rl extends sn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ls=new Qe,Mc=new Qe,zr=[],Sc=new bn,of=new Qe,Gs=new $t,Ws=new Kn;class af extends $t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,of)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),Sc.copy(e.boundingBox).applyMatrix4(ls),this.boundingBox.union(Sc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),Ws.copy(e.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(Ws)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ws.copy(this.boundingSphere),Ws.applyMatrix4(n),e.ray.intersectsSphere(Ws)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ls),Mc.multiplyMatrices(n,ls),Gs.matrixWorld=Mc,Gs.raycast(e,zr);for(let o=0,a=zr.length;o<a;o++){const l=zr[o];l.instanceId=r,l.object=this,t.push(l)}zr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new rl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Al(new Float32Array(s*this.count),s,this.count,xl,kn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const sa=new O,lf=new O,cf=new at;class Oi{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=sa.subVectors(n,t).cross(lf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(sa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cf.getNormalMatrix(e),s=this.coplanarPoint(sa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Kn,uf=new nt(.5,.5),Hr=new O;class Rl{constructor(e=new Oi,t=new Oi,n=new Oi,s=new Oi,r=new Oi,o=new Oi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],L=r[12],C=r[13],M=r[14],N=r[15];if(s[0].setComponents(c-o,p-d,f-g,N-L).normalize(),s[1].setComponents(c+o,p+d,f+g,N+L).normalize(),s[2].setComponents(c+a,p+u,f+_,N+C).normalize(),s[3].setComponents(c-a,p-u,f-_,N-C).normalize(),n)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,p-h,f-m,N-M).normalize();else if(s[4].setComponents(c-l,p-h,f-m,N-M).normalize(),t===qn)s[5].setComponents(c+l,p+h,f+m,N+M).normalize();else if(t===ho)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){Ni.center.set(0,0,0);const t=uf.distanceTo(e.center);return Ni.radius=.7071067811865476+t,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Hr.x=s.normal.x>0?e.max.x:e.min.x,Hr.y=s.normal.y>0?e.max.y:e.min.y,Hr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ei extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fo=new O,po=new O,bc=new Qe,Xs=new xo,Vr=new Kn,ra=new O,Ec=new O;class Mo extends Ut{constructor(e=new Wt,t=new Ei){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)fo.fromBufferAttribute(t,s-1),po.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=fo.distanceTo(po);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,e.ray.intersectsSphere(Vr)===!1)return;bc.copy(s).invert(),Xs.copy(e.ray).applyMatrix4(bc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=d.getX(_),L=d.getX(_+1),C=Gr(this,e,Xs,l,f,L,_);C&&t.push(C)}if(this.isLineLoop){const _=d.getX(g-1),m=d.getX(p),f=Gr(this,e,Xs,l,_,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=Gr(this,e,Xs,l,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){const _=Gr(this,e,Xs,l,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Gr(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(fo.fromBufferAttribute(a,s),po.fromBufferAttribute(a,r),t.distanceSqToSegment(fo,po,ra,Ec)>n)return;ra.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ra);if(!(c<e.near||c>e.far))return{distance:c,point:Ec.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Tc=new O,wc=new O;class lr extends Mo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Tc.fromBufferAttribute(t,s),wc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Tc.distanceTo(wc);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class df extends Mo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ms extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ac=new Qe,ol=new xo,Wr=new Kn,Xr=new O;class so extends Ut{constructor(e=new Wt,t=new ms){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(s),Wr.radius+=r,e.ray.intersectsSphere(Wr)===!1)return;Ac.copy(s).invert(),ol.copy(e.ray).applyMatrix4(Ac);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,_=p;g<_;g++){const m=c.getX(g);Xr.fromBufferAttribute(u,m),Rc(Xr,m,l,s,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=h,_=p;g<_;g++)Xr.fromBufferAttribute(u,g),Rc(Xr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Rc(i,e,t,n,s,r,o){const a=ol.distanceSqToPoint(i);if(a<t){const l=new O;ol.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class hf extends Kt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class td extends Kt{constructor(e,t,n=Hi,s,r,o,a=pn,l=pn,c,d=nr,u=1){if(d!==nr&&d!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,s,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new El(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Cl extends Wt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],u=[],h=[],p=[];let g=0;const _=[],m=n/2;let f=0;L(),o===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(d),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(p,2));function L(){const M=new O,N=new O;let I=0;const D=(t-e)/n;for(let F=0;F<=r;F++){const T=[],E=F/r,U=E*(t-e)+e;for(let j=0;j<=s;j++){const K=j/s,Q=K*l+a,re=Math.sin(Q),z=Math.cos(Q);N.x=U*re,N.y=-E*n+m,N.z=U*z,u.push(N.x,N.y,N.z),M.set(re,D,z).normalize(),h.push(M.x,M.y,M.z),p.push(K,1-E),T.push(g++)}_.push(T)}for(let F=0;F<s;F++)for(let T=0;T<r;T++){const E=_[T][F],U=_[T+1][F],j=_[T+1][F+1],K=_[T][F+1];(e>0||T!==0)&&(d.push(E,U,K),I+=3),(t>0||T!==r-1)&&(d.push(U,j,K),I+=3)}c.addGroup(f,I,0),f+=I}function C(M){const N=g,I=new nt,D=new O;let F=0;const T=M===!0?e:t,E=M===!0?1:-1;for(let j=1;j<=s;j++)u.push(0,m*E,0),h.push(0,E,0),p.push(.5,.5),g++;const U=g;for(let j=0;j<=s;j++){const Q=j/s*l+a,re=Math.cos(Q),z=Math.sin(Q);D.x=T*z,D.y=m*E,D.z=T*re,u.push(D.x,D.y,D.z),h.push(0,E,0),I.x=re*.5+.5,I.y=z*.5*E+.5,p.push(I.x,I.y),g++}for(let j=0;j<s;j++){const K=N+j,Q=U+j;M===!0?d.push(Q,Q+1,K):d.push(Q+1,Q,K),F+=3}c.addGroup(f,F,M===!0?1:2),f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ll extends Cl{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ll(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class So extends Wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,d=l+1,u=e/a,h=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<d;f++){const L=f*h-o;for(let C=0;C<c;C++){const M=C*u-r;g.push(M,-L,0),_.push(0,0,1),m.push(C/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let L=0;L<a;L++){const C=L+c*f,M=L+c*(f+1),N=L+1+c*(f+1),I=L+1+c*f;p.push(C,M,I),p.push(M,N,I)}this.setIndex(p),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.width,e.height,e.widthSegments,e.heightSegments)}}class Il extends Wt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],d=[];let u=e;const h=(t-e)/s,p=new O,g=new nt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,d.push(g.x,g.y)}u+=h}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const L=f+m,C=L,M=L+n+1,N=L+n+2,I=L+1;a.push(C,M,I),a.push(M,N,I)}}this.setIndex(a),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Pl extends Wt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],u=new O,h=new O,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const L=[],C=f/n;let M=0;f===0&&o===0?M=.5/t:f===n&&l===Math.PI&&(M=-.5/t);for(let N=0;N<=t;N++){const I=N/t;u.x=-e*Math.cos(s+I*r)*Math.sin(o+C*a),u.y=e*Math.cos(o+C*a),u.z=e*Math.sin(s+I*r)*Math.sin(o+C*a),g.push(u.x,u.y,u.z),h.copy(u).normalize(),_.push(h.x,h.y,h.z),m.push(I+M,1-C),L.push(c++)}d.push(L)}for(let f=0;f<n;f++)for(let L=0;L<t;L++){const C=d[f][L+1],M=d[f][L],N=d[f+1][L],I=d[f+1][L+1];(f!==0||o>0)&&p.push(C,M,I),(f!==n-1||l<Math.PI)&&p.push(M,N,I)}this.setIndex(p),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Nl extends Wt{constructor(e=1,t=.4,n=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:o},n=Math.floor(n),s=Math.floor(s);const a=[],l=[],c=[],d=[],u=new O,h=new O,p=new O,g=new O,_=new O,m=new O,f=new O;for(let C=0;C<=n;++C){const M=C/n*r*Math.PI*2;L(M,r,o,e,p),L(M+.01,r,o,e,g),m.subVectors(g,p),f.addVectors(g,p),_.crossVectors(m,f),f.crossVectors(_,m),_.normalize(),f.normalize();for(let N=0;N<=s;++N){const I=N/s*Math.PI*2,D=-t*Math.cos(I),F=t*Math.sin(I);u.x=p.x+(D*f.x+F*_.x),u.y=p.y+(D*f.y+F*_.y),u.z=p.z+(D*f.z+F*_.z),l.push(u.x,u.y,u.z),h.subVectors(u,p).normalize(),c.push(h.x,h.y,h.z),d.push(C/n),d.push(N/s)}}for(let C=1;C<=n;C++)for(let M=1;M<=s;M++){const N=(s+1)*(C-1)+(M-1),I=(s+1)*C+(M-1),D=(s+1)*C+M,F=(s+1)*(C-1)+M;a.push(N,I,F),a.push(I,D,F)}this.setIndex(a),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(d,2));function L(C,M,N,I,D){const F=Math.cos(C),T=Math.sin(C),E=N/M*C,U=Math.cos(E);D.x=I*(2+U)*.5*F,D.y=I*(2+U)*T*.5,D.z=I*Math.sin(E)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Ai extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yo,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zn extends Ai{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class al extends mn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qe(16777215),this.specular=new qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yo,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ff extends mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yo,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pf extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mf extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Yr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _f(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Cc(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function nd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class dr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class yf extends dr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wl,endingEnd:Wl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xl:r=e,a=2*t-n;break;case Yl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xl:o=e,l=2*n-t;break;case Yl:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,f=-h*m+2*h*_-h*g,L=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,C=(-1-p)*m+(1.5+p)*_+.5*g,M=p*m-p*_;for(let N=0;N!==a;++N)r[N]=f*o[d+N]+L*o[c+N]+C*o[l+N]+M*o[u+N];return r}}class xf extends dr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(s-t),u=1-d;for(let h=0;h!==a;++h)r[h]=o[c+h]*u+o[l+h]*d;return r}}class vf extends dr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Gn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yr(t,this.TimeBufferType),this.values=Yr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Yr(e.times,Array),values:Yr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case sr:t=this.InterpolantFactoryMethodDiscrete;break;case rr:t=this.InterpolantFactoryMethodLinear;break;case No:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sr;case this.InterpolantFactoryMethodLinear:return rr;case this.InterpolantFactoryMethodSmooth:return No}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&gf(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===No,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(s)l=!0;else{const u=a*n,h=u-n,p=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[h+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,h=o*n;for(let p=0;p!==n;++p)t[h+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=rr;class Is extends Gn{constructor(e,t,n){super(e,t,n)}}Is.prototype.ValueTypeName="bool";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=sr;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;class id extends Gn{constructor(e,t,n,s){super(e,t,n,s)}}id.prototype.ValueTypeName="color";class As extends Gn{constructor(e,t,n,s){super(e,t,n,s)}}As.prototype.ValueTypeName="number";class Mf extends dr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let d=c+a;c!==d;c+=4)Hn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Gi extends Gn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Mf(this.times,this.values,this.getValueSize(),e)}}Gi.prototype.ValueTypeName="quaternion";Gi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ps extends Gn{constructor(e,t,n){super(e,t,n)}}Ps.prototype.ValueTypeName="string";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=sr;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;class wi extends Gn{constructor(e,t,n,s){super(e,t,n,s)}}wi.prototype.ValueTypeName="vector";class ll{constructor(e="",t=-1,n=[],s=nh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=zn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(bf(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Gn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const d=_f(l);l=Cc(l,1,d),c=Cc(c,1,d),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new As(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],d=c.name.match(r);if(d&&d.length>1){const u=d[1];let h=s[u];h||(s[u]=h=[]),h.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,h,p,g,_){if(p.length!==0){const m=[],f=[];nd(p,m,f,g),m.length!==0&&_.push(new u(h,m,f))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)p[h[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let L=0;L!==h[g].morphTargets.length;++L){const C=h[g];m.push(C.time),f.push(C.morphTarget===_?1:0)}s.push(new As(".morphTargetInfluence["+_+"]",m,f))}l=p.length*o}else{const p=".bones["+t[u].name+"]";n(wi,p+".position",h,"pos",s),n(Gi,p+".quaternion",h,"rot",s),n(wi,p+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Sf(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return As;case"vector":case"vector2":case"vector3":case"vector4":return wi;case"color":return id;case"quaternion":return Gi;case"bool":case"boolean":return Is;case"string":return Ps}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function bf(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Sf(i.type);if(i.times===void 0){const t=[],n=[];nd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const di={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ef{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){const u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Tf=new Ef;class Vn{constructor(e){this.manager=e!==void 0?e:Tf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Vn.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai={};class wf extends Error{constructor(e,t){super(e),this.response=t}}class Ns extends Vn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=di.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:n,onError:s});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=ai[e],u=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){L();function L(){u.read().then(({done:C,value:M})=>{if(C)f.close();else{_+=M.byteLength;const N=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let I=0,D=d.length;I<D;I++){const F=d[I];F.onProgress&&F.onProgress(N)}f.enqueue(M),L()}},C=>{f.error(C)})}}});return new Response(m)}else throw new wf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),h=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{di.add(`file:${e}`,c);const d=ai[e];delete ai[e];for(let u=0,h=d.length;u<h;u++){const p=d[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const d=ai[e];if(d===void 0)throw this.manager.itemError(e),c;delete ai[e];for(let u=0,h=d.length;u<h;u++){const p=d[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const cs=new WeakMap;class Af extends Vn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=di.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=cs.get(o);u===void 0&&(u=[],cs.set(o,u)),u.push({onLoad:t,onError:s})}return o}const a=or("img");function l(){d(),t&&t(this);const u=cs.get(this)||[];for(let h=0;h<u.length;h++){const p=u[h];p.onLoad&&p.onLoad(this)}cs.delete(this),r.manager.itemEnd(e)}function c(u){d(),s&&s(u),di.remove(`image:${e}`);const h=cs.get(this)||[];for(let p=0;p<h.length;p++){const g=h[p];g.onError&&g.onError(u)}cs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),di.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Rf extends Vn{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new Al,a=new Ns(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(d){if(s!==void 0)s(d);else{console.error(d);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Ln,o.wrapT=c.wrapT!==void 0?c.wrapT:Ln,o.magFilter=c.magFilter!==void 0?c.magFilter:an,o.minFilter=c.minFilter!==void 0?c.minFilter:an,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Bn),c.mipmapCount===1&&(o.minFilter=an),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,s),o}}class sd extends Vn{constructor(e){super(e)}load(e,t,n,s){const r=new Kt,o=new Af(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class bo extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const oa=new Qe,Lc=new O,Ic=new O;class Dl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rl,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Lc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lc),Ic.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ic),t.updateMatrixWorld(),oa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Cf extends Dl{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ts*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class rd extends bo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Cf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Pc=new Qe,Ys=new O,aa=new O;class Lf extends Dl{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ys.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ys),aa.copy(n.position),aa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(aa),n.updateMatrixWorld(),s.makeTranslation(-Ys.x,-Ys.y,-Ys.z),Pc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pc,n.coordinateSystem,n.reversedDepth)}}class od extends bo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Lf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Eo extends $u{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class If extends Dl{constructor(){super(new Eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mo extends bo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new If}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ad extends bo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class vs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const la=new WeakMap;class Pf extends Vn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=di.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(la.has(o)===!0)s&&s(la.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return di.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),la.set(l,c),di.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});di.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Nf extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ul="\\[\\]\\.:\\/",Df=new RegExp("["+Ul+"]","g"),Fl="[^"+Ul+"]",Uf="[^"+Ul.replace("\\.","")+"]",Ff=/((?:WC+[\/:])*)/.source.replace("WC",Fl),Of=/(WCOD+)?/.source.replace("WCOD",Uf),Bf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fl),kf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fl),zf=new RegExp("^"+Ff+Of+Bf+kf+"$"),Hf=["material","materials","bones","map"];class Vf{constructor(e,t,n){const s=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Rt{constructor(e,t,n){this.path=t,this.parsedPath=n||Rt.parseTrackName(t),this.node=Rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Rt.Composite(e,t,n):new Rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Df,"")}static parseTrackName(e){const t=zf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Hf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Rt.Composite=Vf;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Nc extends lr{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Wt;s.setAttribute("position",new dt(t,3)),s.setAttribute("color",new dt(n,3));const r=new Ei({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new qe,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function Dc(i,e,t,n){const s=Gf(n);switch(t){case Fu:return i*e;case xl:return i*e/s.components*s.byteLength;case vl:return i*e/s.components*s.byteLength;case Bu:return i*e*2/s.components*s.byteLength;case Ml:return i*e*2/s.components*s.byteLength;case Ou:return i*e*3/s.components*s.byteLength;case In:return i*e*4/s.components*s.byteLength;case Sl:return i*e*4/s.components*s.byteLength;case Qr:case eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case to:case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:case Da:return Math.max(i,16)*Math.max(e,8)/4;case Ia:case Na:return Math.max(i,8)*Math.max(e,8)/2;case Ua:case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Va:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case qa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case io:case Ja:case Qa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ku:case el:return Math.ceil(i/4)*Math.ceil(e/4)*8;case tl:case nl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gf(i){switch(i){case $n:case Nu:return{byteLength:1,components:1};case er:case Du:case ur:return{byteLength:2,components:1};case _l:case yl:return{byteLength:2,components:4};case Hi:case gl:case kn:return{byteLength:4,components:1};case Uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ml);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ld(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Wf(i){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const d=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,d);else{u.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<u.length;p++){const g=u[h],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,u[h]=_)}u.length=h+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$f=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ip=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Op=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,em=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,im=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Om=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,km=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ag=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Sg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:Xf,alphahash_pars_fragment:Yf,alphamap_fragment:qf,alphamap_pars_fragment:jf,alphatest_fragment:$f,alphatest_pars_fragment:Kf,aomap_fragment:Zf,aomap_pars_fragment:Jf,batching_pars_vertex:Qf,batching_vertex:ep,begin_vertex:tp,beginnormal_vertex:np,bsdfs:ip,iridescence_fragment:sp,bumpmap_pars_fragment:rp,clipping_planes_fragment:op,clipping_planes_pars_fragment:ap,clipping_planes_pars_vertex:lp,clipping_planes_vertex:cp,color_fragment:up,color_pars_fragment:dp,color_pars_vertex:hp,color_vertex:fp,common:pp,cube_uv_reflection_fragment:mp,defaultnormal_vertex:gp,displacementmap_pars_vertex:_p,displacementmap_vertex:yp,emissivemap_fragment:xp,emissivemap_pars_fragment:vp,colorspace_fragment:Mp,colorspace_pars_fragment:Sp,envmap_fragment:bp,envmap_common_pars_fragment:Ep,envmap_pars_fragment:Tp,envmap_pars_vertex:wp,envmap_physical_pars_fragment:Op,envmap_vertex:Ap,fog_vertex:Rp,fog_pars_vertex:Cp,fog_fragment:Lp,fog_pars_fragment:Ip,gradientmap_pars_fragment:Pp,lightmap_pars_fragment:Np,lights_lambert_fragment:Dp,lights_lambert_pars_fragment:Up,lights_pars_begin:Fp,lights_toon_fragment:Bp,lights_toon_pars_fragment:kp,lights_phong_fragment:zp,lights_phong_pars_fragment:Hp,lights_physical_fragment:Vp,lights_physical_pars_fragment:Gp,lights_fragment_begin:Wp,lights_fragment_maps:Xp,lights_fragment_end:Yp,logdepthbuf_fragment:qp,logdepthbuf_pars_fragment:jp,logdepthbuf_pars_vertex:$p,logdepthbuf_vertex:Kp,map_fragment:Zp,map_pars_fragment:Jp,map_particle_fragment:Qp,map_particle_pars_fragment:em,metalnessmap_fragment:tm,metalnessmap_pars_fragment:nm,morphinstance_vertex:im,morphcolor_vertex:sm,morphnormal_vertex:rm,morphtarget_pars_vertex:om,morphtarget_vertex:am,normal_fragment_begin:lm,normal_fragment_maps:cm,normal_pars_fragment:um,normal_pars_vertex:dm,normal_vertex:hm,normalmap_pars_fragment:fm,clearcoat_normal_fragment_begin:pm,clearcoat_normal_fragment_maps:mm,clearcoat_pars_fragment:gm,iridescence_pars_fragment:_m,opaque_fragment:ym,packing:xm,premultiplied_alpha_fragment:vm,project_vertex:Mm,dithering_fragment:Sm,dithering_pars_fragment:bm,roughnessmap_fragment:Em,roughnessmap_pars_fragment:Tm,shadowmap_pars_fragment:wm,shadowmap_pars_vertex:Am,shadowmap_vertex:Rm,shadowmask_pars_fragment:Cm,skinbase_vertex:Lm,skinning_pars_vertex:Im,skinning_vertex:Pm,skinnormal_vertex:Nm,specularmap_fragment:Dm,specularmap_pars_fragment:Um,tonemapping_fragment:Fm,tonemapping_pars_fragment:Om,transmission_fragment:Bm,transmission_pars_fragment:km,uv_pars_fragment:zm,uv_pars_vertex:Hm,uv_vertex:Vm,worldpos_vertex:Gm,background_vert:Wm,background_frag:Xm,backgroundCube_vert:Ym,backgroundCube_frag:qm,cube_vert:jm,cube_frag:$m,depth_vert:Km,depth_frag:Zm,distanceRGBA_vert:Jm,distanceRGBA_frag:Qm,equirect_vert:eg,equirect_frag:tg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:sg,meshbasic_frag:rg,meshlambert_vert:og,meshlambert_frag:ag,meshmatcap_vert:lg,meshmatcap_frag:cg,meshnormal_vert:ug,meshnormal_frag:dg,meshphong_vert:hg,meshphong_frag:fg,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:gg,meshtoon_frag:_g,points_vert:yg,points_frag:xg,shadow_vert:vg,shadow_frag:Mg,sprite_vert:Sg,sprite_frag:bg},Me={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Xn={basic:{uniforms:fn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:fn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new qe(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:fn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:fn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:fn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new qe(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:fn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:fn([Me.points,Me.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:fn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:fn([Me.common,Me.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:fn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:fn([Me.sprite,Me.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:fn([Me.common,Me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:fn([Me.lights,Me.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Xn.physical={uniforms:fn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const qr={r:0,b:0,g:0},Di=new ln,Eg=new Qe;function Tg(i,e,t,n,s,r,o){const a=new qe(0);let l=r===!0?0:1,c,d,u=null,h=0,p=null;function g(C){let M=C.isScene===!0?C.background:null;return M&&M.isTexture&&(M=(C.backgroundBlurriness>0?t:e).get(M)),M}function _(C){let M=!1;const N=g(C);N===null?f(a,l):N&&N.isColor&&(f(N,1),M=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(C,M){const N=g(M);N&&(N.isCubeTexture||N.mapping===_o)?(d===void 0&&(d=new $t(new Ls(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:ws(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Di.copy(M.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),d.material.uniforms.envMap.value=N,d.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(Di)),d.material.toneMapped=ut.getTransfer(N.colorSpace)!==Pt,(u!==N||h!==N.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,u=N,h=N.version,p=i.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null)):N&&N.isTexture&&(c===void 0&&(c=new $t(new So(2,2),new Ti({name:"BackgroundMaterial",uniforms:ws(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=N,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ut.getTransfer(N.colorSpace)!==Pt,N.matrixAutoUpdate===!0&&N.updateMatrix(),c.material.uniforms.uvTransform.value.copy(N.matrix),(u!==N||h!==N.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=N,h=N.version,p=i.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function f(C,M){C.getRGB(qr,ju(i)),n.buffers.color.setClear(qr.r,qr.g,qr.b,M,o)}function L(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(C,M=1){a.set(C),l=M,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,f(a,l)},render:_,addToRenderList:m,dispose:L}}function wg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(E,U,j,K,Q){let re=!1;const z=u(K,j,U);r!==z&&(r=z,c(r.object)),re=p(E,K,j,Q),re&&g(E,K,j,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,M(E,U,j,K),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function d(E){return i.deleteVertexArray(E)}function u(E,U,j){const K=j.wireframe===!0;let Q=n[E.id];Q===void 0&&(Q={},n[E.id]=Q);let re=Q[U.id];re===void 0&&(re={},Q[U.id]=re);let z=re[K];return z===void 0&&(z=h(l()),re[K]=z),z}function h(E){const U=[],j=[],K=[];for(let Q=0;Q<t;Q++)U[Q]=0,j[Q]=0,K[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:j,attributeDivisors:K,object:E,attributes:{},index:null}}function p(E,U,j,K){const Q=r.attributes,re=U.attributes;let z=0;const te=j.getAttributes();for(const W in te)if(te[W].location>=0){const pe=Q[W];let me=re[W];if(me===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(me=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(me=E.instanceColor)),pe===void 0||pe.attribute!==me||me&&pe.data!==me.data)return!0;z++}return r.attributesNum!==z||r.index!==K}function g(E,U,j,K){const Q={},re=U.attributes;let z=0;const te=j.getAttributes();for(const W in te)if(te[W].location>=0){let pe=re[W];pe===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(pe=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(pe=E.instanceColor));const me={};me.attribute=pe,pe&&pe.data&&(me.data=pe.data),Q[W]=me,z++}r.attributes=Q,r.attributesNum=z,r.index=K}function _(){const E=r.newAttributes;for(let U=0,j=E.length;U<j;U++)E[U]=0}function m(E){f(E,0)}function f(E,U){const j=r.newAttributes,K=r.enabledAttributes,Q=r.attributeDivisors;j[E]=1,K[E]===0&&(i.enableVertexAttribArray(E),K[E]=1),Q[E]!==U&&(i.vertexAttribDivisor(E,U),Q[E]=U)}function L(){const E=r.newAttributes,U=r.enabledAttributes;for(let j=0,K=U.length;j<K;j++)U[j]!==E[j]&&(i.disableVertexAttribArray(j),U[j]=0)}function C(E,U,j,K,Q,re,z){z===!0?i.vertexAttribIPointer(E,U,j,Q,re):i.vertexAttribPointer(E,U,j,K,Q,re)}function M(E,U,j,K){_();const Q=K.attributes,re=j.getAttributes(),z=U.defaultAttributeValues;for(const te in re){const W=re[te];if(W.location>=0){let ae=Q[te];if(ae===void 0&&(te==="instanceMatrix"&&E.instanceMatrix&&(ae=E.instanceMatrix),te==="instanceColor"&&E.instanceColor&&(ae=E.instanceColor)),ae!==void 0){const pe=ae.normalized,me=ae.itemSize,we=e.get(ae);if(we===void 0)continue;const Ce=we.buffer,Se=we.type,G=we.bytesPerElement,J=Se===i.INT||Se===i.UNSIGNED_INT||ae.gpuType===gl;if(ae.isInterleavedBufferAttribute){const ee=ae.data,xe=ee.stride,Ue=ae.offset;if(ee.isInstancedInterleavedBuffer){for(let Ze=0;Ze<W.locationSize;Ze++)f(W.location+Ze,ee.meshPerAttribute);E.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ze=0;Ze<W.locationSize;Ze++)m(W.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let Ze=0;Ze<W.locationSize;Ze++)C(W.location+Ze,me/W.locationSize,Se,pe,xe*G,(Ue+me/W.locationSize*Ze)*G,J)}else{if(ae.isInstancedBufferAttribute){for(let ee=0;ee<W.locationSize;ee++)f(W.location+ee,ae.meshPerAttribute);E.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ee=0;ee<W.locationSize;ee++)m(W.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let ee=0;ee<W.locationSize;ee++)C(W.location+ee,me/W.locationSize,Se,pe,me*G,me/W.locationSize*ee*G,J)}}else if(z!==void 0){const pe=z[te];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(W.location,pe);break;case 3:i.vertexAttrib3fv(W.location,pe);break;case 4:i.vertexAttrib4fv(W.location,pe);break;default:i.vertexAttrib1fv(W.location,pe)}}}}L()}function N(){F();for(const E in n){const U=n[E];for(const j in U){const K=U[j];for(const Q in K)d(K[Q].object),delete K[Q];delete U[j]}delete n[E]}}function I(E){if(n[E.id]===void 0)return;const U=n[E.id];for(const j in U){const K=U[j];for(const Q in K)d(K[Q].object),delete K[Q];delete U[j]}delete n[E.id]}function D(E){for(const U in n){const j=n[U];if(j[E.id]===void 0)continue;const K=j[E.id];for(const Q in K)d(K[Q].object),delete K[Q];delete j[E.id]}}function F(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:T,dispose:N,releaseStatesOfGeometry:I,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:m,disableUnusedAttributes:L}}function Ag(i,e,t){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let p=0;for(let g=0;g<u;g++)p+=d[g];t.update(p,n,1)}function l(c,d,u,h){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],d[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_]*h[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Rg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==In&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const F=D===ur&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==$n&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==kn&&!F)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:L,maxVaryings:C,maxFragmentUniforms:M,vertexTextures:N,maxSamples:I}}function Cg(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Oi,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const p=u.length!==0||h||n!==0||s;return s=h,n=u.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?d(null):c();else{const L=r?0:n,C=L*4;let M=f.clippingState||null;l.value=M,M=d(g,h,C,p);for(let N=0;N!==C;++N)M[N]=t[N];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=L}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,L=h.matrixWorldInverse;a.getNormalMatrix(L),(m===null||m.length<f)&&(m=new Float32Array(f));for(let C=0,M=p;C!==_;++C,M+=4)o.copy(u[C]).applyMatrix4(L,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Lg(i){let e=new WeakMap;function t(o,a){return a===Ca?o.mapping=bs:a===La&&(o.mapping=Es),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ca||a===La)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ef(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const gs=4,Uc=[.125,.215,.35,.446,.526,.582],zi=20,ca=new Eo,Fc=new qe;let ua=null,da=0,ha=0,fa=!1;const Bi=(1+Math.sqrt(5))/2,us=1/Bi,Oc=[new O(-Bi,us,0),new O(Bi,us,0),new O(-us,0,Bi),new O(us,0,Bi),new O(0,Bi,-us),new O(0,Bi,us),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Ig=new O;class Bc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=Ig}=r;ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ua,da,ha),this._renderer.xr.enabled=fa,e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:ur,format:In,colorSpace:gn,depthBuffer:!1},s=kc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pg(r)),this._blurMaterial=Ng(r,e,t)}return s}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,ca)}_sceneToCubeUV(e,t,n,s,r){const l=new nn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(Fc),u.toneMapping=bi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new jn({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),m=new $t(new Ls,_);let f=!1;const L=e.background;L?L.isColor&&(_.color.copy(L),e.background=null,f=!0):(_.color.copy(Fc),f=!0);for(let C=0;C<6;C++){const M=C%3;M===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[C],r.y,r.z)):M===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[C]));const N=this._cubeSize;jr(s,M*N,C>2?N:0,N,N),u.setRenderTarget(s),f&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=L}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===bs||e.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;jr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ca)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Oc[(s-r-1)%Oc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new $t(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*zi-1),_=r/g,m=isFinite(r)?1+Math.floor(d*_):zi;m>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const f=[];let L=0;for(let D=0;D<zi;++D){const F=D/_,T=Math.exp(-F*F/2);f.push(T),D===0?L+=T:D<m&&(L+=2*T)}for(let D=0;D<f.length;D++)f[D]=f[D]/L;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:C}=this;h.dTheta.value=g,h.mipInt.value=C-n;const M=this._sizeLods[s],N=3*M*(s>C-gs?s-C+gs:0),I=4*(this._cubeSize-M);jr(t,N,I,3*M,2*M),l.setRenderTarget(t),l.render(u,ca)}}function Pg(i){const e=[],t=[],n=[];let s=i;const r=i-gs+1+Uc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-gs?l=Uc[o-i+gs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,g=6,_=3,m=2,f=1,L=new Float32Array(_*g*p),C=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let I=0;I<p;I++){const D=I%3*2/3-1,F=I>2?0:-1,T=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];L.set(T,_*g*I),C.set(h,m*g*I);const E=[I,I,I,I,I,I];M.set(E,f*g*I)}const N=new Wt;N.setAttribute("position",new sn(L,_)),N.setAttribute("uv",new sn(C,m)),N.setAttribute("faceIndex",new sn(M,f)),e.push(N),s>gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kc(i,e,t){const n=new Vi(i,e,t);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ng(i,e,t){const n=new Float32Array(zi),s=new O(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function zc(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Hc(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Ol(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ca||l===La,d=l===bs||l===Es;if(c||d){let u=e.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Bc(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&s(p)?(t===null&&(t=new Bc(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ug(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Fg(i,e,t,n){const s={},r=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(u){const h=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const L=p.array;_=p.version;for(let C=0,M=L.length;C<M;C+=3){const N=L[C+0],I=L[C+1],D=L[C+2];h.push(N,I,I,D,D,N)}}else if(g!==void 0){const L=g.array;_=g.version;for(let C=0,M=L.length/3-1;C<M;C+=3){const N=C+0,I=C+1,D=C+2;h.push(N,I,I,D,D,N)}}else return;const m=new(Vu(h)?qu:Yu)(h,1);m.version=_;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function d(u){const h=r.get(u);if(h){const p=u.index;p!==null&&h.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function Og(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,p){i.drawElements(n,p,r,h*o),t.update(p,n,1)}function c(h,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,h*o,g),t.update(p,n,g))}function d(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(h,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,h,0,_,0,g);let f=0;for(let L=0;L<g;L++)f+=p[L]*_[L];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Bg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function kg(i,e,t){const n=new WeakMap,s=new bt;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let h=n.get(a);if(h===void 0||h.count!==u){let E=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var p=E;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],L=a.morphAttributes.normal||[],C=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let N=a.attributes.position.count*M,I=1;N>e.maxTextureSize&&(I=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const D=new Float32Array(N*I*4*u),F=new Gu(D,N,I,u);F.type=kn,F.needsUpdate=!0;const T=M*4;for(let U=0;U<u;U++){const j=f[U],K=L[U],Q=C[U],re=N*I*4*U;for(let z=0;z<j.count;z++){const te=z*T;g===!0&&(s.fromBufferAttribute(j,z),D[re+te+0]=s.x,D[re+te+1]=s.y,D[re+te+2]=s.z,D[re+te+3]=0),_===!0&&(s.fromBufferAttribute(K,z),D[re+te+4]=s.x,D[re+te+5]=s.y,D[re+te+6]=s.z,D[re+te+7]=0),m===!0&&(s.fromBufferAttribute(Q,z),D[re+te+8]=s.x,D[re+te+9]=s.y,D[re+te+10]=s.z,D[re+te+11]=Q.itemSize===4?s.w:1)}}h={count:u,texture:F,size:new nt(N,I)},n.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function zg(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const cd=new Kt,Vc=new td(1,1),ud=new Gu,dd=new Oh,hd=new Ku,Gc=[],Wc=[],Xc=new Float32Array(16),Yc=new Float32Array(9),qc=new Float32Array(4);function Ds(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Gc[s];if(r===void 0&&(r=new Float32Array(s),Gc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function To(i,e){let t=Wc[e];t===void 0&&(t=new Int32Array(e),Wc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Hg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2fv(this.addr,e),Qt(t,e)}}function Gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;i.uniform3fv(this.addr,e),Qt(t,e)}}function Wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4fv(this.addr,e),Qt(t,e)}}function Xg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;qc.set(n),i.uniformMatrix2fv(this.addr,!1,qc),Qt(t,n)}}function Yg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;Yc.set(n),i.uniformMatrix3fv(this.addr,!1,Yc),Qt(t,n)}}function qg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;Xc.set(n),i.uniformMatrix4fv(this.addr,!1,Xc),Qt(t,n)}}function jg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2iv(this.addr,e),Qt(t,e)}}function Kg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3iv(this.addr,e),Qt(t,e)}}function Zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4iv(this.addr,e),Qt(t,e)}}function Jg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2uiv(this.addr,e),Qt(t,e)}}function e_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3uiv(this.addr,e),Qt(t,e)}}function t_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4uiv(this.addr,e),Qt(t,e)}}function n_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Vc.compareFunction=Hu,r=Vc):r=cd,t.setTexture2D(e||r,s)}function i_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||dd,s)}function s_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||hd,s)}function r_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ud,s)}function o_(i){switch(i){case 5126:return Hg;case 35664:return Vg;case 35665:return Gg;case 35666:return Wg;case 35674:return Xg;case 35675:return Yg;case 35676:return qg;case 5124:case 35670:return jg;case 35667:case 35671:return $g;case 35668:case 35672:return Kg;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return Qg;case 36295:return e_;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return s_;case 36289:case 36303:case 36311:case 36292:return r_}}function a_(i,e){i.uniform1fv(this.addr,e)}function l_(i,e){const t=Ds(e,this.size,2);i.uniform2fv(this.addr,t)}function c_(i,e){const t=Ds(e,this.size,3);i.uniform3fv(this.addr,t)}function u_(i,e){const t=Ds(e,this.size,4);i.uniform4fv(this.addr,t)}function d_(i,e){const t=Ds(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function h_(i,e){const t=Ds(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function f_(i,e){const t=Ds(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function p_(i,e){i.uniform1iv(this.addr,e)}function m_(i,e){i.uniform2iv(this.addr,e)}function g_(i,e){i.uniform3iv(this.addr,e)}function __(i,e){i.uniform4iv(this.addr,e)}function y_(i,e){i.uniform1uiv(this.addr,e)}function x_(i,e){i.uniform2uiv(this.addr,e)}function v_(i,e){i.uniform3uiv(this.addr,e)}function M_(i,e){i.uniform4uiv(this.addr,e)}function S_(i,e,t){const n=this.cache,s=e.length,r=To(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||cd,r[o])}function b_(i,e,t){const n=this.cache,s=e.length,r=To(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||dd,r[o])}function E_(i,e,t){const n=this.cache,s=e.length,r=To(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||hd,r[o])}function T_(i,e,t){const n=this.cache,s=e.length,r=To(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ud,r[o])}function w_(i){switch(i){case 5126:return a_;case 35664:return l_;case 35665:return c_;case 35666:return u_;case 35674:return d_;case 35675:return h_;case 35676:return f_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return __;case 5125:return y_;case 36294:return x_;case 36295:return v_;case 36296:return M_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return T_}}class A_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=o_(t.type)}}class R_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=w_(t.type)}}class C_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const pa=/(\w+)(\])?(\[|\.)?/g;function jc(i,e){i.seq.push(e),i.map[e.id]=e}function L_(i,e,t){const n=i.name,s=n.length;for(pa.lastIndex=0;;){const r=pa.exec(n),o=pa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){jc(t,c===void 0?new A_(a,i,e):new R_(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new C_(a),jc(t,u)),t=u}}}class ro{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);L_(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function $c(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const I_=37297;let P_=0;function N_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Kc=new at;function D_(i){ut._getMatrix(Kc,ut.workingColorSpace,i);const e=`mat3( ${Kc.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(i)){case uo:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+N_(i.getShaderSource(e),a)}else return r}function U_(i,e){const t=D_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function F_(i,e){let t;switch(e){case jd:t="Linear";break;case $d:t="Reinhard";break;case Kd:t="Cineon";break;case Zd:t="ACESFilmic";break;case Qd:t="AgX";break;case eh:t="Neutral";break;case Jd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $r=new O;function O_(){ut.getLuminanceCoefficients($r);const i=$r.x.toFixed(4),e=$r.y.toFixed(4),t=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function k_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function z_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Zs(i){return i!==""}function Jc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const H_=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(i){return i.replace(H_,G_)}const V_=new Map;function G_(i,e){let t=lt[e];if(t===void 0){const n=V_.get(e);if(n!==void 0)t=lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return cl(t)}const W_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eu(i){return i.replace(W_,X_)}function X_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Y_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ad?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function q_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case Es:e="ENVMAP_TYPE_CUBE";break;case _o:e="ENVMAP_TYPE_CUBE_UV";break}return e}function j_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function $_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case go:e="ENVMAP_BLENDING_MULTIPLY";break;case Yd:e="ENVMAP_BLENDING_MIX";break;case qd:e="ENVMAP_BLENDING_ADD";break}return e}function K_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Z_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Y_(t),c=q_(t),d=j_(t),u=$_(t),h=K_(t),p=B_(t),g=k_(r),_=s.createProgram();let m,f,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zs).join(`
`),f.length>0&&(f+=`
`)):(m=[tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),f=[tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?lt.tonemapping_pars_fragment:"",t.toneMapping!==bi?F_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,U_("linearToOutputTexel",t.outputColorSpace),O_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zs).join(`
`)),o=cl(o),o=Jc(o,t),o=Qc(o,t),a=cl(a),a=Jc(a,t),a=Qc(a,t),o=eu(o),a=eu(a),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const C=L+m+o,M=L+f+a,N=$c(s,s.VERTEX_SHADER,C),I=$c(s,s.FRAGMENT_SHADER,M);s.attachShader(_,N),s.attachShader(_,I),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function D(U){if(i.debug.checkShaderErrors){const j=s.getProgramInfoLog(_)||"",K=s.getShaderInfoLog(N)||"",Q=s.getShaderInfoLog(I)||"",re=j.trim(),z=K.trim(),te=Q.trim();let W=!0,ae=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,N,I);else{const pe=Zc(s,N,"vertex"),me=Zc(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+re+`
`+pe+`
`+me)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(z===""||te==="")&&(ae=!1);ae&&(U.diagnostics={runnable:W,programLog:re,vertexShader:{log:z,prefix:m},fragmentShader:{log:te,prefix:f}})}s.deleteShader(N),s.deleteShader(I),F=new ro(s,_),T=z_(s,_)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,I_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=I,this}let J_=0;class Q_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new e0(e),t.set(e,n)),n}}class e0{constructor(e){this.id=J_++,this.code=e,this.usedTimes=0}}function t0(i,e,t,n,s,r,o){const a=new Wu,l=new Q_,c=new Set,d=[],u=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,E,U,j,K){const Q=j.fog,re=K.geometry,z=T.isMeshStandardMaterial?j.environment:null,te=(T.isMeshStandardMaterial?t:e).get(T.envMap||z),W=te&&te.mapping===_o?te.image.height:null,ae=g[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const pe=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,me=pe!==void 0?pe.length:0;let we=0;re.morphAttributes.position!==void 0&&(we=1),re.morphAttributes.normal!==void 0&&(we=2),re.morphAttributes.color!==void 0&&(we=3);let Ce,Se,G,J;if(ae){const ot=Xn[ae];Ce=ot.vertexShader,Se=ot.fragmentShader}else Ce=T.vertexShader,Se=T.fragmentShader,l.update(T),G=l.getVertexShaderID(T),J=l.getFragmentShaderID(T);const ee=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ue=K.isInstancedMesh===!0,Ze=K.isBatchedMesh===!0,Ht=!!T.map,mt=!!T.matcap,B=!!te,Ct=!!T.aoMap,je=!!T.lightMap,_t=!!T.bumpMap,Ge=!!T.normalMap,Dt=!!T.displacementMap,Pe=!!T.emissiveMap,rt=!!T.metalnessMap,Xt=!!T.roughnessMap,kt=T.anisotropy>0,P=T.clearcoat>0,S=T.dispersion>0,X=T.iridescence>0,se=T.sheen>0,le=T.transmission>0,ne=kt&&!!T.anisotropyMap,He=P&&!!T.clearcoatMap,ge=P&&!!T.clearcoatNormalMap,Oe=P&&!!T.clearcoatRoughnessMap,Be=X&&!!T.iridescenceMap,he=X&&!!T.iridescenceThicknessMap,Ee=se&&!!T.sheenColorMap,Je=se&&!!T.sheenRoughnessMap,ke=!!T.specularMap,ve=!!T.specularColorMap,st=!!T.specularIntensityMap,k=le&&!!T.transmissionMap,fe=le&&!!T.thicknessMap,_e=!!T.gradientMap,Le=!!T.alphaMap,ue=T.alphaTest>0,oe=!!T.alphaHash,Fe=!!T.extensions;let it=bi;T.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(it=i.toneMapping);const Lt={shaderID:ae,shaderType:T.type,shaderName:T.name,vertexShader:Ce,fragmentShader:Se,defines:T.defines,customVertexShaderID:G,customFragmentShaderID:J,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ze,batchingColor:Ze&&K._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&K.instanceColor!==null,instancingMorph:Ue&&K.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:gn,alphaToCoverage:!!T.alphaToCoverage,map:Ht,matcap:mt,envMap:B,envMapMode:B&&te.mapping,envMapCubeUVHeight:W,aoMap:Ct,lightMap:je,bumpMap:_t,normalMap:Ge,displacementMap:h&&Dt,emissiveMap:Pe,normalMapObjectSpace:Ge&&T.normalMapType===oh,normalMapTangentSpace:Ge&&T.normalMapType===yo,metalnessMap:rt,roughnessMap:Xt,anisotropy:kt,anisotropyMap:ne,clearcoat:P,clearcoatMap:He,clearcoatNormalMap:ge,clearcoatRoughnessMap:Oe,dispersion:S,iridescence:X,iridescenceMap:Be,iridescenceThicknessMap:he,sheen:se,sheenColorMap:Ee,sheenRoughnessMap:Je,specularMap:ke,specularColorMap:ve,specularIntensityMap:st,transmission:le,transmissionMap:k,thicknessMap:fe,gradientMap:_e,opaque:T.transparent===!1&&T.blending===Nn&&T.alphaToCoverage===!1,alphaMap:Le,alphaTest:ue,alphaHash:oe,combine:T.combine,mapUv:Ht&&_(T.map.channel),aoMapUv:Ct&&_(T.aoMap.channel),lightMapUv:je&&_(T.lightMap.channel),bumpMapUv:_t&&_(T.bumpMap.channel),normalMapUv:Ge&&_(T.normalMap.channel),displacementMapUv:Dt&&_(T.displacementMap.channel),emissiveMapUv:Pe&&_(T.emissiveMap.channel),metalnessMapUv:rt&&_(T.metalnessMap.channel),roughnessMapUv:Xt&&_(T.roughnessMap.channel),anisotropyMapUv:ne&&_(T.anisotropyMap.channel),clearcoatMapUv:He&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:ge&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:he&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Je&&_(T.sheenRoughnessMap.channel),specularMapUv:ke&&_(T.specularMap.channel),specularColorMapUv:ve&&_(T.specularColorMap.channel),specularIntensityMapUv:st&&_(T.specularIntensityMap.channel),transmissionMapUv:k&&_(T.transmissionMap.channel),thicknessMapUv:fe&&_(T.thicknessMap.channel),alphaMapUv:Le&&_(T.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Ge||kt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!re.attributes.uv&&(Ht||Le),fog:!!Q,useFog:T.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:K.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:we,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:Ht&&T.map.isVideoTexture===!0&&ut.getTransfer(T.map.colorSpace)===Pt,decodeVideoTextureEmissive:Pe&&T.emissiveMap.isVideoTexture===!0&&ut.getTransfer(T.emissiveMap.colorSpace)===Pt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Sn,flipSided:T.side===xn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Fe&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&T.extensions.multiDraw===!0||Ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function f(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)E.push(U),E.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(L(E,T),C(E,T),E.push(i.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function L(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function C(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function M(T){const E=g[T.type];let U;if(E){const j=Xn[E];U=Kh.clone(j.uniforms)}else U=T.uniforms;return U}function N(T,E){let U;for(let j=0,K=d.length;j<K;j++){const Q=d[j];if(Q.cacheKey===E){U=Q,++U.usedTimes;break}}return U===void 0&&(U=new Z_(i,E,T,r),d.push(U)),U}function I(T){if(--T.usedTimes===0){const E=d.indexOf(T);d[E]=d[d.length-1],d.pop(),T.destroy()}}function D(T){l.remove(T)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:N,releaseProgram:I,releaseShaderCache:D,programs:d,dispose:F}}function n0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function i0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function nu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function iu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,h,p,g,_,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:h,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,h,p,g,_,m){const f=o(u,h,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,h,p,g,_,m){const f=o(u,h,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,h){t.length>1&&t.sort(u||i0),n.length>1&&n.sort(h||nu),s.length>1&&s.sort(h||nu)}function d(){for(let u=e,h=i.length;u<h;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:d,sort:c}}function s0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new iu,i.set(n,[o])):s>=r.length?(o=new iu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function r0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new qe};break;case"SpotLight":t={position:new O,direction:new O,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function o0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let a0=0;function l0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function c0(i){const e=new r0,t=o0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new Qe,o=new Qe;function a(c){let d=0,u=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,L=0,C=0,M=0,N=0,I=0,D=0;c.sort(l0);for(let T=0,E=c.length;T<E;T++){const U=c[T],j=U.color,K=U.intensity,Q=U.distance,re=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=j.r*K,u+=j.g*K,h+=j.b*K;else if(U.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(U.sh.coefficients[z],K);D++}else if(U.isDirectionalLight){const z=e.get(U);if(z.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const te=U.shadow,W=t.get(U);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=re,n.directionalShadowMatrix[p]=U.shadow.matrix,L++}n.directional[p]=z,p++}else if(U.isSpotLight){const z=e.get(U);z.position.setFromMatrixPosition(U.matrixWorld),z.color.copy(j).multiplyScalar(K),z.distance=Q,z.coneCos=Math.cos(U.angle),z.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),z.decay=U.decay,n.spot[_]=z;const te=U.shadow;if(U.map&&(n.spotLightMap[N]=U.map,N++,te.updateMatrices(U),U.castShadow&&I++),n.spotLightMatrix[_]=te.matrix,U.castShadow){const W=t.get(U);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=re,M++}_++}else if(U.isRectAreaLight){const z=e.get(U);z.color.copy(j).multiplyScalar(K),z.halfWidth.set(U.width*.5,0,0),z.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=z,m++}else if(U.isPointLight){const z=e.get(U);if(z.color.copy(U.color).multiplyScalar(U.intensity),z.distance=U.distance,z.decay=U.decay,U.castShadow){const te=U.shadow,W=t.get(U);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,W.shadowCameraNear=te.camera.near,W.shadowCameraFar=te.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=re,n.pointShadowMatrix[g]=U.shadow.matrix,C++}n.point[g]=z,g++}else if(U.isHemisphereLight){const z=e.get(U);z.skyColor.copy(U.color).multiplyScalar(K),z.groundColor.copy(U.groundColor).multiplyScalar(K),n.hemi[f]=z,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;const F=n.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==f||F.numDirectionalShadows!==L||F.numPointShadows!==C||F.numSpotShadows!==M||F.numSpotMaps!==N||F.numLightProbes!==D)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=L,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=M+N-I,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=D,F.directionalLength=p,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=f,F.numDirectionalShadows=L,F.numPointShadows=C,F.numSpotShadows=M,F.numSpotMaps=N,F.numLightProbes=D,n.version=a0++)}function l(c,d){let u=0,h=0,p=0,g=0,_=0;const m=d.matrixWorldInverse;for(let f=0,L=c.length;f<L;f++){const C=c[f];if(C.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(C.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(C.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(C.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(C.width*.5,0,0),M.halfHeight.set(0,C.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(C.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(m),h++}else if(C.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(C.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function su(i){const e=new c0(i),t=[],n=[];function s(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function u0(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new su(i),e.set(s,[a])):r>=o.length?(a=new su(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const d0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function f0(i,e,t){let n=new Rl;const s=new nt,r=new nt,o=new bt,a=new pf({depthPacking:rh}),l=new mf,c={},d=t.maxTextureSize,u={[Zt]:xn,[xn]:Zt,[Sn]:Sn},h=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:d0,fragmentShader:h0}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $t(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lu;let f=this.type;this.render=function(I,D,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const T=i.getRenderTarget(),E=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),j=i.state;j.setBlending(Si),j.buffers.depth.getReversed()?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const K=f!==li&&this.type===li,Q=f===li&&this.type!==li;for(let re=0,z=I.length;re<z;re++){const te=I[re],W=te.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ae=W.getFrameExtents();if(s.multiply(ae),r.copy(W.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ae.x),s.x=r.x*ae.x,W.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ae.y),s.y=r.y*ae.y,W.mapSize.y=r.y)),W.map===null||K===!0||Q===!0){const me=this.type!==li?{minFilter:pn,magFilter:pn}:{};W.map!==null&&W.map.dispose(),W.map=new Vi(s.x,s.y,me),W.map.texture.name=te.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const pe=W.getViewportCount();for(let me=0;me<pe;me++){const we=W.getViewport(me);o.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),j.viewport(o),W.updateMatrices(te,me),n=W.getFrustum(),M(D,F,W.camera,te,this.type)}W.isPointLightShadow!==!0&&this.type===li&&L(W,F),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(T,E,U)};function L(I,D){const F=e.update(_);h.defines.VSM_SAMPLES!==I.blurSamples&&(h.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Vi(s.x,s.y)),h.uniforms.shadow_pass.value=I.map.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(D,null,F,h,_,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(D,null,F,p,_,null)}function C(I,D,F,T){let E=null;const U=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(U!==void 0)E=U;else if(E=F.isPointLight===!0?l:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const j=E.uuid,K=D.uuid;let Q=c[j];Q===void 0&&(Q={},c[j]=Q);let re=Q[K];re===void 0&&(re=E.clone(),Q[K]=re,D.addEventListener("dispose",N)),E=re}if(E.visible=D.visible,E.wireframe=D.wireframe,T===li?E.side=D.shadowSide!==null?D.shadowSide:D.side:E.side=D.shadowSide!==null?D.shadowSide:u[D.side],E.alphaMap=D.alphaMap,E.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,E.map=D.map,E.clipShadows=D.clipShadows,E.clippingPlanes=D.clippingPlanes,E.clipIntersection=D.clipIntersection,E.displacementMap=D.displacementMap,E.displacementScale=D.displacementScale,E.displacementBias=D.displacementBias,E.wireframeLinewidth=D.wireframeLinewidth,E.linewidth=D.linewidth,F.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const j=i.properties.get(E);j.light=F}return E}function M(I,D,F,T,E){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&E===li)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);const K=e.update(I),Q=I.material;if(Array.isArray(Q)){const re=K.groups;for(let z=0,te=re.length;z<te;z++){const W=re[z],ae=Q[W.materialIndex];if(ae&&ae.visible){const pe=C(I,ae,T,E);I.onBeforeShadow(i,I,D,F,K,pe,W),i.renderBufferDirect(F,null,K,pe,I,W),I.onAfterShadow(i,I,D,F,K,pe,W)}}}else if(Q.visible){const re=C(I,Q,T,E);I.onBeforeShadow(i,I,D,F,K,re,null),i.renderBufferDirect(F,null,K,re,I,null),I.onAfterShadow(i,I,D,F,K,re,null)}}const j=I.children;for(let K=0,Q=j.length;K<Q;K++)M(j[K],D,F,T,E)}function N(I){I.target.removeEventListener("dispose",N);for(const F in c){const T=c[F],E=I.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const p0={[Sa]:ba,[Ea]:Aa,[Ta]:Ra,[Ss]:wa,[ba]:Sa,[Aa]:Ea,[Ra]:Ta,[wa]:Ss};function m0(i,e){function t(){let k=!1;const fe=new bt;let _e=null;const Le=new bt(0,0,0,0);return{setMask:function(ue){_e!==ue&&!k&&(i.colorMask(ue,ue,ue,ue),_e=ue)},setLocked:function(ue){k=ue},setClear:function(ue,oe,Fe,it,Lt){Lt===!0&&(ue*=it,oe*=it,Fe*=it),fe.set(ue,oe,Fe,it),Le.equals(fe)===!1&&(i.clearColor(ue,oe,Fe,it),Le.copy(fe))},reset:function(){k=!1,_e=null,Le.set(-1,0,0,0)}}}function n(){let k=!1,fe=!1,_e=null,Le=null,ue=null;return{setReversed:function(oe){if(fe!==oe){const Fe=e.get("EXT_clip_control");oe?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),fe=oe;const it=ue;ue=null,this.setClear(it)}},getReversed:function(){return fe},setTest:function(oe){oe?ee(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(oe){_e!==oe&&!k&&(i.depthMask(oe),_e=oe)},setFunc:function(oe){if(fe&&(oe=p0[oe]),Le!==oe){switch(oe){case Sa:i.depthFunc(i.NEVER);break;case ba:i.depthFunc(i.ALWAYS);break;case Ea:i.depthFunc(i.LESS);break;case Ss:i.depthFunc(i.LEQUAL);break;case Ta:i.depthFunc(i.EQUAL);break;case wa:i.depthFunc(i.GEQUAL);break;case Aa:i.depthFunc(i.GREATER);break;case Ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Le=oe}},setLocked:function(oe){k=oe},setClear:function(oe){ue!==oe&&(fe&&(oe=1-oe),i.clearDepth(oe),ue=oe)},reset:function(){k=!1,_e=null,Le=null,ue=null,fe=!1}}}function s(){let k=!1,fe=null,_e=null,Le=null,ue=null,oe=null,Fe=null,it=null,Lt=null;return{setTest:function(ot){k||(ot?ee(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(ot){fe!==ot&&!k&&(i.stencilMask(ot),fe=ot)},setFunc:function(ot,En,Tn){(_e!==ot||Le!==En||ue!==Tn)&&(i.stencilFunc(ot,En,Tn),_e=ot,Le=En,ue=Tn)},setOp:function(ot,En,Tn){(oe!==ot||Fe!==En||it!==Tn)&&(i.stencilOp(ot,En,Tn),oe=ot,Fe=En,it=Tn)},setLocked:function(ot){k=ot},setClear:function(ot){Lt!==ot&&(i.clearStencil(ot),Lt=ot)},reset:function(){k=!1,fe=null,_e=null,Le=null,ue=null,oe=null,Fe=null,it=null,Lt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let d={},u={},h=new WeakMap,p=[],g=null,_=!1,m=null,f=null,L=null,C=null,M=null,N=null,I=null,D=new qe(0,0,0),F=0,T=!1,E=null,U=null,j=null,K=null,Q=null;const re=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,te=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=te>=1):W.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=te>=2);let ae=null,pe={};const me=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),Ce=new bt().fromArray(me),Se=new bt().fromArray(we);function G(k,fe,_e,Le){const ue=new Uint8Array(4),oe=i.createTexture();i.bindTexture(k,oe),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<_e;Fe++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(fe+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return oe}const J={};J[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(i.DEPTH_TEST),o.setFunc(Ss),_t(!1),Ge(zl),ee(i.CULL_FACE),Ct(Si);function ee(k){d[k]!==!0&&(i.enable(k),d[k]=!0)}function xe(k){d[k]!==!1&&(i.disable(k),d[k]=!1)}function Ue(k,fe){return u[k]!==fe?(i.bindFramebuffer(k,fe),u[k]=fe,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=fe),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ze(k,fe){let _e=p,Le=!1;if(k){_e=h.get(fe),_e===void 0&&(_e=[],h.set(fe,_e));const ue=k.textures;if(_e.length!==ue.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Fe=ue.length;oe<Fe;oe++)_e[oe]=i.COLOR_ATTACHMENT0+oe;_e.length=ue.length,Le=!0}}else _e[0]!==i.BACK&&(_e[0]=i.BACK,Le=!0);Le&&i.drawBuffers(_e)}function Ht(k){return g!==k?(i.useProgram(k),g=k,!0):!1}const mt={[ki]:i.FUNC_ADD,[Cd]:i.FUNC_SUBTRACT,[Ld]:i.FUNC_REVERSE_SUBTRACT};mt[Id]=i.MIN,mt[Pd]=i.MAX;const B={[Nd]:i.ZERO,[Dd]:i.ONE,[Ud]:i.SRC_COLOR,[va]:i.SRC_ALPHA,[Hd]:i.SRC_ALPHA_SATURATE,[kd]:i.DST_COLOR,[Od]:i.DST_ALPHA,[Fd]:i.ONE_MINUS_SRC_COLOR,[Ma]:i.ONE_MINUS_SRC_ALPHA,[zd]:i.ONE_MINUS_DST_COLOR,[Bd]:i.ONE_MINUS_DST_ALPHA,[Vd]:i.CONSTANT_COLOR,[Gd]:i.ONE_MINUS_CONSTANT_COLOR,[Wd]:i.CONSTANT_ALPHA,[Xd]:i.ONE_MINUS_CONSTANT_ALPHA};function Ct(k,fe,_e,Le,ue,oe,Fe,it,Lt,ot){if(k===Si){_===!0&&(xe(i.BLEND),_=!1);return}if(_===!1&&(ee(i.BLEND),_=!0),k!==Rd){if(k!==m||ot!==T){if((f!==ki||M!==ki)&&(i.blendEquation(i.FUNC_ADD),f=ki,M=ki),ot)switch(k){case Nn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lo:i.blendFunc(i.ONE,i.ONE);break;case Hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Nn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Hl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}L=null,C=null,N=null,I=null,D.set(0,0,0),F=0,m=k,T=ot}return}ue=ue||fe,oe=oe||_e,Fe=Fe||Le,(fe!==f||ue!==M)&&(i.blendEquationSeparate(mt[fe],mt[ue]),f=fe,M=ue),(_e!==L||Le!==C||oe!==N||Fe!==I)&&(i.blendFuncSeparate(B[_e],B[Le],B[oe],B[Fe]),L=_e,C=Le,N=oe,I=Fe),(it.equals(D)===!1||Lt!==F)&&(i.blendColor(it.r,it.g,it.b,Lt),D.copy(it),F=Lt),m=k,T=!1}function je(k,fe){k.side===Sn?xe(i.CULL_FACE):ee(i.CULL_FACE);let _e=k.side===xn;fe&&(_e=!_e),_t(_e),k.blending===Nn&&k.transparent===!1?Ct(Si):Ct(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const Le=k.stencilWrite;a.setTest(Le),Le&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Pe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(k){E!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),E=k)}function Ge(k){k!==Td?(ee(i.CULL_FACE),k!==U&&(k===zl?i.cullFace(i.BACK):k===wd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),U=k}function Dt(k){k!==j&&(z&&i.lineWidth(k),j=k)}function Pe(k,fe,_e){k?(ee(i.POLYGON_OFFSET_FILL),(K!==fe||Q!==_e)&&(i.polygonOffset(fe,_e),K=fe,Q=_e)):xe(i.POLYGON_OFFSET_FILL)}function rt(k){k?ee(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function Xt(k){k===void 0&&(k=i.TEXTURE0+re-1),ae!==k&&(i.activeTexture(k),ae=k)}function kt(k,fe,_e){_e===void 0&&(ae===null?_e=i.TEXTURE0+re-1:_e=ae);let Le=pe[_e];Le===void 0&&(Le={type:void 0,texture:void 0},pe[_e]=Le),(Le.type!==k||Le.texture!==fe)&&(ae!==_e&&(i.activeTexture(_e),ae=_e),i.bindTexture(k,fe||J[k]),Le.type=k,Le.texture=fe)}function P(){const k=pe[ae];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function X(){try{i.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{i.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{i.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{i.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function He(){try{i.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{i.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Oe(){try{i.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Be(){try{i.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{i.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(k){Ce.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Ce.copy(k))}function Je(k){Se.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Se.copy(k))}function ke(k,fe){let _e=c.get(fe);_e===void 0&&(_e=new WeakMap,c.set(fe,_e));let Le=_e.get(k);Le===void 0&&(Le=i.getUniformBlockIndex(fe,k.name),_e.set(k,Le))}function ve(k,fe){const Le=c.get(fe).get(k);l.get(fe)!==Le&&(i.uniformBlockBinding(fe,Le,k.__bindingPointIndex),l.set(fe,Le))}function st(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ae=null,pe={},u={},h=new WeakMap,p=[],g=null,_=!1,m=null,f=null,L=null,C=null,M=null,N=null,I=null,D=new qe(0,0,0),F=0,T=!1,E=null,U=null,j=null,K=null,Q=null,Ce.set(0,0,i.canvas.width,i.canvas.height),Se.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:xe,bindFramebuffer:Ue,drawBuffers:Ze,useProgram:Ht,setBlending:Ct,setMaterial:je,setFlipSided:_t,setCullFace:Ge,setLineWidth:Dt,setPolygonOffset:Pe,setScissorTest:rt,activeTexture:Xt,bindTexture:kt,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:X,texImage2D:Be,texImage3D:he,updateUBOMapping:ke,uniformBlockBinding:ve,texStorage2D:ge,texStorage3D:Oe,texSubImage2D:se,texSubImage3D:le,compressedTexSubImage2D:ne,compressedTexSubImage3D:He,scissor:Ee,viewport:Je,reset:st}}function g0(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,d=new WeakMap;let u;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return p?new OffscreenCanvas(P,S):or("canvas")}function _(P,S,X){let se=1;const le=kt(P);if((le.width>X||le.height>X)&&(se=X/Math.max(le.width,le.height)),se<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ne=Math.floor(se*le.width),He=Math.floor(se*le.height);u===void 0&&(u=g(ne,He));const ge=S?g(ne,He):u;return ge.width=ne,ge.height=He,ge.getContext("2d").drawImage(P,0,0,ne,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ne+"x"+He+")."),ge}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),P;return P}function m(P){return P.generateMipmaps}function f(P){i.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(P,S,X,se,le=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ne=S;if(S===i.RED&&(X===i.FLOAT&&(ne=i.R32F),X===i.HALF_FLOAT&&(ne=i.R16F),X===i.UNSIGNED_BYTE&&(ne=i.R8)),S===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ne=i.R8UI),X===i.UNSIGNED_SHORT&&(ne=i.R16UI),X===i.UNSIGNED_INT&&(ne=i.R32UI),X===i.BYTE&&(ne=i.R8I),X===i.SHORT&&(ne=i.R16I),X===i.INT&&(ne=i.R32I)),S===i.RG&&(X===i.FLOAT&&(ne=i.RG32F),X===i.HALF_FLOAT&&(ne=i.RG16F),X===i.UNSIGNED_BYTE&&(ne=i.RG8)),S===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ne=i.RG8UI),X===i.UNSIGNED_SHORT&&(ne=i.RG16UI),X===i.UNSIGNED_INT&&(ne=i.RG32UI),X===i.BYTE&&(ne=i.RG8I),X===i.SHORT&&(ne=i.RG16I),X===i.INT&&(ne=i.RG32I)),S===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),X===i.UNSIGNED_INT&&(ne=i.RGB32UI),X===i.BYTE&&(ne=i.RGB8I),X===i.SHORT&&(ne=i.RGB16I),X===i.INT&&(ne=i.RGB32I)),S===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),X===i.UNSIGNED_INT&&(ne=i.RGBA32UI),X===i.BYTE&&(ne=i.RGBA8I),X===i.SHORT&&(ne=i.RGBA16I),X===i.INT&&(ne=i.RGBA32I)),S===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),S===i.RGBA){const He=le?uo:ut.getTransfer(se);X===i.FLOAT&&(ne=i.RGBA32F),X===i.HALF_FLOAT&&(ne=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ne=He===Pt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function M(P,S){let X;return P?S===null||S===Hi||S===tr?X=i.DEPTH24_STENCIL8:S===kn?X=i.DEPTH32F_STENCIL8:S===er&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Hi||S===tr?X=i.DEPTH_COMPONENT24:S===kn?X=i.DEPTH_COMPONENT32F:S===er&&(X=i.DEPTH_COMPONENT16),X}function N(P,S){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==pn&&P.minFilter!==an?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function I(P){const S=P.target;S.removeEventListener("dispose",I),F(S),S.isVideoTexture&&d.delete(S)}function D(P){const S=P.target;S.removeEventListener("dispose",D),E(S)}function F(P){const S=n.get(P);if(S.__webglInit===void 0)return;const X=P.source,se=h.get(X);if(se){const le=se[S.__cacheKey];le.usedTimes--,le.usedTimes===0&&T(P),Object.keys(se).length===0&&h.delete(X)}n.remove(P)}function T(P){const S=n.get(P);i.deleteTexture(S.__webglTexture);const X=P.source,se=h.get(X);delete se[S.__cacheKey],o.memory.textures--}function E(P){const S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(S.__webglFramebuffer[se]))for(let le=0;le<S.__webglFramebuffer[se].length;le++)i.deleteFramebuffer(S.__webglFramebuffer[se][le]);else i.deleteFramebuffer(S.__webglFramebuffer[se]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[se])}else{if(Array.isArray(S.__webglFramebuffer))for(let se=0;se<S.__webglFramebuffer.length;se++)i.deleteFramebuffer(S.__webglFramebuffer[se]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let se=0;se<S.__webglColorRenderbuffer.length;se++)S.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[se]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const X=P.textures;for(let se=0,le=X.length;se<le;se++){const ne=n.get(X[se]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(X[se])}n.remove(P)}let U=0;function j(){U=0}function K(){const P=U;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),U+=1,P}function Q(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function re(P,S){const X=n.get(P);if(P.isVideoTexture&&rt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&X.__version!==P.version){const se=P.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(X,P,S);return}}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+S)}function z(P,S){const X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){J(X,P,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+S)}function te(P,S){const X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){J(X,P,S);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+S)}function W(P,S){const X=n.get(P);if(P.version>0&&X.__version!==P.version){ee(X,P,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+S)}const ae={[Yn]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[co]:i.MIRRORED_REPEAT},pe={[pn]:i.NEAREST,[Pu]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Jr]:i.LINEAR_MIPMAP_NEAREST,[Bn]:i.LINEAR_MIPMAP_LINEAR},me={[ah]:i.NEVER,[fh]:i.ALWAYS,[lh]:i.LESS,[Hu]:i.LEQUAL,[ch]:i.EQUAL,[hh]:i.GEQUAL,[uh]:i.GREATER,[dh]:i.NOTEQUAL};function we(P,S){if(S.type===kn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===an||S.magFilter===Jr||S.magFilter===Ks||S.magFilter===Bn||S.minFilter===an||S.minFilter===Jr||S.minFilter===Ks||S.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ae[S.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ae[S.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ae[S.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,pe[S.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,pe[S.minFilter]),S.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===pn||S.minFilter!==Ks&&S.minFilter!==Bn||S.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ce(P,S){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",I));const se=S.source;let le=h.get(se);le===void 0&&(le={},h.set(se,le));const ne=Q(S);if(ne!==P.__cacheKey){le[ne]===void 0&&(le[ne]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),le[ne].usedTimes++;const He=le[P.__cacheKey];He!==void 0&&(le[P.__cacheKey].usedTimes--,He.usedTimes===0&&T(S)),P.__cacheKey=ne,P.__webglTexture=le[ne].texture}return X}function Se(P,S,X){return Math.floor(Math.floor(P/X)/S)}function G(P,S,X,se){const ne=P.updateRanges;if(ne.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,X,se,S.data);else{ne.sort((he,Ee)=>he.start-Ee.start);let He=0;for(let he=1;he<ne.length;he++){const Ee=ne[He],Je=ne[he],ke=Ee.start+Ee.count,ve=Se(Je.start,S.width,4),st=Se(Ee.start,S.width,4);Je.start<=ke+1&&ve===st&&Se(Je.start+Je.count-1,S.width,4)===ve?Ee.count=Math.max(Ee.count,Je.start+Je.count-Ee.start):(++He,ne[He]=Je)}ne.length=He+1;const ge=i.getParameter(i.UNPACK_ROW_LENGTH),Oe=i.getParameter(i.UNPACK_SKIP_PIXELS),Be=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let he=0,Ee=ne.length;he<Ee;he++){const Je=ne[he],ke=Math.floor(Je.start/4),ve=Math.ceil(Je.count/4),st=ke%S.width,k=Math.floor(ke/S.width),fe=ve,_e=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,st),i.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,st,k,fe,_e,X,se,S.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ge),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Be)}}function J(P,S,X){let se=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(se=i.TEXTURE_3D);const le=Ce(P,S),ne=S.source;t.bindTexture(se,P.__webglTexture,i.TEXTURE0+X);const He=n.get(ne);if(ne.version!==He.__version||le===!0){t.activeTexture(i.TEXTURE0+X);const ge=ut.getPrimaries(ut.workingColorSpace),Oe=S.colorSpace===Mi?null:ut.getPrimaries(S.colorSpace),Be=S.colorSpace===Mi||ge===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let he=_(S.image,!1,s.maxTextureSize);he=Xt(S,he);const Ee=r.convert(S.format,S.colorSpace),Je=r.convert(S.type);let ke=C(S.internalFormat,Ee,Je,S.colorSpace,S.isVideoTexture);we(se,S);let ve;const st=S.mipmaps,k=S.isVideoTexture!==!0,fe=He.__version===void 0||le===!0,_e=ne.dataReady,Le=N(S,he);if(S.isDepthTexture)ke=M(S.format===ir,S.type),fe&&(k?t.texStorage2D(i.TEXTURE_2D,1,ke,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,ke,he.width,he.height,0,Ee,Je,null));else if(S.isDataTexture)if(st.length>0){k&&fe&&t.texStorage2D(i.TEXTURE_2D,Le,ke,st[0].width,st[0].height);for(let ue=0,oe=st.length;ue<oe;ue++)ve=st[ue],k?_e&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ve.width,ve.height,Ee,Je,ve.data):t.texImage2D(i.TEXTURE_2D,ue,ke,ve.width,ve.height,0,Ee,Je,ve.data);S.generateMipmaps=!1}else k?(fe&&t.texStorage2D(i.TEXTURE_2D,Le,ke,he.width,he.height),_e&&G(S,he,Ee,Je)):t.texImage2D(i.TEXTURE_2D,0,ke,he.width,he.height,0,Ee,Je,he.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){k&&fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,ke,st[0].width,st[0].height,he.depth);for(let ue=0,oe=st.length;ue<oe;ue++)if(ve=st[ue],S.format!==In)if(Ee!==null)if(k){if(_e)if(S.layerUpdates.size>0){const Fe=Dc(ve.width,ve.height,S.format,S.type);for(const it of S.layerUpdates){const Lt=ve.data.subarray(it*Fe/ve.data.BYTES_PER_ELEMENT,(it+1)*Fe/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,it,ve.width,ve.height,1,Ee,Lt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,ve.width,ve.height,he.depth,Ee,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,ke,ve.width,ve.height,he.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?_e&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,ve.width,ve.height,he.depth,Ee,Je,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,ke,ve.width,ve.height,he.depth,0,Ee,Je,ve.data)}else{k&&fe&&t.texStorage2D(i.TEXTURE_2D,Le,ke,st[0].width,st[0].height);for(let ue=0,oe=st.length;ue<oe;ue++)ve=st[ue],S.format!==In?Ee!==null?k?_e&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,ve.width,ve.height,Ee,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,ke,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?_e&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ve.width,ve.height,Ee,Je,ve.data):t.texImage2D(i.TEXTURE_2D,ue,ke,ve.width,ve.height,0,Ee,Je,ve.data)}else if(S.isDataArrayTexture)if(k){if(fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,ke,he.width,he.height,he.depth),_e)if(S.layerUpdates.size>0){const ue=Dc(he.width,he.height,S.format,S.type);for(const oe of S.layerUpdates){const Fe=he.data.subarray(oe*ue/he.data.BYTES_PER_ELEMENT,(oe+1)*ue/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,he.width,he.height,1,Ee,Je,Fe)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ee,Je,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ke,he.width,he.height,he.depth,0,Ee,Je,he.data);else if(S.isData3DTexture)k?(fe&&t.texStorage3D(i.TEXTURE_3D,Le,ke,he.width,he.height,he.depth),_e&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ee,Je,he.data)):t.texImage3D(i.TEXTURE_3D,0,ke,he.width,he.height,he.depth,0,Ee,Je,he.data);else if(S.isFramebufferTexture){if(fe)if(k)t.texStorage2D(i.TEXTURE_2D,Le,ke,he.width,he.height);else{let ue=he.width,oe=he.height;for(let Fe=0;Fe<Le;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,ke,ue,oe,0,Ee,Je,null),ue>>=1,oe>>=1}}else if(st.length>0){if(k&&fe){const ue=kt(st[0]);t.texStorage2D(i.TEXTURE_2D,Le,ke,ue.width,ue.height)}for(let ue=0,oe=st.length;ue<oe;ue++)ve=st[ue],k?_e&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Ee,Je,ve):t.texImage2D(i.TEXTURE_2D,ue,ke,Ee,Je,ve);S.generateMipmaps=!1}else if(k){if(fe){const ue=kt(he);t.texStorage2D(i.TEXTURE_2D,Le,ke,ue.width,ue.height)}_e&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Je,he)}else t.texImage2D(i.TEXTURE_2D,0,ke,Ee,Je,he);m(S)&&f(se),He.__version=ne.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ee(P,S,X){if(S.image.length!==6)return;const se=Ce(P,S),le=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+X);const ne=n.get(le);if(le.version!==ne.__version||se===!0){t.activeTexture(i.TEXTURE0+X);const He=ut.getPrimaries(ut.workingColorSpace),ge=S.colorSpace===Mi?null:ut.getPrimaries(S.colorSpace),Oe=S.colorSpace===Mi||He===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const Be=S.isCompressedTexture||S.image[0].isCompressedTexture,he=S.image[0]&&S.image[0].isDataTexture,Ee=[];for(let oe=0;oe<6;oe++)!Be&&!he?Ee[oe]=_(S.image[oe],!0,s.maxCubemapSize):Ee[oe]=he?S.image[oe].image:S.image[oe],Ee[oe]=Xt(S,Ee[oe]);const Je=Ee[0],ke=r.convert(S.format,S.colorSpace),ve=r.convert(S.type),st=C(S.internalFormat,ke,ve,S.colorSpace),k=S.isVideoTexture!==!0,fe=ne.__version===void 0||se===!0,_e=le.dataReady;let Le=N(S,Je);we(i.TEXTURE_CUBE_MAP,S);let ue;if(Be){k&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,st,Je.width,Je.height);for(let oe=0;oe<6;oe++){ue=Ee[oe].mipmaps;for(let Fe=0;Fe<ue.length;Fe++){const it=ue[Fe];S.format!==In?ke!==null?k?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,0,0,it.width,it.height,ke,it.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,st,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,0,0,it.width,it.height,ke,ve,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,st,it.width,it.height,0,ke,ve,it.data)}}}else{if(ue=S.mipmaps,k&&fe){ue.length>0&&Le++;const oe=kt(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,st,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(he){k?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ee[oe].width,Ee[oe].height,ke,ve,Ee[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,st,Ee[oe].width,Ee[oe].height,0,ke,ve,Ee[oe].data);for(let Fe=0;Fe<ue.length;Fe++){const Lt=ue[Fe].image[oe].image;k?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,0,0,Lt.width,Lt.height,ke,ve,Lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,st,Lt.width,Lt.height,0,ke,ve,Lt.data)}}else{k?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ke,ve,Ee[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,st,ke,ve,Ee[oe]);for(let Fe=0;Fe<ue.length;Fe++){const it=ue[Fe];k?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,0,0,ke,ve,it.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,st,ke,ve,it.image[oe])}}}m(S)&&f(i.TEXTURE_CUBE_MAP),ne.__version=le.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function xe(P,S,X,se,le,ne){const He=r.convert(X.format,X.colorSpace),ge=r.convert(X.type),Oe=C(X.internalFormat,He,ge,X.colorSpace),Be=n.get(S),he=n.get(X);if(he.__renderTarget=S,!Be.__hasExternalTextures){const Ee=Math.max(1,S.width>>ne),Je=Math.max(1,S.height>>ne);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,ne,Oe,Ee,Je,S.depth,0,He,ge,null):t.texImage2D(le,ne,Oe,Ee,Je,0,He,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Pe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,le,he.__webglTexture,0,Dt(S)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,le,he.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(P,S,X){if(i.bindRenderbuffer(i.RENDERBUFFER,P),S.depthBuffer){const se=S.depthTexture,le=se&&se.isDepthTexture?se.type:null,ne=M(S.stencilBuffer,le),He=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=Dt(S);Pe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,ne,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ne,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ne,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,He,i.RENDERBUFFER,P)}else{const se=S.textures;for(let le=0;le<se.length;le++){const ne=se[le],He=r.convert(ne.format,ne.colorSpace),ge=r.convert(ne.type),Oe=C(ne.internalFormat,He,ge,ne.colorSpace),Be=Dt(S);X&&Pe(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,Oe,S.width,S.height):Pe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be,Oe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Oe,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ze(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(S.depthTexture);se.__renderTarget=S,(!se.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),re(S.depthTexture,0);const le=se.__webglTexture,ne=Dt(S);if(S.depthTexture.format===nr)Pe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(S.depthTexture.format===ir)Pe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Ht(P){const S=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const se=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),se){const le=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,se.removeEventListener("dispose",le)};se.addEventListener("dispose",le),S.__depthDisposeCallback=le}S.__boundDepthTexture=se}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const se=P.texture.mipmaps;se&&se.length>0?Ze(S.__webglFramebuffer[0],P):Ze(S.__webglFramebuffer,P)}else if(X){S.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[se]),S.__webglDepthbuffer[se]===void 0)S.__webglDepthbuffer[se]=i.createRenderbuffer(),Ue(S.__webglDepthbuffer[se],P,!1);else{const le=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,ne)}}else{const se=P.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Ue(S.__webglDepthbuffer,P,!1);else{const le=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,ne)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(P,S,X){const se=n.get(P);S!==void 0&&xe(se.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Ht(P)}function B(P){const S=P.texture,X=n.get(P),se=n.get(S);P.addEventListener("dispose",D);const le=P.textures,ne=P.isWebGLCubeRenderTarget===!0,He=le.length>1;if(He||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=S.version,o.memory.textures++),ne){X.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[ge]=[];for(let Oe=0;Oe<S.mipmaps.length;Oe++)X.__webglFramebuffer[ge][Oe]=i.createFramebuffer()}else X.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let ge=0;ge<S.mipmaps.length;ge++)X.__webglFramebuffer[ge]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(He)for(let ge=0,Oe=le.length;ge<Oe;ge++){const Be=n.get(le[ge]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Pe(P)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ge=0;ge<le.length;ge++){const Oe=le[ge];X.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ge]);const Be=r.convert(Oe.format,Oe.colorSpace),he=r.convert(Oe.type),Ee=C(Oe.internalFormat,Be,he,Oe.colorSpace,P.isXRRenderTarget===!0),Je=Dt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,Ee,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,X.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),we(i.TEXTURE_CUBE_MAP,S);for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0)for(let Oe=0;Oe<S.mipmaps.length;Oe++)xe(X.__webglFramebuffer[ge][Oe],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe);else xe(X.__webglFramebuffer[ge],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(S)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let ge=0,Oe=le.length;ge<Oe;ge++){const Be=le[ge],he=n.get(Be);let Ee=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ee=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,he.__webglTexture),we(Ee,Be),xe(X.__webglFramebuffer,P,Be,i.COLOR_ATTACHMENT0+ge,Ee,0),m(Be)&&f(Ee)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,se.__webglTexture),we(ge,S),S.mipmaps&&S.mipmaps.length>0)for(let Oe=0;Oe<S.mipmaps.length;Oe++)xe(X.__webglFramebuffer[Oe],P,S,i.COLOR_ATTACHMENT0,ge,Oe);else xe(X.__webglFramebuffer,P,S,i.COLOR_ATTACHMENT0,ge,0);m(S)&&f(ge),t.unbindTexture()}P.depthBuffer&&Ht(P)}function Ct(P){const S=P.textures;for(let X=0,se=S.length;X<se;X++){const le=S[X];if(m(le)){const ne=L(P),He=n.get(le).__webglTexture;t.bindTexture(ne,He),f(ne),t.unbindTexture()}}}const je=[],_t=[];function Ge(P){if(P.samples>0){if(Pe(P)===!1){const S=P.textures,X=P.width,se=P.height;let le=i.COLOR_BUFFER_BIT;const ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,He=n.get(P),ge=S.length>1;if(ge)for(let Be=0;Be<S.length;Be++)t.bindFramebuffer(i.FRAMEBUFFER,He.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,He.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer);const Oe=P.texture.mipmaps;Oe&&Oe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Be=0;Be<S.length;Be++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,He.__webglColorRenderbuffer[Be]);const he=n.get(S[Be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,X,se,0,0,X,se,le,i.NEAREST),l===!0&&(je.length=0,_t.length=0,je.push(i.COLOR_ATTACHMENT0+Be),P.depthBuffer&&P.resolveDepthBuffer===!1&&(je.push(ne),_t.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let Be=0;Be<S.length;Be++){t.bindFramebuffer(i.FRAMEBUFFER,He.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,He.__webglColorRenderbuffer[Be]);const he=n.get(S[Be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,He.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,he,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Dt(P){return Math.min(s.maxSamples,P.samples)}function Pe(P){const S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function rt(P){const S=o.render.frame;d.get(P)!==S&&(d.set(P,S),P.update())}function Xt(P,S){const X=P.colorSpace,se=P.format,le=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==gn&&X!==Mi&&(ut.getTransfer(X)===Pt?(se!==In||le!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}function kt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=j,this.setTexture2D=re,this.setTexture2DArray=z,this.setTexture3D=te,this.setTextureCube=W,this.rebindTextures=mt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Pe}function _0(i,e){function t(n,s=Mi){let r;const o=ut.getTransfer(s);if(n===$n)return i.UNSIGNED_BYTE;if(n===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nu)return i.BYTE;if(n===Du)return i.SHORT;if(n===er)return i.UNSIGNED_SHORT;if(n===gl)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===ur)return i.HALF_FLOAT;if(n===Fu)return i.ALPHA;if(n===Ou)return i.RGB;if(n===In)return i.RGBA;if(n===nr)return i.DEPTH_COMPONENT;if(n===ir)return i.DEPTH_STENCIL;if(n===xl)return i.RED;if(n===vl)return i.RED_INTEGER;if(n===Bu)return i.RG;if(n===Ml)return i.RG_INTEGER;if(n===Sl)return i.RGBA_INTEGER;if(n===Qr||n===eo||n===to||n===no)if(o===Pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ia||n===Pa||n===Na||n===Da)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ua||n===Fa||n===Oa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ua||n===Fa)return o===Pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oa)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ba||n===ka||n===za||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===Ya||n===qa||n===ja||n===$a||n===Ka||n===Za)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ba)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ka)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===za)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ha)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Va)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ga)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wa)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xa)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ya)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qa)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Za)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===io||n===Ja||n===Qa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===io)return o===Pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ku||n===el||n===tl||n===nl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===io)return r.COMPRESSED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class fd extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const y0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class v0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new fd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ti({vertexShader:y0,fragmentShader:x0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new So(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class M0 extends Cs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,h=null,p=null,g=null;const _=new v0,m={},f=t.getContextAttributes();let L=null,C=null;const M=[],N=[],I=new nt;let D=null;const F=new nn;F.viewport=new bt;const T=new nn;T.viewport=new bt;const E=[F,T],U=new Nf;let j=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=M[G];return J===void 0&&(J=new ea,M[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=M[G];return J===void 0&&(J=new ea,M[G]=J),J.getGripSpace()},this.getHand=function(G){let J=M[G];return J===void 0&&(J=new ea,M[G]=J),J.getHandSpace()};function Q(G){const J=N.indexOf(G.inputSource);if(J===-1)return;const ee=M[J];ee!==void 0&&(ee.update(G.inputSource,G.frame,c||o),ee.dispatchEvent({type:G.type,data:G.inputSource}))}function re(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",z);for(let G=0;G<M.length;G++){const J=N[G];J!==null&&(N[G]=null,M[G].disconnect(J))}j=null,K=null,_.reset();for(const G in m)delete m[G];e.setRenderTarget(L),p=null,h=null,u=null,s=null,C=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(L=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",re),s.addEventListener("inputsourceschange",z),f.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(s,t)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,xe=null,Ue=null;f.depth&&(Ue=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=f.stencil?ir:nr,xe=f.stencil?tr:Hi);const Ze={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:r};h=u.createProjectionLayer(Ze),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),C=new Vi(h.textureWidth,h.textureHeight,{format:In,type:$n,depthTexture:new td(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ee={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),C=new Vi(p.framebufferWidth,p.framebufferHeight,{format:In,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Se.setContext(s),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(G){for(let J=0;J<G.removed.length;J++){const ee=G.removed[J],xe=N.indexOf(ee);xe>=0&&(N[xe]=null,M[xe].disconnect(ee))}for(let J=0;J<G.added.length;J++){const ee=G.added[J];let xe=N.indexOf(ee);if(xe===-1){for(let Ze=0;Ze<M.length;Ze++)if(Ze>=N.length){N.push(ee),xe=Ze;break}else if(N[Ze]===null){N[Ze]=ee,xe=Ze;break}if(xe===-1)break}const Ue=M[xe];Ue&&Ue.connect(ee)}}const te=new O,W=new O;function ae(G,J,ee){te.setFromMatrixPosition(J.matrixWorld),W.setFromMatrixPosition(ee.matrixWorld);const xe=te.distanceTo(W),Ue=J.projectionMatrix.elements,Ze=ee.projectionMatrix.elements,Ht=Ue[14]/(Ue[10]-1),mt=Ue[14]/(Ue[10]+1),B=(Ue[9]+1)/Ue[5],Ct=(Ue[9]-1)/Ue[5],je=(Ue[8]-1)/Ue[0],_t=(Ze[8]+1)/Ze[0],Ge=Ht*je,Dt=Ht*_t,Pe=xe/(-je+_t),rt=Pe*-je;if(J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(rt),G.translateZ(Pe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ue[10]===-1)G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Xt=Ht+Pe,kt=mt+Pe,P=Ge-rt,S=Dt+(xe-rt),X=B*mt/kt*Xt,se=Ct*mt/kt*Xt;G.projectionMatrix.makePerspective(P,S,X,se,Xt,kt),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function pe(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let J=G.near,ee=G.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(ee=_.depthFar)),U.near=T.near=F.near=J,U.far=T.far=F.far=ee,(j!==U.near||K!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),j=U.near,K=U.far),U.layers.mask=G.layers.mask|6,F.layers.mask=U.layers.mask&3,T.layers.mask=U.layers.mask&5;const xe=G.parent,Ue=U.cameras;pe(U,xe);for(let Ze=0;Ze<Ue.length;Ze++)pe(Ue[Ze],xe);Ue.length===2?ae(U,F,T):U.projectionMatrix.copy(F.projectionMatrix),me(G,U,xe)};function me(G,J,ee){ee===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(ee.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ts*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(U)},this.getCameraTexture=function(G){return m[G]};let we=null;function Ce(G,J){if(d=J.getViewerPose(c||o),g=J,d!==null){const ee=d.views;p!==null&&(e.setRenderTargetFramebuffer(C,p.framebuffer),e.setRenderTarget(C));let xe=!1;ee.length!==U.cameras.length&&(U.cameras.length=0,xe=!0);for(let mt=0;mt<ee.length;mt++){const B=ee[mt];let Ct=null;if(p!==null)Ct=p.getViewport(B);else{const _t=u.getViewSubImage(h,B);Ct=_t.viewport,mt===0&&(e.setRenderTargetTextures(C,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(C))}let je=E[mt];je===void 0&&(je=new nn,je.layers.enable(mt),je.viewport=new bt,E[mt]=je),je.matrix.fromArray(B.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(B.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),mt===0&&(U.matrix.copy(je.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),xe===!0&&U.cameras.push(je)}const Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const mt=u.getDepthInformation(ee[0]);mt&&mt.isValid&&mt.texture&&_.init(mt,s.renderState)}if(Ue&&Ue.includes("camera-access")&&(e.state.unbindTexture(),u))for(let mt=0;mt<ee.length;mt++){const B=ee[mt].camera;if(B){let Ct=m[B];Ct||(Ct=new fd,m[B]=Ct);const je=u.getCameraImage(B);Ct.sourceTexture=je}}}for(let ee=0;ee<M.length;ee++){const xe=N[ee],Ue=M[ee];xe!==null&&Ue!==void 0&&Ue.update(xe,J,c||o)}we&&we(G,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Se=new ld;Se.setAnimationLoop(Ce),this.setAnimationLoop=function(G){we=G},this.dispose=function(){}}}const Ui=new ln,S0=new Qe;function b0(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ju(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,L,C,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),d(m,f)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,L,C):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===xn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===xn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const L=e.get(f),C=L.envMap,M=L.envMapRotation;C&&(m.envMap.value=C,Ui.copy(M),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(S0.makeRotationFromEuler(Ui)),m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,L,C){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*L,m.scale.value=C*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,L){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===xn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=L.texture,m.transmissionSamplerSize.value.set(L.width,L.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const L=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(L.matrixWorld),m.nearDistance.value=L.shadow.camera.near,m.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function E0(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(L,C){const M=C.program;n.uniformBlockBinding(L,M)}function c(L,C){let M=s[L.id];M===void 0&&(g(L),M=d(L),s[L.id]=M,L.addEventListener("dispose",m));const N=C.program;n.updateUBOMapping(L,N);const I=e.render.frame;r[L.id]!==I&&(h(L),r[L.id]=I)}function d(L){const C=u();L.__bindingPointIndex=C;const M=i.createBuffer(),N=L.__size,I=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,N,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,M),M}function u(){for(let L=0;L<a;L++)if(o.indexOf(L)===-1)return o.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(L){const C=s[L.id],M=L.uniforms,N=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let I=0,D=M.length;I<D;I++){const F=Array.isArray(M[I])?M[I]:[M[I]];for(let T=0,E=F.length;T<E;T++){const U=F[T];if(p(U,I,T,N)===!0){const j=U.__offset,K=Array.isArray(U.value)?U.value:[U.value];let Q=0;for(let re=0;re<K.length;re++){const z=K[re],te=_(z);typeof z=="number"||typeof z=="boolean"?(U.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,j+Q,U.__data)):z.isMatrix3?(U.__data[0]=z.elements[0],U.__data[1]=z.elements[1],U.__data[2]=z.elements[2],U.__data[3]=0,U.__data[4]=z.elements[3],U.__data[5]=z.elements[4],U.__data[6]=z.elements[5],U.__data[7]=0,U.__data[8]=z.elements[6],U.__data[9]=z.elements[7],U.__data[10]=z.elements[8],U.__data[11]=0):(z.toArray(U.__data,Q),Q+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(L,C,M,N){const I=L.value,D=C+"_"+M;if(N[D]===void 0)return typeof I=="number"||typeof I=="boolean"?N[D]=I:N[D]=I.clone(),!0;{const F=N[D];if(typeof I=="number"||typeof I=="boolean"){if(F!==I)return N[D]=I,!0}else if(F.equals(I)===!1)return F.copy(I),!0}return!1}function g(L){const C=L.uniforms;let M=0;const N=16;for(let D=0,F=C.length;D<F;D++){const T=Array.isArray(C[D])?C[D]:[C[D]];for(let E=0,U=T.length;E<U;E++){const j=T[E],K=Array.isArray(j.value)?j.value:[j.value];for(let Q=0,re=K.length;Q<re;Q++){const z=K[Q],te=_(z),W=M%N,ae=W%te.boundary,pe=W+ae;M+=ae,pe!==0&&N-pe<te.storage&&(M+=N-pe),j.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=M,M+=te.storage}}}const I=M%N;return I>0&&(M+=N-I),L.__size=M,L.__cache={},this}function _(L){const C={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(C.boundary=4,C.storage=4):L.isVector2?(C.boundary=8,C.storage=8):L.isVector3||L.isColor?(C.boundary=16,C.storage=12):L.isVector4?(C.boundary=16,C.storage=16):L.isMatrix3?(C.boundary=48,C.storage=48):L.isMatrix4?(C.boundary=64,C.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),C}function m(L){const C=L.target;C.removeEventListener("dispose",m);const M=o.indexOf(C.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function f(){for(const L in s)i.deleteBuffer(s[L]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Bl{constructor(e={}){const{canvas:t=Lh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const L=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let N=!1;this._outputColorSpace=Nt;let I=0,D=0,F=null,T=-1,E=null;const U=new bt,j=new bt;let K=null;const Q=new qe(0);let re=0,z=t.width,te=t.height,W=1,ae=null,pe=null;const me=new bt(0,0,z,te),we=new bt(0,0,z,te);let Ce=!1;const Se=new Rl;let G=!1,J=!1;const ee=new Qe,xe=new O,Ue=new bt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function mt(){return F===null?W:1}let B=n;function Ct(w,H){return t.getContext(w,H)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ml}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",ue,!1),B===null){const H="webgl2";if(B=Ct(H,w),B===null)throw Ct(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let je,_t,Ge,Dt,Pe,rt,Xt,kt,P,S,X,se,le,ne,He,ge,Oe,Be,he,Ee,Je,ke,ve,st;function k(){je=new Ug(B),je.init(),ke=new _0(B,je),_t=new Rg(B,je,e,ke),Ge=new m0(B,je),_t.reversedDepthBuffer&&h&&Ge.buffers.depth.setReversed(!0),Dt=new Bg(B),Pe=new n0,rt=new g0(B,je,Ge,Pe,_t,ke,Dt),Xt=new Lg(M),kt=new Dg(M),P=new Wf(B),ve=new wg(B,P),S=new Fg(B,P,Dt,ve),X=new zg(B,S,P,Dt),he=new kg(B,_t,rt),ge=new Cg(Pe),se=new t0(M,Xt,kt,je,_t,ve,ge),le=new b0(M,Pe),ne=new s0,He=new u0(je),Be=new Tg(M,Xt,kt,Ge,X,p,l),Oe=new f0(M,X,_t),st=new E0(B,Dt,_t,Ge),Ee=new Ag(B,je,Dt),Je=new Og(B,je,Dt),Dt.programs=se.programs,M.capabilities=_t,M.extensions=je,M.properties=Pe,M.renderLists=ne,M.shadowMap=Oe,M.state=Ge,M.info=Dt}k();const fe=new M0(M,B);this.xr=fe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(z,te,!1))},this.getSize=function(w){return w.set(z,te)},this.setSize=function(w,H,Y=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,te=H,t.width=Math.floor(w*W),t.height=Math.floor(H*W),Y===!0&&(t.style.width=w+"px",t.style.height=H+"px"),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(z*W,te*W).floor()},this.setDrawingBufferSize=function(w,H,Y){z=w,te=H,W=Y,t.width=Math.floor(w*Y),t.height=Math.floor(H*Y),this.setViewport(0,0,w,H)},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(me)},this.setViewport=function(w,H,Y,$){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,H,Y,$),Ge.viewport(U.copy(me).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(we)},this.setScissor=function(w,H,Y,$){w.isVector4?we.set(w.x,w.y,w.z,w.w):we.set(w,H,Y,$),Ge.scissor(j.copy(we).multiplyScalar(W).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(w){Ge.setScissorTest(Ce=w)},this.setOpaqueSort=function(w){ae=w},this.setTransparentSort=function(w){pe=w},this.getClearColor=function(w){return w.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,Y=!0){let $=0;if(w){let V=!1;if(F!==null){const de=F.texture.format;V=de===Sl||de===Ml||de===vl}if(V){const de=F.texture.type,be=de===$n||de===Hi||de===er||de===tr||de===_l||de===yl,Ne=Be.getClearColor(),Ae=Be.getClearAlpha(),Ke=Ne.r,et=Ne.g,We=Ne.b;be?(g[0]=Ke,g[1]=et,g[2]=We,g[3]=Ae,B.clearBufferuiv(B.COLOR,0,g)):(_[0]=Ke,_[1]=et,_[2]=We,_[3]=Ae,B.clearBufferiv(B.COLOR,0,_))}else $|=B.COLOR_BUFFER_BIT}H&&($|=B.DEPTH_BUFFER_BIT),Y&&($|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Be.dispose(),ne.dispose(),He.dispose(),Pe.dispose(),Xt.dispose(),kt.dispose(),X.dispose(),ve.dispose(),st.dispose(),se.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Tn),fe.removeEventListener("sessionend",fr),Jn.stop()};function _e(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const w=Dt.autoReset,H=Oe.enabled,Y=Oe.autoUpdate,$=Oe.needsUpdate,V=Oe.type;k(),Dt.autoReset=w,Oe.enabled=H,Oe.autoUpdate=Y,Oe.needsUpdate=$,Oe.type=V}function ue(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function oe(w){const H=w.target;H.removeEventListener("dispose",oe),Fe(H)}function Fe(w){it(w),Pe.remove(w)}function it(w){const H=Pe.get(w).programs;H!==void 0&&(H.forEach(function(Y){se.releaseProgram(Y)}),w.isShaderMaterial&&se.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,Y,$,V,de){H===null&&(H=Ze);const be=V.isMesh&&V.matrixWorld.determinant()<0,Ne=Ao(w,H,Y,$,V);Ge.setMaterial($,be);let Ae=Y.index,Ke=1;if($.wireframe===!0){if(Ae=S.getWireframeAttribute(Y),Ae===void 0)return;Ke=2}const et=Y.drawRange,We=Y.attributes.position;let ct=et.start*Ke,gt=(et.start+et.count)*Ke;de!==null&&(ct=Math.max(ct,de.start*Ke),gt=Math.min(gt,(de.start+de.count)*Ke)),Ae!==null?(ct=Math.max(ct,0),gt=Math.min(gt,Ae.count)):We!=null&&(ct=Math.max(ct,0),gt=Math.min(gt,We.count));const zt=gt-ct;if(zt<0||zt===1/0)return;ve.setup(V,$,Ne,Y,Ae);let It,Tt=Ee;if(Ae!==null&&(It=P.get(Ae),Tt=Je,Tt.setIndex(It)),V.isMesh)$.wireframe===!0?(Ge.setLineWidth($.wireframeLinewidth*mt()),Tt.setMode(B.LINES)):Tt.setMode(B.TRIANGLES);else if(V.isLine){let Ye=$.linewidth;Ye===void 0&&(Ye=1),Ge.setLineWidth(Ye*mt()),V.isLineSegments?Tt.setMode(B.LINES):V.isLineLoop?Tt.setMode(B.LINE_LOOP):Tt.setMode(B.LINE_STRIP)}else V.isPoints?Tt.setMode(B.POINTS):V.isSprite&&Tt.setMode(B.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))Tt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ye=V._multiDrawStarts,Ft=V._multiDrawCounts,yt=V._multiDrawCount,cn=Ae?P.get(Ae).bytesPerElement:1,Qn=Pe.get($).currentProgram.getUniforms();for(let xt=0;xt<yt;xt++)Qn.setValue(B,"_gl_DrawID",xt),Tt.render(Ye[xt]/cn,Ft[xt])}else if(V.isInstancedMesh)Tt.renderInstances(ct,zt,V.count);else if(Y.isInstancedBufferGeometry){const Ye=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ft=Math.min(Y.instanceCount,Ye);Tt.renderInstances(ct,zt,Ft)}else Tt.render(ct,zt)};function Lt(w,H,Y){w.transparent===!0&&w.side===Sn&&w.forceSinglePass===!1?(w.side=xn,w.needsUpdate=!0,Ci(w,H,Y),w.side=Zt,w.needsUpdate=!0,Ci(w,H,Y),w.side=Sn):Ci(w,H,Y)}this.compile=function(w,H,Y=null){Y===null&&(Y=w),f=He.get(Y),f.init(H),C.push(f),Y.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),w!==Y&&w.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights();const $=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const de=V.material;if(de)if(Array.isArray(de))for(let be=0;be<de.length;be++){const Ne=de[be];Lt(Ne,Y,V),$.add(Ne)}else Lt(de,Y,V),$.add(de)}),f=C.pop(),$},this.compileAsync=function(w,H,Y=null){const $=this.compile(w,H,Y);return new Promise(V=>{function de(){if($.forEach(function(be){Pe.get(be).currentProgram.isReady()&&$.delete(be)}),$.size===0){V(w);return}setTimeout(de,10)}je.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let ot=null;function En(w){ot&&ot(w)}function Tn(){Jn.stop()}function fr(){Jn.start()}const Jn=new ld;Jn.setAnimationLoop(En),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(w){ot=w,fe.setAnimationLoop(w),w===null?Jn.stop():Jn.start()},fe.addEventListener("sessionstart",Tn),fe.addEventListener("sessionend",fr),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(H),H=fe.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,H,F),f=He.get(w,C.length),f.init(H),C.push(f),ee.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Se.setFromProjectionMatrix(ee,qn,H.reversedDepth),J=this.localClippingEnabled,G=ge.init(this.clippingPlanes,J),m=ne.get(w,L.length),m.init(),L.push(m),fe.enabled===!0&&fe.isPresenting===!0){const de=M.xr.getDepthSensingMesh();de!==null&&Us(de,H,-1/0,M.sortObjects)}Us(w,H,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ae,pe),Ht=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Ht&&Be.addToRenderList(m,w),this.info.render.frame++,G===!0&&ge.beginShadows();const Y=f.state.shadowsArray;Oe.render(Y,w,H),G===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,V=m.transmissive;if(f.setupLights(),H.isArrayCamera){const de=H.cameras;if(V.length>0)for(let be=0,Ne=de.length;be<Ne;be++){const Ae=de[be];mr($,V,w,Ae)}Ht&&Be.render(w);for(let be=0,Ne=de.length;be<Ne;be++){const Ae=de[be];pr(m,w,Ae,Ae.viewport)}}else V.length>0&&mr($,V,w,H),Ht&&Be.render(w),pr(m,w,H);F!==null&&D===0&&(rt.updateMultisampleRenderTarget(F),rt.updateRenderTargetMipmap(F)),w.isScene===!0&&w.onAfterRender(M,w,H),ve.resetDefaultState(),T=-1,E=null,C.pop(),C.length>0?(f=C[C.length-1],G===!0&&ge.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,L.pop(),L.length>0?m=L[L.length-1]:m=null};function Us(w,H,Y,$){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Se.intersectsSprite(w)){$&&Ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ee);const be=X.update(w),Ne=w.material;Ne.visible&&m.push(w,be,Ne,Y,Ue.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Se.intersectsObject(w))){const be=X.update(w),Ne=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ue.copy(w.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ue.copy(be.boundingSphere.center)),Ue.applyMatrix4(w.matrixWorld).applyMatrix4(ee)),Array.isArray(Ne)){const Ae=be.groups;for(let Ke=0,et=Ae.length;Ke<et;Ke++){const We=Ae[Ke],ct=Ne[We.materialIndex];ct&&ct.visible&&m.push(w,be,ct,Y,Ue.z,We)}}else Ne.visible&&m.push(w,be,Ne,Y,Ue.z,null)}}const de=w.children;for(let be=0,Ne=de.length;be<Ne;be++)Us(de[be],H,Y,$)}function pr(w,H,Y,$){const V=w.opaque,de=w.transmissive,be=w.transparent;f.setupLightsView(Y),G===!0&&ge.setGlobalState(M.clippingPlanes,Y),$&&Ge.viewport(U.copy($)),V.length>0&&Ri(V,H,Y),de.length>0&&Ri(de,H,Y),be.length>0&&Ri(be,H,Y),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function mr(w,H,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[$.id]===void 0&&(f.state.transmissionRenderTarget[$.id]=new Vi(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?ur:$n,minFilter:Bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const de=f.state.transmissionRenderTarget[$.id],be=$.viewport||U;de.setSize(be.z*M.transmissionResolutionScale,be.w*M.transmissionResolutionScale);const Ne=M.getRenderTarget(),Ae=M.getActiveCubeFace(),Ke=M.getActiveMipmapLevel();M.setRenderTarget(de),M.getClearColor(Q),re=M.getClearAlpha(),re<1&&M.setClearColor(16777215,.5),M.clear(),Ht&&Be.render(Y);const et=M.toneMapping;M.toneMapping=bi;const We=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),f.setupLightsView($),G===!0&&ge.setGlobalState(M.clippingPlanes,$),Ri(w,Y,$),rt.updateMultisampleRenderTarget(de),rt.updateRenderTargetMipmap(de),je.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let gt=0,zt=H.length;gt<zt;gt++){const It=H[gt],Tt=It.object,Ye=It.geometry,Ft=It.material,yt=It.group;if(Ft.side===Sn&&Tt.layers.test($.layers)){const cn=Ft.side;Ft.side=xn,Ft.needsUpdate=!0,gr(Tt,Y,$,Ye,Ft,yt),Ft.side=cn,Ft.needsUpdate=!0,ct=!0}}ct===!0&&(rt.updateMultisampleRenderTarget(de),rt.updateRenderTargetMipmap(de))}M.setRenderTarget(Ne,Ae,Ke),M.setClearColor(Q,re),We!==void 0&&($.viewport=We),M.toneMapping=et}function Ri(w,H,Y){const $=H.isScene===!0?H.overrideMaterial:null;for(let V=0,de=w.length;V<de;V++){const be=w[V],Ne=be.object,Ae=be.geometry,Ke=be.group;let et=be.material;et.allowOverride===!0&&$!==null&&(et=$),Ne.layers.test(Y.layers)&&gr(Ne,H,Y,Ae,et,Ke)}}function gr(w,H,Y,$,V,de){w.onBeforeRender(M,H,Y,$,V,de),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(M,H,Y,$,w,de),V.transparent===!0&&V.side===Sn&&V.forceSinglePass===!1?(V.side=xn,V.needsUpdate=!0,M.renderBufferDirect(Y,H,$,V,w,de),V.side=Zt,V.needsUpdate=!0,M.renderBufferDirect(Y,H,$,V,w,de),V.side=Sn):M.renderBufferDirect(Y,H,$,V,w,de),w.onAfterRender(M,H,Y,$,V,de)}function Ci(w,H,Y){H.isScene!==!0&&(H=Ze);const $=Pe.get(w),V=f.state.lights,de=f.state.shadowsArray,be=V.state.version,Ne=se.getParameters(w,V.state,de,H,Y),Ae=se.getProgramCacheKey(Ne);let Ke=$.programs;$.environment=w.isMeshStandardMaterial?H.environment:null,$.fog=H.fog,$.envMap=(w.isMeshStandardMaterial?kt:Xt).get(w.envMap||$.environment),$.envMapRotation=$.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,Ke===void 0&&(w.addEventListener("dispose",oe),Ke=new Map,$.programs=Ke);let et=Ke.get(Ae);if(et!==void 0){if($.currentProgram===et&&$.lightsStateVersion===be)return yr(w,Ne),et}else Ne.uniforms=se.getUniforms(w),w.onBeforeCompile(Ne,M),et=se.acquireProgram(Ne,Ae),Ke.set(Ae,et),$.uniforms=Ne.uniforms;const We=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(We.clippingPlanes=ge.uniform),yr(w,Ne),$.needsLights=Co(w),$.lightsStateVersion=be,$.needsLights&&(We.ambientLightColor.value=V.state.ambient,We.lightProbe.value=V.state.probe,We.directionalLights.value=V.state.directional,We.directionalLightShadows.value=V.state.directionalShadow,We.spotLights.value=V.state.spot,We.spotLightShadows.value=V.state.spotShadow,We.rectAreaLights.value=V.state.rectArea,We.ltc_1.value=V.state.rectAreaLTC1,We.ltc_2.value=V.state.rectAreaLTC2,We.pointLights.value=V.state.point,We.pointLightShadows.value=V.state.pointShadow,We.hemisphereLights.value=V.state.hemi,We.directionalShadowMap.value=V.state.directionalShadowMap,We.directionalShadowMatrix.value=V.state.directionalShadowMatrix,We.spotShadowMap.value=V.state.spotShadowMap,We.spotLightMatrix.value=V.state.spotLightMatrix,We.spotLightMap.value=V.state.spotLightMap,We.pointShadowMap.value=V.state.pointShadowMap,We.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=et,$.uniformsList=null,et}function _r(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=ro.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function yr(w,H){const Y=Pe.get(w);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.batchingColor=H.batchingColor,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.instancingMorph=H.instancingMorph,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function Ao(w,H,Y,$,V){H.isScene!==!0&&(H=Ze),rt.resetTextureUnits();const de=H.fog,be=$.isMeshStandardMaterial?H.environment:null,Ne=F===null?M.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:gn,Ae=($.isMeshStandardMaterial?kt:Xt).get($.envMap||be),Ke=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,et=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),We=!!Y.morphAttributes.position,ct=!!Y.morphAttributes.normal,gt=!!Y.morphAttributes.color;let zt=bi;$.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(zt=M.toneMapping);const It=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Tt=It!==void 0?It.length:0,Ye=Pe.get($),Ft=f.state.lights;if(G===!0&&(J===!0||w!==E)){const qt=w===E&&$.id===T;ge.setState($,w,qt)}let yt=!1;$.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Ft.state.version||Ye.outputColorSpace!==Ne||V.isBatchedMesh&&Ye.batching===!1||!V.isBatchedMesh&&Ye.batching===!0||V.isBatchedMesh&&Ye.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ye.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ye.instancing===!1||!V.isInstancedMesh&&Ye.instancing===!0||V.isSkinnedMesh&&Ye.skinning===!1||!V.isSkinnedMesh&&Ye.skinning===!0||V.isInstancedMesh&&Ye.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ye.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ye.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ye.instancingMorph===!1&&V.morphTexture!==null||Ye.envMap!==Ae||$.fog===!0&&Ye.fog!==de||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ge.numPlanes||Ye.numIntersection!==ge.numIntersection)||Ye.vertexAlphas!==Ke||Ye.vertexTangents!==et||Ye.morphTargets!==We||Ye.morphNormals!==ct||Ye.morphColors!==gt||Ye.toneMapping!==zt||Ye.morphTargetsCount!==Tt)&&(yt=!0):(yt=!0,Ye.__version=$.version);let cn=Ye.currentProgram;yt===!0&&(cn=Ci($,H,V));let Qn=!1,xt=!1,ei=!1;const Ot=cn.getUniforms(),un=Ye.uniforms;if(Ge.useProgram(cn.program)&&(Qn=!0,xt=!0,ei=!0),$.id!==T&&(T=$.id,xt=!0),Qn||E!==w){Ge.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ot.setValue(B,"projectionMatrix",w.projectionMatrix),Ot.setValue(B,"viewMatrix",w.matrixWorldInverse);const jt=Ot.map.cameraPosition;jt!==void 0&&jt.setValue(B,xe.setFromMatrixPosition(w.matrixWorld)),_t.logarithmicDepthBuffer&&Ot.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ot.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,xt=!0,ei=!0)}if(V.isSkinnedMesh){Ot.setOptional(B,V,"bindMatrix"),Ot.setOptional(B,V,"bindMatrixInverse");const qt=V.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Ot.setValue(B,"boneTexture",qt.boneTexture,rt))}V.isBatchedMesh&&(Ot.setOptional(B,V,"batchingTexture"),Ot.setValue(B,"batchingTexture",V._matricesTexture,rt),Ot.setOptional(B,V,"batchingIdTexture"),Ot.setValue(B,"batchingIdTexture",V._indirectTexture,rt),Ot.setOptional(B,V,"batchingColorTexture"),V._colorsTexture!==null&&Ot.setValue(B,"batchingColorTexture",V._colorsTexture,rt));const dn=Y.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&he.update(V,Y,cn),(xt||Ye.receiveShadow!==V.receiveShadow)&&(Ye.receiveShadow=V.receiveShadow,Ot.setValue(B,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(un.envMap.value=Ae,un.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&H.environment!==null&&(un.envMapIntensity.value=H.environmentIntensity),xt&&(Ot.setValue(B,"toneMappingExposure",M.toneMappingExposure),Ye.needsLights&&Ro(un,ei),de&&$.fog===!0&&le.refreshFogUniforms(un,de),le.refreshMaterialUniforms(un,$,W,te,f.state.transmissionRenderTarget[w.id]),ro.upload(B,_r(Ye),un,rt)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ro.upload(B,_r(Ye),un,rt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ot.setValue(B,"center",V.center),Ot.setValue(B,"modelViewMatrix",V.modelViewMatrix),Ot.setValue(B,"normalMatrix",V.normalMatrix),Ot.setValue(B,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const qt=$.uniformsGroups;for(let jt=0,fi=qt.length;jt<fi;jt++){const Wn=qt[jt];st.update(Wn,cn),st.bind(Wn,cn)}}return cn}function Ro(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Co(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,H,Y){const $=Pe.get(w);$.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Pe.get(w.texture).__webglTexture=H,Pe.get(w.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Y,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){const Y=Pe.get(w);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0};const Lo=B.createFramebuffer();this.setRenderTarget=function(w,H=0,Y=0){F=w,I=H,D=Y;let $=!0,V=null,de=!1,be=!1;if(w){const Ae=Pe.get(w);if(Ae.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(B.FRAMEBUFFER,null),$=!1;else if(Ae.__webglFramebuffer===void 0)rt.setupRenderTarget(w);else if(Ae.__hasExternalTextures)rt.rebindTextures(w,Pe.get(w.texture).__webglTexture,Pe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const We=w.depthTexture;if(Ae.__boundDepthTexture!==We){if(We!==null&&Pe.has(We)&&(w.width!==We.image.width||w.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(w)}}const Ke=w.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(be=!0);const et=Pe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(et[H])?V=et[H][Y]:V=et[H],de=!0):w.samples>0&&rt.useMultisampledRTT(w)===!1?V=Pe.get(w).__webglMultisampledFramebuffer:Array.isArray(et)?V=et[Y]:V=et,U.copy(w.viewport),j.copy(w.scissor),K=w.scissorTest}else U.copy(me).multiplyScalar(W).floor(),j.copy(we).multiplyScalar(W).floor(),K=Ce;if(Y!==0&&(V=Lo),Ge.bindFramebuffer(B.FRAMEBUFFER,V)&&$&&Ge.drawBuffers(w,V),Ge.viewport(U),Ge.scissor(j),Ge.setScissorTest(K),de){const Ae=Pe.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ae.__webglTexture,Y)}else if(be){const Ae=H;for(let Ke=0;Ke<w.textures.length;Ke++){const et=Pe.get(w.textures[Ke]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ke,et.__webglTexture,Y,Ae)}}else if(w!==null&&Y!==0){const Ae=Pe.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ae.__webglTexture,Y)}T=-1},this.readRenderTargetPixels=function(w,H,Y,$,V,de,be,Ne=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Pe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Ae=Ae[be]),Ae){Ge.bindFramebuffer(B.FRAMEBUFFER,Ae);try{const Ke=w.textures[Ne],et=Ke.format,We=Ke.type;if(!_t.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-$&&Y>=0&&Y<=w.height-V&&(w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ne),B.readPixels(H,Y,$,V,ke.convert(et),ke.convert(We),de))}finally{const Ke=F!==null?Pe.get(F).__webglFramebuffer:null;Ge.bindFramebuffer(B.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(w,H,Y,$,V,de,be,Ne=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Pe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Ae=Ae[be]),Ae)if(H>=0&&H<=w.width-$&&Y>=0&&Y<=w.height-V){Ge.bindFramebuffer(B.FRAMEBUFFER,Ae);const Ke=w.textures[Ne],et=Ke.format,We=Ke.type;if(!_t.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ct),B.bufferData(B.PIXEL_PACK_BUFFER,de.byteLength,B.STREAM_READ),w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ne),B.readPixels(H,Y,$,V,ke.convert(et),ke.convert(We),0);const gt=F!==null?Pe.get(F).__webglFramebuffer:null;Ge.bindFramebuffer(B.FRAMEBUFFER,gt);const zt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ih(B,zt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ct),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,de),B.deleteBuffer(ct),B.deleteSync(zt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,Y=0){const $=Math.pow(2,-Y),V=Math.floor(w.image.width*$),de=Math.floor(w.image.height*$),be=H!==null?H.x:0,Ne=H!==null?H.y:0;rt.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,be,Ne,V,de),Ge.unbindTexture()};const Io=B.createFramebuffer(),Po=B.createFramebuffer();this.copyTextureToTexture=function(w,H,Y=null,$=null,V=0,de=null){de===null&&(V!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=V,V=0):de=0);let be,Ne,Ae,Ke,et,We,ct,gt,zt;const It=w.isCompressedTexture?w.mipmaps[de]:w.image;if(Y!==null)be=Y.max.x-Y.min.x,Ne=Y.max.y-Y.min.y,Ae=Y.isBox3?Y.max.z-Y.min.z:1,Ke=Y.min.x,et=Y.min.y,We=Y.isBox3?Y.min.z:0;else{const dn=Math.pow(2,-V);be=Math.floor(It.width*dn),Ne=Math.floor(It.height*dn),w.isDataArrayTexture?Ae=It.depth:w.isData3DTexture?Ae=Math.floor(It.depth*dn):Ae=1,Ke=0,et=0,We=0}$!==null?(ct=$.x,gt=$.y,zt=$.z):(ct=0,gt=0,zt=0);const Tt=ke.convert(H.format),Ye=ke.convert(H.type);let Ft;H.isData3DTexture?(rt.setTexture3D(H,0),Ft=B.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(rt.setTexture2DArray(H,0),Ft=B.TEXTURE_2D_ARRAY):(rt.setTexture2D(H,0),Ft=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,H.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,H.unpackAlignment);const yt=B.getParameter(B.UNPACK_ROW_LENGTH),cn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Qn=B.getParameter(B.UNPACK_SKIP_PIXELS),xt=B.getParameter(B.UNPACK_SKIP_ROWS),ei=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,It.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,It.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ke),B.pixelStorei(B.UNPACK_SKIP_ROWS,et),B.pixelStorei(B.UNPACK_SKIP_IMAGES,We);const Ot=w.isDataArrayTexture||w.isData3DTexture,un=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){const dn=Pe.get(w),qt=Pe.get(H),jt=Pe.get(dn.__renderTarget),fi=Pe.get(qt.__renderTarget);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,jt.__webglFramebuffer),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let Wn=0;Wn<Ae;Wn++)Ot&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pe.get(w).__webglTexture,V,We+Wn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pe.get(H).__webglTexture,de,zt+Wn)),B.blitFramebuffer(Ke,et,be,Ne,ct,gt,be,Ne,B.DEPTH_BUFFER_BIT,B.NEAREST);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||Pe.has(w)){const dn=Pe.get(w),qt=Pe.get(H);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,Io),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,Po);for(let jt=0;jt<Ae;jt++)Ot?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,dn.__webglTexture,V,We+jt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,dn.__webglTexture,V),un?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,qt.__webglTexture,de,zt+jt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,qt.__webglTexture,de),V!==0?B.blitFramebuffer(Ke,et,be,Ne,ct,gt,be,Ne,B.COLOR_BUFFER_BIT,B.NEAREST):un?B.copyTexSubImage3D(Ft,de,ct,gt,zt+jt,Ke,et,be,Ne):B.copyTexSubImage2D(Ft,de,ct,gt,Ke,et,be,Ne);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else un?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(Ft,de,ct,gt,zt,be,Ne,Ae,Tt,Ye,It.data):H.isCompressedArrayTexture?B.compressedTexSubImage3D(Ft,de,ct,gt,zt,be,Ne,Ae,Tt,It.data):B.texSubImage3D(Ft,de,ct,gt,zt,be,Ne,Ae,Tt,Ye,It):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,de,ct,gt,be,Ne,Tt,Ye,It.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,de,ct,gt,It.width,It.height,Tt,It.data):B.texSubImage2D(B.TEXTURE_2D,de,ct,gt,be,Ne,Tt,Ye,It);B.pixelStorei(B.UNPACK_ROW_LENGTH,yt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,cn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Qn),B.pixelStorei(B.UNPACK_SKIP_ROWS,xt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ei),de===0&&H.generateMipmaps&&B.generateMipmap(Ft),Ge.unbindTexture()},this.copyTextureToTexture3D=function(w,H,Y=null,$=null,V=0){return ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,H,Y,$,V)},this.initRenderTarget=function(w){Pe.get(w).__webglFramebuffer===void 0&&rt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?rt.setTextureCube(w,0):w.isData3DTexture?rt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?rt.setTexture2DArray(w,0):rt.setTexture2D(w,0),Ge.unbindTexture()},this.resetState=function(){I=0,D=0,F=null,Ge.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}const T0=/^[og]\s*(.+)?/,w0=/^mtllib /,A0=/^usemtl /,R0=/^usemap /,ru=/\s+/,ou=new O,ma=new O,au=new O,lu=new O,An=new O,Kr=new qe;function C0(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){const s=this.vertices,r=this.object.geometry.normals;ou.fromArray(s,e),ma.fromArray(s,t),au.fromArray(s,n),An.subVectors(au,ma),lu.subVectors(ou,ma),An.cross(lu),An.normalize(),r.push(An.x,An.y,An.z),r.push(An.x,An.y,An.z),r.push(An.x,An.y,An.z)},addColor:function(e,t,n){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,r,o,a,l,c){const d=this.vertices.length;let u=this.parseVertexIndex(e,d),h=this.parseVertexIndex(t,d),p=this.parseVertexIndex(n,d);if(this.addVertex(u,h,p),this.addColor(u,h,p),a!==void 0&&a!==""){const g=this.normals.length;u=this.parseNormalIndex(a,g),h=this.parseNormalIndex(l,g),p=this.parseNormalIndex(c,g),this.addNormal(u,h,p)}else this.addFaceNormal(u,h,p);if(s!==void 0&&s!==""){const g=this.uvs.length;u=this.parseUVIndex(s,g),h=this.parseUVIndex(r,g),p=this.parseUVIndex(o,g),this.addUV(u,h,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return i.startObject("",!1),i}class L0 extends Vn{constructor(e){super(e),this.materials=null}load(e,t,n,s){const r=this,o=new Ns(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new C0;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let s=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const d=c.charAt(0);if(d!=="#")if(d==="v"){const u=c.split(ru);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(Kr.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),Nt),t.colors.push(Kr.r,Kr.g,Kr.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(d==="f"){const h=c.slice(1).trim().split(ru),p=[];for(let _=0,m=h.length;_<m;_++){const f=h[_];if(f.length>0){const L=f.split("/");p.push(L)}}const g=p[0];for(let _=1,m=p.length-1;_<m;_++){const f=p[_],L=p[_+1];t.addFace(g[0],f[0],L[0],g[1],f[1],L[1],g[2],f[2],L[2])}}else if(d==="l"){const u=c.substring(1).trim().split(" ");let h=[];const p=[];if(c.indexOf("/")===-1)h=u;else for(let g=0,_=u.length;g<_;g++){const m=u[g].split("/");m[0]!==""&&h.push(m[0]),m[1]!==""&&p.push(m[1])}t.addLineGeometry(h,p)}else if(d==="p"){const h=c.slice(1).trim().split(" ");t.addPointGeometry(h)}else if((s=T0.exec(c))!==null){const u=(" "+s[0].slice(1).trim()).slice(1);t.startObject(u)}else if(A0.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(w0.test(c))t.materialLibraries.push(c.substring(7).trim());else if(R0.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(d==="s"){if(s=c.split(" "),s.length>1){const h=s[1].trim().toLowerCase();t.object.smooth=h!=="0"&&h!=="off"}else t.object.smooth=!0;const u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new Pn;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],d=c.geometry,u=c.materials,h=d.type==="Line",p=d.type==="Points";let g=!1;if(d.vertices.length===0)continue;const _=new Wt;_.setAttribute("position",new dt(d.vertices,3)),d.normals.length>0&&_.setAttribute("normal",new dt(d.normals,3)),d.colors.length>0&&(g=!0,_.setAttribute("color",new dt(d.colors,3))),d.hasUVIndices===!0&&_.setAttribute("uv",new dt(d.uvs,2));const m=[];for(let L=0,C=u.length;L<C;L++){const M=u[L],N=M.name+"_"+M.smooth+"_"+g;let I=t.materials[N];if(this.materials!==null){if(I=this.materials.create(M.name),h&&I&&!(I instanceof Ei)){const D=new Ei;mn.prototype.copy.call(D,I),D.color.copy(I.color),I=D}else if(p&&I&&!(I instanceof ms)){const D=new ms({size:10,sizeAttenuation:!1});mn.prototype.copy.call(D,I),D.color.copy(I.color),D.map=I.map,I=D}}I===void 0&&(h?I=new Ei:p?I=new ms({size:1,sizeAttenuation:!1}):I=new al,I.name=M.name,I.flatShading=!M.smooth,I.vertexColors=g,t.materials[N]=I),m.push(I)}let f;if(m.length>1){for(let L=0,C=u.length;L<C;L++){const M=u[L];_.addGroup(M.groupStart,M.groupCount,L)}h?f=new lr(_,m):p?f=new so(_,m):f=new $t(_,m)}else h?f=new lr(_,m[0]):p?f=new so(_,m[0]):f=new $t(_,m[0]);f.name=c.name,r.add(f)}else if(t.vertices.length>0){const a=new ms({size:1,sizeAttenuation:!1}),l=new Wt;l.setAttribute("position",new dt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new dt(t.colors,3)),a.vertexColors=!0);const c=new so(l,a);r.add(c)}return r}}class I0 extends Vn{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new Ns(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){function t(c){const d=new DataView(c),u=32/8*3+32/8*3*3+16/8,h=d.getUint32(80,!0);if(80+32/8+h*u===d.byteLength)return!0;const g=[115,111,108,105,100];for(let _=0;_<5;_++)if(n(g,d,_))return!1;return!0}function n(c,d,u){for(let h=0,p=c.length;h<p;h++)if(c[h]!==d.getUint8(u+h))return!1;return!0}function s(c){const d=new DataView(c),u=d.getUint32(80,!0);let h,p,g,_=!1,m,f,L,C,M;for(let U=0;U<70;U++)d.getUint32(U,!1)==1129270351&&d.getUint8(U+4)==82&&d.getUint8(U+5)==61&&(_=!0,m=new Float32Array(u*3*3),f=d.getUint8(U+6)/255,L=d.getUint8(U+7)/255,C=d.getUint8(U+8)/255,M=d.getUint8(U+9)/255);const N=84,I=50,D=new Wt,F=new Float32Array(u*3*3),T=new Float32Array(u*3*3),E=new qe;for(let U=0;U<u;U++){const j=N+U*I,K=d.getFloat32(j,!0),Q=d.getFloat32(j+4,!0),re=d.getFloat32(j+8,!0);if(_){const z=d.getUint16(j+48,!0);(z&32768)===0?(h=(z&31)/31,p=(z>>5&31)/31,g=(z>>10&31)/31):(h=f,p=L,g=C)}for(let z=1;z<=3;z++){const te=j+z*12,W=U*3*3+(z-1)*3;F[W]=d.getFloat32(te,!0),F[W+1]=d.getFloat32(te+4,!0),F[W+2]=d.getFloat32(te+8,!0),T[W]=K,T[W+1]=Q,T[W+2]=re,_&&(E.setRGB(h,p,g,Nt),m[W]=E.r,m[W+1]=E.g,m[W+2]=E.b)}}return D.setAttribute("position",new sn(F,3)),D.setAttribute("normal",new sn(T,3)),_&&(D.setAttribute("color",new sn(m,3)),D.hasColors=!0,D.alpha=M),D}function r(c){const d=new Wt,u=/solid([\s\S]*?)endsolid/g,h=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/;let g=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+_+_+_,"g"),f=new RegExp("normal"+_+_+_,"g"),L=[],C=[],M=[],N=new O;let I,D=0,F=0,T=0;for(;(I=u.exec(c))!==null;){F=T;const E=I[0],U=(I=p.exec(E))!==null?I[1]:"";for(M.push(U);(I=h.exec(E))!==null;){let Q=0,re=0;const z=I[0];for(;(I=f.exec(z))!==null;)N.x=parseFloat(I[1]),N.y=parseFloat(I[2]),N.z=parseFloat(I[3]),re++;for(;(I=m.exec(z))!==null;)L.push(parseFloat(I[1]),parseFloat(I[2]),parseFloat(I[3])),C.push(N.x,N.y,N.z),Q++,T++;re!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),Q!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const j=F,K=T-F;d.userData.groupNames=M,d.addGroup(j,K,D),D++}return d.setAttribute("position",new dt(L,3)),d.setAttribute("normal",new dt(C,3)),d}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const d=new Uint8Array(c.length);for(let u=0;u<c.length;u++)d[u]=c.charCodeAt(u)&255;return d.buffer||d}else return c}const l=a(e);return t(l)?s(l):r(o(e))}}function cu(i,e){if(e===ih)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===il||e===zu){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===il)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class P0 extends Vn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new O0(t)}),this.register(function(t){return new B0(t)}),this.register(function(t){return new q0(t)}),this.register(function(t){return new j0(t)}),this.register(function(t){return new $0(t)}),this.register(function(t){return new z0(t)}),this.register(function(t){return new H0(t)}),this.register(function(t){return new V0(t)}),this.register(function(t){return new G0(t)}),this.register(function(t){return new F0(t)}),this.register(function(t){return new W0(t)}),this.register(function(t){return new k0(t)}),this.register(function(t){return new Y0(t)}),this.register(function(t){return new X0(t)}),this.register(function(t){return new D0(t)}),this.register(function(t){return new K0(t)}),this.register(function(t){return new Z0(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=vs.extractUrlBase(e);o=vs.resolveURL(c,this.path)}else o=vs.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ns(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(d){t(d),r.manager.itemEnd(e)},a)}catch(d){a(d)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===pd){try{o[ft.KHR_BINARY_GLTF]=new J0(e)}catch(u){s&&s(u);return}r=JSON.parse(o[ft.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new dy(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const u=this.pluginCallbacks[d](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const u=r.extensionsUsed[d],h=r.extensionsRequired||[];switch(u){case ft.KHR_MATERIALS_UNLIT:o[u]=new U0;break;case ft.KHR_DRACO_MESH_COMPRESSION:o[u]=new Q0(r,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:o[u]=new ey;break;case ft.KHR_MESH_QUANTIZATION:o[u]=new ty;break;default:h.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function N0(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class D0{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const d=new qe(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],gn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new mo(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new od(d),c.distance=u;break;case"spot":c=new rd(d),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ci(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class U0{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return jn}extendParams(e,t,n){const s=[];e.color=new qe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],gn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Nt))}return Promise.all(s)}}class F0{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class O0{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new nt(a,a)}return Promise.all(r)}}class B0{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class k0{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class z0{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],gn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Nt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class H0{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class V0{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new qe().setRGB(a[0],a[1],a[2],gn),Promise.all(r)}}class G0{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class W0{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new qe().setRGB(a[0],a[1],a[2],gn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Nt)),Promise.all(r)}}class X0{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Y0{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class q0{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class j0{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class $0{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class K0{constructor(e){this.name=ft.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,d=s.count,u=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,u,h,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(d*u);return o.decodeGltfBuffer(new Uint8Array(p),d,u,h,s.mode,s.filter),p})})}else return null}}class Z0{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Rn.TRIANGLES&&c.mode!==Rn.TRIANGLE_STRIP&&c.mode!==Rn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(d=>(l[c]=d,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const d=c.pop(),u=d.isGroup?d.children:[d],h=c[0].count,p=[];for(const g of u){const _=new Qe,m=new O,f=new Hn,L=new O(1,1,1),C=new af(g.geometry,g.material,h);for(let M=0;M<h;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,M),l.SCALE&&L.fromBufferAttribute(l.SCALE,M),C.setMatrixAt(M,_.compose(m,f,L));for(const M in l)if(M==="_COLOR_0"){const N=l[M];C.instanceColor=new rl(N.array,N.itemSize,N.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);Ut.prototype.copy.call(C,g),this.parser.assignFinalMaterial(C),p.push(C)}return d.isGroup?(d.clear(),d.add(...p),d):p[0]}))}}const pd="glTF",qs=12,uu={JSON:1313821514,BIN:5130562};class J0{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,qs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-qs,r=new DataView(e,qs);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===uu.JSON){const c=new Uint8Array(e,qs+o,a);this.content=n.decode(c)}else if(l===uu.BIN){const c=qs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Q0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const d in o){const u=ul[d]||d.toLowerCase();a[u]=o[d]}for(const d in e.attributes){const u=ul[d]||d.toLowerCase();if(o[d]!==void 0){const h=n.accessors[e.attributes[d]],p=Ms[h.componentType];c[u]=p.name,l[u]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(u,h){s.decodeDracoFile(d,function(p){for(const g in p.attributes){const _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(p)},a,c,gn,h)})})}}class ey{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ty{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}}class md extends dr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,d=s-t,u=(n-t)/d,h=u*u,p=h*u,g=e*c,_=g-c,m=-2*p+3*h,f=p-h,L=1-m,C=f-h+u;for(let M=0;M!==a;M++){const N=o[_+M+a],I=o[_+M+l]*d,D=o[g+M+a],F=o[g+M]*d;r[M]=L*N+C*I+m*D+f*F}return r}}const ny=new Hn;class iy extends md{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return ny.fromArray(r).normalize().toArray(r),r}}const Rn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ms={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},du={9728:pn,9729:an,9984:Pu,9985:Jr,9986:Ks,9987:Bn},hu={33071:Ln,33648:co,10497:Yn},ga={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ul={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sy={CUBICSPLINE:void 0,LINEAR:rr,STEP:sr},_a={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ry(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ai({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Zt})),i.DefaultMaterial}function Fi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ci(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function oy(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,d=e.length;c<d;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,d=e.length;c<d;c++){const u=e[c];if(n){const h=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(h)}if(s){const h=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(h)}if(r){const h=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const d=c[0],u=c[1],h=c[2];return n&&(i.morphAttributes.position=d),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function ay(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ly(i){let e;const t=i.extensions&&i.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ya(t.attributes):e=i.indices+":"+ya(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ya(i.targets[n]);return e}function ya(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function dl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function cy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const uy=new Qe;class dy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new N0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new sd(this.options.manager):this.textureLoader=new Pf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ns(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Fi(r,a,s),ci(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,d]of o.children.entries())r(d,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(vs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=ga[s.type],a=Ms[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new sn(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=ga[s.type],c=Ms[s.componentType],d=c.BYTES_PER_ELEMENT,u=d*l,h=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(p&&p!==u){const f=Math.floor(h/p),L="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count;let C=t.cache.get(L);C||(_=new c(a,f*p,s.count*p/d),C=new Zu(_,p/d),t.cache.add(L,C)),m=new ar(C,l,h%p/d,g)}else a===null?_=new c(s.count*l):_=new c(a,h,s.count*l),m=new sn(_,l,g);if(s.sparse!==void 0){const f=ga.SCALAR,L=Ms[s.sparse.indices.componentType],C=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,N=new L(o[1],C,s.sparse.count*f),I=new c(o[2],M,s.sparse.count*l);a!==null&&(m=new sn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let D=0,F=N.length;D<F;D++){const T=N[D];if(m.setX(T,I[D*l]),l>=2&&m.setY(T,I[D*l+1]),l>=3&&m.setZ(T,I[D*l+2]),l>=4&&m.setW(T,I[D*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=o.name||a.name||"",d.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(d.name=a.uri);const h=(r.samplers||{})[o.sampler]||{};return d.magFilter=du[h.magFilter]||an,d.minFilter=du[h.minFilter]||Bn,d.wrapS=hu[h.wrapS]||Yn,d.wrapT=hu[h.wrapT]||Yn,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==pn&&d.minFilter!==an,s.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const h=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(u){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Kt(_);m.needsUpdate=!0,h(m)}),t.load(vs.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),ci(u,o),u.userData.mimeType=o.mimeType||cy(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=d,d}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ft.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ms,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ei,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ai}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[ft.KHR_MATERIALS_UNLIT]){const u=s[ft.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new qe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const h=u.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],gn),a.opacity=h[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Nt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Sn);const d=r.alphaMode||_a.OPAQUE;if(d===_a.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,d===_a.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==jn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new nt(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==jn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==jn){const u=r.emissiveFactor;a.emissive=new qe().setRGB(u[0],u[1],u[2],gn)}return r.emissiveTexture!==void 0&&o!==jn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Nt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),ci(u,r),t.associations.set(u,{materials:e}),r.extensions&&Fi(s,u,r),u})}createUniqueName(e){const t=Rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return fu(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],d=ly(c),u=s[d];if(u)o.push(u.promise);else{let h;c.extensions&&c.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=fu(new Wt,c,t),s[d]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const d=o[l].material===void 0?ry(this.cache):this.getDependency("material",o[l].material);a.push(d)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],u=[];for(let p=0,g=d.length;p<g;p++){const _=d[p],m=o[p];let f;const L=c[p];if(m.mode===Rn.TRIANGLES||m.mode===Rn.TRIANGLE_STRIP||m.mode===Rn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new ed(_,L):new $t(_,L),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Rn.TRIANGLE_STRIP?f.geometry=cu(f.geometry,zu):m.mode===Rn.TRIANGLE_FAN&&(f.geometry=cu(f.geometry,il));else if(m.mode===Rn.LINES)f=new lr(_,L);else if(m.mode===Rn.LINE_STRIP)f=new Mo(_,L);else if(m.mode===Rn.LINE_LOOP)f=new df(_,L);else if(m.mode===Rn.POINTS)f=new so(_,L);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&ay(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),ci(f,r),m.extensions&&Fi(s,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Fi(s,u[0],r),u[0];const h=new Pn;r.extensions&&Fi(s,h,r),t.associations.set(h,{meshes:e});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new nn(ps.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Eo(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ci(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,d=o.length;c<d;c++){const u=o[c];if(u){a.push(u);const h=new Qe;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new vo(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],d=[];for(let u=0,h=s.channels.length;u<h;u++){const p=s.channels[u],g=s.samplers[p.sampler],_=p.target,m=_.node,f=s.parameters!==void 0?s.parameters[g.input]:g.input,L=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",L)),c.push(g),d.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(u){const h=u[0],p=u[1],g=u[2],_=u[3],m=u[4],f=[];for(let L=0,C=h.length;L<C;L++){const M=h[L],N=p[L],I=g[L],D=_[L],F=m[L];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const T=n._createAnimationTracks(M,N,I,D,F);if(T)for(let E=0;E<T.length;E++)f.push(T[E])}return new ll(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,d=a.length;c<d;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const d=c[0],u=c[1],h=c[2];h!==null&&d.traverse(function(p){p.isSkinnedMesh&&p.bind(h,uy)});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let d;if(r.isBone===!0?d=new wl:c.length>1?d=new Pn:c.length===1?d=c[0]:d=new Ut,d!==c[0])for(let u=0,h=c.length;u<h;u++)d.add(c[u]);if(r.name&&(d.userData.name=r.name,d.name=o),ci(d,r),r.extensions&&Fi(n,d,r),r.matrix!==void 0){const u=new Qe;u.fromArray(r.matrix),d.applyMatrix4(u)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);if(!s.associations.has(d))s.associations.set(d,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const u=s.associations.get(d);s.associations.set(d,{...u})}return s.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Pn;n.name&&(r.name=s.createUniqueName(n.name)),ci(r,n),n.extensions&&Fi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let d=0,u=l.length;d<u;d++)r.add(l[d]);const c=d=>{const u=new Map;for(const[h,p]of s.associations)(h instanceof mn||h instanceof Kt)&&u.set(h,p);return d.traverse(h=>{const p=s.associations.get(h);p!=null&&u.set(h,p)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];vi[r.path]===vi.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(vi[r.path]){case vi.weights:c=As;break;case vi.rotation:c=Gi;break;case vi.translation:case vi.scale:c=wi;break;default:switch(n.itemSize){case 1:c=As;break;case 2:case 3:default:c=wi;break}break}const d=s.interpolation!==void 0?sy[s.interpolation]:rr,u=this._getArrayFromAccessor(n);for(let h=0,p=l.length;h<p;h++){const g=new c(l[h]+"."+vi[r.path],t.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=dl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Gi?iy:md;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function hy(i,e,t){const n=e.attributes,s=new bn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),a.normalized){const d=dl(Ms[a.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new O,l=new O;for(let c=0,d=r.length;c<d;c++){const u=r[c];if(u.POSITION!==void 0){const h=t.json.accessors[u.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){const _=dl(Ms[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Kn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function fu(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=ul[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ut.workingColorSpace!==gn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),ci(i,e),hy(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?oy(i,e.targets,t):i})}class pu extends Rf{constructor(e){super(e)}parse(e){function t(z){switch(z.image_type){case h:case _:if(z.colormap_length>256||z.colormap_size!==24||z.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case p:case g:case m:case f:if(z.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+z.image_type)}if(z.width<=0||z.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(z.pixel_size!==8&&z.pixel_size!==16&&z.pixel_size!==24&&z.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+z.pixel_size)}function n(z,te,W,ae,pe){let me,we;const Ce=W.pixel_size>>3,Se=W.width*W.height*Ce;if(te&&(we=pe.subarray(ae,ae+=W.colormap_length*(W.colormap_size>>3))),z){me=new Uint8Array(Se);let G,J,ee,xe=0;const Ue=new Uint8Array(Ce);for(;xe<Se;)if(G=pe[ae++],J=(G&127)+1,G&128){for(ee=0;ee<Ce;++ee)Ue[ee]=pe[ae++];for(ee=0;ee<J;++ee)me.set(Ue,xe+ee*Ce);xe+=Ce*J}else{for(J*=Ce,ee=0;ee<J;++ee)me[xe+ee]=pe[ae++];xe+=J}}else me=pe.subarray(ae,ae+=te?W.width*W.height:Se);return{pixel_data:me,palettes:we}}function s(z,te,W,ae,pe,me,we,Ce,Se){const G=Se;let J,ee=0,xe,Ue;const Ze=E.width;for(Ue=te;Ue!==ae;Ue+=W)for(xe=pe;xe!==we;xe+=me,ee++)J=Ce[ee],z[(xe+Ze*Ue)*4+3]=255,z[(xe+Ze*Ue)*4+2]=G[J*3+0],z[(xe+Ze*Ue)*4+1]=G[J*3+1],z[(xe+Ze*Ue)*4+0]=G[J*3+2];return z}function r(z,te,W,ae,pe,me,we,Ce){let Se,G=0,J,ee;const xe=E.width;for(ee=te;ee!==ae;ee+=W)for(J=pe;J!==we;J+=me,G+=2)Se=Ce[G+0]+(Ce[G+1]<<8),z[(J+xe*ee)*4+0]=(Se&31744)>>7,z[(J+xe*ee)*4+1]=(Se&992)>>2,z[(J+xe*ee)*4+2]=(Se&31)<<3,z[(J+xe*ee)*4+3]=Se&32768?0:255;return z}function o(z,te,W,ae,pe,me,we,Ce){let Se=0,G,J;const ee=E.width;for(J=te;J!==ae;J+=W)for(G=pe;G!==we;G+=me,Se+=3)z[(G+ee*J)*4+3]=255,z[(G+ee*J)*4+2]=Ce[Se+0],z[(G+ee*J)*4+1]=Ce[Se+1],z[(G+ee*J)*4+0]=Ce[Se+2];return z}function a(z,te,W,ae,pe,me,we,Ce){let Se=0,G,J;const ee=E.width;for(J=te;J!==ae;J+=W)for(G=pe;G!==we;G+=me,Se+=4)z[(G+ee*J)*4+2]=Ce[Se+0],z[(G+ee*J)*4+1]=Ce[Se+1],z[(G+ee*J)*4+0]=Ce[Se+2],z[(G+ee*J)*4+3]=Ce[Se+3];return z}function l(z,te,W,ae,pe,me,we,Ce){let Se,G=0,J,ee;const xe=E.width;for(ee=te;ee!==ae;ee+=W)for(J=pe;J!==we;J+=me,G++)Se=Ce[G],z[(J+xe*ee)*4+0]=Se,z[(J+xe*ee)*4+1]=Se,z[(J+xe*ee)*4+2]=Se,z[(J+xe*ee)*4+3]=255;return z}function c(z,te,W,ae,pe,me,we,Ce){let Se=0,G,J;const ee=E.width;for(J=te;J!==ae;J+=W)for(G=pe;G!==we;G+=me,Se+=2)z[(G+ee*J)*4+0]=Ce[Se+0],z[(G+ee*J)*4+1]=Ce[Se+0],z[(G+ee*J)*4+2]=Ce[Se+0],z[(G+ee*J)*4+3]=Ce[Se+1];return z}function d(z,te,W,ae,pe){let me,we,Ce,Se,G,J;switch((E.flags&L)>>C){default:case I:me=0,Ce=1,G=te,we=0,Se=1,J=W;break;case M:me=0,Ce=1,G=te,we=W-1,Se=-1,J=-1;break;case D:me=te-1,Ce=-1,G=-1,we=0,Se=1,J=W;break;case N:me=te-1,Ce=-1,G=-1,we=W-1,Se=-1,J=-1;break}if(K)switch(E.pixel_size){case 8:l(z,we,Se,J,me,Ce,G,ae);break;case 16:c(z,we,Se,J,me,Ce,G,ae);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(E.pixel_size){case 8:s(z,we,Se,J,me,Ce,G,ae,pe);break;case 16:r(z,we,Se,J,me,Ce,G,ae);break;case 24:o(z,we,Se,J,me,Ce,G,ae);break;case 32:a(z,we,Se,J,me,Ce,G,ae);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return z}const u=0,h=1,p=2,g=3,_=9,m=10,f=11,L=48,C=4,M=0,N=1,I=2,D=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let F=0;const T=new Uint8Array(e),E={id_length:T[F++],colormap_type:T[F++],image_type:T[F++],colormap_index:T[F++]|T[F++]<<8,colormap_length:T[F++]|T[F++]<<8,colormap_size:T[F++],origin:[T[F++]|T[F++]<<8,T[F++]|T[F++]<<8],width:T[F++]|T[F++]<<8,height:T[F++]|T[F++]<<8,pixel_size:T[F++],flags:T[F++]};if(t(E),E.id_length+F>e.length)throw new Error("THREE.TGALoader: No data.");F+=E.id_length;let U=!1,j=!1,K=!1;switch(E.image_type){case _:U=!0,j=!0;break;case h:j=!0;break;case m:U=!0;break;case p:break;case f:U=!0,K=!0;break;case g:K=!0;break}const Q=new Uint8Array(E.width*E.height*4),re=n(U,j,E,F,T);return d(Q,E.width,E.height,re.pixel_data,re.palettes),{data:Q,width:E.width,height:E.height,flipY:!0,generateMipmaps:!0,minFilter:Bn}}}class fy extends Vn{load(e,t,n,s){const r=this,o=r.path===""?vs.extractUrlBase(e):r.path,a=new Ns(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}parse(e,t){function n(v,x){const A=[],b=v.childNodes;for(let R=0,Z=b.length;R<Z;R++){const ie=b[R];ie.nodeName===x&&A.push(ie)}return A}function s(v){if(v.length===0)return[];const x=v.trim().split(/\s+/),A=new Array(x.length);for(let b=0,R=x.length;b<R;b++)A[b]=x[b];return A}function r(v){if(v.length===0)return[];const x=v.trim().split(/\s+/),A=new Array(x.length);for(let b=0,R=x.length;b<R;b++)A[b]=parseFloat(x[b]);return A}function o(v){if(v.length===0)return[];const x=v.trim().split(/\s+/),A=new Array(x.length);for(let b=0,R=x.length;b<R;b++)A[b]=parseInt(x[b]);return A}function a(v){return v.substring(1)}function l(){return"three_default_"+bd++}function c(v){return Object.keys(v).length===0}function d(v){return{unit:u(n(v,"unit")[0]),upAxis:h(n(v,"up_axis")[0])}}function u(v){return v!==void 0&&v.hasAttribute("meter")===!0?parseFloat(v.getAttribute("meter")):1}function h(v){return v!==void 0?v.textContent:"Y_UP"}function p(v,x,A,b){const R=n(v,x)[0];if(R!==void 0){const Z=n(R,A);for(let ie=0;ie<Z.length;ie++)b(Z[ie])}}function g(v,x){for(const A in v){const b=v[A];b.build=x(v[A])}}function _(v,x){return v.build!==void 0||(v.build=x(v)),v.build}function m(v){const x={sources:{},samplers:{},channels:{}};let A=!1;for(let b=0,R=v.childNodes.length;b<R;b++){const Z=v.childNodes[b];if(Z.nodeType!==1)continue;let ie;switch(Z.nodeName){case"source":ie=Z.getAttribute("id"),x.sources[ie]=_e(Z);break;case"sampler":ie=Z.getAttribute("id"),x.samplers[ie]=f(Z);break;case"channel":ie=Z.getAttribute("target"),x.channels[ie]=L(Z);break;case"animation":m(Z),A=!0;break;default:console.log(Z)}}A===!1&&(tt.animations[v.getAttribute("id")||ps.generateUUID()]=x)}function f(v){const x={inputs:{}};for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"input":const Z=a(R.getAttribute("source")),ie=R.getAttribute("semantic");x.inputs[ie]=Z;break}}return x}function L(v){const x={};let b=v.getAttribute("target").split("/");const R=b.shift();let Z=b.shift();const ie=Z.indexOf("(")!==-1,Re=Z.indexOf(".")!==-1;if(Re)b=Z.split("."),Z=b.shift(),x.member=b.shift();else if(ie){const ye=Z.split("(");Z=ye.shift();for(let Te=0;Te<ye.length;Te++)ye[Te]=parseInt(ye[Te].replace(/\)/,""));x.indices=ye}return x.id=R,x.sid=Z,x.arraySyntax=ie,x.memberSyntax=Re,x.sampler=a(v.getAttribute("source")),x}function C(v){const x=[],A=v.channels,b=v.samplers,R=v.sources;for(const Z in A)if(A.hasOwnProperty(Z)){const ie=A[Z],Re=b[ie.sampler],ye=Re.inputs.INPUT,Te=Re.inputs.OUTPUT,Ve=R[ye],ce=R[Te],ze=N(ie,Ve,ce);E(ze,x)}return x}function M(v){return _(tt.animations[v],C)}function N(v,x,A){const b=tt.nodes[v.id],R=gt(b.id),Z=b.transforms[v.sid],ie=b.matrix.clone().transpose();let Re,ye,Te,Ve,ce,ze;const De={};switch(Z){case"matrix":for(Te=0,Ve=x.array.length;Te<Ve;Te++)if(Re=x.array[Te],ye=Te*A.stride,De[Re]===void 0&&(De[Re]={}),v.arraySyntax===!0){const Vt=A.array[ye],wt=v.indices[0]+4*v.indices[1];De[Re][wt]=Vt}else for(ce=0,ze=A.stride;ce<ze;ce++)De[Re][ce]=A.array[ye+ce];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Z);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Z);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Z);break}const $e=I(De,ie);return{name:R.uuid,keyframes:$e}}function I(v,x){const A=[];for(const R in v)A.push({time:parseFloat(R),value:v[R]});A.sort(b);for(let R=0;R<16;R++)U(A,R,x.elements[R]);return A;function b(R,Z){return R.time-Z.time}}const D=new O,F=new O,T=new Hn;function E(v,x){const A=v.keyframes,b=v.name,R=[],Z=[],ie=[],Re=[];for(let ye=0,Te=A.length;ye<Te;ye++){const Ve=A[ye],ce=Ve.time,ze=Ve.value;Y.fromArray(ze).transpose(),Y.decompose(D,T,F),R.push(ce),Z.push(D.x,D.y,D.z),ie.push(T.x,T.y,T.z,T.w),Re.push(F.x,F.y,F.z)}return Z.length>0&&x.push(new wi(b+".position",R,Z)),ie.length>0&&x.push(new Gi(b+".quaternion",R,ie)),Re.length>0&&x.push(new wi(b+".scale",R,Re)),x}function U(v,x,A){let b,R=!0,Z,ie;for(Z=0,ie=v.length;Z<ie;Z++)b=v[Z],b.value[x]===void 0?b.value[x]=null:R=!1;if(R===!0)for(Z=0,ie=v.length;Z<ie;Z++)b=v[Z],b.value[x]=A;else j(v,x)}function j(v,x){let A,b;for(let R=0,Z=v.length;R<Z;R++){const ie=v[R];if(ie.value[x]===null){if(A=K(v,R,x),b=Q(v,R,x),A===null){ie.value[x]=b.value[x];continue}if(b===null){ie.value[x]=A.value[x];continue}re(ie,A,b,x)}}}function K(v,x,A){for(;x>=0;){const b=v[x];if(b.value[A]!==null)return b;x--}return null}function Q(v,x,A){for(;x<v.length;){const b=v[x];if(b.value[A]!==null)return b;x++}return null}function re(v,x,A,b){if(A.time-x.time===0){v.value[b]=x.value[b];return}v.value[b]=(v.time-x.time)*(A.value[b]-x.value[b])/(A.time-x.time)+x.value[b]}function z(v){const x={name:v.getAttribute("id")||"default",start:parseFloat(v.getAttribute("start")||0),end:parseFloat(v.getAttribute("end")||0),animations:[]};for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"instance_animation":x.animations.push(a(R.getAttribute("url")));break}}tt.clips[v.getAttribute("id")]=x}function te(v){const x=[],A=v.name,b=v.end-v.start||-1,R=v.animations;for(let Z=0,ie=R.length;Z<ie;Z++){const Re=M(R[Z]);for(let ye=0,Te=Re.length;ye<Te;ye++)x.push(Re[ye])}return new ll(A,b,x)}function W(v){return _(tt.clips[v],te)}function ae(v){const x={};for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"skin":x.id=a(R.getAttribute("source")),x.skin=pe(R);break;case"morph":x.id=a(R.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}tt.controllers[v.getAttribute("id")]=x}function pe(v){const x={sources:{}};for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"bind_shape_matrix":x.bindShapeMatrix=r(R.textContent);break;case"source":const Z=R.getAttribute("id");x.sources[Z]=_e(R);break;case"joints":x.joints=me(R);break;case"vertex_weights":x.vertexWeights=we(R);break}}return x}function me(v){const x={inputs:{}};for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"input":const Z=R.getAttribute("semantic"),ie=a(R.getAttribute("source"));x.inputs[Z]=ie;break}}return x}function we(v){const x={inputs:{}};for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"input":const Z=R.getAttribute("semantic"),ie=a(R.getAttribute("source")),Re=parseInt(R.getAttribute("offset"));x.inputs[Z]={id:ie,offset:Re};break;case"vcount":x.vcount=o(R.textContent);break;case"v":x.v=o(R.textContent);break}}return x}function Ce(v){const x={id:v.id},A=tt.geometries[x.id];return v.skin!==void 0&&(x.skin=Se(v.skin),A.sources.skinIndices=x.skin.indices,A.sources.skinWeights=x.skin.weights),x}function Se(v){const A={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},b=v.sources,R=v.vertexWeights,Z=R.vcount,ie=R.v,Re=R.inputs.JOINT.offset,ye=R.inputs.WEIGHT.offset,Te=v.sources[v.joints.inputs.JOINT],Ve=v.sources[v.joints.inputs.INV_BIND_MATRIX],ce=b[R.inputs.WEIGHT.id].array;let ze=0,De,$e,Xe;for(De=0,Xe=Z.length;De<Xe;De++){const wt=Z[De],Mt=[];for($e=0;$e<wt;$e++){const St=ie[ze+Re],ti=ie[ze+ye],_n=ce[ti];Mt.push({index:St,weight:_n}),ze+=2}for(Mt.sort(Vt),$e=0;$e<4;$e++){const St=Mt[$e];St!==void 0?(A.indices.array.push(St.index),A.weights.array.push(St.weight)):(A.indices.array.push(0),A.weights.array.push(0))}}for(v.bindShapeMatrix?A.bindMatrix=new Qe().fromArray(v.bindShapeMatrix).transpose():A.bindMatrix=new Qe().identity(),De=0,Xe=Te.array.length;De<Xe;De++){const wt=Te.array[De],Mt=new Qe().fromArray(Ve.array,De*Ve.stride).transpose();A.joints.push({name:wt,boneInverse:Mt})}return A;function Vt(wt,Mt){return Mt.weight-wt.weight}}function G(v){return _(tt.controllers[v],Ce)}function J(v){const x={init_from:n(v,"init_from")[0].textContent};tt.images[v.getAttribute("id")]=x}function ee(v){return v.build!==void 0?v.build:v.init_from}function xe(v){const x=tt.images[v];return x!==void 0?_(x,ee):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",v),null)}function Ue(v){const x={};for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"profile_COMMON":x.profile=Ze(R);break}}tt.effects[v.getAttribute("id")]=x}function Ze(v){const x={surfaces:{},samplers:{}};for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"newparam":Ht(R,x);break;case"technique":x.technique=Ct(R);break;case"extra":x.extra=rt(R);break}}return x}function Ht(v,x){const A=v.getAttribute("sid");for(let b=0,R=v.childNodes.length;b<R;b++){const Z=v.childNodes[b];if(Z.nodeType===1)switch(Z.nodeName){case"surface":x.surfaces[A]=mt(Z);break;case"sampler2D":x.samplers[A]=B(Z);break}}}function mt(v){const x={};for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"init_from":x.init_from=R.textContent;break}}return x}function B(v){const x={};for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"source":x.source=R.textContent;break}}return x}function Ct(v){const x={};for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"constant":case"lambert":case"blinn":case"phong":x.type=R.nodeName,x.parameters=je(R);break;case"extra":x.extra=rt(R);break}}return x}function je(v){const x={};for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":x[R.nodeName]=_t(R);break;case"transparent":x[R.nodeName]={opaque:R.hasAttribute("opaque")?R.getAttribute("opaque"):"A_ONE",data:_t(R)};break}}return x}function _t(v){const x={};for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"color":x[R.nodeName]=r(R.textContent);break;case"float":x[R.nodeName]=parseFloat(R.textContent);break;case"texture":x[R.nodeName]={id:R.getAttribute("texture"),extra:Ge(R)};break}}return x}function Ge(v){const x={technique:{}};for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"extra":Dt(R,x);break}}return x}function Dt(v,x){for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"technique":Pe(R,x);break}}}function Pe(v,x){for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":x.technique[R.nodeName]=parseFloat(R.textContent);break;case"wrapU":case"wrapV":R.textContent.toUpperCase()==="TRUE"?x.technique[R.nodeName]=1:R.textContent.toUpperCase()==="FALSE"?x.technique[R.nodeName]=0:x.technique[R.nodeName]=parseInt(R.textContent);break;case"bump":x[R.nodeName]=kt(R);break}}}function rt(v){const x={};for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"technique":x.technique=Xt(R);break}}return x}function Xt(v){const x={};for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"double_sided":x[R.nodeName]=parseInt(R.textContent);break;case"bump":x[R.nodeName]=kt(R);break}}return x}function kt(v){const x={};for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"texture":x[R.nodeName]={id:R.getAttribute("texture"),texcoord:R.getAttribute("texcoord"),extra:Ge(R)};break}}return x}function P(v){return v}function S(v){return _(tt.effects[v],P)}function X(v){const x={name:v.getAttribute("name")};for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"instance_effect":x.url=a(R.getAttribute("url"));break}}tt.materials[v.getAttribute("id")]=x}function se(v){let x,A=v.slice((v.lastIndexOf(".")-1>>>0)+2);switch(A=A.toLowerCase(),A){case"tga":x=qt;break;default:x=dn}return x}function le(v){const x=S(v.url),A=x.profile.technique;let b;switch(A.type){case"phong":case"blinn":b=new al;break;case"lambert":b=new ff;break;default:b=new jn;break}b.name=v.name||"";function R(ye,Te=null){const Ve=x.profile.samplers[ye.id];let ce=null;if(Ve!==void 0){const ze=x.profile.surfaces[Ve.source];ce=xe(ze.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ce=xe(ye.id);if(ce!==null){const ze=se(ce);if(ze!==void 0){const De=ze.load(ce),$e=ye.extra;if($e!==void 0&&$e.technique!==void 0&&c($e.technique)===!1){const Xe=$e.technique;De.wrapS=Xe.wrapU?Yn:Ln,De.wrapT=Xe.wrapV?Yn:Ln,De.offset.set(Xe.offsetU||0,Xe.offsetV||0),De.repeat.set(Xe.repeatU||1,Xe.repeatV||1)}else De.wrapS=Yn,De.wrapT=Yn;return Te!==null&&(De.colorSpace=Te),De}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ce),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",ye.id),null}const Z=A.parameters;for(const ye in Z){const Te=Z[ye];switch(ye){case"diffuse":Te.color&&b.color.fromArray(Te.color),Te.texture&&(b.map=R(Te.texture,Nt));break;case"specular":Te.color&&b.specular&&b.specular.fromArray(Te.color),Te.texture&&(b.specularMap=R(Te.texture));break;case"bump":Te.texture&&(b.normalMap=R(Te.texture));break;case"ambient":Te.texture&&(b.lightMap=R(Te.texture,Nt));break;case"shininess":Te.float&&b.shininess&&(b.shininess=Te.float);break;case"emission":Te.color&&b.emissive&&b.emissive.fromArray(Te.color),Te.texture&&(b.emissiveMap=R(Te.texture,Nt));break}}ut.colorSpaceToWorking(b.color,Nt),b.specular&&ut.colorSpaceToWorking(b.specular,Nt),b.emissive&&ut.colorSpaceToWorking(b.emissive,Nt);let ie=Z.transparent,Re=Z.transparency;if(Re===void 0&&ie&&(Re={float:1}),ie===void 0&&Re&&(ie={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ie&&Re)if(ie.data.texture)b.transparent=!0;else{const ye=ie.data.color;switch(ie.opaque){case"A_ONE":b.opacity=ye[3]*Re.float;break;case"RGB_ZERO":b.opacity=1-ye[0]*Re.float;break;case"A_ZERO":b.opacity=1-ye[3]*Re.float;break;case"RGB_ONE":b.opacity=ye[0]*Re.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ie.opaque)}b.opacity<1&&(b.transparent=!0)}if(A.extra!==void 0&&A.extra.technique!==void 0){const ye=A.extra.technique;for(const Te in ye){const Ve=ye[Te];switch(Te){case"double_sided":b.side=Ve===1?Sn:Zt;break;case"bump":b.normalMap=R(Ve.texture),b.normalScale=new nt(1,1);break}}}return b}function ne(v){return _(tt.materials[v],le)}function He(v){const x={name:v.getAttribute("name")};for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"optics":x.optics=ge(R);break}}tt.cameras[v.getAttribute("id")]=x}function ge(v){for(let x=0;x<v.childNodes.length;x++){const A=v.childNodes[x];switch(A.nodeName){case"technique_common":return Oe(A)}}return{}}function Oe(v){const x={};for(let A=0;A<v.childNodes.length;A++){const b=v.childNodes[A];switch(b.nodeName){case"perspective":case"orthographic":x.technique=b.nodeName,x.parameters=Be(b);break}}return x}function Be(v){const x={};for(let A=0;A<v.childNodes.length;A++){const b=v.childNodes[A];switch(b.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":x[b.nodeName]=parseFloat(b.textContent);break}}return x}function he(v){let x;switch(v.optics.technique){case"perspective":x=new nn(v.optics.parameters.yfov,v.optics.parameters.aspect_ratio,v.optics.parameters.znear,v.optics.parameters.zfar);break;case"orthographic":let A=v.optics.parameters.ymag,b=v.optics.parameters.xmag;const R=v.optics.parameters.aspect_ratio;b=b===void 0?A*R:b,A=A===void 0?b/R:A,b*=.5,A*=.5,x=new Eo(-b,b,A,-A,v.optics.parameters.znear,v.optics.parameters.zfar);break;default:x=new nn;break}return x.name=v.name||"",x}function Ee(v){const x=tt.cameras[v];return x!==void 0?_(x,he):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",v),null)}function Je(v){let x={};for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"technique_common":x=ke(R);break}}tt.lights[v.getAttribute("id")]=x}function ke(v){const x={};for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"directional":case"point":case"spot":case"ambient":x.technique=R.nodeName,x.parameters=ve(R)}}return x}function ve(v){const x={};for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"color":const Z=r(R.textContent);x.color=new qe().fromArray(Z),ut.colorSpaceToWorking(x.color,Nt);break;case"falloff_angle":x.falloffAngle=parseFloat(R.textContent);break;case"quadratic_attenuation":const ie=parseFloat(R.textContent);x.distance=ie?Math.sqrt(1/ie):0;break}}return x}function st(v){let x;switch(v.technique){case"directional":x=new mo;break;case"point":x=new od;break;case"spot":x=new rd;break;case"ambient":x=new ad;break}return v.parameters.color&&x.color.copy(v.parameters.color),v.parameters.distance&&(x.distance=v.parameters.distance),x}function k(v){const x=tt.lights[v];return x!==void 0?_(x,st):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",v),null)}function fe(v){const x={name:v.getAttribute("name"),sources:{},vertices:{},primitives:[]},A=n(v,"mesh")[0];if(A!==void 0){for(let b=0;b<A.childNodes.length;b++){const R=A.childNodes[b];if(R.nodeType!==1)continue;const Z=R.getAttribute("id");switch(R.nodeName){case"source":x.sources[Z]=_e(R);break;case"vertices":x.vertices=Le(R);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",R.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":x.primitives.push(ue(R));break;default:console.log(R)}}tt.geometries[v.getAttribute("id")]=x}}function _e(v){const x={array:[],stride:3};for(let A=0;A<v.childNodes.length;A++){const b=v.childNodes[A];if(b.nodeType===1)switch(b.nodeName){case"float_array":x.array=r(b.textContent);break;case"Name_array":x.array=s(b.textContent);break;case"technique_common":const R=n(b,"accessor")[0];R!==void 0&&(x.stride=parseInt(R.getAttribute("stride")));break}}return x}function Le(v){const x={};for(let A=0;A<v.childNodes.length;A++){const b=v.childNodes[A];b.nodeType===1&&(x[b.getAttribute("semantic")]=a(b.getAttribute("source")))}return x}function ue(v){const x={type:v.nodeName,material:v.getAttribute("material"),count:parseInt(v.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let A=0,b=v.childNodes.length;A<b;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"input":const Z=a(R.getAttribute("source")),ie=R.getAttribute("semantic"),Re=parseInt(R.getAttribute("offset")),ye=parseInt(R.getAttribute("set")),Te=ye>0?ie+ye:ie;x.inputs[Te]={id:Z,offset:Re},x.stride=Math.max(x.stride,Re+1),ie==="TEXCOORD"&&(x.hasUV=!0);break;case"vcount":x.vcount=o(R.textContent);break;case"p":x.p=o(R.textContent);break}}return x}function oe(v){const x={};for(let A=0;A<v.length;A++){const b=v[A];x[b.type]===void 0&&(x[b.type]=[]),x[b.type].push(b)}return x}function Fe(v){let x=0;for(let A=0,b=v.length;A<b;A++)v[A].hasUV===!0&&x++;x>0&&x<v.length&&(v.uvsNeedsFix=!0)}function it(v){const x={},A=v.sources,b=v.vertices,R=v.primitives;if(R.length===0)return{};const Z=oe(R);for(const ie in Z){const Re=Z[ie];Fe(Re),x[ie]=Lt(Re,A,b)}return x}function Lt(v,x,A){const b={},R={array:[],stride:0},Z={array:[],stride:0},ie={array:[],stride:0},Re={array:[],stride:0},ye={array:[],stride:0},Te={array:[],stride:4},Ve={array:[],stride:4},ce=new Wt,ze=[];let De=0;for(let $e=0;$e<v.length;$e++){const Xe=v[$e],Vt=Xe.inputs;let wt=0;switch(Xe.type){case"lines":case"linestrips":wt=Xe.count*2;break;case"triangles":wt=Xe.count*3;break;case"polylist":for(let Mt=0;Mt<Xe.count;Mt++){const St=Xe.vcount[Mt];switch(St){case 3:wt+=3;break;case 4:wt+=6;break;default:wt+=(St-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknown primitive type:",Xe.type)}ce.addGroup(De,wt,$e),De+=wt,Xe.material&&ze.push(Xe.material);for(const Mt in Vt){const St=Vt[Mt];switch(Mt){case"VERTEX":for(const ti in A){const _n=A[ti];switch(ti){case"POSITION":const Wi=R.array.length;if(ot(Xe,x[_n],St.offset,R.array),R.stride=x[_n].stride,x.skinWeights&&x.skinIndices&&(ot(Xe,x.skinIndices,St.offset,Te.array),ot(Xe,x.skinWeights,St.offset,Ve.array)),Xe.hasUV===!1&&v.uvsNeedsFix===!0){const Ed=(R.array.length-Wi)/R.stride;for(let kl=0;kl<Ed;kl++)ie.array.push(0,0)}break;case"NORMAL":ot(Xe,x[_n],St.offset,Z.array),Z.stride=x[_n].stride;break;case"COLOR":ot(Xe,x[_n],St.offset,ye.array),ye.stride=x[_n].stride;break;case"TEXCOORD":ot(Xe,x[_n],St.offset,ie.array),ie.stride=x[_n].stride;break;case"TEXCOORD1":ot(Xe,x[_n],St.offset,Re.array),ie.stride=x[_n].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',ti)}}break;case"NORMAL":ot(Xe,x[St.id],St.offset,Z.array),Z.stride=x[St.id].stride;break;case"COLOR":ot(Xe,x[St.id],St.offset,ye.array,!0),ye.stride=x[St.id].stride;break;case"TEXCOORD":ot(Xe,x[St.id],St.offset,ie.array),ie.stride=x[St.id].stride;break;case"TEXCOORD1":ot(Xe,x[St.id],St.offset,Re.array),Re.stride=x[St.id].stride;break}}}return R.array.length>0&&ce.setAttribute("position",new dt(R.array,R.stride)),Z.array.length>0&&ce.setAttribute("normal",new dt(Z.array,Z.stride)),ye.array.length>0&&ce.setAttribute("color",new dt(ye.array,ye.stride)),ie.array.length>0&&ce.setAttribute("uv",new dt(ie.array,ie.stride)),Re.array.length>0&&ce.setAttribute("uv1",new dt(Re.array,Re.stride)),Te.array.length>0&&ce.setAttribute("skinIndex",new dt(Te.array,Te.stride)),Ve.array.length>0&&ce.setAttribute("skinWeight",new dt(Ve.array,Ve.stride)),b.data=ce,b.type=v[0].type,b.materialKeys=ze,b}function ot(v,x,A,b,R=!1){const Z=v.p,ie=v.stride,Re=v.vcount;function ye(ce){let ze=Z[ce+A]*Ve;const De=ze+Ve;for(;ze<De;ze++)b.push(Te[ze]);if(R){const $e=b.length-Ve-1;jt.setRGB(b[$e+0],b[$e+1],b[$e+2],Nt),b[$e+0]=jt.r,b[$e+1]=jt.g,b[$e+2]=jt.b}}const Te=x.array,Ve=x.stride;if(v.vcount!==void 0){let ce=0;for(let ze=0,De=Re.length;ze<De;ze++){const $e=Re[ze];if($e===4){const Xe=ce+ie*0,Vt=ce+ie*1,wt=ce+ie*2,Mt=ce+ie*3;ye(Xe),ye(Vt),ye(Mt),ye(Vt),ye(wt),ye(Mt)}else if($e===3){const Xe=ce+ie*0,Vt=ce+ie*1,wt=ce+ie*2;ye(Xe),ye(Vt),ye(wt)}else if($e>4)for(let Xe=1,Vt=$e-2;Xe<=Vt;Xe++){const wt=ce+ie*0,Mt=ce+ie*Xe,St=ce+ie*(Xe+1);ye(wt),ye(Mt),ye(St)}ce+=ie*$e}}else for(let ce=0,ze=Z.length;ce<ze;ce+=ie)ye(ce)}function En(v){return _(tt.geometries[v],it)}function Tn(v){const x={name:v.getAttribute("name")||"",joints:{},links:[]};for(let A=0;A<v.childNodes.length;A++){const b=v.childNodes[A];if(b.nodeType===1)switch(b.nodeName){case"technique_common":Us(b,x);break}}tt.kinematicsModels[v.getAttribute("id")]=x}function fr(v){return v.build!==void 0?v.build:v}function Jn(v){return _(tt.kinematicsModels[v],fr)}function Us(v,x){for(let A=0;A<v.childNodes.length;A++){const b=v.childNodes[A];if(b.nodeType===1)switch(b.nodeName){case"joint":x.joints[b.getAttribute("sid")]=pr(b);break;case"link":x.links.push(Ri(b));break}}}function pr(v){let x;for(let A=0;A<v.childNodes.length;A++){const b=v.childNodes[A];if(b.nodeType===1)switch(b.nodeName){case"prismatic":case"revolute":x=mr(b);break}}return x}function mr(v){const x={sid:v.getAttribute("sid"),name:v.getAttribute("name")||"",axis:new O,limits:{min:0,max:0},type:v.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let A=0;A<v.childNodes.length;A++){const b=v.childNodes[A];if(b.nodeType===1)switch(b.nodeName){case"axis":const R=r(b.textContent);x.axis.fromArray(R);break;case"limits":const Z=b.getElementsByTagName("max")[0],ie=b.getElementsByTagName("min")[0];x.limits.max=parseFloat(Z.textContent),x.limits.min=parseFloat(ie.textContent);break}}return x.limits.min>=x.limits.max&&(x.static=!0),x.middlePosition=(x.limits.min+x.limits.max)/2,x}function Ri(v){const x={sid:v.getAttribute("sid"),name:v.getAttribute("name")||"",attachments:[],transforms:[]};for(let A=0;A<v.childNodes.length;A++){const b=v.childNodes[A];if(b.nodeType===1)switch(b.nodeName){case"attachment_full":x.attachments.push(gr(b));break;case"matrix":case"translate":case"rotate":x.transforms.push(Ci(b));break}}return x}function gr(v){const x={joint:v.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let A=0;A<v.childNodes.length;A++){const b=v.childNodes[A];if(b.nodeType===1)switch(b.nodeName){case"link":x.links.push(Ri(b));break;case"matrix":case"translate":case"rotate":x.transforms.push(Ci(b));break}}return x}function Ci(v){const x={type:v.nodeName},A=r(v.textContent);switch(x.type){case"matrix":x.obj=new Qe,x.obj.fromArray(A).transpose();break;case"translate":x.obj=new O,x.obj.fromArray(A);break;case"rotate":x.obj=new O,x.obj.fromArray(A),x.angle=ps.degToRad(A[3]);break}return x}function _r(v){const x={name:v.getAttribute("name")||"",rigidBodies:{}};for(let A=0;A<v.childNodes.length;A++){const b=v.childNodes[A];if(b.nodeType===1)switch(b.nodeName){case"rigid_body":x.rigidBodies[b.getAttribute("name")]={},yr(b,x.rigidBodies[b.getAttribute("name")]);break}}tt.physicsModels[v.getAttribute("id")]=x}function yr(v,x){for(let A=0;A<v.childNodes.length;A++){const b=v.childNodes[A];if(b.nodeType===1)switch(b.nodeName){case"technique_common":Ao(b,x);break}}}function Ao(v,x){for(let A=0;A<v.childNodes.length;A++){const b=v.childNodes[A];if(b.nodeType===1)switch(b.nodeName){case"inertia":x.inertia=r(b.textContent);break;case"mass":x.mass=r(b.textContent)[0];break}}}function Ro(v){const x={bindJointAxis:[]};for(let A=0;A<v.childNodes.length;A++){const b=v.childNodes[A];if(b.nodeType===1)switch(b.nodeName){case"bind_joint_axis":x.bindJointAxis.push(Co(b));break}}tt.kinematicsScenes[a(v.getAttribute("url"))]=x}function Co(v){const x={target:v.getAttribute("target").split("/").pop()};for(let A=0;A<v.childNodes.length;A++){const b=v.childNodes[A];if(b.nodeType===1)switch(b.nodeName){case"axis":const R=b.getElementsByTagName("param")[0];x.axis=R.textContent;const Z=x.axis.split("inst_").pop().split("axis")[0];x.jointIndex=Z.substring(0,Z.length-1);break}}return x}function Lo(v){return v.build!==void 0?v.build:v}function Io(v){return _(tt.kinematicsScenes[v],Lo)}function Po(){const v=Object.keys(tt.kinematicsModels)[0],x=Object.keys(tt.kinematicsScenes)[0],A=Object.keys(tt.visualScenes)[0];if(v===void 0||x===void 0)return;const b=Jn(v),R=Io(x),Z=Ye(A),ie=R.bindJointAxis,Re={};for(let Ve=0,ce=ie.length;Ve<ce;Ve++){const ze=ie[Ve],De=xt.querySelector('[sid="'+ze.target+'"]');if(De){const $e=De.parentElement;ye(ze.jointIndex,$e)}}function ye(Ve,ce){const ze=ce.getAttribute("name"),De=b.joints[Ve];Z.traverse(function($e){$e.name===ze&&(Re[Ve]={object:$e,transforms:w(ce),joint:De,position:De.zeroPosition})})}const Te=new Qe;Wn={joints:b&&b.joints,getJointValue:function(Ve){const ce=Re[Ve];if(ce)return ce.position;console.warn("THREE.ColladaLoader: Joint "+Ve+" doesn't exist.")},setJointValue:function(Ve,ce){const ze=Re[Ve];if(ze){const De=ze.joint;if(ce>De.limits.max||ce<De.limits.min)console.warn("THREE.ColladaLoader: Joint "+Ve+" value "+ce+" outside of limits (min: "+De.limits.min+", max: "+De.limits.max+").");else if(De.static)console.warn("THREE.ColladaLoader: Joint "+Ve+" is static.");else{const $e=ze.object,Xe=De.axis,Vt=ze.transforms;Y.identity();for(let wt=0;wt<Vt.length;wt++){const Mt=Vt[wt];if(Mt.sid&&Mt.sid.indexOf(Ve)!==-1)switch(De.type){case"revolute":Y.multiply(Te.makeRotationAxis(Xe,ps.degToRad(ce)));break;case"prismatic":Y.multiply(Te.makeTranslation(Xe.x*ce,Xe.y*ce,Xe.z*ce));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+De.type);break}else switch(Mt.type){case"matrix":Y.multiply(Mt.obj);break;case"translate":Y.multiply(Te.makeTranslation(Mt.obj.x,Mt.obj.y,Mt.obj.z));break;case"scale":Y.scale(Mt.obj);break;case"rotate":Y.multiply(Te.makeRotationAxis(Mt.obj,Mt.angle));break}}$e.matrix.copy(Y),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),Re[Ve].position=ce}}else console.log("THREE.ColladaLoader: "+Ve+" does not exist.")}}}function w(v){const x=[],A=xt.querySelector('[id="'+v.id+'"]');for(let b=0;b<A.childNodes.length;b++){const R=A.childNodes[b];if(R.nodeType!==1)continue;let Z,ie;switch(R.nodeName){case"matrix":Z=r(R.textContent);const Re=new Qe().fromArray(Z).transpose();x.push({sid:R.getAttribute("sid"),type:R.nodeName,obj:Re});break;case"translate":case"scale":Z=r(R.textContent),ie=new O().fromArray(Z),x.push({sid:R.getAttribute("sid"),type:R.nodeName,obj:ie});break;case"rotate":Z=r(R.textContent),ie=new O().fromArray(Z);const ye=ps.degToRad(Z[3]);x.push({sid:R.getAttribute("sid"),type:R.nodeName,obj:ie,angle:ye});break}}return x}function H(v){const x=v.getElementsByTagName("node");for(let A=0;A<x.length;A++){const b=x[A];b.hasAttribute("id")===!1&&b.setAttribute("id",l())}}const Y=new Qe,$=new O;function V(v){const x={name:v.getAttribute("name")||"",type:v.getAttribute("type"),id:v.getAttribute("id"),sid:v.getAttribute("sid"),matrix:new Qe,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let A=0;A<v.childNodes.length;A++){const b=v.childNodes[A];if(b.nodeType!==1)continue;let R;switch(b.nodeName){case"node":x.nodes.push(b.getAttribute("id")),V(b);break;case"instance_camera":x.instanceCameras.push(a(b.getAttribute("url")));break;case"instance_controller":x.instanceControllers.push(de(b));break;case"instance_light":x.instanceLights.push(a(b.getAttribute("url")));break;case"instance_geometry":x.instanceGeometries.push(de(b));break;case"instance_node":x.instanceNodes.push(a(b.getAttribute("url")));break;case"matrix":R=r(b.textContent),x.matrix.multiply(Y.fromArray(R).transpose()),x.transforms[b.getAttribute("sid")]=b.nodeName;break;case"translate":R=r(b.textContent),$.fromArray(R),x.matrix.multiply(Y.makeTranslation($.x,$.y,$.z)),x.transforms[b.getAttribute("sid")]=b.nodeName;break;case"rotate":R=r(b.textContent);const Z=ps.degToRad(R[3]);x.matrix.multiply(Y.makeRotationAxis($.fromArray(R),Z)),x.transforms[b.getAttribute("sid")]=b.nodeName;break;case"scale":R=r(b.textContent),x.matrix.scale($.fromArray(R)),x.transforms[b.getAttribute("sid")]=b.nodeName;break;case"extra":break;default:console.log(b)}}return ct(x.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",x.id):tt.nodes[x.id]=x,x}function de(v){const x={id:a(v.getAttribute("url")),materials:{},skeletons:[]};for(let A=0;A<v.childNodes.length;A++){const b=v.childNodes[A];switch(b.nodeName){case"bind_material":const R=b.getElementsByTagName("instance_material");for(let Z=0;Z<R.length;Z++){const ie=R[Z],Re=ie.getAttribute("symbol"),ye=ie.getAttribute("target");x.materials[Re]=a(ye)}break;case"skeleton":x.skeletons.push(a(b.textContent));break}}return x}function be(v,x){const A=[],b=[];let R,Z,ie;for(R=0;R<v.length;R++){const Te=v[R];let Ve;if(ct(Te))Ve=gt(Te),Ne(Ve,x,A);else if(Tt(Te)){const ze=tt.visualScenes[Te].children;for(let De=0;De<ze.length;De++){const $e=ze[De];if($e.type==="JOINT"){const Xe=gt($e.id);Ne(Xe,x,A)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Te)}for(R=0;R<x.length;R++)for(Z=0;Z<A.length;Z++)if(ie=A[Z],ie.bone.name===x[R].name){b[R]=ie,ie.processed=!0;break}for(R=0;R<A.length;R++)ie=A[R],ie.processed===!1&&(b.push(ie),ie.processed=!0);const Re=[],ye=[];for(R=0;R<b.length;R++)ie=b[R],Re.push(ie.bone),ye.push(ie.boneInverse);return new vo(Re,ye)}function Ne(v,x,A){v.traverse(function(b){if(b.isBone===!0){let R;for(let Z=0;Z<x.length;Z++){const ie=x[Z];if(ie.name===b.name){R=ie.boneInverse;break}}R===void 0&&(R=new Qe),A.push({bone:b,boneInverse:R,processed:!1})}})}function Ae(v){const x=[],A=v.matrix,b=v.nodes,R=v.type,Z=v.instanceCameras,ie=v.instanceControllers,Re=v.instanceLights,ye=v.instanceGeometries,Te=v.instanceNodes;for(let ce=0,ze=b.length;ce<ze;ce++)x.push(gt(b[ce]));for(let ce=0,ze=Z.length;ce<ze;ce++){const De=Ee(Z[ce]);De!==null&&x.push(De.clone())}for(let ce=0,ze=ie.length;ce<ze;ce++){const De=ie[ce],$e=G(De.id),Xe=En($e.id),Vt=We(Xe,De.materials),wt=De.skeletons,Mt=$e.skin.joints,St=be(wt,Mt);for(let ti=0,_n=Vt.length;ti<_n;ti++){const Wi=Vt[ti];Wi.isSkinnedMesh&&(Wi.bind(St,$e.skin.bindMatrix),Wi.normalizeSkinWeights()),x.push(Wi)}}for(let ce=0,ze=Re.length;ce<ze;ce++){const De=k(Re[ce]);De!==null&&x.push(De.clone())}for(let ce=0,ze=ye.length;ce<ze;ce++){const De=ye[ce],$e=En(De.id),Xe=We($e,De.materials);for(let Vt=0,wt=Xe.length;Vt<wt;Vt++)x.push(Xe[Vt])}for(let ce=0,ze=Te.length;ce<ze;ce++)x.push(gt(Te[ce]).clone());let Ve;if(b.length===0&&x.length===1)Ve=x[0];else{Ve=R==="JOINT"?new wl:new Pn;for(let ce=0;ce<x.length;ce++)Ve.add(x[ce])}return Ve.name=R==="JOINT"?v.sid:v.name,Ve.matrix.copy(A),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve}const Ke=new jn({name:Vn.DEFAULT_MATERIAL_NAME,color:16711935});function et(v,x){const A=[];for(let b=0,R=v.length;b<R;b++){const Z=x[v[b]];Z===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",v[b]),A.push(Ke)):A.push(ne(Z))}return A}function We(v,x){const A=[];for(const b in v){const R=v[b],Z=et(R.materialKeys,x);if(Z.length===0&&(b==="lines"||b==="linestrips"?Z.push(new Ei):Z.push(new al)),b==="lines"||b==="linestrips")for(let Te=0,Ve=Z.length;Te<Ve;Te++){const ce=Z[Te];if(ce.isMeshPhongMaterial===!0||ce.isMeshLambertMaterial===!0){const ze=new Ei;ze.color.copy(ce.color),ze.opacity=ce.opacity,ze.transparent=ce.transparent,Z[Te]=ze}}const ie=R.data.attributes.skinIndex!==void 0,Re=Z.length===1?Z[0]:Z;let ye;switch(b){case"lines":ye=new lr(R.data,Re);break;case"linestrips":ye=new Mo(R.data,Re);break;case"triangles":case"polylist":ie?ye=new ed(R.data,Re):ye=new $t(R.data,Re);break}A.push(ye)}return A}function ct(v){return tt.nodes[v]!==void 0}function gt(v){return _(tt.nodes[v],Ae)}function zt(v){const x={name:v.getAttribute("name"),children:[]};H(v);const A=n(v,"node");for(let b=0;b<A.length;b++)x.children.push(V(A[b]));tt.visualScenes[v.getAttribute("id")]=x}function It(v){const x=new Pn;x.name=v.name;const A=v.children;for(let b=0;b<A.length;b++){const R=A[b];x.add(gt(R.id))}return x}function Tt(v){return tt.visualScenes[v]!==void 0}function Ye(v){return _(tt.visualScenes[v],It)}function Ft(v){const x=n(v,"instance_visual_scene")[0];return Ye(a(x.getAttribute("url")))}function yt(){const v=tt.clips;if(c(v)===!0){if(c(tt.animations)===!1){const x=[];for(const A in tt.animations){const b=M(A);for(let R=0,Z=b.length;R<Z;R++)x.push(b[R])}fi.push(new ll("default",-1,x))}}else for(const x in v)fi.push(W(x))}function cn(v){let x="";const A=[v];for(;A.length;){const b=A.shift();b.nodeType===Node.TEXT_NODE?x+=b.textContent:(x+=`
`,A.push(...b.childNodes))}return x.trim()}if(e.length===0)return{scene:new Tl};const Qn=new DOMParser().parseFromString(e,"application/xml"),xt=n(Qn,"COLLADA")[0],ei=Qn.getElementsByTagName("parsererror")[0];if(ei!==void 0){const v=n(ei,"div")[0];let x;return v?x=v.textContent:x=cn(ei),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,x),null}const Ot=xt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Ot);const un=d(n(xt,"asset")[0]),dn=new sd(this.manager);dn.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let qt;pu&&(qt=new pu(this.manager),qt.setPath(this.resourcePath||t));const jt=new qe,fi=[];let Wn={},bd=0;const tt={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};p(xt,"library_animations","animation",m),p(xt,"library_animation_clips","animation_clip",z),p(xt,"library_controllers","controller",ae),p(xt,"library_images","image",J),p(xt,"library_effects","effect",Ue),p(xt,"library_materials","material",X),p(xt,"library_cameras","camera",He),p(xt,"library_lights","light",Je),p(xt,"library_geometries","geometry",fe),p(xt,"library_nodes","node",V),p(xt,"library_visual_scenes","visual_scene",zt),p(xt,"library_kinematics_models","kinematics_model",Tn),p(xt,"library_physics_models","physics_model",_r),p(xt,"scene","instance_kinematics_scene",Ro),g(tt.animations,C),g(tt.clips,te),g(tt.controllers,Ce),g(tt.images,ee),g(tt.effects,P),g(tt.materials,le),g(tt.cameras,he),g(tt.lights,st),g(tt.geometries,it),g(tt.visualScenes,It),yt(),Po();const xr=Ft(n(xt,"scene")[0]);return xr.animations=fi,un.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),xr.rotation.set(-Math.PI/2,0,0)),xr.scale.multiplyScalar(un.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),fi},kinematics:Wn,library:tt,scene:xr}}}let y={camera:null,scene:null,renderer:null,model:null,lights:{},zoom:1,currentModelType:"Default Torus Knot",presets:JSON.parse(localStorage.getItem("viewerPresets")||"{}"),lightingMode:"basic",materialMode:"default",transparencyMode:"standard",objectTransparency:1,surfaceTransparency:1,surfaceExtractionMode:"none",surfaceExtractionEnabled:!1,alphaValue:.1,raycastSamples:16,visibilityThreshold:.6,maxRayDistance:10,modelYaw:0,modelPitch:0,modelRoll:0,guideLines:[{id:0,thickness:5,colour:"#FFFF66",transparency:.5,angle:0,posY:0}],orientationWidget:{enabled:!0,size:{width:120,height:120},position:{x:10,y:50},camera:null,scene:null,axesHelper:null,compass:null,lastModelRotation:{x:0,y:0,z:0}},lightDisplayMode:"arrows",leftLightDirectionIn:!0,rightLightDirectionIn:!0},yn={isDragging:!1,isLeftButton:!1,isRightButton:!1,isCtrlDrag:!1,previousMousePosition:{x:0,y:0}};const _s=new Map;function ds(i){return parseFloat(i).toFixed(2)}function pt(i){return i*(180/Math.PI)}function tn(i){return i*(Math.PI/180)}function q(i,e){const t=document.getElementById(i);t?t.value=e:console.warn(`Element with ID '${i}' not found for safeSetValue.`)}function Gt(i,e="info"){const t=document.getElementById("uploadStatus");if(t){t.textContent=i,t.className=`upload-status ${e}`;const n=e==="loading"?0:e==="error"?5e3:3e3;n>0&&setTimeout(()=>{t.textContent===i&&(t.textContent="",t.className="upload-status")},n)}}function Ie(i,e,t){const n=document.getElementById(i);n?(n.addEventListener(e,t),console.log(`Event listener added: ${i} -> ${e}`)):console.warn(`Element with ID '${i}' not found for safeAddEventListener.`)}class py{constructor(e={}){this.registry=new Map,this.debug=e.debug||!1,this.errorHandler=e.errorHandler||this.defaultErrorHandler,this.debug&&console.log("ControlSync initialized with debug mode")}register(e,t,n={}){try{const s=typeof e=="string"?document.getElementById(e):e,r=typeof t=="string"?document.getElementById(t):t;if(!s||!r)return this.errorHandler("Missing element(s)",{primary:typeof e=="string"?e:e?.id,secondary:typeof t=="string"?t:t?.id,primaryFound:!!s,secondaryFound:!!r});const o={type:n.type||"slider-number",valueType:n.valueType||"float",customValidator:n.customValidator||null,beforeSync:n.beforeSync||null,afterSync:n.afterSync||null,...n},a=`${s.id||"el1"}_${r.id||"el2"}`,l=[],c=u=>this.sync(s,r,o,"primary-to-secondary");s.addEventListener("input",c),l.push({element:s,event:"input",listener:c});const d=u=>this.sync(r,s,o,"secondary-to-primary");return r.addEventListener("input",d),l.push({element:r,event:"input",listener:d}),this.registry.set(a,{primary:s,secondary:r,config:o,listeners:l}),this.debug&&console.log(`ControlSync: Registered pair '${a}'`,{config:o}),!0}catch(s){return this.errorHandler("Registration failed",{error:s,primary:e,secondary:t,options:n})}}getRegistry(){const e={};return this.registry.forEach((t,n)=>{e[n]={primary:t.primary.id||t.primary.tagName,secondary:t.secondary.id||t.secondary.tagName,type:t.config.type,valueType:t.config.valueType}}),e}sync(e,t,n,s){try{let r=e.value;if(n.customValidator){const l=n.customValidator(r,e,t);if(l===!1)return;typeof l!="boolean"&&(r=l)}n.beforeSync&&n.beforeSync(r,e,t,s);const o=this.parseValue(r,n.valueType),a=this.formatValue(o,n.valueType);t.value!==a&&(t.value=a,n.afterSync&&n.afterSync(o,e,t,s),this.debug&&console.log("ControlSync sync:",{direction:s,value:r,source:e.id||e.tagName,target:t.id||t.tagName}))}catch(r){this.errorHandler("Sync error",{error:r,source:e,target:t,direction:s})}}parseValue(e,t){switch(t){case"int":return parseInt(e,10);case"float":return parseFloat(e);case"string":return String(e);default:return parseFloat(e)}}formatValue(e,t){if(isNaN(e))return"";switch(t){case"int":return Math.round(e).toString();case"float":return e.toString();case"string":return String(e);default:return e.toString()}}defaultErrorHandler(e,t){return console.error(`ControlSync Error: ${e}`,t),!1}destroy(){this.registry.forEach((e,t)=>{e.listeners.forEach(({element:n,event:s,listener:r})=>{n.removeEventListener(s,r)})}),this.registry.clear(),this.debug&&console.log("ControlSync: All pairs destroyed")}}const cr=new py({debug:!1});window.testControlSync=function(){console.log("=== ControlSync Registry ===");const i=cr.getRegistry();console.table(i),console.log(`Total synchronized pairs: ${Object.keys(i).length}`),console.log(`
=== Enabling Debug Mode ===`),mu(!0),setTimeout(()=>{console.log(`
=== Disabling Debug Mode ===`),mu(!1)},2e3)};function Et(i,e){return cr.register(i,e,{type:"slider-number",valueType:"float"})}function Zr(i,e){return cr.register(i,e,{type:"slider-number",valueType:"float"})}function mu(i){cr.debug=i,i&&console.log("ControlSync debug mode enabled. Registry:",cr.getRegistry())}async function my(i){return i}function gy(){const i=document.getElementById("alphaValueGroup"),e=document.getElementById("raycastParametersGroup"),t=document.getElementById("visibilityThresholdGroup");i&&(i.style.display="none"),e&&(e.style.display="none"),t&&(t.style.display="none")}function hl(){const i=document.getElementById("basicModeButton"),e=document.getElementById("complexModeButton");document.getElementById("left-direction-arrow"),document.getElementById("right-direction-arrow"),document.getElementById("lightPad"),i&&e&&(y.lightingMode==="basic"?(i.classList.add("active"),e.classList.remove("active")):(e.classList.add("active"),i.classList.remove("active")),Rs())}function gd(i){console.log("Updating material color to:",i),y.model&&(y.model.material?gu(y.model,i):y.model.children&&y.model.traverse(e=>{e.isMesh&&e.material&&gu(e,i)}))}function gu(i,e){i.material._isWBOIT||i.material._isThreshold?(i.material.color.setStyle(e),console.log("Color set on enhanced mesh:",i.material.color)):(i.material.color.setStyle(e),console.log("Color set on standard mesh:",i.material.color))}function ui(i,e){console.log(`Updating material ${i} to:`,e),y.model&&(y.model.material?_u(y.model,i,e):y.model.children&&y.model.traverse(t=>{t.isMesh&&t.material&&_u(t,i,e)}))}function _u(i,e,t){i.material._isWBOIT||i.material._isThreshold?(i.material[e]=t,i.material._originalMaterial&&(i.material._originalMaterial[e]=t)):i.material[e]=t}async function _y(i){console.log("Updating material transparency to:",i),y.surfaceTransparency=i,_d(i)}async function yy(i){console.log("Applying global transparency:",i),y.model&&(i<1?y.model.traverse(async e=>{if(e.isMesh&&e.material){_s.has(e.uuid)||_s.set(e.uuid,{material:e.material.clone(),geometry:e.geometry.clone()});try{const t=await my(e.geometry),n=_s.get(e.uuid).material.clone();n.transparent=!0,n.opacity=i,fl(n,i),e.geometry=t,e.material=n,e.material.needsUpdate=!0}catch(t){console.warn("External surface extraction failed, using standard transparency:",t);const n=_s.get(e.uuid).material.clone();n.transparent=!0,n.opacity=i,fl(n,i),e.material=n,e.material.needsUpdate=!0}}}):pl())}function fl(i,e){switch(y.transparencyMode){case"threshold":xy(i,e);break;case"wboit":vy(i,e);break;case"advanced":My(i,e);break;case"standard":yu(i,e);break;case"dithered":Sy(i,e);break;default:yu(i,e)}}function xy(i,e){i.transparent=!0,i.opacity=e,i.side=Zt,i.depthWrite=!1,e<.1?(i.blending=lo,i.opacity=e*.5):(i.blending=Nn,i.premultipliedAlpha=!0),i.alphaTest=0,i._isThreshold=!0}function vy(i,e){i.transparent=!1,i.alphaTest=Math.max(.01,1-e),i.side=Zt,i.depthWrite=!0,i.depthTest=!0,i.blending=Nn,i.premultipliedAlpha=!1,i._isWBOIT=!0}function My(i,e){i.transparent=!0,i.opacity=e,i.side=Sn,i.depthWrite=!1,e<.3?(i.blending=lo,i.opacity=e*.7):e<.7?(i.blending=Nn,i.premultipliedAlpha=!0):(i.blending=Nn,i.alphaTest=.05)}function yu(i,e){i.transparent=!0,i.opacity=e,i.side=Zt,i.depthWrite=!0,i.blending=Nn,i.alphaTest=0,i.premultipliedAlpha=!1}function Sy(i,e){i.transparent=!0,i.opacity=e,i.side=Zt,i.depthWrite=!0,i.blending=Nn,i.alphaTest=0}function pl(){console.log("Restoring original materials and geometry"),y.model&&y.model.traverse(i=>{if(i.isMesh&&_s.has(i.uuid)){const e=_s.get(i.uuid);e.material&&(i.material=e.material,i.material.needsUpdate=!0),e.geometry&&(i.geometry=e.geometry)}})}async function js(){console.log("Updating dual transparency - Object:",y.objectTransparency,"Surface:",y.surfaceTransparency),y.objectTransparency<1?await yy(y.objectTransparency):y.surfaceTransparency<1?(pl(),_d(y.surfaceTransparency)):pl()}function hs(){if(!y.model)return;const i=new ln().copy(y.model.rotation).reorder("YXZ");y.modelPitch=pt(i.x),y.modelYaw=pt(i.y),y.modelRoll=pt(i.z),q("modelPitch",Math.round(y.modelPitch)),q("modelPitchNum",Math.round(y.modelPitch)),q("modelYaw",Math.round(y.modelYaw)),q("modelYawNum",Math.round(y.modelYaw)),q("modelRoll",Math.round(y.modelRoll)),q("modelRollNum",Math.round(y.modelRoll))}function fs(){if(!y.model)return;const i=new ln().copy(y.model.rotation).reorder("XYZ");q("modelRotX",Math.round(pt(i.x))),q("modelRotXNum",Math.round(pt(i.x))),q("modelRotY",Math.round(pt(i.y))),q("modelRotYNum",Math.round(pt(i.y))),q("modelRotZ",Math.round(pt(i.z))),q("modelRotZNum",Math.round(pt(i.z)))}function _d(i){console.log("Applying surface transparency:",i),y.model&&y.model.traverse(e=>{if(e.isMesh&&e.material){const t=e.material;t.transparent=i<1,t.opacity=i,fl(t,i),t.needsUpdate=!0}})}function by(i){if(!i)throw new Error("No file provided");const e=[".obj",".stl",".gltf",".glb",".dae"],t=i.name.toLowerCase();if(!e.some(s=>t.endsWith(s)))throw new Error(`Unsupported file format: "${i.name}". Currently supported: .obj, .stl, .gltf, .glb, .dae`);return console.log(`File validated: ${i.name}, size: ${(i.size/1024).toFixed(2)}KB`),t.split(".").pop()}function hr(){["modelRotX","modelRotY","modelRotZ","modelRotXNum","modelRotYNum","modelRotZNum","modelYaw","modelPitch","modelRoll","modelYawNum","modelPitchNum","modelRollNum"].forEach(i=>{q(i,0)}),y.modelYaw=0,y.modelPitch=0,y.modelRoll=0}function Ey(){q("materialColor","#4CAF50"),q("metalness",.1),q("metalnessNum",.1),q("roughness",.8),q("roughnessNum",.8),q("transparency",1),q("transparencyNum",1)}function xu(i){try{const e=by(i),t=URL.createObjectURL(i),n=setTimeout(()=>{Gt("Upload timed out. Please try again.","error"),URL.revokeObjectURL(t)},3e4),s=o=>{clearTimeout(n),Ey(),Gt(`✅ ${o} loaded successfully!`,"success")},r=o=>{clearTimeout(n),Gt(o,"error"),URL.revokeObjectURL(t)};switch(e){case"obj":Xy(t,i.name,s,r);break;case"stl":Yy(t,i.name,s,r);break;case"gltf":case"glb":qy(t,i.name,s,r);break;case"dae":jy(t,i.name,s,r);break;default:clearTimeout(n),Gt("Currently only .obj, .stl, .gltf, .glb, and .dae files are supported","error"),URL.revokeObjectURL(t)}}catch(e){Gt(e.message,"error")}}function vu(i){yn.isDragging=!0,yn.previousMousePosition={x:i.clientX,y:i.clientY},yn.isLeftButton=i.button===0,yn.isRightButton=i.button===2}function Mu(i){if(!yn.isDragging)return;const e={x:i.clientX-yn.previousMousePosition.x,y:i.clientY-yn.previousMousePosition.y};if(yn.isLeftButton&&y.model){const n=new O().setFromMatrixColumn(y.camera.matrixWorld,0),s=new O().setFromMatrixColumn(y.camera.matrixWorld,1),r=new Hn().setFromAxisAngle(s,e.x*.005),o=new Hn().setFromAxisAngle(n,e.y*.005);y.model.quaternion.premultiply(r),y.model.quaternion.premultiply(o);const a=new ln().setFromQuaternion(y.model.quaternion,"YXZ");y.modelPitch=pt(a.x),y.modelYaw=pt(a.y),y.modelRoll=pt(a.z),q("modelPitch",Math.round(y.modelPitch)),q("modelPitchNum",Math.round(y.modelPitch)),q("modelYaw",Math.round(y.modelYaw)),q("modelYawNum",Math.round(y.modelYaw)),q("modelRoll",Math.round(y.modelRoll)),q("modelRollNum",Math.round(y.modelRoll));const l=new ln().setFromQuaternion(y.model.quaternion,"XYZ");q("modelRotX",Math.round(pt(l.x))),q("modelRotXNum",Math.round(pt(l.x))),q("modelRotY",Math.round(pt(l.y))),q("modelRotYNum",Math.round(pt(l.y))),q("modelRotZ",Math.round(pt(l.z))),q("modelRotZNum",Math.round(pt(l.z)))}else if(yn.isRightButton){const n=new O(e.x*.01,-e.y*.01,0);n.applyQuaternion(y.camera.quaternion),y.camera.position.add(n)}yn.previousMousePosition={x:i.clientX,y:i.clientY},vt()}function Su(){yn.isDragging=!1,yn.isLeftButton=!1,yn.isRightButton=!1,yn.isCtrlDrag=!1}function bu(i){i.preventDefault();const e=i.deltaY>0?1.1:.9;y.camera.position.multiplyScalar(e);const t=y.camera.position.length();t<1&&y.camera.position.normalize().multiplyScalar(1),t>50&&y.camera.position.normalize().multiplyScalar(50),vt()}function Eu(i){i.preventDefault()}function vt(){if(y.camera&&y.model){const i=y.camera.position,e=y.camera.rotation,t=y.model.rotation,n=y.camera.position.length();y.zoom=5/n,q("posX",ds(i.x)),q("posY",ds(i.y)),q("posZ",ds(i.z)),q("posXNum",ds(i.x)),q("posYNum",ds(i.y)),q("posZNum",ds(i.z));const s=pt(e.x),r=pt(e.y),o=pt(e.z);q("rotX",Math.round(s)),q("rotY",Math.round(r)),q("rotZ",Math.round(o)),q("rotXNum",Math.round(s)),q("rotYNum",Math.round(r)),q("rotZNum",Math.round(o));const a=pt(t.x),l=pt(t.y),c=pt(t.z);q("modelRotX",Math.round(a)),q("modelRotY",Math.round(l)),q("modelRotZ",Math.round(c)),q("modelRotXNum",Math.round(a)),q("modelRotYNum",Math.round(l)),q("modelRotZNum",Math.round(c));const d=document.getElementById("info");d&&(d.innerHTML=`
                <h4>VIEW</h4>
                <p><span class="info-label">Camera Position:</span><span class="info-values-container"><span class="info-value-box">${Math.round(i.x)}</span><span class="info-value-box">${Math.round(i.y)}</span><span class="info-value-box">${Math.round(i.z)}</span></span></p>
                <p><span class="info-label">Model Rotation:</span><span class="info-values-container"><span class="info-value-box">${Math.round(a)}°</span><span class="info-value-box">${Math.round(l)}°</span><span class="info-value-box">${Math.round(c)}°</span></span></p>
                <p><span class="info-label">Model:</span><span class="info-values-container"><span class="model-name-box">${y.currentModelType}</span></span></p>
            `),Ty(i,t,a,l,c,e,s,r,o)}}function Ty(i,e,t,n,s,r,o,a,l){const c=document.getElementById("model-rotation-display");c&&(c.innerHTML=`<span>${Math.round(t)}°</span><span>${Math.round(n)}°</span><span>${Math.round(s)}°</span>`);const d=document.getElementById("camera-position-display");d&&(d.innerHTML=`<span>${Math.round(i.x)}</span><span>${Math.round(i.y)}</span><span>${Math.round(i.z)}</span>`);const u=document.getElementById("camera-rotation-display");u&&(u.innerHTML=`<span>${Math.round(o)}°</span><span>${Math.round(a)}°</span><span>${Math.round(l)}°</span>`);const h=document.getElementById("model-attitude-display");if(h){const p=y.modelYaw||0,g=y.modelPitch||0,_=y.modelRoll||0;h.innerHTML=`<span>${Math.round(p)}°</span><span>${Math.round(g)}°</span><span>${Math.round(_)}°</span>`}}function wo(i){i.position.set(0,0,0),i.rotation.set(0,0,0),i.scale.set(1,1,1),i.updateMatrixWorld(!0);const e=new bn().setFromObject(i);if(e.isEmpty()){console.warn("Model has empty bounding box, using default scaling");return}const t=e.getCenter(new O),n=e.getSize(new O);i.position.copy(t).negate();const s=Math.max(n.x,n.y,n.z);if(s>0){const l=2.5/s;i.scale.setScalar(l),console.log(`Model scaled by factor: ${l.toFixed(3)}, original size: ${s.toFixed(3)}`)}i.updateMatrixWorld(!0);const o=new bn().setFromObject(i).getCenter(new O);i.position.sub(o)}function wy(){if(!y.model||!y.camera)return;const i=new bn().setFromObject(y.model);if(i.isEmpty()){console.warn("Model has empty bounding box, cannot focus.");return}const e=i.getCenter(new O),t=i.getSize(new O),n=Math.max(t.x,t.y,t.z),s=y.camera.fov*(Math.PI/180);let r=Math.abs(n/2/Math.tan(s/2));const o=y.camera.aspect,a=2*Math.atan(Math.tan(s/2)*o),l=Math.abs(t.x/2/Math.tan(a/2));r=Math.max(r,l),r*=1.2,y.camera.position.copy(e),y.camera.position.z+=r,y.camera.lookAt(e);const c=y.camera.position.x,d=y.camera.position.y,u=y.camera.position.z;(Math.abs(c)>10||Math.abs(d)>10||u>20||u<1)&&(Ay(c,d,u),console.log(`Camera control ranges expanded for F key focus: X=${c.toFixed(1)}, Y=${d.toFixed(1)}, Z=${u.toFixed(1)}`)),vt()}function Ay(i,e,t){const s=Math.min(-10,Math.floor(i*1.2)),r=Math.max(10,Math.ceil(i*1.2)),o=Math.min(-10,Math.floor(e*1.2)),a=Math.max(10,Math.ceil(e*1.2)),l=Math.min(1,Math.floor(t/1.2)),c=Math.max(20,Math.ceil(t*1.2));[{id:"posX",min:s,max:r},{id:"posY",min:o,max:a},{id:"posZ",min:l,max:c}].forEach(u=>{const h=document.getElementById(u.id),p=document.getElementById(u.id+"Num");h&&(h.min=u.min,h.max=u.max),p&&(p.min=u.min,p.max=u.max)}),Ry(s,r,o,a,l,c)}function Ry(i,e,t,n,s,r){let o=document.getElementById("camera-range-feedback");o||(o=document.createElement("div"),o.id="camera-range-feedback",o.style.cssText=`
            position: fixed;
            top: 50px;
            right: 20px;
            background: rgba(255, 255, 255, 0.95);
            border: 1px solid #ccc;
            border-radius: 4px;
            padding: 8px 12px;
            font-size: 11px;
            color: #333;
            z-index: 1000;
            max-width: 200px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        `,document.body.appendChild(o)),o.innerHTML=`
        <strong>Camera Ranges Expanded</strong><br>
        X: ${i} to ${e}<br>
        Y: ${t} to ${n}<br>
        Z: ${s} to ${r}<br>
        <small style="color: #666;">F key focus required larger ranges</small>
    `,setTimeout(()=>{o&&o.parentNode&&o.parentNode.removeChild(o)},4e3)}function Cy(){[{id:"posX",min:-10,max:10},{id:"posY",min:-10,max:10},{id:"posZ",min:1,max:20}].forEach(e=>{const t=document.getElementById(e.id),n=document.getElementById(e.id+"Num");t&&(t.min=e.min,t.max=e.max),n&&(n.min=e.min,n.max=e.max)}),console.log("Camera control ranges reset to default values")}function Ly(i,e=""){const t=prompt("Enter filename (without extension):",i);return t===null?null:t.trim()===""?i+e:t.trim()+e}async function xa(i,e,t){if(console.log("saveFileWithDialog called with:",{defaultFilename:e,mimeType:t}),console.log("File System Access API available:","showSaveFilePicker"in window),"showSaveFilePicker"in window)try{console.log("Attempting to use File System Access API...");const n={suggestedName:e,types:[{description:t==="image/png"?"PNG Image":"JSON File",accept:t==="image/png"?{"image/png":[".png"]}:{"application/json":[".json"]}}]},r=await(await window.showSaveFilePicker(n)).createWritable();await r.write(i),await r.close(),console.log("File saved successfully using File System Access API");return}catch(n){if(n.name==="AbortError"){console.log("User cancelled the save operation");return}console.error("File System Access API failed:",n)}console.log("Falling back to filename prompt...");try{const n=e.includes(".")?"."+e.split(".").pop():"",s=e.replace(n,""),r=Ly(s,n);if(r===null){console.log("User cancelled filename prompt");return}Tu(i,r)}catch(n){console.error("Filename prompt failed:",n),console.log("Using direct download fallback"),Tu(i,e)}}function Tu(i,e){const t=URL.createObjectURL(i),n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(t)}function wu(i){try{console.log("Starting high-quality capture...");const e=document.getElementById("guideLineOverlay");if(e&&(e.style.display="none"),!y.model){console.error("No model to capture"),e&&(e.style.display="block");return}const t=new bn().setFromObject(y.model),n=t.getSize(new O),s=t.getCenter(new O),r=Math.max(n.x,n.y,n.z),o=Math.max(2048,r*200),a=Math.min(o,4096),l=Math.min(o,4096),c=new Bl({alpha:!0,antialias:!0,preserveDrawingBuffer:!0});c.setSize(a,l),c.setClearColor(0,0);const d=y.camera.clone();d.aspect=a/l;const u=d.fov*(Math.PI/180),h=2*Math.atan(Math.tan(u/2)*d.aspect),p=r/2/Math.tan(u/2),g=r/2/Math.tan(h/2),_=Math.max(p,g)*1.2,m=new O;y.camera.getWorldDirection(m),d.position.copy(s),d.position.addScaledVector(m,-_),d.lookAt(s),d.updateProjectionMatrix(),c.render(y.scene,d);const f=c.domElement,L=f.getContext("2d"),C=document.createElement("canvas"),M=10;C.width=a+M*2,C.height=l+M*2,C.getContext("2d").drawImage(f,M,M),C.toBlob(I=>{i(I),e&&(e.style.display="block"),c.dispose(),console.log("High-quality capture completed successfully")},"image/png")}catch(e){console.error("Error in captureHighQualityFrame:",e);const t=document.getElementById("guideLineOverlay");t&&(t.style.display="block"),console.log("Falling back to regular capture..."),yd(i)}}function yd(i){const e=document.getElementById("guideLineOverlay");e&&(e.style.display="none"),y.renderer.render(y.scene,y.camera),y.renderer.domElement.toBlob(t=>{i(t),e&&(e.style.display="block")},"image/png")}function xd(){requestAnimationFrame(xd),Dy(),y.renderer.autoClear=!1,y.renderer.clear(),y.renderer.render(y.scene,y.camera),Oy(),vt()}function Iy(){if(console.log("initOrientationWidget called, enabled:",y.orientationWidget.enabled),!!y.orientationWidget.enabled)try{const i=y.orientationWidget,e=document.getElementById("orientationWidget");if(!e){console.warn("Orientation widget canvas not found, disabling widget"),y.orientationWidget.enabled=!1;return}i.renderer=new Bl({canvas:e,alpha:!0,antialias:!0,preserveDrawingBuffer:!1}),i.renderer.setSize(120,120),i.renderer.setClearColor(0,0),i.camera=new nn(50,1,.1,100),i.camera.position.set(0,0,5),i.scene=new Tl;const t=new Nc(1.33),n=new Pn;n.add(t);const s=6,r=.035;for(let o=0;o<s;o++){const a=new Nc(1.33),l=o/s*Math.PI*2,c=Math.cos(l)*r,d=Math.sin(l)*r;a.position.set(c,d,0),a.material&&(a.material.transparent=!0,a.material.opacity=.35),n.add(a)}i.scene.add(n),i.axesHelper=n,i.labelGroup=new Pn,i.scene.add(i.labelGroup),Ny(i),Py(),Fy(i,e),console.log("Orientation widget initialized successfully, scene children:",i.scene.children.length)}catch(i){console.warn("Orientation widget disabled due to error:",i),y.orientationWidget.enabled=!1}}function Py(){const i=y.orientationWidget,e=new Il(1.2,1.4,16),t=new jn({color:6710886,transparent:!0,opacity:.3,side:Sn}),n=new $t(e,t);n.rotation.x=-Math.PI/2,i.scene.add(n),i.compass=n}function Ny(i){const e=["X","Y","Z"],t=["#ff0000","#00ff00","#0000ff"],n=[new O(1.7,0,0),new O(0,1.7,0),new O(0,0,1.7)];i.axisLabels=[],e.forEach((s,r)=>{const o=document.createElement("canvas"),a=o.getContext("2d");o.width=64,o.height=64,a.clearRect(0,0,64,64),a.fillStyle=t[r],a.font="bold 48px Arial",a.textAlign="center",a.textBaseline="middle",a.fillText(s,32,32);const l=new hf(o);l.needsUpdate=!0;const c=new Ju({map:l,transparent:!0,alphaTest:.1}),d=new nf(c);d.position.copy(n[r]),d.scale.set(.5,.5,1),d.name=`${s}_label`,console.log(`Created ${s} label at position:`,n[r].clone()),i.labelGroup.add(d),i.axisLabels.push(d)})}function Dy(){if(!y.model||!y.orientationWidget.enabled)return;const i=y.orientationWidget,e=y.model.rotation;(Math.abs(e.x-i.lastModelRotation.x)>.01||Math.abs(e.y-i.lastModelRotation.y)>.01||Math.abs(e.z-i.lastModelRotation.z)>.01)&&i.axesHelper&&(i.axesHelper.rotation.copy(e),i.labelGroup&&i.labelGroup.rotation.copy(e),i.axisLabels&&i.camera&&Uy(i),i.lastModelRotation={x:e.x,y:e.y,z:e.z})}function Uy(i){if(!i.axisLabels||!i.camera)return;const e=new O(0,0,-1);e.applyQuaternion(i.camera.quaternion);const t=[new O(1,0,0),new O(0,1,0),new O(0,0,1)];t.forEach(n=>{n.applyEuler(i.axesHelper.rotation)}),i.axisLabels.forEach((n,s)=>{const r=Math.abs(t[s].dot(e)),o=.996;n.visible=r<o})}function Fy(i,e){let t=!1,n={x:0,y:0},s=.01;e.addEventListener("dblclick",o=>{o.preventDefault(),o.stopPropagation(),y.model&&(y.model.rotation.set(0,0,0),q("modelRotX",0),q("modelRotXNum",0),q("modelRotY",0),q("modelRotYNum",0),q("modelRotZ",0),q("modelRotZNum",0),vt(),console.log("Model rotation reset to (0, 0, 0)"))}),e.addEventListener("mousedown",o=>{o.preventDefault(),o.stopPropagation(),t=!0;const a=e.getBoundingClientRect();n={x:o.clientX-a.left,y:o.clientY-a.top},e.style.cursor="grabbing"}),e.addEventListener("mousemove",o=>{if(!t||!y.model)return;o.preventDefault();const a=e.getBoundingClientRect(),l={x:o.clientX-a.left,y:o.clientY-a.top},c=l.x-n.x,d=l.y-n.y,u=c*s,h=d*s;y.model.rotation.y+=u,y.model.rotation.x+=h;const p=y.model.rotation.x*180/Math.PI,g=y.model.rotation.y*180/Math.PI,_=y.model.rotation.z*180/Math.PI;q("modelRotX",Math.round(p)),q("modelRotXNum",Math.round(p)),q("modelRotY",Math.round(g)),q("modelRotYNum",Math.round(g)),q("modelRotZ",Math.round(_)),q("modelRotZNum",Math.round(_)),vt(),n=l});const r=()=>{t=!1,e.style.cursor="grab"};e.addEventListener("mouseup",r),e.addEventListener("mouseleave",r),e.style.cursor="grab"}function Oy(){if(!y.orientationWidget.enabled||!y.orientationWidget.scene||!y.orientationWidget.renderer)return;const i=y.orientationWidget;i.renderer.render(i.scene,i.camera)}function Bt(){const i=document.getElementById("guideLineOverlay");if(!i){console.error("EMERGENCY FIX: guideLineOverlay element not found");return}for(console.log("Updating guide lines, current state:",y.guideLines);i.firstChild;)i.removeChild(i.firstChild);const e=i.getBoundingClientRect(),t=e.width,n=e.height;y.guideLines.forEach(s=>{const r=document.createElement("div");r.className="guide-line",r.dataset.id=s.id,Math.abs(s.angle);const a=Math.sqrt(t*t+n*n)*4,l=`${s.thickness/1e3*100}vh`,c=s.colour||"#FFFF66",d=s.transparency||.5,u=s.angle*Math.PI/180,h=Math.cos(u),g=-Math.sin(u),_=h,m=Math.sqrt(t*t+n*n),L=s.posY/360*(m*.8),C=t/2,M=n/2,N=g*L,I=_*L,D=C+N,F=M+I,T=`${D/t*100}%`,E=`${F/n*100}%`,U=`translate(-50%, -50%) rotate(${s.angle}deg)`;r.style.width=`${a}px`,r.style.height=l,r.style.backgroundColor=c,r.style.opacity=d,r.style.top=E,r.style.left=T,r.style.transform=U,r.style.borderRadius=`${s.thickness/2}px`,console.log(`Creating guide line ${s.id}: angle=${s.angle}°, width=${a.toFixed(1)}px, top=${E}, left=${T}`),i.appendChild(r)}),console.log("Guide line update complete")}function Au(i=null){if(i===null){const e=document.querySelector('[data-id="0"]'),t=document.getElementById("hideUnhideGuide");if(!e||!t)return;e.style.display==="none"||getComputedStyle(e).display==="none"?(e.style.display="block",t.textContent="HIDE",t.classList.remove("button-danger"),t.classList.add("secondary"),Bt()):(e.style.display="none",t.textContent="UNHIDE",t.classList.remove("secondary"),t.classList.add("button-danger"))}else{const e=document.querySelector(`[data-id="${i}"]`),t=document.querySelector(`[data-guideline-id="${i}"] .hide-unhide-guide`);if(!e||!t)return;e.style.display==="none"||getComputedStyle(e).display==="none"?(e.style.display="block",t.textContent="HIDE",t.classList.remove("button-danger"),t.classList.add("secondary"),Bt()):(e.style.display="none",t.textContent="UNHIDE",t.classList.remove("secondary"),t.classList.add("button-danger"))}}function By(){console.log("autoHideDefaultGuideLineOnFirstLoad called");const i=sessionStorage.getItem("guideLineUserInteracted");if(console.log("hasUserInteracted:",i),i){console.log("User has interacted before, skipping auto-hide");return}sessionStorage.setItem("guideLineAutoHideOccurred","true");const e=document.querySelector('[data-id="0"]'),t=document.getElementById("hideUnhideGuide");console.log("Elements found - defaultLine:",!!e,"button:",!!t),e&&t?(e.style.display="none",t.textContent="UNHIDE",t.classList.remove("secondary"),t.classList.add("button-danger"),console.log("Auto-hide applied to default guide line, starting pulse animation"),ky(t,e,3)):console.error("Elements not found for auto-hide")}function ky(i,e,t){console.log("Starting button pulse with synchronized guide line"),e.style.display="none",e.style.transition="opacity 0.2s ease",zy(i,t,n=>{n==="pulse-up"?(e.style.display="block",e.style.opacity="1"):n==="pulse-down"?e.style.opacity="0":n==="end"&&(e.style.display="none",e.style.opacity="1",console.log("Default guide line auto-hidden as pulse overlay ends"))})}function zy(i,e,t=null){const n=getComputedStyle(i),s=document.createElement("div");s.style.cssText=`
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10000;
        pointer-events: none;
    `,document.body.appendChild(s);const r=i.cloneNode(!0);r.style.cssText=`
        position: absolute;
        margin: 0;
        transform-origin: center center;
        transition: transform 0.2s ease;
        z-index: 1;
        box-sizing: border-box;
    `,i.classList.contains("secondary")&&r.classList.add("secondary"),i.classList.contains("button-danger")&&r.classList.add("button-danger"),r.style.background=n.background,r.style.border=n.border,r.style.borderRadius=n.borderRadius,r.style.color=n.color,r.style.fontSize=n.fontSize,r.style.fontWeight=n.fontWeight,r.style.fontFamily=n.fontFamily,r.style.textTransform=n.textTransform,r.style.letterSpacing=n.letterSpacing,r.style.lineHeight=n.lineHeight,r.style.boxShadow=n.boxShadow,i.classList.contains("button-danger")||i.classList.contains("button-danger")?r.style.background="linear-gradient(45deg, #ff6b6b, #ee5a24)":i.classList.contains("secondary")&&(r.style.background="linear-gradient(45deg, #4CAF50, #45a049)"),s.appendChild(r);let o=1;const a=()=>{const h=i.getBoundingClientRect();r.style.left=`${h.left}px`,r.style.top=`${h.top}px`,r.style.width=`${h.width}px`,r.style.height=`${h.height}px`,r.style.transform=`scale(${o})`,r.style.transformOrigin="center center"};let l;const c=()=>{a(),l=requestAnimationFrame(c)};c();let d=0;const u=setInterval(()=>{o=1.15,r.style.transform=`scale(${o})`,t&&t("pulse-up"),setTimeout(()=>{o=1,r.style.transform=`scale(${o})`,t&&t("pulse-down"),d>=e&&(t&&t("end"),setTimeout(()=>{cancelAnimationFrame(l)},500),setTimeout(()=>{document.body.contains(s)&&document.body.removeChild(s)},800))},200),d++,d>=e&&clearInterval(u)},600)}function Hy(){sessionStorage.setItem("guideLineUserInteracted","true")}function vd(){const i=document.getElementById("complexMaterialButton");i&&(y.materialMode==="default"?(i.textContent="COMPLEX",i.classList.remove("state-secondary"),i.classList.add("state-primary"),Vy()):(i.textContent="BASIC",i.classList.remove("state-primary"),i.classList.add("state-secondary"),Gy()))}function Vy(){const i=document.querySelector("#surfaceMode")?.closest(".control-group"),e=document.querySelectorAll("label");let t=null;for(const a of e)if(a.textContent.trim()==="Surface Extraction"){t=a.closest(".control-group");break}i&&(i.style.display="none"),t&&(t.style.display="none");const n=document.getElementById("alphaValueGroup"),s=document.getElementById("raycastParametersGroup"),r=document.getElementById("visibilityThresholdGroup");n&&(n.style.display="none"),s&&(s.style.display="none"),r&&(r.style.display="none");const o=document.getElementById("surfaceMode");o&&(y.transparencyMode="standard",o.value="standard")}function Gy(){const i=document.querySelector("#surfaceMode")?.closest(".control-group"),e=document.querySelectorAll("label");let t=null;for(const n of e)if(n.textContent.trim()==="Surface Extraction"){t=n.closest(".control-group");break}i&&(i.style.display="block"),t&&(t.style.display="block"),gy()}function Wy(i){y.model&&y.scene.remove(y.model);let e,t;switch(i){case"cube":e=new Ls(2,2,2),t="Cube";break;case"sphere":e=new Pl(1.5,32,32),t="Sphere";break;case"pyramid":e=new Ll(1.5,2.5,4),t="Pyramid";break;default:e=new Nl(1.2,.4,100,16),t="Default Torus Knot"}const n=new Ai({color:5025616,metalness:.1,roughness:.8,transparent:!1,opacity:1,side:Zt});y.model=new $t(e,n),y.model.position.set(0,0,0),y.model.scale.set(1,1,1),y.model.rotation.set(0,0,0),y.scene.add(y.model),y.currentModelType=t,q("materialColor","#4CAF50"),q("metalness",.1),q("metalnessNum",.1),q("roughness",.8),q("roughnessNum",.8),q("transparency",1),q("transparencyNum",1),hr(),console.log("Model created:",t,"Material:",n)}function Xy(i,e,t,n){const s=new L0;Gt("Loading OBJ model...","loading"),s.load(i,r=>{try{y.model&&y.scene.remove(y.model),r.traverse(o=>{o.isMesh&&(o.material=new Ai({color:5025616,metalness:.1,roughness:.8,transparent:!1,opacity:1,side:Zt}))}),y.model=r,wo(y.model),y.scene.add(y.model),y.currentModelType=e,hr(),URL.revokeObjectURL(i),t(e)}catch(o){console.error("Error processing OBJ model:",o),n("Error processing OBJ model: "+o.message)}},r=>{if(r&&r.lengthComputable){const o=Math.round(r.loaded/r.total*100);Gt(`Loading... ${o}%`,"loading")}},r=>{console.error("Error loading OBJ:",r),n("Error loading OBJ: "+r.message)})}function Yy(i,e,t,n){const s=new I0;Gt("Loading STL model...","loading"),s.load(i,r=>{try{y.model&&y.scene.remove(y.model);const o=new Ai({color:5025616,metalness:.1,roughness:.8,transparent:!1,opacity:1,side:Zt});y.model=new $t(r,o),wo(y.model),y.scene.add(y.model),y.currentModelType=e,hr(),URL.revokeObjectURL(i),t(e)}catch(o){console.error("Error processing STL model:",o),n("Error processing STL model: "+o.message)}},r=>{if(r&&r.lengthComputable){const o=Math.round(r.loaded/r.total*100);Gt(`Loading... ${o}%`,"loading")}},r=>{console.error("Error loading STL:",r),n("Error loading STL: "+r.message)})}function qy(i,e,t,n){const s=new P0;Gt("Loading GLTF/GLB model...","loading"),s.load(i,r=>{try{y.model&&y.scene.remove(y.model),r.scene.traverse(o=>{o.isMesh&&(o.material=new Ai({color:5025616,metalness:.1,roughness:.8,transparent:!1,opacity:1,side:Zt}))}),y.model=r.scene,wo(y.model),y.scene.add(y.model),y.currentModelType=e,hr(),URL.revokeObjectURL(i),t(e)}catch(o){console.error("Error processing GLTF/GLB model:",o),n("Error processing GLTF/GLB model: "+o.message)}},r=>{if(r&&r.lengthComputable){const o=Math.round(r.loaded/r.total*100);Gt(`Loading... ${o}%`,"loading")}},r=>{console.error("Error loading GLTF/GLB:",r),n("Error loading GLTF/GLB: "+r.message)})}function jy(i,e,t,n){const s=new fy;Gt("Loading DAE model...","loading"),s.load(i,r=>{try{y.model&&y.scene.remove(y.model),r.scene.traverse(o=>{o.isMesh?o.material=new Ai({color:5025616,metalness:.1,roughness:.8,transparent:!1,opacity:1,side:Zt}):(o.isLine||o.isLineSegments)&&o.parent&&o.parent.remove(o)}),y.model=r.scene,wo(y.model),y.scene.add(y.model),y.currentModelType=e,hr(),URL.revokeObjectURL(i),t(e)}catch(o){console.error("Error processing DAE model:",o),n("Error processing DAE model: "+o.message)}},r=>{if(r&&r.lengthComputable){const o=Math.round(r.loaded/r.total*100);Gt(`Loading... ${o}%`,"loading")}},r=>{console.error("Error loading DAE:",r),n("Error loading DAE: "+r.message)})}function $y(){const i=document.getElementById("presetSelector");i&&(i.innerHTML='<option value="">Select a preset...</option>',Object.keys(y.presets).forEach(e=>{const t=document.createElement("option");t.value=e,t.textContent=e,i.appendChild(t)}))}function Ky(){if(!y.renderer||!y.renderer.domElement){console.error("CRITICAL ERROR: Renderer or canvas not available for mouse controls");return}const i=y.renderer.domElement;console.log("Setting up mouse controls on canvas:",i),i.removeEventListener("mousedown",vu),i.removeEventListener("mousemove",Mu),i.removeEventListener("mouseup",Su),i.removeEventListener("wheel",bu),i.removeEventListener("contextmenu",Eu),i.addEventListener("mousedown",vu),i.addEventListener("mousemove",Mu),i.addEventListener("mouseup",Su),i.addEventListener("wheel",bu),i.addEventListener("contextmenu",Eu),console.log("Mouse controls setup complete")}function Zy(){document.querySelectorAll(".button").forEach(t=>{t.addEventListener("mousedown",()=>{t.classList.add("button-depressed")}),t.addEventListener("mouseup",()=>{t.classList.remove("button-depressed")}),t.addEventListener("mouseleave",()=>{t.classList.remove("button-depressed")})}),window.addEventListener("keydown",t=>{(t.key==="f"||t.key==="F")&&wy()}),Ie("ambientLight","input",t=>{y.lights.ambient&&(y.lights.ambient.intensity=parseFloat(t.target.value))}),Ie("ambientLightNum","input",t=>{y.lights.ambient&&(y.lights.ambient.intensity=parseFloat(t.target.value))}),Ie("directionalLight","input",t=>{y.lights.directionalRight&&(y.lights.directionalRight.intensity=parseFloat(t.target.value))}),Ie("directionalLightNum","input",t=>{y.lights.directionalRight&&(y.lights.directionalRight.intensity=parseFloat(t.target.value))}),Ie("directionalLightRight","input",t=>{y.lights.directional&&(y.lights.directional.intensity=parseFloat(t.target.value))}),Ie("directionalRightNum","input",t=>{y.lights.directional&&(y.lights.directional.intensity=parseFloat(t.target.value))}),Ie("basicModeButton","click",()=>{y.lightingMode="basic",hl();const t=document.getElementById("left-light-icon"),n=document.getElementById("right-light-icon");t.style.transform="translate(-50%, -50%)",n.style.transform="translate(-50%, -50%) scaleX(-1)";const s=document.querySelector(".sun-control");if(s){const r=s.getBoundingClientRect(),o=r.height/2,a=r.width*.25,l=r.width*.75;t.style.left=`${a}px`,t.style.top=`${o}px`,n.style.left=`${l}px`,n.style.top=`${o}px`,y.lights.directional.position.x=-5,y.lights.directional.position.y=0,y.lights.directionalRight.position.x=5,y.lights.directionalRight.position.y=0}y.lights.directional.target.position.set(0,0,0),y.lights.directionalRight.target.position.set(0,0,0),Rs()}),Ie("complexModeButton","click",()=>{y.lightingMode="complex",hl(),Rs()});const i=document.getElementById("dropZone"),e=document.getElementById("fileUpload");i&&e&&(i.addEventListener("click",()=>{e.click()}),i.addEventListener("dragover",t=>{t.preventDefault(),t.stopPropagation(),i.classList.add("dragover")}),i.addEventListener("dragleave",t=>{t.preventDefault(),t.stopPropagation(),i.classList.remove("dragover")}),i.addEventListener("drop",t=>{t.preventDefault(),t.stopPropagation(),i.classList.remove("dragover"),t.dataTransfer.files.length>0&&xu(t.dataTransfer.files[0])}),e.addEventListener("change",t=>{t.target.files.length>0&&xu(t.target.files[0])})),Ie("saveToFile","click",async()=>{console.log("Starting capture process...");const n=`3d-model-capture-${new Date().toISOString().replace(/[:.]/g,"-").split("T")[0]}.png`;let s=!1;setTimeout(()=>{s||(console.error("Capture timed out, falling back to regular capture"),yd(r=>{xa(r,n,"image/png")}))},1e4),wu(r=>{s=!0,xa(r,n,"image/png")})}),Ie("saveToClipboard","click",async()=>{if(console.log("Starting clipboard copy..."),!navigator.clipboard){Gt("Clipboard API not supported in this browser","error");return}try{Gt("Copying to clipboard...","loading"),wu(async t=>{if(!t){Gt("Failed to create image blob","error");return}try{const n=new ClipboardItem({"image/png":t});await navigator.clipboard.write([n]),Gt("Image copied to clipboard successfully! ✓","success"),setTimeout(()=>{Gt("","success")},3e3)}catch(n){console.error("Clipboard write failed:",n);try{const s=document.createElement("div");s.style.position="fixed",s.style.zIndex="10000",s.style.backgroundColor="rgba(250, 250, 250, 0.5)",s.style.border="none",s.style.borderRadius="8px",s.style.padding="10px",s.style.boxShadow="0 2px 6px rgba(0, 0, 0, 0.08)",s.style.display="flex",s.style.flexDirection="column",s.style.pointerEvents="auto";const o=document.querySelector(".viewer-container").getBoundingClientRect(),a=o.left+o.width/2,l=o.top+o.height/2;s.style.left=a+"px",s.style.top=l+"px",s.style.transform="translate(-50%, -50%)",s.style.width="440px",s.style.maxHeight="550px";const c=document.createElement("img");c.src=URL.createObjectURL(t),c.style.width="100%",c.style.height="auto",c.style.maxWidth="100%",c.style.maxHeight="calc(100% - 30px)",c.style.objectFit="contain",c.style.borderRadius="8px",c.style.marginBottom="10px",c.style.pointerEvents="auto";const d=document.createElement("div");d.style.display="flex",d.style.justifyContent="space-between",d.style.alignItems="flex-end",d.style.fontSize="12px",d.style.color="#999",d.style.marginTop="auto",d.style.fontFamily="'Arial', sans-serif";const u=document.createElement("div");u.textContent="(Left-click to exit)",u.style.fontSize="12px",u.style.color="#999",u.style.fontWeight="normal",u.style.textTransform="none",u.style.fontFamily="'Arial', sans-serif",u.style.lineHeight="1",u.style.letterSpacing="normal",u.style.webkitFontSmoothing="antialiased",u.style.mozOsxFontSmoothing="grayscale",u.style.textRendering="optimizeLegibility";const h=document.createElement("div");h.textContent="(Right-click to select Copy options)",h.style.fontSize="12px",h.style.color="#999",h.style.fontWeight="normal",h.style.textTransform="none",h.style.fontFamily="'Arial', sans-serif",h.style.lineHeight="1",h.style.letterSpacing="normal",h.style.webkitFontSmoothing="antialiased",h.style.mozOsxFontSmoothing="grayscale",h.style.textRendering="optimizeLegibility",d.appendChild(u),d.appendChild(h),s.appendChild(c),s.appendChild(d),s.addEventListener("click",p=>{p.target!==c&&(document.body.removeChild(s),URL.revokeObjectURL(c.src))}),setTimeout(()=>{document.body.contains(s)&&(document.body.removeChild(s),URL.revokeObjectURL(c.src))},15e3),document.body.appendChild(s),Gt("Clipboard blocked by browser. Use overlay to copy image.","error")}catch(s){console.error("Fallback failed:",s),Gt("Failed to copy to clipboard. Try right-click → Copy Image instead.","error")}}})}catch(t){console.error("Capture setup failed:",t),Gt("Failed to setup clipboard capture","error")}}),Ie("saveSceneButton","click",async()=>{const n=`3d-model-scene-${new Date().toISOString().replace(/[:.]/g,"-").split("T")[0]}.json`;try{const s=dx(),r=JSON.stringify(s,null,2),o=new Blob([r],{type:"application/json"});await xa(o,n,"application/json")}catch(s){console.error("Error saving scene:",s),hx(n)}}),Ie("loadSceneButton","click",()=>{fx()}),Et("posX","posXNum"),Et("posY","posYNum"),Et("posZ","posZNum"),Et("rotX","rotXNum"),Et("rotY","rotYNum"),Et("rotZ","rotZNum"),Et("modelRotX","modelRotXNum"),Et("modelRotY","modelRotYNum"),Et("modelRotZ","modelRotZNum"),Et("modelYaw","modelYawNum"),Et("modelPitch","modelPitchNum"),Et("modelRoll","modelRollNum"),Et("modelZoom","modelZoomNum"),Et("metalness","metalnessNum"),Et("roughness","roughnessNum"),Et("transparency","transparencyNum"),Et("alphaValue","alphaValueNum"),Et("raycastSamples","raycastSamplesNum"),Et("visibilityThreshold","visibilityThresholdNum"),Et("directionalLight","directionalLightNum"),Et("directionalLightRight","directionalRightNum"),Et("ambientLight","ambientLightNum"),Ie("posX","input",t=>{y.camera&&(y.camera.position.x=parseFloat(t.target.value),vt())}),Ie("posY","input",t=>{y.camera&&(y.camera.position.y=parseFloat(t.target.value),vt())}),Ie("posZ","input",t=>{y.camera&&(y.camera.position.z=parseFloat(t.target.value),vt())}),Ie("rotX","input",t=>{y.camera&&(y.camera.rotation.x=tn(parseFloat(t.target.value)),vt())}),Ie("rotY","input",t=>{y.camera&&(y.camera.rotation.y=tn(parseFloat(t.target.value)),vt())}),Ie("rotZ","input",t=>{y.camera&&(y.camera.rotation.z=tn(parseFloat(t.target.value)),vt())}),Ie("modelRotX","input",t=>{y.model&&(y.model.rotation.x=tn(parseFloat(t.target.value)),hs(),vt())}),Ie("modelRotY","input",t=>{y.model&&(y.model.rotation.y=tn(parseFloat(t.target.value)),hs(),vt())}),Ie("modelRotZ","input",t=>{y.model&&(y.model.rotation.z=tn(parseFloat(t.target.value)),hs(),vt())}),Ie("modelYaw","input",t=>{if(y.model){const n=tn(parseFloat(t.target.value)),s=y.model.rotation.x,r=y.model.rotation.z;y.model.rotation.order="YXZ",y.model.rotation.set(s,n,r),y.modelYaw=parseFloat(t.target.value),fs(),vt()}}),Ie("modelPitch","input",t=>{if(y.model){const n=y.model.rotation.y,s=tn(parseFloat(t.target.value)),r=y.model.rotation.z;y.model.rotation.order="YXZ",y.model.rotation.set(s,n,r),y.modelPitch=parseFloat(t.target.value),fs(),vt()}}),Ie("modelRoll","input",t=>{if(y.model){const n=y.model.rotation.y,s=y.model.rotation.x,r=tn(parseFloat(t.target.value));y.model.rotation.order="YXZ",y.model.rotation.set(s,n,r),y.modelRoll=parseFloat(t.target.value),fs(),vt()}}),Ie("modelZoom","input",t=>{if(y.model){const n=parseFloat(t.target.value);y.model.scale.set(n,n,n)}}),Ie("materialColor","input",t=>{gd(t.target.value)}),Ie("metalness","input",t=>{ui("metalness",parseFloat(t.target.value))}),Ie("roughness","input",t=>{ui("roughness",parseFloat(t.target.value))}),Ie("objectTransparency","input",async t=>{y.objectTransparency=parseFloat(t.target.value),Et("objectTransparency","objectTransparencyNum"),await js()}),Ie("surfaceTransparency","input",async t=>{y.surfaceTransparency=parseFloat(t.target.value),Et("surfaceTransparency","surfaceTransparencyNum"),await js()}),Ie("alphaValue","input",t=>{ui("alphaValue",parseFloat(t.target.value))}),Ie("raycastSamples","input",t=>{ui("raycastSamples",parseInt(t.target.value))}),Ie("visibilityThreshold","input",t=>{ui("visibilityThreshold",parseFloat(t.target.value))}),Ie("posXNum","input",t=>{y.camera&&(y.camera.position.x=parseFloat(t.target.value),vt())}),Ie("posYNum","input",t=>{y.camera&&(y.camera.position.y=parseFloat(t.target.value),vt())}),Ie("posZNum","input",t=>{y.camera&&(y.camera.position.z=parseFloat(t.target.value),vt())}),Ie("rotXNum","input",t=>{y.camera&&(y.camera.rotation.x=tn(parseFloat(t.target.value)),vt())}),Ie("rotYNum","input",t=>{y.camera&&(y.camera.rotation.y=tn(parseFloat(t.target.value)),vt())}),Ie("rotZNum","input",t=>{y.camera&&(y.camera.rotation.z=tn(parseFloat(t.target.value)),vt())}),Ie("resetCameraRanges","click",()=>{Cy()}),Ie("resetCamera","click",()=>{y.camera&&(y.camera.position.set(0,0,5),y.camera.rotation.set(0,0,0),q("posX",0),q("posXNum",0),q("posY",0),q("posYNum",0),q("posZ",5),q("posZNum",5),q("rotX",0),q("rotXNum",0),q("rotY",0),q("rotYNum",0),q("rotZ",0),q("rotZNum",0),vt())}),Ie("modelRotXNum","input",t=>{y.model&&(y.model.rotation.x=tn(parseFloat(t.target.value)),hs(),vt())}),Ie("modelRotYNum","input",t=>{y.model&&(y.model.rotation.y=tn(parseFloat(t.target.value)),hs(),vt())}),Ie("modelRotZNum","input",t=>{y.model&&(y.model.rotation.z=tn(parseFloat(t.target.value)),hs(),vt())}),Ie("modelYawNum","input",t=>{if(y.model){const n=tn(parseFloat(t.target.value)),s=y.model.rotation.x,r=y.model.rotation.z;y.model.rotation.order="YXZ",y.model.rotation.set(s,n,r),y.modelYaw=parseFloat(t.target.value),fs(),vt()}}),Ie("modelPitchNum","input",t=>{if(y.model){const n=y.model.rotation.y,s=tn(parseFloat(t.target.value)),r=y.model.rotation.z;y.model.rotation.order="YXZ",y.model.rotation.set(s,n,r),y.modelPitch=parseFloat(t.target.value),fs(),vt()}}),Ie("modelRollNum","input",t=>{if(y.model){const n=y.model.rotation.y,s=y.model.rotation.x,r=tn(parseFloat(t.target.value));y.model.rotation.order="YXZ",y.model.rotation.set(s,n,r),y.modelRoll=parseFloat(t.target.value),fs(),vt()}}),Ie("resetModel","click",()=>{y.model&&(y.model.rotation.set(0,0,0),y.model.rotation.order="XYZ",y.model.scale.set(1,1,1),y.modelYaw=0,y.modelPitch=0,y.modelRoll=0,q("modelRotX",0),q("modelRotXNum",0),q("modelRotY",0),q("modelRotYNum",0),q("modelRotZ",0),q("modelRotZNum",0),q("modelYaw",0),q("modelYawNum",0),q("modelPitch",0),q("modelPitchNum",0),q("modelRoll",0),q("modelRollNum",0),q("modelZoom",1),q("modelZoomNum",1),vt())}),Ie("metalnessNum","input",t=>{ui("metalness",parseFloat(t.target.value))}),Ie("roughnessNum","input",t=>{ui("roughness",parseFloat(t.target.value))}),Ie("objectTransparencyNum","input",async t=>{y.objectTransparency=parseFloat(t.target.value),Et("objectTransparencyNum","objectTransparency"),await js()}),Ie("surfaceTransparencyNum","input",async t=>{y.surfaceTransparency=parseFloat(t.target.value),Et("surfaceTransparencyNum","surfaceTransparency"),await js()}),Ie("surfaceMode","change",async t=>{y.transparencyMode=t.target.value,await js()}),Ie("complexMaterialButton","click",()=>{y.materialMode=y.materialMode==="default"?"complex":"default",vd()})}function Md(){document.querySelectorAll(".control-section[data-section]").forEach(e=>{const t=e.querySelector(".section-header"),n=e.dataset.section;t&&n&&(t.addEventListener("click",()=>{Ru(e,n)}),t.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),Ru(e,n))}))}),ex()}function Ru(i,e){const t=i.classList.contains("collapsed"),n=i.querySelector(".section-header");t?Jy(i,n):Sd(i,n),Qy(e,!t)}function Sd(i,e){i.classList.add("collapsed"),e.setAttribute("aria-expanded","false");const t=e.querySelector(".collapse-icon");t&&(t.textContent="▼")}function Jy(i,e){i.classList.remove("collapsed"),e.setAttribute("aria-expanded","true");const t=e.querySelector(".collapse-icon");t&&(t.textContent="−")}function Qy(i,e){try{const t=JSON.parse(localStorage.getItem("collapsedSections")||"{}");t[i]=e,localStorage.setItem("collapsedSections",JSON.stringify(t))}catch(t){console.warn("Failed to save collapsed state:",t)}}function ex(){try{const i=JSON.parse(localStorage.getItem("collapsedSections")||"{}");Object.entries(i).forEach(([e,t])=>{const n=document.querySelector(`[data-section="${e}"]`),s=n?.querySelector(".section-header");if(n&&s)if(t)Sd(n,s);else{const r=s.querySelector(".collapse-icon");r&&(r.textContent="−")}})}catch(i){console.warn("Failed to load collapsed states:",i)}}function tx(){const i=document.getElementById("instructions"),e=i.querySelector(".title-hint");!i||!e||i.addEventListener("dblclick",t=>{t.preventDefault(),t.stopPropagation(),i.classList.contains("collapsed")?(i.classList.remove("collapsed"),e.textContent="(Double-click to hide)"):(i.classList.add("collapsed"),e.textContent="(Double-click to open)")})}function nx(){const i=document.getElementById("loadSavePanel"),e=i.querySelector(".title-hint");!i||!e||i.addEventListener("dblclick",t=>{t.preventDefault(),t.stopPropagation(),i.classList.contains("collapsed")?(i.classList.remove("collapsed"),e.textContent="(Double-click to hide)"):(i.classList.add("collapsed"),e.textContent="(Double-click to open)")})}function ix(){const i=document.querySelector(".sun-control"),e=document.getElementById("left-light-icon"),t=document.getElementById("right-light-icon");if(!i||!e||!t)return;const n=()=>i.getBoundingClientRect(),s=d=>{const u=n(),h=(d.x+10)/20,p=(d.y+10)/20;return{x:h*u.width,y:(1-p)*u.height}},r=(d,u)=>{d.style.left=`${u.x}px`,d.style.top=`${u.y}px`},o=(d,u,h=30)=>{const p=d.x-u.x,g=d.y-u.y;return Math.sqrt(p*p+g*g)<h};document.getElementById("left-direction-arrow"),document.getElementById("right-direction-arrow"),r(e,s(y.lights.directional.position)),r(t,s(y.lights.directionalRight.position));function a(d,u,h,p){let g=!1,_={x:0,y:0};d.addEventListener("mousedown",m=>{g=!0,_={x:m.clientX,y:m.clientY},d.style.cursor="grabbing"}),window.addEventListener("mousemove",m=>{if(!g)return;Math.sqrt(Math.pow(m.clientX-_.x,2)+Math.pow(m.clientY-_.y,2));const f=n();let L=m.clientX-f.left,C=m.clientY-f.top;const M=20,N=M/2;L=Math.max(N,Math.min(f.width-N,L)),C=Math.max(N,Math.min(f.height-N,C));const I=h.getBoundingClientRect(),D={x:I.left-f.left+M/2,y:I.top-f.top+M/2};if(o({x:L,y:C},D)){const E=L-D.x,U=C-D.y,j=Math.sqrt(E*E+U*U);if(j>0){const K=30/j;L=D.x+E*K,C=D.y+U*K,L=Math.max(N,Math.min(f.width-N,L)),C=Math.max(N,Math.min(f.height-N,C))}}r(d,{x:L,y:C});const F=L/f.width*20-10,T=(1-C/f.height)*20-10;if(u.position.x=F,u.position.y=T,$s(u,p),oo(),y.lightDisplayMode==="fans"&&ao(),y.lightingMode==="complex"){const E=C/f.height;d.style.transform=`translate(-50%, -50%) ${d.classList.contains("flipped")?"scaleX(-1)":""}`;const U=(.5-E)*10;u.target.position.y=U}else d.style.transform=`translate(-50%, -50%) ${d.classList.contains("flipped")?"scaleX(-1)":""}`,u.target.position.set(0,0,0)}),window.addEventListener("mouseup",()=>{g=!1,d.style.cursor="grab"})}a(e,y.lights.directional,t,"left"),a(t,y.lights.directionalRight,e,"right");function l(d,u){if(!d)return;let h=null,p=!1;const g=5;d.addEventListener("mousedown",_=>{h={x:_.clientX,y:_.clientY},p=!1}),d.addEventListener("mousemove",_=>{h&&Math.sqrt(Math.pow(_.clientX-h.x,2)+Math.pow(_.clientY-h.y,2))>g&&(p=!0)}),d.addEventListener("mouseup",_=>{h=null}),d.addEventListener("click",_=>{if(_.preventDefault(),_.stopPropagation(),p)console.log(`${u} icon drag detected - maintaining current direction`);else{u==="left"?y.leftLightDirectionIn=!y.leftLightDirectionIn:y.rightLightDirectionIn=!y.rightLightDirectionIn,oo(),y.lightDisplayMode==="fans"&&ao();const m=u==="left"?y.lights.directional:y.lights.directionalRight;$s(m,u),console.log(`${u} light direction clicked (no drag):`,u==="left"?y.leftLightDirectionIn:y.rightLightDirectionIn)}p=!1}),d.addEventListener("dblclick",_=>{if(_.preventDefault(),_.stopPropagation(),!p){u==="left"?y.leftLightDirectionIn=!y.leftLightDirectionIn:y.rightLightDirectionIn=!y.rightLightDirectionIn,oo(),y.lightDisplayMode==="fans"&&ao();const m=u==="left"?y.lights.directional:y.lights.directionalRight;$s(m,u),console.log(`${u} light direction double-clicked (no drag):`,u==="left"?y.leftLightDirectionIn:y.rightLightDirectionIn)}})}l(e,"left"),l(t,"right");const c=document.querySelector(".sun-control");c&&c.addEventListener("dblclick",d=>{d.preventDefault(),d.stopPropagation(),sx()}),Rs(),$s(y.lights.directional,"left"),$s(y.lights.directionalRight,"right")}function $s(i,e){if(e==="left"?y.leftLightDirectionIn:y.rightLightDirectionIn)i.target.position.set(0,0,0);else{const n=i.position,s=new O(-n.x*2,-n.y*2,-n.z*2);i.target.position.copy(s)}}function oo(){const i=document.getElementById("left-light-icon"),e=document.getElementById("right-light-icon"),t=document.getElementById("left-direction-arrow"),n=document.getElementById("right-direction-arrow"),s=document.querySelector(".sun-control");if(!i||!e||!t||!n||!s)return;const r=i.getBoundingClientRect(),o=e.getBoundingClientRect(),a=s.getBoundingClientRect(),d=12+10,u=r.left+r.width/2-a.left,h=r.top+r.height/2-a.top,p=o.left+o.width/2-a.left,g=o.top+o.height/2-a.top,_=h/a.height,m=g/a.height;function f(E,U){return U?E<=.5?135-E*2*45:90-(E-.5)*2*45:E<=.5?225+E*2*45:270+(E-.5)*2*45}let L,C;y.lightingMode==="basic"?(L=y.leftLightDirectionIn?90:270,C=y.rightLightDirectionIn?270:90):(y.leftLightDirectionIn?L=f(_,!0):L=f(_,!0)+180,y.rightLightDirectionIn?C=f(m,!1):C=f(m,!1)+180);const M=(L-90)*Math.PI/180,N=(C-90)*Math.PI/180,I=u+Math.cos(M)*d,D=h+Math.sin(M)*d,F=p+Math.cos(N)*d,T=g+Math.sin(N)*d;t.style.left=`${I}px`,t.style.top=`${D}px`,t.style.transform=`translate(-50%, -50%) rotate(${L}deg)`,n.style.left=`${F}px`,n.style.top=`${T}px`,n.style.transform=`translate(-50%, -50%) rotate(${C}deg)`}function sx(){y.lightDisplayMode=y.lightDisplayMode==="arrows"?"fans":"arrows",Rs()}function Rs(){const i=document.getElementById("left-direction-arrow"),e=document.getElementById("right-direction-arrow"),t=document.getElementById("left-light-fan"),n=document.getElementById("right-light-fan");y.lightDisplayMode==="arrows"?(i&&(i.style.display="block"),e&&(e.style.display="block"),t&&(t.style.display="none"),n&&(n.style.display="none"),oo()):(i&&(i.style.display="none"),e&&(e.style.display="none"),t&&(t.style.display="block"),n&&(n.style.display="block"),ao())}function ao(){const i=document.getElementById("left-light-icon"),e=document.getElementById("right-light-icon"),t=document.getElementById("left-light-fan"),n=document.getElementById("right-light-fan"),s=document.querySelector(".sun-control");if(!i||!e||!t||!n||!s)return;const r=i.getBoundingClientRect(),o=e.getBoundingClientRect(),a=s.getBoundingClientRect(),l=r.left+r.width/2-a.left,c=r.top+r.height/2-a.top,d=o.left+o.width/2-a.left,u=o.top+o.height/2-a.top,h=c/a.height,p=u/a.height;function g(f,L){return L?f<=.5?135-f*2*45:90-(f-.5)*2*45:f<=.5?225+f*2*45:270+(f-.5)*2*45}let _,m;y.lightingMode==="basic"?(_=y.leftLightDirectionIn?90:270,m=y.rightLightDirectionIn?270:90):(y.leftLightDirectionIn?_=g(h,!0):_=g(h,!0)+180,y.rightLightDirectionIn?m=g(p,!1):m=g(p,!1)+180),t.style.left=`${l}px`,t.style.top=`${c}px`,t.style.transform=`translate(-50%, -50%) rotate(${_}deg)`,n.style.left=`${d}px`,n.style.top=`${u}px`,n.style.transform=`translate(-50%, -50%) rotate(${m}deg)`}function rx(){console.log("Setting up guide line controls..."),Et("lineThickness","lineThicknessNum"),Et("lineTransparency","lineTransparencyNum"),Et("lineAngle","lineAngleNum"),Et("linePosY","linePosYNum"),Ie("lineThickness","input",i=>{y.guideLines[0].thickness=parseFloat(i.target.value),Bt()}),Ie("lineColour","input",i=>{y.guideLines[0].colour=i.target.value,Bt()}),Ie("lineTransparency","input",i=>{y.guideLines[0].transparency=parseFloat(i.target.value),Bt()}),Ie("lineAngle","input",i=>{y.guideLines[0].angle=parseFloat(i.target.value),Bt()}),Ie("linePosY","input",i=>{y.guideLines[0].posY=parseFloat(i.target.value),Bt()}),Ie("lineThicknessNum","input",i=>{y.guideLines[0].thickness=parseFloat(i.target.value),Bt()}),Ie("lineTransparencyNum","input",i=>{y.guideLines[0].transparency=parseFloat(i.target.value),Bt()}),Ie("lineAngleNum","input",i=>{y.guideLines[0].angle=parseFloat(i.target.value),Bt()}),Ie("linePosYNum","input",i=>{y.guideLines[0].posY=parseFloat(i.target.value),Bt()}),window.addGuideLine=function(){console.log("Adding new guide line...");const i=y.guideLines.length>0?Math.max(...y.guideLines.map(t=>t.id))+1:0,e={id:i,thickness:5,colour:"#FFFF66",transparency:.5,angle:0,posY:0};y.guideLines.push(e),window.addGuideLineControl(e),Bt(),setTimeout(()=>{const t=document.querySelector(`[data-id="${i}"]`);t&&(t.style.display="block",console.log(`New guide line ${i} set to visible`))},50),window.updateGuideLineTitles()},window.deleteGuideLine=function(i){console.log("Deleting guide line with id:",i),y.guideLines=y.guideLines.filter(t=>t.id!==i);const e=document.querySelector(`.control-section[data-guideline-id='${i}']`);e&&e.remove(),Bt(),window.updateGuideLineTitles()},Ie("addLine","click",window.addGuideLine),Ie("hideUnhideGuide","click",function(i){i.preventDefault(),Hy(),Au()}),console.log("Setting up auto-hide timer..."),console.log("Current sessionStorage guideLineUserInteracted:",sessionStorage.getItem("guideLineUserInteracted")),sessionStorage.removeItem("guideLineUserInteracted"),console.log("Cleared sessionStorage for testing"),setTimeout(()=>{console.log("Auto-hide timer fired!"),By()},1e3),window.addGuideLineControl=function(i){const n=document.getElementById("guideline-template").content.cloneNode(!0).querySelector(".control-section");n.dataset.guidelineId=i.id;const s=n.querySelector("h3");s.textContent=`Guide Line ${y.guideLines.length}`;const r=n.querySelector(".remove-line");r?r.addEventListener("click",()=>window.deleteGuideLine(i.id)):console.error("Remove button not found in template!");const o=n.querySelector(".add-line-below");o?o.addEventListener("click",window.addGuideLine):console.error("Add line below button not found in template!");const a=n.querySelector(".hide-unhide-guide");a?a.addEventListener("click",()=>Au(i.id)):console.error("Hide/Unhide button not found in additional pane template!");const l=n.querySelector(".line-colour");l.value=i.colour,l.addEventListener("input",L=>{i.colour=L.target.value,Bt()});const c=n.querySelector(".line-thickness"),d=n.querySelector(".line-thickness-num");c.value=i.thickness,d.value=i.thickness,c.addEventListener("input",L=>{i.thickness=parseFloat(L.target.value),Bt()}),d.addEventListener("input",L=>{i.thickness=parseFloat(L.target.value),Bt()});const u=n.querySelector(".line-transparency"),h=n.querySelector(".line-transparency-num");u.value=i.transparency,h.value=i.transparency,u.addEventListener("input",L=>{i.transparency=parseFloat(L.target.value),Bt()}),h.addEventListener("input",L=>{i.transparency=parseFloat(L.target.value),Bt()});const p=n.querySelector(".line-angle"),g=n.querySelector(".line-angle-num");p.value=i.angle,g.value=i.angle,p.addEventListener("input",L=>{i.angle=parseFloat(L.target.value),Bt()}),g.addEventListener("input",L=>{i.angle=parseFloat(L.target.value),Bt()});const _=n.querySelector(".line-pos-y"),m=n.querySelector(".line-pos-y-num");_.value=i.posY,m.value=i.posY,_.addEventListener("input",L=>{i.posY=parseFloat(L.target.value),Bt()}),m.addEventListener("input",L=>{i.posY=parseFloat(L.target.value),Bt()});const f=document.querySelector('[data-section="camera"]');f.parentNode.insertBefore(n,f),Md(),Zr(c,d),Zr(u,h),Zr(p,g),Zr(_,m)},window.updateGuideLineTitles=function(){document.querySelectorAll('[data-section="guideline"], [data-section="guideline-added"]').forEach((e,t)=>{const n=e.querySelector("h3");y.guideLines.length>1?n.textContent=`Guide Line ${t+1}`:n.textContent="Guide Line"})},console.log("Guide line controls setup complete.")}function Cu(){const i=document.querySelector(".viewer-container");if(y.camera&&y.renderer&&i){const e=i.clientWidth,t=i.clientHeight;y.camera.aspect=e/t,y.camera.updateProjectionMatrix(),y.renderer.setSize(e,t),Bt()}}function ox(){const i=document.querySelector(".viewer-container");y.scene=new Tl,y.scene.background=null,y.camera=new nn(50,i.clientWidth/i.clientHeight,.1,1e3),y.camera.position.set(0,0,5),y.renderer=new Bl({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),y.renderer.setSize(i.clientWidth,i.clientHeight),y.renderer.setPixelRatio(window.devicePixelRatio),i.appendChild(y.renderer.domElement),y.lights.ambient=new ad(16777215,.4),y.scene.add(y.lights.ambient),y.lights.directional=new mo(16777215,.6),y.lights.directional.position.set(5,5,5),y.lights.directional.castShadow=!1,y.scene.add(y.lights.directional),y.lights.directional.target=new Ut,y.scene.add(y.lights.directional.target),y.lights.directionalRight=new mo(16777215,0),y.lights.directionalRight.position.set(-5,5,5),y.lights.directionalRight.castShadow=!1,y.scene.add(y.lights.directionalRight),y.lights.directionalRight.target=new Ut,y.scene.add(y.lights.directionalRight.target),Wy("default"),Iy(),Cu(),window.addEventListener("resize",Cu),xd();const e=document.getElementById("loading");e?(e.style.display="none",console.log("✅ Loading screen hidden successfully")):console.warn("⚠️ Loading element not found")}function ax(){const i=document.getElementById("left-light-icon"),e=document.getElementById("right-light-icon"),t=document.querySelector(".sun-control");if(i&&e&&t){const n=t.getBoundingClientRect(),s=n.height/2,r=n.width*.25,o=n.width*.75;i.style.left=`${r}px`,i.style.top=`${s}px`,e.style.left=`${o}px`,e.style.top=`${s}px`,i.style.transform="translate(-50%, -50%)",e.style.transform="translate(-50%, -50%) scaleX(-1)",y.lights.directional&&y.lights.directionalRight&&(y.lights.directional.position.x=-5,y.lights.directional.position.y=0,y.lights.directionalRight.position.x=5,y.lights.directionalRight.position.y=0,y.lights.directional.target.position.set(0,0,0),y.lights.directionalRight.target.position.set(0,0,0)),Rs()}}function lx(){setTimeout(()=>{document.querySelectorAll('.color-input, input[type="color"]').forEach(n=>{n.style.background="rgba(250, 250, 250, 0.9)",n.style.border="0px solid transparent",n.style.borderRadius="6px",n.style.outline="none",n.style.webkitAppearance="none",n.style.appearance="none",n.style.boxShadow="none"});const e=document.createElement("style");e.id="edge-color-picker-fix",e.innerHTML=`
            /* Edge timing fix - injected via JavaScript */
            html body input[type="color"]::-webkit-color-swatch-wrapper {
                background: rgba(250, 250, 250, 0.9) !important;
                border: 0px solid transparent !important;
                border-radius: 6px !important;
                padding: 4px !important;
                box-shadow: none !important;
                outline: none !important;
            }
            html body input[type="color"]::-webkit-color-swatch {
                border: 2px solid #FFFF66 !important; /* Yellow border to match default color during flash */
                border-radius: 4px !important;
                margin: 0 !important;
                padding: 0 !important;
                outline: none !important;
                box-shadow: none !important;
                -webkit-appearance: none !important;
                transition: border-color 0.1s ease !important; /* Smooth transition */
            }
            /* Hide border after content loads */
            html body input[type="color"]::-webkit-color-swatch:not(:focus) {
                border: 0px solid transparent !important;
            }
        `;const t=document.getElementById("edge-color-picker-fix");t&&t.remove(),document.head.appendChild(e),setTimeout(()=>{document.querySelectorAll('input[type="color"]::-webkit-color-swatch');const n=document.createElement("style");n.innerHTML=`
                /* Secondary Edge fix - force transparent border */
                input[type="color"]::-webkit-color-swatch {
                    border: 0px solid transparent !important;
                }
            `,document.head.appendChild(n)},50),console.log("Edge color picker styling fix applied via JavaScript")},100)}async function cx(){try{ox(),Zy(),ix(),ax(),lx(),rx(),Md(),tx(),nx(),$y(),hl(),Ky(),q("lineThickness",y.guideLines[0].thickness),q("lineThicknessNum",y.guideLines[0].thickness),q("lineColour",y.guideLines[0].colour),q("lineTransparency",y.guideLines[0].transparency),q("lineTransparencyNum",y.guideLines[0].transparency),q("lineAngle",y.guideLines[0].angle),q("lineAngleNum",y.guideLines[0].angle),q("linePosY",y.guideLines[0].posY),q("linePosYNum",y.guideLines[0].posY),Bt(),vd(),console.log("✅ 3D Model Viewer initialized successfully")}catch(i){console.error("❌ Error initializing viewer:",i),ux("Failed to initialize 3D viewer")}}function ux(i){const e=document.getElementById("loading");e&&(e.innerHTML=`
            <div style="color: #ff6b6b; text-align: center;">
                <div style="font-size: 18px; margin-bottom: 10px;">⚠️ ${i}</div>
                <div style="font-size: 14px; color: #666;">Please refresh the page to try again</div>
            </div>
        `)}function dx(){return{version:"2.0",timestamp:new Date().toISOString(),camera:{position:{x:y.camera.position.x,y:y.camera.position.y,z:y.camera.position.z},rotation:{x:y.camera.rotation.x,y:y.camera.rotation.y,z:y.camera.rotation.z}},model:{type:y.currentModelType,rotation:{x:y.model?y.model.rotation.x:0,y:y.model?y.model.rotation.y:0,z:y.model?y.model.rotation.z:0},yaw:y.modelYaw,pitch:y.modelPitch,roll:y.modelRoll},lighting:{mode:y.lightingMode,ambient:y.lights.ambient?y.lights.ambient.intensity:.4,directional:{left:y.lights.directional?y.lights.directional.intensity:.6,right:y.lights.directionalRight?y.lights.directionalRight.intensity:0}},materials:{mode:y.materialMode,color:document.getElementById("materialColor")?document.getElementById("materialColor").value:"#4CAF50",metalness:parseFloat(document.getElementById("metalness")?document.getElementById("metalness").value:"0.1"),roughness:parseFloat(document.getElementById("roughness")?document.getElementById("roughness").value:"0.8"),transparency:parseFloat(document.getElementById("transparency")?document.getElementById("transparency").value:"1"),transparencyMode:y.transparencyMode},guideLines:y.guideLines.map(i=>{const e=document.querySelector(`[data-id="${i.id}"]`),t=e&&e.style.display!=="none"&&getComputedStyle(e).display!=="none";return{id:i.id,thickness:i.thickness,colour:i.colour,transparency:i.transparency,angle:i.angle,posY:i.posY,visible:t}})}}function hx(i=null){try{const e={version:"2.0",timestamp:new Date().toISOString(),camera:{position:{x:y.camera.position.x,y:y.camera.position.y,z:y.camera.position.z},rotation:{x:y.camera.rotation.x,y:y.camera.rotation.y,z:y.camera.rotation.z}},model:{type:y.currentModelType,rotation:{x:y.model?y.model.rotation.x:0,y:y.model?y.model.rotation.y:0,z:y.model?y.model.rotation.z:0},yaw:y.modelYaw,pitch:y.modelPitch,roll:y.modelRoll},lighting:{mode:y.lightingMode,ambient:y.lights.ambient?y.lights.ambient.intensity:.4,directional:{left:y.lights.directional?y.lights.directional.intensity:.6,right:y.lights.directionalRight?y.lights.directionalRight.intensity:0}},materials:{mode:y.materialMode,color:document.getElementById("materialColor")?document.getElementById("materialColor").value:"#4CAF50",metalness:parseFloat(document.getElementById("metalness")?document.getElementById("metalness").value:"0.1"),roughness:parseFloat(document.getElementById("roughness")?document.getElementById("roughness").value:"0.8"),transparency:parseFloat(document.getElementById("transparency")?document.getElementById("transparency").value:"1"),transparencyMode:y.transparencyMode},guideLines:y.guideLines.map(a=>{const l=document.querySelector(`[data-id="${a.id}"]`),c=l&&l.style.display!=="none"&&getComputedStyle(l).display!=="none";return{id:a.id,thickness:a.thickness,colour:a.colour,transparency:a.transparency,angle:a.angle,posY:a.posY,visible:c}})};let t;if(i)t=i;else{const a=`3d-viewer-scene-${new Date().toISOString().split("T")[0]}`,l=prompt("Enter filename for your scene:",a);if(l===null){console.log("Save cancelled by user");return}t=l.trim(),t||(t=a)}t.toLowerCase().endsWith(".3dview")||(t+=".3dview"),t=t.replace(/[<>:"/\\|?*]/g,"-");const n=JSON.stringify(e,null,2),s=new Blob([n],{type:"application/json"}),r=URL.createObjectURL(s),o=document.createElement("a");o.href=r,o.download=t,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(r),console.log("Scene saved successfully")}catch(e){console.error("Error saving scene:",e),alert("Error saving scene. Please try again.")}}function fx(){try{const i=document.createElement("input");i.type="file",i.accept=".3dview,.json,application/json,text/plain",i.onchange=function(e){const t=e.target.files[0];if(!t)return;const n=t.name.toLowerCase();if(![".3dview",".json"].some(a=>n.endsWith(a))){alert("Please select a .3dview or .json file.");return}console.log("Loading scene file:",t.name,"Size:",t.size,"bytes");const o=new FileReader;o.onload=function(a){try{const l=JSON.parse(a.target.result);if(l.camera&&(l.camera.position&&(y.camera.position.set(l.camera.position.x,l.camera.position.y,l.camera.position.z),q("posX",l.camera.position.x),q("posXNum",l.camera.position.x),q("posY",l.camera.position.y),q("posYNum",l.camera.position.y),q("posZ",l.camera.position.z),q("posZNum",l.camera.position.z)),l.camera.rotation&&(y.camera.rotation.set(l.camera.rotation.x,l.camera.rotation.y,l.camera.rotation.z),q("rotX",pt(l.camera.rotation.x)),q("rotXNum",pt(l.camera.rotation.x)),q("rotY",pt(l.camera.rotation.y)),q("rotYNum",pt(l.camera.rotation.y)),q("rotZ",pt(l.camera.rotation.z)),q("rotZNum",pt(l.camera.rotation.z)))),l.lighting&&(l.lighting.ambient!==void 0&&(y.lights.ambient.intensity=l.lighting.ambient,q("ambientLight",l.lighting.ambient),q("ambientLightNum",l.lighting.ambient)),l.lighting.directional&&(l.lighting.directional.left!==void 0&&(y.lights.directional.intensity=l.lighting.directional.left,q("directionalLight",l.lighting.directional.left),q("directionalLightNum",l.lighting.directional.left)),l.lighting.directional.right!==void 0&&(y.lights.directionalRight.intensity=l.lighting.directional.right,q("directionalLightRight",l.lighting.directional.right),q("directionalRightNum",l.lighting.directional.right)))),l.materials&&(l.materials.color&&(q("materialColor",l.materials.color),gd(l.materials.color)),l.materials.metalness!==void 0&&(q("metalness",l.materials.metalness),q("metalnessNum",l.materials.metalness),ui("metalness",l.materials.metalness)),l.materials.roughness!==void 0&&(q("roughness",l.materials.roughness),q("roughnessNum",l.materials.roughness),ui("roughness",l.materials.roughness)),l.materials.transparency!==void 0&&(q("transparency",l.materials.transparency),q("transparencyNum",l.materials.transparency),_y(l.materials.transparency)),l.materials.transparencyMode&&(q("transparencyMode",l.materials.transparencyMode),y.transparencyMode=l.materials.transparencyMode)),l.model&&(l.model.rotation&&y.model&&(y.model.rotation.set(l.model.rotation.x,l.model.rotation.y,l.model.rotation.z),q("modelRotX",pt(l.model.rotation.x)),q("modelRotXNum",pt(l.model.rotation.x)),q("modelRotY",pt(l.model.rotation.y)),q("modelRotYNum",pt(l.model.rotation.y)),q("modelRotZ",pt(l.model.rotation.z)),q("modelRotZNum",pt(l.model.rotation.z))),l.model.yaw!==void 0&&(y.modelYaw=l.model.yaw,q("modelYaw",l.model.yaw),q("modelYawNum",l.model.yaw)),l.model.pitch!==void 0&&(y.modelPitch=l.model.pitch,q("modelPitch",l.model.pitch),q("modelPitchNum",l.model.pitch)),l.model.roll!==void 0&&(y.modelRoll=l.model.roll,q("modelRoll",l.model.roll),q("modelRollNum",l.model.roll))),l.guideLines&&Array.isArray(l.guideLines)){const c=y.guideLines[0];document.querySelectorAll(".control-section[data-guideline-id]").forEach(u=>u.remove()),y.guideLines=[],l.guideLines.forEach((u,h)=>{const p={...u};y.guideLines.push(p),h===0?(q("lineThickness",u.thickness),q("lineThicknessNum",u.thickness),q("lineColour",u.colour),q("lineTransparency",u.transparency),q("lineTransparencyNum",u.transparency),q("lineAngle",u.angle),q("lineAngleNum",u.angle),q("linePosY",u.posY),q("linePosYNum",u.posY)):window.addGuideLineControl(p)}),window.updateGuideLineTitles(),Bt(),l.guideLines.forEach((u,h)=>{const p=document.querySelector(`[data-id="${u.id}"]`);if(p&&u.hasOwnProperty("visible")){u.visible?p.style.display="block":p.style.display="none";let g;if(h===0)g=document.getElementById("hideUnhideGuide");else{const _=document.querySelector(`[data-guideline-id="${u.id}"]`);g=_?_.querySelector(".hide-unhide-guide"):null}g&&(u.visible?(g.textContent="HIDE",g.classList.remove("button-danger"),g.classList.add("secondary")):(g.textContent="UNHIDE",g.classList.remove("secondary"),g.classList.add("button-danger")))}})}vt(),console.log("Scene loaded successfully from:",t.name),alert("Scene loaded successfully!")}catch(l){console.error("Error parsing scene file:",l),console.error("File content preview:",a.target.result?.substring(0,200)),alert(`Error loading scene file: ${l.message}

Please ensure the file is a valid .3dview or JSON file created by the Save Scene function.`)}},o.readAsText(t)},i.click()}catch(i){console.error("Error loading scene:",i),alert("Error loading scene. Please try again.")}}window.addEventListener("load",()=>{cx()});
