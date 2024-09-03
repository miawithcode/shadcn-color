import { type TColor } from "./types";

export const baseColors: TColor[] = [
  { label: "background", background: "bg-background", hsl: "hsl(0 0% 100%)" },
  {
    label: "foreground",
    background: "bg-foreground",
    hsl: "hsl(240 10% 3.9%)",
  },
];

export const elementColors: TColor[] = [
  { label: "card", background: "bg-card", hsl: "hsl(0 0% 100%)" },
  {
    label: "card-foreground",
    background: "bg-card-foreground",
    hsl: "hsl(240 10% 3.9%)",
  },
  { label: "popover", background: "bg-popover", hsl: "hsl(0 0% 100%)" },
  {
    label: "popover-foreground",
    background: "bg-popover-foreground",
    hsl: "hsl(240 10% 3.9%)",
  },
  { label: "border", background: "bg-border", hsl: "hsl(240 5.9% 90%)" },
  { label: "input", background: "bg-input", hsl: "hsl(240 5.9% 90%)" },
  { label: "ring", background: "bg-ring", hsl: "hsl(240 10% 3.9%)" },
];

export const designColors: TColor[] = [
  { label: "primary", background: "bg-primary", hsl: "hsl(240 5.9% 10%)" },
  {
    label: "primary-foreground",
    background: "bg-primary-foreground",
    hsl: "hsl(0 0% 98%)",
  },
  {
    label: "secondary",
    background: "bg-secondary",
    hsl: "hsl(240 4.8% 95.9%)",
  },
  {
    label: "secondary-foreground",
    background: "bg-secondary-foreground",
    hsl: "hsl(240 5.9% 10%)",
  },
  { label: "muted", background: "bg-muted", hsl: "hsl(240 4.8% 95.9%)" },
  {
    label: "muted-foreground",
    background: "bg-muted-foreground",
    hsl: "hsl(240 3.8% 46.1%)",
  },
  { label: "accent", background: "bg-accent", hsl: "hsl(240 4.8% 95.9%)" },
  {
    label: "accent-foreground",
    background: "bg-accent-foreground",
    hsl: "hsl(240 5.9% 10%)",
  },
  {
    label: "destructive",
    background: "bg-destructive",
    hsl: "hsl(0 84.2% 60.2%)",
  },
  {
    label: "destructive-foreground",
    background: "bg-destructive-foreground",
    hsl: "hsl(0 0% 98%)",
  },
];

export const chartColors: TColor[] = [
  { label: "chart-1", background: "bg-chart-1", hsl: "hsl(12 76% 61%)" },
  { label: "chart-2", background: "bg-chart-2", hsl: "hsl(173 58% 39)" },
  { label: "chart-3", background: "bg-chart-3", hsl: "hsl(197 37% 24)" },
  { label: "chart-4", background: "bg-chart-4", hsl: "hsl(43 74% 66%)" },
  { label: "chart-5", background: "bg-chart-5", hsl: "hsl(27 87% 67%)" },
];
