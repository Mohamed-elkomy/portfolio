# تحليل فولدر المشاريع (D:\komy)

> مرجع سريع: كل مشروع موجود فعليًا في الفولدر، بيعمل إيه، نوعه، والتقنيات المستخدمة.
> اتعمل بقراءة الكود الفعلي (package.json / README / الصفحات / الراوتس) — تاريخ التحليل: يوليو 2026.

---

## 🟢 أنظمة وتطبيقات (أقوى من اللانديج — استغلها كنقاط قوة)

### 1. elmohandis — نظام إدارة / ERP (Front-end كامل)
- **بيعمل إيه:** لوحة إدارة متكاملة لشركة/متجر. صفحات: **Dashboard, Accounting (حسابات), Inventory (مخزون), Orders (طلبات), Users (مستخدمين), Roles (صلاحيات), Settings, Login**.
- **التقنيات:** React + Redux Toolkit + Zustand + axios + i18next (عربي/إنجليزي) + Tailwind + Framer Motion + React Hook Form.
- **ملاحظة:** الواجهة كاملة واحترافية، لكن البيانات محلية/mock (`src/data`) — مش مربوط API خارجي. **أقوى قطعة UI في الفولدر.**

### 2. mashora-main-front — منصة استشارات (Front + API فعلي)
- **بيعمل إيه:** موقع استشارات كامل. فيه **نظام تسجيل دخول/إنشاء حساب/OTP/نسيت كلمة السر/reset**، صفحات خدمات، مقالات (بتفاصيل)، استشارات، بروفايل، FAQ، آراء العملاء.
- **التقنيات:** React + axios (`src/config/api.js` + `VITE_API_URL`) + i18next + Bootstrap + Framer Motion + Yup.
- **ملاحظة:** **مربوط باك إند فعلي** — flow مصادقة حقيقي. قطعة قوية.

### 3. fix-store-v2 — متجر إلكتروني (Front + API فعلي)
- **بيعمل إيه:** متجر موبايلات وإكسسوارات كامل. صفحات: **Home, Products, Categories, Brands, FAQ, AboutUs, Contact + Design System**.
- **التقنيات:** React + Redux Toolkit + axios (`src/services/api.js` + `VITE_API_BASE_URL`) + i18next + Swiper + Tailwind.
- **ملاحظة:** **مربوط API فعلي** + فيه Design System. النسخة المتطورة من مشروع FIX.

### 4. dashboard — Elmohndis Dashboard
- **بيعمل إيه:** داشبورد إداري (auth, orders, profile, errors). مكمّل لمنظومة elmohandis.
- **التقنيات:** React + Zustand + i18next + Tailwind + `src/services`.
- **ملاحظة:** انت قلت تشيله — لكنه فعليًا داشبورد شغّال ومرتبط بـ elmohandis. (قرارك.)

---

## 🔵 لانديج بيدجات (React) — كلها من الصفر

| المشروع | المجال | العنوان/الوصف | التقنيات المميزة |
|---|---|---|---|
| **Beyoo3-landing-page** | بيوع | لانديج تطبيق "بيوع" | shadcn/ui + React Query + Framer Motion + Swiper |
| **Rab7-Frontend** | رابح | لانديج "رابح" | React + Vite |
| **Raw-Chem** | كيماويات B2B | "Raw Chem \| رو كيم" | React (لانديج بسيط) |
| **SHATAT** | لوجستيات | "شتت لوجستيك" — فيه سياسات سائق/مورّد | React Router (Home, Contact, Driver/Supplier Policy) |
| **She-Go** | خدمة طبية | "SheGo - خدمة طبية في كل مكان" | React + حذف حساب + سياسات |
| **alf-lam-meem** | (أزياء/براند) | "أ ل ف - لا م - م ي م" | Bootstrap + Swiper |
| **captain-s-scrap-hub** | تدوير خردة | "القبطان - جمع وشراء وإعادة تدوير الخردة" | shadcn/ui + React Query + i18next |
| **easy-go** | مواصلات | "EasyGo - تطبيق المواصلات الأسهل" | React Router + سياسات |
| **eng** | كابلات كهربائية | "المهندس للكابلات الكهربائية" | Bootstrap + Swiper |
| **fix** | متجر موبايلات | "FIX \| متجر الموبايلات" (لانديج) | Bootstrap + Swiper |
| **fix (ar-en** | متجر موبايلات | نسخة FIX ثنائية اللغة (AR/EN) | antd + i18next + Bootstrap |
| **hyper-one-kilo** / **-v1** / **-v2** | توصيل بقالة | "هايبر وان كيلو — التطبيق الذكي" (3 نسخ) | i18next + React Router |
| **mazad-arabity** (+ New folder) | مزادات سيارات | "مزاد عربيتى — منصة مزادات أونلاين" | Zustand + axios + i18next + Swiper |
| **moslem** | تعليمي إسلامي | "Muslim Academy — تعلم الإسلام بأسلوب عصري" | i18next + Tailwind |
| **paradise** | (Double Break Paradise) | "Double Break Paradise" | Bootstrap + i18next + Swiper |
| **rajaeen-landing-page** | سفر/رحلات | "راجعين — احجز رحلتك بين مصر والسودان" | shadcn/ui + React Query + i18next |
| **alf-lam-meem** | (مكرر أعلاه) | — | — |

---

## 🟡 لانديج بيدجات (HTML/Static)

| المشروع | المجال | ملاحظة |
|---|---|---|
| **Exclusive-Medical-landing** | طبي | HTML ثابت (index + privacy + template) |
| **My-Car-Auction- مزاد عربيتى** | مزادات سيارات | نسخة HTML ثابتة (index + سياسات) — بخلاف نسخة React |
| **sianko-landing** | صيانة منزلية/تجارية | "صيانكو — حجز خدمات الصيانة" (HTML ثابت + عربي RTL) |
| **elmorahel** | AlMarhal | داخلها فولدر "AlMARHAL-Landing-Page" |

---

## ⚪ حاجات مش مشاريع فعلية

| العنصر | إيه هو |
|---|---|
| **Restorant** | صور فقط (Dashboard.png, login.png, sitemap.png) — مش كود. قلت تشيله. |
| **Portfolio** | البورتفوليو الشخصي بتاعك (React + Vite + Framer Motion). |
| **New folder** | نسخة مكررة من mazad-arabity. |

---

## 🧭 ملاحظات مهمة للاستغلال لاحقًا
1. **elmohandis + mashora + fix-store-v2** هي القطع "التقنية الثقيلة" — لازم تتصدّر أي بروفايل/CV لأنها أنظمة مش لانديجات.
2. فيه **تكرار نسخ** (fix ×3، hyper-one-kilo ×3، mazad ×2) — لما نعرض شغل نختار أحسن نسخة بس.
3. أغلب اللانديجات نفس الـstack (React + i18next عربي/إنجليزي + Swiper + سياسات) — بيوضّح إتقانك للـ RTL/التعدد اللغوي.
4. مشاريع الشركة الكبيرة (my-store, Albaraqawy ERP, Faya, MyTours, khadamat, Ne3naa3a, Medica, RealState... إلخ) **مش موجودة في الفولدر ده** — على الأغلب على git/سيرفر الشركة. الفولدر ده أغلبه اللانديجات + 4 أنظمة.
