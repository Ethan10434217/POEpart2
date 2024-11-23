import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';


const Stack = createNativeStackNavigator();
//This functions allows for navigation around the app
export default function App () {
  return(
    <NavigationContainer>
       <Stack.Navigator initialRouteName='ChefMenu'>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Menu" component={MenuScreen}/>
          <Stack.Screen name="ChefMenu" component={MenuAddingScreen}/>
          <Stack.Screen name="Search" component={FilterScreen}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
};

type RootStackParamList = {
  ChefMenu: undefined;
  MenuScreen: { inputTextStarter: string, inputTextMain: string, inputTextDessert: string};    
}

function MenuAddingScreen({navigation, route} : any){

  const handleNavigate = () => {
    // Navigate to the SecondScreen and pass the inputText as a parameter
    navigation.navigate('Menu', { inputTextStarter: inputTextStarter, inputTextMain : inputTextMain, inputTextDessert : inputTextDessert }); 

  }

  const [inputTextStarter, setInputTextStarter] = useState('');

  const [inputTextMain, setInputTextMain] = useState('');

  const [inputTextDessert, setInputTextDessert] = useState('');

  const [inputValue, setInputValue] = useState<string>('');

  // State to hold the array of input values
  const [startersArray, setInputArray] = useState<string[]>([]);

  // This allows values to be appended into the array
  const appendValueToArray = () => {
    if (inputValue.trim() !== '') {
      // Appends the value and will reset the field after
      setInputArray((prevArray) => [...prevArray, inputValue]);
      setInputValue(''); 
    }
  };


  return(
    <View> 
      <SafeAreaView>
        <ScrollView>

          <Text style={styles.welcomeText}>
            Welcome chef add your menu here.
          </Text>

          <View style={styles.menuPicture}> 
           <Image style={styles.ImageSize}
           source={require('./img/grilled-salmon-fillet.jpg')} />
          </View>

          <TextInput style={styles.InputBoxs}
            placeholder="Enter your starter course details here."
            onChangeText={setInputTextStarter}
            value={inputTextStarter}
          />

          <View style={styles.menuPicture}> 
           <Image style={styles.ImageSize}
           source={require('./img/juicy-grilled-steak.jpg')} />
         </View>      

          <TextInput style={styles.InputBoxs}
            
            placeholder="Enter your main course details here"
            onChangeText={setInputTextMain}
            value={inputTextMain}

           
          />

          <View style={styles.menuPicture}> 
            <Image style={styles.ImageSize}
            source={require('./img/decadent-chocolate-lava.jpg')} />
          </View>

          <TextInput style={styles.InputBoxs}
            
            placeholder="Enter your dessert course details here"
            onChangeText={setInputTextDessert}
            value={inputTextDessert}
           
          />
               
          <Button title = "Add Menu Items" 
            onPress={() => { 
            console.log("Changes to starter:", inputTextStarter,"Changes to main:", inputTextMain,"Changes to dessert:", inputTextDessert) 
           appendValueToArray
           handleNavigate
          }}/> 

          <Button title = 'Back to Menu Page' 
           onPress={() => {
           console.log("Went back to Menu page")
           navigation.navigate('Menu', { inputTextStarter: inputTextStarter , inputTextMain : inputTextMain, inputTextDessert : inputTextDessert })
          }}/>

          <Button title = 'Back to Home Page' 
           onPress={() => {
           console.log("Went back to Home Page")
           navigation.navigate('Home', { inputTextStarter: inputTextStarter , inputTextMain : inputTextMain, inputTextDessert : inputTextDessert })
          }}/>
          
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

function MenuScreen({navigation, route}: any){

const { inputTextStarter } = route.params;
const { inputTextMain } = route.params;
const { inputTextDessert } = route.params;

  return(
    <View>
    <SafeAreaView>
    <ScrollView>
      
      <Text style={styles.welcomeText}> 
        Welcome to Chef Ernestos Culinary House. This is the chefs personal choices for todays menu.
        Click on the images for more information!
      </Text>
 
      <View style={styles.menuPicture}> 
        <Image style={styles.ImageSize}
        source={require('./img/grilled-salmon-fillet.jpg')} />
      </View>

      
      <Text style={styles.welcomeText}>
        Entree of freshly caught river salmon over freshly boiled and then steamed Jasmin rice.
      </Text>
      
      <Text style={styles.welcomeText}>Your Changes: {inputTextStarter}</Text>


      <View style={styles.menuPicture}> 
        <Image style={styles.ImageSize}
        source={require('./img/juicy-grilled-steak.jpg')} />
      </View>

      <Text style={styles.welcomeText}>
        Main course of Fillet Mignon aged for 30 days, with crispy roasted potatoes and our beef Au Jus
      </Text>
             
      <Text style={styles.welcomeText}>Your Changes: {inputTextMain}</Text>

      <View style={styles.menuPicture}> 
        <Image style={styles.ImageSize}
        source={require('./img/decadent-chocolate-lava.jpg')} />
      </View>

      <Text style={styles.welcomeText}>
        Dessert course of chocolate lava cake with the finest Swiss chocolate and fresh strawberries picked by hand from the local farm.
      </Text>

      <Text style={styles.welcomeText}>Your Changes: {inputTextDessert}</Text>

       <Button title = 'Chefs Menu Page (Hidden to customers)' 
         onPress={() => { 
          console.log("Accessed Chefs Menu Page") 
         navigation.navigate('ChefMenu') 
       }}/> 

        <Button title = 'Back to Home Page' 
          onPress={() => { 
            console.log("Went back to Home Page") 
            navigation.navigate('Home', { inputTextStarter: inputTextStarter , inputTextMain : inputTextMain, inputTextDessert : inputTextDessert })
       }}/> 

       



      </ScrollView> 
     </SafeAreaView> 
    </View> 
  );
};


// function calculateStarterAverage(starterPrice: number[]): number {
//  if (starterPrice.length === 0) {
//    return 0;  // Return 0 if the array is empty
//  }

//  const sum = starterPrice.reduce((acc, num) => acc + num, 0);
//  return sum / starterPrice.length;
//}

 //const starterAveragePrices = () => {
 //const starterPrice: number[] = [50, 55, 70];
  
  // Calculate average
  //const average = calculateStarterAverage(starterPrice);

//}

function HomeScreen({navigation, route} : any){

  const starterAverage = (50 + 55 + 70) / 3

  const mainAverage = (70 + 100 + 150) / 3

  const dessertAverage = (40 + 55 + 100) / 3

  const handleNavigate = () => {
    // Navigate to the SecondScreen and pass the inputText as a parameter
    navigation.navigate('Menu', { inputTextStarter: inputTextStarter, inputTextMain : inputTextMain, inputTextDessert : inputTextDessert }); 

  }

 const { inputTextStarter } = route.params;

 const { inputTextMain } = route.params;

 const { inputTextDessert } = route.params;

  return (
    
    
     <View>
      <SafeAreaView>
      <ScrollView>
       <Text style={styles.welcomeText}> Welcome to Chef Ernesto's Culinary House. 
                                          Where only the finest food is served 
                                        and the freshest ingredients are picked. 
       </Text>
      
       <View style={styles.mainPicture}>
        <Image style={styles.ImageSize}
        source={require('./img/chef-plating-dish.jpg')} />
       </View>

       <Text style={styles.welcomeText}> Our dedicated chefs work hard to impress
                                        our guests. Scroll down to see the
                                        menu for tonight.                                     
       </Text>


       <View style={styles.mainPicture}>
        <Image style={styles.ImageSize}
        source={require('./img/diverse-chef-team.jpg')} />
       </View>

       <Text style={styles.welcomeText}> With our chefs ready to work hard, we want
                                        to show you tonight's menu. Tap on the button 
                                        below to preview our selected courses.
       </Text>     

       <Text 
          style={styles.welcomeText}>Ready to eat? Click here to see the menu.
        </Text>   

       <Button  title = "Menu"
         onPress={() => {
          navigation.navigate('Menu', { inputTextStarter: inputTextStarter , inputTextMain : inputTextMain, inputTextDessert : inputTextDessert })
          handleNavigate
        }}/>   
 
        <Text 
          style={styles.welcomeText}> Have budget concerns? Our courses average prices will be listed here!
        </Text>  
                     
       <Text style={styles.welcomeText}>Starters Average Price: R{starterAverage.toFixed(1)} </Text>
      

       <Text style={styles.welcomeText}>Mains Average Price: R{mainAverage.toFixed(1)}</Text>

       <Text style={styles.welcomeText}>Desserts Average Price: R{dessertAverage.toFixed(1)}</Text>


       <Text style={styles.welcomeText}>Search through our menu with the button below.</Text>

       <Button  title = "Search"
         onPress={() => {
          console.log("Accessed Search Page") 
          navigation.navigate('Search', { inputTextStarter: inputTextStarter , inputTextMain : inputTextMain, inputTextDessert : inputTextDessert })
        }}/>    



       </ScrollView>
     </SafeAreaView>
     </View>
    
   );
  
}

function FilterScreen({navigation, route}: any){

  const handleNavigate = () => {
    // Navigate to the SecondScreen and pass the inputText as a parameter
    navigation.navigate('Menu', { inputTextStarter: inputTextStarter, inputTextMain : inputTextMain, inputTextDessert : inputTextDessert }); 

  }

 const { inputTextStarter } = route.params;

 const { inputTextMain } = route.params;

 const { inputTextDessert } = route.params;

  
  const [startersText, setDisplayTextStarter] = useState('');
  
  const handleButtonPressStarter = () => {
    const starterOne = 'Beef Bites R50'

    const starterTwo = 'Caeser Salad R55'

    const starterThree = 'Grilled Salmon R70'

     // Assigning the Text to a variable allowing it to be displayed when the button is pressed
    setDisplayTextStarter(`Starter Option 1: ${starterOne}\nStarter Option 2: ${starterTwo}\nStarter Option 3: ${starterThree}`);
  };

  const [mainsText, setDisplayTextMains] = useState('');

  const handleButtonPressMains = () => {
    const mainOne = 'Chicken Wrap R70'

    const mainTwo = 'Surf And Turf R100'

    const mainThree = 'Grilled Steak R150'

    setDisplayTextMains(`Mains Option 1: ${mainOne}\nMains Option 2: ${mainTwo}\nMains Option 3: ${mainThree}`);
  };

  const [dessertsText, setDisplayTextDesserts] = useState('');

  const handleButtonPressDesserts = () => {
    const dessertOne = 'Assorted Milkshakes R40'

    const dessertTwo = 'Strawberry Ice Cream R55'

    const dessertThree = 'Chocolate Lava Cake R100'

    setDisplayTextDesserts(`Dessert Option 1: ${dessertOne}\nDessert Option 2: ${dessertTwo}\nDessert Option 3: ${dessertThree}`);
  };


 return(
  <View>
    <SafeAreaView>
      <ScrollView>

        <Text style={styles.welcomeText}>
              Welcome to the search page. Here you can filter by course and see what is on the 
              Menu and its pricing.
        </Text>

        <Button title = "Starters"
        //Displays the text when the button is pressed
          onPress={handleButtonPressStarter}/>
        <Text style={styles.welcomeText}>{startersText}</Text>

       <Button title = "Mains"
          onPress={handleButtonPressMains}/>
       <Text style={styles.welcomeText}>{mainsText}</Text>

       <Button title = "Desserts"
          onPress={handleButtonPressDesserts}/>
       <Text style={styles.welcomeText}>{dessertsText}</Text>

       <Button title = 'Back to Home Page' 
          onPress={() => { 
            console.log("Went back to Home Page") 
            navigation.navigate('Home', { inputTextStarter: inputTextStarter , inputTextMain : inputTextMain, inputTextDessert : inputTextDessert })
       }}/> 



      </ScrollView>
    </SafeAreaView>
  </View>
 )
}


const styles = StyleSheet.create({
  welcomeText: {
    paddingTop: 20,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal:12,
    paddingBottom: 20,
  },

  mainPicture:{
    paddingTop: 30,
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 75,

  },

  ImageSize:{
    width: 375,
    height: 160

  },

  menuPicture:{
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  InputBoxs:{
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: 4,
    borderWidth: 2, 
    padding: 5,
    marginBottom: 5,
    marginTop: 5,
  },
 
  item:{
    marginTop: 20,
    padding: 30,
    fontSize: 14,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',


  } 

});
