import Image from "next/image";
import styles from "./Footer.module.scss";

import IconHolder from "../IconHolder/IconHolder";
import sections from "../../texts/footer.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreativeCommons,
  faCreativeCommonsBy,
  faCreativeCommonsSa,
  faCreativeCommonsNc,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black">
      <section className={styles.footer}>
        {sections.map((s, index) => (
          <div className={styles.column} key={index}>
            <h3 className="pink">{s.title}</h3>
            {s.text && <p>{s.text}</p>}

            {s.bulletlinks &&
              s.bulletlinks.map((line, index: number) => (
                <IconHolder name={line.name} link={line.link} key={index} />
              ))}

            {s.lines && (
              <p
                dangerouslySetInnerHTML={{
                  __html: s.lines,
                }}
                className={`${styles.line}`}
              ></p>
            )}

            {s.image && (
              <div className={styles.imageHolder}>
                <Image
                  className={styles.image}
                  src={s.image}
                  alt={"logo"}
                  layout="fill"
                />
              </div>
            )}

            {index === sections.length - 1 && (
              <div style={{ marginTop: 24 }}>
                <FontAwesomeIcon
                  icon={faCreativeCommons}
                  className={styles.icon}
                />
                <FontAwesomeIcon
                  icon={faCreativeCommonsSa}
                  className={styles.icon}
                />
                <FontAwesomeIcon
                  icon={faCreativeCommonsBy}
                  className={styles.icon}
                />
                <FontAwesomeIcon
                  icon={faCreativeCommonsNc}
                  className={styles.icon}
                />
              </div>
            )}

            <div className="divider" style={{ marginLeft: 0 }}></div>
          </div>
        ))}
      </section>
    </footer>
  );
}
