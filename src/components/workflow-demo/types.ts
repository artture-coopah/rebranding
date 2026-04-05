export type NodeType = "trigger" | "ai" | "condition" | "action" | "output" | "integration";

export interface NodeDetail {
  stepNumber: string;
  title: string;
  description: string;
  preview?: React.ReactNode;
}

export interface WfNode {
  id: string;
  x: number;
  y: number;
  label: string;
  desc: string;
  type: NodeType;
  icon: React.ReactNode;
  detail: NodeDetail;
}

export interface WfEdge {
  from: string;
  to: string;
  accent?: boolean;
  label?: string;
}

export interface Workflow {
  id: string;
  label: string;
  tagline: string;
  icon: React.ReactNode;
  nodes: WfNode[];
  edges: WfEdge[];
  defaultSelectedId: string;
}
