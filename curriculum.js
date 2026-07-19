function toggleCurriculumNav(button){
  const nav=document.getElementById('curriculumNav');
  const open=nav.classList.toggle('open');
  button.setAttribute('aria-expanded',String(open));
}

const IPA_LANGS=['en','ru','kk','sr'];

const IPA_COPY={
  'Academy':['Академия','Академия','Akademija'],
  'Curriculum':['Учебная программа','Оқу бағдарламасы','Kurikulum'],
  'Devices':['Оборудование','Құрылғылар','Uređaji'],
  'Journal':['Журнал','Журнал','Časopis'],
  'Find a course':['Найти курс','Курсты табу','Pronađi kurs'],
  'Menu':['Меню','Мәзір','Meni'],
  'Open learning platform':['Открытая образовательная платформа','Ашық білім беру платформасы','Otvorena obrazovna platforma'],
  'Start learning':['Начать обучение','Оқуды бастау','Počni učenje'],
  'Explore protocols':['Смотреть протоколы','Хаттамаларды қарау','Istraži protokole'],
  'Foundations':['Основы','Негіздер','Osnove'],
  'Organ systems':['Системы органов','Ағзалар жүйелері','Organski sistemi'],
  'Clinical protocols':['Клинические протоколы','Клиникалық хаттамалар','Klinički protokoli'],
  'Devices & knobology':['Оборудование и управление','Құрылғылар және басқару','Uređaji i knobologija'],
  'Devices & Knobology':['Оборудование и управление','Құрылғылар және басқару','Uređaji i knobologija'],
  'Recommended pathway':['Рекомендуемая траектория','Ұсынылатын оқу жолы','Preporučeni put'],
  'Understand':['Понять','Түсіну','Razumeti'],
  'Acquire':['Получить изображение','Кескін алу','Snimiti'],
  'Interpret':['Интерпретировать','Түсіндіру','Tumačiti'],
  'Decide':['Принять решение','Шешім қабылдау','Odlučiti'],
  'Respiratory':['Дыхательная система','Тыныс алу жүйесі','Respiratorni sistem'],
  'Circulation':['Кровообращение','Қан айналымы','Cirkulacija'],
  'Vascular':['Сосуды','Тамырлар','Vaskularno'],
  'Abdomen':['Брюшная полость','Құрсақ қуысы','Abdomen'],
  'Urinary':['Мочевая система','Несеп шығару жүйесі','Urinarno'],
  'Neurology':['Неврология','Неврология','Neurologija'],
  'Lung ultrasound':['УЗИ лёгких','Өкпенің УДЗ','Ultrazvuk pluća'],
  'Focused cardiac':['Фокусное УЗИ сердца','Жүректің фокустық УДЗ','Fokusirani ultrazvuk srca'],
  'Vascular ultrasound':['УЗИ сосудов','Тамырлардың УДЗ','Vaskularni ultrazvuk'],
  'Abdominal':['Абдоминальное УЗИ','Абдоминалдық УДЗ','Abdominalni ultrazvuk'],
  'Renal & bladder':['Почки и мочевой пузырь','Бүйрек және қуық','Bubrezi i mokraćna bešika'],
  'Transcranial':['Транскраниальное УЗИ','Транскраниалдық УДЗ','Transkranijalni ultrazvuk'],
  'All modules':['Все модули','Барлық модульдер','Svi moduli'],
  'Core':['Базовые','Негізгі','Osnovno'],
  'Advanced':['Продвинутые','Кеңейтілген','Napredno'],
  'Preview':['Предпросмотр','Алдын ала қарау','Pregled'],
  'Clinical protocol · prototype':['Клинический протокол · прототип','Клиникалық хаттама · прототип','Klinički protokol · prototip'],
  'Practitioner':['Практикующий специалист','Практик маман','Praktičar'],
  'Clinical review pending':['Ожидает клинической проверки','Клиникалық тексеру күтілуде','Klinička provera u toku'],
  'Learning objective':['Цель обучения','Оқу мақсаты','Cilj učenja'],
  'On this page':['На этой странице','Осы бетте','Na ovoj stranici'],
  'Clinical question':['Клинический вопрос','Клиникалық сұрақ','Kliničko pitanje'],
  'Setup':['Подготовка','Дайындау','Priprema'],
  'Scan sequence':['Последовательность сканирования','Сканерлеу реті','Redosled skeniranja'],
  'Interpretation':['Интерпретация','Түсіндіру','Tumačenje'],
  'Decision pathway':['Алгоритм решения','Шешім алгоритмі','Put odlučivanja'],
  'Device settings':['Настройки аппарата','Құрылғы баптаулары','Podešavanja uređaja'],
  'Review status':['Статус проверки','Тексеру мәртебесі','Status provere'],
  'Patient position':['Положение пациента','Пациент қалпы','Položaj pacijenta'],
  'Probe placement':['Положение датчика','Датчикті орналастыру','Položaj sonde'],
  'Ultrasound view':['Ультразвуковое изображение','Ультрадыбыстық кескін','Ultrazvučni prikaz'],
  'Right upper quadrant':['Правый верхний квадрант','Оң жоғарғы квадрант','Desni gornji kvadrant'],
  'Left upper quadrant':['Левый верхний квадрант','Сол жоғарғы квадрант','Levi gornji kvadrant'],
  'Pelvis':['Малый таз','Кіші жамбас','Karlica'],
  'Pericardial view':['Перикардиальная позиция','Перикардтық көрініс','Perikardni prikaz'],
  'Right thorax':['Правая половина грудной клетки','Оң гемиторакс','Desni hemitoraks'],
  'Left thorax':['Левая половина грудной клетки','Сол гемиторакс','Levi hemitoraks'],
  'Normal, abnormal, uncertain':['Норма, патология, неопределённость','Қалыпты, патология, белгісіздік','Normalno, patološko, neizvesno'],
  'Expected landmarks':['Ожидаемые ориентиры','Күтілетін бағдарлар','Očekivani orijentiri'],
  'Area of interest':['Область интереса','Қызығушылық аймағы','Oblast interesa'],
  'Common mimic':['Частая имитация','Жиі кездесетін ұқсастық','Česta imitacija'],
  'Choose a device':['Выбрать аппарат','Құрылғыны таңдау','Izaberi uređaj'],
  'Verified equipment education':['Проверенное обучение работе с оборудованием','Құрылғымен жұмыс істеуге тексерілген оқыту','Proverena edukacija za opremu'],
  'Browse by task':['Выбрать по задаче','Тапсырма бойынша таңдау','Pregled po zadatku'],
  'Choose manufacturer':['Выбрать производителя','Өндірушіні таңдау','Izaberi proizvođača'],
  'Exact model':['Точная модель','Нақты модель','Tačan model'],
  'Software version':['Версия ПО','Бағдарлама нұсқасы','Verzija softvera'],
  'Source manual':['Руководство-источник','Дереккөз нұсқаулығы','Izvorno uputstvo'],
  'Disclosure':['Раскрытие информации','Ақпаратты ашу','Transparentnost'],
  'Task-based entry':['Поиск по задаче','Тапсырма бойынша кіру','Ulaz prema zadatku'],
  'Select probe and preset':['Выбрать датчик и пресет','Датчик пен пресетті таңдау','Izaberi sondu i preset'],
  'Optimise B-mode':['Оптимизировать B-режим','B-режимін оңтайландыру','Optimizuj B-režim'],
  'Configure Doppler':['Настроить допплер','Допплерді баптау','Podesi Doppler'],
  'Measure and calculate':['Выполнить измерения и расчёты','Өлшеу және есептеу','Izmeri i izračunaj'],
  'Save and export':['Сохранить и экспортировать','Сақтау және экспорттау','Sačuvaj i izvezi'],
  'Troubleshoot image quality':['Исправить качество изображения','Кескін сапасын түзету','Reši problem kvaliteta slike'],
  'Manufacturer directory':['Каталог производителей','Өндірушілер каталогы','Katalog proizvođača'],
  'Profiles in preparation':['Профили готовятся','Профильдер дайындалуда','Profili u pripremi'],
  'Handheld systems':['Портативные системы','Қол УДЗ жүйелері','Ručni sistemi'],
  'Category comparison':['Сравнение категории','Санатты салыстыру','Poređenje kategorije'],
  'Add a verified profile':['Добавить проверенный профиль','Тексерілген профиль қосу','Dodaj provereni profil'],
  'Editorial and device review required':['Нужна редакционная и техническая проверка','Редакциялық және техникалық тексеру қажет','Potrebna urednička i tehnička provera'],
  'Connection to curriculum':['Связь с программой','Оқу бағдарламасымен байланыс','Veza sa kurikulumom'],
  'Protocol first, device second':['Сначала протокол, затем аппарат','Алдымен хаттама, кейін құрылғы','Prvo protokol, zatim uređaj'],
  'See the eFAST connection':['Посмотреть связь с eFAST','eFAST байланысын көру','Pogledaj eFAST vezu']
};

