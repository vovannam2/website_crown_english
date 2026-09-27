import Image from "next/image";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  PhoneCall,
  Send,
} from "lucide-react";
import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import type { ContactPageData } from "@/data/contact";
import styles from "./contact.module.css";

type ContactPageProps = {
  readonly data: ContactPageData;
};

type ContactCard = {
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly action: string;
  readonly icon: typeof PhoneCall;
  readonly tone: "red" | "blue";
};

function ContactAction({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`${styles.actionButton} ${variant === "secondary" ? styles.secondaryButton : ""}`}
    >
      {children}
      <ArrowUpRight aria-hidden size={18} strokeWidth={2.4} />
    </a>
  );
}

export default function ContactPage({ data }: ContactPageProps) {
  const contactCards: ContactCard[] = [
    {
      label: "Hotline",
      value: data.center.hotline,
      href: data.center.phoneHref,
      action: "Gọi ngay",
      icon: PhoneCall,
      tone: "red",
    },
    {
      label: "Email",
      value: data.center.email,
      href: data.center.emailHref,
      action: "Gửi email",
      icon: Mail,
      tone: "blue",
    },
    {
      label: "Zalo OA",
      value: data.center.zaloOA,
      href: data.center.zaloUrl,
      action: "Nhắn Zalo",
      icon: MessageCircle,
      tone: "blue",
    },
    {
      label: "Fanpage",
      value: "facebook.com/ieltsgiaotiepcrown",
      href: data.center.fanpage,
      action: "Mở Fanpage",
      icon: Send,
      tone: "blue",
    },
  ];

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="contact-title">
        <Container className={styles.heroInner}>
          <Reveal className={styles.heroCopy}>
            <p className={styles.eyebrow}>{data.hero.eyebrow}</p>
            <h1 id="contact-title">{data.hero.title}</h1>
            <p>{data.hero.description}</p>
            <div className={styles.heroActions}>
              <ContactAction href={data.center.phoneHref}>
                <PhoneCall aria-hidden size={19} strokeWidth={2.4} />
                {data.center.hotline}
              </ContactAction>
              <ContactAction href={data.googleMaps.directUrl} variant="secondary">
                <Navigation aria-hidden size={19} strokeWidth={2.4} />
                Chỉ đường
              </ContactAction>
            </div>
          </Reveal>

          <Reveal preset="image" delay={120} className={styles.heroPanel}>
            <Image
              src="/images/Design/AnhTrungTam.webp"
              alt="Mặt tiền trung tâm Crown English tại Nguyễn Gia Trí"
              fill
              priority
              sizes="(min-width: 1024px) 520px, 92vw"
              className={styles.centerImage}
            />
            <div className={styles.photoCaption}>
              <div>
                <span>Địa chỉ</span>
                <strong>{data.center.googleMapsName}</strong>
                <p>{data.center.address}</p>
              </div>
              <MapPin aria-hidden size={24} strokeWidth={2.4} />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className={styles.cardsSection} aria-labelledby="contact-channels-title">
        <Container>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Kênh liên hệ</p>
            <h2 id="contact-channels-title">Chọn cách Crown có thể hỗ trợ bạn nhanh nhất</h2>
          </div>

          <div className={styles.cardGrid}>
            {contactCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.label} delay={index * 70}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`${styles.contactCard} ${styles[item.tone]}`}
                    aria-label={`${item.action} ${item.label} Crown English`}
                  >
                    <span className={styles.cardIcon}>
                      <Icon aria-hidden size={24} strokeWidth={2.35} />
                    </span>
                    <span className={styles.cardLabel}>{item.label}</span>
                    <strong>{item.value}</strong>
                    <span className={styles.cardAction}>
                      {item.action}
                      <ArrowUpRight aria-hidden size={17} strokeWidth={2.5} />
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className={styles.mapSection} aria-labelledby="map-title">
        <Container className={styles.mapInner}>
          <Reveal className={styles.mapCopy}>
            <p className={styles.eyebrow}>Google Maps</p>
            <h2 id="map-title">Đến Crown English tại Nguyễn Gia Trí</h2>
            <p>{data.center.address}</p>
            <div className={styles.infoRows}>
              <div>
                <Clock3 aria-hidden size={18} strokeWidth={2.3} />
                <span>{data.center.workingHours}</span>
              </div>
              <div>
                <Mail aria-hidden size={18} strokeWidth={2.3} />
                <span>{data.center.email}</span>
              </div>
            </div>
            <ul>
              {data.visitTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
            <ContactAction href={data.googleMaps.directUrl}>
              <Navigation aria-hidden size={19} strokeWidth={2.4} />
              Mở Google Maps
            </ContactAction>
          </Reveal>

          <Reveal preset="image" delay={120} className={styles.mapFrame}>
            <iframe
              title="Bản đồ IELTS & Giao Tiếp Crown"
              src={data.googleMaps.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
