import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex text-xs text-zinc-500 items-center justify-between py-12">
      <div>Proszę nie zamykajcie mnie to tylko żart ok ok?</div>
      <div className="divide-x flex items-center divide-zinc-500">
        <div className="px-2">discord: taniomefa</div>
        <div className="px-2">
          <a
            href="https://github.com/112frosta"
            className="hover:text-white duration-150 transition-all"
          >
            <FaGithub className="inline-block size-4 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}
