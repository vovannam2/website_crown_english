import Image from "next/image";
import {
  ArrowUpRight,
  ChevronRight,
  Clock3,
  GraduationCap,
  Headset,
  LifeBuoy,
  MailCheck,
  MapPin,
  MessageCircleMore,
  Navigation,
  PhoneCall,
  Share2,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./contact.module.css";

import type {
  ContactActionProps,
  ContactPageProps,
  ContactRow,
  LocationFact,
} from "@/types/contact";

function ContactAction({
  href,
  children,
  variant = "primary",
}: ContactActionProps) {
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
      icon: Headset,
      description: "Tư vấn khóa học, lịch học và các thông tin liên quan.",
      links: [
        { value: data.center.hotline, href: data.center.phoneHref },
        { value: data.center.zaloOA, href: phoneHrefFromDisplayNumber(data.center.zaloOA) },
      ],
    },
    {
      label: "Email",
      icon: MailCheck,
      description: "Gửi câu hỏi, yêu cầu tư vấn hoặc hợp tác.",
      links: [{ value: data.center.email, href: data.center.emailHref }],
    },
    {
      label: "Zalo",
      icon: MessageCircleMore,
      description: "Nhắn tin trực tiếp qua Zalo để được hỗ trợ nhanh nhất.",
      links: [
        { value: data.center.zaloOA, href: data.center.zaloUrl },
        { value: data.center.zaloHotline, href: data.center.zaloHotlineUrl },
      ],
    },
    {
      label: "Fanpage",
      icon: Share2,
      description: "Cập nhật thông tin khóa học, ưu đãi và hoạt động mới nhất.",
      links: [{ value: "facebook.com/ieltsgiaotiepcrown", href: data.center.fanpage }],
    },
  ];

  const locationFacts: LocationFact[] = [
    { label: "Thời gian hoạt động", value: data.center.workingHours, icon: Clock3 },
    { label: "Tư vấn khóa học", value: "Miễn phí", icon: GraduationCap },
    { label: "Hỗ trợ học viên", value: "Trực tiếp tại trung tâm hoặc Online", icon: LifeBuoy },
  ];

  return (
    <main className={styles.page}>
      <section className={styles.contactHero} aria-labelledby="contact-title">
        <Container className={styles.contactShell}>
          <div className={styles.heroTop}>
            <Reveal className={styles.heroIntro}>
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
                src="/images/design/crown-english-center-daytime.png"
                alt="Mặt tiền trung tâm Crown English tại Nguyễn Gia Trí"
                fill
                priority
                sizes="(min-width: 1024px) 540px, 92vw"
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
          </div>

          <div className={styles.contactGrid}>
            <div className={styles.contactCards} aria-label="Các kênh liên hệ Crown English">
              {contactRows.map((item, index) => {
                const Icon = item.icon;
                const primaryLink = item.links[0];
                return (
                  <Reveal key={item.label} delay={index * 55} className={styles.contactCard}>
                    <span className={styles.contactIcon}>
                      <Icon aria-hidden size={25} strokeWidth={2.2} />
                    </span>
                    <div className={styles.contactCardBody}>
                      <h2>{item.label}</h2>
                      <div className={styles.contactValues}>
                        {item.links.map((link) => (
                          <a key={link.value} href={link.href} title={link.value} {...externalLinkProps(link.href)}>
                            {link.value}
                          </a>
                        ))}
                      </div>
                      <p>{item.description}</p>
                    </div>
                    <a
                      href={primaryLink.href}
                      title={primaryLink.value}
                      className={styles.contactCardAction}
                      {...externalLinkProps(primaryLink.href)}
                    >
                      <ChevronRight aria-hidden size={20} strokeWidth={2.4} />
                      <span className={styles.srOnly}>Mở {item.label}</span>
                    </a>
                  </Reveal>
                );
              })}
            </div>

            <Reveal preset="image" delay={120} className={styles.locationCard}>
              <div className={styles.locationHeader}>
                <span className={styles.locationIcon}>
                  <MapPin aria-hidden size={27} strokeWidth={2.35} />
                </span>
                <div>
                  <p>Địa chỉ trung tâm</p>
                  <strong>{data.center.address}</strong>
                </div>
                <a className={styles.directionLink} href={data.googleMaps.directUrl} target="_blank" rel="noopener noreferrer">
                  Xem đường đi
                  <ArrowUpRight aria-hidden size={17} strokeWidth={2.3} />
                </a>
              </div>

              <div className={styles.mapFrame}>
                <iframe
                  title="Bản đồ IELTS & Giao Tiếp Crown"
                  src={data.googleMaps.embedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className={styles.locationFacts}>
                {locationFacts.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <div key={fact.label} className={styles.locationFact}>
                      <Icon aria-hidden size={20} strokeWidth={2.25} />
                      <div>
                        <span>{fact.label}</span>
                        <strong>{fact.value}</strong>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}
