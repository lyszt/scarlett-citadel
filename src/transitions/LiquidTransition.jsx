import React, { useState, useEffect } from 'react';

// --- Animation Configuration ---

// Configuration for the liquid drop effect.
const dropConfig = {
    // Using 5 circles for a layered grey effect.
    dropCount: 5,
    // Set duration to 1.8 seconds for a faster but still smooth animation.
    duration: 1800, // in milliseconds
    // Adjusted stagger delay for the new duration.
    staggerDelay: 90,
    // A palette of multiple grey tones.
    colors: ["#F5F5F5", "#E8E8E8", "#2e2e2e", "#303030", "#C8C8C8"]
};

// Pre-defined starting positions, adjusted to use wide-spreading percentages for guaranteed coverage.
const dropPositions = [
    { top: '-150vmax', left: '-50%' }, // Starts far-left
    { top: '-160vmax', left: '0%' },
    { top: '-150vmax', left: '50%' }, // Center
    { top: '-160vmax', left: '100%' },
    { top: '-155vmax', left: '150%' }, // Starts far-right
];

// --- Component Implementation ---

export default function LiquidTransition({ isActive, onCoverComplete, onAnimationComplete }) {
    // Phases: 'idle', 'preparing', 'expanding', 'contracting'
    const [phase, setPhase] = useState('idle');

    const totalAnimationTime = dropConfig.duration + (dropConfig.dropCount - 1) * dropConfig.staggerDelay;

    // Effect to start and reset the animation process.
    useEffect(() => {
        if (isActive) {
            // 'preparing' phase allows the component to mount with scale(0) before animating.
            setPhase('preparing');
        } else {
            // When not active, ensure we are idle. This helps reset if interrupted.
            setPhase('idle');
        }
    }, [isActive]);

    // Effect to manage the animation sequence.
    useEffect(() => {
        let phaseTimeout;

        // This triggers the expansion after the component is mounted and ready.
        if (phase === 'preparing') {
            // Use a minimal timeout to ensure the browser renders the initial state (scale(0))
            // before applying the final state (scale(1)), allowing the CSS transition to fire.
            phaseTimeout = setTimeout(() => {
                setPhase('expanding');
            }, 20); // A small delay is sufficient to prevent the glitch.
            return () => clearTimeout(phaseTimeout);
        }

        if (phase === 'expanding') {
            phaseTimeout = setTimeout(() => {
                if (onCoverComplete) {
                    onCoverComplete();
                }
                setPhase('contracting');
            }, totalAnimationTime);
        } else if (phase === 'contracting') {
            phaseTimeout = setTimeout(() => {
                if (onAnimationComplete) {
                    onAnimationComplete();
                }
            }, totalAnimationTime);
        }

        return () => clearTimeout(phaseTimeout);
    }, [phase, totalAnimationTime, onCoverComplete, onAnimationComplete]);

    // Only render the component if it's not idle.
    if (phase === 'idle') {
        return null;
    }

    // Determine the scale based on the current phase.
    const isVisible = phase === 'expanding';

    return (
        <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none" style={{ filter: 'url(#goo)' }}>
            {/* The SVG filter that creates the "gooey" or "liquid" merge effect */}
            <svg className="absolute w-0 h-0">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -9"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>

            {/* Container for the expanding circles */}
            <div className="relative w-full h-full">
                {Array.from({ length: dropConfig.dropCount }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            ...dropPositions[i % dropPositions.length],
                            backgroundColor: dropConfig.colors[i % dropConfig.colors.length],
                            // Increased size substantially to guarantee full screen coverage.
                            width: '300vmax',
                            height: '300vmax',
                            // Scale is 0 during 'preparing' and 'contracting' phases.
                            transform: `scale(${isVisible ? 1 : 0})`,
                            transformOrigin: 'center top',
                            transition: `transform ${dropConfig.duration}ms cubic-bezier(0.83, 0, 0.17, 1)`,
                            transitionDelay: `${phase === 'expanding' ? i * dropConfig.staggerDelay : (dropConfig.dropCount - 1 - i) * dropConfig.staggerDelay}ms`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

