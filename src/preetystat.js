import numeral from "numeral";
export const preetyStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";
