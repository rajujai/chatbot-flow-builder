import { Button, Stack, Typography } from '@mui/material'

const NodePanel = ({ onAddNode }) => (
    <Stack spacing={2}>
        <Typography variant="h6">Node Panel</Typography>
        <Button variant="outlined" onClick={onAddNode}>+ Text Message</Button>
    </Stack>
)

export default NodePanel
