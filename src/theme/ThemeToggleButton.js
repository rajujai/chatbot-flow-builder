import { Brightness4, Brightness7 } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useColorMode } from './ThemeProvider';

const ThemeToggleButton = () => {
    const { mode, toggleColorMode } = useColorMode();

    return (
        <IconButton onClick={toggleColorMode} color="inherit" sx={{
            position: 'absolute',
            top: 18,
            right: 170,
            zIndex: 1000,
        }} >
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
    );
};

export default ThemeToggleButton;