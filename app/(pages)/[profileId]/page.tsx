import ProjectCard from "@/app/components/commons/project-card";
import TotalVisits from "@/app/components/commons/total-visits";
import UserCard from "@/app/components/commons/user-card";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function ProfilePage({ params }: { params: Promise<{ profileId: string }> }) {
    const { profileId } = await params;

    return (
        <div className="relative h-screen flex p-20 overflow-hidden">
            <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-1 py-2 bg-[#19191A]">
                <span>Você está usando a versão <strong>Trial</strong>.</span>
                <Link href={`${profileId}/upgrade`}>
                    <button className="text-[#87BB2D] font-bold ">Faça o upgrande agora!</button>
                </Link>
            </div>
            <div className="w-1/2 flex justify-center h-min">
                <UserCard />
            </div>
            <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <button className="w-[340px] h-[132px] rounded-[20px] bg-[#0F0F10] flex items-center gap-2 justify-center hover:border border-dashed border-[#323234]">
                    <Plus className="size-10 text-[#87BB2D]" />
                    <span>Novo Projeto</span>
                </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
                <TotalVisits />
            </div>
        </div>
    )
}