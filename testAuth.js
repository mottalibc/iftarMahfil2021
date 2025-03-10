import { google } from "googleapis";
import fs from "fs";

// Load credentials from JSON file
const credentials = process.env.CREDENTIALS_JSON;

if (!credentials) {
  throw new Error("CREDENTIALS_JSON is missing in environment variables");
}

const parsedCredentials = JSON.parse(credentials);

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
