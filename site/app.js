(function () {
  "use strict";
  var NS = "http://www.w3.org/2000/svg";
  var WA = "905334352268";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(name, attrs, parent) {
    var n = document.createElementNS(NS, name);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function delay(n, ms) { n.style.animationDelay = ms + "ms"; }

  var yil = document.getElementById("yil");
  if (yil) yil.textContent = new Date().getFullYear();

  /* Hero: palet rafı ön görünüşü, yüklenirken bir kez kurulur */
  var hero = document.getElementById("heroRack");
  if (hero) {
    var floorY = 500, topY = 40, upW = 12;
    var ups = [70, 230, 390, 550];
    var beams = [392, 278, 164];
    var levels = [floorY].concat(beams);
    var fill = [
      [0, 1, 1, 1, 1, 0, 1, 1, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 0, 1, 1, 1, 1]
    ];
    var g = el("g", {}, hero);

    for (var x = 30; x < 590; x += 14) el("line", { class: "r-hatch", x1: x, y1: floorY + 2, x2: x - 10, y2: floorY + 14 }, g);
    el("line", { class: "r-floor", x1: 20, y1: floorY + 1, x2: 590, y2: floorY + 1 }, g);

    ups.forEach(function (ux, i) {
      var u = el("g", { class: "a-up" }, g);
      el("rect", { class: "r-up", x: ux - upW / 2, y: topY, width: upW, height: floorY - topY }, u);
      el("line", { class: "r-slot", x1: ux, y1: topY + 6, x2: ux, y2: floorY - 10 }, u);
      el("rect", { class: "r-plate", x: ux - 11, y: floorY - 5, width: 22, height: 5 }, u);
      delay(u, i * 90);
    });

    beams.forEach(function (by, li) {
      for (var b = 0; b < 3; b++) {
        var r = el("rect", { class: "r-beam a-beam", x: ups[b] + upW / 2, y: by, width: ups[b + 1] - ups[b] - upW, height: 12 }, g);
        delay(r, 520 + li * 140 + b * 40);
      }
    });

    levels.forEach(function (ly, li) {
      for (var b = 0; b < 3; b++) {
        var inner = ups[b] + upW / 2;
        for (var p = 0; p < 3; p++) {
          if (!fill[li][b * 3 + p]) continue;
          var px = inner + 7 + p * 48, pw = 42, base = ly;
          var load = el("g", { class: "a-load" }, g);
          el("rect", { class: "r-pallet", x: px, y: base - 9, width: pw, height: 9 }, load);
          el("rect", { class: "r-pallet-gap", x: px + 5, y: base - 6, width: 9, height: 4 }, load);
          el("rect", { class: "r-pallet-gap", x: px + pw - 14, y: base - 6, width: 9, height: 4 }, load);
          var h = 64 + ((li * 7 + b * 5 + p * 11) % 4) * 6;
          var kind = (li + b + p) % 3;
          if (kind === 0) {
            el("rect", { class: "r-box", x: px + 1, y: base - 9 - h, width: pw - 2, height: h }, load);
            el("rect", { class: "r-tape", x: px + 1, y: base - 9 - h / 2 - 2, width: pw - 2, height: 4 }, load);
          } else if (kind === 1) {
            var hh = h / 2;
            el("rect", { class: "r-box", x: px + 1, y: base - 9 - hh, width: pw / 2 - 1, height: hh }, load);
            el("rect", { class: "r-box-2", x: px + pw / 2, y: base - 9 - hh, width: pw / 2 - 1, height: hh }, load);
            el("rect", { class: "r-box-2", x: px + 1, y: base - 9 - h, width: pw / 2 - 1, height: hh }, load);
            el("rect", { class: "r-box", x: px + pw / 2, y: base - 9 - h, width: pw / 2 - 1, height: hh }, load);
          } else {
            el("rect", { class: "r-box-2", x: px + 1, y: base - 9 - h, width: pw - 2, height: h }, load);
            el("rect", { class: "r-wrap", x: px - 1, y: base - 11 - h, width: pw + 2, height: h + 4 }, load);
          }
          delay(load, 1000 + li * 160 + b * 70 + p * 40);
        }
      }
    });

    var ann = el("g", { class: "a-fade" }, g);
    delay(ann, 1900);
    el("line", { class: "r-dim", x1: 22, y1: topY, x2: 22, y2: floorY }, ann);
    el("line", { class: "r-dim", x1: 16, y1: topY, x2: 28, y2: topY }, ann);
    el("line", { class: "r-dim", x1: 16, y1: floorY, x2: 28, y2: floorY }, ann);
    var t = el("text", { class: "r-dim-text", x: 0, y: 0, transform: "translate(14 " + (topY + floorY) / 2 + ") rotate(-90)", "text-anchor": "middle" }, ann);
    t.textContent = "7.500 mm";
    el("line", { class: "r-dim", x1: ups[1], y1: 22, x2: ups[2], y2: 22 }, ann);
    el("line", { class: "r-dim", x1: ups[1], y1: 16, x2: ups[1], y2: 28 }, ann);
    el("line", { class: "r-dim", x1: ups[2], y1: 16, x2: ups[2], y2: 28 }, ann);
    var t2 = el("text", { class: "r-dim-text", x: (ups[1] + ups[2]) / 2, y: 16, "text-anchor": "middle" }, ann);
    t2.textContent = "2.700 mm";
    el("rect", { class: "r-sign", x: ups[0] + 11, y: beams[0] + 18, width: 46, height: 26, rx: 2 }, ann);
    var s1 = el("text", { class: "r-sign-text", x: ups[0] + 34, y: beams[0] + 29, "text-anchor": "middle" }, ann);
    s1.textContent = "KAT YÜKÜ";
    var s2 = el("text", { class: "r-sign-text", x: ups[0] + 34, y: beams[0] + 40, "text-anchor": "middle" }, ann);
    s2.textContent = "2.400 kg";

    if (!reduce) hero.classList.add("anim");
  }

  /* Depo planlayıcı */
  var form = document.getElementById("plannerForm");
  var plan = document.getElementById("planSvg");
  var state = null;
  if (form && plan) {
    var RACK_SINGLE = 1100, RACK_DOUBLE = 2400, BAY = 2700, UPRIGHT = 100, CROSS = 3000, ROOF = 500;

    function val(name) { var c = form.querySelector('input[name="' + name + '"]:checked'); return c ? +c.value : 0; }
    function fmt(n) { return n.toLocaleString("tr-TR"); }
    function m(n) { return (Math.round(n * 10) / 10).toLocaleString("tr-TR") + " m"; }

    function layoutAcross(W, A) {
      var parts = [];
      if (W < RACK_SINGLE + A) return parts;
      var used = RACK_SINGLE; parts.push({ t: "s", w: RACK_SINGLE });
      while (true) {
        if (used + A > W) break;
        if (used + A + RACK_DOUBLE + A + RACK_SINGLE <= W) {
          parts.push({ t: "a", w: A }, { t: "d", w: RACK_DOUBLE });
          used += A + RACK_DOUBLE;
          continue;
        }
        if (used + A + RACK_DOUBLE + A <= W) { parts.push({ t: "a", w: A }, { t: "d", w: RACK_DOUBLE }, { t: "a", w: A }); break; }
        if (used + A + RACK_SINGLE <= W) { parts.push({ t: "a", w: A }, { t: "s", w: RACK_SINGLE }); break; }
        parts.push({ t: "a", w: W - used });
        break;
      }
      return parts;
    }

    function compute() {
      var L = +document.getElementById("pLen").value * 1000;
      var W = +document.getElementById("pWid").value * 1000;
      var H = +document.getElementById("pHei").value * 1000;
      var A = val("truck"), LH = val("load");
      var parts = layoutAcross(W, A);
      var rows = parts.reduce(function (s, p) { return s + (p.t === "s" ? 1 : p.t === "d" ? 2 : 0); }, 0);
      var bays = Math.max(0, Math.floor((L - CROSS - UPRIGHT) / (BAY + UPRIGHT)));
      var usable = H - ROOF;
      var levels = Math.max(0, Math.floor((usable + 120) / (LH + 220)));
      var total = rows * bays * levels * 3;
      return { L: L, W: W, H: H, A: A, LH: LH, parts: parts, rows: rows, bays: bays, levels: levels, total: total };
    }

    function draw(s) {
      while (plan.lastChild && plan.lastChild.nodeName !== "title") plan.removeChild(plan.lastChild);
      var pad = 26;
      var narrow = plan.getBoundingClientRect().width < 520;
      var vw = narrow ? 460 : 800, scale = (vw - pad * 2) / s.L;
      plan.classList.toggle("narrow", narrow);
      var vh = Math.round(s.W * scale + pad * 2);
      var maxH = narrow ? 520 : 620;
      if (vh > maxH) { scale = (maxH - pad * 2) / s.W; vh = maxH; }
      var dw = s.L * scale, dh = s.W * scale;
      var ox = (vw - dw) / 2, oy = pad;
      plan.setAttribute("viewBox", "0 0 " + vw + " " + vh);
      el("rect", { class: "p-floor", x: ox, y: oy, width: dw, height: dh }, plan);
      el("rect", { class: "p-cross", x: ox + 1, y: oy + 1, width: CROSS * scale - 2, height: dh - 2 }, plan);

      if (!s.rows || !s.bays || !s.levels) {
        var e = el("text", { class: "p-empty", x: vw / 2, y: oy + dh / 2 + 5, "text-anchor": "middle" }, plan);
        e.textContent = "Bu ölçülerde palet rafı sığmıyor. Ölçüleri büyütün.";
        return;
      }

      var runStart = ox + CROSS * scale;
      var runLen = (s.bays * (BAY + UPRIGHT) + UPRIGHT) * scale;
      var y = oy;
      s.parts.forEach(function (p) {
        var h = p.w * scale;
        if (p.t === "a") {
          el("rect", { class: "p-aisle", x: runStart, y: y, width: dw - CROSS * scale - 1, height: h }, plan);
          if (h > 10) el("line", { class: "p-aisle-line", x1: runStart + 6, y1: y + h / 2, x2: ox + dw - 8, y2: y + h / 2 }, plan);
        } else {
          var nRows = p.t === "d" ? 2 : 1;
          el("rect", { class: "p-rack", x: runStart, y: y, width: runLen, height: h }, plan);
          for (var b = 0; b <= s.bays; b++) {
            var bx = runStart + b * (BAY + UPRIGHT) * scale;
            el("line", { class: "p-bay", x1: bx, y1: y, x2: bx, y2: y + h }, plan);
          }
          if (nRows === 2) el("line", { class: "p-beam", x1: runStart, y1: y + h / 2, x2: runStart + runLen, y2: y + h / 2 }, plan);
          el("line", { class: "p-beam", x1: runStart, y1: y + 0.8, x2: runStart + runLen, y2: y + 0.8 }, plan);
          el("line", { class: "p-beam", x1: runStart, y1: y + h - 0.8, x2: runStart + runLen, y2: y + h - 0.8 }, plan);
        }
        y += h;
      });

      var lt = el("text", { class: "p-text", x: ox + dw / 2, y: oy - 9, "text-anchor": "middle" }, plan);
      lt.textContent = m(s.L / 1000);
      var wt = el("text", { class: "p-text", x: 0, y: 0, transform: "translate(" + (ox - 9) + " " + (oy + dh / 2) + ") rotate(-90)", "text-anchor": "middle" }, plan);
      wt.textContent = m(s.W / 1000);
      if (CROSS * scale > 40) {
        var ct = el("text", { class: "p-text", x: 0, y: 0, transform: "translate(" + (ox + CROSS * scale / 2 + 4) + " " + (oy + dh / 2) + ") rotate(-90)", "text-anchor": "middle" }, plan);
        ct.textContent = "Yükleme alanı";
      }
    }

    function update() {
      var s = compute();
      state = s;
      document.getElementById("pLenOut").textContent = m(s.L / 1000);
      document.getElementById("pWidOut").textContent = m(s.W / 1000);
      document.getElementById("pHeiOut").textContent = m(s.H / 1000);
      document.getElementById("rTotal").textContent = fmt(s.total);
      document.getElementById("rRows").textContent = fmt(s.rows);
      document.getElementById("rBays").textContent = fmt(s.bays);
      document.getElementById("rLevels").textContent = fmt(s.levels);
      draw(s);
    }
    form.addEventListener("input", update);
    form.addEventListener("change", update);
    form.addEventListener("submit", function (e) { e.preventDefault(); });
    update();
    var rt;
    window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(function () { if (state) draw(state); }, 150); });

    var toQuote = document.getElementById("planToQuote");
    if (toQuote) toQuote.addEventListener("click", function () {
      var msg = document.getElementById("qMsg");
      var type = document.getElementById("qType");
      if (type) type.value = "Ağır tip palet rafı";
      if (msg && state) {
        msg.value = "Depo: " + m(state.L / 1000) + " x " + m(state.W / 1000) + ", kullanılabilir yükseklik " + m(state.H / 1000) +
          ". Koridor " + m(state.A / 1000) + ", yük yüksekliği " + m(state.LH / 1000) +
          ". Planlayıcı ön hesabı: " + fmt(state.total) + " palet adresi.";
      }
    });
  }

  /* Teklif formu: mesajı WhatsApp'ta hazır açar */
  var q = document.getElementById("quoteForm");
  if (q) {
    q.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = q.elements.name, city = q.elements.city, err = document.getElementById("qError");
      var missing = [];
      [name, city].forEach(function (f) {
        var bad = !f.value.trim();
        f.setAttribute("aria-invalid", bad ? "true" : "false");
        if (bad) missing.push(f);
      });
      if (missing.length) {
        err.textContent = "Adınızı ve şehrinizi yazın, mesajı öyle hazırlayalım.";
        err.hidden = false;
        missing[0].focus();
        return;
      }
      err.hidden = true;
      var lines = [
        "Merhaba, keşif ve teklif istiyorum.",
        "Ad: " + name.value.trim(),
        q.elements.company.value.trim() ? "Firma: " + q.elements.company.value.trim() : "",
        "Şehir: " + city.value.trim(),
        "İhtiyaç: " + q.elements.type.value,
        q.elements.msg.value.trim() ? "Not: " + q.elements.msg.value.trim() : ""
      ].filter(Boolean);
      window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
    });
  }
})();
