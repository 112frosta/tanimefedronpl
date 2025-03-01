export default function MefaalenietylkoPage() {
  return (
    <div className="flex justify-center flex-col py-12 space-y-16 items-center">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold">Nie tylko mefka</h1>
        <p className="text-sm text-zinc-400 leading-relaxed">
          W naszym sklepie znajdziesz nie tylko mefedron, ale także inne <br />
          wypierdalacze, które z pewnością Cię zainteresują.
        </p>
      </div>
      <div className="md:grid md:grid-cols-3 md:grid-rows-1 flex flex-wrap gap-5 mt-5">
        <div className="border rounded-lg border-zinc-900 p-5 space-y-4">
          <img
            src="/mefka/amfa-w-dykcie.jpg"
            className="rounded-lg"
            alt="amfazdykty"
          />
          <div className="space-y-2">
            <h1 className="text-xl font-bold">Dyktadron (Nowość)</h1>
            <p className="text-sm text-zinc-400">
              Mefedron maczany w denaturacie, smaczny, przyjemny, armoatyczny.
            </p>
          </div>
        </div>
        <div className="border rounded-lg border-zinc-900 p-5 space-y-4">
          <img
            src="/mefka/huj-wie.jpg"
            className="rounded-lg"
            alt="amfazdykty"
          />
          <div className="space-y-2">
            <h1 className="text-xl font-bold">Ufometamina</h1>
            <p className="text-sm text-zinc-400">
              Amfetamina zesłana przez boskie moce nazaretańskie w postaci
              kamienia, potwierdzone przez NASA.
            </p>
          </div>
        </div>
        <div className="border rounded-lg border-zinc-900 p-5 space-y-4">
          <img
            src="/mefka/mix-fuga.jpg"
            className="rounded-lg"
            alt="amfazdykty"
          />
          <div className="space-y-2">
            <h1 className="text-xl font-bold">Tutti Frutti</h1>
            <p className="text-sm text-zinc-400">
              Dykradron zmieszany z elegancką mefką i fugą, idealne połączenie
              dla dzieci w wieku od 2 do 5 lat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
