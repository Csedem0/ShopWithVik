import React from "react";
import axios from "axios";

const GmailEmail = () => {
  const [emails, setEmails] = React.useState([]);

  React.useEffect(() => {
    // Load OAuth credentials from local storage
    const credentials = JSON.parse(localStorage.getItem("gmailCredentials"));

    // Create an OAuth2 client instance
    const oauth2Client = new GoogleOAuth2Client({
      clientId: credentials.client_id,
      clientSecret: credentials.client_secret,
      redirectUris: credentials.redirect_uris,
    });

    // Get access token using stored refresh token
    oauth2Client.setAccessToken(
      JSON.parse(localStorage.getItem("accessToken"))
    );

    // Create a Gmail API service instance
    const gmail = google.discover("gmail", "v1");

    // Fetch emails from Gmail API
    gmail.users.messages
      .list({
        userId: "me",
        maxResults: 10,
      })
      .then((response) => {
        const emailData = response.data.messages;
        const emails = emailData.map((email) => ({
          subject: email.snippet,
          message: email.body,
        }));
        setEmails(emails);
      })
      .catch((error) => {
        console.error("Error fetching emails:", error);
      });
  }, []);

  return (
    <div>
      {emails.map((email) => (
        <div key={email.subject}>
          <h3>{email.subject}</h3>
          <p>{email.message}</p>
        </div>
      ))}
    </div>
  );
};

export default GmailEmail;
