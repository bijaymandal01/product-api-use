# 🛍️ Product Catalog App — API Integration Project

> **Built by Bijay Mandal** | Aspiring Product Manager  
> *A hands-on project to understand real API complexity, developer workflows, and tester challenges — enabling better product planning and cross-functional communication.*

---

## 📌 Project Overview

This is a dynamic product catalog web application that fetches real product data from the [DummyJSON API](https://dummyjson.com/). Users can browse all products and filter them by category — all rendered live from an external REST API.

**Tech Stack:** HTML · CSS · Vanilla JavaScript · REST API (DummyJSON)

---

## 🚀 Features

- Fetches and displays all products dynamically from a public REST API
- Category sidebar populated from live API data
- Click-to-filter products by category
- Responsive layout for mobile and desktop
- Smooth hover animations and clean card-based UI

---

## 🎯 Why I Built This — A PM's Perspective

I'm **Bijay Mandal**, an aspiring Product Manager. I built this project not just to create a working app, but to **deeply understand what developers and testers actually deal with when working with APIs** — so I can:

- Create **realistic timelines** that account for real technical complexity
- Have **informed conversations** with engineers without needing them to over-explain
- Write **better acceptance criteria** in user stories that reflect edge cases
- Be a more **trustworthy bridge** between business goals and technical execution

---

## 🔍 What I Learned About API Complexity (The Real Stuff PMs Miss)

This is the core learning section. Here's what I discovered by building this myself:

### 1. 🌐 Network Latency is Unpredictable
The app makes **multiple API calls** (one for all products, one for categories, one per category click). In development with a fast connection, this feels instant. But in production, each call adds real wait time — especially on mobile networks. As a PM, this means:
- **Never promise "instant load"** in specs without confirming caching strategy with devs
- Features like search-as-you-type that trigger an API call per keystroke can hammer a server
- Always ask: *"Is there a loading state? What happens if the call takes 5 seconds?"*

### 2. ⚠️ Error Handling is an Entire Feature
In this project, if `fetch()` fails (bad internet, API down, rate-limited), the UI just breaks silently. A developer has to decide:
- Do we show an error message? A retry button? A cached version?
- Do we log the error? Alert the team?

As a PM, **"handle errors gracefully" in a spec is too vague.** You need to define: *what does the user see when X fails?* This is a real story card, not a footnote.

### 3. 🔄 Async Code is Not Just "It Runs in the Background"
Every API call in this project uses `async/await`. This means:
- The UI can render before data arrives
- You need to handle the "in-between" state (loading spinner, skeleton screens)
- Order of operations matters — in this app, categories load separately from products; if one fails, the other is unaffected

**PM Takeaway:** A feature that "just needs an API call" can take 3–5x longer to build properly when you account for loading states, error states, empty states, and retry logic.

### 4. 🧪 What Testers Actually Have to Verify
Testing this app isn't just "does it show products." Testers must verify:

| Test Scenario | What Could Go Wrong |
|---|---|
| Normal load | Products render with correct data |
| Slow network (throttle to 3G) | Loading state shows; no broken layout |
| API returns empty array | "No products found" message appears |
| API is down (mock 500 error) | App doesn't crash; user sees error message |
| Category filter applied | Only correct category's products show |
| Rapid category clicks | No race condition (last click wins) |
| Mobile viewport | Sidebar collapses, layout stays usable |

This is why **QA cycles for API-connected features are longer** than static UI work. Testers need mocked API responses, network condition tools, and edge-case data.

### 5. 📊 API Response Shape Affects Everything
The DummyJSON API returns this structure:
```json
{
  "products": [ { "id": 1, "title": "...", "price": 99, "thumbnail": "..." } ],
  "total": 194,
  "skip": 0,
  "limit": 30
}
```
If this shape changes (e.g., `thumbnail` becomes `image`), the entire card display breaks. Developers must:
- Write defensive code (`element.thumbnail || element.image || ""`)
- Monitor for API version changes
- Set up contract tests

**PM Takeaway:** When planning third-party API integrations, always ask: *"What's our plan if their API changes? Do we have a versioning agreement?"* This affects risk and timeline.

### 6. ⏱️ Real Timeline Factors PMs Must Include

When estimating API-related features, these tasks are often invisible to PMs but very real to developers:

| Task | Often Forgotten By PMs |
|---|---|
| API research & documentation review | ✅ Easily missed |
| Auth/token setup (API keys, OAuth) | ✅ Easily missed |
| Building loading & error states | ✅ Easily missed |
| Writing tests with mocked API responses | ✅ Easily missed |
| Handling pagination (this API caps at 30 items) | ✅ Easily missed |
| Performance optimization (debounce, caching) | ✅ Easily missed |
| Code review & integration testing | ✅ Easily missed |

---

## 📁 Project Structure

```
├── index.html      # Layout: sidebar + product grid
├── style.css       # Responsive styling, card design
└── script.js       # API calls, DOM rendering, category filtering
```

---

## ▶️ How to Run

1. Clone or download the repository
2. Open `index.html` in any browser
3. No build tools or dependencies needed — it's pure HTML/CSS/JS

> ⚠️ Requires an internet connection to fetch data from the DummyJSON API

---

## 🔗 API Reference

This project uses the free [DummyJSON](https://dummyjson.com/) API:

| Endpoint | Purpose |
|---|---|
| `GET /products` | Fetch all products |
| `GET /products/category-list` | Fetch all category names |
| `GET /products/category/{name}` | Fetch products by category |

---

## 💡 Key PM Takeaways (TL;DR)

1. **"Add an API call" is never a 2-hour task** — account for error states, loading states, and edge cases
2. **Testers need time to test failure scenarios**, not just happy paths
3. **API shape changes break UIs** — ask about versioning and monitoring before committing to timelines
4. **Async complexity is invisible in specs** — get devs to walk through the state diagram before estimating
5. **Third-party APIs add dependency risk** — always have a contingency plan

---

## 👤 About Me

**Bijay Mandal** | Aspiring Product Manager

I believe the best PMs are the ones who earn engineers' trust by understanding *how* things are built — not just *what* to build. Projects like this help me speak the language of my future dev teams and write specs that are actually implementable.

📬 Connect with me on [LinkedIn](https://www.linkedin.com/in/bijaymandal-work/)

---

*Built with curiosity, not just code.* 🚀
