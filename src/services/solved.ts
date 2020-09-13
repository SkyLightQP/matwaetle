import Axios from 'axios';

export interface Tag {
  /* eslint-disable camelcase */
  readonly algorithm_id: number;
  readonly aliases: string;
  readonly full_name_en: string;
  readonly full_name_ko: string;
  readonly short_name_en: string;
  readonly tag_name: string;
}

interface BaekjoonData {
  readonly id: string;
  readonly title: string;
  readonly tags: Tag[];
}

const BASE_URL = 'https://api.solved.ac/v2/problems/show.json?id=';

const getBaekjoonData = async (id: string): Promise<BaekjoonData | undefined> => {
  const response = await Axios.get(encodeURI(`${BASE_URL}${id}`));
  const result = response.data.result.problems;

  if (result.length === 0) return undefined;

  const { title, tags } = result[0];

  const newTags: Tag[] = tags.map((tag: Tag) => {
    return tag.full_name_ko;
  });

  return {
    id,
    title,
    tags: newTags
  };
};

export default getBaekjoonData;
