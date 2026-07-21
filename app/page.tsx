"use client";

import { useState } from "react";
import Header from "@/components/home/Header";
import Filters from "@/components/home/Filters";
import ToolCard from "@/components/home/ToolCard";

const tools = [
  {
    name: "Resume Builder",
    description: "Build, optimize, and export professional ATS-friendly resumes effortlessly.",
    href: "https://resume.apenapps.com",
    status: "Active",
    category: "Documents",
    logoLight: "/logo/resume_logo.svg",
    logoDark: "/logo/resume_logo.svg",
  },
  {
    name: "Visa Doc",
    description: "Manage, review, and process required documents for global visa applications.",
    href: "https://visadoc.apenapps.com",
    status: "Active",
    category: "Documents",
    logoLight: "/logo/visadoc_logo.svg",
    logoDark: "/logo/visadoc_logo_dark.svg",
  },
];

const categories = ["All", "Documents", "Developer Tools", "Utilities"];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTools = tools.filter(
    (tool) => activeCategory === "All" || tool.category === activeCategory
  );

  return (
    <div className="flex flex-col flex-1 bg-background px-6  py-16 w-full max-w-full">
      <div className="w-full max-w-full flex flex-col gap-10">
        <Header />
        
        <Filters 
          categories={categories} 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}

          {filteredTools.length === 0 && (
            <div className="col-span-full py-12 text-center border-2 border-dashed border-foreground/10 rounded-2xl">
              <p className="font-body text-sm text-foreground/50">
                No production engines found matching this filter profile.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}