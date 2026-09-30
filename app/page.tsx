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
} from "lucide-react";

const features = [
  {
    icon: Pause,
    number: "01",
    title: "Arrive slowly",
    description:
      "Begin with a gentle check-in that helps you notice what you are carrying before you read.",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Open your Bible",
    description:
      "Selah guides the session, then asks you to put the phone down and spend time in a physical Bible.",
  },
  {
    icon: PenLine,
    number: "03",
    title: "Reflect honestly",
    description:
      "Thoughtful prompts help you respond to Scripture in your own words, without rushing to the next screen.",
  },
  {
    icon: Leaf,
    number: "04",
    title: "Grow quietly",
    description:
      "Finish with a simple journal entry and a visible journey that celebrates growth, not pressure.",
  },
];

const principles = [
  "Your journal stays on your device",
  "No competitive streak pressure",
  "No core devotional features locked",
  "Designed to support—not replace—Scripture",
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
          <a href="#journey">The journey</a>
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
            A guided rhythm for time with God
          </div>

          <h1>
            Pause the noise.
            <span>Return to Scripture.</span>
          </h1>

          <p className="hero-description">
            Selah gently guides you through arriving, gratitude, Bible
            reading, reflection, and prayer—without replacing the Bible in your
            hands.
          </p>

          <div className="hero-actions">
            <a
              className="button"
              href="https://play.google.com/store/apps/details?id=com.cubelated.selah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Selah on Google Play"
            >
              <GooglePlayIcon size={19} />
              Download on Google Play
            </a>
            <a className="button button-secondary" href="#demo">
              <Play size={17} aria-hidden="true" fill="currentColor" />
              Watch the demo
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Selah devotional session preview">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="verse-card">
            <span>PSALM 1:3</span>
            <p>“Like a tree planted by streams of water...”</p>
          </div>

          <div className="phone">
            <div className="phone-top">
              <span>9:41</span>
              <div className="phone-notch" />
              <Volume2 size={15} aria-hidden="true" />
            </div>
            <div className="session-label">TODAY&apos;S SELAH</div>
            <div className="logo-stage">
              <div className="logo-glow" aria-hidden="true" />
              <img
                src="/selah-logo.webp"
                alt="Selah seedling and path icon"
                width="1024"
                height="1024"
              />
            </div>
            <p className="session-kicker">A moment to be still</p>
            <h2>How is your heart today?</h2>
            <div className="mood-row" aria-hidden="true">
              <span>weary</span>
              <span className="mood-selected">present</span>
              <span>hopeful</span>
            </div>
            <div className="phone-cta">
              Begin quietly
              <ArrowRight size={16} />
            </div>
          </div>

          <div className="audio-card">
            <div className="audio-icon">
              <Headphones size={18} aria-hidden="true" />
            </div>
            <div>
              <span>AMBIENCE</span>
              <p>Still waters</p>
            </div>
            <div className="wave" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
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
              Most apps want more of your attention. Selah is built to help you
              give your attention <em>somewhere else.</em>
            </p>
            <p className="manifesto-body">
              The name comes from a small word found throughout the Psalms: a
              pause, a breath, a moment to consider. Selah brings that same
              rhythm into your devotional time—calm guidance when you need it,
              silence when you do not.
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
          <h2>From distraction to devotion.</h2>
          <p>
            Four intentional moments that guide your attention toward
            Scripture—not another checklist to complete.
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

      <section className="demo-section" id="demo">
        <div className="shell demo-grid">
          <div className="demo-copy">
            <div className="eyebrow">
              <Play size={15} aria-hidden="true" fill="currentColor" />
              See Selah in practice
            </div>
            <h2>See the whole devotional rhythm.</h2>
            <p>
              Follow a complete Selah session—from preparing your Bible and
              arriving quietly to reading, reflecting, praying, and carrying
              one truth into your day.
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
          <div className="growth-visual">
            <div className="growth-ring ring-one" aria-hidden="true" />
            <div className="growth-ring ring-two" aria-hidden="true" />
            <img
              src="/selah-logo.webp"
              alt="A gold seedling growing beside a path"
              width="1024"
              height="1024"
            />
            <div className="growth-caption">
              <Leaf size={17} aria-hidden="true" />
              <span>Rooted. Nourished. Growing.</span>
            </div>
          </div>

          <div className="scripture-copy">
            <div className="eyebrow">
              <BookOpen size={15} aria-hidden="true" />
              Scripture stays central
            </div>
            <h2>Your phone is the doorway, not the destination.</h2>
            <p>
              Selah intentionally asks you to set the screen aside and open a
              physical Bible. The app holds the structure of the session so you
              can give your full attention to the text in front of you.
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
          <h2>Healthy devotion over hollow engagement.</h2>
          <p>
            Selah is not designed to keep you scrolling. Every choice starts
            with one question: does this help someone be more present with God?
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
          <span>NOW ON GOOGLE PLAY</span>
          <h2>Make room for Scripture today.</h2>
          <p>
            Download Selah for Android and begin a guided devotional rhythm that
            leads you away from the screen and back to your own Bible.
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
