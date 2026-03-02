import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const steps = [
  { number: 1, title: 'اختر الخدمة', description: 'اختر الخدمة التي تناسب احتياجاتك' },
  { number: 2, title: 'أخبرنا عنك', description: 'شارك معنا تفاصيل مشروعك' },
  { number: 3, title: 'استقبل العرض', description: 'سنرسل لك عرض سعر مفصل' },
  { number: 4, title: 'ابدأ المشروع', description: 'دعنا نبدأ رحلة النجاح معاً' },
];

const services = [
  'تطوير الويب',
  'تطبيقات الموبايل',
  'تحسين الأداء',
  'تحليل البيانات',
  'الأمان السيبراني',
  'الاستشارات التقنية',
];

export default function RequestServiceSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare email content
    const emailContent = `
      طلب خدمة جديد:
      
      الخدمة المطلوبة: ${formData.service}
      الاسم: ${formData.name}
      البريد الإلكتروني: ${formData.email}
      رقم الهاتف: ${formData.phone}
      التفاصيل: ${formData.message}
    `;
    
    // Send email using mailto
    const mailtoLink = `mailto:askistor@gmail.com?subject=طلب خدمة جديد من ${formData.name}&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      service: '',
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    setCurrentStep(0);
  };

  return (
    <section id="request" className="relative py-24 bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-sm font-semibold tracking-widest">
              اطلب خدمتك
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-elegant">
            ابدأ مشروعك معنا
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اتبع الخطوات البسيطة لطلب الخدمة التي تحتاجها
          </p>
        </div>

        {/* Steps Indicator */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                {/* Step Circle */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    index === currentStep
                      ? 'bg-primary text-primary-foreground scale-110'
                      : index < currentStep
                      ? 'bg-primary/50 text-foreground'
                      : 'bg-card border-2 border-border text-muted-foreground'
                  }`}
                >
                  {step.number}
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                      index < currentStep
                        ? 'bg-primary'
                        : 'bg-border'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step Description */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {steps[currentStep].title}
            </h3>
            <p className="text-muted-foreground">
              {steps[currentStep].description}
            </p>
          </div>
        </div>

        {/* Form Content */}
        <div className="max-w-2xl mx-auto bg-card border border-border rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {currentStep === 0 && (
              <div className="space-y-4">
                <label className="block">
                  <span className="text-foreground font-semibold mb-2 block">
                    اختر الخدمة المطلوبة
                  </span>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">-- اختر خدمة --</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-4">
                <label className="block">
                  <span className="text-foreground font-semibold mb-2 block">
                    الاسم الكامل
                  </span>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="أدخل اسمك"
                  />
                </label>
                <label className="block">
                  <span className="text-foreground font-semibold mb-2 block">
                    البريد الإلكتروني
                  </span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </label>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <label className="block">
                  <span className="text-foreground font-semibold mb-2 block">
                    رقم الهاتف
                  </span>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="أدخل رقم هاتفك"
                  />
                </label>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <label className="block">
                  <span className="text-foreground font-semibold mb-2 block">
                    تفاصيل المشروع
                  </span>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    rows={5}
                    placeholder="أخبرنا عن مشروعك وأهدافك"
                  />
                </label>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-6">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="flex-1 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                السابق
              </button>
              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 btn-elegant flex items-center justify-center gap-2"
                >
                  التالي
                  <ChevronRight size={20} />
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex-1 btn-elegant"
                >
                  إرسال الطلب
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
