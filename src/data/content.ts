export type Lang = "de" | "ru" | "uk" | "ar";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "de", label: "Deutsch" },
  { code: "ru", label: "Русский" },
  { code: "uk", label: "Українська" },
  { code: "ar", label: "العربية" },
];

type L4 = Record<Lang, string>;

const t = (de: string, ru: string, uk: string, ar: string): L4 => ({ de, ru, uk, ar });

export type Doc = { id: string; name: L4; note: L4; hint: L4 };

const passport: Doc = {
  id: "passport",
  name: t("Reisepass oder Ausweis", "Загранпаспорт или удостоверение", "Закордонний паспорт або посвідчення", "جواز السفر أو بطاقة الهوية"),
  note: t("Original, noch gültig", "Оригинал, ещё действует", "Оригінал, ще чинний", "الأصل، وما زال ساريًا"),
  hint: t("Fehlt er, fragen Sie Konsulat oder Ausländerbehörde.", "Если нет — консульство или Ausländerbehörde.", "Якщо немає — консульство або Ausländerbehörde.", "إن لم يكن لديك، اسأل القنصلية أو دائرة الأجانب."),
};

const wohn: Doc = {
  id: "wohn",
  name: t("Wohnungsgeberbestätigung", "Подтверждение от арендодателя", "Підтвердження від орендодавця", "شهادة من مؤجر السكن"),
  note: t("Vom Vermieter ausgefüllt und unterschrieben", "Заполняет и подписывает арендодатель", "Заповнює і підписує орендодавець", "يملأها المؤجر ويوقّعها"),
  hint: t("Blanko gibt es auf der Website der Stadt. Kopie reicht oft nicht.", "Бланк на сайте города. Копии часто недостаточно.", "Бланк на сайті міста. Копії часто недостатньо.", "النموذج على موقع المدينة. النسخة غالبًا لا تكفي."),
};

const photo: Doc = {
  id: "photo",
  name: t("Biometrisches Passfoto", "Биометрическое фото", "Біометричне фото", "صورة بيومترية"),
  note: t("Nur wenn das Amt es verlangt", "Только если ведомство просит", "Лише якщо установа просить", "فقط إذا طلبها المكتب"),
  hint: t("Im Fotoatelier machen lassen und vorher nachfragen.", "Сделайте в фотоателье и заранее уточните.", "Зробіть у фотоательє і заздалегідь уточніть.", "صوّرها في استوديو واسأل قبل الموعد."),
};

const trans: Doc = {
  id: "trans",
  name: t("Beglaubigte Übersetzung", "Заверенный перевод", "Засвідчений переклад", "ترجمة معتمدة"),
  note: t("Wenn das Papier nicht auf Deutsch ist", "Если документ не на немецком", "Якщо документ не німецькою", "إذا لم تكن الوثيقة بالألمانية"),
  hint: t("Maschinenübersetzung gilt nicht. Suchen Sie eine vereidigte Person.", "Машинный перевод не примут. Нужен присяжный переводчик.", "Машинний переклад не приймуть. Потрібен присяжний перекладач.", "الترجمة الآلية لا تُقبل. ابحث عن مترجم محلف."),
};

export type ServiceId =
  | "ummeldung"
  | "anmeldung"
  | "kindergeld"
  | "krankenkasse"
  | "jobcenter"
  | "sprachkurs"
  | "fuehrerschein"
  | "digital";

export type Service = {
  id: ServiceId;
  title: L4;
  sub: L4;
  deadline: L4;
  docs: Doc[];
  steps: L4[];
};

