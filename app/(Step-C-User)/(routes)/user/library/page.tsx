import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const library = () => {
  return (
    <div className="m-10">
      <div className="pb-3 mb-2">
        <Input className="text-white bg-[#111827]" placeholder="Search Tools" />
      </div>

      <div className="flex flex-wrap space-even">
        <div className="relative space-even  mt-3 items-justify space-around">
          <Card className="w-[180px] h-fit cursor-pointer bg-gray-200/10 hover:bg-gray-200/20">
            <CardContent className="text-[#111827] text-xs tracking-wider content-center">
              <h3 className="text-sm pt-5">Wizards</h3>
              <p>Book Wizard</p>
              <p>Blog Wizard</p>
              <p>Fundraising</p>
            </CardContent>
          </Card>
        </div>

        <div className="relative space-x-2  mt-3 items-justify space-around">
          <Card className="w-[180px] h-fit cursor-pointer bg-gray-200/10 hover:bg-gray-200/20">
            <CardContent className="text-[#111827] text-xs tracking-wider content-center">
              <h3 className="text-sm pt-5">Text Contents</h3>
              <p>Create your text contents based on your specific need</p>
            </CardContent>
          </Card>
        </div>

        <div className="relative  mt-3 items-justify space-around">
          <Card className="w-[180px] h-fit cursor-pointer bg-gray-200/10 hover:bg-gray-200/20">
            <CardContent className="text-[#111827] text-xs tracking-wider content-center">
              <h3 className="text-sm pt-5">Creation</h3>
              <p>Create anything you like to create, not limited to text</p>
            </CardContent>
          </Card>
        </div>

        <div className="relative mt-3 items-justify space-around">
          <Card className="w-[180px] h-fit cursor-pointer bg-gray-200/10 hover:bg-gray-200/20">
            <CardContent className="text-[#111827] text-xs tracking-wider content-center">
              <h3 className="text-sm pt-5">All Contents</h3>
              <p>Create multiple template text contents in a click</p>
            </CardContent>
          </Card>
        </div>

        <div className="relative mt-3 items-justify space-around">
          <Card className="w-[180px] h-fit cursor-pointer bg-gray-200/10 hover:bg-gray-200/20">
            <CardContent className="text-[#111827] text-xs tracking-wider content-center">
              <h3 className="text-sm pt-5">Account</h3>
              <p>Manage your account and documents</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default library;
