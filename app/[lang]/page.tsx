import { AtSign } from "lucide-react";
import { ScrollMorph } from "@/components/animations/scroll-morph";
import { TextReveal } from "@/components/animations/text-reveal";
import { CoffeeModal } from "@/components/coffee-modal";
import { InstagramIcon } from "@/components/icons/instagram";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { SpotifyIcon } from "@/components/icons/spotify";
import { XIcon } from "@/components/icons/x";
import { PortraitCard } from "@/components/portrait-card";
import { Section } from "@/components/section";
import { SectionTimeline } from "@/components/section-timeline";
import { contact, socials } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { REVEAL_STAGGER } from "@/lib/timing";
import { notFound } from "next/navigation";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const { profile, hero, about, coffee } = dict;

  return (
    <div className="page mx-auto w-full max-w-7xl flex-1 px-6">
      {/*
        Three columns on desktop. DOM order is aside -> statement -> content so the
        mobile stack reads photo, statement, content; explicit col-start puts the
        content back in the middle at lg. Column 1 is the inline-start side, so the
        whole layout mirrors automatically when `dir` flips to ltr for English.
      */}
      <div className="page__grid grid gap-x-8 gap-y-10 lg:grid-cols-[14rem_minmax(0,1fr)_13rem] xl:gap-x-12 xl:grid-cols-[17rem_minmax(0,1fr)_17rem]">
        {/* ---------- inline-start: photo pinned, sections timeline below ---------- */}
        <aside
          id="portrait"
          className="page__rail page__rail--portrait portrait pt-12 lg:sticky lg:top-24 lg:col-start-1 lg:row-start-1 lg:self-start lg:grid lg:h-[calc(100dvh-7rem)] lg:grid-rows-[minmax(0,1fr)_auto] lg:gap-y-10 lg:pt-20"
        >
          <PortraitCard
            alt={profile.name}
            caption={profile.photoCaption}
            showLabel={dict.ui.showCaption}
            backLabel={dict.ui.backToPhoto}
            className="mx-auto aspect-[4/5] w-48 lg:mx-0 lg:row-start-1 lg:max-h-full lg:w-full lg:self-start"
          />
          {/* Timeline duplicates the mobile header nav, so desktop only. */}
          <div className="portrait__timeline mt-8 hidden lg:row-start-2 lg:mt-0 lg:block lg:self-end lg:border-t lg:border-border lg:pt-6">
            <SectionTimeline dict={dict} />
          </div>
        </aside>

        {/* ---------- inline-end: the statement, pinned ---------- */}
        <div
          id="statement"
          className="page__rail page__rail--statement statement lg:sticky lg:top-24 lg:col-start-3 lg:row-start-1 lg:self-start lg:pt-20"
        >
          <p
            className="statement__label wipe-line mb-4 text-xs tracking-[0.2em] text-muted-foreground"
            style={{ animationDelay: `calc(var(--reveal-start) + ${REVEAL_STAGGER.label}ms)` }}
          >
            [ {profile.role} ]
          </p>
          <TextReveal
            label={`${profile.statement.first} ${profile.statement.secondPrefix}${profile.statement.secondAccent}`}
            delay={REVEAL_STAGGER.title}
            className="statement__title text-4xl font-bold leading-[1.25] tracking-tight sm:text-5xl lg:text-[2rem] xl:text-[2.75rem]"
            lineClassName="statement__title-line"
            lines={[
              profile.statement.first,
              <>
                {profile.statement.secondPrefix}
                <span className="statement__accent text-brand-ink">
                  {profile.statement.secondAccent}
                </span>
              </>,
            ]}
          />
          <p
            className="statement__name wipe-line mt-6 text-sm text-muted-foreground"
            style={{ animationDelay: `calc(var(--reveal-start) + ${REVEAL_STAGGER.name}ms)` }}
          >
            {profile.name}
          </p>
        </div>

        {/* ---------- middle: everything that scrolls ---------- */}
        <div className="page__main lg:col-start-2 lg:row-start-1">
          <section id="home" className="section section--home hero scroll-mt-24 pb-4 lg:pt-20">
            <ScrollMorph className="hero__intro-wrap">
              <p className="hero__intro max-w-xl text-lg leading-relaxed text-muted-foreground">
                {profile.intro}
              </p>
            </ScrollMorph>

            <ScrollMorph delay={90} className="hero__actions mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="hero__action hero__action--primary button button--brand rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {hero.primaryCta}
              </a>
              <a
                href="#about"
                className="hero__action hero__action--secondary button button--outline rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {hero.secondaryCta}
              </a>
            </ScrollMorph>

            <ScrollMorph delay={180} className="mt-12">
              <dl
                id="stats"
                className="stats grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border"
              >
                {hero.stats.map((s) => (
                  <div key={s.label} className="stats__item bg-background p-5">
                    <dt className="stats__value text-xl font-bold tracking-tight">{s.value}</dt>
                    <dd className="stats__label mt-1 text-xs text-muted-foreground">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </ScrollMorph>
          </section>

          <Section id="about" label={dict.sections.about} title={about.title}>
            <p className="about__bio text-muted-foreground">{about.bio}</p>

            <h3 className="section__subhead mt-14 mb-6 text-xs tracking-[0.2em] text-muted-foreground">
              [ {about.experienceLabel} ]
            </h3>
            <div className="experience">
              {about.experience.map((job) => (
                <article
                  key={job.company}
                  className="experience__item rounded-xl border border-border bg-card p-6"
                >
                  <div className="experience__head flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="experience__company text-lg font-bold">
                      {job.company}
                      <span className="experience__place ms-2 text-sm font-normal text-muted-foreground">
                        {job.place}
                      </span>
                    </h4>
                    <span className="experience__period text-sm text-muted-foreground">
                      {job.period}
                    </span>
                  </div>
                  <p className="experience__role mt-1 text-sm font-semibold text-brand-ink">
                    {job.role}
                  </p>
                  <ul className="experience__list mt-4 space-y-2">
                    {job.points.map((p) => (
                      <li key={p} className="experience__point flex gap-3 text-sm text-muted-foreground">
                        <span aria-hidden className="experience__bullet mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <h3 className="section__subhead mt-14 mb-6 text-xs tracking-[0.2em] text-muted-foreground">
              [ {about.skillsLabel} ]
            </h3>
            <div className="skills grid gap-4 sm:grid-cols-2">
              {about.skills.map((s) => (
                <div key={s.group} className="skills__group rounded-xl border border-border p-5">
                  <p className="skills__group-title mb-3 text-sm font-semibold">{s.group}</p>
                  <ul className="skills__list flex flex-wrap gap-2">
                    {s.items.map((i) => (
                      <li key={i} className="skills__item tag rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className="section__subhead mt-14 mb-6 text-xs tracking-[0.2em] text-muted-foreground">
              [ {about.educationLabel} ]
            </h3>
            <div className="education space-y-4">
              {about.education.map((e) => (
                <article key={e.degree} className="education__item rounded-xl border border-border p-6">
                  <div className="education__head flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="education__degree font-bold">{e.degree}</h4>
                    <span className="education__period text-sm text-muted-foreground">{e.period}</span>
                  </div>
                  <p className="education__school mt-1 text-sm text-muted-foreground">{e.school}</p>
                  <ul className="education__list mt-3 flex flex-wrap gap-2">
                    {e.points.map((p) => (
                      <li key={p} className="education__course tag rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Section>

          <Section id="contact" label={dict.sections.contact} title={dict.contact.title}>
            <p className="contact__intro mb-8 text-muted-foreground">{dict.contact.intro}</p>
            <ul className="contact__list grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              {[
                { key: "email", label: dict.contact.emailLabel, value: contact.email, href: `mailto:${contact.email}`, Icon: AtSign },
                { key: "linkedin", label: dict.contact.linkedinLabel, value: contact.linkedinHandle, href: contact.linkedin, Icon: LinkedinIcon },
              ].map((c) => (
                <li key={c.key} className={`contact__item contact__item--${c.key} bg-background`}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                    className="contact__link block h-full p-5 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                  >
                    <span className="contact__label text-xs text-muted-foreground">{c.label}</span>
                    <span dir="ltr" className="contact__value mt-1 flex items-center gap-2 text-sm font-semibold">
                      <c.Icon aria-hidden className="contact__icon size-4 shrink-0 text-brand-ink" />
                      {/* min-w-0 so truncate still works inside the flex row. */}
                      <span className="min-w-0 truncate">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="coffee" label={dict.sections.coffee}>
            <div className="coffee__card rounded-2xl border border-border bg-card p-8 sm:p-10">
              <h2 className="coffee__title text-3xl font-bold tracking-tight">
                {coffee.title.prefix}
                <span className="coffee__accent text-brand-ink">{coffee.title.accent}</span>
              </h2>
              <p className="coffee__text mt-4 text-muted-foreground">{coffee.text}</p>
              <CoffeeModal dict={dict} />
            </div>
          </Section>

          <footer
            id="site-footer"
            className="site-footer flex flex-col items-start gap-4 border-t border-border py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="site-footer__credit">
              © {contact.handle} — {dict.footer}
            </p>
            {/* 44px targets around 18px icons; the negative margin lines the glyphs up
                with the text edge instead of the invisible hit area. */}
            <ul aria-label={dict.socials.label} className="site-footer__socials -ms-3 flex items-center sm:ms-0 sm:-me-3">
              {(
                [
                  { key: "x", Icon: XIcon },
                  { key: "instagram", Icon: InstagramIcon },
                  { key: "spotify", Icon: SpotifyIcon },
                ] as const
              ).map(({ key, Icon }) => (
                <li key={key} className="site-footer__social-item">
                  <a
                    href={socials[key]}
                    target="_blank"
                    rel="me noreferrer"
                    aria-label={dict.socials[key]}
                    className={`site-footer__social site-footer__social--${key} inline-flex size-11 items-center justify-center rounded-lg transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`}
                  >
                    <Icon className="site-footer__icon size-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );
}
