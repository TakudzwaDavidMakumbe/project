"use client";

import { 
  Github, 
  Mail, 
  Linkedin, 
  Code2, 
  MonitorSmartphone, 
  ArrowUpRight, 
  Terminal, 
  Database, 
  Code, 
  Braces, 
  FileJson, 
  Server, 
  Globe, 
  Blocks, 
  PenTool 
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import MessageMe from './components/MessageMe';

export default function Home() {
  const [currentProject, setCurrentProject] = useState('Portfolio');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'ChertNodes',
      description: 'Minecraft servers hosting',
      tech: 'HTML SCSS Python Flask',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2000',
      link: '#'
    },
    {
      title: 'ProtectX',
      description: 'Discord anti-crash bot',
      tech: 'React Express Discord.js Node.js',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2000',
      link: '#'
    },
    {
      title: 'Kahoot Answers',
      description: 'Get answers to your kahoot quiz',
      tech: 'CSS Express Node.js',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000',
      link: '#'
    }
  ];

  const skills = {
    languages: [
      { name: 'TypeScript', icon: <FileJson className="h-5 w-5" /> },
      { name: 'JavaScript', icon: <Braces className="h-5 w-5" /> },
      { name: 'Python', icon: <Terminal className="h-5 w-5" /> },
      { name: 'Lua', icon: <Code className="h-5 w-5" /> }
    ],
    databases: [
      { name: 'PostgreSQL', icon: <Database className="h-5 w-5" /> },
      { name: 'MongoDB', icon: <Database className="h-5 w-5" /> },
      { name: 'SQLite', icon: <Database className="h-5 w-5" /> }
    ],
    tools: [
      { name: 'VSCode', icon: <Code2 className="h-5 w-5" /> },
      { name: 'NeoVim', icon: <Terminal className="h-5 w-5" /> },
      { name: 'Linux', icon: <Terminal className="h-5 w-5" /> },
      { name: 'Git', icon: <Blocks className="h-5 w-5" /> },
      { name: 'Figma', icon: <PenTool className="h-5 w-5" /> }
    ],
    frameworks: [
      { name: 'React', icon: <Code2 className="h-5 w-5" /> },
      { name: 'Vue', icon: <Code2 className="h-5 w-5" /> },
      { name: 'Express.js', icon: <Server className="h-5 w-5" /> },
      { name: 'Discord.js', icon: <Globe className="h-5 w-5" /> },
      { name: 'Flask', icon: <Server className="h-5 w-5" /> }
    ]
  };

  return (
    <main className="min-h-screen bg-[#1a1b1e] text-white">
      {/* Header */}
      <nav
        className={`fixed w-full bg-[#1a1b1e]/80 backdrop-blur-sm z-50 px-6 py-4 transition-transform ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold flex items-center gap-2">
            <Code2 className="h-6 w-6" />
            Elias
          </Link>
          <div className="flex gap-6">
            <Link href="#projects" className="hover:text-purple-400 transition-colors">#projects</Link>
            <Link href="#skills" className="hover:text-purple-400 transition-colors">#skills</Link>
            <Link href="#about-me" className="hover:text-purple-400 transition-colors">#about-me</Link>
            <Link href="#contacts" className="hover:text-purple-400 transition-colors">#contacts</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Elias is a <span className="text-purple-400">web designer</span> and{' '}
              <span className="text-purple-400">front-end developer</span>
            </h1>
            <p className="text-gray-400 mb-8">
              He crafts responsive websites where technologies meet creativity
            </p>
            <button className="px-6 py-3 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-colors rounded-lg">
              Contact me!!
            </button>
            <div className="mt-8 flex items-center gap-2">
              <MonitorSmartphone className="h-5 w-5 text-purple-400" />
              <p className="text-sm">
                Currently working on <span className="text-purple-400">{currentProject}</span>
              </p>
            </div>
          </div>
          <div className="relative animate-slide-in">
            <img
              src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=2000"
              alt="Developer Portrait"
              className="rounded-lg w-full object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-purple-400 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-6 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl italic">
            "With great power comes great electricity bill"
          </blockquote>
          <p className="mt-4 text-right text-gray-400">- Dr. Who</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold">
              <span className="text-purple-400">#</span>projects
            </h2>
            <Link href="/projects" className="text-gray-400 hover:text-white flex items-center gap-2">
              View all <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-[#2a2b2e] rounded-lg overflow-hidden group animate-slide-up"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-400 mb-2">{project.tech}</p>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    <Link
                      href={project.link}
                      className="px-4 py-2 border border-purple-400 text-purple-400 rounded hover:bg-purple-400 hover:text-white transition-colors"
                    >
                      Live <ArrowUpRight className="inline h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-[#2a2b2e]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 animate-fade-in">
            <span className="text-purple-400">#</span>skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-[#1a1b1e] p-6 rounded-lg animate-slide-up"
              >
                <h3 className="text-xl font-bold mb-6 capitalize">{category}</h3>
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-me" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 animate-fade-in">
            <span className="text-purple-400">#</span>about-me
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-400 animate-slide-up">
              <p>Hello, I'm Elias!</p>
              <p>
                I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch
                and raise them into modern user-friendly web experiences.
              </p>
              <p>
                Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been
                helping various clients to establish their presence online. I always strive to learn about the newest
                technologies and frameworks.
              </p>
              <button className="px-6 py-3 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-colors rounded-lg">
                Read more →
              </button>
            </div>
            <div className="relative animate-slide-in">
              <img
                src="https://images.unsplash.com/photo-1596003906949-67221c37965c?q=80&w=2000"
                alt="About Me"
                className="rounded-lg w-full object-cover"
              />
              <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-purple-400 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 px-6 bg-[#2a2b2e]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 animate-fade-in">
            <span className="text-purple-400">#</span>contacts
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 animate-slide-up">
            <p className="text-gray-400">
              I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to
              contact me
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-400 hover:text-purple-400 transition-colors">
                <Mail className="h-6 w-6" />
                <a href="mailto:elias@elias.me">elias@elias.me</a>
              </div>
              <div className="flex items-center gap-4 text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="h-6 w-6" />
                <a href="https://github.com/elias" target="_blank" rel="noopener noreferrer">
                  @elias
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-6 w-6" />
                <a href="https://linkedin.com/in/elias" target="_blank" rel="noopener noreferrer">
                  @elias
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 animate-fade-in">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6" />
            <span className="font-bold">elias@elias-dev.ml</span>
          </div>
          <p className="text-gray-400">Web designer and front-end developer</p>
          <p className="text-gray-400">© Copyright 2025. Made by Elias</p>
        </div>
      </footer>

      {/* Sticky WhatsApp Icon */}
      <MessageMe />
    </main>
  );
}