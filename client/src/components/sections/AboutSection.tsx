import { CheckCircle2 } from 'lucide-react';

const TIMELINE_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663260804300/BTjgjxDK2326zQw87RDbhV/about-timeline-K74k9PfjxbH83fc9a4sZof.webp';

const values = [
  { title: 'الابتكار', description: 'نسعى دائماً لتقديم حلول جديدة ومبتكرة' },
  { title: 'الجودة', description: 'نلتزم بأعلى معايير الجودة في كل عملنا' },
  { title: 'الموثوقية', description: 'يمكنك الاعتماد على خدماتنا بكل ثقة' },
  { title: 'الشفافية', description: 'نتعامل بصراحة وشفافية مع عملائنا' },
];

const timeline = [
  { year: '2005', event: 'تأسيس الشركة', side: 'right' },
  { year: '2008', event: 'أول عميل كبير', side: 'left' },
  { year: '2012', event: 'افتتاح مكتب جديد', side: 'right' },
  { year: '2017', event: 'توسع خط الإنتاج', side: 'left' },
  { year: '2021', event: 'التوسع العالمي', side: 'right' },
  { year: '2026', event: 'رائدة في التحول الرقمي', side: 'left' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-sm font-semibold tracking-widest">
              من نحن
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-elegant">
            قصتنا وقيمنا
          </h2>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              الشركة المركزية للحلول الرقمية هي شركة متخصصة في تقديم حلول تقنية متطورة
              تساعد الشركات على التحول الرقمي والنمو المستدام.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              مع خبرة تزيد عن 20 سنة في المجال، نفخر بأننا ساعدنا مئات الشركات
              على تحقيق أهدافها من خلال حلول تقنية مبتكرة وموثوقة.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              فريقنا المتخصص يعمل بكل إخلاص لضمان رضا عملائنا وتحقيق أفضل النتائج.
            </p>
          </div>

          {/* Right Side - Image */}
          <div
            className="relative h-96 rounded-lg overflow-hidden border border-border"
            style={{
              backgroundImage: `url('${TIMELINE_BG}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-elegant mb-12 text-center">
            قيمنا الأساسية
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-elegant mb-12 text-center">
            رحلتنا عبر الزمن
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex ${item.side === 'right' ? 'flex-row' : 'flex-row-reverse'} gap-8 items-center`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${item.side === 'right' ? 'text-right' : 'text-left'}`}>
                    <div className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300">
                      <p className="text-primary font-bold text-lg">{item.year}</p>
                      <p className="text-foreground font-semibold mt-1">
                        {item.event}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  </div>

                  {/* Empty Space */}
                  <div className="w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
