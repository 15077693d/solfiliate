import React from "react";
import MoblieNavBar from "./moblieNavBar";
import TabletNavBar from "./TabletNavBar";

export default function Navbar() {
  return (
    <header className="p-2">
      <MoblieNavBar className="flex md:hidden" />
      <TabletNavBar className="hidden md:flex" />
    </header>
  );
}
