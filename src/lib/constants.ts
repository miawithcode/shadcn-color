import { Button, Color } from "./types";

export const baseColors: Color[] = [
  { label: "background", background: "bg-background", hsl: "hsl(0 0% 100%)" },
  {
    label: "foreground",
    background: "bg-foreground",
    hsl: "hsl(240 10% 3.9%)",
  },
];

export const elementColors: Color[] = [
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

export const designColors: Color[] = [
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

export const chartColors: Color[] = [
  { label: "chart-1", background: "bg-chart-1", hsl: "hsl(12 76% 61%)" },
  { label: "chart-2", background: "bg-chart-2", hsl: "hsl(173 58% 39)" },
  { label: "chart-3", background: "bg-chart-3", hsl: "hsl(197 37% 24)" },
  { label: "chart-4", background: "bg-chart-4", hsl: "hsl(43 74% 66%)" },
  { label: "chart-5", background: "bg-chart-5", hsl: "hsl(27 87% 67%)" },
];

export const buttons: Button[] = [
  {
    label: "default",
    background: "primary",
    text: "primary-foreground",
    hover: "bg-primary/90",
  },
  {
    label: "secondary",
    background: "secondary",
    text: "secondary-foreground",
    hover: "bg-secondary/80",
  },
  {
    label: "outline",
    border: "input",
    background: "background",
    text: "secondary-foreground",
    hover: "bg-accent text-accent-foreground",
  },
  {
    label: "destructive",
    background: "destructive",
    text: "destructive-foreground",
    hover: "bg-destructive/90",
  },
  {
    label: "ghost",
    hover: "bg-accent text-accent-foreground",
  },
  {
    label: "link",
    text: "primary",
  },
];
