/*
  M7AL (محل) POS Landing Page - JavaScript Functionality
  Authors: Antigravity Code Architect
  Description: Handles multi-language switching, dark theme toggle, scroll animation triggers,
               statistics count-up animations, testimonials carousel, and local activation mock.
*/

// --- Translation Dictionary (EN, AR, FR, ES) ---
const translations = {
  en: {
    // Navigation
    "nav-home": "Home",
    "nav-features": "Features",
    "nav-screenshots": "Screenshots",
    "nav-how-it-works": "How it Works",
    "nav-pricing": "Pricing",
    "nav-activation": "Activation",
    "nav-faq": "FAQ",
    "nav-contact": "Contact Us",
    "btn-buy-now": "Buy Now",

    // Hero Section
    "hero-badge": "Premium Offline POS Software",
    "hero-title": "The Smart POS Solution for <span>Modern Businesses</span>",
    "hero-subtitle": "Simplify sales, manage inventory, track customer debts, expenses, and view visual reports. Fast, offline-first, and highly secure local database.",
    "btn-download": "Download App",
    "btn-watch-demo": "Watch Demo",

    // Statistics
    "stat-downloads": "Downloads",
    "stat-reliability": "Offline Reliability",
    "stat-rating": "App Store Rating",
    "stat-languages": "Languages",

    // Features Section
    "features-tag": "Features",
    "features-title": "All-in-One Powerful Features",
    "features-desc": "Everything you need to run your shop or store efficiently, offline or online.",
    "f1-title": "Inventory Management",
    "f1-desc": "Track stock levels, set low-stock alerts, and categorize products effortlessly.",
    "f2-title": "Barcode & QR Scanner",
    "f2-desc": "Scan barcodes quickly using your device camera or external scanning hardware.",
    "f3-title": "Sales & Invoices",
    "f3-desc": "Generate neat digital invoices, receipts, and process checkouts in seconds.",
    "f4-title": "Customer Management",
    "f4-desc": "Store customer contacts, track sales histories, and run loyalty programs.",
    "f5-title": "Supplier Management",
    "f5-desc": "Keep track of supply chains, purchase orders, and supplier outstanding logs.",
    "f6-title": "Debt Tracking",
    "f6-desc": "Manage debts seamlessly with automatic reminders and detailed statements.",
    "f7-title": "Expense Tracking",
    "f7-desc": "Log daily running costs, rent, utilities, and maintain healthy bookkeeping.",
    "f8-title": "Profit Reports",
    "f8-desc": "Get comprehensive analytics on profit margins, net revenue, and products.",
    "f9-title": "Statistics Dashboard",
    "f9-desc": "A visual control panel illustrating best sellers, customer trends, and stats.",
    "f10-title": "Offline Mode",
    "f10-desc": "Run fully offline. Data syncs to backups automatically once internet connects.",
    "f11-title": "Secure Local Database",
    "f11-desc": "Your data is saved and encrypted on your local device. Complete privacy.",
    "f12-title": "Smart Fast Search",
    "f12-desc": "Locate products, invoices, and supplier details instantly with indexing.",

    // Gallery / Screenshots
    "gallery-tag": "Screenshots",
    "gallery-title": "Explore the Application",
    "gallery-desc": "Take a look at M7al's premium, clean, and intuitive user interface designed for speed.",
    "screenshot-1": "Sales & Checkout Screen",
    "screenshot-1-desc": "Easy-to-use checkout interface with quick barcode adding.",
    "screenshot-2": "Inventory Dashboard",
    "screenshot-2-desc": "Manage list of items, import Excel, and modify prices.",
    "screenshot-3": "Analytics & Reports",
    "screenshot-3-desc": "Visual pie charts and line graphs showing monthly growth.",

    // Video Tutorials
    "video-tag": "Video Guides",
    "video-title": "See M7al in Action",
    "video-desc": "Learn how to configure your store and start making sales in under five minutes.",

    // How It Works
    "how-tag": "Workflow",
    "how-title": "Get Started in 4 Easy Steps",
    "how-desc": "No complicated signups. Just install, set up your shop, and you're good to go.",
    "step1-title": "1. Install App",
    "step1-desc": "Download and install M7al on your Windows desktop or Android device.",
    "step2-title": "2. Add Products",
    "step2-desc": "Input products manually or upload an Excel catalog with prices.",
    "step3-title": "3. Start Selling",
    "step3-desc": "Scan barcodes, select products, and print custom receipts instantly.",
    "step4-title": "4. View Reports",
    "step4-desc": "Monitor your profit margins, customer debts, and expenses live.",

    // Pricing
    "pricing-tag": "Pricing Plan",
    "pricing-title": "Simple, Transparent Pricing",
    "pricing-desc": "Select the plan that matches your business size. No hidden fees.",
    "plan-trial": "Free Trial",
    "plan-trial-desc": "Perfect for trying out all features.",
    "plan-standard": "Standard",
    "plan-standard-desc": "For small shops and growing retailers.",
    "plan-professional": "Professional",
    "plan-professional-desc": "For large businesses requiring full control.",
    "price-free": "$0",
    "price-standard": "$49",
    "price-professional": "$99",
    "price-period-free": "/ 14 Days",
    "price-period-life": "/ Lifetime",
    "btn-start-trial": "Start 14-Day Trial",
    "btn-buy-license": "Buy License",
    "pricing-feature-offline": "Full offline support",
    "pricing-feature-items-100": "Up to 100 products",
    "pricing-feature-items-unlimited": "Unlimited products",
    "pricing-feature-debts": "Debt & Expense tracking",
    "pricing-feature-devices-1": "1 device license",
    "pricing-feature-devices-3": "Up to 3 devices link",
    "pricing-feature-support-basic": "Community support",
    "pricing-feature-support-premium": "24/7 Premium support",

    // Activation Section
    "activation-tag": "Software Activation",
    "activation-title": "Activate Your Software",
    "activation-desc": "Unlock the lifetime standard or professional version using your activation key.",
    "activation-instruction": "How to activate:",
    "activation-step1": "Copy the unique Device ID displayed inside the application.",
    "activation-step2": "Contact our sales team on WhatsApp to purchase your key.",
    "activation-step3": "Paste the received Activation Code below and press Activate.",
    "label-device-id": "Your Device ID",
    "label-activation-code": "Activation Code",
    "placeholder-device-id": "Enter or copy Device ID from app",
    "placeholder-activation-code": "e.g., M7AL-XXXX-XXXX-XXXX",
    "btn-activate": "Activate Software",
    "activation-status-success": "Activation Successful! Thank you for purchasing M7al.",
    "activation-status-error": "Invalid Activation Code. Please check the code or contact support.",

    // Call to Action
    "cta-title": "Ready to Modernize Your Retail Shop?",
    "cta-desc": "Join thousands of businesses who trust M7al to run their daily inventory and sales.",

    // FAQ Accordion
    "faq-tag": "FAQ",
    "faq-title": "Frequently Asked Questions",
    "faq-desc": "Find quick answers to common questions about M7al licenses, features, and setup.",
    "faq-q1": "What is M7al POS?",
    "faq-a1": "M7al is a premium offline-first Point of Sale application designed for small and medium businesses to manage inventory, track sales, debts, expenses, and generate real-time reports easily.",
    "faq-q2": "Does it require an internet connection to run?",
    "faq-a2": "No, M7al works completely offline. All sales transactions, inventory records, and stats are processed locally on your device. Internet is only required for optional cloud backup synchronization.",
    "faq-q3": "How is my database secured?",
    "faq-a3": "Your database is saved directly on your local device. It is encrypted, ensuring complete privacy. No third parties or servers have access to your sensitive financial data.",
    "faq-q4": "Can I use it on multiple devices?",
    "faq-a4": "Yes, depending on your license type. The Standard plan supports 1 device, while the Professional plan allows synchronization and linking across up to 3 devices in the local network.",
    "faq-q5": "How does the software activation work?",
    "faq-a5": "When you install the app, it generates a unique Device ID. You share this ID with us via WhatsApp or email to purchase a lifetime key. Paste that key in the Activation section to unlock the full app.",
    "faq-q6": "Are there any monthly subscriptions?",
    "faq-a6": "No. Standard and Professional plans are one-time lifetime purchases. You pay once and enjoy lifetime access, updates, and offline usage with no recurring fees.",
    "faq-q7": "Can I print receipts using thermal printers?",
    "faq-a7": "Yes, M7al supports all standard USB, Bluetooth, and network thermal printers (58mm and 80mm sizes) and prints customizable receipts and barcodes.",
    "faq-q8": "What kind of support do you offer?",
    "faq-a8": "We provide email support for all users, and premium 24/7 WhatsApp/call support for Professional license holders to assist with database backup, installation, and general queries.",

    // Contact Us
    "contact-tag": "Contact",
    "contact-title": "Get In Touch",
    "contact-desc": "Have questions about licensing or custom features? Reach out to our local team.",
    "contact-info-text": "We are here to help you deploy M7al in your store. Contact us via any of these channels:",
    "label-whatsapp": "WhatsApp Support",
    "label-facebook": "Facebook Page",
    "label-email": "Email Support",
    "label-location": "Office Location",
    "val-whatsapp": "+966 50 000 0000",
    "val-facebook": "fb.com/m7al.pos",
    "val-email": "support@m7al.com",
    "val-location": "Riyadh, Saudi Arabia",

    // Footer
    "footer-desc": "The premium, lightweight offline POS application engineered for modern retailers.",
    "footer-col-company": "Company",
    "footer-col-product": "Product",
    "footer-col-legal": "Legal",
    "link-about": "About Us",
    "link-careers": "Careers",
    "link-blog": "Blog",
    "link-download": "Download App",
    "link-pricing": "Pricing",
    "link-security": "Security",
    "link-privacy": "Privacy Policy",
    "link-terms": "Terms of Service",
    "link-refund": "Refund Policy",
    "footer-copyright": "&copy; 2026 M7al POS. All rights reserved."
  },
  ar: {
    // Navigation
    "nav-home": "الرئيسية",
    "nav-features": "المميزات",
    "nav-screenshots": "واجهات التطبيق",
    "nav-how-it-works": "آلية العمل",
    "nav-pricing": "الأسعار",
    "nav-activation": "التفعيل",
    "nav-faq": "الأسئلة الشائعة",
    "nav-contact": "اتصل بنا",
    "btn-buy-now": "اشترِ الآن",

    // Hero Section
    "hero-badge": "برنامج نقاط بيع premium دون إنترنت",
    "hero-title": "الحل الذكي لإدارة <span>المحلات والشركات</span>",
    "hero-subtitle": "سهّل مبيعاتك، وأدر مخزونك، وتتبع ديون العملاء ومصروفاتك، واعرض تقارير أرباحك. سريع، يعمل بالكامل دون إنترنت، وقاعدة بيانات محلية آمنة.",
    "btn-download": "تحميل التطبيق",
    "btn-watch-demo": "شاهد التجربة",

    // Statistics
    "stat-downloads": "التنزيلات",
    "stat-reliability": "ثبات دون اتصال",
    "stat-rating": "تقييم التطبيق",
    "stat-languages": "اللغات",

    // Features Section
    "features-tag": "المميزات",
    "features-title": "كل ما تحتاجه في نظام واحد",
    "features-desc": "كل الأدوات اللازمة لإدارة متجرك بكفاءة عالية، سواء كنت متصلًا بالإنترنت أم لا.",
    "f1-title": "إدارة المخزون",
    "f1-desc": "تتبع كميات المنتجات، واحصل على تنبيهات المخزون المنخفض، وصنف السلع بسهولة.",
    "f2-title": "قارئ الباركود و QR",
    "f2-desc": "امسح الباركود بسرعة باستخدام كاميرا الجهاز أو قارئ خارجي متصل.",
    "f3-title": "المبيعات والفواتير",
    "f3-desc": "أصدر فواتير رقمية منسقة، وإيصالات مطبوعة، وأتمم البيع في ثوانٍ.",
    "f4-title": "إدارة العملاء",
    "f4-desc": "احفظ بيانات عملائك، وتتبع سجل مشترياتهم، وأدر نقاط الولاء والمكافآت.",
    "f5-title": "إدارة الموردين",
    "f5-desc": "تابع سلسلة التوريد، وسجل فواتير الشراء، ودفتر حسابات الموردين المستحقة.",
    "f6-title": "تتبع الديون الآجل",
    "f6-desc": "أدر ديون العملاء والموردين بدقة مع التذكيرات وتفاصيل كشوفات الحساب.",
    "f7-title": "حساب المصاريف",
    "f7-desc": "سجّل النفقات اليومية، الإيجار، الفواتير، وحافظ على تدفق نقدي متزن.",
    "f8-title": "تقارير الأرباح والخسائر",
    "f8-desc": "احصل على تحليلات دقيقة لهوامش الأرباح، وصافي الدخل، والسلع الأكثر ربحية.",
    "f9-title": "لوحة الإحصاءات",
    "f9-desc": "لوحة تحكم تفاعلية توضح المنتجات الأكثر مبيعًا، سلوك العملاء، والمبيعات اليومية.",
    "f10-title": "العمل دون إنترنت",
    "f10-desc": "يعمل بكفاءة 100% دون اتصال. تتم المزامنة الاحتياطية فور توفر الشبكة.",
    "f11-title": "قاعدة بيانات محلية آمنة",
    "f11-desc": "تُحفظ بياناتك وتُشفر محليًا على جهازك. خصوصية مطلقة وأمان تام.",
    "f12-title": "البحث الذكي السريع",
    "f12-desc": "اعثر على المنتجات، الفواتير، أو تفاصيل الموردين بلحظة بفضل الفهرسة الذكية.",

    // Gallery / Screenshots
    "gallery-tag": "الواجهات",
    "gallery-title": "استكشف واجهات النظام",
    "gallery-desc": "ألقِ نظرة على واجهة مستخدم محل (M7al) الأنيقة والبديهية والمصممة للسرعة.",
    "screenshot-1": "شاشة المبيعات والكاشير",
    "screenshot-1-desc": "واجهة مبيعات بسيطة لإضافة السلع بسرعة وقراءة الباركود.",
    "screenshot-2": "لوحة التحكم بالمخزون",
    "screenshot-2-desc": "أدر قائمة بضائعك، استوردها من إكسل، وعدّل الأسعار بسهولة.",
    "screenshot-3": "التحليلات والتقارير",
    "screenshot-3-desc": "رسوم بيانية وخطية توضح نمو الأرباح والمبيعات الشهرية.",

    // Video Tutorials
    "video-tag": "دروس تعليمية",
    "video-title": "شاهد شرح التطبيق بالفيديو",
    "video-desc": "تعلم كيفية إعداد متجرك والبدء في البيع وإصدار الفواتير في أقل من 5 دقائق.",

    // How It Works
    "how-tag": "آلية العمل",
    "how-title": "ابدأ في 4 خطوات بسيطة",
    "how-desc": "دون تعقيدات في التسجيل. قم بتثبيت التطبيق، جهّز متجرك، وابدأ البيع فورًا.",
    "step1-title": "1. تثبيت التطبيق",
    "step1-desc": "قم بتحميل وتثبيت برنامج محل على جهاز الكمبيوتر أو جهاز الأندرويد.",
    "step2-title": "2. إضافة المنتجات",
    "step2-desc": "أدخل منتجاتك يدويًا أو ارفع قائمة المنتجات دفعة واحدة عبر ملف Excel.",
    "step3-title": "3. ابدأ البيع",
    "step3-desc": "امسح الباركود، حدد الأصناف، واطبع الإيصالات لعملائك مباشرة.",
    "step4-title": "4. متابعة التقارير",
    "step4-desc": "تابع أرباحك، ديونك، ومصروفاتك مباشرة عبر لوحة الإحصاءات.",

    // Pricing
    "pricing-tag": "خطط الأسعار",
    "pricing-title": "أسعار واضحة ومناسبة للجميع",
    "pricing-desc": "اختر الخطة المناسبة لحجم أعمالك. لا توجد رسوم خفية أو شهرية.",
    "plan-trial": "نسخة تجريبية",
    "plan-trial-desc": "مثالية لتجربة ميزات النظام بالكامل.",
    "plan-standard": "النسخة القياسية",
    "plan-standard-desc": "للمحلات الصغيرة وتجار التجزئة المتناميين.",
    "plan-professional": "النسخة الاحترافية",
    "plan-professional-desc": "للشركات الكبيرة التي تتطلب تحكمًا كاملًا ومزامنة.",
    "price-free": "$0",
    "price-standard": "$49",
    "price-professional": "$99",
    "price-period-free": "/ 14 يومًا",
    "price-period-life": "/ مدى الحياة",
    "btn-start-trial": "ابدأ الفترة التجريبية",
    "btn-buy-license": "شراء الترخيص",
    "pricing-feature-offline": "دعم كامل للعمل دون إنترنت",
    "pricing-feature-items-100": "حتى 100 منتج فقط",
    "pricing-feature-items-unlimited": "عدد غير محدود من المنتجات",
    "pricing-feature-debts": "تتبع الديون والمصروفات بالكامل",
    "pricing-feature-devices-1": "ترخيص لجهاز واحد (1)",
    "pricing-feature-devices-3": "ربط حتى 3 أجهزة في المتجر",
    "pricing-feature-support-basic": "دعم عبر مجتمع المستخدمين",
    "pricing-feature-support-premium": "دعم فني متميز 24/7",

    // Activation Section
    "activation-tag": "تفعيل البرنامج",
    "activation-title": "تفعيل ترخيص البرنامج",
    "activation-desc": "افتح النسخة القياسية أو الاحترافية مدى الحياة بإدخال كود التفعيل الخاص بجهازك.",
    "activation-instruction": "خطوات التفعيل:",
    "activation-step1": "انسخ معرف الجهاز (Device ID) الفريد الذي يظهر داخل التطبيق.",
    "activation-step2": "تواصل مع مبيعاتنا عبر واتساب لشراء وتوليد كود التفعيل.",
    "activation-step3": "ألصق كود التفعيل المستلم في الحقل أدناه واضغط على زر تفعيل.",
    "label-device-id": "معرف الجهاز (Device ID)",
    "label-activation-code": "كود التفعيل (Activation Code)",
    "placeholder-device-id": "أدخل أو انسخ معرف الجهاز الخاص بالتطبيق",
    "placeholder-activation-code": "مثال: M7AL-XXXX-XXXX-XXXX",
    "btn-activate": "تفعيل البرنامج",
    "activation-status-success": "تم التفعيل بنجاح! شكرًا لثقتكم واختياركم برنامج محل.",
    "activation-status-error": "كود التفعيل غير صالح. يرجى التأكد من الرمز أو التواصل مع الدعم.",

    // Call to Action
    "cta-title": "هل أنت جاهز لتطوير متجر التجزئة الخاص بك؟",
    "cta-desc": "انضم إلى آلاف المتاجر التي تثق ببرنامج محل لإدارة مبيعاتها ومخازنها يوميًا.",

    // FAQ Accordion
    "faq-tag": "الأسئلة الشائعة",
    "faq-title": "هل لديك أي استفسارات؟",
    "faq-desc": "إليك الإجابات على الأسئلة الشائعة حول تراخيص برنامج محل، الميزات، وطرق الإعداد.",
    "faq-q1": "ما هو برنامج محل (M7al POS)؟",
    "faq-a1": "برنامج محل هو نظام كاشير ونقاط بيع متقدم يعمل بالكامل دون إنترنت، مصمم لمساعدة أصحاب المتاجر والشركات الصغيرة في تنظيم المخزون، تسجيل المبيعات، ومراقبة الديون والأرباح.",
    "faq-q2": "هل يتطلب البرنامج الاتصال بالإنترنت؟",
    "faq-a2": "لا، يعمل برنامج محل دون اتصال بالإنترنت تمامًا. تتم جميع العمليات الحسابية وحفظ البيانات على جهازك محليًا، وتوفر المزامنة الاحتياطية السحابية كخيار إضافي عند توفر الشبكة.",
    "faq-q3": "كيف يتم تأمين وحفظ بيانات متجري؟",
    "faq-a3": "تُحفظ قاعدة البيانات على الهارد ديسك الخاص بجهازك مباشرة وتُشفر بشكل آمن. لا يمكن لأي خادم خارجي أو طرف ثالث الوصول لبيانات مبيعاتك أو عملائك، مما يمنحك خصوصية مطلقة.",
    "faq-q4": "هل يمكن تشغيل البرنامج على أكثر من جهاز؟",
    "faq-a4": "نعم، تدعم النسخة الاحترافية (Professional) ربط ومزامنة حتى 3 أجهزة كاشير في نفس المتجر عبر الشبكة المحلية أو السحابية، بينما تدعم النسخة القياسية جهازًا واحدًا.",
    "faq-q5": "كيف يمكنني تفعيل البرنامج بعد الشراء؟",
    "faq-a5": "عند تثبيت البرنامج، ستحصل على معرف جهاز (Device ID). أرسل هذا الرمز لنا عبر واتساب لإصدار مفتاح الترخيص مدى الحياة، ثم ضعه في خانة التفعيل بالتطبيق أو الموقع الإلكتروني.",
    "faq-q6": "هل توجد أي اشتراكات أو رسوم شهرية؟",
    "faq-a6": "لا على الإطلاق. تراخيص برنامج محل (القياسية والاحترافية) هي تراخيص لمرة واحدة مدى الحياة. تدفع مرة واحدة فقط وتستمتع بالبرنامج وبجميع التحديثات دون أي التزامات مالية دورية.",
    "faq-q7": "هل يدعم البرنامج طباعة الفواتير والباركود؟",
    "faq-a7": "نعم، يدعم البرنامج جميع طابعات الفواتير الحرارية (مقاس 58 و 80 ملم) وطابعات الباركود، بالإضافة إلى دعم الموازين الإلكترونية وقارئات الباركود بمختلف أنواعها.",
    "faq-q8": "ما هي خيارات الدعم الفني المتاحة؟",
    "faq-a8": "نوفر دعمًا فنيًا مجانيًا عبر البريد الإلكتروني، بالإضافة لدعم فني متميز ومباشر 24/7 عبر واتساب والمكالمات الهاتفية للمشتركين بالباقة الاحترافية لحل أي مشكلات وإعداد الطابعات.",

    // Contact Us
    "contact-tag": "اتصل بنا",
    "contact-title": "تواصل معنا مباشرة",
    "contact-desc": "هل لديك أي استفسار حول الميزات أو التراخيص؟ فريق الدعم المحلي جاهز لخدمتك.",
    "contact-info-text": "يسعدنا دائمًا مساعدتك في إعداد وتهيئة برنامج محل في متجرك. تواصل معنا عبر القنوات التالية:",
    "label-whatsapp": "الدعم عبر واتساب",
    "label-facebook": "صفحة فيسبوك",
    "label-email": "البريد الإلكتروني",
    "label-location": "موقع المكتب الرئيسي",
    "val-whatsapp": "+966 50 000 0000",
    "val-facebook": "fb.com/m7al.pos",
    "val-email": "support@m7al.com",
    "val-location": "الرياض، المملكة العربية السعودية",

    // Footer
    "footer-desc": "تطبيق نقاط بيع سريع، خفيف، ويعمل بالكامل دون إنترنت، مصمم لتلبية احتياجات تجار التجزئة المعاصرين.",
    "footer-col-company": "الشركة",
    "footer-col-product": "المنتج",
    "footer-col-legal": "القانونية",
    "link-about": "من نحن",
    "link-careers": "الوظائف",
    "link-blog": "المدونة",
    "link-download": "تحميل التطبيق",
    "link-pricing": "الأسعار",
    "link-security": "الأمان والخصوصية",
    "link-privacy": "سياسة الخصوصية",
    "link-terms": "شروط الخدمة",
    "link-refund": "سياسة الاسترجاع",
    "footer-copyright": "&copy; 2026 برنامج محل. جميع الحقوق محفوظة."
  },
  fr: {
    // Navigation
    "nav-home": "Accueil",
    "nav-features": "Fonctionnalités",
    "nav-screenshots": "Captures",
    "nav-how-it-works": "Fonctionnement",
    "nav-pricing": "Tarifs",
    "nav-activation": "Activation",
    "nav-faq": "FAQ",
    "nav-contact": "Contact",
    "btn-buy-now": "Acheter",

    // Hero Section
    "hero-badge": "Logiciel de caisse hors ligne premium",
    "hero-title": "La solution POS intelligente pour les <span>commerces modernes</span>",
    "hero-subtitle": "Simplifiez vos ventes, gérez vos stocks, suivez les dettes, les dépenses et accédez à des rapports visuels. Rapide, hors ligne et hautement sécurisé localement.",
    "btn-download": "Télécharger",
    "btn-watch-demo": "Voir Démo",

    // Statistics
    "stat-downloads": "Téléchargements",
    "stat-reliability": "Fiabilité hors ligne",
    "stat-rating": "Note sur App Store",
    "stat-languages": "Langues",

    // Features Section
    "features-tag": "Fonctionnalités",
    "features-title": "Fonctionnalités puissantes tout-en-un",
    "features-desc": "Tout ce dont vous avez besoin pour gérer votre commerce efficacement, en ligne ou hors ligne.",
    "f1-title": "Gestion de Stock",
    "f1-desc": "Suivez les niveaux de stock, configurez des alertes de niveau bas et catégorisez les produits.",
    "f2-title": "Scanner Code-barres & QR",
    "f2-desc": "Scannez rapidement à l'aide de la caméra de votre appareil ou d'un lecteur externe.",
    "f3-title": "Ventes & Factures",
    "f3-desc": "Générez des factures numériques soignées, des reçus et encaissez en quelques secondes.",
    "f4-title": "Gestion Clientèle",
    "f4-desc": "Enregistrez les clients, suivez l'historique des achats et lancez des programmes de fidélité.",
    "f5-title": "Gestion Fournisseurs",
    "f5-desc": "Suivez les chaînes d'approvisionnement, les bons de commande et les comptes fournisseurs.",
    "f6-title": "Suivi des Dettes",
    "f6-desc": "Gérez les dettes des clients et fournisseurs avec rappels et extraits de compte.",
    "f7-title": "Suivi des Dépenses",
    "f7-desc": "Enregistrez les coûts d'exploitation quotidiens, loyer, factures et gardez un bilan sain.",
    "f8-title": "Rapports de Bénéfices",
    "f8-desc": "Analyses complètes sur les marges bénéficiaires, revenus nets et produits phares.",
    "f9-title": "Tableau de Bord Visuel",
    "f9-desc": "Panneau de contrôle interactif illustrant les meilleures ventes et statistiques clients.",
    "f10-title": "Mode Hors Ligne",
    "f10-desc": "Fonctionne 100% sans internet. Sauvegarde automatique dès retour de connexion.",
    "f11-title": "Base de Données Locale",
    "f11-desc": "Données enregistrées et chiffrées sur votre appareil local. Confidentialité garantie.",
    "f12-title": "Recherche Ultra Rapide",
    "f12-desc": "Trouvez produits, factures et détails fournisseurs instantanément grâce à l'indexation.",

    // Gallery / Screenshots
    "gallery-tag": "Captures",
    "gallery-title": "Découvrez l'interface",
    "gallery-desc": "Explorez l'interface utilisateur moderne, propre et intuitive de M7al.",
    "screenshot-1": "Écran de Vente & Caisse",
    "screenshot-1-desc": "Interface de vente fluide avec ajout rapide de produits par code-barres.",
    "screenshot-2": "Gestionnaire d'inventaire",
    "screenshot-2-desc": "Gérez vos fiches produits, importez des fichiers Excel et modifiez les tarifs.",
    "screenshot-3": "Statistiques & Bilan",
    "screenshot-3-desc": "Graphiques circulaires et courbes de tendance montrant la croissance.",

    // Video Tutorials
    "video-tag": "Tutoriels",
    "video-title": "M7al en Action",
    "video-desc": "Découvrez comment configurer votre boutique et commencer à vendre en moins de 5 minutes.",

    // How It Works
    "how-tag": "Processus",
    "how-title": "Démarrer en 4 étapes simples",
    "how-desc": "Pas d'inscription fastidieuse. Installez, configurez et commencez à vendre.",
    "step1-title": "1. Installez l'App",
    "step1-desc": "Téléchargez et installez M7al sur votre ordinateur Windows ou appareil Android.",
    "step2-title": "2. Ajoutez vos Articles",
    "step2-desc": "Saisissez vos produits manuellement ou importez un fichier Excel.",
    "step3-title": "3. Vendez",
    "step3-desc": "Scannez les codes-barres, encaissez et imprimez des reçus personnalisés.",
    "step4-title": "4. Suivez l'Évolution",
    "step4-desc": "Consultez vos statistiques de marge, dépenses et dettes en direct.",

    // Pricing
    "pricing-tag": "Tarification",
    "pricing-title": "Tarifs clairs, sans abonnement",
    "pricing-desc": "Choisissez l'offre qui correspond le mieux à vos besoins. Pas de frais récurrents.",
    "plan-trial": "Essai Gratuit",
    "plan-trial-desc": "Idéal pour tester l'ensemble des fonctionnalités.",
    "plan-standard": "Standard",
    "plan-standard-desc": "Pour les commerces et boutiques en développement.",
    "plan-professional": "Professionnel",
    "plan-professional-desc": "Pour les grandes entreprises nécessitant un contrôle total.",
    "price-free": "0€",
    "price-standard": "49€",
    "price-professional": "99€",
    "price-period-free": "/ 14 Jours",
    "price-period-life": "/ À Vie",
    "btn-start-trial": "Commencer l'essai",
    "btn-buy-license": "Acheter la licence",
    "pricing-feature-offline": "Support hors ligne complet",
    "pricing-feature-items-100": "Jusqu'à 100 produits",
    "pricing-feature-items-unlimited": "Produits illimités",
    "pricing-feature-debts": "Suivi complet des dettes",
    "pricing-feature-devices-1": "Licence pour 1 appareil",
    "pricing-feature-devices-3": "Liaison jusqu'à 3 appareils",
    "pricing-feature-support-basic": "Support via la communauté",
    "pricing-feature-support-premium": "Support Premium 24/7",

    // Activation Section
    "activation-tag": "Activation",
    "activation-title": "Activer Votre Logiciel",
    "activation-desc": "Débloquez la version Standard ou Professionnelle à vie avec votre clé.",
    "activation-instruction": "Comment l'activer :",
    "activation-step1": "Copiez l'ID d'appareil (Device ID) affiché dans l'application.",
    "activation-step2": "Contactez notre équipe de vente sur WhatsApp pour acquérir votre clé.",
    "activation-step3": "Collez le code d'activation reçu ci-dessous et cliquez sur Activer.",
    "label-device-id": "ID de l'appareil (Device ID)",
    "label-activation-code": "Code d'activation",
    "placeholder-device-id": "Entrez ou copiez le Device ID de l'application",
    "placeholder-activation-code": "Ex : M7AL-XXXX-XXXX-XXXX",
    "btn-activate": "Activer le logiciel",
    "activation-status-success": "Activation réussie ! Merci d'avoir acheté M7al.",
    "activation-status-error": "Code d'activation invalide. Veuillez vérifier le code.",

    // Call to Action
    "cta-title": "Prêt à moderniser votre boutique ?",
    "cta-desc": "Rejoignez des milliers de commerçants qui font confiance à M7al pour gérer leurs ventes.",

    // FAQ Accordion
    "faq-tag": "FAQ",
    "faq-title": "Questions Fréquentes",
    "faq-desc": "Réponses rapides aux questions courantes sur les licences et l'utilisation de M7al.",
    "faq-q1": "Qu'est-ce que M7al POS ?",
    "faq-a1": "M7al est un logiciel de point de vente hors ligne premium pour petites et moyennes entreprises pour suivre inventaires, ventes, dépenses et éditer des rapports de rentabilité.",
    "faq-q2": "Faut-il internet pour utiliser le logiciel ?",
    "faq-a2": "Non, M7al fonctionne 100% hors ligne. Les données sont traitées localement sur votre poste. Internet sert uniquement aux sauvegardes cloud optionnelles.",
    "faq-q3": "Où sont sauvegardées mes données ?",
    "faq-a3": "Vos données sont stockées directement sur votre disque dur local et cryptées. Aucun accès extérieur n'est possible, garantissant une totale confidentialité.",
    "faq-q4": "Puis-je l'utiliser sur plusieurs postes ?",
    "faq-a4": "Oui, selon le plan choisi. L'offre Standard couvre un seul poste, tandis que l'offre Professionnel permet de relier jusqu'à 3 postes sur le même réseau local.",
    "faq-q5": "Comment se déroule l'activation ?",
    "faq-a5": "Après installation, l'app génère un Device ID. Vous nous le transmettez via WhatsApp pour obtenir votre clé de licence à vie, que vous insérez pour activer le système.",
    "faq-q6": "Y a-t-il des mensualités ?",
    "faq-a6": "Non. Les licences Standard et Professionnel sont des achats uniques à vie. Vous payez une seule fois, profitez des mises à jour gratuites et d'un usage illimité.",
    "faq-q7": "Prend-il en charge les imprimantes ticket ?",
    "faq-a7": "Oui, M7al est compatible avec toutes les imprimantes thermiques USB/Bluetooth (58mm et 80mm) et gère l'édition des étiquettes et tickets personnalisés.",
    "faq-q8": "Quel support technique proposez-vous ?",
    "faq-a8": "Nous offrons un support par e-mail pour tous, et une assistance WhatsApp/téléphone dédiée 24h/24 et 7j/7 pour la formule Professionnelle.",

    // Contact Us
    "contact-tag": "Contact",
    "contact-title": "Contactez-Nous",
    "contact-desc": "Des questions sur les tarifs ou des besoins spécifiques ? Notre équipe est disponible.",
    "contact-info-text": "Nous serons ravis de vous guider pour déployer M7al. Contactez-nous par ces canaux :",
    "label-whatsapp": "Support WhatsApp",
    "label-facebook": "Page Facebook",
    "label-email": "E-mail",
    "label-location": "Bureaux principaux",
    "val-whatsapp": "+966 50 000 0000",
    "val-facebook": "fb.com/m7al.pos",
    "val-email": "support@m7al.com",
    "val-location": "Riyad, Arabie saoudite",

    // Footer
    "footer-desc": "L'application de point de vente hors ligne légère et premium pour les commerces modernes.",
    "footer-col-company": "Entreprise",
    "footer-col-product": "Produit",
    "footer-col-legal": "Légal",
    "link-about": "À propos",
    "link-careers": "Carrières",
    "link-blog": "Blog",
    "link-download": "Télécharger",
    "link-pricing": "Tarifs",
    "link-security": "Sécurité",
    "link-privacy": "Politique de confidentialité",
    "link-terms": "Conditions d'utilisation",
    "link-refund": "Politique de remboursement",
    "footer-copyright": "&copy; 2026 M7al POS. Tous droits réservés."
  },
  es: {
    // Navigation
    "nav-home": "Inicio",
    "nav-features": "Características",
    "nav-screenshots": "Capturas",
    "nav-how-it-works": "Cómo Funciona",
    "nav-pricing": "Precios",
    "nav-activation": "Activación",
    "nav-faq": "FAQ",
    "nav-contact": "Contacto",
    "btn-buy-now": "Comprar Ahora",

    // Hero Section
    "hero-badge": "Software POS fuera de línea premium",
    "hero-title": "La solución POS inteligente para <span>negocios modernos</span>",
    "hero-subtitle": "Simplifique ventas, gestione inventario, controle deudas, gastos y acceda a informes visuales. Rápido, fuera de línea y con base de datos local cifrada.",
    "btn-download": "Descargar App",
    "btn-watch-demo": "Ver Demo",

    // Statistics
    "stat-downloads": "Descargas",
    "stat-reliability": "Fiabilidad fuera de línea",
    "stat-rating": "Calificación App Store",
    "stat-languages": "Idiomas",

    // Features Section
    "features-tag": "Características",
    "features-title": "Características potentes todo en uno",
    "features-desc": "Todo lo necesario para administrar su comercio de manera eficiente, con o sin conexión.",
    "f1-title": "Gestión de Inventario",
    "f1-desc": "Monitoree existencias, configure alertas de stock bajo y clasifique sus productos.",
    "f2-title": "Escáner de Barras & QR",
    "f2-desc": "Escanee rápidamente utilizando la cámara de su dispositivo o un lector físico USB/BT.",
    "f3-title": "Ventas y Facturación",
    "f3-desc": "Genere facturas en formato digital, recibos de caja y cobre en segundos.",
    "f4-title": "Gestión de Clientes",
    "f4-desc": "Guarde contactos, rastree compras e implemente tarjetas de fidelización de clientes.",
    "f5-title": "Gestión Proveedores",
    "f5-desc": "Administre cadenas de suministro, órdenes de compra e historial de pagos.",
    "f6-title": "Control de Deudas",
    "f6-desc": "Gestione cuentas por cobrar y pagar de clientes y proveedores con extractos claros.",
    "f7-title": "Registro de Gastos",
    "f7-desc": "Registre gastos diarios, arriendo, servicios públicos y lleve un balance financiero.",
    "f8-title": "Informes de Ganancia",
    "f8-desc": "Análisis y balances completos de márgenes de beneficio, ingresos netos y ventas.",
    "f9-title": "Panel de Estadísticas",
    "f9-desc": "Un panel de control visual interactivo para analizar ventas, productos y tendencias.",
    "f10-title": "Modo Fuera de Línea",
    "f10-desc": "Opere al 100% sin internet. Datos sincronizados en la nube cuando regrese la conexión.",
    "f11-title": "Base de Datos Local Cifrada",
    "f11-desc": "Información protegida y guardada localmente en su máquina. Privacidad total.",
    "f12-title": "Búsqueda Inteligente",
    "f12-desc": "Encuentre productos, boletas y detalles de proveedores instantáneamente con indexación.",

    // Gallery / Screenshots
    "gallery-tag": "Capturas",
    "gallery-title": "Vistazo al Software",
    "gallery-desc": "Explore la interfaz limpia, intuitiva y rápida que ofrece M7al para agilizar su negocio.",
    "screenshot-1": "Pantalla de Ventas y Caja",
    "screenshot-1-desc": "Caja rápida para registrar artículos mediante código de barras o teclado táctil.",
    "screenshot-2": "Control de Stock",
    "screenshot-2-desc": "Añada nuevos productos, edite precios e importe masivamente mediante plantillas Excel.",
    "screenshot-3": "Estadísticas y Análisis",
    "screenshot-3-desc": "Reportes interactivos y gráficos de crecimiento para evaluar su rendimiento.",

    // Video Tutorials
    "video-tag": "Tutoriales",
    "video-title": "M7al en Acción",
    "video-desc": "Aprenda cómo configurar su tienda y empezar a vender y facturar en menos de 5 minutos.",

    // How It Works
    "how-tag": "Proceso",
    "how-title": "Comience en 4 pasos simples",
    "how-desc": "Sin registros complejos. Simplemente instale, configure su catálogo y empiece a vender.",
    "step1-title": "1. Instale la App",
    "step1-desc": "Descargue e instale M7al en su computadora Windows o dispositivo Android.",
    "step2-title": "2. Suba Productos",
    "step2-desc": "Añada sus productos manualmente o suba un archivo Excel con precios y código.",
    "step3-title": "3. Empiece a Vender",
    "step3-desc": "Escanee los códigos, procese cobros y emita recibos impresos o digitales.",
    "step4-title": "4. Vea Informes",
    "step4-desc": "Observe sus ingresos, márgenes de ganancia, gastos y saldos live.",

    // Pricing
    "pricing-tag": "Precios",
    "pricing-title": "Planes simples y transparentes",
    "pricing-desc": "Elija la licencia de por vida que mejor se adapte a su local. Sin mensualidades.",
    "plan-trial": "Prueba Gratuita",
    "plan-trial-desc": "Excelente para probar todas las funciones.",
    "plan-standard": "Standard",
    "plan-standard-desc": "Para pequeños comercios y negocios en crecimiento.",
    "plan-professional": "Professional",
    "plan-professional-desc": "Para negocios grandes que requieren sincronización y control total.",
    "price-free": "$0",
    "price-standard": "$49",
    "price-professional": "$99",
    "price-period-free": "/ 14 Días",
    "price-period-life": "/ De por vida",
    "btn-start-trial": "Iniciar Prueba",
    "btn-buy-license": "Comprar Licencia",
    "pricing-feature-offline": "Soporte fuera de línea completo",
    "pricing-feature-items-100": "Hasta 100 productos",
    "pricing-feature-items-unlimited": "Productos ilimitados",
    "pricing-feature-debts": "Control total de deudas y gastos",
    "pricing-feature-devices-1": "Licencia para 1 equipo",
    "pricing-feature-devices-3": "Enlace de hasta 3 equipos",
    "pricing-feature-support-basic": "Soporte de la comunidad",
    "pricing-feature-support-premium": "Soporte Premium 24/7",

    // Activation Section
    "activation-tag": "Activación",
    "activation-title": "Activar Licencia de Software",
    "activation-desc": "Desbloquee las funciones de por vida de su plan Standard o Professional con su clave.",
    "activation-instruction": "Pasos de activación:",
    "activation-step1": "Copie el ID de Dispositivo (Device ID) exclusivo dentro del software.",
    "activation-step2": "Escríbanos a nuestro canal de WhatsApp para adquirir su código de activación.",
    "activation-step3": "Pegue la clave de activación recibida a continuación y presione Activar.",
    "label-device-id": "ID de Dispositivo (Device ID)",
    "label-activation-code": "Código de Activación",
    "placeholder-device-id": "Ingrese o copie el Device ID desde la app",
    "placeholder-activation-code": "Ej: M7AL-XXXX-XXXX-XXXX",
    "btn-activate": "Activar software",
    "activation-status-success": "¡Activación completada con éxito! Gracias por comprar M7al.",
    "activation-status-error": "Código de activación inválido. Revise la clave o contacte al soporte.",

    // Call to Action
    "cta-title": "¿Listo para modernizar su punto de venta?",
    "cta-desc": "Únase a miles de negocios que ya confían en M7al para llevar sus cuentas y stock.",

    // FAQ Accordion
    "faq-tag": "FAQ",
    "faq-title": "Preguntas Frecuentes",
    "faq-desc": "Respuestas rápidas a las principales dudas sobre licencias, instalación y soporte de M7al.",
    "faq-q1": "¿Qué es M7al POS?",
    "faq-a1": "M7al es una aplicación premium de punto de venta que funciona sin internet, ayudando a las tiendas a gestionar inventarios, ventas, deudas, gastos y reportes diarios.",
    "faq-q2": "¿Requiere internet para funcionar?",
    "faq-a2": "No, M7al funciona totalmente de manera local y sin conexión. El internet solo es necesario de forma opcional para respaldos en la nube o sincronización de red.",
    "faq-q3": "¿Cómo se protegen mis datos?",
    "faq-a3": "Sus datos se almacenan cifrados directamente en su dispositivo de manera local. Ningún servidor externo o terceros tienen acceso a su facturación o listados.",
    "faq-q4": "¿Puedo usar la licencia en varios dispositivos?",
    "faq-a4": "Sí, el plan Professional le permite conectar y sincronizar hasta 3 puestos de trabajo en el mismo local comercial, mientras que el plan Standard es para 1 dispositivo.",
    "faq-q5": "¿Cómo funciona la activación de la licencia?",
    "faq-a5": "La app instalada le mostrará un Device ID. Nos envía ese código por WhatsApp para procesar el pago único. Le enviaremos una clave a pegar en la casilla de activación.",
    "faq-q6": "¿Hay cobros mensuales o anuales?",
    "faq-a6": "No. Las licencias Standard y Professional son compras únicas de por vida. Paga una vez y obtiene acceso completo a actualizaciones sin suscripciones recurrentes.",
    "faq-q7": "¿Es compatible con impresoras de boletas?",
    "faq-a7": "Sí, M7al es compatible con cualquier impresora térmica USB/Bluetooth (de 58mm y 80mm) y permite personalizar los textos e imprimir códigos de barra.",
    "faq-q8": "¿Qué tipo de soporte técnico brindan?",
    "faq-a8": "Ofrecemos asistencia básica por correo electrónico para todos, y soporte prioritario de por vida 24/7 vía WhatsApp y llamada para usuarios del plan Professional.",

    // Contact Us
    "contact-tag": "Contacto",
    "contact-title": "Contáctenos",
    "contact-desc": "¿Tiene dudas sobre la compra de claves o características a medida? Escríbanos hoy.",
    "contact-info-text": "Con gusto le asesoraremos para instalar y configurar M7al en su negocio:",
    "label-whatsapp": "Soporte WhatsApp",
    "label-facebook": "Página Facebook",
    "label-email": "Correo de Soporte",
    "label-location": "Ubicación de Oficina",
    "val-whatsapp": "+966 50 000 0000",
    "val-facebook": "fb.com/m7al.pos",
    "val-email": "support@m7al.com",
    "val-location": "Riad, Arabia Saudita",

    // Footer
    "footer-desc": "La aplicación de punto de venta premium local diseñada para agilizar comercios minoristas.",
    "footer-col-company": "Compañía",
    "footer-col-product": "Producto",
    "footer-col-legal": "Legal",
    "link-about": "Sobre Nosotros",
    "link-careers": "Trabajos",
    "link-blog": "Blog",
    "link-download": "Descargar",
    "link-pricing": "Precios",
    "link-security": "Seguridad",
    "link-privacy": "Política de privacidad",
    "link-terms": "Términos de servicio",
    "link-refund": "Política de devolución",
    "footer-copyright": "&copy; 2026 M7al POS. Todos los derechos reservados."
  }
};

