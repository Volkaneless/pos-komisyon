import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

interface POSProvider {
  id: string;
  logo: string;
  name: string;
  type: string;
  monthly_fee: string;
  commission_rate: string;
  features: string[];
}

const POSManager = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentPOS, setCurrentPOS] = useState<Partial<POSProvider>>({
    features: [],
  });

  const { data: providers, isLoading, refetch } = useQuery({
    queryKey: ["pos-providers"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("pos_providers")
        .select("*")
        .order("name");
      
      if (error) throw error;
      return data;
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Convert features string to array if it's a string
      const posData = {
        ...currentPOS,
        features: typeof currentPOS.features === "string" 
          ? currentPOS.features.split("\n").filter(f => f.trim())
          : currentPOS.features,
      };

      if (currentPOS.id) {
        const { error } = await supabase
          .from("pos_providers")
          .update(posData)
          .eq("id", currentPOS.id);
        
        if (error) throw error;
        toast.success("POS güncellendi");
      } else {
        const { error } = await supabase
          .from("pos_providers")
          .insert([{ ...posData, id: currentPOS.name?.toLowerCase().replace(/\s+/g, "-") }]);
        
        if (error) throw error;
        toast.success("POS eklendi");
      }
      
      setCurrentPOS({ features: [] });
      setIsEditing(false);
      refetch();
    } catch (error) {
      toast.error("Bir hata oluştu");
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bu POS'u silmek istediğinize emin misiniz?")) return;
    
    try {
      const { error } = await supabase
        .from("pos_providers")
        .delete()
        .eq("id", id);
      
      if (error) throw error;
      toast.success("POS silindi");
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
              setCurrentPOS({ features: [] });
              setIsEditing(true);
            }}
            className="mb-4"
          >
            <Plus className="w-4 h-4 mr-2" />
            Yeni POS
          </Button>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>İsim</TableHead>
                <TableHead>Tür</TableHead>
                <TableHead>Aylık Ücret</TableHead>
                <TableHead>Komisyon</TableHead>
                <TableHead>İşlemler</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {providers?.map((provider) => (
                <TableRow key={provider.id}>
                  <TableCell>{provider.name}</TableCell>
                  <TableCell>{provider.type}</TableCell>
                  <TableCell>{provider.monthly_fee}</TableCell>
                  <TableCell>{provider.commission_rate}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => {
                          setCurrentPOS({
                            ...provider,
                            features: provider.features.join("\n"),
                          });
                          setIsEditing(true);
                        }}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => handleDelete(provider.id)}
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
            <label className="block mb-2">İsim</label>
            <Input
              value={currentPOS.name || ""}
              onChange={(e) =>
                setCurrentPOS({ ...currentPOS, name: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block mb-2">Logo URL</label>
            <Input
              value={currentPOS.logo || ""}
              onChange={(e) =>
                setCurrentPOS({ ...currentPOS, logo: e.target.value })
              }
              required
              placeholder="/logo.svg"
            />
          </div>
          <div>
            <label className="block mb-2">Tür</label>
            <Input
              value={currentPOS.type || ""}
              onChange={(e) =>
                setCurrentPOS({ ...currentPOS, type: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block mb-2">Aylık Ücret</label>
            <Input
              value={currentPOS.monthly_fee || ""}
              onChange={(e) =>
                setCurrentPOS({ ...currentPOS, monthly_fee: e.target.value })
              }
              required
              placeholder="0 TL / Ay"
            />
          </div>
          <div>
            <label className="block mb-2">Komisyon Oranı</label>
            <Input
              value={currentPOS.commission_rate || ""}
              onChange={(e) =>
                setCurrentPOS({ ...currentPOS, commission_rate: e.target.value })
              }
              required
              placeholder="%1.99"
            />
          </div>
          <div>
            <label className="block mb-2">Özellikler (Her satıra bir özellik)</label>
            <Textarea
              value={typeof currentPOS.features === "string" ? currentPOS.features : currentPOS.features?.join("\n")}
              onChange={(e) =>
                setCurrentPOS({ ...currentPOS, features: e.target.value })
              }
              required
              rows={5}
            />
          </div>
          <div className="flex gap-2">
            <Button type="submit">
              {currentPOS.id ? "Güncelle" : "Ekle"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setCurrentPOS({ features: [] });
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

export default POSManager;