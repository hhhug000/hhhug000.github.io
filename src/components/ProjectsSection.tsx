import React, { useState } from 'react';
import projects from '../data/projects.tsx';

type Category = 'All' | 'Frontend' | 'Backend' | 'Libraries' | 'Hardware' | 'AI/ML' | 'Other';

interface Project {
  title: string;
  description: string;
  categories: Category[];
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.categories.includes(activeCategory));

  return (
    <section id="projects" className="projects-container">
      <div className="projects-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">All of my projects.</p>
        
        {/* Minimal Pill Filter Tabs */}
        <div className="filter-bar">
          {(['All', 'Frontend', 'Backend', 'Libraries', 'Hardware', 'AI/ML', 'Other'] as Category[]).map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.title} className="project-card liquid-glass">
            <div className="card-body">
              <div className="card-header-row">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="proj-link" aria-label="GitHub Source">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  </a>
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="proj-link" aria-label="Live Demo">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  )}
                </div>
              </div>
              <p className="project-desc">{project.description}</p>
            </div>
            
            <div className="card-footer">
              <div className="tag-list">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
