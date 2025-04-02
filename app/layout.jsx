import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Elias - Web Designer and Front-end Developer',
  description: 'Portfolio of Elias, a web designer and front-end developer specializing in creating responsive and creative websites.',
  keywords: ['web design', 'front-end development', 'React', 'Next.js', 'portfolio'],
  openGraph: {
    title: 'Elias - Web Designer and Front-end Developer',
    description: 'Portfolio of Elias, a web designer and front-end developer specializing in creating responsive and creative websites.',
    images: ['https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=2000'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elias - Web Designer and Front-end Developer',
    description: 'Portfolio of Elias, a web designer and front-end developer specializing in creating responsive and creative websites.',
    images: ['https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=2000'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}