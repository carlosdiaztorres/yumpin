import React from 'react';

const DiagonalStripes = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50px',
            height: '50px',
            overflow: 'hidden',
            borderTopLeftRadius: '8px',
            pointerEvents: 'none',
            zIndex: 1
        }}>
            <div style={{
                position: 'absolute',
                width: '2px',
                height: '80px',
                background: 'var(--color-primary)',
                transform: 'rotate(45deg)',
                transformOrigin: 'top left',
                top: '0px',
                left: '20px'
            }} />
            <div style={{
                position: 'absolute',
                width: '2px',
                height: '80px',
                background: 'var(--color-primary)',
                transform: 'rotate(45deg)',
                transformOrigin: 'top left',
                top: '0px',
                left: '26px'
            }} />
        </div>
    );
};

export default DiagonalStripes;
