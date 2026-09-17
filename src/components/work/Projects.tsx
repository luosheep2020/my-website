import { getPosts } from "@/lib/content";
import { Column, Heading, Row, SmartLink, Text } from "@once-ui-system/core";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Projects({ range, exclude }: ProjectsProps) {
  let allProjects = getPosts("projects");

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column as="ul" fillWidth margin="0" marginBottom="40" padding="0" style={{ listStyle: "none" }}>
      {displayedProjects.map((post) => (
        <Row
          as="li"
          key={post.slug}
          fillWidth
          gap="24"
          paddingY="24"
          borderBottom="neutral-alpha-weak"
          vertical="start"
          s={{ direction: "column", gap: "12" }}
        >
          <Column flex={1} gap="8">
            <Heading as="h2" variant="heading-strong-m">
              {post.metadata.title}
            </Heading>
            {post.metadata.summary && (
              <Text variant="body-default-s" onBackground="neutral-weak">
                {post.metadata.summary}
              </Text>
            )}
          </Column>
          <Row gap="16" wrap>
            {post.content.trim() && (
              <SmartLink href={`/project/${post.slug}`} suffixIcon="arrowRight">
                Read more
              </SmartLink>
            )}
            {post.metadata.link && (
              <SmartLink href={post.metadata.link} suffixIcon="arrowUpRightFromSquare">
                View project
              </SmartLink>
            )}
          </Row>
        </Row>
      ))}
    </Column>
  );
}
