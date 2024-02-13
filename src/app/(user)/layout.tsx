import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/src/components/ui/header/Navbar";
// import Footer from "@/src/components/ui/Footer";
import Provider from '@/src/components/provider'
import {cookies} from "next/headers";
import React from "react";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};


//function to check if there is a theme stored in cookies if not assign it to dark theme
const getTheme = () => {
    const cookieStore = cookies();
    const themeCookie = cookieStore.get('theme');
    const theme = themeCookie ? themeCookie.value  :"dark";
    return theme
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {

    const theme = getTheme() as string;
    return (
        <html lang="en"
              className={classNames(inter.className, 'scroll-smooth',theme)}
              style={{ colorScheme: theme }}
              suppressHydrationWarning
        >
        <body>
        <Provider>
            <Navbar />

            {children}
            {/*<Footer />*/}
        </Provider>
        </body>
        </html>
    );
}
