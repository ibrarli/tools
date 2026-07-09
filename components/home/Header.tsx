import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col gap-4 text-left border-b border-foreground/10 pb-8">
      <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl max-w-5xl">
        Tools that make your professional life <span className="text-primary">easier</span>.
      </h1>
      <p className="text-base md:text-lg text-foreground/70 font-body max-w-3xl leading-relaxed">
        A centralized workspace of single-purpose utility applications built by{" "}
        <a 
          href="https://apenapps.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground font-semibold underline decoration-primary decoration-2 underline-offset-4 hover:text-primary transition-colors"
        >
          Apen Apps
        </a>{" "}
        to streamline document generation, workflows, and your daily engineering tasks.
      </p>
    </div>
  );
}