import {
  ArrowRight,
  BookOpen,
  Check,
  Feather,
  Headphones,
  Heart,
  Leaf,
  Pause,
  Play,
  PenLine,
  ShieldCheck,
  Sparkles,
  Volume2,
  SlidersHorizontal,
} from "lucide-react";

const features = [
  {
    icon: Heart,
    number: "01",
    title: "Arrive as you are",
    description: "Pause for a wellbeing check-in and gratitude before beginning your time with God.",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Stay with Scripture",
    description: "Open your own physical or digital Bible and read at your own pace. Selah is a guide, not a replacement.",
  },
  {
    icon: PenLine,
    number: "03",
    title: "Reflect and pray",
    description: "Respond to the Word with reflection, prayer, and personal journaling prompts.",
  },
  {
    icon: Leaf,
    number: "04",
    title: "Grow in consistency",
    description: "Take your quiet time one day at a time, with a guided 21- or 40-day journey.",
  },
];

const principles = [
  "A companion to your physical or digital Bible",
  "Journal entries saved on your device",
  "A calm, adaptable devotional rhythm",
  "Built for time with God, not time spent scrolling",
];

const screenGallery = [
  { src: "https://play-lh.googleusercontent.com/gIc1VinHzkzKW1eSI93rolmi_GY6IPmE4PCXT5Wlrn_9nfBKJ_0BkPSIOqBACUEMm8hASQbzTTT7jkQIPvmXzOo=w720-h1280", title: "Begin your day", alt: "Selah Today screen with moonlit mountains and a Start Session button" },
  { src: "https://play-lh.googleusercontent.com/m8SY41nuGrQAL-RBFagyzMeZcNQ9OIkCQCs6WzwLVa6p4h9DHYhu9jkFZOyC33ZkF_aktZjTVE_ZMVutfOAkyQ=w720-h1280", title: "Arrive as you are", alt: "Wellbeing check-in in the Selah devotion flow" },
  { src: "https://play-lh.googleusercontent.com/0GVfZSrUEuMp5998xfoHWkTCmG90gZD3u9ecxFFgFWG4NJb2seCA2VBaX-fgnp9b0MMVaqjVfwO5kQbkGuuW=w720-h1280", title: "Open your Bible", alt: "Selah asks you to prepare a physical or digital Bible" },
  { src: "https://play-lh.googleusercontent.com/sIFDmR17xIABBc7EBVeev_WuRXvH5arN6Swtue_oHOU01P8hm_chOU07aMUhKm_TeU5emrCEve1ndjP9Ob4IvQ=w720-h1280", title: "Reflect on the Word", alt: "Reflection prompt in a guided Selah session" },
  { src: "https://play-lh.googleusercontent.com/s1sRCeXkyUb-MjL82nOAqeVRY1i3dL7iDawCCnQnSTsO_6I23CGaJJW7ztCw4UpgOr3O2n4iB05y6lEfaWCj=w720-h1280", title: "Your own rhythm", alt: "Customizable order of devotional session steps" },
  { src: "https://play-lh.googleusercontent.com/DiOyM01oAy2KG0FVn_FbwrxYyhvlrGHs_TJWL25ETCO9Bmk_LIHZLAPeXyh7PzWGKvRMgwYq-MuuRhoK8bqgVA=w720-h1280", title: "See your journey", alt: "Day-by-day journey progress in Selah" },
  { src: "https://play-lh.googleusercontent.com/8HF0Z5AWSTjcJ-ubpB8uKqHABrm-ZRfOIsDwWtP8LmV9wdEY04mi647Y8Ch6vhEuCU-gNOAUHfssqTQSkoIeJw=w720-h1280", title: "Grow with grace", alt: "Fig tree imagery representing growth in Selah" },
];

function GooglePlayIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      className="google-play-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path fill="#00d7fe" d="M3.4 2.2c-.25.3-.4.72-.4 1.22v17.16c0 .48.15.9.4 1.2L13.14 12 3.4 2.2Z" />
      <path fill="#ffce00" d="m16.28 8.85-3.14 3.15 3.14 3.15 3.78-2.15c1.25-.71 1.25-1.29 0-2l-3.78-2.15Z" />
      <path fill="#00f076" d="m3.4 2.2 9.74 9.8 3.14-3.15L5.65 2.82c-.9-.51-1.72-.62-2.25-.62Z" />
      <path fill="#f63448" d="m3.4 21.8 9.74-9.8 3.14 3.15-10.63 6.03c-.9.51-1.72.62-2.25.62Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Selah home">
          <img src="/selah-logo.webp" alt="" width="512" height="512" />
          <span>SELAH</span>
        </a>

        <div className="nav-links">
          <a href="#why-selah">Why Selah</a>
          <a href="#journey">How it works</a>
          <a href="#screenshots">App preview</a>
          <a href="#demo">Demo</a>
          <a href="#values">Our values</a>
        </div>

        <a
          className="button button-small"
          href="https://play.google.com/store/apps/details?id=com.cubelated.selah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GooglePlayIcon size={17} />
          Google Play
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={15} aria-hidden="true" />
            A GUIDED DEVOTIONAL COMPANION
          </div>
          <h1 aria-label="Pause. Praise. Pray.">
            Pause.<span>Praise. Pray.</span>
          </h1>
          <p className="hero-lead">Build your daily devotional habit with God.</p>
          <p className="hero-description">
            Selah helps you step away from the distractions of everyday life and spend intentional time with God through His Word. Begin a calm, guided rhythm of gratitude, Scripture, reflection, prayer, and journaling.
          </p>
          <div className="hero-actions">
            <a
              className="button"
              href="https://play.google.com/store/apps/details?id=com.cubelated.selah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get Selah on Google Play"
            >
              <GooglePlayIcon size={19} />
              Get it on Google Play
            </a>
            <a className="button button-secondary" href="#screenshots">
              Explore the app
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
          <p className="hero-subnote">A few quiet moments, at your own pace.</p>
        </div>

        <div className="hero-visual" aria-label="Selah daily devotional app preview">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="phone phone-real">
            <img
              src={"https://play-lh.googleusercontent.com/gIc1VinHzkzKW1eSI93rolmi_GY6IPmE4PCXT5Wlrn_9nfBKJ_0BkPSIOqBACUEMm8hASQbzTTT7jkQIPvmXzOo=w720-h1280"}
              alt="The real Selah Today screen featuring a moonlit mountain landscape, daily journey progress and Start Session"
              width="720"
              height="1280"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="hero-float-note" aria-hidden="true">
            <Leaf size={17} />
            <span>Grow one day at a time</span>
          </div>
        </div>
      </section>

      <section className="manifesto" id="why-selah">
        <div className="shell manifesto-grid">
          <div className="section-marker">
            <span>WHY SELAH</span>
            <div />
          </div>
          <div>
            <p className="manifesto-quote">
              Life is busy, and quiet time can be difficult to keep. Selah exists to
              make room for <em>a daily journey with God.</em>
            </p>
            <p className="manifesto-body">
              Born from a desire to help Christians find consistency in the middle of busy days, Selah offers gentle structure without taking the place of the Bible. Bring your own Bible, move at your own pace, and let each session lead you back to the Word.
            </p>
          </div>
        </div>
      </section>

      <section className="journey shell" id="journey">
        <div className="section-heading">
          <div className="eyebrow">
            <Feather size={15} aria-hidden="true" />
            A simple daily rhythm
          </div>
          <h2>Small moments. A meaningful rhythm.</h2>
          <p>
            Each guided session creates space for a wellbeing check-in, gratitude, Bible reading, reflection, prayer, and journaling. The flow is yours to adapt.
          </p>
        </div>

        <div className="feature-grid">
          {features.map(({ icon: Icon, number, title, description }) => (
            <article className="feature-card" key={title}>
              <div className="feature-top">
                <div className="feature-icon">
                  <Icon size={23} aria-hidden="true" />
                </div>
                <span>{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="app-gallery-section" id="screenshots" aria-labelledby="app-gallery-heading">
        <div className="shell">
          <div className="app-gallery-header">
            <div>
              <div className="eyebrow"><Sparkles size={15} aria-hidden="true" /> INSIDE SELAH</div>
              <h2 id="app-gallery-heading">A peaceful space for your quiet time.</h2>
            </div>
            <p>Discover the app through real screens: from the first moment of stillness to Scripture, reflection, and growth.</p>
          </div>
          <div className="app-gallery-scroll" aria-label="Screenshots of the Selah Android app" tabIndex={0}>
            {screenGallery.map((screen) => (
              <figure className="app-gallery-item" key={screen.title}>
                <div className="app-gallery-image">
                  <img src={screen.src} alt={screen.alt} width="720" height="1280" loading="lazy" decoding="async" />
                </div>
                <figcaption>{screen.title}</figcaption>
              </figure>
            ))}
          </div>
          <p className="app-gallery-hint">Scroll or swipe to explore more screens <ArrowRight size={16} aria-hidden="true" /></p>
        </div>
      </section>

      <section className="demo-section" id="demo">
        <div className="shell demo-grid">
          <div className="demo-copy">
            <div className="eyebrow">
              <Play size={15} aria-hidden="true" fill="currentColor" />
              See Selah in practice
            </div>
            <h2>A look inside a Selah session.</h2>
            <p>
              See how the app guides you from arriving and gratitude to opening your Bible, reflecting on Scripture, and ending in prayer.
            </p>
            <a
              className="demo-link"
              href="https://youtube.com/shorts/Iv-_ad13A6Y?feature=share"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on YouTube
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="demo-frame">
            <div className="demo-video">
              <iframe
                src="https://www.youtube-nocookie.com/embed/Iv-_ad13A6Y?rel=0"
                title="Selah guided devotional session demo"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="scripture-section">
        <div className="shell scripture-grid">
          <div className="growth-visual bible-screenshot-visual">
            <div className="growth-ring ring-one" aria-hidden="true" />
            <div className="growth-ring ring-two" aria-hidden="true" />
            <img
              src={"https://play-lh.googleusercontent.com/0GVfZSrUEuMp5998xfoHWkTCmG90gZD3u9ecxFFgFWG4NJb2seCA2VBaX-fgnp9b0MMVaqjVfwO5kQbkGuuW=w720-h1280"}
              alt="Selah prompts you to have your own Bible ready before your session"
              width="720"
              height="1280"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="scripture-copy">
            <div className="eyebrow">
              <BookOpen size={15} aria-hidden="true" />
              Scripture stays central
            </div>
            <h2>Your Bible stays at the heart of it.</h2>
            <p>
              Selah is designed to guide you, not replace Scripture. Read using a physical or digital Bible of your choice, at your own pace. The app helps structure the moments around reading with thoughtful prompts, reflection, and prayer.
            </p>
            <div className="scripture-note">
              <span>“</span>
              <p>
                He is like a tree planted by streams of water, which yields its
                fruit in season.
                <small>Psalm 1:3</small>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="values shell" id="values">
        <div className="values-copy">
          <div className="eyebrow">
            <Heart size={15} aria-hidden="true" />
            Built with conviction
          </div>
          <h2>Your time with God, without the noise.</h2>
          <p>
            A simple way to build a consistent devotional habit in everyday life—without making the app itself the focus.
          </p>
        </div>

        <div className="values-card">
          <div className="values-card-heading">
            <ShieldCheck size={25} aria-hidden="true" />
            <div>
              <span>THE SELAH PROMISE</span>
              <p>What guides every product decision</p>
            </div>
          </div>
          <ul>
            {principles.map((principle) => (
              <li key={principle}>
                <span>
                  <Check size={14} aria-hidden="true" />
                </span>
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="final-cta shell" id="coming-soon">
        <div className="cta-sprout" aria-hidden="true">
          <img src="/selah-logo.webp" alt="" width="512" height="512" />
        </div>
        <div className="cta-content">
          <span>AVAILABLE ON GOOGLE PLAY</span>
          <h2>Make room for God today.</h2>
          <p>
            Pause. Praise. Pray. Start your daily devotional journey with guided check-ins, Scripture reading, prayer, reflection, and journaling.
          </p>
        </div>
        <a
          className="button button-light"
          href="https://play.google.com/store/apps/details?id=com.cubelated.selah"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get Selah on Google Play"
        >
          <GooglePlayIcon size={19} />
          Download on Google Play
        </a>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top" aria-label="Selah home">
          <img src="/selah-logo.webp" alt="" width="512" height="512" />
          <span>SELAH</span>
        </a>
        <div className="footer-links" aria-label="Selah resources">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/support">Support</a>
        </div>
        <span>© {new Date().getFullYear()} Selah</span>
      </footer>
    </main>
  );
}
