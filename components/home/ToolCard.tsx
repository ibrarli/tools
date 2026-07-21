import Link from "next/link";
import Image from "next/image";

interface Tool {
  name: string;
  description: string;
  href: string;
  status: string;
  category: string;
  logoLight: string;
  logoDark: string;
}

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="flex flex-col justify-between p-5 bg-background border-2 border-foreground/10 rounded-2xl transition-colors hover:border-secondary group">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <Link href={tool.href} className="inline-block" target="_blank" rel="noopener noreferrer">
            <Image
              src={tool.logoLight}
              alt={`${tool.name} Logo`}
              width={28}
              height={28}
              className="block dark:hidden object-contain"
            />
            <Image
              src={tool.logoDark}
              alt={`${tool.name} Logo`}
              width={50}
              height={50}
              className="hidden dark:block object-contain"
            />
          </Link>
          <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-secondary/10 text-secondary uppercase tracking-wider font-body">
            {tool.status}
          </span>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors">
            <Link href={tool.href} target="_blank" rel="noopener noreferrer">
              {tool.name}
            </Link>
          </h2>
          <p className="text-xs text-foreground/70 font-body leading-relaxed mt-1.5">
            {tool.description}
          </p>
        </div>
      </div>

      <div className="mt-5">
        <Link
          href={tool.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-9 w-full px-4 rounded-xl border-2 border-primary text-foreground hover:bg-primary hover:text-dark-neutral font-body font-bold text-xs transition-colors"
        >
          Launch Application
        </Link>
      </div>
    </div>
  );
}