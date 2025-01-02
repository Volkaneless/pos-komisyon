import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { BlogPost, BlogPostInput } from "@/types/blog";

interface BlogPostFormProps {
  initialData?: Partial<BlogPost>;
  onSubmit: (data: BlogPostInput) => Promise<void>;
  onCancel: () => void;
}

export const BlogPostForm = ({ initialData, onSubmit, onCancel }: BlogPostFormProps) => {
  const [formData, setFormData] = useState<BlogPostInput>({
    title: initialData?.title || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    date: initialData?.date || new Date().toISOString(),
    category: initialData?.category || "general"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-2">Başlık</label>
        <Input
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block mb-2">Özet</label>
        <Input
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block mb-2">İçerik</label>
        <Textarea
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          required
          rows={10}
        />
      </div>
      <div>
        <label className="block mb-2">Kategori</label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value as BlogPost['category']})}
          className="w-full border rounded-md p-2"
          required
        >
          <option value="general">Genel</option>
          <option value="adsense">POS Cihazları</option>
          <option value="social-media">Sanal POS</option>
          <option value="ppc">Mobil POS</option>
        </select>
      </div>
      <div className="flex gap-2">
        <Button type="submit">
          {initialData?.id ? "Güncelle" : "Ekle"}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          İptal
        </Button>
      </div>
    </form>
  );
};