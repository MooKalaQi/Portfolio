import type { NextConfig } from "next";
import { defaultLocale } from "./lib/i18n";

const nextConfig: NextConfig = {
  // Everything lives under /[lang]; send the bare root to the default locale.
  async redirects() {
    return [{ source: "/", destination: `/${defaultLocale}`, permanent: false }];
  },
};

export default nextConfig;
