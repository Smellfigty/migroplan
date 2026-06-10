/* ============================================================
   Freelandia — interactions
   nav scroll · quiz modal · FAQ accordion · SEO reveal ·
   reveal-on-scroll · lang toggle
   ============================================================ */
(function () {
  "use strict";

  /* ============================================================
     i18n — rough EN translation (RU is the source of truth)
     ============================================================ */
  var LANG = 'ru';
  var I18N = {
    // header / nav
    'Кому подходит': 'Who it’s for',
    'Как это работает': 'How it works',
    'Консультация': 'Consultation',
    'Тарифы': 'Pricing',
    'Гайды': 'Guides',
    // hero
    'Виза самозанятого в Германию': 'Self-employment visa for Germany',
    'ВИЗА САМОЗАНЯТОГО В ГЕРМАНИИ': 'Self-employment visa for Germany',
    'Получите доступ к крупнейшему рынку Европы': 'Get access to Europe’s largest market',
    'Поможем составить стратегию для визы фрилансера в Германию': 'We’ll help you prepare a strong case for your freelance visa in Germany',
    'Не уверены, что это подходит именно вам?': 'Not sure it’s right for you?',
    'Не уверены, что это подходит именно вам? Пройдите короткий тест или запишитесь на консультацию': 'Not sure it’s right for you? Take a short test or book a consultation',
    'Подготовим за вас документы для визы фрилансера в Германию': 'We’ll prepare your freelancer-visa documents for Germany',
    'Для специалистов из третьих стран, нацеленных на ЕС. Помогаем подготовиться к визе самозанятого — спокойно, по шагам и без бюрократической паники.': 'For specialists from third countries aiming for the EU. We help you prepare for the self-employment visa — calmly, step by step, without the bureaucratic panic.',
    'Выведите свой доход на новый уровень и начните лучшую жизнь в Германии': 'Take your income to the next level and start a better life in Germany',
    'Выбрать пакет': 'Choose a package',
    'Не уверены, что подходит?': 'Not sure it fits?',
    'Пройдите короткий тест': 'Take a short test',
    'или': 'or',
    'запишитесь на консультацию': 'book a consultation',
    // trust band
    'до 3 лет': 'up to 3 years',
    'срок действия первого ВНЖ': 'initial residence permit',
    'после 5 лет': 'after 5 years',
    'право на гражданство ФРГ': 'eligible for German citizenship',
    '~14 дней': '~14 days',
    'срок подготовки документов': 'document prep time',
    'основание для визы D': 'legal basis for the freelance visa',
    // audience
    'Специалисты, уже живущие в третьих странах и нацеленные на ЕС. Если ваша профессия относится к свободным, этот путь, скорее всего, про вас.': 'Specialists already living in third countries and aiming for the EU. If your profession is a liberal one, this path is most likely for you.',
    'Кому это подходит': 'Who it’s for',
    'Узнать свои шансы': 'Check your chances',
    'мгновенные результаты без email или номера телефона': 'instant results – no email or phone needed',
    'IT-специалисты': 'IT specialists',
    'разработка, консалтинг': 'development, consulting',
    'Дизайнеры': 'Designers',
    'графика, веб, UX/UI': 'graphic design, web, UX/UI',
    'Преподаватели': 'Teachers',
    'языки, музыка, коучи': 'languages, music, coaching',
    'Маркетологи': 'Marketers',
    'тексты, реклама, SMM': 'copy, ads, SMM',
    'И многие другие': 'And many others',
    'переводчики, художники и др.': 'translators, artists, consultants',
    // process
    'Оценка шансов': 'Check your chances',
    'Консультация по кейсу': 'Case consultation',
    'Составление документов': 'Document preparation',
    'Чек-лист и инструкция': 'Checklist and instructions',
    'тест': 'test',
    'пакет': 'package',
    'консультация': 'consultation',
    // consultation
    'Начните с консультации': 'Start with a consultation',
    'Бесплатно · 15 минут': 'FREE · 15 MINUTES',
    'Экспресс-оценка': 'Express assessment',
    'Быстро оценим вашу ситуацию': 'We’ll quickly assess your situation',
    'Проконсультируем про требования и документы': 'We’ll advise you on requirements and documents',
    'Поймем, нужен ли вам готовый пакет': 'We’ll see if you need a ready-made package',
    'Записаться': 'Book a call',
    'ПОЛНОЦЕННЫЙ РАЗБОР КЕЙСА · 60 МИНУТ': 'FULL CASE REVIEW · 60 MINUTES',
    'Подробная консультация': 'Detailed consultation',
    'Стратегия под вашу профессию и место жительства': 'A strategy tailored to your profession and location',
    'Полный разбор необходимых именно вам документов': 'A full review of the documents you need',
    'Засчитывается в стоимость комбо-пакета': 'Credited towards the combo package',
    // pricing
    // pricing
    'Готовые пакеты услуг': 'Ready-made service packages',
    'Закажите недостающий документ или выберите всё и сразу!': 'Order the document you need, or choose everything at once!',
    'Шаблон LOI': 'LOI template',
    'Помощь в подготовке LOI': 'Help preparing your LOI',
    'Объясним, что важно учесть': 'We’ll explain what to keep in mind',
    'Проверка вашего варианта': 'Review of your draft',
    'Выбрать': 'Choose',
    'Финансовый план': 'Financial plan',
    'Прогноз доходов, расходов и прибыли на 3 года': 'Income, expense and profit forecast for 3 years',
    'Проверка на соответствие требованиям': 'Checked against the requirements',
    'Обязательно для каждого города ФРГ': 'Required in every German city',
    'Обязательно для каждого города ФРГ ': 'Required in every German city',
    'Бизнес-план': 'Business plan',
    'Описание деятельности, USP и плана развития': 'Activity description, USP and development plan',
    'Анализ рынка, конкурентов и общего спроса': 'Market, competitor and demand analysis',
    'Обязательно в ряде городов и для некоторых профессий': 'Required in some cities and for certain professions',
    'Рекомендуем · лучшая цена': 'RECOMMENDED · BEST VALUE',
    'Комбо-пакет': 'Combo package',
    'Бизнес- и финансовый план': 'Business and financial plan',
    'Консультация 60 минут': '60-minute consultation',
    'Выгода ~270 €': 'Save ~270€',
    'Я не знаю, что мне нужно': 'I’m not sure what I need',
    // testimonials
    'Отзывы наших клиентов': 'What our clients say',
    'Репетитор немецкого языка': 'German Language Tutor',
    'Контент-менеджер': 'Content Manager',
    'Хайфа → Штуттгарт': 'Haifa → Stuttgart',
    'Думала, что репетитору немецкого почти нереально получить визу фрилансера. Помогли упаковать мой опыт и доход так, что ведомство одобрило заявку без единого вопроса.': 'I thought it was almost impossible for a German tutor to get a freelancer visa. They packaged my experience and income so well that the authority approved my application without a single question.',
    'репетитор немецкого языка': 'German language tutor',
    'Белград → Мюнхен': 'Belgrade → Munich',
    'Сам бы потратил месяцы на формулировки и сбор бумаг. Здесь за две недели собрали финансовый и бизнес-план — подал документы спокойно и уверенно.': 'On my own I’d have spent months on wording and paperwork. Here they put together the financial and business plan in two weeks — I filed calmly and confidently.',
    'веб-разработчик': 'web developer',
    'Тбилиси → Берлин': 'Tbilisi → Berlin',
    // FAQ
    'Частые вопросы': 'Frequently asked questions',
    'Что такое «свободные профессии»?': 'What are "liberal professions"?',
    'Это юридическое сопровождение?': 'Is this legal representation?',
    'Нет. Мы помогаем подготовиться: консультируем, готовим бизнес- и финансовый план и проверяем документы. Это не юридическое представительство и не замена адвокату.': 'No. We help you prepare: we consult, build the business and financial plan, and review documents. This is not legal representation and not a substitute for a lawyer.',
    'Нужен ли адвокат для подачи?': 'Do I need a lawyer to apply?',
    'В большинстве случаев адвокат не требуется — заявление вы подаёте сами. Если случай сложный, мы честно подскажем, на каком этапе стоит привлечь юриста.': 'In most cases a lawyer isn’t required — you submit the application yourself. If the case is complex, we’ll honestly tell you when to bring in a lawyer.',
    'Что такое Letter of Intent?': 'What is a Letter of Intent?',
    'Это письмо о намерении сотрудничать от вашего потенциального клиента. Мы даём проверенный шаблон и показываем, как его корректно оформить. Подписывает письмо ваш реальный клиент — готовых писем мы не выдаём.': 'It’s a letter of intent to cooperate from your potential client. We provide a proven template and show how to fill it in correctly. Your real client signs it — we don’t hand out ready-made letters.',
    'Чем бесплатная консультация отличается от платной?': 'What’s the difference between the free and paid consultation?',
    'Бесплатные 15 минут — это быстрая оценка шансов и подсказка, что готовить. Платный часовой разбор — подробная стратегия под вашу профессию и страну; его стоимость засчитывается в комбо-пакет.': 'The free 15 minutes are a quick chances check and a hint on what to prepare. The paid hour is a detailed strategy for your profession and country; its cost is credited toward the combo package.',
    'Как происходит оплата?': 'How do I pay?',
    'После короткого брифа по вашему кейсу мы согласуем детали и оплату в личном чате. Без понимания вашей ситуации подготовить план невозможно, поэтому всё начинается с разговора.': 'After a short brief on your case, we agree on details and payment in a private chat. A plan is impossible without understanding your situation, so everything starts with a conversation.',
    'Сколько занимает подготовка документов?': 'How long does it take to prepare the documents?',
    'Обычно около 14 дней с момента, когда вы передали всю нужную информацию. Точный срок зависит от сложности кейса и скорости обратной связи с вашей стороны.': 'Usually about 14 days from the moment you’ve provided all the needed information. The exact time depends on case complexity and how fast you respond.',
    'На каком языке готовятся документы?': 'What language are the documents in?',
    'Документы готовятся на немецком — в формате, который ожидают ведомства. По запросу прилагаем версию на русском или английском, чтобы вы понимали каждую строку.': 'Documents are prepared in German — in the format authorities expect. On request we add a Russian or English version so you understand every line.',
    'Что если визу не одобрят?': 'What if the visa isn’t approved?',
    'Можно ли перевезти семью?': 'Can I bring my family?',
    'Вы гарантируете получение визы?': 'Do you guarantee visa approval?',
    'Гарантировать одобрение не может никто — решение принимает ведомство. Наша задача — максимально усилить вашу заявку и снять формальные причины для отказа ещё до подачи.': 'No one can guarantee approval — the authority decides. Our job is to strengthen your application as much as possible and remove formal grounds for refusal before you file.',
    // faq cta
    'Написать в Telegram': 'Message us on Telegram',
    // SEO toggle button
    'Читать подробнее': 'Read more',
    'Свернуть': 'Collapse',
    // SEO
    'Виза фрилансера (Freiberufler) в Германию: с чего начать': 'Freelancer visa (Freiberufler) for Germany: where to start',
    'Виза самозанятого позволяет специалистам свободных профессий жить и работать в Германии независимо от конкретного работодателя. Это один из самых доступных путей для специалистов из третьих стран получить вид на жительство в ЕС и со временем — постоянный статус.': 'The self-employment visa lets liberal-profession specialists live and work in Germany independently of any single employer. It’s one of the most accessible routes for third-country specialists to get an EU residence permit and, over time, permanent status.',
    'Кому подходит виза самозанятого': 'Who the self-employment visa suits',
    'Ключевое условие — ваша деятельность должна относиться к свободным профессиям по немецкому налоговому праву. К ним относят разработчиков, дизайнеров, преподавателей, инженеров, переводчиков, журналистов и ряд других специалистов интеллектуального и творческого труда.': 'The key condition is that your activity must qualify as a liberal profession under German tax law. These include developers, designers, teachers, engineers, translators, journalists and other intellectual and creative professionals.',
    'Какие документы потребуются': 'Which documents you’ll need',
    'Для заявления обычно нужны бизнес-план с описанием деятельности и спроса, финансовый прогноз на ближайшие годы, подтверждение квалификации, медицинская страховка и письма о намерении сотрудничать от потенциальных клиентов. Аккуратно оформленный пакет заметно повышает шансы на одобрение.': 'An application usually needs a business plan describing the activity and demand, a financial forecast for the coming years, proof of qualification, health insurance, and letters of intent from potential clients. A neatly prepared package noticeably improves approval chances.',
    'Как проходит процесс': 'How the process goes',
    'После сбора документов вы записываетесь в немецкое представительство или местное ведомство по делам иностранцев. Сроки рассмотрения варьируются от нескольких недель до нескольких месяцев в зависимости от города и загрузки. После одобрения вы регистрируетесь в налоговой и получаете право легально выставлять счета.': 'Once documents are collected, you book an appointment at a German mission or the local foreigners’ authority. Processing takes from a few weeks to a few months depending on the city and workload. After approval you register with the tax office and gain the right to invoice legally.',
    'Частые ошибки': 'Common mistakes',
    'Самые распространённые причины отказа — неверная классификация деятельности, нереалистичный финансовый план и отсутствие подтверждённого спроса. Грамотная подготовка документов помогает избежать этих ловушек ещё до подачи заявления.': 'The most common reasons for refusal are misclassified activity, an unrealistic financial plan, and lack of confirmed demand. Careful document preparation helps avoid these traps before you even apply.',
    // footer
    'Консультации по поводу визы самозанятого в Германии. Не является юридическим сопровождением.': 'Advisory services for Germany’s self-employment visa. This is not legal representation.',
    'Разделы': 'Sections',
    'Контакты': 'Contact',
    'Правовая информация': 'Legal',
    // quiz
    'Подходит ли вам виза?': 'Is the visa right for you?',
    'Подходит ли вам виза фрилансера?': 'Is the freelancer visa right for you?',
    '4 вопроса · без регистрации · 2 минуты': '4 questions · no signup · 2 minutes',
    'Начать': 'Start',
    '← Назад': '← Back',
    '← Изменить ответ': '← Change answer',
    'Сколько вам лет?': 'How old are you?',
    'Меньше 45 лет': 'Under 45',
    '45 лет или больше': '45 or older',
    'Чем вы занимаетесь?': 'What do you do?',
    'Фриланс — IT, преподавание, дизайн, переводы, тексты и др.': 'Freelance — IT, teaching, design, translation, copy, etc.',
    'Малый бизнес — школа танцев, рекламное агентство и т.п.': 'Small business — dance school, ad agency, etc.',
    'Какой у вас ежемесячный доход?': 'What is your monthly income?',
    'Менее 1500 €': 'Under €1500',
    '1500–2000 €': '€1500–2000',
    'Более 2000 €': 'Over €2000',
    'У вас есть клиенты в Германии?': 'Do you have clients in Germany?',
    'Да, есть': 'Yes, I do',
    'На данный момент — нет': 'Not at the moment',
    'Скорее всего, нужна другая виза': 'You likely need a different visa',
    'Для малого бизнеса виза фрилансера обычно не подходит — вам нужна полноценная виза для ведения бизнеса. Разберём ваш случай и подскажем стратегию на консультации с глубоким разбором.': 'For a small business the freelancer visa usually doesn’t fit — you need a full business visa. We’ll review your case and suggest a strategy in an in-depth consultation.',
    'Записаться на разбор кейса': 'Book a case review',
    'Пока рано подавать': 'It’s a bit early to apply',
    'Для визы фрилансера важен стабильный доход от 1500 € в месяц. Когда выйдете на этот уровень — возвращайтесь, поможем подготовить документы. Можем обсудить ваш план на бесплатной консультации.': 'The freelancer visa needs a stable income from €1500 a month. Once you reach that level, come back — we’ll help prepare the documents. We can discuss your plan in a free consultation.',
    'Бесплатная консультация · 15 минут': 'Free consultation · 15 minutes',
    'Отличные шансы!': 'Excellent chances!',
    'Шансы средние': 'Moderate chances',
    'У вас отличные шансы на визу фрилансера в Германии. Запишитесь на бесплатную консультацию, чтобы узнать подробности.': 'You have excellent chances for the freelancer visa in Germany. Book a free consultation to learn the details.',
    'У вас нестандартный кейс, но хорошие шансы всё ещё возможны. Запишитесь на подробную консультацию, чтобы рассмотреть все варианты и выстроить стратегию переезда.': 'Your case is non-standard, but good chances are still possible. Book a detailed consultation to weigh all options and build a relocation strategy.',
    'Подробная консультация · разбор кейса': 'Detailed consultation · case review',
    'Посмотреть тарифы': 'See pricing'
  };

  // long copy with inline gold keyword accents — translated at element level
  // (innerHTML, keyed by data-i18n slug) so the .kw spans survive language swaps
  var I18N_HTML = {
    'seo-body': '', // filled from window.SEO_EN_HTML below    'faq-freelance': 'These are professions of an intellectual, creative, scientific or advisory nature. In Germany they are called <span class="kw">Freie Berufe</span> and are distinguished from ordinary business — <span class="kw">Gewerbe</span>. Such professions include developers, designers, teachers, translators, writers, doctors, engineers, journalists — and even massage therapists!',
    'hero-lead': 'Get a <span class="kw">tailored action plan</span> based on <span class="kw">your situation</span> and <span class="kw">goals</span>',
    'aud-lead': 'Professionals considering <span class="kw">Germany</span> as a place to <span class="kw">work</span> and <span class="kw">live</span>. If your profession allows you to <span class="kw">work independently</span>, this visa could be a <span class="kw">good fit</span>.',
    'proc-1': 'Take the <a href="#" data-quiz>test</a>, choose a <a href="#pricing">package</a>, or book a <a href="#consult">free, non-binding consultation</a>.',
    'proc-2': 'We’ll have a call, review <span class="kw">your situation</span> in detail, and answer <span class="kw">your questions</span>.',
    'proc-3': 'We’ll prepare your <span class="kw">business plan</span> and <span class="kw">financial forecast</span> within <span class="kw">14 days</span>.',
    'proc-4': 'You’ll receive <span class="kw">all materials</span>, a checklist, and <span class="kw">step-by-step submission instructions</span>.',
    'review-1': 'Alexander helped me prepare all the documents I needed, including a <span class="kw">3-year financial plan</span> and a <span class="kw">30-page business plan</span>. My visa was approved <span class="kw">3 months after submission</span> – which was incredibly fast – and I am so glad I did not have to deal with all the paperwork on my own. Thank you so much!',
    'review-2': 'Beyond the documents, MigroPlan also helped me <span class="kw">after the move</span>. Alexander explained how to register as a <span class="kw">Freiberufler</span> and even helped me open a <span class="kw">business bank account</span>. I am very happy with the support and will recommend MigroPlan to my friends.',
    'consult-lead': 'Want to learn more, check your chances, or ask questions? Book a call – <span class="kw">we’ll review your case individually</span>.',
    'seo-intro': 'The self-employment visa lets <span class="kw">liberal-profession specialists</span> live and work in Germany <span class="kw">independently of any single employer</span>. It’s one of the most accessible routes for third-country specialists to get an <span class="kw">EU residence permit</span> and, over time, permanent status.',
    'seo-docs': 'An application usually needs a <span class="kw">business plan</span> describing the activity and demand, a <span class="kw">financial forecast</span> for the coming years, proof of qualification, health insurance, and <span class="kw">letters of intent</span> from potential clients. A neatly prepared package noticeably improves approval chances.',
    'faq-family': 'Yes. The self-employment visa lets you plan <span class="kw">moving with your family</span>: your <span class="kw">spouse and minor children</span> can usually apply together with you or join later through <span class="kw">family reunification</span>. As a rule, you’ll need to prove housing, sufficient income and your family relationship. The exact requirements depend on the country of application, the authority and your case – we’ll help you work out which materials to prepare.',
    'faq-legal': 'No. We advise on preparation, put together your <span class="kw">business plan and financial forecast</span>, and help you get to grips with the materials for your case. This is not <span class="kw">legal representation</span> and is not a substitute for a lawyer.',
    'faq-lawyer': 'In most cases <span class="kw">you don’t need a lawyer</span> — you <span class="kw">file the documents yourself</span> by appointment at the German consulate or embassy. The submission process is usually straightforward: you show up at the scheduled time and hand over your <span class="kw">prepared document package</span>.',
    'faq-loi': 'A <span class="kw">Letter of Intent</span> (or <span class="kw">Absichtserklärung</span>) is a short written statement from a potential German client expressing readiness to work with you. Most applications call for <span class="kw">2–3 such letters</span> from individuals or companies. It’s not a service contract — the signatory takes on no obligations and simply <span class="kw">confirms their interest</span> in your work.',
    'faq-compare': 'The <span class="kw">free consultation</span> runs <span class="kw">15 minutes</span> and helps you quickly understand whether this path is right for you, what to prepare, and which package might be useful. The <span class="kw">paid consultation</span> runs <span class="kw">60 minutes</span>: we go through your case, profession, country of application, documents, and potential weak points in detail. Its cost is <span class="kw">credited towards the combo package</span>.',
    'faq-payment': 'After a short review of your case, we agree on the right <span class="kw">format, timeline and payment method</span> in a <span class="kw">personal chat</span>. We typically start work after <span class="kw">full upfront payment</span>.',
    'faq-timeline': 'Writing the <span class="kw">business plan and financial forecast</span> usually takes around <span class="kw">14 days</span> from the moment you’ve provided all the information we need. The exact timeframe depends on the <span class="kw">complexity of your case</span> and how quickly you respond.',
    'faq-language': 'All documents are prepared exclusively in <span class="kw">German</span> – the official language of <span class="kw">Germany and its authorities</span>. This ensures the materials are immediately in the format that immigration offices expect upon submission.',
        'faq-cta-text': 'Still have questions?<br>We’re happy to help!',
    'faq-guarantee': 'No. The decision rests with the <span class="kw">German immigration authorities</span> — and <span class="kw">no one can guarantee a 100% outcome</span>. We help you present your situation correctly <span class="kw">in the language authorities understand</span>: a well-prepared business plan, financial forecast and supporting materials significantly improve your <span class="kw">chances of approval</span>, but the final decision always lies with the <span class="kw">immigration office</span>.'
  };

  // pull EN SEO article from the separately-loaded file (freelandia-seo-en.js)
  if (window.SEO_EN_HTML) I18N_HTML['seo-body'] = window.SEO_EN_HTML;

  function T(s) { return (LANG === 'en' && I18N[s]) ? I18N[s] : s; }

  function i18nNodes() {
    var nodes = [];
    var tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var p = n.parentElement;
        if (p && p.closest('#tweaks-root, #quizBody, [data-i18n], script, style, noscript')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n; while ((n = tw.nextNode())) nodes.push(n);
    return nodes;
  }

  function setLang(l) {
    LANG = l;
    document.documentElement.lang = l;
    i18nNodes().forEach(function (n) {
      var ru = (n.__ru != null) ? n.__ru : n.nodeValue;
      var key = ru.trim();
      if (l === 'en') {
        if (I18N[key]) { if (n.__ru == null) n.__ru = n.nodeValue; n.nodeValue = ru.replace(key, I18N[key]); }
      } else if (n.__ru != null) {
        n.nodeValue = n.__ru;
      }
    });
    // element-level swap for long copy that carries inline keyword spans
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var slug = el.getAttribute('data-i18n');
      if (el.__ruHTML == null) el.__ruHTML = el.innerHTML;
      if (l === 'en' && I18N_HTML[slug]) el.innerHTML = I18N_HTML[slug];
      else el.innerHTML = el.__ruHTML;
    });
    if (typeof quiz !== 'undefined' && quiz && quiz.classList.contains('open')) render();
    // language-aware "soon" badge on the Guides nav link
    var soonLink = document.querySelector('.nav a.soon');
    if (soonLink) soonLink.setAttribute('data-soon', l === 'en' ? 'soon' : 'скоро');
    // recalculate seo-collapse height after lang swap (content length changes)
    if (seoCollapse) {
      var isOpen = seo && seo.classList.contains('open');
      seoCollapse.style.setProperty('max-height', isOpen ? (seoCollapse.scrollHeight + 'px') : '176px', 'important');
      if (seoLabel) seoLabel.textContent = isOpen ? T('Свернуть') : T('Читать подробнее');
    }
    try { localStorage.setItem('flandia_lang', l); } catch (e) {}
  }

  /* ---------- smooth anchor scroll ---------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a || a.getAttribute('href') === '#') return;
    if (a.hasAttribute('data-noop')) { e.preventDefault(); return; }
    var id = a.getAttribute('href').slice(1);
    var t = document.getElementById(id);
    if (t) {
      e.preventDefault();
      var y = t.getBoundingClientRect().top + window.scrollY - 78;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });

  /* ---------- noop links (telegram / lang) ---------- */
  document.querySelectorAll('[data-tg], [data-noop]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      if (el.getAttribute('href') === '#' || el.hasAttribute('data-noop')) e.preventDefault();
    });
  });

  var lang = document.getElementById('lang');
  if (lang) {
    lang.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      lang.querySelectorAll('button').forEach(function (x) { x.classList.remove('on'); });
      b.classList.add('on');
      setLang(b.getAttribute('data-lang'));
    });
    // restore saved language
    var saved = null;
    try { saved = localStorage.getItem('flandia_lang'); } catch (e) {}
    if (saved === 'en') {
      lang.querySelectorAll('button').forEach(function (x) {
        x.classList.toggle('on', x.getAttribute('data-lang') === 'en');
      });
      setLang('en');
    }
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    q.addEventListener('click', function () {
      var open = item.classList.contains('open');
      if (open) {
        a.style.maxHeight = null;
        item.classList.remove('open');
      } else {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* ---------- SEO reveal ---------- */
  var seo = document.getElementById('seo');
  var seoToggle = document.getElementById('seoToggle');
  var seoCollapse = document.getElementById('seoCollapse');
  if (seo && seoToggle && seoCollapse) {
    var seoLabel = seoToggle.querySelector('.seo-more-t');
    var seoFade = seo.querySelector('.seo-fade');
    seoToggle.addEventListener('click', function () {
      var open = seo.classList.toggle('open');
      seoToggle.classList.toggle('open', open);
      // drive expansion from JS with !important so the inline value always wins
      // the cascade (the descendant-class max-height swap proved unreliable here)
      seoCollapse.style.setProperty('max-height', open ? (seoCollapse.scrollHeight + 'px') : '176px', 'important');
      if (seoFade) seoFade.style.opacity = open ? '0' : '';
      if (seoLabel) seoLabel.textContent = open ? T('Свернуть') : T('Читать подробнее');
    });
  }

  /* ---------- reveal-on-scroll ---------- */
  var io = ('IntersectionObserver' in window)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
    : null;
  document.querySelectorAll('.reveal').forEach(function (el) {
    if (io) io.observe(el); else el.classList.add('in');
  });

  /* ============================================================
     QUIZ MODAL
     ============================================================ */
  var CAL60 = 'https://cal.eu/migroplan/60min';
  var CAL15 = 'https://cal.eu/migroplan/15min';

  var INTRO = { q: 'Подходит ли вам виза фрилансера?', sub: '4 вопроса · без регистрации · 2 минуты' };

  // p = очки к шансу · dq = дисквалификация (показываем отдельный экран)
  var QUESTIONS = [
    { q: 'Сколько вам лет?', opts: [
      { t: 'Меньше 45 лет', p: 2 },
      { t: '45 лет или больше', p: 1 }
    ]},
    { q: 'Чем вы занимаетесь?', opts: [
      { t: 'Фриланс — IT, преподавание, дизайн, переводы, тексты и др.', p: 2 },
      { t: 'Малый бизнес — школа танцев, рекламное агентство и т.п.', dq: 'business' }
    ]},
    { q: 'Какой у вас ежемесячный доход?', opts: [
      { t: 'Менее 1500 €', dq: 'income' },
      { t: '1500–2000 €', p: 1 },
      { t: 'Более 2000 €', p: 2 }
    ]},
    { q: 'У вас есть клиенты в Германии?', opts: [
      { t: 'Да, есть', p: 2 },
      { t: 'На данный момент — нет', p: 1 }
    ]}
  ];

  var MAX = 8; // 2+2+2+2

  var DQ = {
    business: {
      title: 'Скорее всего, нужна другая виза',
      text: 'Для малого бизнеса виза фрилансера обычно не подходит — вам нужна полноценная виза для ведения бизнеса. Разберём ваш случай и подскажем стратегию на консультации с глубоким разбором.',
      cta: { label: 'Записаться на разбор кейса', href: CAL60 }
    }, 
    income: {
      title: 'Пока рано подавать',
      text: 'Для визы фрилансера важен стабильный доход от 1500 € в месяц. Когда выйдете на этот уровень — возвращайтесь, поможем подготовить документы. Можем обсудить ваш план на бесплатной консультации.',
      cta: { label: 'Бесплатная консультация · 15 минут', href: CAL15 }
    }
  };

  var quiz = document.getElementById('quiz');
  var quizBody = document.getElementById('quizBody');
  var quizProg = document.getElementById('quizProg');
  var quizClose = document.getElementById('quizClose');

  // state.view: 'intro' | 'q' | 'dq' | 'final'
  var state = { view: 'intro', idx: 0, picks: [], dqKey: null };

  function score() {
    return state.picks.reduce(function (sum, oi, i) {
      var o = QUESTIONS[i].opts[oi];
      return sum + (o && o.p ? o.p : 0);
    }, 0);
  }

  function setProg(pct) { quizProg.style.width = pct + '%'; }

  function render() {
    quizBody.innerHTML = '';
    var wrap = document.createElement('div');
    wrap.className = 'quiz-step on';

    if (state.view === 'intro') {
      setProg(6);
      wrap.innerHTML = '<div class="quiz-q">' + T(INTRO.q) + '</div><p class="quiz-sub">' + T(INTRO.sub) + '</p>';
      var start = mkBtn(T('Начать'), 'accent block');
      start.addEventListener('click', function () { state.view = 'q'; state.idx = 0; render(); });
      wrap.appendChild(start);
      quizBody.appendChild(wrap);
      return;
    }

    if (state.view === 'q') {
      var s = QUESTIONS[state.idx];
      setProg(Math.round(((state.idx + 1) / (QUESTIONS.length + 1)) * 100));
      wrap.innerHTML = '<div class="quiz-q">' + T(s.q) + '</div>';
      var opts = document.createElement('div');
      opts.className = 'opts';
      s.opts.forEach(function (o, oi) {
        var op = document.createElement('div');
        op.className = 'opt';
        if (state.picks[state.idx] === oi) op.className += ' sel';
        op.innerHTML = '<span class="rb"></span><span>' + T(o.t) + '</span>';
        op.addEventListener('click', function () { choose(oi); });
        opts.appendChild(op);
      });
      wrap.appendChild(opts);

      var nav = document.createElement('div');
      nav.className = 'quiz-nav';
      var back = document.createElement('button');
      back.className = 'quiz-back';
      back.textContent = T('← Назад');
      back.addEventListener('click', prev);
      var count = document.createElement('span');
      count.className = 'quiz-count';
      count.textContent = (state.idx + 1) + ' / ' + QUESTIONS.length;
      nav.appendChild(back); nav.appendChild(count);
      wrap.appendChild(nav);
      quizBody.appendChild(wrap);
      return;
    }

    if (state.view === 'dq') {
      setProg(100);
      var d = DQ[state.dqKey];
      wrap.className += ' result';
      wrap.innerHTML = '<div class="quiz-q">' + T(d.title) + '</div><p>' + T(d.text) + '</p>';
      var da = document.createElement('div');
      da.className = 'ractions';
      da.appendChild(mkLink(T(d.cta.label), d.cta.href, 'accent block'));
      var db = mkBtn(T('← Изменить ответ'), 'ghost block');
      db.addEventListener('click', prev);
      da.appendChild(db);
      wrap.appendChild(da);
      quizBody.appendChild(wrap);
      return;
    }

    // final
    setProg(100);
    var sc = score();
    var high = sc >= 7;
    wrap.className += ' result';
    var pct = Math.round((sc / MAX) * 100);
    wrap.innerHTML =
      '<div class="quiz-q">' + (high ? T('Отличные шансы!') : T('Шансы средние')) + '</div>' +
      '<div class="gauge"><i></i></div>' +
      '<div class="score">' + (LANG === 'en' ? (sc + ' of ' + MAX + ' points for your profile') : (sc + ' из ' + MAX + ' баллов по вашему профилю')) + '</div>' +
      '<p>' + (high
        ? T('У вас отличные шансы на визу фрилансера в Германии. Запишитесь на бесплатную консультацию, чтобы узнать подробности.')
        : T('У вас нестандартный кейс, но хорошие шансы всё ещё возможны. Запишитесь на подробную консультацию, чтобы рассмотреть все варианты и выстроить стратегию переезда.')) + '</p>';
    var actions = document.createElement('div');
    actions.className = 'ractions';
    if (high) {
      actions.appendChild(mkLink(T('Бесплатная консультация · 15 минут'), CAL15, 'accent block'));
    } else {
      actions.appendChild(mkLink(T('Подробная консультация · разбор кейса'), CAL60, 'accent block'));
    }
    var pkg = mkBtn(T('Посмотреть тарифы'), 'ghost block');
    pkg.addEventListener('click', function () { close(); goTo('pricing'); });
    actions.appendChild(pkg);
    wrap.appendChild(actions);
    quizBody.appendChild(wrap);
    requestAnimationFrame(function () {
      var g = wrap.querySelector('.gauge i'); if (g) g.style.width = pct + '%';
    });
  }

  function choose(oi) {
    var o = QUESTIONS[state.idx].opts[oi];
    if (o.dq) { state.dqKey = o.dq; state.view = 'dq'; render(); return; }
    state.picks[state.idx] = oi;
    if (state.idx < QUESTIONS.length - 1) { state.idx++; }
    else { state.view = 'final'; }
    render();
  }

  function prev() {
    if (state.view === 'dq') { state.view = 'q'; render(); return; }
    if (state.view === 'final') { state.view = 'q'; state.idx = QUESTIONS.length - 1; render(); return; }
    if (state.idx > 0) { state.idx--; render(); return; }
    state.view = 'intro'; render();
  }

  function mkBtn(label, cls) {
    var b = document.createElement('a');
    b.className = 'btn ' + cls;
    b.href = '#';
    b.textContent = label;
    b.addEventListener('click', function (e) { e.preventDefault(); });
    return b;
  }
  function mkLink(label, href, cls) {
    var b = document.createElement('a');
    b.className = 'btn ' + cls;
    b.href = href;
    b.target = '_blank';
    b.rel = 'noopener';
    b.textContent = label;
    b.addEventListener('click', function () { setTimeout(close, 120); });
    return b;
  }
  function open() { state = { view: 'intro', idx: 0, picks: [], dqKey: null }; render(); quiz.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function close() { quiz.classList.remove('open'); document.body.style.overflow = ''; }
  function goTo(id) {
    var t = document.getElementById(id);
    if (t) { var y = t.getBoundingClientRect().top + window.scrollY - 78; window.scrollTo({ top: y, behavior: 'smooth' }); }
  }

  document.addEventListener('click', function (e) {
    var ql = e.target.closest('[data-quiz]');
    if (ql) { e.preventDefault(); open(); }
  });
  if (quizClose) quizClose.addEventListener('click', close);
  if (quiz) quiz.addEventListener('click', function (e) { if (e.target === quiz) close(); });

  /* ============================================================
     LEGAL PAGES — hash routing (Impressum & Datenschutz)
     ------------------------------------------------------------
     German / EU law requires the Impressum (Legal Notice) and the
     Privacy Policy to be reachable at their own URLs. We give each
     a real, shareable hash route (#legal-notice, #privacy-policy)
     and update document.title accordingly — but they still open as
     modal overlays on top of the landing page.
     ============================================================ */
  var privacy = document.getElementById('privacy');
  var privacyClose = document.getElementById('privacyClose');
  var imprint = document.getElementById('imprint');
  var imprintClose = document.getElementById('imprintClose');
  var baseTitle = document.title;

  // map of accepted URL hashes -> modal element (slugs differ from the
  // element ids on purpose, so the browser never tries to scroll to them)
  var LEGAL_ROUTES = {
    '#privacy-policy': privacy,
    '#privacy': privacy,
    '#datenschutz': privacy,
    '#legal-notice': imprint,
    '#legal': imprint,
    '#impressum': imprint
  };

  function showLegal(el) {
    [privacy, imprint].forEach(function (m) {
      if (!m) return;
      if (m === el) m.classList.add('open');
      else m.classList.remove('open');
    });
    document.body.style.overflow = el ? 'hidden' : '';
  }

  // reflect the current URL hash into which legal modal (if any) is open
  function syncLegal() {
    var el = LEGAL_ROUTES[(location.hash || '').toLowerCase()] || null;
    showLegal(el);
    if (el === privacy) document.title = 'Privacy Policy — MigroPlan';
    else if (el === imprint) document.title = 'Legal Notice — MigroPlan';
    else document.title = baseTitle;
  }

  // closing a legal page strips its hash from the URL (no scroll jump)
  function closeLegal() {
    if (LEGAL_ROUTES[(location.hash || '').toLowerCase()]) {
      history.replaceState(null, '', location.pathname + location.search);
    }
    syncLegal();
  }

  window.addEventListener('hashchange', syncLegal);
  window.addEventListener('popstate', syncLegal);
  if (privacyClose) privacyClose.addEventListener('click', closeLegal);
  if (imprintClose) imprintClose.addEventListener('click', closeLegal);
  if (privacy) privacy.addEventListener('click', function (e) { if (e.target === privacy) closeLegal(); });
  if (imprint) imprint.addEventListener('click', function (e) { if (e.target === imprint) closeLegal(); });

  // open the right modal if the page is loaded directly at a legal URL
  syncLegal();

  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { close(); closeLegal(); } });
})();
