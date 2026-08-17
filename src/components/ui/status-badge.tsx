import type { DevelopmentStatus } from "@/types/content";

export function StatusBadge({ status }: { status: DevelopmentStatus }) {
  return <span className="status-badge">{status}</span>;
}
