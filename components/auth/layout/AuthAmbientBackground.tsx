export default function AuthAmbientBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"></div>
      <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-secondary-container/10 blur-[100px]"></div>
    </div>
  );
}
