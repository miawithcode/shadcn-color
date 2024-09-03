export type Color = {
  label: string;
  background: string;
  hsl: string;
};

export type Button = {
  label:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  background?: string;
  text?: string;
  hover?: string;
  border?: string;
};
