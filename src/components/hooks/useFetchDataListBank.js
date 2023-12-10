import { getListBank } from "api/getListBanks";

const UseFetchGetListBanks = async () => {

    const options = {
      method: "GET",
    };
    // Enviamos la solicitud al endpoint iniciaProceso/
    const response = await getListBank(options);
    console.log(response,"respuesta")
    // Procesamos la respuesta del servidor
    const data = await response.json();

    if (response.status == 200 || response.status == 201) {
      console.log('data',data);
      return data;
    }else{
      console.error('error',data)
    }

    return data
  };


export default UseFetchGetListBanks;
