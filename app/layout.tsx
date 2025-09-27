import "./globals.css";
import { CartProvider } from "@/app/context/CartContext";

export const metadata = {
  title: "Mini Store",
  description: "Simple E-Commerce Demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
