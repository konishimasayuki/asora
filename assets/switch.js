(function(){
  var D=[['A','/','地層'],['B','/b.html','誌面'],['C','/c.html','シネマ'],['D','/d.html','グリッド'],['E','/e.html','オーガニック'],['F','/f.html','ベント']];
  var p=location.pathname.replace(/\/index\.html$/,'/');
  var cur=(p.match(/\/([b-f])\.html$/)||[])[1];cur=cur?cur.toUpperCase():'A';
  var st=document.createElement('style');
  st.textContent='.asw{position:fixed;left:50%;bottom:calc(14px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);z-index:2147483000;display:flex;align-items:center;gap:4px;padding:6px;border-radius:999px;background:rgba(14,16,18,.86);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);box-shadow:0 10px 30px rgba(0,0,0,.25);font:600 12px/1 "Helvetica Neue",Arial,sans-serif;letter-spacing:.08em}'+
  '.asw span{color:#9AA3AD;padding:0 8px 0 10px;font-size:10px;letter-spacing:.24em}'+
  '.asw a{position:relative;display:grid;place-items:center;width:38px;height:38px;border-radius:50%;color:#EDEFF2;text-decoration:none;transition:background .25s,color .25s}'+
  '.asw a:hover{background:rgba(255,255,255,.12)}.asw a[aria-current]{background:#28A7E0;color:#0B0D0F}'+
  '.asw a::after{content:attr(data-n);position:absolute;bottom:48px;left:50%;transform:translateX(-50%) translateY(4px);white-space:nowrap;padding:6px 10px;border-radius:6px;background:#0B0D0F;color:#fff;font-size:11px;letter-spacing:.06em;opacity:0;pointer-events:none;transition:opacity .2s,transform .2s}'+
  '.asw a:hover::after,.asw a:focus-visible::after{opacity:1;transform:translateX(-50%)}'+
  '.asw a:focus-visible{outline:2px solid #28A7E0;outline-offset:2px}'+
  '@media (max-width:420px){.asw span{display:none}.asw a{width:36px;height:36px}}';
  document.head.appendChild(st);
  var nav=document.createElement('nav');nav.className='asw';nav.setAttribute('aria-label','デザイン切り替え');
  nav.innerHTML='<span>DESIGN</span>'+D.map(function(d){return '<a href="'+d[1]+'" data-n="'+d[0]+'：'+d[2]+'"'+(d[0]===cur?' aria-current="page"':'')+'>'+d[0]+'</a>'}).join('');
  document.body.appendChild(nav);
})();
