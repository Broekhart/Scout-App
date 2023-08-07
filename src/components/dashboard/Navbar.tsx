import styles from '@/styles/dashboard/Navbar.module.css';
import Image from 'next/image';
import { FiLogOut } from 'react-icons/fi';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { deleteCookie } from 'cookies-next';
import links from '@/shared/variables/links';

const Navbar = () => {
  const { asPath, push } = useRouter();

  const logoutUser = async () => {
    deleteCookie('jwt');
    push('/authentication');
  };

  return (
    <section className='white_bg'>
      <div className={`${styles.navbar} flex_column`}>
        <Image src='/logo.png' height={70} width={70} alt='logo' className={styles.image} />
        <div className='flex_column desktop' style={{ gap: '20px', alignSelf: 'stretch' }}>
          {links.map((link) => (
            <Link
              key={link.slug}
              href={link.slug}
              className={asPath === link.slug ? `button ${styles.active}` : 'button'}>
              {link.icon} {link.content}
            </Link>
          ))}
        </div>
        <div className='mobile flex' style={{ gap: '20px' }}>
          {links.map((link) => (
            <Link href={link.slug} key={link.slug} className={asPath === link.slug ? styles.active : ''}>
              {link.icon}
            </Link>
          ))}
        </div>
        <FiLogOut onClick={logoutUser} />
      </div>
    </section>
  );
};

export default Navbar;
