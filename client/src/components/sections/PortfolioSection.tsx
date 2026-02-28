import { useState } from 'react';
import { X } from 'lucide-react';

const PORTFOLIO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663260804300/BTjgjxDK2326zQw87RDbhV/portfolio-accent-XBwuuyegyiMbSYBw.webp';

const projects = [
  {
    id: 1,
    title: 'منصة التجارة الإلكترونية',
    category: 'E-Commerce',
    image: PORTFOLIO_BG,
    description: 'منصة تجارة إلكترونية متقدمة مع نظام دفع آمن',
    details: 'تطوير منصة تجارة إلكترونية كاملة بتقنيات حديثة تدعم عملات متعددة ونظام دفع آمن.',
  },
  {
    id: 2,
    title: 'تطبيق إدارة المشاريع',
    category: 'Mobile App',
    image: PORTFOLIO_BG,
    description: 'تطبيق موبايل لإدارة المشاريع والفريق',
    details: 'تطبيق iOS و Android لإدارة المشاريع مع ميزات التعاون الفوري.',
  },
  {
    id: 3,
    title: 'نظام تحليل البيانات',
    category: 'Analytics',
    image: PORTFOLIO_BG,
    description: 'نظام متقدم لتحليل البيانات والتقارير',
    details: 'نظام تحليل بيانات متقدم يوفر رؤى قيمة للشركات.',
  },
  {
    id: 4,
    title: 'موقع شركة عالمية',
    category: 'Web Design',
    image: PORTFOLIO_BG,
    description: 'موقع إلكتروني احترافي لشركة عالمية',
    details: 'تصميم وتطوير موقع إلكتروني احترافي مع أداء عالي.',
  },
  {
    id: 5,
    title: 'تطبيق الخدمات المالية',
    category: 'Fintech',
    image: PORTFOLIO_BG,
    description: 'تطبيق خدمات مالية آمن وموثوق',
    details: 'تطبيق خدمات مالية متقدم مع أعلى معايير الأمان.',
  },
  {
    id: 6,
    title: 'منصة التعليم الإلكترونية',
    category: 'EdTech',
    image: PORTFOLIO_BG,
    description: 'منصة تعليمية متكاملة مع محتوى تفاعلي',
    details: 'منصة تعليمية شاملة مع أدوات تفاعلية وتقييم متقدم.',
  },
];

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="relative py-24 bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-sm font-semibold tracking-widest">
              أعمالنا السابقة
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-elegant">
            محفظة أعمالنا
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            مشاريع ناجحة أنجزناها لعملائنا من مختلف القطاعات
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div
                className="relative h-64 bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url('${project.image}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent group-hover:from-background/70 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="space-y-2">
                  <p className="text-primary text-sm font-semibold">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-card border border-border rounded-lg max-w-2xl w-full p-8 space-y-6 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <div
              className="h-80 rounded-lg bg-cover bg-center border border-border"
              style={{ backgroundImage: `url('${selectedProject.image}')` }}
            />

            {/* Content */}
            <div className="space-y-4">
              <p className="text-primary text-sm font-semibold">
                {selectedProject.category}
              </p>
              <h2 className="text-3xl font-bold text-elegant">
                {selectedProject.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {selectedProject.details}
              </p>

              {/* CTA */}
              <button className="btn-elegant w-full mt-6">
                تحدث معنا عن هذا المشروع
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
