import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const socialPlatforms = [
  { name: "Facebook", Icon: Facebook },
  { name: "Instagram", Icon: Instagram },
  { name: "LinkedIn", Icon: Linkedin },
  { name: "YouTube", Icon: Youtube },
] as const;

type SocialMediaIconsProps = {
  inverse?: boolean;
};

export function SocialMediaIcons({ inverse = false }: SocialMediaIconsProps) {
  return (
    <div
      className={`social-media${inverse ? " social-media--inverse" : ""}`}
      role="group"
      aria-label="Social media profiles coming soon"
    >
      {socialPlatforms.map(({ name, Icon }) => (
        <span
          className="social-media__icon"
          title={`${name} profile coming soon`}
          key={name}
        >
          <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
          <span className="sr-only">{name} profile coming soon</span>
        </span>
      ))}
    </div>
  );
}
