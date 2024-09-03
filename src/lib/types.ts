export type TColor = {
  label: string;
  background: string;
  hsl: string;
};

export type TButton = {
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
