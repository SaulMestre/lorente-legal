(() => {
  "use strict";

  const measurementId = String(window.LORENTE_GA4_MEASUREMENT_ID || "").trim();
  if (!/^G-[A-Z0-9]+$/i.test(measurementId)) return;

  const consentKey = "lorentelegal.analytics.consent.v1";
  const consentVersion = "1";
  const validChoices = new Set(["accepted", "rejected"]);
  let consent = null;
  let loaded = false;

  try {
    const saved = JSON.parse(localStorage.getItem(consentKey) || "null");
    if (saved && saved.version === consentVersion && validChoices.has(saved.choice)) {
      consent = saved.choice;
    }
  } catch (_) { /* Storage unavailable: display the choice prompt. */ }

  function loadAnalytics() {
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
    document.head.appendChild(script);
  }

  function storeChoice(choice) {
    consent = choice;
    try {
      localStorage.setItem(consentKey, JSON.stringify({
        version: consentVersion, choice, updatedAt: new Date().toISOString()
      }));
    } catch (_) { /* Consent applies to this visit even if storage fails. */ }
    if (choice === "accepted") loadAnalytics();
    // If consent was withdrawn, reload to ensure the analytics script is no longer running.
    if (choice === "rejected" && loaded) {
      window.location.reload();
      return;
    }
    render();
  }

  function render() {
    document.getElementById("ll-cookie-banner")?.remove();
    document.getElementById("ll-cookie-reopen")?.remove();

    const reopen = document.createElement("button");
    reopen.id = "ll-cookie-reopen";
    reopen.className = "ll-cookie-reopen";
    reopen.type = "button";
    reopen.textContent = "Configurar cookies";
    reopen.addEventListener("click", () => showBanner());
    document.body.appendChild(reopen);

    if (!consent) showBanner();
  }

  function showBanner() {
    document.getElementById("ll-cookie-banner")?.remove();
    const banner = document.createElement("section");
    banner.id = "ll-cookie-banner";
    banner.className = "ll-cookie-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Preferencias de cookies");
    banner.innerHTML = `<h2>Cookies analíticas</h2>
      <p>Utilizamos Google Analytics únicamente si lo autorizas, para conocer cómo se usa esta web y mejorarla. Puedes aceptar, rechazar o cambiar tu elección cuando quieras. Consulta nuestra <a href="/politica-de-cookies.html">política de cookies</a>.</p>
      <div class="ll-cookie-actions">
        <button type="button" class="ll-reject" data-choice="rejected">Rechazar</button>
        <button type="button" data-choice="accepted">Aceptar</button>
      </div>`;
    banner.querySelectorAll("[data-choice]").forEach((button) => {
      button.addEventListener("click", () => storeChoice(button.dataset.choice));
    });
    document.body.appendChild(banner);
  }

  // Never load the GA script or send consent-mode pings without affirmative opt-in.
  if (consent === "accepted") loadAnalytics();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render, { once: true });
  } else render();
})();
