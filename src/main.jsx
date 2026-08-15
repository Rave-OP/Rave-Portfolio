import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Copy,
  Instagram,
  Mail,
  Menu,
  X,
  Youtube,
  ExternalLink,
} from "lucide-react";

import "./styles.css";

/* =====================================================
   SOCIALS
===================================================== */

const SOCIALS = {
  // =========================
  // WORK
  // =========================
  workDiscord: "https://discord.gg/BtSyPXQdeX",
  workDiscordUsername: "rave.gfx",

  workInstagram: "https://instagram.com/rave.gfx_",
  email: "mailto:collabxrave@gmail.com",


  // =========================
  // PERSONAL / CONTENT
  // =========================
  discord: "https://discord.com/invite/APBQDEk7h3",
  discordUsername: "raveop8",

  instagram: "https://www.instagram.com/raveop_/",

  youtube: "https://www.youtube.com/@RaveOP8",
  youtubePlays: "https://www.youtube.com/@RavePlaysXD",
  youtubeVerse: "https://www.youtube.com/@RaveVerseOP",
  youtubeCS: "https://www.youtube.com/@RaveCS8",
  youtubePersonal: "https://www.youtube.com/@suhasraut24",

  twitch: "https://www.twitch.tv/ravexd_",
};


/* =====================================================
   PORTFOLIO
   ADD YOUR THUMBNAILS HERE
===================================================== */
const WORK = [

  // ============================================================
  // ======================== CLIENT WORK =======================
  // ============================================================

  // Client Work 1–6
  { id: 1, title: "Gaming Highlights", category: "Client Work", image: "/thumbnails/01.jpg" },
  { id: 2, title: "Insane Moment", category: "Client Work", image: "/thumbnails/02.jpg" },
  { id: 3, title: "Best Gameplay", category: "Client Work", image: "/thumbnails/03.jpg" },
  { id: 4, title: "Epic Match", category: "Client Work", image: "/thumbnails/04.jpg" },
  { id: 5, title: "Crazy Win", category: "Client Work", image: "/thumbnails/05.jpg" },
  { id: 6, title: "Final Round", category: "Client Work", image: "/thumbnails/06.jpg" },

  // Client Work 43–48
  { id: 43, title: "Epic Clutch", category: "Client Work", image: "/thumbnails/43.jpg" },
  { id: 44, title: "Insane Play", category: "Client Work", image: "/thumbnails/44.jpg" },
  { id: 45, title: "Unbelievable Moment", category: "Client Work", image: "/thumbnails/45.jpg" },
  { id: 46, title: "Gaming Beast", category: "Client Work", image: "/thumbnails/46.jpg" },
  { id: 47, title: "Ultimate Win", category: "Client Work", image: "/thumbnails/47.jpg" },
  { id: 48, title: "Crazy Gameplay", category: "Client Work", image: "/thumbnails/48.jpg" },

  // Client Work 67–72
  { id: 67, title: "Last Second Win", category: "Client Work", image: "/thumbnails/67.jpg" },
  { id: 68, title: "Impossible Clutch", category: "Client Work", image: "/thumbnails/68.jpg" },
  { id: 69, title: "Insane Reaction", category: "Client Work", image: "/thumbnails/69.jpg" },
  { id: 70, title: "Pro Gameplay", category: "Client Work", image: "/thumbnails/70.jpg" },
  { id: 71, title: "Crazy Comeback", category: "Client Work", image: "/thumbnails/71.jpg" },
  { id: 72, title: "Best Moments", category: "Client Work", image: "/thumbnails/72.jpg" },

  // Client Work 91–96
  { id: 91, title: "Epic Victory", category: "Client Work", image: "/thumbnails/91.jpg" },
  { id: 92, title: "Insane Finish", category: "Client Work", image: "/thumbnails/92.jpg" },
  { id: 93, title: "Gaming Madness", category: "Client Work", image: "/thumbnails/93.jpg" },
  { id: 94, title: "Crazy Challenge", category: "Client Work", image: "/thumbnails/94.jpg" },
  { id: 95, title: "Unexpected Win", category: "Client Work", image: "/thumbnails/95.jpg" },
  { id: 96, title: "Perfect Game", category: "Client Work", image: "/thumbnails/96.jpg" },

  // Client Work 115–120
  { id: 115, title: "Legendary Moment", category: "Client Work", image: "/thumbnails/115.jpg" },
  { id: 116, title: "Gaming God", category: "Client Work", image: "/thumbnails/116.jpg" },
  { id: 117, title: "Insane Skills", category: "Client Work", image: "/thumbnails/117.jpg" },
  { id: 118, title: "Epic Highlights", category: "Client Work", image: "/thumbnails/118.jpg" },
  { id: 119, title: "Crazy Round", category: "Client Work", image: "/thumbnails/119.jpg" },
  { id: 120, title: "Ultimate Play", category: "Client Work", image: "/thumbnails/120.jpg" },

  // Client Work 139–144
  { id: 139, title: "Best Clutch", category: "Client Work", image: "/thumbnails/139.jpg" },
  { id: 140, title: "Insane Victory", category: "Client Work", image: "/thumbnails/140.jpg" },
  { id: 141, title: "Gaming Legend", category: "Client Work", image: "/thumbnails/141.jpg" },
  { id: 142, title: "Epic Gameplay", category: "Client Work", image: "/thumbnails/142.jpg" },
  { id: 143, title: "Crazy Highlights", category: "Client Work", image: "/thumbnails/143.jpg" },
  { id: 144, title: "Ultimate Gaming", category: "Client Work", image: "/thumbnails/144.jpg" },


  // ============================================================
  // =========================== CS2 ============================
  // ============================================================

  // CS2 7–12
  { id: 7, title: "CS2 Competitive", category: "CS2", image: "/thumbnails/07.jpg" },
  { id: 8, title: "CS2 Clutch", category: "CS2", image: "/thumbnails/08.jpg" },
  { id: 9, title: "AWP Highlights", category: "CS2", image: "/thumbnails/09.jpg" },
  { id: 10, title: "Faceit Grind", category: "CS2", image: "/thumbnails/10.jpg" },
  { id: 11, title: "Global Elite", category: "CS2", image: "/thumbnails/11.jpg" },
  { id: 12, title: "Insane Ace", category: "CS2", image: "/thumbnails/12.jpg" },

  // CS2 31–36
  { id: 31, title: "1v5 Clutch", category: "CS2", image: "/thumbnails/31.jpg" },
  { id: 32, title: "Faceit Level 10", category: "CS2", image: "/thumbnails/32.jpg" },
  { id: 33, title: "AWP Ace", category: "CS2", image: "/thumbnails/33.jpg" },
  { id: 34, title: "One Tap King", category: "CS2", image: "/thumbnails/34.jpg" },
  { id: 35, title: "Ranked Grind", category: "CS2", image: "/thumbnails/35.jpg" },
  { id: 36, title: "Insane Flick", category: "CS2", image: "/thumbnails/36.jpg" },

  // CS2 55–60
  { id: 55, title: "Deagle Only", category: "CS2", image: "/thumbnails/55.jpg" },
  { id: 56, title: "AWP Master", category: "CS2", image: "/thumbnails/56.jpg" },
  { id: 57, title: "Clutch King", category: "CS2", image: "/thumbnails/57.jpg" },
  { id: 58, title: "Inferno Madness", category: "CS2", image: "/thumbnails/58.jpg" },
  { id: 59, title: "Mirage Ranked", category: "CS2", image: "/thumbnails/59.jpg" },
  { id: 60, title: "Dust 2 Domination", category: "CS2", image: "/thumbnails/60.jpg" },

  // CS2 79–84
  { id: 79, title: "Nuke Highlights", category: "CS2", image: "/thumbnails/79.jpg" },
  { id: 80, title: "Ancient Clutch", category: "CS2", image: "/thumbnails/80.jpg" },
  { id: 81, title: "Premier Grind", category: "CS2", image: "/thumbnails/81.jpg" },
  { id: 82, title: "10K Elo", category: "CS2", image: "/thumbnails/82.jpg" },
  { id: 83, title: "20K Elo", category: "CS2", image: "/thumbnails/83.jpg" },
  { id: 84, title: "Top Fragging", category: "CS2", image: "/thumbnails/84.jpg" },

  // CS2 103–108
  { id: 103, title: "Insane Spray", category: "CS2", image: "/thumbnails/103.jpg" },
  { id: 104, title: "Perfect Retake", category: "CS2", image: "/thumbnails/104.jpg" },
  { id: 105, title: "Bomb Clutch", category: "CS2", image: "/thumbnails/105.jpg" },
  { id: 106, title: "T Side Carry", category: "CS2", image: "/thumbnails/106.jpg" },
  { id: 107, title: "CT Side Beast", category: "CS2", image: "/thumbnails/107.jpg" },
  { id: 108, title: "Insane Entry", category: "CS2", image: "/thumbnails/108.jpg" },

  // CS2 127–132
  { id: 127, title: "Last Round", category: "CS2", image: "/thumbnails/127.jpg" },
  { id: 128, title: "Crazy Comeback", category: "CS2", image: "/thumbnails/128.jpg" },
  { id: 129, title: "Pro Level Aim", category: "CS2", image: "/thumbnails/129.jpg" },
  { id: 130, title: "CS2 Highlights", category: "CS2", image: "/thumbnails/130.jpg" },
  { id: 131, title: "Ranked Demon", category: "CS2", image: "/thumbnails/131.jpg" },
  { id: 132, title: "Ultimate Clutch", category: "CS2", image: "/thumbnails/132.jpg" },


  // ============================================================
  // ======================== MINECRAFT =========================
  // ============================================================

  // Minecraft 13–18
  { id: 13, title: "Minecraft Challenge", category: "Minecraft", image: "/thumbnails/13.jpg" },
  { id: 14, title: "Minecraft Survival", category: "Minecraft", image: "/thumbnails/14.jpg" },
  { id: 15, title: "Minecraft Build", category: "Minecraft", image: "/thumbnails/15.jpg" },
  { id: 16, title: "Hardcore Minecraft", category: "Minecraft", image: "/thumbnails/16.jpg" },
  { id: 17, title: "100 Days", category: "Minecraft", image: "/thumbnails/17.jpg" },
  { id: 18, title: "Minecraft World", category: "Minecraft", image: "/thumbnails/18.jpg" },

  // Minecraft 37–42
  { id: 37, title: "Survival Challenge", category: "Minecraft", image: "/thumbnails/37.jpg" },
  { id: 38, title: "Building Empire", category: "Minecraft", image: "/thumbnails/38.jpg" },
  { id: 39, title: "Hardcore Challenge", category: "Minecraft", image: "/thumbnails/39.jpg" },
  { id: 40, title: "Secret Base", category: "Minecraft", image: "/thumbnails/40.jpg" },
  { id: 41, title: "Minecraft But...", category: "Minecraft", image: "/thumbnails/41.jpg" },
  { id: 42, title: "Nether Adventure", category: "Minecraft", image: "/thumbnails/42.jpg" },

  // Minecraft 61–66
  { id: 61, title: "End Dimension", category: "Minecraft", image: "/thumbnails/61.jpg" },
  { id: 62, title: "Dragon Fight", category: "Minecraft", image: "/thumbnails/62.jpg" },
  { id: 63, title: "Lucky Block", category: "Minecraft", image: "/thumbnails/63.jpg" },
  { id: 64, title: "Minecraft Mods", category: "Minecraft", image: "/thumbnails/64.jpg" },
  { id: 65, title: "Impossible Challenge", category: "Minecraft", image: "/thumbnails/65.jpg" },
  { id: 66, title: "Mega Base", category: "Minecraft", image: "/thumbnails/66.jpg" },

  // Minecraft 85–90
  { id: 85, title: "1000 Days", category: "Minecraft", image: "/thumbnails/85.jpg" },
  { id: 86, title: "Creeper Chaos", category: "Minecraft", image: "/thumbnails/86.jpg" },
  { id: 87, title: "Village Raid", category: "Minecraft", image: "/thumbnails/87.jpg" },
  { id: 88, title: "Ocean Survival", category: "Minecraft", image: "/thumbnails/88.jpg" },
  { id: 89, title: "One Block", category: "Minecraft", image: "/thumbnails/89.jpg" },
  { id: 90, title: "Skyblock", category: "Minecraft", image: "/thumbnails/90.jpg" },

  // Minecraft 109–114
  { id: 109, title: "Minecraft Speedrun", category: "Minecraft", image: "/thumbnails/109.jpg" },
  { id: 110, title: "Underground Base", category: "Minecraft", image: "/thumbnails/110.jpg" },
  { id: 111, title: "Richest Player", category: "Minecraft", image: "/thumbnails/111.jpg" },
  { id: 112, title: "Crazy Seed", category: "Minecraft", image: "/thumbnails/112.jpg" },
  { id: 113, title: "Monster Challenge", category: "Minecraft", image: "/thumbnails/113.jpg" },
  { id: 114, title: "Minecraft Experiment", category: "Minecraft", image: "/thumbnails/114.jpg" },

  // Minecraft 133–138
  { id: 133, title: "Hidden Treasure", category: "Minecraft", image: "/thumbnails/133.jpg" },
  { id: 134, title: "Diamond Hunt", category: "Minecraft", image: "/thumbnails/134.jpg" },
  { id: 135, title: "Ultimate Survival", category: "Minecraft", image: "/thumbnails/135.jpg" },
  { id: 136, title: "Crazy Build", category: "Minecraft", image: "/thumbnails/136.jpg" },
  { id: 137, title: "Minecraft SMP", category: "Minecraft", image: "/thumbnails/137.jpg" },
  { id: 138, title: "Minecraft Highlights", category: "Minecraft", image: "/thumbnails/138.jpg" },


  
  // ============================================================
  // ======================== VALORANT ==========================
  // ============================================================

  // Valorant 19–24
  { id: 19, title: "Gaming Highlights", category: "Valorant", image: "/thumbnails/19.jpg" },
  { id: 20, title: "Insane Moment", category: "Valorant", image: "/thumbnails/20.jpg" },
  { id: 21, title: "Best Gameplay", category: "Valorant", image: "/thumbnails/21.jpg" },
  { id: 22, title: "Epic Match", category: "Valorant", image: "/thumbnails/22.jpg" },
  { id: 23, title: "Crazy Win", category: "Valorant", image: "/thumbnails/23.jpg" },
  { id: 24, title: "Final Round", category: "Valorant", image: "/thumbnails/24.jpg" },

  // Valorant 25–30
  { id: 25, title: "Ace Gameplay", category: "Valorant", image: "/thumbnails/25.jpg" },
  { id: 26, title: "Immortal Ranked", category: "Valorant", image: "/thumbnails/26.jpg" },
  { id: 27, title: "Reyna Ace", category: "Valorant", image: "/thumbnails/27.jpg" },
  { id: 28, title: "Solo Queue", category: "Valorant", image: "/thumbnails/28.jpg" },
  { id: 29, title: "Rank Up", category: "Valorant", image: "/thumbnails/29.jpg" },
  { id: 30, title: "Crazy Headshots", category: "Valorant", image: "/thumbnails/30.jpg" },

  // Valorant 49–54
  { id: 49, title: "Insane Spray", category: "Valorant", image: "/thumbnails/49.jpg" },
  { id: 50, title: "Match MVP", category: "Valorant", image: "/thumbnails/50.jpg" },
  { id: 51, title: "Clutch Round", category: "Valorant", image: "/thumbnails/51.jpg" },
  { id: 52, title: "Radiant Lobby", category: "Valorant", image: "/thumbnails/52.jpg" },
  { id: 53, title: "Duelist Diff", category: "Valorant", image: "/thumbnails/53.jpg" },
  { id: 54, title: "One Tap", category: "Valorant", image: "/thumbnails/54.jpg" },

  // Valorant 73–78
  { id: 73, title: "Ace Round", category: "Valorant", image: "/thumbnails/73.jpg" },
  { id: 74, title: "Last Man Standing", category: "Valorant", image: "/thumbnails/74.jpg" },
  { id: 75, title: "Ranked Demon", category: "Valorant", image: "/thumbnails/75.jpg" },
  { id: 76, title: "Reyna Unleashed", category: "Valorant", image: "/thumbnails/76.jpg" },
  { id: 77, title: "Perfect Round", category: "Valorant", image: "/thumbnails/77.jpg" },
  { id: 78, title: "Unstoppable", category: "Valorant", image: "/thumbnails/78.jpg" },

  // Valorant 97–102
  { id: 97, title: "Clutch Master", category: "Valorant", image: "/thumbnails/97.jpg" },
  { id: 98, title: "Ranked Madness", category: "Valorant", image: "/thumbnails/98.jpg" },
  { id: 99, title: "Vandal Only", category: "Valorant", image: "/thumbnails/99.jpg" },
  { id: 100, title: "Phantom Demon", category: "Valorant", image: "/thumbnails/100.jpg" },
  { id: 101, title: "Radiant Push", category: "Valorant", image: "/thumbnails/101.jpg" },
  { id: 102, title: "Insane Flicks", category: "Valorant", image: "/thumbnails/102.jpg" },

  // Valorant 121–126
  { id: 121, title: "Team Ace", category: "Valorant", image: "/thumbnails/121.jpg" },
  { id: 122, title: "Deathmatch Grind", category: "Valorant", image: "/thumbnails/122.jpg" },
  { id: 123, title: "Sheriff Only", category: "Valorant", image: "/thumbnails/123.jpg" },
  { id: 124, title: "Unreal Aim", category: "Valorant", image: "/thumbnails/124.jpg" },
  { id: 125, title: "Final Clutch", category: "Valorant", image: "/thumbnails/125.jpg" },
  { id: 126, title: "Ranked Highlights", category: "Valorant", image: "/thumbnails/126.jpg" },



];

