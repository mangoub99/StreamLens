import { act } from 'react';
import theme from 'src/assets/themes/theme';
import { AlertDialogProps } from 'src/core/models/alertDialog.model';
import { SnackBarProps } from 'src/core/models/snackbar.model';

export default function AppReducer(state: any, action: any) {
  switch (action.type) {
    case 'CLEAR_SESSION':
      localStorage.clear();
      return {
        themeMode: 'default',
        user: {},
        popularMovies: [],
        popularTVShows: [],
        alertDialogProps: new AlertDialogProps(),
        snackBarProps: new SnackBarProps(),
      };

    case 'SET_THEME_MODE':
      localStorage.setItem('_themeMode', JSON.stringify(action.payload));
      return {
        ...state,
        themeMode: action.payload,
      };

    case 'SET_USER':
      localStorage.setItem('_user', JSON.stringify({ ...state.user, ...action.payload }));
      return {
        ...state,
        user: action.payload,
      };

    case 'SET_POPULAR_MOVIES':
      localStorage.setItem('_popularMovies', JSON.stringify({ ...state.popularMovies, ...action.payload }));
      return {
        ...state,
        popularMovies: action.payload,
      };

    case 'SET_POPULAR_TV_SHOWS':
      localStorage.setItem('_popularTVShows', JSON.stringify({ ...state.popularTVShows, ...action.payload }));
      return {
        ...state,
        popularTVShows: action.payload,
      };

    case 'SET_ALERT_DIALOG_PROPS':
      return {
        ...state,
        alertDialogProps: action.payload || {},
      };

    case 'SET_SNACKBAR_PROPS':
      return {
        ...state,
        snackBarProps: action.payload || {},
      };

    default:
      return state;
  }
}
