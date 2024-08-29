import InformationsBlock from "@/app/dashboard/my-business/_components/InformationsBlock";
import FeaturesBlock from "@/app/dashboard/my-business/_components/FeaturesBlock";
import TeamBlock from "@/app/dashboard/my-business/_components/TeamBlock";

export default function MyBusiness() {
  return (
    <div className="p-5 space-y-5 w-full">
      <InformationsBlock />
      <div className="flex gap-x-5 w-full">
        <FeaturesBlock />
        <TeamBlock />
      </div>
    </div>
  );
}
