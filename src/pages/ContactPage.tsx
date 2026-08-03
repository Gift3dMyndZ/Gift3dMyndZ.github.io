import { createElement } from 'react';
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

const contactMethods = [
  {
    label: 'GitHub',
    value: 'Gift3dMyndZ',
    url: 'https://github.com/Gift3dMyndZ',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'Joshua Wolfe',
    url: 'https://www.linkedin.com/in/mrjoshuawolfe',
    icon: Linkedin,
  },
  {
    label: 'Email',
    value: 'Start a conversation',
    url: 'mailto:hunterwolfej@icloud.com',
    icon: Mail,
  },
];

export function ContactPage() {
  return (
    <section className="page professional-page">
      <header className="panel professional-hero contact-hero">
        <p className="eyebrow">START A CONVERSATION</p>
        <h2>Contact</h2>

        <p className="lead">
          Available for conversations regarding cloud
          engineering leadership, platform reliability,
          observability, technical management, and
          engineering delivery.
        </p>
      </header>

      <div className="contact-method-grid">
        {contactMethods.map(method => {
          const Icon = method.icon;
          const external =
            !method.url.startsWith('mailto:');

          return createElement(
            'a',
            {
              className: 'panel contact-method',
              href: method.url,
              key: method.label,
              target: external ? '_blank' : undefined,
              rel: external
                ? 'noopener noreferrer'
                : undefined,
            },
            <Icon aria-hidden="true" size={25} />,
            <div>
              <span>{method.label}</span>
              <strong>{method.value}</strong>
            </div>,
            <ExternalLink
              aria-hidden="true"
              className="contact-method-arrow"
              size={17}
            />,
          );
        })}
      </div>
    </section>
  );
}
