import { useRouter } from 'next/router';
import { FaEnvelope, FaFolderOpen, FaUser, FaFileAlt, FaGithub } from 'react-icons/fa';
import { IoHome } from "react-icons/io5";
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className={styles.sidebar}>
      <div>
        <div className={styles.sidebarLogo}>
          <div className={styles.logoCircle}>
            <img src='static/images/portrait.png' alt="Logo" className={styles.logoImg} />
          </div>
        </div>

        <SidebarIcon onClick={() => router.push('/')} icon={<IoHome />} text="Home" />
        <SidebarIcon onClick={() => router.push('/about')} icon={<FaUser />} text="About" />
        <SidebarIcon onClick={() => router.push('/projects')} icon={<FaFolderOpen />} text="Projects" />
        <SidebarIcon onClick={() => router.push('/resume')} icon={<FaFileAlt />} text="Resume" />
        <SidebarIcon onClick={() => router.push('/contact')} icon={<FaEnvelope />} text="Contact" />
      </div>

      {/* GitHub Icon at the Bottom */}
      <div className={styles.sidebarBottom}>
        <SidebarIcon 
          onClick={() => window.open('https://github.com/msweat254', '_blank')}
          icon={<FaGithub />}
          text="GitHub"
        />
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
