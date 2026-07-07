# Off-Site SEO Submission Pack — rishabhsingh.me

Drafted 2026-07-07. Everything below is ready to paste. Nothing has been posted anywhere; all submissions are manual and yours to make.

**Why this pack exists:** the GEO analysis found zero Wikidata / Reddit / YouTube presence. ChatGPT cites Wikipedia-family sources ~47.9% of the time; Perplexity cites Reddit ~46.7%. These six items target exactly those gaps.

**Key URLs used throughout:**

| Asset | URL |
|---|---|
| Site | https://rishabhsingh.me |
| CI-vs-PI simulator post | https://rishabhsingh.me/blog/ci-vs-pi-regression-bands/ |
| Portfolio build guide | https://rishabhsingh.me/blog/how-i-built-my-data-science-portfolio/ |
| GitHub | https://github.com/rishabh11336 |
| Kaggle | https://kaggle.com/rishabh11336 |
| LinkedIn | https://linkedin.com/in/rishabh-data-scientist |

---

## 1. Wikidata Entry Plan

### 1a. Honest reality check — read this first

Wikidata's notability policy (WD:N) requires an item to meet at least one of three criteria: (1) a sitelink to a Wikimedia project, (2) a clearly identifiable entity described by **serious, publicly available references** — self-published sites, GitHub profiles, LinkedIn, and portfolio pages explicitly do **not** count — or (3) a structural need (the item is required to make statements on other notable items).

A "Rishabh Singh (data scientist)" item currently meets **none** of these:

- No Wikipedia article, no sitelinks.
- All available references (rishabhsingh.me, GitHub, Kaggle, Medium) are self-published. Merged PRs to CPython/conda-build/librosa are verifiable facts but are primary sources, not independent coverage.
- No other Wikidata item needs to reference you (no notable employer item, no award item, no publication item citing you as author).

**Expected outcome if created today:** the item survives days-to-weeks, then gets flagged and deleted under the living-person deletion practice (items on non-notable living people are deleted more aggressively than other classes). Creating and losing an item is worse than not creating one — deleted-item history can make a later, legitimate creation harder.

**When it becomes defensible:** after any ONE of — independent press/interview coverage, a published paper with a DOI (that creates structural need via P50 author statements), a conference talk in indexed proceedings, or a Wikipedia draft that survives AfC. The single fastest legitimate path for a data scientist: **publish anything with a DOI, get an ORCID iD, and let the item be created to serve the author-statement structural need.**

### 1b. The item plan (hold until a criterion above is met)

Item: **Rishabh Singh** — Label (en): `Rishabh Singh` — Description (en): `Indian data scientist` (Wikidata descriptions are lowercase, no trailing period, disambiguating not promotional).

