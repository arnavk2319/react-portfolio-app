import React from 'react';
import { PageLayout } from "components/PageLayout";

function HistoryPage(){


    return(
        <PageLayout title="History | Arnav Kaushal" currentHref="/history" currentLabel="History">
                    {/*Container fluid section -- 1*/}
                    <div className="container-fluid">

                        <div className="row p-60-0 p-lg-30-0 p-md-15-0">

                            <div className="col-lg-6">

                                <div className="art-section-title">

                                    <div className="art-title-frame">

                                        <h4>Education</h4>

                                    </div>

                                </div>

                                <div className="art-timeline art-gallery">

                                    <div className="art-timeline-item">
                                        <div className="art-timeline-mark-light"></div>
                                        <div className="art-timeline-mark"></div>

                                        <div className="art-a art-timeline-content">
                                            <div className="art-card-header">
                                                <div className="art-left-side">
                                                    <h5>Carleton University</h5>
                                                    <div className="art-el-suptitle mb-15">Master of Engineering (M. Eng)</div>
                                                </div>
                                                <div className="art-right-side">
                                                    <span className="art-date">Sept 2018 - Jan 2020</span>
                                                    {/* <span className="art-date">Sept 2018 - Jan 2020</span> */}
                                                </div>
                                            </div>

                                            <p style={{color: 'var(--ink)', fontSize: '12px'}}>Ottawa, Canada</p>

                                            <p>Master of Engineering in Systems and Computer Engineering (SYSC). CGPA: 3.90/4.00.</p>
                                        </div>
                                    </div>

                                    <div className="art-timeline-item">
                                        <div className="art-timeline-mark-light"></div>
                                        <div className="art-timeline-mark"></div>

                                        <div className="art-a art-timeline-content">
                                            <div className="art-card-header">
                                                <div className="art-left-side">
                                                    <h5>SRM IST</h5>
                                                    <div className="art-el-suptitle mb-15">Bachelor of Technology (B. Tech)</div>
                                                </div>
                                                <div className="art-right-side">
                                                    <span className="art-date">Sept 2014 - May 2018</span>
                                                </div>
                                            </div>

                                            <p style={{color: 'var(--ink)', fontSize: '12px'}}>Chennai, India</p>

                                            <p>Bachelor of Technology in Computer Science and Engineering (CSE). CGPA: 8.45/10.00.</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-6">

                                <div className="art-section-title">

                                    <div className="art-title-frame">

                                        <h4>Work History</h4>

                                    </div>

                                </div>

                                <div className="art-timeline">

                                    <div className="art-timeline-item">

                                        <div className="art-timeline-mark-light"></div>
                                        <div className="art-timeline-mark"></div>

                                        <div className="art-a art-timeline-content">
                                            <div className="art-card-header">
                                                <div className="art-left-side">
                                                    <h5>SS&C Technologies</h5>
                                                    <div className="art-el-suptitle mb-15">Software Engineer, Full Stack</div>
                                                </div>
                                                <div className="art-right-side">
                                                    <span className="art-date">May 2022 - November 2026</span>
                                                </div>
                                            </div>

                                            <p style={{color: 'var(--ink)', fontSize: '12px'}}>Toronto, Canada</p>

                                        <p>Adopted an agentic SDLC for feature delivery on a multi-tenant fintech platform: built reusable agent skills, hooks and plugins that encode team conventions (Angular patterns, testing, accessibility), cutting 40% of effort across feature scaffolding, test writing and code review through to project delivery.</p>

                                        <p>Designed context-management workflows (scoped project memory, spec files, subagent task decomposition, loop-based iteration with test gates) so AI agents produce reviewable, convention-compliant changes across a large Angular and Spring codebase.</p>

                                        <p>Prototyped RAG and agentic RAG over internal product documentation, client reporting data and support knowledge, using an embedding model, a vector store and an agentic retrieval layer; retrieval evaluation reached 90%+ accuracy.</p>

                                        <p>Integrated LLM capabilities into Client Reporting, Loan Servicing and support workflows: tool calling against existing REST APIs, structured outputs and guardrails for financial data in production, reducing time to resolution for customer issues by 40%.</p>

                                        <p>Engineered 5+ business modules (Payroll, Loan Origination, Loan Servicing, Client Reporting, Tenant Management) on a multi-tenant SaaS fintech platform processing $100M+ in transactions; reduced page load time ~35% with Angular 18+, TypeScript, SCSS and Vue/Nuxt.</p>

                                        <p>Built and consumed REST APIs with Spring MVC, Spring Boot (Reactive) and WebFlux and optimized complex SQL; implemented asynchronous data fetching and reactive streams, increasing backend throughput and responsiveness under high load.</p>

                                        <p>Wrote unit and integration test suites (Jest, Jasmine) reaching 95%+ coverage; used AI agents to generate edge-case tests and reviewed them against acceptance criteria, reducing test-authoring time by 50% and minimizing post-deployment bugs.</p>

                                        <p>Led refactoring and modularization to reduce technical debt and raise component reusability across modules and tenants; used agent-assisted, test-gated refactors with human review to make large changes safe and incremental.</p>

                                        <p>Owned the feature lifecycle from development to production: deployment planning, feature toggles, rollback strategy and customer-impact analysis; used agents to draft specs, release notes and rollback checklists from tickets and diffs.</p>

                                        <p>Contributed to a corporate Angular component library (abstract component rendering), cutting development time 40% and improving component performance and usability 30% across teams.</p>

                                        <p>Raised accessibility to WCAG 2.1 (Axe, Lighthouse, WAVE) across web and desktop apps and led UI/UX compliance against design mocks; automated accessibility checks with agent-driven audits in the development loop.</p>

                                        <p>Cut incident turnaround ~50% through real-time log monitoring and triage, applying LLM-assisted log analysis for root-cause triage; integrated dotCMS, reducing marketing's dependency on developers by ~40%.</p>

                                        <p>Contributed to scalability and resilience planning (load testing, API throttling, optimization of high-traffic paths); reviewed and merged peer code via Git and CI/CD, with agent-assisted pre-review to keep quality high and cut merge conflicts.</p>

                                        <p>Collaborated with Product Owners, Designers, QA and clients in sprint planning and requirements analysis (95%+ sprint velocity); mentored junior developers through code walkthroughs, pair programming and effective AI-assisted development; earned bonus awards and team recognition.</p>
                                        </div>

                                    </div>

                                    <div className="art-timeline-item">

                                        <div className="art-timeline-mark-light"></div>
                                        <div className="art-timeline-mark"></div>

                                        <div className="art-a art-timeline-content">
                                            <div className="art-card-header">
                                                <div className="art-left-side">
                                                    <h5>The AppLabb</h5>
                                                    <div className="art-el-suptitle mb-15">Front-end Developer (Mobile and Web)</div>
                                                </div>
                                                <div className="art-right-side">
                                                    <span className="art-date">Jan 2020 - May 2022</span>
                                                </div>
                                            </div>

                                            <p style={{color: 'var(--ink)', fontSize: '12px'}}>Toronto, Canada</p>

                                            <p>Responsible for analysis, creation, implementation, maintenance and updating websites, mobile applications,
                                                landing pages using native technologies like Android, Native Web (JavaScript, jQuery, AJAX, HTML, CSS) and hybrid
                                                technologies like Flutter, AngularJS, implementing CRUD operations with integration of RESTful Web services.</p>
                                        </div>

                                    </div>

                                    <div className="art-timeline-item">

                                        <div className="art-timeline-mark-light"></div>
                                        <div className="art-timeline-mark"></div>

                                        <div className="art-a art-timeline-content">
                                            <div className="art-card-header">
                                                <div className="art-left-side">
                                                    <h5>The AppLabb</h5>
                                                    <div className="art-el-suptitle mb-15">Developer Intern (Mobile & Web)</div>
                                                </div>
                                                <div className="art-right-side">
                                                    <span className="art-date">May 2019 - August 2019</span>
                                                </div>
                                            </div>

                                            <p style={{color: 'var(--ink)', fontSize: '12px'}}>Toronto, Canada</p>

                                            <p>Contribute to group meetings and provide status update on development tasks. Coordinating with the project management team.
                                                Doing usability testing and fixing bugs in existing websites, mobile applications. Exploring the documentation of new platforms, tools, SDKs for integration with mobile and web applications.</p>
                                        </div>

                                    </div>

                                    <div className="art-timeline-item">

                                        <div className="art-timeline-mark-light"></div>
                                        <div className="art-timeline-mark"></div>

                                        <div className="art-a art-timeline-content">
                                            <div className="art-card-header">
                                                <div className="art-left-side">
                                                    <h5>Velmenni</h5>
                                                    <div className="art-el-suptitle mb-15">Mobile Developer Intern</div>
                                                </div>
                                                <div className="art-right-side">
                                                    <span className="art-date">June 2017 - July 2017</span>
                                                </div>
                                            </div>

                                            <p style={{color: 'var(--ink)', fontSize: '12px'}}>New Delhi, India</p>

                                            <p>Created a native Android Application, GraphView custom view and Camera API.
                                            Performed debug and performance analysis of code and systems.
                                                Testing the application under various configurations.</p>
                                        </div>

                                    </div>

                                    <div className="art-timeline-item">

                                        <div className="art-timeline-mark-light"></div>
                                        <div className="art-timeline-mark"></div>

                                        <div className="art-a art-timeline-content">
                                            <div className="art-card-header">
                                                <div className="art-left-side">
                                                    <h5>Flex</h5>
                                                    <div className="art-el-suptitle mb-15">Intern</div>
                                                </div>
                                                <div className="art-right-side">
                                                    <span className="art-date">Dec 2016 - Jan 2017</span>
                                                </div>
                                            </div>

                                            <p style={{color: 'var(--ink)', fontSize: '12px'}}>Chennai, India</p>

                                            <p>Implementing SQL queries on SQL Server Management Studio for data manipulation and optimization.
                                                Using the results of the queries to visualize the data using Tableau and integrating data visualization techniques to render live data.</p>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/*Container fluid section -- 2*/}

        </PageLayout>
    );
}

export default HistoryPage;
