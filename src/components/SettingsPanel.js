import { Button, Stack, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

const SettingsPanel = ({ node, updateNodeText, clearSelection }) => {
    const [text, setText] = useState(node?.data?.label || '')

    useEffect(() => {
        setText(node?.data?.label || '')
    }, [node])

    const handleChange = (e) => {
        const newText = e.target.value
        setText(newText)
        updateNodeText(node.id, newText)
    }

    return (
        <Stack spacing={2}>
            <Typography variant="h6">Edit Message</Typography>
            <TextField
                label="Text"
                value={text}
                onChange={handleChange}
                fullWidth
            />
            <Button variant="outlined" onClick={clearSelection}>Done</Button>
        </Stack>
    )
}

export default SettingsPanel
