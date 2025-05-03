
import { Info, ShieldCheck, Users, MessageSquare } from "lucide-react";
import MetaTags from "@/components/MetaTags";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const teamMembers = [
    {
      name: "Ahmet Yılmaz",
      role: "Kurucu & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      bio: "10+ yıl fintech ve ödeme sistemleri deneyimi"
    },
    {
      name: "Ayşe Kaya",
      role: "İş Geliştirme Direktörü",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      bio: "Bankacılık ve FinTech alanında uzman"
    },
    {
      name: "Mehmet Demir",
      role: "Teknoloji Direktörü",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      bio: "Yazılım geliştirme ve veri analizi konularında uzman"
    }
  ];
  
  const timelineEvents = [
    {
      year: "2021",
      title: "Kuruluş",
      description: "POS Komisyon platformu bir ihtiyaç olarak doğdu ve ilk versiyonu yayına alındı."
    },
    {
      year: "2022",
      title: "Büyüme",
      description: "10.000+ kullanıcıya ulaşıldı ve yeni hesaplayıcılar eklendi."
    },
    {
      year: "2023",
      title: "Genişleme",
      description: "Pazaryeri komisyon hesaplayıcıları ve karşılaştırma araçları eklendi."
    },
    {
      year: "2024",
      title: "Gelişim",
      description: "Yeni tasarım ve geliştirilmiş özelliklerle platformumuz güncellendi."
    }
  ];

  return (
    <>
      <MetaTags
        title="POS Karşılaştırma Platformu Hakkında | POS Compare"
        description="POS karşılaştırma platformumuz ile işletmeniz için en uygun POS çözümünü bulun. Banka ve fintech POS cihazlarını karşılaştırın."
        keywords="pos karşılaştırma, pos cihazı karşılaştırma, pos compare hakkında, pos danışmanlık, pos çözümleri"
        canonicalPath="/about"
        priority={20}
      />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Info className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Hakkımızda</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Türkiye'nin en kapsamlı POS karşılaştırma platformu olarak, işletmelerin doğru ödeme çözümünü bulmalarına yardımcı oluyoruz
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-card p-8 rounded-lg mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="mb-6 text-lg">
              <span className="font-semibold text-primary">POS Komisyon</span> olarak, işletmelerin en uygun POS çözümünü bulmalarına yardımcı olmak için yola çıktık. Platformumuz, farklı POS sağlayıcılarının tekliflerini karşılaştırmanıza ve işletmeniz için en doğru kararı vermenize olanak tanır.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-3 rounded-full mb-4">
                      <ShieldCheck className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Misyonumuz</h3>
                    <p className="text-gray-600">
                      İşletmelerin dijital ödeme çözümlerini seçerken bilinçli kararlar vermelerini sağlamak ve bu süreçte yanlarında olmak.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-3 rounded-full mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Vizyonumuz</h3>
                    <p className="text-gray-600">
                      Türkiye'nin en güvenilir POS karşılaştırma platformu olarak, işletmelerin dijital dönüşümüne öncülük etmek.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-3 rounded-full mb-4">
                      <MessageSquare className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Değerlerimiz</h3>
                    <p className="text-gray-600">
                      Şeffaflık, Güvenilirlik, Müşteri odaklılık ve Yenilikçilik ilkelerimizle hizmet veriyoruz.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-semibold mb-6">Hikayemiz</h2>
            <p className="mb-8">
              POS Komisyon, küçük ve orta ölçekli işletmelerin ödeme sistemleri konusunda yaşadığı zorlukları gözlemleyen bir grup finans ve teknoloji uzmanı tarafından kuruldu. Piyasadaki farklı POS cihazları ve komisyon oranları arasında karşılaştırma yapmanın zorluğunu fark eden ekibimiz, bu soruna çözüm getirmek için bu platformu geliştirdi.
            </p>
            
            <div className="space-y-8 my-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative pl-10 pb-8">
                  <div className="absolute left-0 top-0 bg-primary text-white text-sm font-bold py-1 px-2 rounded">
                    {event.year}
                  </div>
                  <div className={`border-l-2 border-primary absolute left-[18px] top-8 h-full ${index === timelineEvents.length - 1 ? 'hidden' : ''}`}></div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <h2 className="text-2xl font-semibold mb-6">Ekibimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                  />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-gray-600 mt-2">{member.bio}</p>
                </div>
              ))}
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Tarafsız ve güncel karşılaştırmalar</li>
              <li>Detaylı komisyon oranı bilgileri</li>
              <li>Kullanımı kolay hesaplayıcılar</li>
              <li>Uzman değerlendirmeleri ve tavsiyeleri</li>
              <li>Sürekli güncellenen içerikler</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
