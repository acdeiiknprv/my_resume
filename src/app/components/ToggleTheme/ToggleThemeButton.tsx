import useToggleTheme from '../../hooks/useToggleTheme';
import Button from '@mui/material/Button';

const ToggleThemeButton = () => {
  const toggleTheme = useToggleTheme();
  
  return (
    <Button onClick={toggleTheme}>Toggle Theme</Button>
  );
};
export default ToggleThemeButton;