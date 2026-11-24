import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  BookOpen,
  ChevronLeft,
  FolderOpen,
  Home,
  LifeBuoy,
  Mail,
  Search,
  Sun,
  Moon,
  Contrast,
  Volume2,
} from "lucide-react";
import { CITIES, adviceSearch, citySiteSearch, terminSearch, type City } from "@/data/cities";
import {
  GLOSSARY,
  LANGS,
  PHRASES,
  SERVICES,
  UI,
  type Lang,
  type ServiceId,
} from "@/data/content";

export const Route = createFileRoute("/")({ component: HomePage });

const KEY = "bb-helfer-v1";

type Tab = "home" | "letter" | "notes" | "help";
type Size = "sm" | "md" | "lg";
type Theme = "light" | "dark" | "contrast";

type Note = { id: string; title: string; body: string; image?: string };

type Saved = {
  lang: Lang;
  size: Size;
  theme: Theme;
  cityName: string;
  service: ServiceId | null;
  checked: Record<string, boolean>;
  moveIn: string;
  notes: Note[];
};

const empty: Saved = {
  lang: "de",
  size: "md",
  theme: "light",
  cityName: "Potsdam",
  service: null,
  checked: {},
  moveIn: "",
  notes: [],
};

function load(): Saved {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty;
    return { ...empty, ...JSON.parse(raw) };
  } catch {
    return empty;
  }
}

