import type { AxiosResponse } from "axios";
import api from "./api";
import type { Note } from "../types/note";

export interface FetchNotesParams {
  page: number;
  perPage: number;
  search?: string;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  params: FetchNotesParams
): Promise<FetchNotesResponse> => {
  const { data }: AxiosResponse<FetchNotesResponse> =
    await api.get("/notes", { params });

  return data;
};

export interface CreateNotePayload {
  title: string;
  content: string;
  tag: string;
}

export const createNote = async (
  payload: CreateNotePayload
): Promise<Note> => {
  const { data }: AxiosResponse<Note> =
    await api.post("/notes", payload);

  return data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const { data }: AxiosResponse<Note> =
    await api.delete(`/notes/${id}`);

  return data;
};
