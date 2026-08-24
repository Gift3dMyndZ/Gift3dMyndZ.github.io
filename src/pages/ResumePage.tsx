import { createElement } from 'react';
import { Download } from 'lucide-react';

export function ResumePage() {
  const downloadLink = createElement(
    'a',
    {
      'aria-label':
        'Download Joshua Wolfe executive resume PDF',
      className: 'button primary',
      download: 'Joshua-Wolfe-Executive-Resume.pdf',
      href: '/joshua-wolfe-resume.pdf',
    },
    <Download aria-hidden="true" size={17} />,
    'Download Executive Resume',
  );

  return (
    <section className="page professional-page">
      <header className="panel professional-hero resume-hero">
        <div>
          <p className="eyebrow">
            EXECUTIVE ENGINEERING PROFILE
          </p>

          <h2>Joshua Wolfe</h2>

          <p className="lead">
            Senior software engineer and cloud platform
            leader delivering cloud-native applications,
            distributed systems, platform reliability,
            observability, and engineering leadership across
            enterprise environments.
          </p>
        </div>

        {downloadLink}
      </header>

      <section className="resume-layout">
        <article className="panel resume-section">
          <p className="eyebrow">
            EXECUTIVE PROFILE
          </p>

          <h3>
            Software Engineering and Platform Leadership
          </h3>

          <p>
            Hands-on engineering leader with experience
            delivering resilient cloud platforms and
            enterprise technology solutions across AWS,
            Azure, GCP, and Kubernetes.
          </p>

          <p>
            Combines Python, Java, FastAPI, application
            architecture, observability, distributed
            systems, enterprise modernization, and incident
            leadership with disciplined technical delivery.
          </p>
        </article>

        <article className="panel resume-section">
          <p className="eyebrow">
            LEADERSHIP IMPACT
          </p>

          <h3>
            Engineering Leadership and Incident Command
          </h3>

          <ul>
            <li>
              Led and mentored five cloud engineers
              supporting enterprise cloud, data, SaaS, and
              platform services.
            </li>

            <li>
              Served as Incident Commander during a
              47-minute SEV-1 Kubernetes recovery affecting
              approximately 18,000 users.
            </li>

            <li>
              Coordinated response to HTTP 503 errors, API
              latency, elevated 5xx rates, memory pressure,
              and OOMKilled events.
            </li>

            <li>
              Directed root-cause analysis, remediation,
              rollback controls, traffic shifting, canary
              testing, and automated recovery criteria.
            </li>
          </ul>
        </article>

        <article className="panel resume-section">
          <p className="eyebrow">
            SOFTWARE ENGINEERING
          </p>

          <h3>
            Applications, APIs, and Distributed Systems
          </h3>

          <ul>
            <li>
              Python, C++23, Java, TypeScript, SQL, Bash,
              FastAPI, REST APIs, OpenAPI, Pydantic, Pytest,
              and WebSockets.
            </li>

            <li>
              Modular application architecture, dependency
              injection, service layers, asynchronous
              processing, event-driven workflows, and
              provider abstractions.
            </li>

            <li>
              Test-driven development, unit testing,
              integration testing, contract validation,
              failure-path testing, and automated quality
              gates.
            </li>

            <li>
              Distributed tracing, request correlation,
              structured errors, telemetry-driven
              development, and production diagnostics.
            </li>
          </ul>
        </article>

        <article className="panel resume-section">
          <p className="eyebrow">
            ENTERPRISE MODERNIZATION
          </p>

          <h3>
            Legacy Applications and Cloud Migration
          </h3>

          <ul>
            <li>
              Enterprise Java and EJB legacy application
              assessment, modernization, and migration
              planning.
            </li>

            <li>
              Monolith decomposition, service extraction,
              REST API enablement, dependency analysis, and
              compatibility validation.
            </li>

            <li>
              Incremental modernization using controlled
              migration patterns, containerization, and
              cloud-ready service boundaries.
            </li>

            <li>
              Migration testing, deployment validation,
              operational risk management, and staged
              production transition.
            </li>
          </ul>
        </article>

        <article className="panel resume-section">
          <p className="eyebrow">
            CLOUD AND PLATFORM ENGINEERING
          </p>

          <h3>
            Infrastructure, Reliability, and Operations
          </h3>

          <ul>
            <li>
              AWS, Azure, GCP, Kubernetes, EKS, ECS,
              Docker, Linux, RHEL, VMware, Terraform, and
              AWS CloudFormation.
            </li>

            <li>
              Infrastructure provisioning, identity
              integration, autoscaling, load balancing,
              patch management, and controlled change
              execution.
            </li>

            <li>
              CI/CD, deployment automation, environment
              promotion, canary deployments, traffic
              shifting, and rollback controls.
            </li>

            <li>
              Cloud automation through command-line tools,
              shell scripting, PowerShell, scheduled jobs,
              and infrastructure-as-code practices.
            </li>
          </ul>
        </article>

        <article className="panel resume-section">
          <p className="eyebrow">
            OBSERVABILITY AND SERVICE HEALTH
          </p>

          <h3>
            Monitoring, Telemetry, and Operations
          </h3>

          <ul>
            <li>
              Prometheus, PromQL, Grafana, CloudWatch,
              Datadog, OpenTelemetry, and synthetic
              monitoring.
            </li>

            <li>
              Distributed tracing, trace correlation,
              operational dashboards, log analysis, and
              service-performance investigation.
            </li>

            <li>
              Alert-noise reduction, service-level
              indicators, capacity planning, and production
              health analysis.
            </li>

            <li>
              ServiceNow alerts, investigations, REST APIs,
              operational integration, and incident
              workflow support.
            </li>
          </ul>
        </article>

        <article className="panel resume-section">
          <p className="eyebrow">
            DATA AND AI ENGINEERING
          </p>

          <h3>
            Distributed Data and Intelligent Systems
          </h3>

          <ul>
            <li>
              Spark, AWS Glue, Kinesis, Hadoop, HDFS,
              MapReduce, data-lake architecture, and data
              governance.
            </li>

            <li>
              TensorFlow, Keras, LSTM experimentation,
              model evaluation, behavioral telemetry, and
              adaptive AI systems.
            </li>

            <li>
              AI orchestration, local inference,
              OpenAI-compatible APIs, provider interfaces,
              llama.cpp, and GGUF architecture.
            </li>
          </ul>
        </article>

        <article className="panel resume-section">
          <p className="eyebrow">
            PROFESSIONAL EXPERIENCE
          </p>

          <h3>
            Cloud Engineering and Enterprise Systems
          </h3>

          <ul>
            <li>
              Advanced from Cloud Solutions Engineer to
              Senior Cloud Engineering Supervisor at 2nd
              Watch, acquired by Ollion.
            </li>

            <li>
              Supported enterprise cloud, data, SaaS, and
              platform services across AWS, Azure, GCP, and
              Kubernetes environments.
            </li>

            <li>
              Administered enterprise Windows and Linux
              systems on VMware infrastructure supporting
              mission-critical naval shipbuilding
              operations.
            </li>

            <li>
              Managed identity, authentication, patching,
              backups, disaster recovery, secure access,
              and automated administration workflows.
            </li>
          </ul>
        </article>

        <article className="panel resume-section">
          <p className="eyebrow">
            SELECTED SOFTWARE PORTFOLIO
          </p>

          <h3>
            Independent Engineering Delivery
          </h3>

          <ul>
            <li>
              Athena Command Engine, a native C++23 AI
              orchestration service with a Drogon REST API,
              replaceable providers, structured errors,
              request correlation, and automated testing.
            </li>

            <li>
              Aeronautics Reliability Platform, a
              Python-based application with lifecycle
              validation, asynchronous workflows,
              Prometheus metrics, and automated tests.
            </li>

            <li>
              Platform Engineering Command Center, a React
              and TypeScript dashboard presenting
              repository health, workflow status, releases,
              CI/CD telemetry, and engineering case studies.
            </li>

            <li>
              Labyrinth of Tartarus, a real-time adaptive
              AI platform using Python, FastAPI, WebSockets,
              SQLite, behavioral telemetry, and
              containerized delivery.
            </li>

            <li>
              Machine-learning, distributed-data,
              modernization, and smart-contract engineering
              projects covering architecture, validation,
              migration, and failure analysis.
            </li>
          </ul>
        </article>

        <article className="panel resume-section">
          <p className="eyebrow">
            EDUCATION
          </p>

          <h3>
            Master of Science in Data Science
          </h3>

          <ul>
            <li>
              Master of Science in Data Science, University
              of Phoenix, completed March 2026.
            </li>

            <li>
              Bachelor of Science in IT Administration and
              Management, University of Phoenix, completed
              May 2019.
            </li>

            <li>
              Professional development in Kubernetes,
              microservices, Python automation, SQL Server,
              and machine learning.
            </li>
          </ul>
        </article>
      </section>
    </section>
  );
}