import { Shield } from 'lucide-react'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            ← العودة للصفحة الرئيسية
          </Button>
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-balance">سياسة الخصوصية</h1>
            <p className="text-muted-foreground">آخر تحديث: 19 نوفمبر 2025</p>
          </div>
        </div>

        <Card className="p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">مقدمة</h2>
            <p className="text-muted-foreground leading-relaxed">
              نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحماية معلوماتك عند استخدام موقعنا الإلكتروني.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">المعلومات التي نجمعها</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">المعلومات الشخصية</h3>
                <p>قد نجمع المعلومات التالية عندما تتفاعل مع موقعنا:</p>
                <ul className="list-disc list-inside mr-6 mt-2 space-y-1">
                  <li>الاسم الكامل</li>
                  <li>عنوان البريد الإلكتروني</li>
                  <li>رقم الهاتف</li>
                  <li>معلومات الاستخدام والتفضيلات</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">المعلومات التقنية</h3>
                <p>نجمع تلقائياً معلومات تقنية عند زيارتك للموقع:</p>
                <ul className="list-disc list-inside mr-6 mt-2 space-y-1">
                  <li>عنوان IP الخاص بك</li>
                  <li>نوع المتصفح والجهاز</li>
                  <li>معلومات الموقع الجغرافي</li>
                  <li>ملفات تعريف الارتباط (Cookies)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">كيفية استخدام المعلومات</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
              <ul className="list-disc list-inside mr-6 space-y-1">
                <li>تقديم وتحسين خدماتنا</li>
                <li>التواصل معك بخصوص استفساراتك</li>
                <li>إرسال التحديثات والعروض الترويجية (بموافقتك)</li>
                <li>تحليل استخدام الموقع لتحسين التجربة</li>
                <li>الامتثال للمتطلبات القانونية</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">مشاركة المعلومات</h2>
            <p className="text-muted-foreground leading-relaxed">
              نحن لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك في الحالات التالية فقط:
            </p>
            <ul className="list-disc list-inside mr-6 mt-2 space-y-1 text-muted-foreground">
              <li>مع مزودي الخدمات الذين يساعدوننا في تشغيل موقعنا</li>
              <li>عند الامتثال للمتطلبات القانونية</li>
              <li>لحماية حقوقنا وسلامة مستخدمينا</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">ملفات تعريف الارتباط (Cookies)</h2>
            <p className="text-muted-foreground leading-relaxed">
              نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات متصفحك. قد يؤثر تعطيل ملفات تعريف الارتباط على وظائف معينة في الموقع.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">أمان البيانات</h2>
            <p className="text-muted-foreground leading-relaxed">
              نتخذ إجراءات أمنية معقولة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الكشف أو التدمير. ومع ذلك، لا يمكن ضمان أي طريقة نقل عبر الإنترنت بنسبة 100%.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">حقوقك</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>لديك الحق في:</p>
              <ul className="list-disc list-inside mr-6 space-y-1">
                <li>الوصول إلى بياناتك الشخصية</li>
                <li>تصحيح البيانات غير الدقيقة</li>
                <li>حذف بياناتك (حق النسيان)</li>
                <li>الاعتراض على معالجة بياناتك</li>
                <li>نقل بياناتك إلى خدمة أخرى</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">إعلانات Google</h2>
            <p className="text-muted-foreground leading-relaxed">
              نستخدم Google AdSense لعرض الإعلانات. تستخدم Google ملفات تعريف الارتباط لعرض إعلانات بناءً على زياراتك السابقة لموقعنا. يمكنك إلغاء الاشتراك في استخدام Google لملفات تعريف الارتباط من خلال{' '}
              <a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                إعدادات الإعلانات
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">التغييرات على سياسة الخصوصية</h2>
            <p className="text-muted-foreground leading-relaxed">
              قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سنقوم بإخطارك بأي تغييرات من خلال نشر السياسة الجديدة على هذه الصفحة مع تاريخ التحديث.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>
            <p className="text-muted-foreground leading-relaxed">
              إذا كان لديك أي أسئلة حول سياسة الخصوصية، يرجى التواصل معنا عبر:
            </p>
            <ul className="list-none mr-6 mt-2 space-y-1 text-muted-foreground">
              <li>البريد الإلكتروني: privacy@example.com</li>
              <li>الهاتف: +966 XX XXX XXXX</li>
            </ul>
          </section>
        </Card>
      </div>
    </div>
  )
}
