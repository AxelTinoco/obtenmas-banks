
const ButtonForm = ({ isSubmitting, textDefault = 'Cargar', textLoading = 'Subiendo...' }) => {
  return (
    <button
      type="submit"
      onClick={() => console.log("click")}
      className={`bg-gradient-to-b from-cyan-300 to-blue-500 w-full p-2 rounded-3xl ${
        isSubmitting ? "bg-gradient-to-b from-cyan-300 to-blue-500" : "bg-gradient-to-b from-cyan-300 to-blue-500"
      } text-center font-roboto text-white`}
      disabled={isSubmitting}
    >
      {isSubmitting ? textLoading : textDefault}
    </button>
  );
}

export default ButtonForm;