| Property | ID | Value | Notes |
|---|---|---|---|
| instance of | P31 | Q5 (human) | Required first statement |
| sex or gender | P21 | Q6581097 (male) | Optional |
| country of citizenship | P27 | Q668 (India) | |
| occupation | P106 | Q29169143 (data scientist) | Verify QID before use — search "data scientist" at wikidata.org |
| employer | P108 | Chryselys | **No Chryselys item exists.** Do NOT create one just for this — a non-notable company item compounds the deletion risk. Omit P108 until Chryselys has independent coverage. |
| educated at | P69 | Q1356820 | Believed to be Indian Institute of Technology Madras — **verify before submitting** (live check was not possible when drafting; open https://www.wikidata.org/wiki/Q1356820 and confirm the label). Format with qualifiers: `P512 (academic degree) → Q1765120 (Bachelor of Science)`, `P812 (academic major) → Q2374463 (data science)`, `P580 (start time) → 2021`, `P582 (end time) → 2025`. Verify every qualifier QID the same way. |
| official website | P856 | `https://rishabhsingh.me` | Full URL with https:// |
| GitHub username | P2037 | `rishabh11336` | Username only, no URL |

Every statement on a living person needs a reference. `P854 (reference URL) → https://rishabhsingh.me` is accepted mechanically but is self-published — which is precisely why the item fails notability today.

### 1c. The realistic alternative — do this now instead

Entity consolidation via `sameAs` in the site's Person JSON-LD achieves most of what a Wikidata item would (AI engines resolve entities across linked profiles):

```json
"sameAs": [
  "https://github.com/rishabh11336",
  "https://www.kaggle.com/rishabh11336",
  "https://www.linkedin.com/in/rishabh-data-scientist",
  "https://medium.com/@rishabh11336",
  "https://orcid.org/XXXX-XXXX-XXXX-XXXX"
]
```

Concrete steps (no notability floor on any of these):
1. **Register an ORCID iD** (orcid.org — free, open to anyone, 5 minutes). Fill employment (Chryselys), education (IIT Madras BS Data Science 2021–2025), and websites. ORCID is a machine-readable identity registry that knowledge graphs and AI systems cross-reference; it is the closest non-notable-person equivalent to a Wikidata item.
2. Add the ORCID URL to `sameAs` and to the site footer.
3. Make every profile in the `sameAs` array link **back** to rishabhsingh.me (bidirectional links are what entity-resolution actually checks). Verify the Medium handle before adding it.
4. Revisit Wikidata only after an independent-coverage trigger from 1a fires.

---

## 2. Kaggle Discussion Post

For an existing "share your portfolio" / "portfolio examples" thread on Kaggle Discussions (Getting Started or Learn forum). Post from kaggle.com/rishabh11336. Do not start a new thread solely for this; reply where portfolios are already the topic.

**Suggested reply title (if the thread format needs one):** Portfolio with an interactive CI-vs-PI regression simulator

**Body (137 words):**

> The piece of my portfolio that gets the most feedback isn't a project card — it's an interactive simulator inside a blog post that lets you drag sample size and noise to watch confidence intervals and prediction intervals diverge in real time: https://rishabhsingh.me/blog/ci-vs-pi-regression-bands/
>
> My takeaway for anyone building a portfolio: one interactive demo teaches reviewers more about your understanding than ten static Jupyter screenshots, because you can't fake the edge cases — the widget has to behave correctly when n is tiny or noise is huge.
>
> The rest of the site is Next.js on GitHub Pages (free hosting, static export). I wrote up the full build process here if useful: https://rishabhsingh.me/blog/how-i-built-my-data-science-portfolio/
>
> Happy to answer questions about either — and genuinely curious what interactive elements others have tried.

---

## 3. datascienceportfol.io Profile Copy

### Bio (79 words)

> Data Scientist at Chryselys, working on forecasting pipelines, hierarchical mixed-effects models, and Marketing Mix Modeling for pharma analytics. IIT Madras B.S. in Data Science and Applications (2021–2025), with a Minor in Economics & Finance. Open-source contributor with merged pull requests to CPython (#134804), conda-build (#4782), and librosa (#1850). I write explainers at rishabhsingh.me — including an interactive simulator that teaches the difference between confidence and prediction intervals. Stack: Python, SQL, statsmodels, scikit-learn, Flask, Azure.

### Project blurb 1 — LLM YouTube Metadata Pipeline (41 words)

> End-to-end LLM pipeline connecting Claude to the YouTube Data API v3 via OAuth 2.0, automating SEO-optimised titles, descriptions, and keyword tags for 500+ videos. Prompt engineering with deterministic validation and human-in-the-loop review — LLM output never ships unchecked.

### Project blurb 2 — Mixed-Effects Marketing Mix Modeling (39 words)

> Hierarchical mixed-effects regression (LME, statsmodels) quantifying marketing campaign elasticity. Decomposes global versus channel-level effects so budget allocation decisions rest on statistically separated signals rather than pooled averages — Marketing Mix Modeling built for defensible ROI optimisation.

### Project blurb 3 — Parking Management System (40 words)

> Full-stack web app: Flask REST API, Vue.js frontend, Redis + Celery for async task queuing, deployed on Azure App Service with CI/CD. Real-time slot booking, role-based access control, and an operational analytics dashboard — a complete production system, not a notebook.

Link each project card to its GitHub repo and set the profile website field to `https://rishabhsingh.me`.

---

## 4. GitHub Repo Optimization

Apply to the portfolio-site repo under github.com/rishabh11336 (the one deploying to rishabhsingh.me — confirm the exact repo name; likely `rishabh11336.github.io` or similar).

### Repo description (About field, 158 chars)

> Data science portfolio with 24 blog posts and an interactive CI-vs-PI regression simulator. Next.js static export on GitHub Pages. Live at rishabhsingh.me

Set the **Website** field in the About box to `https://rishabhsingh.me`.

### Topic tags

```
data-science-portfolio
portfolio-website
nextjs
react
github-pages
static-site
data-science
machine-learning
data-visualization
interactive-visualization
blog
typescript
```

(GitHub allows up to 20 topics; 12 keeps it focused. Drop `typescript` if the project is plain JS.)

### README addition (3 lines, place directly under the title)

```markdown
**Live site:** [rishabhsingh.me](https://rishabhsingh.me) — data science portfolio, 24 blog posts, and an [interactive CI-vs-PI regression simulator](https://rishabhsingh.me/blog/ci-vs-pi-regression-bands/).

Built with Next.js (static export) and deployed free on GitHub Pages. Full write-up: [How I Built My Data Science Portfolio with Next.js and GitHub Pages](https://rishabhsingh.me/blog/how-i-built-my-data-science-portfolio/).
```

---

## 5. Reddit Engagement Guide

### Ground rules before anything else

- **Sitewide norm:** keep self-linking under ~10% of your total activity (the old 9:1 guideline still shapes moderator judgment). Build comment karma answering questions with **no** links first; an account whose only links are its own domain gets shadow-filtered by AutoModerator on most large subs.
- **r/MachineLearning:** self-promotion is restricted — project/blog links generally belong in the designated self-promotion threads only, and posts need the right flair. Read the sidebar rules **on the day you post**; they change.
- **r/learnpython:** advertising and blogspam are removal offenses. A link is only acceptable inside a comment that already fully answers the question — the answer must stand alone if the link is stripped.
- **r/datascience / r/statistics:** both filter new-account link posts aggressively; r/datascience routes career/portfolio talk to weekly threads. Never post your portfolio as a top-level post.
- **Universal test:** would the comment still be upvoted with the link deleted? If not, don't post it.

### Three realistic question types worth answering

1. **CI vs PI confusion (r/statistics, r/AskStatistics, r/learnmachinelearning):** "Why is my prediction interval so much wider than my confidence interval?" / "seaborn regplot shows a band — is that where new points will fall?" → answer fully, link the simulator as an optional visual aid. This is the strongest fit: the post *is* the answer to this exact confusion.
2. **"How do I make my data science portfolio stand out?" (r/learnpython weekly threads, r/datascience career threads, r/learnmachinelearning):** give 3–4 concrete tips from experience (interactive > static, deploy something live, write the README for a recruiter), then link the build guide as "how I did mine."
3. **"Free hosting for a portfolio/blog?" or Next.js-on-GitHub-Pages problems (r/learnpython, r/webdev, r/nextjs):** answer the actual technical question (static export config, basePath, custom domain DNS), link the guide post only if it covers the exact snag.

### Drafted example answer — CI-vs-PI confusion

For a question like *"My model's confidence interval is narrow but the prediction interval is huge — is something wrong?"*:

> Nothing is wrong — they answer two different questions.
>
> The **confidence interval** is about the *line*: "where is the true mean of y at this x?" Collect more data and it shrinks toward zero width, because your estimate of the average gets better and better.
>
> The **prediction interval** is about the *next individual point*: "where will a single new observation land?" It has to contain the CI's uncertainty **plus** the irreducible noise σ of individual observations. That σ term never goes away no matter how much data you collect — so the PI stays wide even when the CI is razor thin. Roughly: PI width ≈ sqrt(CI-width² + noise²).
>
> Quick sanity check: crank up your sample size. If the narrow band shrinks and the wide one plateaus, everything is behaving exactly as it should.
>
> If a visual helps, I built an interactive demo where you can drag n and σ and watch the two bands respond differently: https://rishabhsingh.me/blog/ci-vs-pi-regression-bands/ (my own post, for transparency).

Note the pattern: complete answer first, link last, self-disclosure included. Disclosing "my own post" is required by several subs' rules and reads as honest everywhere else.

---

## 6. YouTube Video Outline

YouTube presence is the strongest single correlate of AI citations in the Ahrefs 75k-brand study (~0.737) — one decent walkthrough beats zero videos by a wide margin. Screen recording + voiceover is enough; no face cam needed.

### Title

**Confidence Interval vs Prediction Interval — Watch Them Diverge (Interactive Demo)**

(Alternate: *CI vs PI in Regression: The 5-Minute Visual Explanation*)

### Six beats (~5:00 total)

1. **(0:00–0:30) The hook — one question.** "Your regression plot has a shaded band. Does it tell you where the *line* is, or where the *next data point* will land? Most people get this wrong, and the two answers can differ by a factor of ten." Show the simulator with both bands visible.
2. **(0:30–1:15) Define CI on screen.** Toggle the PI band off. CI = uncertainty about the mean response. Drag sample size up; the band visibly collapses. "More data → better estimate of the average → CI shrinks toward zero."
3. **(1:15–2:00) Define PI on screen.** Toggle PI back on. PI = where a single new observation falls. Point at the gap between bands: "that gap is the irreducible noise of individual points."
4. **(2:00–3:00) The money demo — divergence.** Crank n high: CI vanishes, PI plateaus. Then crank noise σ: both widen, but PI far more. "This is the whole lesson in one interaction — data kills estimation uncertainty, but nothing kills noise."
5. **(3:15–4:15) A real mistake this prevents.** Concrete scenario: forecasting demand and promising a client "we're 95% confident sales will be in this narrow range" while pointing at the CI. The individual month lands outside it, repeatedly. Correct interval to quote: the PI.
6. **(4:15–5:00) Recap + CTA.** One-line rule: "CI is about the line, PI is about the points." Invite viewers to break the simulator themselves — link in description. No subscribe-begging; one calm mention.

### Description

> A confidence interval and a prediction interval look like the same shaded band on a regression plot — but they answer completely different questions, and confusing them leads to real forecasting mistakes.
>
> In this 5-minute walkthrough I use an interactive simulator to show exactly how the two intervals respond to sample size and noise — including the one behaviour that makes the difference click: the CI shrinks to zero with more data, the PI never does.
>
> Try the interactive simulator yourself (free, in the browser, no signup):
> https://rishabhsingh.me/blog/ci-vs-pi-regression-bands/
>
> Written version of this explanation with the maths:
> https://rishabhsingh.me/blog/ci-vs-pi-regression-bands/
>
> More explainers: https://rishabhsingh.me/blog/
>
> I'm Rishabh Singh, a data scientist at Chryselys (IIT Madras, B.S. Data Science). Site: https://rishabhsingh.me
>
> Chapters:
> 0:00 The question everyone gets wrong
> 0:30 What a confidence interval actually is
> 1:15 What a prediction interval actually is
> 2:00 Watch them diverge
> 3:15 The forecasting mistake this prevents
> 4:15 The one-line rule
>
> #statistics #datascience #regression #machinelearning

---

## Suggested submission order

1. ORCID registration + `sameAs` update (§1c) — foundation, 30 minutes.
2. GitHub repo optimization (§4) — 10 minutes, zero risk.
3. datascienceportfol.io profile (§3) — 20 minutes.
4. Kaggle discussion reply (§2) — when a suitable thread exists.
5. Reddit — start with link-free answers for 2–3 weeks, then apply §5.
6. YouTube video (§6) — highest effort, highest AI-citation payoff.
7. Wikidata (§1b) — **hold** until an independent-coverage trigger fires.
