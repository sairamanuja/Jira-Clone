import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "../components/theme-provider";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zcrum",
  description: "Zcrum is a platform for creating and sharing AI-powered tools.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header/>
            <main className="min-h-screen antialiased">
              {children}
            </main>
            <footer className="container mx-auto px-4 text-center text-gray-200 py-8">
              <p className="text-sm text-muted-foreground">made with ❤️ by SR</p>
            </footer>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
};

export default RootLayout;
