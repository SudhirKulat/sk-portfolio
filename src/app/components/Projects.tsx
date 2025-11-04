"use client";

import ReadMore from "./ReadMore";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Cortex Audit",
    desc: "Cortex is a platform used by Deloitte Data Specialists and Auditors to assist their clients by analyzing their financial data, identifying patterns, and detecting hazards such as fraudulent inputs or transactions that exceed an ideal threshold value. Platform has diﬀerent modules which are built using React js which consumes API which are developed on .NET core and azure services. Cortex is in charge of extracting client data from diﬀerent client data sources (ERP systems such as SAP, Oracle, and Sailpoint), modeling the data, cleaning it up, and then creating actionable output in the form of spreadsheets or data visualizations that can be utilized for audit purposes.",
    tech: ["React", "Redux", "Enzyme", ".NET CORE", "Azure services"],
    organization: "Deloitte",
  },
  {
    title: "Connext",
    desc: "Connext is an application used by agent and agency for handling policies of customers. This appliaction provides admin dashboard for managing the policy preference for users",
    tech: ["React", "Redux", "Typescript", "Java", "AWS"],
    organization: "Mphasis",
  },
  {
    title: "Open Access Funding",
    desc: "Platform for publishing and paying the research artical",
    tech: [
      "Velocity template",
      "CSS",
      "jQuery",
      "REST API",
      "Oracle",
      "Spring Boot",
    ],
    organization: "SpringerNature",
  },
  {
    title: "Macmillan Education Australlia",
    desc: "Online e-commerce web application for selling educational books in AU and NZ",
    organization: "SpringerNature",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Java", "Spring Boot"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section pt-10">
      <Reveal>
        <h2 className="text-3xl font-bold mb-8 text-primary">Projects</h2>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <Reveal key={i} delay={i * 0.2}>
            <div className="bg-secondary rounded-2xl p-6 shadow-md hover:shadow-primary/10 transition hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-[#2AB5B5]">
                {proj.title}
              </h3>
              <h3 className="text-xs font-semibold mb-2">
                {proj.organization}
              </h3>
              <ReadMore text={proj?.desc} />
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-md bg-gray-800 text-gray-300 border border-gray-700 hover:border-gray-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
