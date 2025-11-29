/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useMemo, useReducer } from 'react';
import { AppContextType, ThemeMode } from './types';
import AppReducer from './AppReducer';
import { User } from 'src/core/models/user.model';
import { Theme } from '@emotion/react';
import { AlertDialogProps } from 'src/core/models/alertDialog.model';
import { SnackBarProps } from 'src/core/models/snackbar.model';
import { Movie } from 'src/core/services/movie.service';
import { TvShow } from 'src/core/services/tv.service';

const initialState: AppContextType = {
  themeMode: JSON.parse(sessionStorage.getItem('_themeMode') ?? '{}'),
  user: JSON.parse(sessionStorage.getItem('_user') ?? '{}'),
  popularMovies: JSON.parse(sessionStorage.getItem('_popularMovies') ?? '[]'),
  popularTVShows: JSON.parse(sessionStorage.getItem('_popularTVShows') ?? '[]'),
  alertDialogProps: new AlertDialogProps(),
  snackBarProps: new SnackBarProps(),
  setThemeMode: () => {},
  setUser: () => {},
  setPopularMovies: () => {},
  setPopularTVShows: () => {},
  setAlertDialogProps: () => {},
  setSnackBarProps: () => {},
  clearSession: () => {},
};

const AppContext = createContext(initialState);

export const AppContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const clearSession = () => {
    dispatch({ type: 'CLEAR_SESSION' });
  };

  const setThemeMode = (mode: ThemeMode) => {
    dispatch({
      type: 'SET_THEME_MODE',
      payload: mode,
    });
  };

  const setUser = (user: User) => {
    dispatch({
      type: 'SET_USER',
      payload: user,
    });
  };

  const setPopularMovies = (movies: Movie[]) => {
    dispatch({
      type: 'SET_POPULAR_MOVIES',
      payload: movies,
    });
  };

  const setPopularTVShows = (tvShows: TvShow[]) => {
    dispatch({
      type: 'SET_POPULAR_TV_SHOWS',
      payload: tvShows,
    });
  };

  const setAlertDialogProps = (dialog?: AlertDialogProps) => {
    dispatch({
      type: 'SET_ALERT_DIALOG_PROPS',
      payload: dialog,
    });
  };

  const setSnackBarProps = (dialog?: SnackBarProps) => {
    dispatch({
      type: 'SET_SNACKBAR_PROPS',
      payload: dialog,
    });
  };

  const contextValue = useMemo(
    () => ({
      themeMode: state.themeMode,
      user: state.user,
      popularMovies: state.popularMovies,
      popularTVShows: state.popularTVShows,
      alertDialogProps: state.alertDialogProps,
      snackBarProps: state.snackBarProps,
      clearSession,
      setThemeMode,
      setUser,
      setPopularMovies,
      setPopularTVShows,
      setAlertDialogProps,
      setSnackBarProps,
    }),
    [
      state.themeMode,
      state.user,
      state.popularMovies,
      state.popularTVShows,
      state.alertDialogProps,
      state.snackBarProps,
      clearSession,
      setThemeMode,
      setUser,
      setPopularMovies,
      setPopularTVShows,
      setAlertDialogProps,
      setSnackBarProps,
    ],
  );

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppContext;
