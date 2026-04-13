"use client";

import ConciergeHeader from "@/components/concierge/ConciergeHeader";
import ConciergeSidebar from "@/components/concierge/ConciergeSidebar";
import ChatComposer from "@/components/concierge/chat/ChatComposer";
import ChatMessageThread from "@/components/concierge/chat/ChatMessageThread";
import PeakSeasonAlertCard from "@/components/concierge/panels/PeakSeasonAlertCard";
import QuickActionsCard from "@/components/concierge/panels/QuickActionsCard";
import SmartMapCard from "@/components/concierge/panels/SmartMapCard";
import { useConciergeChat } from "@/hooks/useConciergeChat";

export default function ConciergePage() {
  const {
    messages,
    input,
    setInput,
    handleSend,
    messagesEndRef,
    sidebarNav,
    topNav,
    recommendations,
    quickActions,
  } = useConciergeChat();

  return (
    <div className="bg-surface font-body text-on-surface">
      <ConciergeSidebar navItems={sidebarNav} />

      <main className="ml-64 p-8 min-h-screen relative overflow-hidden">
        <ConciergeHeader topNav={topNav} />

        <div className="mb-12 relative z-10">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary">
            AI Trợ lý cá nhân
          </h1>
          <p className="text-on-surface-variant font-medium mt-1">
            Tinh chỉnh hành trình Kyoto của bạn bằng độ chính xác thông minh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-[calc(100vh-200px)] relative z-10">
          <div className="col-span-1 md:col-span-8 flex flex-col h-full bg-surface-container-low rounded-3xl p-6 relative overflow-hidden">
            <ChatMessageThread
              messages={messages}
              recommendations={recommendations}
              messagesEndRef={messagesEndRef}
            />
            <ChatComposer
              input={input}
              onInputChange={setInput}
              onSubmit={handleSend}
            />
          </div>

          <div className="hidden md:flex col-span-4 flex-col gap-6">
            <SmartMapCard />
            <PeakSeasonAlertCard />
            <QuickActionsCard actions={quickActions} />
          </div>
        </div>

        <div className="fixed top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
        <div className="fixed bottom-[-10%] left-0 w-[30vw] h-[30vw] bg-secondary-container/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
      </main>
    </div>
  );
}
