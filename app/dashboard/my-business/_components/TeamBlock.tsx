import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LuTrash2 } from "react-icons/lu";
import { IoPersonAddOutline } from "react-icons/io5";

export default function TeamBlock() {
  const members = [
    { name: "John Doe", role: "Manager" },
    { name: "Jane Doe", role: "Worker" },
  ];
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Member of the team</CardTitle>
        <CardDescription>Allow members of your team to access this dashboard.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 w-full">
          {members.map((member, index) => (
            <div key={index} className="flex gap-x-2 items-center">
              <div className="w-full justify-between gap-4 border border-border p-3 text-sm flex items-center rounded-lg">
                <span className="font-medium">{member.name}</span>
                <span className="text-gray-400">{member.role}</span>
              </div>
              <LuTrash2 className="size-5 cursor-pointer" />
            </div>
          ))}
          <button className="border border-dashed border-border rounded-lg p-3 flex items-center justify-center gap-x-2 w-full text-sm hover:bg-gray-50 cursor-pointer transition">
            <IoPersonAddOutline className="size-4" />
            <span>Add new member</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
