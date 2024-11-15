import { useParams, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet";
import { POSHeader } from "@/components/pos-detail/POSHeader";
import { POSFeatures } from "@/components/pos-detail/POSFeatures";
import { POSFAQ } from "@/components/pos-detail/POSFAQ";
import { toast } from "sonner";

const POSDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data: pos, isLoading } = useQuery({
    queryKey: ["pos", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("pos_providers")
        .select()
        .eq('id', slug)
        .maybeSingle();

      if (error) {
        toast.error("POS bilgileri yüklenirken bir hata oluştu");
        throw error;
      }

      if (!data) {
        navigate("/");
        toast.error("POS bulunamadı");
        throw new Error("POS not found");
      }

      return data;
    },
  });

  if (isLoading) {
    return <div className="container mx-auto px-4 pt-24">Yükleniyor...</div>;
  }

  if (!pos) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{pos.name} - POS Detayları</title>
        <meta 
          name="description" 
          content={`${pos.name} POS cihazı özellikleri, komisyon oranları ve detaylı bilgiler.`} 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <POSHeader pos={pos} />

        <Tabs defaultValue="explanation" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none bg-transparent space-x-8">
            <TabsTrigger 
              value="explanation" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0"
            >
              Açıklama
            </TabsTrigger>
            <TabsTrigger 
              value="commissions" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0"
            >
              Komisyon Oranları
            </TabsTrigger>
            <TabsTrigger 
              value="features" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0"
            >
              Özellikler
            </TabsTrigger>
          </TabsList>

          <TabsContent value="explanation" className="mt-12">
            <POSFeatures features={[
              "30 Nisan 2025 tarihine kadar her ay güncel sürpriz komisyon oranlarından faydalanın!",
              `İlk POS'unuzu ${pos.name}'den almak istiyorsanız öncelikle belli bir süre diğer işlemleriniz (ödemeler, transferler, mevduat hesapları vb.) için kullanmanız gerekmektedir.`,
              "POS başvurunuzun değerlendirmeye alınabilmesi için mevcutta herhangi bir bankanın POS'unu aktif bir şekilde kullanıyor olmanız gerekmektedir.",
              "Kampanya, henüz müşterisi olmayan firmalar için geçerlidir."
            ]} />
            <POSFAQ />
          </TabsContent>

          <TabsContent value="commissions" className="mt-12">
            <POSFeatures features={[
              "Tek çekim haricindeki diğer komisyon oranlarını başvuru adımında görüntüleyebilirsiniz."
            ]} />
            <POSFAQ />
          </TabsContent>

          <TabsContent value="features" className="mt-12">
            <POSFeatures features={pos.features} />
            <POSFAQ />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default POSDetail;