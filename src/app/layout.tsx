//Common style for all pages, consisting of Header & Footer components.
// my app is a SPA (so it's kinda irelevant, might be useful for if i change my mind and make it a multi-page app (: )

import type { Metadata } from "next";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Goran Kirovski",
  description: "Personal Website Portfolio",
};
