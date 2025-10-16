import Image from 'next/image';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

export type Project = {
  title: string;
  description: string;
  image: ImagePlaceholder;
  link: string;
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="group block p-4 rounded-xl border border-border overflow-hidden transition-all duration-200">
      <div className="relative w-full" style={{ aspectRatio: '16/10' }}>
          <Image
            src={project.image.imageUrl}
            alt={project.image.description}
            fill
            className="w-full h-full rounded-lg object-cover border border-border"
            data-ai-hint={project.image.imageHint}
          />
      </div>

      <div className="pt-4 transition duration-200 group-hover:translate-x-[6px]">
        <h3 className="font-headline text-2xl mb-2 font-semibold text-foreground">{project.title}</h3>
        <p className="font-body text-base text-muted-foreground">{project.description}</p>
      </div>
    </a>
  );
}
