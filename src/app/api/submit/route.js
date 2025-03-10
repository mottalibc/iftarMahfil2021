import { google } from "googleapis";
import fs from "fs";

// Load credentials
const credentials = process.env.CREDENTIALS_JSON;

if (!credentials) {
  throw new Error("CREDENTIALS_JSON is missing in environment variables");
}

const parsedCredentials = JSON.parse(credentials);

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export async function POST(req) {
  try {
    const { name, phone, trxId, message } = await req.json(); // Get data from request body

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = "10wMLHGo9Yt6bnREveQfSJYkHKyq4HaDwdx13hXbTxcs"; // Replace with your actual Sheet ID
    const range = "Sheet1!A:D"; // Adjust based on your sheet's column structure

    // Append the data
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values: [[name, phone, trxId, message]], // Matching the columns A, B, C, D
      },
    });

    return new Response(
      JSON.stringify({ success: true, message: "Data added successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
