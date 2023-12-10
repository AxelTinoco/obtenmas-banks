
export async function getListBank(options){
  try {
    const response = await fetch(`https://dev.obtenmas.com/catom/api/challenge/banks`,options);
    console.log(response,"response in get")
    return response;
  } catch (error) {
    console.error(error ,"desde el api");
    throw error;
  }
}