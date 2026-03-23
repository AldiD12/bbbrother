import Link from "next/link";
import { locations } from "@/data/locations";

interface NearbyLocationsProps {
  nearbySlugs: string[];
}

const anchorTemplates = [
  (name: string) => `Builders in ${name}`,
  (name: string) => `${name} Extensions & Renovations`,
  (name: string) => `Our team near ${name}`,
  (name: string) => `Projects in ${name}`,
  (name: string) => `Serving ${name} and surrounding areas`,
];

function getRandomTemplate(name: string, index: number) {
  // Use a deterministic "random" based on the name length + index to avoid hydration mismatch
  const pick = (name.length + index) % anchorTemplates.length;
  return anchorTemplates[pick](name);
}

export function NearbyLocations({ nearbySlugs }: NearbyLocationsProps) {
  const nearbyLocations = nearbySlugs
    .map((slug) => locations.find((loc) => loc.slug === slug))
    .filter(Boolean);

  if (nearbyLocations.length === 0) return null;

  return (
    <section className="px-6 mb-20 md:mb-28">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-8 tracking-tight">
          Nearby Areas We Serve
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nearbyLocations.map((loc, i) => (
            <Link
              key={loc!.slug}
              href={`/locations/${loc!.slug}`}
              className="bg-white border border-outline-variant/20 rounded-lg p-6 font-label font-bold text-primary hover:border-secondary hover:text-secondary transition-colors"
              aria-label={`View our building services in ${loc!.name}`}
            >
              {getRandomTemplate(loc!.name, i)}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