// --- Language Switcher Logic ---
function setLanguage(lang) {
  if (!translations[lang]) return;
  
  localStorage.setItem("m7al-lang", lang);
  
  // Set HTML direction and lang attribute
  const isRtl = lang === "ar";
  document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", lang);

  // Update active state of dropdown choices
  document.querySelectorAll(".lang-option").forEach(opt => {
    if (opt.getAttribute("data-lang") === lang) {
      opt.classList.add("active");
    } else {
      opt.classList.remove("active");
    }
  });

  // Update current language button label
  const btnLabel = { en: "EN 🇬🇧", ar: "AR 🇸🇦", fr: "FR 🇫🇷", es: "ES 🇪🇸" };
  document.getElementById("current-lang").innerHTML = `${btnLabel[lang]} <i class="fas fa-chevron-down"></i>`;

  // Translate all DOM elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  // Translate placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      element.setAttribute("placeholder", translations[lang][key]);
    }
  });
  
  // Close language dropdown if open
  document.getElementById("lang-dropdown").classList.remove("show");
}

// --- Dark Mode Logic ---
function initTheme() {
  const savedTheme = localStorage.getItem("m7al-theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (savedTheme === "dark" || (!savedTheme && systemDark)) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-theme");
  localStorage.setItem("m7al-theme", isDark ? "dark" : "light");
}

