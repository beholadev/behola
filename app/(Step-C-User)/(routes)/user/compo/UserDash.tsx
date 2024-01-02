import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const UserDash = () => {
  const behola_user = "Raja Raman";
  const account_status = "Active";
  const plan_name_details = "Premium";
  const plan_usage_details = "130000";
  const plan_total_usage_details = "500000";
  return (
    <div className="mt-4 ml-7 flex flex-wrap space-x-2">
      <Card className="w-fit  mt-3 cursor-pointer bg-gray-200/10 hover:bg-gray-200/20">
        <CardHeader>
          <CardTitle className="text-[#111827] text-lg tracking-wider">
            User Details | My Account
          </CardTitle>
          <CardDescription className="text-[#111827] text-sm tracking-wider">
            Welcome Beholian -&nbsp;{behola_user}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-[#111827] text-xs tracking-wider">
          <p>Account Status: {account_status} </p>
          <p>Plan Details: {plan_name_details}</p>
          <p>
            Usage this month: {plan_usage_details}/{plan_total_usage_details}
            (words)
          </p>
        </CardContent>
      </Card>
      <div className="mt-4 ml-7 flex flex-wrap space-x-2">
        <div className="relative space-x-2  mt-3 items-justify space-around">
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

export default UserDash;
