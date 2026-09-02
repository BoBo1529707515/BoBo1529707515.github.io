'use client';

import { useEffect, useState } from 'react';

type Language = 'en' | 'zh';

export function LanguageToggle() {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dataset.language = language;
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  }, [language]);

  return (
    <div className="language-toggle" role="group" aria-label="Language / 语言">
      <button type="button" className={language === 'en' ? 'is-active' : ''} aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button>
      <span aria-hidden="true">/</span>
      <button type="button" className={language === 'zh' ? 'is-active' : ''} aria-pressed={language === 'zh'} onClick={() => setLanguage('zh')}>中文</button>
    </div>
  );
}
