export type TrackType = { title: string };

export const fakeGetSong = (): Promise<TrackType> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ title: "Заголовок статьи" }), 3000);
  });
}; 