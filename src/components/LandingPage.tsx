import { CgChevronDown, CgChevronRight } from "react-icons/cg";

export default function LandingPage() {
  return (
    <div className="h-full flex flex-col justify-center w-full">
      <div className="flex items-center h-full justify-between flex-grow md:flex-nowrap flex-wrap">
        <div className="w-full ">
          <h3 className="font-semibold text-lg mb-16">tanimefedron.pl</h3>
          <div className="space-x-4 flex items-center my-4">
            <span className="rounded-md px-3 font-semibold text-black py-1 text-xs bg-white ">
              Nowy Drop
            </span>
            <span className="text-xs flex items-center gap-1">
              Nowy drop mefki już dostępny! <CgChevronRight className="block" />
            </span>
          </div>
          <h1 className="text-4xl font-bold leading-snug my-6">
            Chcesz kupić tani mefedron? <br />
            Już nie musisz szukać!
          </h1>
          <div className="my-12">
            <button className="bg-white text-sm font-semibold text-black px-5 py-2 rounded-md">
              Kup Mefix
            </button>
            <button>
              <span className="text-sm font-semibold text-white px-3 py-1 bg-black rounded-md ml-3">
                Kupuj mef!!
              </span>
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            className="w-full rounded-xl"
            src="/mefka/mefoludek1.jpg"
            alt="mefolud1"
          />
        </div>
      </div>
      <p className="text-sm text-zinc-600 py-5 flex items-center flex-col gap-2 justify-center">
        Miliony zadowolonych mefoludków, sprawdź poniżej
        <CgChevronDown className="animate-bounce" />
      </p>
    </div>
  );
}
