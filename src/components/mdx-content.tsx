import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

interface MdxContentProps {
  source: string;
}

const components = {
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <span className="relative block w-full aspect-video my-6 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
      <Image
        src={typeof props.src === "string" ? props.src : ""}
        alt={props.alt || "MDX Image"}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </span>
  ),
};

export function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-cyan-500 hover:prose-a:text-cyan-600 prose-img:rounded-xl">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
