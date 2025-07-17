import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";

export const metadata = {
  title: "SmartRecco",
  description: "AI Recommendation APP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}