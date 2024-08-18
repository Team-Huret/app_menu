import InformationsBlock from "@/app/dashboard/my-business/_components/InformationsBlock";
import SocialBlock from "@/app/dashboard/my-business/_components/SocialBlock";
import TeamBlock from "@/app/dashboard/my-business/_components/TeamBlock";

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
