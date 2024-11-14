import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Loader2, Plus } from "lucide-react";
import { toast } from "sonner";
import { POSForm } from "./pos/POSForm";
import { POSList } from "./pos/POSList";
import type { POSProvider, POSProviderInput } from "@/types/pos";

const POSManager = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentPOS, setCurrentPOS] = useState<Partial<POSProvider>>({});

  const { data: providers, isLoading, refetch } = useQuery({
    queryKey: ["pos-providers"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("pos_providers")
        .select("*")
        .order("name");
      
      if (error) throw error;
      return data as POSProvider[];
    },
  });

  const handleSubmit = async (posData: POSProviderInput) => {
    try {
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
          .insert([{ 
            ...posData, 
            id: posData.name.toLowerCase().replace(/\s+/g, "-") 
          }]);
        
        if (error) throw error;
        toast.success("POS eklendi");
      }
      
      setCurrentPOS({});
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
              setCurrentPOS({});
              setIsEditing(true);
            }}
            className="mb-4"
          >
            <Plus className="w-4 h-4 mr-2" />
            Yeni POS
          </Button>

          <POSList
            providers={providers || []}
            onEdit={(provider) => {
              setCurrentPOS(provider);
              setIsEditing(true);
            }}
            onDelete={handleDelete}
          />
        </div>
      ) : (
        <POSForm
          initialData={currentPOS}
          onSubmit={handleSubmit}
          onCancel={() => {
            setCurrentPOS({});
            setIsEditing(false);
          }}
        />
      )}
    </div>
  );
};

export default POSManager;