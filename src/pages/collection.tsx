"use clients";
import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import dynamic from "next/dynamic";
import { Container } from "@/components/common";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageCard } from "@/components/card/ImageCard";
import { TextCard } from "@/components/card/TextCard";
import { ReferralLinkDialog } from "@/components/dialog/ReferralLinkDialog";
export default function Collection() {
  return (
    <Layout>
      <div className="absolute left-0 right-0 ml-auto mr-auto  h-[150px] w-[90%] rounded-br-lg bg-[url('/background.webp')]"></div>
      <Container className="relative z-10 mt-14">
        <div className="flex flex-col md:mb-5 md:flex-row md:items-center md:justify-around">
          <div>
            <img className="mb-3 w-[100px] rounded" src={"/nft.png"} />

            <h2>NFT Project Name</h2>
            <span>Created by User Name</span>
            <p className="md:max-w-[700px]">
              Welcome to NFT Project Name, the hub of the NFT universe. We focus
              on promoting social celebration through digital art.
            </p>
          </div>
          <ReferralLinkDialog />
        </div>

        <div className="mb-10 grid grid-cols-3 md:grid-cols-6">
          <TextCard value="9" title="Items" />
          <TextCard value="9" title="Items" />
          <TextCard value="9" title="Items" />
          <TextCard value="9" title="Items" />
          <TextCard value="9" title="Items" />
          <TextCard value="9" title="Items" />
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>
      </Container>
    </Layout>
  );
}
