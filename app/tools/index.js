import { View } from 'react-native';
import { Avatar, Button, Card, Icon, Text, Divider } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import { ScrollView } from 'react-native';
import { useRouter } from 'expo-router';



export default function Page() {
  const router = useRouter();
  const theme = useTheme();
  const BookLeftContent = props => <Avatar.Icon {...props} icon="book"/>
  const NutritionLeftContent = props => <Avatar.Icon {...props} icon="apple" />

  return (
    <ScrollView style={{padding: 10}} bounces={true}>

<Card style={{marginTop: 10}}>
    <Card.Title title="Book Finder" subtitle="Get personolized book reccomendataions." left={BookLeftContent} titleVariant='titleLarge'/>
    <Card.Cover source={require("../../assets/book.jpg")} />
    <Card.Actions>
      <Button onPress={() => router.push("/learn")}>Explore</Button>
    </Card.Actions>
  </Card>
  
  <Card style={{marginTop: 10}}>
    <Card.Title title="Nutrition Snap" subtitle="Get nutrition info with just a picture." left={NutritionLeftContent} titleVariant='titleLarge'/>
    <Card.Cover source={require("../../assets/food.jpg")} />
    <Card.Actions>
    <Button onPress={() => router.push("/live")}>Explore</Button>
    </Card.Actions>
  </Card>

  </ScrollView>
  );
}