// --- Testimonials Carousel ---
let currentSlide = 0;
const slides = document.querySelectorAll(".testimonial-slide");
const dotsContainer = document.getElementById("slider-dots");

function initTestimonials() {
  if (slides.length === 0) return;
  
  // Create dots dynamically
  dotsContainer.innerHTML = "";
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("slider-dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => showSlide(index));
    dotsContainer.appendChild(dot);
  });
  
  showSlide(0);
}

function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  
  currentSlide = index;
  const slider = document.getElementById("testimonials-slider");
  
  // Offset depends on direction (RTL or LTR)
  const isRtl = document.documentElement.getAttribute("dir") === "rtl";
  const offset = isRtl ? (currentSlide * 100) : -(currentSlide * 100);
  slider.style.transform = `translateX(${offset}%)`;
  
  // Update dots
  const dots = document.querySelectorAll(".slider-dot");
  dots.forEach((dot, idx) => {
    if (idx === currentSlide) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function nextTestimonial() {
  showSlide(currentSlide + 1);
}

function prevTestimonial() {
  showSlide(currentSlide - 1);
}

// --- Animated Counters ---
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");
  const speed = 200; // The lower, the faster

  counters.forEach(counter => {
    const updateCount = () => {
      const target = parseFloat(counter.getAttribute("data-target"));
      const current = parseFloat(counter.innerText);
      
      // Check if we are dealing with rating decimal
      const isDecimal = target % 1 !== 0;
      const increment = isDecimal ? (target / speed) : Math.ceil(target / speed);
      
      if (current < target) {
        let value = current + increment;
        if (value > target) value = target;
        
        counter.innerText = isDecimal ? value.toFixed(1) : Math.floor(value);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = isDecimal ? target.toFixed(1) : target + (counter.getAttribute("data-suffix") || "");
      }
    };
    
    updateCount();
  });
}

// --- FAQ Accordion ---
function initFaq() {
  const headers = document.querySelectorAll(".faq-header");
  
  headers.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const body = item.querySelector(".faq-body");
      const isActive = item.classList.contains("active");
      
      // Close all other items
      document.querySelectorAll(".faq-item").forEach(otherItem => {
        otherItem.classList.remove("active");
        otherItem.querySelector(".faq-body").style.maxHeight = null;
      });
      
      if (!isActive) {
        item.classList.add("active");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });
}

