import "./globals.css";
import Nav from "../components/Nav";
import NextAuthProviders from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>

      <body>
        <Nav/>
        <NextAuthProviders>{children}</NextAuthProviders>
      </body>
    </html>
  );
}