const IPA_LONG_COPY={
  'From probe placement to':['От положения датчика к','Датчикті орналастырудан','Od položaja sonde do'],
  'clinical decision.':['клиническому решению.','клиникалық шешімге.','kliničke odluke.'],
  'One structured learning path connects ultrasound foundations, organ-based acquisition, bedside protocols and model-specific device guidance.':['Единая образовательная траектория объединяет основы УЗИ, получение изображений по системам органов, клинические протоколы и инструкции для конкретных моделей аппаратов.','Біртұтас оқу жолы УДЗ негіздерін, ағзалар бойынша кескін алуды, клиникалық хаттамаларды және нақты құрылғы үлгілеріне арналған нұсқауларды біріктіреді.','Jedinstven obrazovni put povezuje osnove ultrazvuka, snimanje po organskim sistemima, kliničke protokole i uputstva za konkretne modele uređaja.'],
  'Choose an entry point':['Выберите точку входа','Бастау нүктесін таңдаңыз','Izaberite početnu tačku'],
  'Start with what you need today':['Начните с того, что нужно сегодня','Бүгін қажет бөлімнен бастаңыз','Počnite od onoga što vam danas treba'],
  'The same knowledge is organised around the learner’s task—not around a long list of unrelated articles.':['Материал организован вокруг задачи обучающегося, а не как длинный список несвязанных статей.','Материал бір-бірімен байланыссыз мақалалар тізімі емес, білім алушының міндеті бойынша ұйымдастырылған.','Isto znanje organizovano je prema zadatku polaznika, a ne kao duga lista nepovezanih članaka.'],
  'One sequence, four levels':['Одна последовательность — четыре уровня','Бір реттілік — төрт деңгей','Jedan redosled, četiri nivoa'],
  'Learn to obtain the image first':['Сначала научитесь получать изображение','Алдымен кескін алуды үйреніңіз','Prvo naučite da dobijete sliku'],
  'Turn images into a bedside pathway':['Превратите изображения в клинический алгоритм','Кескіндерді клиникалық алгоритмге айналдырыңыз','Pretvorite slike u klinički algoritam'],
  'One clinical task. Every verified device.':['Одна клиническая задача. Каждый проверенный аппарат.','Бір клиникалық міндет. Әрбір тексерілген құрылғы.','Jedan klinički zadatak. Svaki provereni uređaj.'],
  'Configure the device without changing the':['Настройте аппарат, не меняя','Құрылғыны','Podesite uređaj bez menjanja'],
  'clinical standard.':['клинический стандарт.','клиникалық стандартты өзгертпей баптаңыз.','kliničkog standarda.'],
  'A neutral task-based guide connects every curriculum step to exact controls, presets and software versions on supported ultrasound systems.':['Нейтральное руководство связывает каждый шаг программы с точными органами управления, пресетами и версиями ПО поддерживаемых УЗ-систем.','Бейтарап нұсқаулық бағдарламаның әр қадамын қолдау көрсетілетін УДЗ жүйелерінің нақты басқару элементтерімен, пресеттерімен және бағдарлама нұсқаларымен байланыстырады.','Neutralni vodič povezuje svaki korak kurikuluma sa tačnim kontrolama, presetima i verzijama softvera podržanih ultrazvučnih sistema.'],
  'What are you trying to do?':['Какую задачу вы хотите выполнить?','Қандай тапсырманы орындағыңыз келеді?','Šta želite da uradite?'],
  'Profiles organised by model and software':['Профили по моделям и версиям ПО','Үлгі және бағдарлама бойынша профильдер','Profili po modelu i softveru'],
  'A structured focused ultrasound examination supporting rapid assessment for free fluid and pneumothorax in trauma.':['Структурированное фокусное УЗ-исследование для быстрой оценки свободной жидкости и пневмоторакса при травме.','Жарақат кезінде бос сұйықтық пен пневмотораксты жылдам бағалауға арналған құрылымдалған фокустық УДЗ.','Strukturisani fokusirani ultrazvučni pregled za brzu procenu slobodne tečnosti i pneumotoraksa kod traume.'],
  'Understand the examination sequence, obtain interpretable views, recognise key patterns and state the limitations of the protocol.':['Понять последовательность исследования, получить интерпретируемые позиции, распознать ключевые признаки и сформулировать ограничения протокола.','Зерттеу ретін түсіну, түсіндіруге жарамды көріністерді алу, негізгі белгілерді тану және хаттама шектеулерін айту.','Razumeti redosled pregleda, dobiti upotrebljive prikaze, prepoznati ključne obrasce i navesti ograničenja protokola.'],
  'What can this focused examination support?':['В решении каких задач помогает это исследование?','Бұл фокустық зерттеу қандай шешімге көмектеседі?','Koje odluke ovaj fokusirani pregled može podržati?'],
  'Position, probe and image':['Положение, датчик и изображение','Қалып, датчик және кескін','Položaj, sonda i slika'],
  'Six views, one repeatable order':['Шесть позиций — единый воспроизводимый порядок','Алты көрініс — бір қайталанатын реттілік','Šest prikaza, jedan ponovljiv redosled'],
  'A decision pathway, not an isolated image':['Алгоритм решения, а не отдельный кадр','Жеке кескін емес, шешім алгоритмі','Put odlučivanja, a ne izolovana slika'],
  'Open settings for your exact model':['Откройте настройки для вашей модели','Өз үлгіңізге арналған баптауларды ашыңыз','Otvorite podešavanja za svoj model'],
  'eFAST device mapping':['Настройки аппарата для eFAST','eFAST үшін құрылғы баптаулары','Mapiranje uređaja za eFAST'],
  'Prototype status.':['Статус прототипа.','Прототип мәртебесі.','Status prototipa.'],
  'Layout ready. Clinical claims, citations, translations, media rights, illustrations and device mappings require review before publication.':['Макет готов. Клинические утверждения, источники, переводы, права на медиа, иллюстрации и настройки аппаратов требуют проверки до публикации.','Макет дайын. Клиникалық тұжырымдар, дереккөздер, аудармалар, медиа құқықтары, иллюстрациялар және құрылғы баптаулары жариялауға дейін тексерілуі тиіс.','Raspored je spreman. Kliničke tvrdnje, izvori, prevodi, prava na medije, ilustracije i mapiranja uređaja zahtevaju proveru pre objave.']
};

