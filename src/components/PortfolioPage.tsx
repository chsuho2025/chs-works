"use client";

import { useEffect, useMemo, useState } from "react";

type Project = {
  id: string;
  type: "video" | "image";
  typeLabel: string;
  title: string;
  period: string;
  desc: string;
  tools: string[];
  role: string;
  overview: string;
  deliverables: string[];
  media: string;
  poster?: string;
  gallery: { label: string; src: string }[];
};

const projects: Project[] = [
  {
    id: "hackathon",
    type: "video",
    typeLabel: "데모 영상",
    title: "카카오엔터테인먼트 사내 해커톤 데모 영상",
    period: "Hackathon · 우수상(3위)",
    desc: "팬 활동 이력을 요약해 아티스트에게 제공하는 기능을 1분 안에 이해되도록 정리한 서비스 데모 영상입니다.",
    tools: ["Premiere Pro", "After Effects", "ElevenLabs"],
    role: "서비스 데모 영상 제작 · 화면 녹화 · 클릭 모션 · TTS 제작 및 보정 · BGM 편집 · 최종 영상 편집",
    overview:
      "3인 팀으로 참여한 사내 해커톤 프로젝트입니다. 기능의 핵심 흐름을 먼저 정리하고, 화면 녹화와 클릭 모션, 내레이션, BGM을 조합해 처음 보는 사람도 서비스 사용 흐름을 빠르게 이해할 수 있도록 구성했습니다.",
    deliverables: ["약 1분 서비스 데모 영상", "화면 녹화 및 캡처 소스", "클릭 모션과 TTS 내레이션", "최종 편집본"],
    media: "/videos/hackathon-demo.mp4",
    poster: "/images/hero-thumbnail.png",
    gallery: [
      { label: "데모 영상 썸네일", src: "/images/hero-thumbnail.png" },
      { label: "프로젝트 썸네일", src: "/images/project01-thumbnail.png" },
    ],
  },
  {
    id: "layout",
    type: "image",
    typeLabel: "가이드 제작",
    title: "숏폼 콘텐츠 레이아웃 가이드",
    period: "Kakao Entertainment",
    desc: "숏폼 콘텐츠 제작에 활용하기 위한 화면 구성 가이드입니다. 제목, 자막, 안전 영역, 정보 우선순위를 정리했습니다.",
    tools: ["Photoshop", "Premiere Pro"],
    role: "레이아웃 시안 제작 · 최종 가이드 정리 · 팀 의견 반영",
    overview:
      "반복 제작에 활용할 수 있도록 숏폼 화면 구성 기준을 정리했습니다. 여러 시안을 비교하며 자막 영역, 제목 영역, 안전 영역, 정보 우선순위가 작은 화면에서도 충돌하지 않도록 최종안을 구성했습니다.",
    deliverables: ["레이아웃 시안", "최종 가이드 이미지", "팀 피드백 반영안"],
    media: "/images/layout-guide-final.png",
    gallery: [
      { label: "시안 1", src: "/images/layout-guide-01.png" },
      { label: "시안 2", src: "/images/layout-guide-02.png" },
      { label: "최종안", src: "/images/layout-guide-final.png" },
    ],
  },
  {
    id: "ai-disclosure",
    type: "image",
    typeLabel: "가이드 제작",
    title: "생성형 AI 사용 고지 가이드",
    period: "Kakao Entertainment",
    desc: "생성형 AI 활용 콘텐츠의 고지 방식을 검토하고, 가독성과 시청 흐름을 고려해 최종 가이드로 정리했습니다.",
    tools: ["Photoshop", "ChatGPT", "Gemini"],
    role: "시안 제작 · 문구 검토 · 위치 검토 · 최종 가이드 정리",
    overview:
      "AI 사용 여부를 명확히 알리면서도 콘텐츠 시청 흐름을 방해하지 않는 방식을 검토했습니다. 고지 문구의 길이, 위치, 노출 시점을 비교해 가독성과 정보 전달이 균형을 이루는 최종안을 만들었습니다.",
    deliverables: ["AI 고지 시안", "문구 및 위치 검토안", "최종 가이드 이미지"],
    media: "/images/ai-disclosure-final.png",
    gallery: [
      { label: "시안 1", src: "/images/ai-disclosure-01.png" },
      { label: "시안 2", src: "/images/ai-disclosure-02.png" },
      { label: "최종안", src: "/images/ai-disclosure-final.png" },
    ],
  },
];

