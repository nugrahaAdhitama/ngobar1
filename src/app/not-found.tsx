import Link from "next/link";

import React from "react";

export default function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <p>The page you looking for does not exist</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}
