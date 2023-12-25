import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';

const App = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword] = useState("");
  const [ petName, setPetName ] = useState("");
  const [ petDOB, setPetDOB ] = useState("");
  const [ breed, setBreed ] = useState("");
  const [ favoriteToy, setFavoriteToy ] = useState("");

  return (
    <ScrollView style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ecf0f1' }}>
      <FormField label={'Email'}
        value={email}
        changeHandler={setEmail} />
      <FormField label={'Password'}
        value={password}
        changeHandler={setPassword} />
      <FormField label={'Confirm Password'}
        value={confirmPassword}
        changeHandler={setConfirmPassword} />
      <FormField label={"Pet's Name"}
        value={petName}
        changeHandler={setPetName} />
      <FormField label={"Pet's Date of Birth"}
        value={petDOB}
        changeHandler={setPetDOB} />
      <FormField label={"Breed"}
        value={breed}
        changeHandler={setBreed} />
      <FormField label={"Favorite Toy"}
        value={favoriteToy}
        changeHandler={setFavoriteToy} />
    </ScrollView>
  )
};

const FormField = ({ label, value, changeHandler }) => (
  <View style={{ padding: 16, fontSize: 18 }}>
    <Text style={{ padding: 8 }}>{label}</Text>
    <TextInput 
      placeholder={label}
      onChangeText={text => changeHandler(text)}
      style={{ backgroundColor: 'lightgray', borderRadius: 5, padding: 8, color: 'gray' }}
      value={value}
      secureTextEntry={label === 'Password' || label === 'Confirm Password'} >
    </TextInput>
  </View>
)

export default App;
