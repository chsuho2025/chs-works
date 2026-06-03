import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectSection } from "@/components/ProjectSection";
import { Button } from "@/components/Button";
import { ListRow } from "@/components/ListRow";

const layoutImages = [
  {
    src: "/images/layout-guide-01.png",
    title: "시안 1",
    caption: "제목 영역과 자막 영역을 분리한 화면 구성",
  },
  {
    src: "/images/layout-guide-02.png",
    title: "시안 2",
    caption: "핵심 정보를 중앙에 배치한 화면 구성",
  },
  {
    src: "/images/layout-guide-final.png",
    title: "최종안",
    caption: "자막, 제목, 안전 영역을 기준화한 최종 가이드",
  },
];

const aiImages = [
  {
    src: "/images/ai-disclosure-01.png",
    title: "시안 1",
    caption: "콘텐츠 시작 지점에 AI 사용 여부를 고지하는 방식",
  },
  {
    src: "/images/ai-disclosure-02.png",
    title: "시안 2",
    caption: "화면 내 정보 영역에 고지를 함께 노출하는 방식",
  },
  {
    src: "/images/ai-disclosure-final.png",
    title: "최종안",
    caption: "가독성과 시청 흐름을 함께 고려한 최종 가이드",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <ProjectSection
          id="work"
          index="01"
          eyebrow="Demo Video"
          title="카카오엔터테인먼트 사내 해커톤 데모 영상"
          description="서비스 기능을 짧은 영상으로 설명한 해커톤 프로젝트입니다."
          tags={["우수상(3위)", "3인 팀", "1분 영상"]}
          outcome="팬 활동 이력을 요약해 아티스트에게 제공하는 기능 제안"
          videoSrc="/videos/hackathon-demo.mp4"
          posterSrc="/images/hero-thumbnail.png"
          paragraphs={[]}
          meta={[
            ["프로젝트", "팬 활동 이력을 요약해 아티스트에게 제공하는 기능 제안"],
            ["담당 업무", "서비스 데모 영상 제작, 화면 녹화 제작, 화면 캡처 제작, 클릭 모션 제작, TTS 제작 및 보정, BGM 편집, 최종 영상 편집"],
            ["사용 도구", "Premiere Pro, After Effects, ElevenLabs"],
          ]}
          badges={[
            "서비스 데모 영상 제작",
            "화면 녹화",
            "화면 캡처",
            "클릭 모션",
            "TTS 제작 및 보정",
            "BGM 편집",
            "최종 영상 편집",
          ]}
          rows={[
            ["담당 업무", "서비스 데모 영상 제작, 화면 녹화 제작, 화면 캡처 제작, 클릭 모션 제작, TTS 제작 및 보정, BGM 편집, 최종 영상 편집"],
            ["사용 도구", "Premiere Pro, After Effects, ElevenLabs"],
          ]}
        />

        <ProjectSection
          id="layout-guide"
          index="02"
          eyebrow="Layout Guide"
          title="숏폼 콘텐츠 레이아웃 가이드"
          description="숏폼 콘텐츠 제작에 활용하기 위한 화면 구성 가이드입니다."
          tags={["카카오엔터테인먼트", "가이드 제작"]}
          outcome="숏폼 콘텐츠 제작에 활용하기 위한 화면 구성 가이드 제작"
          paragraphs={[]}
          gridItems={layoutImages}
          meta={[
            ["프로젝트", "숏폼 콘텐츠 제작에 활용하기 위한 화면 구성 가이드 제작"],
            ["담당 업무", "레이아웃 시안 제작, 최종 가이드 정리, 팀 의견 반영"],
            ["고려 요소", "자막 영역, 제목 영역, 안전 영역, 정보 우선순위"],
          ]}
          badges={["레이아웃 시안 제작", "최종 가이드 정리", "팀 의견 반영"]}
          rows={[
            ["담당 업무", "레이아웃 시안 제작, 최종 가이드 정리, 팀 의견 반영"],
            ["고려 요소", "자막 영역, 제목 영역, 안전 영역, 정보 우선순위"],
          ]}
        />

        <ProjectSection
          id="ai-disclosure"
          index="03"
          eyebrow="AI Disclosure"
          title="생성형 AI 사용 고지 가이드"
          description="생성형 AI 활용 콘텐츠의 고지 방식을 검토한 가이드입니다."
          tags={["카카오엔터테인먼트", "가이드 제작"]}
          outcome="생성형 AI 활용 콘텐츠의 고지 방식 검토 및 가이드 제작"
          paragraphs={[]}
          gridItems={aiImages}
          meta={[
            ["프로젝트", "생성형 AI 활용 콘텐츠의 고지 방식 검토 및 가이드 제작"],
            ["담당 업무", "시안 제작, 문구 검토, 위치 검토, 최종 가이드 정리"],
            ["고려 요소", "가독성, 시청 흐름, 정보 전달"],
          ]}
          badges={["시안 제작", "문구 검토", "위치 검토", "최종 가이드 정리"]}
          rows={[
            ["담당 업무", "시안 제작, 문구 검토, 위치 검토, 최종 가이드 정리"],
            ["고려 요소", "가독성, 시청 흐름, 정보 전달"],
          ]}
        />

        <section className="section" id="tools">
          <div className="page-shell narrow">
            <div className="list-header">
              <span className="section-index">Tools</span>
              <h2 className="text-title-1">사용 도구</h2>
            </div>
            <div className="row-list">
              <ListRow title="Video" body="Premiere Pro, After Effects, Photoshop" />
              <ListRow title="AI" body="ElevenLabs, ChatGPT, Gemini" />
            </div>
          </div>
        </section>

        <section className="section final-cta">
          <div className="page-shell narrow">
            <span className="section-index">Next</span>
            <h2 className="text-title-1">작업물 중심으로<br />간결하게 보여드렸습니다.</h2>
            <p className="text-body">자세한 경력 정보는 이력서에서 확인할 수 있습니다.</p>
            <div className="button-row">
              <Button href="#work">작업 다시 보기</Button>
              <Button variant="weak" href="/files/resume.pdf" target="_blank" rel="noreferrer">
                이력서 열기
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
