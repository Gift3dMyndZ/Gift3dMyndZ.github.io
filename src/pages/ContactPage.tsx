import { createElement } from 'react';
import {
  ExternalLink,
  FileText,
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
    label: 'Executive Resume',
    value: 'View or download PDF',
    url: '/joshua-wolfe-resume.pdf',
    icon: FileText,
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
        <p className="eyebrow">
          START A CONVERSATION
        </p>

        <h2>Contact</h2>

        <p className="lead">
          Available for conversations regarding software
          engineering, cloud platform leadership, platform
          reliability, observability, distributed systems,
          and technical delivery.
        </p>
      </header>

      <div className="contact-method-grid">
        {contactMethods.map(method => {
          const Icon = method.icon;
          const isEmail =
            method.url.startsWith('mailto:');
          const isDownload =
            method.label === 'Executive Resume';
          const external = !isEmail;

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
              download: isDownload
                ? 'Joshua-Wolfe-Executive-Resume.pdf'
                : undefined,
              'aria-label':
                method.label === 'Executive Resume'
                  ? 'Download Joshua Wolfe executive resume PDF'
                  : `${method.label}: ${method.value}`,
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