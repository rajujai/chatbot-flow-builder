/**
 * Displays a message with a type and text, with handles for connections
 */
import { Box, Divider, Typography } from '@mui/material'
import { Handle, Position } from 'reactflow'

const MessageNode = ({ type, data, selected }) => {
    return (
        <Box
            sx={{
                minWidth: 160,
                border: '1px solid',
                borderColor: selected ? 'primary.main' : '#ccc',
                borderRadius: 1,
                p: .5,
            }}
        >
            <Typography lineHeight={1} fontSize=".4rem" color="warning">{type}</Typography>
            <Divider sx={{width: 2}} />
            <Typography variant="body2" lineHeight={1}>{data.text}</Typography>
            <Handle type="source" position={Position.Right} id="a" />
            <Handle type="target" position={Position.Left} />
        </Box>
    )
}

export default MessageNode
