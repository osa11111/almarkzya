import { Calendar, User, ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'مستقبل التحول الرقمي في 2026',
    excerpt: 'استكشف أحدث الاتجاهات والتقنيات التي ستشكل مستقبل التحول الرقمي',
    date: '28 فبراير 2026',
    author: 'أحمد محمد',
    category: 'التحول الرقمي',
  },
  {
    id: 2,
    title: 'أفضل الممارسات في أمان البيانات',
    excerpt: 'نصائح وأفضل الممارسات لحماية بيانات شركتك من التهديدات السيبرانية',
    date: '25 فبراير 2026',
    author: 'فاطمة علي',
    category: 'الأمان',
  },
  {
    id: 3,
    title: 'بناء تطبيقات موبايل عالية الأداء',
    excerpt: 'دليل شامل لتطوير تطبيقات موبايل سريعة وموثوقة',
    date: '22 فبراير 2026',
    author: 'محمود حسن',
    category: 'تطوير التطبيقات',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-sm font-semibold tracking-widest">
              مدونتنا
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-elegant">
            أحدث المقالات
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            تابع أحدث الأخبار والمقالات التقنية من فريقنا
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col"
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                  {article.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-muted-foreground mb-6 flex-grow">
                {article.excerpt}
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4" />

              {/* Meta Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User size={16} />
                  <span>{article.author}</span>
                </div>
              </div>

              {/* Read More Link */}
              <button className="flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                اقرأ المقالة
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-16">
          <button className="btn-elegant px-8 py-4">
            عرض جميع المقالات
          </button>
        </div>
      </div>
    </section>
  );
}
