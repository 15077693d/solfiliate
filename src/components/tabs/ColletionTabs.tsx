import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageCard } from "../card/ImageCard";

export default function ColletionTabs() {
  return (
    <Tabs defaultValue="Owned">
      <TabsList className="m-auto mb-10 grid  max-w-[400px] grid-cols-3 md:m-[0] md:mb-10">
        <TabsTrigger value="Owned">Owned</TabsTrigger>
        <TabsTrigger value="Created">Created</TabsTrigger>
        <TabsTrigger value="Affiliated">Affiliated</TabsTrigger>
      </TabsList>
      <TabsContent value="Owned">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
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
  );
}
