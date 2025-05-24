"use client";

import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MessageRendererProps {
  content: string;
  className?: string;
}

const components = {
  img: ({ src, alt, ...props }: any) => (
    <div className="relative w-full h-[200px] my-4 rounded-lg overflow-hidden">
      <Image
        src={src}
        alt={alt || 'Property image'}
        fill
        className="object-cover"
        {...props}
      />
    </div>
  ),
  table: (props: any) => (
    <div className="overflow-x-auto my-4">
      <table className="w-full border-collapse" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th className="border border-border p-2 bg-muted" {...props} />
  ),
  td: (props: any) => (
    <td className="border border-border p-2" {...props} />
  ),
  a: (props: any) => (
    <a className="text-primary hover:underline" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside my-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside my-2" {...props} />
  ),
  li: (props: any) => (
    <li className="my-1" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary pl-4 my-4 italic" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-muted px-1 py-0.5 rounded text-sm" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-4" {...props} />
  ),
};

export function MessageRenderer({ content, className }: MessageRendererProps) {
  const [mdxSource, setMdxSource] = useState<any>(null);

  useState(() => {
    const processContent = async () => {
      try {
        const source = await serialize(content, {
          mdxOptions: {
            development: process.env.NODE_ENV === 'development',
          },
        });
        setMdxSource(source);
      } catch (error) {
        console.error('Error processing MDX:', error);
        setMdxSource(null);
      }
    };
    processContent();
  });

  if (!mdxSource) {
    return <div className={cn("whitespace-pre-wrap", className)}>{content}</div>;
  }

  return (
    <div className={cn("prose prose-sm dark:prose-invert max-w-none", className)}>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
} 