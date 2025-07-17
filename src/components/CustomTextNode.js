import { Card, CardContent, Typography } from '@mui/material'
import { Handle, Position } from 'reactflow'

const CustomTextNode = ({ data, selected }) => {
    return (
        <Card
            sx={{
                minWidth: 160,
                border: '2px solid',
                borderColor: selected ? 'primary.main' : '#ccc',
            }}
        >
            <CardContent sx={{ p: 1, textAlign: 'center' }}>
                <Typography variant="body2">{data.text}</Typography>
            </CardContent>
            <Handle type="source" position={Position.Right} id="a" />
            <Handle type="target" position={Position.Left} />
        </Card>
    )
}

export default CustomTextNode
