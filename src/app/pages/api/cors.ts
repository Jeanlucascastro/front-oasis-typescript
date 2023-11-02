import axios from 'axios';

export async function getData() {
  const url = "http://192.168.0.104:8080/video/2";
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6IkNhc3RybyIsImV4cCI6MTY5ODg5Nzg2NSwiY29tcGFueSI6Mn0.FQrZ7OMfr6AzP4lfttWAeP15xdiXFxvabHImXBuvR8M";

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    console.log('ddpaldkas', response)
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Lança o erro para ser tratado posteriormente
  }
}
