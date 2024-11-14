import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { POSProvider, POSProviderInput } from "@/types/pos";

interface POSFormProps {
  initialData?: Partial<POSProvider>;
  onSubmit: (data: POSProviderInput) => Promise<void>;
  onCancel: () => void;
}

export const POSForm = ({ initialData, onSubmit, onCancel }: POSFormProps) => {
  const [formData, setFormData] = useState<POSProviderInput>({
    name: initialData?.name || "",
    logo: initialData?.logo || "",
    type: initialData?.type || "",
    monthly_fee: initialData?.monthly_fee || "",
    commission_rate: initialData?.commission_rate || "",
    features: Array.isArray(initialData?.features) 
      ? initialData.features 
      : typeof initialData?.features === 'string'
        ? (initialData.features as string).split('\n').filter(f => f.trim())
        : [],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-2">İsim</label>
        <Input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block mb-2">Logo URL</label>
        <Input
          value={formData.logo}
          onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
          required
          placeholder="/logo.svg"
        />
      </div>
      <div>
        <label className="block mb-2">Tür</label>
        <Input
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block mb-2">Aylık Ücret</label>
        <Input
          value={formData.monthly_fee}
          onChange={(e) => setFormData({ ...formData, monthly_fee: e.target.value })}
          required
          placeholder="0 TL / Ay"
        />
      </div>
      <div>
        <label className="block mb-2">Komisyon Oranı</label>
        <Input
          value={formData.commission_rate}
          onChange={(e) => setFormData({ ...formData, commission_rate: e.target.value })}
          required
          placeholder="%1.99"
        />
      </div>
      <div>
        <label className="block mb-2">Özellikler (Her satıra bir özellik)</label>
        <Textarea
          value={formData.features.join("\n")}
          onChange={(e) => setFormData({ 
            ...formData, 
            features: e.target.value.split("\n").filter(f => f.trim())
          })}
          required
          rows={5}
        />
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