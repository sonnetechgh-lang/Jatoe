import Image from "next/image";
import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={inverse ? "logo logo--inverse" : "logo"} aria-label="Jatoe Systems home">
      <span className="logo__crop" aria-hidden="true">
        <Image
          className="logo__image"
          src="/images/Logo.PNG"
          alt=""
          width={5000}
          height={5000}
          priority
          sizes="136px"
        />
      </span>
    </Link>
  );
}
