import { useState } from 'react';
import type {
  BrainActivity,
  BrainActivityState,
} from '../../types/brainActivity';

interface NeuralBrainHudProps {
  activity?: BrainActivity;
}

const stateLabels: Record<
  BrainActivityState,
  string
> = {
  IDLE: 'Standing by',
  NAVIGATING: 'Navigating',
  FETCHING: 'Retrieving telemetry',
  ANALYZING: 'Analyzing signals',
  SUCCESS: 'Systems nominal',
  DEGRADED: 'Signal degraded',
};

const defaultActivity: BrainActivity = {
  state: 'IDLE',
  signal: 'PORTFOLIO SYSTEM',
  context: 'COMMAND CENTER',
  updatedAt: 0,
};

const inputNodes = [
  { x: 28, y: 34 },
  { x: 28, y: 75 },
  { x: 28, y: 116 },
];

const hiddenNodes = [
  { x: 86, y: 22 },
  { x: 86, y: 50 },
  { x: 86, y: 75 },
  { x: 86, y: 100 },
  { x: 86, y: 128 },
];

const outputNodes = [
  { x: 146, y: 34 },
  { x: 146, y: 75 },
  { x: 146, y: 116 },
];

const connections = inputNodes.flatMap(
  (input, inputIndex) =>
    hiddenNodes.map((hidden, hiddenIndex) => ({
      key: `input-${inputIndex}-hidden-${hiddenIndex}`,
      x1: input.x,
      y1: input.y,
      x2: hidden.x,
      y2: hidden.y,
      delay: (inputIndex + hiddenIndex) * 0.18,
    })),
);

const outputConnections = hiddenNodes.flatMap(
  (hidden, hiddenIndex) =>
    outputNodes.map((output, outputIndex) => ({
      key: `hidden-${hiddenIndex}-output-${outputIndex}`,
      x1: hidden.x,
      y1: hidden.y,
      x2: output.x,
      y2: output.y,
      delay: 0.4 + (hiddenIndex + outputIndex) * 0.16,
    })),
);

export function NeuralBrainHud({
  activity = defaultActivity,
}: NeuralBrainHudProps) {
  const [minimized, setMinimized] = useState(false);

  return (
    <aside
      className={[
        'neural-brain-hud',
        `brain-state-${activity.state.toLowerCase()}`,
        minimized ? 'is-minimized' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label="Neural activity visualization"
    >
      <header className="brain-hud-header">
        <div>
          <span className="brain-hud-eyebrow">
            NEURAL CORE
          </span>
          <strong>{stateLabels[activity.state]}</strong>
        </div>

        <button
          type="button"
          className="brain-hud-toggle"
          aria-label={
            minimized
              ? 'Expand neural activity visualization'
              : 'Minimize neural activity visualization'
          }
          aria-expanded={!minimized}
          onClick={() => setMinimized(value => !value)}
        >
          {minimized ? '+' : '−'}
        </button>
      </header>

      {!minimized && (
        <>
          <svg
            className="brain-network"
            viewBox="0 0 174 150"
            role="img"
            aria-label="Animated neural network with input, hidden, and output layers"
          >
            <g className="brain-connections">
              {[...connections, ...outputConnections].map(
                connection => (
                  <line
                    className="brain-connection"
                    key={connection.key}
                    x1={connection.x1}
                    y1={connection.y1}
                    x2={connection.x2}
                    y2={connection.y2}
                    style={{
                      animationDelay: `${connection.delay}s`,
                    }}
                  />
                ),
              )}
            </g>

            <g className="brain-input-nodes">
              {inputNodes.map((node, index) => (
                <circle
                  className="brain-node"
                  cx={node.x}
                  cy={node.y}
                  key={`input-${index}`}
                  r="5"
                />
              ))}
            </g>

            <g className="brain-hidden-nodes">
              {hiddenNodes.map((node, index) => (
                <circle
                  className="brain-node brain-node-hidden"
                  cx={node.x}
                  cy={node.y}
                  key={`hidden-${index}`}
                  r="6"
                />
              ))}
            </g>

            <g className="brain-output-nodes">
              {outputNodes.map((node, index) => (
                <circle
                  className="brain-node brain-node-output"
                  cx={node.x}
                  cy={node.y}
                  key={`output-${index}`}
                  r="5"
                />
              ))}
            </g>
          </svg>

          <dl className="brain-hud-telemetry">
            <div>
              <dt>State</dt>
              <dd>{activity.state}</dd>
            </div>

            <div>
              <dt>Signal</dt>
              <dd>{activity.signal}</dd>
            </div>

            <div>
              <dt>Context</dt>
              <dd>{activity.context}</dd>
            </div>
          </dl>
        </>
      )}
    </aside>
  );
}
