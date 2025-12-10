import { createSlice } from '@reduxjs/toolkit';

const getMode = (): boolean => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') return true;
  if (savedTheme === 'light') return false;

  localStorage.setItem('theme', 'light');
  return false;
};

interface ModeInterface {
  isDark: boolean;
}

const initialState: ModeInterface = {
  isDark: getMode(),
};

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDark = !state.isDark;
      const theme = state.isDark ? 'dark' : 'light';

      document.documentElement.classList.toggle('dark', state.isDark);
      localStorage.setItem('theme', theme);
    },
    setDarkMode: (state, action: { payload: boolean }) => {
      state.isDark = action.payload;
      const theme = state.isDark ? 'dark' : 'light';

      document.documentElement.classList.toggle('dark', state.isDark);
      localStorage.setItem('theme', theme);
    },
  },
});

export const { toggleDarkMode, setDarkMode } = modeSlice.actions;
export default modeSlice.reducer;