const careers = [
  {
    year: "카카오엔터테인먼트",
    role: "AI 서비스 기획팀",
    org: "숏폼 콘텐츠 제작 및 제작 가이드 업무",
    desc: "숏폼 콘텐츠 제작, 레이아웃 가이드, 생성형 AI 사용 고지 방식 검토 등 콘텐츠 제작 기준을 정리했습니다.",
  },
  {
    year: "사내 해커톤",
    role: "서비스 데모 영상 제작",
    org: "우수상(3위)",
    desc: "팬 활동 이력을 요약해 아티스트에게 제공하는 기능을 제안하고, 서비스 흐름을 설명하는 데모 영상을 제작했습니다.",
  },
];

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <circle cx="8.5" cy="9.5" r="1.6" fill="currentColor" stroke="none" />
      <path d="m4 17 5-5 4 4 3-3 4 4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12.5 9.5 18 20 6.5" />
    </svg>
  );
}

export function PortfolioPage() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const activeProject = useMemo(() => projects.find((project) => project.id === activeProjectId), [activeProjectId]);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          entry.target.querySelectorAll<HTMLElement>("[data-w]").forEach((bar) => {
            bar.style.width = bar.dataset.w ?? "0";
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    nodes.forEach((node, index) => {
      node.style.transitionDelay = `${Math.min(index % 4, 3) * 60}ms`;
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveProjectId(null);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <nav className="portfolio-nav">
        <div className="nav-in">
          <a href="#top" className="brand">
            <span className="dot" />
            최수호
          </a>
          <div className="nav-links">
            <a href="#work">프로젝트</a>
            <a href="#skills">스킬 · 툴</a>
            <a href="#career">경력</a>
            <a href="/files/resume.pdf" target="_blank" rel="noreferrer" className="nav-cta">
              이력서 보기
            </a>
          </div>
        </div>
      </nav>

      <header className="portfolio-hero" id="top">
        <div className="wrap">
          <span className="kicker reveal">
            <span className="pulse" />
            영상 콘텐츠 제작자
          </span>
          <h1 className="hero-title reveal">
            영상으로
            <br />
            핵심만 남깁니다.
          </h1>
          <p className="hero-sub reveal">
            카카오엔터테인먼트에서 숏폼 콘텐츠 제작 및 제작 가이드 업무를 수행했습니다. 사내 해커톤에서는 서비스 데모 영상을 제작해 우수상(3위)을
            수상했습니다.
          </p>
          <div className="hero-actions reveal">
            <a href="#work" className="hero-button primary">
              프로젝트 보기
            </a>
            <a href="/files/resume.pdf" target="_blank" rel="noreferrer" className="hero-button">
              이력서 보기
            </a>
          </div>
          <div className="hero-meta">
            <div className="item reveal">
              <div className="num">
                <b>3</b>
              </div>
              <div className="lab">대표 프로젝트</div>
            </div>
            <div className="item reveal">
              <div className="num">
                1<b>분</b>
              </div>
              <div className="lab">데모 영상 제작</div>
            </div>
            <div className="item reveal">
              <div className="num">
                <b>3</b>위
              </div>
              <div className="lab">사내 해커톤 우수상</div>
            </div>
          </div>
        </div>
      </header>

      <section id="work">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sec-tag">WORK</div>
            <h2 className="sec-title">프로젝트</h2>
            <p className="sec-desc">서비스와 콘텐츠의 핵심을 영상과 가이드로 정리한 작업입니다. 카드를 누르면 자세한 내용을 볼 수 있습니다.</p>
          </div>
          <div className="work-feed">
            {projects.map((project) => (
              <article className="card reveal" key={project.id} onClick={() => setActiveProjectId(project.id)}>
                <div className="thumb">
                  <div className="thumb-media">
                    {project.type === "video" ? (
                      <video src={project.media} poster={project.poster} muted playsInline preload="metadata" />
                    ) : (
                      <img src={project.media} alt={`${project.title} 대표 이미지`} />
                    )}
                    <div className="ph-icon">{project.type === "video" ? <PlayIcon /> : <ImageIcon />}</div>
                  </div>
                  <span className="badge-type">{project.typeLabel}</span>
                  <span className="ph-label">{project.type === "video" ? "영상 미리보기" : "이미지 미리보기"}</span>
                </div>
                <div className="card-body">
                  <div className="card-period">{project.period}</div>
                  <div className="card-title">{project.title}</div>
                  <div className="card-desc">{project.desc}</div>
                  <div className="card-foot">
                    <div className="tools">
                      {project.tools.map((tool) => (
                        <span className="tool" key={tool}>
                          {tool}
                        </span>
                      ))}
                    </div>
                    <span className="go">
                      <ArrowIcon />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sec-tag">SKILLS & TOOLS</div>
            <h2 className="sec-title">보유 스킬 · 툴</h2>
            <p className="sec-desc">영상 편집, 모션, AI 기반 제작 보조까지 작업 과정에서 직접 활용하는 도구입니다.</p>
          </div>
          <div className="skill-grid">
            {[
              ["Video", "영상 편집 · 모션", [["Premiere Pro", "92%"], ["After Effects", "84%"], ["Photoshop", "82%"]]],
              ["AI", "TTS · 기획 보조", [["ElevenLabs", "86%"], ["ChatGPT", "82%"], ["Gemini", "72%"]]],
              ["Production", "가이드 · 제작 정리", [["화면 녹화", "88%"], ["자막 구성", "86%"], ["가이드 제작", "84%"]]],
            ].map(([label, sub, items]) => (
              <div className="skill-card reveal" key={label as string}>
                <h3>{label as string}</h3>
                <div className="sk-sub">{sub as string}</div>
                <div className="sk-list">
                  {(items as string[][]).map(([name, width]) => (
                    <div className="sk-item" key={name}>
                      <span className="name">{name}</span>
                      <span className="sk-bar">
                        <i data-w={width} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="career">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sec-tag">CAREER</div>
            <h2 className="sec-title">경력 · 경험</h2>
            <p className="sec-desc">콘텐츠 제작과 서비스 설명 영상 작업으로 이어지는 경험입니다.</p>
          </div>
          <div className="timeline">
            {careers.map((career) => (
              <div className="tl-row reveal" key={`${career.year}-${career.role}`}>
                <div className="tl-year">{career.year}</div>
                <div>
                  <div className="tl-role">{career.role}</div>
                  <div className="tl-org">{career.org}</div>
                  <div className="tl-desc">{career.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="reveal">
            <div className="foot-cta">
              서비스와 기능을
              <br />
              <span className="muted">쉽게 이해되는 영상으로 만듭니다.</span>
            </div>
            <a href="/files/resume.pdf" target="_blank" rel="noreferrer" className="foot-mail">
              이력서 보기
            </a>
          </div>
          <div className="foot-bottom">
            <span>© 2026 최수호 · Video Content Portfolio</span>
            <div className="foot-links">
              <a href="#top">맨 위로</a>
              <a href="#work">프로젝트</a>
              <a href="#career">경력</a>
            </div>
          </div>
        </div>
      </footer>

      <div className={`modal-root${activeProject ? " open" : ""}`} aria-hidden={!activeProject}>
        <button className="modal-scrim" onClick={() => setActiveProjectId(null)} aria-label="닫기" />
        <div className="modal-sheet">
          <button className="modal-close" onClick={() => setActiveProjectId(null)} aria-label="닫기">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          {activeProject && (
            <div>
              <div className="modal-hero">
                {activeProject.type === "video" ? (
                  <video src={activeProject.media} poster={activeProject.poster} controls preload="metadata" />
                ) : (
                  <img src={activeProject.media} alt={`${activeProject.title} 대표 이미지`} />
                )}
                <span className="badge-type">{activeProject.typeLabel}</span>
              </div>
              <div className="modal-pad">
                <div className="m-period">{activeProject.period}</div>
                <h3 className="m-title">{activeProject.title}</h3>
                <div className="m-meta">
                  {activeProject.tools.map((tool) => (
                    <span className="tool" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="m-overview">{activeProject.overview}</p>

                <div className="m-block">
                  <h4>Role · 담당 역할</h4>
                  <div className="m-list">
                    <div className="li">
                      <span className="ck">
                        <CheckIcon />
                      </span>
                      <span>{activeProject.role}</span>
                    </div>
                  </div>
                </div>

                <div className="m-block">
                  <h4>Deliverables · 결과물</h4>
                  <div className="m-list">
                    {activeProject.deliverables.map((item) => (
                      <div className="li" key={item}>
                        <span className="ck">
                          <CheckIcon />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="m-block">
                  <h4>Preview · 미리보기</h4>
                  <div className="m-gallery">
                    {activeProject.gallery.map((item, index) => (
                      <figure className={`m-shot${index === activeProject.gallery.length - 1 ? " tall" : ""}`} key={item.src}>
                        <img src={item.src} alt={item.label} />
                        <figcaption>{item.label}</figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
