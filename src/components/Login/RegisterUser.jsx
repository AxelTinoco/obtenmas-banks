'use client'
import Image from 'next/image'
import InputLogin from './InputLogin'
import {  Form, Formik } from "formik";
import { useDispatch } from "react-redux"
import * as Yup from "yup";
import Message from "../Form/Message";
import { useRouter } from "next/navigation";
import { updateNameUser } from "../../redux/features/initialSlice";
import ButtonForm from "../Form/ButtonForm";

const RegisterUser = () => {

  const router = useRouter();
  const dispatch = useDispatch();
  
  //Esquema de validación
  const validationSchema = Yup.object().shape({
      username: Yup.string().required("Nombre de usuario es requerido").min(4),
  });

  const initialValues = {
    username: "",
  };

  const onSubmit = (values) => {
    dispatch(updateNameUser(values.username));
    router.push("/dashboard")
  }


  return (
  <>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={true}
    >
      {({ setFieldValue ,isSubmitting,errors,touched,error  }) => (
      <Form className="flex flex-col p-2 justify-center items-center">
        <div className="flex flex-col w-full justify-center my-7 text-center space-y-10">
          <div className="flex space-x-2 w-full items-center justify-center">
            <div className="flex w-16 ">
              <Image
                src="assets/Login/ya-blue-logo.svg"
                className="flex w-full h-auto"
                alt="Logo"
                width={30}
                height={30}
              />
            </div>
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#8DE2E3] to-[#5543C3]">Ya Ganaste</h2>
          </div>
          <h4 className="text-white">Inicia Sesión</h4>
        </div>

        <div className="flex flex-col w-full space-y-6">
          <InputLogin
              name="user"
              type="text"
              labelText="Usuario"
              placeholder=""
              id="username"
              onChange={(event) => {
                setFieldValue('username',event.currentTarget.value)
              }}
            />

            {errors.username && touched.username && (
              <Message error>Usuario no válido.</Message>
            )}
        </div>
     
        <div className="flex w-36 mt-4">
          <ButtonForm isSubmitting={isSubmitting} textDefault="Entrar" textLoading="Entrando..."/>
        </div>
         
      </Form>
      )}

    </Formik>
  </>
  )
}

export default RegisterUser