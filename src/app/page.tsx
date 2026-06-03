import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectSection } from "@/components/ProjectSection";
import { Button } from "@/components/Button";
import { ListRow } from "@/components/ListRow";

const layoutImages = [
  {
    src: "/images/layout-guide-01.png",
    title: "시안 1",
    caption: "제목·자막 영역을 분리해 읽는 순서를 분명히 한 시안",
  },
  {
    src: "/images/layout-guide-02.png",
    title: "시안 2",
    caption: "핵심 문구를 중앙에 모아 작은 화면 집중도를 높인 시안",
  },
  {
    src: "/images/layout-guide-final.png",
    title: "최종안",
    caption: "반복 제작자가 바로 적용할 수 있도록 안전 영역을 정리한 최종안",
  },
];

const aiImages = [
  {
    src: "/images/ai-disclosure-01.png",
    title: "시안 1",
    caption: "콘텐츠 시작 지점에서 AI 사용 여부를 먼저 안내하는 방식",
  },
  {
    src: "/images/ai-disclosure-02.png",
    title: "시안 2",
    caption: "본문 정보와 함께 배치해 시청 흐름을 유지하는 방식",
  },
  {
    src: "/images/ai-disclosure-final.png",
    title: "최종안",
    caption: "명확한 고지와 자연스러운 노출 사이의 균형을 맞춘 최종안",
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
          title={"처음 보는 기능도\n1분 안에 이해되도록 만들었습니다."}
          description="카카오엔터테인먼트 사내 해커톤 서비스 데모 영상"
          outcome="팬 활동 이력을 요약해 아티스트에게 보여주는 기능을, 사용 흐름 중심의 짧은 데모 영상으로 정리했습니다."
          videoSrc="/videos/hackathon-demo.mp4"
          posterSrc="/images/hero-thumbnail.png"
          paragraphs={[
            "기능 설명 순서를 먼저 정리하고, 화면 녹화·클릭 모션·TTS 내레이션·BGM을 조합해 실제 서비스 소개처럼 보이도록 편집했습니다.",
            "3인 팀 프로젝트로 참여했으며 최종 우수상(3위)을 수상했습니다.",
          ]}
          meta={[
            ["프로젝트", "사내 해커톤 데모 영상"],
            ["결과", "우수상(3위)"],
            ["영상 길이", "약 1분"],
            ["핵심 역할", "서비스 흐름 정리, 데모 영상 편집"],
          ]}
          badges={[
            "서비스 흐름 정리",
            "화면 녹화",
            "클릭 모션",
            "TTS 생성",
            "BGM 편집",
            "전체 편집",
          ]}
          rows={[
            ["문제", "기능 아이디어는 있었지만, 처음 보는 사람이 빠르게 이해할 수 있는 설명 구조가 필요했습니다."],
            ["접근", "사용자 화면 흐름을 기준으로 장면을 나누고 클릭 모션과 내레이션을 붙였습니다."],
            ["결과", "기능의 목적과 사용 흐름이 짧은 시간 안에 전달되는 데모 영상으로 완성했습니다."],
          ]}
        />

        <ProjectSection
          id="layout-guide"
          index="02"
          eyebrow="Layout Guide"
          title={"숏폼에서도\n정보가 먼저 읽히게 정리했습니다."}
          description="AI 서비스 기획팀 숏폼 콘텐츠 레이아웃 가이드"
          outcome="여러 제작자가 반복해서 써도 흔들리지 않도록 제목, 자막, 핵심 정보의 위치와 우선순위를 정리했습니다."
          paragraphs={[
            "시안 비교를 통해 모바일 화면에서 가장 먼저 보여야 하는 정보와 자막 안전 영역을 분리했습니다.",
          ]}
          gridItems={layoutImages}
          meta={[
            ["작업", "숏폼 레이아웃 가이드"],
            ["목표", "모바일 가독성 개선"],
            ["산출물", "시안 2종, 최종안"],
          ]}
          badges={["가독성", "안전 영역", "정보 우선순위", "반복 제작"]}
          rows={[
            ["문제", "작은 화면에서 제목, 자막, 정보 요소가 서로 경쟁해 핵심 메시지가 약해질 수 있었습니다."],
            ["접근", "영역을 나누고 정보 위계를 정해 제작자가 같은 기준으로 반복 제작할 수 있게 했습니다."],
          ]}
        />

        <ProjectSection
          id="ai-disclosure"
          index="03"
          eyebrow="AI Disclosure"
          title={"AI 사용 고지를\n시청 흐름 안에 넣었습니다."}
          description="생성형 AI 활용 콘텐츠 고지 방식 시안"
          outcome="AI 사용 여부는 분명히 알리되, 콘텐츠 몰입을 방해하지 않는 문구와 위치를 비교했습니다."
          paragraphs={[
            "고지 문구의 명확성, 화면 내 위치, 콘텐츠 톤과의 조화를 기준으로 시안을 비교하고 최종안을 정리했습니다.",
          ]}
          gridItems={aiImages}
          meta={[
            ["작업", "AI 사용 고지 가이드"],
            ["목표", "명확한 고지와 자연스러운 시청 경험"],
            ["산출물", "시안 2종, 최종안"],
          ]}
          badges={["명확성", "시청 흐름", "가독성", "표기 위치"]}
          rows={[
            ["문제", "AI 활용 여부를 숨기지 않으면서도 콘텐츠 첫인상을 무겁게 만들지 않는 방식이 필요했습니다."],
            ["접근", "고지 위치와 문구 길이를 비교해 시청 흐름 안에서 자연스럽게 읽히는 형태를 찾았습니다."],
          ]}
        />

        <section className="section" id="tools">
          <div className="page-shell narrow">
            <div className="list-header">
              <span className="section-index">Tools</span>
              <h2 className="text-title-1">사용 도구</h2>
              <p className="text-body">기획, 화면 녹화, 내레이션, 편집, 가이드 제작까지 설명 영상 제작에 필요한 흐름을 다룹니다.</p>
            </div>
            <div className="row-list">
              <ListRow title="Video" body="Premiere Pro, After Effects, Photoshop" />
              <ListRow title="AI" body="ElevenLabs, ChatGPT, Gemini" />
              <ListRow title="Production" body="화면 녹화, TTS 제작, 모션 제작, 자막 구성, BGM 편집, 가이드 제작" />
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
