import { ContactCTA } from "@/components/ContactCTA";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectSection } from "@/components/ProjectSection";
import { Badge } from "@/components/Badge";
import { ListRow } from "@/components/ListRow";

const layoutImages = [
  {
    src: "/images/layout-guide-01.png",
    title: "시안 1",
    caption: "제목과 자막 영역을 분리한 구성",
  },
  {
    src: "/images/layout-guide-02.png",
    title: "시안 2",
    caption: "주요 정보를 중앙에 집중한 구성",
  },
  {
    src: "/images/layout-guide-final.png",
    title: "최종안",
    caption: "반복 제작에 적합하도록 정리한 레이아웃",
  },
];

const aiImages = [
  {
    src: "/images/ai-disclosure-01.png",
    title: "시안 1",
    caption: "콘텐츠 시작 지점에 고지하는 방식",
  },
  {
    src: "/images/ai-disclosure-02.png",
    title: "시안 2",
    caption: "화면 내 정보 영역에 함께 노출하는 방식",
  },
  {
    src: "/images/ai-disclosure-final.png",
    title: "최종안",
    caption: "시청 흐름을 해치지 않도록 정리한 고지 방식",
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
          title={"1분 안에 기능을 이해할 수 있는\n데모 영상을 만들었어요."}
          description="카카오엔터테인먼트 사내 해커톤에서 제작한 서비스 데모 영상입니다."
          videoSrc="/videos/hackathon-demo.mp4"
          posterSrc="/images/hero-thumbnail.png"
          paragraphs={[
            "팬의 활동 이력을 요약해 아티스트에게 보여주는 기능을 제안했습니다.",
            "아티스트가 기능을 처음 접해도 1분 안에 사용 흐름을 이해할 수 있도록 영상을 구성했습니다.",
            "3인 팀으로 참여했고, 최종 우수상(3위)을 수상했습니다.",
          ]}
          meta={[
            ["프로젝트", "카카오엔터테인먼트 사내 해커톤"],
            ["결과", "우수상(3위)"],
            ["팀 규모", "3인"],
            ["영상 길이", "약 1분"],
            ["역할", "서비스 흐름 정리, 데모 영상 제작"],
          ]}
          badges={[
            "서비스 흐름 정리",
            "화면 캡처",
            "화면 녹화",
            "클릭 모션 제작",
            "TTS 생성",
            "음성 톤 보정",
            "BGM 편집",
            "전체 영상 편집",
          ]}
          rows={[
            ["기능 설명 순서 정리", "처음 보는 사람도 기능 흐름을 따라갈 수 있도록 장면 순서를 먼저 정리했습니다."],
            ["화면 녹화와 클릭 모션 구성", "실제 사용 장면처럼 보이도록 화면 녹화와 버튼 클릭 모션을 제작했습니다."],
            ["TTS와 사운드 보정", "ElevenLabs로 내레이션을 만들고 Premiere Pro에서 톤과 속도를 보정했습니다."],
          ]}
          note="서비스 기능을 짧고 명확하게 설명하는 영상 구조를 만들기 위해 토스플레이스 유튜브 콘텐츠를 참고했습니다."
        />

        <ProjectSection
          id="layout-guide"
          index="02"
          eyebrow="Layout Guide"
          title={"작은 화면에서도\n정보가 잘 읽히게 만들었어요."}
          description="카카오엔터테인먼트 AI 서비스 기획팀에서 숏폼 콘텐츠 제작에 활용할 레이아웃 가이드를 만들었습니다."
          paragraphs={[
            "여러 시안을 먼저 제작한 뒤 팀의 의견을 받아 최종 가이드를 확정했습니다.",
            "모바일 화면에서 제목, 자막, 핵심 정보가 서로 방해하지 않도록 안전 영역과 정보 우선순위를 정리했습니다.",
          ]}
          gridItems={layoutImages}
          badges={["모바일 화면 가독성", "자막 안전 영역", "정보 우선순위", "반복 제작 가능성", "시선 흐름"]}
        />

        <ProjectSection
          id="ai-disclosure"
          index="03"
          eyebrow="AI Disclosure"
          title={"AI 사용 여부를\n자연스럽게 알 수 있게 만들었어요."}
          description="생성형 AI 활용 콘텐츠의 고지 방식을 검토하고 시안을 제작했습니다."
          paragraphs={[
            "시청 경험을 방해하지 않으면서도 AI 사용 여부는 명확하게 알 수 있도록 문구와 위치, 시각적 표현 방식을 비교했습니다.",
          ]}
          gridItems={aiImages}
          badges={["고지 문구의 명확성", "시청 흐름", "가독성", "표기 위치", "콘텐츠 톤과의 조화"]}
        />

        <section className="section">
          <div className="page-shell">
            <div className="list-header">
              <span className="section-index">Principles</span>
              <h2 className="text-title-1">콘텐츠를 만들 때<br />이 세 가지를 먼저 봅니다.</h2>
            </div>
            <div className="principle-grid">
              {[
                ["1", "쉽게 이해돼야 합니다.", "처음 보는 사람도 흐름을 따라갈 수 있도록 정보의 순서를 먼저 정리합니다."],
                ["2", "짧아야 합니다.", "불필요한 장면을 줄이고 핵심 기능과 메시지를 빠르게 보여줍니다."],
                ["3", "필요한 정보는 빠지면 안 됩니다.", "시청 경험을 방해하지 않으면서도 알아야 할 정보는 명확하게 전달합니다."],
              ].map(([num, title, body]) => (
                <article className="principle-card" key={title}>
                  <Badge>{num}</Badge>
                  <h3 className="text-title-3">{title}</h3>
                  <p className="text-body">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="tools">
          <div className="page-shell narrow">
            <div className="list-header">
              <span className="section-index">Tools</span>
              <h2 className="text-title-1">사용 도구</h2>
              <p className="text-body">기획부터 녹화, 내레이션, 편집까지 설명 영상 제작에 필요한 도구를 다룹니다.</p>
            </div>
            <div className="row-list">
              <ListRow title="Video" body="Premiere Pro, After Effects, Photoshop" />
              <ListRow title="AI" body="ElevenLabs, ChatGPT, Gemini" />
              <ListRow title="Production" body="화면 녹화, TTS 제작, 모션 제작, 자막 구성, BGM 편집, 가이드 제작" />
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
    </>
  );
}
