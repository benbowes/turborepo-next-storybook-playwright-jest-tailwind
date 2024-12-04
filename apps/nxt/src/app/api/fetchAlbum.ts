export type Monster = {
  image: string;
  index: string;
  type: string;
  languages: string;
  name: string;
};

export type MonstersResponse = {
  data: {
    monsters: Pick<Monster, "image" | "index" | "name">[];
  };
};

export type MonsterResponse = {
  data: {
    monster: Monster;
  };
};

export async function fetchAlbum({ pageParam }: { pageParam: number }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DND_API_URL}/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            query MonsterQuery($limit: Int!, $skip: Int) {
              monsters(limit: $limit, skip: $skip) {
                image
                index
                name
              }
            }
          `,
        variables: {
          limit: 10,
          skip: pageParam,
        },
      }),
    }
  );

  const json: MonstersResponse = await response.json();

  return json;
}

export async function fetchPhoto(index: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DND_API_URL}/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            query MonsterQuery($index: String!) {
              monster(index: $index) {
                image
                index
                type
                languages
                name
              }
            }
          `,
        variables: {
          index: index,
        },
      }),
    }
  );

  const json: MonsterResponse = await response.json();

  return json;
}
