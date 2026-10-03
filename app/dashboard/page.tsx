 "use client";
import { useState } from "react";
import Link from "next/link";
import { Bot, CreditCard, Globe2, Home, LayoutTemplate, Menu, Plus, Settings, Sparkles, Users, WandSparkles, X } from "lucide-react";

const nav = [["Overview",Home],["AI Builder",Bot],["My Websites",Globe2],["Templates",LayoutTemplate],["Credits",CreditCard],["Settings",Settings]] as const;

export default function Dashboard() {
  const [open,setOpen] = useState(false);
  const [prompt,setPrompt] = useState("");
  const [sent,setSent] = useState(false);
  return <div className="appShell">
    <aside className={open?"side mobileOpen":"side"}><div className="sideBrand"><span className="brandMark">T</span><b>TechBuild AI</b>{open&&<button onClick={()=>setOpen(false)}><X/></button>}</div>
      <div className="workspace"><small>WORKSPACE</small><div className="workspaceRow"><span className="avatar">JD</span><div><b>John's Workspace</b><small>Personal</small></div><span>⌄</span></div></div>
      <div className="navGroup">{nav.map(([label,Icon],i)=><button className={i===1?"sideNav active":"sideNav"} key={label}><Icon size={18}/>{label}{label==="Credits"&&<span className="creditBadge">1,000</span>}</button>)}</div>
      <div className="sideBottom"><div className="usage"><div><span>AI credits</span><b>1,000</b></div><div className="bar"><i/></div><small>Renews with your package</small></div><Link href="/" className="sideNav"><Settings size={18}/> Account settings</Link></div>
    </aside>
    <main className="dashMain"><header className="dashHeader"><button className="mobileMenu" onClick={()=>setOpen(true)}><Menu/></button><div><small>AI BUILDER</small><h1>Create something great.</h1></div><div className="headerRight"><span className="liveDot">● System ready</span><Link href="/" className="avatar">JD</Link></div></header>
      <section className="dashGrid">
        <div className="builderWorkspace">
          <div className="builderToolbar"><div className="toolbarTitle"><WandSparkles size={18}/> New website</div><div className="toolbarActions"><button>Preview</button><button>Save</button><button className="publish">Publish</button></div></div>
          <div className="promptArea"><div className="promptHeading"><div className="aiOrb"><Sparkles size={20}/></div><div><h2>What do you want to build?</h2><p>Describe the website, pages and features you need. You can refine it after the first build.</p></div></div>
            <textarea value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder="Example: Build a premium clothing store with products, cart, checkout, customer accounts, WhatsApp contact and an admin dashboard..." />
            <div className="promptBottom"><div className="suggestions"><button onClick={()=>setPrompt("Build a premium clothing store with products, cart and checkout.")}>Clothing store</button><button onClick={()=>setPrompt("Build a professional car dealership with inventory and filters.")}>Car dealership</button><button onClick={()=>setPrompt("Build a modern restaurant website with menu and reservations.")}>Restaurant</button></div><button className="generate big" onClick={()=>setSent(true)}><Sparkles size={17}/>{sent?"Request queued":"Build with AI"}</button></div>
          </div>
          <div className="previewPanel"><div className="previewHead"><span>LIVE PREVIEW</span><span className="previewUrl">your-project.techbuild.ng</span></div><div className="previewCanvas"><div className="previewFake"><div className="fakeNav"><b>YOUR BRAND</b><span>Home &nbsp; Services &nbsp; About &nbsp; Contact</span><button>Get started</button></div><div className="fakeHero"><small>YOUR BUSINESS, REIMAGINED</small><h2>Your next website<br/><em>starts here.</em></h2><p>A polished responsive website generated from your description.</p><button>Explore website →</button></div></div></div></div>
        </div>
        <aside className="rightRail"><div className="railCard"><div className="railTitle"><Bot size={18}/> AI build status</div><div className="check"><i/> Project workspace ready</div><div className="check"><i/> Preview environment ready</div><div className="check pending"><i/> AI provider connection <span>Later</span></div><div className="check pending"><i/> Deployment connection <span>Later</span></div></div>
          <div className="railCard"><div className="railTitle"><CreditCard size={18}/> Credits</div><div className="creditBig">1,000 <small>credits</small></div><p>Use credits for AI building and edits.</p><button className="outlineFull">Buy more credits</button></div>
          <div className="railCard"><div className="railTitle"><Globe2 size={18}/> Publishing</div><div className="domainBox"><small>FREE ADDRESS</small><b>your-project.techbuild.ng</b></div><button className="outlineFull">Connect custom domain</button></div>
        </aside>
      </section>
    </main>
  </div>;
}