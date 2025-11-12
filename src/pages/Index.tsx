import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[210mm] mx-auto bg-white shadow-2xl">
        
        <header className="relative h-[15vh] bg-gradient-to-r from-[#90EE90] to-[#FFD700] px-8 py-6 flex flex-col items-center justify-center">
          <div className="absolute top-4 right-8">
            <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Icon name="Wheat" size={48} className="text-[#2E8B57]" />
            </div>
          </div>
          
          <p className="text-[#2E8B57] font-bold text-xl tracking-wide mb-2 uppercase" style={{fontFamily: 'Montserrat'}}>
            ВАШИ ПОЛЯ — НАША ЗАБОТА!
          </p>
          <h1 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text mb-2" style={{fontFamily: 'Montserrat', textShadow: '2px 2px 4px rgba(0,0,0,0.1)'}}>
            СЕМЕНА ПШЕНИЦЫ «ТИНГЕР»
          </h1>
          <p className="text-[#696969] text-xs uppercase tracking-widest" style={{letterSpacing: '1pt'}}>
            высокая урожайность · устойчивость · качество
          </p>
        </header>

        <section className="px-12 py-8">
          <h2 className="text-2xl font-bold text-[#2E8B57] mb-4" style={{fontFamily: 'Montserrat'}}>
            О сорте
          </h2>
          <p className="text-base mb-4 leading-relaxed">
            Пшеница «Тингер» — современный сорт для фермеров, которые ценят:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Icon name="Wheat" size={20} className="text-[#2E8B57] mt-1 flex-shrink-0" />
              <p className="text-base">стабильную урожайность даже в сложных погодных условиях;</p>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="Shield" size={20} className="text-[#2E8B57] mt-1 flex-shrink-0" />
              <p className="text-base">устойчивость к болезням и вредителям;</p>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="Cookie" size={20} className="text-[#2E8B57] mt-1 flex-shrink-0" />
              <p className="text-base">высокое качество зерна (отличные хлебопекарные свойства);</p>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="Layers" size={20} className="text-[#2E8B57] mt-1 flex-shrink-0" />
              <p className="text-base">адаптивность к разным типам почв.</p>
            </div>
          </div>
        </section>

        <section className="mx-12 px-8 py-8 bg-[#FFF8DC] border border-[#D3D3D3] rounded-lg">
          <h2 className="text-xl font-bold text-[#2E8B57] mb-4" style={{fontFamily: 'Montserrat'}}>
            Ключевые преимущества
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-[#2E8B57] text-xl font-bold">✓</span>
              <p className="text-base leading-relaxed">
                <strong>Урожайность:</strong> до 80 ц/га при правильной агротехнике.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#2E8B57] text-xl font-bold">✓</span>
              <p className="text-base leading-relaxed">
                <strong>Устойчивость:</strong> к полеганию, мучнистой росе, бурой ржавчине.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#2E8B57] text-xl font-bold">✓</span>
              <p className="text-base leading-relaxed">
                <strong>Скороспелость:</strong> вегетационный период — 90–95 дней.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#2E8B57] text-xl font-bold">✓</span>
              <p className="text-base leading-relaxed">
                <strong>Качество зерна:</strong> белок — до 14,5%, клейковина — не менее 27%.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#2E8B57] text-xl font-bold">✓</span>
              <p className="text-base leading-relaxed">
                <strong>Адаптивность:</strong> подходит для Центрального, Волго‑Вятского регионов.
              </p>
            </div>
          </div>
        </section>

        <section className="px-12 py-8 bg-gradient-to-r from-[#F0FFF0] to-[#FFF0F5]">
          <h2 className="text-xl font-bold text-[#2E8B57] mb-6" style={{fontFamily: 'Montserrat'}}>
            Рекомендации по посеву
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-[#D3D3D3] bg-white">
              <thead>
                <tr className="bg-[#F5F5F5]">
                  <th className="border border-[#D3D3D3] px-4 py-3 text-left text-base font-semibold text-[#2E8B57]">
                    Показатель
                  </th>
                  <th className="border border-[#D3D3D3] px-4 py-3 text-left text-base font-semibold text-[#2E8B57]">
                    Значение
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#D3D3D3] px-4 py-3 text-base">
                    Оптимальные сроки
                  </td>
                  <td className="border border-[#D3D3D3] px-4 py-3 text-base">
                    Первая половина апреля (+5...+8°C)
                  </td>
                </tr>
                <tr className="bg-[#FAFAFA]">
                  <td className="border border-[#D3D3D3] px-4 py-3 text-base">
                    Норма высева
                  </td>
                  <td className="border border-[#D3D3D3] px-4 py-3 text-base">
                    4–5 млн семян/га
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#D3D3D3] px-4 py-3 text-base">
                    Глубина заделки
                  </td>
                  <td className="border border-[#D3D3D3] px-4 py-3 text-base">
                    4–6 см
                  </td>
                </tr>
                <tr className="bg-[#FAFAFA]">
                  <td className="border border-[#D3D3D3] px-4 py-3 text-base">
                    Предшественники
                  </td>
                  <td className="border border-[#D3D3D3] px-4 py-3 text-base">
                    Бобовые, пропашные культуры
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="px-12 py-8">
          <h2 className="text-xl font-bold text-[#2E8B57] mb-5" style={{fontFamily: 'Montserrat'}}>
            Почему выбирают «Тингер»?
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-[#FFD700] text-2xl">✓</span>
              <p className="text-base leading-relaxed">
                <strong>Проверено временем:</strong> в Госреестре РФ, выращивается {'>'} 5 лет.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#FFD700] text-2xl">✓</span>
              <p className="text-base leading-relaxed">
                <strong>Экономическая выгода:</strong> низкие затраты на защиту растений.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#FFD700] text-2xl">✓</span>
              <p className="text-base leading-relaxed">
                <strong>Гарантия качества:</strong> контроль по ГОСТ.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-12 bg-[#FF4500] text-white py-8 px-8 text-center rounded-lg">
          <p className="text-2xl font-bold leading-tight" style={{fontFamily: 'Montserrat'}}>
            ПРИ ЗАКАЗЕ ОТ 1 ТОННЫ — СКИДКА 10%<br />
            И БЕСПЛАТНАЯ ДОСТАВКА ДО ВАШЕГО ХОЗЯЙСТВА!
          </p>
        </section>

        <footer className="px-12 py-8 pb-12">
          <h2 className="text-xl font-bold text-[#2E8B57] mb-5" style={{fontFamily: 'Montserrat'}}>
            Контакты
          </h2>
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <Icon name="Phone" size={20} className="text-[#2E8B57]" />
              <p className="text-base">
                Телефон: <strong>+7 (XXX) XXX-XX-XX</strong>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Mail" size={20} className="text-[#2E8B57]" />
              <p className="text-base">
                Email: <strong>info@tinger-seeds.ru</strong>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Globe" size={20} className="text-[#2E8B57]" />
              <p className="text-base">
                Сайт: <strong>www.tinger-seeds.ru</strong>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="MapPin" size={20} className="text-[#2E8B57]" />
              <p className="text-base">
                Адрес: <strong>г. Москва, ул. Полевая, д. 25</strong>
              </p>
            </div>
          </div>
          
          <p className="text-center text-2xl font-bold text-[#2E8B57] mb-3" style={{fontFamily: 'Montserrat'}}>
            ЗАКАЖИТЕ СЕГОДНЯ — ОБЕСПЕЧЬТЕ УРОЖАЙ ЗАВТРА!
          </p>
          
          <p className="text-center text-sm text-[#696969] italic">
            *Количество семян ограничено. Условия акции уточняйте у менеджера.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
