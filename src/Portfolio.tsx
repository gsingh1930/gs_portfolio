import styled from 'styled-components';
import Button from './components/Button';
import Text from './components/Text';
import Label from './components/Label';
import Img from './components/Img';

const Container = styled.div`
  font-family: 'Inter', sans-serif;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 20px;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const Name = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 20px;
  color: #a0a0a0;
`;

const StatusBadge = styled.span`
  background: #28a745;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  display: inline-block;
  margin: 20px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
`;

const Section = styled.section<{ $bg?: string }>`
  padding: 80px 20px;
  background: ${(props) => props.$bg || 'white'};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Grid3 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Highlight = styled.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  h3 {
    color: #007bff;
    font-size: 2rem;
    margin-bottom: 5px;
  }
  p {
    color: #666;
    margin: 0;
  }
`;

const SkillCategory = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  h3 {
    margin-bottom: 20px;
    border-bottom: 2px solid #007bff;
    padding-bottom: 10px;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
`;

const ProjectContent = styled.div`
  padding: 20px;
  h3 {
    margin-bottom: 10px;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 15px 0;
`;

const TechTag = styled.span`
  background: #e9ecef;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: #007bff;
  }
`;

const TimelineItem = styled.div`
  padding-left: 40px;
  margin-bottom: 40px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 5px;
    width: 15px;
    height: 15px;
    background: #007bff;
    border-radius: 50%;
    border: 3px solid white;
  }
`;

const TimelineDate = styled.span`
  color: #007bff;
  font-weight: 600;
`;

const GPA = styled.span`
  background: #28a745;
  color: white;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.85rem;
  margin-left: 10px;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ResourceCard = styled.a`
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-decoration: none;
  color: inherit;
  text-align: center;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ResourceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
`;

const ResourceTitle = styled.h4`
  margin-bottom: 10px;
  color: #333;
`;

const ResourceSummary = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const SetupCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  h3 {
    margin-bottom: 15px;
    color: #007bff;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    padding: 8px 0;
    border-bottom: 1px solid #eee;
  }
`;

const ContactMethod = styled.a`
  display: block;
  padding: 15px;
  margin-bottom: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  &:hover {
    transform: translateX(5px);
  }
`;

const ContactLabel = styled.span`
  display: block;
  font-size: 0.85rem;
  color: #666;
`;

const ContactValue = styled.span`
  color: #007bff;
  font-weight: 500;
`;

const FooterSection = styled.footer`
  background: #1a1a1a;
  color: #888;
  padding: 40px 20px;
  text-align: center;
