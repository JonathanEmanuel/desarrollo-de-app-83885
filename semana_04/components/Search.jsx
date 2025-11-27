import { useState } from 'react'
import { TextInput, Text, View, StyleSheet} from 'react-native'
import { colors } from '../global/colors'

const Search = () => {
    const [ text, setText] = useState("");
    const [ error, setError] = useState("");

    const handleChange = ( value) => {
        setText(value);
        // No se admiten numeros
        const expReg = /^[A-Za-z\s]+$/;
        console.log(value);
        if( value != ""  && !expReg.test(value)  ){
            setError('Solo se admiten Letras')
        } else {
            setError("");
        }
    
    }


    return (
        <View>
            <TextInput
                placeholder='Buscar Pelicula'
                value={text}
                onChangeText={ handleChange }
                style={ styles.input}
            />
            {  error !== "" ? <Text style={ styles.error}> { error }</Text> : null  }
        </View>
    )
}

export default Search

const styles = StyleSheet.create({

  input: {
    flex: 1,
    padding: 10,
    color: colors.textSecondary,
    borderBottomColor: colors.border,
    borderBottomWidth: 1
  },

  error:{
    color: colors.accent,
    fontSize: 16,
    marginTop: 10
  }
 
});
