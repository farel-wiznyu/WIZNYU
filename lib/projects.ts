export type Project = {
  slug: string;
  record: string;
  title: string;
  year?: string;
  category?: string;
  summary: string;
  role?: string;
  contribution?: string[];
  process?: string;
  outcome?: string;
  stack: string[];
  cover?: string;
  coverAlt?: string;
  href?: string;
  featured: boolean;
};

/**
 * Add real records only. The archive intentionally renders a pending state
 * instead of inventing projects, clients, roles, or outcomes.
 */
export const projects: Project[] = [];

export const pendingRecordCount = 3;
