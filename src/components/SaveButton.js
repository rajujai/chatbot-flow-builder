import { Button } from '@mui/material'

const SaveButton = ({ onSave }) => (
    <Button
        variant="contained"
        color="primary"
        style={{ position: 'absolute', bottom: 20, right: 20, zIndex: 1000 }}
        onClick={onSave}
    >
        Save Flow
    </Button>
)

export default SaveButton
