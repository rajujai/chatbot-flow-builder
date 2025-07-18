const SingleArrowEdge = ({ id, sourceX, sourceY, targetX, targetY }) => {
    const dx = targetX - sourceX;
    const dy = targetY - sourceY;
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

    return (
        <>
            <line
                x1={sourceX}
                y1={sourceY}
                x2={targetX}
                y2={targetY}
                stroke="#555"
                strokeWidth="1.5"
            />
            <g transform={`translate(${targetX}, ${targetY}) rotate(${angle})`}>
                <polyline
                    points="-10,-5 0,0 -10,5"
                    fill="none"
                    stroke="#555"
                    strokeWidth="1.5"
                />
            </g>
        </>
    );
};

export default SingleArrowEdge;
