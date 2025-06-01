import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

import Image from "next/image";

import { LayoutPanelTop } from "lucide-react";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */

export const baseOptions: BaseLayoutProps = {
  githubUrl: "https://github.com/Northstrix/namer-ui",
  nav: {
    title: (
      <div className="flex items-center justify-center gap-2 font-semibold text-sm">
        <Image src="/logo.png" alt="Namer UI" width={24} height={24} />
        Namer UI
      </div>
    ),
    transparentMode: "top",
  },

  links: [
    {
      text: "Components",
      url: "/components",
      active: "nested-url",
      icon: <LayoutPanelTop />,
    },
    {
      text: "Vue Components",
      url: "https://namer-ui-for-vue.netlify.app/",
      active: "nested-url",
      icon: <LayoutPanelTop />,
    },
  ],
};
