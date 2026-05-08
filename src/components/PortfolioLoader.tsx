/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

type PortfolioLoaderProps = {
  isLeaving: boolean;
};

export default function PortfolioLoader({ isLeaving }: PortfolioLoaderProps) {
  return (
    <div
      className={`portfolio-loader ${isLeaving ? 'portfolio-loader-exit' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="terminal-loader">
        <div className="terminal-loader-header">
          <span>Status</span>
          <div className="terminal-loader-controls" aria-hidden="true">
            <span className="terminal-loader-dot terminal-loader-dot-red" />
            <span className="terminal-loader-dot terminal-loader-dot-yellow" />
            <span className="terminal-loader-dot terminal-loader-dot-green" />
          </div>
        </div>
        <div className="terminal-loader-body">
          <span className="terminal-loader-text">please wait...</span>
        </div>
      </div>
    </div>
  );
}
