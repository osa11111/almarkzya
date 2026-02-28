import { Mail, Phone, MapPin, Facebook, MessageCircle } from 'lucide-react';

const CONTACT_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663260804300/BTjgjxDK2326zQw87RDbhV/contact-pattern-HwHwTsJchKXgsHvwQAzEdT.webp';

const contactInfo = [
  {
    icon: Mail,
    title: 'البريد الإلكتروني',
    value: 'info@centraldigital.com',
    link: 'mailto:info@centraldigital.com',
  },
  {
    icon: Phone,
    title: 'رقم الهاتف',
    value: '+218 93 572 0343',
    link: 'tel:+218935720343',
  },
  {
    icon: MapPin,
    title: 'العنوان',
    value: 'طرابلس، ليبيا',
    link: '#',
  },
];

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/share/18KVZJWkQW/',
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    url: 'https://wa.me/218935720343',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 bg-background overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('${CONTACT_BG}')`,
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
              تواصل معنا
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-elegant">
            نحن هنا لمساعدتك
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            لا تتردد في التواصل معنا للإجابة على أي استفسارات
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.link}
                className="group p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 text-center"
              >
                {/* Icon */}
                <div className="inline-block p-4 bg-primary/20 rounded-lg mb-4 group-hover:bg-primary/30 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {info.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary transition-colors">
                  {info.value}
                </p>
              </a>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 space-y-6">
            <h3 className="text-2xl font-bold text-elegant text-center mb-8">
              أرسل لنا رسالة
            </h3>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  className="px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <input
                type="text"
                placeholder="الموضوع"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
              />

              <textarea
                placeholder="الرسالة"
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
              />

              <button type="submit" className="btn-elegant w-full">
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-6">
            تابعنا على وسائل التواصل الاجتماعي
          </p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 -left-20 w-40 h-40 border border-primary/10 rounded-full opacity-20" />
      <div className="absolute bottom-0 -right-20 w-60 h-60 border border-primary/5 rounded-full opacity-10" />
    </section>
  );
}
