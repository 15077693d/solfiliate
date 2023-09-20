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
export default function Collection() {
  return (
    <Layout>
      <Container>
        <h1>My Collections</h1>
        <p>Create and manage your NFTs collection to share or sell</p>
        <div className=" my-6 space-x-2">
          <Link href={"/create"}>
            <Button>Create a Collection</Button>
          </Link>
          <Link href={"/dashboard"}>
            <Button>Income Dashboard</Button>
          </Link>
        </div>

        <Tabs defaultValue="Owned">
          <TabsList className=" m-auto mb-10 grid  max-w-[400px] grid-cols-3">
            <TabsTrigger value="Owned">Owned</TabsTrigger>
            <TabsTrigger value="Created">Created</TabsTrigger>
            <TabsTrigger value="Affiliated">Affiliated</TabsTrigger>
          </TabsList>
          <TabsContent value="Owned">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              <ImageCard title1="collection1" title2="9 items" title3="" />
              <ImageCard title1="collection1" title2="9 items" title3="" />
              <ImageCard title1="collection1" title2="9 items" title3="" />
              <ImageCard title1="collection1" title2="9 items" title3="" />
              <ImageCard title1="collection1" title2="9 items" title3="" />
              <ImageCard title1="collection1" title2="9 items" title3="" />
            </div>
          </TabsContent>
          <TabsContent value="Created"></TabsContent>
          <TabsContent value="Affiliated"></TabsContent>
        </Tabs>
      </Container>
    </Layout>
  );
}