export const SERVICES: Service[] = [
  {
    id: "ummeldung",
    title: t("Ummeldung", "Ummeldung — новый адрес", "Ummeldung — нова адреса", "تغيير العنوان"),
    sub: t("Adresse innerhalb Deutschlands ändern", "Смена адреса внутри Германии", "Зміна адреси всередині Німеччини", "تغيير العنوان داخل ألمانيا"),
    deadline: t("In der Regel 2 Wochen nach dem Einzug.", "Обычно 2 недели после переезда.", "Зазвичай 2 тижні після переїзду.", "عادةً خلال أسبوعين بعد الانتقال."),
    docs: [passport, wohn],
    steps: [
      t("Termin beim Bürgeramt suchen oder anrufen.", "Найдите запись в Bürgeramt или позвоните.", "Знайдіть запис у Bürgeramt або зателефонуйте.", "ابحث عن موعد في مكتب المواطنين أو اتصل."),
      t("Originale und die Wohnungsgeberbestätigung in eine Mappe legen.", "Положите оригиналы и подтверждение арендодателя в одну папку.", "Покладіть оригінали і підтвердження в одну теку.", "ضع الأصول وشهادة المؤجر في ملف واحد."),
      t("Im Amt den Satz unten sagen und die Papiere zeigen.", "В ведомстве скажите фразу ниже и покажите бумаги.", "В установі скажіть фразу нижче і покажіть папери.", "في المكتب قل الجملة أدناه وأظهر الأوراق."),
    ],
  },
  {
    id: "anmeldung",
    title: t("Anmeldung", "Anmeldung — первая регистрация", "Anmeldung — перша реєстрація", "التسجيل الأول"),
    sub: t("Erste Adresse in der Gemeinde anmelden", "Первая регистрация адреса", "Перша реєстрація адреси", "تسجيل أول عنوان في البلدية"),
    deadline: t("In der Regel 2 Wochen nach dem Einzug.", "Обычно 2 недели после заселения.", "Зазвичай 2 тижні після заселення.", "عادةً خلال أسبوعين بعد السكن."),
    docs: [passport, wohn],
    steps: [
      t("Prüfen, welches Bürgeramt für Ihre neue Adresse zuständig ist.", "Уточните, какое Bürgeramt отвечает за новый адрес.", "Уточніть, яке Bürgeramt відповідає за нову адресу.", "تأكد أي مكتب مسؤول عن عنوانك الجديد."),
      t("Wohnungsgeberbestätigung vor dem Termin holen.", "Возьмите подтверждение арендодателя до визита.", "Візьміть підтвердження орендодавця до візиту.", "احصل على شهادة المؤجر قبل الموعد."),
      t("Nach der Anmeldung die Meldebescheinigung aufbewahren.", "После регистрации сохраните Meldebescheinigung.", "Після реєстрації збережіть Meldebescheinigung.", "بعد التسجيل احتفظ بشهادة السكن."),
    ],
  },
  {
    id: "kindergeld",
    title: t("Kindergeld", "Kindergeld — пособие на ребёнка", "Kindergeld — допомога на дитину", "إعانة الطفل"),
    sub: t("Antrag bei der Familienkasse", "Заявление в Familienkasse", "Заява до Familienkasse", "طلب لدى صندوق الأسرة"),
    deadline: t("So bald wie möglich stellen. Rückwirkend nur begrenzt.", "Подавайте как можно скорее. Задним числом — ограниченно.", "Подавайте якнайшвидше. Заднім числом — обмежено.", "قدّم الطلب بأسرع ما يمكن. الرجوع للخلف محدود."),
    docs: [
      passport,
      {
        id: "birth",
        name: t("Geburtsurkunde des Kindes", "Свидетельство о рождении ребёнка", "Свідоцтво про народження дитини", "شهادة ميلاد الطفل"),
        note: t("Oft mit Übersetzung", "Часто с переводом", "Часто з перекладом", "غالبًا مع ترجمة"),
        hint: t("Fragen Sie die Familienkasse, welche Form sie braucht.", "Спросите Familienkasse, какая форма нужна.", "Запитайте Familienkasse, яка форма потрібна.", "اسأل صندوق الأسرة عن الصيغة المطلوبة."),
      },
      {
        id: "steuer",
        name: t("Steuer-ID", "Налоговый номер Steuer-ID", "Податковий номер Steuer-ID", "الرقم الضريبي"),
        note: t("Für Sie und das Kind, sobald vorhanden", "Для вас и ребёнка, когда будет", "Для вас і дитини, коли буде", "لك وللطفل عند توفره"),
        hint: t("Kommt per Brief vom Bundeszentralamt für Steuern.", "Приходит письмом от налогового ведомства.", "Надходить листом від податкового відомства.", "يصل برسالة من مكتب الضرائب الاتحادي."),
      },
      {
        id: "bank",
        name: t("Bankverbindung", "Банковские реквизиты", "Банківські реквізити", "بيانات الحساب البنكي"),
        note: t("IBAN eines Kontos auf Ihren Namen", "IBAN счёта на ваше имя", "IBAN рахунку на ваше ім’я", "آيبان لحساب باسمك"),
        hint: t("Ein Konto können Sie bei einer Bank mit Ausweis eröffnen.", "Счёт открывают в банке с удостоверением.", "Рахунок відкривають у банку з посвідченням.", "يمكن فتح حساب في بنك بوثيقة الهوية."),
      },
    ],
    steps: [
      t("Familienkasse der Bundesagentur für Arbeit suchen.", "Найдите Familienkasse при Agentur für Arbeit.", "Знайдіть Familienkasse при Agentur für Arbeit.", "ابحث عن صندوق الأسرة لدى وكالة العمل."),
      t("Antrag online oder auf Papier stellen.", "Подайте заявление онлайн или на бумаге.", "Подайте заяву онлайн або на папері.", "قدّم الطلب عبر الإنترنت أو ورقيًا."),
      t("Fristen im Antwortbrief notieren.", "Запишите сроки из ответного письма.", "Запишіть строки з листа-відповіді.", "دوّن المهل في رسالة الرد."),
    ],
  },
  {
    id: "krankenkasse",
    title: t("Krankenkasse", "Медицинская страховка", "Медичне страхування", "التأمين الصحي"),
    sub: t("Gesetzliche Krankenversicherung", "Государственная больничная касса", "Державна лікарняна каса", "تأمين صحي قانوني"),
    deadline: t("Ohne Versicherung keine reguläre Behandlung. Schnell klären.", "Без страховки обычное лечение недоступно. Решайте быстро.", "Без страховки звичайне лікування недоступне. Вирішуйте швидко.", "بدون تأمين لا يوجد علاج عادي. وضّح الأمر سريعًا."),
    docs: [
      passport,
      {
        id: "melde",
        name: t("Meldebescheinigung", "Справка о регистрации", "Довідка про реєстрацію", "شهادة التسجيل"),
        note: t("Nach Anmeldung beim Bürgeramt", "После Anmeldung в Bürgeramt", "Після Anmeldung у Bürgeramt", "بعد التسجيل في مكتب المواطنين"),
        hint: t("Beim Bürgeramt nach der Anmeldung mitnehmen.", "Возьмите в Bürgeramt после регистрации.", "Візьміть у Bürgeramt після реєстрації.", "احصل عليها من المكتب بعد التسجيل."),
      },
      {
        id: "job",
        name: t("Nachweis Arbeit oder Jobcenter", "Подтверждение работы или Jobcenter", "Підтвердження роботи або Jobcenter", "إثبات عمل أو مركز العمل"),
        note: t("Vertrag, Bescheid oder Mitgliedsbescheinigung", "Договор, решение или справка", "Договір, рішення або довідка", "عقد أو قرار أو شهادة عضوية"),
        hint: t("Die Kasse sagt, welcher Nachweis reicht.", "Касса скажет, какого подтверждения достаточно.", "Каса скаже, якого підтвердження достатньо.", "ستخبرك الشركة أي إثبات يكفي."),
      },
    ],
    steps: [
      t("Eine gesetzliche Kasse wählen, zum Beispiel vor Ort.", "Выберите государственную кассу, например рядом с домом.", "Оберіть державну касу, наприклад поруч із домом.", "اختر شركة تأمين قانونية، مثلًا قريبة منك."),
      t("Fragen: Bin ich pflichtversichert oder über das Jobcenter?", "Спросите: я обязан страховаться или через Jobcenter?", "Запитайте: я зобов’язаний страхуватися чи через Jobcenter?", "اسأل: هل تأميني إلزامي أم عبر مركز العمل؟"),
      t("Karte und Schreiben aufbewahren.", "Храните карточку и письма.", "Зберігайте картку і листи.", "احتفظ بالبطاقة والرسائل."),
    ],
  },
  {
    id: "jobcenter",
    title: t("Jobcenter", "Jobcenter — помощь на жизнь", "Jobcenter — допомога на життя", "مركز العمل"),
    sub: t("Bürgergeld und Unterstützung bei Arbeit", "Bürgergeld и помощь с работой", "Bürgergeld і допомога з роботою", "إعانة المعيشة والمساعدة في العمل"),
    deadline: t("Antrag stellen, sobald das Geld nicht reicht. Nicht warten.", "Подавайте, как только денег не хватает. Не ждите.", "Подавайте, щойно грошей не вистачає. Не чекайте.", "قدّم الطلب عندما لا يكفي المال. لا تنتظر."),
    docs: [
      passport,
      wohn,
      {
        id: "miete",
        name: t("Mietvertrag", "Договор аренды", "Договір оренди", "عقد الإيجار"),
        note: t("Zeigt Miete und Nebenkosten", "Показывает аренду и коммунальные", "Показує оренду і комунальні", "يبيّن الإيجار والتكاليف"),
        hint: t("Kopie vom Vermieter erbitten.", "Попросите копию у арендодателя.", "Попросіть копію в орендодавця.", "اطلب نسخة من المؤجر."),
      },
      {
        id: "konto",
        name: t("Kontoauszüge", "Выписки по счёту", "Виписки з рахунку", "كشوف الحساب"),
        note: t("Oft die letzten Monate", "Часто за последние месяцы", "Часто за останні місяці", "غالبًا للأشهر الأخيرة"),
        hint: t("Die Einladung sagt, wie viele Monate.", "В приглашении написано, за сколько месяцев.", "У запрошенні написано, за скільки місяців.", "رسالة الدعوة تحدد عدد الأشهر."),
      },
    ],
    steps: [
      t("Zuständiges Jobcenter über die neue Adresse finden.", "Найдите Jobcenter по новому адресу.", "Знайдіть Jobcenter за новою адресою.", "اعثر على مركز العمل حسب عنوانك الجديد."),
      t("Antrag Bürgergeld stellen und Termin mitnehmen.", "Подайте заявление на Bürgergeld и сохраните дату.", "Подайте заяву на Bürgergeld і збережіть дату.", "قدّم طلب الإعانة واحفظ الموعد."),
      t("Jede Frist im Brief sofort notieren.", "Каждый срок в письме сразу запишите.", "Кожен строк у листі одразу запишіть.", "دوّن كل مهلة في الرسالة فورًا."),
    ],
  },
  {
    id: "sprachkurs",
    title: t("Sprachkurs", "Языковой курс", "Мовний курс", "دورة اللغة"),
    sub: t("Integrationskurs und Deutsch lernen", "Интеграционный курс и немецкий", "Інтеграційний курс і німецька", "دورة الاندماج وتعلّم الألمانية"),
    deadline: t("Mit Berechtigung oder Verpflichtung nicht zu lange warten.", "Если есть направление или обязанность — не откладывайте.", "Якщо є направлення або обов’язок — не відкладайте.", "إذا كان لديك إذن أو التزام فلا تؤجل."),
    docs: [
      passport,
      {
        id: "bamf",
        name: t("Berechtigung oder Verpflichtung", "Направление или обязательство", "Направлення або зобов’язання", "إذن أو التزام بالدورة"),
        note: t("Vom BAMF, Jobcenter oder Ausländerbehörde", "От BAMF, Jobcenter или Ausländerbehörde", "Від BAMF, Jobcenter або Ausländerbehörde", "من المكتب الاتحادي أو مركز العمل أو دائرة الأجانب"),
        hint: t("Ohne Papier fragen diese Stellen zuerst.", "Без бумаги сначала спросите эти ведомства.", "Без паперу спочатку запитайте ці установи.", "بدون ورقة اسأل هذه الجهات أولًا."),
      },
    ],
    steps: [
      t("Kursträger in der Stadt suchen (Volkshochschule und andere).", "Найдите школу в городе (Volkshochschule и другие).", "Знайдіть школу в місті (Volkshochschule та інші).", "ابحث عن جهة دورة في المدينة."),
      t("Einstufungstest machen.", "Пройдите тест на уровень.", "Пройдіть тест на рівень.", "أجرِ اختبار تحديد المستوى."),
      t("Zeiten und Fehlzeiten-Regeln aufschreiben.", "Запишите расписание и правила пропусков.", "Запишіть розклад і правила пропусків.", "دوّن المواعيد وقواعد الغياب."),
    ],
  },
  {
    id: "fuehrerschein",
    title: t("Führerschein", "Водительские права", "Водійські права", "رخصة القيادة"),
    sub: t("Ausländischen Führerschein klären", "Иностранные права", "Іноземні права", "رخصة قيادة أجنبية"),
    deadline: t("Fristen hängen vom Herkunftsland ab. Amt fragen.", "Сроки зависят от страны выдачи. Спросите ведомство.", "Строки залежать від країни видачі. Запитайте установу.", "المهل تعتمد على بلد الإصدار. اسأل المكتب."),
    docs: [
      passport,
      {
        id: "license",
        name: t("Führerschein im Original", "Права, оригинал", "Права, оригінал", "الرخصة الأصلية"),
        note: t("Plus oft beglaubigte Übersetzung", "Часто ещё заверенный перевод", "Часто ще засвідчений переклад", "وغالبًا ترجمة معتمدة"),
        hint: t("Nicht selbst übersetzen.", "Не переводите сами.", "Не перекладайте самі.", "لا تترجمها بنفسك."),
      },
      photo,
      trans,
    ],
    steps: [
      t("Fahrerlaubnisbehörde des Landkreises oder der Stadt finden.", "Найдите Fahrerlaubnisbehörde города или района.", "Знайдіть Fahrerlaubnisbehörde міста або району.", "اعثر على دائرة رخص القيادة في المدينة أو المحافظة."),
      t("Fragen, ob Umschreibung, Prüfung oder nur Registrierung nötig ist.", "Спросите: переоформление, экзамен или только регистрация.", "Запитайте: переоформлення, іспит чи лише реєстрація.", "اسأل: تحويل أم امتحان أم تسجيل فقط."),
      t("Nichts unterschreiben, das Sie nicht verstehen. Hilfe mitnehmen.", "Не подписывайте то, чего не понимаете. Возьмите помощь.", "Не підписуйте те, чого не розумієте. Візьміть допомогу.", "لا توقّع ما لا تفهمه. اصطحب مساعدة."),
    ],
  },
  {
    id: "digital",
    title: t("Digitale ID", "Цифровая идентификация", "Цифрова ідентифікація", "الهوية الرقمية"),
    sub: t("Online-Ausweis und BundID", "Online-Ausweis и аккаунт BundID", "Online-Ausweis і акаунт BundID", "بطاقة الهوية الإلكترونية وحساب BundID"),
    deadline: t(
      "Ohne aktivierte Online-Funktion geht die digitale Anmeldung nicht. Papier-Bescheinigung reicht dafür nicht.",
      "Без включённой онлайн-функции цифровой вход не работает. Бумажной справки для этого недостаточно.",
      "Без увімкненої онлайн-функції цифровий вхід не працює. Паперової довідки для цього недостатньо.",
      "بدون تفعيل الوظيفة الإلكترونية لا يعمل الدخول الرقمي. الورقة وحدها لا تكفي.",
    ),
    docs: [
      {
        id: "card",
        name: t("Karte mit Chip", "Карта с чипом", "Картка з чіпом", "بطاقة بشريحة"),
        note: t("Deutscher Personalausweis oder elektronischer Aufenthaltstitel (eAT)", "Немецкий Personalausweis или электронный ВНЖ (eAT)", "Німецький Personalausweis або електронний дозвіл на перебування (eAT)", "بطاقة هوية ألمانية أو تصريح إقامة إلكتروني (eAT)"),
        hint: t("Fiktionsbescheinigung und viele Papierdokumente haben keinen Online-Ausweis.", "Fiktionsbescheinigung и многие бумажные документы не дают Online-Ausweis.", "Fiktionsbescheinigung і багато паперових документів не дають Online-Ausweis.", "شهادة الانتظار وكثير من الأوراق لا تحتوي على هوية إلكترونية."),
      },
      {
        id: "pin",
        name: t("PIN-Brief", "Письмо с PIN", "Лист із PIN", "رسالة الرقم السري"),
        note: t("Sechs Ziffern, kommt getrennt von der Karte", "Шесть цифр, приходит отдельно от карты", "Шість цифр, надходить окремо від картки", "ستة أرقام، تصل منفصلة عن البطاقة"),
        hint: t("Verloren? Neue PIN nur beim Bürgeramt, nicht per E-Mail.", "Потеряли? Новый PIN только в Bürgeramt, не по почте.", "Втратили? Новий PIN лише в Bürgeramt, не електронною поштою.", "ضاع؟ الرقم الجديد فقط في مكتب المواطنين، لا عبر البريد."),
      },
      {
        id: "app",
        name: t("AusweisApp", "Приложение AusweisApp", "Застосунок AusweisApp", "تطبيق AusweisApp"),
        note: t("Kostenlose App des Bundes, plus NFC am Telefon", "Бесплатное приложение государства и NFC на телефоне", "Безкоштовний застосунок держави і NFC на телефоні", "تطبيق اتحادي مجاني مع NFC في الهاتف"),
        hint: t("Nur die App von ausweisapp.bund.de nutzen.", "Ставьте только приложение с ausweisapp.bund.de.", "Ставте лише застосунок з ausweisapp.bund.de.", "ثبّت التطبيق فقط من ausweisapp.bund.de."),
      },
    ],
    steps: [
      t("Prüfen, ob Ihre Karte die Online-Funktion hat. Steht oft auf der Karte oder im PIN-Brief.", "Проверьте, есть ли у карты онлайн-функция. Часто написано на карте или в письме с PIN.", "Перевірте, чи є в картки онлайн-функція. Часто написано на картці або в листі з PIN.", "تحقق هل لبطاقتك وظيفة إلكترونية. غالبًا مكتوب على البطاقة أو في رسالة الرقم."),
      t("PIN beim ersten Mal ändern. Transport-PIN aus dem Brief allein reicht nicht dauerhaft.", "При первом использовании смените PIN. Транспортного PIN из письма навсегда недостаточно.", "Під час першого використання змініть PIN. Транспортного PIN з листа назавжди недостатньо.", "غيّر الرقم عند أول استخدام. رقم الرسالة وحده لا يكفي دائمًا."),
      t("AusweisApp installieren. Karte ans Telefon halten, wenn eine Behörde nach Online-Ausweis fragt.", "Установите AusweisApp. Приложите карту к телефону, когда ведомство просит Online-Ausweis.", "Встановіть AusweisApp. Прикладіть картку до телефону, коли установа просить Online-Ausweis.", "ثبّت AusweisApp. قرّب البطاقة من الهاتف عندما يطلب المكتب الهوية الإلكترونية."),
      t("BundID ist das Konto für viele Behörden-Websites. Der Online-Ausweis ist ein Weg, sich dort anzumelden.", "BundID — аккаунт для многих сайтов ведомств. Online-Ausweis — один из способов туда войти.", "BundID — акаунт для багатьох сайтів установ. Online-Ausweis — один зі способів увійти.", "BundID حساب لكثير من مواقع الدوائر. الهوية الإلكترونية طريقة للدخول إليه."),
      t("Am Schalter bleibt das Original nötig. Die App ersetzt den Besuch nicht immer.", "В окошке оригинал всё равно нужен. Приложение не всегда заменяет визит.", "У вікні оригінал все одно потрібен. Застосунок не завжди замінює візит.", "عند الشباك يبقى الأصل مطلوبًا. التطبيق لا يغني دائمًا عن الزيارة."),
    ],
  },
];

