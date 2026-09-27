import { siteConfig } from "@/config/site";
import styles from "./FloatingContact.module.css";

function MessengerIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.icon}>
      <path
        d="M12 3.2c-5.14 0-9.28 3.84-9.28 8.54 0 2.67 1.34 5.05 3.44 6.6v3.24l3.15-1.73c.85.24 1.75.36 2.69.36 5.14 0 9.28-3.84 9.28-8.55C21.28 7.04 17.14 3.2 12 3.2Z"
        fill="currentColor"
      />
      <path
        d="m8.04 14.3 2.86-3.05 2.26 2.4 3.9-4.15-4.24 2.32-2.28-2.38-3.89 4.15 1.39.71Z"
        fill="#fff"
      />
    </svg>
  );
}

function ZaloIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.icon}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <text x="12" y="14.85" textAnchor="middle" className={styles.zaloText}>
        Zalo
      </text>
    </svg>
  );
}

export default function FloatingContact() {
  const { messenger, zalo } = siteConfig.contact.socialLinks;

  return (
    <div className={styles.root} role="navigation" aria-label="Liên hệ nhanh Crown English">
      <a
        href={messenger.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nhắn tin Crown English qua Messenger"
        className={`${styles.button} ${styles.messenger}`}
      >
        <span className={styles.iconDisc}>
          <MessengerIcon />
        </span>
        <span className={styles.label}>{messenger.label}</span>
      </a>

      <a
        href={zalo.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Liên hệ Crown English qua Zalo OA ${zalo.phone}`}
        className={`${styles.button} ${styles.zalo}`}
      >
        <span className={styles.iconDisc}>
          <ZaloIcon />
        </span>
        <span className={styles.label}>{zalo.label}</span>
      </a>
    </div>
  );
}