const IPA_EXTRA_COPY={
  '/ Curriculum':['/ Учебная программа','/ Оқу бағдарламасы','/ Kurikulum'],
  '/ Devices & Knobology':['/ Оборудование и управление','/ Құрылғылар және басқару','/ Uređaji i knobologija'],
  'Browse by task →':['Выбрать по задаче →','Тапсырма бойынша таңдау →','Pregled po zadatku →'],
  'no generic instructions':['без общих инструкций','жалпы нұсқаусыз','bez opštih uputstava'],
  'recorded on every page':['указана на каждой странице','әр бетте көрсетіледі','navedena na svakoj stranici'],
  'linked and dated':['ссылка и дата','сілтеме мен күні бар','povezano i datirano'],
  'sponsorship made visible':['спонсорство обозначено','демеушілік ашық көрсетіледі','sponzorstvo je jasno označeno'],
  'Vendor representatives verify device facts. IPA clinical editors retain authority over clinical content.':['Представители производителя проверяют сведения об аппарате. Клинические редакторы IPA сохраняют контроль над медицинским содержанием.','Өндіруші өкілдері құрылғы деректерін тексереді. IPA клиникалық редакторлары медициналық мазмұнға жауап береді.','Predstavnici proizvođača proveravaju podatke o uređaju. Klinički urednici IPA zadržavaju kontrolu nad medicinskim sadržajem.'],
  'Protocols':['Протоколы','Хаттамалар','Protokoli'],
  'Device mapping':['Настройки аппаратов','Құрылғы баптаулары','Mapiranje uređaja'],
  'IPA learning architecture':['Архитектура обучения IPA','IPA оқу архитектурасы','IPA arhitektura učenja'],
  'CLINICAL':['КЛИНИЧЕСКОЕ','КЛИНИКАЛЫҚ','KLINIČKA'],
  'DECISION':['РЕШЕНИЕ','ШЕШІМ','ODLUKA'],
  'One neutral clinical standard. Multiple verified ways to perform it.':['Единый нейтральный клинический стандарт. Несколько проверенных способов выполнения.','Бір бейтарап клиникалық стандарт. Оны орындаудың бірнеше тексерілген жолы.','Jedan neutralan klinički standard. Više proverenih načina izvođenja.'],
  '4 layers':['4 уровня','4 деңгей','4 nivoa'],
  '9 systems':['9 систем','9 жүйе','9 sistema'],
  '5 protocols':['5 протоколов','5 хаттама','5 protokola'],
  'from foundations to devices':['от основ до оборудования','негіздерден құрылғыларға дейін','od osnova do uređaja'],
  'organ-based acquisition':['получение изображений по органам','ағзалар бойынша кескін алу','snimanje po organima'],
  'first curriculum release':['первая версия программы','бағдарламаның алғашқы нұсқасы','prvo izdanje kurikuluma'],
  'shared multilingual structure':['единая многоязычная структура','ортақ көптілді құрылым','zajednička višejezična struktura'],
  'Physics, probes, orientation, artifacts and a reliable approach to image optimisation.':['Физика, датчики, ориентация, артефакты и системный подход к оптимизации изображения.','Физика, датчиктер, бағдарлау, артефактілер және кескінді оңтайландыру тәсілі.','Fizika, sonde, orijentacija, artefakti i pouzdan pristup optimizaciji slike.'],
  'Learn to obtain and recognise lung, cardiac, vascular, abdominal and other core views.':['Научитесь получать и распознавать основные лёгочные, сердечные, сосудистые и абдоминальные позиции.','Өкпе, жүрек, тамыр, құрсақ және басқа негізгі көріністерді алуды және тануды үйреніңіз.','Naučite da dobijete i prepoznate osnovne plućne, srčane, vaskularne i abdominalne prikaze.'],
  'Combine views into a repeatable bedside pathway for trauma, shock or respiratory failure.':['Объединяйте позиции в воспроизводимый прикроватный алгоритм при травме, шоке или дыхательной недостаточности.','Көріністерді жарақат, шок немесе тыныс жеткіліксіздігі кезіндегі қайталанатын алгоритмге біріктіріңіз.','Povežite prikaze u ponovljiv algoritam uz krevet kod traume, šoka ili respiratorne insuficijencije.'],
  'Translate neutral acquisition requirements into verified steps for an exact device model.':['Переводите общие требования к сканированию в проверенные шаги для конкретной модели аппарата.','Жалпы сканерлеу талаптарын нақты құрылғы үлгісіне арналған тексерілген қадамдарға аударыңыз.','Prevedite neutralne zahteve snimanja u proverene korake za konkretan model uređaja.'],
  'Organ modules teach image acquisition. Protocols teach decisions. Device pages teach how to execute the same task on a particular machine.':['Органные модули учат получать изображения, протоколы — принимать решения, а страницы аппаратов — выполнять ту же задачу на конкретной системе.','Ағзалық модульдер кескін алуды, хаттамалар шешім қабылдауды, ал құрылғы беттері нақты жүйеде сол міндетті орындауды үйретеді.','Organski moduli uče snimanju, protokoli odlučivanju, a stranice uređaja izvođenju istog zadatka na određenom sistemu.'],
  'Physics, probes, orientation and artifacts.':['Физика, датчики, ориентация и артефакты.','Физика, датчиктер, бағдарлау және артефактілер.','Fizika, sonde, orijentacija i artefakti.'],
  'Patient position, probe placement and image-quality criteria.':['Положение пациента, датчика и критерии качества изображения.','Пациент қалпы, датчик орны және кескін сапасының критерийлері.','Položaj pacijenta, sonde i kriterijumi kvaliteta slike.'],
  'Normal findings, pathology, mimics and limitations.':['Норма, патология, имитации и ограничения.','Қалыпты көрініс, патология, ұқсастықтар және шектеулер.','Normalni nalazi, patologija, imitacije i ograničenja.'],
  'Clinical integration, escalation and documented competence.':['Клиническая интеграция, эскалация и документированная компетентность.','Клиникалық біріктіру, эскалация және құжатталған құзыреттілік.','Klinička integracija, eskalacija i dokumentovana kompetencija.'],
  'Every module will pair patient position, probe placement, anatomy and the ultrasound image in the IPA Sono-Atlas format.':['Каждый модуль объединит положение пациента, датчика, анатомию и УЗ-изображение в формате IPA Sono-Atlas.','Әр модуль IPA Sono-Atlas форматында пациент қалпын, датчик орнын, анатомияны және УДЗ кескінін біріктіреді.','Svaki modul povezuje položaj pacijenta, sonde, anatomiju i ultrazvučnu sliku u IPA Sono-Atlas formatu.'],
  'Each protocol shows the question, acquisition sequence, interpretation limits and the decision it can support.':['Каждый протокол показывает клинический вопрос, последовательность сканирования, ограничения интерпретации и поддерживаемое решение.','Әр хаттама клиникалық сұрақты, сканерлеу ретін, түсіндіру шектерін және қолдайтын шешімді көрсетеді.','Svaki protokol prikazuje kliničko pitanje, redosled snimanja, ograničenja tumačenja i odluku koju može podržati.'],
  'The curriculum describes the neutral requirement—such as selecting a cardiac preset or placing the focal zone. Device profiles explain the exact model-specific controls without changing the clinical recommendation.':['Программа задаёт нейтральное требование, например выбор кардиального пресета или фокусной зоны. Профиль аппарата показывает точные органы управления, не меняя клиническую рекомендацию.','Бағдарлама кардиологиялық пресетті немесе фокус аймағын таңдау сияқты бейтарап талапты береді. Құрылғы профилі клиникалық ұсынымды өзгертпей, нақты басқаруды көрсетеді.','Kurikulum definiše neutralan zahtev, poput izbora srčanog preseta ili fokalne zone. Profil uređaja prikazuje tačne kontrole bez menjanja kliničke preporuke.'],
  'Users should not need to know the manufacturer’s menu structure before they can find the correct instruction.':['Чтобы найти инструкцию, пользователю не нужно заранее знать структуру меню производителя.','Нұсқаулықты табу үшін пайдаланушы өндіруші мәзірінің құрылымын алдын ала білуге міндетті емес.','Korisnik ne mora unapred znati strukturu menija proizvođača da bi pronašao pravo uputstvo.'],
  'Translate the curriculum’s generic acquisition requirement into exact device choices.':['Преобразуйте общее требование программы в точный выбор датчика и настроек аппарата.','Бағдарламаның жалпы талабын датчик пен құрылғы баптауларының нақты таңдауына айналдырыңыз.','Prevedite opšti zahtev kurikuluma u tačan izbor sonde i podešavanja uređaja.'],
  'Depth, gain, focus and TGC with expected visual feedback.':['Глубина, усиление, фокус и TGC с ожидаемым визуальным результатом.','Тереңдік, күшейту, фокус және TGC — күтілетін визуалды нәтижемен.','Dubina, gain, fokus i TGC sa očekivanim vizuelnim rezultatom.'],
  'Color box, scale, baseline, wall filter and spectral controls.':['Цветовое окно, шкала, базовая линия, фильтр стенки и спектральные настройки.','Түсті терезе, шкала, базалық сызық, қабырға сүзгісі және спектрлік баптаулар.','Kolor okvir, skala, bazna linija, zidni filter i spektralne kontrole.'],
  'Model-specific measurement packages and reporting workflows.':['Пакеты измерений и отчётность для конкретной модели.','Нақты үлгіге арналған өлшеу пакеттері мен есеп беру үдерістері.','Paketi merenja i izveštavanje specifični za model.'],
  'Store loops, anonymise, export and document the examination.':['Сохраняйте петли, обезличивайте, экспортируйте и документируйте исследование.','Циклдарды сақтаңыз, деректерді иесіздендіріңіз, экспорттаңыз және зерттеуді құжаттаңыз.','Sačuvajte petlje, anonimizujte, izvezite i dokumentujte pregled.'],
  'Start from the visible problem and identify the relevant controls.':['Начните с видимой проблемы и найдите связанные с ней настройки.','Көрінетін мәселеден бастап, тиісті басқару элементтерін табыңыз.','Počnite od vidljivog problema i pronađite odgovarajuće kontrole.'],
  'These cards are neutral structural placeholders. Brand participation and logos will be added only with an approved device profile.':['Эти карточки — нейтральные структурные заготовки. Бренды и логотипы появятся только после утверждения профиля аппарата.','Бұл карточкалар — бейтарап құрылымдық үлгілер. Брендтер мен логотиптер құрылғы профилі бекітілгеннен кейін ғана қосылады.','Ove kartice su neutralni strukturni predlošci. Brendovi i logotipi biće dodati tek uz odobren profil uređaja.'],
  'A protocol page defines the clinical goal and generic image requirement. Device pages supply model-specific steps. This prevents commercial content from rewriting the medical curriculum.':['Страница протокола задаёт клиническую цель и общие требования к изображению. Страницы аппаратов дают модель-зависимые шаги, не позволяя коммерческому контенту менять медицинскую программу.','Хаттама беті клиникалық мақсат пен кескінге қойылатын жалпы талапты анықтайды. Құрылғы беттері нақты үлгіге арналған қадамдарды береді және коммерциялық мазмұнның медициналық бағдарламаны өзгертуіне жол бермейді.','Stranica protokola definiše klinički cilj i opšti zahtev za sliku. Stranice uređaja daju korake za konkretan model i sprečavaju komercijalni sadržaj da menja medicinski kurikulum.'],
  'Begin with the clinical context and the limits of focused ultrasound. The final version will distinguish what eFAST can show, what it cannot exclude and when escalation is required.':['Начните с клинического контекста и ограничений фокусного УЗИ. Итоговая версия чётко разделит, что eFAST выявляет, чего не исключает и когда нужна эскалация.','Клиникалық контекст пен фокустық УДЗ шектеулерінен бастаңыз. Соңғы нұсқа eFAST нені көрсете алатынын, нені жоққа шығара алмайтынын және қашан эскалация қажет екенін ажыратады.','Počnite od kliničkog konteksta i ograničenja fokusiranog ultrazvuka. Završna verzija jasno će razlikovati šta eFAST može pokazati, šta ne može isključiti i kada je potrebna eskalacija.'],
  'Use in context':['Используйте в контексте','Контексте қолданыңыз','Koristite u kontekstu'],
  'State limitations':['Укажите ограничения','Шектеулерді көрсетіңіз','Navedite ograničenja'],
  'The illustration system keeps three linked views together. Final IPA Sono-Atlas artwork will replace these placeholders sequentially.':['Система иллюстраций объединяет три связанных вида. Финальные изображения IPA Sono-Atlas будут последовательно заменять эти заготовки.','Иллюстрация жүйесі өзара байланысты үш көріністі бірге көрсетеді. Соңғы IPA Sono-Atlas кескіндері бұл үлгілерді кезең-кезеңімен алмастырады.','Sistem ilustracija povezuje tri prikaza. Završni IPA Sono-Atlas crteži postepeno će zameniti ove predloške.'],
  'Each acquisition card will later contain patient position, exact probe orientation, quality criteria, the expected normal pattern and one common failure mode.':['Каждая карточка будет содержать положение пациента, точную ориентацию датчика, критерии качества, ожидаемую норму и одну частую ошибку.','Әр карточка пациент қалпын, датчиктің нақты бағытын, сапа критерийлерін, күтілетін қалыпты көріністі және бір жиі қатені қамтиды.','Svaka kartica će sadržati položaj pacijenta, tačnu orijentaciju sonde, kriterijume kvaliteta, očekivani normalni obrazac i jednu čestu grešku.'],
  'The page will never present a single still as a complete diagnosis. Findings will be paired with quality checks, mimics and a clear uncertainty state.':['Один статичный кадр не будет представлен как полный диагноз. Находки будут сопровождаться проверкой качества, имитациями и явным уровнем неопределённости.','Бір статикалық кескін толық диагноз ретінде берілмейді. Нәтижелер сапа тексеруімен, ұқсастықтармен және белгісіздік деңгейімен бірге көрсетіледі.','Jedan statični kadar neće biti predstavljen kao potpuna dijagnoza. Nalazi će biti upareni sa proverom kvaliteta, imitacijama i jasnim stanjem neizvesnosti.'],
  'This is a layout preview only. The clinical algorithm requires named expert review and cited sources before publication.':['Это только предварительный макет. До публикации клинический алгоритм должен пройти именную экспертную проверку и получить ссылки на источники.','Бұл тек макетті алдын ала көрсету. Жариялауға дейін клиникалық алгоритм сарапшының атаулы тексеруінен өтіп, дереккөздермен расталуы тиіс.','Ovo je samo pregled rasporeda. Pre objave klinički algoritam zahteva imenovanu stručnu proveru i citirane izvore.'],
  'Generic curriculum requirements remain on this page. Verified manufacturer profiles describe which buttons and menus perform the task on an exact software version.':['На этой странице остаются общие требования программы. Проверенные профили производителей показывают кнопки и меню для выполнения задачи в конкретной версии ПО.','Бұл бетте бағдарламаның жалпы талаптары қалады. Өндірушінің тексерілген профильдері нақты бағдарлама нұсқасында тапсырманы орындайтын батырмалар мен мәзірлерді көрсетеді.','Na ovoj stranici ostaju opšti zahtevi kurikuluma. Provereni profili proizvođača prikazuju dugmad i menije za zadatak u tačnoj verziji softvera.']
};