export const PHRASES: { id: string; audio: string; de: string; ru: string; uk: string; ar: string }[] = [
  {
    id: "anmelden",
    audio: "/audio/phrase-1.mp3",
    de: "Guten Tag, ich möchte mich anmelden.",
    ru: "Здравствуйте, я хочу зарегистрироваться.",
    uk: "Добрий день, я хочу зареєструватися.",
    ar: "مرحبًا، أريد التسجيل.",
  },
  {
    id: "ummelden",
    audio: "/audio/phrase-2.mp3",
    de: "Guten Tag, ich möchte mich ummelden.",
    ru: "Здравствуйте, я хочу сменить адрес.",
    uk: "Добрий день, я хочу змінити адресу.",
    ar: "مرحبًا، أريد تغيير عنواني.",
  },
  {
    id: "wohn",
    audio: "/audio/phrase-3.mp3",
    de: "Ich habe hier die Wohnungsgeberbestätigung.",
    ru: "Вот подтверждение от арендодателя.",
    uk: "Ось підтвердження від орендодавця.",
    ar: "هذه شهادة المؤجر.",
  },
  {
    id: "termin",
    audio: "/audio/phrase-4.mp3",
    de: "Wann kann ich einen Termin bekommen?",
    ru: "Когда можно записаться?",
    uk: "Коли можна записатися?",
    ar: "متى يمكنني الحصول على موعد؟",
  },
  {
    id: "wiederholen",
    audio: "/audio/phrase-5.mp3",
    de: "Können Sie das bitte wiederholen?",
    ru: "Повторите, пожалуйста.",
    uk: "Повторіть, будь ласка.",
    ar: "هل يمكنك الإعادة من فضلك؟",
  },
  {
    id: "englisch",
    audio: "/audio/phrase-6.mp3",
    de: "Ich spreche wenig Deutsch. Gibt es jemanden für Englisch?",
    ru: "Я мало говорю по-немецки. Есть кто-то на английском?",
    uk: "Я мало говорю німецькою. Чи є хтось англійською?",
    ar: "أتكلم الألمانية قليلًا. هل يوجد من يتحدث الإنجليزية؟",
  },
  {
    id: "aufschreiben",
    audio: "/audio/phrase-7.mp3",
    de: "Bitte schreiben Sie das für mich auf.",
    ru: "Запишите это для меня, пожалуйста.",
    uk: "Запишіть це для мене, будь ласка.",
    ar: "من فضلك اكتب ذلك لي.",
  },
];

