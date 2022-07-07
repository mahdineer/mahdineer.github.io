import Link from "next/link";
import classNames from "classnames";
import styles from "./SocialList.module.css";
import type { SocialListProps } from "./SocialList.types";
import { Icon } from "src/components/Icon";
import { SOCIAL_LIST } from "src/constants";

export function SocialList(props: SocialListProps) {
  const { className } = props;
  const socialListClasses = classNames(styles.socialList, className);

  return (
    <ul className={socialListClasses}>
      {SOCIAL_LIST.map(({ title, href, icon }) => (
        <li key={title}>
          <Link href={href}>
            <a className={styles.socialItem} target="_blank">
              {<Icon name={icon} className="w-6" />}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}