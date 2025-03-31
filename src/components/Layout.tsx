
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export function Layout() {
  return (
    <div className="flex min-h-screen w-full bg-muted/20 flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <div className="w-full">
          <div className="container px-4">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
