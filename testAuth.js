import { google } from "googleapis";
import fs from "fs";

// Load credentials from JSON file
const credentials = JSON.parse(fs.readFileSync("credentials.json", "utf-8"));

async function testAuth() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const client = await auth.getClient();
    console.log("✅ Authentication successful!", client);
  } catch (error) {
    console.error("❌ Authentication failed:", error);
  }
}

testAuth();
