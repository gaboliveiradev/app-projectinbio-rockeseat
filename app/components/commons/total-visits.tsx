import { TrendingUp } from "lucide-react";

export default function TotalVisits() {
    return (
        <div className="w-min whitespace-nowrap flex items-center gap-5 bg-[#0F0F10] border border-[#19191A] px-8 py-3 rounded-xl shadow-lg">
            <span className="font-bold text-white">Total de Visitas</span>
            <div className="flex items-center gap-2 text-[#87BB2D]">
                <span className="text-3xl font-bold">1000</span>
                <TrendingUp />
            </div>
            {/* <div className="flex items-center gap-2">
                <button>Portal</button>
                <button>Sair</button>
            </div> */}
        </div>
    );
}