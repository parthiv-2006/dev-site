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
  return (
    <a className={`button button--${tone}`} href={href} rel={rel} target={target} download={download}>
      {label}
    </a>
  );
}

export default ActionButton;
