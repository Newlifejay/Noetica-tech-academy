// Function to get access token using client credentials
export async function getAccessToken(): Promise<string> {
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", process.env.MS_CLIENT_ID!);  // from Vercel env
  params.append("client_secret", process.env.MS_CLIENT_SECRET!);  // from Vercel env
  params.append("scope", "https://graph.microsoft.com/.default");

  const res = await fetch(`https://login.microsoftonline.com/${process.env.MS_TENANT_ID}/oauth2/v2.0/token`, {
    method: "POST",
    body: params,
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Failed to get MS Graph access token:", errorText);
    throw new Error("Failed to get MS Graph access token");
  }

  const data = await res.json();
  return data.access_token; // Use this access token to send emails
}

// Function to send an email via Microsoft Graph API
export async function sendEmail(to: string, subject: string, content: string): Promise<boolean> {
  const token = await getAccessToken();

  const emailData = {
    message: {
      subject,
      body: { contentType: "Text", content },
      toRecipients: [{ emailAddress: { address: to } }] // recipient's email
    }
  };

  const res = await fetch(`https://graph.microsoft.com/v1.0/users/${process.env.MS_EMAIL_FROM}/sendMail`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,  // Token to authenticate the request
      "Content-Type": "application/json"
    },
    body: JSON.stringify(emailData)  // Pass the email data as JSON
  });

  if (!res.ok) {
    const err = await res.json();
    console.error("Error sending email:", err);
    throw new Error("Email sending failed");
  }

  return true;  // Return success if email is sent
}