Object.assign(IPA_COPY,IPA_LONG_COPY,IPA_EXTRA_COPY);

function languageValue(entry,lang){
  if(lang==='en')return null;
  return entry[{ru:0,kk:1,sr:2}[lang]];
}

function translateTextNodes(lang){
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  const nodes=[];
  while(walker.nextNode())nodes.push(walker.currentNode);
  nodes.forEach(node=>{
    if(node.parentElement?.closest('script,style,.lang-switch'))return;
    if(node.__ipaOriginal===undefined)node.__ipaOriginal=node.nodeValue;
    const original=node.__ipaOriginal;
    const key=original.trim();
    const entry=IPA_COPY[key];
    if(lang==='en'||!entry){node.nodeValue=original;return;}
    const translated=languageValue(entry,lang);
    if(!translated)return;
    const lead=original.match(/^\s*/)[0];
    const tail=original.match(/\s*$/)[0];
    node.nodeValue=lead+translated+tail;
  });
}

function setCurriculumLang(lang){
  if(!IPA_LANGS.includes(lang))lang='en';
  translateTextNodes(lang);
  document.documentElement.lang=lang;
  document.querySelectorAll('.lang-switch button').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.lang===lang)));
  const menu=document.querySelector('.menu-btn');
  if(menu)menu.setAttribute('aria-label',lang==='en'?'Menu':languageValue(IPA_COPY.Menu,lang));
  localStorage.setItem('ipa-lang',lang);
}

function mountLanguageSwitch(){
  const nav=document.getElementById('curriculumNav');
  if(!nav||nav.querySelector('.lang-switch'))return;
  const group=document.createElement('div');
  group.className='lang-switch';
  group.setAttribute('role','group');
  group.setAttribute('aria-label','Language');
  IPA_LANGS.forEach(lang=>{
    const button=document.createElement('button');
    button.type='button';
    button.dataset.lang=lang;
    button.textContent=lang.toUpperCase();
    button.setAttribute('aria-pressed','false');
    button.addEventListener('click',()=>setCurriculumLang(lang));
    group.appendChild(button);
  });
  const cta=nav.querySelector('.header-cta');
  nav.insertBefore(group,cta);
  setCurriculumLang(localStorage.getItem('ipa-lang')||'en');
}

document.querySelectorAll('[data-filter]').forEach(button=>{
  button.addEventListener('click',()=>{
    const value=button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(item=>item.classList.remove('active'));
    button.classList.add('active');
    document.querySelectorAll('[data-module]').forEach(card=>{card.hidden=value!=='all'&&card.dataset.module!==value;});
  });
});

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',()=>document.getElementById('curriculumNav')?.classList.remove('open'));
});

mountLanguageSwitch();
