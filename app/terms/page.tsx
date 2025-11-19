import { FileText } from 'lucide-react'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            ← العودة للصفحة الرئيسية
          </Button>
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
            <FileText className="w-8 h-8 text-accent" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-balance">شروط الاستخدام والأمان</h1>
            <p className="text-muted-foreground">آخر تحديث: 19 نوفمبر 2025</p>
          </div>
        </div>

        <Card className="p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">مقدمة</h2>
            <p className="text-muted-foreground leading-relaxed">
              مرحباً بك في موقعنا الإلكتروني. باستخدامك لهذا الموقع، فإنك توافق على الالتزام بشروط الاستخدام هذه. يرجى قراءة هذه الشروط بعناية قبل استخدام الموقع.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">قبول الشروط</h2>
            <p className="text-muted-foreground leading-relaxed">
              من خلال الوصول إلى هذا الموقع واستخدامه، فإنك توافق على الالتزام بهذه الشروط وجميع القوانين واللوائح المعمول بها. إذا كنت لا توافق على أي من هذه الشروط، يُمنع عليك استخدام هذا الموقع.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">استخدام الموقع</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">الاستخدام المسموح</h3>
                <p>يمكنك استخدام موقعنا للأغراض التالية فقط:</p>
                <ul className="list-disc list-inside mr-6 mt-2 space-y-1">
                  <li>الوصول إلى المحتوى والمعلومات المتاحة</li>
                  <li>التواصل معنا عبر القنوات الرسمية</li>
                  <li>استخدام الخدمات المقدمة بشكل قانوني</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">الاستخدام المحظور</h3>
                <p>يُحظر عليك:</p>
                <ul className="list-disc list-inside mr-6 mt-2 space-y-1">
                  <li>استخدام الموقع لأي غرض غير قانوني</li>
                  <li>محاولة اختراق أو إتلاف الموقع</li>
                  <li>نشر محتوى ضار أو مسيء</li>
                  <li>انتهاك حقوق الملكية الفكرية</li>
                  <li>جمع معلومات المستخدمين الآخرين</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">حقوق الملكية الفكرية</h2>
            <p className="text-muted-foreground leading-relaxed">
              جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص والصور والشعارات والتصميمات، محمية بموجب حقوق النشر والملكية الفكرية. لا يجوز نسخ أو توزيع أو تعديل أي محتوى دون إذن كتابي مسبق.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">سياسة الأمان</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">التزامنا بالأمان</h3>
                <p>نتخذ الإجراءات التالية لضمان أمان موقعنا:</p>
                <ul className="list-disc list-inside mr-6 mt-2 space-y-1">
                  <li>استخدام شهادات SSL/TLS لتشفير البيانات</li>
                  <li>مراقبة أمنية مستمرة للنظام</li>
                  <li>تحديثات أمنية منتظمة</li>
                  <li>نسخ احتياطي دوري للبيانات</li>
                  <li>حماية ضد الهجمات الإلكترونية</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">مسؤولية المستخدم</h3>
                <p>أنت مسؤول عن:</p>
                <ul className="list-disc list-inside mr-6 mt-2 space-y-1">
                  <li>الحفاظ على سرية معلومات حسابك</li>
                  <li>استخدام كلمات مرور قوية</li>
                  <li>إخطارنا بأي نشاط مشبوه</li>
                  <li>تحديث معلوماتك الشخصية</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">الروابط الخارجية</h2>
            <p className="text-muted-foreground leading-relaxed">
              قد يحتوي موقعنا على روابط لمواقع خارجية. نحن لسنا مسؤولين عن محتوى أو سياسات الخصوصية لهذه المواقع. يُنصح بمراجعة شروط وسياسات المواقع الخارجية قبل استخدامها.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">إخلاء المسؤولية</h2>
            <p className="text-muted-foreground leading-relaxed">
              يتم توفير المحتوى والخدمات على هذا الموقع "كما هي" دون أي ضمانات من أي نوع. لا نضمن دقة أو اكتمال أو موثوقية أي محتوى. استخدامك للموقع على مسؤوليتك الخاصة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">تحديد المسؤولية</h2>
            <p className="text-muted-foreground leading-relaxed">
              لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو تبعية ناتجة عن استخدام أو عدم القدرة على استخدام الموقع، حتى لو تم إخطارنا بإمكانية حدوث مثل هذه الأضرار.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">سياسة الإعلانات</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>يستخدم موقعنا إعلانات Google AdSense والتي تلتزم بسياسات Google الإعلانية:</p>
              <ul className="list-disc list-inside mr-6 space-y-1">
                <li>نعرض إعلانات ذات صلة ومناسبة</li>
                <li>لا نعرض إعلانات مضللة أو احتيالية</li>
                <li>نحترم خصوصية المستخدمين في عرض الإعلانات</li>
                <li>نلتزم بمعايير المحتوى الإعلاني</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">حماية الأطفال</h2>
            <p className="text-muted-foreground leading-relaxed">
              موقعنا غير موجه للأطفال دون سن 13 عاماً. نحن لا نجمع عن قصد معلومات شخصية من الأطفال. إذا علمت أن طفلك قدم معلومات شخصية لنا، يرجى الاتصال بنا فوراً.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">التغييرات على الشروط</h2>
            <p className="text-muted-foreground leading-relaxed">
              نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر التغييرات على هذه الصفحة مع تاريخ التحديث. استمرارك في استخدام الموقع بعد التعديلات يعني موافقتك على الشروط الجديدة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">القانون الحاكم</h2>
            <p className="text-muted-foreground leading-relaxed">
              تخضع هذه الشروط وتفسر وفقاً لقوانين المملكة العربية السعودية. أي نزاع ناشئ عن هذه الشروط سيخضع للاختصاص القضائي الحصري للمحاكم السعودية.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>
            <p className="text-muted-foreground leading-relaxed">
              إذا كان لديك أي أسئلة حول شروط الاستخدام، يرجى التواصل معنا عبر:
            </p>
            <ul className="list-none mr-6 mt-2 space-y-1 text-muted-foreground">
              <li>البريد الإلكتروني: support@example.com</li>
              <li>الهاتف: +966 XX XXX XXXX</li>
            </ul>
          </section>
        </Card>
      </div>
    </div>
  )
}
