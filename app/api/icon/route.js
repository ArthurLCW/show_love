import { ImageResponse } from "next/og";
import HeartIcon from "../../HeartIcon";

export const contentType = "image/svg+xml";
const size = {
  width: 24,
  height: 24,
};

export async function GET() {
  return new ImageResponse(<HeartIcon />, {
    ...size,
  });
}
