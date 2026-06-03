import { Button } from "./Button";

export function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="최수호 포트폴리오 첫 화면으로 이동">
          최수호
        </a>
        <nav className="nav" aria-label="주요 메뉴">
          <a href="#work">작업</a>
          <a href="#tools">사용 도구</a>
          <Button variant="weak" href="/files/resume.pdf" target="_blank" rel="noreferrer">
            이력서
          </Button>
        </nav>
      </div>
    </header>
  );
}
