import { google } from "googleapis";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load credentials
const keyFile = path.resolve(__dirname, "service-account.json");
if (!fs.existsSync(keyFile)) {
  console.error("Error: service-account.json not found in the scripts directory.");
  process.exit(1);
}

const credentials = JSON.parse(fs.readFileSync(keyFile, "utf8"));

// Initialize Google Auth client
const jwtClient = new google.auth.JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: ["https://www.googleapis.com/auth/indexing"],
});

const indexing = google.indexing({
  version: "v3",
  auth: jwtClient,
});

// Define the URLs you want to force index. This could be read from sitemap.xml dynamically,
// but hardcoding core URLs ensures immediate precision.
const urlsToIndex = [
  "https://bbbrotherbuilding.co.uk/",
  "https://bbbrotherbuilding.co.uk/locations",
  "https://bbbrotherbuilding.co.uk/locations/st-albans",
  "https://bbbrotherbuilding.co.uk/locations/watford",
  "https://bbbrotherbuilding.co.uk/locations/edgware",
  "https://bbbrotherbuilding.co.uk/locations/stanmore",
  "https://bbbrotherbuilding.co.uk/locations/barnet",
  "https://bbbrotherbuilding.co.uk/locations/harrow",
  "https://bbbrotherbuilding.co.uk/locations/wembley",
  "https://bbbrotherbuilding.co.uk/locations/wood-green",
  "https://bbbrotherbuilding.co.uk/services",
  "https://bbbrotherbuilding.co.uk/services/extensions",
  "https://bbbrotherbuilding.co.uk/services/loft-conversions",
  "https://bbbrotherbuilding.co.uk/services/bathroom-renovations",
  "https://bbbrotherbuilding.co.uk/services/kitchen-fitting",
  "https://bbbrotherbuilding.co.uk/services/roofing",
  "https://bbbrotherbuilding.co.uk/services/plastering",
  "https://bbbrotherbuilding.co.uk/services/painting-decorating",
  "https://bbbrotherbuilding.co.uk/services/general-renovations",
  "https://bbbrotherbuilding.co.uk/gallery",
  "https://bbbrotherbuilding.co.uk/about",
  "https://bbbrotherbuilding.co.uk/contact"
];

async function indexUrls() {
  console.log("Authorizing with Google Indexing API...");
  try {
    await jwtClient.authorize();
    console.log("Successfully authorized.\n");
  } catch (authError) {
    console.error("❌ AUTHORIZATION FAILED!");
    console.error("- Error Message:", authError.message);
    if (authError.response && authError.response.data) {
      console.error("- Google API Response:", JSON.stringify(authError.response.data, null, 2));
    }
    console.error("\nPlease ensure:");
    console.error("1. The Google Cloud project has the 'Web Search Indexing API' enabled.");
    console.error("2. The service account 'alba-decor@...' is listed as an 'Owner' in Google Search Console.");
    return;
  }

  for (const url of urlsToIndex) {
    try {
      const response = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: "URL_UPDATED",
        },
      });
      console.log(`✅ Successfully requested indexing for: ${url}`);
      // The quota is ~200 per day per project.
    } catch (error) {
      console.error(`❌ Failed to index ${url}:`, error.message);
    }
  }

  console.log("\nFinished. Note: Make sure the service account email is added as an Owner of the Google Search Console property.");
}

indexUrls().catch(console.error);
