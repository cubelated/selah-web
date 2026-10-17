import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  Compass,
  Heart,
  Leaf,
  NotebookPen,
  Play,
  Sprout,
  Sunrise,
  Sun,
  HandHeart,
} from "lucide-react";
import "./landing.css";

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.cubelated.selah";
const DEMO_URL = "https://youtube.com/shorts/Iv-_ad13A6Y";
const screenshots = {
  today: "https://play-lh.googleusercontent.com/gIc1VinHzkzKW1eSI93rolmi_GY6IPmE4PCXT5Wlrn_9nfBKJ_0BkPSIOqBACUEMm8hASQbzTTT7jkQIPvmXzOo=w720-h1280",
  arrive: "https://play-lh.googleusercontent.com/m8SY41nuGrQAL-RBFagyzMeZcNQ9OIkCQCs6WzwLVa6p4h9DHYhu9jkFZOyC33ZkF_aktZjTVE_ZMVutfOAkyQ=w720-h1280",
  bible: "https://play-lh.googleusercontent.com/0GVfZSrUEuMp5998xfoHWkTCmG90gZD3u9ecxFFgFWG4NJb2seCA2VBaX-fgnp9b0MMVaqjVfwO5kQbkGuuW=w720-h1280",
  reflect: "https://play-lh.googleusercontent.com/sIFDmR17xIABBc7EBVeev_WuRXvH5arN6Swtue_oHOU01P8hm_chOU07aMUhKm_TeU5emrCEve1ndjP9Ob4IvQ=w720-h1280",
  personalize: "https://play-lh.googleusercontent.com/s1sRCeXkyUb-MjL82nOAqeVRY1i3dL7iDawCCnQnSTsO_6I23CGaJJW7ztCw4UpgOr3O2n4iB05y6lEfaWCj=w720-h1280",
  journey: "https://play-lh.googleusercontent.com/DiOyM01oAy2KG0FVn_FbwrxYyhvlrGHs_TJWL25ETCO9Bmk_LIHZLAPeXyh7PzWGKvRMgwYq-MuuRhoK8bqgVA=w720-h1280",
  grow: "https://play-lh.googleusercontent.com/8HF0Z5AWSTjcJ-ubpB8uKqHABrm-ZRfOIsDwWtP8LmV9wdEY04mi647Y8Ch6vhEuCU-gNOAUHfssqTQSkoIeJw=w720-h1280",
};

const rhythm = [
  { label: "Arrive", hint: "Be present.", icon: Compass },
  { label: "Read", hint: "Open Scripture.", icon: BookOpen },
  { label: "Reflect", hint: "Go deeper.", icon: Heart },
  { label: "Pray", hint: "Talk with God.", icon: HandHeart },
  { label: "Journal", hint: "Remember.", icon: NotebookPen },
  { label: "Grow", hint: "One day at a time.", icon: Sprout },
];

const previews = [
  { image: screenshots.arrive, name: "Check in", description: "Arrive as you are." },
  { image: screenshots.reflect, name: "Reflect", description: "Make space to listen." },
  { image: screenshots.personalize, name: "Make it yours", description: "Shape your devotion." },
  { image: screenshots.journey, name: "See your growth", description: "Day by day." },
];

function PlayStoreMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="#00d7fe" d="M3.4 2.2c-.25.3-.4.72-.4 1.22v17.16c0 .48.15.9.4 1.2L13.14 12 3.4 2.2Z" />
      <path fill="#ffce00" d="m16.28 8.85-3.14 3.15 3.14 3.15 3.78-2.15c1.25-.71 1.25-1.29 0-2l-3.78-2.15Z" />
      <path fill="#00f076" d="m3.4 2.2 9.74 9.8 3.14-3.15L5.65 2.82c-.9-.51-1.72-.62-2.25-.62Z" />
      <path fill="#f63448" d="m3.4 21.8 9.74-9.8 3.14 3.15-10.63 6.03c-.9.51-1.72.62-2.25.62Z" />
    </svg>
  );
}

