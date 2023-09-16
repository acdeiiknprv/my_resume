import { useThemeContext } from '../styles/ThemeContext';

const useToggleTheme = () => {
  const { toggleTheme } = useThemeContext();
  return toggleTheme;
};

export default useToggleTheme;