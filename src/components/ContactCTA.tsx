import { Button } from "./Button";

export function ContactCTA() {
  return (
    <section className="section contact-section" id="contact">
      <div className="page-shell">
        <div className="contact-card">
          <span className="section-index">Contact</span>
          <h2 className="text-title-1">서비스와 기능을<br />쉽게 이해되는 영상으로 만들고 싶습니다.</h2>
          <p className="text-body">Email<br /><strong>chsuho2025@gmail.com</strong></p>
          <div className="button-row centered">
            <Button href="mailto:chsuho2025@gmail.com">메일 보내기</Button>
            <Button variant="weak" href="/files/resume.pdf" target="_blank" rel="noreferrer">
              이력서 열기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
