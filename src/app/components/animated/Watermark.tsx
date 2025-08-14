// Water mark
export default function Watermark() {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          rgba(0,0,0,0.05) 0px,
          rgba(0,0,0,0.05) 1px,
          transparent 1px,
          transparent 80px
        )`,
      }}
    >
      <p className="text-6xl font-bold text-black/5 select-none tracking-widest">
        © OFLA
      </p>
    </div>
  );
}
