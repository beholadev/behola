import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="flex items-center justify-between">
      <Button variant="outline"> Test Button </Button>
      <div className="pt-5">LANDING PAGE</div> 
      <Button variant="destructive">Test Button 2 </Button>
    </div>
  )
}
