'use client';

export function BackgroundSystem() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden" aria-hidden="true">
      {/* Deep Space Background */}
      <div className="absolute inset-0 bg-[#040814]" />

      {/* Hardware-accelerated soft nebula glows */}
      <div className="absolute -top-[20%] -left-[10%] h-[70vw] w-[70vw] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.18)_0%,transparent_70%)] blur-[100px] will-change-transform" />
      <div className="absolute top-[40%] -right-[15%] h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.14)_0%,transparent_70%)] blur-[100px] will-change-transform" />
      <div className="absolute bottom-[-10%] left-[20%] h-[50vw] w-[50vw] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.12)_0%,transparent_70%)] blur-[90px] will-change-transform" />

      {/* Crisp starry noise field (pure CSS background pattern, 0 KB extra asset, 0% CPU) */}
      <div className="star-field absolute inset-0 opacity-40 will-change-transform" />
    </div>
  );
}
