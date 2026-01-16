import { trackExternalLink, trackDownload } from '../utils/analytics';

type ButtonTone = 'primary' | 'ghost';

type ActionButtonProps = {
  href: string;
  label: string;
  tone?: ButtonTone;
  external?: boolean;
  download?: boolean | string;
};

function ActionButton({ href, label, tone = 'primary', external = false, download }: ActionButtonProps) {
  const rel = external ? 'noreferrer noopener' : undefined;
  const target = external ? '_blank' : undefined;
  
  const handleClick = () => {
    if (download) {
      trackDownload(typeof download === 'string' ? download : label);
    } else if (external) {
      trackExternalLink(href);
    }
  };

  return (
    <a
      className={`button button--${tone}`}
      href={href}
      rel={rel}
      target={target}
      download={download}
      onClick={handleClick}
      aria-label={label}
    >
      {label}
    </a>
  );
}

export default ActionButton;
