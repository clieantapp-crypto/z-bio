import { Instagram, Twitter, Facebook, Youtube, Mail, Globe, Shield, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'

export default function BioLinksPage() {
  const links = [
    {
      title: 'موقعنا الإلكتروني',
      description: 'زر موقعنا الرسمي',
      url: 'https://example.com',
      icon: Globe
    },
    {
      title: 'تواصل معنا',
      description: 'راسلنا عبر البريد الإلكتروني',
      url: 'mailto:contact@example.com',
      icon: Mail
    },
    {
      title: 'إنستغرام',
      description: 'تابعنا على إنستغرام',
      url: 'https://instagram.com',
      icon: Instagram
    },
    {
      title: 'تويتر',
      description: 'تابعنا على تويتر',
      url: 'https://twitter.com',
      icon: Twitter
    },
    {
      title: 'فيسبوك',
      description: 'تابعنا على فيسبوك',
      url: 'https://facebook.com',
      icon: Facebook
    },
    {
      title: 'يوتيوب',
      description: 'شاهد فيديوهاتنا',
      url: 'https://youtube.com',
      icon: Youtube
    }
  ]

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container max-w-2xl mx-auto px-4 py-12">
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center mb-8">
          <Avatar className="h-24 w-24 mb-4 ring-2 ring-primary">
            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="الصورة الشخصية" />
            <AvatarFallback className="text-2xl bg-primary text-primary-foreground">شع</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl font-bold mb-2 text-balance">الشعار أو الاسم</h1>
          <p className="text-muted-foreground text-lg mb-4 text-pretty">
            مرحباً بك في صفحة الروابط الخاصة بنا. تواصل معنا عبر قنواتنا المختلفة
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-4 mb-12">
          {links.map((link, index) => {
            const Icon = link.icon
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block "
              >
                <Card className="p-4 hover:bg-sky-200/50 cos transition-colors cursor-pointer border-border">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-1">
                      <div className="w-12 h-12 cos rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6  h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 text-right">
                      <h3 className="font-semibold text-lg">{link.title}</h3>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                  </div>
                </Card>
              </a>
            )
          })}
        </div>

        {/* Footer Links */}
        <div className="flex flex-col items-center gap-4 pt-8 border-t border-border">
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <Shield className="w-4 h-4" />
              سياسة الخصوصية
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <FileText className="w-4 h-4" />
              شروط الاستخدام
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2025 جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </div>
  )
}
