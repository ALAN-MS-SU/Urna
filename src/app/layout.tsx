import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Urna",
  description: "Urna de votação",
  // icons:[{ rel:'icon', url:"./favicon.ico"}]
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
  <head>
  </head>
      <body>
        {children}
      </body>
    </html>
  );
}
