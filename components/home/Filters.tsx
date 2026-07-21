interface FiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function Filters({ categories, activeCategory, onCategoryChange }: FiltersProps) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 text-xs font-semibold font-body rounded-xl border transition-colors cursor-pointer ${
            activeCategory === category
              ? "bg-secondary border-secondary text-dark-neutral"
              : "bg-background border-foreground/10 text-foreground/70 hover:border-foreground/30 hover:text-foreground"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}