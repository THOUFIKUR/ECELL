# ESEL Pitch Palooza 2026 Website

Premium multi-page event website for the women entrepreneur startup competition.

## Quick Start – Run the Website

### 1. Open Terminal and navigate to the project

```bash
cd "D:\cur website\esel-website"
```

### 2. Install dependencies (if not already done)

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Open in browser

Open: **http://localhost:3000**

---

## Adding Team Member Photos & Social Links

### Step 1: Add team photos

1. Place team photos in: `public/images/team/`
2. Use filenames like: `aishwarya.jpg`, `riya.jpg`, `divya.jpg`, etc.

### Step 2: Update team data

Edit `data/team.ts` and update each member:

```typescript
{
  id: "1",
  name: "Aishwarya Krishnan",
  role: "President & Co-Founder",
  dept: "Leadership",
  bio: "Your bio here...",
  linkedin: "https://www.linkedin.com/in/your-profile",
  instagram: "https://www.instagram.com/your_handle",
  avatar: "/images/team/aishwarya.jpg",  // Local path
}
```

**For avatar:**
- Local: `"/images/team/filename.jpg"`
- External: `"https://example.com/photo.jpg"` (domain must be in `next.config.ts`)

---

## Features

- **Hero video background** – Uses `hero-video.mp4` from `public/`
- **Smooth scroll** – Lenis integration
- **Page loader** – Initial load animation
- **Scroll indicator** – Bouncing dot at bottom of hero
- **Responsive** – Works on mobile, tablet, desktop

---

## Build for Production

```bash
npm run build
npm start
```

---

## File Structure for Team Images

```
public/
  images/
    team/
      aishwarya.jpg
      riya.jpg
      divya.jpg
      sneha.jpg
      priya.jpg
      lakshmi.jpg
  hero-video.mp4
```
