import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  Feather,
  Headphones,
  Heart,
  Leaf,
  Pause,
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
          <a href="#values">Our values</a>
        </div>

        <a className="button button-small" href="#coming-soon">
          Follow the journey
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={15} aria-hidden="true" />
            A quieter way to meet with God
          </div>

          <h1>
            Pause the noise.
            <span>Make room for what matters.</span>
          </h1>

          <p className="hero-description">
            Selah is a daily devotional companion that guides you into
            Scripture, reflection, and prayer—then gets out of the way.
          </p>

          <div className="hero-actions">
            <a className="button" href="#journey">
              See how Selah works
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <p>
              <span className="status-dot" aria-hidden="true" />
              Thoughtfully in development
            </p>
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
            A thoughtful path through four moments, designed to feel less like
            completing a task and more like entering a quiet space.
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
          <span>SELAH IS GROWING</span>
          <h2>A quiet place for your daily walk.</h2>
          <p>
            Selah is being built in public for Android and the web. Follow the
            journey as each part takes root.
          </p>
        </div>
        <span className="button button-light" aria-label="Selah is coming soon to Android and web">
          Android + web · Coming soon
        </span>
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
