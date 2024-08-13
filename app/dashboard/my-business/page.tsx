import InformationsBlock from "@/components/tabs/business/InformationsBlock";
import SocialBlock from "@/components/tabs/business/SocialBlock";
import TeamBlock from "@/components/tabs/business/TeamBlock";

export default function MyBusiness() {
  return (
    <div className="p-5 space-y-5">
      <InformationsBlock />
      <div className="flex gap-x-5 w-full">
        <SocialBlock />
        <TeamBlock />
      </div>
    </div>
  );
}
