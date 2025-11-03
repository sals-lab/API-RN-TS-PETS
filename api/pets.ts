import api from ".";

export interface newPetType {
  name: string;
  type: string;
  adopted: string;
  image: string;
}

export const getPets = async () => {
  const response = await api.get("/pets");
  return response.data;
};

export const getPetById = async (id: string) => {
  const response = await api.get(`/pets/${id}`);
  return response.data;
};

export const addPet = async (pet: newPetType) => {
  const response = await api.post("/pets", pet);
  return response.data;
};

export const deletePet = async (id: string) => {
  const response = await api.delete(`/pets/${id}`);
  return response.data;
};
