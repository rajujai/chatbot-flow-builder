/**
 * Displays a list of node types available for dragging into the canvas,
 * as well as a list of existing nodes with options to select and delete them.
 * It allows users to manage nodes in the flow builder interface.
 */
import { nodeTypes } from '@/types/NodeTypes';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box, IconButton, Paper, Stack, Typography } from '@mui/material';

const NodePanel = ({ nodes, onSelectNode, handleDelete }) => {
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
            cursor: 'grab'
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
              cursor: 'pointer'
            }}
          >
            <Typography lineHeight={1} fontSize={11} color="warning">{node.type}</Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                overflow: 'hidden',
              }}
            >
              <Typography
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  flexGrow: 1,
                  pr: 1,
                }}
              >
                {node.data.text || 'Untitled'}
              </Typography>
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(node.id)
                }}
                size="small"
              >
                <DeleteForeverIcon fontSize="small" color="error" />
              </IconButton>
            </Box>
          </Paper>
        ))}
      </Stack>
    </Stack>
  )
}

export default NodePanel