export const GLOSSARY: { de: string; ru: string; uk: string; ar: string; why: L4 }[] = [
  {
    de: "Frist",
    ru: "Срок",
    uk: "Строк",
    ar: "مهلة",
    why: t("Bis zu diesem Tag müssen Sie antworten oder handeln.", "До этого дня нужно ответить или сделать действие.", "До цього дня треба відповісти або діяти.", "حتى هذا اليوم يجب أن ترد أو تتصرف."),
  },
  {
    de: "Termin",
    ru: "Назначенное время",
    uk: "Призначений час",
    ar: "موعد",
    why: t("Ein festes Datum für einen Besuch.", "Конкретные дата и время визита.", "Конкретні дата і час візиту.", "تاريخ محدد للزيارة."),
  },
  {
    de: "Anhörung",
    ru: "Запрос объяснений",
    uk: "Запит пояснень",
    ar: "طلب توضيح",
    why: t("Sie sollen antworten, bevor entschieden wird.", "Вас просят ответить до решения.", "Вас просять відповісти до рішення.", "يُطلب منك الرد قبل صدور القرار."),
  },
  {
    de: "Bescheid",
    ru: "Официальное решение",
    uk: "Офіційне рішення",
    ar: "قرار رسمي",
    why: t("Das Amt hat entschieden. Oft mit Rechtsbehelfsbelehrung.", "Ведомство решило. Часто есть инструкция, как оспорить.", "Установа вирішила. Часто є інструкція, як оскаржити.", "اتخذ المكتب قرارًا. غالبًا مع شرح كيفية الاعتراض."),
  },
  {
    de: "Widerspruch",
    ru: "Возражение",
    uk: "Заперечення",
    ar: "اعتراض",
    why: t("Ihr Nein gegen einen Bescheid, meist mit kurzer Frist.", "Ваше «нет» решению, обычно с коротким сроком.", "Ваше «ні» рішенню, зазвичай із коротким строком.", "رفضك للقرار، غالبًا بمهلة قصيرة."),
  },
  {
    de: "Gebühr",
    ru: "Пошлина",
    uk: "Збір",
    ar: "رسوم",
    why: t("Ein Betrag, den Sie zahlen sollen.", "Сумма, которую нужно заплатить.", "Сума, яку треба сплатити.", "مبلغ مطلوب دفعه."),
  },
  {
    de: "Nachweis",
    ru: "Подтверждающий документ",
    uk: "Підтвердний документ",
    ar: "إثبات",
    why: t("Ein Papier, das etwas belegt.", "Бумага, которая что-то доказывает.", "Папір, який щось підтверджує.", "ورقة تثبت أمرًا."),
  },
];

