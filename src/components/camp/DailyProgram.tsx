const schedule = [
{ time: "7:30–8:30", activity: "Příchod dětí a volné hry", icon: "☀️" },
{ time: "8:30–10:00", activity: "Dopolední sportovní blok (míčové hry, atletika, týmové soutěže)", icon: "🎯" },
{ time: "10:00–10:30", activity: "Zdravá svačina", icon: "🍐" },
{ time: "10:30–12:00", activity: "Sportovní a pohybové aktivity", icon: "⚽" },
{ time: "12:00–12:45", activity: "Oběd", icon: "🍽️" },
{ time: "12:45–13:30", activity: "Odpočinek (stolní hry, klidnější aktivity)", icon: "🎲" },
{ time: "13:30–14:30", activity: "Kreativní a týmové hry", icon: "🏅" },
{ time: "14:30–15:00", activity: "Zdravá svačina", icon: "🍎" },
{ time: "15:00–16:30", activity: "Odpolední sportovní blok", icon: "🏀" },
{ time: "16:30–17:00", activity: "Vyzvedávání dětí", icon: "👫" }];


const DailyProgram = () => {
  return (
    <section id="program" className="section-padding bg-surface">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Denní program</h2>
        <p className="text-muted-foreground text-center mb-10">Typický den na Sportstarters kempu

        </p>
        <div className="space-y-0">
          {schedule.map((item, i) =>
          <div
            key={i}
            className="flex items-center gap-4 md:gap-6 py-2 border-b border-border last:border-b-0">
            
              <span className="text-2xl w-10 text-center flex-shrink-0">{item.icon}</span>
              <span className="font-mono text-sm text-muted-foreground w-14 flex-shrink-0">
                {item.time}
              </span>
              <span className="font-medium text-lg">{item.activity}</span>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default DailyProgram;