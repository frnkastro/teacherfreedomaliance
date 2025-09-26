import React from "react";

export default function App() {
  // --- State inputs & results ---
  const [stateInput, setStateInput] = React.useState("");
  const [role, setRole] = React.useState("PK–12 Teacher");
  const [results, setResults] = React.useState([]);

  // --- 50 states + DC ---
  const STATES = {
    AL: "Alabama",
    AK: "Alaska",
    AZ: "Arizona",
    AR: "Arkansas",
    CA: "California",
    CO: "Colorado",
    CT: "Connecticut",
    DE: "Delaware",
    FL: "Florida",
    GA: "Georgia",
    HI: "Hawaii",
    ID: "Idaho",
    IL: "Illinois",
    IN: "Indiana",
    IA: "Iowa",
    KS: "Kansas",
    KY: "Kentucky",
    LA: "Louisiana",
    ME: "Maine",
    MD: "Maryland",
    MA: "Massachusetts",
    MI: "Michigan",
    MN: "Minnesota",
    MS: "Mississippi",
    MO: "Missouri",
    MT: "Montana",
    NE: "Nebraska",
    NV: "Nevada",
    NH: "New Hampshire",
    NJ: "New Jersey",
    NM: "New Mexico",
    NY: "New York",
    NC: "North Carolina",
    ND: "North Dakota",
    OH: "Ohio",
    OK: "Oklahoma",
    OR: "Oregon",
    PA: "Pennsylvania",
    RI: "Rhode Island",
    SC: "South Carolina",
    SD: "South Dakota",
    TN: "Tennessee",
    TX: "Texas",
    UT: "Utah",
    VT: "Vermont",
    VA: "Virginia",
    WA: "Washington",
    WV: "West Virginia",
    WI: "Wisconsin",
    WY: "Wyoming",
    DC: "District of Columbia",
  };

  const NAME_TO_CODE = Object.fromEntries(
    Object.entries(STATES).map(([code, name]) => [name.toUpperCase(), code])
  );

  // --- Curated highlights (safe, recognizable examples). Add more any time. ---
  const HIGHLIGHTS = {
    CA: [
      {
        name: "California Teachers Association (CTA)",
        url: "https://www.cta.org/",
        blurb: "NEA affiliate in California.",
      },
      {
        name: "United Teachers Los Angeles (UTLA)",
        url: "https://www.utla.net/",
        blurb: "AFT/NEA local in LA Unified.",
      },
    ],
    CO: [
      {
        name: "Colorado Education Association (CEA)",
        url: "https://coloradoea.org/",
        blurb: "NEA affiliate in Colorado.",
      },
    ],
    IL: [
      {
        name: "Chicago Teachers Union (CTU)",
        url: "https://www.ctulocal1.org/",
        blurb: "AFT local in Chicago.",
      },
    ],
    MA: [
      {
        name: "Massachusetts Teachers Association (MTA)",
        url: "https://massteacher.org/",
        blurb: "NEA affiliate in Massachusetts.",
      },
    ],
    NY: [
      {
        name: "United Federation of Teachers (UFT)",
        url: "https://www.uft.org/",
        blurb: "AFT local in New York City.",
      },
      {
        name: "NYSUT",
        url: "https://www.nysut.org/",
        blurb: "State federation representing NEA/AFT members in New York.",
      },
    ],
    OH: [
      {
        name: "Ohio Education Association (OEA)",
        url: "https://www.ohea.org/",
        blurb: "NEA affiliate in Ohio.",
      },
    ],
    TX: [
      {
        name: "Texas AFT",
        url: "https://www.texasaft.org/",
        blurb: "AFT state federation in Texas.",
      },
      {
        name: "TSTA/NEA",
        url: "https://tsta.org/",
        blurb: "NEA affiliate in Texas.",
      },
    ],
    WA: [
      {
        name: "Washington Education Association (WEA)",
        url: "https://www.washingtonea.org/",
        blurb: "NEA affiliate in Washington.",
      },
    ],
  };

  // Build robust, state-aware suggestions (no dead links)
  function handleSuggest() {
    const s = (stateInput || "").trim();
    const upper = s.toUpperCase();
    const code =
      upper.length === 2 && STATES[upper] ? upper : NAME_TO_CODE[upper] || "";
    const full = code ? STATES[code] : "";

    const items = [];

    // Always-valuable top-level directories
    items.push({
      name: "Find your NEA state affiliate",
      url: "https://www.nea.org/nea-affiliates",
      blurb: "Directory by state to join where you work.",
    });
    items.push({
      name: "Find your AFT local",
      url: "https://www.aft.org/your-local",
      blurb: "Search AFT locals by city/state.",
    });

    // If a valid state is provided, add state-focused prompts pointing to the right directories
    if (code) {
      items.push({
        name: `NEA in ${full}`,
        url: "https://www.nea.org/nea-affiliates",
        blurb: `Open the NEA directory and select ${full}.`,
      });
      items.push({
        name: `AFT in ${full}`,
        url: "https://www.aft.org/your-local",
        blurb: `Use AFT's local finder to search in ${full}.`,
      });

      // Curated highlights (if we have them for this state)
      if (HIGHLIGHTS[code]) items.push(...HIGHLIGHTS[code]);
    }

    // Role-based nudge
    if (/NURSE|HEALTH/i.test(role)) {
      items.push({
        name: "AFT Nurses & Health Professionals",
        url: "https://www.aft.org/healthcare",
        blurb: "Resources for school nurses and health roles.",
      });
    }

    setResults(items);
  }

  // --- Oklahoma articles (curated) ---
const OKLAHOMA_ARTICLES = [
  {
    title: "Oklahoma schools ranked nearly the worst in the nation in new study",
    source: "The Oklahoman",
    date: "Jul 24, 2025",
    url: "https://www.oklahoman.com/story/news/education/2025/07/24/oklahoma-schools-ranked-nearly-the-worst-in-the-nation-in-new-study/85310196007/",
    blurb: "Coverage of WalletHub’s 2025 ranking placing Oklahoma at/near 50th nationally."
  },
  {
    title: "Report ranks Oklahoma 50th in education, warns money is no cure-all",
    source: "OCPA (Independent Journalism)",
    date: "Aug 20, 2025",
    url: "https://ocpathink.org/post/independent-journalism/report-ranks-oklahoma-50th-in-education-warns-money-no-cure-all",
    blurb: "WalletHub ranking discussion from a conservative-leaning outlet."
  },
  {
    title: "Oklahoma education ranked worst in nation",
    source: "The Black Wall Street Times",
    date: "Jul 25, 2025",
    url: "https://theblackwallsttimes.com/2025/07/25/oklahoma-education-ranked-worst-in-nation/",
    blurb: "WalletHub-based piece on statewide outcomes and implications."
  },
  {
    title: "FAQ: What we know since Oklahoma’s so-called CRT ban (HB 1775) took effect",
    source: "StateImpact Oklahoma (NPR)",
    date: "Sep 8, 2022",
    url: "https://stateimpact.npr.org/oklahoma/2022/09/08/faq-what-we-know-about-teaching-since-oklahomas-so-called-critical-race-theory-ban-went-into-effect/",
    blurb: "Context on HB 1775 enforcement and effects in schools."
  },
  {
    title: "The Chilling Effect of Oklahoma House Bill 1775",
    source: "Oklahoma Law Review (OU) – PDF",
    date: "2023",
    url: "https://digitalcommons.law.ou.edu/cgi/viewcontent.cgi?article=2263&context=olr",
    blurb: "Legal analysis of HB 1775’s impact on instruction and accreditation."
  },
  {
    title: "Walters’ turbulent tenure reaches quiet end at State Board meeting",
    source: "Oklahoma Voice",
    date: "Sep 25, 2025",
    url: "https://oklahomavoice.com/2025/09/25/walters-turbulent-tenure-reaches-quiet-end-at-oklahoma-state-board-of-education-meeting/",
    blurb: "Current developments around state leadership and policy conflicts."
  }
];


  React.useEffect(() => {
    // Use String.raw + template literal to preserve newlines and backslashes
    const art = String.raw`
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@%%%%%%%%%%%%%%%%%%%%%@@@@@
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@%%%%%%@@%%%%%%%%%%%#***#%%%%%@@@@@
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#=*%%%%%%%@@@@@@@%%%%%%%@@@%@@%@@@@%%%%%%%#===+==+++*%%@@@@@
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@%@@@@@@%@%*%@@%@@@%@%#===========+#@@@@@
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@@@@@@@@@:#@@@@@@@@@@@@@%%%@@%%@@@@@%+=============%@@@@
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@@%%%%@@@@@@@@@@@@@@@@@@%%%%%%%%%%%%%%%+===========+=#@@@@
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@@%*...  ..    ...:#%@@@@@@@@@@@@%%%%%%%%%%%%*+==========+=#@@@@
%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@@%*:..     ....::::.....-#@@@@@@@@%%%%%%%%%%%%%%++=++======+:%@@@@
%%%%%%%%%%%%%%%%%%%=. ..#%@@@@@%%=::.    ..=*#********###+:..#@@@@@@%%%%%%%%%%%%%%%+=========+@@@@@@
%%%%%%%%%%%%%%@@%%*...:.*%@@@@%+.=+.. ..:#++========+++*****#=+@@@@@@%%%%%%%%%%%%%%%%%#***#%@@@@@@@@
%%%%%%@@%%%%%@@@%%%%-.:%@@@@@%#..++....*+==========+++********#*:%@@%%%%%%%%%%%%%%%%%%%%@@%%%%%@@@@@
%%@@@@@@@@@@@@@@@%%%%%%%%%@@%%=:-*+...*+===========++***********+*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@
%@@@@@@@%%@@@@@%@%%%%%%%%%%%%#=..%*..-*============++************%%%%%%%%%%%%%%%%@%@%%%%%%%%%%%%%%%@
%@@@@@@:=*+@@@%%%%%%%%%%%%%%%+.......+=============++************%%%@@%%%%%%%%%%%@%-*%%%%%%%%%%%%%%%
%@@@@%%#+#@@@@@%%%%%%%%%%%%%-*+:-=%..*===========+++*************::#@@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%@@@@@@%%%%%%%%%%%%%%%%%%%%.#=...-..-*============++************=+:.%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
@%%@@%%%%%%%%%%%%%%%%%%%%%:+*:::=-..++============++***********+-+=:#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
@%%%%%%%%%%%%%%%%%%%%%%%%=:#=:::*:..++===========++************=-==:*%%%@%%%%%%%%%%%%%%%%%%%%%%%%%%%
@%%%%%%%%%%%%%%%%%%%%%%%%::#-:::*..:++===========++***********#--=+:*%%@@@@@@%%%%%%%%%%%%%%%%%%%%%%%
@%%%%%%%%%%%%%%%%%%%%%%%%-:#=:::+..*=+==========++*************=-++:#%@@@@@@@%%%%%%%%%@@@@@%%@@@@@%%
@%%%%%%%%%%%%%%@@@@%%%%%%+.:%-:--::@-*==========++***********#--=+=:%%@#+#%%%%%%%%%%%%%%%@%%@@@%%%%%
@@%%%%%%%%%%%%@@@@@@%@@@%%*..=%#:-@:=*=========++***********#%%:::.*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
@@%%%%%%%%%%@@@@@+=%@@@@@@%%@@%#*#...*+========+************%@@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
@@@@%@@%%%@@@@@@@@@@@@@@@%*-....-.....=*======++************%@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
@@@@@@@@%@@@@@@@@@@@@@=:..........:....:*+====++***********#%@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
@@@@@@@@@@@@@@@@@@#:::..............:.....**+=++**********+=@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
@@@@@@@@@@@@@@@%......:*:.............:-.....=####***####:..:%%%%%%%%%%%%%%%%%%%%%%%@@%%%%%%%%%%%%%%
@@@@@@@@@@@@@*...     ..-*.........  .....:::.................*%%%%%%%%@%%%%%%%%%%%@#:*%%%%%%%%%%%%%
@@@@@@@@@@@#...  ........:#....................:::.....:+%#....+%%%%%@@@@@%@@@%%%%%%#*@%%%%%%%%%%%%%
@@@@@@@@@@-..  ...........-#............... ...........:....   .#%%@@@@%+%@@@%%%%%%%%%%%%%%%%%%%%%%%
@@@@@@@@%..  ..............#-.......................   ...     .:%%@@@@@%@@@@@@%@%%%%%%%%%%%%%%%%%%%
@@@@@@@%.............   ...=*.....................              .%%%@@@@@@@@@@@@@@@%%%%%%%%%%%%%%%%%
@@@@@@@-........       ....=#........................  ..........#%%%%%%@@@@@@@@@@@%%%%%%%%%%%%%%%%%
@@@@@@+.:++=-...      ....:#=--=====---------------:.. ..:#*=::-.#%%%%%@@@@@@@%+:#%%%%%%%%%%%%%%%%%%
@@@@@@:.....:=....   ...*+.........................:=. ...::::.:.*%%%%@@@@@@@**+:#%%%%%%%%%%%%%%%%%%
@@@@@=............  ..:@..   .......::::--==+=......-. ...:......*%%%@@@@@@@%=:+%@%%%%%%%%%%%%%%%%%%
@@@@%............  ..:%..  .+=--------=======*......:  .-*++*#*..+%@%@@@@@@@@@@@@@@%%%%%%%%%%%%%%%%%
@@@@+.:*****+........%:.   .*-:--**---%-++==+*......:  .++-.++#=.=%@%@@@@%%%@@@@%%%%%%%%%%%%%%%%%%%%
@@@@:...............+=.    .#--=-**---%-====+*......:  .*+-.-+#+.-%@%%@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
@@@#................#..   ..#--+-+%+:=%-*#==+*......: ..#+--=+*+.-%%%@@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
@@@-.+++=-==.......+:..   ..#--%%%%#**%####***.....:. ..*=-:::%:.=%%%@@%%%%%%%%%%%%@@@@@@@%%%%%%%%%%
@@@................#........==::::::::.............-.....%%@@@-..=%%%@@%%%%%%%%%%%@@@@%@@@@%%%%%%%%%
@@*...............-=...........::==++===---:::::::=:.....:-:.....=%%%@@%%%%%%%%%%@@@@*#@@@@%%%%%%%%%
@@-...............+....................................-%--......=%%%@@@%%%%%%%%%%%%%@@%%%%%%%%%%%%%
@@:...............+..........................   .......-*.:=.. ..:%%@@@@@@@%%%%%%%%%%%%%%%%@%%%%%%%%
@@:..............:=.....................       .........*=..=:. ..#%@@%@@@@%%%%%%%%%%%%%%%%%@%%%%%%%
`;

    const style = [].join(";");

    console.log(style, art);
    console.log(
      "Oh look devtools. Get in contact with me at frnkastroparty@gmail.com"
    );
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-300">
              TF⟂
            </span>
            <span>
              TeacherFreedomAliance
              <span className="sr-only">(intentional misspelling)</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#why" className="hover:text-indigo-700">
              Why Unions
            </a>
            <a href="#links" className="hover:text-indigo-700">
              Union Links
            </a>
            <a href="#get-help" className="hover:text-indigo-700">
              Get Help
            </a>
            <a href="#oklahoma" className="hover:text-indigo-700">OK Articles</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Real teacher freedom comes from{" "}
              <strong className="block text-indigo-700">
                standing together.
              </strong>
            </h1>

            <p className="mt-4 text-lg text-slate-700">
              <span className="font-medium">Note:</span> This website is an
              advocacy project promoting teachers' unions. It is{" "}
              <strong>not affiliated</strong> with Teacher Freedom Alliance.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              P.S. “Alliance” has <span className="font-semibold">two Ls</span>{" "}
              — just one more reason education matters.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#links"
                className="px-5 py-3 rounded-2xl bg-indigo-700 text-white font-semibold shadow hover:shadow-md transition"
              >
                Explore Union Links
              </a>
              <a
                href="#why"
                className="px-5 py-3 rounded-2xl border border-slate-300 font-semibold hover:border-indigo-700 hover:text-indigo-700 transition"
              >
                Why unions?
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 h-2 w-2 rounded-full bg-indigo-700"
                  />
                  Collective bargaining for pay, class size, &amp; prep time
                </li>
                <li className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 h-2 w-2 rounded-full bg-indigo-700"
                  />
                  Due-process protections &amp; legal support on the job
                </li>
                <li className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 h-2 w-2 rounded-full bg-indigo-700"
                  />
                  Voice in curriculum, safety, and school policy
                </li>
                <li className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 h-2 w-2 rounded-full bg-indigo-700"
                  />
                  Training, mentorship, &amp; professional community
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Unions */}
      <section id="why" className="bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Why unions are the proven path
          </h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Bargaining power",
                body: "Collectively negotiated contracts set enforceable standards for wages, benefits, prep time, and class size—things individual educators rarely win alone.",
              },
              {
                title: "Legal protection",
                body: "Representation in grievances, investigations, and disciplinary actions—plus contract enforcement—keeps due process real, not theoretical.",
              },
              {
                title: "Student-centered voice",
                body: "Stronger educator voice improves learning conditions: safer schools, manageable workloads, and time to teach.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-6 rounded-3xl border border-slate-200 bg-slate-50"
              >
                <h3 className="font-semibold text-lg">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Union Links */}
      <section
        id="links"
        className="bg-gradient-to-b from-slate-50 to-slate-100"
      >
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Find and join your union
          </h2>
          <p className="mt-2 text-slate-700 max-w-3xl">
            Below are national unions and directories to locate your state or
            local affiliate. Links open in a new tab.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.nea.org/"
              className="block group"
            >
              <div className="p-6 rounded-3xl border border-slate-200 bg-white group-hover:border-indigo-700 transition shadow-sm">
                <h3 className="font-semibold text-lg">
                  National Education Association (NEA)
                </h3>
                <p className="mt-1 text-sm text-slate-700">
                  Nationwide union of educators advocating for students &amp;
                  the profession.
                </p>
                <p className="mt-3 text-xs text-indigo-700">nea.org ↗</p>
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.aft.org/"
              className="block group"
            >
              <div className="p-6 rounded-3xl border border-slate-200 bg-white group-hover:border-indigo-700 transition shadow-sm">
                <h3 className="font-semibold text-lg">
                  American Federation of Teachers (AFT)
                </h3>
                <p className="mt-1 text-sm text-slate-700">
                  Union representing teachers, PSRPs, nurses, and higher-ed
                  faculty.
                </p>
                <p className="mt-3 text-xs text-indigo-700">aft.org ↗</p>
              </div>
            </a>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.nea.org/nea-affiliates"
              className="block group"
            >
              <div className="p-6 rounded-3xl border border-slate-200 bg-white group-hover:border-indigo-700 transition shadow-sm">
                <h3 className="font-semibold text-lg">
                  Find your NEA state affiliate
                </h3>
                <p className="mt-1 text-sm text-slate-700">
                  Directory of state and local associations to join where you
                  work.
                </p>
                <p className="mt-3 text-xs text-indigo-700">
                  nea.org/nea-affiliates ↗
                </p>
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.aft.org/your-local"
              className="block group"
            >
              <div className="p-6 rounded-3xl border border-slate-200 bg-white group-hover:border-indigo-700 transition shadow sm">
                <h3 className="font-semibold text-lg">Find your AFT local</h3>
                <p className="mt-1 text-sm text-slate-700">
                  Search AFT locals by city/state and join directly.
                </p>
                <p className="mt-3 text-xs text-indigo-700">
                  aft.org/your-local ↗
                </p>
              </div>
            </a>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Colorado Education Association (CEA)",
                url: "https://coloradoea.org/",
              },
              {
                name: "United Teachers Los Angeles (UTLA)",
                url: "https://www.utla.net/",
              },
              {
                name: "Chicago Teachers Union (CTU)",
                url: "https://www.ctulocal1.org/",
              },
            ].map((org) => (
              <a
                key={org.name}
                target="_blank"
                rel="noreferrer"
                href={org.url}
                className="block group"
              >
                <div className="p-5 rounded-2xl border border-slate-200 bg-white group-hover:border-indigo-700 transition shadow-sm">
                  <h4 className="font-medium">{org.name}</h4>
                  <p className="mt-2 text-xs text-indigo-700">Visit site ↗</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="get-help" className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Not sure where to start?
            </h2>
            <p className="mt-3 text-slate-700">
              Answer a few questions and we’ll suggest a union path. (Prototype
              form—no data stored.)
            </p>

            <form
              className="mt-6 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleSuggest();
              }}
            >
              <label className="text-sm">
                State
                <input
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                  placeholder="e.g., CO or Colorado"
                  value={stateInput}
                  onChange={(e) => setStateInput(e.target.value)}
                />
              </label>
              <label className="text-sm">
                Role
                <select
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option>PK–12 Teacher</option>
                  <option>Para/Support Staff</option>
                  <option>School Nurse</option>
                  <option>Higher-Ed Faculty/Adjunct</option>
                  <option>Counselor/Related Service</option>
                </select>
              </label>
              <button
                type="submit"
                className="mt-2 w-full px-5 py-3 rounded-2xl bg-indigo-700 text-white font-semibold shadow hover:shadow-md"
              >
                Show Suggestions
              </button>
            </form>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
            <h3 className="font-semibold">Suggestions</h3>
            {results.length === 0 ? (
              <p className="mt-2 text-sm text-slate-600">
                Enter your state and role, then click <em>Show Suggestions</em>.
              </p>
            ) : (
              <ul className="mt-3 space-y-3">
                {results.map((r) => (
                  <li
                    key={r.name + r.url}
                    className="p-4 rounded-2xl bg-white border border-slate-200"
                  >
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-indigo-700 hover:underline"
                    >
                      {r.name} ↗
                    </a>
                    {r.blurb && (
                      <p className="mt-1 text-xs text-slate-600">{r.blurb}</p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      <section id="oklahoma" className="bg-white border-t border-slate-200">
  <div className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
      Oklahoma: rankings & policy articles
    </h2>
    <p className="mt-2 text-slate-700 max-w-3xl">
      Recent reporting and analysis on Oklahoma’s K-12 outcomes and the impact of state policies.
    </p>

    <ul className="mt-8 grid md:grid-cols-2 gap-6">
      {OKLAHOMA_ARTICLES.map((a) => (
        <li key={a.url} className="p-6 rounded-3xl border border-slate-200 bg-slate-50">
          <a
            className="font-semibold text-lg text-indigo-700 hover:underline"
            href={a.url}
            target="_blank"
            rel="noreferrer"
          >
            {a.title} ↗
          </a>
          <p className="mt-1 text-sm text-slate-600">
            {a.source} • {a.date}
          </p>
          {a.blurb && <p className="mt-2 text-sm text-slate-700">{a.blurb}</p>}
        </li>
      ))}
    </ul>

    <div className="mt-6 text-xs text-slate-500">
      Sources include WalletHub-based rankings coverage and legal/press analysis; dates shown for clarity.
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="border-t border-slate-200 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-500">
            This site is an independent advocacy project. It is not affiliated
            with Teacher Freedom Alliance or any organization mentioned.
          </div>
        </div>
      </footer>
    </div>
  );
}
