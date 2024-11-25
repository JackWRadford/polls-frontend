import { useLocation } from "react-router-dom";
import LinkButton from "../common/link/LinkButton";
import styles from "./accountSidebar.module.css";

interface SidebarLinks {
  to: string;
  label: string;
}

const sidebarButtons: SidebarLinks[] = [
  {
    to: "my-polls",
    label: "My Polls",
  },
  {
    to: "delete",
    label: "Delete Account",
  },
];

const AccountSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop();

  return (
    <div className={styles.sideBar}>
      {sidebarButtons.map((sidebarButton, index) => (
        <LinkButton
          key={index}
          className={styles.link}
          {...sidebarButton}
          level={currentPath === sidebarButton.to ? "secondary" : "tertiary"}
        />
      ))}
    </div>
  );
};

export default AccountSidebar;
