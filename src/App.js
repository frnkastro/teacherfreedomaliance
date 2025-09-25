import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-300">TF⟂</span>
            <span>
              TeacherFreedomAliance
              <span className="sr-only">(intentional misspelling)</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#why" className="hover:text-indigo-700">Why Unions</a>
            <a href="#links" className="hover:text-indigo-700">Union Links</a>
            <a href="#get-help" className="hover:text-indigo-700">Get Help</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Real teacher freedom comes from{" "}
              <strong className="block text-indigo-700">standing together.</strong>
            </h1>

            <p className="mt-4 text-lg text-slate-700">
              <span className="font-medium">Note:</span> This website is an advocacy project
              promoting teachers' unions. It is <strong>not affiliated</strong> with Teacher Freedom Alliance.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              P.S. “Alliance” has <span className="font-semibold">two Ls</span> — just one more reason education matters.
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
                  <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-indigo-700" />
                  Collective bargaining for pay, class size, &amp; prep time
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-indigo-700" />
                  Due-process protections &amp; legal support on the job
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-indigo-700" />
                  Voice in curriculum, safety, and school policy
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-indigo-700" />
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
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Why unions are the proven path</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Bargaining power",
                body:
                  "Collectively negotiated contracts set enforceable standards for wages, benefits, prep time, and class size—things individual educators rarely win alone.",
              },
              {
                title: "Legal protection",
                body:
                  "Representation in grievances, investigations, and disciplinary actions—plus contract enforcement—keeps due process real, not theoretical.",
              },
              {
                title: "Student-centered voice",
                body:
                  "Stronger educator voice improves learning conditions: safer schools, manageable workloads, and time to teach.",
              },
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-3xl border border-slate-200 bg-slate-50">
                <h3 className="font-semibold text-lg">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Union Links */}
      <section id="links" className="bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Find and join your union</h2>
          <p className="mt-2 text-slate-700 max-w-3xl">
            Below are national unions and directories to locate your state or local affiliate. Links open in a new tab.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <a target="_blank" rel="noreferrer" href="https://www.nea.org/" className="block group">
              <div className="p-6 rounded-3xl border border-slate-200 bg-white group-hover:border-indigo-700 transition shadow-sm">
                <h3 className="font-semibold text-lg">National Education Association (NEA)</h3>
                <p className="mt-1 text-sm text-slate-700">
                  Nationwide union of educators advocating for students &amp; the profession.
                </p>
                <p className="mt-3 text-xs text-indigo-700">nea.org ↗</p>
              </div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.aft.org/" className="block group">
              <div className="p-6 rounded-3xl border border-slate-200 bg-white group-hover:border-indigo-700 transition shadow-sm">
                <h3 className="font-semibold text-lg">American Federation of Teachers (AFT)</h3>
                <p className="mt-1 text-sm text-slate-700">
                  Union representing teachers, PSRPs, nurses, and higher-ed faculty.
                </p>
                <p className="mt-3 text-xs text-indigo-700">aft.org ↗</p>
              </div>
            </a>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <a target="_blank" rel="noreferrer" href="https://www.nea.org/nea-affiliates" className="block group">
              <div className="p-6 rounded-3xl border border-slate-200 bg-white group-hover:border-indigo-700 transition shadow-sm">
                <h3 className="font-semibold text-lg">Find your NEA state affiliate</h3>
                <p className="mt-1 text-sm text-slate-700">Directory of state and local associations to join where you work.</p>
                <p className="mt-3 text-xs text-indigo-700">nea.org/nea-affiliates ↗</p>
              </div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.aft.org/your-local" className="block group">
              <div className="p-6 rounded-3xl border border-slate-200 bg-white group-hover:border-indigo-700 transition shadow sm">
                <h3 className="font-semibold text-lg">Find your AFT local</h3>
                <p className="mt-1 text-sm text-slate-700">Search AFT locals by city/state and join directly.</p>
                <p className="mt-3 text-xs text-indigo-700">aft.org/your-local ↗</p>
              </div>
            </a>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { name: "Colorado Education Association (CEA)", url: "https://coloradoea.org/" },
              { name: "United Teachers Los Angeles (UTLA)", url: "https://www.utla.net/" },
              { name: "Chicago Teachers Union (CTU)", url: "https://www.ctulocal1.org/" },
            ].map((org) => (
              <a key={org.name} target="_blank" rel="noreferrer" href={org.url} className="block group">
                <div className="p-5 rounded-2xl border border-slate-200 bg-white group-hover:border-indigo-700 transition shadow-sm">
                  <h4 className="font-medium">{org.name}</h4>
                  <p className="mt-2 text-xs text-indigo-700">Visit site ↗</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Get Help */}
      <section id="get-help" className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Not sure where to start?</h2>
            <p className="mt-3 text-slate-700">
              Answer a few questions and we’ll suggest a union path. (Prototype form—wire-up to your favorite form tool.)
            </p>

            <form className="mt-6 grid gap-4">
              <label className="text-sm">
                State
                <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="e.g., Colorado" />
              </label>
              <label className="text-sm">
                Role
                <select className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2">
                  <option>PK–12 Teacher</option>
                  <option>Para/Support Staff</option>
                  <option>School Nurse</option>
                  <option>Higher-Ed Faculty/Adjunct</option>
                  <option>Counselor/Related Service</option>
                </select>
              </label>
              <button
                type="button"
                className="mt-2 w-full px-5 py-3 rounded-2xl bg-indigo-700 text-white font-semibold shadow hover:shadow-md"
              >
                Show Suggestions
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="border-t border-slate-200 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-500">
            This site is an independent advocacy project. It is not affiliated with Teacher Freedom Alliance or any organization mentioned.
          </div>
        </div>
      </footer>
    </div>
  );
}