// --- Scroll Reveal Effect ---
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  
  const revealOnScroll = () => {
    reveals.forEach(reveal => {
      const windowHeight = window.innerHeight;
      const elementTop = reveal.getBoundingClientRect().top;
      const elementVisible = 120;
      
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add("active");
      }
    });
  };
  
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Trigger once on load
  
  // Also watch statistics section specifically to trigger counters
  const statsSection = document.getElementById("stats-section");
  if (statsSection) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);
  }
}

// --- Local Activation Simulation ---
function initActivationForm() {
  const form = document.getElementById("activation-form");
  const deviceInput = document.getElementById("device-id");
  const codeInput = document.getElementById("activation-code");
  const statusBox = document.getElementById("activation-status");
  const btn = document.getElementById("btn-activate-submit");
  
  // Fill device ID with mock ID on load
  if (deviceInput) {
    deviceInput.value = "M7AL-DEV-" + Math.random().toString(36).substring(2, 10).toUpperCase();
  }
  
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const code = codeInput.value.trim().toUpperCase();
      const currentLang = localStorage.getItem("m7al-lang") || "en";
      
      // Show loading spinner on button
      btn.disabled = true;
      const originalText = btn.innerHTML;
      btn.innerHTML = `<div class="spinner" style="width: 20px; height: 20px; border-width: 2px;"></div>`;
      
      // Simulate verification delay
      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalText;
        statusBox.className = "activation-status-box"; // reset
        
        // Simulating validation: Any code matching pattern M7AL-XXXX-XXXX-XXXX is valid
        const codePattern = /^M7AL-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
        
        if (codePattern.test(code)) {
          statusBox.classList.add("success");
          statusBox.innerHTML = `<i class="fas fa-check-circle"></i> ${translations[currentLang]["activation-status-success"]}`;
        } else {
          statusBox.classList.add("error");
          statusBox.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${translations[currentLang]["activation-status-error"]}`;
        }
      }, 1500);
    });
  }
}

// --- Video Tutorial Play Handler ---
function initVideoPlayer() {
  const videoMock = document.getElementById("video-mock");
  const youtubePlaceholder = document.getElementById("youtube-placeholder");
  
  if (videoMock && youtubePlaceholder) {
    videoMock.addEventListener("click", () => {
      // Load YouTube embed dynamically upon user interaction
      // Note: we can use a sample helpful POS overview or explanation video
      youtubePlaceholder.innerHTML = `
        <iframe 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      `;
      // Hide play overlay
      const overlay = videoMock.querySelector(".video-thumbnail-overlay");
      if (overlay) overlay.style.display = "none";
    });
  }
}

// --- Document Ready Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  // 1. Loading Overlay fade out
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("fade-out");
    }, 400);
  }

  // 2. Init language and direction
  const savedLang = localStorage.getItem("m7al-lang") || "en";
  setLanguage(savedLang);

  // 3. Theme init
  initTheme();
  
  // Theme toggle click listener
  document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

  // 4. Mobile navigation menu
  const burger = document.getElementById("burger-menu");
  const navMenu = document.getElementById("nav-menu");
  
  if (burger && navMenu) {
    burger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const icon = burger.querySelector("i");
      if (navMenu.classList.contains("active")) {
        icon.className = "fas fa-times";
      } else {
        icon.className = "fas fa-bars";
      }
    });
    
    // Close nav when clicking a link
    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        burger.querySelector("i").className = "fas fa-bars";
      });
    });
  }

  // Language Dropdown open/close
  const langBtn = document.getElementById("lang-btn");
  const langDropdown = document.getElementById("lang-dropdown");
  
  if (langBtn && langDropdown) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle("show");
    });
    
    document.addEventListener("click", () => {
      langDropdown.classList.remove("show");
    });
  }

  // Language change options click listeners
  document.querySelectorAll(".lang-option").forEach(opt => {
    opt.addEventListener("click", () => {
      const selectedLang = opt.getAttribute("data-lang");
      setLanguage(selectedLang);
      
      // Update testimonials if language changes
      showSlide(currentSlide);
    });
  });

  // 5. Testimonial Init
  initTestimonials();
  
  // Testimonial arrow handlers
  document.getElementById("slider-prev").addEventListener("click", prevTestimonial);
  document.getElementById("slider-next").addEventListener("click", nextTestimonial);

  // 6. FAQ Accordions init
  initFaq();

  // 7. Scroll reveal & Intersection observers init
  initScrollReveal();

  // 8. Activation setup
  initActivationForm();

  // 9. Video loading setup
  initVideoPlayer();

  // 10. Sticky navbar on scroll
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });

  // 11. Scroll to top button
  const scrollTopBtn = document.getElementById("scroll-top-btn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });
  
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
