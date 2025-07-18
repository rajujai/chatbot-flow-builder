/**
 * Renders a button to save nodes and edges data to localstorage.
 * It is positioned at the top right corner of the screen.
 */
import { Button } from '@mui/material'

const SaveButton = ({ onSave }) => (
    <Button
        variant="outlined"
        style={{ position: 'absolute', top: 20, right: 20, zIndex: 1000 }}
        onClick={onSave}
    >
        Save Changes
    </Button>
)

export default SaveButton
