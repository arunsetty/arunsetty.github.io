import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { readFileSync } from "node:fs";
import path from "node:path";
import { Card } from "./card";

const fontDir = path.join(process.cwd(), "src/og/fonts");
const semibold = readFileSync(path.join(fontDir, "Fraunces144pt-SemiBold.ttf"));
const regular = readFileSync(path.join(fontDir, "Fraunces72pt-Regular.ttf"));

export async function renderOg(props: { title: string; description: string; eyebrow?: string }) {
  const svg = await satori(Card(props), {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Fraunces", data: semibold, weight: 600, style: "normal" },
      { name: "Fraunces", data: regular, weight: 400, style: "normal" },
    ],
  });

  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
  return png;
}
