import ServiceSection from "../components/ServiceSection";
import data from "@/public/content/works.json";
import WorkCard from "../components/WorkCard";

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* services-selection */}
      <section className={`w-full p-5 md:p-20`}>
        <div
          className={`flex items-center md:items-start gap-y-8 flex-col p-14 text-md md:text-xl`}
        >
          <h1 className="text-3xl self-start lg:text-4xl font-bold text-light-coral-2">
            خدماتى
          </h1>
          <p className="leading-relaxed text-start text-[14pt]">
            أحب الجَمَال بكل أشكاله، مرئياً ومحسوساً ومسموعاً إذا كنت كاتباً، أو
            ناشراً، أو صاحب حرفة أساعدك على نقل الفكرة من خيالك إلى خيال الآخر
            بلوحة أو كتاب أو لعبة أو منتج
          </p>
        </div>
      </section>
      <ServiceSection
        section={{
          title: "تصميم غلاف",
          subTitle:
            "حدثني عن الحب من أول نظرة، وعن صورة تعكس جمال كل الكلمات بداخلها.",
          points: [
            {
              text: "المنتج النهائي يكون كتاب، رواية. قصة أو مجلة",
              iconUrl: "/images/icon_1.png",
            },
            {
              text: "تم الانتهاء من تصميم وإخراج المحتوى الداخلي للكتاب",
              iconUrl: "/images/icon_2.png",
            },
            {
              text: "مدة العمل على هذه الخدمة أسبوعين ",
              iconUrl: "/images/icon_3.png",
            },
          ],
          image: "/images/malak_illustrations_header.png",
          urlMethod: "",
          urlService: "",
          urlWorks: "",
          metadata: { backgroundColor: "#E4E7FA" },
        }}
      />
      <ServiceSection
        section={{
          title: "قصص أطفال",
          subTitle:
            "مخلوقات صغيرة، بريئة وفضولية، تتغذى على المعرفة وتكبر بالتجربة.",
          points: [
            {
              text: "المنتج النهائي يكون كتب مصورة",
              iconUrl: "/images/icon_1.png",
            },
            {
              text: "قصص مصورة للأطفال من الولادة وحتى سن العاشرة",
              iconUrl: "/images/icon_2.png",
            },
            {
              text: "يكون عدد صفحات الكتاب بين ١٢ - ٢٤ صفحة مزدوجة ",
              iconUrl: "/images/icon_3.png",
            },
            {
              text: "تم الانتهاء من تصميم وإخراج المحتوى الداخلي للكتاب",
              iconUrl: "/images/icon_4.png",
            },
            {
              text: "مدة العمل على هذه الخدمة ٤ أشهر ",
              iconUrl: "/images/icon_5.png",
            },
          ],
          image: "/images/malak_illustrations_header.png",
          urlMethod: "",
          urlService: "",
          urlWorks: "",
          metadata: { backgroundColor: "#EDF8F6" },
        }}
      />
      <ServiceSection
        section={{
          title: "قصص اليافعين",
          subTitle: "عندما يبدأ الأطفال بالإجابة على أسئلتهم الداخلية بأنفسهم.",
          points: [
            {
              text: "المنتج النهائي يكون روايات أو كتب مصورة",
              iconUrl: "/images/icon_1.png",
            },
            {
              text: "للأطفال من سن عشر سنوات فما فوق ",
              iconUrl: "/images/icon_2.png",
            },
            {
              text: "تم الانتهاء من تصميم وإخراج المحتوى الداخلي للكتاب",
              iconUrl: "/images/icon_3.png",
            },
            {
              text: "مدة العمل على هذه الخدمة ٤ أشهر أو أكثر",
              iconUrl: "/images/icon_4.png",
            },
          ],
          image: "/images/malak_illustrations_header.png",
          urlMethod: "",
          urlService: "",
          urlWorks: "",
          metadata: { backgroundColor: "#FFF9F9" },
        }}
      />
      <ServiceSection
        section={{
          title: "تعاون مشترك",
          subTitle:
            "عبارة عن مشروع مشترك بين الفنانة (ملاك حريري) وشخص أو جهة أخرى، لعمل مشروع مميز. كالرسوم المتحركة أو التعليم و تقديم الورش أو تصميم المنتجات",
          points: [
            {
              text: "تكون الفكرة مطورة ومكتملة وجاهزة للعمل عليها، ليست مجرد فكرة!",
              iconUrl: "/images/icon_1.png",
            },
            {
              text: "وجود إطار زمني محدد",
              iconUrl: "/images/icon_2.png",
            },
            {
              text: "المدة الزمنية لهذه الخدمة تختلف بحسب العمل ",
              iconUrl: "/images/icon_3.png",
            },
          ],
          image: "/images/malak_illustrations_header.png",
          urlMethod: "",
          urlService: "",
          urlWorks: "",
          metadata: { backgroundColor: "#E4E7FA" },
        }}
      />
      <section className={`w-full p-5 md:p-20`}>
        <div
          className={`flex items-center md:items-start gap-y-8 flex-col p-14 text-md md:text-xl`}
        >
          <h1 className="text-3xl self-start lg:text-4xl font-bold text-light-coral-2">
            بعض من أعمالي
          </h1>
          <div className="flex gap-x-10 items-center justify-center">
            {/* Work Cards */}
            <div className="flex flex-wrap gap-5">
              {data.workCards.map((workcard) => (
                <WorkCard key={workcard.title} workCard={workcard} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
