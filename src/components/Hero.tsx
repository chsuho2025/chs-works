import { Badge } from "./Badge";
import { Button } from "./Button";

const tools = ["Premiere Pro", "After Effects", "Photoshop", "ElevenLabs"];

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="page-shell hero-grid">
        <div className="hero-copy">
          <Badge>Portfolio</Badge>
          <div>
            <p className="hero-name">최수호</p>
            <p className="hero-role">영상 콘텐츠 제작자</p>
          </div>
          <h1 className="text-display">서비스와 기능을<br />쉽게 이해되는 영상으로 만듭니다.</h1>
          <p className="text-body hero-description">
            카카오엔터테인먼트에서 숏폼 콘텐츠와 제작 가이드를 만들었고, 사내 해커톤에서는 서비스 데모 영상을 제작해 우수상을 받았습니다.
          </p>
          <div className="button-row">
            <Button href="#work">작업 보기</Button>
            <Button variant="weak" href="/files/resume.pdf" target="_blank" rel="noreferrer">
              이력서 열기
            </Button>
          </div>
          <div className="badge-row">
            {tools.map((tool) => (
              <Badge key={tool}>{tool}</Badge>
            ))}
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
