import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = [
    { label: "Home", href: "/" },
    ...items,
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href
        ? `https://bbbrotherbuilding.co.uk${item.href}`
        : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="px-6 mb-6">
        <div className="max-w-7xl mx-auto">
          <ol className="flex flex-wrap items-center gap-1.5 font-label text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-secondary transition-colors">
                Home
              </Link>
            </li>
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <span className="text-muted/50">&gt;</span>
                {item.href ? (
                  <Link href={item.href} className="hover:text-secondary transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-primary font-bold">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
