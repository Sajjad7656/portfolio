
SS Portfolio (React + Tailwind quick starter)
--------------------------------------------

What you got:
- React app built with Vite
- Tailwind via CDN for quick prototyping (replace with full Tailwind setup for production)
- Sections: Home, About, Projects, Contact
- Contact form integrated with EmailJS (client-side). Also includes a WhatsApp chat link.

How to run:
1. unzip the project
2. in the project folder run:
   npm install
   npm run dev
3. Open http://localhost:3000

EmailJS setup:
- Create account on https://www.emailjs.com/
- Add an Email Service (Gmail, etc) and note SERVICE ID
- Create an Email Template and note TEMPLATE ID
- Get your USER ID (Public Key)
- Open src/pages/Contact.jsx and replace YOUR_EMAILJS_SERVICE_ID, YOUR_EMAILJS_TEMPLATE_ID, YOUR_EMAILJS_USER_ID with your values.

Replace contact info:
- Replace placeholders in src/pages/Contact.jsx (your-email@example.com and +1234567890) with your actual email and WhatsApp number. The WhatsApp chat link uses https://wa.me/<number-without-plus-sign> format.

Notes:
- Tailwind via CDN is used to keep this package runnable without a build step for Tailwind. For production, switch to a proper Tailwind + PostCSS setup.
- The included profile image is a placeholder at public/profile-sample.jpg
