import { Button } from "./Button";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="page-shell hero-grid">
        <div className="hero-copy">
          <p className="hero-role">영상 콘텐츠 제작자</p>
          <h1 className="text-display">최수호</h1>
          <div className="hero-description-stack">
            <p className="text-body hero-description">
              카카오엔터테인먼트에서 숏폼 콘텐츠 제작 및 제작 가이드 업무를 수행했습니다.
            </p>
            <p className="text-body hero-description">
              사내 해커톤에서는 서비스 데모 영상을 제작해 우수상(3위)을 수상했습니다.
            </p>
          </div>
          <div className="button-row">
            <Button href="#work">프로젝트 보기</Button>
            <Button variant="weak" href="/files/resume.pdf" target="_blank" rel="noreferrer">
              이력서 보기
            </Button>
          </div>
        </div>

        <a className="hero-media" href="#work" aria-label="해커톤 데모 영상으로 이동">
          <img src="/images/hero-thumbnail.png" alt="카카오엔터테인먼트 사내 해커톤 데모 영상 썸네일" />
          <span className="play-button" aria-hidden="true">▶</span>
        </a>
      </div>
    </section>
  );
}
