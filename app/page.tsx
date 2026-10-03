import Link from "next/link";
import { ArrowRight, Bot, Globe2, LayoutTemplate, Rocket, ShieldCheck, Sparkles, WandSparkles, Zap } from "lucide-react";

const features = [
  ["AI Website Builder", "Describe your business in plain language and turn the idea into a real website project.", Bot],
  ["Publish in minutes", "Preview your project, make changes, then publish it to a TechBuild subdomain or connect your own domain.", Rocket],
  ["Business-ready foundation", "Projects, credits, billing, domains, templates and admin controls are designed into the platform.", ShieldCheck],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <div className="brand"><span className="brandMark">T</span><span>TechBuild <b>AI</b></span></div>
        <div className="navLinks"><a href="#features">Features</a><a href="#how">How it works</a><a href="#pricing">Pricing</a></div>
        <div className="navActions"><Link className="ghostBtn" href="/dashboard">Sign in</Link><Link className="primaryBtn" href="/dashboard">Start building <ArrowRight size={16}/></Link></div>
      </nav>

      <section className="hero shell">
        <div className="heroCopy">
          <div className="eyebrow"><Sparkles size={15}/> AI WEBSITE BUILDER</div>
          <h1>Describe it.<br/><span>Build it.</span> Publish it.</h1>
          <p className="heroText">Turn an idea into a polished business website with AI. Keep editing by chat, preview every change, and publish when it is ready.</p>
          <div className="heroActions"><Link className="primaryBtn big" href="/dashboard">Create your first website <ArrowRight size={18}/></Link><a className="secondaryBtn big" href="#how">See how it works</a></div>
          <div className="trust"><span><ShieldCheck size={16}/> Secure project architecture</span><span><Zap size={16}/> Usage-based AI credits</span></div>
        </div>
        <div className="builderCard">
          <div className="windowTop"><span/><span/><span/><div className="windowTitle">TechBuild AI / New project</div></div>
          <div className="builderGrid">
            <aside className="miniSide"><div className="miniLogo">T</div>{["⌂","✦","◫","◉","◎"].map((x,i)=><div className={i===1?"miniItem active":"miniItem"} key={i}>{x}</div>)}</aside>
            <div className="builderMain">
              <div className="builderHead"><div><small>CREATE WEBSITE</small><h3>What are you building?</h3></div><span className="status"><i/> Ready</span></div>
              <div className="promptBox"><div className="promptIcon"><WandSparkles size={17}/></div><div><b>Build me a premium car dealership website</b><p>Include inventory, filters, vehicle pages, contact forms, WhatsApp and an admin dashboard.</p></div></div>
              <div className="chips"><span>Online store</span><span>Business</span><span>Admin dashboard</span></div>
              <button className="generate">Generate website <Sparkles size={16}/></button>
              <div className="progress"><div><span>Project architecture</span><b>Ready</b></div><div><span>Responsive design</span><b>Ready</b></div><div><span>Deployment</span><b>Connected later</b></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section shell"><div className="sectionLabel">BUILT FOR CREATORS & BUSINESSES</div><h2>Everything you need to turn an idea into a live website.</h2><div className="featureGrid">{features.map(([title,desc,Icon])=><div className="featureCard" key={title as string}><div className="featureIcon"><Icon size={21}/></div><h3>{title as string}</h3><p>{desc as string}</p></div>)}</div></section>

      <section id="how" className="section darkSection"><div className="shell"><div className="sectionLabel">HOW IT WORKS</div><h2>One workspace from idea to launch.</h2><div className="steps">{[["01","Describe","Tell the AI what you want to build."],["02","Refine","Keep chatting to change pages, sections and features."],["03","Preview","Review the responsive project before publishing."],["04","Publish","Use a free TechBuild address or connect your domain."]].map(x=><div className="step" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></div></section>

      <section id="pricing" className="section shell"><div className="sectionLabel">SIMPLE PRICING</div><h2>Pay for building capacity, not unlimited usage.</h2><p className="sectionIntro">The live AI provider and payment gateway can be connected later; the product is structured around credits so usage can be controlled.</p><div className="priceGrid">{[["Starter","₦5,000","For trying the builder"],["Business","₦20,000","For launching a real business site"],["Pro","₦30,000","For heavier building and advanced publishing"]].map((p,i)=><div className={i===1?"priceCard featured":"priceCard"} key={p[0]}>{i===1&&<div className="popular">POPULAR</div>}<h3>{p[0]}</h3><div className="price">{p[1]}<small>/ package</small></div><p>{p[2]}</p><Link className="secondaryBtn" href="/dashboard">Choose plan</Link></div>)}</div></section>

      <footer className="footer"><div className="shell footerInner"><div className="brand"><span className="brandMark">T</span><span>TechBuild <b>AI</b></span></div><p>Describe it. Build it. Publish it.</p><span>© 2026 TechBuild AI</span></div></footer>
    </main>
  );
}