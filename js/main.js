// Navigating the AI Era · interactions
// All content comes from window.SITE_DATA (see data.js).

(function () {
  "use strict";
  const D = window.SITE_DATA;
  if (!D) {
    console.error("SITE_DATA missing");
    return;
  }

  // ============ HERO ============
  function renderHero() {
    const t = D.team;
    const h = D.hero;
    document.getElementById("hero-kicker").innerHTML =
      `<span>${t.cohort}</span> · ${t.name} · ${t.year}`;
    document.getElementById("hero-title").textContent = h.titleEN;
    document.getElementById("hero-title-zh").textContent = h.titleZH;
    document.getElementById("hero-sub").textContent = h.subtitleZH;
    document.getElementById("hero-body").innerHTML = h.body.replace(/\n/g, "<br>");
    document.querySelector("#hero-cta span").textContent = h.cta;
  }

  // ============ JOURNEY ============
  function renderJourney() {
    const track = document.getElementById("journey-track");
    const html = D.journey
      .map(
        (s) => `
        <article class="journey-step fade-in">
          <div class="meta">
            <span>${s.phase}</span>
            <span class="date">${s.date}</span>
          </div>
          <h3>${s.title}</h3>
          <div class="titleEN">${s.titleEN}</div>
          <p>${s.desc}</p>
        </article>`
      )
      .join("");
    track.innerHTML = html;
  }

  // ============ SPOTLIGHT ============
  let spIdx = 0;
  let spTimer = null;
  let spAuto = false;

  function initialsOf(m) {
    // Use English first letter
    return (m.name || "?").trim().charAt(0).toUpperCase();
  }

  function renderSpotlight() {
    // thumbs
    const thumbsEl = document.getElementById("sp-thumbs");
    thumbsEl.innerHTML = D.members
      .map(
        (m, i) =>
          `<button class="thumb" data-i="${i}" aria-label="${m.name}"><span>${initialsOf(
            m
          )}</span></button>`
      )
      .join("");
    thumbsEl.querySelectorAll(".thumb").forEach((btn) => {
      btn.addEventListener("click", () => {
        const i = parseInt(btn.dataset.i, 10);
        setSpotlight(i, /*fromUser*/ true);
      });
    });

    document.getElementById("sp-prev").addEventListener("click", () => {
      setSpotlight((spIdx - 1 + D.members.length) % D.members.length, true);
    });
    document.getElementById("sp-next-btn").addEventListener("click", () => {
      setSpotlight((spIdx + 1) % D.members.length, true);
    });

    const autoBtn = document.getElementById("sp-autoplay");
    autoBtn.addEventListener("click", () => {
      spAuto = !spAuto;
      autoBtn.classList.toggle("active", spAuto);
      if (spAuto) {
        startAutoplay();
      } else {
        stopAutoplay();
      }
    });

    setSpotlight(0, false);
  }

  function setSpotlight(i, fromUser) {
    spIdx = i;
    const m = D.members[i];
    const av = document.getElementById("sp-avatar");
    const init = document.getElementById("sp-initials");
    const name = document.getElementById("sp-name");

    // brief fade transition
    av.style.opacity = "0";
    name.style.opacity = "0";
    setTimeout(() => {
      init.textContent = initialsOf(m);
      // Set a unique gradient per member for the avatar background
      av.style.background = avatarGradient(i);
      name.innerHTML = `${m.name} <span class="zh">${m.nameZH}</span>`;
      document.getElementById("sp-role").textContent = `${m.role} · ${m.company}`;
      document.getElementById("sp-tag").textContent = m.tag;
      document.getElementById("sp-keyword").textContent = m.keyword;
      document.getElementById("sp-takeaway").textContent = m.takeaway;
      document.getElementById("sp-next").textContent = m.next;
      av.style.opacity = "1";
      name.style.opacity = "1";
    }, 200);

    // counter + progress
    const count = String(i + 1).padStart(2, "0");
    document.getElementById("sp-counter").textContent = `${count} / ${String(
      D.members.length
    ).padStart(2, "0")}`;
    const fill = document.getElementById("sp-progress");
    fill.style.transform = `scaleX(${(i + 1) / D.members.length})`;

    // thumbs active state
    document.querySelectorAll("#sp-thumbs .thumb").forEach((el, idx) => {
      el.classList.toggle("active", idx === i);
    });

    if (fromUser && spAuto) {
      // reset autoplay timer
      startAutoplay();
    }
  }

  function avatarGradient(i) {
    // Six soft variants cycled across members for visual rhythm
    const variants = [
      "linear-gradient(135deg, #2A1F5E 0%, #0F1322 60%, #1E3A5F 100%)",
      "linear-gradient(135deg, #1B3A5F 0%, #0A0C16 60%, #2E5A57 100%)",
      "linear-gradient(135deg, #2E1F4F 0%, #0F1322 55%, #3A5F5A 100%)",
      "linear-gradient(135deg, #1F2E5F 0%, #0A0C16 60%, #4A2E5A 100%)",
      "linear-gradient(135deg, #4A2E5A 0%, #0F1322 60%, #1F4A4A 100%)",
      "linear-gradient(135deg, #2E3A5F 0%, #0A0C16 55%, #4A3A2E 100%)",
    ];
    return variants[i % variants.length];
  }

  function startAutoplay() {
    stopAutoplay();
    spTimer = setInterval(() => {
      const next = (spIdx + 1) % D.members.length;
      setSpotlight(next, false);
    }, 30000); // 30s — matches stage pacing
  }
  function stopAutoplay() {
    if (spTimer) {
      clearInterval(spTimer);
      spTimer = null;
    }
  }

  // ============ ASK ============
  function renderAsk() {
    const a = D.askSemester;
    document.getElementById("ask-title").textContent = a.title;
    document.getElementById("ask-subtitle").textContent = a.subtitle;
    const input = document.getElementById("ask-input");
    input.setAttribute("placeholder", a.placeholder);

    const wrap = document.getElementById("ask-suggestions");
    wrap.innerHTML = a.suggestions
      .map((s, i) => `<button class="ask-chip" data-i="${i}">${s.q}</button>`)
      .join("");

    const answer = document.getElementById("ask-answer");
    const answerText = document.getElementById("ask-answer-text");

    wrap.querySelectorAll(".ask-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const i = parseInt(chip.dataset.i, 10);
        wrap.querySelectorAll(".ask-chip").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        input.value = a.suggestions[i].q;
        // animate: brief hide, then show
        if (answer.classList.contains("show")) {
          answer.classList.remove("show");
          setTimeout(() => {
            answerText.textContent = a.suggestions[i].a;
            answer.classList.add("show");
          }, 250);
        } else {
          answerText.textContent = a.suggestions[i].a;
          answer.classList.add("show");
        }
      });
    });

    // Enter on input → if matches a suggestion or just show the first one
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const v = input.value.trim();
        // find first chip whose text loosely contains any keyword from input
        let match = a.suggestions.findIndex((s) => s.q === v);
        if (match === -1 && v.length > 0) {
          match = a.suggestions.findIndex((s) =>
            v
              .split(/\s+/)
              .some((tok) => tok.length > 1 && s.q.includes(tok))
          );
        }
        if (match === -1) match = 0;
        const btn = wrap.querySelector(`.ask-chip[data-i="${match}"]`);
        if (btn) btn.click();
      }
    });
  }

  // ============ REFLECTION ============
  function renderReflection() {
    const r = D.reflection;
    // Assign varied sizes for visual rhythm (deterministic, not random)
    const sizes = ["kw--lg", "kw--md", "", "kw--md", "kw--lg", "kw--sm",
                   "", "kw--md", "kw--sm", "kw--lg", "", "kw--md"];
    const cloud = document.getElementById("reflection-cloud");
    cloud.innerHTML = r.keywords
      .map((k, i) => `<span class="kw ${sizes[i % sizes.length]}">${k}</span>`)
      .join("");

    // Quote: highlight the part after "但" with <em>
    const q = r.quote;
    const splitAt = q.indexOf("但");
    let html;
    if (splitAt > -1) {
      html = q.slice(0, splitAt) + "<em>" + q.slice(splitAt) + "</em>";
    } else {
      html = q;
    }
    document.getElementById("reflection-quote").innerHTML = html;
  }

  // ============ CLOSING ============
  function renderClosing() {
    const c = D.closing;
    document.getElementById("closing-title").textContent = c.titleEN;
    document.getElementById("closing-zh").textContent = c.titleZH;
    document.getElementById("closing-credit").textContent = c.credit;
  }

  // ============ Nav scroll state ============
  function initNav() {
    const nav = document.getElementById("nav");
    const onScroll = () => {
      if (window.scrollY > 60) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ============ IntersectionObserver fade-ins ============
  function initFadeIns() {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    document.querySelectorAll(".fade-in, .journey-step").forEach((el) => io.observe(el));
  }

  // ============ Boot ============
  function boot() {
    renderHero();
    renderJourney();
    renderSpotlight();
    renderAsk();
    renderReflection();
    renderClosing();
    initNav();
    // small defer so journey-step elements exist before observer
    requestAnimationFrame(initFadeIns);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
