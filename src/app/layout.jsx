import { Inter, Silkscreen, Roboto } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
import { ThemeProvider } from "@/components/Providers/ThemeProvider";

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ['400', "700"],
  variable: '--font-silkscreen',
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
  variable: '--font-roboto',
});

const baby_blocks = localFont({
  src: '../../public/font/baby_blocks/baby_blocks.ttf',
  variable: '--font-baby_blocks',
})

export const metadata = {
  title: "Home | TURKUY!",
  description: "TURKUY!: Your Ultimate Online Gaming Tournament Registration Platform!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${baby_blocks.variable} ${roboto.variable} ${silkscreen.variable} min-h-screen bg-background font-sans antialiased w-full flex justify-center items-center`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
