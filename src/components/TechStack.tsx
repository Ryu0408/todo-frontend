// src/components/TechStack.tsx
import './TechStack.css';

type StackGroup = {
  title: string;
  items: string[];
};

const stackGroups: StackGroup[] = [
  {
    title: 'Frontend',
    items: ['React', 'Vue.js', 'Next.js', 'Vite', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Backend',
    items: [
      'Node.js',
      'Express.js',
      'Nest.js',
      'Spring Boot',
      'PHP',
      'Laravel',
      'CodeIgniter',
      'ASP.NET',
      'Python',
    ],
  },
  {
    title: 'Database',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'MariaDB', 'OracleDB', 'Redis'],
  },
  {
    title: 'DevOps / Infra',
    items: [
      'AWS Lambda',
      'AWS Route 53',
      'AWS S3',
      'AWS EC2',
      'AWS RDS',
      'Docker',
      'Jenkins',
      'GraphQL',
      'Nginx',
      'Apache',
      'Linux',
      'GitHub',
    ],
  },
  {
    title: 'Mobile',
    items: ['React Native', 'Expo', 'Kotlin', 'Swift'],
  },
  {
    title: 'Collaboration',
    items: ['Jira', 'Figma', 'Slack', 'Notion', 'ChatGPT'],
  },
];

export default function TechStack() {
  return (
    <section className="stack-section" id="stack">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <div className="stack-grid">
          {stackGroups.map((group) => (
            <div key={group.title} className="stack-group">
              <h3 className="group-title">{group.title}</h3>
              <div className="stack-items">
                {group.items.map((name) => (
                  <div key={name} className="stack-item">
                    <span className="stack-chip">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
