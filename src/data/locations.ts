export interface LocationData {
  slug: string;
  name: string;
  postcode: string;
  coordinates: { lat: number; lng: number };
  zone: "primary" | "secondary";
  nearby: string[];
  county: string;
  landmarks: string[];
  housingTypes: string[];
  localChallenge: string;
}

export const locations: LocationData[] = [
  {
    slug: "st-albans",
    name: "St Albans",
    postcode: "AL1-AL4",
    coordinates: { lat: 51.7519, lng: -0.3386 },
    zone: "primary",
    nearby: ["watford", "barnet", "harrow"],
    county: "Hertfordshire",
    landmarks: ["St Albans Cathedral", "Verulamium Park", "Roman ruins"],
    housingTypes: ["Victorian terraces", "1930s semis", "Georgian townhouses", "new-build estates"],
    localChallenge: "Many St Albans properties are in conservation areas requiring careful planning and heritage-sensitive building work.",
  },
  {
    slug: "watford",
    name: "Watford",
    postcode: "WD17-WD25",
    coordinates: { lat: 51.6565, lng: -0.3957 },
    zone: "primary",
    nearby: ["st-albans", "harrow", "stanmore"],
    county: "Hertfordshire",
    landmarks: ["Watford High Street", "Cassiobury Park", "Intu Watford"],
    housingTypes: ["Victorian terraces", "1930s semis", "post-war estates", "modern apartments"],
    localChallenge: "Watford's mix of Victorian and post-war housing creates varied structural challenges for extensions and renovations.",
  },
  {
    slug: "edgware",
    name: "Edgware",
    postcode: "HA8",
    coordinates: { lat: 51.6137, lng: -0.2747 },
    zone: "secondary",
    nearby: ["stanmore", "barnet", "harrow"],
    county: "Greater London",
    landmarks: ["Edgware Road", "Broadfields Park", "Burnt Oak"],
    housingTypes: ["1930s semis", "detached family homes", "maisonettes", "new-build developments"],
    localChallenge: "Many Edgware properties have large rear gardens ideal for extensions, but narrow side access requires careful project planning.",
  },
  {
    slug: "stanmore",
    name: "Stanmore",
    postcode: "HA7",
    coordinates: { lat: 51.6192, lng: -0.3094 },
    zone: "secondary",
    nearby: ["edgware", "harrow", "watford"],
    county: "Greater London",
    landmarks: ["Stanmore Common", "Bentley Priory", "Canons Park"],
    housingTypes: ["Detached family homes", "1930s semis", "executive homes", "period conversions"],
    localChallenge: "Stanmore's larger detached properties often suit double-storey extensions and full loft conversions to maximise value.",
  },
  {
    slug: "barnet",
    name: "Barnet",
    postcode: "EN5/EN4",
    coordinates: { lat: 51.6529, lng: -0.1997 },
    zone: "primary",
    nearby: ["edgware", "wood-green", "st-albans"],
    county: "Greater London",
    landmarks: ["Barnet High Street", "Old Courthouse", "Barnet Church"],
    housingTypes: ["Victorian terraces", "Edwardian semis", "1930s detached", "conservation area properties"],
    localChallenge: "Parts of Barnet fall within conservation areas where permitted development rights are restricted, requiring full planning applications.",
  },
  {
    slug: "harrow",
    name: "Harrow",
    postcode: "HA1-HA3",
    coordinates: { lat: 51.5802, lng: -0.3427 },
    zone: "primary",
    nearby: ["wembley", "stanmore", "edgware", "watford"],
    county: "Greater London",
    landmarks: ["Harrow on the Hill", "Harrow School", "St Mary's Church"],
    housingTypes: ["Victorian terraces", "1930s semis", "Edwardian homes", "modern estates"],
    localChallenge: "Harrow's hilly terrain and mature trees mean careful foundation design and drainage planning for extensions.",
  },
  {
    slug: "wembley",
    name: "Wembley",
    postcode: "HA0/HA9",
    coordinates: { lat: 51.5528, lng: -0.2979 },
    zone: "secondary",
    nearby: ["harrow", "edgware", "wood-green"],
    county: "Greater London",
    landmarks: ["Wembley Stadium", "SSE Arena", "Wembley Park"],
    housingTypes: ["1930s semis", "terraced houses", "post-war estates", "new-build apartments"],
    localChallenge: "Wembley's dense housing means party wall agreements are essential for most extensions and loft conversions.",
  },
  {
    slug: "wood-green",
    name: "Wood Green",
    postcode: "N22",
    coordinates: { lat: 51.5975, lng: -0.1097 },
    zone: "secondary",
    nearby: ["barnet", "wembley", "harrow"],
    county: "Greater London",
    landmarks: ["Alexandra Palace", "Wood Green High Road", "Noel Park Conservation Area"],
    housingTypes: ["Victorian terraces", "Edwardian semis", "converted flats", "ex-council properties"],
    localChallenge: "Many Wood Green properties are Victorian terraces where rear extensions and loft conversions add the most value per square metre.",
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((loc) => loc.slug === slug);
}
