import {
  baseColors,
  chartColors,
  designColors,
  elementColors,
} from "@/lib/constants";
import { type TColor } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="py-4">
      <p className="mb-4 text-sm">
        <span className="font-bold">hsl:</span>Hue (颜色), Saturation (饱和度),
        Lightness (亮度)
      </p>
      <div className="flex flex-col gap-8">
        <div>
          <ColorHeading>Base Color</ColorHeading>
          <ColorList colors={baseColors} />
        </div>

        <div>
          <ColorHeading>Element Color</ColorHeading>
          <ColorList colors={elementColors} />
        </div>

        <div>
          <ColorHeading>Design Color</ColorHeading>
          <ColorList colors={designColors} />
        </div>

        <div>
          <ColorHeading>Chart Color</ColorHeading>
          <ColorList colors={chartColors} />
        </div>
      </div>
    </div>
  );
}

function ColorHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-2 text-2xl font-bold">{children}</h2>;
}

function ColorList({ colors }: { colors: TColor[] }) {
  return (
    <div className="grid w-full grid-cols-2 gap-4 text-center">
      {colors.map((color) => (
        <div key={color.label}>
          <div className={cn("h-14 rounded shadow-md", color.background)}></div>
          <p>{color.label}</p>
          <p className="text-sm text-muted-foreground">{color.hsl}</p>
        </div>
      ))}
    </div>
  );
}
