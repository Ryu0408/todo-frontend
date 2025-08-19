// src/components/TechStack.tsx
import "./TechStack.css";

type StackGroup = {
  title: string;
  items: string[];
};

const stackGroups: StackGroup[] = [
  {
    title: "Languages",
    items: [
      "Javascript",
      "Typescript", 
      "Java", 
      "Kotlin",
      "Swift",
      "Python",
      "PHP",
      "C++",
    ],
  },
  {
    title: "Frontend",
    items: [
      "ReactJS",
      "VueJS", 
      "NextJS", 
      "Redux",
      "GraphQL",
      "S-Components",
      "Tailwind"
    ],
  },
  {
    title: "Backend",
    items: [
      "Spring",
      "SpringBoot",
      "NodeJS",
      "ExpressJS",
      "CodeIgniter",
      "Laravel",
      "ASP.NET",
      "MyBatis",
      "RabbitMQ"
    ],
  },
  {
    title: "Database",
    items: [
      "MySQL",
      "MSSQL",
      "OracleDB",
      "MongoDB",
      "Redis"],
  },
  {
    title: "Data",
    items: [
      "Grafana",
      "Kafka",
      "Prometheus",
    ],
  },
    {
    title: "DevOps",
    items: [
      "Docker",
      "Kubernetes",
      "GitHub",
      "GitHub Actions",
      "Jenkins",
    ],
  },
  {
    title: "Infra",
    items: [
      "AWS Lambda",
      "AWS Route 53",
      "AWS S3",
      "AWS EC2",
      "AWS RDS",
      "AWS IAM",
      "API Gateway",
      "Nginx",
      "Apache",
      "Ubuntu",
      "CentOS",
      "Rocky Linux",
      "Windows Server",
    ],
  },
  {
    title: "Mobile",
    items: [
      "React Native",
      "Expo",
      "Swift",
      "Xcode",
      "Kotlin",
      "Android SDK"
    ],
  },
  {
    title: "Collaboration",
    items: [
      "Discord",
      "Slack",
      "Jira",
      "Notion",
      "Figma",
    ],
  },
];

/**
 * 아이콘 파일 경로 매핑 (public/icons/stacks/ 아래에 파일 두면 됨)
 * 예) public/icons/stacks/React-icon.svg
 * 존재하지 않는 키는 자동으로 첫 글자 배지로 대체됨.
 */
const iconMap: Record<string, string> = {
  // Languages
  "Javascript": "/icons/stacks/Javascript-icon.png",
  "Typescript": "/icons/stacks/Typescript-icon.png",
  "Java": "/icons/stacks/Java-icon.png",
  "Kotlin": "/icons/stacks/Kotlin-icon.svg",
  "Swift": "/icons/stacks/Swift-icon.png",
  "Python": "/icons/stacks/Python-icon.png",
  "PHP": "/icons/stacks/PHP-icon.png",
  "C++": "/icons/stacks/C++-icon.svg",

  // Frontend
  "ReactJS": "/icons/stacks/ReactJS-icon.svg",
  "VueJS": "/icons/stacks/VueJS-icon.png",
  "NextJS": "/icons/stacks/NextJS-icon.png",
  "Redux": "/icons/stacks/Redux-icon.png",
  "GraphQL": "/icons/stacks/GraphQL-icon.svg",
  "S-Components": "/icons/stacks/Styled-Components-icon.png",
  "Tailwind": "/icons/stacks/Tailwind-icon.png",

  // Backend
  "Spring": "/icons/stacks/Spring-icon.svg",
  "SpringBoot": "/icons/stacks/SpringBoot-icon.svg",
  "NodeJS": "/icons/stacks/NodeJS-icon.png",
  "ExpressJS": "/icons/stacks/ExpressJS-icon.svg",
  "CodeIgniter": "/icons/stacks/CodeIgniter-icon.png",
  "Laravel": "/icons/stacks/Laravel-icon.svg",
  "ASP.NET": "/icons/stacks/ASP.NET-icon.png",
  "MyBatis": "/icons/stacks/MyBatis-icon.png",
  "RabbitMQ": "/icons/stacks/RabbitMQ-icon.svg",

  // Database
  "MySQL": "/icons/stacks/MySQL-icon.png",
  "MSSQL": "/icons/stacks/MSSQL-icon.png",
  "OracleDB": "/icons/stacks/OracleDB-icon.png",
  "MongoDB": "/icons/stacks/MongoDB-icon.png",
  "Redis": "/icons/stacks/Redis-icon.svg",

  // Data
  "Grafana": "/icons/stacks/Grafana-icon.png",
  "Kafka": "/icons/stacks/Kafka-icon.svg",
  "Prometheus": "/icons/stacks/Prometheus-icon.svg",

  // DevOps
  "Docker": "/icons/stacks/Docker-icon.png",
  "Kubernetes": "/icons/stacks/Kubernetes-icon.svg",
  "GitHub": "/icons/stacks/GitHub-icon.png",
  "GitHub Actions": "/icons/stacks/GitHub-Actions-icon.png",
  "Jenkins": "/icons/stacks/Jenkins-icon.svg",

  // Infra
  "AWS Lambda": "/icons/stacks/AWS-Lambda-icon.svg",
  "AWS Route 53": "/icons/stacks/AWS-Route-53-icon.svg",
  "AWS S3": "/icons/stacks/AWS-S3-icon.svg",
  "AWS EC2": "/icons/stacks/AWS-EC2-icon.svg",
  "AWS RDS": "/icons/stacks/AWS-RDS-icon.svg",
  "AWS IAM": "/icons/stacks/AWS-IAM-icon.svg",
  "API Gateway": "/icons/stacks/API-Gateway-icon.svg",
  "Nginx": "/icons/stacks/Nginx-icon.svg",
  "Apache": "/icons/stacks/Apache-icon.svg",
  "Ubuntu": "/icons/stacks/Ubuntu-icon.svg",
  "CentOS": "/icons/stacks/CentOS-icon.svg",
  "Rocky Linux": "/icons/stacks/Rocky-Linux-icon.svg",
  "Windows Server": "/icons/stacks/Windows-Server-icon.png",

  // Mobile
  "React Native": "/icons/stacks/React-Native-icon.svg",
  "Expo": "/icons/stacks/Expo-icon.svg",
  "Xcode": "/icons/stacks/Xcode-icon.svg",
  "Android SDK": "/icons/stacks/Android-SDK-icon.svg",

  // Collaboration
  "Discord": "/icons/stacks/Discord-icon.svg",
  "Slack": "/icons/stacks/Slack-icon.svg",
  "Jira": "/icons/stacks/Jira-icon.svg",
  "Notion": "/icons/stacks/Notion-icon.svg",
  "Figma": "/icons/stacks/Figma-icon.svg",
};

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
                {group.items.map((name) => {
                  const src = iconMap[name];
                  return (
                    <div key={name} className="stack-item">
                      <div className="icon-circle" title={name}>
                        {src ? (
                          <img src={src} alt={`${name} icon`} />
                        ) : (
                          <span className="letter-badge" aria-hidden>
                            {name[0]}
                          </span>
                        )}
                      </div>
                      <span className="icon-label">{name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
