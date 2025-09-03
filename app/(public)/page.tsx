import { LuSparkles } from "react-icons/lu";
import TaskSvg from "../components/ui/task";

export default function Page() {
  return (
    <main className="flex flex-col app-container py-12">
      <div className="flex flex-col justify-center items-center">
        <button className="rounded-3xl bg-brand-primary/5 pr-3 gap-3  w-fit inline-flex items-center font-semibold">
          <p className="bg-black py-0.5 px-2 rounded-3xl text-white flex-shrink-0">
            New
          </p>
          Manage Skills Easily <LuSparkles className=" animate-pulse text-brand-primary" />
        </button>

        <div className="flex flex-col py-6 justify-center items-center text-center max-w-3xl ">
          <h1 className="text-5xl font-semibold -tracking-[2%] leading-[1.2]">
            Build Your Career&apos;s <br /> Foundation Organize Your Growth
          </h1>
          <p className="text-lg text-neutral-600 mt-4 max-w-2xl">
            SkillStack is your personal command center for professional
            development. Log your skills, set mastery goals, and watch your
            potential expand.
          </p>
        </div>
          <TaskSvg />

        
      </div>
    </main>
  );
}
