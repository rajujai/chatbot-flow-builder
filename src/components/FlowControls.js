import { useTheme } from '@mui/material/styles';
import { Controls, MiniMap } from 'reactflow';

const FlowControls = () => {
    const theme = useTheme();

    const isDark = theme.palette.mode === 'dark';

    return (
        <>
            <Controls
                showZoom
                showFitView
                showInteractive
                style={{
                    background: isDark ? '#333' : '#fff',
                    color: isDark ? '#fff' : '#000',
                }}
            />

            <MiniMap
                nodeColor={(node) => {
                    return node.style?.background || (isDark ? '#555' : '#ddd');
                }}
                maskColor={isDark ? 'rgba(0, 0, 0, 0.6)' : 'rgba(31, 9, 9, 0.6)'}
                nodeStrokeColor={isDark ? '#888' : '#555'}
                nodeStrokeWidth={1}
                style={{
                    background: isDark ? '#1a1a1a' : '#f0f0f0',
                }}
            />
        </>
    );
};

export default FlowControls;
