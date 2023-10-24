import { Text, View, Image, TouchableOpacity,ScrollView,Dimensions,ImageBackground} from 'react-native';
import React from 'react';
import twrnc from 'tailwind-react-native-classnames';
import { LinearGradient } from 'expo-linear-gradient';




const window = Dimensions.get('window');

const SalutationScreen = ({navigation}) => {

// handle the navigation of the screen 

const handleSkip=()=>{
  navigation.navigate("screenTwo");
}




  return (

    <LinearGradient  colors={['rgba(176, 163, 229, 0.8)', 'rgba(118, 97, 197, 0.8)', 'rgba(75, 63, 114, 0.8)']} style={twrnc`flex-1`}>
    <ImageBackground
    source={require("../../assets/salutationImage.png")} 
    style={twrnc`flex-1 mt-10 flex items-center justify-center`}
    resizeMode='contain'
    >
        {/* View with white background that slightly covers the bottom of the image */}
        <View style={twrnc`flex items-center justify-end mt-96 pt-20`}>
        <View style={twrnc`bg-white w-96 h-56 flex flex-col items-center justify-center rounded-2xl`}>
          {/* Your content inside the white background goes here */}
          <View style={twrnc`flex flex-col items-center  pt-3`}>
            <View style={twrnc`flex flex-col items-center `}>
              {/** this will contain the heading and the other texts */}
              <Text style={twrnc`font-semibold text-2xl text-center tracking-wide`}>Look Good, Feel Good</Text>
              <Text style={twrnc`font-normal text-sm text-center mt-2`}>Create your individual & unique style</Text>
              <Text style={twrnc`font-normal text-sm text-center`}>and look amazing everyday.</Text>
            </View>
            <View style={twrnc`flex flex-row mt-4 mx-5 relative`}>
  <TouchableOpacity style={twrnc`flex-1 bg-gray-100 p-4 rounded-md mr-1 flex justify-center items-center`}>
    <Text style={twrnc`text-black font-medium text-lg`}>Men</Text>
  </TouchableOpacity>
  <TouchableOpacity style={twrnc`flex-1 bg-purple-500 p-4 rounded-md ml-1 flex justify-center items-center`}>
    <Text style={twrnc`text-white font-medium text-lg`}>Women</Text>
  </TouchableOpacity>
</View>

            <View style={twrnc`flex flex-col mt-5`}>
              {/** this will have the skip text */}
              <TouchableOpacity style={twrnc`bg-transparent`} onPress={handleSkip}>
                <Text style={twrnc`text-gray-500 font-medium text-lg`}>Skip</Text>
              </TouchableOpacity>
            </View>
          </View>
          </View>
        </View>
</ImageBackground>
    </LinearGradient>
  );
}

export default SalutationScreen;
