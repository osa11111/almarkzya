import { Facebook, MessageCircle, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">C</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground">المركزية</h3>
                <p className="text-xs text-muted-foreground">حلول رقمية</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              شركة متخصصة في تقديم حلول تقنية متطورة تساعد الشركات على التحول الرقمي والنمو المستدام.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">الروابط السريعة</h4>
            <ul className="space-y-2">
              {['الرئيسية', 'الخدمات', 'من نحن', 'الأعمال', 'المدونة'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">خدماتنا</h4>
            <ul className="space-y-2">
              {['تطوير الويب', 'تطبيقات الموبايل', 'تحليل البيانات', 'الأمان السيبراني'].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a
                  href="mailto:info@centraldigital.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  info@centraldigital.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a
                  href="tel:+218935720343"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +218 93 572 0343
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            جميع الحقوق محفوظة © {currentYear} الشركة المركزية للحلول الرقمية
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/18KVZJWkQW/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <Facebook size={18} className="text-primary" />
            </a>
            <a
              href="https://wa.me/218935720343"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <MessageCircle size={18} className="text-primary" />
            </a>
          </div>

          {/* Additional Links */}
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              سياسة الخصوصية
            </a>
            <span className="text-border">|</span>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              شروط الاستخدام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
