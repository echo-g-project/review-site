/* ECHO-G: anonymous-host video seeking compatibility layer.
 * Loads bundled media bytes as classic scripts, then uses a local Blob URL.
 * No fetch/XHR, third-party host, credentials, tracking, or changes to video bytes.
 * Active only on anonymous.4open.science unless explicitly enabled for local tests.
 */
(() => {
  'use strict';
  if (window.ECHO_G_SEEK_FIX) return;
  const enabled = location.hostname === 'anonymous.4open.science' || window.ECHO_G_FORCE_SEEK_FIX === true;
  if (!enabled) return;
  const manifest = {"assets/videos/comparison/audio-only.mp4":{"id":"5917ab6b5242","bytes":2288517,"sha256":"cc46b5aa3c2b27a37a48d259a65fe4207012a1b6cc47ce642d37c9805c943d72","parts":[{"file":"assets/seekable-media/5917ab6b5242-0.js","bytes":2288517,"crc32":2784835798}]},"assets/videos/comparison/audio-text.mp4":{"id":"02a065cd8158","bytes":2729507,"sha256":"ea18833da536018fd2d9e95b4b0505cd6f054f75c4b17e407c747aae56492a7e","parts":[{"file":"assets/seekable-media/02a065cd8158-0.js","bytes":2729507,"crc32":3276771369}]},"assets/videos/comparison/conditioning-comparison.mp4":{"id":"d9b59334eb9b","bytes":2766622,"sha256":"ae1ccb04048f06133b1da3136f9bbd32fbe6973557bde4d6fe486dfba60b8e39","parts":[{"file":"assets/seekable-media/d9b59334eb9b-0.js","bytes":2766622,"crc32":3988043171}]},"assets/videos/comparison/text-only.mp4":{"id":"aca6b8517df8","bytes":2156454,"sha256":"6fed45deae1228caeee137f703445db6ee6a50ce3a0be66bf9e8d33696931ed9","parts":[{"file":"assets/seekable-media/aca6b8517df8-0.js","bytes":2156454,"crc32":2189063365}]},"assets/videos/long-video.mp4":{"id":"96655db0f037","bytes":7598905,"sha256":"52d75484f269fa5b51f0681e554fcda00107fef2cacfd44e7352d60a0046ff36","parts":[{"file":"assets/seekable-media/96655db0f037-0.js","bytes":4500000,"crc32":3545175810},{"file":"assets/seekable-media/96655db0f037-1.js","bytes":3098905,"crc32":1301228654}]},"assets/videos/real-robot-videos/1.mp4":{"id":"002eeb81e3f1","bytes":4427167,"sha256":"58b9ee018be10f0cf37264fa1ce145ac9200767436a0e39e258f4524ca312ca5","parts":[{"file":"assets/seekable-media/002eeb81e3f1-0.js","bytes":4427167,"crc32":3771788506}]},"assets/videos/real-robot-videos/10.mp4":{"id":"04e5081bda06","bytes":5318660,"sha256":"e8db1d01b69d45d4fc0d57fbcf9173ac8565fc32775538d72cab7f0f00e43ab2","parts":[{"file":"assets/seekable-media/04e5081bda06-0.js","bytes":4500000,"crc32":2199353591},{"file":"assets/seekable-media/04e5081bda06-1.js","bytes":818660,"crc32":95287315}]},"assets/videos/real-robot-videos/11.mp4":{"id":"2a0de1118e0d","bytes":3426554,"sha256":"60a10ad02955855989887ddfb2b81b127b7bd8005f3ac8992194c90f84c4449d","parts":[{"file":"assets/seekable-media/2a0de1118e0d-0.js","bytes":3426554,"crc32":2559979363}]},"assets/videos/real-robot-videos/12.mp4":{"id":"39f85e2ad478","bytes":2021226,"sha256":"d8ed45c1211a39da7c121657b0a289fcb0e0be01a34f26171ca3d05896e8964d","parts":[{"file":"assets/seekable-media/39f85e2ad478-0.js","bytes":2021226,"crc32":399334216}]},"assets/videos/real-robot-videos/13.mp4":{"id":"48ceec486e7b","bytes":3587607,"sha256":"d77f7cda9625a0720c482c870a561bafa2cf36c16048533cb477f57981ff33ce","parts":[{"file":"assets/seekable-media/48ceec486e7b-0.js","bytes":3587607,"crc32":2949948731}]},"assets/videos/real-robot-videos/14.mp4":{"id":"8063d55c15bb","bytes":4545702,"sha256":"47d975845d4e2391fbe745e28f8d92720a6ca3a09fc68ff2e8212eea781e5db7","parts":[{"file":"assets/seekable-media/8063d55c15bb-0.js","bytes":4500000,"crc32":972119154},{"file":"assets/seekable-media/8063d55c15bb-1.js","bytes":45702,"crc32":839987922}]},"assets/videos/real-robot-videos/15.mp4":{"id":"7bbeae1e19ca","bytes":3163476,"sha256":"fd3888fc89fa393ab0d25464de815de5f0be757ba76cbfc3b7b360816b1d1f60","parts":[{"file":"assets/seekable-media/7bbeae1e19ca-0.js","bytes":3163476,"crc32":1132856706}]},"assets/videos/real-robot-videos/2.mp4":{"id":"861df1a148c2","bytes":3972116,"sha256":"bd8130f44ce285f047b6c17dc8b92812040788d97145f0e06d8ed1d0e04dcd28","parts":[{"file":"assets/seekable-media/861df1a148c2-0.js","bytes":3972116,"crc32":4148183557}]},"assets/videos/real-robot-videos/3.mp4":{"id":"30d6fb832cda","bytes":4163409,"sha256":"826024be17210e59002b41754a48b1b5b253bf51d55c725a5767b06431fe5947","parts":[{"file":"assets/seekable-media/30d6fb832cda-0.js","bytes":4163409,"crc32":1730968432}]},"assets/videos/real-robot-videos/4.mp4":{"id":"47e5cd597fb8","bytes":3609442,"sha256":"abe3c6e9a5dabd763d7fdc311373b2036003e19060cae7c69ad3faa672cf622f","parts":[{"file":"assets/seekable-media/47e5cd597fb8-0.js","bytes":3609442,"crc32":3067140527}]},"assets/videos/real-robot-videos/5.mp4":{"id":"964631ee3121","bytes":4028285,"sha256":"f6f39903fa9b07516f3e7787244077baa2fbf0ec6ea9d9e604e1348a8489431a","parts":[{"file":"assets/seekable-media/964631ee3121-0.js","bytes":4028285,"crc32":1322846205}]},"assets/videos/real-robot-videos/6.mp4":{"id":"8e6b75585f2e","bytes":3824839,"sha256":"36511bd60cb4a826b75dddbfe960e7c99d7aa29a9861239522750006d9e34e5e","parts":[{"file":"assets/seekable-media/8e6b75585f2e-0.js","bytes":3824839,"crc32":1460120450}]},"assets/videos/real-robot-videos/7.mp4":{"id":"d5168d3c03d5","bytes":3649556,"sha256":"deabaa26c692d2c2e43679e7d0a3c37cd598f1a9406adac5cff2b1397a381b3e","parts":[{"file":"assets/seekable-media/d5168d3c03d5-0.js","bytes":3649556,"crc32":4050562244}]},"assets/videos/real-robot-videos/8.mp4":{"id":"6ffdd5ff67a6","bytes":3441044,"sha256":"64fc096d02ab818b66c3b1c5fb4936685f878ccc59d94e0ee42ca050469bec5a","parts":[{"file":"assets/seekable-media/6ffdd5ff67a6-0.js","bytes":3441044,"crc32":1857624359}]},"assets/videos/real-robot-videos/9.mp4":{"id":"1517095a057d","bytes":3357476,"sha256":"567783dee1a9e2c3e803707c13c413dee712957b6fce9c74f389312cca5deb37","parts":[{"file":"assets/seekable-media/1517095a057d-0.js","bytes":3357476,"crc32":1180590334}]}};
  const pending = new Map();
  const states = new Map();
  const entries = new Map();
  const root = new URL('.', document.currentScript?.src || document.baseURI);
  let latestIntent = 0;
  const cacheLimit = 32 * 1024 * 1024;
  const crcTable = Uint32Array.from({length: 256}, (_, n) => {
    let c = n; for (let k = 0; k < 8; k++) c = (c & 1) ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    return c >>> 0;
  });
  function crc32(bytes) {
    let c = 0xffffffff;
    for (let i=0; i<bytes.length; i++) c = crcTable[(c ^ bytes[i]) & 255] ^ (c >>> 8);
    return (c ^ 0xffffffff) >>> 0;
  }
  // The callback is invoked only by the bundled payload files requested below.
  window.__ECHO_SEEK_CHUNK__ = (id, part, encoded) => {
    const p = pending.get(`${id}:${part}`); if (!p) return;
    try {
      const text = atob(encoded); const bytes = new Uint8Array(text.length);
      for (let i=0; i<text.length; i++) bytes[i] = text.charCodeAt(i);
      if (bytes.length !== p.spec.bytes || crc32(bytes) !== p.spec.crc32)
        throw new Error('The anonymized media payload was altered or truncated.');
      p.bytes = bytes;
    } catch (err) { p.error = err; }
  };
  function loadPart(entry, i) {
    const spec=entry.parts[i], key=`${entry.id}:${i}`;
    return new Promise((resolve, reject) => {
      const s=document.createElement('script'); const p={spec,bytes:null,error:null};
      pending.set(key,p); s.async=true; s.referrerPolicy='no-referrer';
      // Classic script embedding remains usable in an opaque-origin sandbox.
      s.src=new URL(spec.file,root).href;
      const cleanup=()=>{clearTimeout(timer);pending.delete(key);s.remove();};
      const timer=setTimeout(()=>{cleanup();reject(new Error('Media preparation timed out. Try again.'));},180000);
      s.onload=()=>{cleanup();if(p.error)reject(p.error);else if(!p.bytes)reject(new Error('Media payload did not load.'));else resolve(p.bytes);};
      s.onerror=()=>{cleanup();reject(new Error('A media payload could not be loaded.'));};
      document.head.appendChild(s);
    });
  }
  function mediaPath(v) {
    const raw=v.dataset.seekOriginal || v.getAttribute('src') || v.querySelector('source')?.getAttribute('src') || '';
    try {
      const u=new URL(raw,document.baseURI);
      if (!['http:','https:','file:'].includes(u.protocol)) return '';
      return Object.keys(manifest).find(p=>u.pathname.endsWith('/'+p)) || '';
    } catch {return '';}
  }
  function notice(state,message,failed=false) {
    if (!state.note) {
      const parent=state.v.parentElement;if(!parent)return;
      if(getComputedStyle(parent).position==='static')parent.style.position='relative';
      const note=document.createElement('div');note.className='echo-seek-status';note.setAttribute('role','status');note.setAttribute('aria-live','polite');
      note.style.cssText='position:absolute;left:10px;right:10px;bottom:42px;z-index:6;padding:8px 11px;border-radius:6px;background:rgba(255,255,255,.94);color:#193d34;font:13px/1.5 system-ui,sans-serif;pointer-events:none;text-align:center';
      parent.append(note);state.note=note;
    }
    state.note.textContent=message;state.note.hidden=!message;state.note.dataset.error=String(failed);
  }
  function evict(except) {
    let total=[...entries.values()].reduce((s,e)=>s+(e.url?e.bytes:0),0);
    if(total<=cacheLimit)return;
    for(const [key,e] of [...entries.entries()].sort((a,b)=>a[1].used-b[1].used)) {
      if(key===except || !e.url)continue;
      const bound=[...states.values()].filter(s=>s.path===key);
      if(bound.some(s=>!s.v.paused || s.busy))continue;
      for(const s of bound) {
        s.ready=false;s.promise=null;s.v.removeAttribute('src');s.v.load();
      }
      URL.revokeObjectURL(e.url);total-=e.bytes;entries.delete(key);
      if(total<=cacheLimit)break;
    }
  }
  async function obtain(state) {
    let e=entries.get(state.path);
    if(e?.url){e.used=Date.now();return e.url;}
    if(e?.promise)return e.promise;
    const spec=manifest[state.path];
    e={used:Date.now(),bytes:spec.bytes,url:null,promise:null};entries.set(state.path,e);
    e.promise=(async()=>{
      const parts=[];
      for(let i=0;i<spec.parts.length;i++) {
        notice(state,`Preparing video for playback and seeking… ${i+1}/${spec.parts.length}`);
        parts.push(await loadPart(spec,i));
      }
      const blob=new Blob(parts,{type:'video/mp4'});
      if(blob.size!==spec.bytes)throw new Error('Incomplete media payload.');
      e.url=URL.createObjectURL(blob);e.used=Date.now();return e.url;
    })().catch(err=>{entries.delete(state.path);throw err;});
    return e.promise;
  }
  async function prepare(state) {
    if(state.ready && state.v.currentSrc.startsWith('blob:'))return;
    if(state.promise)return state.promise;
    state.busy=true;
    state.promise=(async()=>{
      state.nativePause();
      state.v.removeAttribute('src');
      for(const s of state.v.querySelectorAll('source'))s.removeAttribute('src');
      state.v.load();
      const url=await obtain(state);
      await new Promise((resolve,reject)=>{
        let timer;
        const cleanup=()=>{clearTimeout(timer);state.v.removeEventListener('loadedmetadata',loaded);state.v.removeEventListener('error',failed);};
        const loaded=()=>{cleanup();resolve();};
        const failed=()=>{cleanup();reject(new Error('This browser could not decode the video.'));};
        state.v.addEventListener('loadedmetadata',loaded);state.v.addEventListener('error',failed);
        timer=setTimeout(()=>{cleanup();reject(new Error('Video metadata was not available.'));},30000);
        state.v.src=url;state.v.preload='auto';state.v.load();
      });
      state.ready=true;notice(state,'');
    })().catch(err=>{state.promise=null;notice(state,'Video preparation failed. Click play to retry.',true);throw err;}).finally(()=>{state.busy=false;evict(state.path);});
    return state.promise;
  }
  function attach(v) {
    if(states.has(v))return;
    const path=mediaPath(v);if(!path)return;
    v.dataset.seekOriginal=v.getAttribute('src') || path;
    const state={v,path,ready:false,busy:false,promise:null,note:null,nativePlay:v.play.bind(v),nativePause:v.pause.bind(v),intent:0};
    states.set(v,state);
    v.play=async function() {
      const intent=++latestIntent;state.intent=intent;
      for(const s of states.values())if(s!==state){s.intent=0;s.nativePause();}
      await prepare(state);
      if(state.intent!==intent || latestIntent!==intent)return;
      try {await state.nativePlay();notice(state,'');}
      catch(err){v.controls=true;notice(state,'Ready — press play to start.');throw err;}
    };
    v.pause=function(){state.intent=0;state.nativePause();};
    // Native-control playback does not call the JS instance method.
    v.addEventListener('play',()=>{
      if(!state.ready){state.nativePause();v.play().catch(()=>{});}
      else notice(state,'');
    });
    v.dataset.seekFix='ready';
  }
  function scan(root=document) {
    if(root instanceof HTMLVideoElement)attach(root);
    root.querySelectorAll?.('video').forEach(attach);
  }
  function start(){
    scan();
    new MutationObserver(records=>{for(const r of records)for(const n of r.addedNodes)if(n.nodeType===1)scan(n);}).observe(document.body,{subtree:true,childList:true});
    // Keep the three "Open video" links in the same anonymous document.
    document.querySelectorAll('#comparison-links a').forEach(a=>a.addEventListener('click',event=>{
      let path='';try{const u=new URL(a.href,document.baseURI);path=Object.keys(manifest).find(p=>u.pathname.endsWith('/'+p))||'';}catch{return;}
      if(!path)return;event.preventDefault();
      let dlg=document.getElementById('echo-seek-viewer');
      if(!dlg){
        dlg=document.createElement('dialog');dlg.id='echo-seek-viewer';
        dlg.style.cssText='width:min(980px,92vw);max-height:94vh;border:1px solid #dfe7de;border-radius:10px;background:white;padding:16px';
        const close=document.createElement('button');close.type='button';close.textContent='Close';close.style.cssText='display:block;margin:0 0 12px auto;padding:7px 14px';
        close.addEventListener('click',()=>dlg.close());dlg.append(close);
        const box=document.createElement('div');box.id='echo-seek-viewer-body';box.style.position='relative';dlg.append(box);
        dlg.addEventListener('close',()=>{const v=dlg.querySelector('video');if(v)v.pause();});document.body.append(dlg);
      }
      const box=dlg.querySelector('#echo-seek-viewer-body');const previous=box.querySelector('video');if(previous)previous.pause();box.replaceChildren();
      const v=document.createElement('video');v.src=path;v.controls=true;v.playsInline=true;v.preload='none';v.style.cssText='display:block;width:100%;max-height:78vh;background:#eee';
      box.append(v);attach(v);dlg.showModal();v.play().catch(()=>{});
    }));
  }
  window.ECHO_G_SEEK_FIX={
    version:'1.0.0',
    status:()=>[...states.values()].map(s=>({video:s.path,prepared:s.ready,loading:s.busy,duration:s.v.duration,currentTime:s.v.currentTime,seekable:Array.from({length:s.v.seekable.length},(_,i)=>[s.v.seekable.start(i),s.v.seekable.end(i)])}))
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
  window.addEventListener('pagehide',()=>{for(const e of entries.values())if(e.url)URL.revokeObjectURL(e.url);entries.clear();for(const s of states.values()){s.ready=false;s.promise=null;} });
})();
