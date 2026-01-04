type ButtonTone = 'primary' | 'ghost';

type ActionButtonProps = {
  href: string;
  label: string;
  tone?: ButtonTone;
  external?: boolean;
};

function ActionButton({ href, label, tone = 'primary', external = false }: ActionButtonProps) {
  const rel = external ? 'noreferrer noopener' : undefined;
  const target = external ? '_blank' : undefined;
  return (
    <a className={`button button--${tone}`} href={href} rel={rel} target={target}>
      {label}
    </a>
  );
}

export default ActionButton;
