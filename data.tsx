import React from 'react';
import { PageContent } from './types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Helper to create chart component
const MarketChart = () => {
  const data = [
    { name: '2023', value: 6.5 },
    { name: '2024', value: 7.2 },
    { name: '2025', value: 8.19 },
    { name: '2026', value: 9.5 },
  ];

  return (
    <div className="h-40 md:h-48 w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
          <YAxis stroke="#94a3b8" fontSize={12} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#06b6d4', color: '#e6eef6' }}
            itemStyle={{ color: '#06b6d4' }}
          />
          <Bar dataKey="value" fill="#06b6d4" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-center text-[10px] md:text-xs text-slate-400 mt-2">نمو إيرادات التجارة الإلكترونية (مليار دولار)</p>
    </div>
  );
};

export const pages: PageContent[] = [
  {
    id: 'cover',
    type: 'cover',
    title: 'XFUSE',
    subtitle: 'تقرير بحث السوق',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-6 md:space-y-8 border-4 border-xfuse-accent/30 p-2 md:p-4">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-xfuse-accent to-blue-900 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.6)] animate-pulse">
          <span className="text-4xl font-bold text-white">X</span>
        </div>
        <div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-xfuse-accent to-white drop-shadow-lg">
            XFUSE
          </h1>
          <div className="h-1 w-24 bg-xfuse-accent mx-auto my-4 rounded-full"></div>
          <h2 className="text-xl md:text-2xl font-bold text-white">تقرير بحث السوق</h2>
          <p className="text-xfuse-accent font-mono mt-2">أكتوبر 2025</p>
        </div>
        <div className="mt-8 md:mt-12 text-xs md:text-sm text-slate-400 max-w-xs mx-auto">
          نظرة عامة • تحليل منافسين • توصيات عملية
        </div>
      </div>
    )
  },
  {
    id: 'p1',
    type: 'content',
    pageNumber: 1,
    title: 'الملخص التنفيذي',
    content: (
      <div className="space-y-4 md:space-y-6">
        <p className="leading-relaxed text-justify text-sm md:text-base">
          تقف <span className="text-xfuse-accent font-bold">XFUSE</span> أمام فرصة ذهبية لقيادة قطاع الخدمات الرقمية في مصر. يشير التحليل إلى سوق متنامي بسرعة، متعطش للحلول التقنية المبتكرة التي تدمج بين الثقة والكفاءة.
        </p>
        <div className="bg-slate-900/50 p-3 md:p-4 rounded-lg border-r-4 border-xfuse-accent">
          <h3 className="text-base md:text-lg font-bold text-xfuse-accent mb-2">التوصية الرئيسية</h3>
          <p className="text-xs md:text-sm">التركيز المكثف على بناء "الثقة" ودمج ميزات الذكاء الاصطناعي كقيمة مضافة أساسية لتميز العلامة التجارية عن المنافسين التقليديين.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-4 mt-4">
          <div className="text-center p-2 md:p-3 bg-slate-800 rounded">
            <div className="text-xl md:text-2xl font-bold text-xfuse-accent">+25%</div>
            <div className="text-[10px] md:text-xs text-slate-400">نمو سنوي متوقع</div>
          </div>
          <div className="text-center p-2 md:p-3 bg-slate-800 rounded">
            <div className="text-xl md:text-2xl font-bold text-xfuse-accent">AI</div>
            <div className="text-[10px] md:text-xs text-slate-400">ميزة تنافسية</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'p2',
    type: 'content',
    pageNumber: 2,
    title: 'نظرة عامة على السوق',
    content: (
      <div className="space-y-4">
        <ul className="space-y-3 md:space-y-4 list-disc list-inside marker:text-xfuse-accent text-sm md:text-base">
          <li>
            <strong className="text-white">قاعدة مستخدمين ضخمة:</strong> أكثر من 60 مليون مستخدم للإنترنت في مصر، مما يخلق سوقاً رقمياً واسعاً.
          </li>
          <li>
            <strong className="text-white">حجم السوق:</strong> إيرادات التجارة الإلكترونية تقدر بـ 8.19 مليار دولار، مع توقعات بنمو مستمر.
          </li>
          <li>
            <strong className="text-white">التركيز الجغرافي:</strong> الأنشطة تتركز بشكل رئيسي في القاهرة، الجيزة، والإسكندرية، وهي المراكز الحضرية الرئيسية.
          </li>
        </ul>
        <MarketChart />
      </div>
    )
  },
  {
    id: 'p3',
    type: 'content',
    pageNumber: 3,
    title: 'الفرص المتاحة',
    content: (
      <div className="space-y-4 md:space-y-6">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-xfuse-accent to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative p-4 md:p-6 bg-slate-900 ring-1 ring-slate-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 space-x-reverse">
             <div className="space-y-2">
               <p className="text-slate-100 font-bold text-sm md:text-base">فجوة الذكاء الاصطناعي</p>
               <p className="text-slate-400 text-xs md:text-sm leading-5 md:leading-6">هناك نقص ملحوظ في مزودي خدمات الـ AI المحليين. فرصة قوية لتقديم <span className="text-xfuse-accent">Etomotion AI</span> كحل رائد.</p>
             </div>
          </div>
        </div>
        
        <div className="space-y-2">
            <h3 className="font-bold text-white text-sm md:text-base">متطلبات السوق الحالية:</h3>
            <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 md:px-3 bg-slate-800 text-xfuse-accent rounded-full text-xs md:text-sm border border-slate-700">مواقع متجاوبة</span>
                <span className="px-2 py-1 md:px-3 bg-slate-800 text-xfuse-accent rounded-full text-xs md:text-sm border border-slate-700">تطبيقات سريعة</span>
                <span className="px-2 py-1 md:px-3 bg-slate-800 text-xfuse-accent rounded-full text-xs md:text-sm border border-slate-700">أتمتة العمليات</span>
            </div>
        </div>
      </div>
    )
  },
  {
    id: 'p4',
    type: 'content',
    pageNumber: 4,
    title: 'الجمهور المستهدف',
    content: (
      <div className="space-y-4 md:space-y-6">
        <div className="grid grid-cols-2 gap-3 md:gap-4 text-center">
            <div className="bg-slate-800/50 p-3 md:p-4 rounded border border-slate-700">
                <div className="text-2xl md:text-3xl mb-1">👥</div>
                <div className="font-bold text-white text-sm md:text-base">العمر</div>
                <div className="text-xfuse-accent text-xs md:text-sm">18 - 45 سنة</div>
            </div>
            <div className="bg-slate-800/50 p-3 md:p-4 rounded border border-slate-700">
                <div className="text-2xl md:text-3xl mb-1">📱</div>
                <div className="font-bold text-white text-sm md:text-base">السلوك</div>
                <div className="text-xfuse-accent text-xs md:text-sm">Mobile First</div>
            </div>
        </div>
        
        <div className="bg-slate-900 p-3 md:p-4 rounded-lg">
            <h3 className="text-xfuse-accent font-bold mb-3 border-b border-slate-700 pb-2 text-sm md:text-base">الاهتمامات الرئيسية</h3>
            <div className="grid grid-cols-1 gap-2 text-xs md:text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>التجارة الإلكترونية والبيع أونلاين</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>التكنولوجيا وريادة الأعمال</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>تطوير الذات والتعليم الرقمي</span>
                </div>
            </div>
        </div>
      </div>
    )
  },
  {
    id: 'p5',
    type: 'content',
    pageNumber: 5,
    title: 'تحليل الشخصيات (1/2)',
    content: (
      <div className="flex flex-col gap-4 md:gap-6">
        {/* Persona 1 */}
        <div className="bg-gradient-to-l from-slate-800 to-slate-900 p-3 md:p-4 rounded-lg border-r-4 border-yellow-500">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-white text-base md:text-lg">رائد الأعمال المبتدئ</h3>
                <span className="text-[10px] md:text-xs bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded">يحتاج توجيه</span>
            </div>
            <p className="text-xs md:text-sm text-slate-300 mb-2">شخص لديه فكرة ويبدأ مشروعه الأول. يفتقر للخبرة التقنية ويخاف من الفشل.</p>
            <p className="text-[10px] md:text-xs text-slate-500">الحل: باقات "ابدأ مشروعك" شاملة التوجيه.</p>
        </div>

        {/* Persona 2 */}
        <div className="bg-gradient-to-l from-slate-800 to-slate-900 p-3 md:p-4 rounded-lg border-r-4 border-blue-500">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-white text-base md:text-lg">صاحب الشركة الصغيرة</h3>
                <span className="text-[10px] md:text-xs bg-blue-500/20 text-blue-500 px-2 py-1 rounded">يحتاج استقرار</span>
            </div>
            <p className="text-xs md:text-sm text-slate-300 mb-2">يدير عملاً قائماً ويريد التوسع رقمياً، لكنه قلق من التكاليف المخفية.</p>
            <p className="text-[10px] md:text-xs text-slate-500">الحل: شفافية الأسعار ودعم فني مستمر.</p>
        </div>
      </div>
    )
  },
  {
    id: 'p6',
    type: 'content',
    pageNumber: 6,
    title: 'تحليل الشخصيات (2/2)',
    content: (
      <div className="flex flex-col gap-4 md:gap-6">
         {/* Persona 3 */}
         <div className="bg-gradient-to-l from-slate-800 to-slate-900 p-3 md:p-4 rounded-lg border-r-4 border-purple-500">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-white text-base md:text-lg">المطور التقني</h3>
                <span className="text-[10px] md:text-xs bg-purple-500/20 text-purple-500 px-2 py-1 rounded">يحتاج مرونة</span>
            </div>
            <p className="text-xs md:text-sm text-slate-300 mb-2">يبحث عن أدوات تساعده في عمله أو حلول متقدمة (API, AI) لدمجها في مشاريعه.</p>
            <p className="text-[10px] md:text-xs text-slate-500">الحل: توفير Etomotion AI كأداة للمطورين.</p>
        </div>

        {/* Persona 4 */}
         <div className="bg-gradient-to-l from-slate-800 to-slate-900 p-3 md:p-4 rounded-lg border-r-4 border-green-500">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-white text-base md:text-lg">تاجر التجارة الإلكترونية</h3>
                <span className="text-[10px] md:text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded">حلول دفع</span>
            </div>
            <p className="text-xs md:text-sm text-slate-300 mb-2">يواجه مشاكل في بوابات الدفع والشحن وإدارة المخزون.</p>
            <p className="text-[10px] md:text-xs text-slate-500">الحل: متاجر متكاملة مربوطة بشركات الشحن والدفع.</p>
        </div>
      </div>
    )
  },
  {
    id: 'p7',
    type: 'content',
    pageNumber: 7,
    title: 'المشهد التنافسي',
    content: (
      <div className="space-y-4">
        <p className="text-xs md:text-sm text-slate-400">تحليل لأبرز اللاعبين في السوق المصري حالياً:</p>
        
        <div className="grid gap-2 md:gap-3">
            {[
                {name: "Qeema Tech", trait: "حلول تقنية قوية"},
                {name: "New Waves", trait: "تسويق إبداعي"},
                {name: "CanGrow", trait: "تركيز على النمو"},
                {name: "First Markets", trait: "خبرة سوقية"},
                {name: "Business Up", trait: "حلول أعمال"}
            ].map((comp, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 bg-slate-800 rounded border-b border-slate-700">
                    <span className="font-bold text-white text-sm md:text-base">{comp.name}</span>
                    <span className="text-xs text-slate-400">{comp.trait}</span>
                </div>
            ))}
        </div>
      </div>
    )
  },
  {
    id: 'p8',
    type: 'content',
    pageNumber: 8,
    title: 'ميزة XFUSE التنافسية',
    content: (
      <div className="flex flex-col justify-center h-full space-y-6 md:space-y-8">
        <div className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-xfuse-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 border border-xfuse-accent">
                <span className="text-2xl md:text-3xl">🤖</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white">تكامل الذكاء الاصطناعي</h3>
            <p className="text-slate-400 text-xs md:text-sm mt-2 px-2 md:px-4">استخدام تقنيات Etomotion AI لتحليل البيانات وأتمتة المهام بشكل لا يوفره المنافسون.</p>
        </div>

        <div className="text-center">
             <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 border border-green-500">
                <span className="text-2xl md:text-3xl">💎</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white">مرونة الأسعار</h3>
            <p className="text-slate-400 text-xs md:text-sm mt-2 px-2 md:px-4">هيكلية أسعار تناسب الشركات الناشئة والمشاريع الصغيرة دون التضحية بالجودة.</p>
        </div>
      </div>
    )
  },
  {
    id: 'p9',
    type: 'content',
    pageNumber: 9,
    title: 'تحليل SWOT',
    content: (
        <div className="grid grid-cols-2 gap-3 md:gap-4 h-full content-start md:content-center">
            <div className="bg-green-900/20 p-2 md:p-3 rounded border border-green-900/50">
                <h4 className="text-green-400 font-bold mb-2 text-sm md:text-base">نقاط القوة</h4>
                <ul className="text-[10px] md:text-xs space-y-1 list-disc list-inside text-slate-300">
                    <li>جودة تقنية عالية</li>
                    <li>خبرة في الـ AI</li>
                    <li>فريق مرن</li>
                </ul>
            </div>
            <div className="bg-red-900/20 p-2 md:p-3 rounded border border-red-900/50">
                <h4 className="text-red-400 font-bold mb-2 text-sm md:text-base">نقاط الضعف</h4>
                <ul className="text-[10px] md:text-xs space-y-1 list-disc list-inside text-slate-300">
                    <li>علامة تجارية جديدة</li>
                    <li>ميزانية تسويق محدودة</li>
                </ul>
            </div>
            <div className="bg-blue-900/20 p-2 md:p-3 rounded border border-blue-900/50">
                <h4 className="text-blue-400 font-bold mb-2 text-sm md:text-base">الفرص</h4>
                <ul className="text-[10px] md:text-xs space-y-1 list-disc list-inside text-slate-300">
                    <li>نمو السوق الرقمي</li>
                    <li>طلب متزايد على الأتمتة</li>
                </ul>
            </div>
            <div className="bg-orange-900/20 p-2 md:p-3 rounded border border-orange-900/50">
                <h4 className="text-orange-400 font-bold mb-2 text-sm md:text-base">التهديدات</h4>
                <ul className="text-[10px] md:text-xs space-y-1 list-disc list-inside text-slate-300">
                    <li>منافسة شرسة</li>
                    <li>تغيرات اقتصادية سريعة</li>
                </ul>
            </div>
        </div>
    )
  },
  {
    id: 'p10',
    type: 'content',
    pageNumber: 10,
    title: 'أهداف الحملة والميزانية',
    content: (
      <div className="space-y-6 md:space-y-8 mt-2 md:mt-4">
        <div className="bg-slate-800 p-4 md:p-6 rounded-xl border border-slate-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-xfuse-accent/20 rounded-bl-full"></div>
            <h3 className="text-lg md:text-xl text-slate-300 mb-2">هدف المبيعات</h3>
            <div className="text-3xl md:text-4xl font-black text-white">100,000 <span className="text-sm md:text-base font-normal text-xfuse-accent">ج.م</span></div>
            <p className="text-[10px] md:text-xs text-slate-400 mt-2">خلال الربع الحالي</p>
        </div>

        <div className="bg-slate-800 p-4 md:p-6 rounded-xl border border-slate-600">
             <h3 className="text-lg md:text-xl text-slate-300 mb-2">الميزانية المقترحة</h3>
             <div className="text-3xl md:text-4xl font-black text-white">3,000 <span className="text-sm md:text-base font-normal text-xfuse-accent">ج.م</span></div>
             <p className="text-[10px] md:text-xs text-slate-400 mt-2">للحملة الأولية (تجريبية)</p>
        </div>
      </div>
    )
  },
  {
    id: 'p11',
    type: 'content',
    pageNumber: 11,
    title: 'خطة التنفيذ (30 يوم)',
    content: (
        <div className="space-y-4">
            <div className="flex gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-slate-800 rounded-full flex items-center justify-center border border-xfuse-accent font-bold text-sm md:text-base">1-10</div>
                <div>
                    <h4 className="font-bold text-white text-sm md:text-base">المرحلة التعليمية</h4>
                    <p className="text-xs md:text-sm text-slate-400">نشر محتوى يثقف الجمهور بأهمية التحول الرقمي والـ AI.</p>
                </div>
            </div>
            <div className="flex gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-slate-800 rounded-full flex items-center justify-center border border-xfuse-accent font-bold text-sm md:text-base">11-20</div>
                <div>
                    <h4 className="font-bold text-white text-sm md:text-base">مرحلة العرض</h4>
                    <p className="text-xs md:text-sm text-slate-400">عرض سابقة الأعمال (Showcase) وقصص نجاح وهمية أو حقيقية.</p>
                </div>
            </div>
             <div className="flex gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-slate-800 rounded-full flex items-center justify-center border border-xfuse-accent font-bold text-sm md:text-base">21-30</div>
                <div>
                    <h4 className="font-bold text-white text-sm md:text-base">مرحلة التفاعل</h4>
                    <p className="text-xs md:text-sm text-slate-400">إطلاق الإعلانات الممولة على فيسبوك وإنستجرام مع عروض خاصة.</p>
                </div>
            </div>
            <div className="mt-4 p-2 md:p-3 bg-blue-900/30 border border-blue-500/30 rounded text-center text-xs md:text-sm">
                القنوات: Facebook, Instagram, LinkedIn
            </div>
        </div>
    )
  },
  {
    id: 'p12',
    type: 'content',
    pageNumber: 12,
    title: 'التوصيات النهائية',
    content: (
      <div className="flex flex-col gap-3 md:gap-4">
        <div className="bg-xfuse-accent/10 p-3 md:p-4 rounded border-l-4 border-xfuse-accent">
            <h3 className="font-bold text-white mb-1 text-sm md:text-base">بناء الثقة أولاً</h3>
            <p className="text-xs md:text-sm text-slate-300">العميل المصري يحتاج أن يثق قبل أن يدفع. استخدم الشهادات وضمانات الجودة.</p>
        </div>
        <div className="bg-slate-800 p-3 md:p-4 rounded border-l-4 border-white">
            <h3 className="font-bold text-white mb-1 text-sm md:text-base">المحتوى المرئي</h3>
            <p className="text-xs md:text-sm text-slate-300">التركيز على الفيديو القصير (Reels) لشرح الخدمات المعقدة ببساطة.</p>
        </div>
        <div className="bg-slate-800 p-3 md:p-4 rounded border-l-4 border-white">
            <h3 className="font-bold text-white mb-1 text-sm md:text-base">Etomotion AI</h3>
            <p className="text-xs md:text-sm text-slate-300">اجعل الذكاء الاصطناعي هو "النجم" في حملاتك التسويقية لجذب الانتباه.</p>
        </div>
      </div>
    )
  },
  {
    id: 'back',
    type: 'back-cover',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-6 md:space-y-8">
        <div className="text-5xl md:text-6xl font-black text-slate-800 select-none">XFUSE</div>
        <div className="w-full h-px bg-slate-800"></div>
        <div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">تواصل معنا</h3>
            <p className="text-slate-400 text-sm md:text-base">info@xfuse.tech</p>
            <p className="text-slate-400 text-sm md:text-base">+20 123 456 7890</p>
            <p className="text-slate-400 mt-2 text-sm md:text-base">القاهرة، مصر</p>
        </div>
        <div className="absolute bottom-6 md:bottom-8 text-[10px] md:text-xs text-slate-600">
            © 2025 XFUSE Market Research. All Rights Reserved.
        </div>
      </div>
    )
  }
];
