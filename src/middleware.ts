import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const accessToken = cookies().get("accessToken")?.value;
  console.log(accessToken);

  //   if (isPublicPath && accessToken) {
  //     return NextResponse.redirect(new URL("/", req.nextUrl));
  //   }

  // console.log("accessToken", accessToken);

  //   if (
  //     !isPublicPath &&
  //     !accessToken &&
  //     (role !== "admin" || role !== "supperAdmin")
  //   ) {
  //     return NextResponse.redirect(new URL("/login", req.nextUrl));
  //   }
}

export const config = {
  matcher: ["/", "/login"],
};
