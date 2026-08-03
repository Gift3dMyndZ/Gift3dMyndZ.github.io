export type BrainActivityState =
  | 'IDLE'
  | 'NAVIGATING'
  | 'FETCHING'
  | 'ANALYZING'
  | 'SUCCESS'
  | 'DEGRADED';

export interface BrainActivity {
  state: BrainActivityState;
  signal: string;
  context: string;
  updatedAt: number;
}
