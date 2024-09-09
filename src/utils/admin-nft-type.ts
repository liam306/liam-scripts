import { API } from '../api/gf-admin';
import { updateEnvVariable } from './env';

const accessToken = process.env.GF_ADMIN_ACCESS_TOKEN;
const GF_ADMIN_ACCESS_TOKEN = 'GF_ADMIN_ACCESS_TOKEN';

export interface NFTType {
  typeId: string;
  name: string;
  level: number;
  julPrice: number;
  nglPrice: number;
  categoryId: string;
  orderNum?: number;
  isPurchasable: boolean;
  description?: any;
  data?: any;
  video?: any;
  image?: any;
}

export interface UpdateNFTType extends Partial<NFTType> {}

export interface Pagination {
  page: number;
  pageSize: number;
}
export const defaultPagination: Pagination = {
  page: 1,
  pageSize: 10,
};

export const renewToken = async () => {
  try {
    const { data } = await API.post('/admin/renew-token', {
      token: accessToken,
    });
    updateEnvVariable(GF_ADMIN_ACCESS_TOKEN, data.data.token);
  } catch (error: any) {
    console.log(error.response.data);
  }
};

export const getNfts = async (
  params?: Record<string, string>,
  pagination: Pagination = defaultPagination,
  sort: string = 'id:DESC',
) => {
  try {
    const { data } = await API.get(
      '/content-manager/collection-types/plugins::gold-fever.nfttype',
      {
        params: {
          page: pagination.page,
          pageSize: pagination.pageSize,
          _sort: sort,
          ...params,
        },
      },
    );

    return data;
  } catch (error: any) {
    console.log(error.response.data);
  }
};

export const getNftById = async (id: number) => {
  try {
    const { data } = await API.get(
      `/content-manager/collection-types/plugins::gold-fever.nfttype/${id}`,
    );

    return data;
  } catch (error: any) {
    console.log(error.response.data);
  }
};

export const createNft = async (nftType: NFTType) => {
  try {
    const { data } = await API.post(
      '/content-manager/collection-types/plugins::gold-fever.nfttype',
      nftType,
    );

    return data;
  } catch (error: any) {
    console.log(error.response.data);
  }
};

export const updateNft = async (id: number, updateNftType: UpdateNFTType) => {
  try {
    const { data } = await API.put(
      `/content-manager/collection-types/plugins::gold-fever.nfttype/${id}`,
      updateNftType,
    );

    return data;
  } catch (error: any) {
    console.log(error.response.data);
  }
};

export const deleteNft = async (id: number) => {
  try {
    const { data } = await API.delete(
      `/content-manager/collection-types/plugins::gold-fever.nfttype/${id}`,
    );

    return data;
  } catch (error: any) {
    console.log(error.response.data);
  }
};

export const bulkDeleteNft = async (ids: number[]) => {
  try {
    const { data } = await API.post(
      '/content-manager/collection-types/plugins::gold-fever.nfttype/actions/bulkDelete',
      { ids },
    );

    return data;
  } catch (error: any) {
    console.log(error.response.data);
  }
};
