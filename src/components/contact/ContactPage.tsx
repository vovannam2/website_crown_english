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

type ContactActionLink = {
  readonly value: string;
  readonly href: string;
};

type ContactRow = {
  readonly label: string;
  readonly icon: typeof PhoneCall;
  readonly links: readonly ContactActionLink[];
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

function externalLinkProps(href: string) {
  return href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

function phoneHrefFromDisplayNumber(phone: string) {
  return `tel:${phone.replace(/\D/g, "")}`;
}

export default function ContactPage({ data }: ContactPageProps) {
  const contactRows: ContactRow[] = [
    {
      label: "Hotline",
      icon: PhoneCall,
      links: [
        { value: data.center.hotline, href: data.center.phoneHref },
        { value: data.center.zaloOA, href: phoneHrefFromDisplayNumber(data.center.zaloOA) },
      ],
    },
    {
      label: "Email",
      icon: Mail,
      links: [{ value: data.center.email, href: data.center.emailHref }],
    },
    {
      label: "Zalo",
      icon: MessageCircle,
      links: [
        { value: data.center.zaloOA, href: data.center.zaloUrl },
        { value: data.center.zaloHotline, href: data.center.zaloHotlineUrl },
      ],
    },
    {
      label: "Fanpage",
      icon: Send,
      links: [{ value: "facebook.com/ieltsgiaotiepcrown", href: data.center.fanpage }],
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
              src="/images/Design/AnhTrungTamMoi.png"
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
            <h2 id="contact-channels-title">Liên hệ Crown English</h2>
          </div>

          <Reveal className={styles.contactPanel}>
            <div className={styles.contactPanelHeader}>
              <p>Thông tin liên hệ</p>
              <span>Hotline, Zalo, Email và Fanpage chính thức</span>
            </div>
            <div className={styles.contactList}>
              {contactRows.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.label} className={styles.contactRow} aria-label={`${item.label} Crown English`}>
                    <div className={styles.contactRowMain}>
                      <span className={styles.contactRowIcon}>
                        <Icon aria-hidden size={22} strokeWidth={2.35} />
                      </span>
                      <div className={styles.contactRowText}>
                        <span className={styles.contactRowTitle}>{item.label}</span>
                        <div className={styles.contactRowValues}>
                          {item.links.map((link) => (
                            <a key={link.value} href={link.href} title={link.value} {...externalLinkProps(link.href)}>
                              {link.value}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </Reveal>
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
