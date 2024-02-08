import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics, sendGAEvent } from '@next/third-parties/google'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "DS Zero Consultoria",
    description: "Dados transformados em resultados",
};

export default function RootLayout(
    {children,}: Readonly<{children: React.ReactNode;}>
) {
    return (
        <html lang="pt-br">
            <body className={inter.className}>
                {children}
                {/* <div>
                    <button onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'xyz' })}>
                        dummy button
                    </button>
                </div> */}
            </body>
            <GoogleAnalytics gaId="G-VVDW84XK4Y" />
        </html>
    );
}
