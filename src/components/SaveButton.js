import { Button } from '@mui/material'

const SaveButton = ({ onSave }) => (
    <Button
        variant="outlined"
        color="primary"
        style={{ position: 'absolute', top: 20, right: 20, zIndex: 1000 }}
        onClick={onSave}
    >
        Save Changes
    </Button>
)

export default SaveButton
