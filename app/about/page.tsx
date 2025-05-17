import { AboutTimeline } from "@/components/about-timeline";
import { PageTransition } from "@/components/page-transition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedBackground } from "@/components/animated-background";
import { TypewriterEffect } from "@/components/typewriter-effect";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="relative">
        <AnimatedBackground className="-z-10" />
        <div className="container mx-auto py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <h1 className="mb-2 text-3xl sm:text-4xl font-bold tracking-tight">
            關於我
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6">
            <TypewriterEffect
              words={[
                "Discord Bot 開發者",
                "跨平台行動應用程式開發者",
                "網站愛好者",
                "我寫不下去了 (｡A｡)",
              ]}
              typingSpeed={70}
              deletingSpeed={40}
              delayBetweenWords={2000}
            />
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 mb-12 md:mb-16">
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-4 md:space-y-6">
                <div className="text-white p-6 rounded-lg text-center max-w-sm w-full">
                  <img
                    src="/avatar.png"
                    className="w-32 h-32 mx-auto rounded-full"
                    alt="Avatar"
                  />
                  <h3 className="text-foreground text-2xl font-bold mt-4">
                    鰻頭
                  </h3>
                  <p className="text-sm text-gray-400">喜愛探索未知的事物</p>

                  <div className="flex justify-center gap-4 mt-4">
                    <div className="flex justify-center gap-4 mt-4">
                      {/* GitHub */}
                      <a
                        href="https://github.com/Mantouisyummy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <FaGithub className="h-5 w-5" />
                        </Button>
                      </a>

                      {/* Discord */}
                      <a
                        href="https://discord.com/users/549056425943629825"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <FaDiscord className="h-5 w-5" />
                        </Button>
                      </a>

                      {/* Email */}
                      <a
                        href="mailto:me@mantou.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <MailIcon className="h-5 w-5" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6 md:mb-8">
                  <TabsTrigger value="about">關於我</TabsTrigger>
                  <TabsTrigger value="experience">工作歷程</TabsTrigger>
                  <TabsTrigger value="education">開發歷程</TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="space-y-4 md:space-y-6">
                  <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
                    <h2 className="text-xl sm:text-2xl font-bold">
                      嗨嗨！我是鰻頭 (ﾉ&gt;ω&lt;)ﾉ
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                      是一位熱愛寫程式的準大學生 (ゝ∀･)
                    </p>

                    <p>
                      我喜歡鑽研各種新奇技術，也超愛玩遊戲，特別熱衷於槍戰和格鬥類型
                      (／・ω・)／
                    </p>

                    <p>
                      擅長多種程式語言與框架，主要開發跨平台行動
                      App、網站、後端服務及各類專案，偶爾也會寫寫 Discord Bot 🤖
                    </p>

                    <p>
                      我享受把腦中的靈感化為實際作品，挑戰未知、學習新東西對我來說超有成就感！(｀・ω・´)b
                    </p>

                    <h3 className="text-lg sm:text-xl font-semibold mt-6 md:mt-8">
                      我的開發方向
                    </h3>

                    <p>
                      目前正積極提升自己在前端與後端開發、UI
                      設計和系統整合方面的能力。我的目標是成為一位能獨立完成整個產品開發流程的全能型開發者
                      💪🌟
                    </p>

                    <p>以下是我開發時注重的幾個原則：</p>

                    <ul>
                      <li>
                        <strong>實作導向：</strong> 喜歡用 Side Project
                        將想法落實成具體產品。
                      </li>
                      <li>
                        <strong>技術廣度與深度：</strong>{" "}
                        不僅跨平台，還注重系統穩定與效能。
                      </li>
                      <li>
                        <strong>使用者體驗：</strong>{" "}
                        在技術與設計之間尋找最佳平衡。
                      </li>
                      <li>
                        <strong>持續學習：</strong>{" "}
                        保持對新技術的好奇與實踐動力。
                      </li>
                    </ul>

                    <h3 className="text-lg sm:text-xl font-semibold mt-6 md:mt-8">
                      除了寫程式
                    </h3>

                    <p>
                      平時我也喜歡玩各種遊戲
                      🎮，特別愛和朋友組隊挑戰對戰類型的遊戲。除了遊戲，也喜歡看動漫、嘗試未知的事物
                      ✨
                    </p>

                    <p>歡迎找我一起討論技術、交流想法！</p>
                  </div>
                </TabsContent>

                <TabsContent value="experience">
                  <AboutTimeline
                    items={[
                      {
                        title: "管理員",
                        company: "Yeecord",
                        period: "2019 - 現在",
                        description:
                          "在Yeecord擔任小幫手，主要負責群組管理、RPG相關事務。",
                        technologies: ["Yeecord", "Helper", "Discord Bot"],
                      },
                      {
                        title: "Valki 開發者",
                        company: "Valki",
                        period: "2024 - 2025",
                        description:
                          "透過撰寫跨平台的手機應用程式，來即時查看特戰英豪商城、戰績、造型庫等資訊，且支援即時選角等眾多豐富功能。",
                        technologies: ["特戰英豪", "Flutter"],
                      },
                    ]}
                  />
                </TabsContent>

                <TabsContent value="education">
                  <AboutTimeline
                    items={[
                      {
                        title: "技術支援",
                        company: "DGS弦樂式",
                        period: "2023 - 現在",
                        description:
                          "協助並解決 DGS弦樂式 機器人的技術問題和提供技術指導。",
                        technologies: ["Discord Bot", "Python", "Music"],
                      },
                      {
                        title: "技術支援",
                        company: "Task Manager",
                        period: "2023 - 現在",
                        description:
                          "協助並解決 Task Manager 機器人的技術問題和提供技術指導。",
                        technologies: ["Discord Bot", "Python"],
                      },
                      {
                        title: "DiscordHub 開發者",
                        company: "DiscordHub",
                        period: "2025 - 現在",
                        description:
                          "專為中文使用者打造的 Discord 伺服器 & 機器人列表。",
                        technologies: ["Discord", "Bot List", "Server List"],
                      },
                    ]}
                  />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
