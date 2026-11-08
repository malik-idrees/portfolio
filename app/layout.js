import "./globals.css";

export const metadata = {
  title: "Muhammad Idrees Majid | GoHighLevel Automation Expert & MERN Developer",
  description:
    "Full-stack MERN developer and GoHighLevel automation specialist. Websites, funnels, CRMs and automations that connect the systems a business runs on.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
