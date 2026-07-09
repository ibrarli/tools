export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-foreground/10 mt-auto">
      <div className="w-full max-w-full flex items-center justify-center px-6 py-6 font-body text-xs text-foreground/60 text-center">
        &copy; {currentYear} Apen Apps. All rights reserved.
      </div>
    </footer>
  );
}