export type Stat = {
  label: string;
  value: string;
  change: string;
  changeDirection: "up" | "down";
  helper?: string;
};

export const demoStats: Stat[] = [
  {
    label: "Revenue",
    value: "$48,920",
    change: "+12.4%",
    changeDirection: "up",
    helper: "vs last 30 days",
  },
  {
    label: "Active users",
    value: "3,284",
    change: "+3.1%",
    changeDirection: "up",
    helper: "7-day average",
  },
  {
    label: "Conversion",
    value: "2.74%",
    change: "-0.3%",
    changeDirection: "down",
    helper: "checkout completion",
  },
  {
    label: "Tickets",
    value: "42",
    change: "-18.0%",
    changeDirection: "down",
    helper: "open support issues",
  },
];

