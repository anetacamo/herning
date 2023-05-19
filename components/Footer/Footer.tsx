import styles from './Footer.module.scss';
import IconHolder from '../IconHolder/IconHolder';
import { menuItems } from '../../types/menu.type';
import sections from '../../texts/footer.json';

export default function Footer() {
  return (
    <footer className='bg-black'>
      <section className={styles.footer}>
        {sections.map((s, index) => (
          <div className={styles.column} key={index}>
            <h3>{s.title}</h3>
            {s.text && <p>{s.text}</p>}

            {s.links &&
              s.links.map((line) => (
                <IconHolder name={line.name} link={line.link} />
              ))}

            {index === 0 &&
              menuItems.map((item, index: number) => (
                <IconHolder name={item.name} link={item.link} key={index} />
              ))}

            {s.addresses &&
              s.addresses.map((adress) =>
                adress.map((line, index) => (
                  <p
                    className={`${styles.line} ${
                      index === 0 && styles.highlighted
                    }`}
                  >
                    {line}
                  </p>
                ))
              )}
            <div className='divider' style={{ marginLeft: 0 }}></div>
          </div>
        ))}
      </section>
    </footer>
  );
}
