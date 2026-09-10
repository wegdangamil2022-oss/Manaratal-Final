import React from 'react';
import { ThemeProvider, RTLProvider } from '@manaratak/ui';
import { AppRouter } from './router';
import { I18nProvider } from './i18n/I18nProvider';

export function App() {
  return (
    <I18nProvider>
      <ThemeProvider defaultTheme="system">
        <RTLProvider>
          {import.meta.env.VITE_GOOGLE_AI_STUDIO === 'true' && !import.meta.env.VITE_API_URL && (
            <div role="status" dir="rtl" className="bg-amber-50 p-3 text-center text-sm text-amber-950">
              واجهة تجريبية — خدمة البيانات غير متصلة بعد. ستظهر البيانات عند ربط الخادم التجريبي.
            </div>
          )}
          <AppRouter />
        </RTLProvider>
      </ThemeProvider>
    </I18nProvider>
  );
}

export default App;
