type TagProps = {
  tone?: 'light' | 'dark';
  children: string;
};

function Tag({ tone = 'dark', children }: TagProps) {
  const className = tone === 'light' ? 'tag tag--light' : 'tag';
  return <span className={className}>{children}</span>;
}

export default Tag;
