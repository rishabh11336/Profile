(function () {
  "use strict";
  const widgetEl = document.getElementById('ci-pi-widget');
  if (!widgetEl) return;
  const $w = (id) => document.getElementById('w_' + id);

  const tTab = {
    90: {6:1.943,7:1.895,8:1.860,9:1.833,10:1.812,12:1.782,14:1.761,16:1.746,18:1.734,20:1.725,25:1.708,30:1.697,40:1.684,60:1.671,120:1.658,100000:1.645},
    95: {6:2.447,7:2.365,8:2.306,9:2.262,10:2.228,12:2.179,14:2.145,16:2.120,18:2.101,20:2.086,25:2.060,30:2.042,40:2.021,60:2.000,120:1.980,100000:1.960},
    99: {6:3.707,7:3.499,8:3.355,9:3.250,10:3.169,12:3.055,14:2.977,16:2.921,18:2.878,20:2.845,25:2.787,30:2.750,40:2.704,60:2.660,120:2.617,100000:2.576}
  };
  function tCrit(conf, df) {
    const tbl = tTab[conf], keys = Object.keys(tbl).map(Number).sort((a,b)=>a-b);
    if (df <= keys[0]) return tbl[keys[0]];
    for (let i = 0; i < keys.length - 1; i++) {
      if (df >= keys[i] && df <= keys[i+1]) {
        const lo = keys[i], hi = keys[i+1];
        return tbl[lo] + (tbl[hi] - tbl[lo]) * (df - lo) / (hi - lo);
      }
    }
    return tbl[keys[keys.length-1]];
  }

  function randn(){let u=0,v=0;while(u===0)u=Math.random();while(v===0)v=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);}

  const TRUE_A = 15, TRUE_B = 1.8, XMIN = 20, XMAX = 200;
  let data = [];
  const show = { points: true, fit: true, ci: true, pi: true, mean: true };
  let wConf = 95;
  let model = null;

  function genData() {
    const n = +$w("n").value, noise = +$w("noise").value;
    data = [];
    for (let i = 0; i < n; i++) {
      const x = XMIN + Math.random() * (XMAX - XMIN);
      const y = TRUE_A + TRUE_B * x + noise * randn();
      data.push({ x, y });
    }
  }

  function fit() {
    const n = data.length;
    const xbar = data.reduce((s,p)=>s+p.x,0)/n;
    const ybar = data.reduce((s,p)=>s+p.y,0)/n;
    let Sxx = 0, Sxy = 0;
    data.forEach(p => { Sxx += (p.x-xbar)**2; Sxy += (p.x-xbar)*(p.y-ybar); });
    const slope = Sxy/Sxx, intercept = ybar - slope*xbar;
    let sse = 0;
    data.forEach(p => { const yh = intercept + slope*p.x; sse += (p.y-yh)**2; });
    const s = Math.sqrt(sse/(n-2));
    const t = tCrit(wConf, n-2);
    const yhat = (x) => intercept + slope*x;
    const seMean = (x) => s*Math.sqrt(1/n + (x-xbar)**2/Sxx);
    const sePred = (x) => s*Math.sqrt(1 + 1/n + (x-xbar)**2/Sxx);
    let inCI = 0, inPI = 0;
    data.forEach(p => {
      const d = Math.abs(p.y - yhat(p.x));
      if (d <= t*seMean(p.x)) inCI++;
      if (d <= t*sePred(p.x)) inPI++;
    });
    model = { n, xbar, ybar, Sxx, slope, intercept, s, t, yhat, seMean, sePred, inCI, inPI };
  }

  let px = null;
  function draw() {
    const cv = $w("plot");
    const dpr = window.devicePixelRatio || 1;
    const w = cv.clientWidth, h = 440;
    cv.width = w*dpr; cv.height = h*dpr; cv.style.height = h+"px";
    const ctx = cv.getContext("2d"); ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.clearRect(0,0,w,h);
    const padL = 54, padR = 18, padT = 12, padB = 40;
    const plotW = w-padL-padR, plotH = h-padT-padB;
    const m = model;
    let yLo = Infinity, yHi = -Infinity;
    for (let gx = XMIN; gx <= XMAX; gx += (XMAX-XMIN)/40) {
      yLo = Math.min(yLo, m.yhat(gx) - m.t*m.sePred(gx));
      yHi = Math.max(yHi, m.yhat(gx) + m.t*m.sePred(gx));
    }
    data.forEach(p => { yLo = Math.min(yLo,p.y); yHi = Math.max(yHi,p.y); });
    const yPad = (yHi-yLo)*0.06; yLo -= yPad; yHi += yPad;
    const X = (x) => padL + plotW*(x-XMIN)/(XMAX-XMIN);
    const Y = (y) => padT + plotH - plotH*(y-yLo)/(yHi-yLo);
    px = { X, Y, padL, padR, padT, padB, plotW, plotH, XMIN, XMAX };
    ctx.font = '11px "IBM Plex Mono", monospace';
    ctx.strokeStyle = "#2d3748"; ctx.fillStyle = "#6b7280"; ctx.lineWidth = 1;
    for (let g = 0; g <= 5; g++) {
      const yv = yLo + (yHi-yLo)*g/5, y = Y(yv);
      ctx.beginPath(); ctx.moveTo(padL,y); ctx.lineTo(w-padR,y); ctx.stroke();
      ctx.textAlign="right"; ctx.textBaseline="middle";
      ctx.fillText(Math.round(yv), padL-8, y);
    }
    ctx.textAlign="center"; ctx.textBaseline="top";
    for (let xv = XMIN; xv <= XMAX; xv += 30) ctx.fillText(Math.round(xv), X(xv), h-padB+8);
    ctx.fillStyle = "#6b7280"; ctx.font = '11px Inter, sans-serif';
    ctx.fillText("detailing calls per month", padL+plotW/2, h-padB+22);
    ctx.save(); ctx.translate(14, padT+plotH/2); ctx.rotate(-Math.PI/2);
    ctx.textAlign="center"; ctx.fillText("new prescriptions", 0, 0); ctx.restore();
    const G = 60;
    function bandPath(seFn) {
      ctx.beginPath();
      for (let i = 0; i <= G; i++) { const x = XMIN + (XMAX-XMIN)*i/G; const p = i===0?"moveTo":"lineTo"; ctx[p](X(x), Y(m.yhat(x)+m.t*seFn(x))); }
      for (let i = G; i >= 0; i--) { const x = XMIN + (XMAX-XMIN)*i/G; ctx.lineTo(X(x), Y(m.yhat(x)-m.t*seFn(x))); }
      ctx.closePath();
    }
    if (show.pi) {
      ctx.fillStyle = getComputedStyle(widgetEl).getPropertyValue('--w-pi-fill').trim();
      bandPath(m.sePred); ctx.fill();
      ctx.strokeStyle = "rgba(251,146,60,0.55)"; ctx.lineWidth = 1; ctx.setLineDash([4,3]);
      ctx.beginPath(); for(let i=0;i<=G;i++){const x=XMIN+(XMAX-XMIN)*i/G;const p=i===0?"moveTo":"lineTo";ctx[p](X(x),Y(m.yhat(x)+m.t*m.sePred(x)));} ctx.stroke();
      ctx.beginPath(); for(let i=0;i<=G;i++){const x=XMIN+(XMAX-XMIN)*i/G;const p=i===0?"moveTo":"lineTo";ctx[p](X(x),Y(m.yhat(x)-m.t*m.sePred(x)));} ctx.stroke();
      ctx.setLineDash([]);
    }
    if (show.ci) {
      ctx.fillStyle = getComputedStyle(widgetEl).getPropertyValue('--w-ci-fill').trim();
      bandPath(m.seMean); ctx.fill();
    }
    if (show.fit) {
      ctx.strokeStyle = "#e2e8f0"; ctx.lineWidth = 2.4;
      ctx.beginPath(); ctx.moveTo(X(XMIN), Y(m.yhat(XMIN))); ctx.lineTo(X(XMAX), Y(m.yhat(XMAX))); ctx.stroke();
    }
    if (show.mean) {
      ctx.strokeStyle = "#4a5568"; ctx.lineWidth = 1; ctx.setLineDash([3,4]);
      ctx.beginPath(); ctx.moveTo(X(m.xbar), padT); ctx.lineTo(X(m.xbar), padT+plotH); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = "#8b949e"; ctx.textAlign="center"; ctx.textBaseline="top";
      ctx.font = '10px "IBM Plex Mono", monospace';
      ctx.fillText("mean X (band waist)", X(m.xbar), padT+2);
    }
    if (show.points) {
      data.forEach(p => {
        const inside = Math.abs(p.y-m.yhat(p.x)) <= m.t*m.sePred(p.x);
        ctx.beginPath(); ctx.arc(X(p.x), Y(p.y), 4, 0, Math.PI*2);
        ctx.fillStyle = inside ? "#5b6f7c" : "#c0392b";
        ctx.fill();
        if (!inside) { ctx.strokeStyle="#c0392b"; ctx.lineWidth=1; ctx.beginPath(); ctx.arc(X(p.x),Y(p.y),6.5,0,Math.PI*2); ctx.stroke(); }
      });
    }
  }

  const wTt = $w("tt");
  $w("plot").addEventListener("mousemove", (e) => {
    if (!px || !model) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const { X, padL, plotW, XMIN, XMAX } = px;
    let x = XMIN + (mx-padL)/plotW*(XMAX-XMIN);
    if (x < XMIN || x > XMAX) { wTt.style.opacity = 0; return; }
    const m = model, yh = m.yhat(x);
    const ciw = m.t*m.seMean(x), piw = m.t*m.sePred(x);
    wTt.innerHTML =
      '<div class="r"><span class="c">calls</span><span>'+Math.round(x)+'</span></div>'+
      '<div class="r"><span class="c">predicted</span><span>'+Math.round(yh)+' Rx</span></div>'+
      '<div class="r"><span class="c" style="color:#7fd4c3">CI ±</span><span>'+Math.round(ciw)+'</span></div>'+
      '<div class="r"><span class="c" style="color:#e6a56a">PI ±</span><span>'+Math.round(piw)+'</span></div>';
    wTt.style.opacity = 1;
    wTt.style.left = Math.min(X(x)+14, rect.width-120) + "px";
    wTt.style.top = "40px";
  });
  $w("plot").addEventListener("mouseleave", () => { wTt.style.opacity = 0; });

  function updateStats() {
    const m = model;
    $w("sEq").textContent = "+" + m.slope.toFixed(2);
    $w("sCI").textContent = Math.round(m.inCI/m.n*100) + "%";
    $w("sPI").textContent = Math.round(m.inPI/m.n*100) + "%";
    $w("sPInote").textContent = "target: " + wConf + "%";
    const ratio = m.sePred(m.xbar)/m.seMean(m.xbar);
    $w("sRatio").textContent = ratio.toFixed(1) + "x";
    $w("insight").innerHTML =
      "<b>Read the plot like this.</b> The dark line is the model's best guess of average Rx for any call level. " +
      "The <b>teal CI band</b> is narrow because averaging "+m.n+" territories pins that line down well, so it holds only about <b>"+Math.round(m.inCI/m.n*100)+"%</b> of the dots (it was never meant to cover them). " +
      "The <b>clay PI band</b> is wide because a single new territory scatters, so it catches about <b>"+Math.round(m.inPI/m.n*100)+"%</b> of them, right near your "+wConf+"% target. " +
      "Both bands pinch at the <b>mean of X</b> and flare at the edges, because the model is most sure near the center of its data. " +
      "Red-ringed dots are the ones that fell outside the PI.";
  }

  function refresh() { fit(); draw(); updateStats(); }

  [["n","nVal"],["noise","noiseVal"]].forEach(([inp,out])=>{
    const el=$w(inp), lbl=$w(out);
    const upd=()=>{lbl.textContent=el.value;}; el.addEventListener("input",()=>{upd();genData();refresh();}); upd();
  });
  $w("conf").addEventListener("click",(e)=>{
    const b=e.target.closest("button"); if(!b)return;
    [...$w("conf").children].forEach(c=>c.classList.remove("on")); b.classList.add("on");
    wConf=+b.dataset.c; refresh();
  });
  widgetEl.querySelectorAll(".w-tg").forEach(tg=>{
    tg.addEventListener("click",()=>{ const k=tg.dataset.t; show[k]=!show[k]; tg.classList.toggle("on",show[k]); draw(); });
  });
  $w("regen").addEventListener("click",()=>{ genData(); refresh(); });
  let wRz; window.addEventListener("resize",()=>{ clearTimeout(wRz); wRz=setTimeout(draw,120); });

  genData(); refresh();
})();
