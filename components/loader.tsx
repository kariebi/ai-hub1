import Image from "next/image"

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 relative animate-growshrink bg-black/50">
        <Image
          alt="Logo"
          src="/empty.png"
          fill
        />
      </div>
      <p className="text-sm text-muted-foreground">
        <b>AI-Hub is thinking...</b>
      </p>
    </div>
  );
};