function HomePage() {
  const [ready, setReady] = useState(false);
  const [s, setS] = useState<Saved>(empty);
  const [tab, setTab] = useState<Tab>("home");
  const [cityQuery, setCityQuery] = useState("");
  const [kreis, setKreis] = useState("all");
  const [picking, setPicking] = useState(false);
  const [letter, setLetter] = useState("");
  const [draftTitle, setDraftTitle] = useState("");
  const [draftBody, setDraftBody] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [frame, setFrame] = useState<{ url: string; title: string } | null>(null);
  const [frameLoading, setFrameLoading] = useState(false);

  function openFrame(next: { url: string; title: string }) {
    if (!next.url.startsWith("https://")) return;
    setFrameLoading(true);
    setFrame(next);
  }

  useEffect(() => {
    setS(load());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(KEY, JSON.stringify(s));
    document.documentElement.lang = s.lang;
    document.documentElement.dir = s.lang === "ar" ? "rtl" : "ltr";
    document.documentElement.dataset.size = s.size;
    document.documentElement.classList.toggle("dark", s.theme === "dark");
    document.documentElement.classList.toggle("contrast", s.theme === "contrast");
  }, [s, ready]);

  const L = s.lang;
  const city = CITIES.find((c) => c.name === s.cityName) ?? CITIES[0];
  const service = SERVICES.find((x) => x.id === s.service) ?? null;

  const kreise = useMemo(() => {
    const set = new Set(CITIES.map((c) => c.kreis));
    return [...set].sort((a, b) => a.localeCompare(b, "de"));
  }, []);

  const filtered = useMemo(() => {
    const q = cityQuery.trim().toLowerCase();
    return CITIES.filter((c) => {
      if (kreis !== "all" && c.kreis !== kreis) return false;
      if (!q) return true;
      return c.name.toLowerCase().includes(q) || c.plz.startsWith(q) || c.kreis.toLowerCase().includes(q);
    }).slice(0, 40);
  }, [cityQuery, kreis]);

  function patch(p: Partial<Saved>) {
    setS((prev) => ({ ...prev, ...p }));
  }

  const due = useMemo(() => {
    if (!s.moveIn) return null;
    const start = new Date(s.moveIn + "T12:00:00");
    if (Number.isNaN(start.getTime())) return null;
    const end = new Date(start);
    end.setDate(end.getDate() + 14);
    const today = new Date();
    today.setHours(12, 0, 0, 0);
    const days = Math.round((end.getTime() - today.getTime()) / 86400000);
    return { end, days };
  }, [s.moveIn]);

  const hits = useMemo(() => {
    const text = letter.toLowerCase();
    return GLOSSARY.filter((g) => text.includes(g.de.toLowerCase()));
  }, [letter]);

  function speak(src: string) {
    const audio = new Audio(src);
    audio.play().catch(() => undefined);
  }

  function addNote(image?: string) {
    const title = draftTitle.trim();
    const body = draftBody.trim();
    if (!title && !body && !image) return;
    const note: Note = {
      id: crypto.randomUUID(),
      title: title || UI.notes[L],
      body,
      image,
    };
    patch({ notes: [note, ...s.notes].slice(0, 30) });
    setDraftTitle("");
    setDraftBody("");
    setPhotoError("");
  }

  function onPhoto(file: File | undefined) {
    if (!file) return;
    if (file.size > 400_000) {
      setPhotoError(UI.photoBig[L]);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const data = typeof reader.result === "string" ? reader.result : "";
      addNote(data);
    };
    reader.readAsDataURL(file);
  }

  const checkedKey = (id: string) => (service ? `${service.id}:${id}` : id);
  const missing = service ? service.docs.filter((d) => !s.checked[checkedKey(d.id)]) : [];

  return (
    <div className="mx-auto min-h-screen max-w-xl px-4 pb-28 pt-6">
      <header className="mb-5 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-primary">{UI.app[L]}</p>
          <h1 className="text-2xl font-bold leading-tight">
            {tab === "home" && service ? service.title[L] : tab === "home" ? UI.services[L] : labelFor(tab, L)}
          </h1>
        </div>
        <label className="shrink-0">
          <span className="sr-only">{UI.app[L]}</span>
          <select
            className="min-h-11 rounded-card border border-line bg-surface px-3 text-base font-bold"
            value={L}
            onChange={(e) => patch({ lang: e.target.value as Lang })}
          >
            {LANGS.map((l) => (
              <option key={l.code} value={l.code}>
                {l.label}
              </option>
            ))}
          </select>
        </label>
      </header>

      {tab === "home" && !service && (
        <section>
          <p className="mb-4 text-muted">{UI.intro[L]}</p>
          {due && (
            <p className={`mb-4 rounded-card px-4 py-3 text-sm font-bold ${due.days < 0 ? "bg-warn-bg text-warn" : "bg-soft text-primary"}`}>
              {UI.remind[L]}: {due.end.toLocaleDateString(L === "ar" ? "ar" : L === "de" ? "de-DE" : L)} ·{" "}
              {due.days < 0 ? UI.late[L] : due.days === 0 ? UI.today[L] : `${due.days} ${UI.daysLeft[L]}`}
            </p>
          )}
          <CityBar city={city} L={L} onChange={() => setPicking(true)} />
          <ul className="grid gap-3">
            {SERVICES.map((sv) => (
              <li key={sv.id}>
                <button
                  className="w-full rounded-card border border-line bg-surface px-4 py-4 text-start shadow-none"
                  onClick={() => {
                    patch({ service: sv.id });
                    setTab("home");
                  }}
                >
                  <span className="block text-lg font-bold">{sv.title[L]}</span>
                  <span className="mt-1 block text-sm text-muted">{sv.sub[L]}</span>
                </button>
              </li>
            ))}
          </ul>
          <Settings s={s} patch={patch} L={L} />
          <p className="mt-6 text-sm text-muted">
            {CITIES.length} {UI.count[L]}. {UI.disclaimer[L]}
          </p>
        </section>
      )}

      {tab === "home" && service && (
        <section>
          <button className="mb-4 inline-flex min-h-11 items-center gap-1 font-bold text-primary" onClick={() => patch({ service: null })}>
            <ChevronLeft className="size-5" aria-hidden />
            {UI.back[L]}
          </button>
          <p className="mb-3 text-muted">{service.sub[L]}</p>
          <p className="mb-4 rounded-card bg-warn-bg px-4 py-3 font-bold text-warn">{service.deadline[L]}</p>
          <CityBar city={city} L={L} onChange={() => setPicking(true)} />
          {(service.id === "ummeldung" || service.id === "anmeldung") && (
            <label className="mb-4 block rounded-card border border-line bg-surface p-4">
              <span className="mb-2 block font-bold">{UI.move[L]}</span>
              <input
                type="date"
                className="min-h-11 w-full rounded-lg border border-line bg-bg px-3"
                value={s.moveIn}
                onChange={(e) => patch({ moveIn: e.target.value })}
              />
              {due && (
                <span className="mt-2 block text-sm">
                  {UI.remind[L]}: {due.end.toLocaleDateString("de-DE")}
                  {due.days < 0 ? ` — ${UI.late[L]}` : due.days === 0 ? ` — ${UI.today[L]}` : ` — ${due.days} ${UI.daysLeft[L]}`}
                </span>
              )}
            </label>
          )}

          <h2 className="mb-2 text-lg font-bold">{missing.length === 0 ? UI.ready[L] : UI.missing[L]}</h2>
          {missing.length === 0 && <p className="mb-3 text-ok">{UI.readyText[L]}</p>}
          <ul className="mb-4 grid gap-2">
            {service.docs.map((d) => {
              const on = !!s.checked[checkedKey(d.id)];
              return (
                <li key={d.id}>
                  <button
                    className={`w-full rounded-card border px-4 py-3 text-start ${on ? "border-primary bg-ok-bg" : "border-line bg-surface"}`}
                    onClick={() => patch({ checked: { ...s.checked, [checkedKey(d.id)]: !on } })}
                    aria-pressed={on}
                  >
                    <span className="font-bold">
                      {on ? UI.have[L] : UI.need[L]}: {d.name[L]}
                    </span>
                    <span className="mt-1 block text-sm text-muted">{d.note[L]}</span>
                    {!on && (
                      <span className="mt-2 block text-sm">
                        {UI.where[L]}: {d.hint[L]}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
          <button className="mb-4 text-sm font-bold text-muted underline" onClick={() => {
            const next = { ...s.checked };
            service.docs.forEach((d) => delete next[checkedKey(d.id)]);
            patch({ checked: next });
          }}>
            {UI.clear[L]}
          </button>

          <h2 className="mb-2 text-lg font-bold">{service.title[L]}</h2>
          <ol className="mb-4 grid gap-2">
            {service.steps.map((step, i) => (
              <li key={i} className="rounded-card bg-surface px-4 py-3">
                <span className="font-bold text-primary">{i + 1}. </span>
                {step[L]}
              </li>
            ))}
          </ol>

          <div className="mb-4 grid gap-2">
            {service.id === "digital" ? (
              <>
                <FrameButton className="bg-primary text-primary-fg" title="AusweisApp" url="https://www.ausweisapp.bund.de/" onOpen={openFrame} />
                <FrameButton className="border border-line bg-surface" title="BundID" url="https://id.bund.de/" onOpen={openFrame} />
                <FrameButton className="border border-line bg-surface" title="Personalausweisportal" url="https://www.personalausweisportal.de/" onOpen={openFrame} />
              </>
            ) : (
              <FrameButton className="bg-primary text-primary-fg" title={UI.book[L]} url={terminSearch(city)} onOpen={openFrame} />
            )}
            <FrameButton className="border border-line bg-surface" title={UI.site[L]} url={citySiteSearch(city)} onOpen={openFrame} />
          </div>
          <p className="mb-4 text-sm text-muted">{UI.unverified[L]}</p>

          <h2 className="mb-2 text-lg font-bold">{UI.phrases[L]}</h2>
          <ul className="grid gap-2">
            {PHRASES.map((p) => (
              <li key={p.id} className="rounded-card border border-line bg-surface px-4 py-3">
                <p className="font-bold">{p.de}</p>
                <p className="text-sm text-muted">{p[L]}</p>
                <button className="mt-2 inline-flex min-h-11 items-center gap-2 font-bold text-primary" onClick={() => speak(p.audio)}>
                  <Volume2 className="size-5" aria-hidden />
                  {UI.listen[L]}
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {tab === "letter" && (
        <section>
          <p className="mb-3 text-muted">{UI.letterHelp[L]}</p>
          <textarea
            className="mb-3 min-h-40 w-full rounded-card border border-line bg-surface p-3"
            placeholder={UI.placeholder[L]}
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
          />
          <h2 className="mb-2 font-bold">{UI.found[L]}</h2>
          {hits.length === 0 ? (
            <p className="mb-4 text-sm text-muted">{UI.none[L]}</p>
          ) : (
            <ul className="mb-4 grid gap-2">
              {hits.map((g) => (
                <li key={g.de} className="rounded-card bg-warn-bg px-4 py-3">
                  <p className="font-bold text-warn">{g.de} — {g[L]}</p>
                  <p className="text-sm">{g.why[L]}</p>
                </li>
              ))}
            </ul>
          )}
          <a
            className="mb-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-card bg-primary font-bold text-primary-fg"
            href={`mailto:?subject=${encodeURIComponent("Rückfrage zu meinem Schreiben")}&body=${encodeURIComponent(letter)}`}
          >
            <Mail className="size-5" aria-hidden />
            {UI.mail[L]}
          </a>
          <h2 className="mb-2 text-lg font-bold">{UI.words[L]}</h2>
          <ul className="grid gap-2">
            {GLOSSARY.map((g) => (
              <li key={g.de} className="rounded-card border border-line bg-surface px-4 py-3">
                <p className="font-bold">{g.de}</p>
                <p>{g[L]}</p>
                <p className="text-sm text-muted">{g.why[L]}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-bold text-warn">{UI.warn[L]}</p>
        </section>
      )}

      {tab === "notes" && (
        <section>
          <p className="mb-3 text-muted">{UI.notesHelp[L]}</p>
          <form
            className="mb-4 grid gap-2 rounded-card border border-line bg-surface p-4"
            onSubmit={(e) => {
              e.preventDefault();
              addNote();
            }}
          >
            <input
              className="min-h-11 rounded-lg border border-line bg-bg px-3"
              placeholder={UI.noteTitle[L]}
              value={draftTitle}
              onChange={(e) => setDraftTitle(e.target.value)}
            />
            <textarea
              className="min-h-24 rounded-lg border border-line bg-bg p-3"
              placeholder={UI.noteBody[L]}
              value={draftBody}
              onChange={(e) => setDraftBody(e.target.value)}
            />
            <button className="min-h-12 rounded-card bg-primary font-bold text-primary-fg" type="submit">
              {UI.add[L]}
            </button>
            <label className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-card border border-line font-bold">
              {UI.photoAdd[L]}
              <input
                type="file"
                accept="image/*"
                capture="environment"
                className="sr-only"
                onChange={(e) => onPhoto(e.target.files?.[0])}
              />
            </label>
            {photoError && <p className="text-sm font-bold text-warn">{photoError}</p>}
          </form>
          {s.notes.length === 0 && <p className="text-muted">{UI.noNotes[L]}</p>}
          <ul className="grid gap-3">
            {s.notes.map((n) => (
              <li key={n.id} className="rounded-card border border-line bg-surface p-4">
                <p className="font-bold">{n.title}</p>
                {n.body && <p className="mt-1 whitespace-pre-wrap">{n.body}</p>}
                {n.image && <img src={n.image} alt="" className="mt-2 max-h-48 rounded-lg" />}
                <button
                  className="mt-2 font-bold text-warn"
                  onClick={() => patch({ notes: s.notes.filter((x) => x.id !== n.id) })}
                >
                  {UI.del[L]}
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {tab === "help" && (
        <section>
          <CityBar city={city} L={L} onChange={() => { setTab("home"); setPicking(true); }} />
          <p className="mb-4">{UI.helpText[L]}</p>
          <FrameButton className="mb-3 bg-primary text-primary-fg" title={`${UI.advice[L]} · ${city.name}`} url={adviceSearch(city)} onOpen={openFrame} />
          <FrameButton className="border border-line bg-surface" title={UI.site[L]} url={citySiteSearch(city)} onOpen={openFrame} />
          <Settings s={s} patch={patch} L={L} />
          <p className="mt-4 text-sm text-muted">{UI.disclaimer[L]} {UI.warn[L]}</p>
        </section>
      )}

      {picking && (
        <div className="fixed inset-0 z-30 flex justify-center bg-bg" role="dialog" aria-modal>
          <div className="flex h-full w-full max-w-xl flex-col">
            <div className="sticky top-0 z-10 border-b border-line bg-bg px-4 pb-3 pt-4">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-bold">{UI.city[L]}</h2>
                <button className="min-h-11 font-bold text-primary" onClick={() => setPicking(false)}>
                  {UI.back[L]}
                </button>
              </div>
              <div className="relative mb-2">
                <Search className="pointer-events-none absolute start-3 top-3 size-5 text-muted" aria-hidden />
                <input
                  autoFocus
                  className="min-h-12 w-full rounded-card border border-line bg-surface ps-10 pe-3"
                  placeholder={UI.pickCity[L]}
                  value={cityQuery}
                  onChange={(e) => setCityQuery(e.target.value)}
                />
              </div>
              <label className="block text-sm">
                {UI.kreis[L]}
                <select className="mt-1 min-h-11 w-full rounded-card border border-line bg-surface px-3" value={kreis} onChange={(e) => setKreis(e.target.value)}>
                  <option value="all">{UI.all[L]}</option>
                  {kreise.map((k) => (
                    <option key={k} value={k}>{k}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="flex-1 overflow-auto px-4 py-3">
              {filtered.length === 0 && <p>{UI.empty[L]}</p>}
              <ul className="grid gap-2">
                {filtered.map((c) => (
                  <li key={c.name + c.plz}>
                    <button
                      className="w-full rounded-card border border-line bg-surface px-4 py-3 text-start"
                      onClick={() => {
                        patch({ cityName: c.name });
                        setPicking(false);
                        setCityQuery("");
                      }}
                    >
                      <span className="font-bold">{c.name}</span>
                      <span className="block text-sm text-muted">PLZ {c.plz} · {c.kreis}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {frame && (
        <div className="fixed inset-0 z-40 flex flex-col bg-bg pt-safe">
          <div className="flex items-center gap-3 border-b border-line px-3 py-2">
            <button className="min-h-11 shrink-0 font-bold text-primary" onClick={() => setFrame(null)}>
              {UI.back[L]}
            </button>
            <p className="min-w-0 flex-1 truncate text-sm font-bold">{frame.title}</p>
          </div>
          <div className="h-1 bg-line" aria-hidden>
            {frameLoading && <div className="h-1 w-1/3 animate-load bg-primary" />}
          </div>
          <p className="px-3 py-1 text-sm text-muted">{UI.frameNote[L]}</p>
          <iframe
            className="min-h-0 w-full flex-1 border-0 bg-surface"
            title={frame.title}
            src={frame.url}
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads"
            onLoad={() => setFrameLoading(false)}
          />
        </div>
      )}

      <nav className="fixed inset-x-0 bottom-0 z-10 border-t border-line bg-surface pb-safe">
        <ul className="mx-auto grid max-w-xl grid-cols-4">
          <NavBtn active={tab === "home"} onClick={() => setTab("home")} label={UI.home[L]} icon={<Home className="size-5" />} />
          <NavBtn active={tab === "letter"} onClick={() => setTab("letter")} label={UI.letter[L]} icon={<BookOpen className="size-5" />} />
          <NavBtn active={tab === "notes"} onClick={() => setTab("notes")} label={UI.notes[L]} icon={<FolderOpen className="size-5" />} />
          <NavBtn active={tab === "help"} onClick={() => setTab("help")} label={UI.help[L]} icon={<LifeBuoy className="size-5" />} />
        </ul>
      </nav>
    </div>
  );
}

function FrameButton({
  title,
  url,
  onOpen,
  className,
}: {
  title: string;
  url: string;
  onOpen: (v: { url: string; title: string }) => void;
  className: string;
}) {
  return (
    <button
      type="button"
      className={`inline-flex min-h-12 w-full items-center justify-center rounded-card px-4 font-bold ${className}`}
      onClick={() => onOpen({ url, title })}
    >
      {title}
    </button>
  );
}

function labelFor(tab: Tab, L: Lang) {
  if (tab === "letter") return UI.letterTitle[L];
  if (tab === "notes") return UI.notes[L];
  if (tab === "help") return UI.help[L];
  return UI.app[L];
}

function CityBar({ city, L, onChange }: { city: City; L: Lang; onChange: () => void }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3 rounded-card bg-soft px-4 py-3">
      <div>
        <p className="text-sm text-muted">{UI.city[L]}</p>
        <p className="font-bold">{city.name}</p>
        <p className="text-sm">PLZ {city.plz}</p>
      </div>
      <button className="min-h-11 font-bold text-primary" onClick={onChange}>
        {UI.change[L]}
      </button>
    </div>
  );
}

function Settings({ s, patch, L }: { s: Saved; patch: (p: Partial<Saved>) => void; L: Lang }) {
  return (
    <div className="mt-6 rounded-card border border-line bg-surface p-4">
      <p className="mb-2 font-bold">{UI.size[L]}</p>
      <div className="mb-4 flex gap-2">
        {(["sm", "md", "lg"] as Size[]).map((size) => (
          <button
            key={size}
            className={`min-h-11 flex-1 rounded-lg border font-bold ${s.size === size ? "border-primary bg-primary text-primary-fg" : "border-line"}`}
            onClick={() => patch({ size })}
          >
            {size === "sm" ? "A" : size === "md" ? "A+" : "A++"}
          </button>
        ))}
      </div>
      <p className="mb-2 font-bold">{UI.theme[L]}</p>
      <div className="flex gap-2">
        <button className={`inline-flex min-h-11 flex-1 items-center justify-center gap-1 rounded-lg border font-bold ${s.theme === "light" ? "border-primary bg-primary text-primary-fg" : "border-line"}`} onClick={() => patch({ theme: "light" })}>
          <Sun className="size-4" aria-hidden /> {UI.light[L]}
        </button>
        <button className={`inline-flex min-h-11 flex-1 items-center justify-center gap-1 rounded-lg border font-bold ${s.theme === "dark" ? "border-primary bg-primary text-primary-fg" : "border-line"}`} onClick={() => patch({ theme: "dark" })}>
          <Moon className="size-4" aria-hidden /> {UI.dark[L]}
        </button>
        <button className={`inline-flex min-h-11 flex-1 items-center justify-center gap-1 rounded-lg border font-bold ${s.theme === "contrast" ? "border-primary bg-primary text-primary-fg" : "border-line"}`} onClick={() => patch({ theme: "contrast" })}>
          <Contrast className="size-4" aria-hidden /> {UI.contrast[L]}
        </button>
      </div>
    </div>
  );
}

function NavBtn({ active, onClick, label, icon }: { active: boolean; onClick: () => void; label: string; icon: ReactNode }) {
  return (
    <li>
      <button
        className={`flex min-h-16 w-full flex-col items-center justify-center gap-1 text-xs font-bold ${active ? "text-primary" : "text-muted"}`}
        onClick={onClick}
      >
        {icon}
        {label}
      </button>
    </li>
  );
}
