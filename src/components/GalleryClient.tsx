"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  span: boolean;
}

interface Category {
  title: string;
  slug: string;
  images: GalleryImage[];
}

interface GalleryClientProps {
  categories: Category[];
}

export function GalleryClient({ categories }: GalleryClientProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories = useMemo(() => {
    if (activeCategory === "all") return categories;
    return categories.filter((cat) => cat.slug === activeCategory);
  }, [activeCategory, categories]);

  const allCategorySlugs = [
    { name: "All Work", slug: "all" },
    ...categories.map((cat) => ({ name: cat.title.split(" & ")[0].split(" ")[0], slug: cat.slug })),
  ];

  return (
    <>
      {/* Sticky Filter Ribbon */}
      <div className="sticky top-20 z-40 bg-background/80 backdrop-blur-md border-b border-secondary/10 py-4 mb-12">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-start md:justify-center gap-3 min-w-max">
            {allCategorySlugs.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-5 py-2 rounded-full font-label text-xs uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat.slug
                    ? "bg-secondary text-white shadow-lg shadow-secondary/20"
                    : "bg-surface-container text-muted hover:bg-surface-container-high hover:text-primary"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Sections */}
      <div className="space-y-24">
        {filteredCategories.map((category, catIndex) => (
          <section
            key={category.slug}
            className={`px-6 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4`}
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-6 mb-10">
                <div className="h-px flex-1 bg-secondary/20" />
                <h2 className="font-headline text-2xl md:text-3xl font-black text-primary tracking-tight whitespace-nowrap">
                  {category.title}
                </h2>
                <div className="h-px flex-1 bg-secondary/20" />
              </div>

              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {category.images.map((image, idx) => (
                  <div key={image.src} className="break-inside-avoid group">
                    <div className="relative overflow-hidden rounded-lg bg-surface-container">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.span ? 800 : 600}
                        height={image.span ? 600 : 450}
                        className="w-full object-cover rounded-lg transition-all duration-700 group-hover:scale-[1.05]"
                        loading={catIndex === 0 && idx < 6 ? "eager" : "lazy"}
                        priority={catIndex === 0 && idx < 2}
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
