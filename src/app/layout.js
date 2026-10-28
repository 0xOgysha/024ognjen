import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "024ognjen — home",
  description: "Personal portfolio of Ognjen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children} <CustomCursor /></body>
    </html>
  );
}