`;

const Portfolio = () => {
  const backend = ['PHP', 'Java', 'Python', 'MySQL', 'Node.js', 'RESTful APIs', 'Ruby on Rails'];
  const frontend = ['JavaScript', 'React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Storybook'];
  const tools = ['MongoDB', 'Git/GitHub', 'Docker', 'AWS', 'Jira', 'Power BI'];

  const projects = [
    {
      title: 'Shift Picker Platform',
      description:
        'Subscription-based shift scheduling platform with secure SHA-512 authentication.',
      image: '/images/shiftpicker.jpg',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Agile'],
    },
    {
      title: 'Freight Management CMS',
      description: 'Custom CMS for freight logistics that reduced data entry errors by 40%.',
      image: '/images/freight.jpg',
      tech: ['PHP', 'MySQL', 'HTML5', 'CSS3'],
    },
    {
      title: 'Winnipeg Parking Finder',
      description: 'Web app using Winnipeg Open Data API for parking paystation search.',
      image: '/images/parking.jpg',
      tech: ['JavaScript', 'REST APIs', 'JSON'],
    },
    {
      title: 'Mortgage Calculator',
      description: 'Full-stack mortgage eligibility calculator with TDS/GDS calculations.',
      image: '/images/mortgage.jpg',
      tech: ['JavaScript', 'PHP', 'MySQL'],
    },
  ];

  const resources = [
  {
    title: 'React Docs',
    icon: '⚛️',
    summary: 'Official React documentation for learning and reference.',
    link: 'https://react.dev',
  },
  {
    title: 'TypeScript',
    icon: '📘',
    summary: 'TypeScript documentation and handbook.',
    link: 'https://www.typescriptlang.org/docs/',
  },
  {
    title: 'Styled Components',
    icon: '🎨',
    summary: 'CSS-in-JS library for styling React components.',
    link: 'https://styled-components.com/docs',
  },
  {
    title: 'Docker Docs',
    icon: '🐳',
    summary: 'Official Docker documentation for containerization.',
    link: 'https://docs.docker.com',
  },
  {
    title: 'MDN Web Docs',
    icon: '🌐',
    summary: 'Comprehensive web development documentation.',
    link: 'https://developer.mozilla.org',
  },
  {
    title: 'Stack Overflow',
    icon: '📚',
    summary: 'Community Q&A for programming questions.',
    link: 'https://stackoverflow.com',
  },
  {
    title: 'GitHub',
    icon: '🐙',
    summary: 'Version control and code collaboration platform.',
    link: 'https://github.com',
  },
  {
    title: 'Node.js',
    icon: '🟢',
    summary: 'JavaScript runtime documentation.',
    link: 'https://nodejs.org/docs',
  },
];

const devSetup = {
  vscode: [
    'ESLint',
    'Prettier',
    'Live Server',
    'Auto Rename Tag',
    'Intelli Code',
    'Code Runner',
    'Ruby LSP',
    'Docker',
  ],
  terminal: [
    'Windows PowerShell',
    'Git Bash',
    'Node.js & npm',
  ],
  font: 'Consolas',
};

  return (
    <Container>
      <HeroSection id="home">
        <HeroContent>
          <Name>Gursharan Singh</Name>
          <Title>Full Stack Web Developer</Title>
          <Text content="Building secure, scalable, and user-centric web applications" />
          <StatusBadge>Available January 2026</StatusBadge>
        </HeroContent>
      </HeroSection>

      <Section id="about">
        <ContentWrapper>
          <SectionTitle>About Me</SectionTitle>
          <Grid2>
            <div>
              <Text content="I am a results-driven Full Stack Web Developer specializing in building secure, scalable, and user-centric web applications. Currently pursuing my Full Stack Web Development Diploma at Red River College Polytechnic with a 4.29 GPA." />
              <br />
              <Text content="With 2+ years of professional experience in data management, I bring a systematic approach to software development. I'm actively seeking co-op or internship opportunities starting January 2026." />
            </div>
            <HighlightsGrid>
              <Highlight>
                <h3>4.28</h3>
                <p>GPA</p>
              </Highlight>
              <Highlight>
                <h3>2+</h3>
                <p>Years Experience</p>
              </Highlight>
              <Highlight>
                <h3>10+</h3>
                <p>Technologies</p>
              </Highlight>
              <Highlight>
                <h3>4+</h3>
                <p>Projects</p>
              </Highlight>
            </HighlightsGrid>
          </Grid2>
        </ContentWrapper>
      </Section>

      <Section id="skills" $bg="#f8f9fa">
        <ContentWrapper>
          <SectionTitle>Technical Skills</SectionTitle>
          <Grid3>
            <SkillCategory>
              <h3>Backend</h3>
              <SkillsList>
                {backend.map((s, i) => (
                  <Label key={i} text={s} />
                ))}
              </SkillsList>
            </SkillCategory>
            <SkillCategory>
              <h3>Frontend</h3>
              <SkillsList>
                {frontend.map((s, i) => (
                  <Label key={i} text={s} />
                ))}
              </SkillsList>
            </SkillCategory>
            <SkillCategory>
              <h3>Tools</h3>
              <SkillsList>
                {tools.map((s, i) => (
                  <Label key={i} text={s} />
                ))}
              </SkillsList>
            </SkillCategory>
          </Grid3>
        </ContentWrapper>
      </Section>

      <Section id="projects">
        <ContentWrapper>
          <SectionTitle>Selected Work</SectionTitle>
          <Grid2>
            {projects.map((p, i) => (
              <ProjectCard key={i}>
                <Img src={p.image} alt={p.title} />
                <ProjectContent>
                  <h3>{p.title}</h3>
                  <Text content={p.description} />
                  <TechList>
                    {p.tech.map((t, j) => (
                      <TechTag key={j}>{t}</TechTag>
                    ))}
                  </TechList>
                  <Button label="View Project" backgroundColor="#007bff" />
                </ProjectContent>
              </ProjectCard>
            ))}
          </Grid2>
        </ContentWrapper>
      </Section>

      <Section id="experience" $bg="#f8f9fa">
        <ContentWrapper>
          <SectionTitle>Education & Experience</SectionTitle>
          <Timeline>
            <TimelineItem>
              <TimelineDate>Jan 2025 - Present</TimelineDate>
              <h3>
                Full Stack Web Development Diploma<GPA>4.29/4.5</GPA>
              </h3>
              <h4>Red River College Polytechnic</h4>
              <Text content="Training in Frontend/Backend Development, Database Design, Agile, AWS, and Docker." />
            </TimelineItem>
            <TimelineItem>
              <TimelineDate>Apr 2022 - Jun 2024</TimelineDate>
              <h3>Filing Clerk</h3>
              <h4>Local Mortgage Brokerage Firm</h4>
              <Text content="Managed confidential financial documentation with 99% accuracy rate." />
            </TimelineItem>
            <TimelineItem>
              <TimelineDate>2020 - 2022</TimelineDate>
              <h3>Bachelor of Science - Applied Computer Science</h3>
              <h4>University of Winnipeg</h4>
              <Text content="Completed 2 years focusing on OOP, Database Modelling, and Agile." />
            </TimelineItem>
          </Timeline>
        </ContentWrapper>
      </Section>

      <Section id="contact">
        <SectionTitle>Let's Connect</SectionTitle>
        <ContactGrid>
          <div>
            <h3>Direct Contact</h3>
            <ContactMethod href="mailto:gursharans698@gmail.com">
              <ContactLabel>Email</ContactLabel>
              <ContactValue>gursharans698@gmail.com</ContactValue>
            </ContactMethod>
            <ContactMethod href="https://linkedin.com/in/gursharansingh698" target="_blank">
              <ContactLabel>LinkedIn</ContactLabel>
              <ContactValue>/in/gursharansingh698</ContactValue>
            </ContactMethod>
            <ContactMethod href="https://github.com/gsingh1930" target="_blank">
              <ContactLabel>GitHub</ContactLabel>
              <ContactValue>@gsingh1930</ContactValue>
            </ContactMethod>
            <ContactMethod as="div">
              <ContactLabel>Location</ContactLabel>
              <ContactValue>Winnipeg, MB, Canada</ContactValue>
            </ContactMethod>
          </div>
          <div>
            <h3>Seeking Co-op/Internship</h3>
            <Text content="I'm available starting January 2026 for co-op or internship opportunities. Let's build something amazing together!" />
          </div>
        </ContactGrid>
      </Section>

      {/* Resources */}
<Section id="resources" $bg="#f8f9fa">
  <ContentWrapper>
    <SectionTitle>Resources</SectionTitle>
    <ResourcesGrid>
      {resources.map((r, i) => (
        <ResourceCard key={i} href={r.link} target="_blank">
          <ResourceIcon>{r.icon}</ResourceIcon>
          <ResourceTitle>{r.title}</ResourceTitle>
          <ResourceSummary>{r.summary}</ResourceSummary>
        </ResourceCard>
      ))}
    </ResourcesGrid>
  </ContentWrapper>
</Section>

{/* Developer Setup */}
<Section id="setup">
  <ContentWrapper>
    <SectionTitle>Developer Setup</SectionTitle>
    <Grid3>
      <SetupCard>
        <h3>⚙️ VSCode Extensions</h3>
        <ul>
          {devSetup.vscode.map((ext, i) => (
            <li key={i}>{ext}</li>
          ))}
        </ul>
      </SetupCard>
      <SetupCard>
        <h3>💻 Terminal Setup</h3>
        <ul>
          {devSetup.terminal.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </SetupCard>
      <SetupCard>
        <h3>🔤 Editor Font</h3>
        <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>{devSetup.font}</p>
        <p style={{ color: '#666', marginTop: '10px' }}>
          Monospace font with programming ligatures for better code readability.
        </p>
      </SetupCard>
    </Grid3>
  </ContentWrapper>
</Section>

      <FooterSection>
        <p>© 2025 Gursharan Singh. All rights reserved.</p>
      </FooterSection>
    </Container>
  );
};

export default Portfolio;
