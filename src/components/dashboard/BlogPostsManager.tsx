import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Loader2, Plus } from "lucide-react";
import { toast } from "sonner";
import { BlogPostForm } from "./blog/BlogPostForm";
import { BlogPostList } from "./blog/BlogPostList";
import type { BlogPost, BlogPostInput } from "@/types/blog";

const BlogPostsManager = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<Partial<BlogPost>>({});

  const { data: posts, isLoading, refetch } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("date", { ascending: false });
      
      if (error) throw error;
      
      // Transform the data to include the required category field
      return (data || []).map(post => ({
        ...post,
        category: post.category || "general" // Provide a default category if none exists
      })) as BlogPost[];
    },
  });

  const handleSubmit = async (postData: BlogPostInput) => {
    try {
      if (currentPost.id) {
        const { error } = await supabase
          .from("blog_posts")
          .update(postData)
          .eq("id", currentPost.id);
        
        if (error) throw error;
        toast.success("Blog yazısı güncellendi");
      } else {
        const { error } = await supabase
          .from("blog_posts")
          .insert([postData]);
        
        if (error) throw error;
        toast.success("Blog yazısı eklendi");
      }
      
      setCurrentPost({});
      setIsEditing(false);
      refetch();
    } catch (error) {
      toast.error("Bir hata oluştu");
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Bu blog yazısını silmek istediğinize emin misiniz?")) return;
    
    try {
      const { error } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", id);
      
      if (error) throw error;
      toast.success("Blog yazısı silindi");
      refetch();
    } catch (error) {
      toast.error("Bir hata oluştu");
      console.error(error);
    }
  };

  if (isLoading) {
    return <Loader2 className="w-6 h-6 animate-spin" />;
  }

  return (
    <div className="space-y-6">
      {!isEditing ? (
        <div>
          <Button
            onClick={() => {
              setCurrentPost({});
              setIsEditing(true);
            }}
            className="mb-4"
          >
            <Plus className="w-4 h-4 mr-2" />
            Yeni Blog Yazısı
          </Button>

          <BlogPostList
            posts={posts || []}
            onEdit={(post) => {
              setCurrentPost(post);
              setIsEditing(true);
            }}
            onDelete={handleDelete}
          />
        </div>
      ) : (
        <BlogPostForm
          initialData={currentPost}
          onSubmit={handleSubmit}
          onCancel={() => {
            setCurrentPost({});
            setIsEditing(false);
          }}
        />
      )}
    </div>
  );
};

export default BlogPostsManager;