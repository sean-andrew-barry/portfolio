export const skills = {
  frontend: {
    title: 'Frontend',
    subtitle: 'Frontend Technologies',
    skills: [
      { name: 'JavaScript', level: 98 },
      { name: 'React', level: 80 },
      { name: 'TypeScript', level: 75 },
      { name: 'HTML & CSS', level: 95 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Bulma CSS', level: 85 },
      { name: 'WebSockets', level: 90 },
      { name: 'Accessibility', level: 80 },
    ],
  },
  backend: {
    title: 'Backend',
    subtitle: 'Backend Technologies',
    skills: [
      { name: 'Node.js', level: 95 },
      { name: 'Express.js', level: 80 },
      { name: 'MongoDB', level: 92 },
      { name: 'REST APIs', level: 90 },
      { name: 'Server Management', level: 85 },
      { name: 'C++', level: 95 },
      { name: 'C#', level: 75 },
      { name: 'PHP', level: 45 },
      { name: 'Java', level: 50 },
      { name: 'Python', level: 65 },
      { name: 'SQL', level: 55 },
    ],
  },
  tools: {
    title: 'Tools & Others',
    subtitle: 'Tools & Other Skills',
    skills: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'DigitalOcean', level: 85 },
      { name: 'Linux (Ubuntu)', level: 85 },
      { name: 'Optimization & Performance', level: 95 },
      { name: 'Testing & Debugging', level: 90 },
      { name: 'Compiler Design', level: 90 },
      { name: 'Kit.com (Email Marketing)', level: 90 },
      { name: 'AWS', level: 75 },
      { name: 'Security', level: 87 },
      { name: 'Facebook Ads', level: 75 },
      { name: 'API Integrations', level: 85 },
      { name: 'GraphQL', level: 80 },
      { name: 'Stripe', level: 80 },
    ],
  },
};

/**
 * Get the top N skills across every category.
 *
 * @param {object} skillsObj  The skills object from your question
 * @param {number} n          How many top skills you want
 * @returns {{name: string, level: number}[]}  Array sorted high-to-low
 */
export function getTopSkills(n = 5) {
  return Object.values(skills)          // → array of category objects
    .flatMap(cat => cat.skills)            // → one big array of skills
    .sort((a, b) => b.level - a.level)     // high-score first
    .slice(0, n);                          // keep only the top N
}