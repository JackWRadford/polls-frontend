import clsx from "clsx";
import styles from "./titleSubtitle.module.css";

export interface TitleSubtitleProps {
  title: string;
  subtitle?: string;
  titleElementType?: "h1" | "h2" | "h3";
  className?: string;
}

const TitleSubtitle = ({
  title,
  subtitle,
  titleElementType = "h2",
  className,
}: TitleSubtitleProps) => {
  const TitleElement = titleElementType || "h2";

  return (
    <div className={clsx(className, styles.container)}>
      <TitleElement>{title}</TitleElement>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};

export default TitleSubtitle;
