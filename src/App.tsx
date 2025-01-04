export default function App() {
  return (
    <div className="min-h-screen h-screen">
      <div className="container h-full mx-auto p-5">
        <div className="h-full flex-col space-y-10 flex pb-32 justify-center items-center">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-center md:leading-snug leading-tight">
              Chcesz kupic mefedron?
            </h1>
            <p className="text-blue-600 font-bold">
              discord: <span className="underline">taniomefa</span>
            </p>
          </div>
          <div>
            <img src="./mefa.jpeg" className="size-64 object-contain" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
