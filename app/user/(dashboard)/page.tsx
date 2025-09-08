import AvgProgressCard from "./AvgProgressCard";
import CategoriesCard from "./CategoriesCard";
import Profile from "./Profile";
import Skills from "./Skills";
import TotalSkillsCard from "./TotalSkillsCard";

export default function Page() {
  return (
    <main className="flex flex-col gap-3 app-container">
      {" "}
      <Profile />
     <div className="grid md:grid-cols-3 gap-4 mt-6">
       <TotalSkillsCard />
       <AvgProgressCard />
       <CategoriesCard />
       {/* <SkillsDistributionCard /> */}
     </div>
       <Skills />
    </main>
  );
}
