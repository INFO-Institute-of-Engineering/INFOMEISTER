'use client';

import { Bot, MessageCircle, Send, Sparkles, X } from 'lucide-react';
import { FormEvent, useState } from 'react';

type ChatMessage = {
  id: number;
  role: 'user' | 'assistant';
  text: string;
};

const quickQuestions = ['When is Trisquadathon 2.0?', 'How do I register?', 'Who is the president?'];

const initialMessage: ChatMessage = {
  id: 1,
  role: 'assistant',
  text: 'Hi, I am MIFI. Ask me about INFOMEISTER, events, teams, location, or technology.',
};

function getReply(question: string) {
  const normalizedQuestion = question.toLowerCase();

  if (normalizedQuestion.includes('president')) return 'The 2026 INFOMEISTER President is Srivarshini V. The 2025 President was Gururaja Y.';
  if (normalizedQuestion.includes('talkathon')) return 'Talkathon is scheduled for 21 August 2026.';
  if (normalizedQuestion.includes('location') || normalizedQuestion.includes('where')) return 'INFOMEISTER is based at Info Institute of Engineering, Coimbatore, Tamil Nadu.';
  if (normalizedQuestion.includes('dean') || normalizedQuestion.includes('academic')) return 'The 2026 Dean Academics is Dr. K. Baskaran.';
  if (normalizedQuestion.includes('event')) return 'Upcoming events include Talkathon, Trisquadathon 2.0 Coming Soon, Tech Talk, Seminar, Webinar, and Bootcamp.';
  if (normalizedQuestion.includes('trisquadathon') || normalizedQuestion.includes('when is trisquadathon')) return 'Trisquadathon 2.0 is happening on October 29, 2026! It will be bigger, better, and more competitive.';
  if (normalizedQuestion.includes('register') || normalizedQuestion.includes('registration')) return 'You can register for Trisquadathon 2.0 by clicking the solid cyan "Register Now" button in the Events section on our website!';
  if (normalizedQuestion.includes('contact') || normalizedQuestion.includes('email')) return 'You can contact INFOMEISTER at infomeistercse@gmail.com.';
  if (normalizedQuestion.includes('domain') || normalizedQuestion.includes('speciali') || normalizedQuestion.includes('technical pillar')) return 'INFOMEISTER covers six domains: AI & Machine Learning, Full-Stack Development, DevOps & Cloud, Product & Design, Data Engineering, and Cybersecurity.';
  if (normalizedQuestion.includes('staff') || normalizedQuestion.includes('hod') || normalizedQuestion.includes('head of department')) return 'The HoD is Dr. G. Selvavinayagam. 2026 staff coordinators are Mrs. Saranya A, Mrs. Gokila P, and Mr. Nagarasan M. In 2025, the coordinators were Mrs. Saranya A, Mrs. Saranya R, and Mr. Nagarasan M.';
  if (normalizedQuestion.includes('board') || normalizedQuestion.includes('executive')) return 'The 2026 Executive Board is led by President Srivarshini V and Vice President Ganga Sri S. The 2025 President was Gururaja Y and Vice President was Thamu S.';
  if (normalizedQuestion.includes('2025') || normalizedQuestion.includes('odd semester')) return 'The 2025 ODD Semester included Ex IoT, Java Gateway, AI Cloud, InfoMeister and Association Inaugurals, Engineers Day, UI/UX webinars, Hackathon, MOUs, industrial visits, OOP, Mock Hack, and NSS.';
  if (normalizedQuestion.includes('2026') || normalizedQuestion.includes('even semester')) return "The 2026 EVEN Semester included Connect & Design, SDP, Confidence Building, V-Guard BIS industrial visit, Alumni Meet, PUMO MOU, Bootcamp, NCASTM'26, Startup Seminar, VAC - II CSE, INFEST'26, NSS, Retract, and GDG.";
  if (normalizedQuestion.includes('academic year') || normalizedQuestion.includes('history') || normalizedQuestion.includes('legacy')) return 'INFOMEISTER was founded in 2025. Trisquadathon 1.0 was successfully conducted, community activities expanded in 2026, and Trisquadathon 2.0 is coming soon.';
  if (normalizedQuestion.includes('google') || normalizedQuestion.includes('search') || normalizedQuestion.includes('live web') || normalizedQuestion.includes('latest')) return 'I use the verified INFOMEISTER knowledge built into this website. I cannot live-scrape Google Search from the browser without a backend or approved search API.';
  if (normalizedQuestion.includes('react')) return 'React is a JavaScript library for building user interfaces with reusable components and state-driven rendering.';
  if (normalizedQuestion.includes('next.js') || normalizedQuestion.includes('nextjs')) return 'Next.js is a React framework for full-stack web applications, with routing, server rendering, and optimized production builds.';
  if (normalizedQuestion.includes('ai') || normalizedQuestion.includes('artificial intelligence')) return 'AI enables software to learn patterns, reason over information, and assist with tasks such as writing, analysis, and automation.';

  return 'I can help with INFOMEISTER events, executive boards, staff, location, contact details, and general technology questions. Try asking about Talkathon or the President.';
}

