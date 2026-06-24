import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Career, Education, Project } from '@/types';

const contentDir = path.join(process.cwd(), 'src', 'content');

// --- ABOUT ---
export interface AboutMetadata {
  title: string;
  careers: Career[];
  educations: Education[];
}

export function getAboutData(locale: string) {
  try {
    const fullPath = path.join(contentDir, 'about', locale, `about.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      meta: data as AboutMetadata,
      content,
    };
  } catch {
    return null;
  }
}

// --- PROJECTS ---
export function getProjectBySlug(locale: string, slug: string) {
  try {
    const fullPath = path.join(contentDir, 'projects', locale, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      meta: data as Omit<Project, 'slug'>,
      content,
    };
  } catch {
    return null;
  }
}

export function getAllProjectSlugs(locale: string = 'en') {
  try {
    const dir = path.join(contentDir, 'projects', locale);
    const filenames = fs.readdirSync(dir);
    return filenames.map((filename) => filename.replace(/\.mdx$/, ''));
  } catch {
    return [];
  }
}

export function getAllProjects(locale: string): Project[] {
  const slugs = getAllProjectSlugs(locale);
  const projects = slugs
    .map((slug) => {
      const data = getProjectBySlug(locale, slug);
      if (!data) return null;
      return {
        ...data.meta,
        slug,
      } as Project;
    })
    .filter((p): p is Project => p !== null);

  return projects.sort((a, b) => {
    const orderA = a.order ?? 999;
    const orderB = b.order ?? 999;
    return orderA - orderB;
  });
}

// --- ACHIEVEMENTS ---
import { Achievement } from '@/types';

export function getAllAchievements(locale: string): Achievement[] {
  try {
    const dir = path.join(contentDir, 'achievements', locale);
    if (!fs.existsSync(dir)) return [];
    
    const filenames = fs.readdirSync(dir);
    const achievements = filenames
      .filter((filename) => filename.endsWith('.mdx'))
      .map((filename) => {
        const fullPath = path.join(dir, filename);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        return data as unknown as Achievement & { order?: number };
      });

    return achievements.sort((a, b) => {
      const orderA = a.order ?? 999;
      const orderB = b.order ?? 999;
      return orderA - orderB;
    });
  } catch {
    return [];
  }
}