/* =====================================================
   CATEGORIES
===================================================== */

const CATEGORIES = [
  "All",
  ...new Set(WORK.map((item) => item.category)),
];


/* =====================================================
   APP
===================================================== */

function App() {

  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const [theme, setTheme] = useState("dark");


  /* =====================================================
     FILTER WORK
  ===================================================== */

 const filtered = useMemo(() => {

  // =====================================================
  // ALL CATEGORY
  // Display 6 thumbnails from each category at a time
  // =====================================================

  if (category === "All") {

    const categories = [
      "Client Work",
      "Valorant",
      "CS2",
      "Minecraft",
      
    ];

    // Keep WORK grouped by category internally,
    // but arrange the display in 6-item blocks:
    //
    // Valorant 1-6
    // CS2 7-12
    // Minecraft 13-18
    // Gaming 19-24
    //
    // Valorant 25-30
    // CS2 31-36
    // Minecraft 37-42
    // Gaming 43-48
    // etc.

    const categoryItems = categories.map((cat) =>
      WORK.filter((item) => item.category === cat)
    );

    const result = [];

    // Each category has 36 items.
    // Take 6 from every category per cycle.
    for (let start = 0; start < 36; start += 6) {

      categories.forEach((cat, categoryIndex) => {

        const items = categoryItems[categoryIndex];

        result.push(
          ...items.slice(start, start + 6)
        );

      });

    }

    return result;
  }


  // =====================================================
  // INDIVIDUAL CATEGORY
  // Keep that category together
  // =====================================================

  return WORK.filter(
    (item) => item.category === category
  );

}, [category]);
  /* =====================================================
     FEATURED WORK
  ===================================================== */

  const featuredWork = useMemo(() => {

    const featured = WORK.filter(
      (item) => item.featured
    );

    return featured.length > 0 ? featured : WORK;

  }, []);


  /* =====================================================
     COPY DISCORD
  ===================================================== */

  const copyDiscord = async () => {

    try {

      await navigator.clipboard.writeText(
        SOCIALS.discordUsername
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);

    } catch {

      setCopied(false);

    }

  };


  useEffect(() => {

  const interval = setInterval(() => {

    setShowcaseIndex((prev) =>
      (prev + 3) % WORK.length
    );

  }, 2000);

  return () =>
    clearInterval(interval);

}, []);

  /* =====================================================
     CLOSE MOBILE MENU
  ===================================================== */

  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (

    <div className={`site-shell ${theme === "light" ? "light-theme" : ""}`}>

      {/* COSMIC BACKGROUND */}

      <div className="cosmic-orb orb-red" />
      <div className="cosmic-orb orb-blue" />
      <div className="cosmic-orb orb-purple" />

      <div className="noise" />


      {/* =================================================
          NAVBAR
      ================================================= */}

      <header className="navbar">

        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
        >
          <span>Rave</span>GFX<span>.</span>
        </a>


        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          {menuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>


        <nav
          className={
            menuOpen
              ? "nav-links open"
              : "nav-links"
          }
        >

          <a href="#work" onClick={closeMenu}>
            Work
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#socials" onClick={closeMenu}>
            Socials
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

        </nav>

        <button
  className="theme-toggle"
  onClick={() =>
    setTheme((prev) =>
      prev === "dark" ? "light" : "dark"
    )
  }
  aria-label="Toggle theme"
>
  <span className="theme-icon">
    {theme === "dark" ? "☀" : "☾"}
  </span>

  <span className="theme-label">
    {theme === "dark" ? "LIGHT" : "DARK"}
  </span>
</button>

        <a
          className="nav-cta"
          href={SOCIALS.workDiscord}
          target="_blank"
          rel="noreferrer"
        >
          Hire me
          <ArrowUpRight size={16} />
        </a>

      </header>


      {/* =================================================
          MAIN
      ================================================= */}

      <main id="home">


        {/* =================================================
            HERO
        ================================================= */}

        <section className="hero section">

          <div className="hero-copy">

            <div className="eyebrow">
              <span />
              THUMBNAIL DESIGNER
            </div>


            <h1>
              MAKE THEM
              <br />
              <em>STOP SCROLLING.</em>
            </h1>


            <p className="hero-text">

              High-impact gaming thumbnails designed
              to turn impressions into clicks.

              Built for creators who want their videos
              to stand out.

            </p>


            <div className="hero-actions">

              <a
                className="primary-btn"
                href="#work"
              >
                View my work
                <ArrowUpRight size={18} />
              </a>


              <a
                className="secondary-btn"
                href={SOCIALS.workDiscord}
                target="_blank"
                rel="noreferrer"
              >
                <DiscordIcon />
                Discord
              </a>

            </div>


            <div className="micro-stats">

              <div>
                <strong>RaveGFX</strong>
                <span>Thumbnail Designer</span>
              </div>

              <div>
                <strong>{WORK.length}+</strong>
                <span>Designs</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>Creative</span>
              </div>

            </div>

          </div>


          {/* HERO VISUAL */}

          <div className="hero-art">

            <div className="hero-glow" />


            <div className="hero-card hero-card-back">

              <img
                src={WORK[1]?.image || WORK[0]?.image}
                alt="RaveGFX thumbnail"
                onError={(e) => {
                  e.currentTarget.src =
                    "/placeholder.svg";
                }}
              />

            </div>


            <div className="hero-card hero-card-front">

              <div className="card-top">

                <span>
                  RAVEGFX / 001
                </span>

                <span>
                  FEATURED
                </span>

              </div>


              <div className="hero-poster">

                <img
                  src={
                    featuredWork[0]?.image ||
                    WORK[0]?.image
                  }
                  alt={
                    featuredWork[0]?.title ||
                    "Featured thumbnail"
                  }
                  onError={(e) => {
                    e.currentTarget.src =
                      "/placeholder.svg";
                  }}
                />


                <div className="poster-overlay" />


                <div className="poster-badge">
                  CLICK
                  <br />
                  WORTHY
                </div>


                <div className="poster-title">

                  
                  <br />

                  <b></b>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            WORK
        ================================================= */}

        <section
          id="work"
          className="section work-section"
        >

          <div className="section-heading">

            <div>

              <div className="eyebrow">
                <span />
                SELECTED WORK
              </div>


              <h2>

                THUMBNAILS THAT
                <br />

                <em>HIT HARD.</em>

              </h2>

            </div>


            <p>

              Explore the portfolio and filter
              by content style.

              Click any thumbnail to view
              the full design.

            </p>

          </div>


          {/* CATEGORY FILTERS */}

          <div className="filters">

            {CATEGORIES.map((item) => (

              <button
                key={item}
                className={
                  category === item
                    ? "filter active"
                    : "filter"
                }
                onClick={() =>
                  setCategory(item)
                }
              >
                {item}
              </button>

            ))}

          </div>


          {/* =================================================
              4 ROW MARQUEE
          ================================================= */}

          {/* THUMBNAIL MARQUEE */}
            <div className="thumbnail-marquee">

  <MarqueeRow
    items={filtered.slice(0, 6)}
    direction="left"
    row="row1"
    onSelect={setSelected}
  />

  <MarqueeRow
    items={filtered.slice(6, 12)}
    direction="right"
    row="row2"
    onSelect={setSelected}
  />

  <MarqueeRow
    items={filtered.slice(12, 18)}
    direction="left"
    row="row3"
    onSelect={setSelected}
  />

  <MarqueeRow
    items={filtered.slice(18, 24)}
    direction="right"
    row="row4"
    onSelect={setSelected}
  />

</div>

        </section>


        {/* =================================================
            ABOUT
        ================================================= */}

        <section
          id="about"
          className="section about-section"
        >

          <div className="about-number">
            01
          </div>


          <div>

            <div className="eyebrow">
              <span />
              ABOUT THE DESIGNER
            </div>


            <h2>

              I DESIGN FOR
              <br />

              <em>THE CLICK.</em>

            </h2>


            <p>

              I'm RaveGFX, a thumbnail designer
              focused on gaming and creator content.

              My goal is simple: create a visual hook
              strong enough to make someone stop,
              notice and click.

            </p>


            <p>

              From composition and typography to
              character treatment, contrast and
              visual hierarchy, every element has a job.

            </p>

          </div>


          <div className="about-box">

            <span>
              AVAILABLE FOR
            </span>


            <strong>

              Freelance
              <br />
              Projects

            </strong>


            <a href="#contact">

              Let's talk
              <ArrowUpRight size={16} />

            </a>

          </div>

        </section>


        {/* =================================================
            SOCIALS
        ================================================= */}

        <section
  id="socials"
  className="section socials-section"
>

  <div className="section-heading">

    <div>

      <div className="eyebrow">
        <span />
        FOLLOW THE WORK
      </div>

      <h2>
        KEEP UP WITH
        <br />
        <em>RAVEGFX.</em>
      </h2>

    </div>

    <p>
      Follow my work, gaming content and
      latest designs.
      <br />
      Socials are also the fastest way
      to discover new work.
    </p>

  </div>


  {/* =================================================
      WORK
  ================================================= */}

  <div className="social-category">

    <div className="social-category-heading">
      <span>01 </span>
      <strong>WORK</strong>
    </div>


    <div className="social-grid">


      {/* WORK INSTAGRAM */}

      <a
        className="social-card instagram-card"
        href={SOCIALS.workInstagram}
        target="_blank"
        rel="noreferrer"
      >

        <div className="social-icon">
          <Instagram />
        </div>

        <div>

          <span>
            INSTAGRAM
          </span>

          <strong>
            @rave.gfx_
          </strong>

          <small>
            Designs • Portfolio • Updates
          </small>

        </div>

        <ArrowUpRight />

      </a>


      {/* WORK DISCORD */}

      <a
        className="social-card discord-card"
        href={SOCIALS.workDiscord}
        target="_blank"
        rel="noreferrer"
      >

        <div className="social-icon">
          <DiscordIcon />
        </div>

        <div>

          <span>
            DISCORD
          </span>

          <strong>
            {SOCIALS.workDiscordUsername}
          </strong>

          <small>
            Projects • Collaboration • Contact
          </small>

        </div>

        <ArrowUpRight />

      </a>


      {/* EMAIL */}

      <a
        className="social-card email-card"
        href={SOCIALS.email}
      >

        <div className="social-icon">
          <Mail />
        </div>

        <div>

          <span>
            EMAIL
          </span>

          <strong>
            COLLABORATE
          </strong>

          <small>
            Business • Projects • Inquiries
          </small>

        </div>

        <ArrowUpRight />

      </a>

    </div>

  </div>


  {/* =================================================
      PERSONAL / CONTENT
  ================================================= */}

  <div className="social-category">

    <div className="social-category-heading">
      <span>02 </span>
      <strong>PERSONAL / CONTENT</strong>
    </div>


    <div className="social-grid">


      {/* RAVE OP8 */}

      <a
        className="social-card youtube-card"
        href={SOCIALS.youtube}
        target="_blank"
        rel="noreferrer"
      >

        <div className="social-icon">
          <Youtube />
        </div>

        <div>

          <span>
            YOUTUBE
          </span>

          <strong>
            @RaveOP8
          </strong>

          <small>
            Gaming • Videos • Content
          </small>

        </div>

        <ArrowUpRight />

      </a>


      {/* RAVE PLAYS */}

      <a
        className="social-card youtube-card"
        href={SOCIALS.youtubePlays}
        target="_blank"
        rel="noreferrer"
      >

        <div className="social-icon">
          <Youtube />
        </div>

        <div>

          <span>
            YOUTUBE
          </span>

          <strong>
            @RavePlaysXD
          </strong>

          <small>
            Minecraft • Gaming • Content
          </small>

        </div>

        <ArrowUpRight />

      </a>


      {/* RAVE VERSE */}

      <a
        className="social-card youtube-card"
        href={SOCIALS.youtubeVerse}
        target="_blank"
        rel="noreferrer"
      >

        <div className="social-icon">
          <Youtube />
        </div>

        <div>

          <span>
            YOUTUBE
          </span>

          <strong>
            @RaveVerseOP
          </strong>

          <small>
            Gaming • Entertainment • Videos
          </small>

        </div>

        <ArrowUpRight />

      </a>


      {/* RAVE CS */}

      <a
        className="social-card youtube-card"
        href={SOCIALS.youtubeCS}
        target="_blank"
        rel="noreferrer"
      >

        <div className="social-icon">
          <Youtube />
        </div>

        <div>

          <span>
            YOUTUBE
          </span>

          <strong>
            @RaveCS8
          </strong>

          <small>
            CS2 • Competitive Gaming • Content
          </small>

        </div>

        <ArrowUpRight />

      </a>


      {/* SUHAS RAUT */}

      <a
        className="social-card youtube-card"
        href={SOCIALS.youtubePersonal}
        target="_blank"
        rel="noreferrer"
      >

        <div className="social-icon">
          <Youtube />
        </div>

        <div>

          <span>
            YOUTUBE
          </span>

          <strong>
            @suhasraut24
          </strong>

          <small>
            Personal • Tech • Content
          </small>

        </div>

        <ArrowUpRight />

      </a>


      {/* PERSONAL INSTAGRAM */}

      <a
        className="social-card instagram-card"
        href={SOCIALS.instagram}
        target="_blank"
        rel="noreferrer"
      >

        <div className="social-icon">
          <Instagram />
        </div>

        <div>

          <span>
            INSTAGRAM
          </span>

          <strong>
            @raveop_
          </strong>

          <small>
            Personal • Updates • Content
          </small>

        </div>

        <ArrowUpRight />

      </a>


      {/* TWITCH */}

      <a
        className="social-card twitch-card"
        href={SOCIALS.twitch}
        target="_blank"
        rel="noreferrer"
      >

        <div className="social-icon">
          <ExternalLink />
        </div>

        <div>

          <span>
            TWITCH
          </span>

          <strong>
            @ravexd_
          </strong>

          <small>
            Live Gaming • Streams • Community
          </small>

        </div>

        <ArrowUpRight />

      </a>


      {/* PERSONAL DISCORD */}

      <a
        className="social-card discord-card"
        href={SOCIALS.discord}
        target="_blank"
        rel="noreferrer"
      >

        <div className="social-icon">
          <DiscordIcon />
        </div>

        <div>

          <span>
            DISCORD
          </span>

          <strong>
            {SOCIALS.discordUsername}
          </strong>

          <small>
            Gaming • Community • Friends
          </small>

        </div>

        <ArrowUpRight />

      </a>


    </div>

  </div>

</section>


        {/* =================================================
            CONTACT
        ================================================= */}

        <section
          id="contact"
          className="section contact-section"
        >

          <div className="contact-panel">


            {/* LEFT */}

            <div className="contact-copy">

              <div className="eyebrow">
                <span />
                HAVE A PROJECT?
              </div>


              <h2>

                LET'S MAKE
                <br />

                <em>SOMETHING LOUD.</em>

              </h2>


              <p>

                Have a thumbnail, banner or creator
                project in mind?

                Join my Discord and send me
                the details directly.

              </p>


              <div className="contact-actions">

                <a
                  className="primary-btn discord-contact-btn"
                  href={SOCIALS.workDiscord}
                  target="_blank"
                  rel="noreferrer"
                >

                  <DiscordIcon />

                  Contact me on Discord

                  <ArrowUpRight size={18} />

                </a>


                <a
                  className="secondary-btn"
                  href={SOCIALS.email}
                >

                  <Mail size={18} />

                  Email me

                </a>

              </div>


              <button
                className="discord-copy"
                onClick={copyDiscord}
              >

                <DiscordIcon />

                <span>
                  Discord: {SOCIALS.workDiscordUsername}
                </span>


                {copied ? (

                  <span className="copied">
                    Copied!
                  </span>

                ) : (

                  <Copy size={15} />

                )}

              </button>

            </div>


           

            {/* RIGHT — THUMBNAIL SHOWCASE */}
{/* RIGHT — THUMBNAIL SHOWCASE */}
<div className="contact-showcase">

  <div className="showcase-label">
    <span>SELECTED WORK</span>
    <small>RECENT DESIGNS</small>
  </div>

  <div className="showcase-grid">

    {/* IMAGE 1 */}
    <div className="showcase-thumb">
      <img
        key={WORK[showcaseIndex % WORK.length].id}
        src={WORK[showcaseIndex % WORK.length].image}
        alt={WORK[showcaseIndex % WORK.length].title}
        onError={(e) => {
          e.currentTarget.src = "/placeholder.svg";
        }}
      />

      <div className="showcase-overlay">
        <span>
          {WORK[showcaseIndex % WORK.length].category}
        </span>

        <strong>
          {WORK[showcaseIndex % WORK.length].title}
        </strong>
      </div>
    </div>


    {/* IMAGE 2 */}
    <div className="showcase-thumb">
      <img
        key={WORK[(showcaseIndex + 1) % WORK.length].id}
        src={WORK[(showcaseIndex + 1) % WORK.length].image}
        alt={WORK[(showcaseIndex + 1) % WORK.length].title}
        onError={(e) => {
          e.currentTarget.src = "/placeholder.svg";
        }}
      />

      <div className="showcase-overlay">
        <span>
          {WORK[(showcaseIndex + 1) % WORK.length].category}
        </span>

        <strong>
          {WORK[(showcaseIndex + 1) % WORK.length].title}
        </strong>
      </div>
    </div>


    {/* IMAGE 3 */}
    <div className="showcase-thumb">
      <img
        key={WORK[(showcaseIndex + 2) % WORK.length].id}
        src={WORK[(showcaseIndex + 2) % WORK.length].image}
        alt={WORK[(showcaseIndex + 2) % WORK.length].title}
        onError={(e) => {
          e.currentTarget.src = "/placeholder.svg";
        }}
      />

      <div className="showcase-overlay">
        <span>
          {WORK[(showcaseIndex + 2) % WORK.length].category}
        </span>

        <strong>
          {WORK[(showcaseIndex + 2) % WORK.length].title}
        </strong>
      </div>
    </div>

  </div>

  <div className="showcase-footer">
    <span>THUMBNAILS • GAMING • CREATOR CONTENT</span>
  </div>

</div>

          </div>

        </section>

      </main>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer>

        <div className="brand">

          <span>Rave</span>GFX<span>.</span>

        </div>


        <p>
          Thumbnail Designer • Gaming • Creator Content
        </p>


        <div className="social-row">

          <a
            href={SOCIALS.youtube}
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <Youtube size={18} />
          </a>


          <a
            href={SOCIALS.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>


          <a
            href={SOCIALS.workDiscord}
            target="_blank"
            rel="noreferrer"
            aria-label="Discord"
          >
            <DiscordIcon />
          </a>

        </div>

      </footer>


      {/* =================================================
          IMAGE MODAL
      ================================================= */}

      {selected && (

        <div
          className="modal"
          onClick={() =>
            setSelected(null)
          }
        >

          <button
            className="modal-close"
            onClick={() =>
              setSelected(null)
            }
          >
            <X />
          </button>


          <div
            className="modal-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <img
              src={selected.image}
              alt={selected.title}
              onError={(e) => {
                e.currentTarget.src =
                  "/placeholder.svg";
              }}
            />


            <div>

              <span>
                {selected.category}
              </span>

              <h3>
                {selected.title}
              </h3>

            </div>

          </div>

        </div>

      )}

    </div>

  );
}


/* =====================================================
   MARQUEE ROW COMPONENT
===================================================== */

function MarqueeRow({
  items,
  direction,
  row,
  onSelect,
}) {

  if (!items.length) {

    return (

      <div className="empty-row">

        No thumbnails in this category yet.

      </div>

    );

  }


  /*
    Duplicate the list so the animation
    can loop continuously.
  */

  const loopItems = [
    ...items,
    ...items,
  ];


  return (

    <div className="marquee-row">

      <div
        className={`marquee-track ${
          direction === "left"
            ? "move-left"
            : "move-right"
        }`}
      >

        {loopItems.map(
          (item, index) => (

            <button
              className="marquee-thumb"
              key={`${row}-${item.id}-${index}`}
              onClick={() =>
                onSelect(item)
              }
            >

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src =
                    "/placeholder.svg";
                }}
              />


              <div className="marquee-overlay">

                <span>
                  {item.category}
                </span>

                <strong>
                  {item.title}
                </strong>

                <ArrowUpRight size={18} />

              </div>

            </button>

          )
        )}

      </div>

    </div>

  );

}


