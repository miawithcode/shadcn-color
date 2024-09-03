import { Button } from "@/components/ui/button";
import { buttons } from "@/lib/constants";

export default function Page() {
  return (
    <div className="flex flex-col gap-2 py-4">
      <div className="flex gap-2">
        <Button>Default</Button>
        <Button variant={"secondary"}>Secondary</Button>
        <Button variant={"outline"}>Outline</Button>
        <Button variant={"ghost"}>Ghost</Button>
        <Button variant={"link"}>Link</Button>
        <Button variant={"destructive"}>Destructive</Button>
      </div>
      <div className="mt-4 flex flex-col gap-4 border-t py-6">
        {buttons.map((button) => (
          <div
            key={button.label}
            className="grid grid-cols-8 items-center gap-4"
          >
            <Button className="col-span-2 capitalize" variant={button.label}>
              {button.label}
            </Button>
            <ul className="col-span-6">
              {button.border && (
                <li>
                  <span className="font-semibold">border: </span>
                  {button.border}
                </li>
              )}
              {button.background && (
                <li>
                  <span className="font-semibold">background: </span>
                  {button.background}
                </li>
              )}
              {button.text && (
                <li>
                  <span className="font-semibold">text: </span>
                  {button.text}
                </li>
              )}
              {button.hover && (
                <li>
                  <span className="font-semibold">hover: </span>
                  {button.hover}
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
