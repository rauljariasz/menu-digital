import { CardMenu } from "../components/widget/example/cardMenuWidget";
import { Button } from "@nextui-org/button";
import AccordionMenu from "app/components/ui/accordion-menu/accordion-menu";
export default function Home() {
  return (
    <main className="flex min-h-screen bg-white flex-col items-center justify-between p-24">
      <h1>Hola soy un menu digital</h1>
      <CardMenu />
      <Button>Click me</Button>
      <AccordionMenu />
    </main>
  );
}
