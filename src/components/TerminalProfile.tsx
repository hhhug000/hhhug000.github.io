import React, { useState, useEffect } from 'react';

type Tab = 'about.json' | 'skills.yml' | 'contact.txt';

export default function TerminalProfile() {
  const [activeTab, setActiveTab] = useState<Tab>('about.json');
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const tabContents: Record<Tab, string> = {
    'about.json': `{
  "name": "Hugo Haaxman",
  "title": "Full-Stack Software Engineer",
  "focus": ["Python", "Web Dev", "Hardware"],
  "experience": "7+ years of programming experience"
}`,
    'skills.yml': `languages:
  - JavaScript
  - JankLang (My own language)
  - Python
  - SQL
frameworks:
  - Astro
  - Regular HTML/CSS/JS
tools_devops:
  - Git & GitHub
  - Docker
  - PostgreSQL / Redis
  - Bare metal servers (Homelab)`,
    'contact.txt': `// Socials & Contact Info

Email:    hugo dot haaxman at gmail dot com
GitHub:   github.com/hhhug000
Location: United Kingdom`
  };

  useEffect(() => {
    const rawContent = tabContents[activeTab];
    setIsTyping(true);
    setTypedText('');
    
    let index = 0;
    const charsPerStep = 4;
    const interval = setInterval(() => {
      if (index < rawContent.length) {
        setTypedText(rawContent.slice(0, index + charsPerStep));
        index += charsPerStep;
      } else {
        setTypedText(rawContent);
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 12);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className="terminal-window liquid-glass">
      {/* Terminal Title Bar */}
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot dot-close"></span>
          <span className="dot dot-minimize"></span>
          <span className="dot dot-maximize"></span>
        </div>
        <div className="terminal-title">hugo ~ zsh</div>
        <div className="terminal-spacer"></div>
      </div>
      
      {/* Terminal Tab Bar */}
      <div className="terminal-tabs">
        {(Object.keys(tabContents) as Tab[]).map((tab) => (
          <button
            key={tab}
            className={`terminal-tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            <span className="tab-icon">
              {tab.endsWith('.json') && '{ }'}
              {tab.endsWith('.yml') && '☰'}
              {tab.endsWith('.txt') && '▤'}
            </span>
            {tab}
          </button>
        ))}
      </div>

      {/* Terminal Body */}
      <div className="terminal-body">
        <div className="terminal-prompt-line">
          <span className="prompt-user">hugo</span>
          <span className="prompt-at">@</span>
          <span className="prompt-host">local</span>
          <span className="prompt-dir">~</span>
          <span className="prompt-char">$</span>
          <span className="prompt-command">cat {activeTab}</span>
        </div>
        
        <pre className="terminal-code"><code>{typedText}</code>{isTyping && <span className="cursor-blink">█</span>}</pre>
      </div>
    </div>
  );
}
