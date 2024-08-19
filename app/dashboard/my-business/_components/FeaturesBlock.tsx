import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function SocialBlock() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Social Media</CardTitle>
        <CardDescription>Add social media links of your business here</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-5 w-full ">
          <div className="w-full space-y-3">
            <div className="space-y-1">
              <Label>Instagram</Label>
              <Input placeholder="My business" required />
            </div>
            <div className="space-y-1">
              <Label>Facebook</Label>
              <Input placeholder="My business" required />
            </div>
          </div>
          <div className="w-full space-y-3">
            <div className="space-y-1">
              <Label>Business Email</Label>
              <Input placeholder="My business" required />
            </div>
            <div className="space-y-1">
              <Label>Business Phone number</Label>
              <Input placeholder="(+66) 6-2145-3849" required />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
