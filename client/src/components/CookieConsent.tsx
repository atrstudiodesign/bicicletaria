import { useEffect, useState } from "react";
import { Link } from "wouter";

const CONSENT_KEY = "r3-cookie-consent-v1";
const OPEN_CONSENT_EVENT = "r3:open-cookie-consent";

type ConsentChoice = "accepted" | "rejected";

type TrackingWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  fbq?: ((...args: unknown[]) => void) & {
    callMethod?: (...args: unknown[]) => void;
    queue?: unknown[][];
    loaded?: boolean;
    version?: string;
    push?: (...args: unknown[]) => void;
  };
  _fbq?: TrackingWindow["fbq"];
};

function prepareConsentMode() {
  const trackingWindow = window as TrackingWindow;
  trackingWindow.dataLayer = trackingWindow.dataLayer || [];
  trackingWindow.gtag = trackingWindow.gtag || ((...args: unknown[]) => trackingWindow.dataLayer?.push(args));
  trackingWindow.gtag("consent", "default", {
    ad_storage: "denied",
    analytics_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500,
  });
}

function loadGoogleTagManager() {
  if (document.querySelector('script[data-r3-tracker="gtm"]')) return;

  const trackingWindow = window as TrackingWindow;
  trackingWindow.dataLayer = trackingWindow.dataLayer || [];
  trackingWindow.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  const script = document.createElement("script");
  script.async = true;
  script.dataset.r3Tracker = "gtm";
  script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-WC3HFRFR";
  document.head.appendChild(script);
}

function loadMetaPixel() {
  const trackingWindow = window as TrackingWindow;
  if (trackingWindow.fbq) return;

  const fbq = ((...args: unknown[]) => {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue?.push(args);
  }) as NonNullable<TrackingWindow["fbq"]>;

  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.push = fbq;
  trackingWindow.fbq = fbq;
  trackingWindow._fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.dataset.r3Tracker = "meta";
  script.src = "https://connect.facebook.net/pt_BR/fbevents.js";
  document.head.appendChild(script);

  fbq("init", "1576356707029990");
  fbq("track", "PageView");
}

function enableOptionalTracking() {
  const trackingWindow = window as TrackingWindow;
  trackingWindow.gtag?.("consent", "update", {
    ad_storage: "granted",
    analytics_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  });
  loadGoogleTagManager();
  loadMetaPixel();
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}

export default function CookieConsent() {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    prepareConsentMode();
    const storedChoice = localStorage.getItem(CONSENT_KEY) as ConsentChoice | null;
    setChoice(storedChoice);
    setIsOpen(storedChoice === null);
    if (storedChoice === "accepted") enableOptionalTracking();

    const openPreferences = () => setIsOpen(true);
    window.addEventListener(OPEN_CONSENT_EVENT, openPreferences);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, openPreferences);
  }, []);

  const saveChoice = (nextChoice: ConsentChoice) => {
    const trackersWereLoaded = choice === "accepted";
    localStorage.setItem(CONSENT_KEY, nextChoice);
    setChoice(nextChoice);
    setIsOpen(false);

    if (nextChoice === "accepted") {
      enableOptionalTracking();
      return;
    }

    (window as TrackingWindow).gtag?.("consent", "update", {
      ad_storage: "denied",
      analytics_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });

    if (trackersWereLoaded) window.location.reload();
  };

  if (!isOpen) return null;

  return (
    <section
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-5xl rounded-2xl border border-white/15 bg-zinc-950 p-5 text-white shadow-2xl sm:inset-x-6 sm:bottom-6 sm:p-6"
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 id="cookie-consent-title" className="font-montserrat text-lg font-black uppercase italic text-[#F97316]">
            Sua privacidade importa
          </h2>
          <p id="cookie-consent-description" className="mt-2 text-sm leading-relaxed text-zinc-300">
            Usamos armazenamento essencial para guardar sua escolha. Google Tag Manager e Meta Pixel só são ativados com sua autorização. Você pode mudar sua decisão a qualquer momento.
          </p>
          <div className="mt-2 flex gap-4 text-sm font-bold">
            <Link href="/politica-de-privacidade" className="text-white underline underline-offset-4 hover:text-[#F97316]">Privacidade</Link>
            <Link href="/cookies" className="text-white underline underline-offset-4 hover:text-[#F97316]">Cookies</Link>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-3 sm:flex-row lg:shrink-0">
          <button
            type="button"
            onClick={() => saveChoice("rejected")}
            className="min-h-11 rounded-full border border-zinc-600 px-5 py-2.5 text-sm font-black uppercase transition-colors hover:border-white hover:bg-white hover:text-black"
          >
            Somente necessários
          </button>
          <button
            type="button"
            onClick={() => saveChoice("accepted")}
            className="min-h-11 rounded-full bg-[#F97316] px-5 py-2.5 text-sm font-black uppercase text-white transition-colors hover:bg-[#EA580C]"
          >
            Aceitar todos
          </button>
        </div>
      </div>
    </section>
  );
}
