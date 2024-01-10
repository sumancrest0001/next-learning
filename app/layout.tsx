import { ReactNode } from 'react';
import './globals.css';
import MainHeader from '@/components/main-header';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};
interface RootLayoutProps {
children: ReactNode
}
export default function RootLayout({ children }: RootLayoutProps): React.ReactElement {
  return (
    <html lang="en">
      <body>

        <MainHeader />
        {children}
      </body>
    </html>
  );
}
