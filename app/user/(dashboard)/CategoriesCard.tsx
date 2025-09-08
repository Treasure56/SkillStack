import { BiSolidCategoryAlt } from "react-icons/bi";
import OverviewCard from "../../components/ui/OverviewCard";

export default function CategoriesCard() {
  return (
    <OverviewCard
      title="Categories"
      value="3"
      icon={<BiSolidCategoryAlt className="text-brand-primary text-5xl" />}
    />
  );
}
