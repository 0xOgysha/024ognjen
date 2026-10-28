import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "024ognjen — Design. Develop. Deliver.",
  description: "Thoughtful web design and development by Ognjen, based in Belgrade, Serbia. Explore selected projects and get in touch.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}<CustomCursor /></body>
    </html>
  );
}
