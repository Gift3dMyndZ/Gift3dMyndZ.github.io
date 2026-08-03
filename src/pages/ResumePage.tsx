import { createElement } from 'react';
import { Download } from 'lucide-react';

export function ResumePage() {
  const downloadLink = createElement(
    'a',
    {
      className: 'button primary',
      href: '/joshua-wolfe-resume.pdf',
      download: true,
    },
    <Download aria-hidden="true" size={17} />,
    'Download Resume',
  );

  return (
    <section className="page professional-page">
      <header className="panel professional-hero resume-hero">
        <div>
          <p className="eyebrow">PROFESSIONAL PROFILE</p>
          <h2>Joshua Wolfe</h2>

          <p className="lead">
            Cloud engineering leader and hands-on platform
            engineer with experience across people management,
            reliability, observability, software development,
            data engineering, and machine learning.
          </p>
        </div>

        {downloadLink}
      </header>

      <section className="resume-layout">
        <article className="panel resume-section">
          <p className="eyebrow">LEADERSHIP</p>
          <h3>Cloud Engineering Management</h3>

          <ul>
            <li>
              Managed 36 Cloud Solution Engineers with direct
              people-management responsibilities.
            </li>
            <li>
              Used operational analytics to monitor delivery,
              identify support needs, and guide team priorities.
            </li>
            <li>
              Delivered mentoring, technical enablement, and
              incident leadership.
            </li>
          </ul>
        </article>

        <article className="panel resume-section">
          <p className="eyebrow">PLATFORM ENGINEERING</p>
          <h3>Cloud, Reliability, and Operations</h3>

          <ul>
            <li>
              AWS and Azure operations, identity integrations,
              Kubernetes, Docker, EKS, and ECS.
            </li>
            <li>
              Incident command, root-cause analysis, patch
              management, maintenance windows, and automation.
            </li>
            <li>
              Grafana, OpenTelemetry, ServiceNow, synthetic
              monitoring, and alert-noise reduction.
            </li>
          </ul>
        </article>

        <article className="panel resume-section">
          <p className="eyebrow">SOFTWARE AND DATA</p>
          <h3>Engineering Depth</h3>

          <ul>
            <li>
              Python, Java, FastAPI, WebSockets, React,
              TypeScript, SQLite, and REST APIs.
            </li>
            <li>
              Spark, AWS Glue, Kinesis, Hadoop, HDFS,
              MapReduce, and data-lake architecture.
            </li>
            <li>
              TensorFlow, Keras, LSTM development, model
              evaluation, and behavioral telemetry.
            </li>
          </ul>
        </article>

        <article className="panel resume-section">
          <p className="eyebrow">EDUCATION</p>
          <h3>Master’s in Data Science</h3>

          <p>
            Graduate-level foundation in analytical methods,
            machine learning, data architecture, and technical
            problem solving.
          </p>
        </article>

        <article className="panel resume-section">
          <p className="eyebrow">FLAGSHIP PROJECTS</p>
          <h3>Independent Engineering Delivery</h3>

          <ul>
            <li>
              Labyrinth of Tartarus adaptive AI simulation.
            </li>
            <li>
              Aeronautics Reliability analytical workflow.
            </li>
            <li>
              Machine-learning and distributed-data projects.
            </li>
            <li>
              Smart-contract validation and failure analysis.
            </li>
          </ul>
        </article>
      </section>
    </section>
  );
}