export const UI = {
  app: t("Brandenburg Helfer", "Помощник Бранденбурга", "Помічник Бранденбургу", "مساعد براندنبورغ"),
  intro: t(
    "Schritt für Schritt durch Behörden im Land Brandenburg. Keine Rechtsberatung.",
    "Шаг за шагом по ведомствам земли Бранденбург. Это не юридическая консультация.",
    "Крок за кроком установами землі Бранденбург. Це не юридична консультація.",
    "خطوة بخطوة في دوائر ولاية براندنبورغ. هذه ليست استشارة قانونية.",
  ),
  services: t("Was brauchen Sie?", "Что вам нужно?", "Що вам потрібно?", "ماذا تحتاج؟"),
  city: t("Ihre Stadt", "Ваш город", "Ваше місто", "مدينتك"),
  pickCity: t("Stadt oder PLZ suchen", "Город или индекс", "Місто або індекс", "ابحث عن مدينة أو رمز"),
  empty: t("Nichts gefunden", "Ничего не найдено", "Нічого не знайдено", "لا توجد نتائج"),
  change: t("Andere Stadt", "Другой город", "Інше місто", "مدينة أخرى"),
  have: t("Habe ich", "Есть", "Є", "لدي"),
  need: t("Brauche ich", "Нужно", "Потрібно", "مطلوب"),
  where: t("So bekommen Sie es", "Где взять", "Де взяти", "كيف تحصل عليه"),
  ready: t("Unterlagen beisammen", "Документы собраны", "Документи зібрані", "الوثائق جاهزة"),
  readyText: t("Nehmen Sie die Originale mit.", "Возьмите оригиналы с собой.", "Візьміть оригінали з собою.", "أحضر الأصول معك."),
  missing: t("Noch offen", "Ещё нет", "Ще немає", "ما زال ناقصًا"),
  book: t("Termin suchen", "Искать запись", "Шукати запис", "ابحث عن موعد"),
  site: t("Website der Stadt", "Сайт города", "Сайт міста", "موقع المدينة"),
  listen: t("Vorlesen", "Прослушать", "Прослухати", "استماع"),
  phrases: t("Sätze auf Deutsch", "Фразы по-немецки", "Фрази німецькою", "جمل بالألمانية"),
  letter: t("Brief", "Письмо", "Лист", "رسالة"),
  letterTitle: t("Brief vom Amt verstehen", "Понять письмо от ведомства", "Зрозуміти лист від установи", "فهم رسالة من المكتب"),
  letterHelp: t(
    "Text einfügen. Wir markieren nur Wörter. Das ist keine Prüfung des Briefes.",
    "Вставьте текст. Мы только подсветим слова. Это не проверка письма.",
    "Вставте текст. Ми лише підсвітимо слова. Це не перевірка листа.",
    "الصق النص. نُبرز الكلمات فقط. هذا ليس فحصًا للرسالة.",
  ),
  placeholder: t("Text des Briefes hier einfügen", "Вставьте текст письма", "Вставте текст листа", "الصق نص الرسالة هنا"),
  found: t("Gefundene Wörter", "Найденные слова", "Знайдені слова", "كلمات وُجدت"),
  none: t("Keine der wichtigen Wörter gefunden. Trotzdem Fristen selbst prüfen.", "Важных слов не найдено. Сроки всё равно проверьте сами.", "Важливих слів не знайдено. Строки все одно перевірте самі.", "لم نجد الكلمات المهمة. تحقق من المهل بنفسك."),
  mail: t("In E-Mail öffnen", "Открыть в почте", "Відкрити в пошті", "فتح في البريد"),
  words: t("Wichtige Wörter", "Важные слова", "Важливі слова", "كلمات مهمة"),
  warn: t(
    "Erklärung, keine Rechtsberatung. Bei wichtigen Briefen zur Migrationsberatung.",
    "Это объяснение, не консультация юриста. Важные письма — в Migrationsberatung.",
    "Це пояснення, не консультація юриста. Важливі листи — до Migrationsberatung.",
    "هذا شرح وليس استشارة قانونية. للرسائل المهمة توجه إلى استشارة الهجرة.",
  ),
  notes: t("Meine Notizen", "Мои заметки", "Мої нотатки", "ملاحظاتي"),
  notesHelp: t(
    "Bleibt nur auf diesem Gerät. Kein Konto, keine Cloud.",
    "Только на этом устройстве. Без аккаунта и облака.",
    "Лише на цьому пристрої. Без акаунта і хмари.",
    "تبقى على هذا الجهاز فقط. بلا حساب ولا سحابة.",
  ),
  noteTitle: t("Überschrift", "Заголовок", "Заголовок", "عنوان"),
  noteBody: t("Notiz", "Заметка", "Нотатка", "ملاحظة"),
  add: t("Speichern", "Сохранить", "Зберегти", "حفظ"),
  photoAdd: t("Foto hinzufügen", "Добавить фото", "Додати фото", "إضافة صورة"),
  photoBig: t("Foto ist zu groß (max. 400 KB).", "Фото слишком большое (макс. 400 КБ).", "Фото завелике (макс. 400 КБ).", "الصورة كبيرة جدًا (400 ك.ب كحد أقصى)."),
  del: t("Löschen", "Удалить", "Видалити", "حذف"),
  help: t("Hilfe", "Помощь", "Допомога", "مساعدة"),
  helpText: t(
    "Kostenlose Migrationsberatung: Caritas, Diakonie, AWO und andere. Suchen Sie mit Ihrer Stadt.",
    "Бесплатная Migrationsberatung: Caritas, Diakonie, AWO и другие. Ищите со своим городом.",
    "Безкоштовна Migrationsberatung: Caritas, Diakonie, AWO та інші. Шукайте зі своїм містом.",
    "استشارة هجرة مجانية: Caritas وDiakonie وAWO وغيرها. ابحث مع اسم مدينتك.",
  ),
  advice: t("Beratung suchen", "Искать консультацию", "Шукати консультацію", "ابحث عن استشارة"),
  move: t("Einzugsdatum", "Дата переезда", "Дата переїзду", "تاريخ الانتقال"),
  remind: t("Frist 14 Tage", "Срок 14 дней", "Строк 14 днів", "مهلة 14 يومًا"),
  daysLeft: t("Tage bis zum Stichtag", "дней до даты", "днів до дати", "أيام حتى الموعد"),
  late: t("Der übliche Zeitraum ist vorbei. Trotzdem zum Amt.", "Обычный срок прошёл. Всё равно идите в ведомство.", "Звичайний строк минув. Все одно йдіть до установи.", "انتهت المدة المعتادة. اذهب إلى المكتب رغم ذلك."),
  today: t("Heute ist der Stichtag.", "Сегодня контрольная дата.", "Сьогодні контрольна дата.", "اليوم هو الموعد."),
  size: t("Schrift", "Шрифт", "Шрифт", "الخط"),
  theme: t("Darstellung", "Вид", "Вигляд", "المظهر"),
  light: t("Hell", "Светлая", "Світла", "فاتح"),
  dark: t("Dunkel", "Тёмная", "Темна", "داكن"),
  contrast: t("Kontrast", "Контраст", "Контраст", "تباين"),
  home: t("Start", "Старт", "Старт", "البداية"),
  back: t("Zurück", "Назад", "Назад", "رجوع"),
  frameNote: t(
    "Seite im Programm. Wenn sie leer bleibt, sperrt die Website die Anzeige.",
    "Страница внутри приложения. Если пусто, сайт запретил вставку.",
    "Сторінка всередині застосунку. Якщо порожньо, сайт заборонив вставку.",
    "الصفحة داخل التطبيق. إذا بقيت فارغة فالموقع منع العرض.",
  ),
  unverified: t(
    "Telefon und genaue Adresse stehen auf der Stadtseite. Wir erfinden sie nicht.",
    "Телефон и точный адрес — на сайте города. Мы их не выдумываем.",
    "Телефон і точна адреса — на сайті міста. Ми їх не вигадуємо.",
    "الهاتف والعنوان الدقيق على موقع المدينة. نحن لا نخترعهما.",
  ),
  kreis: t("Landkreis", "Район", "Район", "المحافظة"),
  all: t("Alle Kreise", "Все районы", "Усі райони", "كل المحافظات"),
  count: t("Orte", "населённых пунктов", "населених пунктів", "أماكن"),
  clear: t("Fortschritt der Liste löschen", "Сбросить отметки", "Скинути позначки", "مسح علامات القائمة"),
  noNotes: t("Noch keine Notiz.", "Заметок пока нет.", "Нотаток поки немає.", "لا ملاحظات بعد."),
  disclaimer: t(
    "Texte auf Arabisch, Russisch und Ukrainisch sind Hilfen, keine amtliche Übersetzung.",
    "Тексты на арабском, русском и украинском — подсказка, не официальный перевод.",
    "Тексти арабською, російською та українською — підказка, не офіційний переклад.",
    "النصوص بالعربية والروسية والأوكرانية مساعدة وليست ترجمة رسمية.",
  ),
};