export function MifiAssistant({ initialOpen = false, onClose }: { initialOpen?: boolean; onClose?: () => void }) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);

  const askMifi = async (value: string) => {
    const trimmedValue = value.trim();
    if (!trimmedValue || isLoading) return;

    const userMessageId = Date.now();
    const assistantMessageId = userMessageId + 1;
    const localReply = getReply(trimmedValue);

    setMessages((currentMessages) => [
      ...currentMessages,
      { id: userMessageId, role: 'user', text: trimmedValue },
      { id: assistantMessageId, role: 'assistant', text: localReply },
    ]);
    setQuestion('');
    setIsLoading(true);

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 3500);

    try {
      const isAboutEvent = trimmedValue.toLowerCase().includes('trisquadathon') || trimmedValue.toLowerCase().includes('hackathon');
      if (isAboutEvent) {
        const response = await fetch('/api/mifi', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question: trimmedValue }),
          signal: controller.signal,
        });
        const data = await response.json();
        const liveContext = typeof data.context === 'string' ? data.context : '';
        if (liveContext) {
          setMessages((currentMessages) => currentMessages.map((message) => (
            message.id === assistantMessageId
              ? { ...message, text: `${localReply}\n\nLive Trisquadathon update: ${liveContext}` }
              : message
          )));
        }
      }
    } catch {
      // The local answer is already visible if the live source is unavailable.
    } finally {
      window.clearTimeout(timeout);
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    askMifi(question);
  };

  return (
    <div className="pointer-events-none fixed bottom-5 left-4 z-[110] sm:left-6">
      {isOpen && (
        <div className="pointer-events-auto mb-3 flex h-[min(30rem,calc(100vh-8rem))] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-[1.75rem] border border-cyan-200/35 bg-[#06101f]/[98%] shadow-[0_22px_70px_rgba(2,6,23,0.78),0_0_45px_rgba(34,211,238,0.22)] backdrop-blur-xl">
          <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-violet-500/15 px-4 pb-4 pt-4">
            <div className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full border border-cyan-200/20 shadow-[0_0_35px_rgba(34,211,238,0.2)]" />
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-cyan-100/35 bg-cyan-300/15 p-2.5 text-cyan-50 shadow-[0_0_22px_rgba(34,211,238,0.25)]">
                  <Bot size={20} />
                </div>
                <div>
                  <p className="text-base font-black tracking-[-0.02em] text-white">MIFI</p>
                  <div className="mt-1 flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-cyan-100/75">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.8)]" />
                    Ready to help
                  </div>
                </div>
              </div>
              <button type="button" onClick={() => { setIsOpen(false); onClose?.(); }} aria-label="Close MIFI assistant" className="rounded-xl border border-white/10 p-2 text-slate-400 transition hover:border-white/20 hover:bg-white/10 hover:text-white">
                <X size={17} />
              </button>
            </div>
            <p className="relative mt-4 max-w-[17rem] text-xs leading-relaxed text-slate-300">Ask about INFOMEISTER, upcoming events, the team, or technology.</p>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.06),transparent_42%)] p-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[88%] rounded-2xl border px-3.5 py-2.5 text-sm leading-relaxed shadow-sm ${message.role === 'user' ? 'rounded-br-md border-cyan-200/20 bg-cyan-300/15 text-cyan-50' : 'rounded-bl-md border-white/10 bg-white/[0.06] text-slate-200'}`}>
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.06] px-3.5 py-2.5 text-sm text-slate-400">
                  Checking the latest event details...
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-white/10 bg-slate-950/35 p-3">
            <div className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.16em] text-slate-500">
              <Sparkles size={12} className="text-cyan-300" />
              Try a quick question
            </div>
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {quickQuestions.map((quickQuestion) => (
                <button key={quickQuestion} type="button" onClick={() => askMifi(quickQuestion)} disabled={isLoading} className="shrink-0 rounded-xl border border-cyan-300/25 bg-cyan-300/[0.04] px-2.5 py-1.5 text-[10px] font-semibold text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/10 disabled:cursor-not-allowed disabled:opacity-50">
                  {quickQuestion}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/70 p-1.5 focus-within:border-cyan-300/40">
              <input value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask MIFI anything..." aria-label="Ask MIFI a question" className="min-w-0 flex-1 bg-transparent px-2 text-sm text-white outline-none placeholder:text-slate-500" />
              <button type="submit" aria-label="Send question" disabled={isLoading} className="rounded-xl bg-gradient-to-br from-cyan-300/25 to-blue-500/25 p-2.5 text-cyan-50 transition hover:from-cyan-300/40 hover:to-blue-500/40 disabled:cursor-not-allowed disabled:opacity-50">
                <Send size={17} />
              </button>
            </form>
          </div>
        </div>
      )}

      {!isOpen && (
        <button type="button" onClick={() => setIsOpen(true)} aria-label="Open MIFI assistant" className="pointer-events-auto group flex items-center gap-2 rounded-2xl border border-cyan-200/40 bg-[#06101f]/95 px-3.5 py-3 text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.28)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-cyan-200/70">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300/25 to-blue-500/25">
            <MessageCircle size={17} />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.9)]" />
          </span>
          <span className="text-xs font-black uppercase tracking-[0.16em]">Ask MIFI</span>
          <Sparkles size={13} className="text-cyan-300 transition group-hover:rotate-12" />
        </button>
      )}
    </div>
  );
}
