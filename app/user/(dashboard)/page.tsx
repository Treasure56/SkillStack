import AvgProgressCard from "./AvgProgressCard";
import CategoriesCard from "./CategoriesCard";
import Profile from "./Profile";
import TotalSkillsCard from "./TotalSkillsCard";

export default function Page() {
  return (
    <main className="flex flex-col gap-3 app-container">
      {" "}
      <Profile />
     <div className="grid md:grid-cols-4 gap-4 mt-6">
       <TotalSkillsCard />
       <AvgProgressCard />
       <CategoriesCard />
       {/* <SkillsDistributionCard /> */}
     </div>
    </main>
  );
}
