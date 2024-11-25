import LinkButton, { LinkButtonProps } from "../../common/link/LinkButton";
import TitleSubtitle, {
  TitleSubtitleProps,
} from "../../common/title-subtitle/TitleSubtitle";
import styles from "./hero.module.css";

interface HeroProps {
  titleSubtitleProps: TitleSubtitleProps;
  linkButtonProps: LinkButtonProps;
}

const Hero = ({ titleSubtitleProps, linkButtonProps }: HeroProps) => {
  return (
    <div className={styles.containerBackground}>
      <div className={styles.container}>
        <TitleSubtitle {...titleSubtitleProps} />
        <LinkButton {...linkButtonProps} />
      </div>
    </div>
  );
};

export default Hero;
