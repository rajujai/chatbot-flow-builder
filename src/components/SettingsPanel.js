/**
 * Allows users to edit the text of a node.
 * Note: It only works for nodes of type 'message'. Changes required for other node types.
 */
import { Button, Stack, TextField, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'

const SettingsPanel = ({ node, updateNodeText, clearSelection }) => {
    const [text, setText] = useState(node?.data?.text !== "New " + node.type ? node?.data?.text : '')

    useEffect(() => {
        setText(node?.data?.text !== "New " + node.type ? node?.data?.text : '')
    }, [node])

    const inputRef = useRef(null)

    useEffect(() => {
        if (node && inputRef.current) {
            inputRef.current.focus()
        }
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
                inputRef={inputRef}
                label="Text"
                value={text}
                onChange={handleChange}
                fullWidth
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault()
                        clearSelection()
                    }
                }}
            />
            <Button variant="outlined" onClick={clearSelection}>Done</Button>
        </Stack>
    )
}

export default SettingsPanel
