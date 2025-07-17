import { nodeTypes } from '@/types/NodeTypes'
import { Divider, Paper, Stack, Typography } from '@mui/material'

const NodePanel = ({ nodes, onSelectNode }) => {
  const handleDragStart = (e, nodeType) => {
    e.dataTransfer.setData('application/reactflow', nodeType)
    e.dataTransfer.effectAllowed = 'move'
  }

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Node Panel</Typography>

      {/* Node Type Palette (drag source) */}
      {Object.keys(nodeTypes).map((nodeType) => (
        <Paper
          key={nodeType}
          draggable
          onDragStart={(e) => handleDragStart(e, nodeType)}
          sx={{
            p: 1,
            textAlign: 'center',
            cursor: 'grab',
            bgcolor: '#e0e0e0',
            '&:hover': { bgcolor: '#cfe8fc' }
          }}
        >
          {nodeType}
        </Paper>
      ))}

      {/* List of Existing Nodes */}
      <Typography variant="subtitle2">All Nodes</Typography>
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
            <Typography lineHeight={1} fontSize={11} color="warning">{node.type}</Typography>
            {node.data.text || 'Untitled'}
          </Paper>
        ))}
      </Stack>
    </Stack>
  )
}

export default NodePanel
