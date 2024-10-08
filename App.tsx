import { StatusBar } from 'expo-status-bar';
import { Button, SectionList, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App () {
  return(
    <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Menu" component={MenuScreen}/>
          <Stack.Screen name="ChefMenu" component={MenuAddingScreen}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
};

function MenuAddingScreen({navigation,}){

  const [Starter, setStarter] = useState('');
  const [StarterName, setStarterName] = useState('');
  const [StarterPrice, setStarterPrice] = useState('');

  const [Main, setMain] = useState('');
  const [MainName, setMainName] = useState('');
  const [MainPrice, setMainPrice] = useState('');

  const [Dessert,setDessert] = useState('');
  const [DessertName, setDessertName] = useState('');
  const [DessertPrice, setDessertPrice] = useState('');

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
            onChangeText={newText => setStarter(newText)}
          />

          <TextInput style={styles.InputBoxs}
            placeholder="Enter your starter course Name here."
            onChangeText={newText => setStarterName(newText)}
          />

          <TextInput style={styles.InputBoxs}
            placeholder="Enter your starter course price here."
            onChangeText={newText => setStarterPrice(newText)}
          />

          <View style={styles.menuPicture}> 
           <Image style={styles.ImageSize}
           source={require('./img/juicy-grilled-steak.jpg')} />
         </View>      

          <TextInput style={styles.InputBoxs}
            placeholder="Enter your main course details here"
            onChangeText={newText => setMain(newText)}
          />

          <TextInput style={styles.InputBoxs}
            placeholder="Enter your main course Name here."
            onChangeText={newText => setMainName(newText)}
          />

          <TextInput style={styles.InputBoxs}
            placeholder="Enter your starter course Price here."
            onChangeText={newText => setMainPrice(newText)}
          />

          <View style={styles.menuPicture}> 
            <Image style={styles.ImageSize}
            source={require('./img/decadent-chocolate-lava.jpg')} />
          </View>

          <TextInput style={styles.InputBoxs}
            placeholder="Enter your dessert course details here"
            onChangeText={newText => setDessert(newText)}
          />

          <TextInput style={styles.InputBoxs}
            placeholder="Enter your dessert course Name here"
            onChangeText={newText => setDessertName(newText)}
          />

          <TextInput style={styles.InputBoxs}
            placeholder="Enter your dessert course price here"
            onChangeText={newText => setDessertPrice(newText)}
          />

          <Button title = "Add Menu Items" 
            onPress={() => { 
           console.log(Starter, Main, Dessert, StarterName, StarterPrice, MainName, MainPrice, DessertName, DessertPrice) 
          }}/> 

          <Button title = 'Back to Menu Page' 
           onPress={() => {
           console.log("Went back to Menu page")
            navigation.navigate('Menu')
          }}/>

          <Button title = 'Back to Home Page' 
           onPress={() => {
           console.log("Went back to Home Page")
           navigation.navigate('Home')
          }}/>
          
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

function MenuScreen({navigation}){
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

      <View style={styles.menuPicture}> 
        <Image style={styles.ImageSize}
        source={require('./img/juicy-grilled-steak.jpg')} />
      </View>

      <Text style={styles.welcomeText}>
        Main course of Fillet Mignon aged for 30 days, with crispy roasted potatoes and our beef Au Jus
      </Text>

      <View style={styles.menuPicture}> 
        <Image style={styles.ImageSize}
        source={require('./img/decadent-chocolate-lava.jpg')} />
      </View>

      <Text style={styles.welcomeText}>
        Dessert course of chocolate lava cake with the finest Swiss chocolate and fresh strawberries picked by hand from the local farm.
      </Text>

       <Button title = 'Chefs Menu Page (Hidden to customers)' 
         onPress={() => { 
          console.log("Accessed Chefs Menu Page") 
         navigation.navigate('ChefMenu') 
       }}/> 

        <Button title = 'Back to Home Page' 
          onPress={() => { 
            console.log("Went back to Home Page") 
          navigation.navigate('Home') 
       }}/> 

      </ScrollView> 
     </SafeAreaView> 
    </View> 
  );
};

function HomeScreen({navigation}) 
{

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
                                        our guests. Tap on the image above to see the
                                        menu for tonight.                                     
       </Text>


       <View style={styles.mainPicture}>
        <Image style={styles.ImageSize}
        source={require('./img/diverse-chef-team.jpg')} />
       </View>

       <Text style={styles.welcomeText}> With our chefs ready to work hard, we want
                                        to show you tonight's menu. Tap on the 
                                        image above to see tonight's courses.
       </Text>      

       <Button  title = "Menu"
         onPress={() => {
          console.log("Accessed Menu Page")
          navigation.navigate('Menu')
        }}/>   

       <Text 
          style={styles.welcomeText}>Ready to eat? Click here to see the menu.
        </Text>    

        <View style={styles.menuPicture}> 
          <Image style={styles.ImageSize}
          source={require('./img/grilled-salmon-fillet.jpg')} />
       </View>

      </ScrollView>
     </SafeAreaView>
     </View>
    
  );
}



const styles = StyleSheet.create({
  welcomeText: {
    paddingTop: 20,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal:12
  },

  mainPicture:{
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center'

  },

  ImageSize:{
    width: 375,
    height: 160

  },

  menuPicture:{
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  InputBoxs:{
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }

 
});
