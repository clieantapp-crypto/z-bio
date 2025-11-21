"use client"

import { Instagram, Twitter, Facebook, Youtube, Mail, Globe, Shield, FileText } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import React, { useState } from 'react'

export default function BioLinksPage() {
  const [hovered, setHovered] = useState('')

  const links = [
    { title: 'موقعنا الإلكتروني', description: 'زر موقعنا الرسمي', url: 'https://mz-js.com', icon: Globe, color:'text-pink-500' },
    { title: 'تواصل معنا', description: 'راسلنا عبر البريد الإلكتروني', url: 'mailto:contact@mz-js.com', icon: Mail, color:'text-green-500' },
    { title: 'إنستغرام', description: 'تابعنا على إنستغرام', url: 'https://instagram.com', icon: Instagram, color:'text-pink-600' },
    { title: 'تويتر', description: 'تابعنا على تويتر', url: 'https://twitter.com', icon: Twitter, color:'text-sky-400' },
    { title: 'فيسبوك', description: 'تابعنا على فيسبوك', url: 'https://facebook.com', icon: Facebook, color:'text-blue-500' },
    { title: 'يوتيوب', description: 'شاهد فيديوهاتنا', url: 'https://youtube.com', icon: Youtube, color:'text-red-500' },
  ]

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 text-white"
      dir="rtl"
    >
      <div className="container max-w-2xl mx-auto px-4 py-12">

        {/* Profile */}
        <div className="flex flex-col items-center text-center mb-10">
          <Avatar className="h-28 w-28 mb-4 ring-2 ring-white/20 shadow-xl shadow-sky-500/20">
            <AvatarImage src="/me.png" alt="الصورة الشخصية" />
            <AvatarFallback className="text-2xl bg-gray-700 text-white">شع</AvatarFallback>
          </Avatar>

          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text">
            Muath A. Alzoubi
          </h1>

          <p className="text-gray-300 text-lg max-w-md leading-relaxed">
            مرحباً بك في صفحة الروابط الخاصة بنا. تواصل معنا عبر قنواتنا المختلفة.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4 mb-14">
          {links.map((l, i) => {
            const Icon = l.icon
            const active = hovered === l.title

            return (
              <a
                key={i}
                href={l.url}
                target="_blank"
                className=''
                rel="noopener noreferrer"
                onMouseOver={() => setHovered(l.title)}
                onMouseLeave={() => setHovered('')}
              >
                <Button className="  w-full 
           
                  h-full
                  py-4      bg-black/40  hover:bg-white/10 backdrop-blur-xl border-white/10 rounded-xl
                  transition-all duration-300
                   hover:border-white/20
                  hover:scale-[1.02]
                  flex justify-between
                  m-2
                ">
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center
                      transition-all duration-300
                      ${active ? 'bg-white/20 shadow-lg shadow-sky-500/20' : 'bg-white/10'}
                    `}>
                      <Icon className={`
                        w-7 h-7 transition-all duration-300
                        ${active ? `${l.color} scale-110` : 'text-gray-300'}
                      `} />
                    </div>

                    {/* Text */}
                    <div className="flex-1 text-right">
                      <h3 className="text-lg font-semibold text-white">{l.title}</h3>
                      <p className="text-sm text-gray-400">{l.description}</p>
                    </div>
                  </div>
                </Button>
              </a>
            )
          })}
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center gap-6 pt-10 border-t border-white/10">
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition flex items-center gap-1">
              <Shield className="w-4 h-4" />
              سياسة الخصوصية
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition flex items-center gap-1">
              <FileText className="w-4 h-4" />
              شروط الاستخدام
            </Link>
          </div>

          <p className="text-xs text-gray-500">© 2025 جميع الحقوق محفوظة</p>
        </div>

      </div>
    </div>
  )
}