function Brand() {
  return (
    <a className="sl-brand" href="#top" aria-label="Selah home">
      <img src="/selah-logo.webp" alt="" width="44" height="44" />
      <span>SELAH</span>
    </a>
  );
}

function DownloadLink({ compact = false }: { compact?: boolean }) {
  return (
    <a className={compact ? "sl-button sl-button-small" : "sl-button"} href={PLAY_URL} target="_blank" rel="noopener noreferrer">
      <PlayStoreMark size={compact ? 16 : 19} />
      <span>{compact ? "Get the app" : "Get the app"}</span>
      <ArrowRight size={compact ? 15 : 17} aria-hidden="true" />
    </a>
  );
}

function Phone({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={"sl-phone " + className}>
      <img src={src} alt={alt} width="720" height="1280" loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : undefined} decoding="async" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="sl-page" id="top">
      <section className="sl-hero" aria-labelledby="hero-title">
        <div className="sl-hero-scenery" aria-hidden="true" />
        <header className="sl-header sl-container">
          <Brand />
          <nav className="sl-links" aria-label="Main navigation">
            <a href="#features">Features</a>
            <a href="#journey">Journey</a>
            <a href="#preview">Preview</a>
            <a href="#faq">FAQ</a>
          </nav>
          <DownloadLink compact />
        </header>

        <div className="sl-container sl-hero-content">
          <div className="sl-hero-copy">
            <p className="sl-eyebrow">YOUR DAILY DEVOTIONAL COMPANION</p>
            <h1 id="hero-title">Pause.<br />Praise. Pray.</h1>
            <p className="sl-hero-subtitle">A gentle rhythm with God.</p>
            <p className="sl-hero-caption">Read. Reflect. Pray.</p>
            <div className="sl-hero-actions">
              <DownloadLink />
              <a className="sl-outline-button" href="#demo">
                <Play size={17} fill="currentColor" aria-hidden="true" />
                Watch demo
              </a>
            </div>
          </div>
          <div className="sl-hero-phone">
            <Phone src={screenshots.today} alt="Selah Today page showing a moonlit mountain landscape and daily devotion" className="sl-phone-hero" priority />
          </div>
        </div>
        <div className="sl-hero-bottom-fade" aria-hidden="true" />
      </section>

      <section className="sl-rhythm sl-container" id="features" aria-labelledby="rhythm-title">
        <div className="sl-rhythm-title">
          <span className="sl-kicker">HOW SELAH WORKS</span>
          <h2 id="rhythm-title">Made for quiet time.</h2>
          <p>Bring your Bible. Keep your focus.</p>
        </div>
        <div className="sl-rhythm-grid">
          {rhythm.map(({ icon: Icon, label, hint }) => (
            <div className="sl-rhythm-item" key={label}>
              <Icon size={27} strokeWidth={1.7} aria-hidden="true" />
              <strong>{label}</strong>
              <span>{hint}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="sl-preview-section sl-container" id="preview" aria-labelledby="preview-title">
        <div className="sl-section-intro">
          <div>
            <span className="sl-kicker">INSIDE THE APP</span>
            <h2 id="preview-title">A guided journey,<br />one day at a time.</h2>
          </div>
          <p>A little structure for a deeper walk with God.</p>
        </div>
        <div className="sl-preview-grid">
          {previews.map((item) => (
            <figure className="sl-preview-card" key={item.name}>
              <Phone src={item.image} alt={"Selah app screen: " + item.name} />
              <figcaption>
                <strong>{item.name}</strong>
                <span>{item.description}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="sl-journey-section sl-container" id="journey" aria-labelledby="journey-title">
        <div className="sl-journey-intro">
          <span className="sl-kicker">YOUR PATH</span>
          <h2 id="journey-title">Choose your journey.</h2>
          <p>Two paths. A deeper you.</p>
        </div>
        <div className="sl-journey-cards">
          <article className="sl-journey-card sl-journey-21">
            <div className="sl-journey-icon"><Sunrise size={34} strokeWidth={1.35} aria-hidden="true" /></div>
            <span>INSPIRED BY DANIEL</span>
            <h3>21 days</h3>
            <p>Start small. Stay faithful.</p>
            <span className="sl-journey-indicator" aria-hidden="true"><Check size={18}/></span>
          </article>
          <article className="sl-journey-card sl-journey-40">
            <div className="sl-journey-icon"><Sun size={34} strokeWidth={1.35} aria-hidden="true" /></div>
            <span>INSPIRED BY JESUS&apos; WILDERNESS JOURNEY</span>
            <h3>40 days</h3>
            <p>Make room for growth.</p>
            <span className="sl-journey-indicator" aria-hidden="true"><Check size={18}/></span>
          </article>
        </div>
      </section>

      <section className="sl-feature-pair sl-container" aria-label="The Selah difference">
        <article className="sl-feature-panel sl-bible-panel">
          <div className="sl-feature-copy">
            <span className="sl-kicker">SCRIPTURE FIRST</span>
            <h2>Bring your<br />Bible.</h2>
            <p>Selah guides. Scripture leads.</p>
            <span className="sl-feature-detail"><BookOpen size={16} aria-hidden="true"/> Physical or digital.</span>
          </div>
          <img className="sl-bible-art" src={screenshots.bible} alt="Bible preparation step in the Selah app" width="720" height="1280" loading="lazy" decoding="async" />
        </article>
        <article className="sl-feature-panel sl-grow-panel">
          <div className="sl-feature-copy">
            <span className="sl-kicker">GROW WITH GRACE</span>
            <h2>Faith grows<br />daily.</h2>
            <p>Little moments. Lasting roots.</p>
            <span className="sl-feature-detail"><Leaf size={16} aria-hidden="true"/> Track your journey.</span>
          </div>
          <img className="sl-growth-art" src={screenshots.grow} alt="Fig tree growing as a metaphor for the devotional journey in Selah" width="720" height="1280" loading="lazy" decoding="async" />
        </article>
      </section>

      <section className="sl-demo sl-container" id="demo" aria-labelledby="demo-title">
        <div className="sl-demo-copy">
          <span className="sl-kicker">A CLOSER LOOK</span>
          <h2 id="demo-title">See Selah in action.</h2>
          <p>Less scrolling. More stillness.</p>
          <a className="sl-text-link" href={DEMO_URL} target="_blank" rel="noopener noreferrer">
            Watch on YouTube <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="sl-demo-frame">
          <iframe src="https://www.youtube-nocookie.com/embed/Iv-_ad13A6Y?rel=0" loading="lazy" title="Selah devotional app demo video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        </div>
      </section>

      <section className="sl-faq sl-container" id="faq" aria-labelledby="faq-title">
        <div>
          <span className="sl-kicker">GOOD TO KNOW</span>
          <h2 id="faq-title">A few simple answers.</h2>
        </div>
        <div className="sl-faq-items">
          <details>
            <summary>Do I need a Bible? <ChevronDown size={19} aria-hidden="true"/></summary>
            <p>Bring your own physical or digital Bible. Selah guides your quiet time around it.</p>
          </details>
          <details>
            <summary>Can I customize my session? <ChevronDown size={19} aria-hidden="true"/></summary>
            <p>Yes. Reorder the movable devotion steps to fit your rhythm.</p>
          </details>
          <details>
            <summary>Where does my journal stay? <ChevronDown size={19} aria-hidden="true"/></summary>
            <p>Your journal is stored locally on your device.</p>
          </details>
        </div>
      </section>

      <section className="sl-final" aria-labelledby="final-title">
        <div className="sl-final-scenery" aria-hidden="true" />
        <div className="sl-final-content sl-container">
          <img src="/selah-logo.webp" alt="" width="84" height="84" loading="lazy" />
          <h2 id="final-title">Start with Selah.</h2>
          <p>Pause. Praise. Pray.</p>
          <DownloadLink />
        </div>
      </section>

      <footer className="sl-footer sl-container">
        <Brand />
        <span>Pause. Praise. Pray.</span>
        <nav aria-label="Resources">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/support">Support</a>
        </nav>
        <small>© {new Date().getFullYear()} Selah</small>
      </footer>
    </main>
  );
}
