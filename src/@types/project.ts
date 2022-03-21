import type { IconNames } from "@components/Icon";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  links: {
    icon: IconNames;
    href: string;
  }[];
};