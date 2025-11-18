// src/core/services/movie.service.ts
import { ApiService } from './api.service';

/**
 * Basic TMDb types used by the service — feel free to expand these.
 */
export type MovieSummary = {
  id: number;
  title: string;
  overview?: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  release_date?: string;
  vote_average?: number;
  genre_ids?: number[];
};

export type MovieListResponse = {
  page: number;
  results: MovieSummary[];
  total_pages: number;
  total_results: number;
};

/**
 * Options for getMovies
 */
export type GetMoviesOptions = {
  /** page number */
  page?: number;
  /** language, default 'en-US' */
  language?: string;
  /** search query; if present, will call /search/movie */
  query?: string;
  /** filter by one or more genre ids (comma separated or array) -> uses /discover/movie */
  with_genres?: string | number[];
  /** sort_by for discover endpoint, e.g. 'popularity.desc' or 'release_date.desc' */
  sort_by?: string;
  /** include adult results (default false) */
  include_adult?: boolean;
  /** region (ISO 3166-1) */
  region?: string;
  /** custom per-call retry (passed to ApiService options) */
  retry?: number;
};

/**
 * MovieService
 *
 * Usage:
 *   const svc = new MovieService({...}) // or use exported default instance
 *   const data = await svc.getMovies({ page: 1 });
 */
export default class MovieService extends ApiService {
  /**
   * getMovies - flexible method that decides which TMDb endpoint to call:
   *  - /search/movie when `query` is provided
   *  - /discover/movie when discover-like options provided (with_genres, sort_by)
   *  - /movie/popular otherwise
   */
  public getMovies(options: GetMoviesOptions = {}): Promise<MovieListResponse> {
    const { page = 1, language = 'en-US', query, with_genres, sort_by, include_adult = false, region, retry = 0 } = options;

    // Build params common to endpoints
    const params: Record<string, any> = {
      page,
      language,
      include_adult,
    };

    if (region) params.region = region;

    // If query provided -> search endpoint
    if (query && query.trim().length > 0) {
      params.query = query.trim();
      // search endpoint
      return this.apiGet<MovieListResponse>('/search/movie', {
        axiosConfig: { params },
        retry,
      });
    }

    // If discover-like options are provided -> use discover endpoint
    const hasDiscover = (with_genres && (Array.isArray(with_genres) ? with_genres.length > 0 : !!with_genres)) || !!sort_by;
    if (hasDiscover) {
      if (with_genres) {
        params.with_genres = Array.isArray(with_genres) ? with_genres.join(',') : with_genres;
      }
      if (sort_by) params.sort_by = sort_by;
      return this.apiGet<MovieListResponse>('/discover/movie', {
        axiosConfig: { params },
        retry,
      });
    }

    // Default: popular movies
    return this.apiGet<MovieListResponse>('/movie/popular', {
      axiosConfig: { params },
      retry,
    });
  }
}

/**
 * Optional: export a default singleton preconfigured for TMDb.
 * If you already create an instance elsewhere, remove this block.
 *
 * NOTE: using VITE_ env var will embed the key into the client bundle.
 * For production secrecy, prefer a server-side proxy.
 */
export const movieService = new MovieService({
  baseURL: 'https://api.themoviedb.org/3',

  // Automatically include the TMDB key in every request
  defaultParams: {},
  tokenProvider: () => {
    return import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN ?? null;
  },

  timeout: 15000,
});
