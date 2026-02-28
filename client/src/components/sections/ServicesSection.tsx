import { Code2, Smartphone, Zap, BarChart3, Lock, Users } from 'lucide-react';

const SERVICES_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663260804300/BTjgjxDK2326zQw87RDbhV/services-accent-mR95i3ckee3eZwZRhS8SH.webp';

const services = [
  {
    icon: Code2,
    title: 'تطوير الويب',
    description: 'حلول ويب متقدمة وسريعة تجمع بين التصميم الأنيق والأداء العالي',
    color: 'from-primary to-secondary',
  },
  {
    icon: Smartphone,
    title: 'تطبيقات الموبايل',
    description: 'تطبيقات موبايل احترافية لـ iOS و Android بأعلى معايير الجودة',
    color: 'from-secondary to-primary',
  },
  {
    icon: Zap,
    title: 'تحسين الأداء',
    description: 'تحسين سرعة وأداء تطبيقاتك وأنظمتك الحالية',
    color: 'from-primary to-secondary',
  },
  {
    icon: BarChart3,
    title: 'تحليل البيانات',
    description: 'استخراج الرؤى القيمة من بيانات عملك لاتخاذ قرارات أفضل',
    color: 'from-secondary to-primary',
  },
  {
    icon: Lock,
    title: 'الأمان السيبراني',
    description: 'حماية شاملة لأنظمتك وبيانات عملائك من التهديدات الرقمية',
    color: 'from-primary to-secondary',
  },
  {
    icon: Users,
    title: 'الاستشارات التقنية',
    description: 'استشارات متخصصة لتحديد أفضل الحلول التقنية لاحتياجاتك',
    color: 'from-secondary to-primary',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-subtle overflow-hidden"
    >
      {/* Decorative Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('${SERVICES_BG}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-sm font-semibold tracking-widest">
              خدماتنا المتميزة
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-elegant">
            حلول تقنية شاملة
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات التقنية المتطورة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${service.color} rounded-lg transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="inline-block p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="h-px bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-6" />

                  {/* Learn More Link */}
                  <button className="text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                    اكتشف المزيد
                    <span>←</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-6">
            هل تريد معرفة المزيد عن خدماتنا؟
          </p>
          <button className="btn-elegant px-8 py-4">
            تحدث معنا الآن
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 -right-20 w-40 h-40 border border-primary/10 rounded-full opacity-20" />
      <div className="absolute bottom-0 -left-20 w-60 h-60 border border-primary/5 rounded-full opacity-10" />
    </section>
  );
}
