# Send Emails

Sending emails using node.js with [nodemailer](https://nodemailer.com/) and [ethereal](https://ethereal.email/).

### Prerequisites

Before you begin, ensure you have the following prerequisites:

- Node.js and npm installed on your machine.
- (Optional) Git for cloning the repository.

### Getting Started

These instructions will help you set up and run the project on your local machine.

1. Clone the repository (if you haven't already):

   ```bash
   git clone https://github.com/edriso/send-emails.git
   ```

2. Navigate to the project directory:

   ```bash
   cd send-emails
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set `.env` configuration

   - Rename the `.env.example` file to `.env`.

   - Open the `.env` file and set the following environment variables:

     ```dotenv
     EMAIL_HOST=smtp.ethereal.email
     EMAIL_PORT=587
     EMAIL_SECURE=false
     EMAIL_USERNAME=your_email@example.com
     EMAIL_PASSWORD=your_email_password
     ```

     Replace `your_email@example.com` and `your_email_password` with your actual email credentials.

5. Start the application:

   ```bash
   npm start
   ```

Now, you're ready to send emails using the configured settings.
