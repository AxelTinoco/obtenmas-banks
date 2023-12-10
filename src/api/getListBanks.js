
export async function getListBank(slug,options){
  try {
    const response = await fetch(`https://dev.obtenmas.com/catom/api/challenge/banks`, options);
    return response;
  } catch (error) {
    console.error(error ,"desde el api");
    throw error;
  }
}