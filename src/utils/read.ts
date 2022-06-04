import { makeApiUrl } from "./makeApiUrl";

export const getById = (id?: number) => {
  const apiUrl = makeApiUrl(id);

  return fetch(apiUrl).then((response) =>
    response
      .json()
      .then(
        (data: { explanationDescription: string; detailsLink: string }) => data
      )
  );
};
