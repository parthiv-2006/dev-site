import { useState } from 'react';
import { contact } from '../content/data';

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // Fallback: open mailto if copy fails
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <button
      type="button"
      className={`button ${copied ? 'button--success' : 'button--primary'}`}
      onClick={handleClick}
      aria-live="polite"
    >
      {copied ? 'Copied to clipboard! ✓' : 'Copy Email'}
    </button>
  );
}
