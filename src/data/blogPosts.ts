import type { BlogPost } from '../types';

// This is where you add your blog posts
// Each post should have: id, title, date, excerpt, content, tags, and optionally readTime
export const blogPosts: BlogPost[] = [
  {
    id: 'October-2024-First-Post',
    title: 'Building Studio Lepine: How I Shipped a Portfolio Site in 2 Hours with AI',
    date: '2025-10-12',
    excerpt: 'I built my entire portfolio site in 2 hours using React, TypeScript, and AI assistance. This is the story of escaping a corporate domain monopoly, finally committing to a brand that matters, and shipping professional web presence without being a "real" developer. From lepine.biz registration to live deployment, heres exactly how it went down.',
    content: `
<p>I built my entire portfolio site in about 2 hours last night. Not a template. Not a drag-and-drop Wix thing. A proper React + TypeScript site deployed to Cloudflare Pages with custom branding, multiple pages, and a logo that actually means something to me.</p>
<p>This isn't a humblebrag. I'm not some 10x developer who can crank out production-ready sites in an afternoon. I'm a window cleaner from Saskatchewan who "vibe codes" with AI assistance because I never formally learned to program. But that's exactly why this story matters. If I can do this, the barrier to entry for building professional web presence just got a hell of a lot lower.</p>

<u>Here's how it actually went down.</u>
<p>The Domain Saga (Or: How I Learned to Stop Worrying and Love .biz) Before I could build anything, I needed a domain. And not just any domain. I wanted lepine.com because Lepine is my last name, and I'm the last Lepine in my bloodline. It felt important.
Turns out Hover (well, their parent company Tucows) bought roughly 40,000 surname domains back in 2006 for $18 million. They monetize them through a service called RealNames, which is basically renting email addresses like firstname@surname.com for $35/year. You don't own the domain, you rent a mailbox on it.
lepine.com? They own it. lepine.net? They own it. lepine.org? Probably them too.
I could pay $35/year forever to rent cody@lepine.com, or I could find an alternative. After checking WHOIS records and confirming they've held these domains for 20 years without dropping a single one (because their entire business model depends on the monopoly), I gave up on .com.
Then I found the gap in their portfolio: lepine.biz was available. For $15/year. And I'd actually own it. Registered it for 5 years ($76) through Cloudflare, set up iCloud+ custom domain email (cody@lepine.biz), and suddenly I had beaten a publicly-traded corporation's two-decade domain hoarding strategy for less than the cost of two months' Netflix.</p>

<u>Branding:</u> Why "Studio Lepine" and not another startup name?

Well, <b>I have a problem.</b> I kept starting brands and killing them:

- SnowAway Snow & Ice Removal
- Splinter's Woodworking
- Lepine Contracting
- Yosemite Solutions
- The Trifecta Project
- Learn Quickly Network

  Every time I'd get excited about a new idea, I'd create a whole brand identity around it, build a logo, register a domain, and then six months later I'd realize the name didn't fit or I'd moved on to something else.
The pattern was obvious: I kept trying to look like a company when I'm actually just one person who does a lot of different things. Multi-disciplinary work (design, security research, development, woodworking, systems engineering) looks scattered when you pretend to be an agency. But when it's clearly one person? It just looks like range.
So I decided to stop fighting it: Studio Lepine. My last name. No cute startup naming. No trying to be clever. Just me.
The "Studio" part because I have a messy workshop full of woodworking tools, window cleaning equipment, and code projects. It's not a sterile lab (though I'd love to make it look like one. I'm obsessed with NileRed and StuffMadeHere videos). It's a studio where I make things. <b>And here's the kicker:</b> the initials are SL. My dad's name was Serge Lepine. He was from Sherbrooke, Quebec, and passed away a few years ago after a palliative care unit gave him five extra years when he was on his death bed. Having my company initials be his felt like the right kind of permanence.
Also, there's a security company in Regina (220km away) called LS Security. I'm offering security services as part of my work. Studio Lepine equals SL, not LS. No brand collision.

<u>The Logo:</u> From AI Renders to Actual Design

  I started by doing what every person with access to AI image generation does: I typed some dramatic prompts into an image generator and got back these insanely detailed renders with circuit boards, wood grain textures, metallic thorns radiating everywhere, and about 47 different visual elements competing for attention.
<b>They looked cool. But they were completely unusable as actual logos.</b> The problem with AI-generated logo concepts is they're maximalist by default. Every prompt gets rendered as if it's album art or a game badge. But logos need to work at 32x32 pixels as a favicon, embroidered on a shirt, laser-cut from steel, and printed in black-and-white on a business card.
So I simplified. <b>Hard.</b>

<u>What I actually needed:</u>

- SL monogram (my dad's initials)
- Clean, scalable
- Works in pure black and white
- Square-ish format
- Professional but not corporate

  I ended up with a slab serif SL where the letters overlap heavily, almost interlocking. Added a barbed wire element as a divider between the monogram and "STUDIO LEPINE" wordmark (because "lepine" comes from the French "l'épine," meaning "the thorn"). At large sizes it reads as thorns, at small sizes it just becomes a dividing line. Functional and thematic.
<p>The whole thing took maybe 30 minutes of iteration to get right. The key was knowing when to stop adding shit.</p>

<p><u>Building the Site:</u> Claude Code + 2 Hours</p>

<u>Here's the actual tech stack:</u>

- React + TypeScript
- Tailwind CSS
- Vite (build tool)
- Deployed on Cloudflare Pages (free hosting)
- Repo on GitHub (going public once I'm happy with it)

<u>I fed Claude Code a detailed prompt with:</u>

- Brand context (Studio Lepine, multi-disciplinary creator, Saskatchewan-based)
- Site structure (Home, Work, About, Contact pages)
- Design requirements (minimal, monochrome-first, fast, accessible)
- ontent priorities (showcase digital + physical work, featured projects, contact email prominent)

Then I let it scaffold the entire thing.

<u>Timeline breakdown:</u>

0:00-0:15 – Initial repo setup, dependencies, basic routing
0:15-0:45 – Homepage hero section, featured work cards, layout structure
0:45-1:15 – Work page with filtering (Digital/Physical), project showcases
1:15-1:30 – About page copy, approach section
1:30-1:45 – Contact page with email, services list, pro bono callout
1:45-2:00 – Logo integration, favicon, footer with LinkedIn/GitHub, final deploy

<u>What I did manually:</u>

- Logo design (outside of this 2-hour window)
- Content writing (leveraged our conversation for copy)
- Color palette tweaks (brown/tan accent to match brand)
- Fixing a font loading error (one Typekit font was misconfigured, broke the initial deploy)

<u>What Claude Code generated:</u>

- Entire React component structure
- Tailwind styling
- Routing logic
- Responsive layout
- Project card components with tags
- Contact section with proper hierarchy

I reviewed everything it generated, made small tweaks, and shipped. The code is clean, the site is fast, and it actually represents what I do.

<u>The <b>"I Don't Know How to Code"</b> Thing:</u>
<p>I need to address this because it's probably confusing: I built a React + TypeScript site but claim I don't know how to code.</p>
<p><u>Here's what I mean:</u> I never sat down and memorized JavaScript syntax. I never took a CS course. I can't write a function from scratch without looking up the structure first.
But I understand code. I can read it, debug it, fix syntax errors, understand logic flow, and most importantly, I know what I want the code to do. I just use AI to translate my intent into actual syntax.</p>
<p>On October 1st (first day of my Cursor Pro billing cycle), I burned through 45 million tokens in about 12 hours building a field service management app. Two separate repos (React web app + Swift iOS app), both with Supabase backends, real-time sync working, about 40,000 lines of code generated. I was essentially running two AI agents simultaneously, having them scaffold entire features while I reviewed, tested, and iterated.
That's not "traditional" coding. But the result is the same: I'm shipping production-ready software that solves real problems for my high revenue window cleaning business. The leverage is insane. Pre-AI, I'd need to hire contractors for $50k-100k to build what I'm building myself in weekends. Now I just need to be good at systems thinking, problem decomposition, and knowing what to ask for.</p>

<u>What I'm Actually Building This For</u>

Studio Lepine isn't just a portfolio site for show. It's the foundation for what I'm actually doing:

<u>Digital work:</u>

- Field service management app (replacing Monday.com + Zapier + QuickBooks integration for my window cleaning business)
- Security research and bug bounty programs
- UI/UX design for client projects
- Web and mobile development

<u>Physical work:</u>

- Custom woodworking (furniture, built-ins)
- Systems engineering (designed my entire window cleaning water delivery system: tanks, pumps, plumbing, float switches)

  The motto isn't "I do random stuff." It's "I see problems and build solutions, whether that's in code or with my hands."
One of my favorite projects is a pro bono booking system I built for a Saskatchewan Health Authority palliative care unit. They got an accessible van for patients and needed a way to coordinate volunteer drivers and trips. I set up a custom simplybook.me integration tailored to their workflow. Didn't charge them because that unit gave my dad five extra years when he was supposed to die. Sometimes the work matters more than the invoice.

<p><u>What's Next:</u></p>
<u><b>The site is live.</b> V1 is done. But there's still work to do:</u>

<p><u>Immediate:</u></p>

- Fine-tune About page content (add more personal story, dad's influence, Saskatchewan roots)
- Add actual project case studies with screenshots and technical details
- Make the GitHub repo public with a proper README and MIT license

<u>Soon:</u>

- Blog section (monthly posts documenting builds, lessons learned, process)
- Photography from my woodworking projects
- Maybe a resources/tools page showing my setup

<u>Eventually:</u>

- Finish the FSM app and showcase it as a full case study
- Reskin the FSM platform for other trades and offer it as a licensed product
- Keep building, keep shipping, keep documenting

<p><b><u>The Bigger Point:</u></b></p>
<p>I'm not writing this to flex. I'm writing it because the barrier to building professional online presence just collapsed.
You don't need to be a developer. You don't need to hire an agency for $10k. You don't need to use a shitty drag-and-drop website builder that locks you into $15/month forever.</p>

<u>You need:</u>

- A clear idea of what you want
- Access to AI tools (Claude, Cursor, whatever)
- Willingness to review, iterate, and ship

  The domain cost me $76 for five years. Cloudflare Pages hosting is free. The only ongoing cost is my Claude subscription, which I'm already using for everything else.
<p>If you're on the fence about building something (whether that's a portfolio site, a side project, or a full-on product), just start. Use AI to handle the stuff you don't know, learn as you go, and ship something that's yours.</p>
<p><b>I went from "I want lepine.com but it's owned by a corporation forever" to "I own lepine.biz and have a live professional site" in one night.</b></p>


<b>You can too.</b>
    `.trim(),
    tags: ['First Post', 'Getting Started'],
    readTime: '8 min read',
  },
];
