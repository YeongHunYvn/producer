import { ImageResponse } from "next/og";
export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0b0b0f",
                    color: "#ededed",
                    fontSize: 64,
                    fontWeight: 600,
                }}
            >
                작곡가 윤영훈
            </div>
        ),
        size
    );
}



