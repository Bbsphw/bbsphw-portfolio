import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.has("title")
      ? searchParams.get("title")?.slice(0, 100)
      : "Sophonwit Thapseng | Portfolio";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            backgroundImage: "linear-gradient(to bottom right, #18181b, #09090b)",
            padding: "80px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                fontSize: 60,
                color: "white",
                fontWeight: 800,
                letterSpacing: "-0.05em",
              }}
            >
              @Bbsphw_
            </div>
            <div
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: "#3b82f6",
                borderRadius: "50%",
                marginLeft: "12px",
                marginTop: "16px",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <h1
              style={{
                fontSize: 72,
                fontFamily: "sans-serif",
                color: "white",
                lineHeight: 1.1,
                fontWeight: 700,
                margin: 0,
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: 36,
                color: "#a1a1aa",
                margin: 0,
                fontWeight: 500,
              }}
            >
              Software Engineer & Full Stack Developer
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch {
    return new Response("Failed to generate OG image", { status: 500 });
  }
}
