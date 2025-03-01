export default function MefoludkiPage() {
  return (
    <div className="py-32 space-y-16">
      <div className="space-y-3">
        <h1 className="font-bold text-3xl">Miliony Zadolownych Klientów</h1>
        <p className="text-zinc-400 text-sm text-pretty w-full md:w-2/5 leading-relaxed">
          Mefka to najlepszy wybór dla każdego, kto chce poczuć się lepiej. Ja
          wale od 3 roku życia, matka mnie fetą karmiła i jestem zdrowy. Pali
          styki w huj mordo kupuj ten temacik.
        </p>
      </div>
      <div>
        <div className="md:grid flex flex-wrap md:grid-cols-4 gap-5 grid-rows-1">
          <div className="space-y-5 border-zinc-900 border rounded-lg p-5">
            <img
              src="/mefka/mefoludek2.jpg"
              className="w-full rounded-xl"
              alt="mefoludek2"
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Mateusz, 40 lat</h2>
              <p className="w-full leading-relaxed text-zinc-400 text-sm">
                <q className="italic">
                  kurwa mordo wiesz o co chodzi nie, ja pierdole ale sztos kurwa
                  wariacie zamawiaj pake bo to huj
                </q>
              </p>
            </div>
          </div>
          <div className="space-y-5 border-zinc-900 border rounded-lg p-5">
            <img
              src="/mefka/mefolud3.jpg"
              className="w-full rounded-xl"
              alt="mefoludek2"
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Krystian, 102 lat</h2>
              <p className="w-full leading-relaxed text-zinc-400 text-sm">
                <q className="italic">
                  Mordo ja napierdalalem mefe w 1989 na tajwanie, wtedy to był
                  mef, szukałem dobrego mefa i dopiero teraz zaznałem smaku z
                  lat 90
                </q>
              </p>
            </div>
          </div>
          <div className="space-y-5 border-zinc-900 border rounded-lg p-5">
            <img
              src="/mefka/mefoludek4.jpg"
              className="w-full rounded-xl"
              alt="mefoludek2"
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Magda, 27 lat</h2>
              <p className="w-full leading-relaxed text-zinc-400  text-sm">
                <q className="italic">
                  Zawsze osiedlowy diler mówil, że ma temat prima sort pierwsza
                  łapa po chemiku, ale to była jebana siepa. Teraz kupuje tylko
                  tu
                </q>
              </p>
            </div>
          </div>
          <div className="space-y-5 border-zinc-900 border rounded-lg p-5">
            <img
              src="/mefka/mefolud5.jpg"
              className="w-full rounded-xl"
              alt="mefoludek2"
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Krzysztof, 81 lat</h2>
              <p className="w-full leading-relaxed text-zinc-400 text-sm">
                <q className="italic">
                  Kurwa walilem koke ale to nie to, mefa to jest dopiero biala
                  dama od 40 lat kupuje tylko tutaj.
                </q>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
