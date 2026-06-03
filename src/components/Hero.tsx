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
          <h1 className="text-display">서비스와 기능을<br />이해하기 쉬운 영상으로 정리합니다.</h1>
          <p className="text-body hero-description">
            화면 흐름, 내레이션, 자막, 모션을 묶어 처음 보는 사람도 기능을 빠르게 이해하도록 만드는 데 집중합니다.
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
