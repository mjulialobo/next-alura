import NextLink from "next/link";

export type LinksProps = {
  children: any;
  href: string;
};

export default function Link({ children, href, ...props }: LinksProps) {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  );
}
