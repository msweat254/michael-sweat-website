import { useRouter } from 'next/router';
import styles from '../styles/card.module.css';

const Card = ({ title, body, urlEndpoint }) => {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(urlEndpoint);
    };

    return (
        <div
            className={styles.cardContainer}
            onClick={handleCardClick}
        >
            <div className={styles.cardTitleContainer}>
                <h2 className={styles.cardTitle}>{title}</h2>
            </div>
            <div className={styles.cardBodyContainer}>
                <p className={styles.cardBody}>{body}</p>
            </div>
        </div>
    );
};

export default Card;
