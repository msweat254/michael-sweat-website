import { useRouter } from 'next/router';
import { FaCalendarWeek, FaEnvelope, FaBookOpen } from 'react-icons/fa';
import { IoHome } from "react-icons/io5";
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className={styles.sidebar}>
      <div>
        <div className={styles.sidebarLogo}>
          <div className={styles.logoCircle}>
            <img src='/portrait.png' alt="Logo" className={styles.logoImg} />
          </div>
        </div>

        <SidebarIcon onClick={() => router.push('/')} icon={<IoHome />} text="Home" />
        <SidebarIcon onClick={() => router.push('/about')} icon={<FaBookOpen />} text="About" />
        <SidebarIcon onClick={() => router.push('/projects')} icon={<FaCalendarWeek />} text="Projects" />
        <SidebarIcon onClick={() => router.push('/resume')} icon={<FaBookOpen />} text="Resume" />
        <SidebarIcon onClick={() => router.push('/contact')} icon={<FaEnvelope />} text="Contact" />
      </div>
    </div>
  );
};

const SidebarIcon = ({ onClick, icon, text }) => {
  return (
    <div className={styles.sidebarIcon} onClick={onClick}>
      <div className={styles.iconLink}>
        {icon}
        <span className={styles.iconText}>{text}</span>
      </div>
    </div>
  );
};

export default Sidebar;
