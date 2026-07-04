export function AuroraBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[var(--void)]" />
      <div
        className="aurora-blob"
        style={{
          top: "-10%",
          left: "-5%",
          width: "55vw",
          height: "55vw",
          background: "#6C8CFF",
          opacity: 0.16,
          animation: "aurora-drift-a 26s ease-in-out infinite",
        }}
      />
      <div
        className="aurora-blob"
        style={{
          top: "20%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          background: "#B388FF",
          opacity: 0.14,
          animation: "aurora-drift-b 32s ease-in-out infinite",
        }}
      />
      <div
        className="aurora-blob"
        style={{
          bottom: "-15%",
          left: "20%",
          width: "48vw",
          height: "48vw",
          background: "#3DDC84",
          opacity: 0.1,
          animation: "aurora-drift-c 29s ease-in-out infinite",
        }}
      />
    </div>
  );
}
