export const SAVE_LAT = 'SAVE_LAT';
export const SAVE_LGT = 'SAVE_LGT';
export const POST_ASSO = 'POST_ASSO';

export const saveFetchedLat = (dataReceived) => ({
  type: SAVE_LAT,
  datas: dataReceived,
});

export const saveFetchedLgt = (dataReceived) => ({
  type: SAVE_LGT,
  datas: dataReceived,
});

export const postAsso = () => ({
  type: POST_ASSO,
});
