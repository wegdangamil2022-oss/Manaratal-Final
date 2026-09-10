import { installPreviewApi } from './mock-api';

installPreviewApi();
const admin = location.pathname === '/admin' || location.pathname.startsWith('/admin/');
// Keep original entrypoints and styles separately loaded so the two designs
// cannot override each other's CSS.
if (admin) {
  const ts = Date.now();
  import(`/apps/admin/src/main.tsx?t=${ts}`).catch((err) => {
    console.error('Failed to load admin entry module, retrying in 500ms...', err);
    setTimeout(() => {
      import(`/apps/admin/src/main.tsx?t=${Date.now()}`);
    }, 500);
  });
} else {
  const ts = Date.now();
  import(`/apps/web/src/main.tsx?t=${ts}`).catch((err) => {
    console.error('Failed to load web entry module, retrying in 500ms...', err);
    setTimeout(() => {
      import(`/apps/web/src/main.tsx?t=${Date.now()}`);
    }, 500);
  });
}

const switcher = document.createElement('aside');
switcher.setAttribute('aria-label', 'التنقل بين واجهات المعاينة');
switcher.style.cssText = 'position:fixed;bottom:85px;left:12px;z-index:9999;background:#142B5F;color:white;padding:10px 14px;border-radius:14px;font:12px Cairo,sans-serif;box-shadow:0 4px 18px #0003';
switcher.innerHTML = '<span>بيانات تجريبية • </span><a style="color:#F2CD78" href="' +
  (admin ? '/ar' : '/admin/dashboard') + '">' +
  (admin ? 'الصفحة العامة' : 'لوحة التحكم') + '</a>';
document.body.append(switcher);
