const API_BASE_URL = 'https://meddata-backend.onrender.com';

export async function getStates() {
  const response = await fetch(`${API_BASE_URL}/states`);
  const data = await response.json();
  return data;
}

export async function getCities(state) {
  const response = await fetch(`${API_BASE_URL}/cities/${state}`);
  const data = await response.json();
  return data;
}

export async function getMedicalCenters(state, city) {
  const response = await fetch(`${API_BASE_URL}/data?state=${state}&city=${city}`);
  const data = await response.json();
  return data;
}