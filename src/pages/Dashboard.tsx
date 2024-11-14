import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogPostsManager from "@/components/dashboard/BlogPostsManager";
import POSManager from "@/components/dashboard/POSManager";
import { Loader2 } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <Tabs defaultValue="blog" className="w-full">
        <TabsList className="grid w-full max-w-[400px] grid-cols-2">
          <TabsTrigger value="blog">Blog Yazıları</TabsTrigger>
          <TabsTrigger value="pos">POS Yönetimi</TabsTrigger>
        </TabsList>
        <TabsContent value="blog">
          <BlogPostsManager />
        </TabsContent>
        <TabsContent value="pos">
          <POSManager />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;