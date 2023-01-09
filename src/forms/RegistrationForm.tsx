import { useState } from "react";

import { Formik } from "formik";
import * as yup from 'yup'

import { Text, Modal, View, StyleSheet } from "react-native";

import { CustomCheckBox } from "../components/checkBox/CheckBox";
import { ErrorText } from "../components/errorText/ErrorText";
import { MyButton } from '../components/myButton/MyButton';
import { MyTextInput } from '../components/myTextInput/MyTextInput';

import { Colors } from '../constants/colors';

interface Club {
  id: string,
  name: string,
};

export const RegistrationForm = ({
  handleSubmitRegistration
}) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(null);

  const fakeData: Club[] = [
    {
      id: '1',
      name: 'Escola de Formação Nuno Rocha'
    },
    {
      id: '2',
      name: 'Real Sociedade'
    },
    {
      id: '3',
      name: 'Geneva Ribeira Bote'
    },
    {
      id: '4',
      name: 'Atletico Pedra Rolada'
    },
    {
      id: '5',
      name: 'Zona Libertada'
    },
    {
      id: '6',
      name: 'Bombeirense'
    }
    
  ]
  const registrationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Nome é obrigatório.'),
    email: yup
      .string()
      .email('Insira um email válido.')
      .required('Email é obrigatório.'),
    password: yup
      .string()
      .required('Palavra-passe é obrigatória.'),
    club: yup
      .string()
      .required('Clube é obrigatório.')
  });
  
  const onModalDismiss = (setFieldValue: Function, setFieldTouched: Function) => {
    if (selected) {
      setFieldValue('club', selected.id);
    }

    setFieldTouched('club', true);
    setModalVisible(!modalVisible);
  }

  return(
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        club: ''
      }}
      validationSchema={registrationSchema}
      onSubmit={(values) => {
        handleSubmitRegistration(values);
      }}
    >
      {({
        values,
        errors,
        handleSubmit,
        handleChange,
        handleBlur,
        touched,
        setFieldValue,
        setFieldTouched,
      }) => (
        <>
          {errors.name && touched.name &&
            <ErrorText errorMessage={errors.name}/>
          }
          <MyTextInput 
            inlineImageLeft='user'
            name='name'
            placeholder="Nome e Apelido"
            autoComplete='name-family'
            backgroundColor={Colors.SecondaryColor}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          
          {errors.email && touched.email &&
            <ErrorText errorMessage={errors.email}/>
          }
          <MyTextInput
            inlineImageLeft='email'
            name='email'
            placeholder="Email"
            autoComplete='email'
            keyboardType='email-address'
            backgroundColor={Colors.SecondaryColor}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              onModalDismiss(setFieldValue, setFieldTouched);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Escolhe seu clube:</Text>
                <CustomCheckBox
                  selected={selected}
                  setSelected={setSelected}
                  options={fakeData}
                />
                <MyButton
                  title='Fechar'
                  onPress={() => {
                    onModalDismiss(setFieldValue, setFieldTouched);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    paddingHorizontal: '10%',
                    paddingVertical: '5%',
                    marginBottom: '5%',
                    paddingLeft: '5%',
                    borderWidth: 0.5,
                    borderRadius: 25,
                    shadowRadius: 10,
                    backgroundColor: Colors.FourthyColor
                  }}
                >

                </MyButton>
              </View>
            </View>
          </Modal>
          {!values.club && touched.club &&
            <ErrorText 
              errorMessage={errors.club}
            />
          }
          <MyButton
            hasImage={true}
            title={selected?.name || 'Selecione o seu clube'}
            onPress={() => setModalVisible(true)}
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              paddingHorizontal: '10%',
              paddingVertical: '5%',
              marginBottom: '5%',
              paddingLeft: '5%',
              borderWidth: 0.5,
              borderRadius: 25,
              shadowRadius: 10,
              backgroundColor: Colors.SecondaryColor
            }}
          />
          {errors.password && touched.password &&
            <ErrorText errorMessage={errors.password}/>
          }
          <MyTextInput
            inlineImageLeft='password'
            name='password'
            placeholder="Password"
            secureTextEntry={true}
            backgroundColor={Colors.SecondaryColor}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />

          <MyButton
            title='Registar'
            onPress={handleSubmit}
            style={{
              width: '100%',
              paddingHorizontal: '10%',
              paddingVertical: '5%',
              marginTop: '10%',
              marginBottom: 15,
              borderWidth: 0.5,
              borderRadius: 23,
              alignItems: 'center',
              elevation: 10,
              shadowRadius: 10,
              backgroundColor: Colors.ThirtyColor
            }}
          />
        </>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: '100%',
    height: '100%', 
    margin: 20,
    padding: 35,
    borderRadius: 20,
    justifyContent: 'space-evenly',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: Colors.ThirtyColor,
  },
  button: {
    padding: 10,
    borderRadius: 20,
    elevation: 2
  },
  buttonClose: {
    alignSelf: "flex-end",
    backgroundColor: Colors.FourthyColor,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
    color: Colors.TextColor
  }
});