/* =====================================================
   DISCORD ICON
   No lucide DiscordLogo dependency.
===================================================== */

function DiscordIcon() {

  return (

    <span
      className="discord-icon"
      aria-hidden="true"
    >

      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="currentColor"
      >

        <path d="M19.54 5.2A16.5 16.5 0 0 0 15.5 4l-.5 1.02a15.2 15.2 0 0 0-6 0L8.5 4a16.5 16.5 0 0 0-4.04 1.2C1.9 9.02 1.2 12.75 1.55 16.43A16.4 16.4 0 0 0 6.5 19l1.2-1.64c-.66-.24-1.3-.54-1.9-.9l.46-.35c3.67 1.7 7.65 1.7 11.28 0l.47.35c-.6.36-1.24.66-1.9.9L17.3 19a16.4 16.4 0 0 0 4.95-2.57c.4-4.25-.67-7.95-2.71-11.23ZM8.7 14.7c-1.08 0-1.97-.99-1.97-2.2s.87-2.2 1.97-2.2 1.99.99 1.97 2.2c0 1.21-.87 2.2-1.97 2.2Zm6.6 0c-1.08 0-1.97-.99-1.97-2.2s.87-2.2 1.97-2.2 1.99.99 1.97 2.2c0 1.21-.87 2.2-1.97 2.2Z" />

      </svg>

    </span>

  );

}


/* =====================================================
   RENDER
===================================================== */

createRoot(
  document.getElementById("root")
).render(
  <App />
);