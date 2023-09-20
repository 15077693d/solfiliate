"use clients";
import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import dynamic from "next/dynamic";
import { Container } from "@/components/common";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CollectionCard } from "@/components/card/CollectionCard";
export default function Collection() {
  return (
    <Layout>
      <Container>
        <h1>My Collections</h1>
        <p>Create and manage your NFTs collection to share or sell</p>
        <div className=" space-x-2">
          <Link href={"/create"}>
            <Button>Create a Collection</Button>
          </Link>
          <Link href={"/dashboard"}>
            <Button>Income Dashboard</Button>
          </Link>
        </div>

        <Tabs defaultValue="Owned">
          <TabsList className="grid  grid-cols-3">
            <TabsTrigger value="Owned">Owned</TabsTrigger>
            <TabsTrigger value="Created">Created</TabsTrigger>
            <TabsTrigger value="Affiliated">Affiliated</TabsTrigger>
          </TabsList>
          <TabsContent value="Owned">
            <div className="grid grid-cols-2 gap-4">
              <CollectionCard imgSrc="/nft.png" />
              <CollectionCard imgSrc="/nft.png" />
              <CollectionCard imgSrc="/nft.png" />
            </div>
          </TabsContent>
          <TabsContent value="Created"></TabsContent>
          <TabsContent value="Affiliated"></TabsContent>
        </Tabs>
      </Container>
    </Layout>
  );
}
