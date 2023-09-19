"use clients";
import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";
import { Button } from "@/components/ui/button";
import { MintForm } from "@/components/form/MintForm";
import { Layout } from "@/components/layout";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <Layout>
      <h1>Crete Your NFT Collection</h1>
      <MintForm />
    </Layout>
  );
}
