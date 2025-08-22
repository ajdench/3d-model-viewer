(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lo="179",Eh=0,fc=1,Sh=2,ud=1,Th=2,hi=3,Kt=0,En=1,_n=2,Ci=0,On=1,Eo=2,pc=3,mc=4,wh=5,Wi=100,Ah=101,Rh=102,Ch=103,Lh=104,Ih=200,Nh=201,Ph=202,Dh=203,Ba=204,ka=205,Uh=206,Fh=207,Oh=208,Bh=209,kh=210,zh=211,Hh=212,Gh=213,Vh=214,za=0,Ha=1,Ga=2,As=3,Va=4,Wa=5,Xa=6,Ya=7,Io=0,Wh=1,Xh=2,Li=0,Yh=1,qh=2,$h=3,jh=4,Kh=5,Zh=6,Jh=7,gc="attached",Qh="detached",dd=300,Rs=301,Cs=302,qa=303,$a=304,No=306,Wn=1e3,wn=1001,ur=1002,dn=1003,Ol=1004,ys=1005,ln=1006,or=1007,Fn=1008,Qn=1009,hd=1010,fd=1011,dr=1012,Bl=1013,Yi=1014,Xn=1015,vr=1016,kl=1017,zl=1018,hr=1020,pd=35902,md=1021,gd=1022,An=1023,fr=1026,pr=1027,Hl=1028,Gl=1029,yd=1030,Vl=1031,Wl=1033,fo=33776,po=33777,mo=33778,go=33779,ja=35840,Ka=35841,Za=35842,Ja=35843,Qa=36196,el=37492,tl=37496,nl=37808,il=37809,sl=37810,rl=37811,ol=37812,al=37813,ll=37814,cl=37815,ul=37816,dl=37817,hl=37818,fl=37819,pl=37820,ml=37821,yo=36492,gl=36494,yl=36495,_d=36283,_l=36284,xl=36285,vl=36286,Ls=2300,Is=2301,qo=2302,yc=2400,_c=2401,xc=2402,ef=2500,tf=0,xd=1,Ml=2,nf=3200,sf=3201,Po=0,rf=1,pi="",Nt="srgb",Mn="srgb-linear",So="linear",Ft="srgb",Ki=7680,vc=519,of=512,af=513,lf=514,vd=515,cf=516,uf=517,df=518,hf=519,bl=35044,Mc="300 es",Jn=2e3,To=2001;class Bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bc=1234567;const ar=Math.PI/180,Ns=180/Math.PI;function qn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function yt(i,e,t){return Math.max(e,Math.min(t,i))}function Xl(i,e){return(i%e+e)%e}function ff(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function pf(i,e,t){return i!==e?(t-i)/(e-i):0}function lr(i,e,t){return(1-t)*i+t*e}function mf(i,e,t,n){return lr(i,e,1-Math.exp(-t*n))}function gf(i,e=1){return e-Math.abs(Xl(i,e*2)-e)}function yf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function _f(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function xf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function vf(i,e){return i+Math.random()*(e-i)}function Mf(i){return i*(.5-Math.random())}function bf(i){i!==void 0&&(bc=i);let e=bc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ef(i){return i*ar}function Sf(i){return i*Ns}function Tf(i){return(i&i-1)===0&&i!==0}function wf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Af(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Rf(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),d=o((e+n)/2),u=r((e-n)/2),h=o((e-n)/2),f=r((n-e)/2),y=o((n-e)/2);switch(s){case"XYX":i.set(a*d,l*u,l*h,a*c);break;case"YZY":i.set(l*h,a*d,l*u,a*c);break;case"ZXZ":i.set(l*u,l*h,a*d,a*c);break;case"XZX":i.set(a*d,l*y,l*f,a*c);break;case"YXY":i.set(l*f,a*d,l*y,a*c);break;case"ZYZ":i.set(l*y,l*f,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const mi={DEG2RAD:ar,RAD2DEG:Ns,generateUUID:qn,clamp:yt,euclideanModulo:Xl,mapLinear:ff,inverseLerp:pf,lerp:lr,damp:mf,pingpong:gf,smoothstep:yf,smootherstep:_f,randInt:xf,randFloat:vf,randFloatSpread:Mf,seededRandom:bf,degToRad:Ef,radToDeg:Sf,isPowerOfTwo:Tf,ceilPowerOfTwo:wf,floorPowerOfTwo:Af,setQuaternionFromProperEuler:Rf,normalize:It,denormalize:Vn};class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Cn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3];const h=r[o+0],f=r[o+1],y=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=y,e[t+3]=_;return}if(u!==_||l!==h||c!==f||d!==y){let g=1-a;const m=l*h+c*f+d*y+u*_,w=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){const I=Math.sqrt(E),N=Math.atan2(I,m*w);g=Math.sin(g*N)/I,a=Math.sin(a*N)/I}const x=a*w;if(l=l*g+h*x,c=c*g+f*x,d=d*g+y*x,u=u*g+_*x,g===1-a){const I=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=I,c*=I,d*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[o],h=r[o+1],f=r[o+2],y=r[o+3];return e[t]=a*y+d*u+l*f-c*h,e[t+1]=l*y+d*h+c*u-a*f,e[t+2]=c*y+d*f+a*h-l*u,e[t+3]=d*y-a*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(s/2),u=a(r/2),h=l(n/2),f=l(s/2),y=l(r/2);switch(o){case"XYZ":this._x=h*d*u+c*f*y,this._y=c*f*u-h*d*y,this._z=c*d*y+h*f*u,this._w=c*d*u-h*f*y;break;case"YXZ":this._x=h*d*u+c*f*y,this._y=c*f*u-h*d*y,this._z=c*d*y-h*f*u,this._w=c*d*u+h*f*y;break;case"ZXY":this._x=h*d*u-c*f*y,this._y=c*f*u+h*d*y,this._z=c*d*y+h*f*u,this._w=c*d*u-h*f*y;break;case"ZYX":this._x=h*d*u-c*f*y,this._y=c*f*u+h*d*y,this._z=c*d*y-h*f*u,this._w=c*d*u+h*f*y;break;case"YZX":this._x=h*d*u+c*f*y,this._y=c*f*u+h*d*y,this._z=c*d*y-h*f*u,this._w=c*d*u-h*f*y;break;case"XZY":this._x=h*d*u-c*f*y,this._y=c*f*u-h*d*y,this._z=c*d*y+h*f*u,this._w=c*d*u+h*f*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+a+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(d-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-s*a,this._w=o*d-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=o*u+this._w*h,this._x=n*u+this._x*h,this._y=s*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ec.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ec.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),d=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*d,this.y=n+l*d+a*c-r*u,this.z=s+l*u+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $o.copy(this).projectOnVector(e),this.sub($o)}reflect(e){return this.sub($o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $o=new O,Ec=new Cn;class ct{constructor(e,t,n,s,r,o,a,l,c){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],f=n[5],y=n[8],_=s[0],g=s[3],m=s[6],w=s[1],E=s[4],x=s[7],I=s[2],N=s[5],P=s[8];return r[0]=o*_+a*w+l*I,r[3]=o*g+a*E+l*N,r[6]=o*m+a*x+l*P,r[1]=c*_+d*w+u*I,r[4]=c*g+d*E+u*N,r[7]=c*m+d*x+u*P,r[2]=h*_+f*w+y*I,r[5]=h*g+f*E+y*N,r[8]=h*m+f*x+y*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,h=a*l-d*r,f=c*r-o*l,y=t*u+n*h+s*f;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=u*_,e[1]=(s*c-d*n)*_,e[2]=(a*n-s*o)*_,e[3]=h*_,e[4]=(d*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(jo.makeScale(e,t)),this}rotate(e){return this.premultiply(jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jo=new ct;function Md(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cf(){const i=mr("canvas");return i.style.display="block",i}const Sc={};function Ms(i){i in Sc||(Sc[i]=!0,console.warn(i))}function Lf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Tc=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wc=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function If(){const i={enabled:!0,workingColorSpace:Mn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ft&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ft&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?So:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ms("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ms("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mn]:{primaries:e,whitePoint:n,transfer:So,toXYZ:Tc,fromXYZ:wc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:Ft,toXYZ:Tc,fromXYZ:wc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}const pt=If();function _i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zi;class bd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zi===void 0&&(Zi=mr("canvas")),Zi.width=e.width,Zi.height=e.height;const s=Zi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Zi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_i(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nf=0;class Do{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ko(s[o].image)):r.push(Ko(s[o]))}else r=Ko(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ko(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pf=0;const Zo=new O;class Qt extends Bs{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,n=wn,s=wn,r=ln,o=Fn,a=An,l=Qn,c=Qt.DEFAULT_ANISOTROPY,d=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=qn(),this.name="",this.source=new Do(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zo).x}get height(){return this.source.getSize(Zo).y}get depth(){return this.source.getSize(Zo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wn:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wn:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=dd;Qt.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,n=0,s=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],y=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-_)<.01&&Math.abs(y-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+_)<.1&&Math.abs(y+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,x=(f+1)/2,I=(m+1)/2,N=(d+h)/4,P=(u+_)/4,U=(y+g)/4;return E>x&&E>I?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=N/n,r=P/n):x>I?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=N/s,r=U/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=P/r,s=U/r),this.set(n,s,r,t),this}let w=Math.sqrt((g-y)*(g-y)+(u-_)*(u-_)+(h-d)*(h-d));return Math.abs(w)<.001&&(w=1),this.x=(g-y)/w,this.y=(u-_)/w,this.z=(h-d)/w,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Df extends Bs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Qt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Do(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends Df{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ed extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uf extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class an{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)),Pr.applyMatrix4(e.matrixWorld),this.union(Pr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),Dr.subVectors(this.max,Xs),Ji.subVectors(e.a,Xs),Qi.subVectors(e.b,Xs),es.subVectors(e.c,Xs),Mi.subVectors(Qi,Ji),bi.subVectors(es,Qi),Ui.subVectors(Ji,es);let t=[0,-Mi.z,Mi.y,0,-bi.z,bi.y,0,-Ui.z,Ui.y,Mi.z,0,-Mi.x,bi.z,0,-bi.x,Ui.z,0,-Ui.x,-Mi.y,Mi.x,0,-bi.y,bi.x,0,-Ui.y,Ui.x,0];return!Jo(t,Ji,Qi,es,Dr)||(t=[1,0,0,0,1,0,0,0,1],!Jo(t,Ji,Qi,es,Dr))?!1:(Ur.crossVectors(Mi,bi),t=[Ur.x,Ur.y,Ur.z],Jo(t,Ji,Qi,es,Dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const oi=[new O,new O,new O,new O,new O,new O,new O,new O],zn=new O,Pr=new an,Ji=new O,Qi=new O,es=new O,Mi=new O,bi=new O,Ui=new O,Xs=new O,Dr=new O,Ur=new O,Fi=new O;function Jo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Fi.fromArray(i,r);const a=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),l=e.dot(Fi),c=t.dot(Fi),d=n.dot(Fi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Ff=new an,Ys=new O,Qo=new O;class ei{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ff.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const t=Ys.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ys,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(Qo)),this.expandByPoint(Ys.copy(e.center).sub(Qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ai=new O,ea=new O,Fr=new O,Ei=new O,ta=new O,Or=new O,na=new O;class Mr{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ea.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(ea);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Fr),a=Ei.dot(this.direction),l=-Ei.dot(Fr),c=Ei.lengthSq(),d=Math.abs(1-o*o);let u,h,f,y;if(d>0)if(u=o*l-a,h=o*a-l,y=r*d,u>=0)if(h>=-y)if(h<=y){const _=1/d;u*=_,h*=_,f=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h<=-y?(u=Math.max(0,-(-o*r+a)),h=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c):h<=y?(u=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(u=Math.max(0,-(o*r+a)),h=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c);else h=o>0?-r:r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ea).addScaledVector(Fr,h),f}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,s,r){ta.subVectors(t,e),Or.subVectors(n,e),na.crossVectors(ta,Or);let o=this.direction.dot(na),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,e);const l=a*this.direction.dot(Or.crossVectors(Ei,Or));if(l<0)return null;const c=a*this.direction.dot(ta.cross(Ei));if(c<0||l+c>o)return null;const d=-a*Ei.dot(na);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,n,s,r,o,a,l,c,d,u,h,f,y,_,g){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,d,u,h,f,y,_,g)}set(e,t,n,s,r,o,a,l,c,d,u,h,f,y,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=d,m[10]=u,m[14]=h,m[3]=f,m[7]=y,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),o=1/ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=o*d,f=o*u,y=a*d,_=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+y*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=y+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*d,f=l*u,y=c*d,_=c*u;t[0]=h+_*a,t[4]=y*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=f*a-y,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*d,f=l*u,y=c*d,_=c*u;t[0]=h-_*a,t[4]=-o*u,t[8]=y+f*a,t[1]=f+y*a,t[5]=o*d,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*d,f=o*u,y=a*d,_=a*u;t[0]=l*d,t[4]=y*c-f,t[8]=h*c+_,t[1]=l*u,t[5]=_*c+h,t[9]=f*c-y,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,y=a*l,_=a*c;t[0]=l*d,t[4]=_-h*u,t[8]=y*u+f,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=f*u+y,t[10]=h-_*u}else if(e.order==="XZY"){const h=o*l,f=o*c,y=a*l,_=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+_,t[5]=o*d,t[9]=f*u-y,t[2]=y*u-f,t[6]=a*d,t[10]=_*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Of,e,Bf)}lookAt(e,t,n){const s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Si.crossVectors(n,Sn),Si.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Si.crossVectors(n,Sn)),Si.normalize(),Br.crossVectors(Sn,Si),s[0]=Si.x,s[4]=Br.x,s[8]=Sn.x,s[1]=Si.y,s[5]=Br.y,s[9]=Sn.y,s[2]=Si.z,s[6]=Br.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],f=n[13],y=n[2],_=n[6],g=n[10],m=n[14],w=n[3],E=n[7],x=n[11],I=n[15],N=s[0],P=s[4],U=s[8],T=s[12],b=s[1],D=s[5],$=s[9],j=s[13],Q=s[2],ee=s[6],z=s[10],te=s[14],X=s[3],ae=s[7],pe=s[11],me=s[15];return r[0]=o*N+a*b+l*Q+c*X,r[4]=o*P+a*D+l*ee+c*ae,r[8]=o*U+a*$+l*z+c*pe,r[12]=o*T+a*j+l*te+c*me,r[1]=d*N+u*b+h*Q+f*X,r[5]=d*P+u*D+h*ee+f*ae,r[9]=d*U+u*$+h*z+f*pe,r[13]=d*T+u*j+h*te+f*me,r[2]=y*N+_*b+g*Q+m*X,r[6]=y*P+_*D+g*ee+m*ae,r[10]=y*U+_*$+g*z+m*pe,r[14]=y*T+_*j+g*te+m*me,r[3]=w*N+E*b+x*Q+I*X,r[7]=w*P+E*D+x*ee+I*ae,r[11]=w*U+E*$+x*z+I*pe,r[15]=w*T+E*j+x*te+I*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],y=e[3],_=e[7],g=e[11],m=e[15];return y*(+r*l*u-s*c*u-r*a*h+n*c*h+s*a*f-n*l*f)+_*(+t*l*f-t*c*h+r*o*h-s*o*f+s*c*d-r*l*d)+g*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*d-n*c*d)+m*(-s*a*d-t*l*u+t*a*h+s*o*u-n*o*h+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],y=e[12],_=e[13],g=e[14],m=e[15],w=u*g*c-_*h*c+_*l*f-a*g*f-u*l*m+a*h*m,E=y*h*c-d*g*c-y*l*f+o*g*f+d*l*m-o*h*m,x=d*_*c-y*u*c+y*a*f-o*_*f-d*a*m+o*u*m,I=y*u*l-d*_*l-y*a*h+o*_*h+d*a*g-o*u*g,N=t*w+n*E+s*x+r*I;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/N;return e[0]=w*P,e[1]=(_*h*r-u*g*r-_*s*f+n*g*f+u*s*m-n*h*m)*P,e[2]=(a*g*r-_*l*r+_*s*c-n*g*c-a*s*m+n*l*m)*P,e[3]=(u*l*r-a*h*r-u*s*c+n*h*c+a*s*f-n*l*f)*P,e[4]=E*P,e[5]=(d*g*r-y*h*r+y*s*f-t*g*f-d*s*m+t*h*m)*P,e[6]=(y*l*r-o*g*r-y*s*c+t*g*c+o*s*m-t*l*m)*P,e[7]=(o*h*r-d*l*r+d*s*c-t*h*c-o*s*f+t*l*f)*P,e[8]=x*P,e[9]=(y*u*r-d*_*r-y*n*f+t*_*f+d*n*m-t*u*m)*P,e[10]=(o*_*r-y*a*r+y*n*c-t*_*c-o*n*m+t*a*m)*P,e[11]=(d*a*r-o*u*r-d*n*c+t*u*c+o*n*f-t*a*f)*P,e[12]=I*P,e[13]=(d*_*s-y*u*s+y*n*h-t*_*h-d*n*g+t*u*g)*P,e[14]=(y*a*s-o*_*s-y*n*l+t*_*l+o*n*g-t*a*g)*P,e[15]=(o*u*s-d*a*s+d*n*l-t*u*l-o*n*h+t*a*h)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+n,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,u=a+a,h=r*c,f=r*d,y=r*u,_=o*d,g=o*u,m=a*u,w=l*c,E=l*d,x=l*u,I=n.x,N=n.y,P=n.z;return s[0]=(1-(_+m))*I,s[1]=(f+x)*I,s[2]=(y-E)*I,s[3]=0,s[4]=(f-x)*N,s[5]=(1-(h+m))*N,s[6]=(g+w)*N,s[7]=0,s[8]=(y+E)*P,s[9]=(g-w)*P,s[10]=(1-(h+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ts.set(s[0],s[1],s[2]).length();const o=ts.set(s[4],s[5],s[6]).length(),a=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Hn.copy(this);const c=1/r,d=1/o,u=1/a;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=d,Hn.elements[5]*=d,Hn.elements[6]*=d,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,t.setFromRotationMatrix(Hn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Jn,l=!1){const c=this.elements,d=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let y,_;if(l)y=r/(o-r),_=o*r/(o-r);else if(a===Jn)y=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===To)y=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Jn,l=!1){const c=this.elements,d=2/(t-e),u=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s);let y,_;if(l)y=1/(o-r),_=o/(o-r);else if(a===Jn)y=-2/(o-r),_=-(o+r)/(o-r);else if(a===To)y=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=y,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ts=new O,Hn=new je,Of=new O(0,0,0),Bf=new O(1,1,1),Si=new O,Br=new O,Sn=new O,Ac=new je,Rc=new Cn;class hn{constructor(e=0,t=0,n=0,s=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ac,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class Yl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kf=0;const Cc=new O,ns=new Cn,li=new je,kr=new O,qs=new O,zf=new O,Hf=new Cn,Lc=new O(1,0,0),Ic=new O(0,1,0),Nc=new O(0,0,1),Pc={type:"added"},Gf={type:"removed"},is={type:"childadded",child:null},ia={type:"childremoved",child:null};class kt extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new O,t=new hn,n=new Cn,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new ct}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(Lc,e)}rotateY(e){return this.rotateOnAxis(Ic,e)}rotateZ(e){return this.rotateOnAxis(Nc,e)}translateOnAxis(e,t){return Cc.copy(e).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lc,e)}translateY(e){return this.translateOnAxis(Ic,e)}translateZ(e){return this.translateOnAxis(Nc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kr.copy(e):kr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(qs,kr,this.up):li.lookAt(kr,qs,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(li),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pc),is.child=e,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gf),ia.child=e,this.dispatchEvent(ia),ia.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pc),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,zf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,Hf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),h=o(e.skeletons),f=o(e.animations),y=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),y.length>0&&(n.nodes=y)}return n.object=s,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}kt.DEFAULT_UP=new O(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new O,ci=new O,sa=new O,ui=new O,ss=new O,rs=new O,Dc=new O,ra=new O,oa=new O,aa=new O,la=new Rt,ca=new Rt,ua=new Rt;class Un{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Gn.subVectors(e,t),s.cross(Gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Gn.subVectors(s,t),ci.subVectors(n,t),sa.subVectors(e,t);const o=Gn.dot(Gn),a=Gn.dot(ci),l=Gn.dot(sa),c=ci.dot(ci),d=ci.dot(sa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const h=1/u,f=(c*l-a*d)*h,y=(o*d-a*l)*h;return r.set(1-f-y,y,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return la.setScalar(0),ca.setScalar(0),ua.setScalar(0),la.fromBufferAttribute(e,t),ca.fromBufferAttribute(e,n),ua.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(la,r.x),o.addScaledVector(ca,r.y),o.addScaledVector(ua,r.z),o}static isFrontFacing(e,t,n,s){return Gn.subVectors(n,t),ci.subVectors(e,t),Gn.cross(ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Gn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Un.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ss.subVectors(s,n),rs.subVectors(r,n),ra.subVectors(e,n);const l=ss.dot(ra),c=rs.dot(ra);if(l<=0&&c<=0)return t.copy(n);oa.subVectors(e,s);const d=ss.dot(oa),u=rs.dot(oa);if(d>=0&&u<=d)return t.copy(s);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(ss,o);aa.subVectors(e,r);const f=ss.dot(aa),y=rs.dot(aa);if(y>=0&&f<=y)return t.copy(r);const _=f*c-l*y;if(_<=0&&c>=0&&y<=0)return a=c/(c-y),t.copy(n).addScaledVector(rs,a);const g=d*y-f*u;if(g<=0&&u-d>=0&&f-y>=0)return Dc.subVectors(r,s),a=(u-d)/(u-d+(f-y)),t.copy(s).addScaledVector(Dc,a);const m=1/(g+_+h);return o=_*m,a=h*m,t.copy(n).addScaledVector(ss,o).addScaledVector(rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},zr={h:0,s:0,l:0};function da(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=pt.workingColorSpace){if(e=Xl(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=da(o,r,e+1/3),this.g=da(o,r,e),this.b=da(o,r,e-1/3)}return pt.colorSpaceToWorking(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=Sd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return pt.workingToColorSpace(un.copy(this),e),Math.round(yt(un.r*255,0,255))*65536+Math.round(yt(un.g*255,0,255))*256+Math.round(yt(un.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(un.copy(this),t);const n=un.r,s=un.g,r=un.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Nt){pt.workingToColorSpace(un.copy(this),e);const t=un.r,n=un.g,s=un.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(zr);const n=lr(Ti.h,zr.h,t),s=lr(Ti.s,zr.s,t),r=lr(Ti.l,zr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new Be;Be.NAMES=Sd;let Vf=0;class vn extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=On,this.side=Kt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ba,this.blendDst=ka,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==On&&(n.blending=this.blending),this.side!==Kt&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ba&&(n.blendSrc=this.blendSrc),this.blendDst!==ka&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yn extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new O,Hr=new nt;let Wf=0;class Bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bl,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXY(t,Hr.x,Hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bl&&(e.usage=this.usage),e}}class Td extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wd extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xf=0;const Nn=new je,ha=new kt,os=new O,Tn=new an,$s=new an,rn=new O;class jt extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Md(e)?wd:Td)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ct().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return ha.lookAt(e),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Tn.min,$s.min),Tn.expandByPoint(rn),rn.addVectors(Tn.max,$s.max),Tn.expandByPoint(rn)):(Tn.expandByPoint($s.min),Tn.expandByPoint($s.max))}Tn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)rn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(rn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)rn.fromBufferAttribute(a,c),l&&(os.fromBufferAttribute(e,c),rn.add(os)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new O,l[U]=new O;const c=new O,d=new O,u=new O,h=new nt,f=new nt,y=new nt,_=new O,g=new O;function m(U,T,b){c.fromBufferAttribute(n,U),d.fromBufferAttribute(n,T),u.fromBufferAttribute(n,b),h.fromBufferAttribute(r,U),f.fromBufferAttribute(r,T),y.fromBufferAttribute(r,b),d.sub(c),u.sub(c),f.sub(h),y.sub(h);const D=1/(f.x*y.y-y.x*f.y);isFinite(D)&&(_.copy(d).multiplyScalar(y.y).addScaledVector(u,-f.y).multiplyScalar(D),g.copy(u).multiplyScalar(f.x).addScaledVector(d,-y.x).multiplyScalar(D),a[U].add(_),a[T].add(_),a[b].add(_),l[U].add(g),l[T].add(g),l[b].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let U=0,T=w.length;U<T;++U){const b=w[U],D=b.start,$=b.count;for(let j=D,Q=D+$;j<Q;j+=3)m(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const E=new O,x=new O,I=new O,N=new O;function P(U){I.fromBufferAttribute(s,U),N.copy(I);const T=a[U];E.copy(T),E.sub(I.multiplyScalar(I.dot(T))).normalize(),x.crossVectors(N,T);const D=x.dot(l[U])<0?-1:1;o.setXYZW(U,E.x,E.y,E.z,D)}for(let U=0,T=w.length;U<T;++U){const b=w[U],D=b.start,$=b.count;for(let j=D,Q=D+$;j<Q;j+=3)P(e.getX(j+0)),P(e.getX(j+1)),P(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,d=new O,u=new O;if(e)for(let h=0,f=e.count;h<f;h+=3){const y=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),a.fromBufferAttribute(n,y),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(d),l.add(d),c.add(d),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d);let f=0,y=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*d;for(let m=0;m<d;m++)h[y++]=c[f++]}return new Bt(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){const h=c[d],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uc=new je,Oi=new Mr,Gr=new ei,Fc=new O,Vr=new O,Wr=new O,Xr=new O,fa=new O,Yr=new O,Oc=new O,qr=new O;class $t extends kt{constructor(e=new jt,t=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],u=r[l];d!==0&&(fa.fromBufferAttribute(u,e),o?Yr.addScaledVector(fa,d):Yr.addScaledVector(fa.sub(t),d))}t.add(Yr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(Gr.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Gr,Fc)===null||Oi.origin.distanceToSquared(Fc)>(e.far-e.near)**2))&&(Uc.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(Uc),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,_=h.length;y<_;y++){const g=h[y],m=o[g.materialIndex],w=Math.max(g.start,f.start),E=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=w,I=E;x<I;x+=3){const N=a.getX(x),P=a.getX(x+1),U=a.getX(x+2);s=$r(this,m,e,n,c,d,u,N,P,U),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const y=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=y,m=_;g<m;g+=3){const w=a.getX(g),E=a.getX(g+1),x=a.getX(g+2);s=$r(this,o,e,n,c,d,u,w,E,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,_=h.length;y<_;y++){const g=h[y],m=o[g.materialIndex],w=Math.max(g.start,f.start),E=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=w,I=E;x<I;x+=3){const N=x,P=x+1,U=x+2;s=$r(this,m,e,n,c,d,u,N,P,U),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const y=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=y,m=_;g<m;g+=3){const w=g,E=g+1,x=g+2;s=$r(this,o,e,n,c,d,u,w,E,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Yf(i,e,t,n,s,r,o,a){let l;if(e.side===En?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Kt,a),l===null)return null;qr.copy(a),qr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(qr);return c<t.near||c>t.far?null:{distance:c,point:qr.clone(),object:i}}function $r(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Vr),i.getVertexPosition(l,Wr),i.getVertexPosition(c,Xr);const d=Yf(i,e,t,n,Vr,Wr,Xr,Oc);if(d){const u=new O;Un.getBarycoord(Oc,Vr,Wr,Xr,u),s&&(d.uv=Un.getInterpolatedAttribute(s,a,l,c,u,new nt)),r&&(d.uv1=Un.getInterpolatedAttribute(r,a,l,c,u,new nt)),o&&(d.normal=Un.getInterpolatedAttribute(o,a,l,c,u,new O),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};Un.getNormal(Vr,Wr,Xr,h.normal),d.face=h,d.barycoord=u}return d}class ks extends jt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],u=[];let h=0,f=0;y("z","y","x",-1,-1,n,t,e,o,r,0),y("z","y","x",1,-1,n,t,-e,o,r,1),y("x","z","y",1,1,e,n,t,s,o,2),y("x","z","y",1,-1,e,n,-t,s,o,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(u,2));function y(_,g,m,w,E,x,I,N,P,U,T){const b=x/P,D=I/U,$=x/2,j=I/2,Q=N/2,ee=P+1,z=U+1;let te=0,X=0;const ae=new O;for(let pe=0;pe<z;pe++){const me=pe*D-j;for(let Ae=0;Ae<ee;Ae++){const Le=Ae*b-$;ae[_]=Le*w,ae[g]=me*E,ae[m]=Q,c.push(ae.x,ae.y,ae.z),ae[_]=0,ae[g]=0,ae[m]=N>0?1:-1,d.push(ae.x,ae.y,ae.z),u.push(Ae/P),u.push(1-pe/U),te+=1}}for(let pe=0;pe<U;pe++)for(let me=0;me<P;me++){const Ae=h+me+ee*pe,Le=h+me+ee*(pe+1),Ee=h+(me+1)+ee*(pe+1),W=h+(me+1)+ee*pe;l.push(Ae,Le,W),l.push(Le,Ee,W),X+=6}a.addGroup(f,X,T),f+=X,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function yn(i){const e={};for(let t=0;t<i.length;t++){const n=Ps(i[t]);for(const s in n)e[s]=n[s]}return e}function qf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ad(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const $f={clone:Ps,merge:yn};var jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jf,this.fragmentShader=Kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=qf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Rd extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new O,Bc=new nt,kc=new nt;class on extends Rd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,Bc,kc),t.subVectors(kc,Bc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ar*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const as=-90,ls=1;class Zf extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(as,ls,e,t);s.layers=this.layers,this.add(s);const r=new on(as,ls,e,t);r.layers=this.layers,this.add(r);const o=new on(as,ls,e,t);o.layers=this.layers,this.add(o);const a=new on(as,ls,e,t);a.layers=this.layers,this.add(a);const l=new on(as,ls,e,t);l.layers=this.layers,this.add(l);const c=new on(as,ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===To)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Cd extends Qt{constructor(e=[],t=Rs,n,s,r,o,a,l,c,d){super(e,t,n,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jf extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Cd(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ks(5,5,5),r=new Ii({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:Ci});r.uniforms.tEquirect.value=t;const o=new $t(s,r),a=t.minFilter;return t.minFilter===Fn&&(t.minFilter=ln),new Zf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class xn extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qf={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,y=.005;c.inputState.pinching&&h>f+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class gr extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ld{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bl,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new O;class yr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array),r=It(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new yr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Id extends vn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let cs;const js=new O,us=new O,ds=new O,hs=new nt,Ks=new nt,Nd=new je,jr=new O,Zs=new O,Kr=new O,zc=new nt,ma=new nt,Hc=new nt;class ep extends kt{constructor(e=new Id){if(super(),this.isSprite=!0,this.type="Sprite",cs===void 0){cs=new jt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ld(t,5);cs.setIndex([0,1,2,0,2,3]),cs.setAttribute("position",new yr(n,3,0,!1)),cs.setAttribute("uv",new yr(n,2,3,!1))}this.geometry=cs,this.material=e,this.center=new nt(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),Nd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-ds.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Zr(jr.set(-.5,-.5,0),ds,o,us,s,r),Zr(Zs.set(.5,-.5,0),ds,o,us,s,r),Zr(Kr.set(.5,.5,0),ds,o,us,s,r),zc.set(0,0),ma.set(1,0),Hc.set(1,1);let a=e.ray.intersectTriangle(jr,Zs,Kr,!1,js);if(a===null&&(Zr(Zs.set(-.5,.5,0),ds,o,us,s,r),ma.set(0,1),a=e.ray.intersectTriangle(jr,Kr,Zs,!1,js),a===null))return;const l=e.ray.origin.distanceTo(js);l<e.near||l>e.far||t.push({distance:l,point:js.clone(),uv:Un.getInterpolation(js,jr,Zs,Kr,zc,ma,Hc,new nt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Zr(i,e,t,n,s,r){hs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ks.x=r*hs.x-s*hs.y,Ks.y=s*hs.x+r*hs.y):Ks.copy(hs),i.copy(e),i.x+=Ks.x,i.y+=Ks.y,i.applyMatrix4(Nd)}const Gc=new O,Vc=new Rt,Wc=new Rt,tp=new O,Xc=new je,Jr=new O,ga=new ei,Yc=new je,ya=new Mr;class Pd extends $t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gc,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new an),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jr),this.boundingBox.expandByPoint(Jr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ei),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jr),this.boundingSphere.expandByPoint(Jr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ga.copy(this.boundingSphere),ga.applyMatrix4(s),e.ray.intersectsSphere(ga)!==!1&&(Yc.copy(s).invert(),ya.copy(e.ray).applyMatrix4(Yc),!(this.boundingBox!==null&&ya.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ya)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Rt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===gc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Qh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Vc.fromBufferAttribute(s.attributes.skinIndex,e),Wc.fromBufferAttribute(s.attributes.skinWeight,e),Gc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Wc.getComponent(r);if(o!==0){const a=Vc.getComponent(r);Xc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(tp.copy(Gc).applyMatrix4(Xc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ql extends kt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $l extends Qt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=dn,d=dn,u,h){super(null,o,a,l,c,d,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qc=new je,np=new je;class Uo{constructor(e=[],t=[]){this.uuid=qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:np;qc.multiplyMatrices(a,t[r]),qc.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Uo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new $l(t,e,e,An,Xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ql),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class El extends Bt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fs=new je,$c=new je,Qr=[],jc=new an,ip=new je,Js=new $t,Qs=new ei;class sp extends $t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new El(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ip)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new an),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),jc.copy(e.boundingBox).applyMatrix4(fs),this.boundingBox.union(jc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),Qs.copy(e.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(Qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(n),e.ray.intersectsSphere(Qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fs),$c.multiplyMatrices(n,fs),Js.matrixWorld=$c,Js.raycast(e,Qr);for(let o=0,a=Qr.length;o<a;o++){const l=Qr[o];l.instanceId=r,l.object=this,t.push(l)}Qr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new El(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $l(new Float32Array(s*this.count),s,this.count,Hl,Xn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _a=new O,rp=new O,op=new ct;class Gi{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=_a.subVectors(n,t).cross(rp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_a),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||op.getNormalMatrix(e),s=this.coplanarPoint(_a).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new ei,ap=new nt(.5,.5),eo=new O;class jl{constructor(e=new Gi,t=new Gi,n=new Gi,s=new Gi,r=new Gi,o=new Gi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],f=r[7],y=r[8],_=r[9],g=r[10],m=r[11],w=r[12],E=r[13],x=r[14],I=r[15];if(s[0].setComponents(c-o,f-d,m-y,I-w).normalize(),s[1].setComponents(c+o,f+d,m+y,I+w).normalize(),s[2].setComponents(c+a,f+u,m+_,I+E).normalize(),s[3].setComponents(c-a,f-u,m-_,I-E).normalize(),n)s[4].setComponents(l,h,g,x).normalize(),s[5].setComponents(c-l,f-h,m-g,I-x).normalize();else if(s[4].setComponents(c-l,f-h,m-g,I-x).normalize(),t===Jn)s[5].setComponents(c+l,f+h,m+g,I+x).normalize();else if(t===To)s[5].setComponents(l,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){Bi.center.set(0,0,0);const t=ap.distanceTo(e.center);return Bi.radius=.7071067811865476+t,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(eo.x=s.normal.x>0?e.max.x:e.min.x,eo.y=s.normal.y>0?e.max.y:e.min.y,eo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(eo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xi extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wo=new O,Ao=new O,Kc=new je,er=new Mr,to=new ei,xa=new O,Zc=new O;class Fo extends kt{constructor(e=new jt,t=new xi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)wo.fromBufferAttribute(t,s-1),Ao.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=wo.distanceTo(Ao);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(s),to.radius+=r,e.ray.intersectsSphere(to)===!1)return;Kc.copy(s).invert(),er.copy(e.ray).applyMatrix4(Kc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){const f=Math.max(0,o.start),y=Math.min(d.count,o.start+o.count);for(let _=f,g=y-1;_<g;_+=c){const m=d.getX(_),w=d.getX(_+1),E=no(this,e,er,l,m,w,_);E&&t.push(E)}if(this.isLineLoop){const _=d.getX(y-1),g=d.getX(f),m=no(this,e,er,l,_,g,y-1);m&&t.push(m)}}else{const f=Math.max(0,o.start),y=Math.min(h.count,o.start+o.count);for(let _=f,g=y-1;_<g;_+=c){const m=no(this,e,er,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=no(this,e,er,l,y-1,f,y-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function no(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(wo.fromBufferAttribute(a,s),Ao.fromBufferAttribute(a,r),t.distanceSqToSegment(wo,Ao,xa,Zc)>n)return;xa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(xa);if(!(c<e.near||c>e.far))return{distance:c,point:Zc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Jc=new O,Qc=new O;class Ds extends Fo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Jc.fromBufferAttribute(t,s),Qc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Jc.distanceTo(Qc);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lp extends Fo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _s extends vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const eu=new je,Sl=new Mr,io=new ei,so=new O;class _o extends kt{constructor(e=new jt,t=new _s){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(s),io.radius+=r,e.ray.intersectsSphere(io)===!1)return;eu.copy(s).invert(),Sl.copy(e.ray).applyMatrix4(eu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let y=h,_=f;y<_;y++){const g=c.getX(y);so.fromBufferAttribute(u,g),tu(so,g,l,s,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let y=h,_=f;y<_;y++)so.fromBufferAttribute(u,y),tu(so,y,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function tu(i,e,t,n,s,r,o){const a=Sl.distanceSqToPoint(i);if(a<t){const l=new O;Sl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class va extends Qt{constructor(e,t,n,s,r,o,a,l,c,d,u,h){super(null,o,a,l,c,d,s,r,u,h),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class cp extends Qt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dd extends Qt{constructor(e,t,n=Yi,s,r,o,a=dn,l=dn,c,d=fr,u=1){if(d!==fr&&d!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,s,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Do(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Kl extends jt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],u=[],h=[],f=[];let y=0;const _=[],g=n/2;let m=0;w(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(f,2));function w(){const x=new O,I=new O;let N=0;const P=(t-e)/n;for(let U=0;U<=r;U++){const T=[],b=U/r,D=b*(t-e)+e;for(let $=0;$<=s;$++){const j=$/s,Q=j*l+a,ee=Math.sin(Q),z=Math.cos(Q);I.x=D*ee,I.y=-b*n+g,I.z=D*z,u.push(I.x,I.y,I.z),x.set(ee,P,z).normalize(),h.push(x.x,x.y,x.z),f.push(j,1-b),T.push(y++)}_.push(T)}for(let U=0;U<s;U++)for(let T=0;T<r;T++){const b=_[T][U],D=_[T+1][U],$=_[T+1][U+1],j=_[T][U+1];(e>0||T!==0)&&(d.push(b,D,j),N+=3),(t>0||T!==r-1)&&(d.push(D,$,j),N+=3)}c.addGroup(m,N,0),m+=N}function E(x){const I=y,N=new nt,P=new O;let U=0;const T=x===!0?e:t,b=x===!0?1:-1;for(let $=1;$<=s;$++)u.push(0,g*b,0),h.push(0,b,0),f.push(.5,.5),y++;const D=y;for(let $=0;$<=s;$++){const Q=$/s*l+a,ee=Math.cos(Q),z=Math.sin(Q);P.x=T*z,P.y=g*b,P.z=T*ee,u.push(P.x,P.y,P.z),h.push(0,b,0),N.x=ee*.5+.5,N.y=z*.5*b+.5,f.push(N.x,N.y),y++}for(let $=0;$<s;$++){const j=I+$,Q=D+$;x===!0?d.push(Q,Q+1,j):d.push(Q+1,Q,j),U+=3}c.addGroup(m,U,x===!0?1:2),m+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zl extends Kl{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Zl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class br extends jt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,d=l+1,u=e/a,h=t/l,f=[],y=[],_=[],g=[];for(let m=0;m<d;m++){const w=m*h-o;for(let E=0;E<c;E++){const x=E*u-r;y.push(x,-w,0),_.push(0,0,1),g.push(E/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<a;w++){const E=w+c*m,x=w+c*(m+1),I=w+1+c*(m+1),N=w+1+c*m;f.push(E,x,N),f.push(x,I,N)}this.setIndex(f),this.setAttribute("position",new ht(y,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jl extends jt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],d=[];let u=e;const h=(t-e)/s,f=new O,y=new nt;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const m=r+g/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),y.x=(f.x/t+1)/2,y.y=(f.y/t+1)/2,d.push(y.x,y.y)}u+=h}for(let _=0;_<s;_++){const g=_*(n+1);for(let m=0;m<n;m++){const w=m+g,E=w,x=w+n+1,I=w+n+2,N=w+1;a.push(E,x,N),a.push(x,I,N)}}this.setIndex(a),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ql extends jt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],u=new O,h=new O,f=[],y=[],_=[],g=[];for(let m=0;m<=n;m++){const w=[],E=m/n;let x=0;m===0&&o===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let I=0;I<=t;I++){const N=I/t;u.x=-e*Math.cos(s+N*r)*Math.sin(o+E*a),u.y=e*Math.cos(o+E*a),u.z=e*Math.sin(s+N*r)*Math.sin(o+E*a),y.push(u.x,u.y,u.z),h.copy(u).normalize(),_.push(h.x,h.y,h.z),g.push(N+x,1-E),w.push(c++)}d.push(w)}for(let m=0;m<n;m++)for(let w=0;w<t;w++){const E=d[m][w+1],x=d[m][w],I=d[m+1][w],N=d[m+1][w+1];(m!==0||o>0)&&f.push(E,x,N),(m!==n-1||l<Math.PI)&&f.push(x,I,N)}this.setIndex(f),this.setAttribute("position",new ht(y,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ec extends jt{constructor(e=1,t=.4,n=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:o},n=Math.floor(n),s=Math.floor(s);const a=[],l=[],c=[],d=[],u=new O,h=new O,f=new O,y=new O,_=new O,g=new O,m=new O;for(let E=0;E<=n;++E){const x=E/n*r*Math.PI*2;w(x,r,o,e,f),w(x+.01,r,o,e,y),g.subVectors(y,f),m.addVectors(y,f),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let I=0;I<=s;++I){const N=I/s*Math.PI*2,P=-t*Math.cos(N),U=t*Math.sin(N);u.x=f.x+(P*m.x+U*_.x),u.y=f.y+(P*m.y+U*_.y),u.z=f.z+(P*m.z+U*_.z),l.push(u.x,u.y,u.z),h.subVectors(u,f).normalize(),c.push(h.x,h.y,h.z),d.push(E/n),d.push(I/s)}}for(let E=1;E<=n;E++)for(let x=1;x<=s;x++){const I=(s+1)*(E-1)+(x-1),N=(s+1)*E+(x-1),P=(s+1)*E+x,U=(s+1)*(E-1)+x;a.push(I,N,U),a.push(N,P,U)}this.setIndex(a),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(d,2));function w(E,x,I,N,P){const U=Math.cos(E),T=Math.sin(E),b=I/x*E,D=Math.cos(b);P.x=N*(2+D)*.5*U,P.y=N*(2+D)*T*.5,P.z=N*Math.sin(b)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class kn extends vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ti extends kn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Tl extends vn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Be(16777215),this.specular=new Be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class up extends vn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dp extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hp extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ro(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function fp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function pp(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function nu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Ud(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Er{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class mp extends Er{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yc,endingEnd:yc}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case _c:r=e,a=2*t-n;break;case xc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _c:o=e,l=2*n-t;break;case xc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,y=(n-t)/(s-t),_=y*y,g=_*y,m=-h*g+2*h*_-h*y,w=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*y+1,E=(-1-f)*g+(1.5+f)*_+.5*y,x=f*g-f*_;for(let I=0;I!==a;++I)r[I]=m*o[d+I]+w*o[c+I]+E*o[l+I]+x*o[u+I];return r}}class gp extends Er{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(s-t),u=1-d;for(let h=0;h!==a;++h)r[h]=o[c+h]*u+o[l+h]*d;return r}}class yp extends Er{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class jn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ro(t,this.TimeBufferType),this.values=ro(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ro(e.times,Array),values:ro(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ls:t=this.InterpolantFactoryMethodDiscrete;break;case Is:t=this.InterpolantFactoryMethodLinear;break;case qo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return Is;case this.InterpolantFactoryMethodSmooth:return qo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&fp(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(s)l=!0;else{const u=a*n,h=u-n,f=u+n;for(let y=0;y!==n;++y){const _=t[u+y];if(_!==t[h+y]||_!==t[f+y]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=Is;class zs extends jn{constructor(e,t,n){super(e,t,n)}}zs.prototype.ValueTypeName="bool";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=Ls;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Fd extends jn{constructor(e,t,n,s){super(e,t,n,s)}}Fd.prototype.ValueTypeName="color";class Us extends jn{constructor(e,t,n,s){super(e,t,n,s)}}Us.prototype.ValueTypeName="number";class _p extends Er{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let d=c+a;c!==d;c+=4)Cn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class $i extends jn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new _p(this.times,this.values,this.getValueSize(),e)}}$i.prototype.ValueTypeName="quaternion";$i.prototype.InterpolantFactoryMethodSmooth=void 0;class Hs extends jn{constructor(e,t,n){super(e,t,n)}}Hs.prototype.ValueTypeName="string";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=Ls;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ni extends jn{constructor(e,t,n,s){super(e,t,n,s)}}Ni.prototype.ValueTypeName="vector";class wl{constructor(e="",t=-1,n=[],s=ef){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=qn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(vp(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(jn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const d=pp(l);l=nu(l,1,d),c=nu(c,1,d),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Us(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],d=c.name.match(r);if(d&&d.length>1){const u=d[1];let h=s[u];h||(s[u]=h=[]),h.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,h,f,y,_){if(f.length!==0){const g=[],m=[];Ud(f,g,m,y),g.length!==0&&_.push(new u(h,g,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let y;for(y=0;y<h.length;y++)if(h[y].morphTargets)for(let _=0;_<h[y].morphTargets.length;_++)f[h[y].morphTargets[_]]=-1;for(const _ in f){const g=[],m=[];for(let w=0;w!==h[y].morphTargets.length;++w){const E=h[y];g.push(E.time),m.push(E.morphTarget===_?1:0)}s.push(new Us(".morphTargetInfluence["+_+"]",g,m))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(Ni,f+".position",h,"pos",s),n($i,f+".quaternion",h,"rot",s),n(Ni,f+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function xp(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Us;case"vector":case"vector2":case"vector3":case"vector4":return Ni;case"color":return Fd;case"quaternion":return $i;case"bool":case"boolean":return zs;case"string":return Hs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function vp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=xp(i.type);if(i.times===void 0){const t=[],n=[];Ud(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const yi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Mp{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){const u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){const f=c[u],y=c[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return y}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const bp=new Mp;class $n{constructor(e){this.manager=e!==void 0?e:bp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}$n.DEFAULT_MATERIAL_NAME="__DEFAULT";const di={};class Ep extends Error{constructor(e,t){super(e),this.response=t}}class Gs extends $n{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=yi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(di[e]!==void 0){di[e].push({onLoad:t,onProgress:n,onError:s});return}di[e]=[],di[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=di[e],u=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,y=f!==0;let _=0;const g=new ReadableStream({start(m){w();function w(){u.read().then(({done:E,value:x})=>{if(E)m.close();else{_+=x.byteLength;const I=new ProgressEvent("progress",{lengthComputable:y,loaded:_,total:f});for(let N=0,P=d.length;N<P;N++){const U=d[N];U.onProgress&&U.onProgress(I)}m.enqueue(x),w()}},E=>{m.error(E)})}}});return new Response(g)}else throw new Ep(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),h=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(y=>f.decode(y))}}}).then(c=>{yi.add(`file:${e}`,c);const d=di[e];delete di[e];for(let u=0,h=d.length;u<h;u++){const f=d[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const d=di[e];if(d===void 0)throw this.manager.itemError(e),c;delete di[e];for(let u=0,h=d.length;u<h;u++){const f=d[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ps=new WeakMap;class Sp extends $n{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=yi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=ps.get(o);u===void 0&&(u=[],ps.set(o,u)),u.push({onLoad:t,onError:s})}return o}const a=mr("img");function l(){d(),t&&t(this);const u=ps.get(this)||[];for(let h=0;h<u.length;h++){const f=u[h];f.onLoad&&f.onLoad(this)}ps.delete(this),r.manager.itemEnd(e)}function c(u){d(),s&&s(u),yi.remove(`image:${e}`);const h=ps.get(this)||[];for(let f=0;f<h.length;f++){const y=h[f];y.onError&&y.onError(u)}ps.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),yi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Tp extends $n{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new $l,a=new Gs(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(d){if(s!==void 0)s(d);else{console.error(d);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:wn,o.wrapT=c.wrapT!==void 0?c.wrapT:wn,o.magFilter=c.magFilter!==void 0?c.magFilter:ln,o.minFilter=c.minFilter!==void 0?c.minFilter:ln,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Fn),c.mipmapCount===1&&(o.minFilter=ln),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,s),o}}class Od extends $n{constructor(e){super(e)}load(e,t,n,s){const r=new Qt,o=new Sp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Oo extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ma=new je,iu=new O,su=new O;class tc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jl,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;iu.setFromMatrixPosition(e.matrixWorld),t.position.copy(iu),su.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(su),t.updateMatrixWorld(),Ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wp extends tc{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ns*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Bd extends Oo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new wp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ru=new je,tr=new O,ba=new O;class Ap extends tc{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(tr),ba.copy(n.position),ba.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ba),n.updateMatrixWorld(),s.makeTranslation(-tr.x,-tr.y,-tr.z),ru.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ru,n.coordinateSystem,n.reversedDepth)}}class kd extends Oo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ap}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Bo extends Rd{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Rp extends tc{constructor(){super(new Bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ro extends Oo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Rp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zd extends Oo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Es{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ea=new WeakMap;class Cp extends $n{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=yi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Ea.has(o)===!0)s&&s(Ea.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return yi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ea.set(l,c),yi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});yi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Lp extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const nc="\\[\\]\\.:\\/",Ip=new RegExp("["+nc+"]","g"),ic="[^"+nc+"]",Np="[^"+nc.replace("\\.","")+"]",Pp=/((?:WC+[\/:])*)/.source.replace("WC",ic),Dp=/(WCOD+)?/.source.replace("WCOD",Np),Up=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ic),Fp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ic),Op=new RegExp("^"+Pp+Dp+Up+Fp+"$"),Bp=["material","materials","bones","map"];class kp{constructor(e,t,n){const s=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class St{constructor(e,t,n){this.path=t,this.parsedPath=n||St.parseTrackName(t),this.node=St.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new St.Composite(e,t,n):new St(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ip,"")}static parseTrackName(e){const t=Op.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Bp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=St.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}St.Composite=kp;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const ou=new je;class zp{constructor(e,t,n=0,s=1/0){this.ray=new Mr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Yl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ou.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ou),this}intersectObject(e,t=!0,n=[]){return Al(e,this,n,t),n.sort(au),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Al(e[s],this,n,t);return n.sort(au),n}}function au(i,e){return i.distance-e.distance}function Al(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Al(r[o],e,t,!0)}}class Hp extends Ds{constructor(e=10,t=10,n=4473924,s=8947848){n=new Be(n),s=new Be(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,f=0,y=-a;h<=t;h++,y+=o){l.push(-a,0,y,a,0,y),l.push(y,0,-a,y,0,a);const _=h===r?n:s;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const d=new jt;d.setAttribute("position",new ht(l,3)),d.setAttribute("color",new ht(c,3));const u=new xi({vertexColors:!0,toneMapped:!1});super(d,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class lu extends Ds{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new jt;s.setAttribute("position",new ht(t,3)),s.setAttribute("color",new ht(n,3));const r=new xi({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new Be,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function cu(i,e,t,n){const s=Gp(n);switch(t){case md:return i*e;case Hl:return i*e/s.components*s.byteLength;case Gl:return i*e/s.components*s.byteLength;case yd:return i*e*2/s.components*s.byteLength;case Vl:return i*e*2/s.components*s.byteLength;case gd:return i*e*3/s.components*s.byteLength;case An:return i*e*4/s.components*s.byteLength;case Wl:return i*e*4/s.components*s.byteLength;case fo:case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mo:case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ka:case Ja:return Math.max(i,16)*Math.max(e,8)/4;case ja:case Za:return Math.max(i,8)*Math.max(e,8)/2;case Qa:case el:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case sl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ol:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ll:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case cl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ul:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case dl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case hl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ml:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yo:case gl:case yl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _d:case _l:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xl:case vl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gp(i){switch(i){case Qn:case hd:return{byteLength:1,components:1};case dr:case fd:case vr:return{byteLength:2,components:1};case kl:case zl:return{byteLength:2,components:4};case Yi:case Bl:case Xn:return{byteLength:4,components:1};case pd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Vp(i){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const d=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,d);else{u.sort((f,y)=>f.start-y.start);let h=0;for(let f=1;f<u.length;f++){const y=u[h],_=u[f];_.start<=y.start+y.count+1?y.count=Math.max(y.count,_.start+_.count-y.start):(++h,u[h]=_)}u.length=h+1;for(let f=0,y=u.length;f<y;f++){const _=u[f];i.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xp=`#ifdef USE_ALPHAHASH
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
#endif`,Yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$p=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kp=`#ifdef USE_AOMAP
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
#endif`,Zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jp=`#ifdef USE_BATCHING
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
#endif`,Qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,im=`#ifdef USE_IRIDESCENCE
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
#endif`,sm=`#ifdef USE_BUMPMAP
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fm=`#define PI 3.141592653589793
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
} // validated`,pm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mm=`vec3 transformedNormal = objectNormal;
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
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sm=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Im=`#ifdef USE_GRADIENTMAP
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
}`,Nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Um=`uniform bool receiveShadow;
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
#endif`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hm=`PhysicalMaterial material;
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
#endif`,Gm=`struct PhysicalMaterial {
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
}`,Vm=`
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ym=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qm=`#if defined( USE_POINTS_UV )
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
#endif`,eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ig=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`#ifdef USE_MORPHTARGETS
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
#endif`,og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hg=`#ifdef USE_NORMALMAP
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
#endif`,fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_g=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rg=`float getShadowMask() {
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
}`,Cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lg=`#ifdef USE_SKINNING
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
#endif`,Ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,Pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Og=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#ifdef USE_TRANSMISSION
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wg=`uniform sampler2D t2D;
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`#include <common>
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
}`,Kg=`#if DEPTH_PACKING == 3200
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
}`,Zg=`#define DISTANCE
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
}`,Jg=`#define DISTANCE
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ey=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ty=`uniform float scale;
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
}`,ny=`uniform vec3 diffuse;
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
}`,iy=`#include <common>
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
}`,sy=`uniform vec3 diffuse;
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
}`,ry=`#define LAMBERT
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
}`,oy=`#define LAMBERT
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
}`,ay=`#define MATCAP
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
}`,ly=`#define MATCAP
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
}`,cy=`#define NORMAL
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
}`,uy=`#define NORMAL
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
}`,dy=`#define PHONG
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
}`,hy=`#define PHONG
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
}`,fy=`#define STANDARD
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
}`,py=`#define STANDARD
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
}`,my=`#define TOON
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
}`,gy=`#define TOON
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
}`,yy=`uniform float size;
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
}`,_y=`uniform vec3 diffuse;
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
}`,xy=`#include <common>
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
}`,vy=`uniform vec3 color;
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
}`,My=`uniform float rotation;
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
}`,by=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:Wp,alphahash_pars_fragment:Xp,alphamap_fragment:Yp,alphamap_pars_fragment:qp,alphatest_fragment:$p,alphatest_pars_fragment:jp,aomap_fragment:Kp,aomap_pars_fragment:Zp,batching_pars_vertex:Jp,batching_vertex:Qp,begin_vertex:em,beginnormal_vertex:tm,bsdfs:nm,iridescence_fragment:im,bumpmap_pars_fragment:sm,clipping_planes_fragment:rm,clipping_planes_pars_fragment:om,clipping_planes_pars_vertex:am,clipping_planes_vertex:lm,color_fragment:cm,color_pars_fragment:um,color_pars_vertex:dm,color_vertex:hm,common:fm,cube_uv_reflection_fragment:pm,defaultnormal_vertex:mm,displacementmap_pars_vertex:gm,displacementmap_vertex:ym,emissivemap_fragment:_m,emissivemap_pars_fragment:xm,colorspace_fragment:vm,colorspace_pars_fragment:Mm,envmap_fragment:bm,envmap_common_pars_fragment:Em,envmap_pars_fragment:Sm,envmap_pars_vertex:Tm,envmap_physical_pars_fragment:Fm,envmap_vertex:wm,fog_vertex:Am,fog_pars_vertex:Rm,fog_fragment:Cm,fog_pars_fragment:Lm,gradientmap_pars_fragment:Im,lightmap_pars_fragment:Nm,lights_lambert_fragment:Pm,lights_lambert_pars_fragment:Dm,lights_pars_begin:Um,lights_toon_fragment:Om,lights_toon_pars_fragment:Bm,lights_phong_fragment:km,lights_phong_pars_fragment:zm,lights_physical_fragment:Hm,lights_physical_pars_fragment:Gm,lights_fragment_begin:Vm,lights_fragment_maps:Wm,lights_fragment_end:Xm,logdepthbuf_fragment:Ym,logdepthbuf_pars_fragment:qm,logdepthbuf_pars_vertex:$m,logdepthbuf_vertex:jm,map_fragment:Km,map_pars_fragment:Zm,map_particle_fragment:Jm,map_particle_pars_fragment:Qm,metalnessmap_fragment:eg,metalnessmap_pars_fragment:tg,morphinstance_vertex:ng,morphcolor_vertex:ig,morphnormal_vertex:sg,morphtarget_pars_vertex:rg,morphtarget_vertex:og,normal_fragment_begin:ag,normal_fragment_maps:lg,normal_pars_fragment:cg,normal_pars_vertex:ug,normal_vertex:dg,normalmap_pars_fragment:hg,clearcoat_normal_fragment_begin:fg,clearcoat_normal_fragment_maps:pg,clearcoat_pars_fragment:mg,iridescence_pars_fragment:gg,opaque_fragment:yg,packing:_g,premultiplied_alpha_fragment:xg,project_vertex:vg,dithering_fragment:Mg,dithering_pars_fragment:bg,roughnessmap_fragment:Eg,roughnessmap_pars_fragment:Sg,shadowmap_pars_fragment:Tg,shadowmap_pars_vertex:wg,shadowmap_vertex:Ag,shadowmask_pars_fragment:Rg,skinbase_vertex:Cg,skinning_pars_vertex:Lg,skinning_vertex:Ig,skinnormal_vertex:Ng,specularmap_fragment:Pg,specularmap_pars_fragment:Dg,tonemapping_fragment:Ug,tonemapping_pars_fragment:Fg,transmission_fragment:Og,transmission_pars_fragment:Bg,uv_pars_fragment:kg,uv_pars_vertex:zg,uv_vertex:Hg,worldpos_vertex:Gg,background_vert:Vg,background_frag:Wg,backgroundCube_vert:Xg,backgroundCube_frag:Yg,cube_vert:qg,cube_frag:$g,depth_vert:jg,depth_frag:Kg,distanceRGBA_vert:Zg,distanceRGBA_frag:Jg,equirect_vert:Qg,equirect_frag:ey,linedashed_vert:ty,linedashed_frag:ny,meshbasic_vert:iy,meshbasic_frag:sy,meshlambert_vert:ry,meshlambert_frag:oy,meshmatcap_vert:ay,meshmatcap_frag:ly,meshnormal_vert:cy,meshnormal_frag:uy,meshphong_vert:dy,meshphong_frag:hy,meshphysical_vert:fy,meshphysical_frag:py,meshtoon_vert:my,meshtoon_frag:gy,points_vert:yy,points_frag:_y,shadow_vert:xy,shadow_frag:vy,sprite_vert:My,sprite_frag:by},be={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Zn={basic:{uniforms:yn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:yn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Be(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:yn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:yn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:yn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Be(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:yn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:yn([be.points,be.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:yn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:yn([be.common,be.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:yn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:yn([be.sprite,be.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:yn([be.common,be.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:yn([be.lights,be.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Zn.physical={uniforms:yn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const oo={r:0,b:0,g:0},ki=new hn,Ey=new je;function Sy(i,e,t,n,s,r,o){const a=new Be(0);let l=r===!0?0:1,c,d,u=null,h=0,f=null;function y(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?t:e).get(x)),x}function _(E){let x=!1;const I=y(E);I===null?m(a,l):I&&I.isColor&&(m(I,1),x=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(E,x){const I=y(x);I&&(I.isCubeTexture||I.mapping===No)?(d===void 0&&(d=new $t(new ks(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Ps(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(N,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),ki.copy(x.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),d.material.uniforms.envMap.value=I,d.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Ey.makeRotationFromEuler(ki)),d.material.toneMapped=pt.getTransfer(I.colorSpace)!==Ft,(u!==I||h!==I.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,u=I,h=I.version,f=i.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new $t(new br(2,2),new Ii({name:"BackgroundMaterial",uniforms:Ps(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=pt.getTransfer(I.colorSpace)!==Ft,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(u!==I||h!==I.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=I,h=I.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,x){E.getRGB(oo,Ad(i)),n.buffers.color.setClear(oo.r,oo.g,oo.b,x,o)}function w(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,m(a,l)},render:_,addToRenderList:g,dispose:w}}function Ty(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(b,D,$,j,Q){let ee=!1;const z=u(j,$,D);r!==z&&(r=z,c(r.object)),ee=f(b,j,$,Q),ee&&y(b,j,$,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,x(b,D,$,j),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function d(b){return i.deleteVertexArray(b)}function u(b,D,$){const j=$.wireframe===!0;let Q=n[b.id];Q===void 0&&(Q={},n[b.id]=Q);let ee=Q[D.id];ee===void 0&&(ee={},Q[D.id]=ee);let z=ee[j];return z===void 0&&(z=h(l()),ee[j]=z),z}function h(b){const D=[],$=[],j=[];for(let Q=0;Q<t;Q++)D[Q]=0,$[Q]=0,j[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:$,attributeDivisors:j,object:b,attributes:{},index:null}}function f(b,D,$,j){const Q=r.attributes,ee=D.attributes;let z=0;const te=$.getAttributes();for(const X in te)if(te[X].location>=0){const pe=Q[X];let me=ee[X];if(me===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(me=b.instanceColor)),pe===void 0||pe.attribute!==me||me&&pe.data!==me.data)return!0;z++}return r.attributesNum!==z||r.index!==j}function y(b,D,$,j){const Q={},ee=D.attributes;let z=0;const te=$.getAttributes();for(const X in te)if(te[X].location>=0){let pe=ee[X];pe===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor));const me={};me.attribute=pe,pe&&pe.data&&(me.data=pe.data),Q[X]=me,z++}r.attributes=Q,r.attributesNum=z,r.index=j}function _(){const b=r.newAttributes;for(let D=0,$=b.length;D<$;D++)b[D]=0}function g(b){m(b,0)}function m(b,D){const $=r.newAttributes,j=r.enabledAttributes,Q=r.attributeDivisors;$[b]=1,j[b]===0&&(i.enableVertexAttribArray(b),j[b]=1),Q[b]!==D&&(i.vertexAttribDivisor(b,D),Q[b]=D)}function w(){const b=r.newAttributes,D=r.enabledAttributes;for(let $=0,j=D.length;$<j;$++)D[$]!==b[$]&&(i.disableVertexAttribArray($),D[$]=0)}function E(b,D,$,j,Q,ee,z){z===!0?i.vertexAttribIPointer(b,D,$,Q,ee):i.vertexAttribPointer(b,D,$,j,Q,ee)}function x(b,D,$,j){_();const Q=j.attributes,ee=$.getAttributes(),z=D.defaultAttributeValues;for(const te in ee){const X=ee[te];if(X.location>=0){let ae=Q[te];if(ae===void 0&&(te==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),te==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor)),ae!==void 0){const pe=ae.normalized,me=ae.itemSize,Ae=e.get(ae);if(Ae===void 0)continue;const Le=Ae.buffer,Ee=Ae.type,W=Ae.bytesPerElement,J=Ee===i.INT||Ee===i.UNSIGNED_INT||ae.gpuType===Bl;if(ae.isInterleavedBufferAttribute){const ne=ae.data,ve=ne.stride,Ue=ae.offset;if(ne.isInstancedInterleavedBuffer){for(let Je=0;Je<X.locationSize;Je++)m(X.location+Je,ne.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Je=0;Je<X.locationSize;Je++)g(X.location+Je);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let Je=0;Je<X.locationSize;Je++)E(X.location+Je,me/X.locationSize,Ee,pe,ve*W,(Ue+me/X.locationSize*Je)*W,J)}else{if(ae.isInstancedBufferAttribute){for(let ne=0;ne<X.locationSize;ne++)m(X.location+ne,ae.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ne=0;ne<X.locationSize;ne++)g(X.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let ne=0;ne<X.locationSize;ne++)E(X.location+ne,me/X.locationSize,Ee,pe,me*W,me/X.locationSize*ne*W,J)}}else if(z!==void 0){const pe=z[te];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(X.location,pe);break;case 3:i.vertexAttrib3fv(X.location,pe);break;case 4:i.vertexAttrib4fv(X.location,pe);break;default:i.vertexAttrib1fv(X.location,pe)}}}}w()}function I(){U();for(const b in n){const D=n[b];for(const $ in D){const j=D[$];for(const Q in j)d(j[Q].object),delete j[Q];delete D[$]}delete n[b]}}function N(b){if(n[b.id]===void 0)return;const D=n[b.id];for(const $ in D){const j=D[$];for(const Q in j)d(j[Q].object),delete j[Q];delete D[$]}delete n[b.id]}function P(b){for(const D in n){const $=n[D];if($[b.id]===void 0)continue;const j=$[b.id];for(const Q in j)d(j[Q].object),delete j[Q];delete $[b.id]}}function U(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:N,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:w}}function wy(i,e,t){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let f=0;for(let y=0;y<u;y++)f+=d[y];t.update(f,n,1)}function l(c,d,u,h){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let y=0;y<c.length;y++)o(c[y],d[y],h[y]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,u);let y=0;for(let _=0;_<u;_++)y+=d[_]*h[_];t.update(y,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ay(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==An&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const U=P===vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Qn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Xn&&!U)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=y>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:y,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:I,maxSamples:N}}function Ry(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Gi,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||n!==0||s;return s=h,n=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){const y=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||y===null||y.length===0||r&&!g)r?d(null):c();else{const w=r?0:n,E=w*4;let x=m.clippingState||null;l.value=x,x=d(y,h,E,f);for(let I=0;I!==E;++I)x[I]=t[I];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,f,y){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,y!==!0||g===null){const m=f+_*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,x=f;E!==_;++E,x+=4)o.copy(u[E]).applyMatrix4(w,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Cy(i){let e=new WeakMap;function t(o,a){return a===qa?o.mapping=Rs:a===$a&&(o.mapping=Cs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===qa||a===$a)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Jf(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const xs=4,uu=[.125,.215,.35,.446,.526,.582],Xi=20,Sa=new Bo,du=new Be;let Ta=null,wa=0,Aa=0,Ra=!1;const Vi=(1+Math.sqrt(5))/2,ms=1/Vi,hu=[new O(-Vi,ms,0),new O(Vi,ms,0),new O(-ms,0,Vi),new O(ms,0,Vi),new O(0,Vi,-ms),new O(0,Vi,ms),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Ly=new O;class fu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=Ly}=r;Ta=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ta,wa,Aa),this._renderer.xr.enabled=Ra,e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ta=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:vr,format:An,colorSpace:Mn,depthBuffer:!1},s=pu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Iy(r)),this._blurMaterial=Ny(r,e,t)}return s}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,Sa)}_sceneToCubeUV(e,t,n,s,r){const l=new on(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(du),u.toneMapping=Li,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new Yn({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),g=new $t(new ks,_);let m=!1;const w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,m=!0):(_.color.copy(du),m=!0);for(let E=0;E<6;E++){const x=E%3;x===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[E],r.y,r.z)):x===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[E]));const I=this._cubeSize;ao(s,x*I,E>2?I:0,I,I),u.setRenderTarget(s),m&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Rs||e.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ao(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Sa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hu[(s-r-1)%hu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new $t(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),_=r/y,g=isFinite(r)?1+Math.floor(d*_):Xi;g>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xi}`);const m=[];let w=0;for(let P=0;P<Xi;++P){const U=P/_,T=Math.exp(-U*U/2);m.push(T),P===0?w+=T:P<g&&(w+=2*T)}for(let P=0;P<m.length;P++)m[P]=m[P]/w;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=y,h.mipInt.value=E-n;const x=this._sizeLods[s],I=3*x*(s>E-xs?s-E+xs:0),N=4*(this._cubeSize-x);ao(t,I,N,3*x,2*x),l.setRenderTarget(t),l.render(u,Sa)}}function Iy(i){const e=[],t=[],n=[];let s=i;const r=i-xs+1+uu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-xs?l=uu[o-i+xs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,y=6,_=3,g=2,m=1,w=new Float32Array(_*y*f),E=new Float32Array(g*y*f),x=new Float32Array(m*y*f);for(let N=0;N<f;N++){const P=N%3*2/3-1,U=N>2?0:-1,T=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];w.set(T,_*y*N),E.set(h,g*y*N);const b=[N,N,N,N,N,N];x.set(b,m*y*N)}const I=new jt;I.setAttribute("position",new Bt(w,_)),I.setAttribute("uv",new Bt(E,g)),I.setAttribute("faceIndex",new Bt(x,m)),e.push(I),s>xs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function pu(i,e,t){const n=new qi(i,e,t);return n.texture.mapping=No,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ao(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ny(i,e,t){const n=new Float32Array(Xi),s=new O(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sc(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function mu(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function gu(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function sc(){return`

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
	`}function Py(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===qa||l===$a,d=l===Rs||l===Cs;if(c||d){let u=e.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new fu(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||d&&f&&s(f)?(t===null&&(t=new fu(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Dy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Uy(i,e,t,n){const s={},r=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(u){const h=[],f=u.index,y=u.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let E=0,x=w.length;E<x;E+=3){const I=w[E+0],N=w[E+1],P=w[E+2];h.push(I,N,N,P,P,I)}}else if(y!==void 0){const w=y.array;_=y.version;for(let E=0,x=w.length/3-1;E<x;E+=3){const I=E+0,N=E+1,P=E+2;h.push(I,N,N,P,P,I)}}else return;const g=new(Md(h)?wd:Td)(h,1);g.version=_;const m=r.get(u);m&&e.remove(m),r.set(u,g)}function d(u){const h=r.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function Fy(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*o),t.update(f,n,1)}function c(h,f,y){y!==0&&(i.drawElementsInstanced(n,f,r,h*o,y),t.update(f,n,y))}function d(h,f,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,y);let g=0;for(let m=0;m<y;m++)g+=f[m];t.update(g,n,1)}function u(h,f,y,_){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<h.length;m++)c(h[m]/o,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,_,0,y);let m=0;for(let w=0;w<y;w++)m+=f[w]*_[w];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Oy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function By(i,e,t){const n=new WeakMap,s=new Rt;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let h=n.get(a);if(h===void 0||h.count!==u){let b=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var f=b;h!==void 0&&h.texture.dispose();const y=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;y===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let I=a.attributes.position.count*x,N=1;I>e.maxTextureSize&&(N=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const P=new Float32Array(I*N*4*u),U=new Ed(P,I,N,u);U.type=Xn,U.needsUpdate=!0;const T=x*4;for(let D=0;D<u;D++){const $=m[D],j=w[D],Q=E[D],ee=I*N*4*D;for(let z=0;z<$.count;z++){const te=z*T;y===!0&&(s.fromBufferAttribute($,z),P[ee+te+0]=s.x,P[ee+te+1]=s.y,P[ee+te+2]=s.z,P[ee+te+3]=0),_===!0&&(s.fromBufferAttribute(j,z),P[ee+te+4]=s.x,P[ee+te+5]=s.y,P[ee+te+6]=s.z,P[ee+te+7]=0),g===!0&&(s.fromBufferAttribute(Q,z),P[ee+te+8]=s.x,P[ee+te+9]=s.y,P[ee+te+10]=s.z,P[ee+te+11]=Q.itemSize===4?s.w:1)}}h={count:u,texture:U,size:new nt(I,N)},n.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let y=0;for(let g=0;g<c.length;g++)y+=c[g];const _=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function ky(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Gd=new Qt,yu=new Dd(1,1),Vd=new Ed,Wd=new Uf,Xd=new Cd,_u=[],xu=[],vu=new Float32Array(16),Mu=new Float32Array(9),bu=new Float32Array(4);function Vs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=_u[s];if(r===void 0&&(r=new Float32Array(s),_u[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function nn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function sn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ko(i,e){let t=xu[e];t===void 0&&(t=new Int32Array(e),xu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2fv(this.addr,e),sn(t,e)}}function Gy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;i.uniform3fv(this.addr,e),sn(t,e)}}function Vy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4fv(this.addr,e),sn(t,e)}}function Wy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;bu.set(n),i.uniformMatrix2fv(this.addr,!1,bu),sn(t,n)}}function Xy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Mu.set(n),i.uniformMatrix3fv(this.addr,!1,Mu),sn(t,n)}}function Yy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;vu.set(n),i.uniformMatrix4fv(this.addr,!1,vu),sn(t,n)}}function qy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $y(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2iv(this.addr,e),sn(t,e)}}function jy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3iv(this.addr,e),sn(t,e)}}function Ky(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4iv(this.addr,e),sn(t,e)}}function Zy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Jy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2uiv(this.addr,e),sn(t,e)}}function Qy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3uiv(this.addr,e),sn(t,e)}}function e_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4uiv(this.addr,e),sn(t,e)}}function t_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(yu.compareFunction=vd,r=yu):r=Gd,t.setTexture2D(e||r,s)}function n_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Wd,s)}function i_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Xd,s)}function s_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Vd,s)}function r_(i){switch(i){case 5126:return zy;case 35664:return Hy;case 35665:return Gy;case 35666:return Vy;case 35674:return Wy;case 35675:return Xy;case 35676:return Yy;case 5124:case 35670:return qy;case 35667:case 35671:return $y;case 35668:case 35672:return jy;case 35669:case 35673:return Ky;case 5125:return Zy;case 36294:return Jy;case 36295:return Qy;case 36296:return e_;case 35678:case 36198:case 36298:case 36306:case 35682:return t_;case 35679:case 36299:case 36307:return n_;case 35680:case 36300:case 36308:case 36293:return i_;case 36289:case 36303:case 36311:case 36292:return s_}}function o_(i,e){i.uniform1fv(this.addr,e)}function a_(i,e){const t=Vs(e,this.size,2);i.uniform2fv(this.addr,t)}function l_(i,e){const t=Vs(e,this.size,3);i.uniform3fv(this.addr,t)}function c_(i,e){const t=Vs(e,this.size,4);i.uniform4fv(this.addr,t)}function u_(i,e){const t=Vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function d_(i,e){const t=Vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function h_(i,e){const t=Vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function f_(i,e){i.uniform1iv(this.addr,e)}function p_(i,e){i.uniform2iv(this.addr,e)}function m_(i,e){i.uniform3iv(this.addr,e)}function g_(i,e){i.uniform4iv(this.addr,e)}function y_(i,e){i.uniform1uiv(this.addr,e)}function __(i,e){i.uniform2uiv(this.addr,e)}function x_(i,e){i.uniform3uiv(this.addr,e)}function v_(i,e){i.uniform4uiv(this.addr,e)}function M_(i,e,t){const n=this.cache,s=e.length,r=ko(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Gd,r[o])}function b_(i,e,t){const n=this.cache,s=e.length,r=ko(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Wd,r[o])}function E_(i,e,t){const n=this.cache,s=e.length,r=ko(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Xd,r[o])}function S_(i,e,t){const n=this.cache,s=e.length,r=ko(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Vd,r[o])}function T_(i){switch(i){case 5126:return o_;case 35664:return a_;case 35665:return l_;case 35666:return c_;case 35674:return u_;case 35675:return d_;case 35676:return h_;case 5124:case 35670:return f_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return g_;case 5125:return y_;case 36294:return __;case 36295:return x_;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return M_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return S_}}class w_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=r_(t.type)}}class A_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=T_(t.type)}}class R_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function Eu(i,e){i.seq.push(e),i.map[e.id]=e}function C_(i,e,t){const n=i.name,s=n.length;for(Ca.lastIndex=0;;){const r=Ca.exec(n),o=Ca.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Eu(t,c===void 0?new w_(a,i,e):new A_(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new R_(a),Eu(t,u)),t=u}}}class xo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);C_(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Su(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const L_=37297;let I_=0;function N_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Tu=new ct;function P_(i){pt._getMatrix(Tu,pt.workingColorSpace,i);const e=`mat3( ${Tu.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(i)){case So:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function wu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+N_(i.getShaderSource(e),a)}else return r}function D_(i,e){const t=P_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function U_(i,e){let t;switch(e){case Yh:t="Linear";break;case qh:t="Reinhard";break;case $h:t="Cineon";break;case jh:t="ACESFilmic";break;case Zh:t="AgX";break;case Jh:t="Neutral";break;case Kh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const lo=new O;function F_(){pt.getLuminanceCoefficients(lo);const i=lo.x.toFixed(4),e=lo.y.toFixed(4),t=lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function B_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function k_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function sr(i){return i!==""}function Au(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ru(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(i){return i.replace(z_,G_)}const H_=new Map;function G_(i,e){let t=dt[e];if(t===void 0){const n=H_.get(e);if(n!==void 0)t=dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rl(t)}const V_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cu(i){return i.replace(V_,W_)}function W_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function X_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ud?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Th?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function Y_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case No:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function $_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Io:e="ENVMAP_BLENDING_MULTIPLY";break;case Wh:e="ENVMAP_BLENDING_MIX";break;case Xh:e="ENVMAP_BLENDING_ADD";break}return e}function j_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function K_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=X_(t),c=Y_(t),d=q_(t),u=$_(t),h=j_(t),f=O_(t),y=B_(r),_=s.createProgram();let g,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(sr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(sr).join(`
`),m.length>0&&(m+=`
`)):(g=[Lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),m=[Lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?dt.tonemapping_pars_fragment:"",t.toneMapping!==Li?U_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,D_("linearToOutputTexel",t.outputColorSpace),F_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),o=Rl(o),o=Au(o,t),o=Ru(o,t),a=Rl(a),a=Au(a,t),a=Ru(a,t),o=Cu(o),a=Cu(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=w+g+o,x=w+m+a,I=Su(s,s.VERTEX_SHADER,E),N=Su(s,s.FRAGMENT_SHADER,x);s.attachShader(_,I),s.attachShader(_,N),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(D){if(i.debug.checkShaderErrors){const $=s.getProgramInfoLog(_)||"",j=s.getShaderInfoLog(I)||"",Q=s.getShaderInfoLog(N)||"",ee=$.trim(),z=j.trim(),te=Q.trim();let X=!0,ae=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,N);else{const pe=wu(s,I,"vertex"),me=wu(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+ee+`
`+pe+`
`+me)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(z===""||te==="")&&(ae=!1);ae&&(D.diagnostics={runnable:X,programLog:ee,vertexShader:{log:z,prefix:g},fragmentShader:{log:te,prefix:m}})}s.deleteShader(I),s.deleteShader(N),U=new xo(s,_),T=k_(s,_)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,L_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=N,this}let Z_=0;class J_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Q_(e),t.set(e,n)),n}}class Q_{constructor(e){this.id=Z_++,this.code=e,this.usedTimes=0}}function e0(i,e,t,n,s,r,o){const a=new Yl,l=new J_,c=new Set,d=[],u=s.logarithmicDepthBuffer,h=s.vertexTextures;let f=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,b,D,$,j){const Q=$.fog,ee=j.geometry,z=T.isMeshStandardMaterial?$.environment:null,te=(T.isMeshStandardMaterial?t:e).get(T.envMap||z),X=te&&te.mapping===No?te.image.height:null,ae=y[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const pe=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,me=pe!==void 0?pe.length:0;let Ae=0;ee.morphAttributes.position!==void 0&&(Ae=1),ee.morphAttributes.normal!==void 0&&(Ae=2),ee.morphAttributes.color!==void 0&&(Ae=3);let Le,Ee,W,J;if(ae){const lt=Zn[ae];Le=lt.vertexShader,Ee=lt.fragmentShader}else Le=T.vertexShader,Ee=T.fragmentShader,l.update(T),W=l.getVertexShaderID(T),J=l.getFragmentShaderID(T);const ne=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Ue=j.isInstancedMesh===!0,Je=j.isBatchedMesh===!0,Yt=!!T.map,xt=!!T.matcap,B=!!te,Pt=!!T.aoMap,$e=!!T.lightMap,Mt=!!T.bumpMap,We=!!T.normalMap,Ot=!!T.displacementMap,Ne=!!T.emissiveMap,at=!!T.metalnessMap,Zt=!!T.roughnessMap,Wt=T.anisotropy>0,F=T.clearcoat>0,S=T.dispersion>0,Y=T.iridescence>0,re=T.sheen>0,le=T.transmission>0,ie=Wt&&!!T.anisotropyMap,Ge=F&&!!T.clearcoatMap,ge=F&&!!T.clearcoatNormalMap,Oe=F&&!!T.clearcoatRoughnessMap,ke=Y&&!!T.iridescenceMap,he=Y&&!!T.iridescenceThicknessMap,Te=re&&!!T.sheenColorMap,Qe=re&&!!T.sheenRoughnessMap,ze=!!T.specularMap,Me=!!T.specularColorMap,ot=!!T.specularIntensityMap,k=le&&!!T.transmissionMap,fe=le&&!!T.thicknessMap,ye=!!T.gradientMap,Ie=!!T.alphaMap,ue=T.alphaTest>0,oe=!!T.alphaHash,Fe=!!T.extensions;let it=Li;T.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(it=i.toneMapping);const Dt={shaderID:ae,shaderType:T.type,shaderName:T.name,vertexShader:Le,fragmentShader:Ee,defines:T.defines,customVertexShaderID:W,customFragmentShaderID:J,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Je,batchingColor:Je&&j._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&j.instanceColor!==null,instancingMorph:Ue&&j.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Mn,alphaToCoverage:!!T.alphaToCoverage,map:Yt,matcap:xt,envMap:B,envMapMode:B&&te.mapping,envMapCubeUVHeight:X,aoMap:Pt,lightMap:$e,bumpMap:Mt,normalMap:We,displacementMap:h&&Ot,emissiveMap:Ne,normalMapObjectSpace:We&&T.normalMapType===rf,normalMapTangentSpace:We&&T.normalMapType===Po,metalnessMap:at,roughnessMap:Zt,anisotropy:Wt,anisotropyMap:ie,clearcoat:F,clearcoatMap:Ge,clearcoatNormalMap:ge,clearcoatRoughnessMap:Oe,dispersion:S,iridescence:Y,iridescenceMap:ke,iridescenceThicknessMap:he,sheen:re,sheenColorMap:Te,sheenRoughnessMap:Qe,specularMap:ze,specularColorMap:Me,specularIntensityMap:ot,transmission:le,transmissionMap:k,thicknessMap:fe,gradientMap:ye,opaque:T.transparent===!1&&T.blending===On&&T.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ue,alphaHash:oe,combine:T.combine,mapUv:Yt&&_(T.map.channel),aoMapUv:Pt&&_(T.aoMap.channel),lightMapUv:$e&&_(T.lightMap.channel),bumpMapUv:Mt&&_(T.bumpMap.channel),normalMapUv:We&&_(T.normalMap.channel),displacementMapUv:Ot&&_(T.displacementMap.channel),emissiveMapUv:Ne&&_(T.emissiveMap.channel),metalnessMapUv:at&&_(T.metalnessMap.channel),roughnessMapUv:Zt&&_(T.roughnessMap.channel),anisotropyMapUv:ie&&_(T.anisotropyMap.channel),clearcoatMapUv:Ge&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:ge&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:he&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&_(T.sheenRoughnessMap.channel),specularMapUv:ze&&_(T.specularMap.channel),specularColorMapUv:Me&&_(T.specularColorMap.channel),specularIntensityMapUv:ot&&_(T.specularIntensityMap.channel),transmissionMapUv:k&&_(T.transmissionMap.channel),thicknessMapUv:fe&&_(T.thicknessMap.channel),alphaMapUv:Ie&&_(T.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(We||Wt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!ee.attributes.uv&&(Yt||Ie),fog:!!Q,useFog:T.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ve,skinning:j.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ae,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:Yt&&T.map.isVideoTexture===!0&&pt.getTransfer(T.map.colorSpace)===Ft,decodeVideoTextureEmissive:Ne&&T.emissiveMap.isVideoTexture===!0&&pt.getTransfer(T.emissiveMap.colorSpace)===Ft,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===_n,flipSided:T.side===En,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Fe&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&T.extensions.multiDraw===!0||Je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function m(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)b.push(D),b.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(w(b,T),E(b,T),b.push(i.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function w(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function E(T,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const b=y[T.type];let D;if(b){const $=Zn[b];D=$f.clone($.uniforms)}else D=T.uniforms;return D}function I(T,b){let D;for(let $=0,j=d.length;$<j;$++){const Q=d[$];if(Q.cacheKey===b){D=Q,++D.usedTimes;break}}return D===void 0&&(D=new K_(i,b,T,r),d.push(D)),D}function N(T){if(--T.usedTimes===0){const b=d.indexOf(T);d[b]=d[d.length-1],d.pop(),T.destroy()}}function P(T){l.remove(T)}function U(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:I,releaseProgram:N,releaseShaderCache:P,programs:d,dispose:U}}function t0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function n0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Iu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,h,f,y,_,g){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:h,material:f,groupOrder:y,renderOrder:u.renderOrder,z:_,group:g},i[e]=m):(m.id=u.id,m.object=u,m.geometry=h,m.material=f,m.groupOrder=y,m.renderOrder=u.renderOrder,m.z=_,m.group=g),e++,m}function a(u,h,f,y,_,g){const m=o(u,h,f,y,_,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,h,f,y,_,g){const m=o(u,h,f,y,_,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,h){t.length>1&&t.sort(u||n0),n.length>1&&n.sort(h||Iu),s.length>1&&s.sort(h||Iu)}function d(){for(let u=e,h=i.length;u<h;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:d,sort:c}}function i0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Nu,i.set(n,[o])):s>=r.length?(o=new Nu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function s0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Be};break;case"SpotLight":t={position:new O,direction:new O,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function r0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let o0=0;function a0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function l0(i){const e=new s0,t=r0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new je,o=new je;function a(c){let d=0,u=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,y=0,_=0,g=0,m=0,w=0,E=0,x=0,I=0,N=0,P=0;c.sort(a0);for(let T=0,b=c.length;T<b;T++){const D=c[T],$=D.color,j=D.intensity,Q=D.distance,ee=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=$.r*j,u+=$.g*j,h+=$.b*j;else if(D.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(D.sh.coefficients[z],j);P++}else if(D.isDirectionalLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const te=D.shadow,X=t.get(D);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=ee,n.directionalShadowMatrix[f]=D.shadow.matrix,w++}n.directional[f]=z,f++}else if(D.isSpotLight){const z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy($).multiplyScalar(j),z.distance=Q,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,n.spot[_]=z;const te=D.shadow;if(D.map&&(n.spotLightMap[I]=D.map,I++,te.updateMatrices(D),D.castShadow&&N++),n.spotLightMatrix[_]=te.matrix,D.castShadow){const X=t.get(D);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=ee,x++}_++}else if(D.isRectAreaLight){const z=e.get(D);z.color.copy($).multiplyScalar(j),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=z,g++}else if(D.isPointLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){const te=D.shadow,X=t.get(D);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,X.shadowCameraNear=te.camera.near,X.shadowCameraFar=te.camera.far,n.pointShadow[y]=X,n.pointShadowMap[y]=ee,n.pointShadowMatrix[y]=D.shadow.matrix,E++}n.point[y]=z,y++}else if(D.isHemisphereLight){const z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(j),z.groundColor.copy(D.groundColor).multiplyScalar(j),n.hemi[m]=z,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;const U=n.hash;(U.directionalLength!==f||U.pointLength!==y||U.spotLength!==_||U.rectAreaLength!==g||U.hemiLength!==m||U.numDirectionalShadows!==w||U.numPointShadows!==E||U.numSpotShadows!==x||U.numSpotMaps!==I||U.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=y,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+I-N,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=P,U.directionalLength=f,U.pointLength=y,U.spotLength=_,U.rectAreaLength=g,U.hemiLength=m,U.numDirectionalShadows=w,U.numPointShadows=E,U.numSpotShadows=x,U.numSpotMaps=I,U.numLightProbes=P,n.version=o0++)}function l(c,d){let u=0,h=0,f=0,y=0,_=0;const g=d.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){const E=c[m];if(E.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(E.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(E.isRectAreaLight){const x=n.rectArea[y];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(E.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),y++}else if(E.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(g),h++}else if(E.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function Pu(i){const e=new l0(i),t=[],n=[];function s(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function c0(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Pu(i),e.set(s,[a])):r>=o.length?(a=new Pu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const u0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d0=`uniform sampler2D shadow_pass;
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
}`;function h0(i,e,t){let n=new jl;const s=new nt,r=new nt,o=new Rt,a=new dp({depthPacking:sf}),l=new hp,c={},d=t.maxTextureSize,u={[Kt]:En,[En]:Kt,[_n]:_n},h=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:u0,fragmentShader:d0}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const y=new jt;y.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $t(y,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ud;let m=this.type;this.render=function(N,P,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||N.length===0)return;const T=i.getRenderTarget(),b=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),$=i.state;$.setBlending(Ci),$.buffers.depth.getReversed()?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const j=m!==hi&&this.type===hi,Q=m===hi&&this.type!==hi;for(let ee=0,z=N.length;ee<z;ee++){const te=N[ee],X=te.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ae=X.getFrameExtents();if(s.multiply(ae),r.copy(X.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ae.x),s.x=r.x*ae.x,X.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ae.y),s.y=r.y*ae.y,X.mapSize.y=r.y)),X.map===null||j===!0||Q===!0){const me=this.type!==hi?{minFilter:dn,magFilter:dn}:{};X.map!==null&&X.map.dispose(),X.map=new qi(s.x,s.y,me),X.map.texture.name=te.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const pe=X.getViewportCount();for(let me=0;me<pe;me++){const Ae=X.getViewport(me);o.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),$.viewport(o),X.updateMatrices(te,me),n=X.getFrustum(),x(P,U,X.camera,te,this.type)}X.isPointLightShadow!==!0&&this.type===hi&&w(X,U),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,b,D)};function w(N,P){const U=e.update(_);h.defines.VSM_SAMPLES!==N.blurSamples&&(h.defines.VSM_SAMPLES=N.blurSamples,f.defines.VSM_SAMPLES=N.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new qi(s.x,s.y)),h.uniforms.shadow_pass.value=N.map.texture,h.uniforms.resolution.value=N.mapSize,h.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(P,null,U,h,_,null),f.uniforms.shadow_pass.value=N.mapPass.texture,f.uniforms.resolution.value=N.mapSize,f.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(P,null,U,f,_,null)}function E(N,P,U,T){let b=null;const D=U.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(D!==void 0)b=D;else if(b=U.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const $=b.uuid,j=P.uuid;let Q=c[$];Q===void 0&&(Q={},c[$]=Q);let ee=Q[j];ee===void 0&&(ee=b.clone(),Q[j]=ee,P.addEventListener("dispose",I)),b=ee}if(b.visible=P.visible,b.wireframe=P.wireframe,T===hi?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:u[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const $=i.properties.get(b);$.light=U}return b}function x(N,P,U,T,b){if(N.visible===!1)return;if(N.layers.test(P.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&b===hi)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,N.matrixWorld);const j=e.update(N),Q=N.material;if(Array.isArray(Q)){const ee=j.groups;for(let z=0,te=ee.length;z<te;z++){const X=ee[z],ae=Q[X.materialIndex];if(ae&&ae.visible){const pe=E(N,ae,T,b);N.onBeforeShadow(i,N,P,U,j,pe,X),i.renderBufferDirect(U,null,j,pe,N,X),N.onAfterShadow(i,N,P,U,j,pe,X)}}}else if(Q.visible){const ee=E(N,Q,T,b);N.onBeforeShadow(i,N,P,U,j,ee,null),i.renderBufferDirect(U,null,j,ee,N,null),N.onAfterShadow(i,N,P,U,j,ee,null)}}const $=N.children;for(let j=0,Q=$.length;j<Q;j++)x($[j],P,U,T,b)}function I(N){N.target.removeEventListener("dispose",I);for(const U in c){const T=c[U],b=N.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}const f0={[za]:Ha,[Ga]:Xa,[Va]:Ya,[As]:Wa,[Ha]:za,[Xa]:Ga,[Ya]:Va,[Wa]:As};function p0(i,e){function t(){let k=!1;const fe=new Rt;let ye=null;const Ie=new Rt(0,0,0,0);return{setMask:function(ue){ye!==ue&&!k&&(i.colorMask(ue,ue,ue,ue),ye=ue)},setLocked:function(ue){k=ue},setClear:function(ue,oe,Fe,it,Dt){Dt===!0&&(ue*=it,oe*=it,Fe*=it),fe.set(ue,oe,Fe,it),Ie.equals(fe)===!1&&(i.clearColor(ue,oe,Fe,it),Ie.copy(fe))},reset:function(){k=!1,ye=null,Ie.set(-1,0,0,0)}}}function n(){let k=!1,fe=!1,ye=null,Ie=null,ue=null;return{setReversed:function(oe){if(fe!==oe){const Fe=e.get("EXT_clip_control");oe?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),fe=oe;const it=ue;ue=null,this.setClear(it)}},getReversed:function(){return fe},setTest:function(oe){oe?ne(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(oe){ye!==oe&&!k&&(i.depthMask(oe),ye=oe)},setFunc:function(oe){if(fe&&(oe=f0[oe]),Ie!==oe){switch(oe){case za:i.depthFunc(i.NEVER);break;case Ha:i.depthFunc(i.ALWAYS);break;case Ga:i.depthFunc(i.LESS);break;case As:i.depthFunc(i.LEQUAL);break;case Va:i.depthFunc(i.EQUAL);break;case Wa:i.depthFunc(i.GEQUAL);break;case Xa:i.depthFunc(i.GREATER);break;case Ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=oe}},setLocked:function(oe){k=oe},setClear:function(oe){ue!==oe&&(fe&&(oe=1-oe),i.clearDepth(oe),ue=oe)},reset:function(){k=!1,ye=null,Ie=null,ue=null,fe=!1}}}function s(){let k=!1,fe=null,ye=null,Ie=null,ue=null,oe=null,Fe=null,it=null,Dt=null;return{setTest:function(lt){k||(lt?ne(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(lt){fe!==lt&&!k&&(i.stencilMask(lt),fe=lt)},setFunc:function(lt,Ln,In){(ye!==lt||Ie!==Ln||ue!==In)&&(i.stencilFunc(lt,Ln,In),ye=lt,Ie=Ln,ue=In)},setOp:function(lt,Ln,In){(oe!==lt||Fe!==Ln||it!==In)&&(i.stencilOp(lt,Ln,In),oe=lt,Fe=Ln,it=In)},setLocked:function(lt){k=lt},setClear:function(lt){Dt!==lt&&(i.clearStencil(lt),Dt=lt)},reset:function(){k=!1,fe=null,ye=null,Ie=null,ue=null,oe=null,Fe=null,it=null,Dt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let d={},u={},h=new WeakMap,f=[],y=null,_=!1,g=null,m=null,w=null,E=null,x=null,I=null,N=null,P=new Be(0,0,0),U=0,T=!1,b=null,D=null,$=null,j=null,Q=null;const ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,te=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=te>=2);let ae=null,pe={};const me=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),Le=new Rt().fromArray(me),Ee=new Rt().fromArray(Ae);function W(k,fe,ye,Ie){const ue=new Uint8Array(4),oe=i.createTexture();i.bindTexture(k,oe),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<ye;Fe++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(fe+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return oe}const J={};J[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(i.DEPTH_TEST),o.setFunc(As),Mt(!1),We(fc),ne(i.CULL_FACE),Pt(Ci);function ne(k){d[k]!==!0&&(i.enable(k),d[k]=!0)}function ve(k){d[k]!==!1&&(i.disable(k),d[k]=!1)}function Ue(k,fe){return u[k]!==fe?(i.bindFramebuffer(k,fe),u[k]=fe,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=fe),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function Je(k,fe){let ye=f,Ie=!1;if(k){ye=h.get(fe),ye===void 0&&(ye=[],h.set(fe,ye));const ue=k.textures;if(ye.length!==ue.length||ye[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Fe=ue.length;oe<Fe;oe++)ye[oe]=i.COLOR_ATTACHMENT0+oe;ye.length=ue.length,Ie=!0}}else ye[0]!==i.BACK&&(ye[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(ye)}function Yt(k){return y!==k?(i.useProgram(k),y=k,!0):!1}const xt={[Wi]:i.FUNC_ADD,[Ah]:i.FUNC_SUBTRACT,[Rh]:i.FUNC_REVERSE_SUBTRACT};xt[Ch]=i.MIN,xt[Lh]=i.MAX;const B={[Ih]:i.ZERO,[Nh]:i.ONE,[Ph]:i.SRC_COLOR,[Ba]:i.SRC_ALPHA,[kh]:i.SRC_ALPHA_SATURATE,[Oh]:i.DST_COLOR,[Uh]:i.DST_ALPHA,[Dh]:i.ONE_MINUS_SRC_COLOR,[ka]:i.ONE_MINUS_SRC_ALPHA,[Bh]:i.ONE_MINUS_DST_COLOR,[Fh]:i.ONE_MINUS_DST_ALPHA,[zh]:i.CONSTANT_COLOR,[Hh]:i.ONE_MINUS_CONSTANT_COLOR,[Gh]:i.CONSTANT_ALPHA,[Vh]:i.ONE_MINUS_CONSTANT_ALPHA};function Pt(k,fe,ye,Ie,ue,oe,Fe,it,Dt,lt){if(k===Ci){_===!0&&(ve(i.BLEND),_=!1);return}if(_===!1&&(ne(i.BLEND),_=!0),k!==wh){if(k!==g||lt!==T){if((m!==Wi||x!==Wi)&&(i.blendEquation(i.FUNC_ADD),m=Wi,x=Wi),lt)switch(k){case On:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eo:i.blendFunc(i.ONE,i.ONE);break;case pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case On:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case pc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}w=null,E=null,I=null,N=null,P.set(0,0,0),U=0,g=k,T=lt}return}ue=ue||fe,oe=oe||ye,Fe=Fe||Ie,(fe!==m||ue!==x)&&(i.blendEquationSeparate(xt[fe],xt[ue]),m=fe,x=ue),(ye!==w||Ie!==E||oe!==I||Fe!==N)&&(i.blendFuncSeparate(B[ye],B[Ie],B[oe],B[Fe]),w=ye,E=Ie,I=oe,N=Fe),(it.equals(P)===!1||Dt!==U)&&(i.blendColor(it.r,it.g,it.b,Dt),P.copy(it),U=Dt),g=k,T=!1}function $e(k,fe){k.side===_n?ve(i.CULL_FACE):ne(i.CULL_FACE);let ye=k.side===En;fe&&(ye=!ye),Mt(ye),k.blending===On&&k.transparent===!1?Pt(Ci):Pt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const Ie=k.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ne(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(k){b!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),b=k)}function We(k){k!==Eh?(ne(i.CULL_FACE),k!==D&&(k===fc?i.cullFace(i.BACK):k===Sh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),D=k}function Ot(k){k!==$&&(z&&i.lineWidth(k),$=k)}function Ne(k,fe,ye){k?(ne(i.POLYGON_OFFSET_FILL),(j!==fe||Q!==ye)&&(i.polygonOffset(fe,ye),j=fe,Q=ye)):ve(i.POLYGON_OFFSET_FILL)}function at(k){k?ne(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function Zt(k){k===void 0&&(k=i.TEXTURE0+ee-1),ae!==k&&(i.activeTexture(k),ae=k)}function Wt(k,fe,ye){ye===void 0&&(ae===null?ye=i.TEXTURE0+ee-1:ye=ae);let Ie=pe[ye];Ie===void 0&&(Ie={type:void 0,texture:void 0},pe[ye]=Ie),(Ie.type!==k||Ie.texture!==fe)&&(ae!==ye&&(i.activeTexture(ye),ae=ye),i.bindTexture(k,fe||J[k]),Ie.type=k,Ie.texture=fe)}function F(){const k=pe[ae];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{i.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{i.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{i.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{i.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ge(){try{i.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{i.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Oe(){try{i.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ke(){try{i.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{i.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(k){Le.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Le.copy(k))}function Qe(k){Ee.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Ee.copy(k))}function ze(k,fe){let ye=c.get(fe);ye===void 0&&(ye=new WeakMap,c.set(fe,ye));let Ie=ye.get(k);Ie===void 0&&(Ie=i.getUniformBlockIndex(fe,k.name),ye.set(k,Ie))}function Me(k,fe){const Ie=c.get(fe).get(k);l.get(fe)!==Ie&&(i.uniformBlockBinding(fe,Ie,k.__bindingPointIndex),l.set(fe,Ie))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ae=null,pe={},u={},h=new WeakMap,f=[],y=null,_=!1,g=null,m=null,w=null,E=null,x=null,I=null,N=null,P=new Be(0,0,0),U=0,T=!1,b=null,D=null,$=null,j=null,Q=null,Le.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:ve,bindFramebuffer:Ue,drawBuffers:Je,useProgram:Yt,setBlending:Pt,setMaterial:$e,setFlipSided:Mt,setCullFace:We,setLineWidth:Ot,setPolygonOffset:Ne,setScissorTest:at,activeTexture:Zt,bindTexture:Wt,unbindTexture:F,compressedTexImage2D:S,compressedTexImage3D:Y,texImage2D:ke,texImage3D:he,updateUBOMapping:ze,uniformBlockBinding:Me,texStorage2D:ge,texStorage3D:Oe,texSubImage2D:re,texSubImage3D:le,compressedTexSubImage2D:ie,compressedTexSubImage3D:Ge,scissor:Te,viewport:Qe,reset:ot}}function m0(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(F,S){return f?new OffscreenCanvas(F,S):mr("canvas")}function _(F,S,Y){let re=1;const le=Wt(F);if((le.width>Y||le.height>Y)&&(re=Y/Math.max(le.width,le.height)),re<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ie=Math.floor(re*le.width),Ge=Math.floor(re*le.height);u===void 0&&(u=y(ie,Ge));const ge=S?y(ie,Ge):u;return ge.width=ie,ge.height=Ge,ge.getContext("2d").drawImage(F,0,0,ie,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ie+"x"+Ge+")."),ge}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),F;return F}function g(F){return F.generateMipmaps}function m(F){i.generateMipmap(F)}function w(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(F,S,Y,re,le=!1){if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ie=S;if(S===i.RED&&(Y===i.FLOAT&&(ie=i.R32F),Y===i.HALF_FLOAT&&(ie=i.R16F),Y===i.UNSIGNED_BYTE&&(ie=i.R8)),S===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.R8UI),Y===i.UNSIGNED_SHORT&&(ie=i.R16UI),Y===i.UNSIGNED_INT&&(ie=i.R32UI),Y===i.BYTE&&(ie=i.R8I),Y===i.SHORT&&(ie=i.R16I),Y===i.INT&&(ie=i.R32I)),S===i.RG&&(Y===i.FLOAT&&(ie=i.RG32F),Y===i.HALF_FLOAT&&(ie=i.RG16F),Y===i.UNSIGNED_BYTE&&(ie=i.RG8)),S===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RG16UI),Y===i.UNSIGNED_INT&&(ie=i.RG32UI),Y===i.BYTE&&(ie=i.RG8I),Y===i.SHORT&&(ie=i.RG16I),Y===i.INT&&(ie=i.RG32I)),S===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),Y===i.UNSIGNED_INT&&(ie=i.RGB32UI),Y===i.BYTE&&(ie=i.RGB8I),Y===i.SHORT&&(ie=i.RGB16I),Y===i.INT&&(ie=i.RGB32I)),S===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ie=i.RGBA32UI),Y===i.BYTE&&(ie=i.RGBA8I),Y===i.SHORT&&(ie=i.RGBA16I),Y===i.INT&&(ie=i.RGBA32I)),S===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),S===i.RGBA){const Ge=le?So:pt.getTransfer(re);Y===i.FLOAT&&(ie=i.RGBA32F),Y===i.HALF_FLOAT&&(ie=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ie=Ge===Ft?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function x(F,S){let Y;return F?S===null||S===Yi||S===hr?Y=i.DEPTH24_STENCIL8:S===Xn?Y=i.DEPTH32F_STENCIL8:S===dr&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Yi||S===hr?Y=i.DEPTH_COMPONENT24:S===Xn?Y=i.DEPTH_COMPONENT32F:S===dr&&(Y=i.DEPTH_COMPONENT16),Y}function I(F,S){return g(F)===!0||F.isFramebufferTexture&&F.minFilter!==dn&&F.minFilter!==ln?Math.log2(Math.max(S.width,S.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?S.mipmaps.length:1}function N(F){const S=F.target;S.removeEventListener("dispose",N),U(S),S.isVideoTexture&&d.delete(S)}function P(F){const S=F.target;S.removeEventListener("dispose",P),b(S)}function U(F){const S=n.get(F);if(S.__webglInit===void 0)return;const Y=F.source,re=h.get(Y);if(re){const le=re[S.__cacheKey];le.usedTimes--,le.usedTimes===0&&T(F),Object.keys(re).length===0&&h.delete(Y)}n.remove(F)}function T(F){const S=n.get(F);i.deleteTexture(S.__webglTexture);const Y=F.source,re=h.get(Y);delete re[S.__cacheKey],o.memory.textures--}function b(F){const S=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(S.__webglFramebuffer[re]))for(let le=0;le<S.__webglFramebuffer[re].length;le++)i.deleteFramebuffer(S.__webglFramebuffer[re][le]);else i.deleteFramebuffer(S.__webglFramebuffer[re]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[re])}else{if(Array.isArray(S.__webglFramebuffer))for(let re=0;re<S.__webglFramebuffer.length;re++)i.deleteFramebuffer(S.__webglFramebuffer[re]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let re=0;re<S.__webglColorRenderbuffer.length;re++)S.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[re]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Y=F.textures;for(let re=0,le=Y.length;re<le;re++){const ie=n.get(Y[re]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),n.remove(Y[re])}n.remove(F)}let D=0;function $(){D=0}function j(){const F=D;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),D+=1,F}function Q(F){const S=[];return S.push(F.wrapS),S.push(F.wrapT),S.push(F.wrapR||0),S.push(F.magFilter),S.push(F.minFilter),S.push(F.anisotropy),S.push(F.internalFormat),S.push(F.format),S.push(F.type),S.push(F.generateMipmaps),S.push(F.premultiplyAlpha),S.push(F.flipY),S.push(F.unpackAlignment),S.push(F.colorSpace),S.join()}function ee(F,S){const Y=n.get(F);if(F.isVideoTexture&&at(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Y.__version!==F.version){const re=F.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(Y,F,S);return}}else F.isExternalTexture&&(Y.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+S)}function z(F,S){const Y=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Y.__version!==F.version){J(Y,F,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+S)}function te(F,S){const Y=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Y.__version!==F.version){J(Y,F,S);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+S)}function X(F,S){const Y=n.get(F);if(F.version>0&&Y.__version!==F.version){ne(Y,F,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+S)}const ae={[Wn]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[ur]:i.MIRRORED_REPEAT},pe={[dn]:i.NEAREST,[Ol]:i.NEAREST_MIPMAP_NEAREST,[ys]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[or]:i.LINEAR_MIPMAP_NEAREST,[Fn]:i.LINEAR_MIPMAP_LINEAR},me={[of]:i.NEVER,[hf]:i.ALWAYS,[af]:i.LESS,[vd]:i.LEQUAL,[lf]:i.EQUAL,[df]:i.GEQUAL,[cf]:i.GREATER,[uf]:i.NOTEQUAL};function Ae(F,S){if(S.type===Xn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ln||S.magFilter===or||S.magFilter===ys||S.magFilter===Fn||S.minFilter===ln||S.minFilter===or||S.minFilter===ys||S.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,ae[S.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,ae[S.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,ae[S.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,pe[S.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,pe[S.minFilter]),S.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===dn||S.minFilter!==ys&&S.minFilter!==Fn||S.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Le(F,S){let Y=!1;F.__webglInit===void 0&&(F.__webglInit=!0,S.addEventListener("dispose",N));const re=S.source;let le=h.get(re);le===void 0&&(le={},h.set(re,le));const ie=Q(S);if(ie!==F.__cacheKey){le[ie]===void 0&&(le[ie]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),le[ie].usedTimes++;const Ge=le[F.__cacheKey];Ge!==void 0&&(le[F.__cacheKey].usedTimes--,Ge.usedTimes===0&&T(S)),F.__cacheKey=ie,F.__webglTexture=le[ie].texture}return Y}function Ee(F,S,Y){return Math.floor(Math.floor(F/Y)/S)}function W(F,S,Y,re){const ie=F.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,Y,re,S.data);else{ie.sort((he,Te)=>he.start-Te.start);let Ge=0;for(let he=1;he<ie.length;he++){const Te=ie[Ge],Qe=ie[he],ze=Te.start+Te.count,Me=Ee(Qe.start,S.width,4),ot=Ee(Te.start,S.width,4);Qe.start<=ze+1&&Me===ot&&Ee(Qe.start+Qe.count-1,S.width,4)===Me?Te.count=Math.max(Te.count,Qe.start+Qe.count-Te.start):(++Ge,ie[Ge]=Qe)}ie.length=Ge+1;const ge=i.getParameter(i.UNPACK_ROW_LENGTH),Oe=i.getParameter(i.UNPACK_SKIP_PIXELS),ke=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let he=0,Te=ie.length;he<Te;he++){const Qe=ie[he],ze=Math.floor(Qe.start/4),Me=Math.ceil(Qe.count/4),ot=ze%S.width,k=Math.floor(ze/S.width),fe=Me,ye=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),i.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,ot,k,fe,ye,Y,re,S.data)}F.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ge),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,ke)}}function J(F,S,Y){let re=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=i.TEXTURE_3D);const le=Le(F,S),ie=S.source;t.bindTexture(re,F.__webglTexture,i.TEXTURE0+Y);const Ge=n.get(ie);if(ie.version!==Ge.__version||le===!0){t.activeTexture(i.TEXTURE0+Y);const ge=pt.getPrimaries(pt.workingColorSpace),Oe=S.colorSpace===pi?null:pt.getPrimaries(S.colorSpace),ke=S.colorSpace===pi||ge===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let he=_(S.image,!1,s.maxTextureSize);he=Zt(S,he);const Te=r.convert(S.format,S.colorSpace),Qe=r.convert(S.type);let ze=E(S.internalFormat,Te,Qe,S.colorSpace,S.isVideoTexture);Ae(re,S);let Me;const ot=S.mipmaps,k=S.isVideoTexture!==!0,fe=Ge.__version===void 0||le===!0,ye=ie.dataReady,Ie=I(S,he);if(S.isDepthTexture)ze=x(S.format===pr,S.type),fe&&(k?t.texStorage2D(i.TEXTURE_2D,1,ze,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,ze,he.width,he.height,0,Te,Qe,null));else if(S.isDataTexture)if(ot.length>0){k&&fe&&t.texStorage2D(i.TEXTURE_2D,Ie,ze,ot[0].width,ot[0].height);for(let ue=0,oe=ot.length;ue<oe;ue++)Me=ot[ue],k?ye&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Me.width,Me.height,Te,Qe,Me.data):t.texImage2D(i.TEXTURE_2D,ue,ze,Me.width,Me.height,0,Te,Qe,Me.data);S.generateMipmaps=!1}else k?(fe&&t.texStorage2D(i.TEXTURE_2D,Ie,ze,he.width,he.height),ye&&W(S,he,Te,Qe)):t.texImage2D(i.TEXTURE_2D,0,ze,he.width,he.height,0,Te,Qe,he.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){k&&fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,ze,ot[0].width,ot[0].height,he.depth);for(let ue=0,oe=ot.length;ue<oe;ue++)if(Me=ot[ue],S.format!==An)if(Te!==null)if(k){if(ye)if(S.layerUpdates.size>0){const Fe=cu(Me.width,Me.height,S.format,S.type);for(const it of S.layerUpdates){const Dt=Me.data.subarray(it*Fe/Me.data.BYTES_PER_ELEMENT,(it+1)*Fe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,it,Me.width,Me.height,1,Te,Dt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Me.width,Me.height,he.depth,Te,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,ze,Me.width,Me.height,he.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Me.width,Me.height,he.depth,Te,Qe,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,ze,Me.width,Me.height,he.depth,0,Te,Qe,Me.data)}else{k&&fe&&t.texStorage2D(i.TEXTURE_2D,Ie,ze,ot[0].width,ot[0].height);for(let ue=0,oe=ot.length;ue<oe;ue++)Me=ot[ue],S.format!==An?Te!==null?k?ye&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,Me.width,Me.height,Te,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,ze,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?ye&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Me.width,Me.height,Te,Qe,Me.data):t.texImage2D(i.TEXTURE_2D,ue,ze,Me.width,Me.height,0,Te,Qe,Me.data)}else if(S.isDataArrayTexture)if(k){if(fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,ze,he.width,he.height,he.depth),ye)if(S.layerUpdates.size>0){const ue=cu(he.width,he.height,S.format,S.type);for(const oe of S.layerUpdates){const Fe=he.data.subarray(oe*ue/he.data.BYTES_PER_ELEMENT,(oe+1)*ue/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,he.width,he.height,1,Te,Qe,Fe)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Te,Qe,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,he.width,he.height,he.depth,0,Te,Qe,he.data);else if(S.isData3DTexture)k?(fe&&t.texStorage3D(i.TEXTURE_3D,Ie,ze,he.width,he.height,he.depth),ye&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Te,Qe,he.data)):t.texImage3D(i.TEXTURE_3D,0,ze,he.width,he.height,he.depth,0,Te,Qe,he.data);else if(S.isFramebufferTexture){if(fe)if(k)t.texStorage2D(i.TEXTURE_2D,Ie,ze,he.width,he.height);else{let ue=he.width,oe=he.height;for(let Fe=0;Fe<Ie;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,ze,ue,oe,0,Te,Qe,null),ue>>=1,oe>>=1}}else if(ot.length>0){if(k&&fe){const ue=Wt(ot[0]);t.texStorage2D(i.TEXTURE_2D,Ie,ze,ue.width,ue.height)}for(let ue=0,oe=ot.length;ue<oe;ue++)Me=ot[ue],k?ye&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Te,Qe,Me):t.texImage2D(i.TEXTURE_2D,ue,ze,Te,Qe,Me);S.generateMipmaps=!1}else if(k){if(fe){const ue=Wt(he);t.texStorage2D(i.TEXTURE_2D,Ie,ze,ue.width,ue.height)}ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,Qe,he)}else t.texImage2D(i.TEXTURE_2D,0,ze,Te,Qe,he);g(S)&&m(re),Ge.__version=ie.version,S.onUpdate&&S.onUpdate(S)}F.__version=S.version}function ne(F,S,Y){if(S.image.length!==6)return;const re=Le(F,S),le=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+Y);const ie=n.get(le);if(le.version!==ie.__version||re===!0){t.activeTexture(i.TEXTURE0+Y);const Ge=pt.getPrimaries(pt.workingColorSpace),ge=S.colorSpace===pi?null:pt.getPrimaries(S.colorSpace),Oe=S.colorSpace===pi||Ge===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const ke=S.isCompressedTexture||S.image[0].isCompressedTexture,he=S.image[0]&&S.image[0].isDataTexture,Te=[];for(let oe=0;oe<6;oe++)!ke&&!he?Te[oe]=_(S.image[oe],!0,s.maxCubemapSize):Te[oe]=he?S.image[oe].image:S.image[oe],Te[oe]=Zt(S,Te[oe]);const Qe=Te[0],ze=r.convert(S.format,S.colorSpace),Me=r.convert(S.type),ot=E(S.internalFormat,ze,Me,S.colorSpace),k=S.isVideoTexture!==!0,fe=ie.__version===void 0||re===!0,ye=le.dataReady;let Ie=I(S,Qe);Ae(i.TEXTURE_CUBE_MAP,S);let ue;if(ke){k&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,ot,Qe.width,Qe.height);for(let oe=0;oe<6;oe++){ue=Te[oe].mipmaps;for(let Fe=0;Fe<ue.length;Fe++){const it=ue[Fe];S.format!==An?ze!==null?k?ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,0,0,it.width,it.height,ze,it.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,ot,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,0,0,it.width,it.height,ze,Me,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,ot,it.width,it.height,0,ze,Me,it.data)}}}else{if(ue=S.mipmaps,k&&fe){ue.length>0&&Ie++;const oe=Wt(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,ot,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(he){k?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Te[oe].width,Te[oe].height,ze,Me,Te[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ot,Te[oe].width,Te[oe].height,0,ze,Me,Te[oe].data);for(let Fe=0;Fe<ue.length;Fe++){const Dt=ue[Fe].image[oe].image;k?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,0,0,Dt.width,Dt.height,ze,Me,Dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,ot,Dt.width,Dt.height,0,ze,Me,Dt.data)}}else{k?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ze,Me,Te[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ot,ze,Me,Te[oe]);for(let Fe=0;Fe<ue.length;Fe++){const it=ue[Fe];k?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,0,0,ze,Me,it.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,ot,ze,Me,it.image[oe])}}}g(S)&&m(i.TEXTURE_CUBE_MAP),ie.__version=le.version,S.onUpdate&&S.onUpdate(S)}F.__version=S.version}function ve(F,S,Y,re,le,ie){const Ge=r.convert(Y.format,Y.colorSpace),ge=r.convert(Y.type),Oe=E(Y.internalFormat,Ge,ge,Y.colorSpace),ke=n.get(S),he=n.get(Y);if(he.__renderTarget=S,!ke.__hasExternalTextures){const Te=Math.max(1,S.width>>ie),Qe=Math.max(1,S.height>>ie);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,ie,Oe,Te,Qe,S.depth,0,Ge,ge,null):t.texImage2D(le,ie,Oe,Te,Qe,0,Ge,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),Ne(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,le,he.__webglTexture,0,Ot(S)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,le,he.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(F,S,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,F),S.depthBuffer){const re=S.depthTexture,le=re&&re.isDepthTexture?re.type:null,ie=x(S.stencilBuffer,le),Ge=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=Ot(S);Ne(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,ie,S.width,S.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ie,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ie,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ge,i.RENDERBUFFER,F)}else{const re=S.textures;for(let le=0;le<re.length;le++){const ie=re[le],Ge=r.convert(ie.format,ie.colorSpace),ge=r.convert(ie.type),Oe=E(ie.internalFormat,Ge,ge,ie.colorSpace),ke=Ot(S);Y&&Ne(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Oe,S.width,S.height):Ne(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke,Oe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Oe,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Je(F,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=n.get(S.depthTexture);re.__renderTarget=S,(!re.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ee(S.depthTexture,0);const le=re.__webglTexture,ie=Ot(S);if(S.depthTexture.format===fr)Ne(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(S.depthTexture.format===pr)Ne(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Yt(F){const S=n.get(F),Y=F.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==F.depthTexture){const re=F.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),re){const le=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,re.removeEventListener("dispose",le)};re.addEventListener("dispose",le),S.__depthDisposeCallback=le}S.__boundDepthTexture=re}if(F.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const re=F.texture.mipmaps;re&&re.length>0?Je(S.__webglFramebuffer[0],F):Je(S.__webglFramebuffer,F)}else if(Y){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]===void 0)S.__webglDepthbuffer[re]=i.createRenderbuffer(),Ue(S.__webglDepthbuffer[re],F,!1);else{const le=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,ie)}}else{const re=F.texture.mipmaps;if(re&&re.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Ue(S.__webglDepthbuffer,F,!1);else{const le=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(F,S,Y){const re=n.get(F);S!==void 0&&ve(re.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Yt(F)}function B(F){const S=F.texture,Y=n.get(F),re=n.get(S);F.addEventListener("dispose",P);const le=F.textures,ie=F.isWebGLCubeRenderTarget===!0,Ge=le.length>1;if(Ge||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=S.version,o.memory.textures++),ie){Y.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[ge]=[];for(let Oe=0;Oe<S.mipmaps.length;Oe++)Y.__webglFramebuffer[ge][Oe]=i.createFramebuffer()}else Y.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ge=0;ge<S.mipmaps.length;ge++)Y.__webglFramebuffer[ge]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Ge)for(let ge=0,Oe=le.length;ge<Oe;ge++){const ke=n.get(le[ge]);ke.__webglTexture===void 0&&(ke.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&Ne(F)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ge=0;ge<le.length;ge++){const Oe=le[ge];Y.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ge]);const ke=r.convert(Oe.format,Oe.colorSpace),he=r.convert(Oe.type),Te=E(Oe.internalFormat,ke,he,Oe.colorSpace,F.isXRRenderTarget===!0),Qe=Ot(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Te,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(Y.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,S);for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0)for(let Oe=0;Oe<S.mipmaps.length;Oe++)ve(Y.__webglFramebuffer[ge][Oe],F,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe);else ve(Y.__webglFramebuffer[ge],F,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(S)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let ge=0,Oe=le.length;ge<Oe;ge++){const ke=le[ge],he=n.get(ke);let Te=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Te=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,he.__webglTexture),Ae(Te,ke),ve(Y.__webglFramebuffer,F,ke,i.COLOR_ATTACHMENT0+ge,Te,0),g(ke)&&m(Te)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ge=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,re.__webglTexture),Ae(ge,S),S.mipmaps&&S.mipmaps.length>0)for(let Oe=0;Oe<S.mipmaps.length;Oe++)ve(Y.__webglFramebuffer[Oe],F,S,i.COLOR_ATTACHMENT0,ge,Oe);else ve(Y.__webglFramebuffer,F,S,i.COLOR_ATTACHMENT0,ge,0);g(S)&&m(ge),t.unbindTexture()}F.depthBuffer&&Yt(F)}function Pt(F){const S=F.textures;for(let Y=0,re=S.length;Y<re;Y++){const le=S[Y];if(g(le)){const ie=w(F),Ge=n.get(le).__webglTexture;t.bindTexture(ie,Ge),m(ie),t.unbindTexture()}}}const $e=[],Mt=[];function We(F){if(F.samples>0){if(Ne(F)===!1){const S=F.textures,Y=F.width,re=F.height;let le=i.COLOR_BUFFER_BIT;const ie=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ge=n.get(F),ge=S.length>1;if(ge)for(let ke=0;ke<S.length;ke++)t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const Oe=F.texture.mipmaps;Oe&&Oe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let ke=0;ke<S.length;ke++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[ke]);const he=n.get(S[ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,Y,re,0,0,Y,re,le,i.NEAREST),l===!0&&($e.length=0,Mt.length=0,$e.push(i.COLOR_ATTACHMENT0+ke),F.depthBuffer&&F.resolveDepthBuffer===!1&&($e.push(ie),Mt.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Mt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let ke=0;ke<S.length;ke++){t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[ke]);const he=n.get(S[ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,he,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){const S=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ot(F){return Math.min(s.maxSamples,F.samples)}function Ne(F){const S=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function at(F){const S=o.render.frame;d.get(F)!==S&&(d.set(F,S),F.update())}function Zt(F,S){const Y=F.colorSpace,re=F.format,le=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Y!==Mn&&Y!==pi&&(pt.getTransfer(Y)===Ft?(re!==An||le!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),S}function Wt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=$,this.setTexture2D=ee,this.setTexture2DArray=z,this.setTexture3D=te,this.setTextureCube=X,this.rebindTextures=xt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Ne}function g0(i,e){function t(n,s=pi){let r;const o=pt.getTransfer(s);if(n===Qn)return i.UNSIGNED_BYTE;if(n===kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hd)return i.BYTE;if(n===fd)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===Bl)return i.INT;if(n===Yi)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===vr)return i.HALF_FLOAT;if(n===md)return i.ALPHA;if(n===gd)return i.RGB;if(n===An)return i.RGBA;if(n===fr)return i.DEPTH_COMPONENT;if(n===pr)return i.DEPTH_STENCIL;if(n===Hl)return i.RED;if(n===Gl)return i.RED_INTEGER;if(n===yd)return i.RG;if(n===Vl)return i.RG_INTEGER;if(n===Wl)return i.RGBA_INTEGER;if(n===fo||n===po||n===mo||n===go)if(o===Ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ja||n===Ka||n===Za||n===Ja)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qa||n===el||n===tl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qa||n===el)return o===Ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===tl)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===ul||n===dl||n===hl||n===fl||n===pl||n===ml)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nl)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===il)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sl)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rl)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ol)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===al)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ll)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cl)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ul)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dl)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fl)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pl)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ml)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yo||n===gl||n===yl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===yo)return o===Ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_d||n===_l||n===xl||n===vl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===yo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Yd extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const y0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_0=`
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

}`;class x0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Yd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ii({vertexShader:y0,fragmentShader:_0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new br(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v0 extends Bs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,y=null;const _=new x0,g={},m=t.getContextAttributes();let w=null,E=null;const x=[],I=[],N=new nt;let P=null;const U=new on;U.viewport=new Rt;const T=new on;T.viewport=new Rt;const b=[U,T],D=new Lp;let $=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=x[W];return J===void 0&&(J=new pa,x[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=x[W];return J===void 0&&(J=new pa,x[W]=J),J.getGripSpace()},this.getHand=function(W){let J=x[W];return J===void 0&&(J=new pa,x[W]=J),J.getHandSpace()};function Q(W){const J=I.indexOf(W.inputSource);if(J===-1)return;const ne=x[J];ne!==void 0&&(ne.update(W.inputSource,W.frame,c||o),ne.dispatchEvent({type:W.type,data:W.inputSource}))}function ee(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",z);for(let W=0;W<x.length;W++){const J=I[W];J!==null&&(I[W]=null,x[W].disconnect(J))}$=null,j=null,_.reset();for(const W in g)delete g[W];e.setRenderTarget(w),f=null,h=null,u=null,s=null,E=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(N),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(s,t)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,ve=null,Ue=null;m.depth&&(Ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?pr:fr,ve=m.stencil?hr:Yi);const Je={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:r};h=u.createProjectionLayer(Je),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new qi(h.textureWidth,h.textureHeight,{format:An,type:Qn,depthTexture:new Dd(h.textureWidth,h.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new qi(f.framebufferWidth,f.framebufferHeight,{format:An,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ee.setContext(s),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(W){for(let J=0;J<W.removed.length;J++){const ne=W.removed[J],ve=I.indexOf(ne);ve>=0&&(I[ve]=null,x[ve].disconnect(ne))}for(let J=0;J<W.added.length;J++){const ne=W.added[J];let ve=I.indexOf(ne);if(ve===-1){for(let Je=0;Je<x.length;Je++)if(Je>=I.length){I.push(ne),ve=Je;break}else if(I[Je]===null){I[Je]=ne,ve=Je;break}if(ve===-1)break}const Ue=x[ve];Ue&&Ue.connect(ne)}}const te=new O,X=new O;function ae(W,J,ne){te.setFromMatrixPosition(J.matrixWorld),X.setFromMatrixPosition(ne.matrixWorld);const ve=te.distanceTo(X),Ue=J.projectionMatrix.elements,Je=ne.projectionMatrix.elements,Yt=Ue[14]/(Ue[10]-1),xt=Ue[14]/(Ue[10]+1),B=(Ue[9]+1)/Ue[5],Pt=(Ue[9]-1)/Ue[5],$e=(Ue[8]-1)/Ue[0],Mt=(Je[8]+1)/Je[0],We=Yt*$e,Ot=Yt*Mt,Ne=ve/(-$e+Mt),at=Ne*-$e;if(J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(at),W.translateZ(Ne),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ue[10]===-1)W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Zt=Yt+Ne,Wt=xt+Ne,F=We-at,S=Ot+(ve-at),Y=B*xt/Wt*Zt,re=Pt*xt/Wt*Zt;W.projectionMatrix.makePerspective(F,S,Y,re,Zt,Wt),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function pe(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let J=W.near,ne=W.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(ne=_.depthFar)),D.near=T.near=U.near=J,D.far=T.far=U.far=ne,($!==D.near||j!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),$=D.near,j=D.far),D.layers.mask=W.layers.mask|6,U.layers.mask=D.layers.mask&3,T.layers.mask=D.layers.mask&5;const ve=W.parent,Ue=D.cameras;pe(D,ve);for(let Je=0;Je<Ue.length;Je++)pe(Ue[Je],ve);Ue.length===2?ae(D,U,T):D.projectionMatrix.copy(U.projectionMatrix),me(W,D,ve)};function me(W,J,ne){ne===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(ne.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ns*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(D)},this.getCameraTexture=function(W){return g[W]};let Ae=null;function Le(W,J){if(d=J.getViewerPose(c||o),y=J,d!==null){const ne=d.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let ve=!1;ne.length!==D.cameras.length&&(D.cameras.length=0,ve=!0);for(let xt=0;xt<ne.length;xt++){const B=ne[xt];let Pt=null;if(f!==null)Pt=f.getViewport(B);else{const Mt=u.getViewSubImage(h,B);Pt=Mt.viewport,xt===0&&(e.setRenderTargetTextures(E,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(E))}let $e=b[xt];$e===void 0&&($e=new on,$e.layers.enable(xt),$e.viewport=new Rt,b[xt]=$e),$e.matrix.fromArray(B.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(B.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),xt===0&&(D.matrix.copy($e.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),ve===!0&&D.cameras.push($e)}const Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const xt=u.getDepthInformation(ne[0]);xt&&xt.isValid&&xt.texture&&_.init(xt,s.renderState)}if(Ue&&Ue.includes("camera-access")&&(e.state.unbindTexture(),u))for(let xt=0;xt<ne.length;xt++){const B=ne[xt].camera;if(B){let Pt=g[B];Pt||(Pt=new Yd,g[B]=Pt);const $e=u.getCameraImage(B);Pt.sourceTexture=$e}}}for(let ne=0;ne<x.length;ne++){const ve=I[ne],Ue=x[ne];ve!==null&&Ue!==void 0&&Ue.update(ve,J,c||o)}Ae&&Ae(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),y=null}const Ee=new Hd;Ee.setAnimationLoop(Le),this.setAnimationLoop=function(W){Ae=W},this.dispose=function(){}}}const zi=new hn,M0=new je;function b0(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Ad(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,w,E,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),d(g,m)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),y(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,w,E):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===En&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===En&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const w=e.get(m),E=w.envMap,x=w.envMapRotation;E&&(g.envMap.value=E,zi.copy(x),zi.x*=-1,zi.y*=-1,zi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),g.envMapRotation.value.setFromMatrix4(M0.makeRotationFromEuler(zi)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,w,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=E*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===En&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const w=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function E0(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){const x=E.program;n.uniformBlockBinding(w,x)}function c(w,E){let x=s[w.id];x===void 0&&(y(w),x=d(w),s[w.id]=x,w.addEventListener("dispose",g));const I=E.program;n.updateUBOMapping(w,I);const N=e.render.frame;r[w.id]!==N&&(h(w),r[w.id]=N)}function d(w){const E=u();w.__bindingPointIndex=E;const x=i.createBuffer(),I=w.__size,N=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,I,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,x),x}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const E=s[w.id],x=w.uniforms,I=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let N=0,P=x.length;N<P;N++){const U=Array.isArray(x[N])?x[N]:[x[N]];for(let T=0,b=U.length;T<b;T++){const D=U[T];if(f(D,N,T,I)===!0){const $=D.__offset,j=Array.isArray(D.value)?D.value:[D.value];let Q=0;for(let ee=0;ee<j.length;ee++){const z=j[ee],te=_(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,$+Q,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,Q),Q+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,E,x,I){const N=w.value,P=E+"_"+x;if(I[P]===void 0)return typeof N=="number"||typeof N=="boolean"?I[P]=N:I[P]=N.clone(),!0;{const U=I[P];if(typeof N=="number"||typeof N=="boolean"){if(U!==N)return I[P]=N,!0}else if(U.equals(N)===!1)return U.copy(N),!0}return!1}function y(w){const E=w.uniforms;let x=0;const I=16;for(let P=0,U=E.length;P<U;P++){const T=Array.isArray(E[P])?E[P]:[E[P]];for(let b=0,D=T.length;b<D;b++){const $=T[b],j=Array.isArray($.value)?$.value:[$.value];for(let Q=0,ee=j.length;Q<ee;Q++){const z=j[Q],te=_(z),X=x%I,ae=X%te.boundary,pe=X+ae;x+=ae,pe!==0&&I-pe<te.storage&&(x+=I-pe),$.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=x,x+=te.storage}}}const N=x%I;return N>0&&(x+=I-N),w.__size=x,w.__cache={},this}function _(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function g(w){const E=w.target;E.removeEventListener("dispose",g);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class rc{constructor(e={}){const{canvas:t=Cf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const y=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const w=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let I=!1;this._outputColorSpace=Nt;let N=0,P=0,U=null,T=-1,b=null;const D=new Rt,$=new Rt;let j=null;const Q=new Be(0);let ee=0,z=t.width,te=t.height,X=1,ae=null,pe=null;const me=new Rt(0,0,z,te),Ae=new Rt(0,0,z,te);let Le=!1;const Ee=new jl;let W=!1,J=!1;const ne=new je,ve=new O,Ue=new Rt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function xt(){return U===null?X:1}let B=n;function Pt(R,G){return t.getContext(R,G)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lo}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",ue,!1),B===null){const G="webgl2";if(B=Pt(G,R),B===null)throw Pt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let $e,Mt,We,Ot,Ne,at,Zt,Wt,F,S,Y,re,le,ie,Ge,ge,Oe,ke,he,Te,Qe,ze,Me,ot;function k(){$e=new Dy(B),$e.init(),ze=new g0(B,$e),Mt=new Ay(B,$e,e,ze),We=new p0(B,$e),Mt.reversedDepthBuffer&&h&&We.buffers.depth.setReversed(!0),Ot=new Oy(B),Ne=new t0,at=new m0(B,$e,We,Ne,Mt,ze,Ot),Zt=new Cy(x),Wt=new Py(x),F=new Vp(B),Me=new Ty(B,F),S=new Uy(B,F,Ot,Me),Y=new ky(B,S,F,Ot),he=new By(B,Mt,at),ge=new Ry(Ne),re=new e0(x,Zt,Wt,$e,Mt,Me,ge),le=new b0(x,Ne),ie=new i0,Ge=new c0($e),ke=new Sy(x,Zt,Wt,We,Y,f,l),Oe=new h0(x,Y,Mt),ot=new E0(B,Ot,Mt,We),Te=new wy(B,$e,Ot),Qe=new Fy(B,$e,Ot),Ot.programs=re.programs,x.capabilities=Mt,x.extensions=$e,x.properties=Ne,x.renderLists=ie,x.shadowMap=Oe,x.state=We,x.info=Ot}k();const fe=new v0(x,B);this.xr=fe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=$e.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=$e.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(R){R!==void 0&&(X=R,this.setSize(z,te,!1))},this.getSize=function(R){return R.set(z,te)},this.setSize=function(R,G,q=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,te=G,t.width=Math.floor(R*X),t.height=Math.floor(G*X),q===!0&&(t.style.width=R+"px",t.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(z*X,te*X).floor()},this.setDrawingBufferSize=function(R,G,q){z=R,te=G,X=q,t.width=Math.floor(R*q),t.height=Math.floor(G*q),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(me)},this.setViewport=function(R,G,q,K){R.isVector4?me.set(R.x,R.y,R.z,R.w):me.set(R,G,q,K),We.viewport(D.copy(me).multiplyScalar(X).round())},this.getScissor=function(R){return R.copy(Ae)},this.setScissor=function(R,G,q,K){R.isVector4?Ae.set(R.x,R.y,R.z,R.w):Ae.set(R,G,q,K),We.scissor($.copy(Ae).multiplyScalar(X).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(R){We.setScissorTest(Le=R)},this.setOpaqueSort=function(R){ae=R},this.setTransparentSort=function(R){pe=R},this.getClearColor=function(R){return R.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(R=!0,G=!0,q=!0){let K=0;if(R){let V=!1;if(U!==null){const de=U.texture.format;V=de===Wl||de===Vl||de===Gl}if(V){const de=U.texture.type,Se=de===Qn||de===Yi||de===dr||de===hr||de===kl||de===zl,Pe=ke.getClearColor(),Re=ke.getClearAlpha(),Ze=Pe.r,et=Pe.g,Xe=Pe.b;Se?(y[0]=Ze,y[1]=et,y[2]=Xe,y[3]=Re,B.clearBufferuiv(B.COLOR,0,y)):(_[0]=Ze,_[1]=et,_[2]=Xe,_[3]=Re,B.clearBufferiv(B.COLOR,0,_))}else K|=B.COLOR_BUFFER_BIT}G&&(K|=B.DEPTH_BUFFER_BIT),q&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),ke.dispose(),ie.dispose(),Ge.dispose(),Ne.dispose(),Zt.dispose(),Wt.dispose(),Y.dispose(),Me.dispose(),ot.dispose(),re.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",In),fe.removeEventListener("sessionend",wr),ni.stop()};function ye(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const R=Ot.autoReset,G=Oe.enabled,q=Oe.autoUpdate,K=Oe.needsUpdate,V=Oe.type;k(),Ot.autoReset=R,Oe.enabled=G,Oe.autoUpdate=q,Oe.needsUpdate=K,Oe.type=V}function ue(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function oe(R){const G=R.target;G.removeEventListener("dispose",oe),Fe(G)}function Fe(R){it(R),Ne.remove(R)}function it(R){const G=Ne.get(R).programs;G!==void 0&&(G.forEach(function(q){re.releaseProgram(q)}),R.isShaderMaterial&&re.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,q,K,V,de){G===null&&(G=Je);const Se=V.isMesh&&V.matrixWorld.determinant()<0,Pe=Ho(R,G,q,K,V);We.setMaterial(K,Se);let Re=q.index,Ze=1;if(K.wireframe===!0){if(Re=S.getWireframeAttribute(q),Re===void 0)return;Ze=2}const et=q.drawRange,Xe=q.attributes.position;let ft=et.start*Ze,vt=(et.start+et.count)*Ze;de!==null&&(ft=Math.max(ft,de.start*Ze),vt=Math.min(vt,(de.start+de.count)*Ze)),Re!==null?(ft=Math.max(ft,0),vt=Math.min(vt,Re.count)):Xe!=null&&(ft=Math.max(ft,0),vt=Math.min(vt,Xe.count));const Xt=vt-ft;if(Xt<0||Xt===1/0)return;Me.setup(V,K,Pe,q,Re);let Ut,Ct=Te;if(Re!==null&&(Ut=F.get(Re),Ct=Qe,Ct.setIndex(Ut)),V.isMesh)K.wireframe===!0?(We.setLineWidth(K.wireframeLinewidth*xt()),Ct.setMode(B.LINES)):Ct.setMode(B.TRIANGLES);else if(V.isLine){let qe=K.linewidth;qe===void 0&&(qe=1),We.setLineWidth(qe*xt()),V.isLineSegments?Ct.setMode(B.LINES):V.isLineLoop?Ct.setMode(B.LINE_LOOP):Ct.setMode(B.LINE_STRIP)}else V.isPoints?Ct.setMode(B.POINTS):V.isSprite&&Ct.setMode(B.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))Ct.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const qe=V._multiDrawStarts,zt=V._multiDrawCounts,bt=V._multiDrawCount,fn=Re?F.get(Re).bytesPerElement:1,ii=Ne.get(K).currentProgram.getUniforms();for(let Et=0;Et<bt;Et++)ii.setValue(B,"_gl_DrawID",Et),Ct.render(qe[Et]/fn,zt[Et])}else if(V.isInstancedMesh)Ct.renderInstances(ft,Xt,V.count);else if(q.isInstancedBufferGeometry){const qe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,zt=Math.min(q.instanceCount,qe);Ct.renderInstances(ft,Xt,zt)}else Ct.render(ft,Xt)};function Dt(R,G,q){R.transparent===!0&&R.side===_n&&R.forceSinglePass===!1?(R.side=En,R.needsUpdate=!0,Di(R,G,q),R.side=Kt,R.needsUpdate=!0,Di(R,G,q),R.side=_n):Di(R,G,q)}this.compile=function(R,G,q=null){q===null&&(q=R),m=Ge.get(q),m.init(G),E.push(m),q.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),R!==q&&R.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();const K=new Set;return R.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const de=V.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){const Pe=de[Se];Dt(Pe,q,V),K.add(Pe)}else Dt(de,q,V),K.add(de)}),m=E.pop(),K},this.compileAsync=function(R,G,q=null){const K=this.compile(R,G,q);return new Promise(V=>{function de(){if(K.forEach(function(Se){Ne.get(Se).currentProgram.isReady()&&K.delete(Se)}),K.size===0){V(R);return}setTimeout(de,10)}$e.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let lt=null;function Ln(R){lt&&lt(R)}function In(){ni.stop()}function wr(){ni.start()}const ni=new Hd;ni.setAnimationLoop(Ln),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(R){lt=R,fe.setAnimationLoop(R),R===null?ni.stop():ni.start()},fe.addEventListener("sessionstart",In),fe.addEventListener("sessionend",wr),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(G),G=fe.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,G,U),m=Ge.get(R,E.length),m.init(G),E.push(m),ne.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ee.setFromProjectionMatrix(ne,Jn,G.reversedDepth),J=this.localClippingEnabled,W=ge.init(this.clippingPlanes,J),g=ie.get(R,w.length),g.init(),w.push(g),fe.enabled===!0&&fe.isPresenting===!0){const de=x.xr.getDepthSensingMesh();de!==null&&Ws(de,G,-1/0,x.sortObjects)}Ws(R,G,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(ae,pe),Yt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Yt&&ke.addToRenderList(g,R),this.info.render.frame++,W===!0&&ge.beginShadows();const q=m.state.shadowsArray;Oe.render(q,R,G),W===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=g.opaque,V=g.transmissive;if(m.setupLights(),G.isArrayCamera){const de=G.cameras;if(V.length>0)for(let Se=0,Pe=de.length;Se<Pe;Se++){const Re=de[Se];Rr(K,V,R,Re)}Yt&&ke.render(R);for(let Se=0,Pe=de.length;Se<Pe;Se++){const Re=de[Se];Ar(g,R,Re,Re.viewport)}}else V.length>0&&Rr(K,V,R,G),Yt&&ke.render(R),Ar(g,R,G);U!==null&&P===0&&(at.updateMultisampleRenderTarget(U),at.updateRenderTargetMipmap(U)),R.isScene===!0&&R.onAfterRender(x,R,G),Me.resetDefaultState(),T=-1,b=null,E.pop(),E.length>0?(m=E[E.length-1],W===!0&&ge.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function Ws(R,G,q,K){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ee.intersectsSprite(R)){K&&Ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ne);const Se=Y.update(R),Pe=R.material;Pe.visible&&g.push(R,Se,Pe,q,Ue.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ee.intersectsObject(R))){const Se=Y.update(R),Pe=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ue.copy(R.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ue.copy(Se.boundingSphere.center)),Ue.applyMatrix4(R.matrixWorld).applyMatrix4(ne)),Array.isArray(Pe)){const Re=Se.groups;for(let Ze=0,et=Re.length;Ze<et;Ze++){const Xe=Re[Ze],ft=Pe[Xe.materialIndex];ft&&ft.visible&&g.push(R,Se,ft,q,Ue.z,Xe)}}else Pe.visible&&g.push(R,Se,Pe,q,Ue.z,null)}}const de=R.children;for(let Se=0,Pe=de.length;Se<Pe;Se++)Ws(de[Se],G,q,K)}function Ar(R,G,q,K){const V=R.opaque,de=R.transmissive,Se=R.transparent;m.setupLightsView(q),W===!0&&ge.setGlobalState(x.clippingPlanes,q),K&&We.viewport(D.copy(K)),V.length>0&&Pi(V,G,q),de.length>0&&Pi(de,G,q),Se.length>0&&Pi(Se,G,q),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Rr(R,G,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new qi(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?vr:Qn,minFilter:Fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const de=m.state.transmissionRenderTarget[K.id],Se=K.viewport||D;de.setSize(Se.z*x.transmissionResolutionScale,Se.w*x.transmissionResolutionScale);const Pe=x.getRenderTarget(),Re=x.getActiveCubeFace(),Ze=x.getActiveMipmapLevel();x.setRenderTarget(de),x.getClearColor(Q),ee=x.getClearAlpha(),ee<1&&x.setClearColor(16777215,.5),x.clear(),Yt&&ke.render(q);const et=x.toneMapping;x.toneMapping=Li;const Xe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),W===!0&&ge.setGlobalState(x.clippingPlanes,K),Pi(R,q,K),at.updateMultisampleRenderTarget(de),at.updateRenderTargetMipmap(de),$e.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let vt=0,Xt=G.length;vt<Xt;vt++){const Ut=G[vt],Ct=Ut.object,qe=Ut.geometry,zt=Ut.material,bt=Ut.group;if(zt.side===_n&&Ct.layers.test(K.layers)){const fn=zt.side;zt.side=En,zt.needsUpdate=!0,Cr(Ct,q,K,qe,zt,bt),zt.side=fn,zt.needsUpdate=!0,ft=!0}}ft===!0&&(at.updateMultisampleRenderTarget(de),at.updateRenderTargetMipmap(de))}x.setRenderTarget(Pe,Re,Ze),x.setClearColor(Q,ee),Xe!==void 0&&(K.viewport=Xe),x.toneMapping=et}function Pi(R,G,q){const K=G.isScene===!0?G.overrideMaterial:null;for(let V=0,de=R.length;V<de;V++){const Se=R[V],Pe=Se.object,Re=Se.geometry,Ze=Se.group;let et=Se.material;et.allowOverride===!0&&K!==null&&(et=K),Pe.layers.test(q.layers)&&Cr(Pe,G,q,Re,et,Ze)}}function Cr(R,G,q,K,V,de){R.onBeforeRender(x,G,q,K,V,de),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),V.onBeforeRender(x,G,q,K,R,de),V.transparent===!0&&V.side===_n&&V.forceSinglePass===!1?(V.side=En,V.needsUpdate=!0,x.renderBufferDirect(q,G,K,V,R,de),V.side=Kt,V.needsUpdate=!0,x.renderBufferDirect(q,G,K,V,R,de),V.side=_n):x.renderBufferDirect(q,G,K,V,R,de),R.onAfterRender(x,G,q,K,V,de)}function Di(R,G,q){G.isScene!==!0&&(G=Je);const K=Ne.get(R),V=m.state.lights,de=m.state.shadowsArray,Se=V.state.version,Pe=re.getParameters(R,V.state,de,G,q),Re=re.getProgramCacheKey(Pe);let Ze=K.programs;K.environment=R.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(R.isMeshStandardMaterial?Wt:Zt).get(R.envMap||K.environment),K.envMapRotation=K.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,Ze===void 0&&(R.addEventListener("dispose",oe),Ze=new Map,K.programs=Ze);let et=Ze.get(Re);if(et!==void 0){if(K.currentProgram===et&&K.lightsStateVersion===Se)return Ir(R,Pe),et}else Pe.uniforms=re.getUniforms(R),R.onBeforeCompile(Pe,x),et=re.acquireProgram(Pe,Re),Ze.set(Re,et),K.uniforms=Pe.uniforms;const Xe=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=ge.uniform),Ir(R,Pe),K.needsLights=Vo(R),K.lightsStateVersion=Se,K.needsLights&&(Xe.ambientLightColor.value=V.state.ambient,Xe.lightProbe.value=V.state.probe,Xe.directionalLights.value=V.state.directional,Xe.directionalLightShadows.value=V.state.directionalShadow,Xe.spotLights.value=V.state.spot,Xe.spotLightShadows.value=V.state.spotShadow,Xe.rectAreaLights.value=V.state.rectArea,Xe.ltc_1.value=V.state.rectAreaLTC1,Xe.ltc_2.value=V.state.rectAreaLTC2,Xe.pointLights.value=V.state.point,Xe.pointLightShadows.value=V.state.pointShadow,Xe.hemisphereLights.value=V.state.hemi,Xe.directionalShadowMap.value=V.state.directionalShadowMap,Xe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Xe.spotShadowMap.value=V.state.spotShadowMap,Xe.spotLightMatrix.value=V.state.spotLightMatrix,Xe.spotLightMap.value=V.state.spotLightMap,Xe.pointShadowMap.value=V.state.pointShadowMap,Xe.pointShadowMatrix.value=V.state.pointShadowMatrix),K.currentProgram=et,K.uniformsList=null,et}function Lr(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=xo.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function Ir(R,G){const q=Ne.get(R);q.outputColorSpace=G.outputColorSpace,q.batching=G.batching,q.batchingColor=G.batchingColor,q.instancing=G.instancing,q.instancingColor=G.instancingColor,q.instancingMorph=G.instancingMorph,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}function Ho(R,G,q,K,V){G.isScene!==!0&&(G=Je),at.resetTextureUnits();const de=G.fog,Se=K.isMeshStandardMaterial?G.environment:null,Pe=U===null?x.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Mn,Re=(K.isMeshStandardMaterial?Wt:Zt).get(K.envMap||Se),Ze=K.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,et=!!q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Xe=!!q.morphAttributes.position,ft=!!q.morphAttributes.normal,vt=!!q.morphAttributes.color;let Xt=Li;K.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Xt=x.toneMapping);const Ut=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ct=Ut!==void 0?Ut.length:0,qe=Ne.get(K),zt=m.state.lights;if(W===!0&&(J===!0||R!==b)){const en=R===b&&K.id===T;ge.setState(K,R,en)}let bt=!1;K.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==zt.state.version||qe.outputColorSpace!==Pe||V.isBatchedMesh&&qe.batching===!1||!V.isBatchedMesh&&qe.batching===!0||V.isBatchedMesh&&qe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&qe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&qe.instancing===!1||!V.isInstancedMesh&&qe.instancing===!0||V.isSkinnedMesh&&qe.skinning===!1||!V.isSkinnedMesh&&qe.skinning===!0||V.isInstancedMesh&&qe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&qe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&qe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&qe.instancingMorph===!1&&V.morphTexture!==null||qe.envMap!==Re||K.fog===!0&&qe.fog!==de||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ge.numPlanes||qe.numIntersection!==ge.numIntersection)||qe.vertexAlphas!==Ze||qe.vertexTangents!==et||qe.morphTargets!==Xe||qe.morphNormals!==ft||qe.morphColors!==vt||qe.toneMapping!==Xt||qe.morphTargetsCount!==Ct)&&(bt=!0):(bt=!0,qe.__version=K.version);let fn=qe.currentProgram;bt===!0&&(fn=Di(K,G,V));let ii=!1,Et=!1,si=!1;const Ht=fn.getUniforms(),pn=qe.uniforms;if(We.useProgram(fn.program)&&(ii=!0,Et=!0,si=!0),K.id!==T&&(T=K.id,Et=!0),ii||b!==R){We.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ht.setValue(B,"projectionMatrix",R.projectionMatrix),Ht.setValue(B,"viewMatrix",R.matrixWorldInverse);const tn=Ht.map.cameraPosition;tn!==void 0&&tn.setValue(B,ve.setFromMatrixPosition(R.matrixWorld)),Mt.logarithmicDepthBuffer&&Ht.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ht.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Et=!0,si=!0)}if(V.isSkinnedMesh){Ht.setOptional(B,V,"bindMatrix"),Ht.setOptional(B,V,"bindMatrixInverse");const en=V.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Ht.setValue(B,"boneTexture",en.boneTexture,at))}V.isBatchedMesh&&(Ht.setOptional(B,V,"batchingTexture"),Ht.setValue(B,"batchingTexture",V._matricesTexture,at),Ht.setOptional(B,V,"batchingIdTexture"),Ht.setValue(B,"batchingIdTexture",V._indirectTexture,at),Ht.setOptional(B,V,"batchingColorTexture"),V._colorsTexture!==null&&Ht.setValue(B,"batchingColorTexture",V._colorsTexture,at));const mn=q.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&he.update(V,q,fn),(Et||qe.receiveShadow!==V.receiveShadow)&&(qe.receiveShadow=V.receiveShadow,Ht.setValue(B,"receiveShadow",V.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(pn.envMap.value=Re,pn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&G.environment!==null&&(pn.envMapIntensity.value=G.environmentIntensity),Et&&(Ht.setValue(B,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&Go(pn,si),de&&K.fog===!0&&le.refreshFogUniforms(pn,de),le.refreshMaterialUniforms(pn,K,X,te,m.state.transmissionRenderTarget[R.id]),xo.upload(B,Lr(qe),pn,at)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(xo.upload(B,Lr(qe),pn,at),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ht.setValue(B,"center",V.center),Ht.setValue(B,"modelViewMatrix",V.modelViewMatrix),Ht.setValue(B,"normalMatrix",V.normalMatrix),Ht.setValue(B,"modelMatrix",V.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const en=K.uniformsGroups;for(let tn=0,vi=en.length;tn<vi;tn++){const Kn=en[tn];ot.update(Kn,fn),ot.bind(Kn,fn)}}return fn}function Go(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Vo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(R,G,q){const K=Ne.get(R);K.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Ne.get(R.texture).__webglTexture=G,Ne.get(R.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:q,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,G){const q=Ne.get(R);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0};const Wo=B.createFramebuffer();this.setRenderTarget=function(R,G=0,q=0){U=R,N=G,P=q;let K=!0,V=null,de=!1,Se=!1;if(R){const Re=Ne.get(R);if(Re.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(B.FRAMEBUFFER,null),K=!1;else if(Re.__webglFramebuffer===void 0)at.setupRenderTarget(R);else if(Re.__hasExternalTextures)at.rebindTextures(R,Ne.get(R.texture).__webglTexture,Ne.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Xe=R.depthTexture;if(Re.__boundDepthTexture!==Xe){if(Xe!==null&&Ne.has(Xe)&&(R.width!==Xe.image.width||R.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(R)}}const Ze=R.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Se=!0);const et=Ne.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(et[G])?V=et[G][q]:V=et[G],de=!0):R.samples>0&&at.useMultisampledRTT(R)===!1?V=Ne.get(R).__webglMultisampledFramebuffer:Array.isArray(et)?V=et[q]:V=et,D.copy(R.viewport),$.copy(R.scissor),j=R.scissorTest}else D.copy(me).multiplyScalar(X).floor(),$.copy(Ae).multiplyScalar(X).floor(),j=Le;if(q!==0&&(V=Wo),We.bindFramebuffer(B.FRAMEBUFFER,V)&&K&&We.drawBuffers(R,V),We.viewport(D),We.scissor($),We.setScissorTest(j),de){const Re=Ne.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+G,Re.__webglTexture,q)}else if(Se){const Re=G;for(let Ze=0;Ze<R.textures.length;Ze++){const et=Ne.get(R.textures[Ze]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ze,et.__webglTexture,q,Re)}}else if(R!==null&&q!==0){const Re=Ne.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Re.__webglTexture,q)}T=-1},this.readRenderTargetPixels=function(R,G,q,K,V,de,Se,Pe=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){We.bindFramebuffer(B.FRAMEBUFFER,Re);try{const Ze=R.textures[Pe],et=Ze.format,Xe=Ze.type;if(!Mt.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-K&&q>=0&&q<=R.height-V&&(R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pe),B.readPixels(G,q,K,V,ze.convert(et),ze.convert(Xe),de))}finally{const Ze=U!==null?Ne.get(U).__webglFramebuffer:null;We.bindFramebuffer(B.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(R,G,q,K,V,de,Se,Pe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re)if(G>=0&&G<=R.width-K&&q>=0&&q<=R.height-V){We.bindFramebuffer(B.FRAMEBUFFER,Re);const Ze=R.textures[Pe],et=Ze.format,Xe=Ze.type;if(!Mt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ft),B.bufferData(B.PIXEL_PACK_BUFFER,de.byteLength,B.STREAM_READ),R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pe),B.readPixels(G,q,K,V,ze.convert(et),ze.convert(Xe),0);const vt=U!==null?Ne.get(U).__webglFramebuffer:null;We.bindFramebuffer(B.FRAMEBUFFER,vt);const Xt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Lf(B,Xt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ft),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,de),B.deleteBuffer(ft),B.deleteSync(Xt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,G=null,q=0){const K=Math.pow(2,-q),V=Math.floor(R.image.width*K),de=Math.floor(R.image.height*K),Se=G!==null?G.x:0,Pe=G!==null?G.y:0;at.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,Se,Pe,V,de),We.unbindTexture()};const Xo=B.createFramebuffer(),Yo=B.createFramebuffer();this.copyTextureToTexture=function(R,G,q=null,K=null,V=0,de=null){de===null&&(V!==0?(Ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=V,V=0):de=0);let Se,Pe,Re,Ze,et,Xe,ft,vt,Xt;const Ut=R.isCompressedTexture?R.mipmaps[de]:R.image;if(q!==null)Se=q.max.x-q.min.x,Pe=q.max.y-q.min.y,Re=q.isBox3?q.max.z-q.min.z:1,Ze=q.min.x,et=q.min.y,Xe=q.isBox3?q.min.z:0;else{const mn=Math.pow(2,-V);Se=Math.floor(Ut.width*mn),Pe=Math.floor(Ut.height*mn),R.isDataArrayTexture?Re=Ut.depth:R.isData3DTexture?Re=Math.floor(Ut.depth*mn):Re=1,Ze=0,et=0,Xe=0}K!==null?(ft=K.x,vt=K.y,Xt=K.z):(ft=0,vt=0,Xt=0);const Ct=ze.convert(G.format),qe=ze.convert(G.type);let zt;G.isData3DTexture?(at.setTexture3D(G,0),zt=B.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(at.setTexture2DArray(G,0),zt=B.TEXTURE_2D_ARRAY):(at.setTexture2D(G,0),zt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);const bt=B.getParameter(B.UNPACK_ROW_LENGTH),fn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ii=B.getParameter(B.UNPACK_SKIP_PIXELS),Et=B.getParameter(B.UNPACK_SKIP_ROWS),si=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ut.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ut.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ze),B.pixelStorei(B.UNPACK_SKIP_ROWS,et),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xe);const Ht=R.isDataArrayTexture||R.isData3DTexture,pn=G.isDataArrayTexture||G.isData3DTexture;if(R.isDepthTexture){const mn=Ne.get(R),en=Ne.get(G),tn=Ne.get(mn.__renderTarget),vi=Ne.get(en.__renderTarget);We.bindFramebuffer(B.READ_FRAMEBUFFER,tn.__webglFramebuffer),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let Kn=0;Kn<Re;Kn++)Ht&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ne.get(R).__webglTexture,V,Xe+Kn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ne.get(G).__webglTexture,de,Xt+Kn)),B.blitFramebuffer(Ze,et,Se,Pe,ft,vt,Se,Pe,B.DEPTH_BUFFER_BIT,B.NEAREST);We.bindFramebuffer(B.READ_FRAMEBUFFER,null),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(V!==0||R.isRenderTargetTexture||Ne.has(R)){const mn=Ne.get(R),en=Ne.get(G);We.bindFramebuffer(B.READ_FRAMEBUFFER,Xo),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,Yo);for(let tn=0;tn<Re;tn++)Ht?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,mn.__webglTexture,V,Xe+tn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,mn.__webglTexture,V),pn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,en.__webglTexture,de,Xt+tn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,en.__webglTexture,de),V!==0?B.blitFramebuffer(Ze,et,Se,Pe,ft,vt,Se,Pe,B.COLOR_BUFFER_BIT,B.NEAREST):pn?B.copyTexSubImage3D(zt,de,ft,vt,Xt+tn,Ze,et,Se,Pe):B.copyTexSubImage2D(zt,de,ft,vt,Ze,et,Se,Pe);We.bindFramebuffer(B.READ_FRAMEBUFFER,null),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else pn?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(zt,de,ft,vt,Xt,Se,Pe,Re,Ct,qe,Ut.data):G.isCompressedArrayTexture?B.compressedTexSubImage3D(zt,de,ft,vt,Xt,Se,Pe,Re,Ct,Ut.data):B.texSubImage3D(zt,de,ft,vt,Xt,Se,Pe,Re,Ct,qe,Ut):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,de,ft,vt,Se,Pe,Ct,qe,Ut.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,de,ft,vt,Ut.width,Ut.height,Ct,Ut.data):B.texSubImage2D(B.TEXTURE_2D,de,ft,vt,Se,Pe,Ct,qe,Ut);B.pixelStorei(B.UNPACK_ROW_LENGTH,bt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,fn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ii),B.pixelStorei(B.UNPACK_SKIP_ROWS,Et),B.pixelStorei(B.UNPACK_SKIP_IMAGES,si),de===0&&G.generateMipmaps&&B.generateMipmap(zt),We.unbindTexture()},this.copyTextureToTexture3D=function(R,G,q=null,K=null,V=0){return Ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,G,q,K,V)},this.initRenderTarget=function(R){Ne.get(R).__webglFramebuffer===void 0&&at.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?at.setTextureCube(R,0):R.isData3DTexture?at.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?at.setTexture2DArray(R,0):at.setTexture2D(R,0),We.unbindTexture()},this.resetState=function(){N=0,P=0,U=null,We.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}const S0=/^[og]\s*(.+)?/,T0=/^mtllib /,w0=/^usemtl /,A0=/^usemap /,Du=/\s+/,Uu=new O,La=new O,Fu=new O,Ou=new O,Pn=new O,co=new Be;function R0(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){const s=this.vertices,r=this.object.geometry.normals;Uu.fromArray(s,e),La.fromArray(s,t),Fu.fromArray(s,n),Pn.subVectors(Fu,La),Ou.subVectors(Uu,La),Pn.cross(Ou),Pn.normalize(),r.push(Pn.x,Pn.y,Pn.z),r.push(Pn.x,Pn.y,Pn.z),r.push(Pn.x,Pn.y,Pn.z)},addColor:function(e,t,n){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,r,o,a,l,c){const d=this.vertices.length;let u=this.parseVertexIndex(e,d),h=this.parseVertexIndex(t,d),f=this.parseVertexIndex(n,d);if(this.addVertex(u,h,f),this.addColor(u,h,f),a!==void 0&&a!==""){const y=this.normals.length;u=this.parseNormalIndex(a,y),h=this.parseNormalIndex(l,y),f=this.parseNormalIndex(c,y),this.addNormal(u,h,f)}else this.addFaceNormal(u,h,f);if(s!==void 0&&s!==""){const y=this.uvs.length;u=this.parseUVIndex(s,y),h=this.parseUVIndex(r,y),f=this.parseUVIndex(o,y),this.addUV(u,h,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return i.startObject("",!1),i}class qd extends $n{constructor(e){super(e),this.materials=null}load(e,t,n,s){const r=this,o=new Gs(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new R0;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let s=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const d=c.charAt(0);if(d!=="#")if(d==="v"){const u=c.split(Du);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(co.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),Nt),t.colors.push(co.r,co.g,co.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(d==="f"){const h=c.slice(1).trim().split(Du),f=[];for(let _=0,g=h.length;_<g;_++){const m=h[_];if(m.length>0){const w=m.split("/");f.push(w)}}const y=f[0];for(let _=1,g=f.length-1;_<g;_++){const m=f[_],w=f[_+1];t.addFace(y[0],m[0],w[0],y[1],m[1],w[1],y[2],m[2],w[2])}}else if(d==="l"){const u=c.substring(1).trim().split(" ");let h=[];const f=[];if(c.indexOf("/")===-1)h=u;else for(let y=0,_=u.length;y<_;y++){const g=u[y].split("/");g[0]!==""&&h.push(g[0]),g[1]!==""&&f.push(g[1])}t.addLineGeometry(h,f)}else if(d==="p"){const h=c.slice(1).trim().split(" ");t.addPointGeometry(h)}else if((s=S0.exec(c))!==null){const u=(" "+s[0].slice(1).trim()).slice(1);t.startObject(u)}else if(w0.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(T0.test(c))t.materialLibraries.push(c.substring(7).trim());else if(A0.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(d==="s"){if(s=c.split(" "),s.length>1){const h=s[1].trim().toLowerCase();t.object.smooth=h!=="0"&&h!=="off"}else t.object.smooth=!0;const u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new xn;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],d=c.geometry,u=c.materials,h=d.type==="Line",f=d.type==="Points";let y=!1;if(d.vertices.length===0)continue;const _=new jt;_.setAttribute("position",new ht(d.vertices,3)),d.normals.length>0&&_.setAttribute("normal",new ht(d.normals,3)),d.colors.length>0&&(y=!0,_.setAttribute("color",new ht(d.colors,3))),d.hasUVIndices===!0&&_.setAttribute("uv",new ht(d.uvs,2));const g=[];for(let w=0,E=u.length;w<E;w++){const x=u[w],I=x.name+"_"+x.smooth+"_"+y;let N=t.materials[I];if(this.materials!==null){if(N=this.materials.create(x.name),h&&N&&!(N instanceof xi)){const P=new xi;vn.prototype.copy.call(P,N),P.color.copy(N.color),N=P}else if(f&&N&&!(N instanceof _s)){const P=new _s({size:10,sizeAttenuation:!1});vn.prototype.copy.call(P,N),P.color.copy(N.color),P.map=N.map,N=P}}N===void 0&&(h?N=new xi:f?N=new _s({size:1,sizeAttenuation:!1}):N=new Tl,N.name=x.name,N.flatShading=!x.smooth,N.vertexColors=y,t.materials[I]=N),g.push(N)}let m;if(g.length>1){for(let w=0,E=u.length;w<E;w++){const x=u[w];_.addGroup(x.groupStart,x.groupCount,w)}h?m=new Ds(_,g):f?m=new _o(_,g):m=new $t(_,g)}else h?m=new Ds(_,g[0]):f?m=new _o(_,g[0]):m=new $t(_,g[0]);m.name=c.name,r.add(m)}else if(t.vertices.length>0){const a=new _s({size:1,sizeAttenuation:!1}),l=new jt;l.setAttribute("position",new ht(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new ht(t.colors,3)),a.vertexColors=!0);const c=new _o(l,a);r.add(c)}return r}}class $d extends $n{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new Gs(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){function t(c){const d=new DataView(c),u=32/8*3+32/8*3*3+16/8,h=d.getUint32(80,!0);if(80+32/8+h*u===d.byteLength)return!0;const y=[115,111,108,105,100];for(let _=0;_<5;_++)if(n(y,d,_))return!1;return!0}function n(c,d,u){for(let h=0,f=c.length;h<f;h++)if(c[h]!==d.getUint8(u+h))return!1;return!0}function s(c){const d=new DataView(c),u=d.getUint32(80,!0);let h,f,y,_=!1,g,m,w,E,x;for(let D=0;D<70;D++)d.getUint32(D,!1)==1129270351&&d.getUint8(D+4)==82&&d.getUint8(D+5)==61&&(_=!0,g=new Float32Array(u*3*3),m=d.getUint8(D+6)/255,w=d.getUint8(D+7)/255,E=d.getUint8(D+8)/255,x=d.getUint8(D+9)/255);const I=84,N=50,P=new jt,U=new Float32Array(u*3*3),T=new Float32Array(u*3*3),b=new Be;for(let D=0;D<u;D++){const $=I+D*N,j=d.getFloat32($,!0),Q=d.getFloat32($+4,!0),ee=d.getFloat32($+8,!0);if(_){const z=d.getUint16($+48,!0);(z&32768)===0?(h=(z&31)/31,f=(z>>5&31)/31,y=(z>>10&31)/31):(h=m,f=w,y=E)}for(let z=1;z<=3;z++){const te=$+z*12,X=D*3*3+(z-1)*3;U[X]=d.getFloat32(te,!0),U[X+1]=d.getFloat32(te+4,!0),U[X+2]=d.getFloat32(te+8,!0),T[X]=j,T[X+1]=Q,T[X+2]=ee,_&&(b.setRGB(h,f,y,Nt),g[X]=b.r,g[X+1]=b.g,g[X+2]=b.b)}}return P.setAttribute("position",new Bt(U,3)),P.setAttribute("normal",new Bt(T,3)),_&&(P.setAttribute("color",new Bt(g,3)),P.hasColors=!0,P.alpha=x),P}function r(c){const d=new jt,u=/solid([\s\S]*?)endsolid/g,h=/facet([\s\S]*?)endfacet/g,f=/solid\s(.+)/;let y=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,g=new RegExp("vertex"+_+_+_,"g"),m=new RegExp("normal"+_+_+_,"g"),w=[],E=[],x=[],I=new O;let N,P=0,U=0,T=0;for(;(N=u.exec(c))!==null;){U=T;const b=N[0],D=(N=f.exec(b))!==null?N[1]:"";for(x.push(D);(N=h.exec(b))!==null;){let Q=0,ee=0;const z=N[0];for(;(N=m.exec(z))!==null;)I.x=parseFloat(N[1]),I.y=parseFloat(N[2]),I.z=parseFloat(N[3]),ee++;for(;(N=g.exec(z))!==null;)w.push(parseFloat(N[1]),parseFloat(N[2]),parseFloat(N[3])),E.push(I.x,I.y,I.z),Q++,T++;ee!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+y),Q!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+y),y++}const $=U,j=T-U;d.userData.groupNames=x,d.addGroup($,j,P),P++}return d.setAttribute("position",new ht(w,3)),d.setAttribute("normal",new ht(E,3)),d}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const d=new Uint8Array(c.length);for(let u=0;u<c.length;u++)d[u]=c.charCodeAt(u)&255;return d.buffer||d}else return c}const l=a(e);return t(l)?s(l):r(o(e))}}function Bu(i,e){if(e===tf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ml||e===xd){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Ml)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class jd extends $n{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new P0(t)}),this.register(function(t){return new D0(t)}),this.register(function(t){return new V0(t)}),this.register(function(t){return new W0(t)}),this.register(function(t){return new X0(t)}),this.register(function(t){return new F0(t)}),this.register(function(t){return new O0(t)}),this.register(function(t){return new B0(t)}),this.register(function(t){return new k0(t)}),this.register(function(t){return new N0(t)}),this.register(function(t){return new z0(t)}),this.register(function(t){return new U0(t)}),this.register(function(t){return new G0(t)}),this.register(function(t){return new H0(t)}),this.register(function(t){return new L0(t)}),this.register(function(t){return new Y0(t)}),this.register(function(t){return new q0(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Es.extractUrlBase(e);o=Es.resolveURL(c,this.path)}else o=Es.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Gs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(d){t(d),r.manager.itemEnd(e)},a)}catch(d){a(d)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Kd){try{o[_t.KHR_BINARY_GLTF]=new $0(e)}catch(u){s&&s(u);return}r=JSON.parse(o[_t.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new ax(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const u=this.pluginCallbacks[d](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const u=r.extensionsUsed[d],h=r.extensionsRequired||[];switch(u){case _t.KHR_MATERIALS_UNLIT:o[u]=new I0;break;case _t.KHR_DRACO_MESH_COMPRESSION:o[u]=new j0(r,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:o[u]=new K0;break;case _t.KHR_MESH_QUANTIZATION:o[u]=new Z0;break;default:h.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function C0(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const _t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class L0{constructor(e){this.parser=e,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const d=new Be(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],Mn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ro(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new kd(d),c.distance=u;break;case"spot":c=new Bd(d),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}let I0=class{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return Yn}extendParams(e,t,n){const s=[];e.color=new Be(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Mn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Nt))}return Promise.all(s)}},N0=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},P0=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new nt(a,a)}return Promise.all(r)}},D0=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},U0=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},F0=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Mn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Nt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},O0=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},B0=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(a[0],a[1],a[2],Mn),Promise.all(r)}},k0=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},z0=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(a[0],a[1],a[2],Mn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Nt)),Promise.all(r)}},H0=class{constructor(e){this.parser=e,this.name=_t.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},G0=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}};class V0{constructor(e){this.parser=e,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class W0{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class X0{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Y0{constructor(e){this.name=_t.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,d=s.count,u=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,u,h,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(d*u);return o.decodeGltfBuffer(new Uint8Array(f),d,u,h,s.mode,s.filter),f})})}else return null}}let q0=class{constructor(e){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Dn.TRIANGLES&&c.mode!==Dn.TRIANGLE_STRIP&&c.mode!==Dn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(d=>(l[c]=d,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const d=c.pop(),u=d.isGroup?d.children:[d],h=c[0].count,f=[];for(const y of u){const _=new je,g=new O,m=new Cn,w=new O(1,1,1),E=new sp(y.geometry,y.material,h);for(let x=0;x<h;x++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,x),l.SCALE&&w.fromBufferAttribute(l.SCALE,x),E.setMatrixAt(x,_.compose(g,m,w));for(const x in l)if(x==="_COLOR_0"){const I=l[x];E.instanceColor=new El(I.array,I.itemSize,I.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&y.geometry.setAttribute(x,l[x]);kt.prototype.copy.call(E,y),this.parser.assignFinalMaterial(E),f.push(E)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}};const Kd="glTF",nr=12,ku={JSON:1313821514,BIN:5130562};class $0{constructor(e){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,nr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Kd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-nr,r=new DataView(e,nr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===ku.JSON){const c=new Uint8Array(e,nr+o,a);this.content=n.decode(c)}else if(l===ku.BIN){const c=nr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class j0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const d in o){const u=Cl[d]||d.toLowerCase();a[u]=o[d]}for(const d in e.attributes){const u=Cl[d]||d.toLowerCase();if(o[d]!==void 0){const h=n.accessors[e.attributes[d]],f=Ss[h.componentType];c[u]=f.name,l[u]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(u,h){s.decodeDracoFile(d,function(f){for(const y in f.attributes){const _=f.attributes[y],g=l[y];g!==void 0&&(_.normalized=g)}u(f)},a,c,Mn,h)})})}}class K0{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Z0{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}}class Zd extends Er{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,d=s-t,u=(n-t)/d,h=u*u,f=h*u,y=e*c,_=y-c,g=-2*f+3*h,m=f-h,w=1-g,E=m-h+u;for(let x=0;x!==a;x++){const I=o[_+x+a],N=o[_+x+l]*d,P=o[y+x+a],U=o[y+x]*d;r[x]=w*I+E*N+g*P+m*U}return r}}const J0=new Cn;class Q0 extends Zd{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return J0.fromArray(r).normalize().toArray(r),r}}const Dn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ss={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zu={9728:dn,9729:ln,9984:Ol,9985:or,9986:ys,9987:Fn},Hu={33071:wn,33648:ur,10497:Wn},Ia={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ex={CUBICSPLINE:void 0,LINEAR:Is,STEP:Ls},Na={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tx(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new kn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kt})),i.DefaultMaterial}function Hi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function nx(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,d=e.length;c<d;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,d=e.length;c<d;c++){const u=e[c];if(n){const h=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(h)}if(s){const h=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(h)}if(r){const h=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const d=c[0],u=c[1],h=c[2];return n&&(i.morphAttributes.position=d),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function ix(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sx(i){let e;const t=i.extensions&&i.extensions[_t.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Pa(t.attributes):e=i.indices+":"+Pa(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Pa(i.targets[n]);return e}function Pa(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ll(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rx(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ox=new je;class ax{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new C0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Od(this.options.manager):this.textureLoader=new Cp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Hi(r,a,s),fi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,d]of o.children.entries())r(d,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Es.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Ia[s.type],a=Ss[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Bt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Ia[s.type],c=Ss[s.componentType],d=c.BYTES_PER_ELEMENT,u=d*l,h=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,y=s.normalized===!0;let _,g;if(f&&f!==u){const m=Math.floor(h/f),w="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let E=t.cache.get(w);E||(_=new c(a,m*f,s.count*f/d),E=new Ld(_,f/d),t.cache.add(w,E)),g=new yr(E,l,h%f/d,y)}else a===null?_=new c(s.count*l):_=new c(a,h,s.count*l),g=new Bt(_,l,y);if(s.sparse!==void 0){const m=Ia.SCALAR,w=Ss[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,I=new w(o[1],E,s.sparse.count*m),N=new c(o[2],x,s.sparse.count*l);a!==null&&(g=new Bt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let P=0,U=I.length;P<U;P++){const T=I[P];if(g.setX(T,N[P*l]),l>=2&&g.setY(T,N[P*l+1]),l>=3&&g.setZ(T,N[P*l+2]),l>=4&&g.setW(T,N[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=y}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=o.name||a.name||"",d.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(d.name=a.uri);const h=(r.samplers||{})[o.sampler]||{};return d.magFilter=zu[h.magFilter]||ln,d.minFilter=zu[h.minFilter]||Fn,d.wrapS=Hu[h.wrapS]||Wn,d.wrapT=Hu[h.wrapT]||Wn,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==dn&&d.minFilter!==ln,s.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const h=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(u){return new Promise(function(h,f){let y=h;t.isImageBitmapLoader===!0&&(y=function(_){const g=new Qt(_);g.needsUpdate=!0,h(g)}),t.load(Es.resolveURL(u,r.path),y,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),fi(u,o),u.userData.mimeType=o.mimeType||rx(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=d,d}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[_t.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new _s,vn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new xi,vn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return kn}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[_t.KHR_MATERIALS_UNLIT]){const u=s[_t.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Be(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const h=u.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Mn),a.opacity=h[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Nt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=_n);const d=r.alphaMode||Na.OPAQUE;if(d===Na.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,d===Na.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Yn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new nt(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Yn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Yn){const u=r.emissiveFactor;a.emissive=new Be().setRGB(u[0],u[1],u[2],Mn)}return r.emissiveTexture!==void 0&&o!==Yn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Nt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),fi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Hi(s,u,r),u})}createUniqueName(e){const t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Gu(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],d=sx(c),u=s[d];if(u)o.push(u.promise);else{let h;c.extensions&&c.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Gu(new jt,c,t),s[d]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const d=o[l].material===void 0?tx(this.cache):this.getDependency("material",o[l].material);a.push(d)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],u=[];for(let f=0,y=d.length;f<y;f++){const _=d[f],g=o[f];let m;const w=c[f];if(g.mode===Dn.TRIANGLES||g.mode===Dn.TRIANGLE_STRIP||g.mode===Dn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new Pd(_,w):new $t(_,w),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Dn.TRIANGLE_STRIP?m.geometry=Bu(m.geometry,xd):g.mode===Dn.TRIANGLE_FAN&&(m.geometry=Bu(m.geometry,Ml));else if(g.mode===Dn.LINES)m=new Ds(_,w);else if(g.mode===Dn.LINE_STRIP)m=new Fo(_,w);else if(g.mode===Dn.LINE_LOOP)m=new lp(_,w);else if(g.mode===Dn.POINTS)m=new _o(_,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&ix(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),fi(m,r),g.extensions&&Hi(s,m,g),t.assignFinalMaterial(m),u.push(m)}for(let f=0,y=u.length;f<y;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Hi(s,u[0],r),u[0];const h=new xn;r.extensions&&Hi(s,h,r),t.associations.set(h,{meshes:e});for(let f=0,y=u.length;f<y;f++)h.add(u[f]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new on(mi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Bo(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,d=o.length;c<d;c++){const u=o[c];if(u){a.push(u);const h=new je;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Uo(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],d=[];for(let u=0,h=s.channels.length;u<h;u++){const f=s.channels[u],y=s.samplers[f.sampler],_=f.target,g=_.node,m=s.parameters!==void 0?s.parameters[y.input]:y.input,w=s.parameters!==void 0?s.parameters[y.output]:y.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",w)),c.push(y),d.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(u){const h=u[0],f=u[1],y=u[2],_=u[3],g=u[4],m=[];for(let w=0,E=h.length;w<E;w++){const x=h[w],I=f[w],N=y[w],P=_[w],U=g[w];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const T=n._createAnimationTracks(x,I,N,P,U);if(T)for(let b=0;b<T.length;b++)m.push(T[b])}return new wl(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,d=a.length;c<d;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const d=c[0],u=c[1],h=c[2];h!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(h,ox)});for(let f=0,y=u.length;f<y;f++)d.add(u[f]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let d;if(r.isBone===!0?d=new ql:c.length>1?d=new xn:c.length===1?d=c[0]:d=new kt,d!==c[0])for(let u=0,h=c.length;u<h;u++)d.add(c[u]);if(r.name&&(d.userData.name=r.name,d.name=o),fi(d,r),r.extensions&&Hi(n,d,r),r.matrix!==void 0){const u=new je;u.fromArray(r.matrix),d.applyMatrix4(u)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);if(!s.associations.has(d))s.associations.set(d,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const u=s.associations.get(d);s.associations.set(d,{...u})}return s.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new xn;n.name&&(r.name=s.createUniqueName(n.name)),fi(r,n),n.extensions&&Hi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let d=0,u=l.length;d<u;d++)r.add(l[d]);const c=d=>{const u=new Map;for(const[h,f]of s.associations)(h instanceof vn||h instanceof Qt)&&u.set(h,f);return d.traverse(h=>{const f=s.associations.get(h);f!=null&&u.set(h,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Ai[r.path]===Ai.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Ai[r.path]){case Ai.weights:c=Us;break;case Ai.rotation:c=$i;break;case Ai.translation:case Ai.scale:c=Ni;break;default:switch(n.itemSize){case 1:c=Us;break;case 2:case 3:default:c=Ni;break}break}const d=s.interpolation!==void 0?ex[s.interpolation]:Is,u=this._getArrayFromAccessor(n);for(let h=0,f=l.length;h<f;h++){const y=new c(l[h]+"."+Ai[r.path],t.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),o.push(y)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ll(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof $i?Q0:Zd;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function lx(i,e,t){const n=e.attributes,s=new an;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),a.normalized){const d=Ll(Ss[a.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new O,l=new O;for(let c=0,d=r.length;c<d;c++){const u=r[c];if(u.POSITION!==void 0){const h=t.json.accessors[u.POSITION],f=h.min,y=h.max;if(f!==void 0&&y!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(y[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(y[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(y[2]))),h.normalized){const _=Ll(Ss[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new ei;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Gu(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Cl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return pt.workingColorSpace!==Mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),fi(i,e),lx(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?nx(i,e.targets,t):i})}class Vu extends Tp{constructor(e){super(e)}parse(e){function t(z){switch(z.image_type){case h:case _:if(z.colormap_length>256||z.colormap_size!==24||z.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case f:case y:case g:case m:if(z.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+z.image_type)}if(z.width<=0||z.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(z.pixel_size!==8&&z.pixel_size!==16&&z.pixel_size!==24&&z.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+z.pixel_size)}function n(z,te,X,ae,pe){let me,Ae;const Le=X.pixel_size>>3,Ee=X.width*X.height*Le;if(te&&(Ae=pe.subarray(ae,ae+=X.colormap_length*(X.colormap_size>>3))),z){me=new Uint8Array(Ee);let W,J,ne,ve=0;const Ue=new Uint8Array(Le);for(;ve<Ee;)if(W=pe[ae++],J=(W&127)+1,W&128){for(ne=0;ne<Le;++ne)Ue[ne]=pe[ae++];for(ne=0;ne<J;++ne)me.set(Ue,ve+ne*Le);ve+=Le*J}else{for(J*=Le,ne=0;ne<J;++ne)me[ve+ne]=pe[ae++];ve+=J}}else me=pe.subarray(ae,ae+=te?X.width*X.height:Ee);return{pixel_data:me,palettes:Ae}}function s(z,te,X,ae,pe,me,Ae,Le,Ee){const W=Ee;let J,ne=0,ve,Ue;const Je=b.width;for(Ue=te;Ue!==ae;Ue+=X)for(ve=pe;ve!==Ae;ve+=me,ne++)J=Le[ne],z[(ve+Je*Ue)*4+3]=255,z[(ve+Je*Ue)*4+2]=W[J*3+0],z[(ve+Je*Ue)*4+1]=W[J*3+1],z[(ve+Je*Ue)*4+0]=W[J*3+2];return z}function r(z,te,X,ae,pe,me,Ae,Le){let Ee,W=0,J,ne;const ve=b.width;for(ne=te;ne!==ae;ne+=X)for(J=pe;J!==Ae;J+=me,W+=2)Ee=Le[W+0]+(Le[W+1]<<8),z[(J+ve*ne)*4+0]=(Ee&31744)>>7,z[(J+ve*ne)*4+1]=(Ee&992)>>2,z[(J+ve*ne)*4+2]=(Ee&31)<<3,z[(J+ve*ne)*4+3]=Ee&32768?0:255;return z}function o(z,te,X,ae,pe,me,Ae,Le){let Ee=0,W,J;const ne=b.width;for(J=te;J!==ae;J+=X)for(W=pe;W!==Ae;W+=me,Ee+=3)z[(W+ne*J)*4+3]=255,z[(W+ne*J)*4+2]=Le[Ee+0],z[(W+ne*J)*4+1]=Le[Ee+1],z[(W+ne*J)*4+0]=Le[Ee+2];return z}function a(z,te,X,ae,pe,me,Ae,Le){let Ee=0,W,J;const ne=b.width;for(J=te;J!==ae;J+=X)for(W=pe;W!==Ae;W+=me,Ee+=4)z[(W+ne*J)*4+2]=Le[Ee+0],z[(W+ne*J)*4+1]=Le[Ee+1],z[(W+ne*J)*4+0]=Le[Ee+2],z[(W+ne*J)*4+3]=Le[Ee+3];return z}function l(z,te,X,ae,pe,me,Ae,Le){let Ee,W=0,J,ne;const ve=b.width;for(ne=te;ne!==ae;ne+=X)for(J=pe;J!==Ae;J+=me,W++)Ee=Le[W],z[(J+ve*ne)*4+0]=Ee,z[(J+ve*ne)*4+1]=Ee,z[(J+ve*ne)*4+2]=Ee,z[(J+ve*ne)*4+3]=255;return z}function c(z,te,X,ae,pe,me,Ae,Le){let Ee=0,W,J;const ne=b.width;for(J=te;J!==ae;J+=X)for(W=pe;W!==Ae;W+=me,Ee+=2)z[(W+ne*J)*4+0]=Le[Ee+0],z[(W+ne*J)*4+1]=Le[Ee+0],z[(W+ne*J)*4+2]=Le[Ee+0],z[(W+ne*J)*4+3]=Le[Ee+1];return z}function d(z,te,X,ae,pe){let me,Ae,Le,Ee,W,J;switch((b.flags&w)>>E){default:case N:me=0,Le=1,W=te,Ae=0,Ee=1,J=X;break;case x:me=0,Le=1,W=te,Ae=X-1,Ee=-1,J=-1;break;case P:me=te-1,Le=-1,W=-1,Ae=0,Ee=1,J=X;break;case I:me=te-1,Le=-1,W=-1,Ae=X-1,Ee=-1,J=-1;break}if(j)switch(b.pixel_size){case 8:l(z,Ae,Ee,J,me,Le,W,ae);break;case 16:c(z,Ae,Ee,J,me,Le,W,ae);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(b.pixel_size){case 8:s(z,Ae,Ee,J,me,Le,W,ae,pe);break;case 16:r(z,Ae,Ee,J,me,Le,W,ae);break;case 24:o(z,Ae,Ee,J,me,Le,W,ae);break;case 32:a(z,Ae,Ee,J,me,Le,W,ae);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return z}const u=0,h=1,f=2,y=3,_=9,g=10,m=11,w=48,E=4,x=0,I=1,N=2,P=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let U=0;const T=new Uint8Array(e),b={id_length:T[U++],colormap_type:T[U++],image_type:T[U++],colormap_index:T[U++]|T[U++]<<8,colormap_length:T[U++]|T[U++]<<8,colormap_size:T[U++],origin:[T[U++]|T[U++]<<8,T[U++]|T[U++]<<8],width:T[U++]|T[U++]<<8,height:T[U++]|T[U++]<<8,pixel_size:T[U++],flags:T[U++]};if(t(b),b.id_length+U>e.length)throw new Error("THREE.TGALoader: No data.");U+=b.id_length;let D=!1,$=!1,j=!1;switch(b.image_type){case _:D=!0,$=!0;break;case h:$=!0;break;case g:D=!0;break;case f:break;case m:D=!0,j=!0;break;case y:j=!0;break}const Q=new Uint8Array(b.width*b.height*4),ee=n(D,$,b,U,T);return d(Q,b.width,b.height,ee.pixel_data,ee.palettes),{data:Q,width:b.width,height:b.height,flipY:!0,generateMipmaps:!0,minFilter:Fn}}}class Jd extends $n{load(e,t,n,s){const r=this,o=r.path===""?Es.extractUrlBase(e):r.path,a=new Gs(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}parse(e,t){function n(M,v){const C=[],A=M.childNodes;for(let L=0,Z=A.length;L<Z;L++){const se=A[L];se.nodeName===v&&C.push(se)}return C}function s(M){if(M.length===0)return[];const v=M.trim().split(/\s+/),C=new Array(v.length);for(let A=0,L=v.length;A<L;A++)C[A]=v[A];return C}function r(M){if(M.length===0)return[];const v=M.trim().split(/\s+/),C=new Array(v.length);for(let A=0,L=v.length;A<L;A++)C[A]=parseFloat(v[A]);return C}function o(M){if(M.length===0)return[];const v=M.trim().split(/\s+/),C=new Array(v.length);for(let A=0,L=v.length;A<L;A++)C[A]=parseInt(v[A]);return C}function a(M){return M.substring(1)}function l(){return"three_default_"+Mh++}function c(M){return Object.keys(M).length===0}function d(M){return{unit:u(n(M,"unit")[0]),upAxis:h(n(M,"up_axis")[0])}}function u(M){return M!==void 0&&M.hasAttribute("meter")===!0?parseFloat(M.getAttribute("meter")):1}function h(M){return M!==void 0?M.textContent:"Y_UP"}function f(M,v,C,A){const L=n(M,v)[0];if(L!==void 0){const Z=n(L,C);for(let se=0;se<Z.length;se++)A(Z[se])}}function y(M,v){for(const C in M){const A=M[C];A.build=v(M[C])}}function _(M,v){return M.build!==void 0||(M.build=v(M)),M.build}function g(M){const v={sources:{},samplers:{},channels:{}};let C=!1;for(let A=0,L=M.childNodes.length;A<L;A++){const Z=M.childNodes[A];if(Z.nodeType!==1)continue;let se;switch(Z.nodeName){case"source":se=Z.getAttribute("id"),v.sources[se]=ye(Z);break;case"sampler":se=Z.getAttribute("id"),v.samplers[se]=m(Z);break;case"channel":se=Z.getAttribute("target"),v.channels[se]=w(Z);break;case"animation":g(Z),C=!0;break;default:console.log(Z)}}C===!1&&(tt.animations[M.getAttribute("id")||mi.generateUUID()]=v)}function m(M){const v={inputs:{}};for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"input":const Z=a(L.getAttribute("source")),se=L.getAttribute("semantic");v.inputs[se]=Z;break}}return v}function w(M){const v={};let A=M.getAttribute("target").split("/");const L=A.shift();let Z=A.shift();const se=Z.indexOf("(")!==-1,Ce=Z.indexOf(".")!==-1;if(Ce)A=Z.split("."),Z=A.shift(),v.member=A.shift();else if(se){const xe=Z.split("(");Z=xe.shift();for(let we=0;we<xe.length;we++)xe[we]=parseInt(xe[we].replace(/\)/,""));v.indices=xe}return v.id=L,v.sid=Z,v.arraySyntax=se,v.memberSyntax=Ce,v.sampler=a(M.getAttribute("source")),v}function E(M){const v=[],C=M.channels,A=M.samplers,L=M.sources;for(const Z in C)if(C.hasOwnProperty(Z)){const se=C[Z],Ce=A[se.sampler],xe=Ce.inputs.INPUT,we=Ce.inputs.OUTPUT,Ve=L[xe],ce=L[we],He=I(se,Ve,ce);b(He,v)}return v}function x(M){return _(tt.animations[M],E)}function I(M,v,C){const A=tt.nodes[M.id],L=vt(A.id),Z=A.transforms[M.sid],se=A.matrix.clone().transpose();let Ce,xe,we,Ve,ce,He;const De={};switch(Z){case"matrix":for(we=0,Ve=v.array.length;we<Ve;we++)if(Ce=v.array[we],xe=we*C.stride,De[Ce]===void 0&&(De[Ce]={}),M.arraySyntax===!0){const qt=C.array[xe],Lt=M.indices[0]+4*M.indices[1];De[Ce][Lt]=qt}else for(ce=0,He=C.stride;ce<He;ce++)De[Ce][ce]=C.array[xe+ce];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Z);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Z);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Z);break}const Ke=N(De,se);return{name:L.uuid,keyframes:Ke}}function N(M,v){const C=[];for(const L in M)C.push({time:parseFloat(L),value:M[L]});C.sort(A);for(let L=0;L<16;L++)D(C,L,v.elements[L]);return C;function A(L,Z){return L.time-Z.time}}const P=new O,U=new O,T=new Cn;function b(M,v){const C=M.keyframes,A=M.name,L=[],Z=[],se=[],Ce=[];for(let xe=0,we=C.length;xe<we;xe++){const Ve=C[xe],ce=Ve.time,He=Ve.value;q.fromArray(He).transpose(),q.decompose(P,T,U),L.push(ce),Z.push(P.x,P.y,P.z),se.push(T.x,T.y,T.z,T.w),Ce.push(U.x,U.y,U.z)}return Z.length>0&&v.push(new Ni(A+".position",L,Z)),se.length>0&&v.push(new $i(A+".quaternion",L,se)),Ce.length>0&&v.push(new Ni(A+".scale",L,Ce)),v}function D(M,v,C){let A,L=!0,Z,se;for(Z=0,se=M.length;Z<se;Z++)A=M[Z],A.value[v]===void 0?A.value[v]=null:L=!1;if(L===!0)for(Z=0,se=M.length;Z<se;Z++)A=M[Z],A.value[v]=C;else $(M,v)}function $(M,v){let C,A;for(let L=0,Z=M.length;L<Z;L++){const se=M[L];if(se.value[v]===null){if(C=j(M,L,v),A=Q(M,L,v),C===null){se.value[v]=A.value[v];continue}if(A===null){se.value[v]=C.value[v];continue}ee(se,C,A,v)}}}function j(M,v,C){for(;v>=0;){const A=M[v];if(A.value[C]!==null)return A;v--}return null}function Q(M,v,C){for(;v<M.length;){const A=M[v];if(A.value[C]!==null)return A;v++}return null}function ee(M,v,C,A){if(C.time-v.time===0){M.value[A]=v.value[A];return}M.value[A]=(M.time-v.time)*(C.value[A]-v.value[A])/(C.time-v.time)+v.value[A]}function z(M){const v={name:M.getAttribute("id")||"default",start:parseFloat(M.getAttribute("start")||0),end:parseFloat(M.getAttribute("end")||0),animations:[]};for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"instance_animation":v.animations.push(a(L.getAttribute("url")));break}}tt.clips[M.getAttribute("id")]=v}function te(M){const v=[],C=M.name,A=M.end-M.start||-1,L=M.animations;for(let Z=0,se=L.length;Z<se;Z++){const Ce=x(L[Z]);for(let xe=0,we=Ce.length;xe<we;xe++)v.push(Ce[xe])}return new wl(C,A,v)}function X(M){return _(tt.clips[M],te)}function ae(M){const v={};for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"skin":v.id=a(L.getAttribute("source")),v.skin=pe(L);break;case"morph":v.id=a(L.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}tt.controllers[M.getAttribute("id")]=v}function pe(M){const v={sources:{}};for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"bind_shape_matrix":v.bindShapeMatrix=r(L.textContent);break;case"source":const Z=L.getAttribute("id");v.sources[Z]=ye(L);break;case"joints":v.joints=me(L);break;case"vertex_weights":v.vertexWeights=Ae(L);break}}return v}function me(M){const v={inputs:{}};for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"input":const Z=L.getAttribute("semantic"),se=a(L.getAttribute("source"));v.inputs[Z]=se;break}}return v}function Ae(M){const v={inputs:{}};for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"input":const Z=L.getAttribute("semantic"),se=a(L.getAttribute("source")),Ce=parseInt(L.getAttribute("offset"));v.inputs[Z]={id:se,offset:Ce};break;case"vcount":v.vcount=o(L.textContent);break;case"v":v.v=o(L.textContent);break}}return v}function Le(M){const v={id:M.id},C=tt.geometries[v.id];return M.skin!==void 0&&(v.skin=Ee(M.skin),C.sources.skinIndices=v.skin.indices,C.sources.skinWeights=v.skin.weights),v}function Ee(M){const C={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},A=M.sources,L=M.vertexWeights,Z=L.vcount,se=L.v,Ce=L.inputs.JOINT.offset,xe=L.inputs.WEIGHT.offset,we=M.sources[M.joints.inputs.JOINT],Ve=M.sources[M.joints.inputs.INV_BIND_MATRIX],ce=A[L.inputs.WEIGHT.id].array;let He=0,De,Ke,Ye;for(De=0,Ye=Z.length;De<Ye;De++){const Lt=Z[De],wt=[];for(Ke=0;Ke<Lt;Ke++){const At=se[He+Ce],ri=se[He+xe],bn=ce[ri];wt.push({index:At,weight:bn}),He+=2}for(wt.sort(qt),Ke=0;Ke<4;Ke++){const At=wt[Ke];At!==void 0?(C.indices.array.push(At.index),C.weights.array.push(At.weight)):(C.indices.array.push(0),C.weights.array.push(0))}}for(M.bindShapeMatrix?C.bindMatrix=new je().fromArray(M.bindShapeMatrix).transpose():C.bindMatrix=new je().identity(),De=0,Ye=we.array.length;De<Ye;De++){const Lt=we.array[De],wt=new je().fromArray(Ve.array,De*Ve.stride).transpose();C.joints.push({name:Lt,boneInverse:wt})}return C;function qt(Lt,wt){return wt.weight-Lt.weight}}function W(M){return _(tt.controllers[M],Le)}function J(M){const v={init_from:n(M,"init_from")[0].textContent};tt.images[M.getAttribute("id")]=v}function ne(M){return M.build!==void 0?M.build:M.init_from}function ve(M){const v=tt.images[M];return v!==void 0?_(v,ne):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",M),null)}function Ue(M){const v={};for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"profile_COMMON":v.profile=Je(L);break}}tt.effects[M.getAttribute("id")]=v}function Je(M){const v={surfaces:{},samplers:{}};for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"newparam":Yt(L,v);break;case"technique":v.technique=Pt(L);break;case"extra":v.extra=at(L);break}}return v}function Yt(M,v){const C=M.getAttribute("sid");for(let A=0,L=M.childNodes.length;A<L;A++){const Z=M.childNodes[A];if(Z.nodeType===1)switch(Z.nodeName){case"surface":v.surfaces[C]=xt(Z);break;case"sampler2D":v.samplers[C]=B(Z);break}}}function xt(M){const v={};for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"init_from":v.init_from=L.textContent;break}}return v}function B(M){const v={};for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"source":v.source=L.textContent;break}}return v}function Pt(M){const v={};for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"constant":case"lambert":case"blinn":case"phong":v.type=L.nodeName,v.parameters=$e(L);break;case"extra":v.extra=at(L);break}}return v}function $e(M){const v={};for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":v[L.nodeName]=Mt(L);break;case"transparent":v[L.nodeName]={opaque:L.hasAttribute("opaque")?L.getAttribute("opaque"):"A_ONE",data:Mt(L)};break}}return v}function Mt(M){const v={};for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"color":v[L.nodeName]=r(L.textContent);break;case"float":v[L.nodeName]=parseFloat(L.textContent);break;case"texture":v[L.nodeName]={id:L.getAttribute("texture"),extra:We(L)};break}}return v}function We(M){const v={technique:{}};for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"extra":Ot(L,v);break}}return v}function Ot(M,v){for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"technique":Ne(L,v);break}}}function Ne(M,v){for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":v.technique[L.nodeName]=parseFloat(L.textContent);break;case"wrapU":case"wrapV":L.textContent.toUpperCase()==="TRUE"?v.technique[L.nodeName]=1:L.textContent.toUpperCase()==="FALSE"?v.technique[L.nodeName]=0:v.technique[L.nodeName]=parseInt(L.textContent);break;case"bump":v[L.nodeName]=Wt(L);break}}}function at(M){const v={};for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"technique":v.technique=Zt(L);break}}return v}function Zt(M){const v={};for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"double_sided":v[L.nodeName]=parseInt(L.textContent);break;case"bump":v[L.nodeName]=Wt(L);break}}return v}function Wt(M){const v={};for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"texture":v[L.nodeName]={id:L.getAttribute("texture"),texcoord:L.getAttribute("texcoord"),extra:We(L)};break}}return v}function F(M){return M}function S(M){return _(tt.effects[M],F)}function Y(M){const v={name:M.getAttribute("name")};for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"instance_effect":v.url=a(L.getAttribute("url"));break}}tt.materials[M.getAttribute("id")]=v}function re(M){let v,C=M.slice((M.lastIndexOf(".")-1>>>0)+2);switch(C=C.toLowerCase(),C){case"tga":v=en;break;default:v=mn}return v}function le(M){const v=S(M.url),C=v.profile.technique;let A;switch(C.type){case"phong":case"blinn":A=new Tl;break;case"lambert":A=new up;break;default:A=new Yn;break}A.name=M.name||"";function L(xe,we=null){const Ve=v.profile.samplers[xe.id];let ce=null;if(Ve!==void 0){const He=v.profile.surfaces[Ve.source];ce=ve(He.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ce=ve(xe.id);if(ce!==null){const He=re(ce);if(He!==void 0){const De=He.load(ce),Ke=xe.extra;if(Ke!==void 0&&Ke.technique!==void 0&&c(Ke.technique)===!1){const Ye=Ke.technique;De.wrapS=Ye.wrapU?Wn:wn,De.wrapT=Ye.wrapV?Wn:wn,De.offset.set(Ye.offsetU||0,Ye.offsetV||0),De.repeat.set(Ye.repeatU||1,Ye.repeatV||1)}else De.wrapS=Wn,De.wrapT=Wn;return we!==null&&(De.colorSpace=we),De}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ce),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",xe.id),null}const Z=C.parameters;for(const xe in Z){const we=Z[xe];switch(xe){case"diffuse":we.color&&A.color.fromArray(we.color),we.texture&&(A.map=L(we.texture,Nt));break;case"specular":we.color&&A.specular&&A.specular.fromArray(we.color),we.texture&&(A.specularMap=L(we.texture));break;case"bump":we.texture&&(A.normalMap=L(we.texture));break;case"ambient":we.texture&&(A.lightMap=L(we.texture,Nt));break;case"shininess":we.float&&A.shininess&&(A.shininess=we.float);break;case"emission":we.color&&A.emissive&&A.emissive.fromArray(we.color),we.texture&&(A.emissiveMap=L(we.texture,Nt));break}}pt.colorSpaceToWorking(A.color,Nt),A.specular&&pt.colorSpaceToWorking(A.specular,Nt),A.emissive&&pt.colorSpaceToWorking(A.emissive,Nt);let se=Z.transparent,Ce=Z.transparency;if(Ce===void 0&&se&&(Ce={float:1}),se===void 0&&Ce&&(se={opaque:"A_ONE",data:{color:[1,1,1,1]}}),se&&Ce)if(se.data.texture)A.transparent=!0;else{const xe=se.data.color;switch(se.opaque){case"A_ONE":A.opacity=xe[3]*Ce.float;break;case"RGB_ZERO":A.opacity=1-xe[0]*Ce.float;break;case"A_ZERO":A.opacity=1-xe[3]*Ce.float;break;case"RGB_ONE":A.opacity=xe[0]*Ce.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',se.opaque)}A.opacity<1&&(A.transparent=!0)}if(C.extra!==void 0&&C.extra.technique!==void 0){const xe=C.extra.technique;for(const we in xe){const Ve=xe[we];switch(we){case"double_sided":A.side=Ve===1?_n:Kt;break;case"bump":A.normalMap=L(Ve.texture),A.normalScale=new nt(1,1);break}}}return A}function ie(M){return _(tt.materials[M],le)}function Ge(M){const v={name:M.getAttribute("name")};for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"optics":v.optics=ge(L);break}}tt.cameras[M.getAttribute("id")]=v}function ge(M){for(let v=0;v<M.childNodes.length;v++){const C=M.childNodes[v];switch(C.nodeName){case"technique_common":return Oe(C)}}return{}}function Oe(M){const v={};for(let C=0;C<M.childNodes.length;C++){const A=M.childNodes[C];switch(A.nodeName){case"perspective":case"orthographic":v.technique=A.nodeName,v.parameters=ke(A);break}}return v}function ke(M){const v={};for(let C=0;C<M.childNodes.length;C++){const A=M.childNodes[C];switch(A.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":v[A.nodeName]=parseFloat(A.textContent);break}}return v}function he(M){let v;switch(M.optics.technique){case"perspective":v=new on(M.optics.parameters.yfov,M.optics.parameters.aspect_ratio,M.optics.parameters.znear,M.optics.parameters.zfar);break;case"orthographic":let C=M.optics.parameters.ymag,A=M.optics.parameters.xmag;const L=M.optics.parameters.aspect_ratio;A=A===void 0?C*L:A,C=C===void 0?A/L:C,A*=.5,C*=.5,v=new Bo(-A,A,C,-C,M.optics.parameters.znear,M.optics.parameters.zfar);break;default:v=new on;break}return v.name=M.name||"",v}function Te(M){const v=tt.cameras[M];return v!==void 0?_(v,he):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",M),null)}function Qe(M){let v={};for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"technique_common":v=ze(L);break}}tt.lights[M.getAttribute("id")]=v}function ze(M){const v={};for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"directional":case"point":case"spot":case"ambient":v.technique=L.nodeName,v.parameters=Me(L)}}return v}function Me(M){const v={};for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"color":const Z=r(L.textContent);v.color=new Be().fromArray(Z),pt.colorSpaceToWorking(v.color,Nt);break;case"falloff_angle":v.falloffAngle=parseFloat(L.textContent);break;case"quadratic_attenuation":const se=parseFloat(L.textContent);v.distance=se?Math.sqrt(1/se):0;break}}return v}function ot(M){let v;switch(M.technique){case"directional":v=new Ro;break;case"point":v=new kd;break;case"spot":v=new Bd;break;case"ambient":v=new zd;break}return M.parameters.color&&v.color.copy(M.parameters.color),M.parameters.distance&&(v.distance=M.parameters.distance),v}function k(M){const v=tt.lights[M];return v!==void 0?_(v,ot):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",M),null)}function fe(M){const v={name:M.getAttribute("name"),sources:{},vertices:{},primitives:[]},C=n(M,"mesh")[0];if(C!==void 0){for(let A=0;A<C.childNodes.length;A++){const L=C.childNodes[A];if(L.nodeType!==1)continue;const Z=L.getAttribute("id");switch(L.nodeName){case"source":v.sources[Z]=ye(L);break;case"vertices":v.vertices=Ie(L);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",L.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":v.primitives.push(ue(L));break;default:console.log(L)}}tt.geometries[M.getAttribute("id")]=v}}function ye(M){const v={array:[],stride:3};for(let C=0;C<M.childNodes.length;C++){const A=M.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"float_array":v.array=r(A.textContent);break;case"Name_array":v.array=s(A.textContent);break;case"technique_common":const L=n(A,"accessor")[0];L!==void 0&&(v.stride=parseInt(L.getAttribute("stride")));break}}return v}function Ie(M){const v={};for(let C=0;C<M.childNodes.length;C++){const A=M.childNodes[C];A.nodeType===1&&(v[A.getAttribute("semantic")]=a(A.getAttribute("source")))}return v}function ue(M){const v={type:M.nodeName,material:M.getAttribute("material"),count:parseInt(M.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let C=0,A=M.childNodes.length;C<A;C++){const L=M.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"input":const Z=a(L.getAttribute("source")),se=L.getAttribute("semantic"),Ce=parseInt(L.getAttribute("offset")),xe=parseInt(L.getAttribute("set")),we=xe>0?se+xe:se;v.inputs[we]={id:Z,offset:Ce},v.stride=Math.max(v.stride,Ce+1),se==="TEXCOORD"&&(v.hasUV=!0);break;case"vcount":v.vcount=o(L.textContent);break;case"p":v.p=o(L.textContent);break}}return v}function oe(M){const v={};for(let C=0;C<M.length;C++){const A=M[C];v[A.type]===void 0&&(v[A.type]=[]),v[A.type].push(A)}return v}function Fe(M){let v=0;for(let C=0,A=M.length;C<A;C++)M[C].hasUV===!0&&v++;v>0&&v<M.length&&(M.uvsNeedsFix=!0)}function it(M){const v={},C=M.sources,A=M.vertices,L=M.primitives;if(L.length===0)return{};const Z=oe(L);for(const se in Z){const Ce=Z[se];Fe(Ce),v[se]=Dt(Ce,C,A)}return v}function Dt(M,v,C){const A={},L={array:[],stride:0},Z={array:[],stride:0},se={array:[],stride:0},Ce={array:[],stride:0},xe={array:[],stride:0},we={array:[],stride:4},Ve={array:[],stride:4},ce=new jt,He=[];let De=0;for(let Ke=0;Ke<M.length;Ke++){const Ye=M[Ke],qt=Ye.inputs;let Lt=0;switch(Ye.type){case"lines":case"linestrips":Lt=Ye.count*2;break;case"triangles":Lt=Ye.count*3;break;case"polylist":for(let wt=0;wt<Ye.count;wt++){const At=Ye.vcount[wt];switch(At){case 3:Lt+=3;break;case 4:Lt+=6;break;default:Lt+=(At-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknown primitive type:",Ye.type)}ce.addGroup(De,Lt,Ke),De+=Lt,Ye.material&&He.push(Ye.material);for(const wt in qt){const At=qt[wt];switch(wt){case"VERTEX":for(const ri in C){const bn=C[ri];switch(ri){case"POSITION":const ji=L.array.length;if(lt(Ye,v[bn],At.offset,L.array),L.stride=v[bn].stride,v.skinWeights&&v.skinIndices&&(lt(Ye,v.skinIndices,At.offset,we.array),lt(Ye,v.skinWeights,At.offset,Ve.array)),Ye.hasUV===!1&&M.uvsNeedsFix===!0){const bh=(L.array.length-ji)/L.stride;for(let hc=0;hc<bh;hc++)se.array.push(0,0)}break;case"NORMAL":lt(Ye,v[bn],At.offset,Z.array),Z.stride=v[bn].stride;break;case"COLOR":lt(Ye,v[bn],At.offset,xe.array),xe.stride=v[bn].stride;break;case"TEXCOORD":lt(Ye,v[bn],At.offset,se.array),se.stride=v[bn].stride;break;case"TEXCOORD1":lt(Ye,v[bn],At.offset,Ce.array),se.stride=v[bn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',ri)}}break;case"NORMAL":lt(Ye,v[At.id],At.offset,Z.array),Z.stride=v[At.id].stride;break;case"COLOR":lt(Ye,v[At.id],At.offset,xe.array,!0),xe.stride=v[At.id].stride;break;case"TEXCOORD":lt(Ye,v[At.id],At.offset,se.array),se.stride=v[At.id].stride;break;case"TEXCOORD1":lt(Ye,v[At.id],At.offset,Ce.array),Ce.stride=v[At.id].stride;break}}}return L.array.length>0&&ce.setAttribute("position",new ht(L.array,L.stride)),Z.array.length>0&&ce.setAttribute("normal",new ht(Z.array,Z.stride)),xe.array.length>0&&ce.setAttribute("color",new ht(xe.array,xe.stride)),se.array.length>0&&ce.setAttribute("uv",new ht(se.array,se.stride)),Ce.array.length>0&&ce.setAttribute("uv1",new ht(Ce.array,Ce.stride)),we.array.length>0&&ce.setAttribute("skinIndex",new ht(we.array,we.stride)),Ve.array.length>0&&ce.setAttribute("skinWeight",new ht(Ve.array,Ve.stride)),A.data=ce,A.type=M[0].type,A.materialKeys=He,A}function lt(M,v,C,A,L=!1){const Z=M.p,se=M.stride,Ce=M.vcount;function xe(ce){let He=Z[ce+C]*Ve;const De=He+Ve;for(;He<De;He++)A.push(we[He]);if(L){const Ke=A.length-Ve-1;tn.setRGB(A[Ke+0],A[Ke+1],A[Ke+2],Nt),A[Ke+0]=tn.r,A[Ke+1]=tn.g,A[Ke+2]=tn.b}}const we=v.array,Ve=v.stride;if(M.vcount!==void 0){let ce=0;for(let He=0,De=Ce.length;He<De;He++){const Ke=Ce[He];if(Ke===4){const Ye=ce+se*0,qt=ce+se*1,Lt=ce+se*2,wt=ce+se*3;xe(Ye),xe(qt),xe(wt),xe(qt),xe(Lt),xe(wt)}else if(Ke===3){const Ye=ce+se*0,qt=ce+se*1,Lt=ce+se*2;xe(Ye),xe(qt),xe(Lt)}else if(Ke>4)for(let Ye=1,qt=Ke-2;Ye<=qt;Ye++){const Lt=ce+se*0,wt=ce+se*Ye,At=ce+se*(Ye+1);xe(Lt),xe(wt),xe(At)}ce+=se*Ke}}else for(let ce=0,He=Z.length;ce<He;ce+=se)xe(ce)}function Ln(M){return _(tt.geometries[M],it)}function In(M){const v={name:M.getAttribute("name")||"",joints:{},links:[]};for(let C=0;C<M.childNodes.length;C++){const A=M.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"technique_common":Ws(A,v);break}}tt.kinematicsModels[M.getAttribute("id")]=v}function wr(M){return M.build!==void 0?M.build:M}function ni(M){return _(tt.kinematicsModels[M],wr)}function Ws(M,v){for(let C=0;C<M.childNodes.length;C++){const A=M.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"joint":v.joints[A.getAttribute("sid")]=Ar(A);break;case"link":v.links.push(Pi(A));break}}}function Ar(M){let v;for(let C=0;C<M.childNodes.length;C++){const A=M.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"prismatic":case"revolute":v=Rr(A);break}}return v}function Rr(M){const v={sid:M.getAttribute("sid"),name:M.getAttribute("name")||"",axis:new O,limits:{min:0,max:0},type:M.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let C=0;C<M.childNodes.length;C++){const A=M.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"axis":const L=r(A.textContent);v.axis.fromArray(L);break;case"limits":const Z=A.getElementsByTagName("max")[0],se=A.getElementsByTagName("min")[0];v.limits.max=parseFloat(Z.textContent),v.limits.min=parseFloat(se.textContent);break}}return v.limits.min>=v.limits.max&&(v.static=!0),v.middlePosition=(v.limits.min+v.limits.max)/2,v}function Pi(M){const v={sid:M.getAttribute("sid"),name:M.getAttribute("name")||"",attachments:[],transforms:[]};for(let C=0;C<M.childNodes.length;C++){const A=M.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"attachment_full":v.attachments.push(Cr(A));break;case"matrix":case"translate":case"rotate":v.transforms.push(Di(A));break}}return v}function Cr(M){const v={joint:M.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let C=0;C<M.childNodes.length;C++){const A=M.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"link":v.links.push(Pi(A));break;case"matrix":case"translate":case"rotate":v.transforms.push(Di(A));break}}return v}function Di(M){const v={type:M.nodeName},C=r(M.textContent);switch(v.type){case"matrix":v.obj=new je,v.obj.fromArray(C).transpose();break;case"translate":v.obj=new O,v.obj.fromArray(C);break;case"rotate":v.obj=new O,v.obj.fromArray(C),v.angle=mi.degToRad(C[3]);break}return v}function Lr(M){const v={name:M.getAttribute("name")||"",rigidBodies:{}};for(let C=0;C<M.childNodes.length;C++){const A=M.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"rigid_body":v.rigidBodies[A.getAttribute("name")]={},Ir(A,v.rigidBodies[A.getAttribute("name")]);break}}tt.physicsModels[M.getAttribute("id")]=v}function Ir(M,v){for(let C=0;C<M.childNodes.length;C++){const A=M.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"technique_common":Ho(A,v);break}}}function Ho(M,v){for(let C=0;C<M.childNodes.length;C++){const A=M.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"inertia":v.inertia=r(A.textContent);break;case"mass":v.mass=r(A.textContent)[0];break}}}function Go(M){const v={bindJointAxis:[]};for(let C=0;C<M.childNodes.length;C++){const A=M.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"bind_joint_axis":v.bindJointAxis.push(Vo(A));break}}tt.kinematicsScenes[a(M.getAttribute("url"))]=v}function Vo(M){const v={target:M.getAttribute("target").split("/").pop()};for(let C=0;C<M.childNodes.length;C++){const A=M.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"axis":const L=A.getElementsByTagName("param")[0];v.axis=L.textContent;const Z=v.axis.split("inst_").pop().split("axis")[0];v.jointIndex=Z.substring(0,Z.length-1);break}}return v}function Wo(M){return M.build!==void 0?M.build:M}function Xo(M){return _(tt.kinematicsScenes[M],Wo)}function Yo(){const M=Object.keys(tt.kinematicsModels)[0],v=Object.keys(tt.kinematicsScenes)[0],C=Object.keys(tt.visualScenes)[0];if(M===void 0||v===void 0)return;const A=ni(M),L=Xo(v),Z=qe(C),se=L.bindJointAxis,Ce={};for(let Ve=0,ce=se.length;Ve<ce;Ve++){const He=se[Ve],De=Et.querySelector('[sid="'+He.target+'"]');if(De){const Ke=De.parentElement;xe(He.jointIndex,Ke)}}function xe(Ve,ce){const He=ce.getAttribute("name"),De=A.joints[Ve];Z.traverse(function(Ke){Ke.name===He&&(Ce[Ve]={object:Ke,transforms:R(ce),joint:De,position:De.zeroPosition})})}const we=new je;Kn={joints:A&&A.joints,getJointValue:function(Ve){const ce=Ce[Ve];if(ce)return ce.position;console.warn("THREE.ColladaLoader: Joint "+Ve+" doesn't exist.")},setJointValue:function(Ve,ce){const He=Ce[Ve];if(He){const De=He.joint;if(ce>De.limits.max||ce<De.limits.min)console.warn("THREE.ColladaLoader: Joint "+Ve+" value "+ce+" outside of limits (min: "+De.limits.min+", max: "+De.limits.max+").");else if(De.static)console.warn("THREE.ColladaLoader: Joint "+Ve+" is static.");else{const Ke=He.object,Ye=De.axis,qt=He.transforms;q.identity();for(let Lt=0;Lt<qt.length;Lt++){const wt=qt[Lt];if(wt.sid&&wt.sid.indexOf(Ve)!==-1)switch(De.type){case"revolute":q.multiply(we.makeRotationAxis(Ye,mi.degToRad(ce)));break;case"prismatic":q.multiply(we.makeTranslation(Ye.x*ce,Ye.y*ce,Ye.z*ce));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+De.type);break}else switch(wt.type){case"matrix":q.multiply(wt.obj);break;case"translate":q.multiply(we.makeTranslation(wt.obj.x,wt.obj.y,wt.obj.z));break;case"scale":q.scale(wt.obj);break;case"rotate":q.multiply(we.makeRotationAxis(wt.obj,wt.angle));break}}Ke.matrix.copy(q),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ce[Ve].position=ce}}else console.log("THREE.ColladaLoader: "+Ve+" does not exist.")}}}function R(M){const v=[],C=Et.querySelector('[id="'+M.id+'"]');for(let A=0;A<C.childNodes.length;A++){const L=C.childNodes[A];if(L.nodeType!==1)continue;let Z,se;switch(L.nodeName){case"matrix":Z=r(L.textContent);const Ce=new je().fromArray(Z).transpose();v.push({sid:L.getAttribute("sid"),type:L.nodeName,obj:Ce});break;case"translate":case"scale":Z=r(L.textContent),se=new O().fromArray(Z),v.push({sid:L.getAttribute("sid"),type:L.nodeName,obj:se});break;case"rotate":Z=r(L.textContent),se=new O().fromArray(Z);const xe=mi.degToRad(Z[3]);v.push({sid:L.getAttribute("sid"),type:L.nodeName,obj:se,angle:xe});break}}return v}function G(M){const v=M.getElementsByTagName("node");for(let C=0;C<v.length;C++){const A=v[C];A.hasAttribute("id")===!1&&A.setAttribute("id",l())}}const q=new je,K=new O;function V(M){const v={name:M.getAttribute("name")||"",type:M.getAttribute("type"),id:M.getAttribute("id"),sid:M.getAttribute("sid"),matrix:new je,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let C=0;C<M.childNodes.length;C++){const A=M.childNodes[C];if(A.nodeType!==1)continue;let L;switch(A.nodeName){case"node":v.nodes.push(A.getAttribute("id")),V(A);break;case"instance_camera":v.instanceCameras.push(a(A.getAttribute("url")));break;case"instance_controller":v.instanceControllers.push(de(A));break;case"instance_light":v.instanceLights.push(a(A.getAttribute("url")));break;case"instance_geometry":v.instanceGeometries.push(de(A));break;case"instance_node":v.instanceNodes.push(a(A.getAttribute("url")));break;case"matrix":L=r(A.textContent),v.matrix.multiply(q.fromArray(L).transpose()),v.transforms[A.getAttribute("sid")]=A.nodeName;break;case"translate":L=r(A.textContent),K.fromArray(L),v.matrix.multiply(q.makeTranslation(K.x,K.y,K.z)),v.transforms[A.getAttribute("sid")]=A.nodeName;break;case"rotate":L=r(A.textContent);const Z=mi.degToRad(L[3]);v.matrix.multiply(q.makeRotationAxis(K.fromArray(L),Z)),v.transforms[A.getAttribute("sid")]=A.nodeName;break;case"scale":L=r(A.textContent),v.matrix.scale(K.fromArray(L)),v.transforms[A.getAttribute("sid")]=A.nodeName;break;case"extra":break;default:console.log(A)}}return ft(v.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",v.id):tt.nodes[v.id]=v,v}function de(M){const v={id:a(M.getAttribute("url")),materials:{},skeletons:[]};for(let C=0;C<M.childNodes.length;C++){const A=M.childNodes[C];switch(A.nodeName){case"bind_material":const L=A.getElementsByTagName("instance_material");for(let Z=0;Z<L.length;Z++){const se=L[Z],Ce=se.getAttribute("symbol"),xe=se.getAttribute("target");v.materials[Ce]=a(xe)}break;case"skeleton":v.skeletons.push(a(A.textContent));break}}return v}function Se(M,v){const C=[],A=[];let L,Z,se;for(L=0;L<M.length;L++){const we=M[L];let Ve;if(ft(we))Ve=vt(we),Pe(Ve,v,C);else if(Ct(we)){const He=tt.visualScenes[we].children;for(let De=0;De<He.length;De++){const Ke=He[De];if(Ke.type==="JOINT"){const Ye=vt(Ke.id);Pe(Ye,v,C)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",we)}for(L=0;L<v.length;L++)for(Z=0;Z<C.length;Z++)if(se=C[Z],se.bone.name===v[L].name){A[L]=se,se.processed=!0;break}for(L=0;L<C.length;L++)se=C[L],se.processed===!1&&(A.push(se),se.processed=!0);const Ce=[],xe=[];for(L=0;L<A.length;L++)se=A[L],Ce.push(se.bone),xe.push(se.boneInverse);return new Uo(Ce,xe)}function Pe(M,v,C){M.traverse(function(A){if(A.isBone===!0){let L;for(let Z=0;Z<v.length;Z++){const se=v[Z];if(se.name===A.name){L=se.boneInverse;break}}L===void 0&&(L=new je),C.push({bone:A,boneInverse:L,processed:!1})}})}function Re(M){const v=[],C=M.matrix,A=M.nodes,L=M.type,Z=M.instanceCameras,se=M.instanceControllers,Ce=M.instanceLights,xe=M.instanceGeometries,we=M.instanceNodes;for(let ce=0,He=A.length;ce<He;ce++)v.push(vt(A[ce]));for(let ce=0,He=Z.length;ce<He;ce++){const De=Te(Z[ce]);De!==null&&v.push(De.clone())}for(let ce=0,He=se.length;ce<He;ce++){const De=se[ce],Ke=W(De.id),Ye=Ln(Ke.id),qt=Xe(Ye,De.materials),Lt=De.skeletons,wt=Ke.skin.joints,At=Se(Lt,wt);for(let ri=0,bn=qt.length;ri<bn;ri++){const ji=qt[ri];ji.isSkinnedMesh&&(ji.bind(At,Ke.skin.bindMatrix),ji.normalizeSkinWeights()),v.push(ji)}}for(let ce=0,He=Ce.length;ce<He;ce++){const De=k(Ce[ce]);De!==null&&v.push(De.clone())}for(let ce=0,He=xe.length;ce<He;ce++){const De=xe[ce],Ke=Ln(De.id),Ye=Xe(Ke,De.materials);for(let qt=0,Lt=Ye.length;qt<Lt;qt++)v.push(Ye[qt])}for(let ce=0,He=we.length;ce<He;ce++)v.push(vt(we[ce]).clone());let Ve;if(A.length===0&&v.length===1)Ve=v[0];else{Ve=L==="JOINT"?new ql:new xn;for(let ce=0;ce<v.length;ce++)Ve.add(v[ce])}return Ve.name=L==="JOINT"?M.sid:M.name,Ve.matrix.copy(C),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve}const Ze=new Yn({name:$n.DEFAULT_MATERIAL_NAME,color:16711935});function et(M,v){const C=[];for(let A=0,L=M.length;A<L;A++){const Z=v[M[A]];Z===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",M[A]),C.push(Ze)):C.push(ie(Z))}return C}function Xe(M,v){const C=[];for(const A in M){const L=M[A],Z=et(L.materialKeys,v);if(Z.length===0&&(A==="lines"||A==="linestrips"?Z.push(new xi):Z.push(new Tl)),A==="lines"||A==="linestrips")for(let we=0,Ve=Z.length;we<Ve;we++){const ce=Z[we];if(ce.isMeshPhongMaterial===!0||ce.isMeshLambertMaterial===!0){const He=new xi;He.color.copy(ce.color),He.opacity=ce.opacity,He.transparent=ce.transparent,Z[we]=He}}const se=L.data.attributes.skinIndex!==void 0,Ce=Z.length===1?Z[0]:Z;let xe;switch(A){case"lines":xe=new Ds(L.data,Ce);break;case"linestrips":xe=new Fo(L.data,Ce);break;case"triangles":case"polylist":se?xe=new Pd(L.data,Ce):xe=new $t(L.data,Ce);break}C.push(xe)}return C}function ft(M){return tt.nodes[M]!==void 0}function vt(M){return _(tt.nodes[M],Re)}function Xt(M){const v={name:M.getAttribute("name"),children:[]};G(M);const C=n(M,"node");for(let A=0;A<C.length;A++)v.children.push(V(C[A]));tt.visualScenes[M.getAttribute("id")]=v}function Ut(M){const v=new xn;v.name=M.name;const C=M.children;for(let A=0;A<C.length;A++){const L=C[A];v.add(vt(L.id))}return v}function Ct(M){return tt.visualScenes[M]!==void 0}function qe(M){return _(tt.visualScenes[M],Ut)}function zt(M){const v=n(M,"instance_visual_scene")[0];return qe(a(v.getAttribute("url")))}function bt(){const M=tt.clips;if(c(M)===!0){if(c(tt.animations)===!1){const v=[];for(const C in tt.animations){const A=x(C);for(let L=0,Z=A.length;L<Z;L++)v.push(A[L])}vi.push(new wl("default",-1,v))}}else for(const v in M)vi.push(X(v))}function fn(M){let v="";const C=[M];for(;C.length;){const A=C.shift();A.nodeType===Node.TEXT_NODE?v+=A.textContent:(v+=`
`,C.push(...A.childNodes))}return v.trim()}if(e.length===0)return{scene:new gr};const ii=new DOMParser().parseFromString(e,"application/xml"),Et=n(ii,"COLLADA")[0],si=ii.getElementsByTagName("parsererror")[0];if(si!==void 0){const M=n(si,"div")[0];let v;return M?v=M.textContent:v=fn(si),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,v),null}const Ht=Et.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Ht);const pn=d(n(Et,"asset")[0]),mn=new Od(this.manager);mn.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let en;Vu&&(en=new Vu(this.manager),en.setPath(this.resourcePath||t));const tn=new Be,vi=[];let Kn={},Mh=0;const tt={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};f(Et,"library_animations","animation",g),f(Et,"library_animation_clips","animation_clip",z),f(Et,"library_controllers","controller",ae),f(Et,"library_images","image",J),f(Et,"library_effects","effect",Ue),f(Et,"library_materials","material",Y),f(Et,"library_cameras","camera",Ge),f(Et,"library_lights","light",Qe),f(Et,"library_geometries","geometry",fe),f(Et,"library_nodes","node",V),f(Et,"library_visual_scenes","visual_scene",Xt),f(Et,"library_kinematics_models","kinematics_model",In),f(Et,"library_physics_models","physics_model",Lr),f(Et,"scene","instance_kinematics_scene",Go),y(tt.animations,E),y(tt.clips,te),y(tt.controllers,Le),y(tt.images,ne),y(tt.effects,F),y(tt.materials,le),y(tt.cameras,he),y(tt.lights,ot),y(tt.geometries,it),y(tt.visualScenes,Ut),bt(),Yo();const Nr=zt(n(Et,"scene")[0]);return Nr.animations=vi,pn.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Nr.rotation.set(-Math.PI/2,0,0)),Nr.scale.multiplyScalar(pn.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),vi},kinematics:Kn,library:tt,scene:Nr}}}const Wu={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class _r{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new xx(e)}),this.register(function(e){return new vx(e)}),this.register(function(e){return new Sx(e)}),this.register(function(e){return new Tx(e)}),this.register(function(e){return new wx(e)}),this.register(function(e){return new Ax(e)}),this.register(function(e){return new Mx(e)}),this.register(function(e){return new bx(e)}),this.register(function(e){return new Ex(e)}),this.register(function(e){return new Rx(e)}),this.register(function(e){return new Cx(e)}),this.register(function(e){return new Lx(e)}),this.register(function(e){return new Ix(e)}),this.register(function(e){return new Nx(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,s){const r=new _x,o=[];for(let a=0,l=this.pluginCallbacks.length;a<l;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,s).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,s,r,t)})}}const mt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Da="KHR_mesh_quantization",Rn={};Rn[dn]=mt.NEAREST;Rn[Ol]=mt.NEAREST_MIPMAP_NEAREST;Rn[ys]=mt.NEAREST_MIPMAP_LINEAR;Rn[ln]=mt.LINEAR;Rn[or]=mt.LINEAR_MIPMAP_NEAREST;Rn[Fn]=mt.LINEAR_MIPMAP_LINEAR;Rn[wn]=mt.CLAMP_TO_EDGE;Rn[Wn]=mt.REPEAT;Rn[ur]=mt.MIRRORED_REPEAT;const Xu={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},cx=new Be,Yu=12,ux=1179937895,dx=2,qu=8,hx=1313821514,fx=5130562;function rr(i,e){return i.length===e.length&&i.every(function(t,n){return t===e[n]})}function px(i){return new TextEncoder().encode(i).buffer}function mx(i){return rr(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function gx(i,e,t){const n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=e;s<e+t;s++)for(let r=0;r<i.itemSize;r++){let o;i.itemSize>4?o=i.array[s*i.itemSize+r]:(r===0?o=i.getX(s):r===1?o=i.getY(s):r===2?o=i.getZ(s):r===3&&(o=i.getW(s)),i.normalized===!0&&(o=mi.normalize(o,i.array))),n.min[r]=Math.min(n.min[r],o),n.max[r]=Math.max(n.max[r],o)}return n}function Qd(i){return Math.ceil(i/4)*4}function Ua(i,e=0){const t=Qd(i.byteLength);if(t!==i.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(i)),e!==0)for(let s=i.byteLength;s<t;s++)n[s]=e;return n.buffer}return i}function $u(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function yx(i,e){if(i.toBlob!==void 0)return new Promise(n=>i.toBlob(n,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),i.convertToBlob({type:e,quality:t})}class _x{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+Lo}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);const s=this,r=s.buffers,o=s.json;n=s.options;const a=s.extensionsUsed,l=s.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),d=Object.keys(a),u=Object.keys(l);if(d.length>0&&(o.extensionsUsed=d),u.length>0&&(o.extensionsRequired=u),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=c.size),n.binary===!0){const h=new FileReader;h.readAsArrayBuffer(c),h.onloadend=function(){const f=Ua(h.result),y=new DataView(new ArrayBuffer(qu));y.setUint32(0,f.byteLength,!0),y.setUint32(4,fx,!0);const _=Ua(px(JSON.stringify(o)),32),g=new DataView(new ArrayBuffer(qu));g.setUint32(0,_.byteLength,!0),g.setUint32(4,hx,!0);const m=new ArrayBuffer(Yu),w=new DataView(m);w.setUint32(0,ux,!0),w.setUint32(4,dx,!0);const E=Yu+g.byteLength+_.byteLength+y.byteLength+f.byteLength;w.setUint32(8,E,!0);const x=new Blob([m,g,_,y,f],{type:"application/octet-stream"}),I=new FileReader;I.readAsArrayBuffer(x),I.onloadend=function(){t(I.result)}}}else if(o.buffers&&o.buffers.length>0){const h=new FileReader;h.readAsDataURL(c),h.onloadend=function(){const f=h.result;o.buffers[0].uri=f,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,s=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const o in r.gltfExtensions)t.extensions[o]=r.gltfExtensions[o],s[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(e,s)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const n=new O;for(let s=0,r=e.count;s<r;s++)if(Math.abs(n.fromBufferAttribute(e,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),s=new O;for(let r=0,o=n.count;r<o;r++)s.fromBufferAttribute(n,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(r,s.x,s.y,s.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const s={};(t.offset.x!==0||t.offset.y!==0)&&(s.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(s.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(s.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(f){return f.colorSpace===Nt?function(_){return _<.04045?_*.0773993808:Math.pow(_*.9478672986+.0521327014,2.4)}:function(_){return _}}e instanceof va&&(e=await this.decompressTextureAsync(e)),t instanceof va&&(t=await this.decompressTextureAsync(t));const s=e?e.image:null,r=t?t.image:null,o=Math.max(s?s.width:0,r?r.width:0),a=Math.max(s?s.height:0,r?r.height:0),l=$u();l.width=o,l.height=a;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,o,a);const d=c.getImageData(0,0,o,a);if(s){c.drawImage(s,0,0,o,a);const f=n(e),y=c.getImageData(0,0,o,a).data;for(let _=2;_<y.length;_+=4)d.data[_]=f(y[_]/256)*256}if(r){c.drawImage(r,0,0,o,a);const f=n(t),y=c.getImageData(0,0,o,a).data;for(let _=1;_<y.length;_+=4)d.data[_]=f(y[_]/256)*256}c.putImageData(d,0,0);const h=(e||t).clone();return h.source=new Do(l),h.colorSpace=pi,h.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),h}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,s,r){const o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case mt.BYTE:case mt.UNSIGNED_BYTE:a=1;break;case mt.SHORT:case mt.UNSIGNED_SHORT:a=2;break;default:a=4}let l=e.itemSize*a;r===mt.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);const c=Qd(s*l),d=new DataView(new ArrayBuffer(c));let u=0;for(let y=n;y<n+s;y++){for(let _=0;_<e.itemSize;_++){let g;e.itemSize>4?g=e.array[y*e.itemSize+_]:(_===0?g=e.getX(y):_===1?g=e.getY(y):_===2?g=e.getZ(y):_===3&&(g=e.getW(y)),e.normalized===!0&&(g=mi.normalize(g,e.array))),t===mt.FLOAT?d.setFloat32(u,g,!0):t===mt.INT?d.setInt32(u,g,!0):t===mt.UNSIGNED_INT?d.setUint32(u,g,!0):t===mt.SHORT?d.setInt16(u,g,!0):t===mt.UNSIGNED_SHORT?d.setUint16(u,g,!0):t===mt.BYTE?d.setInt8(u,g):t===mt.UNSIGNED_BYTE&&d.setUint8(u,g),u+=a}u%l!==0&&(u+=l-u%l)}const h={buffer:this.processBuffer(d.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(h.target=r),r===mt.ARRAY_BUFFER&&(h.byteStride=l),this.byteOffset+=c,o.bufferViews.push(h),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){const r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){const o=Ua(r.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,s(n.bufferViews.push(a)-1)}})}processAccessor(e,t,n,s){const r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let a;if(e.array.constructor===Float32Array)a=mt.FLOAT;else if(e.array.constructor===Int32Array)a=mt.INT;else if(e.array.constructor===Uint32Array)a=mt.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=mt.SHORT;else if(e.array.constructor===Uint16Array)a=mt.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=mt.BYTE;else if(e.array.constructor===Uint8Array)a=mt.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=e.count),s===0)return null;const l=gx(e,n,s);let c;t!==void 0&&(c=e===t.index?mt.ELEMENT_ARRAY_BUFFER:mt.ARRAY_BUFFER);const d=this.processBufferView(e,a,n,s,c),u={bufferView:d.id,byteOffset:d.byteOffset,componentType:a,count:s,max:l.max,min:l.min,type:o[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(u)-1}processImage(e,t,n,s="image/png"){if(e!==null){const r=this,o=r.cache,a=r.json,l=r.options,c=r.pending;o.images.has(e)||o.images.set(e,{});const d=o.images.get(e),u=s+":flipY/"+n.toString();if(d[u]!==void 0)return d[u];a.images||(a.images=[]);const h={mimeType:s},f=$u();f.width=Math.min(e.width,l.maxTextureSize),f.height=Math.min(e.height,l.maxTextureSize);const y=f.getContext("2d",{willReadFrequently:!0});if(n===!0&&(y.translate(0,f.height),y.scale(1,-1)),e.data!==void 0){t!==An&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const g=new Uint8ClampedArray(e.height*e.width*4);for(let m=0;m<g.length;m+=4)g[m+0]=e.data[m+0],g[m+1]=e.data[m+1],g[m+2]=e.data[m+2],g[m+3]=e.data[m+3];y.putImageData(new ImageData(g,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)y.drawImage(e,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(yx(f,s).then(g=>r.processBufferViewImage(g)).then(g=>{h.bufferView=g})):h.uri=bd.getDataURL(f,s);const _=a.images.push(h)-1;return d[u]=_,_}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:Rn[e.magFilter],minFilter:Rn[e.minFilter],wrapS:Rn[e.wrapS],wrapT:Rn[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){const n=this.options,s=this.cache,r=this.json;if(s.textures.has(e))return s.textures.get(e);r.textures||(r.textures=[]),e instanceof va&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let o=e.userData.mimeType;o==="image/webp"&&(o="image/png");const a={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,o)};e.name&&(a.name=e.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(e,a)});const l=r.textures.push(a)-1;return s.textures.set(e,l),l}async processMaterialAsync(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const s={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=e.color.toArray().concat([e.opacity]);if(rr(r,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=e.metalness,s.pbrMetallicRoughness.roughnessFactor=e.roughness):(s.pbrMetallicRoughness.metallicFactor=0,s.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){const a=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),l={index:await this.processTextureAsync(a),texCoord:a.channel};this.applyTextureTransform(l,a),s.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){const a={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(a,e.map),s.pbrMetallicRoughness.baseColorTexture=a}if(e.emissive){const a=e.emissive;if(Math.max(a.r,a.g,a.b)>0&&(s.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const c={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(c,e.emissiveMap),s.emissiveTexture=c}}if(e.normalMap){const a={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(a.scale=e.normalScale.x),this.applyTextureTransform(a,e.normalMap),s.normalTexture=a}if(e.aoMap){const a={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(a.strength=e.aoMapIntensity),this.applyTextureTransform(a,e.aoMap),s.occlusionTexture=a}e.transparent?s.alphaMode="BLEND":e.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=e.alphaTest),e.side===_n&&(s.doubleSided=!0),e.name!==""&&(s.name=e.name),this.serializeUserData(e,s),await this._invokeAllAsync(async function(a){a.writeMaterialAsync&&await a.writeMaterialAsync(e,s)});const o=n.materials.push(s)-1;return t.materials.set(e,o),o}async processMeshAsync(e){const t=this.cache,n=this.json,s=[e.geometry.uuid];if(Array.isArray(e.material))for(let x=0,I=e.material.length;x<I;x++)s.push(e.material[x].uuid);else s.push(e.material.uuid);const r=s.join(":");if(t.meshes.has(r))return t.meshes.get(r);const o=e.geometry;let a;e.isLineSegments?a=mt.LINES:e.isLineLoop?a=mt.LINE_LOOP:e.isLine?a=mt.LINE_STRIP:e.isPoints?a=mt.POINTS:a=e.material.wireframe?mt.LINES:mt.TRIANGLES;const l={},c={},d=[],u=[],h={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=o.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let y=null;for(let x in o.attributes){if(x.slice(0,5)==="morph")continue;const I=o.attributes[x];if(x=h[x]||x.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(x)||(x="_"+x),t.attributes.has(this.getUID(I))){c[x]=t.attributes.get(this.getUID(I));continue}y=null;const P=I.array;x==="JOINTS_0"&&!(P instanceof Uint16Array)&&!(P instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),y=new Bt(new Uint16Array(P),I.itemSize,I.normalized)):(P instanceof Uint32Array||P instanceof Int32Array)&&!x.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${x}" converted to type FLOAT.`),y=_r.Utils.toFloat32BufferAttribute(I));const U=this.processAccessor(y||I,o);U!==null&&(x.startsWith("_")||this.detectMeshQuantization(x,I),c[x]=U,t.attributes.set(this.getUID(I),U))}if(f!==void 0&&o.setAttribute("normal",f),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const x=[],I=[],N={};if(e.morphTargetDictionary!==void 0)for(const P in e.morphTargetDictionary)N[e.morphTargetDictionary[P]]=P;for(let P=0;P<e.morphTargetInfluences.length;++P){const U={};let T=!1;for(const b in o.morphAttributes){if(b!=="position"&&b!=="normal"){T||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),T=!0);continue}const D=o.morphAttributes[b][P],$=b.toUpperCase(),j=o.attributes[b];if(t.attributes.has(this.getUID(D,!0))){U[$]=t.attributes.get(this.getUID(D,!0));continue}const Q=D.clone();if(!o.morphTargetsRelative)for(let ee=0,z=D.count;ee<z;ee++)for(let te=0;te<D.itemSize;te++)te===0&&Q.setX(ee,D.getX(ee)-j.getX(ee)),te===1&&Q.setY(ee,D.getY(ee)-j.getY(ee)),te===2&&Q.setZ(ee,D.getZ(ee)-j.getZ(ee)),te===3&&Q.setW(ee,D.getW(ee)-j.getW(ee));U[$]=this.processAccessor(Q,o),t.attributes.set(this.getUID(j,!0),U[$])}u.push(U),x.push(e.morphTargetInfluences[P]),e.morphTargetDictionary!==void 0&&I.push(N[P])}l.weights=x,I.length>0&&(l.extras={},l.extras.targetNames=I)}const _=Array.isArray(e.material);if(_&&o.groups.length===0)return null;let g=!1;if(_&&o.index===null){const x=[];for(let I=0,N=o.attributes.position.count;I<N;I++)x[I]=I;o.setIndex(x),g=!0}const m=_?e.material:[e.material],w=_?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let x=0,I=w.length;x<I;x++){const N={mode:a,attributes:c};if(this.serializeUserData(o,N),u.length>0&&(N.targets=u),o.index!==null){let U=this.getUID(o.index);(w[x].start!==void 0||w[x].count!==void 0)&&(U+=":"+w[x].start+":"+w[x].count),t.attributes.has(U)?N.indices=t.attributes.get(U):(N.indices=this.processAccessor(o.index,o,w[x].start,w[x].count),t.attributes.set(U,N.indices)),N.indices===null&&delete N.indices}const P=await this.processMaterialAsync(m[w[x].materialIndex]);P!==null&&(N.material=P),d.push(N)}g===!0&&o.setIndex(null),l.primitives=d,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(x){x.writeMesh&&x.writeMesh(e,l)});const E=n.meshes.push(l)-1;return t.meshes.set(r,E),E}detectMeshQuantization(e,t){if(this.extensionsUsed[Da])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");const s=e.split("_",1)[0];Wu[s]&&Wu[s].includes(n)&&(this.extensionsUsed[Da]=!0,this.extensionsRequired[Da]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:s.perspective={aspectRatio:e.aspect,yfov:mi.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(s.name=e.type),t.cameras.push(s)-1}processAnimation(e,t){const n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),e=_r.Utils.mergeMorphTargetTracks(e.clone(),t);const r=e.tracks,o=[],a=[];for(let l=0;l<r.length;++l){const c=r[l],d=St.parseTrackName(c.name);let u=St.findNode(t,d.nodeName);const h=Xu[d.propertyName];if(d.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(d.objectIndex):u=void 0),!u||!h){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name);continue}const f=1;let y=c.values.length/c.times.length;h===Xu.morphTargetInfluences&&(y/=u.morphTargetInfluences.length);let _;c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(_="CUBICSPLINE",y/=3):c.getInterpolation()===Ls?_="STEP":_="LINEAR",a.push({input:this.processAccessor(new Bt(c.times,f)),output:this.processAccessor(new Bt(c.values,y)),interpolation:_}),o.push({sampler:a.length-1,target:{node:s.get(u),path:h}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:a,channels:o}),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,s=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;const o=e.skeleton.bones[0];if(o===void 0)return null;const a=[],l=new Float32Array(r.bones.length*16),c=new je;for(let u=0;u<r.bones.length;++u)a.push(n.get(r.bones[u])),c.copy(r.boneInverses[u]),c.multiply(e.bindMatrix).toArray(l,u*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new Bt(l,16)),joints:a,skeleton:n.get(o)}),s.skin=t.skins.length-1}async processNodeAsync(e){const t=this.json,n=this.options,s=this.nodeMap;t.nodes||(t.nodes=[]);const r={};if(n.trs){const a=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();rr(a,[0,0,0,1])||(r.rotation=a),rr(l,[0,0,0])||(r.translation=l),rr(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),mx(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){const a=await this.processMeshAsync(e);a!==null&&(r.mesh=a)}else e.isCamera&&(r.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);const o=t.nodes.push(r)-1;if(s.set(e,o),e.children.length>0){const a=[];for(let l=0,c=e.children.length;l<c;l++){const d=e.children[l];if(d.visible||n.onlyVisible===!1){const u=await this.processNodeAsync(d);u!==null&&a.push(u)}}a.length>0&&(r.children=a)}return await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(e,r)}),o}async processSceneAsync(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const s={};e.name!==""&&(s.name=e.name),t.scenes.push(s);const r=[];for(let o=0,a=e.children.length;o<a;o++){const l=e.children[o];if(l.visible||n.onlyVisible===!1){const c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(s.nodes=r),this.serializeUserData(e,s)}async processObjectsAsync(e){const t=new gr;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){const t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(e)});const n=[];for(let s=0;s<e.length;s++)e[s]instanceof gr?await this.processSceneAsync(e[s]):n.push(e[s]);n.length>0&&await this.processObjectsAsync(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<t.animations.length;++s)this.processAnimation(t.animations[s],e[0]);await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}}class xx{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,s=n.json,r=n.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);const a=s.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}}class vx{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;const s=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},s[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class Mx{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){const o={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(o,e.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const o={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){const o={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(o.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(o,e.clearcoatNormalMap),r.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class bx{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const s=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class Ex{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){const o={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(o,e.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const o={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(o,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class Sx{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){const o={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(o,e.transmissionMap),r.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class Tx{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){const o={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(o,e.thicknessMap),r.thicknessTexture=o}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class wx{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const s=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class Ax{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(cx)&&!e.specularIntensityMap&&!e.specularColorMap)return;const n=this.writer,s=n.extensionsUsed,r={};if(e.specularIntensityMap){const o={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(o,e.specularIntensityMap),r.specularTexture=o}if(e.specularColorMap){const o={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(o,e.specularColorMap),r.specularColorTexture=o}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class Rx{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const n=this.writer,s=n.extensionsUsed,r={};if(e.sheenRoughnessMap){const o={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(o,e.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(e.sheenColorMap){const o={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(o,e.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class Cx{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const n=this.writer,s=n.extensionsUsed,r={};if(e.anisotropyMap){const o={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(o,e.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class Lx{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const s=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class Ix{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const n=this.writer,s=n.extensionsUsed,r={};if(e.bumpMap){const o={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(o,e.bumpMap),r.bumpTexture=o}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class Nx{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const n=this.writer,s=e,r=new Float32Array(s.count*3),o=new Float32Array(s.count*4),a=new Float32Array(s.count*3),l=new je,c=new O,d=new Cn,u=new O;for(let f=0;f<s.count;f++)s.getMatrixAt(f,l),l.decompose(c,d,u),c.toArray(r,f*3),d.toArray(o,f*4),u.toArray(a,f*3);const h={TRANSLATION:n.processAccessor(new Bt(r,3)),ROTATION:n.processAccessor(new Bt(o,4)),SCALE:n.processAccessor(new Bt(a,3))};s.instanceColor&&(h._COLOR_0=n.processAccessor(s.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:h},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}_r.Utils={insertKeyframe:function(i,e){const n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),r=new i.ValueBufferType(i.values.length+n),o=i.createInterpolant(new i.ValueBufferType(n));let a;if(i.times.length===0){s[0]=e;for(let l=0;l<n;l++)r[l]=0;a=0}else if(e<i.times[0]){if(Math.abs(i.times[0]-e)<.001)return 0;s[0]=e,s.set(i.times,1),r.set(o.evaluate(e),0),r.set(i.values,n),a=0}else if(e>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-e)<.001)return i.times.length-1;s[s.length-1]=e,s.set(i.times,0),r.set(i.values,0),r.set(o.evaluate(e),i.values.length),a=s.length-1}else for(let l=0;l<i.times.length;l++){if(Math.abs(i.times[l]-e)<.001)return l;if(i.times[l]<e&&i.times[l+1]>e){s.set(i.times.slice(0,l+1),0),s[l+1]=e,s.set(i.times.slice(l+1),l+2),r.set(i.values.slice(0,(l+1)*n),0),r.set(o.evaluate(e),(l+1)*n),r.set(i.values.slice((l+1)*n),(l+2)*n),a=l+1;break}}return i.times=s,i.values=r,a},mergeMorphTargetTracks:function(i,e){const t=[],n={},s=i.tracks;for(let r=0;r<s.length;++r){let o=s[r];const a=St.parseTrackName(o.name),l=St.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(Is)}const c=l.morphTargetInfluences.length,d=l.morphTargetDictionary[a.propertyIndex];if(d===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let u;if(n[l.uuid]===void 0){u=o.clone();const f=new u.ValueBufferType(c*u.times.length);for(let y=0;y<u.times.length;y++)f[y*c+d]=u.values[y];u.name=(a.nodeName||"")+".morphTargetInfluences",u.values=f,n[l.uuid]=u,t.push(u);continue}const h=o.createInterpolant(new o.ValueBufferType(1));u=n[l.uuid];for(let f=0;f<u.times.length;f++)u.values[f*c+d]=h.evaluate(u.times[f]);for(let f=0;f<o.times.length;f++){const y=this.insertKeyframe(u,o.times[f]);u.values[y*c+d]=o.values[f]}}return i.tracks=t,i},toFloat32BufferAttribute:function(i){const e=new Bt(new Float32Array(i.count*i.itemSize),i.itemSize,!1);if(!i.normalized&&!i.isInterleavedBufferAttribute)return e.array.set(i.array),e;for(let t=0,n=i.count;t<n;t++)for(let s=0;s<i.itemSize;s++)e.setComponent(t,s,i.getComponent(t,s));return e}};class Px{parse(e){let t="",n=0,s=0,r=0;const o=new O,a=new Be,l=new O,c=new nt,d=[];function u(y){let _=0,g=0,m=0;const w=y.geometry,E=new ct,x=w.getAttribute("position"),I=w.getAttribute("normal"),N=w.getAttribute("uv"),P=w.getIndex();if(t+="o "+y.name+`
`,y.material&&y.material.name&&(t+="usemtl "+y.material.name+`
`),x!==void 0)for(let U=0,T=x.count;U<T;U++,_++)o.fromBufferAttribute(x,U),o.applyMatrix4(y.matrixWorld),t+="v "+o.x+" "+o.y+" "+o.z+`
`;if(N!==void 0)for(let U=0,T=N.count;U<T;U++,m++)c.fromBufferAttribute(N,U),t+="vt "+c.x+" "+c.y+`
`;if(I!==void 0){E.getNormalMatrix(y.matrixWorld);for(let U=0,T=I.count;U<T;U++,g++)l.fromBufferAttribute(I,U),l.applyMatrix3(E).normalize(),t+="vn "+l.x+" "+l.y+" "+l.z+`
`}if(P!==null)for(let U=0,T=P.count;U<T;U+=3){for(let b=0;b<3;b++){const D=P.getX(U+b)+1;d[b]=n+D+(I||N?"/"+(N?s+D:"")+(I?"/"+(r+D):""):"")}t+="f "+d.join(" ")+`
`}else for(let U=0,T=x.count;U<T;U+=3){for(let b=0;b<3;b++){const D=U+b+1;d[b]=n+D+(I||N?"/"+(N?s+D:"")+(I?"/"+(r+D):""):"")}t+="f "+d.join(" ")+`
`}n+=_,s+=m,r+=g}function h(y){let _=0;const g=y.geometry,m=y.type,w=g.getAttribute("position");if(t+="o "+y.name+`
`,w!==void 0)for(let E=0,x=w.count;E<x;E++,_++)o.fromBufferAttribute(w,E),o.applyMatrix4(y.matrixWorld),t+="v "+o.x+" "+o.y+" "+o.z+`
`;if(m==="Line"){t+="l ";for(let E=1,x=w.count;E<=x;E++)t+=n+E+" ";t+=`
`}if(m==="LineSegments")for(let E=1,x=E+1,I=w.count;E<I;E+=2,x=E+1)t+="l "+(n+E)+" "+(n+x)+`
`;n+=_}function f(y){let _=0;const g=y.geometry,m=g.getAttribute("position"),w=g.getAttribute("color");if(t+="o "+y.name+`
`,m!==void 0){for(let E=0,x=m.count;E<x;E++,_++)o.fromBufferAttribute(m,E),o.applyMatrix4(y.matrixWorld),t+="v "+o.x+" "+o.y+" "+o.z,w!==void 0&&(a.fromBufferAttribute(w,E),pt.workingToColorSpace(a,Nt),t+=" "+a.r+" "+a.g+" "+a.b),t+=`
`;t+="p ";for(let E=1,x=m.count;E<=x;E++)t+=n+E+" ";t+=`
`}n+=_}return e.traverse(function(y){y.isMesh===!0&&u(y),y.isLine===!0&&h(y),y.isPoints===!0&&f(y)}),t}}class Dx{parse(e,t={}){t=Object.assign({binary:!1},t);const n=t.binary,s=[];let r=0;e.traverse(function(m){if(m.isMesh){const w=m.geometry,E=w.index,x=w.getAttribute("position");r+=E!==null?E.count/3:x.count/3,s.push({object3d:m,geometry:w})}});let o,a=80;if(n===!0){const m=r*2+r*3*4*4+80+4,w=new ArrayBuffer(m);o=new DataView(w),o.setUint32(a,r,!0),a+=4}else o="",o+=`solid exported
`;const l=new O,c=new O,d=new O,u=new O,h=new O,f=new O;for(let m=0,w=s.length;m<w;m++){const E=s[m].object3d,x=s[m].geometry,I=x.index,N=x.getAttribute("position");if(I!==null)for(let P=0;P<I.count;P+=3){const U=I.getX(P+0),T=I.getX(P+1),b=I.getX(P+2);y(U,T,b,N,E)}else for(let P=0;P<N.count;P+=3){const U=P+0,T=P+1,b=P+2;y(U,T,b,N,E)}}return n===!1&&(o+=`endsolid exported
`),o;function y(m,w,E,x,I){l.fromBufferAttribute(x,m),c.fromBufferAttribute(x,w),d.fromBufferAttribute(x,E),I.isSkinnedMesh===!0&&(I.applyBoneTransform(m,l),I.applyBoneTransform(w,c),I.applyBoneTransform(E,d)),l.applyMatrix4(I.matrixWorld),c.applyMatrix4(I.matrixWorld),d.applyMatrix4(I.matrixWorld),_(l,c,d),g(l),g(c),g(d),n===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function _(m,w,E){u.subVectors(E,w),h.subVectors(m,w),u.cross(h).normalize(),f.copy(u).normalize(),n===!0?(o.setFloat32(a,f.x,!0),a+=4,o.setFloat32(a,f.y,!0),a+=4,o.setFloat32(a,f.z,!0),a+=4):(o+="	facet normal "+f.x+" "+f.y+" "+f.z+`
`,o+=`		outer loop
`)}function g(m){n===!0?(o.setFloat32(a,m.x,!0),a+=4,o.setFloat32(a,m.y,!0),a+=4,o.setFloat32(a,m.z,!0),a+=4):o+="			vertex "+m.x+" "+m.y+" "+m.z+`
`}}}let p={camera:null,scene:null,renderer:null,model:null,lights:{},zoom:1,currentModelType:"Default Torus Knot",presets:JSON.parse(localStorage.getItem("viewerPresets")||"{}"),lightingMode:"basic",materialMode:"default",transparencyMode:"standard",objectTransparency:1,surfaceTransparency:1,surfaceExtractionMode:"none",surfaceExtractionEnabled:!1,alphaValue:.1,raycastSamples:16,visibilityThreshold:.6,maxRayDistance:10,modelYaw:0,modelPitch:0,modelRoll:0,guideLines:[{id:0,thickness:5,colour:"#FFFF66",transparency:.5,angle:0,posY:0}],orientationWidget:{enabled:!0,size:{width:120,height:120},position:{x:10,y:50},camera:null,scene:null,axesHelper:null,compass:null,lastModelRotation:{x:0,y:0,z:0}},lightDisplayMode:"arrows",leftLightDirectionIn:!0,rightLightDirectionIn:!0,assembly:{mode:"basic",models:new Map,activeModel:null,hierarchy:[],tools:{snapGrid:!1,gridSize:1,measurements:[],showWireframes:!1,showGrid:!1,isolateMode:!1},ui:{modelListVisible:!0,transformPanelVisible:!0,hierarchyPanelVisible:!0}}},Tt={isDragging:!1,isLeftButton:!1,isRightButton:!1,isCtrlDrag:!1,previousMousePosition:{x:0,y:0}};const vs=new Map;function Ux(){return"model-"+Date.now()+"-"+Math.random().toString(36).substr(2,9)}function Sr(){if(p.assembly.mode==="basic")return p.model;if(p.assembly.models.size===0)return null;if(p.assembly.activeModel){const i=p.assembly.models.get(p.assembly.activeModel);if(i&&i.selected)return i.mesh}if(!p.scene.userData.assemblyRotationGroup){const i=new xn;i.name="AssemblyRotationGroup",p.scene.userData.assemblyRotationGroup=i}return p.scene.userData.assemblyRotationGroup}function Fx(i){p.assembly.mode==="basic"||p.assembly.activeModel||p.assembly.models.forEach(e=>{e.mesh&&e.visible&&!e.locked&&e.mesh.quaternion.premultiply(i.clone())})}class eh{constructor(e,t,n,s){this.id=Ux(),this.name=n||"Unnamed Model",this.fileType=s||"unknown",this.geometry=e,this.material=t,this.mesh=null,this.originalObject=null,this.transform={position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scale:{x:1,y:1,z:1}},this.parent=null,this.children=[],this.visible=!0,this.locked=!1,this.selected=!1,this.boundingBox=null,this.originalMaterial=null,this.createdAt=Date.now()}createMesh(){return!this.geometry||!this.material?(console.warn(`Cannot create mesh for ${this.name}: missing geometry or material`),null):(this.mesh=new $t(this.geometry,this.material),this.mesh.userData.modelId=this.id,this.mesh.userData.modelComponent=this,this.applyTransform(),this.calculateBoundingBox(),this.mesh)}applyTransform(){this.mesh&&(this.mesh.position.set(this.transform.position.x,this.transform.position.y,this.transform.position.z),this.mesh.rotation.set(this.transform.rotation.x,this.transform.rotation.y,this.transform.rotation.z),this.mesh.scale.set(this.transform.scale.x,this.transform.scale.y,this.transform.scale.z))}updateTransformFromMesh(){this.mesh&&(this.transform.position.x=this.mesh.position.x,this.transform.position.y=this.mesh.position.y,this.transform.position.z=this.mesh.position.z,this.transform.rotation.x=this.mesh.rotation.x,this.transform.rotation.y=this.mesh.rotation.y,this.transform.rotation.z=this.mesh.rotation.z,this.transform.scale.x=this.mesh.scale.x,this.transform.scale.y=this.mesh.scale.y,this.transform.scale.z=this.mesh.scale.z)}calculateBoundingBox(){this.mesh&&(this.boundingBox=new an().setFromObject(this.mesh))}setSelected(e){this.selected!==e&&(this.selected=e,this.mesh&&(e?(this.originalEmissive||(this.originalEmissive={color:this.mesh.material.emissive.clone(),intensity:this.mesh.material.emissiveIntensity}),this.mesh.material.emissive.equals(new Be(4473924))||(this.mesh.material.emissive.setHex(4473924),this.mesh.material.emissiveIntensity=.3,this.mesh.material.needsUpdate=!0)):this.originalEmissive&&(this.mesh.material.emissive.equals(this.originalEmissive.color)||(this.mesh.material.emissive.copy(this.originalEmissive.color),this.mesh.material.emissiveIntensity=this.originalEmissive.intensity,this.mesh.material.needsUpdate=!0))))}setVisible(e){this.visible=e,this.mesh&&(this.mesh.visible=e)}exportData(){return{id:this.id,name:this.name,fileType:this.fileType,transform:{...this.transform},visible:this.visible,locked:this.locked,parentId:this.parent?this.parent.id:null,childIds:this.children.map(e=>e.id),createdAt:this.createdAt}}dispose(){this.mesh&&(this.mesh.geometry&&this.mesh.geometry.dispose(),this.mesh.material&&(Array.isArray(this.mesh.material)?this.mesh.material.forEach(e=>e.dispose()):this.mesh.material.dispose())),this.originalMaterial&&this.originalMaterial.dispose()}}function Ox(){console.log("🔧 Initializing Developer Console Assembly System..."),_e("enterDeveloperConsol","click",()=>{p.assembly.mode==="basic"?th():Bx()}),ih(),console.log("✅ Developer Console initialized successfully")}function th(){console.log("🚀 Entering Developer Assembly Mode..."),p.assembly.mode="developer";const i=document.getElementById("enterDeveloperConsol");i&&(i.textContent="EXIT DEVELOPER MODE",i.classList.add("active")),kx();const e=document.getElementById("relativePositionGroup");e&&(e.style.display="block"),p.scene&&(p.scene.background=new Be(16316664)),Xx(),p.model&&dv(),mv(),rt("🔧 Developer Assembly Mode Active - Drop multiple files to create assemblies","info"),console.log("✅ Developer Assembly Mode activated")}function Bx(){console.log("🔄 Exiting Developer Assembly Mode..."),p.assembly.mode="basic";const i=document.getElementById("enterDeveloperConsol");i&&(i.textContent="DEVELOPER CONSOL",i.classList.remove("active")),fv();const e=document.getElementById("relativePositionGroup");e&&(e.style.display="none"),p.scene&&(p.scene.background=null),lc(),pv(),hv(),gv(),rt("Basic mode restored - Single model operations","info"),console.log("✅ Basic mode restored")}function kx(){zx(),document.querySelectorAll(".assembly-control").forEach(t=>t.style.display="block");const e=document.getElementById("dropZone");if(e){const t=e.querySelector(".upload-hint");t&&(t.innerHTML="Drop multiple files here<br><small>Supports: OBJ, STL, GLTF, GLB, DAE</small>")}}function zx(){let i=document.getElementById("assemblyPanel");if(i){i.style.display="block";return}const e=`
        <div id="assemblyPanel" class="control-section" data-section="assembly">
            <div class="section-header" tabindex="0" role="button" aria-expanded="true" aria-controls="assembly-content">
                <h3>Assembly (${p.assembly.models.size})</h3>
                <span class="collapse-icon" aria-hidden="true">−</span>
            </div>
            <div class="section-content" id="assembly-content">
                <div id="modelsList" class="models-list" style="margin-bottom: 15px;"></div>
                
                <div class="button-group-vertical" style="margin-bottom: 15px;">
                    <button id="selectAllModels" class="button secondary">Select All</button>
                    <button id="deselectAllModels" class="button orange">Deselect All</button>
                    <button id="deleteSelectedModels" class="button danger">Delete Selected</button>
                </div>
                
                
                <div style="margin-bottom: 15px;">
                    <h4 style="margin: 10px 0 5px 0; font-size: 12px; color: #555;">Assembly Tools</h4>
                    <div class="tool-controls">
                        <label class="checkbox-label">
                            <input type="checkbox" id="snapGrid" class="tool-checkbox">
                            Snap to Grid
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" id="showWireframes" class="tool-checkbox">
                            Show Wireframes
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" id="showGrid" class="tool-checkbox">
                            Show Grid
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" id="isolateMode" class="tool-checkbox">
                            Isolate Selected
                        </label>
                    </div>
                </div>
                
                <div class="button-group-vertical">
                    <button id="exportAssembly" class="button orange">Export Assembly</button>
                    <button id="saveAssembly" class="button blue">Save .3dassembly</button>
                    <button id="loadAssembly" class="button secondary">Load Assembly</button>
                </div>
            </div>
        </div>
    `,t=document.querySelector('[data-section="developer"]');t&&t.insertAdjacentHTML("beforebegin",e),Wx(),ih(),Vx(),p.assembly.models.size>0&&createTransformPanel()}function nh(){document.querySelectorAll('[data-section^="transform-"]').forEach(i=>i.remove()),p.assembly.models.forEach((i,e)=>{Hx(e,i.name)})}function Hx(i,e){const t=`transformPanel-${i}`,n=`transform-content-${i}`,s=`modelTransformControls-${i}`,r=p.assembly.models.get(i);if(!r)return;const o=`
        <div id="${t}" class="control-section" data-section="transform-${i}">
            <div class="section-header" tabindex="0" role="button" aria-expanded="true" aria-controls="${n}">
                <h3>${e.replace(/\.[^/.]+$/,"")}</h3>
                <span class="collapse-icon" aria-hidden="true">−</span>
            </div>
            <div class="section-content" id="${n}">
                <div id="${s}" class="transform-controls">
                    <div class="transform-group position">
                        <div class="control-group">
                            <label>Position X</label>
                            <div class="ambient-controls">
                                <input type="range" id="transformPosX-${i}" min="-10" max="10" step="0.1" value="${r.transform.position.x.toFixed(1)}" class="horizontal-slider">
                                <input type="number" id="transformPosXNum-${i}" min="-10" max="10" step="0.1" value="${r.transform.position.x.toFixed(1)}" class="slider-value transform-value">
                            </div>
                        </div>
                        <div class="control-group">
                            <label>Position Y</label>
                            <div class="ambient-controls">
                                <input type="range" id="transformPosY-${i}" min="-10" max="10" step="0.1" value="${r.transform.position.y.toFixed(1)}" class="horizontal-slider">
                                <input type="number" id="transformPosYNum-${i}" min="-10" max="10" step="0.1" value="${r.transform.position.y.toFixed(1)}" class="slider-value transform-value">
                            </div>
                        </div>
                        <div class="control-group">
                            <label>Position Z</label>
                            <div class="ambient-controls">
                                <input type="range" id="transformPosZ-${i}" min="-10" max="10" step="0.1" value="${r.transform.position.z.toFixed(1)}" class="horizontal-slider">
                                <input type="number" id="transformPosZNum-${i}" min="-10" max="10" step="0.1" value="${r.transform.position.z.toFixed(1)}" class="slider-value transform-value">
                            </div>
                        </div>
                        <button id="resetPosition-${i}" class="button secondary transform-reset-button">RESET POSITION</button>
                    </div>
                    
                    <div class="transform-group rotation">
                        <div class="control-group">
                            <label>Rotation X</label>
                            <div class="ambient-controls">
                                <input type="range" id="transformRotX-${i}" min="-180" max="180" step="1" value="${Math.round(r.transform.rotation.x)}" class="horizontal-slider">
                                <input type="number" id="transformRotXNum-${i}" min="-180" max="180" step="1" value="${Math.round(r.transform.rotation.x)}" class="slider-value transform-value">
                            </div>
                        </div>
                        <div class="control-group">
                            <label>Rotation Y</label>
                            <div class="ambient-controls">
                                <input type="range" id="transformRotY-${i}" min="-180" max="180" step="1" value="${Math.round(r.transform.rotation.y)}" class="horizontal-slider">
                                <input type="number" id="transformRotYNum-${i}" min="-180" max="180" step="1" value="${Math.round(r.transform.rotation.y)}" class="slider-value transform-value">
                            </div>
                        </div>
                        <div class="control-group">
                            <label>Rotation Z</label>
                            <div class="ambient-controls">
                                <input type="range" id="transformRotZ-${i}" min="-180" max="180" step="1" value="${Math.round(r.transform.rotation.z)}" class="horizontal-slider">
                                <input type="number" id="transformRotZNum-${i}" min="-180" max="180" step="1" value="${Math.round(r.transform.rotation.z)}" class="slider-value transform-value">
                            </div>
                        </div>
                        <button id="resetRotation-${i}" class="button orange transform-reset-button">RESET ROTATION</button>
                    </div>
                    
                    <div class="transform-group scale">
                        <div class="control-group">
                            <label>Scale</label>
                            <div class="ambient-controls">
                                <input type="range" id="transformScale-${i}" min="0.1" max="3" step="0.1" value="${r.transform.scale.x.toFixed(1)}" class="horizontal-slider">
                                <input type="number" id="transformScaleNum-${i}" min="0.1" max="3" step="0.1" value="${r.transform.scale.x.toFixed(1)}" class="slider-value transform-value">
                            </div>
                        </div>
                        <button id="resetScale-${i}" class="button blue transform-reset-button">RESET SCALE</button>
                    </div>
                </div>
            </div>
        </div>
    `,a=document.querySelector('[data-section="assembly"]'),l=document.querySelector('[data-section="developer"]');a?a.insertAdjacentHTML("afterend",o):l&&l.insertAdjacentHTML("beforebegin",o),Gx(i),dc()}function Gx(i){gt(`transformPosX-${i}`,`transformPosXNum-${i}`,()=>Ri(i)),gt(`transformPosY-${i}`,`transformPosYNum-${i}`,()=>Ri(i)),gt(`transformPosZ-${i}`,`transformPosZNum-${i}`,()=>Ri(i)),gt(`transformRotX-${i}`,`transformRotXNum-${i}`,()=>Ri(i)),gt(`transformRotY-${i}`,`transformRotYNum-${i}`,()=>Ri(i)),gt(`transformRotZ-${i}`,`transformRotZNum-${i}`,()=>Ri(i)),gt(`transformScale-${i}`,`transformScaleNum-${i}`,()=>Ri(i)),_e(`resetPosition-${i}`,"click",()=>Fa(i,"position")),_e(`resetRotation-${i}`,"click",()=>Fa(i,"rotation")),_e(`resetScale-${i}`,"click",()=>Fa(i,"scale"))}function Ri(i){const e=p.assembly.models.get(i);if(!e||!e.mesh)return;const t=parseFloat(document.getElementById(`transformPosX-${i}`)?.value||0),n=parseFloat(document.getElementById(`transformPosY-${i}`)?.value||0),s=parseFloat(document.getElementById(`transformPosZ-${i}`)?.value||0),r=parseFloat(document.getElementById(`transformRotX-${i}`)?.value||0),o=parseFloat(document.getElementById(`transformRotY-${i}`)?.value||0),a=parseFloat(document.getElementById(`transformRotZ-${i}`)?.value||0),l=parseFloat(document.getElementById(`transformScale-${i}`)?.value||1);e.mesh.position.set(t,n,s),e.mesh.rotation.set(Vt(r),Vt(o),Vt(a)),e.mesh.scale.setScalar(l),e.transform.position={x:t,y:n,z:s},e.transform.rotation={x:r,y:o,z:a},e.transform.scale={x:l,y:l,z:l}}function Fa(i,e){const t=p.assembly.models.get(i);if(!(!t||!t.mesh)){switch(e){case"position":H(`transformPosX-${i}`,"0"),H(`transformPosXNum-${i}`,"0"),H(`transformPosY-${i}`,"0"),H(`transformPosYNum-${i}`,"0"),H(`transformPosZ-${i}`,"0"),H(`transformPosZNum-${i}`,"0");break;case"rotation":H(`transformRotX-${i}`,"0"),H(`transformRotXNum-${i}`,"0"),H(`transformRotY-${i}`,"0"),H(`transformRotYNum-${i}`,"0"),H(`transformRotZ-${i}`,"0"),H(`transformRotZNum-${i}`,"0");break;case"scale":H(`transformScale-${i}`,"1"),H(`transformScaleNum-${i}`,"1");break}Ri(i)}}function Vx(){const i=document.querySelector("#assemblyPanel .section-header");i&&i.addEventListener("click",function(){const e=document.getElementById("assembly-content"),t=this.querySelector(".collapse-icon");this.getAttribute("aria-expanded")==="true"?(e.style.maxHeight="0px",e.style.opacity="0",t.textContent="▼",this.setAttribute("aria-expanded","false")):(e.style.maxHeight="1000px",e.style.opacity="1",t.textContent="−",this.setAttribute("aria-expanded","true"))})}function ih(){_e("selectAllModels","click",$x),_e("deselectAllModels","click",jx),_e("deleteSelectedModels","click",Kx),_e("snapGrid","change",i=>{p.assembly.tools.snapGrid=i.target.checked,nv()}),_e("showWireframes","change",i=>{p.assembly.tools.showWireframes=i.target.checked,iv()}),_e("showGrid","change",i=>{p.assembly.tools.showGrid=i.target.checked,sv()}),_e("isolateMode","change",i=>{p.assembly.tools.isolateMode=i.target.checked,ov()}),_e("exportAssembly","click",Mv),_e("saveAssembly","click",hh),_e("loadAssembly","click",wv)}function Wx(){const i=document.getElementById("assemblyPanel");i&&(i.addEventListener("click",e=>{const t=e.target,n=t.dataset.action,s=t.dataset.modelId;let r=t;if(r.classList.contains("model-item")||(r=t.closest(".model-item")),r&&r.classList.contains("model-item")&&!n){console.log("Model item clicked:",r.dataset.modelId);const o=r.dataset.modelId,a=p.assembly.models.get(o);if(a&&a.selected&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey&&Array.from(p.assembly.models.values()).filter(c=>c.selected).length===1){a.setSelected(!1),p.assembly.activeModel=null,Bn();return}oh(o,e)}else if(n&&s)switch(e.stopPropagation(),n){case"toggle-visibility":Zx(s);break;case"toggle-lock":Jx(s);break;case"delete-model":ah(s);break}else if(n)switch(n){case"reset-transform":ev();break;case"center-model":tv();break}}),i.addEventListener("change",e=>{const t=e.target;if(t.classList.contains("transform-input")){const n=t.dataset.transform,s=t.dataset.axis;let r=parseFloat(t.value);n==="rotation"&&(r=Vt(r)),Qx(n,s,r)}}))}function Xx(){const i=document.getElementById("dropZone");i&&(i._originalHandlers||(i._originalHandlers={drop:i.ondrop,dragover:i.ondragover}),i.addEventListener("drop",sh),i.addEventListener("dragover",e=>{e.preventDefault(),i.classList.add("dragover")}))}function sh(i){i.preventDefault();const e=document.getElementById("dropZone");e&&e.classList.remove("dragover");const t=Array.from(i.dataTransfer.files);t.length!==0&&(p.assembly.mode==="developer"?Il(t):(t.length>1&&rt("Multiple files detected. Enter Developer Mode for assembly features.","warning"),Fl(t[0])))}async function Il(i){console.log(`📦 Loading ${i.length} models into assembly...`),rt(`Loading ${i.length} models...`,"loading");let e=0,t=0;for(let n=0;n<i.length;n++){const s=i[n];try{const r=mh(s),o=await Yx(s,r);o?(rh(o),e++,rt(`Loaded ${e}/${i.length} models...`,"loading")):t++}catch(r){console.error(`Error loading ${s.name}:`,r),t++}}e>0?(rt(`✅ Loaded ${e} models successfully`+(t>0?` (${t} failed)`:""),t>0?"warning":"success"),Bn(),av()):rt("❌ Failed to load any models","error")}function Yx(i,e){return new Promise((t,n)=>{const s=URL.createObjectURL(i),r=i.name,o=(l,c,d)=>{try{const u=new eh(c,d,r,e);u.originalObject=l,qx(u),URL.revokeObjectURL(s),t(u)}catch(u){URL.revokeObjectURL(s),n(u)}},a=l=>{URL.revokeObjectURL(s),n(l)};switch(e){case"obj":yv(s,r,o,a);break;case"stl":_v(s,r,o,a);break;case"gltf":case"glb":xv(s,r,o,a);break;case"dae":vv(s,r,o,a);break;default:n(new Error(`Unsupported file format: ${e}`))}})}function qx(i){const e=Array.from(p.assembly.models.values());if(e.length===0)return;const t=e.length,n=t*60%360,s=Math.ceil(t/6)*3;i.transform.position.x=Math.cos(n*Math.PI/180)*s,i.transform.position.z=Math.sin(n*Math.PI/180)*s}function rh(i){p.assembly.models.set(i.id,i);const e=i.createMesh();e&&p.scene.add(e),Bn(),p.assembly.mode==="developer"&&nh(),console.log(`✅ Added model ${i.name} to assembly (${p.assembly.models.size} total)`)}function Bn(){const i=document.getElementById("modelsList");if(!i)return;const e=document.querySelector("#assemblyPanel h3");if(e&&(e.textContent=`Assembly (${p.assembly.models.size})`),i.innerHTML="",p.assembly.models.size===0){const t=document.createElement("div");t.className="model-item placeholder",t.innerHTML=`
            <div class="model-info">
                <span class="model-name">&lt;Model Title&gt;</span>
                <span class="model-type">&lt;.Extension/Format&gt;</span>
            </div>
            <div class="model-controls">
                <button class="btn-visibility hidden" disabled>👁</button>
                <button class="btn-lock unlocked" disabled>🔓</button>
                <button class="btn-delete" disabled>🗑</button>
            </div>
        `,i.appendChild(t)}else p.assembly.models.forEach((t,n)=>{const s=document.createElement("div");s.className=`model-item ${t.selected?"selected":""}`,s.dataset.modelId=n,s.innerHTML=`
                <div class="model-info">
                    <span class="model-name">${t.name}</span>
                    <span class="model-type">.${t.fileType}</span>
                </div>
                <div class="model-controls">
                    <button class="btn-visibility ${t.visible?"visible":"hidden"}" 
                            data-action="toggle-visibility" data-model-id="${n}">👁</button>
                    <button class="btn-lock ${t.locked?"locked":"unlocked"}" 
                            data-action="toggle-lock" data-model-id="${n}">${t.locked?"🔒":"🔓"}</button>
                    <button class="btn-delete" data-action="delete-model" data-model-id="${n}">🗑</button>
                </div>
            `,i.appendChild(s)})}function vo(){Bn(),p.assembly.mode==="developer"&&nh();const i=document.getElementById("assemblyPanel");if(i){if(i.style.display="block",p.assembly.activeModel){const e=p.assembly.models.get(p.assembly.activeModel);e&&console.log(`Active model: ${e.name}`)}p.assembly.models.size===0&&document.querySelectorAll('[data-section^="transform-"]').forEach(e=>e.remove())}}function oh(i,e=null){const t=p.assembly.models.get(i);if(!t)return;if(e&&(e.ctrlKey||e.metaKey))if(t.setSelected(!t.selected),t.selected)p.assembly.activeModel=i;else{let s=null;p.assembly.models.forEach((r,o)=>{r.selected&&!s&&(s=o)}),p.assembly.activeModel=s}else if(e&&e.shiftKey&&p.assembly.activeModel){const s=Array.from(p.assembly.models.keys()),r=s.indexOf(i),o=s.indexOf(p.assembly.activeModel);if(r!==-1&&o!==-1){const a=Math.min(r,o),l=Math.max(r,o);p.assembly.models.forEach(c=>c.setSelected(!1));for(let c=a;c<=l;c++){const d=p.assembly.models.get(s[c]);d&&d.setSelected(!0)}p.assembly.activeModel=i}}else p.assembly.models.forEach(s=>s.setSelected(!1)),t.setSelected(!0),p.assembly.activeModel=i;Bn();const n=Array.from(p.assembly.models.values()).filter(s=>s.selected);n.length===1?oc(n[0]):ac(),ut(),console.log(`Selected model: ${t.name}`)}function $x(){p.assembly.models.forEach(i=>i.setSelected(!0)),Bn(),ut()}function jx(){p.assembly.models.forEach(i=>i.setSelected(!1)),p.assembly.activeModel=null,ac(),Bn(),ut()}function Kx(){const i=[];if(p.assembly.models.forEach((e,t)=>{e.selected&&i.push(t)}),i.length===0){rt("No models selected for deletion","warning");return}confirm(`Delete ${i.length} selected models?`)&&i.forEach(e=>ah(e))}function ah(i){const e=p.assembly.models.get(i);e&&(e.mesh&&(p.scene.remove(e.mesh),e.dispose()),p.assembly.models.delete(i),p.assembly.activeModel===i&&(p.assembly.activeModel=null,ac()),vo(),console.log(`Deleted model: ${e.name}`))}function Zx(i){const e=p.assembly.models.get(i);e&&(e.setVisible(!e.visible),Bn())}function Jx(i){const e=p.assembly.models.get(i);e&&(e.locked=!e.locked,Bn())}function oc(i){const e=document.getElementById("transformSection"),t=document.getElementById("modelTransformControls");!e||!t||(t.innerHTML=`
        <div class="transform-group">
            <label>Position</label>
            <div class="coordinate-controls">
                <input type="number" class="transform-input" value="${i.transform.position.x.toFixed(3)}" 
                       step="0.1" data-transform="position" data-axis="x">
                <input type="number" class="transform-input" value="${i.transform.position.y.toFixed(3)}" 
                       step="0.1" data-transform="position" data-axis="y">
                <input type="number" class="transform-input" value="${i.transform.position.z.toFixed(3)}" 
                       step="0.1" data-transform="position" data-axis="z">
            </div>
        </div>
        
        <div class="transform-group">
            <label>Rotation (degrees)</label>
            <div class="coordinate-controls">
                <input type="number" class="transform-input" value="${st(i.transform.rotation.x).toFixed(1)}" 
                       step="5" data-transform="rotation" data-axis="x">
                <input type="number" class="transform-input" value="${st(i.transform.rotation.y).toFixed(1)}" 
                       step="5" data-transform="rotation" data-axis="y">
                <input type="number" class="transform-input" value="${st(i.transform.rotation.z).toFixed(1)}" 
                       step="5" data-transform="rotation" data-axis="z">
            </div>
        </div>
        
        <div class="transform-group">
            <label>Scale</label>
            <div class="coordinate-controls">
                <input type="number" class="transform-input" value="${i.transform.scale.x.toFixed(3)}" 
                       step="0.1" min="0.01" data-transform="scale" data-axis="x">
                <input type="number" class="transform-input" value="${i.transform.scale.y.toFixed(3)}" 
                       step="0.1" min="0.01" data-transform="scale" data-axis="y">
                <input type="number" class="transform-input" value="${i.transform.scale.z.toFixed(3)}" 
                       step="0.1" min="0.01" data-transform="scale" data-axis="z">
            </div>
        </div>
        
        <div class="transform-actions">
            <button data-action="reset-transform">Reset Transform</button>
            <button data-action="center-model">Center Model</button>
        </div>
    `,e.style.display="block")}function ac(){const i=document.getElementById("transformSection");i&&(i.style.display="none")}function Qx(i,e,t){const n=p.assembly.models.get(p.assembly.activeModel);if(!n||n.locked)return;const s=parseFloat(t);if(isNaN(s))return;let r=s;if(p.assembly.tools.snapGrid&&i==="position"&&(r=Math.round(s/p.assembly.tools.gridSize)*p.assembly.tools.gridSize),n.transform[i][e]=r,n.applyTransform(),r!==s){const o=`model-${i.charAt(0)}${i==="rotation"?"ot":i==="position"?"os":"cale"}-${e}`,a=document.getElementById(o);a&&(a.value=i==="rotation"?st(r).toFixed(1):r.toFixed(3))}}function ev(){const i=p.assembly.models.get(p.assembly.activeModel);!i||i.locked||(i.transform={position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scale:{x:1,y:1,z:1}},i.applyTransform(),oc(i))}function tv(){const i=p.assembly.models.get(p.assembly.activeModel);if(!i||i.locked)return;const e=Fs();if(e){const t=e.getCenter(new O);i.transform.position.x=-t.x,i.transform.position.y=-t.y,i.transform.position.z=-t.z,i.applyTransform(),oc(i)}}function nv(){console.log(`Snap to grid: ${p.assembly.tools.snapGrid?"enabled":"disabled"}`)}function iv(){const i=p.assembly.tools.showWireframes;p.assembly.models.forEach(e=>{e.mesh&&e.mesh.material&&(e.mesh.material.wireframe=i)}),console.log(`Wireframes: ${i?"enabled":"disabled"}`)}function sv(){const i=p.assembly.tools.showGrid;i?rv():lc(),console.log(`Floor grid: ${i?"enabled":"disabled"}`)}function rv(){lc();const i=20,e=20,t=new br(i,i),n=new Yn({color:16382457,transparent:!0,opacity:.5,side:_n}),s=new $t(t,n);s.rotation.x=-Math.PI/2,s.position.y=-.01,s.name="floorGrid";const r=new Hp(i,e,13421772,14540253);r.name="gridLines",r.position.y=-.005,p.scene.add(s),p.scene.add(r)}function lc(){const i=[];p.scene.traverse(e=>{(e.name==="floorGrid"||e.name==="gridLines")&&i.push(e)}),i.forEach(e=>{p.scene.remove(e),e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}function ov(){const i=p.assembly.tools.isolateMode;i?p.assembly.models.forEach(e=>{e.setVisible(e.selected)}):p.assembly.models.forEach(e=>{e.setVisible(!0)}),Bn(),console.log(`Isolate mode: ${i?"enabled":"disabled"}`)}function av(){if(p.assembly.models.size===0)return;const i=Fs();if(!i)return;const e=i.getCenter(new O),t=i.getSize(new O),s=Math.max(t.x,t.y,t.z)*2;p.camera.position.set(s,s,s),p.camera.lookAt(e),cc(s,t),console.log(`Assembly centered and scaled - ${p.assembly.models.size} models`)}function cc(i,e){const t=Math.max(e.x,e.y,e.z),n=Math.max(5,t/2),s=Math.max(i*n,t*10),r=Math.max(i*5,t*20);lv(r),[{id:"posX",min:-s,max:s},{id:"posY",min:-s,max:s},{id:"posZ",min:.1,max:r}].forEach(a=>{const l=document.getElementById(a.id),c=document.getElementById(a.id+"Num");l&&(l.min=a.min,l.max=a.max),c&&(c.min=a.min,c.max=a.max)}),console.log(`Updated camera ranges for large models: X/Y: ±${Math.round(s)}, Z: 0.1-${Math.round(r)}, Model size: ${Math.round(t)}`)}function lv(i){if(!p.camera)return;const t=i*2.5,n=p.camera.far;t>n&&(p.camera.far=Math.max(t,1e4),p.camera.updateProjectionMatrix(),console.log(`Updated camera far plane from ${n} to ${p.camera.far} for large model support`))}function lh(i){if(!i||i.isEmpty())return 5;const e=p.camera.fov*(Math.PI/180),t=i.getSize(new O),n=Math.max(t.x,t.y,t.z),s=n/2/Math.tan(e/2),r=2*Math.atan(Math.tan(e/2)*p.camera.aspect),o=n/2/Math.tan(r/2);return Math.max(s,o)*1.1}function ch(i){if(!i||i.isEmpty())return 100;const e=i.getSize(new O),t=Math.max(e.x,e.y,e.z),n=.02,s=p.camera.fov*(Math.PI/180),o=t/2/Math.tan(s/2)/n;return Math.min(o,1e3)}function Co(){if(p.assembly.mode==="developer"&&p.assembly.models.size>0){let i=null,e=0;return p.assembly.models.forEach(t=>{if(t.mesh){const n=new an().setFromObject(t.mesh),s=n.getSize(new O),r=s.x*s.y*s.z;r>e&&(e=r,i=n)}}),i||Fs()}else{const i=Sr();return i?new an().setFromObject(i):null}}function Nl(i,e){if(!e||e.isEmpty())return 5;const t=lh(e),n=ch(e);if(n<=t)return t*1.5;const s=i/360,r=Math.pow(s,1.8);return t+(n-t)*r}function uh(i,e){if(!e||e.isEmpty())return 180;const t=lh(e),n=ch(e),r=(Math.max(t,Math.min(n,i))-t)/(n-t),o=Math.pow(r,1/1.8)*360;return Math.round(o)}function cv(i){const e=document.getElementById("relativePosition"),t=document.getElementById("relativePositionNum");e&&(e.value=i),t&&(t.value=i)}function uv(){const i=Co();if(!i)return 180;const e=p.camera.position.length();return uh(e,i)}function Fs(){if(p.assembly.models.size===0)return null;const i=new an;return p.assembly.models.forEach(e=>{if(e.mesh){const t=new an().setFromObject(e.mesh);t.isEmpty()||i.union(t)}}),i.isEmpty()?null:i}function dv(){if(!p.model)return;console.log("Converting current model to assembly...");let i=null,e=null;if(p.model.isMesh?(i=p.model.geometry,e=p.model.material):p.model.traverse(t=>{t.isMesh&&!i&&(i=t.geometry,e=t.material)}),i&&e){const t=new eh(i,e,p.currentModelType,"converted");rh(t),p.scene.remove(p.model),p.model=null}}function hv(){if(p.assembly.models.size!==0){if(p.assembly.models.size===1){const i=Array.from(p.assembly.models.values())[0];i.mesh&&(p.model=i.mesh,p.currentModelType=i.name)}else{const i=new xn;p.assembly.models.forEach(e=>{e.mesh&&i.add(e.mesh.clone())}),p.model=i,p.currentModelType=`Assembly (${p.assembly.models.size} models)`}dh()}}function dh(){p.assembly.models.forEach(i=>i.dispose()),p.assembly.models.clear(),p.assembly.activeModel=null}function fv(){const i=document.getElementById("assemblyPanel");i&&(i.style.display="none")}function pv(){const i=document.getElementById("dropZone");!i||!i._originalHandlers||(i.removeEventListener("drop",sh),i.ondrop=i._originalHandlers.drop,i.ondragover=i._originalHandlers.dragover)}function mv(){const i=document.getElementById("model-rotation-display");i&&(i.textContent=`Assembly (${p.assembly.models.size} models)`)}function gv(){document.getElementById("model-rotation-display")&&p.model&&ut()}function yv(i,e,t,n){new qd().load(i,r=>{try{let o=null,a=null;r.traverse(l=>{l.isMesh&&!o&&(o=l.geometry,a=new kn({color:5025616,metalness:.1,roughness:.8,transparent:!1,opacity:1,side:Kt}))}),o&&a?t(r,o,a):n("No valid geometry found in OBJ file")}catch(o){n("Error processing OBJ: "+o.message)}},void 0,r=>{n("Error loading OBJ: "+r.message)})}function _v(i,e,t,n){new $d().load(i,r=>{try{const o=new kn({color:5025616,metalness:.1,roughness:.8,transparent:!1,opacity:1,side:Kt}),a=new $t(r,o);t(a,r,o)}catch(o){n("Error processing STL: "+o.message)}},void 0,r=>{n("Error loading STL: "+r.message)})}function xv(i,e,t,n){new jd().load(i,r=>{try{const o=r.scene;let a=null,l=null;o.traverse(c=>{c.isMesh&&!a&&(a=c.geometry,l=c.material||new kn({color:5025616,metalness:.1,roughness:.8}))}),a&&l?t(o,a,l):n("No valid geometry found in GLTF file")}catch(o){n("Error processing GLTF: "+o.message)}},void 0,r=>{n("Error loading GLTF: "+r.message)})}function vv(i,e,t,n){new Jd().load(i,r=>{try{const o=r.scene;let a=null,l=null;o.traverse(c=>{c.isMesh&&!a&&(a=c.geometry,l=c.material||new kn({color:5025616,metalness:.1,roughness:.8}))}),a&&l?t(o,a,l):n("No valid geometry found in DAE file")}catch(o){n("Error processing DAE: "+o.message)}},void 0,r=>{n("Error loading DAE: "+r.message)})}function Mv(){if(p.assembly.models.size===0){rt("No models in assembly to export","warning");return}switch(prompt(`Export Assembly:

${["Combined GLTF","Individual Models","Assembly Data (.3dassembly)"].map((t,n)=>`${n+1}. ${t}`).join(`
`)}

Enter choice (1-3):`)){case"1":bv();break;case"2":Ev();break;case"3":hh();break;default:rt("Export cancelled","info")}}function bv(){if(p.assembly.models.size===0){rt("No models in assembly to export","warning");return}rt("Exporting assembly as GLTF...","info");const i=new xn;i.name="Assembly",p.assembly.models.forEach(t=>{if(t.mesh&&t.visible){const n=t.mesh.clone();n.material=t.mesh.material.clone(),i.add(n)}}),new _r().parse(i,function(t){const n=new Blob([t],{type:"application/octet-stream"}),s=document.createElement("a");s.href=URL.createObjectURL(n),s.download=`assembly_${Date.now()}.glb`,s.click(),URL.revokeObjectURL(s.href),rt(`Assembly exported as GLTF (${p.assembly.models.size} models)`,"success")},function(t){console.error("GLTF Export Error:",t),rt("Error exporting GLTF: "+t.message,"error")},{binary:!0})}function Ev(){if(p.assembly.models.size===0){rt("No models in assembly to export","warning");return}rt(`Exporting ${p.assembly.models.size} individual models...`,"info");let i=0,e=0;p.assembly.models.forEach((t,n)=>{if(!t.mesh||!t.visible)return;const s=t.mesh,r=t.fileType.toLowerCase(),o=`${t.name}_${Date.now()}`;try{switch(r){case"gltf":case"glb":ju(s,o);break;case"obj":Sv(s,o);break;case"stl":Tv(s,o);break;default:ju(s,o);break}i++}catch(a){console.error(`Error exporting ${t.name}:`,a),e++}}),setTimeout(()=>{e===0?rt(`✅ Successfully exported ${i} models`,"success"):rt(`⚠️ Exported ${i} models (${e} errors)`,"warning")},1e3)}function ju(i,e){new _r().parse(i,function(n){const s=new Blob([n],{type:"application/octet-stream"}),r=document.createElement("a");r.href=URL.createObjectURL(s),r.download=`${e}.glb`,r.click(),URL.revokeObjectURL(r.href)},function(n){throw n},{binary:!0})}function Sv(i,e){const n=new Px().parse(i),s=new Blob([n],{type:"text/plain"}),r=document.createElement("a");r.href=URL.createObjectURL(s),r.download=`${e}.obj`,r.click(),URL.revokeObjectURL(r.href)}function Tv(i,e){const n=new Dx().parse(i),s=new Blob([n],{type:"application/octet-stream"}),r=document.createElement("a");r.href=URL.createObjectURL(s),r.download=`${e}.stl`,r.click(),URL.revokeObjectURL(r.href)}function hh(){if(p.assembly.models.size===0){rt("No models in assembly to save","warning");return}const i={version:"1.0",created:new Date().toISOString(),modelCount:p.assembly.models.size,models:[],settings:{tools:{...p.assembly.tools},ui:{...p.assembly.ui}}};p.assembly.models.forEach(s=>{i.models.push(s.exportData())});const e=JSON.stringify(i,null,2),t=new Blob([e],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(t),n.download=`assembly_${Date.now()}.3dassembly`,n.click(),rt("✅ Assembly saved successfully","success")}function wv(){const i=document.createElement("input");i.type="file",i.accept=".3dassembly,.json",i.onchange=e=>{const t=e.target.files[0];if(!t)return;const n=new FileReader;n.onload=s=>{try{const r=JSON.parse(s.target.result);Av(r)}catch(r){rt("Error loading assembly file: "+r.message,"error")}},n.readAsText(t)},i.click()}function Av(i){if(console.log("Restoring assembly from saved data..."),!i.version||!i.models)throw new Error("Invalid assembly file format");p.assembly.mode==="basic"&&th(),dh(),rt(`Assembly structure loaded (${i.modelCount} models).
Note: Model files need to be re-imported.`,"warning"),i.settings&&(Object.assign(p.assembly.tools,i.settings.tools||{}),Object.assign(p.assembly.ui,i.settings.ui||{}))}function gs(i){return parseFloat(i).toFixed(2)}function st(i){return i*(180/Math.PI)}function Vt(i){return i*(Math.PI/180)}function H(i,e){const t=document.getElementById(i);t?t.value=e:console.warn(`Element with ID '${i}' not found for safeSetValue.`)}function rt(i,e="info"){const t=document.getElementById("uploadStatus");if(t){t.textContent=i,t.className=`upload-status ${e}`;const n=e==="loading"?0:e==="error"?5e3:3e3;n>0&&setTimeout(()=>{t.textContent===i&&(t.textContent="",t.className="upload-status")},n)}}function _e(i,e,t){const n=document.getElementById(i);n?(n.addEventListener(e,t),console.log(`Event listener added: ${i} -> ${e}`)):console.warn(`Element with ID '${i}' not found for safeAddEventListener.`)}class Rv{constructor(e={}){this.registry=new Map,this.debug=e.debug||!1,this.errorHandler=e.errorHandler||this.defaultErrorHandler,this.debug&&console.log("ControlSync initialized with debug mode")}register(e,t,n={}){try{const s=typeof e=="string"?document.getElementById(e):e,r=typeof t=="string"?document.getElementById(t):t;if(!s||!r)return this.errorHandler("Missing element(s)",{primary:typeof e=="string"?e:e?.id,secondary:typeof t=="string"?t:t?.id,primaryFound:!!s,secondaryFound:!!r});const o={type:n.type||"slider-number",valueType:n.valueType||"float",customValidator:n.customValidator||null,beforeSync:n.beforeSync||null,afterSync:n.afterSync||null,...n},a=`${s.id||"el1"}_${r.id||"el2"}`,l=[],c=u=>{this.sync(s,r,o,"primary-to-secondary"),o.onChange&&o.onChange()};s.addEventListener("input",c),l.push({element:s,event:"input",listener:c});const d=u=>{this.sync(r,s,o,"secondary-to-primary"),o.onChange&&o.onChange()};return r.addEventListener("input",d),l.push({element:r,event:"input",listener:d}),this.registry.set(a,{primary:s,secondary:r,config:o,listeners:l}),this.debug&&console.log(`ControlSync: Registered pair '${a}'`,{config:o}),!0}catch(s){return this.errorHandler("Registration failed",{error:s,primary:e,secondary:t,options:n})}}getRegistry(){const e={};return this.registry.forEach((t,n)=>{e[n]={primary:t.primary.id||t.primary.tagName,secondary:t.secondary.id||t.secondary.tagName,type:t.config.type,valueType:t.config.valueType}}),e}sync(e,t,n,s){try{let r=e.value;if(n.customValidator){const l=n.customValidator(r,e,t);if(l===!1)return;typeof l!="boolean"&&(r=l)}n.beforeSync&&n.beforeSync(r,e,t,s);const o=this.parseValue(r,n.valueType),a=this.formatValue(o,n.valueType);t.value!==a&&(t.value=a,n.afterSync&&n.afterSync(o,e,t,s),this.debug&&console.log("ControlSync sync:",{direction:s,value:r,source:e.id||e.tagName,target:t.id||t.tagName}))}catch(r){this.errorHandler("Sync error",{error:r,source:e,target:t,direction:s})}}parseValue(e,t){switch(t){case"int":return parseInt(e,10);case"float":return parseFloat(e);case"string":return String(e);default:return parseFloat(e)}}formatValue(e,t){if(isNaN(e))return"";switch(t){case"int":return Math.round(e).toString();case"float":return e.toString();case"string":return String(e);default:return e.toString()}}defaultErrorHandler(e,t){return console.error(`ControlSync Error: ${e}`,t),!1}destroy(){this.registry.forEach((e,t)=>{e.listeners.forEach(({element:n,event:s,listener:r})=>{n.removeEventListener(s,r)})}),this.registry.clear(),this.debug&&console.log("ControlSync: All pairs destroyed")}}const xr=new Rv({debug:!1});window.testControlSync=function(){console.log("=== ControlSync Registry ===");const i=xr.getRegistry();console.table(i),console.log(`Total synchronized pairs: ${Object.keys(i).length}`),console.log(`
=== Enabling Debug Mode ===`),Ku(!0),setTimeout(()=>{console.log(`
=== Disabling Debug Mode ===`),Ku(!1)},2e3)};function gt(i,e,t=null){return xr.register(i,e,{type:"slider-number",valueType:"float",onChange:t})}function uo(i,e){return xr.register(i,e,{type:"slider-number",valueType:"float"})}function Ku(i){xr.debug=i,i&&console.log("ControlSync debug mode enabled. Registry:",xr.getRegistry())}async function Cv(i){return i}function Lv(){const i=document.getElementById("alphaValueGroup"),e=document.getElementById("raycastParametersGroup"),t=document.getElementById("visibilityThresholdGroup");i&&(i.style.display="none"),e&&(e.style.display="none"),t&&(t.style.display="none")}function Pl(){const i=document.getElementById("basicModeButton"),e=document.getElementById("complexModeButton");document.getElementById("left-direction-arrow"),document.getElementById("right-direction-arrow"),document.getElementById("lightPad"),i&&e&&(p.lightingMode==="basic"?(i.classList.add("active"),e.classList.remove("active")):(e.classList.add("active"),i.classList.remove("active")),Os())}function fh(i){console.log("Updating material color to:",i),p.model&&(p.model.material?Zu(p.model,i):p.model.children&&p.model.traverse(e=>{e.isMesh&&e.material&&Zu(e,i)}))}function Zu(i,e){i.material._isWBOIT||i.material._isThreshold?(i.material.color.setStyle(e),console.log("Color set on enhanced mesh:",i.material.color)):(i.material.color.setStyle(e),console.log("Color set on standard mesh:",i.material.color))}function gi(i,e){console.log(`Updating material ${i} to:`,e),p.model&&(p.model.material?Ju(p.model,i,e):p.model.children&&p.model.traverse(t=>{t.isMesh&&t.material&&Ju(t,i,e)}))}function Ju(i,e,t){i.material._isWBOIT||i.material._isThreshold?(i.material[e]=t,i.material._originalMaterial&&(i.material._originalMaterial[e]=t)):i.material[e]=t}async function Iv(i){console.log("Updating material transparency to:",i),p.surfaceTransparency=i,ph(i)}async function Nv(i){console.log("Applying global transparency:",i),p.model&&(i<1?p.model.traverse(async e=>{if(e.isMesh&&e.material){vs.has(e.uuid)||vs.set(e.uuid,{material:e.material.clone(),geometry:e.geometry.clone()});try{const t=await Cv(e.geometry),n=vs.get(e.uuid).material.clone();n.transparent=!0,n.opacity=i,Dl(n,i),e.geometry=t,e.material=n,e.material.needsUpdate=!0}catch(t){console.warn("External surface extraction failed, using standard transparency:",t);const n=vs.get(e.uuid).material.clone();n.transparent=!0,n.opacity=i,Dl(n,i),e.material=n,e.material.needsUpdate=!0}}}):Ul())}function Dl(i,e){switch(p.transparencyMode){case"threshold":Pv(i,e);break;case"wboit":Dv(i,e);break;case"advanced":Uv(i,e);break;case"standard":Qu(i,e);break;case"dithered":Fv(i,e);break;default:Qu(i,e)}}function Pv(i,e){i.transparent=!0,i.opacity=e,i.side=Kt,i.depthWrite=!1,e<.1?(i.blending=Eo,i.opacity=e*.5):(i.blending=On,i.premultipliedAlpha=!0),i.alphaTest=0,i._isThreshold=!0}function Dv(i,e){i.transparent=!1,i.alphaTest=Math.max(.01,1-e),i.side=Kt,i.depthWrite=!0,i.depthTest=!0,i.blending=On,i.premultipliedAlpha=!1,i._isWBOIT=!0}function Uv(i,e){i.transparent=!0,i.opacity=e,i.side=_n,i.depthWrite=!1,e<.3?(i.blending=Eo,i.opacity=e*.7):e<.7?(i.blending=On,i.premultipliedAlpha=!0):(i.blending=On,i.alphaTest=.05)}function Qu(i,e){i.transparent=!0,i.opacity=e,i.side=Kt,i.depthWrite=!0,i.blending=On,i.alphaTest=0,i.premultipliedAlpha=!1}function Fv(i,e){i.transparent=!0,i.opacity=e,i.side=Kt,i.depthWrite=!0,i.blending=On,i.alphaTest=0}function Ul(){console.log("Restoring original materials and geometry"),p.model&&p.model.traverse(i=>{if(i.isMesh&&vs.has(i.uuid)){const e=vs.get(i.uuid);e.material&&(i.material=e.material,i.material.needsUpdate=!0),e.geometry&&(i.geometry=e.geometry)}})}async function cr(){console.log("Updating dual transparency - Object:",p.objectTransparency,"Surface:",p.surfaceTransparency),p.objectTransparency<1?await Nv(p.objectTransparency):p.surfaceTransparency<1?(Ul(),ph(p.surfaceTransparency)):Ul()}function Ts(){if(!p.model)return;const i=new hn().copy(p.model.rotation).reorder("YXZ");p.modelPitch=st(i.x),p.modelYaw=st(i.y),p.modelRoll=st(i.z),H("modelPitch",Math.round(p.modelPitch)),H("modelPitchNum",Math.round(p.modelPitch)),H("modelYaw",Math.round(p.modelYaw)),H("modelYawNum",Math.round(p.modelYaw)),H("modelRoll",Math.round(p.modelRoll)),H("modelRollNum",Math.round(p.modelRoll))}function ws(){if(!p.model)return;const i=new hn().copy(p.model.rotation).reorder("XYZ");H("modelRotX",Math.round(st(i.x))),H("modelRotXNum",Math.round(st(i.x))),H("modelRotY",Math.round(st(i.y))),H("modelRotYNum",Math.round(st(i.y))),H("modelRotZ",Math.round(st(i.z))),H("modelRotZNum",Math.round(st(i.z)))}function ph(i){console.log("Applying surface transparency:",i),p.model&&p.model.traverse(e=>{if(e.isMesh&&e.material){const t=e.material;t.transparent=i<1,t.opacity=i,Dl(t,i),t.needsUpdate=!0}})}function mh(i){if(!i)throw new Error("No file provided");const e=[".obj",".stl",".gltf",".glb",".dae"],t=i.name.toLowerCase();if(!e.some(s=>t.endsWith(s)))throw new Error(`Unsupported file format: "${i.name}". Currently supported: .obj, .stl, .gltf, .glb, .dae`);return console.log(`File validated: ${i.name}, size: ${(i.size/1024).toFixed(2)}KB`),t.split(".").pop()}function Tr(){["modelRotX","modelRotY","modelRotZ","modelRotXNum","modelRotYNum","modelRotZNum","modelYaw","modelPitch","modelRoll","modelYawNum","modelPitchNum","modelRollNum"].forEach(i=>{H(i,0)}),p.modelYaw=0,p.modelPitch=0,p.modelRoll=0}function Ov(){H("materialColor","#4CAF50"),H("metalness",.1),H("metalnessNum",.1),H("roughness",.8),H("roughnessNum",.8),H("transparency",1),H("transparencyNum",1)}function Fl(i){try{const e=mh(i),t=URL.createObjectURL(i),n=setTimeout(()=>{rt("Upload timed out. Please try again.","error"),URL.revokeObjectURL(t)},3e4),s=o=>{clearTimeout(n),Ov(),rt(`✅ ${o} loaded successfully!`,"success")},r=o=>{clearTimeout(n),rt(o,"error"),URL.revokeObjectURL(t)};switch(e){case"obj":oM(t,i.name,s,r);break;case"stl":aM(t,i.name,s,r);break;case"gltf":case"glb":lM(t,i.name,s,r);break;case"dae":cM(t,i.name,s,r);break;default:clearTimeout(n),rt("Currently only .obj, .stl, .gltf, .glb, and .dae files are supported","error"),URL.revokeObjectURL(t)}}catch(e){rt(e.message,"error")}}function Bv(i){if(p.assembly.mode!=="developer"||p.assembly.models.size===0)return null;const t=p.renderer.domElement.getBoundingClientRect(),n=new nt;n.x=(i.clientX-t.left)/t.width*2-1,n.y=-((i.clientY-t.top)/t.height)*2+1;const s=new zp;s.setFromCamera(n,p.camera);const r=[],o=new Map;p.assembly.models.forEach((l,c)=>{l.mesh&&l.visible&&(r.push(l.mesh),o.set(l.mesh,c),l.mesh.children&&l.mesh.children.length>0&&l.mesh.traverse(d=>{d.isMesh&&(r.push(d),o.set(d,c))}))});const a=s.intersectObjects(r,!1);if(a.length>0){const l=a[0].object;return o.get(l)||null}return null}function ed(i){if(Tt.isDragging=!0,Tt.hasDragged=!1,Tt.previousMousePosition={x:i.clientX,y:i.clientY},Tt.isLeftButton=i.button===0,Tt.isRightButton=i.button===2,p.assembly.mode==="developer"&&i.button===0)if(Tt.clickedModel=Bv(i),Tt.clickEvent=i,Tt.clickedModel){const e=p.assembly.models.get(Tt.clickedModel);e&&e.selected&&(p.assembly.activeModel=Tt.clickedModel)}else p.assembly.activeModel=null}function td(i){if(!Tt.isDragging)return;if(i.buttons===0){Tt.isDragging=!1,Tt.hasDragged=!1,Tt.clickedModel=null;return}Tt.hasDragged=!0;const e={x:i.clientX-Tt.previousMousePosition.x,y:i.clientY-Tt.previousMousePosition.y},t=Sr();if(Tt.isLeftButton&&t){const s=new O().setFromMatrixColumn(p.camera.matrixWorld,0),r=new O().setFromMatrixColumn(p.camera.matrixWorld,1),o=new Cn().setFromAxisAngle(r,e.x*.005),a=new Cn().setFromAxisAngle(s,e.y*.005);if(t.quaternion.premultiply(o),t.quaternion.premultiply(a),p.assembly.mode==="developer"&&!p.assembly.activeModel){const d=new Cn().multiplyQuaternions(o,a);Fx(d)}const l=new hn().setFromQuaternion(t.quaternion,"YXZ");p.modelPitch=st(l.x),p.modelYaw=st(l.y),p.modelRoll=st(l.z),H("modelPitch",Math.round(p.modelPitch)),H("modelPitchNum",Math.round(p.modelPitch)),H("modelYaw",Math.round(p.modelYaw)),H("modelYawNum",Math.round(p.modelYaw)),H("modelRoll",Math.round(p.modelRoll)),H("modelRollNum",Math.round(p.modelRoll));const c=new hn().setFromQuaternion(t.quaternion,"XYZ");if(H("modelRotX",Math.round(st(c.x))),H("modelRotXNum",Math.round(st(c.x))),H("modelRotY",Math.round(st(c.y))),H("modelRotYNum",Math.round(st(c.y))),H("modelRotZ",Math.round(st(c.z))),H("modelRotZNum",Math.round(st(c.z))),p.assembly.activeModel&&p.assembly.mode==="developer"){const d=p.assembly.models.get(p.assembly.activeModel);d&&d.mesh===t&&(H("transformRotX",Math.round(st(c.x))),H("transformRotXNum",Math.round(st(c.x))),H("transformRotY",Math.round(st(c.y))),H("transformRotYNum",Math.round(st(c.y))),H("transformRotZ",Math.round(st(c.z))),H("transformRotZNum",Math.round(st(c.z))),H("transformPosX",t.position.x.toFixed(1)),H("transformPosXNum",t.position.x.toFixed(1)),H("transformPosY",t.position.y.toFixed(1)),H("transformPosYNum",t.position.y.toFixed(1)),H("transformPosZ",t.position.z.toFixed(1)),H("transformPosZNum",t.position.z.toFixed(1)),H("transformScale",t.scale.x.toFixed(1)),H("transformScaleNum",t.scale.x.toFixed(1)))}}else if(Tt.isRightButton){const s=new O(e.x*.01,-e.y*.01,0);s.applyQuaternion(p.camera.quaternion),p.camera.position.add(s)}Tt.previousMousePosition={x:i.clientX,y:i.clientY},ut()}function ho(){if(p.assembly.mode==="developer"&&!Tt.hasDragged){const i=Tt.clickEvent;if(Tt.clickedModel){const e=p.assembly.models.get(Tt.clickedModel);e&&(e.selected?!i.ctrlKey&&!i.metaKey&&!i.shiftKey&&Array.from(p.assembly.models.values()).filter(n=>n.selected).length===1&&(e.setSelected(!1),p.assembly.activeModel=null,vo(),Bn()):(oh(Tt.clickedModel,i),vo()))}else if(i&&!i.ctrlKey&&!i.metaKey&&!i.shiftKey){let e=!1;p.assembly.models.forEach(t=>{t.selected&&(t.setSelected(!1),e=!0)}),e&&(p.assembly.activeModel=null,vo(),Bn())}}console.log("Resetting mouse controls - isDragging was:",Tt.isDragging),Tt.isDragging=!1,Tt.isLeftButton=!1,Tt.isRightButton=!1,Tt.isCtrlDrag=!1,Tt.hasDragged=!1,Tt.clickedModel=null,Tt.clickEvent=null}function nd(i){if(i.preventDefault(),p.assembly.mode==="developer"){const n=Co();if(n){const s=p.camera.position.length(),r=uh(s,n),o=i.deltaY>0?10:-10,a=Math.max(0,Math.min(360,r+o)),l=Nl(a,n),c=p.camera.position.clone().normalize();p.camera.position.copy(c.multiplyScalar(l)),cv(a),ut();return}}const e=i.deltaY>0?1.1:.9;p.camera.position.multiplyScalar(e);const t=p.camera.position.length();t<1&&p.camera.position.normalize().multiplyScalar(1),t>50&&p.camera.position.normalize().multiplyScalar(50),ut()}function id(i){i.preventDefault()}function ut(){const i=Sr();if(p.camera&&(p.model||i)){const e=p.camera.position,t=p.camera.rotation,n=i?i.rotation:{x:0,y:0,z:0},s=p.camera.position.length();if(p.zoom=5/s,H("posX",gs(e.x)),H("posY",gs(e.y)),H("posZ",gs(e.z)),H("posXNum",gs(e.x)),H("posYNum",gs(e.y)),H("posZNum",gs(e.z)),p.assembly.mode==="developer"){const h=uv();H("relativePosition",h),H("relativePositionNum",h)}const r=st(t.x),o=st(t.y),a=st(t.z);H("rotX",Math.round(r)),H("rotY",Math.round(o)),H("rotZ",Math.round(a)),H("rotXNum",Math.round(r)),H("rotYNum",Math.round(o)),H("rotZNum",Math.round(a));const l=st(n.x),c=st(n.y),d=st(n.z);H("modelRotX",Math.round(l)),H("modelRotY",Math.round(c)),H("modelRotZ",Math.round(d)),H("modelRotXNum",Math.round(l)),H("modelRotYNum",Math.round(c)),H("modelRotZNum",Math.round(d));const u=document.getElementById("info");if(u){let h="";if(p.assembly.mode==="developer"){const f=Array.from(p.assembly.models.values()).filter(y=>y.selected);f.length===0?h="No Selection":f.length===1?h=f[0].name:h=`${f.length} Selected`}else h=p.currentModelType||"No Model";u.innerHTML=`
                <h4>VIEW</h4>
                <p><span class="info-label">Camera Position:</span><span class="info-values-container"><span class="info-value-box">${Math.round(e.x)}</span><span class="info-value-box">${Math.round(e.y)}</span><span class="info-value-box">${Math.round(e.z)}</span></span></p>
                <p><span class="info-label">Model Rotation:</span><span class="info-values-container"><span class="info-value-box">${Math.round(l)}°</span><span class="info-value-box">${Math.round(c)}°</span><span class="info-value-box">${Math.round(d)}°</span></span></p>
                <p><span class="info-label">Model:</span><span class="info-values-container"><span class="model-name-box">${h}</span></span></p>
            `}kv(e,n,l,c,d,t,r,o,a)}}function kv(i,e,t,n,s,r,o,a,l){let c=[];p.assembly.mode==="developer"&&(c=Array.from(p.assembly.models.values()).filter(y=>y.selected));const d=document.getElementById("model-rotation-display");d&&(p.assembly.mode==="developer"?c.length===0?d.innerHTML="<span>—</span><span>—</span><span>—</span>":c.length===1?d.innerHTML=`<span>${Math.round(t)}°</span><span>${Math.round(n)}°</span><span>${Math.round(s)}°</span>`:d.innerHTML="<span>Multi</span><span>Multi</span><span>Multi</span>":d.innerHTML=`<span>${Math.round(t)}°</span><span>${Math.round(n)}°</span><span>${Math.round(s)}°</span>`);const u=document.getElementById("camera-position-display");u&&(u.innerHTML=`<span>${Math.round(i.x)}</span><span>${Math.round(i.y)}</span><span>${Math.round(i.z)}</span>`);const h=document.getElementById("camera-rotation-display");h&&(h.innerHTML=`<span>${Math.round(o)}°</span><span>${Math.round(a)}°</span><span>${Math.round(l)}°</span>`);const f=document.getElementById("model-attitude-display");if(f)if(p.assembly.mode==="developer")if(c.length===0)f.innerHTML="<span>—</span><span>—</span><span>—</span>";else if(c.length===1){const y=p.modelYaw||0,_=p.modelPitch||0,g=p.modelRoll||0;f.innerHTML=`<span>${Math.round(y)}°</span><span>${Math.round(_)}°</span><span>${Math.round(g)}°</span>`}else f.innerHTML="<span>Multi</span><span>Multi</span><span>Multi</span>";else{const y=p.modelYaw||0,_=p.modelPitch||0,g=p.modelRoll||0;f.innerHTML=`<span>${Math.round(y)}°</span><span>${Math.round(_)}°</span><span>${Math.round(g)}°</span>`}}function zo(i){i.position.set(0,0,0),i.rotation.set(0,0,0),i.scale.set(1,1,1),i.updateMatrixWorld(!0);const e=new an().setFromObject(i);if(e.isEmpty()){console.warn("Model has empty bounding box, using default scaling");return}const t=e.getCenter(new O),n=e.getSize(new O);i.position.copy(t).negate();const s=Math.max(n.x,n.y,n.z);if(s>0){const l=2.5/s;i.scale.setScalar(l),console.log(`Model scaled by factor: ${l.toFixed(3)}, original size: ${s.toFixed(3)}`)}i.updateMatrixWorld(!0);const o=new an().setFromObject(i).getCenter(new O);i.position.sub(o)}function zv(){if(!p.camera)return;let i;if(p.assembly.mode==="developer"&&p.assembly.models.size>0)i=Fs(),console.log("F key: Centering assembly while maintaining zoom");else{const a=Sr();if(!a)return;i=new an().setFromObject(a),console.log("F key: Centering single model while maintaining zoom")}if(i.isEmpty()){console.warn("Model has empty bounding box, cannot center.");return}const e=i.getCenter(new O),t=p.camera.position.z;p.camera.position.set(e.x,e.y,t),p.camera.lookAt(e);const n=p.camera.position.x,s=p.camera.position.y,r=p.camera.position.z;if(Math.abs(n)>10||Math.abs(s)>10||r>20||r<1)Hv(n,s,r),console.log(`Camera control ranges expanded for F key focus: X=${n.toFixed(1)}, Y=${s.toFixed(1)}, Z=${r.toFixed(1)}`);else if(p.assembly.mode==="developer"&&p.assembly.models.size>0){const a=Fs();if(a){const l=a.getSize(new O),d=Math.max(l.x,l.y,l.z)*2;cc(d,l),console.log("F key: Updated assembly camera ranges")}}ut()}function Hv(i,e,t){const s=Math.min(-10,Math.floor(i*1.2)),r=Math.max(10,Math.ceil(i*1.2)),o=Math.min(-10,Math.floor(e*1.2)),a=Math.max(10,Math.ceil(e*1.2)),l=Math.min(1,Math.floor(t/1.2)),c=Math.max(20,Math.ceil(t*1.2));[{id:"posX",min:s,max:r},{id:"posY",min:o,max:a},{id:"posZ",min:l,max:c}].forEach(u=>{const h=document.getElementById(u.id),f=document.getElementById(u.id+"Num");h&&(h.min=u.min,h.max=u.max),f&&(f.min=u.min,f.max=u.max)}),Gv(s,r,o,a,l,c)}function Gv(i,e,t,n,s,r){let o=document.getElementById("camera-range-feedback");o||(o=document.createElement("div"),o.id="camera-range-feedback",o.style.cssText=`
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
    `,setTimeout(()=>{o&&o.parentNode&&o.parentNode.removeChild(o)},4e3)}function sd(){if(p.assembly.mode==="developer"&&p.assembly.models.size>0){const e=Fs();if(e){const t=e.getSize(new O),s=Math.max(t.x,t.y,t.z)*2;cc(s,t),console.log("Camera control ranges reset for assembly mode");return}}[{id:"posX",min:-10,max:10},{id:"posY",min:-10,max:10},{id:"posZ",min:1,max:20}].forEach(e=>{const t=document.getElementById(e.id),n=document.getElementById(e.id+"Num");t&&(t.min=e.min,t.max=e.max),n&&(n.min=e.min,n.max=e.max)}),console.log("Camera control ranges reset to default values")}function Vv(){p.camera&&(p.camera.position.set(5,5,5),p.camera.lookAt(0,0,0),ut(),console.log("Camera reset to default position"))}function Wv(){p.assembly.mode==="developer"&&p.assembly.models.size>0?(p.assembly.models.forEach(i=>{i.mesh&&(i.mesh.position.set(0,0,0),i.mesh.rotation.set(0,0,0),i.mesh.scale.set(1,1,1),i.updateTransformFromMesh())}),console.log(`Reset ${p.assembly.models.size} models in assembly`)):p.model&&(p.model.position.set(0,0,0),p.model.rotation.set(0,0,0),p.model.scale.set(1,1,1),p.modelYaw=0,p.modelPitch=0,p.modelRoll=0,["modelRotX","modelRotXNum","modelRotY","modelRotYNum","modelRotZ","modelRotZNum"].forEach(i=>{H(i,0)}),["modelPitch","modelPitchNum","modelYaw","modelYawNum","modelRoll","modelRollNum"].forEach(i=>{H(i,0)}),console.log("Reset single model transform"))}function Xv(i,e=""){const t=prompt("Enter filename (without extension):",i);return t===null?null:t.trim()===""?i+e:t.trim()+e}async function Oa(i,e,t){if(console.log("saveFileWithDialog called with:",{defaultFilename:e,mimeType:t}),console.log("File System Access API available:","showSaveFilePicker"in window),"showSaveFilePicker"in window)try{console.log("Attempting to use File System Access API...");const n={suggestedName:e,types:[{description:t==="image/png"?"PNG Image":"JSON File",accept:t==="image/png"?{"image/png":[".png"]}:{"application/json":[".json"]}}]},r=await(await window.showSaveFilePicker(n)).createWritable();await r.write(i),await r.close(),console.log("File saved successfully using File System Access API");return}catch(n){if(n.name==="AbortError"){console.log("User cancelled the save operation");return}console.error("File System Access API failed:",n)}console.log("Falling back to filename prompt...");try{const n=e.includes(".")?"."+e.split(".").pop():"",s=e.replace(n,""),r=Xv(s,n);if(r===null){console.log("User cancelled filename prompt");return}rd(i,r)}catch(n){console.error("Filename prompt failed:",n),console.log("Using direct download fallback"),rd(i,e)}}function rd(i,e){const t=URL.createObjectURL(i),n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(t)}function od(i){try{console.log("Starting high-quality capture...");const e=document.getElementById("guideLineOverlay");if(e&&(e.style.display="none"),!p.model){console.error("No model to capture"),e&&(e.style.display="block");return}const t=new an().setFromObject(p.model),n=t.getSize(new O),s=t.getCenter(new O),r=Math.max(n.x,n.y,n.z),o=Math.max(2048,r*200),a=Math.min(o,4096),l=Math.min(o,4096),c=new rc({alpha:!0,antialias:!0,preserveDrawingBuffer:!0});c.setSize(a,l),c.setClearColor(0,0);const d=p.camera.clone();d.aspect=a/l;const u=d.fov*(Math.PI/180),h=2*Math.atan(Math.tan(u/2)*d.aspect),f=r/2/Math.tan(u/2),y=r/2/Math.tan(h/2),_=Math.max(f,y)*1.2,g=new O;p.camera.getWorldDirection(g),d.position.copy(s),d.position.addScaledVector(g,-_),d.lookAt(s),d.updateProjectionMatrix(),c.render(p.scene,d);const m=c.domElement,w=m.getContext("2d"),E=document.createElement("canvas"),x=10;E.width=a+x*2,E.height=l+x*2,E.getContext("2d").drawImage(m,x,x),E.toBlob(N=>{i(N),e&&(e.style.display="block"),c.dispose(),console.log("High-quality capture completed successfully")},"image/png")}catch(e){console.error("Error in captureHighQualityFrame:",e);const t=document.getElementById("guideLineOverlay");t&&(t.style.display="block"),console.log("Falling back to regular capture..."),gh(i)}}function gh(i){const e=document.getElementById("guideLineOverlay");e&&(e.style.display="none"),p.renderer.render(p.scene,p.camera),p.renderer.domElement.toBlob(t=>{i(t),e&&(e.style.display="block")},"image/png")}function yh(){requestAnimationFrame(yh),jv(),p.renderer.autoClear=!1,p.renderer.clear(),p.renderer.render(p.scene,p.camera),Jv(),ut()}function Yv(){if(console.log("initOrientationWidget called, enabled:",p.orientationWidget.enabled),!!p.orientationWidget.enabled)try{const i=p.orientationWidget,e=document.getElementById("orientationWidget");if(!e){console.warn("Orientation widget canvas not found, disabling widget"),p.orientationWidget.enabled=!1;return}i.renderer=new rc({canvas:e,alpha:!0,antialias:!0,preserveDrawingBuffer:!1}),i.renderer.setSize(120,120),i.renderer.setClearColor(0,0),i.camera=new on(50,1,.1,100),i.camera.position.set(0,0,5),i.scene=new gr;const t=new lu(1.33),n=new xn;n.add(t);const s=6,r=.035;for(let o=0;o<s;o++){const a=new lu(1.33),l=o/s*Math.PI*2,c=Math.cos(l)*r,d=Math.sin(l)*r;a.position.set(c,d,0),a.material&&(a.material.transparent=!0,a.material.opacity=.35),n.add(a)}i.scene.add(n),i.axesHelper=n,i.labelGroup=new xn,i.scene.add(i.labelGroup),$v(i),qv(),Zv(i,e),console.log("Orientation widget initialized successfully, scene children:",i.scene.children.length)}catch(i){console.warn("Orientation widget disabled due to error:",i),p.orientationWidget.enabled=!1}}function qv(){const i=p.orientationWidget,e=new Jl(1.2,1.4,16),t=new Yn({color:6710886,transparent:!0,opacity:.3,side:_n}),n=new $t(e,t);n.rotation.x=-Math.PI/2,i.scene.add(n),i.compass=n}function $v(i){const e=["X","Y","Z"],t=["#ff0000","#00ff00","#0000ff"],n=[new O(1.7,0,0),new O(0,1.7,0),new O(0,0,1.7)];i.axisLabels=[],e.forEach((s,r)=>{const o=document.createElement("canvas"),a=o.getContext("2d");o.width=64,o.height=64,a.clearRect(0,0,64,64),a.fillStyle=t[r],a.font="bold 48px Arial",a.textAlign="center",a.textBaseline="middle",a.fillText(s,32,32);const l=new cp(o);l.needsUpdate=!0;const c=new Id({map:l,transparent:!0,alphaTest:.1}),d=new ep(c);d.position.copy(n[r]),d.scale.set(.5,.5,1),d.name=`${s}_label`,console.log(`Created ${s} label at position:`,n[r].clone()),i.labelGroup.add(d),i.axisLabels.push(d)})}function jv(){if(!p.orientationWidget.enabled)return;const i=p.orientationWidget;let e=null;if(p.assembly.mode==="basic"&&p.model)e=p.model.rotation;else if(p.assembly.mode==="developer"){const n=Sr();if(n&&n.rotation)e=n.rotation;else for(const s of p.assembly.models.values())if(s.mesh&&s.visible){e=s.mesh.rotation;break}}if(!e)return;(Math.abs(e.x-i.lastModelRotation.x)>.01||Math.abs(e.y-i.lastModelRotation.y)>.01||Math.abs(e.z-i.lastModelRotation.z)>.01)&&i.axesHelper&&(i.axesHelper.rotation.copy(e),i.labelGroup&&i.labelGroup.rotation.copy(e),i.axisLabels&&i.camera&&Kv(i),i.lastModelRotation={x:e.x,y:e.y,z:e.z})}function Kv(i){if(!i.axisLabels||!i.camera)return;const e=new O(0,0,-1);e.applyQuaternion(i.camera.quaternion);const t=[new O(1,0,0),new O(0,1,0),new O(0,0,1)];t.forEach(n=>{n.applyEuler(i.axesHelper.rotation)}),i.axisLabels.forEach((n,s)=>{const r=Math.abs(t[s].dot(e)),o=.996;n.visible=r<o})}function Zv(i,e){let t=!1,n={x:0,y:0},s=.01;e.addEventListener("dblclick",o=>{o.preventDefault(),o.stopPropagation(),p.model&&(p.model.rotation.set(0,0,0),H("modelRotX",0),H("modelRotXNum",0),H("modelRotY",0),H("modelRotYNum",0),H("modelRotZ",0),H("modelRotZNum",0),ut(),console.log("Model rotation reset to (0, 0, 0)"))}),e.addEventListener("mousedown",o=>{o.preventDefault(),o.stopPropagation(),t=!0;const a=e.getBoundingClientRect();n={x:o.clientX-a.left,y:o.clientY-a.top},e.style.cursor="grabbing"}),e.addEventListener("mousemove",o=>{if(!t||!p.model)return;o.preventDefault();const a=e.getBoundingClientRect(),l={x:o.clientX-a.left,y:o.clientY-a.top},c=l.x-n.x,d=l.y-n.y,u=c*s,h=d*s;p.model.rotation.y+=u,p.model.rotation.x+=h;const f=p.model.rotation.x*180/Math.PI,y=p.model.rotation.y*180/Math.PI,_=p.model.rotation.z*180/Math.PI;H("modelRotX",Math.round(f)),H("modelRotXNum",Math.round(f)),H("modelRotY",Math.round(y)),H("modelRotYNum",Math.round(y)),H("modelRotZ",Math.round(_)),H("modelRotZNum",Math.round(_)),ut(),n=l});const r=()=>{t=!1,e.style.cursor="grab"};e.addEventListener("mouseup",r),e.addEventListener("mouseleave",r),e.style.cursor="grab"}function Jv(){if(!p.orientationWidget.enabled||!p.orientationWidget.scene||!p.orientationWidget.renderer)return;const i=p.orientationWidget;i.renderer.render(i.scene,i.camera)}function Gt(){const i=document.getElementById("guideLineOverlay");if(!i){console.error("EMERGENCY FIX: guideLineOverlay element not found");return}for(console.log("Updating guide lines, current state:",p.guideLines);i.firstChild;)i.removeChild(i.firstChild);const e=i.getBoundingClientRect(),t=e.width,n=e.height;p.guideLines.forEach(s=>{const r=document.createElement("div");r.className="guide-line",r.dataset.id=s.id,Math.abs(s.angle);const a=Math.sqrt(t*t+n*n)*4,l=`${s.thickness/1e3*100}vh`,c=s.colour||"#FFFF66",d=s.transparency||.5,u=s.angle*Math.PI/180,h=Math.cos(u),y=-Math.sin(u),_=h,g=Math.sqrt(t*t+n*n),w=s.posY/360*(g*.8),E=t/2,x=n/2,I=y*w,N=_*w,P=E+I,U=x+N,T=`${P/t*100}%`,b=`${U/n*100}%`,D=`translate(-50%, -50%) rotate(${s.angle}deg)`;r.style.width=`${a}px`,r.style.height=l,r.style.backgroundColor=c,r.style.opacity=d,r.style.top=b,r.style.left=T,r.style.transform=D,r.style.borderRadius=`${s.thickness/2}px`,console.log(`Creating guide line ${s.id}: angle=${s.angle}°, width=${a.toFixed(1)}px, top=${b}, left=${T}`),i.appendChild(r)}),console.log("Guide line update complete")}function ad(i=null){if(i===null){const e=document.querySelector('[data-id="0"]'),t=document.getElementById("hideUnhideGuide");if(!e||!t)return;e.style.display==="none"||getComputedStyle(e).display==="none"?(e.style.display="block",t.textContent="HIDE",t.classList.remove("button-danger"),t.classList.add("secondary"),Gt()):(e.style.display="none",t.textContent="UNHIDE",t.classList.remove("secondary"),t.classList.add("button-danger"))}else{const e=document.querySelector(`[data-id="${i}"]`),t=document.querySelector(`[data-guideline-id="${i}"] .hide-unhide-guide`);if(!e||!t)return;e.style.display==="none"||getComputedStyle(e).display==="none"?(e.style.display="block",t.textContent="HIDE",t.classList.remove("button-danger"),t.classList.add("secondary"),Gt()):(e.style.display="none",t.textContent="UNHIDE",t.classList.remove("secondary"),t.classList.add("button-danger"))}}function Qv(){console.log("autoHideDefaultGuideLineOnFirstLoad called");const i=sessionStorage.getItem("guideLineUserInteracted");if(console.log("hasUserInteracted:",i),i){console.log("User has interacted before, skipping auto-hide");return}sessionStorage.setItem("guideLineAutoHideOccurred","true");const e=document.querySelector('[data-id="0"]'),t=document.getElementById("hideUnhideGuide");console.log("Elements found - defaultLine:",!!e,"button:",!!t),e&&t?(e.style.display="none",t.textContent="UNHIDE",t.classList.remove("secondary"),t.classList.add("button-danger"),console.log("Auto-hide applied to default guide line, starting pulse animation"),eM(t,e,3)):console.error("Elements not found for auto-hide")}function eM(i,e,t){console.log("Starting button pulse with synchronized guide line"),e.style.display="none",e.style.transition="opacity 0.2s ease",tM(i,t,n=>{n==="pulse-up"?(e.style.display="block",e.style.opacity="1"):n==="pulse-down"?e.style.opacity="0":n==="end"&&(e.style.display="none",e.style.opacity="1",console.log("Default guide line auto-hidden as pulse overlay ends"))})}function tM(i,e,t=null){const n=getComputedStyle(i),s=document.createElement("div");s.style.cssText=`
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
    `,i.classList.contains("secondary")&&r.classList.add("secondary"),i.classList.contains("button-danger")&&r.classList.add("button-danger"),r.style.background=n.background,r.style.border=n.border,r.style.borderRadius=n.borderRadius,r.style.color=n.color,r.style.fontSize=n.fontSize,r.style.fontWeight=n.fontWeight,r.style.fontFamily=n.fontFamily,r.style.textTransform=n.textTransform,r.style.letterSpacing=n.letterSpacing,r.style.lineHeight=n.lineHeight,r.style.boxShadow=n.boxShadow,i.classList.contains("button-danger")||i.classList.contains("button-danger")?r.style.background="linear-gradient(45deg, #ff6b6b, #ee5a24)":i.classList.contains("secondary")&&(r.style.background="linear-gradient(45deg, #4CAF50, #45a049)"),s.appendChild(r);let o=1;const a=()=>{const h=i.getBoundingClientRect();r.style.left=`${h.left}px`,r.style.top=`${h.top}px`,r.style.width=`${h.width}px`,r.style.height=`${h.height}px`,r.style.transform=`scale(${o})`,r.style.transformOrigin="center center"};let l;const c=()=>{a(),l=requestAnimationFrame(c)};c();let d=0;const u=setInterval(()=>{o=1.15,r.style.transform=`scale(${o})`,t&&t("pulse-up"),setTimeout(()=>{o=1,r.style.transform=`scale(${o})`,t&&t("pulse-down"),d>=e&&(t&&t("end"),setTimeout(()=>{cancelAnimationFrame(l)},500),setTimeout(()=>{document.body.contains(s)&&document.body.removeChild(s)},800))},200),d++,d>=e&&clearInterval(u)},600)}function nM(){sessionStorage.setItem("guideLineUserInteracted","true")}function _h(){const i=document.getElementById("complexMaterialButton");i&&(p.materialMode==="default"?(i.textContent="COMPLEX",i.classList.remove("state-secondary"),i.classList.add("state-primary"),iM()):(i.textContent="BASIC",i.classList.remove("state-primary"),i.classList.add("state-secondary"),sM()))}function iM(){const i=document.querySelector("#surfaceMode")?.closest(".control-group"),e=document.querySelectorAll("label");let t=null;for(const a of e)if(a.textContent.trim()==="Surface Extraction"){t=a.closest(".control-group");break}i&&(i.style.display="none"),t&&(t.style.display="none");const n=document.getElementById("alphaValueGroup"),s=document.getElementById("raycastParametersGroup"),r=document.getElementById("visibilityThresholdGroup");n&&(n.style.display="none"),s&&(s.style.display="none"),r&&(r.style.display="none");const o=document.getElementById("surfaceMode");o&&(p.transparencyMode="standard",o.value="standard")}function sM(){const i=document.querySelector("#surfaceMode")?.closest(".control-group"),e=document.querySelectorAll("label");let t=null;for(const n of e)if(n.textContent.trim()==="Surface Extraction"){t=n.closest(".control-group");break}i&&(i.style.display="block"),t&&(t.style.display="block"),Lv()}function rM(i){p.model&&p.scene.remove(p.model);let e,t;switch(i){case"cube":e=new ks(2,2,2),t="Cube";break;case"sphere":e=new Ql(1.5,32,32),t="Sphere";break;case"pyramid":e=new Zl(1.5,2.5,4),t="Pyramid";break;default:e=new ec(1.2,.4,100,16),t="Default Torus Knot"}const n=new kn({color:5025616,metalness:.1,roughness:.8,transparent:!1,opacity:1,side:Kt});p.model=new $t(e,n),p.model.position.set(0,0,0),p.model.scale.set(1,1,1),p.model.rotation.set(0,0,0),p.scene.add(p.model),p.currentModelType=t,H("materialColor","#4CAF50"),H("metalness",.1),H("metalnessNum",.1),H("roughness",.8),H("roughnessNum",.8),H("transparency",1),H("transparencyNum",1),Tr(),console.log("Model created:",t,"Material:",n)}function oM(i,e,t,n){const s=new qd;rt("Loading OBJ model...","loading"),s.load(i,r=>{try{p.model&&p.scene.remove(p.model),r.traverse(o=>{o.isMesh&&(o.material=new kn({color:5025616,metalness:.1,roughness:.8,transparent:!1,opacity:1,side:Kt}))}),p.model=r,zo(p.model),p.scene.add(p.model),p.currentModelType=e,Tr(),URL.revokeObjectURL(i),t(e)}catch(o){console.error("Error processing OBJ model:",o),n("Error processing OBJ model: "+o.message)}},r=>{if(r&&r.lengthComputable){const o=Math.round(r.loaded/r.total*100);rt(`Loading... ${o}%`,"loading")}},r=>{console.error("Error loading OBJ:",r),n("Error loading OBJ: "+r.message)})}function aM(i,e,t,n){const s=new $d;rt("Loading STL model...","loading"),s.load(i,r=>{try{p.model&&p.scene.remove(p.model);const o=new kn({color:5025616,metalness:.1,roughness:.8,transparent:!1,opacity:1,side:Kt});p.model=new $t(r,o),zo(p.model),p.scene.add(p.model),p.currentModelType=e,Tr(),URL.revokeObjectURL(i),t(e)}catch(o){console.error("Error processing STL model:",o),n("Error processing STL model: "+o.message)}},r=>{if(r&&r.lengthComputable){const o=Math.round(r.loaded/r.total*100);rt(`Loading... ${o}%`,"loading")}},r=>{console.error("Error loading STL:",r),n("Error loading STL: "+r.message)})}function lM(i,e,t,n){const s=new jd;rt("Loading GLTF/GLB model...","loading"),s.load(i,r=>{try{p.model&&p.scene.remove(p.model),r.scene.traverse(o=>{o.isMesh&&(o.material=new kn({color:5025616,metalness:.1,roughness:.8,transparent:!1,opacity:1,side:Kt}))}),p.model=r.scene,zo(p.model),p.scene.add(p.model),p.currentModelType=e,Tr(),URL.revokeObjectURL(i),t(e)}catch(o){console.error("Error processing GLTF/GLB model:",o),n("Error processing GLTF/GLB model: "+o.message)}},r=>{if(r&&r.lengthComputable){const o=Math.round(r.loaded/r.total*100);rt(`Loading... ${o}%`,"loading")}},r=>{console.error("Error loading GLTF/GLB:",r),n("Error loading GLTF/GLB: "+r.message)})}function cM(i,e,t,n){const s=new Jd;rt("Loading DAE model...","loading"),s.load(i,r=>{try{p.model&&p.scene.remove(p.model),r.scene.traverse(o=>{o.isMesh?o.material=new kn({color:5025616,metalness:.1,roughness:.8,transparent:!1,opacity:1,side:Kt}):(o.isLine||o.isLineSegments)&&o.parent&&o.parent.remove(o)}),p.model=r.scene,zo(p.model),p.scene.add(p.model),p.currentModelType=e,Tr(),URL.revokeObjectURL(i),t(e)}catch(o){console.error("Error processing DAE model:",o),n("Error processing DAE model: "+o.message)}},r=>{if(r&&r.lengthComputable){const o=Math.round(r.loaded/r.total*100);rt(`Loading... ${o}%`,"loading")}},r=>{console.error("Error loading DAE:",r),n("Error loading DAE: "+r.message)})}function uM(){const i=document.getElementById("presetSelector");i&&(i.innerHTML='<option value="">Select a preset...</option>',Object.keys(p.presets).forEach(e=>{const t=document.createElement("option");t.value=e,t.textContent=e,i.appendChild(t)}))}function dM(){if(!p.renderer||!p.renderer.domElement){console.error("CRITICAL ERROR: Renderer or canvas not available for mouse controls");return}const i=p.renderer.domElement;console.log("Setting up mouse controls on canvas:",i),i.removeEventListener("mousedown",ed),i.removeEventListener("mousemove",td),i.removeEventListener("mouseup",ho),i.removeEventListener("mouseleave",ho),i.removeEventListener("wheel",nd),i.removeEventListener("contextmenu",id),i.addEventListener("mousedown",ed),i.addEventListener("mousemove",td),i.addEventListener("mouseup",ho),i.addEventListener("mouseleave",ho),i.addEventListener("wheel",nd),i.addEventListener("contextmenu",id),console.log("Mouse controls setup complete")}function hM(){document.querySelectorAll(".button").forEach(t=>{t.addEventListener("mousedown",()=>{t.classList.add("button-depressed")}),t.addEventListener("mouseup",()=>{t.classList.remove("button-depressed")}),t.addEventListener("mouseleave",()=>{t.classList.remove("button-depressed")})}),window.addEventListener("keydown",t=>{if(!(t.target.tagName==="INPUT"||t.target.tagName==="TEXTAREA"))switch(t.key.toLowerCase()){case"f":zv(),t.preventDefault();break;case"r":sd(),t.preventDefault();break;case"c":Vv(),t.preventDefault();break;case"m":Wv(),t.preventDefault();break}}),_e("ambientLight","input",t=>{p.lights.ambient&&(p.lights.ambient.intensity=parseFloat(t.target.value))}),_e("ambientLightNum","input",t=>{p.lights.ambient&&(p.lights.ambient.intensity=parseFloat(t.target.value))}),_e("directionalLight","input",t=>{p.lights.directionalRight&&(p.lights.directionalRight.intensity=parseFloat(t.target.value))}),_e("directionalLightNum","input",t=>{p.lights.directionalRight&&(p.lights.directionalRight.intensity=parseFloat(t.target.value))}),_e("directionalLightRight","input",t=>{p.lights.directional&&(p.lights.directional.intensity=parseFloat(t.target.value))}),_e("directionalRightNum","input",t=>{p.lights.directional&&(p.lights.directional.intensity=parseFloat(t.target.value))}),_e("basicModeButton","click",()=>{p.lightingMode="basic",Pl();const t=document.getElementById("left-light-icon"),n=document.getElementById("right-light-icon");t.style.transform="translate(-50%, -50%)",n.style.transform="translate(-50%, -50%) scaleX(-1)";const s=document.querySelector(".sun-control");if(s){const r=s.getBoundingClientRect(),o=r.height/2,a=r.width*.25,l=r.width*.75;t.style.left=`${a}px`,t.style.top=`${o}px`,n.style.left=`${l}px`,n.style.top=`${o}px`,p.lights.directional.position.x=-5,p.lights.directional.position.y=0,p.lights.directionalRight.position.x=5,p.lights.directionalRight.position.y=0}p.lights.directional.target.position.set(0,0,0),p.lights.directionalRight.target.position.set(0,0,0),Os()}),_e("complexModeButton","click",()=>{p.lightingMode="complex",Pl(),Os()});const i=document.getElementById("dropZone"),e=document.getElementById("fileUpload");i&&e&&(i.addEventListener("click",()=>{e.click()}),i.addEventListener("dragover",t=>{t.preventDefault(),t.stopPropagation(),i.classList.add("dragover")}),i.addEventListener("dragleave",t=>{t.preventDefault(),t.stopPropagation(),i.classList.remove("dragover")}),i.addEventListener("drop",t=>{t.preventDefault(),t.stopPropagation(),i.classList.remove("dragover");const n=Array.from(t.dataTransfer.files);n.length!==0&&(p.assembly.mode==="developer"?Il(n):(n.length>1&&rt("Multiple files detected. Enter Developer Mode for assembly features.","warning"),Fl(n[0])))}),e.addEventListener("change",t=>{const n=Array.from(t.target.files);n.length!==0&&(p.assembly.mode==="developer"?Il(n):(n.length>1&&rt("Multiple files detected. Enter Developer Mode for assembly features.","warning"),Fl(n[0])))})),_e("saveToFile","click",async()=>{console.log("Starting capture process...");const n=`3d-model-capture-${new Date().toISOString().replace(/[:.]/g,"-").split("T")[0]}.png`;let s=!1;setTimeout(()=>{s||(console.error("Capture timed out, falling back to regular capture"),gh(r=>{Oa(r,n,"image/png")}))},1e4),od(r=>{s=!0,Oa(r,n,"image/png")})}),_e("saveToClipboard","click",async()=>{if(console.log("Starting clipboard copy..."),!navigator.clipboard){rt("Clipboard API not supported in this browser","error");return}try{rt("Copying to clipboard...","loading"),od(async t=>{if(!t){rt("Failed to create image blob","error");return}try{const n=new ClipboardItem({"image/png":t});await navigator.clipboard.write([n]),rt("Image copied to clipboard successfully! ✓","success"),setTimeout(()=>{rt("","success")},3e3)}catch(n){console.error("Clipboard write failed:",n);try{const s=document.createElement("div");s.style.position="fixed",s.style.zIndex="10000",s.style.backgroundColor="rgba(250, 250, 250, 0.5)",s.style.border="none",s.style.borderRadius="8px",s.style.padding="10px",s.style.boxShadow="0 2px 6px rgba(0, 0, 0, 0.08)",s.style.display="flex",s.style.flexDirection="column",s.style.pointerEvents="auto";const o=document.querySelector(".viewer-container").getBoundingClientRect(),a=o.left+o.width/2,l=o.top+o.height/2;s.style.left=a+"px",s.style.top=l+"px",s.style.transform="translate(-50%, -50%)",s.style.width="440px",s.style.maxHeight="550px";const c=document.createElement("img");c.src=URL.createObjectURL(t),c.style.width="100%",c.style.height="auto",c.style.maxWidth="100%",c.style.maxHeight="calc(100% - 30px)",c.style.objectFit="contain",c.style.borderRadius="8px",c.style.marginBottom="10px",c.style.pointerEvents="auto";const d=document.createElement("div");d.style.display="flex",d.style.justifyContent="space-between",d.style.alignItems="flex-end",d.style.fontSize="12px",d.style.color="#999",d.style.marginTop="auto",d.style.fontFamily="'Arial', sans-serif";const u=document.createElement("div");u.textContent="(Left-click to exit)",u.style.fontSize="12px",u.style.color="#999",u.style.fontWeight="normal",u.style.textTransform="none",u.style.fontFamily="'Arial', sans-serif",u.style.lineHeight="1",u.style.letterSpacing="normal",u.style.webkitFontSmoothing="antialiased",u.style.mozOsxFontSmoothing="grayscale",u.style.textRendering="optimizeLegibility";const h=document.createElement("div");h.textContent="(Right-click to select Copy options)",h.style.fontSize="12px",h.style.color="#999",h.style.fontWeight="normal",h.style.textTransform="none",h.style.fontFamily="'Arial', sans-serif",h.style.lineHeight="1",h.style.letterSpacing="normal",h.style.webkitFontSmoothing="antialiased",h.style.mozOsxFontSmoothing="grayscale",h.style.textRendering="optimizeLegibility",d.appendChild(u),d.appendChild(h),s.appendChild(c),s.appendChild(d),s.addEventListener("click",f=>{f.target!==c&&(document.body.removeChild(s),URL.revokeObjectURL(c.src))}),setTimeout(()=>{document.body.contains(s)&&(document.body.removeChild(s),URL.revokeObjectURL(c.src))},15e3),document.body.appendChild(s),rt("Clipboard blocked by browser. Use overlay to copy image.","error")}catch(s){console.error("Fallback failed:",s),rt("Failed to copy to clipboard. Try right-click → Copy Image instead.","error")}}})}catch(t){console.error("Capture setup failed:",t),rt("Failed to setup clipboard capture","error")}}),_e("saveSceneButton","click",async()=>{const n=`3d-model-scene-${new Date().toISOString().replace(/[:.]/g,"-").split("T")[0]}.json`;try{const s=RM(),r=JSON.stringify(s,null,2),o=new Blob([r],{type:"application/json"});await Oa(o,n,"application/json")}catch(s){console.error("Error saving scene:",s),CM(n)}}),_e("loadSceneButton","click",()=>{LM()}),gt("posX","posXNum"),gt("posY","posYNum"),gt("posZ","posZNum"),gt("rotX","rotXNum"),gt("rotY","rotYNum"),gt("rotZ","rotZNum"),gt("modelRotX","modelRotXNum"),gt("modelRotY","modelRotYNum"),gt("modelRotZ","modelRotZNum"),gt("modelYaw","modelYawNum"),gt("modelPitch","modelPitchNum"),gt("modelRoll","modelRollNum"),gt("modelZoom","modelZoomNum"),gt("metalness","metalnessNum"),gt("roughness","roughnessNum"),gt("transparency","transparencyNum"),gt("alphaValue","alphaValueNum"),gt("raycastSamples","raycastSamplesNum"),gt("visibilityThreshold","visibilityThresholdNum"),gt("directionalLight","directionalLightNum"),gt("directionalLightRight","directionalRightNum"),gt("ambientLight","ambientLightNum"),_e("posX","input",t=>{p.camera&&(p.camera.position.x=parseFloat(t.target.value),ut())}),_e("posY","input",t=>{p.camera&&(p.camera.position.y=parseFloat(t.target.value),ut())}),_e("posZ","input",t=>{p.camera&&(p.camera.position.z=parseFloat(t.target.value),ut())}),_e("relativePosition","input",t=>{if(p.assembly.mode!=="developer")return;const n=Co();if(!n||!p.camera)return;const s=parseFloat(t.target.value),r=Nl(s,n),o=p.camera.position.clone().normalize();p.camera.position.copy(o.multiplyScalar(r)),H("relativePositionNum",s),ut()}),_e("relativePositionNum","input",t=>{if(p.assembly.mode!=="developer")return;const n=Co();if(!n||!p.camera)return;const s=parseFloat(t.target.value),r=Nl(s,n),o=p.camera.position.clone().normalize();p.camera.position.copy(o.multiplyScalar(r)),H("relativePosition",s),ut()}),_e("rotX","input",t=>{p.camera&&(p.camera.rotation.x=Vt(parseFloat(t.target.value)),ut())}),_e("rotY","input",t=>{p.camera&&(p.camera.rotation.y=Vt(parseFloat(t.target.value)),ut())}),_e("rotZ","input",t=>{p.camera&&(p.camera.rotation.z=Vt(parseFloat(t.target.value)),ut())}),_e("modelRotX","input",t=>{const n=Vt(parseFloat(t.target.value));p.assembly.mode==="basic"&&p.model?(p.model.rotation.x=n,Ts()):p.assembly.mode==="developer"&&p.assembly.models.forEach(s=>{s.mesh&&s.visible&&!s.locked&&(s.mesh.rotation.x=n)}),ut()}),_e("modelRotY","input",t=>{const n=Vt(parseFloat(t.target.value));p.assembly.mode==="basic"&&p.model?(p.model.rotation.y=n,Ts()):p.assembly.mode==="developer"&&p.assembly.models.forEach(s=>{s.mesh&&s.visible&&!s.locked&&(s.mesh.rotation.y=n)}),ut()}),_e("modelRotZ","input",t=>{const n=Vt(parseFloat(t.target.value));p.assembly.mode==="basic"&&p.model?(p.model.rotation.z=n,Ts()):p.assembly.mode==="developer"&&p.assembly.models.forEach(s=>{s.mesh&&s.visible&&!s.locked&&(s.mesh.rotation.z=n)}),ut()}),_e("modelYaw","input",t=>{const n=parseFloat(t.target.value);if(p.assembly.mode==="basic"&&p.model){const s=Vt(n),r=p.model.rotation.x,o=p.model.rotation.z;p.model.rotation.order="YXZ",p.model.rotation.set(r,s,o),p.modelYaw=n,ws()}else if(p.assembly.mode==="developer"){const s=Vt(n);p.assembly.models.forEach(r=>{if(r.mesh&&r.visible&&!r.locked){const o=r.mesh.rotation.x,a=r.mesh.rotation.z;r.mesh.rotation.order="YXZ",r.mesh.rotation.set(o,s,a)}}),p.modelYaw=n}ut()}),_e("modelPitch","input",t=>{const n=parseFloat(t.target.value);if(p.assembly.mode==="basic"&&p.model){const s=p.model.rotation.y,r=Vt(n),o=p.model.rotation.z;p.model.rotation.order="YXZ",p.model.rotation.set(r,s,o),p.modelPitch=n,ws()}else if(p.assembly.mode==="developer"){const s=Vt(n);p.assembly.models.forEach(r=>{if(r.mesh&&r.visible&&!r.locked){const o=r.mesh.rotation.y,a=r.mesh.rotation.z;r.mesh.rotation.order="YXZ",r.mesh.rotation.set(s,o,a)}}),p.modelPitch=n}ut()}),_e("modelRoll","input",t=>{const n=parseFloat(t.target.value);if(p.assembly.mode==="basic"&&p.model){const s=p.model.rotation.y,r=p.model.rotation.x,o=Vt(n);p.model.rotation.order="YXZ",p.model.rotation.set(r,s,o),p.modelRoll=n,ws()}else if(p.assembly.mode==="developer"){const s=Vt(n);p.assembly.models.forEach(r=>{if(r.mesh&&r.visible&&!r.locked){const o=r.mesh.rotation.y,a=r.mesh.rotation.x;r.mesh.rotation.order="YXZ",r.mesh.rotation.set(a,o,s)}}),p.modelRoll=n}ut()}),_e("modelZoom","input",t=>{if(p.model){const n=parseFloat(t.target.value);p.model.scale.set(n,n,n)}}),_e("materialColor","input",t=>{fh(t.target.value)}),_e("metalness","input",t=>{gi("metalness",parseFloat(t.target.value))}),_e("roughness","input",t=>{gi("roughness",parseFloat(t.target.value))}),_e("objectTransparency","input",async t=>{p.objectTransparency=parseFloat(t.target.value),gt("objectTransparency","objectTransparencyNum",p.objectTransparency),await cr()}),_e("surfaceTransparency","input",async t=>{p.surfaceTransparency=parseFloat(t.target.value),gt("surfaceTransparency","surfaceTransparencyNum",p.surfaceTransparency),await cr()}),_e("alphaValue","input",t=>{gi("alphaValue",parseFloat(t.target.value))}),_e("raycastSamples","input",t=>{gi("raycastSamples",parseInt(t.target.value))}),_e("visibilityThreshold","input",t=>{gi("visibilityThreshold",parseFloat(t.target.value))}),_e("posXNum","input",t=>{p.camera&&(p.camera.position.x=parseFloat(t.target.value),ut())}),_e("posYNum","input",t=>{p.camera&&(p.camera.position.y=parseFloat(t.target.value),ut())}),_e("posZNum","input",t=>{p.camera&&(p.camera.position.z=parseFloat(t.target.value),ut())}),_e("rotXNum","input",t=>{p.camera&&(p.camera.rotation.x=Vt(parseFloat(t.target.value)),ut())}),_e("rotYNum","input",t=>{p.camera&&(p.camera.rotation.y=Vt(parseFloat(t.target.value)),ut())}),_e("rotZNum","input",t=>{p.camera&&(p.camera.rotation.z=Vt(parseFloat(t.target.value)),ut())}),_e("resetCameraRanges","click",()=>{sd()})}function uc(){const i=document.querySelector(".scrollable-sections"),e=document.querySelector(".controls-panel");if(i&&e){const t=i.scrollTop,n=i.clientHeight,s=i.scrollHeight,r=t>0,o=t+n<s-1;e.classList.toggle("content-above",r),e.classList.toggle("content-below",o),console.log(`ScrollFade Update: Above: ${r}, Below: ${o}`)}}function fM(){const i=document.querySelector(".scrollable-sections");i&&(console.log("Scroll detection setup successful"),i.addEventListener("scroll",uc))}function xh(){const i=document.querySelector(".controls-panel"),e=document.querySelector(".sticky-header"),t=document.querySelector(".scrollable-sections");if(i&&e&&t){const n=i.clientHeight,s=e.clientHeight,r=n-40,o=r-s-20;t.style.height=`${o}px`,console.log(`Controls: ${n}px, Sticky: ${s}px, Available: ${r}px, Scrollable: ${o}px`)}}function pM(){_e("resetCamera","click",()=>{p.camera&&(p.camera.position.set(0,0,5),p.camera.rotation.set(0,0,0),H("posX",0),H("posXNum",0),H("posY",0),H("posYNum",0),H("posZ",5),H("posZNum",5),H("rotX",0),H("rotXNum",0),H("rotY",0),H("rotYNum",0),H("rotZ",0),H("rotZNum",0),ut())}),_e("modelRotXNum","input",i=>{p.model&&(p.model.rotation.x=Vt(parseFloat(i.target.value)),Ts(),ut())}),_e("modelRotYNum","input",i=>{p.model&&(p.model.rotation.y=Vt(parseFloat(i.target.value)),Ts(),ut())}),_e("modelRotZNum","input",i=>{p.model&&(p.model.rotation.z=Vt(parseFloat(i.target.value)),Ts(),ut())}),_e("modelYawNum","input",i=>{if(p.model){const e=Vt(parseFloat(i.target.value)),t=p.model.rotation.x,n=p.model.rotation.z;p.model.rotation.order="YXZ",p.model.rotation.set(t,e,n),p.modelYaw=parseFloat(i.target.value),ws(),ut()}}),_e("modelPitchNum","input",i=>{if(p.model){const e=p.model.rotation.y,t=Vt(parseFloat(i.target.value)),n=p.model.rotation.z;p.model.rotation.order="YXZ",p.model.rotation.set(t,e,n),p.modelPitch=parseFloat(i.target.value),ws(),ut()}}),_e("modelRollNum","input",i=>{if(p.model){const e=p.model.rotation.y,t=p.model.rotation.x,n=Vt(parseFloat(i.target.value));p.model.rotation.order="YXZ",p.model.rotation.set(t,e,n),p.modelRoll=parseFloat(i.target.value),ws(),ut()}}),_e("resetModel","click",()=>{p.model&&(p.model.rotation.set(0,0,0),p.model.rotation.order="XYZ",p.model.scale.set(1,1,1),p.modelYaw=0,p.modelPitch=0,p.modelRoll=0,H("modelRotX",0),H("modelRotXNum",0),H("modelRotY",0),H("modelRotYNum",0),H("modelRotZ",0),H("modelRotZNum",0),H("modelYaw",0),H("modelYawNum",0),H("modelPitch",0),H("modelPitchNum",0),H("modelRoll",0),H("modelRollNum",0),H("modelZoom",1),H("modelZoomNum",1),ut())}),_e("metalnessNum","input",i=>{gi("metalness",parseFloat(i.target.value))}),_e("roughnessNum","input",i=>{gi("roughness",parseFloat(i.target.value))}),_e("objectTransparencyNum","input",async i=>{p.objectTransparency=parseFloat(i.target.value),gt("objectTransparencyNum","objectTransparency",p.objectTransparency),await cr()}),_e("surfaceTransparencyNum","input",async i=>{p.surfaceTransparency=parseFloat(i.target.value),gt("surfaceTransparencyNum","surfaceTransparency",p.surfaceTransparency),await cr()}),_e("surfaceMode","change",async i=>{p.transparencyMode=i.target.value,await cr()}),_e("complexMaterialButton","click",()=>{p.materialMode=p.materialMode==="default"?"complex":"default",_h()})}function dc(){document.querySelectorAll(".control-section[data-section]").forEach(e=>{const t=e.querySelector(".section-header"),n=e.dataset.section;t&&n&&(t.addEventListener("click",()=>{ld(e,n)}),t.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),ld(e,n))}))}),yM()}function ld(i,e){const t=i.classList.contains("collapsed"),n=i.querySelector(".section-header");t?mM(i,n):vh(i,n),gM(e,!t),setTimeout(uc,100)}function vh(i,e){i.classList.add("collapsed"),e.setAttribute("aria-expanded","false");const t=e.querySelector(".collapse-icon");t&&(t.textContent="▼")}function mM(i,e){i.classList.remove("collapsed"),e.setAttribute("aria-expanded","true");const t=e.querySelector(".collapse-icon");t&&(t.textContent="−");const n=i.getAttribute("data-section");if(console.log(`Expanding section: ${n}`),n==="developer"){console.log("DEVELOPER section detected - auto-scrolling to bottom");const s=document.querySelector(".scrollable-sections");s&&setTimeout(()=>{s.scrollTop=s.scrollHeight},100)}}function gM(i,e){try{const t=JSON.parse(localStorage.getItem("collapsedSections")||"{}");t[i]=e,localStorage.setItem("collapsedSections",JSON.stringify(t))}catch(t){console.warn("Failed to save collapsed state:",t)}}function yM(){try{const i=JSON.parse(localStorage.getItem("collapsedSections")||"{}");Object.entries(i).forEach(([e,t])=>{const n=document.querySelector(`[data-section="${e}"]`),s=n?.querySelector(".section-header");if(n&&s)if(t)vh(n,s);else{const r=s.querySelector(".collapse-icon");r&&(r.textContent="−")}})}catch(i){console.warn("Failed to load collapsed states:",i)}}function _M(){const i=document.getElementById("instructions"),e=i.querySelector(".title-hint");!i||!e||i.addEventListener("dblclick",t=>{t.preventDefault(),t.stopPropagation(),i.classList.contains("collapsed")?(i.classList.remove("collapsed"),e.textContent="(Double-click to hide)"):(i.classList.add("collapsed"),e.textContent="(Double-click to open)")})}function xM(){const i=document.getElementById("loadSavePanel"),e=i.querySelector(".title-hint");!i||!e||i.addEventListener("dblclick",t=>{t.preventDefault(),t.stopPropagation(),i.classList.contains("collapsed")?(i.classList.remove("collapsed"),e.textContent="(Double-click to hide)"):(i.classList.add("collapsed"),e.textContent="(Double-click to open)")})}function vM(){const i=document.querySelector(".sun-control"),e=document.getElementById("left-light-icon"),t=document.getElementById("right-light-icon");if(!i||!e||!t)return;const n=()=>i.getBoundingClientRect(),s=d=>{const u=n(),h=(d.x+10)/20,f=(d.y+10)/20;return{x:h*u.width,y:(1-f)*u.height}},r=(d,u)=>{d.style.left=`${u.x}px`,d.style.top=`${u.y}px`},o=(d,u,h=30)=>{const f=d.x-u.x,y=d.y-u.y;return Math.sqrt(f*f+y*y)<h};document.getElementById("left-direction-arrow"),document.getElementById("right-direction-arrow"),r(e,s(p.lights.directional.position)),r(t,s(p.lights.directionalRight.position));function a(d,u,h,f){let y=!1,_={x:0,y:0};d.addEventListener("mousedown",g=>{y=!0,_={x:g.clientX,y:g.clientY},d.style.cursor="grabbing"}),window.addEventListener("mousemove",g=>{if(!y)return;Math.sqrt(Math.pow(g.clientX-_.x,2)+Math.pow(g.clientY-_.y,2));const m=n();let w=g.clientX-m.left,E=g.clientY-m.top;const x=20,I=x/2;w=Math.max(I,Math.min(m.width-I,w)),E=Math.max(I,Math.min(m.height-I,E));const N=h.getBoundingClientRect(),P={x:N.left-m.left+x/2,y:N.top-m.top+x/2};if(o({x:w,y:E},P)){const b=w-P.x,D=E-P.y,$=Math.sqrt(b*b+D*D);if($>0){const j=30/$;w=P.x+b*j,E=P.y+D*j,w=Math.max(I,Math.min(m.width-I,w)),E=Math.max(I,Math.min(m.height-I,E))}}r(d,{x:w,y:E});const U=w/m.width*20-10,T=(1-E/m.height)*20-10;if(u.position.x=U,u.position.y=T,ir(u,f),Mo(),p.lightDisplayMode==="fans"&&bo(),p.lightingMode==="complex"){const b=E/m.height;d.style.transform=`translate(-50%, -50%) ${d.classList.contains("flipped")?"scaleX(-1)":""}`;const D=(.5-b)*10;u.target.position.y=D}else d.style.transform=`translate(-50%, -50%) ${d.classList.contains("flipped")?"scaleX(-1)":""}`,u.target.position.set(0,0,0)}),window.addEventListener("mouseup",()=>{y=!1,d.style.cursor="grab"})}a(e,p.lights.directional,t,"left"),a(t,p.lights.directionalRight,e,"right");function l(d,u){if(!d)return;let h=null,f=!1;const y=5;d.addEventListener("mousedown",_=>{h={x:_.clientX,y:_.clientY},f=!1}),d.addEventListener("mousemove",_=>{h&&Math.sqrt(Math.pow(_.clientX-h.x,2)+Math.pow(_.clientY-h.y,2))>y&&(f=!0)}),d.addEventListener("mouseup",_=>{h=null}),d.addEventListener("click",_=>{if(_.preventDefault(),_.stopPropagation(),f)console.log(`${u} icon drag detected - maintaining current direction`);else{u==="left"?p.leftLightDirectionIn=!p.leftLightDirectionIn:p.rightLightDirectionIn=!p.rightLightDirectionIn,Mo(),p.lightDisplayMode==="fans"&&bo();const g=u==="left"?p.lights.directional:p.lights.directionalRight;ir(g,u),console.log(`${u} light direction clicked (no drag):`,u==="left"?p.leftLightDirectionIn:p.rightLightDirectionIn)}f=!1}),d.addEventListener("dblclick",_=>{if(_.preventDefault(),_.stopPropagation(),!f){u==="left"?p.leftLightDirectionIn=!p.leftLightDirectionIn:p.rightLightDirectionIn=!p.rightLightDirectionIn,Mo(),p.lightDisplayMode==="fans"&&bo();const g=u==="left"?p.lights.directional:p.lights.directionalRight;ir(g,u),console.log(`${u} light direction double-clicked (no drag):`,u==="left"?p.leftLightDirectionIn:p.rightLightDirectionIn)}})}l(e,"left"),l(t,"right");const c=document.querySelector(".sun-control");c&&c.addEventListener("dblclick",d=>{d.preventDefault(),d.stopPropagation(),MM()}),Os(),ir(p.lights.directional,"left"),ir(p.lights.directionalRight,"right")}function ir(i,e){if(e==="left"?p.leftLightDirectionIn:p.rightLightDirectionIn)i.target.position.set(0,0,0);else{const n=i.position,s=new O(-n.x*2,-n.y*2,-n.z*2);i.target.position.copy(s)}}function Mo(){const i=document.getElementById("left-light-icon"),e=document.getElementById("right-light-icon"),t=document.getElementById("left-direction-arrow"),n=document.getElementById("right-direction-arrow"),s=document.querySelector(".sun-control");if(!i||!e||!t||!n||!s)return;const r=i.getBoundingClientRect(),o=e.getBoundingClientRect(),a=s.getBoundingClientRect(),d=12+10,u=r.left+r.width/2-a.left,h=r.top+r.height/2-a.top,f=o.left+o.width/2-a.left,y=o.top+o.height/2-a.top,_=h/a.height,g=y/a.height;function m(b,D){return D?b<=.5?135-b*2*45:90-(b-.5)*2*45:b<=.5?225+b*2*45:270+(b-.5)*2*45}let w,E;p.lightingMode==="basic"?(w=p.leftLightDirectionIn?90:270,E=p.rightLightDirectionIn?270:90):(p.leftLightDirectionIn?w=m(_,!0):w=m(_,!0)+180,p.rightLightDirectionIn?E=m(g,!1):E=m(g,!1)+180);const x=(w-90)*Math.PI/180,I=(E-90)*Math.PI/180,N=u+Math.cos(x)*d,P=h+Math.sin(x)*d,U=f+Math.cos(I)*d,T=y+Math.sin(I)*d;t.style.left=`${N}px`,t.style.top=`${P}px`,t.style.transform=`translate(-50%, -50%) rotate(${w}deg)`,n.style.left=`${U}px`,n.style.top=`${T}px`,n.style.transform=`translate(-50%, -50%) rotate(${E}deg)`}function MM(){p.lightDisplayMode=p.lightDisplayMode==="arrows"?"fans":"arrows",Os()}function Os(){const i=document.getElementById("left-direction-arrow"),e=document.getElementById("right-direction-arrow"),t=document.getElementById("left-light-fan"),n=document.getElementById("right-light-fan");p.lightDisplayMode==="arrows"?(i&&(i.style.display="block"),e&&(e.style.display="block"),t&&(t.style.display="none"),n&&(n.style.display="none"),Mo()):(i&&(i.style.display="none"),e&&(e.style.display="none"),t&&(t.style.display="block"),n&&(n.style.display="block"),bo())}function bo(){const i=document.getElementById("left-light-icon"),e=document.getElementById("right-light-icon"),t=document.getElementById("left-light-fan"),n=document.getElementById("right-light-fan"),s=document.querySelector(".sun-control");if(!i||!e||!t||!n||!s)return;const r=i.getBoundingClientRect(),o=e.getBoundingClientRect(),a=s.getBoundingClientRect(),l=r.left+r.width/2-a.left,c=r.top+r.height/2-a.top,d=o.left+o.width/2-a.left,u=o.top+o.height/2-a.top,h=c/a.height,f=u/a.height;function y(m,w){return w?m<=.5?135-m*2*45:90-(m-.5)*2*45:m<=.5?225+m*2*45:270+(m-.5)*2*45}let _,g;p.lightingMode==="basic"?(_=p.leftLightDirectionIn?90:270,g=p.rightLightDirectionIn?270:90):(p.leftLightDirectionIn?_=y(h,!0):_=y(h,!0)+180,p.rightLightDirectionIn?g=y(f,!1):g=y(f,!1)+180),t.style.left=`${l}px`,t.style.top=`${c}px`,t.style.transform=`translate(-50%, -50%) rotate(${_}deg)`,n.style.left=`${d}px`,n.style.top=`${u}px`,n.style.transform=`translate(-50%, -50%) rotate(${g}deg)`}function bM(){console.log("Setting up guide line controls..."),gt("lineThickness","lineThicknessNum"),gt("lineTransparency","lineTransparencyNum"),gt("lineAngle","lineAngleNum"),gt("linePosY","linePosYNum"),_e("lineThickness","input",i=>{p.guideLines[0].thickness=parseFloat(i.target.value),Gt()}),_e("lineColour","input",i=>{p.guideLines[0].colour=i.target.value,Gt()}),_e("lineTransparency","input",i=>{p.guideLines[0].transparency=parseFloat(i.target.value),Gt()}),_e("lineAngle","input",i=>{p.guideLines[0].angle=parseFloat(i.target.value),Gt()}),_e("linePosY","input",i=>{p.guideLines[0].posY=parseFloat(i.target.value),Gt()}),_e("lineThicknessNum","input",i=>{p.guideLines[0].thickness=parseFloat(i.target.value),Gt()}),_e("lineTransparencyNum","input",i=>{p.guideLines[0].transparency=parseFloat(i.target.value),Gt()}),_e("lineAngleNum","input",i=>{p.guideLines[0].angle=parseFloat(i.target.value),Gt()}),_e("linePosYNum","input",i=>{p.guideLines[0].posY=parseFloat(i.target.value),Gt()}),window.addGuideLine=function(){console.log("Adding new guide line...");const i=p.guideLines.length>0?Math.max(...p.guideLines.map(t=>t.id))+1:0,e={id:i,thickness:5,colour:"#FFFF66",transparency:.5,angle:0,posY:0};p.guideLines.push(e),window.addGuideLineControl(e),Gt(),setTimeout(()=>{const t=document.querySelector(`[data-id="${i}"]`);t&&(t.style.display="block",console.log(`New guide line ${i} set to visible`))},50),window.updateGuideLineTitles()},window.deleteGuideLine=function(i){console.log("Deleting guide line with id:",i),p.guideLines=p.guideLines.filter(t=>t.id!==i);const e=document.querySelector(`.control-section[data-guideline-id='${i}']`);e&&e.remove(),Gt(),window.updateGuideLineTitles()},_e("addLine","click",window.addGuideLine),_e("hideUnhideGuide","click",function(i){i.preventDefault(),nM(),ad()}),console.log("Setting up auto-hide timer..."),console.log("Current sessionStorage guideLineUserInteracted:",sessionStorage.getItem("guideLineUserInteracted")),sessionStorage.removeItem("guideLineUserInteracted"),console.log("Cleared sessionStorage for testing"),setTimeout(()=>{console.log("Auto-hide timer fired!"),Qv()},1e3),window.addGuideLineControl=function(i){const n=document.getElementById("guideline-template").content.cloneNode(!0).querySelector(".control-section");n.dataset.guidelineId=i.id;const s=n.querySelector("h3");s.textContent=`Guide Line ${p.guideLines.length}`;const r=n.querySelector(".remove-line");r?r.addEventListener("click",()=>window.deleteGuideLine(i.id)):console.error("Remove button not found in template!");const o=n.querySelector(".add-line-below");o?o.addEventListener("click",window.addGuideLine):console.error("Add line below button not found in template!");const a=n.querySelector(".hide-unhide-guide");a?a.addEventListener("click",()=>ad(i.id)):console.error("Hide/Unhide button not found in additional pane template!");const l=n.querySelector(".line-colour");l.value=i.colour,l.addEventListener("input",w=>{i.colour=w.target.value,Gt()});const c=n.querySelector(".line-thickness"),d=n.querySelector(".line-thickness-num");c.value=i.thickness,d.value=i.thickness,c.addEventListener("input",w=>{i.thickness=parseFloat(w.target.value),Gt()}),d.addEventListener("input",w=>{i.thickness=parseFloat(w.target.value),Gt()});const u=n.querySelector(".line-transparency"),h=n.querySelector(".line-transparency-num");u.value=i.transparency,h.value=i.transparency,u.addEventListener("input",w=>{i.transparency=parseFloat(w.target.value),Gt()}),h.addEventListener("input",w=>{i.transparency=parseFloat(w.target.value),Gt()});const f=n.querySelector(".line-angle"),y=n.querySelector(".line-angle-num");f.value=i.angle,y.value=i.angle,f.addEventListener("input",w=>{i.angle=parseFloat(w.target.value),Gt()}),y.addEventListener("input",w=>{i.angle=parseFloat(w.target.value),Gt()});const _=n.querySelector(".line-pos-y"),g=n.querySelector(".line-pos-y-num");_.value=i.posY,g.value=i.posY,_.addEventListener("input",w=>{i.posY=parseFloat(w.target.value),Gt()}),g.addEventListener("input",w=>{i.posY=parseFloat(w.target.value),Gt()});const m=document.querySelector('[data-section="camera"]');m.parentNode.insertBefore(n,m),dc(),uo(c,d),uo(u,h),uo(f,y),uo(_,g)},window.updateGuideLineTitles=function(){document.querySelectorAll('[data-section="guideline"], [data-section="guideline-added"]').forEach((e,t)=>{const n=e.querySelector("h3");p.guideLines.length>1?n.textContent=`Guide Line ${t+1}`:n.textContent="Guide Line"})},console.log("Guide line controls setup complete.")}function cd(){const i=document.querySelector(".viewer-container");if(p.camera&&p.renderer&&i){const e=i.clientWidth,t=i.clientHeight;p.camera.aspect=e/t,p.camera.updateProjectionMatrix(),p.renderer.setSize(e,t),Gt(),xh()}}function EM(){const i=document.querySelector(".viewer-container");p.scene=new gr,p.scene.background=null,p.camera=new on(50,i.clientWidth/i.clientHeight,.1,1e3),p.camera.position.set(0,0,5),p.renderer=new rc({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),p.renderer.setSize(i.clientWidth,i.clientHeight),p.renderer.setPixelRatio(window.devicePixelRatio),i.appendChild(p.renderer.domElement),p.lights.ambient=new zd(16777215,.4),p.scene.add(p.lights.ambient),p.lights.directional=new Ro(16777215,.6),p.lights.directional.position.set(5,5,5),p.lights.directional.castShadow=!1,p.scene.add(p.lights.directional),p.lights.directional.target=new kt,p.scene.add(p.lights.directional.target),p.lights.directionalRight=new Ro(16777215,0),p.lights.directionalRight.position.set(-5,5,5),p.lights.directionalRight.castShadow=!1,p.scene.add(p.lights.directionalRight),p.lights.directionalRight.target=new kt,p.scene.add(p.lights.directionalRight.target),rM("default"),Yv(),cd(),window.addEventListener("resize",cd),yh();const e=document.getElementById("loading");e?(e.style.display="none",console.log("✅ Loading screen hidden successfully")):console.warn("⚠️ Loading element not found")}function SM(){const i=document.getElementById("left-light-icon"),e=document.getElementById("right-light-icon"),t=document.querySelector(".sun-control");if(i&&e&&t){const n=t.getBoundingClientRect(),s=n.height/2,r=n.width*.25,o=n.width*.75;i.style.left=`${r}px`,i.style.top=`${s}px`,e.style.left=`${o}px`,e.style.top=`${s}px`,i.style.transform="translate(-50%, -50%)",e.style.transform="translate(-50%, -50%) scaleX(-1)",p.lights.directional&&p.lights.directionalRight&&(p.lights.directional.position.x=-5,p.lights.directional.position.y=0,p.lights.directionalRight.position.x=5,p.lights.directionalRight.position.y=0,p.lights.directional.target.position.set(0,0,0),p.lights.directionalRight.target.position.set(0,0,0)),Os()}}function TM(){setTimeout(()=>{document.querySelectorAll('.color-input, input[type="color"]').forEach(n=>{n.style.background="rgba(250, 250, 250, 0.9)",n.style.border="0px solid transparent",n.style.borderRadius="6px",n.style.outline="none",n.style.webkitAppearance="none",n.style.appearance="none",n.style.boxShadow="none"});const e=document.createElement("style");e.id="edge-color-picker-fix",e.innerHTML=`
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
            `,document.head.appendChild(n)},50),console.log("Edge color picker styling fix applied via JavaScript")},100)}async function wM(){try{EM(),hM(),vM(),SM(),TM(),bM(),dc(),_M(),xM(),uM(),Pl(),dM(),fM(),xh(),setTimeout(uc,100),pM(),H("lineThickness",p.guideLines[0].thickness),H("lineThicknessNum",p.guideLines[0].thickness),H("lineColour",p.guideLines[0].colour),H("lineTransparency",p.guideLines[0].transparency),H("lineTransparencyNum",p.guideLines[0].transparency),H("lineAngle",p.guideLines[0].angle),H("lineAngleNum",p.guideLines[0].angle),H("linePosY",p.guideLines[0].posY),H("linePosYNum",p.guideLines[0].posY),Gt(),_h(),Ox(),console.log("✅ 3D Model Viewer initialized successfully")}catch(i){console.error("❌ Error initializing viewer:",i),AM("Failed to initialize 3D viewer")}}function AM(i){const e=document.getElementById("loading");e&&(e.innerHTML=`
            <div style="color: #ff6b6b; text-align: center;">
                <div style="font-size: 18px; margin-bottom: 10px;">⚠️ ${i}</div>
                <div style="font-size: 14px; color: #666;">Please refresh the page to try again</div>
            </div>
        `)}function RM(){return{version:"2.0",timestamp:new Date().toISOString(),camera:{position:{x:p.camera.position.x,y:p.camera.position.y,z:p.camera.position.z},rotation:{x:p.camera.rotation.x,y:p.camera.rotation.y,z:p.camera.rotation.z}},model:{type:p.currentModelType,rotation:{x:p.model?p.model.rotation.x:0,y:p.model?p.model.rotation.y:0,z:p.model?p.model.rotation.z:0},yaw:p.modelYaw,pitch:p.modelPitch,roll:p.modelRoll},lighting:{mode:p.lightingMode,ambient:p.lights.ambient?p.lights.ambient.intensity:.4,directional:{left:p.lights.directional?p.lights.directional.intensity:.6,right:p.lights.directionalRight?p.lights.directionalRight.intensity:0}},materials:{mode:p.materialMode,color:document.getElementById("materialColor")?document.getElementById("materialColor").value:"#4CAF50",metalness:parseFloat(document.getElementById("metalness")?document.getElementById("metalness").value:"0.1"),roughness:parseFloat(document.getElementById("roughness")?document.getElementById("roughness").value:"0.8"),transparency:parseFloat(document.getElementById("transparency")?document.getElementById("transparency").value:"1"),transparencyMode:p.transparencyMode},guideLines:p.guideLines.map(i=>{const e=document.querySelector(`[data-id="${i.id}"]`),t=e&&e.style.display!=="none"&&getComputedStyle(e).display!=="none";return{id:i.id,thickness:i.thickness,colour:i.colour,transparency:i.transparency,angle:i.angle,posY:i.posY,visible:t}})}}function CM(i=null){try{const e={version:"2.0",timestamp:new Date().toISOString(),camera:{position:{x:p.camera.position.x,y:p.camera.position.y,z:p.camera.position.z},rotation:{x:p.camera.rotation.x,y:p.camera.rotation.y,z:p.camera.rotation.z}},model:{type:p.currentModelType,rotation:{x:p.model?p.model.rotation.x:0,y:p.model?p.model.rotation.y:0,z:p.model?p.model.rotation.z:0},yaw:p.modelYaw,pitch:p.modelPitch,roll:p.modelRoll},lighting:{mode:p.lightingMode,ambient:p.lights.ambient?p.lights.ambient.intensity:.4,directional:{left:p.lights.directional?p.lights.directional.intensity:.6,right:p.lights.directionalRight?p.lights.directionalRight.intensity:0}},materials:{mode:p.materialMode,color:document.getElementById("materialColor")?document.getElementById("materialColor").value:"#4CAF50",metalness:parseFloat(document.getElementById("metalness")?document.getElementById("metalness").value:"0.1"),roughness:parseFloat(document.getElementById("roughness")?document.getElementById("roughness").value:"0.8"),transparency:parseFloat(document.getElementById("transparency")?document.getElementById("transparency").value:"1"),transparencyMode:p.transparencyMode},guideLines:p.guideLines.map(a=>{const l=document.querySelector(`[data-id="${a.id}"]`),c=l&&l.style.display!=="none"&&getComputedStyle(l).display!=="none";return{id:a.id,thickness:a.thickness,colour:a.colour,transparency:a.transparency,angle:a.angle,posY:a.posY,visible:c}})};let t;if(i)t=i;else{const a=`3d-viewer-scene-${new Date().toISOString().split("T")[0]}`,l=prompt("Enter filename for your scene:",a);if(l===null){console.log("Save cancelled by user");return}t=l.trim(),t||(t=a)}t.toLowerCase().endsWith(".3dview")||(t+=".3dview"),t=t.replace(/[<>:"/\\|?*]/g,"-");const n=JSON.stringify(e,null,2),s=new Blob([n],{type:"application/json"}),r=URL.createObjectURL(s),o=document.createElement("a");o.href=r,o.download=t,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(r),console.log("Scene saved successfully")}catch(e){console.error("Error saving scene:",e),alert("Error saving scene. Please try again.")}}function LM(){try{const i=document.createElement("input");i.type="file",i.accept=".3dview,.json,application/json,text/plain",i.onchange=function(e){const t=e.target.files[0];if(!t)return;const n=t.name.toLowerCase();if(![".3dview",".json"].some(a=>n.endsWith(a))){alert("Please select a .3dview or .json file.");return}console.log("Loading scene file:",t.name,"Size:",t.size,"bytes");const o=new FileReader;o.onload=function(a){try{const l=JSON.parse(a.target.result);if(l.camera&&(l.camera.position&&(p.camera.position.set(l.camera.position.x,l.camera.position.y,l.camera.position.z),H("posX",l.camera.position.x),H("posXNum",l.camera.position.x),H("posY",l.camera.position.y),H("posYNum",l.camera.position.y),H("posZ",l.camera.position.z),H("posZNum",l.camera.position.z)),l.camera.rotation&&(p.camera.rotation.set(l.camera.rotation.x,l.camera.rotation.y,l.camera.rotation.z),H("rotX",st(l.camera.rotation.x)),H("rotXNum",st(l.camera.rotation.x)),H("rotY",st(l.camera.rotation.y)),H("rotYNum",st(l.camera.rotation.y)),H("rotZ",st(l.camera.rotation.z)),H("rotZNum",st(l.camera.rotation.z)))),l.lighting&&(l.lighting.ambient!==void 0&&(p.lights.ambient.intensity=l.lighting.ambient,H("ambientLight",l.lighting.ambient),H("ambientLightNum",l.lighting.ambient)),l.lighting.directional&&(l.lighting.directional.left!==void 0&&(p.lights.directional.intensity=l.lighting.directional.left,H("directionalLight",l.lighting.directional.left),H("directionalLightNum",l.lighting.directional.left)),l.lighting.directional.right!==void 0&&(p.lights.directionalRight.intensity=l.lighting.directional.right,H("directionalLightRight",l.lighting.directional.right),H("directionalRightNum",l.lighting.directional.right)))),l.materials&&(l.materials.color&&(H("materialColor",l.materials.color),fh(l.materials.color)),l.materials.metalness!==void 0&&(H("metalness",l.materials.metalness),H("metalnessNum",l.materials.metalness),gi("metalness",l.materials.metalness)),l.materials.roughness!==void 0&&(H("roughness",l.materials.roughness),H("roughnessNum",l.materials.roughness),gi("roughness",l.materials.roughness)),l.materials.transparency!==void 0&&(H("transparency",l.materials.transparency),H("transparencyNum",l.materials.transparency),Iv(l.materials.transparency)),l.materials.transparencyMode&&(H("transparencyMode",l.materials.transparencyMode),p.transparencyMode=l.materials.transparencyMode)),l.model&&(l.model.rotation&&p.model&&(p.model.rotation.set(l.model.rotation.x,l.model.rotation.y,l.model.rotation.z),H("modelRotX",st(l.model.rotation.x)),H("modelRotXNum",st(l.model.rotation.x)),H("modelRotY",st(l.model.rotation.y)),H("modelRotYNum",st(l.model.rotation.y)),H("modelRotZ",st(l.model.rotation.z)),H("modelRotZNum",st(l.model.rotation.z))),l.model.yaw!==void 0&&(p.modelYaw=l.model.yaw,H("modelYaw",l.model.yaw),H("modelYawNum",l.model.yaw)),l.model.pitch!==void 0&&(p.modelPitch=l.model.pitch,H("modelPitch",l.model.pitch),H("modelPitchNum",l.model.pitch)),l.model.roll!==void 0&&(p.modelRoll=l.model.roll,H("modelRoll",l.model.roll),H("modelRollNum",l.model.roll))),l.guideLines&&Array.isArray(l.guideLines)){const c=p.guideLines[0];document.querySelectorAll(".control-section[data-guideline-id]").forEach(u=>u.remove()),p.guideLines=[],l.guideLines.forEach((u,h)=>{const f={...u};p.guideLines.push(f),h===0?(H("lineThickness",u.thickness),H("lineThicknessNum",u.thickness),H("lineColour",u.colour),H("lineTransparency",u.transparency),H("lineTransparencyNum",u.transparency),H("lineAngle",u.angle),H("lineAngleNum",u.angle),H("linePosY",u.posY),H("linePosYNum",u.posY)):window.addGuideLineControl(f)}),window.updateGuideLineTitles(),Gt(),l.guideLines.forEach((u,h)=>{const f=document.querySelector(`[data-id="${u.id}"]`);if(f&&u.hasOwnProperty("visible")){u.visible?f.style.display="block":f.style.display="none";let y;if(h===0)y=document.getElementById("hideUnhideGuide");else{const _=document.querySelector(`[data-guideline-id="${u.id}"]`);y=_?_.querySelector(".hide-unhide-guide"):null}y&&(u.visible?(y.textContent="HIDE",y.classList.remove("button-danger"),y.classList.add("secondary")):(y.textContent="UNHIDE",y.classList.remove("secondary"),y.classList.add("button-danger")))}})}ut(),console.log("Scene loaded successfully from:",t.name),alert("Scene loaded successfully!")}catch(l){console.error("Error parsing scene file:",l),console.error("File content preview:",a.target.result?.substring(0,200)),alert(`Error loading scene file: ${l.message}

Please ensure the file is a valid .3dview or JSON file created by the Save Scene function.`)}},o.readAsText(t)},i.click()}catch(i){console.error("Error loading scene:",i),alert("Error loading scene. Please try again.")}}window.addEventListener("load",()=>{wM()});
