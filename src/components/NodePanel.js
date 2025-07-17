import { Typography, Stack, Paper } from '@mui/material'

const NodePanel = ({ nodes, onSelectNode }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('application/reactflow', 'textNode')
    e.dataTransfer.effectAllowed = 'move'
  }

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Node Panel</Typography>

      {/* Node Type Palette (drag source) */}
      <Paper
        draggable
        onDragStart={handleDragStart}
        sx={{ p: 1, textAlign: 'center', cursor: 'grab', bgcolor: '#e0e0e0' }}
      >
        Add Text Node
      </Paper>

      {/* List of Existing Nodes */}
      <Typography variant="subtitle2">Nodes</Typography>
      <Stack spacing={1}>
        {nodes.map((node) => (
          <Paper
            key={node.id}
            onClick={() => onSelectNode(node)}
            sx={{
              p: 1,
              cursor: 'pointer',
              bgcolor: '#f0f0f0',
              '&:hover': { bgcolor: '#cfe8fc' },
            }}
          >
            {node.data.text || 'Untitled'}
          </Paper>
        ))}
      </Stack>
    </Stack>
  )
}

export default NodePanel
