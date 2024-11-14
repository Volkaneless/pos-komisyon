import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2, Plus, Pencil, Trash } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

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
      return data;
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (currentPost.id) {
        const { error } = await supabase
          .from("blog_posts")
          .update(currentPost)
          .eq("id", currentPost.id);
        
        if (error) throw error;
        toast.success("Blog yazısı güncellendi");
      } else {
        const { error } = await supabase
          .from("blog_posts")
          .insert([currentPost]);
        
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

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Başlık</TableHead>
                <TableHead>Özet</TableHead>
                <TableHead>Tarih</TableHead>
                <TableHead>İşlemler</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts?.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>{post.title}</TableCell>
                  <TableCell>{post.excerpt}</TableCell>
                  <TableCell>
                    {new Date(post.date).toLocaleDateString("tr-TR")}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => {
                          setCurrentPost(post);
                          setIsEditing(true);
                        }}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => handleDelete(post.id)}
                      >
                        <Trash className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Başlık</label>
            <Input
              value={currentPost.title || ""}
              onChange={(e) =>
                setCurrentPost({ ...currentPost, title: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block mb-2">Özet</label>
            <Input
              value={currentPost.excerpt || ""}
              onChange={(e) =>
                setCurrentPost({ ...currentPost, excerpt: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block mb-2">İçerik</label>
            <Textarea
              value={currentPost.content || ""}
              onChange={(e) =>
                setCurrentPost({ ...currentPost, content: e.target.value })
              }
              required
              rows={10}
            />
          </div>
          <div className="flex gap-2">
            <Button type="submit">
              {currentPost.id ? "Güncelle" : "Ekle"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setCurrentPost({});
                setIsEditing(false);
              }}
            >
              İptal
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default BlogPostsManager;