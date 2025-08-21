/* eslint-disable @next/next/no-img-element */
export default function ProjectCard() {
    return (
        <div className="w-[340px] h-[132px] flex gap-5 bg-[#0F0F10] p-3 rounded-[20px] border border-transparent hover:border-[#323234]">
            <div className="size-24 rounded-md overflow-hidden flex-shrink-0">
                <img src="/project1.jpg" alt="Projeto" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-2">
                <span className="uppercase text-xs font-bold text-[#87BB2D]">10 Cliques</span>
                <div className="flex flex-col">
                    <span className="text-white font-bold">Projeto 1</span>
                    <span className="text-[#CDCBCC] text-sm">Descrição super detalhada do que o projeto faz.</span>
                </div>
            </div>
        </div>
    );
}