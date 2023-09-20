import React from "react";
import MoblieNavBar from "./MoblieNavBar";
import TabletNavBar from "./TabletNavBar";
import { Container } from "../common";
export default function Navbar() {
  return (
    <Container>
      <MoblieNavBar className="flex  w-full md:hidden" />
      <TabletNavBar className="hidden w-full md:flex" />
    </Container>
  );
}
